<script lang="ts" setup>
const { data: res } = await useAsyncData("home", () =>
  queryContent("/blogs/meta").findOne(),
);

useHead({
  title: "Archive",
  meta: [
    {
      name: "description",
      content:
        "Here you will find all the blog posts I have written & published on this site.",
    },
  ],
  titleTemplate: "OGIOS's Blog - %s",
});

function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function isNumber(value: any) {
  try {
    return !isNaN(parseInt(value));
  } catch {
    return false;
  }
}
</script>

<template>
  <PageSection>
    <template v-for="(b, i) in res">
      <NuxtLink
        v-if="isNumber(i)"
        :to="`/blogs/${i}`"
        target="_blank"
        class="no-underline text-black"
      >
        <div
          class="flex flex-col border-black border-3px border-solid p-10px px-20px m-10px cursor-pointer"
        >
          <p class="text-xl font-extrabold">{{ b.title }}</p>
          <div class="block mt-5px md:flex">
            <p class="md:flex-1">
              Create at: {{ formatTimestamp(b.createdAt) }}
            </p>
            <p>
              Last update:
              {{ formatTimestamp(b.updatedAt) }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </template>
  </PageSection>
</template>

<style lang="scss" scoped>
p {
  @apply m-1;
}
</style>
