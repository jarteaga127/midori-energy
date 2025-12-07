import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 1. Use JSDOM to simulate the browser environment
    globals: true,        // 2. Make test utilities (like describe, test, expect) globally available
    setupFiles: './vitest.setup.js', // 3. Point to the setup file (Step 3)
  },
})
