import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dminus/', // GitHub Pages base path
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/dom.js',
      name: 'DOMINUS',
      fileName: 'dominus',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [], // Add external dependencies here if needed
    },
  },
});
