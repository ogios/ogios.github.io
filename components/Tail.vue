<script setup></script>

<template>
  <div class="tail mb-10px text-center p-10px">
    <a href="https://github.com/ogios">
      <i class="text-30px" style="font-style: normal"></i>
    </a>
  </div>
</template>

<style scoped>
.tail {
  margin: 0 auto;
  padding-bottom: 1em;
  text-align: center;
  font-size: 1.2em;
}
.tail a {
  color: black;
  border: none;
  border-bottom: solid #5e5044 1px;
  border-bottom-width: 0;
  transition: border-bottom-width 0.1s;
}
.tail a:hover {
  transition: 0.1s;
  border-bottom-width: medium;
  color: #5e5044;
}
</style>
