import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';//do i need this?
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";





@Injectable()
export class NetService {
  private apiUrl = "http://northwind.servicestack.net/customers.json";
  data: any = {};
  
  
  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => {
        this.data = res;
        return this.data;
      })
  }
}






