<template>

  <div>
    <el-tooltip :content="'Add link'" >
      <button :class="`menu-item ${editor.isActive('link') ? 'is-active' : ''}`" @click="showModel">
        <svg class="remix">
          <use :xlink:href="`${remixiconUrl}#ri-link`" />
        </svg>
      </button>
    </el-tooltip>

      <a-modal v-model:open="open" :title="title" @ok="addLink" @click="addLink">
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

const showModel = () => {
  open.value = true;
  url.value = props.editor.getAttributes('link').href;
}
const addLink = () => {
  // const url = window.prompt('URL')
  if (url.value) {
    props.editor.chain().focus().extendMarkRange('link').setLink({ href: url.value, target: '_blank' }).run()
    // props.editor.chain().focus().setIframe({src: url.value}).run()
  } else if (url.value === ""){
    props.editor.chain().focus().extendMarkRange('link').unsetLink().run()
  }
  open.value = false;
}

const title = "link";

</script>