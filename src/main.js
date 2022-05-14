import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// reateApp(App).mount('#app')
const app = createApp(App)

// 导入router模块
import router from "./router/index"
app.use(router)

// 导入axios
import axios from './plugins/index'
app.config.globalProperties.$axios = axios

// 导入axios
import store from './store/index'
app.use(store)

app.use(ElementPlus)
app.mount('#app')