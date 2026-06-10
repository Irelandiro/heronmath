# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing website for **Monty Math** — a mobile app that makes math tangible (drag equations, spin the unit circle, drag the decimal point in scientific notation). The app's mascot, Monty, is a cat; the brand is playful and built around an orange + lavender palette. The site is plain hand-written HTML/CSS/vanilla JS with no build step, no framework, and no package manager.

> The app was previously named "Heron Math". The site has been rebranded to Monty Math, but the **domain, repo, and social/contact handles are still the old `heron*` slugs** (`heronmath.com`, github `Irelandiro/heronmath`, `heronmathlab@gmail.com`, buymeacoffee `heronmaths`, linkedin/instagram `heronmath`/`heronmathlab`). These are intentionally unchanged until the owner migrates them — don't "fix" them to `monty*` without new working URLs.

## Deployment

Hosted on **GitHub Pages** at the custom domain `heronmath.com` (set via [CNAME](CNAME); will become `montymath.com` later). Pushing to `main` on `origin` (github.com/Irelandiro/heronmath) publishes the site — there is no build or CI step. To preview locally, open the HTML files directly or serve the folder, e.g. `python3 -m http.server`.

There are no tests, linters, or build commands.

## Structure & conventions

Three pages share a hand-copied structure: [index.html](index.html) (hero, features, video, "Meet Monty" section, donate banner), [about.html](about.html), and [privacy.html](privacy.html). The `<nav>` and `<footer>` markup are **duplicated verbatim** in each page — when changing nav links, footer links, or social icons, edit all three files to keep them in sync. The nav's `active` class marks the current page.

The **Monty mascot is an inline SVG** (orange rounded-square cat face with lavender eyes), not an image file — the same `<svg ... class="...monty-face">` block is pasted into the nav, footer, hero, and page heroes of every page, and also lives standalone as [favicon.svg](favicon.svg). If you change the mascot art, update every copy (favicon.svg is the canonical source). The new logo PNG isn't in the repo yet; `favicon.png` / `apple-touch-icon` still point at the old icon and should be replaced.

- [css/style.css](css/style.css) — single global stylesheet. The design system lives in `:root` CSS custom properties: `--orange: #ff7a00` (primary, matches the app icon) plus a lavender `--purple` family (from the mascot's eyes) used as the secondary accent, on warm-white/cream/lavender backgrounds. Reuse these variables rather than hardcoding values. Fonts are **Fredoka** (rounded, playful — headings/UI) and **Nunito** (body), loaded from Google Fonts.
- [js/main.js](js/main.js) — the only script, shared by all pages: mobile nav toggle (`.nav-toggle` ↔ `.nav-links.open`) and a scroll listener that tints the nav border. Keep it dependency-free vanilla JS.

External links wired into the site (all still on the old `heron*` handles — see the rebrand note above): App Store listing, Buy Me a Coffee (`heronmaths`), LinkedIn/Instagram (`heronmath`/`heronmathlab`), and contact email `heronmathlab@gmail.com`. The Google Play button is intentionally disabled ("Coming soon"). Screenshots (`screenshot1-3.png`, still the same app UI) and the embedded YouTube demo are referenced directly from the HTML.
