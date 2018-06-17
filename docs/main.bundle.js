webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    width: 100vw;\r\n    background-color: #fffbe6;\r\n}\r\n\r\n.header{\r\n    background-color: #ff5151;\r\n    height: 30vh;\r\n    text-align: left;\r\n    font-size:3em;\r\n    padding: 20px 140px;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h1>HOME<br> ASSIGMENT</h1>\n</div>\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { HomeComponent } from '../app/components/home/home.component';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_carousel__ = __webpack_require__("./node_modules/angular2-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_countries_countries_display_component__ = __webpack_require__("./src/app/components/countries/countries-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_city_display_city_display_component__ = __webpack_require__("./src/app/components/city-display/city-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_first_code_first_code_component__ = __webpack_require__("./src/app/components/first-code/first-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_second_code_second_code_component__ = __webpack_require__("./src/app/components/second-code/second-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_uiux_uiux_component__ = __webpack_require__("./src/app/components/uiux/uiux.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_countries_service__ = __webpack_require__("./src/app/services/countries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_net_service__ = __webpack_require__("./src/app/services/net.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_carouselamos__ = __webpack_require__("./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*components*/







/*services*/





var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'countries', component: __WEBPACK_IMPORTED_MODULE_6__components_countries_countries_display_component__["a" /* CountriesDisplayComponent */] },
    { path: 'first-code', component: __WEBPACK_IMPORTED_MODULE_8__components_first_code_first_code_component__["a" /* FirstCodeComponent */] },
    { path: 'second-code', component: __WEBPACK_IMPORTED_MODULE_9__components_second_code_second_code_component__["a" /* SecondCodeComponent */] },
    { path: 'uiux', component: __WEBPACK_IMPORTED_MODULE_10__components_uiux_uiux_component__["a" /* UiuxComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_countries_countries_display_component__["a" /* CountriesDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_city_display_city_display_component__["a" /* CityDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_first_code_first_code_component__["a" /* FirstCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_second_code_second_code_component__["a" /* SecondCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_uiux_uiux_component__["a" /* UiuxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_3_angular2_carousel__["a" /* CarouselModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_countries_service__["a" /* CountriesService */],
                __WEBPACK_IMPORTED_MODULE_12__services_net_service__["a" /* NetService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/city-display/city-display.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/city-display/city-display.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let city of cities\">\n  <h4>{{city}}</h4>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/city-display/city-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityDisplayComponent = /** @class */ (function () {
    function CityDisplayComponent() {
    }
    CityDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CityDisplayComponent.prototype, "cities", void 0);
    CityDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-city-display',
            template: __webpack_require__("./src/app/components/city-display/city-display.component.html"),
            styles: [__webpack_require__("./src/app/components/city-display/city-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CityDisplayComponent);
    return CityDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/countries/countries-display.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -ms-flex-pack:distribute;\r\n        justify-content:space-around;\r\n    margin: 0 10%;\r\n}\r\nh2{\r\n    color:white;\r\n    margin-bottom:5px;\r\n}\r\n.card{\r\n    width:200px;\r\n    height:250px;\r\n    -webkit-box-shadow:0px 5px 20px 0px #00000057;\r\n            box-shadow:0px 5px 20px 0px #00000057;\r\n    background-color: #ffbebe;\r\n    margin:5px;\r\n    padding: 8px 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/countries/countries-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"container\">\n    <div *ngFor=\"let contrey of countriesWithCites\">\n      <div class=\"card\">\n        <h2>{{contrey.countryName}}</h2>\n        <app-city-display *ngIf=\"contrey\" [cities] = contrey.cities></app-city-display>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/countries/countries-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_net_service__ = __webpack_require__("./src/app/services/net.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountriesDisplayComponent = /** @class */ (function () {
    function CountriesDisplayComponent(netService) {
        this.netService = netService;
        this.data = {};
        this.countryObj = {};
        this.countriesWithCites = [];
        this.countries = [];
    }
    CountriesDisplayComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountriesDisplayComponent.prototype.getCountries = function () {
        var _this = this;
        this.netService.getData().subscribe(function (data) {
            _this.data = (data.Customers);
            _this.countries = _this.getUniqCountries(_this.data);
            _this.createContriesObject(_this.countries);
        });
    };
    CountriesDisplayComponent.prototype.getUniqCountries = function (data) {
        var allCountries = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var d = data_1[_i];
            allCountries.push(d.Country);
        }
        var uniqueContries = allCountries.filter(function (v, i, a) { return a.indexOf(v) === i; });
        return uniqueContries;
    };
    CountriesDisplayComponent.prototype.createContriesObject = function (countries) {
        for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
            var country = countries_1[_i];
            this.countriesWithCites.push({ "countryName": country, "cities": this.getAllCities(country) });
        }
    };
    CountriesDisplayComponent.prototype.getAllCities = function (contrey) {
        var cityExists = false;
        var cities = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].Country === contrey) {
                cities.push(this.data[i].City);
            }
        }
        var uniqueCities = cities.filter(function (v, i, a) { return a.indexOf(v) === i; });
        return uniqueCities;
    };
    CountriesDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'countries-display',
            template: __webpack_require__("./src/app/components/countries/countries-display.component.html"),
            styles: [__webpack_require__("./src/app/components/countries/countries-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_net_service__["a" /* NetService */]])
    ], CountriesDisplayComponent);
    return CountriesDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/first-code/first-code.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    background-color: salmon;\r\n    height:100vh;\r\n    \r\n}\r\n.iner-conatiner{\r\n    padding:30px;\r\n    width: 50%;\r\n}\r\n.code-continer{\r\n    background-color: white;\r\n    height: 8vh;\r\n    padding:50px 10px 20px 10px;\r\n    margin-left: 20px;\r\n}\r\n.main{\r\n    margin:20px;\r\n}\r\nh1{\r\n    color:white;\r\n}\r\n.box {\r\n    color: #fe33ac;\r\n    border-color: #fdcdea;\r\n  }\r\n.box div {\r\n    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/first-code/first-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"iner-conatiner\">\n    <h1>\n      Code meaning\n    </h1>\n    <div class=\"main\">\n        <h3>This code is written in 'Less', it allows you to make functions in your css code which gives you much more control.\n      \n        in this function when you sent a certain color to the functions it makes the color of the text 5% saturation more,\n        and the box shadow in 30% lighter. \n        i have converted this code to regular css, you can see the result here:</h3>\n    </div>\n\n    <div class=\"code-continer\">\n      <div class=\"box\">\n        <div>Example of the box</div>\n      </div>\n    </div>\n  <div>\n</div>"

/***/ }),

/***/ "./src/app/components/first-code/first-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstCodeComponent = /** @class */ (function () {
    function FirstCodeComponent() {
    }
    FirstCodeComponent.prototype.ngOnInit = function () {
    };
    FirstCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'first-code',
            template: __webpack_require__("./src/app/components/first-code/first-code.component.html"),
            styles: [__webpack_require__("./src/app/components/first-code/first-code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstCodeComponent);
    return FirstCodeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\na{\r\n    text-decoration: none;\r\n    color: rgb(145, 139, 139);\r\n}\r\n\r\nimg{\r\n    width:600px;\r\n    height:320px;\r\n    border-radius: 10px 10px 0 0;  \r\n}\r\n\r\n.item-carousel{\r\n    margin-top: 30px;\r\n    width:600px !important; \r\n    height:400px !important;\r\n    border-radius: 10px;\r\n    border:none !important;\r\n}\r\n\r\n.item-carousel h1{\r\n    margin:10px;\r\n    color:white;\r\n}\r\n\r\n.colorA{\r\n    background: #fd807c;\r\n}\r\n\r\n.colorB{\r\n    background: #ff8e66;\r\n}\r\n\r\n.colorC{\r\n    background: #ff6f53;\r\n}\r\n\r\n.colorD{\r\n    background: #ff0025;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<carousel-component>\n    <div *ngFor= \"let item of items\" class=\"item-carousel {{item.bcgColor}}\"> \n        <img src=\"{{ item.imageLink }}\">\n        <a routerLink=\"{{ item.link }}\" routerLinkActive=\"active\">\n            <h1>{{item.name}} <i class=\"{{item.icon}}\"></i></h1>\n        </a>\n    </div>   \n</carousel-component>\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.items = [];
        this.items = [
            { name: "Countries and Cities", imageLink: 'assets/images/g7.jpg', link: "/countries", bcgColor: "colorA", icon: "fa fa-globe" },
            { name: "Identify a piece of code 1", imageLink: 'assets/images/less.jpg', link: "/first-code", bcgColor: "colorB", icon: "fa fa-code" },
            { name: "Identify a piece of code 2", imageLink: 'assets/images/code2.jpg', link: "/second-code", bcgColor: "colorC", icon: "fa fa-code" },
            { name: "UI/UX", imageLink: 'assets/images/ui-ux.jpg', link: "/uiux", bcgColor: "colorD", icon: "fa fa-user-md" }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getColor = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/second-code/second-code.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    background-color: salmon;\r\n    height:100vh;\r\n    \r\n}\r\n.iner-conatiner{\r\n    padding:30px;\r\n    width: 50%;\r\n}\r\n.main{\r\n    margin:20px;\r\n   \r\n}\r\nh1{\r\n    color:white;\r\n}\r\nimg{\r\n    border-radius:10px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/components/second-code/second-code.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"iner-conatiner\">\n      <h1>\n          Description : the image of the code in base 64 is:\n      </h1>\n      <div class=\"main\">\n          <img src=\"../../../assets/images/decoded.jpeg\">\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/second-code/second-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondCodeComponent = /** @class */ (function () {
    function SecondCodeComponent() {
    }
    SecondCodeComponent.prototype.ngOnInit = function () {
    };
    SecondCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'second-code',
            template: __webpack_require__("./src/app/components/second-code/second-code.component.html"),
            styles: [__webpack_require__("./src/app/components/second-code/second-code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondCodeComponent);
    return SecondCodeComponent;
}());



/***/ }),

/***/ "./src/app/components/uiux/uiux.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    background-color: salmon;\r\n    height:100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient:horizontal;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:row;\r\n            flex-direction:row;\r\n    padding:20px 20px 20px 45px;\r\n    -webkit-box-pack:justify;\r\n        -ms-flex-pack:justify;\r\n            justify-content:space-between;\r\n    \r\n}\r\n.iner-conatiner{\r\n    padding:20px;\r\n    width: 50vw;\r\n   \r\n    \r\n}\r\n.main{\r\n    margin:20px;\r\n   \r\n}\r\nh1{\r\n    color:white;\r\n}\r\nimg{\r\n   height:40vh;\r\n   width:30vw;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/components/uiux/uiux.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <img src=\"http://nihongo-e-na.com/archives/006/201206/large-4fe806d39a5fc.png\">\n  <div class=\"iner-conatiner\">\n      <h1>lets review the site:</h1>\n      <h2>ui/ux mistakes</h2>\n      <div class=\"main\">\n          <ul>\n              <li>This site is way to busy,there are multiple elements on this single page.</li>\n              <li>Lack of free space, leaving free space on a page make users optimize things easily.</li>\n              <li>On the bottom left side the news are not ordered chronologically. </li>\n              <li>This site is not appealing, it has nothing special and i don't want to stay on it.</li>\n              <li>this site has no logo, i want remmber it</li>\n              <li>There is no padding on the sides of the website</li>\n              <li>Some articles have pictures and other has icons</li>\n            </ul>\n          \n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/uiux/uiux.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiuxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiuxComponent = /** @class */ (function () {
    function UiuxComponent() {
    }
    UiuxComponent.prototype.ngOnInit = function () {
    };
    UiuxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'uiux',
            template: __webpack_require__("./src/app/components/uiux/uiux.component.html"),
            styles: [__webpack_require__("./src/app/components/uiux/uiux.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UiuxComponent);
    return UiuxComponent;
}());



/***/ }),

/***/ "./src/app/services/countries.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountriesService = /** @class */ (function () {
    function CountriesService() {
    }
    CountriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CountriesService);
    return CountriesService;
}());



/***/ }),

/***/ "./src/app/services/net.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //do i need this?

var NetService = /** @class */ (function () {
    function NetService(http) {
        this.http = http;
        this.apiUrl = "http://northwind.servicestack.net/customers.json";
        this.data = {};
    }
    NetService.prototype.getData = function () {
        var _this = this;
        return this.http.get(this.apiUrl)
            .map(function (res) {
            _this.data = res;
            return _this.data;
        });
    };
    NetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], NetService);
    return NetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map