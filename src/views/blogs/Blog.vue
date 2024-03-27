<script setup lang="ts">
import { apiGetBlogContent } from '@/api/blog'
import PageSection from '@/components/PageSection.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import marked from './useMarked'
const route = useRoute()
const res = ref()
watch(
  route,
  () => {
    const id = route.params.bid as string
    apiGetBlogContent(id).then(async (r) => (res.value = await marked.parse(r)))
  },
  { immediate: true },
)
</script>

<template>
  <PageSection>
    <div class="p-20px markdown-body" v-html="res"></div>
  </PageSection>
</template>

<style lang="scss" scoped>
.markdown-body {
  --base-size-8: 8px;
  --base-size-16: 16px;
}
.out_page {
  padding: 0;
}
</style>
