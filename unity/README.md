# Monty Math — Unity WebGL build

`play.html` embeds whatever lives in this folder via an `<iframe src="unity/index.html">`.

To publish the web version, replace **everything in this folder** with your Unity WebGL
build output. After a build, Unity produces a folder containing:

```
index.html
Build/
TemplateData/
StreamingAssets/   (only if your project uses streaming assets)
```

Copy those into this `unity/` folder so the structure becomes `unity/index.html`,
`unity/Build/`, etc. (overwrite the placeholder `index.html`). Don't touch the site's
own `play.html` — it stays as the styled wrapper page.

## Unity build settings that matter for GitHub Pages

GitHub Pages can't set custom HTTP headers, so the default compressed build will fail to
load. Pick ONE of these in **Player Settings → Publishing Settings**:

- **Compression Format: Disabled** — simplest, always works, larger files. OR
- **Compression Format: Gzip** + tick **Decompression Fallback** — smaller files, still
  works on Pages because the loader decompresses in-browser. (Recommended.)

Avoid plain Brotli/Gzip *without* the decompression fallback on GitHub Pages.

Also keep `.nojekyll` in the repo root (already there) so Pages serves every build file
verbatim.
