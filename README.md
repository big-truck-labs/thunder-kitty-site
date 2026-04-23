# Thunder Kitty Site

Marketing site for [Thunder Kitty](https://www.thunderkitty.app) — local-first meeting transcription for macOS. Built with [Eleventy](https://www.11ty.dev/) and deployed to [Netlify](https://www.netlify.com/).

## Development

```bash
npm install
npm run dev
```

Starts a dev server at `http://localhost:8080` with live reload.

## Build

```bash
npm run build
```

Outputs to `public/`.

## Project Structure

```
thunder-kitty-site/
├── .eleventy.js              # Eleventy config
├── netlify.toml              # Netlify build settings
├── package.json
└── src/
    ├── _data/
    │   ├── client.json       # Site identity (name, domain, contact)
    │   └── site.json         # Sitewide defaults (OG image, description)
    ├── _includes/
    │   ├── components/
    │   │   ├── header.html
    │   │   └── footer.html
    │   └── layouts/
    │       └── base.html     # Base HTML layout
    ├── css/main.css          # Global styles
    ├── favicons/
    ├── fonts/
    ├── images/
    ├── js/
    ├── index.html            # Home
    ├── privacy.html          # /privacy
    ├── terms.html            # /terms
    ├── manifesto.html        # /manifesto
    ├── changelog.html        # /changelog
    ├── robots.html           # /robots.txt
    └── sitemap.html          # /sitemap.xml
```

## Deployment

Deployed to Netlify via `netlify.toml`. Every push to `main` triggers a build.

Custom domain: `www.thunderkitty.app`
