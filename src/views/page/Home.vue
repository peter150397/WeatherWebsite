<template>
    <div>
        <div class="flex-box">
            <img src="../../assets/Taiwan.jpg" alt="">
            <div class="location Keelung">基隆</div>
        </div>
        
    </div>
</template>

<script>

</script>

<style>
.flex-box {
    display: flex;
    justify-content: center;
    position: relative;
}
.location{
    position: absolute;

    height: 8vh;
    width: 8vh;
    border: solid 1px;
    border-radius: 8px;

    text-align: center;
}

.Keelung{
    right: 150px;
}

img {
    height: 90vh;
}
</style>