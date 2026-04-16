import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/newsite/' : '/',
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
}))
