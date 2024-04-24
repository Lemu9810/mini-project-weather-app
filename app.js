"use strict";
const API_KEY = config.apiKey;

const inputCity = document.querySelector(".weather-box__find input");
const submitBtn = document.querySelector(".weather-box__find button");
const box1 = document.querySelector(".weather-box__main");
const box2 = document.querySelector(".weather-box__sub1");
const box3 = document.querySelector(".weather-box__sub2");

const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const tempMinMax = document.getElementById("temp-min-max");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const noCity = document.getElementById("noCity");

submitBtn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  const city = inputCity.value;
  inputCity.value = "";
  createUrl(city);
}

function createUrl(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  getInfo(apiUrl);
  //console.log(apiUrl);
}

function getInfo(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => printInfo(data))
    .catch((error) => cityNotFound());
}

function printInfo(data) {
  noCity.classList.add("hidden");
  box1.classList.remove("hidden");
  box2.classList.remove("hidden");
  box3.classList.remove("hidden");

  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temp.innerText = `${data.main.temp}°`;
  city.innerText = data.name;
  tempMinMax.innerText = `${data.main.temp_min}° / ${data.main.temp_max}°`;
  humidity.innerText = `${data.main.humidity}%`;
  windSpeed.innerText = `${data.wind.speed}km/h`;
}

function cityNotFound() {
  noCity.classList.remove("hidden");
  box1.classList.add("hidden");
  box2.classList.add("hidden");
  box3.classList.add("hidden");
}
