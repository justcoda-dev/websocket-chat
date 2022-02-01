<template>
  <div class="login-type-btn">
    <button :class="{active:isActive}" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "TypeBtn",
  props: {
    isActive: {
      type: Boolean
    }
  },
  methods: {
    onClick() {
      this.$emit("typeBtnClick")
    }
  }
}
</script>

<style lang="scss" scoped>
.login-type-btn {
  .active {
    background: rgba(135, 116, 225, 0.05);
  }
  button {
    width: 100%;
    min-width: 200px;
    min-height: 50px;
    border-radius: 10px;
    background: #2f2f2f;
    border: none;
    color: #a08dfa;
    font-size: 20px;
    transition: 0.2s;

    &:hover {
      background: rgba(135, 116, 225, 0.05);
      cursor: pointer;
    }
  }
}

</style>