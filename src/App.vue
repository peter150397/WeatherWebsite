<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCurrentWeatherData")
    this.$store.dispatch("getCurrentWeatherAlert")

    this.$store.dispatch("get36hrWeatherForecastData")
    this.$store.dispatch("getWeeklyWeatherForecastData")

    this.$store.dispatch("getEarthquakeData")
  },
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";


</style>
