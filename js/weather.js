const API_KEY = "6a95a31a2736c06635c257e41927afcd";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const regex = /[^0-9]/gi;
      const weatherBox = document.querySelector("#weatherBox");
      const tempMain = `${Math.floor(data.main.temp)}º`;
      const name = data.name;
      const weatherIconName = data.weather[0].icon;
      const text = `<img id="weatherIcon" class="weather-icon" alt=${
        data.weather[0].main
      } src=./img/${weatherIconName.replace(regex, "")}.png>
                      <span id="temp" class="weather-temp">${tempMain}</span><br>
                      <span id="city" class="weather-location">${name}</span>`;
      weatherBox.innerHTML = text;
      weatherBox.classList.remove(HIDDEN_CLASSNAME);
    });
}

function geoError() {
  alert("Can't find you. No weather for you.");
}

function getWeather() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

window.addEventListener("load", getWeather);
