<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    console.log("this is app.vue created");
    this.$store.dispatch("getCurrentWeatherData")
    this.$store.dispatch("get36hrWeatherForecastData")
    this.$store.dispatch("getWeeklyWeatherForecastData")
  },
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";


</style>
