# Blas Pérez Curriculum

This repository contains the React + Vite resume/portfolio that powers [https://blasperez.github.io/BlasPerezCV](https://blasperez.github.io/BlasPerezCV). The project uses Tailwind CSS for utility styling and lucide-react for the iconography.

## Local development

1. `npm install`
2. `npm run dev`

The dev server runs on `http://localhost:5173` by default.

## Building for GitHub Pages

```
npm run build
```

`vite.config.js` sets the `base` to `/BlasPerezCV/` when `NODE_ENV === production`, so the generated assets resolve correctly on `https://blasperez.github.io/BlasPerezCV/`.
