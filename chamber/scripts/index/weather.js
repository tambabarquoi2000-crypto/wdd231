const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.3106&lon=-10.8047&units=imperial&appid=318c80798e8905f2f42577ce46a32e3b";

const forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=6.3106&lon=-10.8047&units=imperial&appid=318c80798e8905f2f42577ce46a32e3b";


// Make DOM object from the index html to contains current weather information

const currentWeatherParent = document.querySelector("#current-weather");
const forcastWeatherParent = document.querySelector("#forcast-weather"); 




// Define an async functions to get and display the current weather from an API

getCurrentWeather(url);
getForcastWeather(forcastUrl)

async function getCurrentWeather(url){
    try{
        const response = await fetch(url);

        if(response.ok)
        {
            const cardContainer = document.createElement("div");
            cardContainer.setAttribute("class", "weather-grid");
            const weatherDetailsCont = document.createElement("div");
            weatherDetailsCont.setAttribute("class", "w-deatils-cont");
            const weatherIcon = document.createElement("img");
            weatherIcon.setAttribute("class", "w-img");

            const data = await response.json();


            // get the weather Icon Code for Icon image display

            const iconcode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;



            // Set all necessary attribute for the image element

            weatherIcon.setAttribute("src", iconUrl);
            weatherIcon.setAttribute("loading", "lazy");
            weatherIcon.setAttribute("width", "44");
            weatherIcon.setAttribute("height", "44");
            weatherIcon.setAttribute("alt", "Current Weather Icon");


            // Set create p elements and store the weather details

            const currentTemp = document.createElement("p");
            currentTemp.textContent = `${Math.round(data.main.temp)}° F`;
            const descrip = document.createElement("p");
            descrip.textContent = data.weather[0].description;
            const high = document.createElement("p");
            high.textContent = `High: ${Math.round(data.main.temp_max)}°`;
            const low = document.createElement("p");
            low.textContent = `Low: ${Math.round(data.main.temp_min)}°`;
            const huminity = document.createElement("p");
            huminity.textContent = `Humidity: ${data.main.humidity}`;
            

            // Convert timestamp from the fetched data into a localtime string
            const now = new Date();
            const srLocalTime = now.toLocaleTimeString(data.sys.sunrise);
            const ssLocalTime = now.toLocaleTimeString(data.sys.sunset)

            const sunrise = document.createElement("p");
            sunrise.textContent = `Sunrise: ${srLocalTime}`;
            const sunset = document.createElement("p");
            sunset.textContent = `Sunset: ${ssLocalTime}`;


            // Add all p elements to the their parent container (weatherDetailsCont)
            
            weatherDetailsCont.appendChild(currentTemp);
            weatherDetailsCont.appendChild(descrip);
            weatherDetailsCont.appendChild(high);
            weatherDetailsCont.appendChild(low);
            weatherDetailsCont.appendChild(huminity);
            weatherDetailsCont.appendChild(sunrise);
            weatherDetailsCont.appendChild(sunset);

            // append both image container and details container in the current weather information container

            cardContainer.appendChild(weatherIcon);
            cardContainer.appendChild(weatherDetailsCont);
            currentWeatherParent.appendChild(cardContainer);
;
        }
    }
    

    catch (error) {
        console.log("IS THIS WORKING")
        console.log(error)

    }
    
    
}

    async function getForcastWeather(url)
    {
        const response = await fetch(url);
        const data = await response.json();

        const forcastCont = document.createElement("div");
        forcastCont.setAttribute("class", "forcast-div");


        const dailyForcast = data.list.filter(item => item.dt_txt.includes("00:00:00"));

        const currentWeatherArr = data.list[0];
        console.log(currentWeatherArr);

        const currentWeather = document.createElement("p");
        currentWeather.innerHTML = `Today: <span class="highlight">${Math.round(currentWeatherArr.main.temp)}° F</span>`;
        forcastCont.appendChild(currentWeather);


        for(let i=0; i < 3; i++) {

            const temp = document.createElement("p");

            // Get the day of the week as a string Ex.(Monday, Tuesday etc)
            const longDay = new Date(dailyForcast[i].dt_txt).toLocaleDateString("en-Us", 
                {
                    "weekday": "long"
                }
            )

            temp.innerHTML = `${longDay} <span class="highlight">${Math.round(dailyForcast[i].main.temp)}° F</span>`;
            forcastCont.appendChild(temp);
        }

        forcastWeatherParent.appendChild(forcastCont);
            

    }