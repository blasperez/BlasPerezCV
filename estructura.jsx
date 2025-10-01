# 📂 Estructura mínima del proyecto React + Tailwind para GitHub Pages

Aquí tienes un **esqueleto de proyecto** completo. Coloca tu archivo `App.jsx` (el que ya tienes) dentro de `src/` y usa esta estructura:

```
protocolo-rino/
├─ public/
│  └─ index.html
├─ src/
│  ├─ App.jsx          # tu archivo actual
│  ├─ index.css        # estilos + Tailwind base
│  └─ main.jsx         # punto de entrada
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ vite.config.js
```

---

## 🔑 Archivos clave

### `package.json`
```json
{
  "name": "protocolo-rino",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://blas.github.io/protocolo-rino",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.14",
    "gh-pages": "^6.0.0",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.3.2",
    "vite": "^4.5.0"
  }
}
```

### `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/protocolo-rino/'
})
```

### `tailwind.config.js`
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `postcss.config.js`
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `src/main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TrainingProtocolPresentation from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrainingProtocolPresentation />
  </React.StrictMode>,
)
```

### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-50;
  font-family: sans-serif;
}
```

### `public/index.html`
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Protocolo Rino</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 🚀 Pasos para desplegar en GitHub Pages

1. Inicializa el proyecto:
```bash
npm install
```

2. Corre localmente:
```bash
npm run dev
```

3. Compila:
```bash
npm run build
```

4. Despliega en GitHub Pages:
```bash
npm run deploy
```

Y tu página quedará en vivo en: `https://blas.github.io/protocolo-rino`

---
👉 Ya no tienes que cambiar nada, está configurado para tu usuario `blas` y repo `protocolo-rino`.
