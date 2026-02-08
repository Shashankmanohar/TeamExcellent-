import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  server: {
    hmr: {
      overlay: false, // Disable error overlay
      clientErrorOverlay: false, // Disable client-side error overlay
    }
  },
  // Show server info but suppress WebSocket warnings
  logLevel: 'info'
})
