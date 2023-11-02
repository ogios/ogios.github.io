<template>
  <node-view-wrapper class="code-block">
<!--    <div class="lang">-->
<!--      <el-select  :contenteditable="false" v-model="selectedLanguage" filterable placeholder="Choose language">-->
<!--        <el-option value="auto">-->
<!--          auto-->
<!--        </el-option>-->
<!--        <el-option value="">-->
<!--          —-->
<!--        </el-option>-->
<!--        <el-option-->
<!--            v-for="(language, index) in languages"-->
<!--            :key="index"-->
<!--            :label="language"-->
<!--            :value="language"-->
<!--        />-->
<!--      </el-select>-->
<!--    </div>-->
    <div class="lang">
      <a-select
          show-search
          :dropdown-match-select-width="false"
          :contenteditable="false"
          v-model:value="selectedLanguage"
          :filter-option="filterLanguage"
          placeholder="Choose language"
          style="min-width: 100px"
      >
        <a-select-option
            v-for="(language, index) in languages"
            :key="index"
            :label="language"
            :value="language" />
      </a-select>
    </div>

    <pre><code><node-view-content /></code></pre>
  </node-view-wrapper>
</template>

<script lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
import { Select } from "ant-design-vue";

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent,
    Select,
  },

  props: nodeViewProps,

  data() {
    return {
      languages: this.extension.options.lowlight.listLanguages(),
    }
  },
  methods:{
    filterLanguage(input, option) {
      return option.value.indexOf(input.toLowerCase()) >= 0;
    }
  },

  computed: {
    selectedLanguage: {
      get() {
        return this.node.attrs.language
      },
      set(language) {
        this.updateAttributes({ language })
      },
    },
  },

}
</script>

<style lang="less">
.lang {
  float: right;
  margin: 0.5em;
}
//.code-block {
//  position: relative;
//  background-color: black;
//
//  select {
//    position: absolute;
//    top: 0.5rem;
//    right: 0.5rem;
//  }
//}
</style>