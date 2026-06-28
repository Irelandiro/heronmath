# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing website for **Monty Math** — a mobile app that makes math tangible (drag equations, spin the unit circle, drag the decimal point in scientific notation). The app's mascot, Monty, is a cat; the brand is playful and built around an orange + lavender palette. The site is plain hand-written HTML/CSS/vanilla JS with no build step, no framework, and no package manager.

> The app was previously named "Heron Math". The site has been rebranded to Monty Math and the **domain has migrated to `montymath.com`** (see [CNAME](CNAME)), but the **repo and social/contact handles are still the old `heron*` slugs** (github `Irelandiro/heronmath`, `heronmathlab@gmail.com`, buymeacoffee `heronmaths`, linkedin `heronmath`, instagram `heronmathlab`). These are intentionally unchanged until the owner migrates them — don't "fix" them to `monty*` without new working URLs.

## Deployment

Hosted on **GitHub Pages** at the custom domain `montymath.com` (set via [CNAME](CNAME)). Pushing to `main` on `origin` (github.com/Irelandiro/heronmath) publishes the site — there is no build or CI step. To preview locally, open the HTML files directly or serve the folder, e.g. `python3 -m http.server`.

There are no tests, linters, or build commands.

## Structure & conventions

Three pages share a hand-copied structure: [index.html](index.html) (hero, features, video, "Meet Monty" section, donate banner), [about.html](about.html), and [privacy.html](privacy.html). The `<nav>` and `<footer>` markup are **duplicated verbatim** in each page — when changing nav links, footer links, or social icons, edit all three files to keep them in sync. The nav's `active` class marks the current page.

The **Monty mascot lives in one canonical file, [favicon.svg](favicon.svg)** (orange rounded-square cat face with lavender eyes). Every page references it as an image — `<img src="favicon.svg" class="logo-mark">` in the nav and footer, and `<img src="favicon.svg" class="monty-hero">` inside the hero's `.monty-card` — so editing favicon.svg updates the mascot everywhere at once (no inline `<svg>` copies to keep in sync; the only `<svg>` blocks in the HTML are the social/Apple/email icons). The separate bitmap copies (`favicon.png` / `apple-touch-icon`) still point at the old icon and should be replaced.

- [css/style.css](css/style.css) — single global stylesheet. The design system lives in `:root` CSS custom properties: `--orange: #ff7a00` (primary, matches the app icon) plus a lavender `--purple` family (from the mascot's eyes) used as the secondary accent, on warm-white/cream/lavender backgrounds. Reuse these variables rather than hardcoding values. Fonts are **Fredoka** (rounded, playful — headings/UI) and **Nunito** (body), loaded from Google Fonts.
- [js/main.js](js/main.js) — the only script, shared by all pages: mobile nav toggle (`.nav-toggle` ↔ `.nav-links.open`) and a scroll listener that tints the nav border. Keep it dependency-free vanilla JS.

External links wired into the site (all still on the old `heron*` handles — see the rebrand note above): App Store listing, Buy Me a Coffee (`heronmaths`), LinkedIn/Instagram (`heronmath`/`heronmathlab`), and contact email `heronmathlab@gmail.com`. The Google Play button is intentionally disabled ("Coming soon"). Screenshots (`screenshot1-3.png`, still the same app UI) and the embedded YouTube demo are referenced directly from the HTML.
