export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bf9c51d90a56954860816b22d877990&lang=ua&units=metric`
        );
        return await response.json();
        
    } catch (error) {
        console.error(error);
    }
}