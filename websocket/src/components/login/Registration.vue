<template>
  <div class="registration">
    <div class="registration__inner">
      <div class="registration__form">
        <FormInput
            v-model="login"
            type="text"
            class="registration__login"
        />
        <FormInput
            v-model="password"
            type="text"
            class="registration__password"
        />
        <SubmitBtn
            class="registration__submit"
            @submitBtnClick="onSubmitClick">
          register
        </SubmitBtn>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitBtn from "./SubmitBtn";
import FormInput from "./FormInput";

export default {
  name: "Registration",
  components: {FormInput, SubmitBtn},
  data: () => ({
    login: null,
    password: null
  }),
  methods: {
    onSubmitClick() {
      this.$emit("submitClick", {name: this.login, password: this.password, type: 'registration'})
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
  &__inner {
    margin: 0 25%;
  }

  &__form {
  }

  &__login {
    padding-bottom: 20px;
  }

  &__password {
    padding-bottom: 50px;
  }

  &__submit {

  }
}
</style>