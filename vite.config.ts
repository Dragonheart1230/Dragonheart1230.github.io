//@ts-ignore
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from 'rollup-plugin-replace'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const config = {
    plugins: [react(),
    replace({ "process.env.NODE_ENV": JSON.stringify(mode) })
    ],
    base: './',
  }
  // if (command !== 'serve') {
  //   config.base = '/react-vite-gh-pages/'
  // }

  return config
  return config

})
