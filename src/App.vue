<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import $ from "jquery";

import Navbar from "@/views/Navbar.vue";
import Footer from "@/views/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  created() {
    this.$store.dispatch("getCurrentWeatherData")
    this.$store.dispatch("getCurrentWeatherAlert")

    this.$store.dispatch("get36hrWeatherForecastData")
    this.$store.dispatch("getWeeklyWeatherForecastData")

    this.$store.dispatch("getEarthquakeData")
  },
  beforeUpdate() {
    $('.burgerBarLinkContainer').slideUp(500)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: '微軟正黑體';
  box-sizing: border-box;
}
img{
  display: block;
  margin: 0 auto;
}

a {
  text-decoration-line: none;
}

button {
  cursor: pointer;
}
select{
  border: none;
  width: 30%;
  cursor: pointer;
}
select:focus-visible {
  outline: none;
}

@media (max-width:991px){
  select{
    width: 100%;
  }
}
</style>
