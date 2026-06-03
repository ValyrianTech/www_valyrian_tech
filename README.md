# Valyrian Tech

Website: [www.valyrian.tech](https://www.valyrian.tech)

## Website project

The Astro website lives in `site/`.

## Building locally

This machine uses `nvm` for Node.js, so load it before running npm commands:

```bash
source "$HOME/.nvm/nvm.sh"
nvm use --silent default
npm run build
```

Run the commands from the `site/` directory.

One-line version:

```bash
source "$HOME/.nvm/nvm.sh" && nvm use --silent default && npm run build
```

The production build is written to `site/dist/`.
