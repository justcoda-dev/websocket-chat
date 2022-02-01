<template>
  <div class="button-arrow-right" @click="onClick">
    <div class="button-arrow-right__btn">
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonArrowRight",
  methods: {
    onClick() {
      this.$emit('arrowRightClick')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.button-arrow-right {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  transition: 2s;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: $transition;
  }

  &:hover {
    cursor: pointer;

    &:before {
      background-color: $hoverBg;
      border-radius: 100%;
    }
  }

  &__btn {
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("../../assets/imgs/right-arrow.png");
    background-size: cover;
  }
}
</style>