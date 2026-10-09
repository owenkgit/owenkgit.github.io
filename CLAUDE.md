# mywebsite: project notes

Owen Kwon's personal site, https://owenkgit.github.io (repo `owenkgit/owenkgit.github.io`; `main` deploys).

## Build
- GitHub Pages **classic build** (`github-pages` gem, safe mode, no Actions workflow). Custom plugins never run; only whitelisted ones are used (`jekyll-seo-tag`, `jekyll-sitemap`).
- Local preview: `github-pages` v232 needs Ruby < 4.0. Run `bundle exec jekyll serve --safe`.

## Where things live
- Bio: `index.md` (the first paragraph carries `{: .lead}`).
- Content: `_data/profile.yml`, `news.yml`, `publications.yml`, `projects.yml`, `blog.yml` (Writing section).
- Markup: `_layouts/base.html` (compact header that slides in after the masthead, main, footer) and `_layouts/home.html` (masthead → About → Writing beside News → Publications → Projects), with one `_includes/*.html` per section. `links.html` renders "Paper · Website · Code"; `icon.html` holds the inline SVG icons.
- Styles, scripts, fonts, media: `static/`. Plain CSS; light/dark color tokens at the top of `static/css/site.css`.

## Design rules
- 928px page; prose and summaries are capped at 42rem (~75 characters per line). Body text 17px (16px on phones), minimum 13px; all text at least 4.5:1 contrast in both themes.
- Font: Inter 4.1 subset made with fontTools from the official release. Regular: weight 400–700 plus optical size; italic: weight 400–500 at text size, used only for venue lines. Characters: Latin-1, general punctuation, π. `cv05` (l with a tail) is on site-wide. To add characters, re-run `fontTools.varLib.instancer` and then `fontTools.subset` with a wider `--unicodes` list.

## Conventions
- Publications: `featured: true` gets large media on the right; the rest go under "Earlier work" with a thumbnail. `"…"` marks omitted authors; `profile.name` is bolded automatically.
- Media: compress before adding (H.264 video around 500 KB or less plus a JPEG poster; WebP thumbnails 480px wide or less). Kebab-case filenames, no spaces.
- `images/` and `ref/` are the owner's local files; they're excluded from the build. Don't commit them.
