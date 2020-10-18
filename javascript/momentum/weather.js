const weather = document.querySelector(".js-Weather"),
        temp = document.querySelector("#temp"),
        currCity = document.querySelector("#currCity");
const API_KEY = "68f50c75546e6a750daa4ee528cdf259";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        const icon = (json.weather[0].icon).substr(0,2);
        // const img = document.createElement("img");
        // img.style.width = 75+ "px";
        // img.style.height = 75 + "px";
        // const img = "<img width = '75px' height = '70px' src = http://openweathermap.org/img/wn/" + icon + "@2x.png>" + "</img>";
        
        let weathericon = {
            '01' : 'fas fa-sun',
            '02' : 'fas fa-cloud-sun',
            '03' : 'fas fa-cloud',
            '04' : 'fas fa-cloud-meatball',
            '09' : 'fas fa-cloud-sun-rain',
            '10' : 'fas fa-cloud-showers-heavy',
            '11' : 'fas fa-poo-storm',
            '13' : 'fas fa-snowflake',
            '50' : 'fas fa-smog',
        }

        const img = "<i class='weatherIcon " + weathericon[icon]  +"'></i>";
        temp.innerHTML = `${img} ${temperature.toFixed(1)}º`;
        currCity.innerText = `${place}`
        // weather.innerHTML = `${img} ${temperature.toFixed(1)} ºC <br> @${place} `;
        // weather.appendChild(img);
    })
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude =  position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,   //이름을 같게 지정하고 싶으면 뒤에 :latitude 생략 가능함.
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function  askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();