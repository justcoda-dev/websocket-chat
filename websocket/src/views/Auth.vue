<template>
  <div class="auth">
    <LoginForm @formSubmitClick="onFormSubmitClick"/>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import LoginForm from "../components/login/LoginForm";

export default {
  name: "Auth",
  components: {LoginForm},
  computed: {
    ...mapGetters(["registered", "loginFailed", "userId"]),
    authRules() {
      return []
    },
  },
  methods: {
    ...mapActions(["registration", "login",]),
    authRulesCheck(rules) {
      console.log(rules)
    },
    async onFormSubmitClick(user) {
      if (user.type === "login") {
        await this.login(user)
        this.$router.push({name: "Messenger", params: {userId: this.userId}})
      }
      if (user.type === "registration") {
        await this.registration(user)
        this.$router.push({name: "Messenger", params: {userId: this.userId}})
      }
    },
  }

}
</script>
<style scoped>

</style>