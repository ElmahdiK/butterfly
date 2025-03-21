import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://vite.dev/guide/static-deploy
export default defineConfig({
  plugins: [react()],
  base: '/butterfly',
  build: {
    outDir: 'dist',
  },
})
