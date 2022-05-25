import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = () => {
    
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = async (pos) => {
        const crd = pos.coords;

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=uk&apiKey=374d4a50681d488da4dc4807c0c6aa67`
        );

        const result = await response.json();
        console.log(result);

        const weather = await getWeatherData(result.features[0].properties.city);
        resetWeatherContent(result.features[0].properties.city, weather);
    }

    const error = (err) => {
        console.log(err.code + ' ' + err.message);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}