<template>
  <div class="messenger-header">
    <div class="messenger-header__inner">
      <ButtonBurger v-if="burgerStatus" @burgerButton="onBurgerButton" :status="burgerStatus"/>
      <div class="messenger-header__person">
        <UserIcon :icon="contactUserSendingTo.icon"/>
        <div class="messenger-header__person-text">
          <UserName>{{ contactUserSendingTo.name }}</UserName>
          <span>contact.logined</span>
        </div>

      </div>
      <div class="messenger-header__menu">
        <ButtonSearch @searchClick="onSearchClick"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../UIcomponents/UserIcon";
import UserName from "../UIcomponents/UserName"
import ButtonSearch from "../UIcomponents/ButtonSearch";
import ButtonBurger from "../UIcomponents/ButtonBurger";

export default {
  name: "MessengerHeader",
  components: {ButtonBurger, ButtonSearch, UserIcon, UserName},
  props: {
    contactUserSendingTo: {
      type: Object,
      require: true
    },
    burgerStatus: {
      type: Boolean
    }
  },
  methods: {
    onSearchClick() {
      this.$emit("searchClick")
    },
    onBurgerButton() {
      this.$emit("burgerButton")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger-header {
  background: $headerColor;
  color: $fontColor;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__person {
    display: flex;
    align-items: center;
    min-height: 56px;
    margin-left: 10px;
  }

  &__person-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    margin-left: 15px;

    span {
      font-size: 14px;
      color: $placeholderColor;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
}
</style>