<template>
  <li class="messenger-search-bar-list-item">
    <div class="messenger-search-bar-list-item__inner">
      <span class="messenger-search-bar-list-item__item">
        {{ message }}
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: "MessengerSearchBarListItem",
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger-search-bar-list-item {
  padding: 1px 2px;
  background: $contactsBarBg;
  list-style: none;

  &__inner {
  }

  &__item {
  display: flex;
    justify-content: center;
    align-items: center;
    min-height: 35px;
    margin-left: 1%;
    border-radius: 10px;
    color: #ffffff;
    background: $hoverBg;
    font-weight: bold;
  }

}
</style>