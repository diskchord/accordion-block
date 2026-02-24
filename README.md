# Pretty Accordion Block

Custom WordPress Gutenberg accordion block plugin built for my wife's website: [diamondcanine.com](https://diamondcanine.com).

## Overview

This plugin registers a custom block (`legacy/accordion`) for FAQ-style content with:

- A styled accordion header
- Expand/collapse behavior on the frontend
- Always-open panels in the block editor for easier editing
- Custom typography and gradient styling to match the site design

## Files

- `accordion-block.php` - plugin bootstrap and block registration
- `assets/editor.js` - block editor UI and saved markup
- `assets/view.js` - frontend accordion interaction
- `assets/style.css` - shared block styles (editor + frontend)

## Installation

1. Copy the `accordion-block` folder into `wp-content/plugins/`.
2. In WordPress admin, go to **Plugins**.
3. Activate **Accordion Block**.
4. In the block editor, insert **Pretty Accordion** from the inserter.

## Notes

- Block display name: **Pretty Accordion**
- Block name/slug (for saved content): `legacy/accordion`

## License

Private project for site use.
