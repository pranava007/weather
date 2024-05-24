const apiKey = "5c0172544e3c22ffd6a7928d766ad4fd ";
const apiUrl =
  " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox=document.querySelector(".search input");
  const searchBtn=document.querySelector(".search button")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
  document.querySelector(".wind").innerHTML=data.wind.speed + " KM/h";
}

searchBtn.addEventListener("click",()=>{

    checkWeather(searchBox.value);
})