<script setup lang="ts">
import {Editor} from "@tiptap/vue-3";
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";

const props = defineProps<{ editor: Editor }>();

let timeset = null;

const setHighlight = (value) => {
  // console.log(props.editor.getAttributes('highlight'));
  const c = value.target.value;
  if (timeset) clearTimeout(timeset);
  timeset = setTimeout(() => {
    props.editor.chain().focus().setHighlight({color: c}).run();
  }, 100);
}
const removeHighlight = () => {
  props.editor.chain().focus().unsetHighlight().run();
}
</script>

<template>
  <el-tooltip :content="'Highlight color'">
    <a-input class="color" :value="editor.getAttributes('highlight').color ? editor.getAttributes('highlight').color : '#000000'" type="color" @change="setHighlight" />
  </el-tooltip>

  <el-tooltip :content="'Remove highlight color'" >
    <button class="menu-item" @click="removeHighlight">
      <svg class="remix">
        <use :xlink:href="`${remixiconUrl}#ri-close-circle-line`" />
      </svg>
    </button>
  </el-tooltip>
</template>

<style scoped>
.color {
  width: 70px;
}
</style>