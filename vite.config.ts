import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  console.log(env.mode)
  console.log(loadEnv(env.mode, process.cwd()))
  return {
    plugins: [vue(), Unocss(), vueJsx()],
    resolve: {
      alias: {
        // '@': Bun.fileURLToPath(new URL('./src', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
      // proxy: {
      //   '/blogs': {
      //     target: 'localhost:5173',
      //     rewrite: (path) => path.replace(/^\/blogs/, '/blogs/blogs'),
      //   },
      // },
    },
  }
})
