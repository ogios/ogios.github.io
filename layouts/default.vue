<script setup lang="ts">
import "@/assets/font/index.css";
import "@/assets/css/main.css";
import "@/assets/css/article.css";
import "@/assets/css/main.scss";
import HeaderNav from "@/components/Header.vue";
</script>

<template>
  <div>
    <div class="contain">
      <HeaderNav class="out_page mb-0" />

      <div class="page">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
