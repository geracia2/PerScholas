import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      // any requests to api will start with loocalhost
      '/api': 'http://localhost:8080'
    }
  }
})
