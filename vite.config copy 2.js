import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dominus/',
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/dom.js',
      name: 'DOMINUS',
      fileName: 'dominus',
      formats: ['es', 'umd'],
    },
  },
});
