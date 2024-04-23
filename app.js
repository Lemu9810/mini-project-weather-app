"use strict";

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
  const api_key = "43e19b92a06de2aac75090e8222ec34e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  console.log(apiUrl);
}
