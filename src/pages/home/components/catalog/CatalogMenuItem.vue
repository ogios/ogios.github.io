<script setup lang="ts">
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import {Editor} from "@tiptap/vue-3";

const props = defineProps<{editor: Editor}>();
const title = "Add catalog";
const addCatalog = () => {
  props.editor.chain().focus().setCatalog().run();
}
</script>

<template>
  <el-tooltip placement="bottom" :content="title" trigger="hover">
    <button class="menu-item" @click="addCatalog">
      <svg class="remix">
        <use :xlink:href="`${remixiconUrl}#ri-article-line`"/>
      </svg>
    </button>
  </el-tooltip>
</template>

<style scoped>

</style>