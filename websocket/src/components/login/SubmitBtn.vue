<template>
  <div class="login-submit-btn">
    <button @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitBtn",
  methods: {
    onClick() {
      this.$emit("submitBtnClick")
    }
  }
}
</script>

<style lang="scss" scoped>
.login-submit-btn {
  button {
    width: 100%;
    min-width: 200px;
    min-height: 50px;
    border-radius: 10px;
    background: rgba(135, 116, 225, 0.08);
    border: none;
    color: #a08dfa;
    font-size: 20px;
    transition: 0.2s;

    &:hover {
      background: rgba(135, 116, 225, 0.15);
      cursor: pointer;
    }
  }
}
</style>