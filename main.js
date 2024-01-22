// Assigning the API key to a constant variable
const api_key="59cc1d59392737d414507d2809363b6f";
// Assigning the OpenWeatherMap API URL to a constant variable with units set to metric
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// Selecting the input element with class 'search'
const searchBox = document.querySelector('.search input');
// Selecting the button element 
const searchBtn = document.querySelector(".search button");
// Selecting the element with class 'weather-icon'
const weather_icon = document.querySelector(".weather-icon");

// Async function responsible for retrieving weather information

async function CheckWeather(city){
    // Fetching weather data based on the provided city using the OpenWeatherMap API
    const response = await fetch(apiUrl + city + `&appid=${api_key}`);
    
    // Handling the case when the API returns a 404 error
    if(response.status == 404)
    {
        // Displaying the error message by setting the error div's display style to block
        document.querySelector(".error").style.display = "block";
        // Hiding the weather div by setting its display style to none
        document.querySelector(".weather").style.display ="none";

    }
    else{
        // Parsing the JSON response if there's no error
        var data = await response.json();

    }
    
    
    // Displaying the city name in the corresponding HTML element
    document.querySelector('.city').innerHTML =data.name;
    // Displaying the temperature in Celsius in the corresponding HTML
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
     // Displaying the humidity percentage in the corresponding HTML element
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    // Displaying the wind speed in km/h in the corresponding HTML element
    document.querySelector('.wind').innerHTML = data.wind.speed +" km/h";
    
    // Updating the weather icon based on the weather condition received from the API
    if(data.weather[0].main == "Clouds")
    {
        weather_icon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        weather_icon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weather_icon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weather_icon.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        weather_icon.src="images/mist.png";
    }
    
    // Displaying the weather div by setting its display style to block
    document.querySelector(".weather").style.display ="block";

    // Hiding the error div by setting its display style to none
    document.querySelector(".error").style.display = "none";
}   

// Adding an event listener to the search button to trigger weather check on click
searchBtn.addEventListener("click", ()=>{
    // Calling the CheckWeather function with the value entered in the search input
    CheckWeather(searchBox.value);

})
