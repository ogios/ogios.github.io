<template>

  <div>
    <el-tooltip :content="'Add iframe'" >
      <button class="menu-item" @click="showModel">
        <svg class="remix">
          <use :xlink:href="`${remixiconUrl}#ri-tv-2-line`" />
        </svg>
      </button>
    </el-tooltip>

      <a-modal v-model:open="open" :title="title" @ok="addIframe">
        <a-input v-model:value="url"></a-input>
      </a-modal>
  </div>
</template>

<script lang="ts" setup>
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import {ref} from "vue";
import {Editor} from "@tiptap/vue-3";

const props = defineProps<{ editor: Editor }>();
const open = ref<boolean>(false);
const url = ref("");

const showModel = () => open.value = true;
const addIframe = () => {
  // const url = window.prompt('URL')
  if (url.value) {
    props.editor.chain().focus().setIframe({src: url.value}).run()
    open.value = false;
  }
}

const title = "iframe";

</script>