import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CountriesDisplayComponent } from './components/countries-display.component';//need to remove after carusel



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
