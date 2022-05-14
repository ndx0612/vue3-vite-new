## vue3入门基础

### 1、创建一个vue3项目

```sh
# 注意不能有中文，否则一些插件（elementUI）无法导入
npm init vite-app vue-app-pro
cd vue-app-pro
npm i
npm run dev
```

### **2、导入elementUI库**

elementUI官网：https://element-plus.org/zh-CN/guide/design.html

```sh
# 注意不能有中文
npm install element-plus --save
```

main.js下导入

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// reateApp(App).mount('#app')
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### **3、页面初始化和安装sass**

安装sass

```sh
npm install sass --save-dev
npm install sass-loader --save-dev
```

### **4、vue-router安装和使用**

安装vue-router

```sh
npm i vue-router
```

main.js导入模块

```javascript
import router from "./router/index"
app.use(router)
```

router/index.js选择模式

请求拦截

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // name属性的说明和用法：https://router.vuejs.org/zh/guide/essentials/named-routes.html
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login", //
    component: () => import("../view/login/index.vue"), // 你要跳转的路径
  },
  {
    path: "/home",
    component: () => import("../view/home/index.vue"),
  },
  {
    path: "/register",
    component: () => import("../view/login/register.vue"),
  },
]

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

### **5、axios安装与封装**

安装axios

```
npm i axios
```

创建src/plugins/index.js

```javascript
//导入axios
import axios from 'axios'

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
// const API = axios.create({
//   baseURL: "http://api.tianapi.com",
//   method: "get",
//   params: {
//     key: "c498f8d96e8d9ad2368513957311caf3",
//   },
// })

const API = {
  get: axios.create({
    baseURL: "http://api.tianapi.com", // 服务器地址
    method: "get", // 请求方式
    params: {
      key: "c498f8d96e8d9ad2368513957311caf3", // 携带默认参数
    },
  }),
  post: axios.create({
    baseURL: "http://api.tianapi.com",
    method: "post",
    params: {
      key: "c498f8d96e8d9ad2368513957311caf3",
    },
  })
}


//导出我们建立的axios实例模块，ES6 export用法
export default API
```

main.js引入

```javascript
import axios from './plugins/index.js'
app.config.globalProperties.$axios = axios;  //配置axios的全局引用
```

使用封装的API

```javascript
 import API from "../../plugins";
   getData() {
    API.get("/nba/index", {
      params: {
        num: 20,
      },
    }).then((res) => {
      console.log(res.data);
    });
  },
```

### **6、vuex安装**

安装vuex

```
npm i vuex
```

创建src/store/index.js

```javascript
import { createStore } from "vuex";

//创建状态
const state = {}
//创建actions
const actions = {}
//创建mutataions
const mutations = {}

//创建store
const store = createStore({
  state,
  actions,
  mutations
})
//暴露出去
export default store

```

main.js引入

```
import store from './store/index'
app.use(store)
```

使用

```javascript
import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  console.log(store);
});

```

