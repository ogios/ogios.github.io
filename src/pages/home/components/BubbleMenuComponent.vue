<script setup lang="ts">
import {BubbleMenu, Editor} from "@tiptap/vue-3";

const props = defineProps<{
  editor: Editor,
}>();

</script>

<template>
  <div>
    <bubble-menu
        class="bubble-menu"
        :tippy-options="{ duration: 100 }"
        :editor="editor"
    >
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        Bold
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        Italic
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        Strike
      </button>
    </bubble-menu>
  </div>
</template>

<style lang="scss">
.bubble-menu {
  display: flex;
  background-color: #0D0D0D;
  padding: 0.2rem;
  border-radius: 0.2rem;

  button {
    border: none;
    background: none;
    color: #FFF;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;
    transition: 0.2s;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
</style>