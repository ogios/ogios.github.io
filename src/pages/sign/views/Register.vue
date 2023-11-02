<script setup>
import {User, Lock} from "@element-plus/icons-vue";

</script>

<template>
  <el-card class="card" shadow="hover">
    <div >
      <h1 style="margin: 0.5em; color: white">Become one!</h1>
      <el-input id="username" placeholder="Username" v-model="username" size="large">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>

      <el-input id="password" placeholder="Password" v-model="password" size="large">
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>

      <div style="justify-content: center;align-items: center;display: flex;margin-top: 2em;">
        <el-button @click="register" color="#b83b5e" size="large" plain>
          Register
        </el-button>
      </div>
    </div>


    <div style="margin-top: 3em">
      <p>Get access here</p>
      <p>-> <el-button color="#b83b5e" size="small" @click="goToLogin" plain>Login!</el-button></p>
    </div>

  </el-card>


</template>

<style scoped>
.card{
  width: 70%;
  margin: auto;
  background: #d93b68;
}

p{
  margin: 0.5em;
  padding:0;
  color: white;
  font-size: small;
}



</style>


<script>
import {useRouter} from "vue-router";
import {apiSignRegister, gotoHome} from "@/pages/sign/api";

export default {
  created() {
    this.$router = useRouter();
  },
  methods:{
    goToLogin(){
      this.$router.push({name: "login"});
    },
    register(){
      (async _ => {
        const data = await apiSignRegister(this.username, this.password);
        // const userinfo = {username: this.username};
        // localStorage.setItem("userinfo", JSON.stringify(userinfo));
        localStorage.setItem("token", data.token);
        gotoHome();
        console.log("data: ", data);
      })();
    }
  },
  data(){
    return{
      username: "",
      password: "",
    }
  }

}

</script>