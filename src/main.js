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

app.use(ElementPlus)
app.mount('#app')