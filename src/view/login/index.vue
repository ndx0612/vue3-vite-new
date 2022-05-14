<template>
  <div>
    <span>
      登录页面
    </span>
    <el-button type="primary" plain @click="methods.toHome">注册</el-button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
const methods = reactive({
  toHome() {
    router.push({
      path: "/home",
    });
  },
});
</script>

<style>
</style>