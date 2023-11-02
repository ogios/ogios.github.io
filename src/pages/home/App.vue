<script setup lang="ts">
import Header from '@/pages/home/components/Header.vue'
import {Discount, User} from "@element-plus/icons-vue";
import {storeToRefs} from "pinia";
import {useSignStore} from "@/store/SignStore";
import {ElMessage} from "element-plus";

const $store = useSignStore();
const { userinfo } = storeToRefs($store);

function show(){
  console.log(userinfo.value);
}

function checkIPv6Access(){
  fetch('https://api6.ipify.org?format=json')
      .then(()=>{ElMessage.success("有ipv6访问权限")})
      .catch(() => {ElMessage.error("无ipv6访问权限")});
}
checkIPv6Access();

</script>

<template>

  <div>
    <div class="to-sign" ref="sign" @click="goToSign">
      <div style="display: flex; justify-content: center; align-items: center">
        <el-icon><User /></el-icon>
        <label>『 {{ userinfo.username }} 』</label>
      </div>
    </div>
<!--    <div ref="sign" @click="show">-->
<!--      <div style="display: flex; justify-content: center; align-items: center">-->
<!--        <el-icon><User /></el-icon>-->
<!--        <label>show</label>-->
<!--      </div>-->
<!--    </div>-->
    <div class="contain">


      <Header class="out_page" style="margin-bottom: 0"/>


      <router-view v-slot="{ Component, route }">
        <el-collapse-transition>
          <keep-alive :include="alive_list">
            <component :is="Component"/>
          </keep-alive>
        </el-collapse-transition>
      </router-view>


    </div>

  </div>


</template>

<style scoped>

.to-sign{
  background-color: #d93b68;
  color: white;
  position: absolute;
  top:1em;
  right: 1em;
  padding: 10px;
  cursor: pointer;
  --el-sign-bg-color: #c72151;
  c: #8426e8;
  transition: var(--el-transition-duration);
}

.to-sign:hover{
  box-shadow: var(--el-box-shadow);
  border-radius: var(--el-card-border-radius);
  border: 1px solid var(--el-card-border-color);
  background-color: var(--el-sign-bg-color);
  overflow: hidden;
  transition: var(--el-transition-duration);
}

.to-sign:active{
  box-shadow: var(--el-box-shadow);
  border-radius: var(--el-card-border-radius);
  border: 1px solid var(--el-card-border-color);
  background-color: #930f35;
  overflow: hidden;
  transition: 0.05s;
}

</style>

<script lang="ts">


export default {
  methods:{
    goToSign(){
      window.location.href = location.origin + "/sign";
    },
    resetSign(){
      localStorage.removeItem("token");
      localStorage.removeItem("userinfo");
      this.username = "Unknown User";
      this.userinfo = null;
    },
    // checkToken(){
    //   let token = localStorage.getItem("token");
    //   if (token === null){
    //     this.resetSign();
    //     console.log("token check fail")
    //   } else {
    //     let status = this.sign.checkToken(token);
    //     console.log(status)
    //   }
    // }
  },

  data() {
    let shit = localStorage.getItem("userinfo");
    return {
      alive_list: ["Home"],
      userinfo: localStorage.getItem("userinfo"),
      username: shit === null ? "Unknown User" : JSON.parse(shit).username,
    }
  },

  // mounted() {
  //   this.checkToken();
  // }
}

</script>
