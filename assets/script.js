const APIKey = "41779050d33997f1e038c319cda10442";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=metric&q=";

//Variable from HTML, needed to to grab search inputs/button
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

const citiesSearchedSpan = document.querySelector(".cities-searched")



//Grabs the data from the weather API and Renders it
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${APIKey}`);
    var data = await response.json();

    console.log(data);
 

    //query selectors to grab fetch data and change the HTML
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    //Else if to change icons based on API data
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/images/clouds.png";
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/images/rain.png";
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/images/mist.png";
    }

    
}



// console.log(data, 'data set');

async function citySaver(city) {
    const response = await fetch(apiUrl + city + `&appid=${APIKey}`);
    var data = await response.json();
   
    let currentData = {
        name: data.name,
        data: data.main.date,
        temp: data.main.temp,
        humidity: data.main.temp,
        wind: data.wind.speed,
        icon: data.weather[0].icon
    }
    console.log(currentData)
    localStorage.setItem('currentData', JSON.stringify(currentData));
}


function renderCitySearch() {
    
}



searchBtn.addEventListener("click", ()=>{
   
    checkWeather(searchBox.value);

   citySaver(searchBox.value);
    

    
})



// document.querySelector('#search').addEventListener('keypress', function (checkWeather) {
//     if (e.key === 'Enter') {
//       // code for enter
      
//     }
// });