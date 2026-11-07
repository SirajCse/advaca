import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: { base: null, includeAbsolute: false },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      '@img': path.resolve(__dirname, 'public/images'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8000',
      '/js': 'http://localhost:8000',
      '/media': 'http://localhost:8000',
      '/storage': 'http://localhost:8000',
      '/images': 'http://localhost:8000',
      '/sanctum': 'http://localhost:8000',
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
})
