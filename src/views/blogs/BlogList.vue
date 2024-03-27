<script setup lang="ts">
import { ref } from 'vue'
import PageSection from '@/components/PageSection.vue'
import { apiGetBlogList } from '@/api/blog'
import { useRouter } from 'vue-router'
const router = useRouter()
const res = ref()
function init() {
  apiGetBlogList().then((r) => {
    res.value = r
  })
}
init()
</script>

<template>
  <PageSection>
    <div
      v-for="(b, i) in res"
      class="flex flex-col border-black border-3px border-solid p-10px px-20px m-10px cursor-pointer"
      @click="() => router.push({ name: 'blog', params: { bid: i } })">
      <p class="text-xl font-extrabold">{{ b.title }}</p>
      <div class="flex mt-5px">
        <p>
          {{ new Date(b.createdAt) }}
        </p>
        <p>
          {{ new Date(b.updatedAt) }}
        </p>
      </div>
    </div>
  </PageSection>
</template>

<style lang="scss" scoped>
p {
  @apply m-0;
}
</style>
