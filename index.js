const apiKey = "1b811f0c241f0e039a74b47627121411";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="; 
const searchBox = document.querySelector(".search-box input"); 

const searchButton = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
    var data = await response.json(); 

    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °F"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " MPH";

    if (searchBox.value === "undefined"){
        alert("not a valid input"); 
    }

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "/images/cloudy.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "/images/sun.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "/images/raining.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "/images/fog.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "/images/snow.png";
    }

    console.log(data);
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value="";
});

searchBox.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        checkWeather(searchBox.value); 
        searchBox.value =""; 
    }
});