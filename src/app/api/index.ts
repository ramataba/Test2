import { environment } from "../../environments/environment";
import { Weather } from "./cities";

const { WEATHER_API_KEY } = environment;

export const getCityWeather = async (lon: any, lat: any, city: any): Promise<Weather> => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&exclude=minutely,daily,alerts&units=metric`
  )
    .then((response) => response.json())
    .then((response) => ({ ...response, city }));
};

