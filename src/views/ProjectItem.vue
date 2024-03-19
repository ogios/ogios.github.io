<script setup lang="ts">
const props = defineProps<{
  url: string
  title: string
}>()
function goto() {
  window.location.href = props.url
}
</script>

<template>
  <div
    class="p-20px transition-all m-10px h-40px flex items-center shadow-lg border-black border-solid border-3px cursor-pointer hover:bg-#ffebcd"
    @click="() => goto()">
    <p class="font-extrabold">
      {{ title }}
    </p>
  </div>
</template>

<style scoped>
.con:hover {
}
</style>
