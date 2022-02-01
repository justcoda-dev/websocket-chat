<template>
  <li class="contacts-bar-item">
    <div class="contacts-bar-item__inner">
      <div class="contacts-bar-item__item" @click="onClick">

        <UserIcon
            :icon="contact.icon"
        />

        <div class="contacts-bar-item__text">
          <UserName>
            {{ contact.name }}
          </UserName>
          <!--          <span class="contacts-bar-item__last-message">last message</span>-->
        </div>

        <div class="contacts-bar-item__submenu">
          <span class="contacts-bar-item__time">contact.logined</span>
          <div class="contacts-bar-item__pin">online</div>
        </div>

      </div>
    </div>
  </li>
</template>

<script>
import UserIcon from "../UIcomponents/UserIcon";
import UserName from "../UIcomponents/UserName";

export default {
  name: "MessengerContactsBarItem",
  components: {UserName, UserIcon},
  props: {
    contact: {
      type: Object,
      require: true
    }
  },
  methods: {
    onClick() {
      this.$emit('contactsBarItemClick', this.contact)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.contacts-bar-item {
  background: $contactsBarBg;
  list-style: none;

  &__inner {
  }

  &__item {
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    min-height: 72px;
    margin-left: 1%;
    padding: 0 1%;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      background: $hoverBg;
    }
  }

  &__text {
    margin-left: 15px;
    display: flex;
    flex-direction: column;

  }

  &__last-message {
    color: $placeholderColor;
    margin-top: 5px;
    font-weight: 600;
  }

  &__submenu {
    margin-right: 2%;
    justify-self: flex-end;
    color: $placeholderColor;
    font-size: 14px;
  }
}
</style>