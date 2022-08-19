import { Forecast } from '../../model/weather.model';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private wService: WeatherService) { }

  ngOnInit(): void {
  }

  @Input()
  title: string = '';

  @Input()
  items: Forecast[] = [];

  fetchIcon = (icon: any) => {
    return this.wService.getWeatherIcon(icon);
  }
}
