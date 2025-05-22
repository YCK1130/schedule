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
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'xlsx': ['xlsx'],
          'bootstrap-ui': ['react-bootstrap'],
          'utils': [
            './src/utils/calendar.ts', 
            './src/utils/schedulerUtils.ts', 
            './src/utils/timeUtils.ts'
          ],
          'scheduler-algos': [
            './src/utils/algos/greedy.ts', 
            './src/utils/algos/schedule.ts'
          ]
        }
      }
    }
  }
})
