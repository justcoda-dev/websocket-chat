<template>
  <div class="messenger-display-message-person">
    <div class="messenger-display-message-person__inner">
      <span class="messenger-display-message-person__message">  {{ message }}</span>
      <span class="messenger-display-message-person__time">{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessengerDisplayMessagePerson",
  props: {
    message: {
      type: String
    },
    time: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger-display-message-person {
  display: flex;
  color: $fontColor;
  font-weight: 600;
  justify-content: flex-start;

  &__inner {
    display: flex;
    min-height: 33px;
    background: $messageBg;
    align-items: center;
    border-radius: 12px;
  }

  &__message {

    padding: 0 10px;
  }

  &__time {
    align-self: end;
    padding: 0 10px;
    font-size: 12px;
    color: #ffffff;
  }
}
</style>