function showDate() {
  let currentTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = currentTime.getFullYear();
  let currentMonth = months[currentTime.getMonth()];
  let currentDate = currentTime.getDate();
  let currentDay = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let date = document.querySelector(".date");
  let time = document.querySelector(".time");
  date.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}`;
  time.innerHTML = `${hour}:${minutes}`;
}
showDate();

function showWeather(response) {
  document.querySelector(".city-name").innerHTML = response.data.name; // city name
  document.querySelector(".current-temp").innerHTML = Math.round(
    response.data.main.temp
  ); // city temperature
  document.querySelector(".max").innerHTML = Math.round(
    response.data.main.temp_max
  ); // max temp
  document.querySelector(".min").innerHTML = Math.round(
    response.data.main.temp_min
  ); // min temp
  document.querySelector(".feels-degree").innerHTML = Math.round(
    response.data.main.feels_like
  ); // feels like temp
  document.querySelector(".humidity").innerHTML = `${Math.round(
    response.data.main.humidity
  )}% Humidity`; // humidity
  document.querySelector(".wind").innerHTML = `${Math.round(
    response.data.wind.speed * 3.6
  )} km/h Wind`; // wind
}

function showCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value; // city name for api URL
  let apiKey = "6782253072f7d90462731a624097fc54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
let submitCity = document.querySelector("#search-form");
submitCity.addEventListener("submit", showCity);

function getCelsius(event) {
  event.preventDefault();
  celsiusButton.classList.add("active");
  celsiusButton.setAttribute("disabled", true);
  fahrenheitButton.classList.remove("active");
  fahrenheitButton.removeAttribute("disabled");

  let currentTemp = document.querySelector(".current-temp");
  let max = document.querySelector(".max");
  let min = document.querySelector(".min");
  let feelsDegree = document.querySelector(".feels-degree");
  currentTemp.innerHTML = Math.round((currentTemp.innerHTML - 32) / 1.8);
  max.innerHTML = Math.round((max.innerHTML - 32) / 1.8);
  min.innerHTML = Math.round((min.innerHTML - 32) / 1.8);
  feelsDegree.innerHTML = Math.round((feelsDegree.innerHTML - 32) / 1.8);
}

function getFahrenheit(event) {
  event.preventDefault();
  celsiusButton.classList.remove("active");
  celsiusButton.removeAttribute("disabled");
  fahrenheitButton.classList.add("active");
  fahrenheitButton.setAttribute("disabled", true);

  let currentTemp = document.querySelector(".current-temp");
  let max = document.querySelector(".max");
  let min = document.querySelector(".min");
  let feelsDegree = document.querySelector(".feels-degree");

  currentTemp.innerHTML = Math.round(currentTemp.innerHTML * 1.8 + 32);
  max.innerHTML = Math.round(max.innerHTML * 1.8 + 32);
  min.innerHTML = Math.round(min.innerHTML * 1.8 + 32);
  feelsDegree.innerHTML = Math.round(feelsDegree.innerHTML * 1.8 + 32);
}

let fahrenheitButton = document.querySelector(".fahrenheit");
fahrenheitButton.addEventListener("click", getFahrenheit);
let celsiusButton = document.querySelector(".celsius");
celsiusButton.addEventListener("click", getCelsius);

function getCoords(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  let apiKey = "6782253072f7d90462731a624097fc54";
  let apiUrlGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrlGeo).then(showWeather);
}
function detectCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoords);
}
let locationButton = document.querySelector(".location");
locationButton.addEventListener("click", detectCity);
