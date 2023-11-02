<script lang="ts" setup>
import TextEditor from "@/pages/home/components/TextEditor.vue";
import {Upload} from "@element-plus/icons-vue";
import CategorySelector from "@/pages/home/views/blog/blogedit/CategorySelector.vue";
import {computed, reactive, ref, watch} from "vue";
import {apiUploadBlog, apiUploadHeadImg} from "@/pages/home/api/blogs";
import {useRouter} from "vue-router";
const $router = useRouter();

const SUMMARY_SIZE: number = 200;
const uploadData: BlogAPI.BlogRequest = reactive<BlogAPI.BlogRequest>({
  categoryId: 1, content: "", headImg: "", isFinished: 0, isTop: 0, summary: "", title: "", tabs: [],
});
const editor = ref();


const headImg = reactive([]);
const show = () => console.log(getContentFromTiptap());

function handleFileChange(file, fileList) {
  console.log(fileList);
  headImg.pop();
  headImg.push(fileList[0].raw);
}
function handleFileRemove() { headImg.pop();}
function getContentFromTiptap(): string {return editor.value.editor.getHTML();}
function getTextFromTiptap(): string {return editor.value.editor.getText({blockSeparator: '\n\n'});}
function formatData(data: BlogAPI.BlogRequest, content: string, headImg: string = ""): Object {
  data.content = content;
  data.headImg = headImg;
  data.summary = data.summary.length === 0 ? getTextFromTiptap().replace("\n", "").slice(0, SUMMARY_SIZE-5)
      + (getTextFromTiptap().length > SUMMARY_SIZE ? "..." : "") : data.summary;
  // data.tabs = JSON.stringify(uploadData.tabs);
  return data;
}

const refreshColWidth = (): number => {
  const clientWidth = document.documentElement.clientWidth;
  return  clientWidth > 600 ? 12 : 24;
}
const colWidth = ref<number>(refreshColWidth());


window.onresize = () => {
  return (()=>{
    colWidth.value = refreshColWidth();
  })();
};

const content_size = ref<number>(0);
const moniterContentSize = (num: number) => {
  console.log("content update")
  content_size.value = num;
}


async function uploadContent() {
  let upData = JSON.parse(JSON.stringify(uploadData));
  const htmlUploadData: BlogAPI.HTMLUploadResponse = await apiUploadHTML(getContentFromTiptap());
  // ElMessage.success(`文件上传成功: ${htmlUploadData.content}`);
  if (headImg.length > 0) {
    const headImgUploadData: BlogAPI.HeadImgUploadResponse = await apiUploadHeadImg(headImg[0]);
    // ElMessage.success(`图片上传成功: ${headImgUploadData.imageName}`);
    upData = formatData(upData, htmlUploadData.content, headImgUploadData.imageName);
  } else { upData = formatData(upData, htmlUploadData.content); }
  console.log(upData);

  apiUploadBlog(upData).then((data: BlogAPI.BlogUploadResponse) => {
    ElMessage.success(`文章已上传: ${data.id}`);
    const id = data.id;
    console.log("id: ", id);
    $router.push({name: "blogs"});
  });
}

</script>

<template>
  <div class="out_page" style="padding: 1em">

    <textarea
        v-model="uploadData.title"
        placeholder="Title"
        rows="1"
    />
    <!--    <QuillEditor  :toolbar="toolbarOptions" :modules="modules" toolbar="full"  theme="snow"/>-->
    <TextEditor ref="editor" :editable="true" content=" " @monitor-size="moniterContentSize"></TextEditor>
<!--    <el-button @click="show" > show </el-button>-->


    <div style="margin-top: 3em">
      <el-divider>配置文件</el-divider>
      <h2 style="margin: 0">配置</h2>
      <el-input
          v-model="uploadData.summary"
          :maxlength="SUMMARY_SIZE"
          :autosize="{ minRows: 5, maxRows:5 }"
          placeholder="文章总结"
          show-word-limit
          type="textarea"
      />

      <el-row class="row-bg" justify="center">
        <el-col :span="colWidth">
          <div class="grid-content">
            <CategorySelector v-model:upload-data="uploadData" style="display: inline-block; overflow: hidden; width: 100%"/>
          </div>
        </el-col>
        <el-col :span="colWidth.toString()">
          <div class="grid-content">
            <el-upload
                :auto-upload="false"
                :class="{hide: headImg.length > 0}"
                :file-list="headImg"
                :multiple="false"
                :on-change="handleFileChange"
                :on-remove="handleFileRemove"
                action=""
                list-type="picture-card"
                style="display: inline-block;margin-top: 1em;margin-bottom: 1em"
            >
              <label slot="tip" class="el-upload__tip">Head image</label>
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </div>

    <label>文本大小: {{ Math.round(content_size/1024/1024 * 100) / 100 }}MB</label>
<!--    <el-button size="small" type="primary" @click="show">点击上传</el-button>-->


    <div style="display: block">
      <div class="edit_buttons" style="text-align: center; margin: 2em;">

        <!--      上传-->
        <el-tooltip
            class="box-item"
            content="Upload"
            effect="dark"
            placement="bottom-start"
        >
          <el-button
              :color="'#faebd7'"
              circle
              style="border: 1px solid black; width: 5em; height: 5em"
              @click="uploadContent">
            <el-icon :size="17">
              <Upload/>
            </el-icon>
          </el-button>
        </el-tooltip>

<!--        &lt;!&ndash;      保存&ndash;&gt;
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="Save content"
                  placement="bottom-start"
              >
              <el-button
                  @click="saveContent"
                  circle
                  :color="'#faebd7'"
                  style="border: 1px solid black; width: 5em; height: 5em">
                <el-icon :size="17"><Checked /></el-icon>
              </el-button>
              </el-tooltip>

        &lt;!&ndash;      预览&ndash;&gt;
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="Preview"
                  placement="bottom-start">
              <el-button
                  @click="previewContent"
                  circle
                  :color="'#faebd7'"
                  style="border: 1px solid black; width: 5em; height: 5em">
                <el-icon :size="17"><View /></el-icon>
              </el-button>
              </el-tooltip>-->


      </div>
    </div>


  </div>
</template>

<style>
.hide .el-upload--picture-card {
  display: none;
}

.el-select {
  width: 100%;
}

</style>

<style scoped>
.edit_buttons el-button {
  margin-left: 1em;
  margin-right: 1em;
  border: 1px solid black;
  width: 5em;
  height: 5em;
}

textarea {
  width: 99.5%;
  font-size: xx-large;
  height: auto;
  background-color: transparent;
  outline: none;
  border: none;
  margin-bottom: 0.5em;
  resize: none;
  font-family: Lora, serif;
}

</style>

<script lang="ts">
// import TextEditor from "@/components/TextEditor.vue";
import {ElMessage} from "element-plus";
import {apiUploadHTML} from "@/pages/home/api/blogs";
// import {useRoute, useRouter} from 'vue-router'

export default {
  /*methods: {
    getContentFromQuill(){ return this.$refs.editor.quill.root.innerHTML; },
    getTitle(){ return document.querySelector("textarea").value; },
    getContentFromLocal(){ return window.localStorage.getItem(window.content_key); },
    setContentFromLocal(){
      let quill_content = this.getContentFromQuill();
      console.log(quill_content);
      let title = document.querySelector("textarea").value;
      console.log(title);
      let date = new Date();
      let data = {
        title: title,
        time: "" + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate(),
        quill_content: quill_content,
      }
      window.localStorage.setItem(window.content_key, JSON.stringify(data));
    },
    uploadContent(){
      (async _ => {
        // const name = await apiUploadHTML(this.getContentFromQuill());
        console.log();
      })();
      // this.blogs.uploadBlog(token, this.getTitle(), null, this.getContentFromQuill(), 0);
      // if (this.saveContent() !== true) return;
      // console.log(this.$refs.editor.quill.root.innerHTML)
    },
    saveContent(){
      let message = {
        grouping: true,
      };
      try{
        let quill_content = this.getContentFromQuill();
        if (quill_content !== undefined && quill_content != null){
          this.setContentFromLocal();
          // window.localStorage.setItem(window.content_key, quill_content);
          message.type = "success";
          message.message = "Content saved."
        } else {
          message.type = "error";
          message.message = "Fail to fetch content from the editor!"
        }
      } catch (e) {
        message.type = "error";
        message.message = e;
      }
      ElMessage(message);
      return message.type === "success"
    },
    previewContent(){
      if (this.saveContent() !== true) return;
      console.log(this.$route.path);
      this.$router.push({path: "/newblog/preview"});
    }
  },

  mounted() {
    document.body.style.setProperty('--el-color-primary', '#000000');
    document.body.style.setProperty('--el-color-primary-light-9', '#F5FBF0');
    document.body.style.setProperty('--el-color-primary-light-3', '#95d475');
    document.body.style.setProperty('--el-fill-color-blank', '#faebd7');
    document.body.style.setProperty('--el-bg-color-overlay', '#faebd7');
    document.body.style.setProperty('--el-fill-color-light', '#fce0b4');
    document.body.style.setProperty('--el-fill-color', '#000000');
    document.body.style.setProperty('--el-color-info', '#ffffff');
    document.body.style.setProperty('--el-border-color-hover', '#7e7e7e');
    document.body.style.setProperty('--el-border-color', '#978e85');


    document.querySelector(".ql-snow").style.borderTop = "1px solid black";
    document.querySelector(".ql-snow").style.borderRight = "1px solid black";
    document.querySelector(".ql-snow").style.borderLeft = "1px solid black";
    document.querySelector(".ql-snow").style.borderRight = "1px solid black";
    document.querySelector(".ql-snow").style.borderTopLeftRadius = "5px";
    document.querySelector(".ql-snow").style.borderTopRightRadius = "5px";
    document.querySelector(".ql-container").style.border = "1px solid black";
    document.querySelector(".ql-container").style.borderBottomLeftRadius = "5px";
    document.querySelector(".ql-container").style.borderBottomRightRadius = "5px";
    this.$nextTick(() => {
      if (window.localStorage.hasOwnProperty(window.content_key)){
        let data = JSON.parse(this.getContentFromLocal());
        this.$refs.editor.quill.root.innerHTML = data.quill_content;
        document.querySelector("textarea").value = data.title;
      }
    })
  },*/
  name: "NewBlog",

}
</script>