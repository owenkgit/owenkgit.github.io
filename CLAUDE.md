# mywebsite: project notes

Owen Kwon's personal site, https://owenkgit.github.io (repo `owenkgit/owenkgit.github.io`; `main` deploys).

## Build
- GitHub Pages **classic build** (`github-pages` gem, safe mode, no Actions workflow). Custom plugins never run; only whitelisted ones are used (`jekyll-seo-tag`, `jekyll-sitemap`).
- Local preview: `github-pages` v232 needs Ruby < 4.0. Run `bundle exec jekyll serve --safe`.

## Where things live
- Bio: `index.md`, two plain paragraphs at the same size (bold marks the key term).
- Content: `_data/profile.yml`, `news.yml`, `publications.yml`, `projects.yml`, `blog.yml` (Writing sections).
- Markup: `_layouts/base.html` (main and footer; no header bar) and `_layouts/home.html` (intro: name, email and bio left, round photo right → Latest writing → News → Publications → Writing → Projects). Each section is one `_includes/*.html` rendering a `.row`: its name in the left column, content on the right. `links.html` renders "Paper · Website · Code".
- Icons: `favicon.ico` (16/32/48) and `static/icons/apple-touch-icon.png`, an "OK" monogram in the accent red; `static/media/og.jpg` is the link-preview image in the same style.
- Styles, scripts, fonts, media: `static/`. Plain CSS; color tokens at the top of `static/css/site.css`.

## Design rules
- Design "F", chosen by the owner from six researched options: B's introduction (classic academic: text left, round photo right) above C's margin-label sections (after Toru Lin's site and CV layouts). Avoid the generic AI-template look (cream paper, serif headlines, uppercase mono labels).
- Color: light only, by the owner's choice (no dark mode or theme toggle): white page, #161616 text, deep red #a6192e (a nod to CMU) for section names and links. All text at least 4.5:1 contrast.
- 900px page; 150px section-name column. Body text 17px, minimum 14.5px for small gray lines. On phones (<720px) section names sit above their content and the photo moves above the name.
- Fonts: self-hosted IBM Plex Sans subsets made with fontTools from Google Fonts' files: `plex.woff2` (Latin, weight 400–600), `plex-italic.woff2` (400, venue lines) and `plex-greek.woff2` (Greek letters such as π, fetched only when used). To add characters, re-run `fontTools.varLib.instancer` and `fontTools.subset` with a wider `--unicodes` list.

## Conventions
- Publications: `featured: true` gets large media on the right; the rest go under "Earlier work" with a thumbnail. `"…"` marks omitted authors; `profile.name` is bolded automatically.
- Projects each have a 4:3 thumbnail (`image` in `projects.yml`, 480×360 WebP). Keep them consistent: crop photos and screenshots to the legible part; fit white-background diagrams whole on white.
- Media: compress before adding (H.264 video around 500 KB or less plus a JPEG poster; WebP thumbnails 480px wide or less). Kebab-case filenames, no spaces.
- Link files in `static/` through `_includes/asset.html`, which appends `?v=<build time>`. GitHub Pages lets browsers reuse a saved file for 10 minutes, so without it a file replaced under the same name shows the old version after a deploy. Fonts aren't versioned (the CSS references them directly): give a changed font a new filename.
- `images/` and `ref/` are the owner's local files; they're excluded from the build. Don't commit them.
