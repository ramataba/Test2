export interface City {
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

export interface Weather {
  city: string;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly?: HourlyEntity[] | null;
}

export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather?: WeatherEntity[] | null;
}

export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface HourlyEntity {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather?: WeatherEntity[] | null;
  pop: number;
  rain?: Rain | null;
}

export interface Rain {
  "1h": number;
}

export const NUMBER_OF_CITIES = 10;

export const cities: City[] = [
  {
    city: "Dakar",
    country: " Senegal",
    latitude: "14.6937",
    longitude: "-17.4441",
  },
  {
    city: "Nouakchott",
    country: " Mauritania",
    latitude: "18.0858",
    longitude: "-15.9785",
  },
  {
    city: "London",
    country: " United Kingdom",
    latitude: "51.507222",
    longitude: "0.1275",
  },
  {
    city: "Berlin",
    country: " Germany",
    latitude: "52.516667",
    longitude: "13.383333",
  },
  {
    city: "Madrid",
    country: " Spain",
    latitude: "40.383333",
    longitude: "3.716667",
  },
  {
    city: "Kiev",
    country: " Ukraine",
    latitude: "50.45",
    longitude: "30.523333",
  },
  { city: "Rome", country: " Italy", latitude: "41.9", longitude: "12.5" },
  {
    city: "Paris",
    country: " France",
    latitude: "48.8567",
    longitude: "2.3508",
  },
  {
    city: "Bucharest",
    country: " Romania",
    latitude: "44.4325",
    longitude: "26.103889",
  },
  {
    city: "Marseille",
    country: " France",
    latitude: "48.8567",
    longitude: "2.3508",
  },
  {
    city: "Lille",
    country: " France",
    latitude: "50.633",
    longitude: "3.0586",
  },
  {
    city: "Ottawa",
    country: " Canada",
    latitude: "45.4112",
    longitude: "-75.6981",
  },
  {
    city: "Barcelona",
    country: " Spain",
    latitude: "41.383333",
    longitude: "2.183333",
  },
  {
    city: "Munich",
    country: " Germany",
    latitude: "48.133333",
    longitude: "11.566667",
  },
  {
    city: "Kharkiv",
    country: " Ukraine",
    latitude: "50.004444",
    longitude: "36.231389",
  },
  {
    city: "Milan",
    country: " Italy",
    latitude: "45.466667",
    longitude: "9.183333",
  },
  {
    city: "Prague",
    country: " Czech Republic",
    latitude: "50.083333",
    longitude: "14.416667",
  },
  {
    city: "Naples",
    country: " Italy",
    latitude: "40.833333",
    longitude: "14.25",
  },
];
