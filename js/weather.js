document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('trip-planner-form');
    const result = document.getElementById('weather-result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        const apiKey = 'e28919314bdfcfca1a18a50af31ec810';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weather = data.weather[0].description;
                const temp = data.main.temp.toFixed(1);
                result.textContent = `Weather: ${weather}, Temperature: ${temp}°C`;
            })
            .catch(error => {
                result.textContent = 'Error fetching weather data';
            });
    });
});
