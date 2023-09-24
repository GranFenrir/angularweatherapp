import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscriber, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number=0;
  country: string="";
  cityName: string="";
  cityName2: string=""
  constructor(private weatherService: WeatherService, private router:Router){}

  onEnter() {
    this.weatherService.getweather(this.cityName).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather=res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        console.log(this.temperature);
        this.country= this.myWeather.sys.country;
        console.log(this.country);
        this.cityName=this.cityName2;
        this.cityName2=this.myWeather.name;
        console.log(this.cityName);

      },


      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }
  
  ngOnInit(): void {
    this.weatherService.getweather("Istanbul").subscribe({
      
      next: (res) => {
        
        console.log(res);
        this.myWeather=res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        console.log(this.temperature);
        this.country= this.myWeather.sys.country;
        console.log(this.country);
        this.cityName=this.myWeather.name;
        console.log(this.cityName);

      },


      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })

    
  }

  click(){
    this.router.navigate(['/weather2']);
  }




}