import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
    chunkSplitPlugin({
      customSplitting: {
        'react-vendor': [
          'react',
          'react-dom',
          'react-redux',
          '@reduxjs/toolkit',
        ],
      },
    }),
  ],
  // base: `/${appName}/`,
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    // outDir: `dist/${appName}`,
    minify: true,
  },
})
