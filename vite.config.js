// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       rollupPlugin([sourceJSPattern])
  //     ],
  //   },
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
});
