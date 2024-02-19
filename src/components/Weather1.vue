<template>
<div class="card">
    <div class="search">
        <input type="text" v-model.lazy="city" placeholder="search your city" />
        <button v-on:click="weatherSearch"><img src="../assets/search.png" /></button>
        
    </div>
    <p class="cityName-error">{{ this.error }}</p>
    <p class="cityName-error">{{ this.message }}</p>
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

        <h1 class="temp">{{ this.result }}°C</h1>
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
            error:"",
            temp:'',
            result:'',
            cityApiName:"",
            message:""
        

        }
    },
    methods: {
       
        
        weatherSearch() {
            this.result = this.temp.toFixed(2)
            // console.log(this.city)
            
            this.error=""
            if(this.city.length==0 || this.city == null  ){
                   this.error=("enter a specific city name" )
                   return
                }

                
               
               
            this.displayWeatherContent(this.city)
            return
            // this.cityNameError()
            
        },
        async displayWeatherContent(cityName = 'jhunjhunu') {
            let Weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3cbd07f0d647632c4a605e665a22ccb`)
            .catch(()=>{
                this.message ="city name don't found"
            }); 
            this.store = Weather.data.main;
            // this.cloud = Weather.data.clouds
            this.sky = Weather.data.weather[0].main
            this.temp = Weather.data.main.temp-273.15
            this.cloud = Weather.data.wind
            this.cityApiName = Weather.data.name
            // console.warn( this.cloud.speed)
           
                
        },


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
.cityName-error{
color: rgb(211, 67, 67);
font-variant: small-caps;
}


@media only screen and (max-width:498px){
        .card{
            padding: 39px 27px;
            position: relative;
        }
        .search{
        display: flex;
        flex-shrink: initial;
        }
       .col {
       font-size: 50%;
    }
    .details{
        flex-shrink:initial;
        font-size: 50%;
        padding: 0 10px;
    }
    .search input{
        margin-right: -50px;
        font-size: 10px;
    }
    .search{
        /* flex-wrap: wrap; */
       
        border-radius: 10px;
        /* gap: 0; */

    }
    .search input::placeholder{
        font-weight: 400;
        font-size: medium;
    }
    .search button{
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #00feba, #5b548a);

    }
    .col{
        position: relative;
        right: 10px;
        display: flex;
        flex-direction: column;
         
    }
    .col img{
        padding: 8px 0px ;
        width: 25px;
    }
    .humidity ,.wind{
        font-size: 26px;
        
    }
    /* .only-wind{
        position: relative;
        right: 20px;
    } */
    .weather h1{
        font-size: 30px;
    }
    .humidity-name, .wind-name{
        font-size:16px ;
    }
    .weather-icon {
        width: 140px;
        margin-top: 30px;
    
    }
}
</style>
