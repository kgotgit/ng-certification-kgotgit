import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { ZipWeatherDtlsIntrfc } from "../../models/zip-weather.interface";

@Component({
  selector:'zip-weather-details',
  templateUrl:'./zip-weather-details.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ZipWeatherDetailsComponent{


  _zip:string;
  _zipWeatherDetails:ZipWeatherDtlsIntrfc;
  @Output() onDelete=new EventEmitter<string>();

  @Input()
  set zip(zip:string){
    this._zip=zip;
  }

  @Input()
  set zipWeatherDetails(zipWeather:ZipWeatherDtlsIntrfc){
    this._zipWeatherDetails=zipWeather;
  }
  
  onDeleteClick($event){
    this.onDelete.emit(this._zip);
  }

}