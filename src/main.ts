import 'virtual:uno.css'

import '@/common/css/Lora.css'
import '@/assets/main.css'
import '@/assets/article.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
const app = createApp(App)
app.use(router)
app.mount('#app')
