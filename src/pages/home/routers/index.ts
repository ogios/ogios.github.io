import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewBlog from "@/pages/home/views/blog/blogedit/NewBlog.vue";
import Blogs from "@/pages/home/views/blog/blogshow/blogs/Blogs.vue";
import Blog from "@/pages/home/views/blog/blogshow/blog/Blog.vue";
import Draft from "@/pages/home/views/blog/blogedit/Draft.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/", name:"home", component: Home,meta: { keepAlive: true }},
        {path: "/newblog", name:"newblog", component: NewBlog, meta: { keepAlive: true }},
        {path: "/blogs", name: "blogs", component: Blogs},
        {path: "/blogs/:id", name:"blog", component: Blog},
        {path: "/updateBlog/:id", name: "update", component: Draft},
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

export default router;
