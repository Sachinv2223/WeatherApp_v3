import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherData } from 'src/app/model/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-temp-details',
  templateUrl: './current-temp-details.component.html',
  styleUrls: ['./current-temp-details.component.css']
})
export class CurrentTempDetailsComponent implements OnInit {

  constructor(private wService: WeatherService) { }

  ngOnInit(): void {
  }

  @Input()
  data?: WeatherData;

  @Input()
  units: string = '';

  //* apply dynamic background using tailwind css class (check style.css)
  formatTextColor() {
    if (this.data) {
      let threshold = this.units === 'metric' ? 20 : 68;
      if (this.data?.temp <= threshold) {
        return "coldText";
      } else {
        return "hotText";
      }
    }
    else {
      return "coldText";
    }
  }

  fetchIcon = (icon: any) => {
    return this.wService.getWeatherIcon(icon);
  }

}
