<template>
  <div class="messenger-contacts-bar-header">
    <div class="messenger-contacts-bar-header__inner">
      <InputSearch @searchInput="onSearchInput"/>
      <ButtonArrowLeft v-if="leftArrowButtonStatus" @arrowLeftClick="onArrowLeftClick"/>
    </div>
  </div>
</template>

<script>
import InputSearch from "../UIcomponents/InputSearch";
import ButtonArrowLeft from "../UIcomponents/ButtonArrowLeft";

export default {
  name: "MessengerContactsBarHeader",
  components: {ButtonArrowLeft, InputSearch},
  props: {
    leftArrowButtonStatus: {
      type: Boolean
    }
  },
  methods: {
    onSearchInput(value) {
      this.$emit("searchInput", value)
    },
    onArrowLeftClick() {
      this.$emit("arrowLeftClick")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger-contacts-bar-header {
  background: $contactsBarBg;

  &__inner {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px 2%;
  }
}
</style>