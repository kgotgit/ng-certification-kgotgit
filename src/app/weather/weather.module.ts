import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherRoutingModule } from "./weather-routing.module";
import { FeaturesModule } from "../features/features.module";
import { CheckWeatherComponent } from "./pages/check-weather/check-weather.component";
import { ForecastWeatherComponent } from "./pages/forecast-weather/forecast-weather.component";
import { HttpClientModule } from "@angular/common/http";
import { ZipWeatherService } from "../services/zip-weather.serivice";

@NgModule({
  declarations: [CheckWeatherComponent, ForecastWeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FeaturesModule,
    HttpClientModule
  ],
  exports: [],
  providers: [ZipWeatherService]
})
export class WeatherModule {}
