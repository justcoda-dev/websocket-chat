<template>
  <div id="app">
    <Layout/>
  </div>
</template>
<script>
import Layout from "./views/Layout";
export default {
  components: {Layout},
}
</script>

<style lang="scss">
@import "assets/styles/normalize.css";

#app {
  padding: 0;
  margin: 0;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background: black;
  overflow: auto;
  -ms-overflow-style: none;

  box-sizing: border-box;
&::-webkit-scrollbar {
  width: 0;
  height: 0;
}
}
</style>
