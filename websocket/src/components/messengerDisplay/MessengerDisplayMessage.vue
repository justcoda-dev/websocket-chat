<template>
  <div class="messenger-display-message">
    <div class="messenger-display-message__inner">
      <span class="messenger-display-message__message">  {{ message }}</span>
      <span class="messenger-display-message__time">{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessengerDisplayMessage",
  props: {
    message: {
      type: String
    },
    time: { }
  }

}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.messenger-display-message {
  display: flex;
  color: $fontColor;
  font-weight: 600;
  justify-content: flex-end;
  &__inner {
    display: flex;
    min-height: 33px;
    background: $messageUserBg;
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