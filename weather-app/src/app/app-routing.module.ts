import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { Weather2Component } from './weather2/weather2.component';

const routes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'weather2', component:Weather2Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
