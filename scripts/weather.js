const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const forecastDesc = document.querySelector('.forecastDesc');

async function setForecast() {
    const city = localStorage.getItem('city');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=0ccf0b1c1a6737e16e4c88c68e630b77&units=metric`;
    const res = await fetch(url);
   
    if (!res.ok) {
        city.textContent = 'Incorrect city name';
        return;
    }

    const data = await res.json();
    // alert(data.main.temp);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} m/s`;
}

setForecast();