<template>
  <div class="messenger-contacts-list" v-if="contactUsersList.length">
    <div class="messenger-contacts-list__inner">
      <ul class="messenger-contacts-list__list">
        <template v-for="contact of contactUsersList">
          <MessengerContactsBarItem
              @contactsBarItemClick="onContactsBarItemClick"
              :key="contact.userId"
              :contact="contact"
          />
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import MessengerContactsBarItem from "./MessengerContactsBarItem";

export default {
  name: "MessengerContactsList",
  components: {MessengerContactsBarItem},
  props: {
    contactUsersList: {
      type: Array,
      require: true
    },
    users: {},
    searchString: {
      type: String
    }
  },
  methods: {
    onContactsBarItemClick(contactsUser) {
      this.$emit("contactsBarItemClick", contactsUser)
    },
  }
}
</script>

<style lang="scss" scoped>
.messenger-contacts-list {
  &__inner {
  }

  &__list {
    margin: 0;
    padding: 0;
  }
}
</style>