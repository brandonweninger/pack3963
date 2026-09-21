# Cub Scout Pack 3963 website

This repository contains the public website for Cub Scout Pack 3963 in Chicago. It is a static Jekyll site hosted with GitHub Pages.

## Site structure

- `index.html` and the other top-level HTML files are the public pages.
- `_includes/` contains shared navigation and announcement markup.
- `_data/navigation.yml` controls the site-wide navigation menu.
- `_data/photos.yml` controls which images appear in the photo gallery.
- `_config.yml` contains Jekyll settings and the site-wide announcement.
- `assets/docs/` contains downloadable PDFs.
- `assets/images/pack3963photos/` contains web-ready gallery images.
- `base.css`, `layout.css`, `components.css`, `form.css`, and `responsive.css` make up the modular stylesheet system.
- `.pages.yml` configures the Pages CMS photo editor used by Pack leadership.

## Run the site locally

You need Ruby, Bundler, and Git.

```bash
git clone https://github.com/brandonweninger/pack3963.git
cd pack3963
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in a browser. Jekyll watches the files and rebuilds the site when they change.

## Common updates

### Change the announcement

Edit these values in `_config.yml`:

```yaml
announcement_enabled: true
announcement_text: "Your announcement"
announcement_link: "events.html"
```

Set `announcement_enabled` to `false` to hide the banner.

### Change the navigation

Edit `_data/navigation.yml`. Because the pages use `_includes/nav.html`, one change updates the navigation across the site.

### Update events or page content

Edit the relevant top-level HTML file, such as `events.html`, `join.html`, or `resources.html`. Keep the existing YAML front matter at the top of each page.

### Add or manage photos

Authorized leaders can open `admin.html`, sign in to Pages CMS, and select **Photo Gallery**. For each public photo:

1. Upload a JPG, JPEG, PNG, or WebP image.
2. Write a concise, descriptive image description for visitors using screen readers.
3. Add an optional caption and event date.
4. Confirm the Pack has permission to publish the image.
5. Do not include a child's full name in public text or image metadata.

The gallery source of truth is `_data/photos.yml`. Gallery images should be web-sized, use safe lowercase filenames, and have location and camera metadata removed before they are committed.

## Publishing

GitHub Pages publishes changes from the `main` branch. Use a branch and pull request for updates:

```bash
git switch -c update/short-description
git add .
git commit -m "Describe the website update"
git push -u origin update/short-description
```

Open a pull request on GitHub, review the preview or checks, and merge it into `main`. Allow GitHub Pages a few minutes to rebuild the public site.

## Before opening a pull request

- Run `bundle exec jekyll build` and confirm it completes without errors.
- Open the changed pages on both desktop and mobile widths.
- Test internal links, downloads, navigation, forms, and the photo lightbox.
- Confirm every image has useful alternative text.
- Confirm links opened in a new tab include `rel="noopener noreferrer"`.
- Do not commit `.DS_Store`, `_site`, cache, or local dependency files.

## Key maintenance notes

- Keep new styles in the appropriate modular CSS file; do not create a second all-in-one stylesheet.
- Store downloadable documents in `assets/docs/`.
- Store only web-ready gallery images in the site repository. Keep original full-resolution photos in the Pack's private storage.
- Never commit passwords, access tokens, private member data, or confidential documents.
