import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=73ef5396990e63ea399169b015079e33');
  }

  getWeeklyWeather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=Istanbul&units=metric&appid=73ef5396990e63ea399169b015079e33')
  }

}
