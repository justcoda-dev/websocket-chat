<template>
<div class="messenger-input">
  <div class="messenger-input__inner">
    <InputText
        :inputMessage="inputMessage"
        @messengerInput="onMessengerInput"
        class="messenger-input__input"
    />
    <ButtonSend
        @sendClick="onSendClick"
        class="messenger-input__btn"
    />
  </div>
</div>
</template>

<script>
import InputText from "../UIcomponents/InputText";
import ButtonSend from "../UIcomponents/ButtonSend";
export default {
  name: "MessengerInput",
  components: {ButtonSend, InputText},
  props: {
    inputMessage:{
      type:String
    }
  },
  methods: {
    onMessengerInput(value){
      this.$emit("messengerInput", value)
    },
    onSendClick(){
      this.$emit("sendClick")
    }
  }
}
</script>

<style lang="scss" scoped>
.messenger-input {
  &__inner {
    display: grid;
    grid-template-columns: auto 60px;
    align-items: flex-end;
  }
  &__input {}
  &__btn {
    margin: 10px;
  }
}
</style>