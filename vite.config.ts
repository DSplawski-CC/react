import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'app.local',
    https: {
      key: './ssl/app.local.key',
      cert: './ssl/app.local.crt',
    },
  }
})
