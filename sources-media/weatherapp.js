let currentTime = new Date();
function showDate() {
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

function changeTextColors(weatherCondition) {
  if (weatherCondition == "default") {
    document.querySelector(".temperature").style.color = "rgb(51, 34, 90)";
    document.querySelector(".date").style.color = "rgb(165, 133, 226)";
    document.querySelector(".time").style.color = "rgb(165, 80, 132)";
    document.querySelector(".feels").style.color = "rgb(78, 150, 124)";
    document.querySelector(".humidity").style.color = "rgb(75, 149, 192)";
    document.querySelector(".wind").style.color = "rgb(75, 149, 192)";
    document.querySelector(".sunrise").style.color = "rgb(255, 136, 61)";
    document.querySelector(".sunset").style.color = "rgb(75, 69, 112)";
    document.querySelector(".today").style.boxShadow =
      "0 8px 32px 0 rgba(116, 117, 134, 0.37)";
  } else if (weatherCondition == "rain") {
    document.querySelector(".temperature").style.color = "rgb(255, 255, 255)";
    document.querySelector(".time").style.color = "rgb(185, 105, 154)";
    document.querySelector(".feels").style.color = "rgb(174, 212, 85)";
    document.querySelector(".sunset").style.color = "rgb(179, 167, 248)";
    document.querySelector(".today").style.boxShadow =
      "0 8px 32px 0 rgba(183, 184, 204, 0.6)";
  } else if (weatherCondition == "night") {
    document.querySelector(".temperature").style.color = "rgb(255, 255, 255)";
    document.querySelector(".date").style.color = "rgb(194, 176, 228)";
    document.querySelector(".time").style.color = "rgb(235, 184, 215)";
    document.querySelector(".sunset").style.color = "rgb(145, 173, 92)";
    document.querySelector(".today").style.boxShadow =
      "0 8px 32px 0 rgba(116, 117, 134, 0.37)";
  } else if (weatherCondition == "thunder") {
    document.querySelector(".temperature").style.color = "rgb(255, 255, 255)";
    document.querySelector(".date").style.color = "rgba(66, 24, 145, 0.767)";
    document.querySelector(".time").style.color = "rgb(165, 80, 132)";
    document.querySelector(".feels").style.color = "rgb(18, 75, 54)";
    document.querySelector(".humidity").style.color = "rgb(21, 57, 99)";
    document.querySelector(".wind").style.color = "rgb(21, 57, 99)";
    document.querySelector(".sunrise").style.color = "rgb(248, 194, 160)";
    document.querySelector(".sunset").style.color = "rgb(36, 28, 83)";
    document.querySelector(".today").style.boxShadow =
      "0 8px 32px 0 rgba(116, 117, 134, 0.37)";
  }
}

function showWeather(response) {
  document.querySelector(".city-name").innerHTML = response.data.name; // city name
  document.querySelector(".current-temp").innerHTML = Math.round(
    response.data.main.temp
  ); // city temperature
  celsiusButton.classList.add("active");
  celsiusButton.setAttribute("disabled", true);
  fahrenheitButton.classList.remove("active");
  fahrenheitButton.removeAttribute("disabled");
  // to go back to default unit (celsius) when a new city is searched
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
  let sunriseTime = new Date(response.data.sys.sunrise * 1000);
  let sunriseHours = sunriseTime.getHours();
  let sunriseMinutes = sunriseTime.getMinutes();
  if (sunriseHours > 12) {
    sunriseHours = sunriseHours - 12;
  }
  if (sunriseHours < 10) {
    sunriseHours = `0${sunriseHours}`;
  }
  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }
  document.querySelector(
    ".sunrise"
  ).innerHTML = `Sunrise: ${sunriseHours}:${sunriseMinutes} AM`;
  let sunsetTime = new Date(response.data.sys.sunset * 1000);
  let sunsetHours = sunsetTime.getHours();
  let sunsetMinutes = sunsetTime.getMinutes();
  if (sunsetHours > 12) {
    sunsetHours = sunsetHours - 12;
  }
  if (sunsetHours < 10) {
    sunsetHours = `0${sunsetHours}`;
  }
  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }
  document.querySelector(
    ".sunset"
  ).innerHTML = `Sunset: ${sunsetHours}:${sunsetMinutes} PM`;
  let condition = document.querySelector("#condition");
  let conditionImage = document.querySelector(".condition");
  let description = response.data.weather[0].main;
  condition.innerHTML = description;
  conditionImage.alt = description;
  let hour = currentTime.getHours();
  if (
    description == "Clear" &&
    sunriseTime.getHours() < hour &&
    hour < sunsetTime.getHours()
  ) {
    conditionImage.src = "sources-media/images/sunny.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/clear-bg.jpg')";
    changeTextColors("default");
  } else if (
    (description == "Clear" && hour > sunsetTime.getHours()) ||
    (description == "Clear" && hour > 0 && hour < sunriseTime.getHours())
  ) {
    conditionImage.src = "sources-media/images/clearnight.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/clearnight-bg.jpg')";
    changeTextColors("night");
  } else if (description == "Clouds") {
    conditionImage.src = "sources-media/images/cloudy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/cloud-bg.jpg')";
    changeTextColors("default");
  } else if (description == "Rain" || description == "Drizzle") {
    conditionImage.src = "sources-media/images/rainy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/rain-bg.jpg')";
    changeTextColors("rain");
  } else if (description == "Snow") {
    conditionImage.src = "sources-media/images/snowy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/snow-bg.jpg')";
    changeTextColors("default");
  } else if (description == "Thunderstorm") {
    conditionImage.src = "sources-media/images/stormy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/storm-bg.jpg')";
    changeTextColors("thunder");
    document.querySelector("#condition").style.fontSize = "34px";
  } else {
    conditionImage.src = "sources-media/images/foggy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/fog-bg.jpg')";
    changeTextColors("default");
  }
}

function showCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value; // city name for api URL
  let apiKey = "6782253072f7d90462731a624097fc54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

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
function changeBg(event) {
  event.preventDefault();
  if (event.target.id == "clear-day") {
    document.body.style.backgroundImage =
      "url('sources-media/images/clear-bg.jpg')";
    changeTextColors("default");
  } else if (event.target.id == "clear-night") {
    document.body.style.backgroundImage =
      "url('sources-media/images/clearnight-bg.jpg')";
    changeTextColors("night");
  } else if (event.target.id == "clouds") {
    document.body.style.backgroundImage =
      "url('sources-media/images/cloud-bg.jpg')";
    changeTextColors("default");
  } else if (event.target.id == "rain") {
    document.body.style.backgroundImage =
      "url('sources-media/images/rain-bg.jpg')";
    changeTextColors("rain");
  } else if (event.target.id == "thunder") {
    document.body.style.backgroundImage =
      "url('sources-media/images/storm-bg.jpg')";
    changeTextColors("thunder");
  } else if (event.target.id == "snow") {
    document.body.style.backgroundImage =
      "url('sources-media/images/snow-bg.jpg')";
    changeTextColors("default");
  } else if (event.target.id == "mist") {
    document.body.style.backgroundImage =
      "url('sources-media/images/fog-bg.jpg')";
    changeTextColors("default");
  }
}

let buttons = document.querySelectorAll(".btn-secondary");
buttons.forEach((btn) => {
  btn.addEventListener("click", changeBg);
});

let submitCity = document.querySelector("#search-form");
submitCity.addEventListener("submit", showCity);
let locationButton = document.querySelector("#location");
locationButton.addEventListener("click", detectCity);
let fahrenheitButton = document.querySelector(".fahrenheit");
fahrenheitButton.addEventListener("click", getFahrenheit);
let celsiusButton = document.querySelector(".celsius");
celsiusButton.addEventListener("click", getCelsius);
