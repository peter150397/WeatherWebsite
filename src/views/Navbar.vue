<template>
    <div class="flex-container">
        <router-link to="/currentWeather"><p>即時天氣狀況</p></router-link>
        <p>|</p>
        <router-link to="/weatherforecast"><p>一周天氣預測</p></router-link>
        <p>|</p>
        <router-link to="/"><p>雨量</p></router-link>
        <p>|</p>
        <router-link to="/"><p>地震</p></router-link>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.flex-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 100px;

    height: 200px;

    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url('../assets/bg-title.jpg');
    background-repeat: no-repeat;
    background-position: center 30%;
    background-size: cover;
}
p{
    color: white;
    font-size: 25px;
    letter-spacing: 5px;
    margin-bottom: 1rem;
}
a{
    text-decoration-line: none;
}
</style>