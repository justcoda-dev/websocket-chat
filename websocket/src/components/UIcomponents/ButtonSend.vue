<template>
  <div class="button-send" @click="onClick">
    <div class="button-send__btn" ></div>
  </div>
</template>

<script>
export default {
  name: "ButtonSend",
  methods: {
    onClick() {
      this.$emit('sendClick')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.button-send {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  &:before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $headerColor;
    border-radius: 100%;
    transition: $transition;
  }
  &:hover {
    cursor: pointer;
  }

  &__btn {
    position: absolute;
    width: 24px;
    height: 24px;
    margin-left: 5px;
    background-image: url("../../assets/imgs/send.png");
    background-size: cover;
  }
}

</style>