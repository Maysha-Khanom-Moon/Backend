import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // proxy will append while api calling before /api/...
      //  Also the origin will be that for the client
      // so CORS issue will be resolved
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
