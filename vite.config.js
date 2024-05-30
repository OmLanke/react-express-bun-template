import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: process.cwd() + '/frontend',
  server: {
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
