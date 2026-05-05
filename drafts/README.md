# drafts/

Half-finished writing that isn't ready to publish yet. Lives outside `src/` so Eleventy doesn't render it.

## What goes here

- Blog post drafts before they move to `src/learn/`, `src/guides/`, or `src/compare/`
- Notes, outlines, and reference material
- "I should write about this someday" ideas

## Conventions

Each draft starts with a small status header:

```yaml
---
status: draft | ready-to-edit | ready-to-publish
target: where it'll live when published (e.g. /learn/2000-buffers/)
length: rough word count target
notes: anything else worth remembering
---
```

When a draft is ready to publish, move the file into `src/` at the appropriate path, convert the front-matter to the site's standard format, and delete from `drafts/`.
