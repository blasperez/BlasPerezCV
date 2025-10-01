# Blas Pérez - CV

Este es mi CV personal construido con React, Vite y Tailwind CSS.

## 🚀 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages en la URL:
**https://blasperez.github.io/BlasPerezCV/**

### Configuración automática

1. **GitHub Actions**: Se ha configurado un workflow automático que se ejecuta cada vez que haces push a la rama `main` o `master`
2. **Base URL**: Configurado para funcionar correctamente en GitHub Pages
3. **Dependencias**: Todas las dependencias necesarias están instaladas

### Comandos disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build local
npm run preview

# Desplegar manualmente (si es necesario)
npm run deploy
```

### Estructura del proyecto

```
BlasPerezCV/
├── .github/workflows/    # GitHub Actions para deploy automático
├── src/                  # Código fuente React
├── public/               # Archivos estáticos
├── dist/                 # Build de producción (generado automáticamente)
├── package.json          # Configuración del proyecto
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind CSS
└── index.html           # Punto de entrada HTML
```

### Tecnologías utilizadas

- ⚛️ **React 18** - Framework de UI
- ⚡ **Vite** - Build tool y dev server
- 🎨 **Tailwind CSS** - Framework de CSS
- 🎭 **Framer Motion** - Animaciones
- 📦 **GitHub Pages** - Hosting

### Deploy automático

El proyecto se despliega automáticamente cuando:
- Haces push a la rama `main` o `master`
- Se crea un pull request hacia `main` o `master`

No necesitas hacer nada más, GitHub Actions se encarga de todo el proceso de build y deploy.

---

**URL del sitio**: https://blasperez.github.io/BlasPerezCV/