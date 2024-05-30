const APIKey = "41779050d33997f1e038c319cda10442";

let city; 

// const queryURL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={41779050d33997f1e038c319cda10442}`;

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${APIKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})


// Dom Element references 
const searchForum = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const todayContainer = document.querySelector('#today');

function getWeather(city,weather){
   
    const tempC = weather.main.temp;
    const humidity = wewather.main.humidity; 

    const tempEl = document.createElement('p');
    const humidityEl = document.createElement('p');


    tempEl.textContent = `Temp: ${tempC}C`;
    humidityEl.textContent = `Humidity: ${humidity}`;

    console.log(test);
    
todayContainer.innerHTML = '';
}


searchButton.addEventListener('click', function (event) {
   
    getWeather;
    console.log("dfs");
});