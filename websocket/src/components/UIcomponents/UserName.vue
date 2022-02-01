<template>
  <div class="user-name">
    <span class="user-name__text"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: "UserName"
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.user-name {
  &__text {
    color: $fontColor;
    font-weight: 600;
  }
}
</style>