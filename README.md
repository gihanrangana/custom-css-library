# FeatherCSS

A lightweight, simple, **pure CSS library powered by SCSS**.

FeatherCSS is designed to be easy to customize at the project level with SCSS variables (like primary/secondary colors, border radius, spacing scale, and typography).

## Features

- Tiny, easy-to-read SCSS architecture
- Theme-ready variables with `!default`
- Simple layout helpers (`.container`, `.grid`, `.stack`)
- Core UI primitives (`.btn`, `.card`, `.input`, `.badge`, `.alert`)
- Utility classes for spacing, display, text alignment, radius, and shadows
- GitHub Packages publishing support
- React + Vite demo app with project-level theme overrides

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

The compiled CSS will be generated at:

- `dist/feather.css`
- `dist/feather.min.css`

## Run the React + Vite demo

```bash
npm run demo:install
npm run demo:dev
```

To create a production demo build:

```bash
npm run demo:build
```

## Project Structure

```txt
src/scss/
  _variables.scss
  _mixins.scss
  _base.scss
  _layout.scss
  _components.scss
  _utilities.scss
  feather.scss

demo/
  src/
    App.jsx
    main.jsx
    theme.scss
    demo.css
  index.html
  vite.config.js
  package.json
```

## Customizing Variables

Because this library uses the Sass module system, configure values via `with (...)` when importing the entrypoint.

### Example

```scss
// app-theme.scss
@use 'src/scss/feather' with (
  $color-primary: #7c3aed,
  $color-secondary: #06b6d4,
  $radius-md: 0.625rem,
  $font-family-base: 'Inter', system-ui, sans-serif
);
```

Then compile your app theme:

```bash
sass app-theme.scss public/app-theme.css --style=compressed
```

## Demo theming example

The demo uses project-level SCSS overrides in `demo/src/theme.scss`:

```scss
@use '../../src/scss/feather' with (
  $color-primary: #0ea5e9,
  $color-secondary: #8b5cf6,
  $radius-md: 0.625rem
);
```

## Publishing to GitHub Packages (npm registry)

This package is configured for GitHub Packages via `publishConfig.registry`.

### 1) Update package scope and repository metadata

In `package.json`, replace placeholders:

- `@your-github-username/feathercss`
- `https://github.com/your-github-username/custom-css-library.git`

> GitHub Packages npm publishing requires a **scoped package name** where scope matches your user/org.

### 2) Authenticate npm against GitHub Packages

Add this to your user/project `.npmrc`:

```ini
@your-github-username:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
```

Token should include `write:packages` (and commonly `read:packages`).

### 3) Publish manually

```bash
npm install
npm run build
npm publish
```

### 4) Publish automatically from GitHub Actions

This repo includes `.github/workflows/publish-gpr.yml` which publishes on `release.published` using `GITHUB_TOKEN`.

## Included Components

- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- Card: `.card`, `.card-header`, `.card-body`, `.card-footer`
- Inputs: `.input`, `.input-group`
- Badge: `.badge`, variants
- Alert: `.alert`, variants

## Included Utilities

- Display: `.d-block`, `.d-inline`, `.d-flex`
- Flex: `.justify-between`, `.items-center`
- Text: `.text-left`, `.text-center`, `.text-right`
- Radius: `.rounded-sm`, `.rounded-md`, `.rounded-lg`, `.rounded-pill`
- Shadow: `.shadow-sm`, `.shadow-md`, `.shadow-lg`
- Spacing:
  - Margin: `.m-{0-5}`, `.mt-{0-5}`, `.mb-{0-5}`, `.mx-{0-5}`, `.my-{0-5}`
  - Padding: `.p-{0-5}`, `.pt-{0-5}`, `.pb-{0-5}`, `.px-{0-5}`, `.py-{0-5}`

## License

MIT
