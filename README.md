# Tadas Kaziunas — portfolio

My personal website: projects, skills and contact. Dark theme, Lithuanian/English switch, no frameworks or build step.

**Live:** https://tadas380.github.io

## Editing

Everything you'd normally change is at the top of `script.js`:

- `CONFIG`: email, GitHub link, CV file
- `PROJECTS`: project cards (English and Lithuanian text, tags, live demo and code links)
- `SKILLS`: skill groups

Texts for the rest of the page are in the `T` object (`en` and `lt`) in the same file.

To add a CV: put `cv.pdf` in this folder and set `cv: 'cv.pdf'` in `CONFIG`.

## Run locally

Open `index.html` in a browser, or run `npx serve .`.

## Hosting

GitHub Pages: this repo is named `Tadas380.github.io`, so GitHub publishes it automatically at https://tadas380.github.io.
