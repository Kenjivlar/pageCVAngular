import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-weather-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-api.component.html',
  styleUrl: './weather-api.component.css'
})
export class WeatherApiComponent {
  urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  difKelvin = 273.15
  
  city: string;
  api_key: string;

  cityN: string;
  cityC: string;
  cityT?: Number;
  cityH: string;
  cityD: string;
  cityI: string;
  flag: Boolean;


  constructor(){
    this.city = ''
    this.api_key = ''
    this.cityN = ''
    this.cityC = ''
    this.cityH = ''
    this.cityD = ''
    this.cityI = ''
    this.flag = false
    // this.cityT = ''
  }



  
  fetchDatosClima(){
      this.flag = true
      this.city = (<HTMLInputElement>document.getElementById('cityT')).value;
      this.api_key = (<HTMLInputElement>document.getElementById('akey')).value;
      fetch(`${this.urlBase}?q=${this.city}&appid=${this.api_key}`)
      .then(response => response.json())
      .then(response => {
        this.cityN = response.name,
        this.cityT = Math.floor(response.main.temp-this.difKelvin),
        this.cityC = response.sys.country,
        this.cityH = response.main.humidity,
        this.cityD = response.weather[0].description,
        this.cityI = response.weather[0].icon
      } )
  }
  
}
