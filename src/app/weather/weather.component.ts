import { Component, OnInit } from '@angular/core';
import { topButton } from 'src/app/model/topButton.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
