<template>
  <div class="input-text">
    <div class="input-text__inner">
      <textarea :value="inputMessage" @input="onInput" placeholder="Message"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props:{
    inputMessage:{
      type:String
    }
  },
  methods: {
    onInput({target: {value}}) {
      this.$emit("messengerInput", value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.input-text {
  &__inner {
    textarea {
      resize: none;
      position: relative;
      box-sizing: border-box;
      min-width: 150px;
      z-index: 1;
      color: $fontColor;
      background: $inputBgColor;
      border-radius: 9px;
      width: 100%;
      height: 100%;
      padding: 5px 20px;
      outline: none !important;
      border: 1px solid #2f2f2f;
      font-size: 18px;
      overflow: hidden;
      &::placeholder {
        position: absolute;
        top: 10px;
      }
    }
  }
}
</style>