<script lang="ts" setup>
import Tail from "@/components/Tail.vue";
import PageSection from "@/components/PageSection.vue";
import HomeBottom from "@/components/root/HomeBottom.vue";
</script>

<template>
  <div>
    <PageSection>
      <!-- <h1 class="title">Home</h1> -->
      <section class="clearfix article p-1.2em">
        <img
          class="right head_img"
          src="/imgs/home_amber.gif"
          width="200px"
          alt=""
        />

        <h2>你好</h2>
        <span class="time">2023-06-24</span>
        <!-- <span class="time">2023-06-24</span> -->
        <div class="a-content">
          <p>已删除</p>
        </div>
      </section>

      <hr />
      <Tail></Tail>
    </PageSection>

    <PageSection>
      <HomeBottom></HomeBottom>
    </PageSection>
  </div>
</template>

<style lang="scss" scoped></style>
