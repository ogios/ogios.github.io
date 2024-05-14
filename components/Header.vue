<script setup lang="ts"></script>

<template>
  <section class="serif overflow-hidden">
    <header class="headerbox clearfix">
      <h1 class="logo">OGIOS</h1>
      <p class="tagline">personal website.</p>
    </header>
    <div style="margin-top: 1em; margin: 0.5em; margin-bottom: 1em">
      <NuxtLink class="router-link" to="/">home</NuxtLink>
      <NuxtLink class="router-link" to="/blogs">blogs</NuxtLink>
      <NuxtLink class="router-link" to="/project">projects</NuxtLink>
    </div>
    <hr />
  </section>
</template>

<style lang="scss" scoped>
h1 {
  line-height: 2;
}

.router-link {
  color: black;
  transition: color 0.3s ease;
  @apply text-black ml-2em outline-none;
}

.headerbox {
  @apply m-1em border-2 border-solid border-black p-5% md:h-15;
}

.logo {
  @apply flex items-center text-center justify-center h-full m-0 text-3em;
  @apply md:w-50% md:float-left;
}

.tagline {
  @apply flex items-center text-center justify-center;
  @apply md:w-50% md:float-right;
}

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: #f8f8f8;
//   font:
//     normal 400 130%/1.5 -apple-system,
//     BlinkMacSystemFont,
//     Helvetica,
//     Arial,
//     sans-serif;
// }

a {
  outline: none;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;
}

a::after {
  outline: none;
  --scale: 0;
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 3px;
  background: #000000;
  -webkit-transform: scaleX(var(--scale));
  transform: scaleX(var(--scale));
  //-webkit-transform-origin: var(--x) 50%;
  //transform-origin: var(--x) 50%;
  transition: -webkit-transform 0.2s cubic-bezier(0.535, 0.05, 0.355, 1);
  transition: transform 0.2s cubic-bezier(0.535, 0.05, 0.355, 1);
  // transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
  // -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
}
a:hover::after {
  --scale: 1;
}
</style>
