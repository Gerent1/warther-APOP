// document.addEventListener('DOMContentLoaded', () => {
//     // Function to fetch weather data from an API
//     const url = 'https://weather-api99.p.rapidapi.com/weather?city=%3CREQUIRED%3E';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a738fd29e5msh7cc49cf71c11a0cp13b0a2jsna7b4dad77741',
// 		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//     // Function to update weather information on the page
//     const updateWeatherInfo = async (city) => {
//         const weatherData = await fetchWeatherData(city);
//         if (weatherData) {
//             const weatherInfo = document.querySelector('.weather-info');
//             weatherInfo.innerHTML = `
//                 <h2>${city}</h2>
//                 <p>Temperature: ${weatherData.main.temp}°C</p>
//                 <p>Description: ${weatherData.weather[0].description}</p>
//             `;
//         }
//     };

//     // Update weather information for a default city
//     updateWeatherInfo('London');
// });


document.addEventListener('DOMContentLoaded', async () => {
    // Function to fetch weather data from an API
    const fetchWeatherData = async (city) => {
        const url = `https://weather-api99.p.rapidapi.com/weather?city=${city}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a738fd29e5msh7cc49cf71c11a0cp13b0a2jsna7b4dad77741',
                'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    // Function to update weather information on the page
    const updateWeatherInfo = async (city) => {
        const weatherData = await fetchWeatherData(city);
        if (weatherData) {
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${weatherData.main.temp}°C</p>
                <p>Description: ${weatherData.weather[0].description}</p>
            `;
        }
    };

    // Update weather information for a default city
    updateWeatherInfo('London');
});
