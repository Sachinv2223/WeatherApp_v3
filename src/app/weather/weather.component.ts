import { Component, OnInit } from '@angular/core';
import { topButton } from 'src/app/model/topButton.model';
import { WeatherData } from '../model/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private wService: WeatherService) { }

  ngOnInit(): void {
    this.fetchWeather('Kochi');
  }

  data ?: WeatherData;
  weatherIconUrl:any = '';
  units:string = 'metric';
  // currentDateTime:any;
  // currentDate:any;
  // currentTime:any;
  // sunRise:any;
  // sunSet:any;


  fetchWeather = async (city: string, units: string = 'metric') => {
    this.data = await this.wService.getFormattedWeatherData({ q: city, units: units });
    this.units = units;
    // this.currentDateTime = this.wService.formatToLocalTime(this.data.dt,this.data.timezone);
    // this.currentDate = this.wService.formatToLocalTime(this.data.dt,this.data.timezone,"cccc, dd LLL yyyy");
    // this.currentTime = this.wService.formatToLocalTime(this.data.dt,this.data.timezone,"hh:mm a");

    // this.sunRise = this.wService.formatToLocalTime(this.data.sunrise,this.data.timezone,"hh:mm a");
    // this.sunSet = this.wService.formatToLocalTime(this.data.sunset,this.data.timezone,"hh:mm a");
    console.log(this.data);
    this.weatherIconUrl = this.wService.getWeatherIcon(this.data.icon);
  }


  topButtons: topButton[] = [{
    id: 1,
    title: 'London'
  },
  {
    id: 2,
    title: 'Sydney'
  },
  {
    id: 3,
    title: 'Tokyo'
  },
  {
    id: 4,
    title: 'Toronto'
  },
  {
    id: 5,
    title: 'Paris'
  }]
}
