<template>
  <div class="login">
    <div class="login__inner">
      <div class="login__form">
        <FormInput
            v-model="login"
            type="text"
            class="login__login"
        />
        <FormInput
            v-model="password"
            type="text"
            class="login__password"
        />
        <SubmitBtn @submitBtnClick="onSubmitClick">
          submit
        </SubmitBtn>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitBtn from "./SubmitBtn";
import FormInput from "./FormInput";

export default {
  name: "Login",
  components: {FormInput, SubmitBtn},
  data: () => ({
    login: null,
    password: null
  }),
  methods: {
    onSubmitClick() {
      this.$emit("submitClick", {name: this.login, password: this.password, type: 'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
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