import { NgModule } from "@angular/core";
import { AddLocationComponent } from "./add-location/add-location.component";
import { ForecastComponent } from "./forecast/forecast.component";
import {ZipWeatherDetailsComponent} from './zip-weather-details/zip-weather-details.component'
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { WeatherImgComponent } from "./weather-img/weather-img.component";

@NgModule({
  declarations:[AddLocationComponent,ForecastComponent,ZipWeatherDetailsComponent,WeatherImgComponent],
  imports:[CommonModule,ReactiveFormsModule,RouterModule],
  exports:[AddLocationComponent,ForecastComponent,ZipWeatherDetailsComponent,WeatherImgComponent],
})
export class FeaturesModule{

}