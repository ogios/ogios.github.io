<script setup lang="ts">
import { routes } from '@/routers'
</script>

<template>
  <section class="serif" style="overflow: hidden">
    <header class="headerbox clearfix" style="margin: 1em">
      <h1 class="logo">OGIOS</h1>
      <p class="tagline"><br />personal website.</p>
    </header>
    <div style="margin-top: 1em; margin: 0.5em; margin-bottom: 1em">
      <router-link v-for="r in routes" :to="r.path" class="router-link">{{ r.meta.title }}</router-link>
    </div>
    <hr />
  </section>
</template>

<style lang="scss" scoped>
h1 {
  line-height: 2;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f8f8;
  font:
    normal 400 130%/1.5 -apple-system,
    BlinkMacSystemFont,
    Helvetica,
    Arial,
    sans-serif;
}

a {
  outline: none;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;
}

a::after {
  outline: none;
  --scale: 0;
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 3px;
  background: #000000;
  //-webkit-transform: scaleX(var(--scale));
  transform: scaleX(var(--scale));
  //-webkit-transform-origin: var(--x) 50%;
  //transform-origin: var(--x) 50%;
  transition: -webkit-transform 0.15s cubic-bezier(0.535, 0.05, 0.355, 1);
  //transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
  //transition:
  // transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1),
  // -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
}
a:hover::after {
  --scale: 1;
}
</style>
