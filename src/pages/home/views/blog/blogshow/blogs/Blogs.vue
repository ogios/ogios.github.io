<script setup lang="ts">
import BlogComponent from "./BlogComponent.vue";
import { reactive, ref } from "vue";
import { apiGetBlogs } from "@/pages/home/api/blogs";
import { useBlogStore } from "@/store/BlogStore";

const $store = useBlogStore();
const SIZE = ref<number>(20);
const PAGE_INDEX = ref<number>(0);
const TOTAL = ref<number>(0);
const blogs: BlogAPI.BlogInfo[] = reactive<BlogAPI.BlogInfo[]>([]);

function addBlog(data: BlogAPI.BlogsResponse) {
  blogs.push(...data.blogs);
}
apiGetBlogs(PAGE_INDEX.value, SIZE.value).then(
  (data: BlogAPI.BlogsResponse) => {
    console.log("blogs: ", blogs);
    TOTAL.value = data.total;
    addBlog(data);
  },
);

async function getBlogsAddPage() {
  if (SIZE.value * PAGE_INDEX.value > TOTAL.value) return;
  console.log("Getting new blog...");
  apiGetBlogs(++PAGE_INDEX.value, SIZE.value).then(addBlog);
}

const CATEGORY_TO_COLOR = {
  1: undefined,
  2: "#0bbd87",
  3: "#d93b68",
};
</script>

<template>
  <div>
    <div class="out_page"></div>
    <el-timeline
      class="out_page"
      style="padding: 3em 2em 1em"
      v-infinite-scroll="getBlogsAddPage"
    >
      <el-empty :image-size="200" v-if="blogs.length === 0" />
      <el-timeline-item
        v-for="(blog, index) in blogs"
        :timestamp="blog.updateTime + ` | ${blog.ownerName}`"
        :color="CATEGORY_TO_COLOR[blog.categoryId]"
        placement="top"
      >
        <a-popover placement="top">
          <template #content>
            <div>
              <p>
                <label>Category: </label>
                <el-tag
                  :color="CATEGORY_TO_COLOR[blog.categoryId]"
                  size="large"
                >
                  {{ $store.getCategoryNameById(blog.categoryId) }}
                </el-tag>
              </p>
              <p>
                <label>Tabs: </label>
                <el-tag
                  class="tag"
                  type="danger"
                  effect="light"
                  v-for="tab in JSON.parse(blog.tabs)"
                  :key="tab"
                  >{{ tab }}</el-tag
                >
              </p>
            </div>
          </template>
          <BlogComponent :blog="blog" />
        </a-popover>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped lang="less">
:deep :root {
  --el-fill-color-blank: #ffff;
}

.tag {
  margin-right: 0.5em;
}
</style>

<script lang="ts"></script>
