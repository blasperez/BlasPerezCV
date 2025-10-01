# 🚀 Configuración de GitHub Pages - Guía Paso a Paso

## 📋 Pasos para Configurar GitHub Pages

### 1. Configurar GitHub Pages en el Repositorio

1. **Ve a tu repositorio en GitHub**: https://github.com/blasperez/BlasPerezCV

2. **Navega a Settings**:
   - Haz clic en la pestaña "Settings" en la parte superior del repositorio

3. **Configura GitHub Pages**:
   - En el menú lateral izquierdo, busca y haz clic en "Pages"
   - En la sección "Source", selecciona **"GitHub Actions"**
   - **NO** selecciones "Deploy from a branch"

4. **Verifica la configuración**:
   - Deberías ver un mensaje que dice: "Your site is ready to be published at https://blasperez.github.io/BlasPerezCV/"

### 2. Configurar Permisos del Repositorio

1. **Ve a Settings > Actions > General**
2. **En "Workflow permissions"**:
   - Selecciona "Read and write permissions"
   - Marca la casilla "Allow GitHub Actions to create and approve pull requests"

### 3. Hacer Push de los Cambios

```bash
# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Configurar GitHub Pages con Actions"

# Hacer push a la rama main
git push origin main
```

### 4. Verificar el Deploy

1. **Ve a la pestaña "Actions"** en tu repositorio
2. **Verifica que el workflow se ejecute**:
   - Deberías ver un workflow llamado "Deploy to GitHub Pages"
   - Haz clic en él para ver el progreso
   - Debería completarse exitosamente (icono verde)

3. **Espera unos minutos** y luego visita: https://blasperez.github.io/BlasPerezCV/

## 🔧 Solución de Problemas

### Si el workflow falla:

1. **Verifica los permisos**:
   - Ve a Settings > Actions > General
   - Asegúrate de que "Read and write permissions" esté seleccionado

2. **Verifica la configuración de Pages**:
   - Ve a Settings > Pages
   - Asegúrate de que "Source" esté configurado como "GitHub Actions"

3. **Revisa los logs del workflow**:
   - Ve a Actions > [nombre del workflow]
   - Haz clic en el job que falló para ver los detalles del error

### Si el sitio no carga:

1. **Espera 5-10 minutos** después del deploy exitoso
2. **Verifica la URL**: https://blasperez.github.io/BlasPerezCV/
3. **Limpia la caché del navegador** (Ctrl+F5 o Cmd+Shift+R)

## 📁 Archivos Importantes

- `.github/workflows/deploy.yml` - Workflow de GitHub Actions
- `index.html` - Página principal
- `src/Index.jsx` - Componente principal del CV
- `vite.config.js` - Configuración de Vite con base path
- `package.json` - Scripts de deploy

## 🎯 Resultado Final

Una vez configurado correctamente, tu CV estará disponible en:
**https://blasperez.github.io/BlasPerezCV/**

El sitio se actualizará automáticamente cada vez que hagas push a la rama `main`.