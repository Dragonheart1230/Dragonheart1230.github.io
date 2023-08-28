import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from 'rollup-plugin-replace'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(),
    replace({ "process.env.NODE_ENV": JSON.stringify(mode) })
    ],
  }

})
