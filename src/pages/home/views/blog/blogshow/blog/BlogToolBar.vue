<script setup lang="ts">
import {CaretLeft, Delete, Edit} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import {useSignStore} from "@/store/SignStore";
import {storeToRefs} from "pinia";
import {apiDeleteBlog} from "@/pages/home/api/blogs";
const $router = useRouter();
const goBack = () => $router.go(-1);
const goToModify = () => $router.push({
  name: "update",
  params: {id: props.info.id},
})

const props = defineProps<{
  info: BlogAPI.BlogInfo
}>();

const $store = useSignStore();
const {userinfo} = storeToRefs($store);

const deleteBlog = () => apiDeleteBlog(props.info.id).then(_ => {
  $router.push({name: "blogs"});
})

</script>

<template>
  <div>
    <div class="block">
      <el-tooltip
          class="box-item"
          effect="dark"
          content="Go back"
          placement="bottom-start">
        <el-button
            @click="goBack"
            circle
            :color="'#faebd7'"
            :size="'default'"
            style="border: none">
          <el-icon>
            <CaretLeft/>
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>

    <div class="block" v-if="userinfo.isAdmin || userinfo.id === props.info.ownerId">
      <el-tooltip
          class="box-item"
          effect="dark"
          content="Delete"
          placement="bottom-start">
        <el-button
            @click="deleteBlog"
            circle
            :color="'#faebd7'"
            :size="'default'"
            style="border: none">
          <el-icon>
            <Delete />
          </el-icon>
        </el-button>
      </el-tooltip>

      <el-tooltip
          class="box-item"
          effect="dark"
          content="Delete"
          placement="bottom-start">
        <el-button
            @click="goToModify"
            circle
            :color="'#faebd7'"
            :size="'default'"
            style="border: none">
          <el-icon>
            <Edit />
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>

  </div>
</template>

<style scoped>
.block {
  display: inline-block;
  margin-right: 1em;
}

/*.left{
 width: 50%;
 display: inline-block;
}

.right{
  width: 50%;
  display: flex;
  justify-content: flex-end;
  clear: both;
}
 */

</style>