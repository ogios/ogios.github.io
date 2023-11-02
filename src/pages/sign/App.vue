<script setup>
const alive_list = ["Login", "Register"];


</script>

<template>
  <div id="out">

    <router-view v-slot="{ Component, route }">
      <transition>
        <keep-alive :include="alive_list">
          <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>

  </div>
</template>

<style scoped>
#out{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

</style>