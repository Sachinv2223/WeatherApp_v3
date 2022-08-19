import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/model/weather.model';

@Component({
  selector: 'app-date-time-location',
  templateUrl: './date-time-location.component.html',
  styleUrls: ['./date-time-location.component.css']
})
export class DateTimeLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  data?: WeatherData;

}
