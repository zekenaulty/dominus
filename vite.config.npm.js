import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/dom.js',
      name: 'DOMINUSJS',
      fileName: 'dominusjs',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false, // Ensure dynamic imports are handled correctly
      },
      external: [], // Add external dependencies here if needed
    },
  },
});
