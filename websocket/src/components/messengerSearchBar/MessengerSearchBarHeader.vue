<template>
  <div class="messenger-search-bar-header">
    <div class="messenger-search-bar-header__inner">
      <ButtonArrowRight
          @arrowRightClick="onArrowRightClick"
      />
      <InputSearch @searchInput="onSearchInput"/>
    </div>
  </div>
</template>

<script>

import InputSearch from "../UIcomponents/InputSearch";
import ButtonArrowRight from "../UIcomponents/ButtonArrowRight";

export default {
  name: "MessengerSearchBarHeader",
  components: {ButtonArrowRight, InputSearch},
  methods: {
    onArrowRightClick() {
      this.$emit("arrowRightClick")
    },
    onSearchInput(value){
      this.$emit("searchInput", value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger-search-bar-header {
  background: $searchBarBg;
  min-height: 56px;

  &__inner {
    display: grid;
    grid-template-columns: auto 1fr;
    margin: 0 1%;
  }
}
</style>