import { Component, Inject, LOCALE_ID, OnInit, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscriber, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';
import { WeatherComponent } from '../weather/weather.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-weather2',
  templateUrl: './weather2.component.html',
  styleUrls: ['./weather2.component.css']
})
export class Weather2Component implements OnInit {
  myWeather2:any;
  situation0:string="";
  situation1:string="";
  situation2:string="";
  temp:number=0;
  cityName:string="Istanbul";
  dayRange = [] ;
  country:string="";
  data:any;
  dateString:string="";
  constructor(private weatherService: WeatherService, weatherComponent: WeatherComponent,@Inject(LOCALE_ID) private locale: string){
  //this.data = weatherComponent.onEnter();
  //this.data=WeatherComponent.onEnter(this.cityName);
  

  }
  getDate(){//tarihi nasıl bastıracağımı çöz, dateString yazınca olusturdugum variable geliyo, fonksiyonu çağırınca da sadece console outpot geliyo
    this.dateString = formatDate(Date.now(),'yyyy-MM-dd',this.locale);
    console.log(this.dateString);
  }

  getForecast(){
    this.weatherService.getWeeklyWeather().subscribe({
      next: (res) =>{
      console.log(res);
      this.myWeather2=res;
      //for(var i=1;i<6;i++){
        //this.dayRange.push(i);
      //}

      }
    })
  }
  

  ngOnInit() {
    this.weatherService.getWeeklyWeather().subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather2=res;
        console.log(this.myWeather2);
        this.situation0=this.myWeather2.list[0].weather[0].main;
        console.log(this.situation0);
        this.situation1=this.myWeather2.list[9].weather[0].main;
        console.log(this.situation1);
        this.temp=this.myWeather2.list[0].main.temp;
        console.log(this.temp);
        this.cityName=this.myWeather2.city.name;
        console.log(this.cityName);
        this.country= this.myWeather2.city.country;
        console.log(this.country);



        

      },

      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
      
    })

  console.log("asd");

  }


}
