import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Login from "@/pages/sign/views/Login.vue";
import Register from "@/pages/sign/views/Register.vue";

const router = createRouter({
    // mode: "hash",
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/", name:"home", redirect: "/login"},
        {path: "/login", name:"login", component: Login, meta: { keepAlive: true }},
        {path: "/register", name:"register", component: Register, meta: { keepAlive: true }},
        {path: "/**", name: "404", redirect:"/"},
    ],
    // 新增
    // scrollBehavior(to,from,savePosition){
    //     if(savePosition){
    //         //解决页面从列表页跳转到详情页返回,初始在原来位置
    //         return savePosition
    //     }else{
    //         //解决页面跳转后页面高度和前一个页面高度一样
    //         return {x:0,y:0}
    //     }
    // }
})

export default router