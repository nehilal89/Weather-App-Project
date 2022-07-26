function displaytemp(response) {
  console.log(response.data.main.temp);
  let tempelement = document.querySelector("#temperature");
  let cityelement = document.querySelector("#city");
  let iconelement = document.querySelector("#icon");
  tempelement.innerHTML = Math.round(response.data.main.temp);

  cityelement.innerHTML = response.data.name;
  iconelement.setAttribute(
    "src",
    "http://openweather.org/img/wn/${reponse.data.weather[0].icon}@2x.png"
  );
  iconelement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apikey = "4ce7768a609d82b337fff93fafcb3c24";
  let city = "Paris";
  let apiurl =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}appid=${apikey}&units=metric";

  console.log(apiurl).then(displaytemp);
}

function handlesubmit(event) {
  event.preventDefault();
  let cityinputelement = document.querySelector("#city-input");
  search(cityinputelement.value);
  console.log(cityinputelement.value);
}

search("new york");

axios.get(url).then(displayTemperature);

let form = document.querySelector("search-form");
form.addEventListener("submit", handlesubmit);
