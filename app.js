const checkWeatherBtn = document.getElementById("checkWeather");
const cityName = document.getElementById("cityName");
const celsius = document.getElementById("cel");
const description = document.getElementById("desc");
const weatherIcon=document.getElementById("weatherIcon");

checkWeatherBtn.addEventListener("click", function () {
    let userValue = document.getElementById("userValue");
    let userInput = userValue.value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=metric&appid=d3b48aa6d122949fdbba69fd06a99401')
        .then(res => res.json())
        .then(data => {
            // city and celsius
            cityName.innerText = data.name;
            celsius.innerText = data.main.temp;

            // weather collect
            let cityWeather = data.weather[0];
            description.innerText=cityWeather.main;

            // Changing Icon
            let iconCode=cityWeather.icon;
            let iconUrl='https://openweathermap.org/img/wn/'+iconCode+'@2x.png';
            weatherIcon.setAttribute('src',iconUrl);
        })
       
})