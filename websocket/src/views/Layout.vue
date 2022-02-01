<template>
  <div class="chat-layout">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Layout"
}
</script>

<style lang="scss" scoped>
.chat-layout {
  height: 100vh;
}
</style>