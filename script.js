let text = "METEO"
let i = 0;
let speed = 200;

 function type() {
    if (i < text.length) {
    document.querySelector("#innerText").textContent += text.charAt(i);
    i++;
    setTimeout(type, speed)
 }
}
type()

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "5a4d16aa8f41889e5d08d33b4cb0b4bf"
  }
   // console.log(api)


const input = document.querySelector("#input");
const temperature = document.querySelector("#temperattrue");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
      getInfo(input.value);
    }
  }

async function getInfo (data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
  const result = await res.json();

displayResult(result);
}

function displayResult (result){
  //console.log(result);
container2.classList.remove("hidden");

  let city = document.querySelector("#city");
  city.textContent = `${result.name}, ${result.sys.country}`;

  getOurDate();

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(result.main.temp)} <span>°</span>`;

  let feelsLike = document.querySelector("#feelsLike");
  feelsLike.innerHTML = ` <span> Ressenti: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

  let conditions = document.querySelector ("#conditions");
  //let conditions1 = conditions.toUpperCase();
  conditions.textContent = `${result.weather[0].description}`;

   
  let variation = document.querySelector("#variation");
  variation.innerHTML = "Min: " +`${Math.round(result.main.temp_min)} <span>°</span>` + " " + "Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;
}


function getOurDate(){
  
const myDate = new Date();

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Friday", "Samedi"];
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
//let date = document.querySelector("#date").textContent = days[myDate.getDay()];
let day = days[myDate.getDay()];
console.log (day);

let todayDate = myDate.getDate();
console.log(todayDate);


let month = months[myDate.getMonth()];
console.log(month);

let year = myDate.getFullYear();
console.log(year);

let showDate = document.querySelector("#date");
showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`

}

