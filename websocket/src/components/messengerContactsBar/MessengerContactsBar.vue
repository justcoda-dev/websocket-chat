<template>
  <div class="contacts-bar">
    <div class="contacts-bar__inner">
      <MessengerContactsBarHeader
          :leftArrowButtonStatus="leftArrowButtonStatus"
          @searchInput="onSearchInput"
          @arrowLeftClick="onArrowLeftClick"
          class="contacts-bar__header"
      />
      <MessengerContactsList
          :contactUsersList="contactUsersList"
          @contactsBarItemClick="onContactsBarItemClick"
      />
    </div>
  </div>
</template>

<script>

import MessengerContactsBarHeader from "./MessengerContactsBarHeader";
import MessengerContactsList from "./MessengerContactsList";

export default {
  name: "MessengerContactsBar",
  components: {MessengerContactsList, MessengerContactsBarHeader},
  props: {
    contactUsersList: {
      type: Array,
    },
    leftArrowButtonStatus: {
      type: Boolean
    }
  },
  methods: {
    onArrowLeftClick(){
      this.$emit("arrowLeftClick")
    },
    onContactsBarItemClick(contactsUser) {
      this.$emit("contactsBarItemClick", contactsUser)
    },
    onSearchInput(value) {
      this.$emit("searchInput", value)
    }
  }

}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.contacts-bar {
  background: $contactsBarBg;

  &__inner {
  }

  &__header {
    border-bottom: 1px #0f0f0f solid;
  }
}
</style>