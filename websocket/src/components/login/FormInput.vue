<template>
  <div class="login-input">
    <input @input="onInput" type="text">
  </div>
</template>

<script>
export default {
  name: "FormInput",
  methods: {
    onInput({target: {value}}) {
      this.$emit("input", value)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-input {
  input {
    width: 100%;
    min-height: 50px;
    padding: 0px 15px;
    box-sizing: border-box;
    border: 1px solid #5f5f5f;
    outline: none;
    font-size: 20px;
    border-radius: 10px;
    color: #ffffff;
    background: #2f2f2f;
    transition: .2s;
    &:hover {
      border: 1px solid #8774e1 ;
    }
    &:focus {
      border: 1px solid #8774e1 ;
      box-shadow: 0px 0px 4px #8774e1;
    }
  }
}
</style>