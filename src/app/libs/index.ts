import { cities, City } from "../api/cities";
import format from "date-fns/format";
import addHours from "date-fns/addHours";
import { convertToTimeZone } from "date-fns-timezone";

/**
 * @param numberOfcities Number of cities to generate
 * @returns Generated cities
 */
export const getRandomCities = (numberOfcities: number): City[] => {
  const randomCities: City[] = [];
  const map: { [index: number]: boolean } = {};
  const numberOfCitiesToGenerate = Math.min(numberOfcities, cities.length);

  for (let i = 0; i < numberOfCitiesToGenerate; i++) {
    let done = false;
    while (!done) {
      const j = Math.floor(Math.random() * cities.length);
      if (!map[j]) {
        map[j] = true;
        randomCities.push(cities[j]);
        done = true;
      }
    }
  }

  return randomCities;
};

export const getWeatherIcon = (icon: string): string => {
  return icon ? `http://openweathermap.org/img/wn/${icon}@4x.png` : "";
};

export const getTime = (hoursOffset: number, timeZone: string): string => {
  const date: Date = getZonedDate(hoursOffset, timeZone);
  return format(date, "HH:mm");
};

const getZonedDate = (hoursOffset: number, timeZone: string): Date => {
  return convertToTimeZone(addHours(new Date(), hoursOffset), { timeZone });
};
