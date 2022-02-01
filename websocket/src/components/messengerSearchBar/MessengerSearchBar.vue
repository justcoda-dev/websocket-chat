<template>
  <div class="messenger-search-bar">
    <div class="messenger-search-bar__inner">
      <MessengerSearchBarHeader
          @arrowRightClick="onArrowRightClick"
          @searchInput="onSearchInput"
          class="messenger-search-bar__header"
      />
      <MessengerSearchBarList :messagesList="messagesList"/>
    </div>
  </div>
</template>

<script>


import MessengerSearchBarHeader from "./MessengerSearchBarHeader";
import MessengerSearchBarList from "./MessengerSearchBarList";

export default {
  name: "MessengerSearchBar",
  components: {MessengerSearchBarList, MessengerSearchBarHeader},
  props: {
    messagesList: {
      type: Array
    }
  },
  methods: {
    onArrowRightClick() {
      this.$emit("arrowRightClick")
    },
    onSearchInput(value) {
      this.$emit("messagesSearchInput", value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger-search-bar {
  background: $searchBarBg;

  &__inner {
  }

  &__header {
    padding: 8px 0;
  }
}
</style>