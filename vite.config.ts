import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'creative_resume',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/core/variables.scss"; @import "./src/styles/core/normalize.scss"; @import "./src/styles/main.scss"; @import "./src/styles/core/globals.scss";'
        // additionalData: '@import "./src/styles/core/variables.scss"; @import "./src/styles/core/normalize.scss"; @import "./src/styles/main.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
