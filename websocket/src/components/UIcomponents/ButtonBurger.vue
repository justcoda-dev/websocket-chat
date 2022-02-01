<template>
  <div class="button-burger" @click="onClick">
    <div class="button-burger__btn">
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonBurger",
  methods: {
    onClick() {
      this.$emit('burgerButton')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.button-burger {
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
      border-radius: 10px;
    }
  }

  &__btn {
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("../../assets/imgs/menu-burger.png");
    background-size: cover;
  }
}
</style>