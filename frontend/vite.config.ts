import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',  // Ensure Vite finds index.html in frontend root
  build: {
    outDir: 'dist',
  }, 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
