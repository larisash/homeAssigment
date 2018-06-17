import { Component, OnInit } from '@angular/core';
import { NetService } from '../../services/net.service';
import { CityDisplayComponent } from '../city-display/city-display.component';


@Component({
  selector: 'countries-display',
  templateUrl: './countries-display.component.html',
  styleUrls: ['./countries-display.component.css']
})
export class CountriesDisplayComponent implements OnInit {
  data: any = {};
  countryObj: any ={};
  countriesWithCites: any = [];
  countries: any = [];
  constructor(private netService: NetService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.netService.getData().subscribe((data)=>{
      this.data = (data.Customers);
      this.countries = this.getUniqCountries(this.data);
      this.createContriesObject(this.countries);

    });
  }
  getUniqCountries(data){
    let allCountries = [];
    for (let d of data){
      allCountries.push(d.Country);
    }
    var uniqueContries = allCountries.filter((v, i, a) => a.indexOf(v) === i); 
    return uniqueContries;
  }

  createContriesObject(countries){
    for (const country of countries){
      this.countriesWithCites.push({"countryName" : country, "cities": this.getAllCities(country)})
    }
  }

  getAllCities(contrey){
   let cityExists = false;
   let cities = [];
   for (let i=0; i<this.data.length; i++) {
     if (this.data[i].Country === contrey){
        cities.push(this.data[i].City);
      }
     }
     var uniqueCities = cities.filter((v, i, a) => a.indexOf(v) === i);  
     return uniqueCities;
  }
}

