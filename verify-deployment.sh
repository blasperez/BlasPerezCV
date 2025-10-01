#!/bin/bash

echo "🔍 Verificando el deployment de GitHub Pages..."
echo "URL: https://blasperez.github.io/BlasPerezCV/"

# Esperar un momento para que el deploy se propague
echo "⏳ Esperando 10 segundos para que el deploy se propague..."
sleep 10

# Verificar que la URL responda
echo "🌐 Verificando que la URL responda..."
if curl -s -o /dev/null -w "%{http_code}" https://blasperez.github.io/BlasPerezCV/ | grep -q "200"; then
    echo "✅ ¡Éxito! El sitio está funcionando correctamente."
    echo "🎉 Tu CV está disponible en: https://blasperez.github.io/BlasPerezCV/"
else
    echo "❌ El sitio aún no está disponible. Esto puede tomar unos minutos más."
    echo "🔄 Intenta acceder manualmente a: https://blasperez.github.io/BlasPerezCV/"
fi

echo ""
echo "📋 Pasos para verificar manualmente:"
echo "1. Ve a https://blasperez.github.io/BlasPerezCV/"
echo "2. Deberías ver tu CV con diseño azul y animaciones"
echo "3. Si no funciona, espera 5-10 minutos y vuelve a intentar"