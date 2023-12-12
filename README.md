# [dnd.gvalia.xyz](https://dnd.gvalia.xyz)

A personal website dedicated to a tabletop RPG campaign (in
Georgian). Best viewed via a mobile device.

## Features

- Responsive design: automatically switching the site layout based on
  the screen size.
- Statically generated website: most pages are served as-is,
  making the website feel snappy and saving resources.
- Gamified reactivity: the framework's ability to swiftly update the
  DOM is interpreted as an old-school password system for discovering
  secrets. Go to the "?" page and type "დასაწყისი" for an example.
- Save session records: players can write down and save what happened
  on sessions for future reference. This is implemented directly using
  JS and SQLite, bypassing the need for a complicated REST API to
  interface with the database.

## Developing

First, run `npm install` (or `pnpm install` or `yarn`), then start a
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Changes made in the `.svelte` files should be reflected automatically
in the browser.

## Building

To create a production version of your app run:

```bash
npm run build
```
