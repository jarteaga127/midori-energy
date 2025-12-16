import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Your specific framework plugin

export default defineConfig({
  plugins: [react()],
  // --- Vitest Configuration ---
  test: {
    globals: true, // Allows using describe, it, expect without importing
    environment: 'jsdom', // Essential for testing components (React, Vue, etc.)
  },
});