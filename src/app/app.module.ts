import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlickModule } from 'ngx-slick';
import {CarouselModule} from "angular2-carousel";
/*components*/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesDisplayComponent } from './components/countries/countries-display.component';
import { CityDisplayComponent } from './components/city-display/city-display.component';
import { FirstCodeComponent } from './components/first-code/first-code.component';
import { SecondCodeComponent } from './components/second-code/second-code.component';
import { UiuxComponent } from './components/uiux/uiux.component';

/*services*/
import { CountriesService } from './services/countries.service';
import { NetService } from './services/net.service';
import { HttpClientModule } from "@angular/common/http";
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AngularFontAwesomeModule } from 'angular-font-awesome';





const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'countries', component: CountriesDisplayComponent },
  { path: 'first-code', component: FirstCodeComponent },
  { path: 'second-code', component: SecondCodeComponent },
  { path: 'uiux', component: UiuxComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesDisplayComponent,
    CityDisplayComponent,
    FirstCodeComponent,
    SecondCodeComponent,
    UiuxComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    AngularFontAwesomeModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CarouselModule
  ],
  providers: [
    CountriesService,
    NetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
