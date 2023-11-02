<script setup lang="ts">

import {Editor, FloatingMenu} from "@tiptap/vue-3";

const props = defineProps<{
  editor: Editor
}>();
</script>

<template>
  <div>
    <floating-menu
        class="floating-menu"
        :tippy-options="{ duration: 100 }"
        :editor="editor"
    >
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        H1
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        H2
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        Bullet List
      </button>
    </floating-menu>
  </div>
</template>

<style lang="scss">
.floating-menu {
  display: flex;
  background-color: #0D0D0D10;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
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