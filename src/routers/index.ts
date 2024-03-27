import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/root/Home.vue'
import Projects from '@/views/projects/Projects.vue'
import BlogList from '@/views/blogs/BlogList.vue'
import Blog from '@/views/blogs/Blog.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Home' } },
  { path: '/projects', name: 'projects', component: Projects, meta: { title: 'Projects' } },
  {
    path: '/blogs',
    redirect: {
      name: 'blogs',
    },
    meta: { title: 'Blogs' },
    children: [
      {
        path: '/blogs',
        name: 'blogs',
        component: BlogList,
      },
      {
        path: '/blogs/:bid',
        name: 'blog',
        component: Blog,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
