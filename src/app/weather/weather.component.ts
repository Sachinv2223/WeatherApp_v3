import { Component, OnInit } from '@angular/core';
import { topButton } from 'src/app/model/topButton.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private wService: WeatherService) { }

  ngOnInit(): void {
    this.fetchWeather('Kollam', 'metric');
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

  fetchWeather = async (city: string, units: string) => {
    const data = await this.wService.getFormattedWeatherData({ q: city, units: units });
    console.log(data);
  }



}
