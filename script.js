
let input = document.getElementById("input");

let btn = document.getElementById("get");

let card = document.getElementById("card");

let cel = document.getElementById("carda");

let hum = document.getElementById("carde");

let tempmin = document.getElementById("cardb");

let tempmax = document.getElementById("cardc");

let feel = document.getElementById("cardd");

let des = document.getElementById("cardf");

let wind = document.getElementById("cardg");



btn.addEventListener("click", () => {
 
   fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5c0172544e3c22ffd6a7928d766ad4fd&units=metric`
    )
      .then((data) => data.json())
      .then((ele) => {
        let e = ele.main.temp;
        cel.innerHTML = ` <i
        class="fa fa-thermometer-empty"
        id="tempicon"
        aria-hidden="true"
      ></i>${Math.round(ele.main.temp)} °C`;
        hum.innerHTML = ` ${ele.main.humidity}%`;
        des.innerHTML = ` ${ele.weather[0].description}`;
        tempmin.innerHTML = ` ${ele.main.temp_min} °C`;
        tempmax.innerHTML = `${ele.main.temp_max} °C`;
        feel.innerHTML = `${ele.main.feels_like} °C`;
        wind.innerHTML = ` ${ele.wind.speed} KM/h`;
      })
      .catch((error) => console.log(error));
      card.innerHTML = `${input.value}`
  });




