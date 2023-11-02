<template>
  <div class="in-editor-wrapper">
    <div class="editor" v-if="editor">
      <div v-if="editable">
        <el-affix v-if="editable && editor" :offset="0" target=".in-editor-wrapper" >
          <MenuBar class="editor__header" :editor="editor" />
        </el-affix>
        <BubbleMenuComponent :editor="editor" />
        <FloatingMenuComponent :editor="editor" />
      </div>

      <editor-content class="editor__content tiptap" :editor="editor" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref, reactive, onUpdated} from "vue";
import {Editor, EditorContent, useEditor, VueNodeViewRenderer} from '@tiptap/vue-3';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import {StarterKit} from "@tiptap/starter-kit";
import {Highlight} from '@tiptap/extension-highlight';
import {TaskItem} from '@tiptap/extension-task-item';
import {TaskList} from '@tiptap/extension-task-list';
import Typography from '@tiptap/extension-typography';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { Color } from '@tiptap/extension-color';
import Gapcursor from '@tiptap/extension-gapcursor';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';


import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import {lowlight} from 'lowlight';


import CodeBlockComponent from "@/pages/home/components/CodeBlockComponent.vue";
import BubbleMenuComponent from "@/pages/home/components/BubbleMenuComponent.vue";
import FloatingMenuComponent from "@/pages/home/components/FloatingMenuComponent.vue";
import {SmilieReplacer} from "@/pages/home/components/_EmojiReplaceComponent";
import Iframe from '@/pages/home/components/_IframeComponent';
import MenuBar from "@/pages/home/components/MenuBar.vue";
import Linter, { BadWords, HeadingLevel, Punctuation } from '@/pages/home/components/lint/index.ts';
import TableOfContents from '@/pages/home/components/catalog/TableOfContents';
import {Indent} from "@/pages/home/components/_IndentComponent";


const props = defineProps<{editable: boolean, content: string}>();
const emits = defineEmits(['monitorSize']);

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);


const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: element => element.getAttribute('data-background-color'),
        renderHTML: attributes => {
          return {
            'data-background-color': attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          }
        },
      },
    }
  },
})


console.log("props.content", props.content);

const editor = useEditor({
  editable: props.editable,
  content: props.content,
  extensions: [
    Iframe,
    SmilieReplacer,
    Typography,
    FontFamily,
    TextStyle,
    StarterKit,
    Highlight,
    TaskList,
    TaskItem,
    Gapcursor,
    Color,
    Indent,
    Link.configure({
      HTMLAttributes: {
        class: 'editor-link',
      },
      autolink: false,
    }),
    TableOfContents,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Highlight.configure({
      multicolor: true,
    }),
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableHeader,
    CustomTableCell,
    Image.configure({
      allowBase64: true,
      inline: true,
    }),
    CodeBlockLowlight
        .extend({
          addNodeView() {
            return VueNodeViewRenderer(CodeBlockComponent)
          },
        })
        .configure({
          lowlight,
          exitOnArrowDown: true,
          defaultLanguage: 'plaintext',
        }),
  ],
  onUpdate: (() => {
    let timeset = null;
    return ({editor}) => {
      if (timeset) clearTimeout(timeset);
      timeset = setTimeout(() => {
        emits('monitorSize', (new Blob([editor.getHTML()])).size);
      }, 300);
    }
  })(),
});
const updateContent = (content: string) => {
    editor.value?.commands.setContent(content);
}

defineExpose({
  updateContent,
  editor,
})

</script>

<script lang="ts">


export default {
  // beforeUnmount() {
  //   this.editor.destroy()
  // },
}


</script>


<style lang="scss">
.editor-link {
  cursor: pointer;
}
</style>
