const inputcity = document.getElementById("cityInput");
const apiKey = 'b7a5b2129702a6a746fa56048d9b082b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector(".searchbar input")
const searchBtn = document.querySelector(".searchbar button");
const weathericon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = "Temperature: " + Math.round(data.main.temp) + "℃";
        document.getElementById("humidtext").innerHTML = "Humididty " + data.main.humidity + "%";
        document.getElementById("windtext").innerHTML = "Wind speed " + data.wind.speed + " km/h";

        if (data.weather[0].main == "Clear") {
            weathericon.src = "clear.png";
        }

        else if (data.weather[0].main == "Rain") {
            weathericon.src = "rain.png";
        }

        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "drizzle.png";
        }

        else if (data.weather[0].main == "Mist") {
            weathericon.src = "mist.png";
        }


    } catch (error) {
        alert("Invalid City name ! ")
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".weather-container").style.height = "500px";

    if (window.matchMedia("(max-width: 768px)").matches) {
        // Code to modify the DOM specifically for mobile screens
        document.querySelector(".weather-container").style.height = "800px;";
    }

})




// Certainly! Below is a sample description you can use for the README of your weather app:

// Weather App
// Overview
// Welcome to the Weather App, a simple yet powerful web application built with HTML, CSS, and JavaScript. This app allows users to check the current weather conditions for any location in the world.

// Features
// Real-time Weather Data: Get up-to-date weather information using the OpenWeatherMap API.
// Responsive Design: The app is designed to work seamlessly on desktops, tablets, and mobile devices.
// User-Friendly Interface: Intuitive design for easy navigation and quick access to weather details.
// Search Functionality: Enter the name of a city or location to instantly retrieve its weather forecast.
// Technologies Used
// HTML: Provides the structure and basic content of the app.
// CSS: Styles the app, making it visually appealing and responsive.
// JavaScript: Implements the logic for fetching and displaying weather data.
// OpenWeatherMap API: Used to fetch real-time weather information.
