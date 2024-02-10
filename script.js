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
