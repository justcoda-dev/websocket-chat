<template>
  <div class="login-form">
    <div class="login-form__form-wrapper">
      <keep-alive>
        <component
            @submitClick="onSubmitClick"
            :is="componentFormType"
            class="login-form__form">
        </component>
      </keep-alive>
    </div>
    <div class="login-form__buttons-type-wrapper">
      <TypeBtn
          :isActive="isActive"
          @typeBtnClick="onClickFormType('Registration')"
          class="login-form__type-btn">
        register
      </TypeBtn>
      <TypeBtn
          :isActive="!isActive"
          @typeBtnClick="onClickFormType('Login')"
          class="login-form__type-btn">
        login
      </TypeBtn>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import Registration from "./Registration";
import TypeBtn from "./TypeBtn";

export default {
  name: "LoginForm",
  components: {TypeBtn, Registration, Login},
  data: () => ({
    componentFormType: "Login",
    isActive: false
  }),
  methods: {
    onClickFormType(form) {
      this.isActive = form !== this.componentFormType ? !this.isActive : this.isActive;
      this.componentFormType = form
    },
    onSubmitClick(value) {
      this.$emit("formSubmitClick", value)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  background: #2f2f2f;
  height: 100vh;

  &__form-wrapper {
    padding-top: 100px;
  }

  &__form {
    margin-bottom: 50px;
  }

  &__buttons-type-wrapper {
    display: flex;
    justify-content: center;
  }

  &__type-btn {
  }
}
</style>