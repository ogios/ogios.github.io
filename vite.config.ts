import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import fs from 'fs-extra'
import path from 'path'
function rmStuff(pattern: string, cwd = './dist/') {
  const a = new Bun.Glob(pattern)
  const res = a.scanSync({ cwd, dot: true })
  let r = res.next()
  while (!r.done) {
    if (r.value) {
      console.log('found:', r.value)
      fs.rm(path.join(cwd, r.value))
    }
    r = res.next()
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    vueJsx(),
    {
      name: 'readme',
      writeBundle() {
        rmStuff('**/README.md')
        rmStuff('**/.git')
        rmStuff('blogs/md_metadata_gen.ts')
      },
    },
  ],
  resolve: {
    alias: {
      '@': Bun.fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
