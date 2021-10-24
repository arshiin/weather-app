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

function changeTextColors(weatherCondition) {
  switch (weatherCondition) {
    case "default":
      document.querySelector(".main-info").style.color = "rgb(51, 34, 90)";
      document.querySelector("#condition").style.color = "rgb(255, 255, 255)";
      document.querySelector(".date").style.color = "rgb(165, 133, 226)";
      document.querySelector(".time").style.color = "rgb(165, 80, 132)";
      document.querySelector(".feels").style.color = "rgb(78, 150, 124)";
      document.querySelector("#feels-temp").style.color = "rgb(78, 150, 124)";
      document.querySelector(".humidity").style.color = "rgb(75, 149, 192)";
      document.querySelector(".wind").style.color = "rgb(75, 149, 192)";
      document.querySelector(".sunrise").style.color = "rgb(255, 136, 61)";
      document.querySelector(".sunset").style.color = "rgb(75, 69, 112)";
      document.querySelector(".today").style.boxShadow =
        "0 8px 32px 0 rgba(116, 117, 134, 0.37)";
      document.querySelector(".spotify p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd h2").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".change-bg .title").style.color =
        "rgb(255, 255, 255)";
      break;
    case "night":
      document.querySelector(".main-info").style.color = "rgb(255, 255, 255)";
      document.querySelector("#condition").style.color = "rgb(255, 255, 255)";
      document.querySelector(".date").style.color = "rgb(194, 176, 228)";
      document.querySelector(".time").style.color = "rgb(235, 184, 215)";
      document.querySelector(".humidity").style.color = "rgb(129, 203, 247)";
      document.querySelector(".wind").style.color = "rgb(129, 203, 247)";
      document.querySelector(".sunset").style.color = "rgb(145, 173, 92)";
      document.querySelector(".today").style.boxShadow =
        "0 8px 20px 0 rgba(183, 184, 204, 0.5)";
      document.querySelector(".spotify p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd h2").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".change-bg .title").style.color =
        "rgb(255, 255, 255)";
      break;
    case "rain":
      document.querySelector(".main-info").style.color = "rgb(255, 255, 255)";
      document.querySelector("#condition").style.color = "rgb(255, 255, 255)";
      document.querySelector(".time").style.color = "rgb(185, 105, 154)";
      document.querySelector(".feels").style.color = "rgb(174, 212, 85)";
      document.querySelector("#feels-temp").style.color = "rgb(174, 212, 85)";
      document.querySelector(".humidity").style.color = "rgb(129, 203, 247)";
      document.querySelector(".wind").style.color = "rgb(129, 203, 247)";
      document.querySelector(".sunset").style.color = "rgb(179, 167, 248)";
      document.querySelector(".today").style.boxShadow =
        "0 8px 32px 0 rgba(183, 184, 204, 0.5)";
      document.querySelector(".spotify p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd h2").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".change-bg .title").style.color =
        "rgb(255, 255, 255)";
      break;
    case "thunder":
      document.querySelector(".main-info").style.color = "rgb(255, 255, 255)";
      document.querySelector("#condition").style.color = "rgb(255, 255, 255)";
      document.querySelector(".date").style.color = "rgba(66, 24, 145, 0.767)";
      document.querySelector(".time").style.color = "rgb(123, 25, 85)";
      document.querySelector(".feels").style.color = "rgb(18, 75, 54)";
      document.querySelector("#feels-temp").style.color = "rgb(18, 75, 54)";
      document.querySelector(".humidity").style.color = "rgb(21, 57, 99)";
      document.querySelector(".wind").style.color = "rgb(21, 57, 99)";
      document.querySelector(".sunrise").style.color = "rgb(139, 64, 64)";
      document.querySelector(".sunset").style.color = "rgb(56, 75, 148)";
      document.querySelector(".today").style.boxShadow =
        "0 8px 20px 0 rgba(183, 184, 204, 0.5)";
      document.querySelector(".spotify p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd h2").style.color = "rgb(255, 255, 255)";
      document.querySelector(".qotd p").style.color = "rgb(255, 255, 255)";
      document.querySelector(".change-bg .title").style.color =
        "rgb(255, 255, 255)";
      break;
    case "snow":
      document.querySelector(".main-info").style.color = "rgb(51, 34, 90)";
      document.querySelector("#condition").style.color = "rgb(255, 255, 255)";
      document.querySelector(".date").style.color = "rgb(165, 133, 226)";
      document.querySelector(".time").style.color = "rgb(165, 80, 132)";
      document.querySelector(".feels").style.color = "rgb(78, 150, 124)";
      document.querySelector("#feels-temp").style.color = "rgb(78, 150, 124)";
      document.querySelector(".humidity").style.color = "rgb(75, 149, 192)";
      document.querySelector(".wind").style.color = "rgb(75, 149, 192)";
      document.querySelector(".sunrise").style.color = "rgb(255, 136, 61)";
      document.querySelector(".sunset").style.color = "rgb(75, 69, 112)";
      document.querySelector(".today").style.boxShadow =
        "0 8px 32px 0 rgba(116, 117, 134, 0.37)";
      document.querySelector(".spotify p").style.color = "rgb(0, 0, 0)";
      document.querySelector(".qotd h2").style.color = "rgb(0, 0, 0)";
      document.querySelector(".qotd p").style.color = "rgb(0, 0, 0)";
      document.querySelector(".change-bg .title").style.color = "rgb(0, 0, 0)";
      document.querySelector("h1").style.color = "rgb(63, 63, 63)";
  }
}

function showWeather(response) {
  document.querySelector(".city-name").innerHTML = response.data.name; // city name
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  ); // city temperature
  celsiusButton.classList.add("active");
  celsiusButton.setAttribute("disabled", true);
  fahrenheitButton.classList.remove("active");
  fahrenheitButton.removeAttribute("disabled");
  // to go back to default unit (celsius) when a new city is searched
  document.querySelector("#today-max").innerHTML = Math.round(
    response.data.main.temp_max
  ); // max temp
  document.querySelector("#today-min").innerHTML = Math.round(
    response.data.main.temp_min
  ); // min temp
  document.querySelector("#feels-temp").innerHTML = Math.round(
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
  let conditionImage = document.querySelector(".weather-icon");
  let description = response.data.weather[0].main;
  condition.innerHTML = description;
  conditionImage.alt = description;
  let hour = currentTime.getHours();
  if (
    description == "Clear" &&
    sunriseTime.getHours() <= hour &&
    hour <= sunsetTime.getHours()
  ) {
    conditionImage.src = "sources-media/images/sunny.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/clear-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/0DRvClQbN9znQ295sx76VC?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    changeTextColors("default");
  } else if (
    (description == "Clear" && hour > sunsetTime.getHours()) ||
    (description == "Clear" && hour >= 0 && hour < sunriseTime.getHours())
  ) {
    conditionImage.src = "sources-media/images/clearnight.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/clearnight-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/3FzK2g50oLcx8vqETwOn07?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    changeTextColors("night");
  } else if (description == "Clouds") {
    conditionImage.src = "sources-media/images/cloudy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/cloud-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/2kSb3wYSOV996xA2NSmpck?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    changeTextColors("default");
    document.querySelector(".spotify p").style.color = "rgb(0, 0, 0)";
    document.querySelector(".qotd h2").style.color = "rgb(0, 0, 0)";
    document.querySelector(".qotd p").style.color = "rgb(0, 0, 0)";
  } else if (description == "Rain") {
    conditionImage.src = "sources-media/images/rainy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/rain-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/0Ls4WLphg1obbq7wTPiy7k?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">`;
    changeTextColors("rain");
  } else if (description == "Drizzle") {
    conditionImage.src = "sources-media/images/rainy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/rain-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `</iframe> <iframe src="https://open.spotify.com/embed/track/3NwTDLpZRmyOTaOtGoVm8X?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    changeTextColors("rain");
  } else if (description == "Thunderstorm") {
    conditionImage.src = "sources-media/images/stormy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/storm-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/0GwcBK821xPuRklr4Hptdc?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    changeTextColors("thunder");
  } else if (description == "Snow") {
    conditionImage.src = "sources-media/images/snowy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/snow-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/11607FzqoipskTsXrwEHnJ?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    changeTextColors("snow");
  } else {
    conditionImage.src = "sources-media/images/foggy.gif";
    document.body.style.backgroundImage =
      "url('sources-media/images/fog-bg.jpg')";
    document.querySelector(
      "#song"
    ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/2LvG58eKXKf6V6MUnsvNmw?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    changeTextColors("default");
  }
  getForecast(response.data.coord);
}
function showForecast(response) {
  let forecast = response.data.daily;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let forecastCard = document.querySelector("#forecast-cards");
  let forecastHTML = ``;
  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 6) {
      let forecastDate = new Date(forecastDay.dt * 1000);
      let emoji = ``;
      switch (forecastDay.weather[0].main) {
        case "Clear":
          emoji = "☀";
          break;
        case "Rain":
          emoji = "🌧";
          break;
        case "Drizzle":
          emoji = "🌧";
          break;
        case "Clouds":
          emoji = "☁";
          break;
        case "Thunderstorm":
          emoji = "⛈";
          break;
        case "Snow":
          emoji = "🌨";
          break;
        case "Atmosphere":
          emoji = "🌫";
          break;
      }
      forecastHTML += `<div class="card weekdays">
          <div class="row">
            <div class="col-4 day">${days[forecastDate.getDay()]}</div>
            <div class="col-4 emoji">${emoji}</div>
            <div class="col-4 weekday-temp">
              <span id="forecast-max" class="temperature">${Math.round(
                forecastDay.temp.max
              )}</span><span>° / </span><span id="forecast-min" class="temperature">${Math.round(
        forecastDay.temp.min
      )}</span><span></span>°
            </div>
          </div>
        </div>`;
    }
    forecastCard.innerHTML = forecastHTML;
  });
}

function getForecast(coords) {
  let apiKey = "6782253072f7d90462731a624097fc54";
  let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;
  axios.get(forecastApiUrl).then(showForecast);
}
function showCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value; // city name for api URL
  let apiKey = "6782253072f7d90462731a624097fc54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
function showDefaultCity() {
  let defaultCityName = document.querySelector(".city-name").innerHTML;
  let apiKey = "6782253072f7d90462731a624097fc54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function getCelsius(event) {
  event.preventDefault();
  celsiusButton.classList.add("active");
  celsiusButton.setAttribute("disabled", true);
  fahrenheitButton.classList.remove("active");
  fahrenheitButton.removeAttribute("disabled");

  let temperature = document.querySelectorAll(".temperature");
  temperature.forEach(function (tempValue) {
    tempValue.innerHTML = Math.round((tempValue.innerHTML - 32) / 1.8);
  });
}

function getFahrenheit(event) {
  event.preventDefault();
  celsiusButton.classList.remove("active");
  celsiusButton.removeAttribute("disabled");
  fahrenheitButton.classList.add("active");
  fahrenheitButton.setAttribute("disabled", true);

  let temperature = document.querySelectorAll(".temperature");
  temperature.forEach(function (tempValue) {
    tempValue.innerHTML = Math.round(tempValue.innerHTML * 1.8 + 32);
  });
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
  switch (event.target.id) {
    case "clear-day":
      document.body.style.backgroundImage =
        "url('sources-media/images/clear-bg.jpg')";
      document.querySelector(
        "#song"
      ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/0DRvClQbN9znQ295sx76VC?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      changeTextColors("default");
      break;
    case "clear-night":
      document.body.style.backgroundImage =
        "url('sources-media/images/clearnight-bg.jpg')";
      document.querySelector(
        "#song"
      ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/3FzK2g50oLcx8vqETwOn07?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      changeTextColors("night");
      break;
    case "clouds":
      document.body.style.backgroundImage =
        "url('sources-media/images/cloud-bg.jpg')";
      document.querySelector(
        "#song"
      ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/2kSb3wYSOV996xA2NSmpck?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      changeTextColors("default");
      document.querySelector(".spotify p").style.color = "rgb(0, 0, 0)";
      document.querySelector(".qotd h2").style.color = "rgb(0, 0, 0)";
      document.querySelector(".qotd p").style.color = "rgb(0, 0, 0)";
      break;
    case "rain":
      document.body.style.backgroundImage =
        "url('sources-media/images/rain-bg.jpg')";
      document.querySelector(
        "#song"
      ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/0Ls4WLphg1obbq7wTPiy7k?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      changeTextColors("rain");
      break;
    case "thunder":
      document.body.style.backgroundImage =
        "url('sources-media/images/storm-bg.jpg')";
      document.querySelector(
        "#song"
      ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/0GwcBK821xPuRklr4Hptdc?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      changeTextColors("thunder");
      break;
    case "snow":
      document.body.style.backgroundImage =
        "url('sources-media/images/snow-bg.jpg')";
      document.querySelector(
        "#song"
      ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/11607FzqoipskTsXrwEHnJ?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      changeTextColors("snow");
      break;
    case "mist":
      document.body.style.backgroundImage =
        "url('sources-media/images/fog-bg.jpg')";
      document.querySelector(
        "#song"
      ).innerHTML = `<iframe src="https://open.spotify.com/embed/track/2LvG58eKXKf6V6MUnsvNmw?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      changeTextColors("default");
      break;
  }
}

let buttons = document.querySelectorAll(".btn-secondary");
buttons.forEach(function (button) {
  button.addEventListener("click", changeBg);
});

function showQotd(event) {
  event.preventDefault();
  let birthDate = new Date(document.querySelector("#birth-date").value);
  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let sunSign = document.querySelector(".qotd h2");
  let qotdContent = document.querySelector(".qotd p");
  qotdContent.style.fontSize = "18px";
  qotdContent.style.fontStyle = "italic";
  if (
    (birthMonth == "3" && birthDay >= 21 && birthDay <= 31) ||
    (birthMonth == "4" && birthDay >= 1 && birthDay <= 19)
  ) {
    sunSign.innerHTML = "- Aries -";
    qotdContent.innerHTML = " Being rebellious can help you get what you want.";
  } else if (
    (birthMonth == "4" && birthDay >= 21 && birthDay <= 31) ||
    (birthMonth == "5" && birthDay >= 1 && birthDay <= 19)
  ) {
    sunSign.innerHTML = "- Taurus -";
    qotdContent.innerHTML =
      "Nurture yourself with talents and get in touch with your pleasure.";
  } else if (
    (birthMonth == "5" && birthDay >= 20 && birthDay <= 30) ||
    (birthMonth == "6" && birthDay >= 1 && birthDay <= 20)
  ) {
    sunSign.innerHTML = "- Gemini -";
    qotdContent.innerHTML =
      "Let your sense of curiosity encourage you to learn.";
  } else if (
    (birthMonth == "6" && birthDay >= 21 && birthDay <= 30) ||
    (birthMonth == "7" && birthDay >= 1 && birthDay <= 22)
  ) {
    sunSign.innerHTML = "- Cancer -";
    qotdContent.innerHTML =
      "Speak your mind and tell people who you really are.";
  } else if (
    (birthMonth == "7" && birthDay >= 23 && birthDay <= 31) ||
    (birthMonth == "8" && birthDay >= 1 && birthDay <= 22)
  ) {
    sunSign.innerHTML = "- Leo -";
    qotdContent.innerHTML = "Show the world just how brightly you shine.";
  } else if (
    (birthMonth == "8" && birthDay >= 23 && birthDay <= 31) ||
    (birthMonth == "9" && birthDay >= 1 && birthDay <= 22)
  ) {
    sunSign.innerHTML = "- Virgo -";
    qotdContent.innerHTML = "Find harmony in all your connections.";
  } else if (
    (birthMonth == "9" && birthDay >= 23 && birthDay <= 30) ||
    (birthMonth == "10" && birthDay >= 1 && birthDay <= 22)
  ) {
    sunSign.innerHTML = "- Libra -";
    qotdContent.innerHTML = "Learn to embrace the art of letting go.";
  } else if (
    (birthMonth == "10" && birthDay >= 23 && birthDay <= 31) ||
    (birthMonth == "11" && birthDay >= 1 && birthDay <= 22)
  ) {
    sunSign.innerHTML = "- Scorpio -";
    qotdContent.innerHTML = "Ask yourself what you want to be known for.";
  } else if (
    (birthMonth == "11" && birthDay >= 23 && birthDay <= 30) ||
    (birthMonth == "12" && birthDay >= 1 && birthDay <= 21)
  ) {
    sunSign.innerHTML = "- Sagittarius -";
    qotdContent.innerHTML = "Express yourself in bold and innovative ways.";
  } else if (
    (birthMonth == "12" && birthDay >= 22 && birthDay <= 31) ||
    (birthMonth == "1" && birthDay >= 1 && birthDay <= 19)
  ) {
    sunSign.innerHTML = "- Capricorn -";
    qotdContent.innerHTML = "Stay strong and don't bend to pressure.";
  } else if (
    (birthMonth == "1" && birthDay >= 20 && birthDay <= 31) ||
    (birthMonth == "2" && birthDay >= 1 && birthDay <= 18)
  ) {
    sunSign.innerHTML = "- Aquarius -";
    qotdContent.innerHTML =
      "Be willing to compromise and extend the olive branch.";
  } else if (
    (birthMonth == "2" && birthDay >= 19 && birthDay <= 28) ||
    (birthMonth == "3" && birthDay >= 1 && birthDay <= 20)
  ) {
    sunSign.innerHTML = "- Pisces -";
    qotdContent.innerHTML =
      "Trust your intuition as you go through big changes.";
  }
}

showDate();
showDefaultCity();
let submitCity = document.querySelector("#search-form");
submitCity.addEventListener("submit", showCity);
let locationButton = document.querySelector("#location");
locationButton.addEventListener("click", detectCity);
let fahrenheitButton = document.querySelector(".fahrenheit");
fahrenheitButton.addEventListener("click", getFahrenheit);
let celsiusButton = document.querySelector(".celsius");
celsiusButton.addEventListener("click", getCelsius);
let submitBirthday = document.querySelector("#qotd-form");
submitBirthday.addEventListener("submit", showQotd);
