import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ZipWeatherService } from "../../../services/zip-weather.serivice";
import { map, takeUntil } from "rxjs/operators";
import { ForecastListItrfc } from "../../../models/zip-weather.interface";
import { DatePipe } from "@angular/common";
import { Subject } from "rxjs";

@Component({
  'selector':'forecast-weather',
  'templateUrl':'./forecast-weather.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ForecastWeatherComponent implements OnInit,OnDestroy{

  zip:string;
  forecastsObj:ForecastListItrfc;
  units:'imperial'|'metric'='imperial';
  _destroy$=new Subject();


  constructor(private activatedRoute:ActivatedRoute,
              private zipWeatherService:ZipWeatherService,
              private changeDetectionRef:ChangeDetectorRef){

  }

  ngOnInit(){
    this.getZipFromRoute();
  }

  /**
   * get zip from route url via ActivatedRoute
   */
  getZipFromRoute(){
    this.activatedRoute.params.pipe(
      takeUntil(this._destroy$),//ensures subscriptions is cleared when component is destroyed.
      map((params)=>{
        this.zip=params["zip"];
        this.fetchWeatherForcast(this.zip);
      })
    ).subscribe();
  }


  /**
   * Fetch forecast 5 days
   */
  fetchWeatherForcast(zip:string){
    this.zipWeatherService.fetchWeatherForecastForParams(zip,this.units).pipe(
      map((data:ForecastListItrfc)=>{
        this.forecastsObj={...data};
        this.changeDetectionRef.detectChanges();
        })
    ).subscribe();
  }


  /**
   * Clear all subscriptions
   */
  ngOnDestroy(){
    this._destroy$.next();
    this._destroy$.complete();
  }


}