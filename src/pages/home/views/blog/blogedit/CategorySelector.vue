<script setup lang="ts">
import {useBlogStore} from "@/store/BlogStore";
import {storeToRefs} from "pinia";
import {PropType} from "vue";


const $store = useBlogStore();
const { categories, tabs } = storeToRefs($store);

const props = defineProps({
  uploadData: {
    type: Object as PropType<BlogAPI.BlogRequest>,
    required: true
  },
});

const show = () => {
  console.log("cate: ", categories);
  // console.log( "_ca: ", _ca);
  console.log("uploadData: ", props.uploadData);
};

</script>

<template>
  <div>
<!--    <el-button @click="show">show</el-button>-->

    <!-- 分类 -->
    <div class="option">
      <el-select v-model="props.uploadData!.categoryId" placeholder="category" >
        <template #prefix>
          <label>分类</label>
        </template>
        <el-option
            v-for="val in categories"
            :key="val.id"
            :label="val.name"
            :value="val.id">
        </el-option>
      </el-select>
    </div>


    <!-- 标签 -->
    <div class="option">
      <el-select
          v-model="props.uploadData!.tabs" placeholder="选择标签"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
      >
        <template #prefix>
          <label>标签</label>
        </template>
        <el-option
            v-for="item in tabs"
            :key="item"
            :label="item"
            :value="item"
        />
      </el-select>
    </div>


    <div class="option">
      <!-- 置顶 -->
      <div>
        <label>置顶: </label>
        <el-tooltip :content="`置顶: ${(props.uploadData!.isTop === 1) ? '是': '否'}`" placement="top">
          <el-switch
              v-model="props.uploadData!.isTop"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #bebebe"
              :active-value="1"
              :inactive-value="0"
              size="large"
          />
        </el-tooltip>
      </div>


      <!-- 是否为草稿 -->
      <div>
        <label>草稿: </label>
        <el-tooltip :content="`是否公开: ${(props.uploadData!.isFinished === 1) ? '是': '否'}`" placement="top">
          <el-switch
              v-model="props.uploadData!.isFinished"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #bebebe"
              :active-value="1"
              :inactive-value="0"
              size="large"
          >
          </el-switch>
        </el-tooltip>
      </div>

    </div>





  </div>
</template>

<style lang="less" scoped>
.option{
  margin-top: 1em;
  //margin-bottom: 1em;
  margin-right: 1em;


  .el-switch{
    margin-right: 1em;
  }

  label{
    margin-right: 0.5em;
  }
}

</style>
