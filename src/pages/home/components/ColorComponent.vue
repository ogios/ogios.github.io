<script setup lang="ts">
import {Editor} from "@tiptap/vue-3";

const props = defineProps<{ editor: Editor }>();

let timeset = null;

const changeColor = (value) => {
  // console.log(props.editor.getAttributes('textStyle').color);
  if (timeset) clearTimeout(timeset);
  const c = value.target.value;
  timeset = setTimeout(() => {
    props.editor.chain().focus().setColor(c).run()
  }, 100)
}
</script>

<template>
  <el-tooltip content="Font color">
    <a-input class="color" :value="editor.getAttributes('textStyle').color ? editor.getAttributes('textStyle').color : '#000000'" type="color" @change="changeColor" />
  </el-tooltip>
</template>

<style scoped>
.color {
  width: 70px;
}
</style>