import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import fs from 'fs-extra'
import path from 'path'
function rmStuff(patterns: string[], cwd: string) {
  const l: string[] = (() => {
    const ls: string[] = []
    const pps = patterns.map((v) => globFiles(v, cwd))
    pps.forEach((v) => ls.push(...v))
    return ls
  })()
  l.forEach((v) => {
    fs.rm(path.join(cwd, v))
  })
}

function globFiles(pattern: string, cwd?: string) {
  const a = new Bun.Glob(pattern)
  const res = a.scanSync({ cwd, dot: true })
  const l: string[] = []
  let r = res.next()
  while (!r.done) {
    if (r.value) {
      l.push(r.value)
    }
    r = res.next()
  }
  return l
}

function onlyPreserve(patterns: string[], cwd: string) {
  const all = fs.readdirSync(cwd)
  const preserve: string[] = (() => {
    const ls: string[] = []
    const pps = patterns.map((v) => globFiles(v, cwd))
    pps.forEach((v) => ls.push(...v))
    return ls
  })()
  const remove = all.map((v) => (preserve.indexOf(v) === -1 ? v : undefined)).filter((v) => v)
  remove.forEach((v) => {
    fs.removeSync(path.join(cwd, v))
  })
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
        onlyPreserve(['*.md', 'meta.json'], './dist/blogs/')
        rmStuff(['README.md'], './dist/blogs/')
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
