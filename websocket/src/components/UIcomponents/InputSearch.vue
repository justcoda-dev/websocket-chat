<template>
  <div class="input-search">
    <div class="input-search__inner">
      <input placeholder="Search" @input="onInput" type="text">
      <div class="input-search__icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    placeholder: {},
  },
  methods: {
    onInput({target: {value}}) {
      this.$emit('searchInput', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.input-search {
  &__inner {
    position: relative;

    input {
      position: relative;
      box-sizing: border-box;
      z-index: 1;
      color: $fontColor;
      background: $inputBgColor;
      border-radius: 22px;
      width: 100%;
      padding: 0px 40px;
      height: 42px;
      outline: none !important;
      border: 1px solid #2f2f2f;
      transition: $transition;
      font-size: 18px;

      &:focus {
        border: 1px solid $activeColor;

      }

      &:hover {
        border: 1px solid #aaaaaa;
      }
    }
  }

  &__icon {
    position: absolute;
    height: 20px;
    width: 20px;
    background-image: url("../../assets/imgs/search.png");
    background-size: cover;
    top: 12px;
    bottom: 0;
    left: 12px;
    right: 0;
    color: $placeholderColor;
    opacity: .6;
    z-index: 1;
  }

}

</style>