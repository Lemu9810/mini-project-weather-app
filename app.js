"use strict";
const API_KEY = config.apiKey;

const inputCity = document.querySelector(".weather-box__find input");
const submitBtn = document.querySelector(".weather-box__find button");
const box1 = document.querySelector(".weather-box__main");
const box2 = document.querySelector(".weather-box__sub1");
const box3 = document.querySelector(".weather-box__sub2");

const temp = document.getElementById("temp");
const city = document.getElementById("city");
const tempMin = document.getElementById("temp-min");
const tempMax = document.getElementById("temp-max");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const alert = document.getElementById("alert");

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
  alert.classList.add("hidden");
  box1.classList.remove("hidden");
  box2.classList.remove("hidden");
  box3.classList.remove("hidden");

  temp.innerText = `${data.main.temp}°`;
  city.innerText = data.name;
  tempMin.innerText = `${data.main.temp_min}°`;
  tempMax.innerText = `${data.main.temp_max}°`;
  humidity.innerText = `${data.main.humidity}%`;
  windSpeed.innerText = `${data.wind.speed}km/h`;
}

function cityNotFound() {
  alert.classList.remove("hidden");
  box1.classList.add("hidden");
  box2.classList.add("hidden");
  box3.classList.add("hidden");
}
