<script setup lang="ts">
import { useRouter } from "vue-router";

const BASE_IMG_URL = window.BASE_IMG_URL;
const router = useRouter();
const { blog } = defineProps<{
  blog: BlogAPI.BlogInfo;
}>();

function goToBlog() {
  const path = router.resolve({
    name: "blog",
    params: { id: blog.id },
  });
  console.log("Going to: ", path);
  window.open(path.href);
}
</script>

<template>
  <el-card @click="goToBlog" shadow="hover">
    <header class="clearfix card">
      <div class="discription left">
        <h1>{{ blog.title }}</h1>
        <span>{{ blog.summary }}</span>
      </div>
      <div class="right" v-if="blog.headImg !== '' && blog.headImg !== null">
        <el-image
          class="image"
          alt="Head Image"
          :fit="'contain'"
          :src="`${BASE_IMG_URL}/${blog.headImg}`"
        />
      </div>
    </header>
  </el-card>
</template>

<style scoped>
h1 {
  margin: 0;
}

.card {
}

.discription {
  margin-bottom: 1em;
}

.left {
}

.right {
}

.image {
  height: 100px;
  object-fit: fill;
}

@media screen and (min-width: 780px) {
  .card {
    display: flex;
  }

  .left {
    flex: 1;
  }
  .right {
    margin-left: 1em;
    float: right;
    display: flex;
    align-items: center;
  }

  .image {
    height: 100px;
    object-fit: fill;
  }
}
</style>
