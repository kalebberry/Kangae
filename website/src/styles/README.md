# Kangae website CSS architecture

This is a **7–1-inspired plain CSS** structure. It requires no Sass dependency and keeps the current design and responsive behavior unchanged.

```text
src/styles/
├── abstracts/_tokens.css
├── base/_reset.css
├── base/_accessibility.css
├── components/_shared.css
├── components/_comparison.css
├── layout/_header.css
├── layout/_footer.css
├── pages/_home.css
├── pages/_product.css
├── pages/_product-positioning.css
├── pages/_docs.css
├── themes/_japanese.css
├── vendors/_fonts.css
└── main.css
```

The website's `Layout.astro` imports only `main.css`. This is the sole entrypoint for the website's CSS.

## Responsibilities

- **abstracts:** shared typography scale and CSS custom properties
- **base:** document defaults, accessibility and reduced-motion behavior
- **components:** reusable editorial elements and interactive comparison styles
- **layout:** shared navigation and footer
- **pages:** home, workflow/product, product positioning and documentation
- **themes:** Studio Eien-family Japanese typography (WDXL Lubrifont JP N)
- **vendors:** external Google Fonts import

## Cascade compatibility

The extraction preserved **every character** of the original `global.css` in the same concatenation order. Imports are intentionally arranged in the previous source order to avoid unexpected specificity/cascade changes; don't alphabetize them without reviewing the impact. Future changes can consolidate shared components once a visual regression baseline is available.

## Validation before merging

Run `cd website && npm install && npm run build`, then visually inspect the overview, workflow, and docs pages at mobile/tablet/desktop widths. Check navigation, comparison interactions, Japanese type, focus indicators, and reduced motion.
