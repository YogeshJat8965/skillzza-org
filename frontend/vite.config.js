import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/newsite/' : '/',
  build: {
    // Inline assets smaller than 8KB as base64 — eliminates HTTP requests for small icons/SVGs
    assetsInlineLimit: 8192,
    // Warn only for chunks > 1MB
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor bundle so app code and React are cached independently
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
}))
