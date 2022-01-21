import { Component } from '@angular/core';
import { WeatherService } from "./services/weather.service";
import { Weather } from "./api/cities";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meteo10Villes';

  // @ts-ignore
  selectedCityWeather: Weather;
  citiesWeather: Weather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCitiesWeather().then((citiesWeather) => {
      this.citiesWeather = citiesWeather;
      this.selectedCityWeather = this.citiesWeather[0];
    });

  }

  handleClick(event: string): void {
    // @ts-ignore
    this.selectedCityWeather = this.citiesWeather.find(
      ({ city }) => event === city
    );
  }

  randomCities() {
    this.ngOnInit();
  }
}
