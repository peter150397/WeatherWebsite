<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCurrentWeatherData")
    this.$store.dispatch("get36hrWeatherForecastData")
  }


}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";


</style>
