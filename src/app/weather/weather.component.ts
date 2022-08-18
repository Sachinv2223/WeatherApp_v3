import { Component, OnInit } from '@angular/core';
import { topButton } from 'src/app/model/topButton.model';
import { WeatherData } from '../model/weather.model';
import { WeatherService } from '../services/weather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private wService: WeatherService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchWeather('Adoor');
  }

  data?: WeatherData;
  units: string = 'metric';


  fetchWeather = async (city: string, units: string = 'metric') => {
    this.toastr.info('Fetching weather info...');

    this.wService.getFormattedWeatherData({ q: city, units: units }).then((res) => {
      this.data = res;
      this.units = units;
      this.toastr.success('Successfully fetched info..');
    }).catch(() => {
      this.toastr.error('Invalid city name..!');
    }).finally(() => {
      console.log(this.data);
    })
  }

  fetchIcon = (icon: any) => {
    return this.wService.getWeatherIcon(icon);
  }

  handleLocationClick() {
    this.toastr.info('Fetching user location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.toastr.success('User location fetched...')
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        this.data = await this.wService.getFormattedWeatherData({ lat: lat, lon: lon, units: this.units });
      }, (err) => {
        // alert("Your browser not support geolocation api");
        console.log(err);
        this.toastr.error('Denied location access..!');
      })
    }
  }

  //* apply dynamic background using tailwind css class (check style.css)
  formatBgColor() {
    if (this.data) {
      let threshold = this.units === 'metric' ? 20 : 68;
      if (this.data?.temp <= threshold) {
        return "cold";
      } else {
        return "hot";
      }
    }
    else {
      return "cold";
    }
  }

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

  getTopButtons() {
    return this.topButtons;
  }

  getData() {
    return this.data;
  }

  fetchInputObject(inpObj:{city:string,units:string}) {
    this.fetchWeather(inpObj.city,inpObj.units);
  }
}
