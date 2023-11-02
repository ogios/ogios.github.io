<script setup lang="ts">
// import BlogContent from "./BlogContent.vue";
import {useRoute} from "vue-router";
import {apiGetBlogContent, apiGetOneBlog} from "@/pages/home/api/blogs";
import {reactive, ref} from "vue";
import BlogToolBar from "./BlogToolBar.vue";
import TextEditor from "@/pages/home/components/TextEditor.vue";


const $route = useRoute();
const id: number = parseInt(<string>$route.params.id);
const blog_info: BlogAPI.BlogInfo = reactive<BlogAPI.BlogInfo>({
  categoryId: 1,
  content: "",
  createTime: "",
  headImg: "",
  id: 0,
  isFinished: 0,
  isTop: 0,
  ownerId: 0,
  ownerName: "",
  summary: "",
  tabs: "",
  title: "",
  updateTime: "",
  updateUserId: 0
});

const blog_content = ref<string>("");
const textEditor = ref();


apiGetOneBlog(id).then((data: BlogAPI.OneBlogResponse) => {
  for (const key in data.blogInfo) blog_info[key] = data.blogInfo[key];
  apiGetBlogContent(blog_info.content).then((res) => {
    console.log("data: ", res.data);
    blog_content.value = res.data;
    textEditor.value.updateContent(blog_content.value);
  });
  // console.log(`blog_info: `, blog_info);
  console.log("blog_content: ", blog_content.value);
})

</script>

<script lang="ts">
import {nextTick} from "vue";

export default {
  mounted() {
    nextTick(() => {
      document.querySelector(".editor__content")!.style.padding! = '0';
      document.querySelector(".editor")!.style.border = '0';
    });
  }
}
</script>

<template>
  <div class="page clearfix article" style="margin-top: 1em">

    <BlogToolBar v-model:info="blog_info" />

    <div class="blog-content">
      <div class="ql-snow ql-container out_page">
        <div class="clearfix">
          <h1>{{ blog_info.title }}</h1>
          <span class="time">上次更新时间: {{ blog_info.updateTime }}</span>
          <TextEditor ref="textEditor" v-model:content="blog_content" :editable="false"></TextEditor>
          <!--        <div class=" ql-editor " v-html="props.content"/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.blog-content{
  .ql-editor {
    padding: 0;
    height: auto;
  }

  h1 {
    margin: 0;
    margin-bottom: 0.5em;
  }

  .out_page {
    padding: 2em;
  }

  .out_page a {
    color: black;
    outline: none;
    position: relative;
    /*text-decoration: none;*/
    transition: color .1s ease;
  }

  .out_page a::after {

    outline: none;
    --scale: 0;
    content: '';
    position: absolute;
    /*position: relative;;*/
    left: 0;
    right: 0;
    top: 100%;
    height: 1px;
    background: #000000;
    transform: scaleX(var(--scale));
    transition: -webkit-transform 0.15s cubic-bezier(0.1, 1, 1, 1);
    text-decoration: none;
  }

  .out_page a:hover::after {
    text-decoration: none;
    --scale: 1;
  }
}
</style>
