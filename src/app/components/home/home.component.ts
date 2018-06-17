import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: "Countries and Cities", imageLink: 'assets/images/g7.jpg',link:"/countries",bcgColor:"colorA",icon:"fa fa-globe" },
      { name: "Identify a piece of code 1", imageLink: 'assets/images/less.jpg',link:"/first-code",bcgColor:"colorB",icon:"fa fa-code"},
      { name: "Identify a piece of code 2", imageLink: 'assets/images/code2.jpg',link:"/second-code",bcgColor:"colorC",icon:"fa fa-code" },
      { name: "UI/UX", imageLink: 'assets/images/ui-ux.jpg',link:"/uiux",bcgColor:"colorD",icon:"fa fa-user-md" }
     
    ]
  }


  ngOnInit() {




    
  }
  getColor(){

  }

}
