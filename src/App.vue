<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getWeatherData")
  }


}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";


</style>
