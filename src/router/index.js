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
]

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router