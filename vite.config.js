import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProduction ? '/BlasPerezCV/' : '/',
  plugins: [react()],
})
