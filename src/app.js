function displayTemperature(response) {
  console.log(response.data);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

apiKey = "6bfa54f242cbb59343d4e58db578dc61";
unit = "metric";
apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=6bfa54f242cbb59343d4e58db578dc61&units=metric`;

axios.get(apiUrl).then(displayTemperature);
