<script setup lang="ts">
import "github-markdown-css/github-markdown-dark.css";
const { path } = useRoute();

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () =>
  queryContent(path).findOne(),
);

if (error.value) navigateTo("/404");

const data = computed<any>(() => {
  return {
    title: articles.value?.title || "no-title available",
    description: articles.value?.description || "no-description available",
    image: articles.value?.image || "/not-found.jpg",
    alt: articles.value?.alt || "no alter data available",
    ogImage: articles.value?.ogImage || "/not-found.jpg",
    date: articles.value?.date || "not-date-available",
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  };
});

useHead({
  title: data.value.title || "",
  meta: [
    { name: "description", content: data.value.description },
    {
      name: "description",
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: "og:site_name", content: "OGIOS's Blog" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://ogios.github.io/${path}`,
    },
    {
      property: "og:title",
      content: data.value.title,
    },
    {
      property: "og:description",
      content: data.value.description,
    },
    {
      property: "og:image",
      content: data.value.ogImage || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: "twitter:site", content: "@qdnvubp" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: `https://ogios.github.io/${path}`,
    },
    {
      name: "twitter:title",
      content: data.value.title,
    },
    {
      name: "twitter:description",
      content: data.value.description,
    },
    {
      name: "twitter:image",
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://ogios.github.io/${path}`,
    },
  ],
});

import markd from "@/components/blog/useMarked";
const md = await markd.parse(articles.value.body);
</script>

<template>
  <PageSection>
    <div class="p-20px markdown-body" v-html="md"></div>
  </PageSection>
</template>

<style lang="scss" scoped></style>
