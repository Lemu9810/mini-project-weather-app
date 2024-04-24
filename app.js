"use strict";
const API_KEY = config.apiKey;

const inputCity = document.querySelector(".weather-box__find input");
const submitBtn = document.querySelector(".weather-box__find button");

submitBtn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  const city = inputCity.value;
  createUrl(city);
  inputCity.value = "";
}

function createUrl(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  console.log(apiUrl);
}
