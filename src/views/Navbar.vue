<template>
    <div class="flex-container">
        <p>即時天氣狀況</p>
        <p>|</p>
        <p>一周天氣預測</p>
        <p>|</p>
        <p>雨量</p>
        <p>|</p>
        <p>地震</p>
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

    height: 400px;

    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url('../assets/bg-title.jpg');
    background-repeat: no-repeat;
    background-position: center 30%;
    background-size: cover;
}
p{
    color: white;
    font-size: 25px;
    letter-spacing: 3px;
    margin-bottom: 1rem;
}
</style>