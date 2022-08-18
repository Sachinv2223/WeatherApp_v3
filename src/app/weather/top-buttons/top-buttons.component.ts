import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { topButton } from 'src/app/model/topButton.model';

@Component({
  selector: 'app-top-buttons',
  templateUrl: './top-buttons.component.html',
  styleUrls: ['./top-buttons.component.css']
})
export class TopButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  topButtons: topButton[] = [];

  @Output()
  topButtonClicked: EventEmitter<string> = new EventEmitter<string>();

  fetchWeather(city:string) {
    this.topButtonClicked.emit(city);
  }

}
