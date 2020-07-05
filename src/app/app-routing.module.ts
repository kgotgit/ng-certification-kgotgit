import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  {
    path: "weather/check-weather",
    loadChildren: () =>
      import("./weather/weather.module").then(mod => mod.WeatherModule)
  },
  { path: "", redirectTo: "weather/check-weather", pathMatch: "full" },
  { path: "**", redirectTo: "weather/check-weather", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
