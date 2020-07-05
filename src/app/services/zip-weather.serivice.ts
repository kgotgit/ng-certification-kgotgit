import { Injectable } from "@angular/core";
import { environment } from "../environments/environments";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ZipWeatherDtlsIntrfc, ForecastListItrfc } from "../models/zip-weather.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class ZipWeatherService{

checkWeatherEndPoint=`${environment.weatherServiceUrl}`+`${environment.checkWeatherSuffixUrl}`+`${environment.appId}`;

foreCastEndPoint=`${environment.weatherServiceUrl}`+`${environment.forecastSuffixUrl}`+`${environment.appId}`;


constructor(private http:HttpClient){

}


/**
 * Invoke service to fetch weather details for given zip
 */O
fetchWeatherInfoForZip(param:string,units:string):Observable<ZipWeatherDtlsIntrfc>{
  let url=this.checkWeatherEndPoint+"&zip="+param+",us&units="+units;
  return this.http.get<ZipWeatherDtlsIntrfc>(url).pipe(
    map((data)=>data as ZipWeatherDtlsIntrfc)
  );
}


/**  
 * Invoke service to fetch forecast details for given zip
 */
fetchWeatherForecastForParams(param:string,units:string):Observable<ForecastListItrfc>{
  let url=this.foreCastEndPoint+"&zip="+param+",us&units="+units+"&ct=5";
  return this.http.get<ForecastListItrfc>(url).pipe(
    map((data)=>data as ForecastListItrfc)
  );
}


}
