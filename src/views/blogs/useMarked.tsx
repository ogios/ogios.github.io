import { marked } from 'marked'
import admonition from 'marked-admonition-extension'
import 'marked-admonition-extension/dist/index.css'
import markedAlert from 'marked-alert'
import markedCodeFormat from 'marked-code-format'
import { markedEmoji } from 'marked-emoji'
import markedTable from 'marked-extended-tables'
import markedFootnote from 'marked-footnote'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.min.css'
import 'github-markdown-css'
import { gfmHeadingId, getHeadingList } from 'marked-gfm-heading-id'

type Data = { level: number; text?: string; id?: string }
class Shit {
  c: Shit[] = []
  p?: Shit
  d: Data
  constructor(d: Data, p?: Shit) {
    this.d = d
    this.p = p
  }
  process(ds: Data[]) {
    if (ds.length === 0) return
    const next = ds[ds.length - 1]
    // smaller or the same as current -> send to parent
    if (next.level <= this.d.level) {
      if (this.p) return this.p.process(ds)
    }
    // bigger than current -> create new child
    const s = new Shit(ds.pop()!, this)
    this.c.push(s)
    s.process(ds)
  }
  toHtml() {
    const children: string[] = []
    if (this.c.length > 0) {
      children.push(
        `<ul ${this.d.level === 0 ? 'id="table-of-contents"' : ''}>`,
        ...this.c.map((v) => v.toHtml()),
        '</ul>',
      )
    }
    if (this.d.level === 0) return children.join('')
    else return [`<li><a>${this.d.text}</a>`, ...children, '</li>'].join('')
  }
}

const exts = [
  { gfm: true },
  admonition,
  markedAlert(),
  markedCodeFormat({}),
  markedEmoji({
    emojis: {
      heart: '❤️',
      tada: '🎉',
    },
    renderer: (token) => token.emoji,
  }),
  markedTable(),
  markedFootnote(),
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang, _) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      console.log(lang, language)
      return hljs.highlight(code, { language }).value
    },
  }),
  gfmHeadingId({ prefix: 'my-prefix-' }),
  {
    hooks: {
      postprocess(html: string) {
        const headings = getHeadingList()
        headings.reverse()
        const root = new Shit({ level: 0 }, undefined)
        root.process(headings)
        // console.log(<div>shit</div>)
        // return
        return `${root.toHtml()}\n${html}`
        //         return `
        // <ul id="table-of-contents">
        // 	${(function () {
        //     let s = ''
        //     headings.map(({ id, text, level }) => (s += `<li><a href="./#${id}" class="h${level}">${text}</a></li>`))
        //     return s
        //   })()}
        // </ul>
        // ${html}`
      },
    },
  },
]

for (let i = 0; i < exts.length; i++) {
  const e = exts[i]
  try {
    marked.use(e)
  } catch (e) {
    console.log(i)
  }
}
export default marked
