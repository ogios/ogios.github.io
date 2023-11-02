<script setup>

</script>

<template>
  <div class="tail" style="margin-bottom: 1em; text-align: center; height: 3em; padding: 1em">
    <a href="https://github.com/ogios">
      <i class="fa fa-github" style="font-size: x-large"></i>
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