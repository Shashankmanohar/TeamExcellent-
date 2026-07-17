import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"]
        }
      }
    }
  },
  server: {
    hmr: {
      overlay: false, // Disable error overlay
      clientErrorOverlay: false, // Disable client-side error overlay
    }
  },
  // Show server info but suppress WebSocket warnings
  logLevel: 'info'
})
