<template>
  <div>
    <span>
      登录页面
    </span>
    <el-button type="primary" plain @click="methods.toHome">注册</el-button>
    <el-button type="primary" plain @click="methods.getData">获取数据</el-button>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import API from "../../plugins";
let router = useRouter();

import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  console.log(store);
});
const methods = reactive({
  toHome() {
    router.push({
      path: "/home",
    });
  },
  getData() {
    API.get("/nba/index", {
      params: {
        num: 20,
      },
    }).then((res) => {
      console.log(res.data);
    });
  },
});
</script>

<style>
</style>