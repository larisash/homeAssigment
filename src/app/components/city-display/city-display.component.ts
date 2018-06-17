import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-city-display',
  templateUrl: './city-display.component.html',
  styleUrls: ['./city-display.component.css']
})
export class CityDisplayComponent implements OnInit {
  @Input() cities: any;
  constructor() { }

  ngOnInit() {
  }

}
