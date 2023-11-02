<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <section class="serif" style="overflow: hidden">

    <header class="headerbox clearfix" style="margin: 1em;">
      <h1 class="logo">OGIOS</h1>
<!--      <p class="tagline">personal website.<br>How are you<br>stranger?<br>:D</p>-->
      <p class="tagline"><br/>personal website.</p>
    </header>
    <div style="margin-top: 1em; margin: 0.5em; margin-bottom: 1em">
      <router-link :to="{name: 'home'}" class="router-link">Home</router-link>
      <router-link :to="{name: 'newblog'}" class="router-link">NewBlog</router-link>
<!--      <router-link :to="{name: 'test'}" class="router-link">Test</router-link>-->
      <router-link :to="{name: 'blogs'}" class="router-link">Blogs</router-link>
<!--      <router-link to="/text" class="router-link">Text</router-link>-->
    </div>
    <hr/>
  </section>


</template>

<style scoped>

h1 {
  line-height: 2;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f8f8;
  font: normal 400 130%/1.5 -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
}

a {
  outline: none;
  position: relative;
  text-decoration: none;
  transition: color .3s ease;
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
  //transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
}
a:hover::after {
  --scale: 1;
}

</style>

<script>

// import Home from '../views/Home.vue'

export default {
  data() {
    const c = "a";
    return {
      c
    }
  },
  name: "head",
}

</script>


