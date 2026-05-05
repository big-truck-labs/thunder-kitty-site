---
status: ready-to-edit
target: /learn/2000-buffers-of-nothing/
length: ~1250 words
notes: |
  Refined draft, May 3, 2026. Structural rewrite is done — title, intro, lessons format, and resolution have all been tightened.
  Don't publish until ~2-3 weeks post-launch. Best as a "second wave" piece after the initial public launch.
  Final read before publish: check that nothing technical has changed in the codebase since this was written, verify the Info.plist key story still applies, and consider whether any new audio-capture edge cases have come up that would strengthen the lessons section.
  Title: "2,000 Buffers of Nothing"
---

# 2,000 Buffers of Nothing

Two days after launching Thunder Kitty, I tested a scenario I should have tested earlier: picking up a phone call on my MacBook via iPhone Continuity. My voice came through fine. The other person's audio? Completely missing from the transcript. Silent.

The fix took me down a rabbit hole through three Apple frameworks, four wrong hypotheses, and one undocumented Info.plist key. This is what I learned about macOS audio capture that I couldn't find written down anywhere.

## ScreenCaptureKit can't see phone calls

When I built system audio capture for Thunder Kitty, I reached for ScreenCaptureKit. It's Apple's modern API for capturing screen and audio. You create an SCStream, set `capturesAudio = true`, and audio buffers show up in a delegate callback. Clean, well-documented, works great.

For Zoom, Google Meet, Teams, anything running in a browser or windowed app — ScreenCaptureKit captures the audio perfectly. It operates at the application/compositor layer.

The problem is that word: _applications_.

When you pick up an iPhone call on your Mac via Continuity, the call audio doesn't come from an application with a window. It comes from `callservicesd` — a background system daemon. FaceTime audio routes through `avconferenced`. Neither has any window presence. They're invisible to ScreenCaptureKit.

This isn't a permissions issue. It's not a configuration issue. The API operates at the wrong layer of the stack. ScreenCaptureKit is a net that only works on the surface; these daemons are swimming underneath.

The fix is to drop down a layer.

## Core Audio taps: the right layer

`CATapDescription` is a Core Audio API that captures audio at the HAL — the Hardware Abstraction Layer. The HAL sits between your audio hardware and everything above it. Every sound that hits your output device passes through it, regardless of which process produced it. Browser, Zoom, `callservicesd`, whatever. If the bytes are flowing, the tap can see them.

The setup is more involved than ScreenCaptureKit:

1. Create a process tap with `CATapDescription(monoGlobalTapButExcludeProcesses:)`, excluding your own process so you don't create a feedback loop.
2. Wrap it in a private aggregate device via `AudioHardwareCreateAggregateDevice`.
3. Attach an IOProc callback with `AudioDeviceCreateIOProcIDWithBlock`.
4. Start the device with `AudioDeviceStart`.

The aggregate device is the non-obvious piece. A process tap alone doesn't deliver audio buffers — it has to live inside an aggregate device that combines the tap with an output device, and you read from the aggregate's input stream. Most of the documentation around this lives in WWDC sessions and a few sample projects.

I wired it all up, built the app, started a recording, played a YouTube video.

Silence.

## 2,000 buffers of nothing

The IOProc was running. My logs showed the callback firing hundreds of times per second, delivering audio buffers on schedule. But every buffer was zeros. Two thousand buffers of mathematically perfect silence.

My first hypothesis was Bluetooth. When AirPods connect, macOS negotiates between two profiles: A2DP (high-quality stereo, output only) and HFP (phone-call quality, bidirectional). Opening the microphone forces a switch from A2DP to HFP, which can change the default output device mid-setup. Maybe the aggregate device was being created with a stale device reference.

I rewrote the setup to host the aggregate on the built-in MacBook speakers — always present, always stable, doesn't change when headphones connect.

Still silence.

I tested with wired headphones. No Bluetooth in the chain. Same result. The Bluetooth hypothesis was dead.

## The muted speaker test

Here's where I got lucky.

Thunder Kitty supports two recording modes: "unified" (one stream where the mic picks up speakers and your voice together) and "dual stream" (separate channels for mic and system audio, used with headphones). Unified mode had been "working" — transcripts showed both sides of conversations. Dual stream was always silent.

On a hunch, I ran unified mode with the speakers muted. If the Core Audio tap was actually delivering system audio, transcription should still work — the tap captures the audio stream before it reaches the speakers, so muting the output shouldn't matter.

Two transcript lines. Both my voice. No system audio at all.

Unified mode had never actually worked. The microphone had been picking up YouTube playing through the speakers — acoustic bleed dressed up as success. The Core Audio tap had been delivering silence the whole time, in every mode, and I'd been fooling myself for days.

## The Info.plist key Xcode silently ignores

macOS gates sensitive APIs through TCC (Transparency, Consent, and Control). For system audio capture, the relevant service is `kTCCServiceAudioCapture`, and it requires `NSAudioCaptureUsageDescription` in your Info.plist — the string shown in the permission dialog.

I had added this key. Or so I thought.

Xcode normally lets you set `INFOPLIST_KEY_*` build settings, and it injects the corresponding key into your compiled Info.plist at build time. This works for `NSMicrophoneUsageDescription`, `NSSpeechRecognitionUsageDescription`, and most other privacy keys. So I'd set `INFOPLIST_KEY_NSAudioCaptureUsageDescription` in my build settings and moved on.

It doesn't work for `NSAudioCaptureUsageDescription`. Xcode silently ignores it. The key never makes it into the compiled plist.

I verified by running `plutil -p` on the app bundle. Microphone description: present. Speech recognition: present. Audio capture: gone.

The fix was adding it directly to the Info.plist file:

```xml
<key>NSAudioCaptureUsageDescription</key>
<string>Thunder Kitty captures system audio to transcribe the other side of your calls.</string>
```

## The silent denial

Here's the truly nasty part: when `NSAudioCaptureUsageDescription` is missing, TCC denies access silently.

`AudioHardwareCreateProcessTap` returns `noErr`. `AudioHardwareCreateAggregateDevice` returns `noErr`. `AudioDeviceCreateIOProcIDWithBlock` returns `noErr`. `AudioDeviceStart` returns `noErr`. Your IOProc callback fires on schedule. Everything looks perfect.

But every buffer is zeros.

There's no error code. No log message. No indication anything is wrong. The system hands you silence and lets you figure it out. If you're not specifically checking whether audio data is non-zero, you'll never know.

A single error from `AudioHardwareCreateProcessTap` saying "TCC denied" would have saved me hours. I understand the security rationale — you don't want to make it easy for malware to detect denial — but it makes legitimate development genuinely painful.

## And one more gotcha: triggering the prompt

Even with the Info.plist key in place, I had one more problem. I wanted Thunder Kitty's onboarding to trigger the permission prompt before the first recording, so users could grant access without confusion.

My first attempt: create a process tap and immediately destroy it. The permission gate is on tap creation, right? Surely calling `AudioHardwareCreateProcessTap` will trigger the system prompt.

Nope. The tap creates "successfully" (returns `noErr`, as we've established it does regardless). No prompt appears.

It turns out `AudioDeviceStart` is the call that triggers the TCC prompt. Not creating the tap. Not creating the aggregate device. Not creating the IOProc. You have to actually start IO on a tap-backed aggregate device before macOS asks the user.

There's no `requestAuthorization`-style API for audio capture, the way there is for the microphone or speech recognition. You have to spin up the entire pipeline — tap, aggregate device, IOProc, start IO — wait for the system prompt, then tear it all down. Thunder Kitty's onboarding does exactly this: builds a throwaway audio pipeline, holds it for a beat, destroys it. It's the only way.

## Working

After fixing the Info.plist key and rebuilding, I started a test recording and picked up a phone call on my Mac. My voice. Then the other person's voice. Then both of us, transcribed line by line in a single conversation.

The permission prompt now reads "System Audio Recording" instead of "Screen & System Audio Recording." It's a smaller ask, a less alarming privacy indicator, and it actually describes what the app does.

## Six things I'd tell other Mac developers

**Use Core Audio taps, not ScreenCaptureKit, if you need to hear everything.** SCK is great for capturing specific applications. But if your users might be on phone calls, FaceTime, or anything that runs through a background daemon, SCK will miss it. Don't ship a transcription product that misses phone calls.

**Add `NSAudioCaptureUsageDescription` directly to your Info.plist file.** Do not rely on `INFOPLIST_KEY_*` build settings for this key. Xcode ignores them silently. Verify with `plutil -p` on your compiled app bundle to confirm the key is actually there.

**TCC enforcement is silent.** Every Core Audio API will return `noErr` even when permission is denied. The only way to know is that your buffers contain zeros. Build a non-zero check into your audio pipeline early, before you spend a day debugging.

**`AudioDeviceStart` is what triggers the permission prompt.** Not creating the tap, not creating the aggregate device. If you want to prompt during onboarding, you need to build and start the full pipeline, then tear it down once macOS has shown the dialog.

**Start your mic engine before creating the aggregate device.** If your users have AirPods, opening the mic first forces the HFP profile negotiation. If the aggregate device starts first, AirPods stay in A2DP, and your mic channel fails silently. (Another silent failure. They're a theme.)

**Host the aggregate device on the built-in output device, not the default output device.** The default device can change when headphones connect or Bluetooth profiles switch. Built-in speakers are always there, always stable. Pin to them and your aggregate survives device changes mid-recording.

None of this is documented in one place. I hope this post saves someone the days I spent on it.

---

_Thunder Kitty is a meeting recorder for macOS. It transcribes your calls on-device, generates AI summaries, and stores everything as local Markdown files. [thunderkitty.app](https://www.thunderkitty.app)_
