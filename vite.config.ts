import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait()
  ],
  base: '/schedule/',
  optimizeDeps: {
    exclude: ['glpk-wasm']
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cache-Control': 'no-cache',
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'xlsx': ['xlsx'],
          'bootstrap-ui': ['react-bootstrap', 'bootstrap'],
          'utils': [
            './src/utils/calendar.ts', 
            './src/utils/schedulerUtils.ts', 
            './src/utils/timeUtils.ts',
            './src/utils/exportUtils.ts',
            './src/utils/fileUtils.ts'
          ],
          'scheduler-algos': [
            './src/utils/algos/greedy.ts', 
            './src/utils/algos/schedule.ts'
          ],
          'vendor-utils': ['lodash', 'papaparse', 'file-saver', 'uuid']
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.names;
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    sourcemap: false,
    reportCompressedSize: false,
  }
})
