// import '@/common/css/normalize.css'
// import 'highlight.js/styles/tokyo-night-dark.css'
import 'font-awesome/css/font-awesome.min.css';
import 'highlight.js/styles/github-dark.css';
// import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/src/message.scss'
import '@/common/css/Lora.css';
import '@/pages/home/assets/main.css';
import '@/pages/home/assets/article.css';
import '@/pages/home/assets/custom_quill.css';
import '@/pages/home/assets/custom_element.css';
import '@/pages/home/assets/custom_tiptap.scss';
import '@/pages/home/assets/custom_tiptap_menubar.scss';
import '@/pages/home/assets/custom_tiptap_iframe.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import {createPinia} from "pinia";
import {Select, Popover, Tooltip, Input, Modal, Descriptions, DescriptionsItem} from "ant-design-vue";
const app = createApp(App);
window.content_key = "quill_content";
const whitelist = ['Source-Han-Serif-SC-VF', "Times-New-Roman", "Georgia", "Lora"];

const pinia = createPinia();

window.BASE_URL = import.meta.env.VITE_BASE_URL;
window.BASE_IMG_URL = `${BASE_URL}/raw/images`;
window.BASE_TEXT_URL = `${BASE_URL}/raw/text`;



// import ElementPlus from 'element-plus';
//
// app.use(ElementPlus);
// import {ElIcon, ElDivider} from "element-plus";
// app.use(ElIcon).use(ElDivider)
app.use(Select).use(Popover).use(Tooltip).use(Input).use(Modal).use(Descriptions).use(DescriptionsItem);
app.use(router);
app.use(pinia);
app.mount('#app');