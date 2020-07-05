import {Component, ChangeDetectionStrategy, OnDestroy, OnInit, Input, ChangeDetectorRef} from '@angular/core';

import { ForecastListItrfc } from "../../models/zip-weather.interface";
import { DatePipe } from '@angular/common';
@Component({
  'selector':'forecast',
  'templateUrl':'./forecast.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[DatePipe]
})
export class ForecastComponent implements OnInit,OnDestroy{

_zip:string;
_forecastsObj:ForecastListItrfc;


@Input() 
set zip(zip:string){
  this._zip=zip;
}

@Input() 
set forecastObj(forecastObj:ForecastListItrfc){
  this._forecastsObj=forecastObj;

}


constructor(private changeDetectionRef:ChangeDetectorRef){
  
}

ngOnInit(){

}

ngOnDestroy(){

}

}