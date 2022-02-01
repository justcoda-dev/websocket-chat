<template>
  <div class="messenger-search-bar-list">
    <div class="messenger-search-bar-list__inner">
      <ul class="messenger-search-bar-list__list">
        <template v-for="message of messagesList">
          <MessengerSearchBarListItem
              :key="message.id"
              :message="message.message"
          />
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import MessengerSearchBarListItem from "../messengerSearchBar/MessengerSearchBarListItem";

export default {
  name: "MessengerSearchBarList",
  components: {MessengerSearchBarListItem},
  props: {
    messagesList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.messenger-search-bar-list {
  &__inner {
  }
  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
}
</style>