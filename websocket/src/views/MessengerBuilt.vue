<template>
  <div class="messenger-built">
    <!--    loading -->
    <div class="messenger-built__inner">
      <MessengerContactsBar
          @contactsBarItemClick="onContactsBarItemClick"
          @searchInput="onSearchInput"
          @arrowLeftClick="onArrowLeftClick"
          v-if="active.contactsBar"
          class="layout__contacts-bar"
          :contactUsersList="contactUsersSearchedList"
          :leftArrowButtonStatus="active.leftArrowButtonStatus"
      />
      <Messenger
          v-if="objectNotEmpty(contactUserSendingTo)"
          :contactUserSendingTo="contactUserSendingTo"
          :messages="sortedMessages"
          :inputMessage="message"
          :burgerStatus="active.burgerStatus"
          @burgerButton="onBurgerButton"
          @messengerInput="onMessengerInput"
          @sendClick="onSendClick"
          @searchClick="onSearchClick"
          class="layout__messenger"
      />
      <MessengerSearchBar
          @arrowRightClick="onArrowRightClick"
          :messagesList="searchedMessages"
          @messagesSearchInput="onMessagesSearchInput"
          v-if="active.searchBar"
          class="layout__search-bar"
      />
    </div>
  </div>
</template>

<script>

import Messenger from "../components/messengerDisplay/Messenger";
import MessengerContactsBar from "../components/messengerContactsBar/MessengerContactsBar";
import MessengerSearchBar from "../components/messengerSearchBar/MessengerSearchBar";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MessengerBuilt",
  components: {MessengerSearchBar, MessengerContactsBar, Messenger},
  data: () => ({
    active: {
      searchBar: false,
      contactsBar: true,
      burgerStatus: false,
      leftArrowButtonStatus:false
    },
    message: '',
  }),
  computed: {
    ...mapGetters([
      "typingStatus",
      "contactUsersSearchedList",
      "wsConnectionStatus",
      "userId",
      "contactUsersList",
      "contactUserSendingTo",
      "sortedMessages",
      "searchedMessages"
    ]),
  },
  methods: {
    ...mapActions([
      "endTyping",
      "startTyping",
      "searchContactUsers",
      "setWsUserFromStorage",
      "sendMessage",
      "connect",
      "chooseContactToSend",
      "setUserFromLocalStorage",
      "searchAtContactUserMessages"
    ]),
    onBurgerButton() {
      this.active.contactsBar = true
      this.active.burgerStatus = false
    },
    onArrowLeftClick() {
      this.active.contactsBar = false
      this.active.burgerStatus = true
    },
    onMessagesSearchInput(string) {
      this.searchAtContactUserMessages(string)
    },
    objectNotEmpty(obj) {
      return !!Object.keys(obj).length
    },
    onSearchInput(value) {
      this.searchContactUsers({string: value, userId: this.userId})
    },
    onContactsBarItemClick(contactsUser) {
      this.active.leftArrowButtonStatus = true
      this.chooseContactToSend(contactsUser)
    },
    onSearchClick() {
      this.active.searchBar = true
    },
    onArrowRightClick() {
      this.active.searchBar = false
    },
    onSendClick() {
      if (this.message.length >= 1) {
        this.sendMessage({
          userId: this.userId,
          message: this.message,
          toUser: this.contactUserSendingTo.userId
        })
      }
      this.message = ''
    },
    onMessengerInput(value) {
      this.message = value
      if (this.message.length) {
        this.startTyping({userId: this.userId, toUser: this.contactUserSendingTo.userId})
        console.log(this.typingStatus)
      } else {
        this.endTyping({userId: this.userId, toUser: this.contactUserSendingTo.userId})
      }
    },
    async userAuthIs() {
      this.connect()
      const userStorage = JSON.parse(localStorage.getItem("user"))
      if (userStorage) {
        this.setUserFromLocalStorage(userStorage)
        this.setWsUserFromStorage(userStorage)
        await this.searchContactUsers({string: null, userId: this.userId})
      } else {
        console.log('not auth')
      }
    }
  },
  async created() {
    await this.userAuthIs()
  }
}
</script>

<style lang="scss" scoped>
.messenger-built {
  overflow: hidden;

  &__inner {
    display: grid;
    grid-template-columns: auto;
    grid-auto-flow: column;
    height: 100vh;
    grid-gap: 1px;
    @media (max-width: 600px) {
      grid-template-columns: auto;
    }

    .login-form {
    }

  }

  &__contacts-bar {
    @media (max-width: 600px) {
      display: none;
    }
  }

  &__messenger {

  }

  &__search-bar {
  }
}
</style>
