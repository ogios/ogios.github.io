<script setup lang="ts">
import ProjectItem from "@/components/project/ProjectItem.vue";

useHead({
  title: "Archive",
  meta: [
    {
      name: "description",
      content:
        "Here you will find some of the frontend projects I have written.",
    },
  ],
  titleTemplate: "OGIOS's Blog - %s",
});
</script>

<template>
  <PageSection>
    <ProjectItem url="/projects/json-schema-editor" title="JSONSchema Editor" />
    <ProjectItem url="/projects" title="Waiting for more..." />
  </PageSection>
</template>

<style scoped></style>
