import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector:'weather-img',
  templateUrl:'./weather-img.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WeatherImgComponent{

  _isIcon=false;
  _type:string;

  @Input()
  set isIcon(icon){
    this._isIcon=(icon=="true" || icon==true)?true:false;
  }

  
  @Input()
  set type(type:string){
    this._type=type;
  }

  constructor(){

  }
}