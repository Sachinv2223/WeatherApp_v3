import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateTime } from 'luxon';
import { TopButtonsComponent } from './weather/top-buttons/top-buttons.component';
import { InputsComponent } from './weather/inputs/inputs.component';
import { DateTimeLocationComponent } from './weather/date-time-location/date-time-location.component';
import { CurrentTempDetailsComponent } from './weather/current-temp-details/current-temp-details.component';
import { ForecastComponent } from './weather/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TopButtonsComponent,
    InputsComponent,
    DateTimeLocationComponent,
    CurrentTempDetailsComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      progressAnimation:'increasing'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
