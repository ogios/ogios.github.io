<script setup lang="ts">
import { ref } from 'vue'
import PageSection from '@/components/PageSection.vue'
import { apiGetBlogList } from '@/api/blog'
import { useRouter } from 'vue-router'
function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
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
      <div class="block mt-5px md:flex">
        <p class="md:flex-1">Create at: {{ formatTimestamp(b.createdAt) }}</p>
        <p>
          Last update:
          {{ formatTimestamp(b.updatedAt) }}
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
