<script setup lang="ts">
import HeaderNav from '@/components/Header.vue'
import PageSection from '@/components/PageSection.vue'
import HomeBottom from '@/views/root/HomeBottom.vue'
</script>

<template>
  <div>
    <div class="contain">
      <HeaderNav class="out_page mb-0" />

      <div class="page">
        <router-view> </router-view>
      </div>

      <PageSection>
        <HomeBottom></HomeBottom>
      </PageSection>
    </div>
  </div>
</template>

<style scoped></style>
