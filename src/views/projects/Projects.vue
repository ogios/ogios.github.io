<script setup lang="ts">
import ProjectItem from '@/views/projects/ProjectItem.vue'
import PageSection from '@/components/PageSection.vue'
</script>

<template>
  <PageSection>
    <ProjectItem url="/projects/json-schema-editor" title="JSONSchema Editor" />
    <ProjectItem url="/projects" title="Waiting for more..." />
  </PageSection>
</template>

<style scoped></style>
