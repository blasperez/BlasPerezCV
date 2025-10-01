# Blas Pérez - CV

CV personal desarrollado con React, Vite y Tailwind CSS, desplegado en GitHub Pages.

## 🚀 Demo

Visita el CV en: [https://blasperez.github.io/BlasPerezCV/](https://blasperez.github.io/BlasPerezCV/)

## 🛠️ Tecnologías

- **React 18** - Framework de JavaScript
- **Vite** - Herramienta de build rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones fluidas
- **GitHub Pages** - Hosting estático

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🚀 Deploy

El proyecto está configurado para deploy automático a GitHub Pages usando GitHub Actions.

### Configuración de GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. El workflow se ejecutará automáticamente en cada push a la rama `main`

### Deploy Manual

Si prefieres hacer deploy manual:

```bash
# Construir el proyecto
npm run build

# Deploy a GitHub Pages
npm run deploy
```

## 📁 Estructura del Proyecto

```
BlasPerezCV/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions para deploy
├── public/                     # Archivos estáticos
├── src/
│   └── Index.jsx              # Componente principal del CV
├── package.json               # Dependencias y scripts
├── vite.config.js            # Configuración de Vite
├── tailwind.config.js        # Configuración de Tailwind
└── README.md                 # Este archivo
```

## 🎨 Personalización

Para personalizar el CV, edita el archivo `src/Index.jsx` y modifica:

- **Información personal**: Objeto `personalInfo`
- **Habilidades**: Array `skills`
- **Experiencia**: Array `experience`
- **Educación**: Array `education`

## 📱 Responsive Design

El CV está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build
- `npm run deploy` - Deploy a GitHub Pages

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.