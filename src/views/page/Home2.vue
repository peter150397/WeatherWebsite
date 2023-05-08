<template>
    <div>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="item in weatherData" :key="item.stationId">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title mb-2">{{ item.parameter[0].parameterValue }}</h2>
                            <p class="card-subtitle subtitle">
                                {{ item.parameter[2].parameterValue }}
                            </p>
                            <hr class="my-3">
                            <p class="card-subtitle">
                                {{ item.time.obsTime }} <span v-if="item.weatherElement[20].elementValue != -99">{{
                                    item.weatherElement[20].elementValue
                                }}</span>
                            </p>
                            <div class="row align-items-center">
                                <div class="col-9">
                                    <h1 class="text-left mb-0">{{ item.weatherElement[3].elementValue }}°C</h1>
                                </div>
                                <div class="col-3">
                                    <img src="../../assets/weather/cloud.png" alt="" class="float-end">
                                </div>
                            </div>
                            <div>
                                <p>風速 : {{ item.weatherElement[2].elementValue }} m/s</p>
                            </div>
                            <div>
                                <p>相對濕度 : {{ item.weatherElement[4].elementValue * 100 }} %</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        weatherData() {
            return this.$store.state.weatherData
        }
    }

}
</script>

<style>
body {
    font-family: 'Noto Sans SC', sans-serif;
}

img {
    width: 160px;
}

h1 {
    font-size: 50px;
}

h2 {
    font-weight: bold;
}

.card {
    margin: 1rem;
}

.subtitle {
    font-size: 16px;
}
</style>