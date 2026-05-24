const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=318c80798e8905f2f42577ce46a32e3b";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figCap = document.querySelector("figure figcaption");


async function getTrierCcWeather() {
    
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
        console.table(data);
        console.log(data);
        currentTemp.textContent = `${data.main.temp} °C`;
        weatherIcon.setAttribute("src", data.weather[0].icon);
        }
        
    }

    catch(error){
        console.log(error.message)
    }
    
    
}

getTrierCcWeather();

