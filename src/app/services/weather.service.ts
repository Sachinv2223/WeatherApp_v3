import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../model/weather.model';
import { DateTime } from "luxon";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  //using FETCH method and url generation
  getWeatherData(infoType: string, searchParams: any) {
    const finalUrl = new URL(environment.weatherApiBaseUrl + "/" + infoType);
    finalUrl.search = <any>new URLSearchParams({ ...searchParams, apiKey: environment.ApiKey });

    return fetch(finalUrl).then((res) => res.json()).then((data) => data);
  };


  //Destructuring the given data according to our needs 
  //*(refer: "Destructuring in js/ts")
  formatCurrentWeather = (data: any) => {
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      // timezone,  //!<= this is timezone "name" (thats y below fns arent working properly), 
                    //TODO here we should use timezone_offset as per json format 
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed }
    } = data;

    const { main: details, description, icon } = weather[0];

    //// const currentTimeDate = this.formatToLocalTime(dt,timezone);
    //// const currentTime = this.formatToLocalTime(dt, timezone, "hh:mm a");
    //// const currentDate = this.formatToLocalTime(dt, timezone, "cccc, dd LLL yyyy");

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, speed, description, icon };
  }

  formatForecastWeather = (data: any) => {
    let {
      timezone,
      daily,
      hourly
    } = data;


    daily = daily.slice(1, 6).map((d: any) => {
      return {
        title: this.formatToLocalTime(d.dt, timezone, 'ccc'),
        temp: d.temp.day,
        icon: d.weather[0].icon
      }
    });

    hourly = hourly.slice(1, 6).map((d: any) => {
      return {
        title: this.formatToLocalTime(d.dt, timezone, 'hh:mm a'),
        temp: d.temp,
        icon: d.weather[0].icon
      }
    });

    return { timezone, daily, hourly };
  }

  //in order to get lat and lon data, initial we call infoType='weather' and city
  //after that we call infoType='onecall' for whole data
  getFormattedWeatherData = async (searchParams: any) => {
    const formattedCurrentWeather = await this.getWeatherData('weather', searchParams)
      .then(data => this.formatCurrentWeather(data));

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await this.getWeatherData('onecall', {
      lat,
      lon,
      exclude: 'current,minutely',
      units: searchParams.units
    }).then(data => this.formatForecastWeather(data));

    const currentTime = this.formatToLocalTime(formattedCurrentWeather.dt, formattedForecastWeather.timezone, "hh:mm a");
    const currentDate = this.formatToLocalTime(formattedCurrentWeather.dt, formattedForecastWeather.timezone, "cccc, dd LLL yyyy");

    const sunRiseTime = this.formatToLocalTime(formattedCurrentWeather.sunrise, formattedForecastWeather.timezone, "hh:mm a");
    const sunSetTime = this.formatToLocalTime(formattedCurrentWeather.sunset, formattedForecastWeather.timezone, "hh:mm a");

    return { ...formattedCurrentWeather, ...formattedForecastWeather, currentDate, currentTime, sunRiseTime, sunSetTime };
  }

  //For formating timestamp to localtime //! using luxon
  formatToLocalTime = (secs: any, zone: any, format: any = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => (
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format))

  getWeatherIcon = (code: any) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
  }

















  //using httpClient method
  // getWeatherData(cityName: string,units:string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
  //     params: new HttpParams()
  //       .set('q', cityName)
  //       .set('units',units)
  //       .set('appid', environment.ApiKey)
  //   })
  // }
}
