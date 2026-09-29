# Gabe Alexander — portfolio redesign concept

A redesign concept built for a filmmaker/editor: the work is the hero, not a résumé.
Built with React + Vite. Currently uses **placeholder frames** (colored gradients +
waveform bars) everywhere a real video or photo would go — no real footage was used.

## Run it

```
npm install
npm run dev       # local dev server
npm run build      # production build, outputs to dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Add Gabe's real content

Everything content-related lives in two files — no other file needs to change
for day-to-day updates:

- **`src/data/site.js`** — name, email, socials, hero loop, showreel, about text/portrait.
- **`src/data/projects.js`** — one object per project (title, role, description,
  video/image paths). Copy an existing entry to add a project, delete one to
  remove it.

For each project you can set:
- `media.src` / `media.poster` — a short looping preview clip + fallback still
  (used on the grid card and at the top of the project page before playback).
- `embed` — a Vimeo/YouTube **player** URL, if the full film is hosted there, OR
- `film` — a direct video file, if hosting it yourself.
- `stills`, `credits`, `result` — optional; only shown when filled in.

Until real media is added, `site.showPlaceholderLabels = true` keeps a small
"Placeholder" tag on empty frames so nothing is mistaken for a finished page.
Set it to `false` once everything is real.

## Pages

Plain hash routes, so it works on any static host with no server config:
`#/` home, `#/work`, `#/about`, `#/contact` (scrolls to that section),
`#/work/<project-slug>` (a project's page).

## Notes for whoever picks this up next

- Design tokens (colors, type, spacing) are all at the top of `src/styles.css`,
  with the reasoning behind the palette/type/layout choices in the comment block.
- `MediaFrame` is the single place video/image/placeholder logic lives — videos
  are not requested from the network until their frame is near the viewport.
- Reduced-motion and keyboard-focus states are handled globally, not per component.
