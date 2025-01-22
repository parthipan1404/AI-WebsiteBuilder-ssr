import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"https://parthipan1404.github.io/AI-WebsiteBuilder-ssr/",
  plugins: [react()],
})
