<template>
    <div>
        <div class="flex-box">
            <img src="../../assets/Taiwan.jpg" alt="">
            <div class="location Keelung">
                <p>基隆市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Taipei">
                <p>台北市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location NewTaipei">
                <p>新北市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Taoyuan">
                <p>桃園市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location HsinchuCity">
                <p>新竹市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location HsinchuCountry">
                <p>新竹縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Miaoli">
                <p>苗栗縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Taichung">
                <p>台中市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Nantou">
                <p>南投縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Changhua">
                <p>彰化縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Yunlin">
                <p>雲林縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location ChiayiCity">
                <p>嘉義市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location ChiayiCountry">
                <p>嘉義縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Tainan">
                <p>台南市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Kaohsiung">
                <p>高雄市</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Pingtung">
                <p>屏東縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Taitung">
                <p>台東縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Hualien">
                <p>花蓮縣</p>
                <p>22.4 °C</p>
            </div>
            <div class="location Yilan">
                <p>宜蘭縣</p>
                <p>22.4 °C</p>
            </div>
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

    width: 70px;
    border-radius: 8px;
    border: solid 2px #146C94;
    color: #146C94;

    text-align: center;
}
.location:hover{
    background-color: #146C94;
    color: #B0DAFF;
}

.Keelung{
    right: 33%;
    top: 0.5%;
}
.Taipei{
    right: 39%;
    top: -1%;
}
.NewTaipei{
    right: 30%;
    top: 10%;
}
.Taoyuan{
    right: 44%;

}
.HsinchuCity{
    right: 47%;
    top: 9%;
}
.HsinchuCountry{
    right: 41%;
    top: 15%;
}
.Miaoli{
    right: 51.5%;
    top: 15%;
}
.Taichung{
    right: 53.5%;
    top: 24%;
}
.Nantou{
    right: 44%;
    top: 39%;
}
.Changhua{
    right: 54.7%;
    top: 33%;
}
.Yunlin{
    right: 56.5%;
    top: 43%;
}
.ChiayiCity{
    right: 47%;
    top: 52%;
}
.ChiayiCountry{
    right: 57%;
    top: 52%;
}
.Tainan{
    right: 57.5%;
    top: 63%;
}
.Kaohsiung{
    right: 55%;
    top: 74%;
}
.Pingtung{
    right: 51%;
    top: 85%;
}
.Taitung{
    right: 40%;
    top: 78%;
}
.Hualien{
    right: 34%;
    top: 41%;
}
.Yilan{
    right: 31%;
    top: 22%;
}


img {
    height: 680px;
}
p{
    margin: 0;
    font-weight: bold;
    font-family: 'Noto Sans SC', sans-serif;
}


</style>