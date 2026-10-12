# mywebsite: project notes

Owen Kwon's personal site, https://owenkgit.github.io (repo `owenkgit/owenkgit.github.io`; `main` deploys).

## Build
- GitHub Pages **classic build** (`github-pages` gem, safe mode, no Actions workflow). Custom plugins never run; only whitelisted ones are used (`jekyll-seo-tag`, `jekyll-sitemap`).
- Local preview: `github-pages` v232 needs Ruby < 4.0. Run `bundle exec jekyll serve --safe`.

## Where things live
- Bio: `index.md`, two plain paragraphs at the same size (bold marks the key term).
- Content: `_data/profile.yml`, `news.yml`, `publications.yml`, `projects.yml`, `blog.yml` (Writing sections).
- Markup: `_layouts/base.html` (sticky header bar, main, footer) and `_layouts/home.html` (intro: photo beside name, email and bio → Latest writing → News → Publications → Writing → Projects), with one `_includes/*.html` per section. `links.html` renders "PAPER · WEBSITE · CODE"; `icon.html` holds the inline SVG icons.
- Icons: `favicon.ico` (16/32/48) and `static/icons/apple-touch-icon.png`, an "OK" monogram.
- Styles, scripts, fonts, media: `static/`. Plain CSS; light/dark color tokens at the top of `static/css/site.css`.

## Design rules
- Layout combines the owner's picks from four explored directions: Research Lab's intro and writing list, Story's latest-writing cards, Editorial's news and two-column projects, and the earlier publications layout.
- "Classic" look, chosen to avoid the generic AI-template style (cream paper, serif headlines, uppercase mono labels): white page, one humanist sans (Source Sans 3) everywhere, classic blue underlined links, normal-case gray labels.
- Color: light #ffffff with #1a0dab links; dark #141414 with #8ab4f8. All text at least 4.5:1 contrast in both themes.
- 1120px page; prose and summaries capped at 42rem (~75 characters per line). Body text 18px (17px on phones), minimum 15px for labels.
- Fonts: self-hosted Source Sans 3 subsets made with fontTools (roman 400–700, italic 400–600 for venue lines). To add characters, re-run `fontTools.varLib.instancer` and `fontTools.subset` with a wider `--unicodes` list.

## Conventions
- Publications: `featured: true` gets large media on the right; the rest go under "Earlier work" with a thumbnail. `"…"` marks omitted authors; `profile.name` is bolded automatically.
- Projects each have a 4:3 thumbnail (`image` in `projects.yml`, 480×360 WebP). Keep them consistent: crop photos and screenshots to the legible part; fit white-background diagrams whole on white.
- Media: compress before adding (H.264 video around 500 KB or less plus a JPEG poster; WebP thumbnails 480px wide or less). Kebab-case filenames, no spaces.
- Link files in `static/` through `_includes/asset.html`, which appends `?v=<build time>`. GitHub Pages lets browsers reuse a saved file for 10 minutes, so without it a file replaced under the same name shows the old version after a deploy. Fonts aren't versioned (the CSS references them directly): give a changed font a new filename.
- `images/` and `ref/` are the owner's local files; they're excluded from the build. Don't commit them.
