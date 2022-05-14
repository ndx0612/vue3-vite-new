<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>


<style lang="scss">
.content {
  width: 100vw;
  height: 100vh;
}

html,
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  background: #fafafa;
  font-family: MicrosoftYaHei;
  color: #303133;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>