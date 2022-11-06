import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/core/variables.scss"; @import "./src/styles/core/normalize.scss"; @import "./src/styles/main.scss"; @import "./src/styles/core/globals.scss";'
        // additionalData: '@import "./src/styles/core/variables.scss"; @import "./src/styles/core/normalize.scss"; @import "./src/styles/main.scss";'
      }
    }
  }
})
