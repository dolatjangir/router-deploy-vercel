<template>
<div class="card">
    <div class="search">
        <input type="text" v-model.lazy="city" placeholder="search your city" />
        <button v-on:click="weatherSearch"><img src="../assets/search.png" /></button>
    </div>
    <div class="weather">
        <!-- <img src="../assets/clear.png" class="weather-icon" /> -->
        <div v-if="this.sky == 'Clouds'">
            <img src='../assets/clouds.png' class="weather-icon" />
        </div>
        <div v-else-if="this.sky == 'Haze'">
            <img src='../assets/haze2.png' class="weather-icon" />
        </div>
        <div v-else-if="this.sky == 'Smoke'">
            <img src='../assets/mist.png' class="weather-icon" />
        </div>
        <div v-else-if="this.sky == 'Rain'">
            <img src='../assets/rain.png' class="weather-icon" />
        </div>
        <div v-else-if="this.sky == 'Snow'">
            <img src='../assets/snow.png' class="weather-icon" />
        </div>
        <div v-else-if="this.sky == 'Clear'">
            <img src='../assets/clear.png' class="weather-icon" />
        </div>

        <h1 class="temp">{{ this.store.temp }}°C</h1>
        <h2 class="city">{{ this.city }}</h2>
        <div class="details">
            <div class="col">
                <img src="../assets/humidity.png" />

                <p class="humidity">{{ this.store.humidity }}%</p>
                <p class="humidity-name">humidity</p>
            </div>

            <div class="col">
                <img src="../assets/wind.png" />

                <p class="wind">{{this.cloud.speed}}km/h</p>
                <p>wind Speed</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {

    name: 'Weather App',
    data() {
        return {
            store: [],
            cloud: [],
            sky: "",
            city: "",

        }
    },
    methods: {
        weatherSearch() {
            // console.log(this.city)
            this.displayWeatherContent(this.city)
        },
        async displayWeatherContent(cityName = 'jhunjhunu') {
            let Weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3cbd07f0d647632c4a605e665a22ccb`)
            this.store = Weather.data.main;
            // this.cloud = Weather.data.clouds
            this.sky = Weather.data.weather[0].main

            this.cloud = Weather.data.wind
            // console.warn( this.cloud.speed)
            console.warn(Weather.data)
        }

    },
    mounted() {
        this.displayWeatherContent()

    }

}
</script>

<style scoped>
* {
    margin: 0%;
    padding: 0%;
    font-family: "poppins", sans-serif;
    box-sizing: border-box;

}

/* {
    background-image: url('../assets/weather.jpg');
    background-repeat: no-repeat;
    background-size: cover;
} */

.card {
    width: 90%;
    max-width: 470px;
    background: linear-gradient(135deg, #00feba, #5b548a);
    color: #fff;
    margin: 100px auto 0;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;

}

.search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.search input {
    border: 0;
    outline: 0;
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    height: 60px;
    border-radius: 30px;
    flex: 1;
    margin-right: 16px;
    font-size: 18px;

}

.search input::placeholder {
    color: #bbb4b4;
}

.search button {
    border: 0;
    outline: 0;
    background: #ebfffc;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;

}

.search button img {
    width: 16px;
}

.weather-icon {
    width: 170px;
    margin-top: 30px;

}

.weather h1 {
    font-size: 80px;
    font-weight: 500;

}

.weather h2 {
    font-size: 45px;
    font-weight: 400;
    margin-top: -10px;

}

.details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 35px;
    padding: 0 20px;
    margin-top: 50px;
}

.col {
    display: flex;
    align-items: center;
    text-align: left;
}

.col img {
    width: 40px;
    margin-right: 10px;
}

.humidity,
.wind {
    font-size: 28px;
    margin-top: -6px;
}

/* .humidity-name{
margin-top: 33px;
} */
</style>
