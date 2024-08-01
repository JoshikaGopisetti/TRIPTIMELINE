document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('trip-planner-form');
    const result = document.getElementById('weather-result');
    const carousel = document.querySelector('.carousel-images');
    const carouselImages = document.querySelectorAll('.carousel-image');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');
    let currentIndex = 0;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        const apiKey = 'e28919314bdfcfca1a18a50af31ec810';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weather = data.weather[0].description;
                    const temp = data.main.temp.toFixed(1);
                    result.textContent = `Weather: ${weather}, Temperature: ${temp}°C`;
                } else {
                    result.textContent = 'Error: ' + data.message;
                }
            })
            .catch(error => {
                result.textContent = 'Error fetching weather data';
            });
    });

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.length - 1;
        updateCarousel();
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselImages.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
