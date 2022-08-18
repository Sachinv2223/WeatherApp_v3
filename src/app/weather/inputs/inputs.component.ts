import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherData } from 'src/app/model/weather.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  data?: WeatherData;

  @Output()
  inputObjectEmitted: EventEmitter<{city:string,units:string}> = new EventEmitter<{city:string,units:string}>();

  @Output()
  handleLocationClick: EventEmitter<void> = new EventEmitter();

  fetchWeather(city:string,units:string = 'metric') {
    this.inputObjectEmitted.emit({city,units});
  }

  handleLocationClickChild() {
    this.handleLocationClick.emit();
  }
}
