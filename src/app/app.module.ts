import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherSumComponent } from './components/weather-sum/weather-sum.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    AppComponent,
    WeatherSumComponent,
  ],
    imports: [
        BrowserModule,
        NgxSkeletonLoaderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
