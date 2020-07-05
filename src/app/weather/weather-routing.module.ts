import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CheckWeatherComponent } from "./pages/check-weather/check-weather.component";
import { ForecastWeatherComponent } from "./pages/forecast-weather/forecast-weather.component";

const routes: Route[] = [
  {
    path: "",

    children: [
      { path: "", component: CheckWeatherComponent },
      { path: "forecast/:zip", component: ForecastWeatherComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule {}
