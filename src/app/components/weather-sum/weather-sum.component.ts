import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Weather} from "../../api/cities";
import {getWeatherIcon} from "../../libs";
import { getTime} from "src/app/libs";

@Component({
  selector: 'app-weather-sum',
  templateUrl: './weather-sum.component.html',
  styleUrls: ['./weather-sum.component.css']
})
export class WeatherSumComponent{
  // @ts-ignore
  weather: Weather ;
  @Output() clicked = new EventEmitter();

  // @ts-ignore
  @Input() set cityWeather(value) {
    this.weather = { ...value };
  }

  getIcon(): string {
    // @ts-ignore
    return getWeatherIcon(this.weather?.current?.weather[0]?.icon);
  }

  // @ts-ignore
  getTime(timeZone): string {
    return getTime(0,timeZone);
  }
}
