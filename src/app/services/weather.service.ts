import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  //using httpClient method
  getWeatherData(cityName: string,units:string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('units',units)
        .set('appid', environment.ApiKey)
    })
  }
}
