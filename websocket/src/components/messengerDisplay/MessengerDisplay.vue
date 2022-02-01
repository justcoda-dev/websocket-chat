<template>
  <div class="messenger-display">
    <div class="messenger-display__inner">
      <div class="messenger-display__display">
        <template v-for="message of messages">
          <component
              :is="currentUserMessage(message)"
              :message="message.message"
              :time="time(message.createdAt)"
              :key="message.id"
          />
        </template>
      </div>

      <MessengerInput
          :inputMessage="inputMessage"
          @sendClick="onSendClick"
          @messengerInput="onMessengerInput"
          class="messenger-display__input"
      />

    </div>
  </div>
</template>

<script>

import MessengerDisplayMessage from "./MessengerDisplayMessage";
import MessengerDisplayMessagePerson from "./MessengerDisplayMessagePerson";
import MessengerInput from "./MessengerInput";

export default {
  name: "MessengerDisplay",
  components: {MessengerInput, MessengerDisplayMessagePerson, MessengerDisplayMessage},
  props: {
    contactUserSendingTo: {
      type: Object,
      require: true
    },
    messages: {
      type: Array
    },
    inputMessage:{
      type:String
    }
  },
  methods: {
    time(msTime){
      const time = new Date(msTime)
      return `${time.getHours()}:${time.getMinutes()}`
    },
    currentUserMessage(message) {
      if (message.userId !== this.contactUserSendingTo.userId) {
        return "MessengerDisplayMessage"
      } else {
        return "MessengerDisplayMessagePerson"
      }
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

.messenger-display {
  background: $messengerBgColor;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 20%;

  &__inner {
    display: flex;
    flex-direction: column;
    height: 90vh;
    box-sizing: border-box;
    justify-content: space-between;
  }

  &__display {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      background: #2f2f2f;
    }

    &::-webkit-scrollbar-button {
      background: #212121
    }

    &::-webkit-scrollbar-track {
      background: #0f0f0f
    }

    &::-webkit-scrollbar-thumb {
      background: #2f2f2f
    }
  }

  &__input {
    margin-bottom: 20px;
  }
}
</style>