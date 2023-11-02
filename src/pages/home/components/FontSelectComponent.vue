<script setup lang="ts">
import {ref} from 'vue';
import {Editor} from "@tiptap/vue-3";
const _font_code = "Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif"
const fonts = {
  "Times New Roman": "Times New Roman",
  "Comic sans": "Comic Sans MS, Comic Sans",
  "Georgia": "Georgia",
  "Lora": "Lora",
  "code": _font_code,
  "serif": "serif",
  "无": "无"
};
const font = ref<string>("无");
const props = defineProps<{editor: Editor}>();
function changeFont(value, option){
  // console.log(value);
  value === "无" ? props.editor.chain().focus().unsetFontFamily().run() : props.editor.chain().focus().setFontFamily(option.key).run();
}
props.editor.on("selectionUpdate", ({editor}) => {
  const font_family = editor.getAttributes("textStyle");
  // console.log(font_family);
  if (font_family.hasOwnProperty("fontFamily")) {
    for (const k in fonts) {
      if (fonts[k] === font_family.fontFamily) {
        font.value = k;
        return;
      }
    }
  }
  font.value = "无";
});
</script>

<template>
<a-select v-model:value="font" @change="changeFont" :dropdown-match-select-width="false" style="min-width: 120px">
  <template #suffixIcon><p>T</p></template>
  <a-select-option v-for="(key, val) in fonts" :key="key" :value="val" />


</a-select>
</template>

<style scoped>

</style>