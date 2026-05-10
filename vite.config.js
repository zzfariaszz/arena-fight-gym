import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/arena-fight-gym/',
  test: {
    environment: 'jsdom',
    globals: true,
  },
})