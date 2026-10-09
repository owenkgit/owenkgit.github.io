# owenkgit.github.io

Personal site of Owen Kwon: https://owenkgit.github.io

Plain Jekyll, built by GitHub Pages' standard build (no custom plugins). Pushing to `main` publishes.

## Editing

| What | Where |
| --- | --- |
| Bio | `index.md` |
| Profile, news, publications, projects, writing | `_data/*.yml` |
| Page structure and components | `_layouts/`, `_includes/` |
| Styles, scripts, fonts, media | `static/` |

## Local preview

```sh
bundle install
bundle exec jekyll serve --safe   # needs Ruby < 4.0
```
