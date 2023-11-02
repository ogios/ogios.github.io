import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from './index.vue';


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        catalog: {
            setCatalog: () => ReturnType,
        }
    }
}

export default Node.create({
    name: 'tableOfContents',

    group: 'block',

    atom: true,

    parseHTML() {
        return [{
                tag: 'toc',
        },]
    },

    renderHTML({ HTMLAttributes }) {
        return ['toc', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return VueNodeViewRenderer(Component)
    },

    addGlobalAttributes() {
        return [
            {
                types: [
                    'heading',
                ],
                attributes: {
                    id: {
                        default: null,
                    },
                },
            },
        ]
    },

    addCommands() {
        return {
            setCatalog: () => ({ tr, dispatch }) => {
                const { selection } = tr
                const node = this.type.create()

                if (dispatch) {
                    tr.replaceRangeWith(selection.from, selection.to, node)
                }

                return true
            }
        }
    }
})