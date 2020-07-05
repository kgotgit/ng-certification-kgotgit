export interface CoordIntrfc{
  lon:number;
  lat:number;
}

export interface WeatherIntrfc{
  id:number;
  main:string;
  descriptio:string;
  icon:string;
}
export interface weatherMain{
  temp:number;
  feels_like:number;
  temp_min:number;
  temp_max:number;
  pressure:number;
  humidity:number;
}
export interface WindIntrfc{
  speed:number;
  deg:number;
  gust:number;
}
export interface CloudsIntrfc{
  all:number;
}
export interface SysIntrfc{
  type:number;
  id:number;
  country:string;
  sunrise:Date;
  subset:Date;
}

export interface CityItrfc{
	id:number;
	name:string;
	coord:CoordIntrfc;
	country:string;
	population:number;
	timezone:number;
}

export interface TempItrfc{
	day:number;
	min?:number;
	 max?:number;
	 night:number;
	 eve:number;
	 morn:number;
}

export interface ForecastIntrfc{
	dt:Date;
	sunrise:number;
	sunset:number;
	temp:TempItrfc;
	feels_like:TempItrfc;
	pressure:number;
	humidty:number;
	weather:WeatherIntrfc[]
}

export interface ForecastListItrfc{
	city:CityItrfc;
	cod:string;
	message:number;
	cnt:number;
	list:ForecastIntrfc[];

}
export interface ZipWeatherDtlsIntrfc{
  coord:CoordIntrfc;
  weather:WeatherIntrfc;
  base:string;
  main:weatherMain;
  visibility:number;
  wind:WindIntrfc;
  clouds:CloudsIntrfc;
  dt:Date;
  sys:SysIntrfc;
  timezone:number;
  id:number;
  name:string;
  cod:number;
}