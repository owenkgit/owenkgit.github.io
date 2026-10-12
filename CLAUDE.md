# mywebsite: project notes

Owen Kwon's personal site, https://owenkgit.github.io (repo `owenkgit/owenkgit.github.io`; `main` deploys).

## Build
- GitHub Pages **classic build** (`github-pages` gem, safe mode, no Actions workflow). Custom plugins never run; only whitelisted ones are used (`jekyll-seo-tag`, `jekyll-sitemap`).
- Local preview: `github-pages` v232 needs Ruby < 4.0. Run `bundle exec jekyll serve --safe`.

## Where things live
- Bio: `index.md` (the first paragraph carries `{: .lead}`).
- Content: `_data/profile.yml`, `news.yml`, `publications.yml`, `projects.yml`, `blog.yml` (Writing sections).
- Markup: `_layouts/base.html` (sticky header bar, main, footer) and `_layouts/home.html` (intro: photo beside name, bio and contact → Latest writing → News → Publications → Writing → Projects), with one `_includes/*.html` per section. `links.html` renders "PAPER · WEBSITE · CODE"; `icon.html` holds the inline SVG icons.
- Icons: `favicon.ico` (16/32/48) and `static/icons/apple-touch-icon.png`, an "OK" monogram.
- Styles, scripts, fonts, media: `static/`. Plain CSS; light/dark color tokens at the top of `static/css/site.css`.

## Design rules
- The design combines the owner's picks from four explored directions: Research Lab's intro and writing list, Story's latest-writing cards, Editorial's news and projects, and the earlier publications layout.
- Type: headlines in serif (Newsreader), text in sans (Inter), labels, dates and links in uppercase mono (JetBrains Mono).
- Color: light is warm paper (#f8f6f1) with an oxblood accent; dark is near-black (#0b0c0e) with amber. All text at least 4.5:1 contrast in both themes.
- 1120px page; prose and summaries capped at 42rem (~75 characters per line). Body text 17px (16px on phones), minimum 13px.
- Fonts are self-hosted subsets made with fontTools: Inter 4.1 (400–700 + optical size, italic only for venue lines, `cv05` l-with-tail on), Newsreader (400–500 + optical size), JetBrains Mono (Basic Latin). To add characters, re-run `fontTools.varLib.instancer` and `fontTools.subset` with a wider `--unicodes` list.

## Conventions
- Publications: `featured: true` gets large media on the right; the rest go under "Earlier work" with a thumbnail. `"…"` marks omitted authors; `profile.name` is bolded automatically.
- Projects are text only (no thumbnails), so imagery stays reserved for publications.
- Media: compress before adding (H.264 video around 500 KB or less plus a JPEG poster; WebP thumbnails 480px wide or less). Kebab-case filenames, no spaces.
- `images/` and `ref/` are the owner's local files; they're excluded from the build. Don't commit them.
