(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ecuations></app-ecuations>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'system-ecuations';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ecuations_ecuations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ecuations/ecuations.component */ "./src/app/ecuations/ecuations.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _ecuations_ecuations_component__WEBPACK_IMPORTED_MODULE_5__["EcuationsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    margin-top: 112px;\r\n    background-color: #1c2331;\r\n    color: white;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzIzMzE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small cyan darken-3\">\n\n  <div class=\"footer-copyright text-center py-3\">\n    Built with\n    <strong> passion </strong> \n    <a>by Andrés Sanabria - 2019</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ecuations/ecuations.component.css":
/*!***************************************************!*\
  !*** ./src/app/ecuations/ecuations.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 0 5%;\r\n    margin-top: 78px;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.primary-btn{\r\n    cursor: pointer;\r\n    outline: none;\r\n    padding: 8px 76px;\r\n    border: 0px solid transparent;\r\n    margin: 48px;\r\n    border-radius: 6px;\r\n    color: white;\r\n    background: linear-gradient(45deg, #00D9D0, #000057);\r\n    box-shadow: 0px 8px 30px rgba(0,0,0,0.25);\r\n    transition: 0.2s ease-out;\r\n}\r\n\r\n.primary-btn:hover{\r\n    -webkit-transform: scale(0.95);\r\n            transform: scale(0.95);\r\n    box-shadow: 0px 5px 15px rgba(0,0,0,0.35);\r\n}\r\n\r\n.main-container{\r\n    padding: 24px;\r\n}\r\n\r\n.main-description{\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-bottom: 56px;\r\n    max-width: 700px;\r\n}\r\n\r\n.option-menu{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-spacing{\r\n    margin: 24px 8px;\r\n}\r\n\r\n.ecuation{\r\n    display: flex;\r\n}\r\n\r\n.ecuations-grid{\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    justify-content: center;\r\n    /* align-content: center; */\r\n    justify-items: center;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.ecuation-row{\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 12px 24px;\r\n    border-radius: 12px;\r\n    background-color: #ececec;\r\n    /* width: fit-content; */\r\n}\r\n\r\n.value-container p, .equal-bold-text{\r\n    margin: 0px;\r\n    margin-right: 12px;\r\n    margin-left: 4px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.equal-bold-text{\r\n    font-weight: 700;\r\n    margin-left: 12px;\r\n    margin-right: 24px;\r\n}\r\n\r\n.value-container{\r\n    display: flex;\r\n}\r\n\r\n.value-container input, .independent-input{\r\n    width: 52px;\r\n    text-align: right;\r\n    border: 0px solid #bbbbbb;\r\n    border-radius: 6px;\r\n    padding-right: 8px;\r\n}\r\n\r\n.answer-container{\r\n    display: block;\r\n    margin: 34px 24px;\r\n    padding: 24px 24px;\r\n    border-radius: 12px;\r\n    background-color: #fff;\r\n    box-shadow: 0px 8px 50px rgba(0,0,0,0.1);\r\n}\r\n\r\n.spacing-bottom{\r\n    margin-bottom: 12px !important;\r\n}\r\n\r\n/* Hide numeric up-down arrows CHROME*/\r\n\r\ninput[type=number]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/* Hide numeric up-down arrows Firefox*/\r\n\r\ninput[type=number] { \r\n    -moz-appearance: textfield;\r\n    -webkit-appearance: textfield;\r\n            appearance: textfield;\r\n    margin: 0; \r\n}\r\n\r\n.dropdown-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.standard-row{\r\n    display: flex;\r\n}\r\n\r\n.matrix-value {\r\n    width: 62px;\r\n    text-align: left;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWN1YXRpb25zL2VjdWF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0RBQW9EO0lBQ3BELHlDQUF5QztJQUN6Qyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFHQSxzQ0FBc0M7O0FBQ3RDO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUdBLHVDQUF1Qzs7QUFDdkM7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvZWN1YXRpb25zL2VjdWF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCA1JTtcclxuICAgIG1hcmdpbi10b3A6IDc4cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpbWFyeS1idG57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4IDc2cHg7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwRDlEMCwgIzAwMDA1Nyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDMwcHggcmdiYSgwLDAsMCwwLjI1KTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ0bjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggcmdiYSgwLDAsMCwwLjM1KTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLm1haW4tZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4ub3B0aW9uLW1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tc3BhY2luZ3tcclxuICAgIG1hcmdpbjogMjRweCA4cHg7XHJcbn1cclxuXHJcbi5lY3VhdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5lY3VhdGlvbnMtZ3JpZHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5lY3VhdGlvbi1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xyXG59XHJcblxyXG4udmFsdWUtY29udGFpbmVyIHAsIC5lcXVhbC1ib2xkLXRleHR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmVxdWFsLWJvbGQtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxufVxyXG5cclxuLnZhbHVlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi52YWx1ZS1jb250YWluZXIgaW5wdXQsIC5pbmRlcGVuZGVudC1pbnB1dHtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYW5zd2VyLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAzNHB4IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggNTBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5zcGFjaW5nLWJvdHRvbXtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIEhpZGUgbnVtZXJpYyB1cC1kb3duIGFycm93cyBDSFJPTUUqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbiAgXHJcblxyXG4vKiBIaWRlIG51bWVyaWMgdXAtZG93biBhcnJvd3MgRmlyZWZveCovXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7IFxyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICBtYXJnaW46IDA7IFxyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGFuZGFyZC1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWF0cml4LXZhbHVlIHtcclxuICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ecuations/ecuations.component.html":
/*!****************************************************!*\
  !*** ./src/app/ecuations/ecuations.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"header\">\n    <h1>Ecuation System Solver</h1>\n  </div>\n\n  <main class=\"main-container\">\n\n    <div class=\"main-description\">\n      <p>\n        Select the variables number of your ecuation system and a mehtod to show it's first step.\n        Then fill in the fields with the coefficients of their variables\n      </p>\n    </div>\n\n\n    <div class=\"option-menu\">\n\n      <!-- Method selection -->\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle btn-spacing\" type=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Method - {{methods[selectedMethod]}}\n        </button>\n        <div class=\"dropdown-menu\">\n          <a *ngFor=\"let item of methods; let i = index\" (click)=\"setMethod(i)\" class=\"dropdown-item\">{{methods[i]}}</a>\n        </div>\n      </div>\n\n      <!-- Number of variables selection -->\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle btn-spacing\" type=\"button\" id=\"dropdownMenu1\"\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Number of variables - {{variablesNumber}}\n        </button>\n\n        <div class=\"dropdown-menu dropdown-primary\">\n          <a *ngFor=\"let item of literals | slice:1:7 ; let i = index\" (click)=\"setNumberOfVariables(i + 2)\"\n            class=\"dropdown-item\">{{i + 2}}</a>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"ecuations-grid\">\n      <div class=\"ecuation-row\" *ngFor=\"let li of selectedLiterals; let i = index\">\n        <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i2 = index\">\n          <input type=\"number\" [(ngModel)]=\"matrix[i][i2]\">\n          <p>{{literal}}</p>\n        </div>\n        <p class=\"equal-bold-text\"> = </p>\n        <input class=\"independent-input\" type=\"number\" [(ngModel)]=\"matrix[i][variablesNumber]\">\n      </div>\n      <button class=\"primary-btn\" (click)=\"solve()\"> Solve </button>\n    </div>\n\n\n    <div class=\"block-grid\">\n      <!-- Solution -->\n      <div *ngIf=\"solved\" class=\"answer-container\">\n        <h4>Solution</h4>\n        <br>\n        <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n          <p class=\"spacing-bottom\">{{literal + \" = \"}} {{result[i]}}</p>\n        </div>\n      </div>\n\n      <div *ngIf=\"solved\" class=\"answer-container\">\n        <h4>Step 1 - {{methods[selectedMethod]}}</h4>\n        <br>\n\n        <!-- Reduction -->\n        <div *ngIf=\"selectedMethod === 0\">\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[0][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[0][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[0][variablesNumber]}}</p>\n            </div>\n          </div>\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[1][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[1][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[1][variablesNumber]}}</p>\n            </div>\n          </div>\n          <br>\n          <div class=\"standard-row\">\n            <div class=\"value-container\">\n              <p> <strong>{{steps[0]}}</strong></p>\n            </div>\n          </div>\n\n\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[1][i] >= 0 && i > 0\"> + </p>\n              <p> {{rowStep[0][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{rowStep[0][variablesNumber]}}</p>\n            </div>\n          </div>\n        </div>\n        <!-- END OF REDUCTION -->\n\n        <!-- Evening -->\n        <div *ngIf=\"selectedMethod === 1\">\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[0][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[0][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[0][variablesNumber]}}</p>\n            </div>\n          </div>\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[1][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[1][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[1][variablesNumber]}}</p>\n            </div>\n          </div>\n          <br>\n          <br>\n          <div class=\"standard-row\">\n            <div class=\"value-container\">\n              <p> <strong>a = a</strong></p>\n            </div>\n          </div>\n\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"evening1[i] >= 0 && i > 0\"> + </p>\n              <p>{{evening1[i]}}<span *ngIf=\"i < selectedLiterals.length\">{{selectedLiterals[i + 1]}}</span></p>\n            </div>\n            <div class=\"value-container\">\n              <p> = </p>\n            </div>\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"evening2[i] >= 0 && i > 0\"> + </p>\n              <p> {{evening2[i]}}<span *ngIf=\"i < selectedLiterals.length\">{{selectedLiterals[i + 1]}}</span></p>\n            </div>\n          </div>\n\n\n        </div>\n        <!-- END OF Evening -->\n\n        <!-- Sustitution -->\n        <div *ngIf=\"selectedMethod === 2\">\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[0][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[0][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[0][variablesNumber]}}</p>\n            </div>\n          </div>\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[1][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[1][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[1][variablesNumber]}}</p>\n            </div>\n          </div>\n          <br>\n          <br>\n          <div class=\"standard-row\">\n            <div class=\"value-container\">\n              <p> <strong>f(g(a))</strong></p>\n            </div>\n          </div>\n\n          <div class=\"standard-row\">\n            <div class=\"value-container\">\n              <p> {{matrix[1][0]}} (</p>\n            </div>\n\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"evening1[i] >= 0 && i > 0\"> + </p>\n              <p>{{evening1[i]}}<span *ngIf=\"i < selectedLiterals.length\">{{selectedLiterals[i + 1]}}</span></p>\n            </div>\n\n            <div class=\"value-container\">\n              <p>) </p>\n            </div>\n\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[1][i] >= 0 && i > 0\"> + </p>\n              <p *ngIf=\"i > 0\"> {{matrix[1][i]+literal }}</p>\n            </div>\n\n            <div class=\"value-container\">\n              <p> = </p>\n              <p>{{matrix[1][variablesNumber]}}</p>\n            </div>\n          </div>\n        </div>\n        <!-- END OF Substitution -->\n\n        <!-- CRAMER / GAUSS / GAUSS-JORDAN -->\n        <div *ngIf=\"selectedMethod > 2\">\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[0][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[0][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[0][variablesNumber]}}</p>\n            </div>\n          </div>\n          <div class=\"standard-row\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i = index\">\n              <p *ngIf=\"matrix[1][i] >= 0 && i > 0\"> + </p>\n              <p> {{matrix[1][i]+literal }}</p>\n            </div>\n            <div class=\"value-container\">\n              <p> = {{matrix[1][variablesNumber]}}</p>\n            </div>\n          </div>\n          <br>\n          <br>\n\n          <div class=\"standard-row\">\n            <div class=\"value-container\">\n              <p> <strong>Increased Matrix</strong></p>\n            </div>\n          </div>\n\n          <div class=\"standard-row\" *ngFor=\"let row of selectedLiterals; let i = index\">\n            <div class=\"value-container\" *ngFor=\"let literal of selectedLiterals; let i2 = index\">\n              <div class=\"matrix-value\">\n                <p>{{ matrix[i][i2] }}</p>\n              </div>\n            </div>\n            <div class=\"value-container\">\n              <div class=\"matrix-value\">\n                <p>| {{ matrix[i][variablesNumber] }}</p>\n              </div>\n            </div>\n\n          </div>\n\n         \n        </div>\n        <!-- END OF Substitution -->\n\n\n      </div>\n    </div>\n\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/ecuations/ecuations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecuations/ecuations.component.ts ***!
  \**************************************************/
/*! exports provided: EcuationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcuationsComponent", function() { return EcuationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EcuationsComponent = /** @class */ (function () {
    function EcuationsComponent() {
        this.steps = [];
        this.rowStep = [];
        this.stepsCounter = 0;
        this.literals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        this.methods = [
            'Reduction',
            'Evening',
            'Substitution',
            'Cramer',
            'Gauss',
            'Gauss Jordan'
        ];
        this.solved = false;
        this.matrix = [];
        this.result = [];
        this.reductionRow = [];
        this.evening1 = [];
        this.evening2 = [];
    }
    EcuationsComponent.prototype.ngOnInit = function () {
        this.setNumberOfVariables(2);
        this.setMethod(5);
    };
    EcuationsComponent.prototype.setNumberOfVariables = function (num) {
        this.solved = false;
        this.variablesNumber = num;
        this.selectedLiterals = this.literals.slice(0, num);
        this.matrix = [];
        for (var i = 0; i < num; i++) {
            this.matrix[i] = new Array(num + 1).fill("0");
        }
    };
    EcuationsComponent.prototype.setMethod = function (num) {
        this.solved = false;
        this.selectedMethod = num;
    };
    EcuationsComponent.prototype.solve = function () {
        this.steps = [];
        this.rowStep = [];
        this.stepsCounter = 0;
        var matrix = this.matrix.slice();
        for (var column = 0; column < this.variablesNumber - 1; column++) {
            for (var row = column + 1; row < this.variablesNumber; row++) {
                matrix[row] = this.operateRows(matrix[column], matrix[row], column, row);
            }
        }
        console.log(matrix.slice());
        for (var column = this.variablesNumber - 1; column > 0; column--) {
            for (var row = column - 1; row >= 0; row--) {
                matrix[row] = this.operateRows(matrix[column], matrix[row], column, row);
            }
        }
        this.result = [];
        for (var pos = 0; pos < this.variablesNumber; pos++) {
            this.result.push((matrix[pos][this.variablesNumber] / matrix[pos][pos]).toString());
        }
        console.log(this.result);
        console.log("Steps", this.steps);
        this.solved = true;
        this.solveEvening();
    };
    EcuationsComponent.prototype.solveEvening = function () {
        var row1 = this.matrix[0].slice();
        var row2 = this.matrix[1].slice();
        for (var i = 1; i < this.variablesNumber; i++) {
            row1[i] = row1[i] * (-1);
            row2[i] = row2[i] * (-1);
        }
        for (var i = 1; i <= this.variablesNumber; i++) {
            row1[i] = Math.round(row1[i] / row1[0] * 100) / 100;
            row2[i] = Math.round(row2[i] / row2[0] * 100) / 100;
        }
        this.evening1 = row1.slice(1);
        this.evening2 = row2.slice(1);
        console.log("r1", this.evening1);
        console.log("r2", this.evening2);
    };
    EcuationsComponent.prototype.operateRows = function (row1, row2, column, row) {
        var newRow = [];
        this.steps.push("F" + (row + 1).toString() + " = " +
            row1[column].toString() + "F" + (row + 1).toString() +
            " - "
            + row2[column].toString() + "F" + (column + 1).toString());
        for (var i = 0; i <= this.variablesNumber; i++) {
            var first = (row2[i] * row1[column]);
            var second = (row1[i] * row2[column]);
            newRow[i] = first - second;
        }
        this.stepsCounter++;
        this.rowStep.push(newRow.slice());
        return newRow;
    };
    EcuationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ecuations',
            template: __webpack_require__(/*! ./ecuations.component.html */ "./src/app/ecuations/ecuations.component.html"),
            styles: [__webpack_require__(/*! ./ecuations.component.css */ "./src/app/ecuations/ecuations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EcuationsComponent);
    return EcuationsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Software-Practice\Universidad\Algebra lineal 1\Sistemas de Ecuaciones\system-ecuations\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map