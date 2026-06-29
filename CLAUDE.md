# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing website for **Monty Math** — a mobile app that makes math tangible (drag equations, spin the unit circle, drag the decimal point in scientific notation). The app's mascot, Monty, is a cat; the brand is playful and built around an orange + lavender palette. The site is plain hand-written HTML/CSS/vanilla JS with no build step, no framework, and no package manager. It also hosts a browser-playable build of the app itself: a **Unity WebGL export** lives in [unity/](unity/) and is embedded by [play.html](play.html).

> The app was previously named "Heron Math". The site has been rebranded to Monty Math and the **domain has migrated to `montymath.com`** (see [CNAME](CNAME)), but the **repo and social/contact handles are still the old `heron*` slugs** (github `Irelandiro/heronmath`, `heronmathlab@gmail.com`, buymeacoffee `heronmaths`, linkedin `heronmath`, instagram `heronmathlab`). These are intentionally unchanged until the owner migrates them — don't "fix" them to `monty*` without new working URLs.

## Deployment

Hosted on **GitHub Pages** at the custom domain `montymath.com` (set via [CNAME](CNAME)). Pushing to `main` on `origin` (github.com/Irelandiro/heronmath) publishes the site — there is no build or CI step. To preview locally, **serve the folder** (`python3 -m http.server`) rather than opening files via `file://` — the Unity WebGL embed and same-origin iframe sizing in [play.html](play.html) only work over HTTP.

There are no tests, linters, or build commands. The empty [.nojekyll](.nojekyll) file at the repo root is load-bearing: it disables Jekyll so Pages serves every Unity build file (e.g. paths/files Jekyll would otherwise skip) verbatim — don't delete it.

## Structure & conventions

Four pages share a hand-copied structure: [index.html](index.html) (hero, features, video, "Meet Monty" section, donate banner), [play.html](play.html) (the embedded web app), [about.html](about.html), and [privacy.html](privacy.html). The `<nav>` and `<footer>` markup are **duplicated verbatim** in every page — when changing nav links, footer links, or social icons, edit all four files to keep them in sync. The nav's `active` class marks the current page.

The **Monty mascot lives in one canonical file, [favicon.svg](favicon.svg)** (orange rounded-square cat face with lavender eyes). Every page references it as an image — `<img src="favicon.svg" class="logo-mark">` in the nav and footer, and `<img src="favicon.svg" class="monty-hero">` inside the hero's `.monty-card` — so editing favicon.svg updates the mascot everywhere at once (no inline `<svg>` copies to keep in sync; the only `<svg>` blocks in the HTML are the social/Apple/email icons). The separate bitmap copies (`favicon.png` / `apple-touch-icon`) still point at the old icon and should be replaced.

- [css/style.css](css/style.css) — single global stylesheet. The design system lives in `:root` CSS custom properties: `--orange: #ff7a00` (primary, matches the app icon) plus a lavender `--purple` family (from the mascot's eyes) used as the secondary accent, on warm-white/cream/lavender backgrounds. Reuse these variables rather than hardcoding values. Fonts are **Fredoka** (rounded, playful — headings/UI) and **Nunito** (body), loaded from Google Fonts.
- [js/main.js](js/main.js) — the only script, shared by all pages: mobile nav toggle (`.nav-toggle` ↔ `.nav-links.open`), a scroll listener that tints the nav border, and (play page only) the fullscreen button plus an `onload` hook that injects sizing CSS into the same-origin Unity iframe so the `#unity-canvas` fills its frame regardless of how the build was exported. Keep it dependency-free vanilla JS.

## Unity WebGL web app (`play.html` + `unity/`)

[play.html](play.html) is a styled wrapper that embeds the Unity build via `<iframe src="unity/index.html">`. To publish a new web version, **replace the contents of [unity/](unity/)** wholesale with fresh Unity WebGL build output (`index.html`, `Build/`, `TemplateData/`, optional `StreamingAssets/`) — don't hand-edit the generated files, and leave `play.html` alone. See [unity/README.md](unity/README.md) for the full procedure. The one build setting that matters: because Pages can't set HTTP headers, use **Compression Format: Disabled**, or **Gzip with Decompression Fallback enabled** — anything else fails to load on Pages. The `Build/` payload is large (~29 MB) and committed directly to the repo.

Analytics are **GoatCounter** (privacy-friendly, cookie-free, no personal data), added as a single `<script data-goatcounter="https://montymath.goatcounter.com/count" async ...>` snippet before `</body>` — duplicated in all four pages like the nav/footer, so keep it in sync. The site code is `montymath` (i.e. the `montymath.goatcounter.com` dashboard). [privacy.html](privacy.html) documents this in its "Website Analytics" section; the app itself still collects no data, so keep the app-vs-website distinction intact when editing the policy.

External links wired into the site (all still on the old `heron*` handles — see the rebrand note above): App Store listing, Buy Me a Coffee (`heronmaths`), LinkedIn/Instagram (`heronmath`/`heronmathlab`), and contact email `heronmathlab@gmail.com`. The Google Play button is intentionally disabled ("Coming soon"). Screenshots (`screenshot1-3.png`, still the same app UI) and the embedded YouTube demo are referenced directly from the HTML.
