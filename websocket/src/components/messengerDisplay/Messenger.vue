<template>
  <div class="messenger">
    <div class="messenger__inner">
      <MessengerHeader
          :burgerStatus="burgerStatus"
          :contactUserSendingTo="contactUserSendingTo"
          @searchClick="onSearchClick"
          @burgerButton="onBurgerButton"
      />
      <MessengerDisplay
          :messages="messages"
          :contactUserSendingTo="contactUserSendingTo"
          :inputMessage="inputMessage"
          @sendClick="onSendClick"
          @messengerInput="onMessengerInput"
          class="messenger__display"
      />
    </div>
  </div>
</template>

<script>
import MessengerHeader from "./MessengerHeader";
import MessengerDisplay from "./MessengerDisplay";


export default {
  name: "Messenger",
  components: {MessengerDisplay, MessengerHeader},
  props: {
    contactUserSendingTo: {
      type: Object
    },
    messages: {
      type: Array
    },
    inputMessage: {
      type: String
    },
    burgerStatus:{
      type:Boolean
    }
  },
  methods: {
    onBurgerButton(){
      this.$emit("burgerButton")
    },
    onSearchClick() {
      this.$emit("searchClick")
    },
    onMessengerInput(value) {
      this.$emit("messengerInput", value)
    },
    onSendClick() {
      this.$emit("sendClick")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    height: 100%;
    background: $messageBg;
  }

  &__display {
    box-sizing: border-box;
    max-height: 100%;
  }

}
</style>