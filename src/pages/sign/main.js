import 'font-awesome/css/font-awesome.min.css'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/message.scss'

import '@/common/css/normalize.css'
import '@/common/css/Lora.css'
import '@/pages/sign/assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'


const app = createApp(App)

// 全局引入element-plus
// import ElementPlus from 'element-plus'
// app.use(ElementPlus)
app.use(router)
app.mount('#app')