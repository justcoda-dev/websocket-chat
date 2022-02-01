<template>
  <div class="user-icon" v-if="icon">
    <div class="user-icon__inner">
      <div @click="onIcon" :style="{'background-image':`url(${icon})`}" class="user-icon__icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserIcon",
  props: {
    icon: {
      type: String,
      require: true
    }
  },
  methods: {
    onIcon() {
      this.$emit('iconClick')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/vars";

.user-icon {
  display: flex;

  &__inner {
  }

  &__icon {
    background-size: cover;
    min-height: 42px;
    min-width: 42px;
    border-radius: 100%;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>