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

/***/ "./src/app/Globals.ts":
/*!****************************!*\
  !*** ./src/app/Globals.ts ***!
  \****************************/
/*! exports provided: Model, Prediction, Manager, Globals, Similarity, CustomHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prediction", function() { return Prediction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Similarity", function() { return Similarity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHTMLElement", function() { return CustomHTMLElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var Model = /** @class */ (function () {
    function Model() {
        this.name = undefined; // Name of the model selected in the first step
        this.version = undefined; // Version of the model selected in the first step
        this.file = undefined; // Name of file uploaded in the second step
        this.trained = false; // Model is already trained
        this.file_info = undefined; // Info file ej. num mols, variables
        this.file_fields = undefined;
        this.quantitative = undefined;
        this.conformal = undefined;
        this.ensemble = undefined;
        this.incremental = false;
        this.error = undefined;
        /*
        Delta parameters, empty by default, fills on clicking the parameters tab.
        When you change anything on the formulary, automatically changes the value for that key
        */
        this.parameters = undefined;
        this.delta = {};
        this.trainig_models = [];
        this.listModels = {};
        this.trained_models = [];
        this.selectedItems = [];
        this.page = 0;
        this.pagelen = 10;
    }
    Model.ɵfac = function Model_Factory(t) { return new (t || Model)(); };
    Model.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Model, factory: Model.ɵfac });
    return Model;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Model, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
var Prediction = /** @class */ (function () {
    function Prediction() {
        this.name = undefined; // Name of the model selected in the first step
        this.modelName = undefined;
        this.modelVersion = undefined;
        this.modelDocumentation = undefined;
        this.predictions = [];
        this.predicting = {};
        this.conformal = false;
        this.file = undefined; // Name of file uploaded in the second step
        this.result = undefined;
        this.date = undefined;
    }
    Prediction.ɵfac = function Prediction_Factory(t) { return new (t || Prediction)(); };
    Prediction.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Prediction, factory: Prediction.ɵfac });
    return Prediction;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Prediction, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
var Manager = /** @class */ (function () {
    function Manager() {
        this.name = undefined; // Name of the model selected in the first step
        this.version = undefined; // Version of the model selected in the first step
        this.file = undefined; // Name of file uploaded in the second step
    }
    Manager.ɵfac = function Manager_Factory(t) { return new (t || Manager)(); };
    Manager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Manager, factory: Manager.ɵfac });
    return Manager;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Manager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
var Globals = /** @class */ (function () {
    function Globals() {
        this.tableModelVisible = false;
        this.tablePredictionVisible = false;
    }
    Globals.ɵfac = function Globals_Factory(t) { return new (t || Globals)(); };
    Globals.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Globals, factory: Globals.ɵfac });
    return Globals;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Globals, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
var Similarity = /** @class */ (function () {
    function Similarity() {
        this.model_name = undefined;
        this.model_version = undefined;
        this.file = undefined; // Name of file uploaded in the second step
        this.file_info = undefined; // Info file ej. num mols, variables
        this.file_fields = undefined;
        this.result = undefined;
        this.predicting = false;
        this.nameSrc = undefined;
        this.smileSrc = undefined;
    }
    Similarity.ɵfac = function Similarity_Factory(t) { return new (t || Similarity)(); };
    Similarity.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Similarity, factory: Similarity.ɵfac });
    return Similarity;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Similarity, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
var CustomHTMLElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomHTMLElement, _super);
    function CustomHTMLElement() {
        return _super.call(this) || this;
    }
    CustomHTMLElement.prototype.on = function (event_type, cb) {
    };
    CustomHTMLElement.ɵfac = function CustomHTMLElement_Factory(t) { return new (t || CustomHTMLElement)(); };
    CustomHTMLElement.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomHTMLElement, factory: CustomHTMLElement.ɵfac });
    return CustomHTMLElement;
}(HTMLElement));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomHTMLElement, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/animations/animations.ts":
/*!******************************************!*\
  !*** ./src/app/animations/animations.ts ***!
  \******************************************/
/*! exports provided: slideUp, fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUp", function() { return slideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");

var slideUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideUp', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100vh)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms cubic-bezier(.61, .29, .07, 1.02)')
    ])
]);
var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter, :leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000)
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/model-list/model-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _validations_validations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validations/validations.component */ "./src/app/validations/validations.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./similarity/similarity.component */ "./src/app/similarity/similarity.component.ts");
/* harmony import */ var _builder_builder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./builder/builder.component */ "./src/app/builder/builder.component.ts");
/* harmony import */ var _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prediction-list/prediction-list.component */ "./src/app/prediction-list/prediction-list.component.ts");
/* harmony import */ var _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./predictor/predictor.component */ "./src/app/predictor/predictor.component.ts");












var routes = [
    { path: 'predictions', component: _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_8__["PredictionListComponent"] },
    { path: 'models', component: _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_2__["ModelListComponent"] },
    { path: 'similarity', component: _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_6__["SimilarityComponent"] },
    { path: 'predictor', component: _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_9__["PredictorComponent"] },
    { path: 'builder', component: _builder_builder_component__WEBPACK_IMPORTED_MODULE_7__["BuilderComponent"] },
    { path: 'validation', component: _validations_validations_component__WEBPACK_IMPORTED_MODULE_4__["ValidationsComponent"] },
    { path: 'prediction', component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__["PredictionComponent"] },
    { path: '', redirectTo: '/predictions', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _validations_validations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validations/validations.component */ "./src/app/validations/validations.component.ts");










function AppComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-prediction", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("predictionName", ctx_r1.prediction.name);
} }
function AppComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-validations", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r2.model.name)("version", ctx_r2.model.version);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_5_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_5_div_2_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.prediction.name != undefined && ctx_r0.isActive("predictions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.name != undefined && ctx_r0.isActive("models"));
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(prediction, model, router) {
        this.prediction = prediction;
        this.model = model;
        this.router = router;
        this.title = 'flameweb';
    }
    AppComponent.prototype.isActive = function (url) {
        return this.router.url.includes(url);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Prediction"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[1, "container-fluid", "app-base"], [1, "row"], [1, "col", "p-0"], ["class", "col-7 info scrollable v-100", 4, "ngIf"], [1, "col-7", "info", "scrollable", "v-100"], [4, "ngIf"], [3, "predictionName"], [3, "name", "version"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 3, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive("similarity"));
        } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__["PredictionComponent"], _validations_validations_component__WEBPACK_IMPORTED_MODULE_6__["ValidationsComponent"]], styles: [".info[_ngcontent-%COMP%] {\r\n    \r\n    background-color: white;\r\n    \r\n}\r\n.scrollable[_ngcontent-%COMP%]{\r\n    \r\n    max-height: 95vh; \r\n    overflow: auto;\r\n}\r\n.app-base[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n    padding-right: 30px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0k7NERBQ3dEO0lBQ3hELGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUUsaUNBQWlDO0FBQzFEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgICAgKi9cclxufVxyXG4uc2Nyb2xsYWJsZXtcclxuICAgIC8qIHJpZ2h0IGNvbHVtbiB3aWxsIGhhdmUgYSBtYXggb2YgOTUlXHJcbiAgICAgICBhbmQgYSBzY3JvbGwgYmFyIHdpbGwgYXBwZWFyIG9ubHkgd2hlbiBpdCBpcyBiaWdnZXIgKi9cclxuICAgIG1heC1oZWlnaHQ6IDk1dmg7IFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmFwcC1iYXNlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDsgLyogcHJldmVudHMgaG9yaXpvbnRhbCBzY3JvbGxiYXIqL1xyXG59Il19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Prediction"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Model"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/model-list/model-list.component.ts");
/* harmony import */ var _training_series_training_series_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./training-series/training-series.component */ "./src/app/training-series/training-series.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _validations_validations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validations/validations.component */ "./src/app/validations/validations.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _config_training_config_training_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config-training/config-training.component */ "./src/app/config-training/config-training.component.ts");
/* harmony import */ var _config_model_config_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config-model/config-model.component */ "./src/app/config-model/config-model.component.ts");
/* harmony import */ var _config_preferences_config_preferences_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config-preferences/config-preferences.component */ "./src/app/config-preferences/config-preferences.component.ts");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/__ivy_ngcc__/fesm5/angular-checklist.js");
/* harmony import */ var _qualit_conformal_qualit_conformal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./qualit-conformal/qualit-conformal.component */ "./src/app/qualit-conformal/qualit-conformal.component.ts");
/* harmony import */ var _quantit_conformal_quantit_conformal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quantit-conformal/quantit-conformal.component */ "./src/app/quantit-conformal/quantit-conformal.component.ts");
/* harmony import */ var _builder_builder_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./builder/builder.component */ "./src/app/builder/builder.component.ts");
/* harmony import */ var _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./predictor/predictor.component */ "./src/app/predictor/predictor.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./similarity/similarity.component */ "./src/app/similarity/similarity.component.ts");
/* harmony import */ var _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./prediction-list/prediction-list.component */ "./src/app/prediction-list/prediction-list.component.ts");
/* harmony import */ var _manage_models_manage_models_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./manage-models/manage-models.component */ "./src/app/manage-models/manage-models.component.ts");
/* harmony import */ var _manage_predictions_manage_predictions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manage-predictions/manage-predictions.component */ "./src/app/manage-predictions/manage-predictions.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./confusion-matrix/confusion-matrix.component */ "./src/app/confusion-matrix/confusion-matrix.component.ts");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "./node_modules/plotly.js/dist/plotly.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/__ivy_ngcc__/fesm5/angular-plotly.js.js");
/* harmony import */ var _model_documentation_model_documentation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./model-documentation/model-documentation.component */ "./src/app/model-documentation/model-documentation.component.ts");

















// import { QualitNoConformalComponent } from './qualit-no-conformal/qualit-no-conformal.component';

// import { QuantitNoConformalComponent } from './quantit-no-conformal/quantit-no-conformal.component';











// import { DataTableModule } from 'angular-6-datatable';






// import * as SmilesDrawer from 'smiles-drawer';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import * as XLSX from 'xlsx';
// import { PlotlyViaCDNModule } from 'angular-plotly.js';
angular_plotly_js__WEBPACK_IMPORTED_MODULE_30__["PlotlyModule"].plotlyjs = plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_29__;
// PlotlyViaCDNModule.plotlyVersion = '1.49.4';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Globals__WEBPACK_IMPORTED_MODULE_11__["Model"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Prediction"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Globals"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Manager"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Similarity"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__["NgMultiSelectDropDownModule"].forRoot(),
                angular_checklist__WEBPACK_IMPORTED_MODULE_16__["ChecklistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
                // PlotlyViaCDNModule,
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_30__["PlotlyModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_6__["ModelListComponent"],
        _training_series_training_series_component__WEBPACK_IMPORTED_MODULE_7__["TrainingSeriesComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
        _validations_validations_component__WEBPACK_IMPORTED_MODULE_9__["ValidationsComponent"],
        _config_training_config_training_component__WEBPACK_IMPORTED_MODULE_13__["ConfigTrainingComponent"],
        _config_model_config_model_component__WEBPACK_IMPORTED_MODULE_14__["ConfigModelComponent"],
        _config_preferences_config_preferences_component__WEBPACK_IMPORTED_MODULE_15__["ConfigPreferencesComponent"],
        // QualitNoConformalComponent,
        _qualit_conformal_qualit_conformal_component__WEBPACK_IMPORTED_MODULE_17__["QualitConformalComponent"],
        // QuantitNoConformalComponent,
        _quantit_conformal_quantit_conformal_component__WEBPACK_IMPORTED_MODULE_18__["QuantitConformalComponent"],
        _builder_builder_component__WEBPACK_IMPORTED_MODULE_19__["BuilderComponent"],
        _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_20__["PredictorComponent"],
        _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_21__["PredictionComponent"],
        _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_23__["SimilarityComponent"],
        _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_24__["PredictionListComponent"],
        _manage_models_manage_models_component__WEBPACK_IMPORTED_MODULE_25__["ManageModelsComponent"],
        _manage_predictions_manage_predictions_component__WEBPACK_IMPORTED_MODULE_26__["ManagePredictionsComponent"],
        _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_28__["ConfusionMatrixComponent"],
        _model_documentation_model_documentation_component__WEBPACK_IMPORTED_MODULE_31__["ModelDocumentationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__["NgMultiSelectDropDownModule"], angular_checklist__WEBPACK_IMPORTED_MODULE_16__["ChecklistModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
        // PlotlyViaCDNModule,
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_30__["PlotlyModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_6__["ModelListComponent"],
                    _training_series_training_series_component__WEBPACK_IMPORTED_MODULE_7__["TrainingSeriesComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                    _validations_validations_component__WEBPACK_IMPORTED_MODULE_9__["ValidationsComponent"],
                    _config_training_config_training_component__WEBPACK_IMPORTED_MODULE_13__["ConfigTrainingComponent"],
                    _config_model_config_model_component__WEBPACK_IMPORTED_MODULE_14__["ConfigModelComponent"],
                    _config_preferences_config_preferences_component__WEBPACK_IMPORTED_MODULE_15__["ConfigPreferencesComponent"],
                    // QualitNoConformalComponent,
                    _qualit_conformal_qualit_conformal_component__WEBPACK_IMPORTED_MODULE_17__["QualitConformalComponent"],
                    // QuantitNoConformalComponent,
                    _quantit_conformal_quantit_conformal_component__WEBPACK_IMPORTED_MODULE_18__["QuantitConformalComponent"],
                    _builder_builder_component__WEBPACK_IMPORTED_MODULE_19__["BuilderComponent"],
                    _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_20__["PredictorComponent"],
                    _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_21__["PredictionComponent"],
                    _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_23__["SimilarityComponent"],
                    _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_24__["PredictionListComponent"],
                    _manage_models_manage_models_component__WEBPACK_IMPORTED_MODULE_25__["ManageModelsComponent"],
                    _manage_predictions_manage_predictions_component__WEBPACK_IMPORTED_MODULE_26__["ManagePredictionsComponent"],
                    _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_28__["ConfusionMatrixComponent"],
                    _model_documentation_model_documentation_component__WEBPACK_IMPORTED_MODULE_31__["ModelDocumentationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__["NgMultiSelectDropDownModule"].forRoot(),
                    angular_checklist__WEBPACK_IMPORTED_MODULE_16__["ChecklistModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
                    // PlotlyViaCDNModule,
                    angular_plotly_js__WEBPACK_IMPORTED_MODULE_30__["PlotlyModule"]
                ],
                providers: [_Globals__WEBPACK_IMPORTED_MODULE_11__["Model"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Prediction"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Globals"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Manager"], _Globals__WEBPACK_IMPORTED_MODULE_11__["Similarity"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/builder/builder.component.ts":
/*!**********************************************!*\
  !*** ./src/app/builder/builder.component.ts ***!
  \**********************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder.service */ "./src/app/builder/builder.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common.functions */ "./src/app/common.functions.ts");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_select_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-select-bs4 */ "./node_modules/datatables.net-select-bs4/js/select.bootstrap4.js");
/* harmony import */ var datatables_net_select_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_select_bs4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _training_series_training_series_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../training-series/training-series.component */ "./src/app/training-series/training-series.component.ts");
/* harmony import */ var _config_training_config_training_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config-training/config-training.component */ "./src/app/config-training/config-training.component.ts");
/* harmony import */ var _config_model_config_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config-model/config-model.component */ "./src/app/config-model/config-model.component.ts");
/* harmony import */ var _config_preferences_config_preferences_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config-preferences/config-preferences.component */ "./src/app/config-preferences/config-preferences.component.ts");
























function BuilderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " 1 - Training Series ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-training-series");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " 2 - Input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 18, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-config-training");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " 3 - Learner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-config-model");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " 4 - Preferences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-config-preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var BuilderComponent = /** @class */ (function () {
    function BuilderComponent(model, service, commonService, router, toastr, activeModal, func) {
        this.model = model;
        this.service = service;
        this.commonService = commonService;
        this.router = router;
        this.toastr = toastr;
        this.activeModal = activeModal;
        this.func = func;
    }
    BuilderComponent.prototype.ngOnInit = function () {
        this.getParameters();
    };
    BuilderComponent.prototype.getParameters = function () {
        var _this = this;
        this.commonService.getParameters(this.model.name, this.model.version).subscribe(function (result) {
            _this.model.parameters = result;
        }, function (error) {
            alert(error.status + ' : ' + error.statusText);
        }
        // ,
        // () => { // when subscribe finishes
        //   // console.log('actual parameters.yaml \n', parameters);
        // }
        );
    };
    BuilderComponent.prototype.isDict = function (v) {
        return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
    };
    BuilderComponent.prototype.recursiveDelta = function (dict_in) {
        var e_1, _a, e_2, _b;
        var dict_aux = {};
        var dict_out = {};
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(dict_in)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                dict_aux = dict_in[key];
                try {
                    for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(dict_aux))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var key2 = _f.value;
                        if (key2 === 'value') {
                            if (this.isDict(dict_aux[key2])) {
                                dict_out[key] = this.recursiveDelta(dict_aux[key2]);
                            }
                            else {
                                if (dict_aux[key2] === '' || dict_aux[key2] === 'null') {
                                    dict_aux[key2] = null;
                                }
                                dict_out[key] = dict_aux[key2];
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return dict_out;
    };
    BuilderComponent.prototype.buildModel = function (name, version) {
        var _this = this;
        this.model.delta = {};
        this.model.delta = this.recursiveDelta(this.model.parameters);
        this.model.listModels[name + '-' + version] = { name: name, version: version, trained: false, numMols: '-',
            variables: '-', type: '-', quality: {}, quantitative: false, conformal: false, ensemble: false };
        this.model.trainig_models.push(name + '-' + version);
        var inserted = this.toastr.info('Building', 'Model ' + name + '.v' + version, {
            disableTimeOut: true, positionClass: 'toast-top-right'
        });
        this.activeModal.close('Close click');
        this.service.buildModel().subscribe(function (result) {
            var iter = 0;
            var intervalId = setInterval(function () {
                if (iter < 50) {
                    _this.checkModel(name, version, inserted, intervalId);
                }
                else {
                    clearInterval(intervalId);
                    var index = _this.model.trainig_models.indexOf(name + '-' + version, 0);
                    if (index > -1) {
                        _this.model.trainig_models.splice(index, 1);
                    }
                    _this.toastr.clear(inserted.toastId);
                    _this.toastr.warning('Model ' + name + '.v' + version + ' \n ', 'Interactive timeout exceeded, check latter...', {
                        timeOut: 10000, positionClass: 'toast-top-right'
                    });
                }
                iter += 1;
            }, 10000);
        }, function (error) {
            $('#dataTableModels').DataTable().destroy();
            var index = _this.model.trainig_models.indexOf(name + '-' + version, 0);
            if (index > -1) {
                _this.model.trainig_models.splice(index, 1);
            }
            _this.model.listModels[name + '-' + version].trained = false;
            _this.toastr.clear(inserted.toastId);
            _this.toastr.error('Model ' + name + '.v' + version + ' \n ' + error.error, 'ERROR!', {
                timeOut: 10000, positionClass: 'toast-top-right'
            });
            _this.func.getModelList();
        });
        this.router.navigate(['/models']);
    };
    // Periodic function to check model
    BuilderComponent.prototype.checkModel = function (name, version, inserted, intervalId) {
        var _this = this;
        this.commonService.getModel(name, version).subscribe(function (result) {
            var e_3, _a, e_4, _b;
            $('#dataTableModels').DataTable().destroy();
            var dict_info = {};
            try {
                for (var result_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                    var aux = result_1_1.value;
                    dict_info[aux[0]] = aux[2];
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var quality = {};
            try {
                for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])((Object.keys(dict_info))), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var info = _d.value;
                    if (typeof (dict_info[info]) === 'number') {
                        quality[info] = parseFloat(dict_info[info].toFixed(3));
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_4) throw e_4.error; }
            }
            _this.model.trained_models.push(name + ' .v' + version);
            var index = _this.model.trainig_models.indexOf(name + '-' + version, 0);
            if (index > -1) {
                _this.model.trainig_models.splice(index, 1);
            }
            _this.toastr.clear(inserted.toastId);
            _this.model.listModels[name + '-' + version] = { name: name, version: version, trained: true,
                numMols: dict_info['nobj'], variables: dict_info['nvarx'], type: dict_info['model'], quality: quality,
                quantitative: dict_info['quantitative'], conformal: dict_info['conformal'], ensemble: dict_info['ensemble'] };
            _this.model.trained_models.push(name + ' .v' + version);
            _this.toastr.success('Model ' + name + '.v' + version + ' created', 'MODEL CREATED', {
                timeOut: 5000, positionClass: 'toast-top-right'
            });
            // use the following code to make sure the new model list will show the model
            _this.model.name = name;
            _this.model.version = version;
            // const a = Object.keys(this.model.listModels).sort();
            // var modelIndex = a.indexOf(name+'-'+version);
            // this.model.page = Math.floor(modelIndex/this.model.pagelen);
            _this.func.getModelList();
            clearInterval(intervalId);
        }, function (error) {
            if (error.error.code !== 0) {
                $('#dataTableModels').DataTable().destroy();
                var index = _this.model.trainig_models.indexOf(name + '-' + version, 0);
                if (index > -1) {
                    _this.model.trainig_models.splice(index, 1);
                }
                _this.model.listModels[name + '-' + version].trained = false;
                _this.toastr.clear(inserted.toastId);
                _this.toastr.error('Model ' + name + '.v' + version + ' \n ' + error.error.message, 'ERROR!', {
                    timeOut: 10000, positionClass: 'toast-top-right'
                });
                clearInterval(intervalId);
                _this.func.getModelList();
            }
        });
    };
    BuilderComponent.ɵfac = function BuilderComponent_Factory(t) { return new (t || BuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_builder_service__WEBPACK_IMPORTED_MODULE_3__["BuilderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_functions__WEBPACK_IMPORTED_MODULE_8__["CommonFunctions"])); };
    BuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BuilderComponent, selectors: [["app-builder"]], decls: 13, vars: 1, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Cancel", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "accordion mt-3", "id", "buildingAccordion", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], ["id", "buildingAccordion", 1, "accordion", "mt-3"], [1, "card"], ["id", "headingZero", "data-toggle", "collapse", "data-target", "#collapseZero", "aria-expanded", "true", "aria-controls", "collapseZero", 1, "card-header"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-link", "pt-0", "pb-0", "float-right"], ["id", "collapseZero", "aria-labelledby", "headingZero", "data-parent", "#buildingAccordion", 1, "collapse", "show"], ["trainigseries", ""], [1, "card-body", "p-2", "pl-5", "pr-5"], ["id", "headingOne", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "card-header", "collapsed"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#buildingAccordion", 1, "collapse"], ["id", "headingTwo", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "card-header", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#buildingAccordion", 1, "collapse"], ["id", "headingThree", "data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "card-header", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#buildingAccordion", 1, "collapse"]], template: function BuilderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Build");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BuilderComponent_div_7_Template, 35, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_9_listener() { return ctx.activeModal.close("Close click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_11_listener() { return ctx.buildModel(ctx.model.name, ctx.model.version); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Build");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.parameters !== undefined);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _training_series_training_series_component__WEBPACK_IMPORTED_MODULE_12__["TrainingSeriesComponent"], _config_training_config_training_component__WEBPACK_IMPORTED_MODULE_13__["ConfigTrainingComponent"], _config_model_config_model_component__WEBPACK_IMPORTED_MODULE_14__["ConfigModelComponent"], _config_preferences_config_preferences_component__WEBPACK_IMPORTED_MODULE_15__["ConfigPreferencesComponent"]], styles: [".card-header[data-toggle=\"collapse\"] button:after {\r\n    display: inline-block;\r\n    font: normal normal normal 10px/1 FontAwesome;\r\n    font-size: 25px;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    content: \"\\f056\";\r\n    align-content: flex-end;\r\n    transform: rotate(0deg) ;\r\n    transition: all linear 0.25s;\r\n    color: #e59300;\r\n}   \r\n  .card-header[data-toggle=\"collapse\"].collapsed button:after {\r\n    transform: rotate(90deg) ;\r\n    content: \"\\f055\";\r\n}   \r\na[_ngcontent-%COMP%]{\r\n    text-align: end;\r\n}   \r\n.disabledbutton[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    opacity: 0.4;\r\n}   \r\n.card-header[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background: #22577a;\r\n    background-color: #22577a;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}   \r\n.card[_ngcontent-%COMP%]{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}   \r\n.modal-body[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9idWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY2FyZC1oZWFkZXJbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSBidXR0b246YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTBweC8xIEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICBjb250ZW50OiBcIlxcZjA1NlwiO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMjVzO1xyXG4gICAgY29sb3I6ICNlNTkzMDA7XHJcbn0gICBcclxuOjpuZy1kZWVwIC5jYXJkLWhlYWRlcltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdLmNvbGxhcHNlZCBidXR0b246YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIDtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDU1XCI7XHJcbn1cclxuYXtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLmRpc2FibGVkYnV0dG9uIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyNTc3YTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjU3N2E7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"] });
    return BuilderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-builder',
                templateUrl: './builder.component.html',
                styleUrls: ['./builder.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }, { type: _builder_service__WEBPACK_IMPORTED_MODULE_3__["BuilderService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] }, { type: _common_functions__WEBPACK_IMPORTED_MODULE_8__["CommonFunctions"] }]; }, null); })();


/***/ }),

/***/ "./src/app/builder/builder.service.ts":
/*!********************************************!*\
  !*** ./src/app/builder/builder.service.ts ***!
  \********************************************/
/*! exports provided: BuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderService", function() { return BuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");







var BuilderService = /** @class */ (function () {
    function BuilderService(http, model) {
        this.http = http;
        this.model = model;
    }
    BuilderService.prototype.buildModel = function () {
        var formData = new FormData();
        formData.append('SDF', this.model.file);
        formData.append('parameters', JSON.stringify(this.model.delta));
        formData.append('incremental', JSON.stringify(this.model.incremental));
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_build + 'model/' + this.model.name;
        return this.http.post(url, formData);
    };
    BuilderService.ɵfac = function BuilderService_Factory(t) { return new (t || BuilderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Globals__WEBPACK_IMPORTED_MODULE_3__["Model"])); };
    BuilderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuilderService, factory: BuilderService.ɵfac, providedIn: 'root' });
    return BuilderService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuilderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common.functions.ts":
/*!*************************************!*\
  !*** ./src/app/common.functions.ts ***!
  \*************************************/
/*! exports provided: CommonFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunctions", function() { return CommonFunctions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Globals */ "./src/app/Globals.ts");









var CommonFunctions = /** @class */ (function () {
    function CommonFunctions(http, commonService, model, globals, prediction) {
        this.http = http;
        this.commonService = commonService;
        this.model = model;
        this.globals = globals;
        this.prediction = prediction;
        this.objectKeys = Object.keys;
    }
    CommonFunctions.prototype.selectModel = function (name, version, trained, type, quantitative, conformal, ensemble, error) {
        if (version === '-' || version === 'dev') {
            version = '0';
        }
        this.model.name = name;
        this.model.version = version;
        this.model.trained = trained;
        this.model.conformal = conformal;
        this.model.quantitative = quantitative;
        this.model.ensemble = ensemble;
        this.model.error = error;
        this.model.file = undefined;
        this.model.file_info = undefined;
        this.model.file_fields = undefined;
        this.model.parameters = undefined;
    };
    CommonFunctions.prototype.selectModelID = function (index) {
        this.model.name = this.model.listModels[index].name;
        this.model.version = this.model.listModels[index].version;
        this.model.trained = this.model.listModels[index].trained;
        this.model.conformal = this.model.listModels[index].conformal;
        this.model.quantitative = this.model.listModels[index].quantitative;
        this.model.ensemble = this.model.listModels[index].ensemble;
        this.model.error = this.model.listModels[index].error;
    };
    CommonFunctions.prototype.getModelList = function () {
        var _this = this;
        this.globals.tableModelVisible = false;
        var num_models = 0;
        this.commonService.getModelList().subscribe(function (result) {
            var e_1, _a, e_2, _b, e_3, _c;
            if (result[0]) {
                _this.model.trained_models = [];
                try {
                    for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(result[1]), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var model = _e.value;
                        // get listModels key elements
                        var modelName = model.modelname;
                        var version = model.version;
                        // INFO OF EACH MODEL
                        num_models++;
                        // fallback
                        _this.model.listModels[modelName + '-' + version] = { name: modelName, version: version, trained: false, numMols: '-',
                            variables: '-', type: '-', quality: {}, quantitative: false, conformal: false, ensemble: false, error: model.info };
                        // model.info should be 
                        // (a) dictionay with a code 0 or 1 and an error message
                        // (b) an array of tuples of three elements 
                        if (typeof (model.info) !== 'string') { // this should never happen, only in very old Flame versions
                            // option (a) some kind of controlled error
                            if (model.info['code'] == 0 || model.info['code'] == 1) {
                                _this.model.listModels[modelName + '-' + version].error = model.info['message'];
                                _this.model.listModels[modelName + '-' + version].trained = false;
                            }
                            // option (b) healthy 
                            else {
                                var dict_info = {};
                                try {
                                    for (var _f = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(model.info)), _g = _f.next(); !_g.done; _g = _f.next()) {
                                        var aux = _g.value;
                                        dict_info[aux[0]] = aux[2];
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                                var quality = {};
                                try {
                                    for (var _h = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])((Object.keys(dict_info)))), _j = _h.next(); !_j.done; _j = _h.next()) {
                                        var info = _j.value;
                                        if (typeof (dict_info[info]) === 'number') {
                                            quality[info] = parseFloat(dict_info[info].toFixed(3));
                                        }
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                                _this.model.listModels[modelName + '-' + version] = {
                                    name: modelName,
                                    version: version,
                                    trained: true,
                                    numMols: dict_info['nobj'],
                                    variables: dict_info['nvarx'],
                                    type: dict_info['model'],
                                    quality: quality,
                                    quantitative: dict_info['quantitative'],
                                    conformal: dict_info['conformal'],
                                    ensemble: dict_info['ensemble'],
                                    error: undefined
                                };
                                _this.model.trained_models.push(modelName + ' .v' + version);
                            }
                        }
                        else {
                            alert('Unexpected result: ' + model.info);
                        }
                        num_models--;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var intervalId_1 = setInterval(function () {
                    if (num_models <= 0) {
                        var currentPage = 0;
                        // console.log ('rendering: ', this.model.name, this.model.version);
                        if (_this.objectKeys(_this.model.listModels).length > 0) {
                            var a = _this.objectKeys(_this.model.listModels).sort();
                            if (_this.model.name == undefined) {
                                _this.selectModelID(a[0]);
                            }
                            else {
                                var modelIndex = a.indexOf(_this.model.name + '-' + _this.model.version);
                                currentPage = Math.floor(modelIndex / _this.model.pagelen);
                            }
                        }
                        var me_1 = _this;
                        var table_1 = $('#dataTableModels').DataTable({
                            autoWidth: false,
                            destroy: true,
                            deferRender: true,
                            pageLength: _this.model.pagelen
                        })
                            .on('length.dt', function () {
                            me_1.model.pagelen = table_1.page.len();
                        });
                        if (currentPage != 0) {
                            table_1.page(currentPage).draw('page');
                        }
                        _this.globals.tableModelVisible = true;
                        clearInterval(intervalId_1);
                    }
                }, 10);
            }
            else {
                alert(result[1]);
            }
        }, function (error) {
            alert('Unable to retrieve model list');
        });
    };
    CommonFunctions.prototype.getPredictionList = function () {
        var _this = this;
        this.commonService.getPredictionList().subscribe(function (result) {
            if (result[0]) {
                _this.prediction.predictions = result[1];
                _this.globals.tablePredictionVisible = false;
                // console.log(result[1])
                setTimeout(function () {
                    var table = $('#dataTablePredictions').DataTable({
                        /*Ordering by date */
                        // autoWidth: false,
                        deferRender: true,
                        ordering: true,
                        pageLength: 10,
                        columnDefs: [{ 'type': 'date-euro', 'targets': 4 }],
                        order: [[4, 'desc']],
                        destroy: true
                    });
                    if (result[1].length > 0) {
                        _this.prediction.name = $('#dataTablePredictions tbody tr:first td:first').text();
                        _this.prediction.modelName = $('#dataTablePredictions tbody tr:first td:eq(1)').text();
                        _this.prediction.modelVersion = $('#dataTablePredictions tbody tr:first td:eq(2)').text();
                        _this.prediction.date = $('#dataTablePredictions tbody tr:first td:eq(4)').text();
                    }
                    // $('#dataTablePredictions tbody').on( 'click', 'tr', function () {
                    //   $('tr').removeClass('selected'); // removes all highlights from tr's
                    //   $(this).addClass('selected'); // adds the highlight to this row
                    // });
                    _this.globals.tablePredictionVisible = true;
                }, 10);
            }
            else {
                alert(result[1]);
            }
        }, function (error) {
            alert(error.message);
        });
    };
    CommonFunctions.ɵfac = function CommonFunctions_Factory(t) { return new (t || CommonFunctions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Globals__WEBPACK_IMPORTED_MODULE_4__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"])); };
    CommonFunctions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonFunctions, factory: CommonFunctions.ɵfac, providedIn: 'root' });
    return CommonFunctions;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommonFunctions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Model"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
    }
    /**
     * Retrives the list of all models form the server
     */
    CommonService.prototype.getModelList = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'models';
        return this.http.get(url);
    };
    CommonService.prototype.getPredictionList = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'predictions';
        return this.http.get(url);
    };
    CommonService.prototype.getModel = function (model, version) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version;
        return this.http.get(url);
    };
    CommonService.prototype.getPrediction = function (predictionName) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'prediction/' + predictionName;
        return this.http.get(url);
    };
    /**
    * @param modelname The model name to receive parameters
    * Version will be automatically set to 'dev'
    */
    CommonService.prototype.getParameters = function (model, version) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/parameters';
        return this.http.get(url);
    };
    CommonService.prototype.getDocumentation = function (modelName, modelVersion) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'model/' + modelName + '/version/' + modelVersion + '/documentation';
        return this.http.get(url);
    };
    CommonService.prototype.getValidation = function (model, version) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/validation';
        return this.http.get(url);
    };
    CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
    return CommonService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/config-model/config-model.component.ts":
/*!********************************************************!*\
  !*** ./src/app/config-model/config-model.component.ts ***!
  \********************************************************/
/*! exports provided: ConfigModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModelComponent", function() { return ConfigModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/__ivy_ngcc__/fesm5/angular-checklist.js");







function ConfigModelComponent_option_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfigModelComponent_option_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r9, " ");
} }
function ConfigModelComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_option_5_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_option_5_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r9 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r9 != null);
} }
function ConfigModelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.model.parameters["conformal"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Conformal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.model.parameters["conformal"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.model.parameters["conformal"].description, " ");
} }
function ConfigModelComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "conformalSignificance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_9_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.model.parameters["conformalSignificance"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.model.parameters["conformalSignificance"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.model.parameters["conformalSignificance"].description, " ");
} }
function ConfigModelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_div_9_div_1_Template, 6, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.model.parameters["model"].value != "PLSDA" && ctx_r2.model.parameters["conformal"].value);
} }
function ConfigModelComponent_div_10_option_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfigModelComponent_div_10_option_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r21, " ");
} }
function ConfigModelComponent_div_10_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_div_10_option_5_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_div_10_option_5_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r21 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r21 != null);
} }
function ConfigModelComponent_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ModelValidationN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_10_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.model.parameters["ModelValidationN"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.model.parameters["ModelValidationN"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.model.parameters["ModelValidationN"].description, " ");
} }
function ConfigModelComponent_div_10_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ModelValidationP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_10_div_9_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.model.parameters["ModelValidationP"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.model.parameters["ModelValidationP"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.model.parameters["ModelValidationP"].description, " ");
} }
function ConfigModelComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ModelValidationCV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_10_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.model.parameters["ModelValidationCV"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigModelComponent_div_10_option_5_Template, 3, 3, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfigModelComponent_div_10_div_8_Template, 6, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConfigModelComponent_div_10_div_9_Template, 6, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.model.parameters["ModelValidationCV"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.model.parameters["ModelValidationCV"].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.model.parameters["ModelValidationCV"].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.model.parameters["ModelValidationCV"].value == "kfold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.model.parameters["ModelValidationCV"].value == "lpo");
} }
function ConfigModelComponent_div_11_option_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfigModelComponent_div_11_option_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r33, " ");
} }
function ConfigModelComponent_div_11_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_div_11_option_5_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_div_11_option_5_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r33 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r33 != null);
} }
function ConfigModelComponent_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Feature number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_11_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.model.parameters["feature_number"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r32.model.parameters["feature_number"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.model.parameters["feature_number"].description, " ");
} }
function ConfigModelComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Feature selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_11_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.model.parameters["feature_selection"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigModelComponent_div_11_option_5_Template, 3, 3, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfigModelComponent_div_11_div_8_Template, 6, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.model.parameters["feature_selection"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.model.parameters["feature_selection"].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.model.parameters["feature_selection"].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.model.parameters["feature_selection"].value == "Kbest");
} }
function ConfigModelComponent_div_12_div_1_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_12_div_1_div_1_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.model.parameters[key_r42].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r47.model.parameters[key_r42].value);
} }
function ConfigModelComponent_div_12_div_1_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_12_div_1_div_1_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.model.parameters[key_r42].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.model.parameters[key_r42].value);
} }
function ConfigModelComponent_div_12_div_1_div_1_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_12_div_1_div_1_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.model.parameters[key_r42].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.model.parameters[key_r42].value);
} }
function ConfigModelComponent_div_12_div_1_div_1_input_6_Template(rf, ctx) { if (rf & 1) {
    var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_12_div_1_div_1_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.model.parameters[key_r42].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.model.parameters[key_r42].value);
} }
function ConfigModelComponent_div_12_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_div_12_div_1_div_1_input_3_Template, 1, 2, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_div_12_div_1_div_1_input_4_Template, 1, 2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigModelComponent_div_12_div_1_div_1_input_5_Template, 1, 2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfigModelComponent_div_12_div_1_div_1_input_6_Template, 1, 2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r42.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.model.parameters[key_r42].object_type === "int");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.model.parameters[key_r42].object_type === "float");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.model.parameters[key_r42].object_type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.model.parameters[key_r42].object_type === "list");
} }
function ConfigModelComponent_div_12_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_12_div_1_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.model.parameters[key_r42].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.model.parameters[key_r42].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r42.replace("_", " "), " ");
} }
function ConfigModelComponent_div_12_div_1_div_3_option_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfigModelComponent_div_12_div_1_div_3_option_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r73, " ");
} }
function ConfigModelComponent_div_12_div_1_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_div_12_div_1_div_3_option_4_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_div_12_div_1_div_3_option_4_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r73 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r73 != null);
} }
function ConfigModelComponent_div_12_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_12_div_1_div_3_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.model.parameters[key_r42].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_div_12_div_1_div_3_option_4_Template, 3, 3, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r42.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.model.parameters[key_r42].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.model.parameters[key_r42].options);
} }
function ConfigModelComponent_div_12_div_1_div_4_label_3_Template(rf, ctx) { if (rf & 1) {
    var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checklistChange", function ConfigModelComponent_div_12_div_1_div_4_label_3_Template_input_checklistChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.model.parameters[key_r42].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r82 = ctx.$implicit;
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checklist", ctx_r81.model.parameters[key_r42].value)("checklistValue", value_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r82, " ");
} }
function ConfigModelComponent_div_12_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_div_12_div_1_div_4_label_3_Template, 3, 3, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r42.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.model.parameters[key_r42].options);
} }
function ConfigModelComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_div_12_div_1_div_1_Template, 7, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_div_12_div_1_div_2_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_div_12_div_1_div_3_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_div_12_div_1_div_4_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r42 = ctx.$implicit;
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.model.parameters[key_r42].writable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r41.model.parameters[key_r42].writable && ctx_r41.model.parameters[key_r42].object_type === "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r41.model.parameters[key_r42].writable && ctx_r41.model.parameters[key_r42].object_type != "list" && ctx_r41.model.parameters[key_r42].object_type != "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r41.model.parameters[key_r42].writable && ctx_r41.model.parameters[key_r42].object_type === "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r41.model.parameters[key_r42].description, " ");
} }
function ConfigModelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_div_12_div_1_Template, 7, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.infoModel);
} }
function ConfigModelComponent_fieldset_13_div_3_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_13_div_3_div_1_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r98.model.parameters[ctx_r98.parametersModel[ctx_r98.model.parameters["model"].value]].value[key_r89].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.model.parameters[ctx_r95.parametersModel[ctx_r95.model.parameters["model"].value]].value[key_r89].value);
} }
function ConfigModelComponent_fieldset_13_div_3_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_13_div_3_div_1_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r102.model.parameters[ctx_r102.parametersModel[ctx_r102.model.parameters["model"].value]].value[key_r89].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r96.model.parameters[ctx_r96.parametersModel[ctx_r96.model.parameters["model"].value]].value[key_r89].value);
} }
function ConfigModelComponent_fieldset_13_div_3_div_1_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_13_div_3_div_1_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.model.parameters[ctx_r106.parametersModel[ctx_r106.model.parameters["model"].value]].value[key_r89].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r97.model.parameters[ctx_r97.parametersModel[ctx_r97.model.parameters["model"].value]].value[key_r89].value);
} }
function ConfigModelComponent_fieldset_13_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_fieldset_13_div_3_div_1_input_3_Template, 1, 2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_13_div_3_div_1_input_4_Template, 1, 1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigModelComponent_fieldset_13_div_3_div_1_input_5_Template, 1, 1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.model.parameters[ctx_r90.parametersModel[ctx_r90.model.parameters["model"].value]].value[key_r89].object_type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.model.parameters[ctx_r90.parametersModel[ctx_r90.model.parameters["model"].value]].value[key_r89].object_type === "int");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.model.parameters[ctx_r90.parametersModel[ctx_r90.model.parameters["model"].value]].value[key_r89].object_type === "float");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r90.model.parameters[ctx_r90.parametersModel[ctx_r90.model.parameters["model"].value]].value[key_r89].description, " ");
} }
function ConfigModelComponent_fieldset_13_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_13_div_3_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r111.model.parameters[ctx_r111.parametersModel[ctx_r111.model.parameters["model"].value]].value[key_r89].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r91.model.parameters[ctx_r91.parametersModel[ctx_r91.model.parameters["model"].value]].value[key_r89].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r89, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r91.model.parameters[ctx_r91.parametersModel[ctx_r91.model.parameters["model"].value]].value[key_r89].description, " ");
} }
function ConfigModelComponent_fieldset_13_div_3_div_3_option_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfigModelComponent_fieldset_13_div_3_div_3_option_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r116, " ");
} }
function ConfigModelComponent_fieldset_13_div_3_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_fieldset_13_div_3_div_3_option_4_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_fieldset_13_div_3_div_3_option_4_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r116 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r116 != null);
} }
function ConfigModelComponent_fieldset_13_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_13_div_3_div_3_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r120.model.parameters[ctx_r120.parametersModel[ctx_r120.model.parameters["model"].value]].value[key_r89].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_13_div_3_div_3_option_4_Template, 3, 3, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r92.model.parameters[ctx_r92.parametersModel[ctx_r92.model.parameters["model"].value]].value[key_r89].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r92.model.parameters[ctx_r92.parametersModel[ctx_r92.model.parameters["model"].value]].value[key_r89].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r92.model.parameters[ctx_r92.parametersModel[ctx_r92.model.parameters["model"].value]].value[key_r89].description, " ");
} }
function ConfigModelComponent_fieldset_13_div_3_div_4_label_3_Template(rf, ctx) { if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checklistChange", function ConfigModelComponent_fieldset_13_div_3_div_4_label_3_Template_input_checklistChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r126.model.parameters[ctx_r126.parametersModel[ctx_r126.model.parameters["model"].value]].value[key_r89].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r125 = ctx.$implicit;
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checklist", ctx_r124.model.parameters[ctx_r124.parametersModel[ctx_r124.model.parameters["model"].value]].value[key_r89].value)("checklistValue", value_r125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r125, " ");
} }
function ConfigModelComponent_fieldset_13_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_fieldset_13_div_3_div_4_label_3_Template, 3, 3, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r93.model.parameters[ctx_r93.parametersModel[ctx_r93.model.parameters["model"].value]].value[key_r89].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r93.model.parameters[ctx_r93.parametersModel[ctx_r93.model.parameters["model"].value]].value[key_r89].description, " ");
} }
function ConfigModelComponent_fieldset_13_div_3_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_13_div_3_div_5_div_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r133.model.parameters[ctx_r133.parametersModel[ctx_r133.model.parameters["model"].value]].value[key_r89].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r132 = ctx.$implicit;
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r132)("ngModel", ctx_r131.model.parameters[ctx_r131.parametersModel[ctx_r131.model.parameters["model"].value]].value[key_r89].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r132);
} }
function ConfigModelComponent_fieldset_13_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_13_div_3_div_5_div_4_Template, 4, 3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r94.model.parameters[ctx_r94.parametersModel[ctx_r94.model.parameters["model"].value]].value[key_r89].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r94.model.parameters[ctx_r94.parametersModel[ctx_r94.model.parameters["model"].value]].value[key_r89].description, " ");
} }
function ConfigModelComponent_fieldset_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_fieldset_13_div_3_div_1_Template, 8, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_fieldset_13_div_3_div_2_Template, 6, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_fieldset_13_div_3_div_3_Template, 7, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_13_div_3_div_4_Template, 6, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigModelComponent_fieldset_13_div_3_div_5_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r89 = ctx.$implicit;
    var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].writable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].writable && ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].object_type === "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].writable && ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].object_type != "list" && ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].object_type != "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r88.model.parameters["model"].value == "XGBOOST" && !ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].writable && ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].object_type === "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.model.parameters["model"].value == "XGBOOST" && !ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].writable && ctx_r88.model.parameters[ctx_r88.parametersModel[ctx_r88.model.parameters["model"].value]].value[key_r89].object_type === "list");
} }
function ConfigModelComponent_fieldset_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_fieldset_13_div_3_Template, 6, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.model.parameters["model"].value, " parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.objectKeys(ctx_r6.model.parameters[ctx_r6.parametersModel[ctx_r6.model.parameters["model"].value]].value));
} }
function ConfigModelComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_div_15_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r138.model.parameters["tune"].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tune ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.model.parameters["tune"].value);
} }
function ConfigModelComponent_fieldset_16_div_3_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_16_div_3_div_1_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r149.model.parameters[ctx_r149.optimizeModel[ctx_r149.model.parameters["model"].value]].value[key_r141].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r146.model.parameters[ctx_r146.optimizeModel[ctx_r146.model.parameters["model"].value]].value[key_r141].value);
} }
function ConfigModelComponent_fieldset_16_div_3_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_16_div_3_div_1_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r153.model.parameters[ctx_r153.optimizeModel[ctx_r153.model.parameters["model"].value]].value[key_r141].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r147.model.parameters[ctx_r147.optimizeModel[ctx_r147.model.parameters["model"].value]].value[key_r141].value);
} }
function ConfigModelComponent_fieldset_16_div_3_div_1_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_16_div_3_div_1_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r157.model.parameters[ctx_r157.optimizeModel[ctx_r157.model.parameters["model"].value]].value[key_r141].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r148.model.parameters[ctx_r148.optimizeModel[ctx_r148.model.parameters["model"].value]].value[key_r141].value);
} }
function ConfigModelComponent_fieldset_16_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_fieldset_16_div_3_div_1_input_3_Template, 1, 2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_16_div_3_div_1_input_4_Template, 1, 1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigModelComponent_fieldset_16_div_3_div_1_input_5_Template, 1, 1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r142.model.parameters[ctx_r142.optimizeModel[ctx_r142.model.parameters["model"].value]].value[key_r141].object_type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r142.model.parameters[ctx_r142.optimizeModel[ctx_r142.model.parameters["model"].value]].value[key_r141].object_type === "int");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r142.model.parameters[ctx_r142.optimizeModel[ctx_r142.model.parameters["model"].value]].value[key_r141].object_type === "float");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r142.model.parameters[ctx_r142.optimizeModel[ctx_r142.model.parameters["model"].value]].value[key_r141].description, " ");
} }
function ConfigModelComponent_fieldset_16_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_16_div_3_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163); var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r162.model.parameters[ctx_r162.optimizeModel[ctx_r162.model.parameters["model"].value]].value[key_r141].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r143.model.parameters[ctx_r143.optimizeModel[ctx_r143.model.parameters["model"].value]].value[key_r141].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r141, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r143.model.parameters[ctx_r143.optimizeModel[ctx_r143.model.parameters["model"].value]].value[key_r141].description, " ");
} }
function ConfigModelComponent_fieldset_16_div_3_div_3_option_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfigModelComponent_fieldset_16_div_3_div_3_option_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r167, " ");
} }
function ConfigModelComponent_fieldset_16_div_3_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_fieldset_16_div_3_div_3_option_4_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_fieldset_16_div_3_div_3_option_4_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r167 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r167 != null);
} }
function ConfigModelComponent_fieldset_16_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_fieldset_16_div_3_div_3_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172); var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r171.model.parameters[ctx_r171.optimizeModel[ctx_r171.model.parameters["model"].value]].value[key_r141].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_16_div_3_div_3_option_4_Template, 3, 3, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r144.model.parameters[ctx_r144.optimizeModel[ctx_r144.model.parameters["model"].value]].value[key_r141].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r144.model.parameters[ctx_r144.optimizeModel[ctx_r144.model.parameters["model"].value]].value[key_r141].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r144.model.parameters[ctx_r144.optimizeModel[ctx_r144.model.parameters["model"].value]].value[key_r141].description, " ");
} }
function ConfigModelComponent_fieldset_16_div_3_div_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r176);
} }
function ConfigModelComponent_fieldset_16_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_16_div_3_div_4_option_4_Template, 2, 1, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r145.model.parameters[ctx_r145.optimizeModel[ctx_r145.model.parameters["model"].value]].value[key_r141].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r145.model.parameters[ctx_r145.optimizeModel[ctx_r145.model.parameters["model"].value]].value[key_r141].description, " ");
} }
function ConfigModelComponent_fieldset_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigModelComponent_fieldset_16_div_3_div_1_Template, 8, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigModelComponent_fieldset_16_div_3_div_2_Template, 6, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_fieldset_16_div_3_div_3_Template, 7, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigModelComponent_fieldset_16_div_3_div_4_Template, 7, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r141 = ctx.$implicit;
    var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].writable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].writable && ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].object_type === "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].writable && ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].object_type != "list" && ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].object_type != "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].writable && ctx_r140.model.parameters[ctx_r140.optimizeModel[ctx_r140.model.parameters["model"].value]].value[key_r141].object_type === "list");
} }
function ConfigModelComponent_fieldset_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigModelComponent_fieldset_16_div_3_Template, 5, 4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.model.parameters["model"].value, " optimize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.objectKeys(ctx_r8.model.parameters[ctx_r8.optimizeModel[ctx_r8.model.parameters["model"].value]].value));
} }
var ConfigModelComponent = /** @class */ (function () {
    function ConfigModelComponent(model) {
        this.model = model;
        this.objectKeys = Object.keys;
        this.infoModel = ['imbalance'];
        this.parametersModel = {
            RF: 'RF_parameters',
            XGBOOST: 'XGBOOST_parameters',
            PLSDA: 'PLSDA_parameters',
            PLSR: 'PLSR_parameters',
            GNB: 'GNB_parameters',
            SVM: 'SVM_parameters'
        };
        this.optimizeModel = {
            RF: 'RF_optimize',
            XGBOOST: 'XGBOOST_optimize',
            PLSDA: 'PLSDA_optimize',
            PLSR: 'PLSR_optimize',
            GNB: 'GNB_optimize',
            SVM: 'SVM_optimize'
        };
        this.type_models = {
            data: ['RF', 'XGBOOST', 'PLSDA', 'PLSR', 'GNB', 'SVM'],
            molecule: ['RF', 'XGBOOST', 'PLSDA', 'PLSR', 'GNB', 'SVM'],
            model_ensemble: ['RF', 'XGBOOST', 'PLSDA', 'PLSR', 'GNB', 'SVM', 'mean', 'median', 'majority']
        };
    }
    ConfigModelComponent.prototype.ngOnInit = function () {
    };
    ConfigModelComponent.prototype.ngAfterContentChecked = function () {
        // CHECK DELTA DEPENDENCIES
        // NOWIS HARDCODED, BUT IT WILL BE AUTOMATED
        if (this.model.parameters['model'].value === 'PLSDA') {
            this.model.parameters['conformal'].value = false;
        }
        if (this.model.parameters['model'].value === 'mean' || this.model.parameters['model'].value === 'median') {
            this.model.parameters['quantitative'].value = true;
            this.model.parameters['conformal'].value = false;
        }
        if (this.model.parameters['model'].value === 'majority') {
            this.model.parameters['quantitative'].value = false;
            this.model.parameters['conformal'].value = false;
        }
    };
    ConfigModelComponent.ɵfac = function ConfigModelComponent_Factory(t) { return new (t || ConfigModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Model"])); };
    ConfigModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigModelComponent, selectors: [["app-config-model"]], decls: 17, vars: 11, consts: [[1, "form-row"], [1, "form-group", "col-md-4"], ["for", "model", 1, "bmd-label-static"], ["id", "key", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "model", 1, "text-muted"], ["class", "form-group col-md-4", 4, "ngIf"], ["class", "form-row", 4, "ngIf"], ["class", "border", 4, "ngIf"], ["class", "checkbox", 4, "ngIf"], [3, "value"], [4, "ngIf"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["id", "conformal", 1, "text-muted"], ["style", "margin-top: 0px;", 4, "ngIf"], [2, "margin-top", "0px"], ["for", "conformalSignificance", 1, "bmd-label-static", 2, "margin-top", "0px"], ["type", "number", "step", "0.05", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "conformalSignificance", 1, "text-muted"], ["for", "key", 1, "bmd-label-static"], ["id", "ModelValidationCV", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "key", 1, "text-muted"], ["class", "form-group col-md-4", "style", "margin-top: 0px;", 4, "ngIf"], [1, "form-group", "col-md-4", 2, "margin-top", "0px"], ["for", "ModelValidationN", 1, "bmd-label-static"], ["type", "number", "step", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "ModelValidationN", 1, "text-muted"], ["for", "ModelValidationP", 1, "bmd-label-static"], ["id", "ModelValidationP", 1, "text-muted"], ["id", "feature_selection", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "feature_selection", 1, "text-muted"], ["class", "form-group col-md-4", "style", "margin-top: 11px;", 4, "ngIf"], [1, "form-group", "col-md-4", 2, "margin-top", "11px"], ["for", "feature_number", 1, "bmd-label-static"], ["type", "text", "step", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "feature_number", 1, "text-muted"], ["class", "form-group col-md-4", 4, "ngFor", "ngForOf"], ["for", "key", 1, "bmd-label-static", 2, "margin-top", "0px"], ["class", "form-control", "id", "key", "type", "number", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["class", "form-control", "id", "key", "type", "number", "step", "0.01", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["class", "form-control", "id", "key", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["id", "key", "type", "number", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["id", "key", "type", "number", "step", "0.01", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["id", "key", "type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["id", "key", 1, "bmd-label-floating", "mb-2", "p-0"], ["id", "key", "class", "mr-2 mb-2 w-100", 4, "ngFor", "ngForOf"], ["id", "key", 1, "mr-2", "mb-2", "w-100"], ["id", "key", "type", "checkbox", 3, "checklist", "checklistValue", "checklistChange"], [1, "border"], ["class", "m-2 w-50", 4, "ngFor", "ngForOf"], [1, "m-2", "w-50"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "bmd-label-static"], ["class", "form-control", "id", "key", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "form-control", "id", "key", "type", "number", "step", "0.01", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "key", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "key", "type", "number", "step", "0.01", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "key", 1, "bmd-label-static", "mb-2", "p-0"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "value", "name", "inlineRadioOptions", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "value", 1, "form-check-label"], ["multiple", "", "id", "key", 1, "form-control"], [4, "ngFor", "ngForOf"]], template: function ConfigModelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Model");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigModelComponent_Template_select_ngModelChange_4_listener($event) { return ctx.model.parameters["model"].value = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigModelComponent_option_5_Template, 3, 3, "option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfigModelComponent_div_8_Template, 7, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConfigModelComponent_div_9_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConfigModelComponent_div_10_Template, 10, 5, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfigModelComponent_div_11_Template, 9, 4, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConfigModelComponent_div_12_Template, 2, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConfigModelComponent_fieldset_13_Template, 4, 2, "fieldset", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ConfigModelComponent_div_15_Template, 4, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConfigModelComponent_fieldset_16_Template, 4, 2, "fieldset", 8);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.parameters["model"].value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.type_models[ctx.model.parameters["input_type"].value]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.parameters["model"].description, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["model"].value != "PLSDA" && ctx.model.parameters["model"].value != "median" && ctx.model.parameters["model"].value != "mean" && ctx.model.parameters["model"].value != "majority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["model"].value != "median" && ctx.model.parameters["model"].value != "mean" && ctx.model.parameters["model"].value != "majority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["model"].value != "median" && ctx.model.parameters["model"].value != "mean" && ctx.model.parameters["model"].value != "majority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["model"].value != "median" && ctx.model.parameters["model"].value != "mean" && ctx.model.parameters["model"].value != "majority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["model"].value != "median" && ctx.model.parameters["model"].value != "mean" && ctx.model.parameters["model"].value != "majority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["model"].value != "mean" && ctx.model.parameters["model"].value != "majority" && ctx.model.parameters["model"].value != "median");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["model"].value != "mean" && ctx.model.parameters["model"].value != "majority" && ctx.model.parameters["model"].value != "median");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.parameters["tune"].value);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], angular_checklist__WEBPACK_IMPORTED_MODULE_4__["ChecklistDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: [".border[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #F7F7F7;\r\n    border: 1cm;\r\n    border-top: 1cm;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlnLW1vZGVsL2NvbmZpZy1tb2RlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb25maWctbW9kZWwvY29uZmlnLW1vZGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gICAgYm9yZGVyOiAxY207XHJcbiAgICBib3JkZXItdG9wOiAxY207XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gICJdfQ== */"] });
    return ConfigModelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-config-model',
                templateUrl: './config-model.component.html',
                styleUrls: ['./config-model.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Model"] }]; }, null); })();


/***/ }),

/***/ "./src/app/config-preferences/config-preferences.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/config-preferences/config-preferences.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfigPreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPreferencesComponent", function() { return ConfigPreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/__ivy_ngcc__/fesm5/angular-checklist.js");







function ConfigPreferencesComponent_div_1_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigPreferencesComponent_div_1_div_1_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.model.parameters[key_r1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.model.parameters[key_r1].value);
} }
function ConfigPreferencesComponent_div_1_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigPreferencesComponent_div_1_div_1_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.model.parameters[key_r1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.model.parameters[key_r1].value);
} }
function ConfigPreferencesComponent_div_1_div_1_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigPreferencesComponent_div_1_div_1_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.model.parameters[key_r1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r1.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.model.parameters[key_r1].value);
} }
function ConfigPreferencesComponent_div_1_div_1_input_6_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigPreferencesComponent_div_1_div_1_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.model.parameters[key_r1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", key_r1.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.model.parameters[key_r1].value);
} }
function ConfigPreferencesComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigPreferencesComponent_div_1_div_1_input_3_Template, 1, 2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigPreferencesComponent_div_1_div_1_input_4_Template, 1, 2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfigPreferencesComponent_div_1_div_1_input_5_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfigPreferencesComponent_div_1_div_1_input_6_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.model.parameters[key_r1].object_type === "int");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.model.parameters[key_r1].object_type === "float");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.model.parameters[key_r1].object_type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.model.parameters[key_r1].object_type === "list");
} }
function ConfigPreferencesComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigPreferencesComponent_div_1_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.model.parameters[key_r1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.model.parameters[key_r1].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r1.replace("_", " "), " ");
} }
function ConfigPreferencesComponent_div_1_div_3_option_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfigPreferencesComponent_div_1_div_3_option_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r32, " ");
} }
function ConfigPreferencesComponent_div_1_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigPreferencesComponent_div_1_div_3_option_4_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigPreferencesComponent_div_1_div_3_option_4_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r32 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r32 != null);
} }
function ConfigPreferencesComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigPreferencesComponent_div_1_div_3_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.model.parameters[key_r1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigPreferencesComponent_div_1_div_3_option_4_Template, 3, 3, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.model.parameters[key_r1].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.model.parameters[key_r1].options);
} }
function ConfigPreferencesComponent_div_1_div_4_label_3_Template(rf, ctx) { if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checklistChange", function ConfigPreferencesComponent_div_1_div_4_label_3_Template_input_checklistChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.model.parameters[key_r1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r41 = ctx.$implicit;
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checklist", ctx_r40.model.parameters[key_r1].value)("checklistValue", value_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r41, " ");
} }
function ConfigPreferencesComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigPreferencesComponent_div_1_div_4_label_3_Template, 3, 3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.model.parameters[key_r1].options);
} }
function ConfigPreferencesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigPreferencesComponent_div_1_div_1_Template, 7, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigPreferencesComponent_div_1_div_2_Template, 4, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigPreferencesComponent_div_1_div_3_Template, 5, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigPreferencesComponent_div_1_div_4_Template, 4, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.parameters[key_r1].writable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.model.parameters[key_r1].writable && ctx_r0.model.parameters[key_r1].object_type === "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.model.parameters[key_r1].writable && ctx_r0.model.parameters[key_r1].object_type != "list" && ctx_r0.model.parameters[key_r1].object_type != "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.model.parameters[key_r1].writable && ctx_r0.model.parameters[key_r1].object_type === "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.model.parameters[key_r1].description, " ");
} }
var ConfigPreferencesComponent = /** @class */ (function () {
    function ConfigPreferencesComponent(model) {
        this.model = model;
        this.objectKeys = Object.keys;
        this.infoPreferences = ['mol_batch', 'numCPUs', 'modelingToolkit',
            'output_similar', 'output_format', 'output_md'];
    }
    ConfigPreferencesComponent.prototype.ngOnInit = function () {
    };
    ConfigPreferencesComponent.ɵfac = function ConfigPreferencesComponent_Factory(t) { return new (t || ConfigPreferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Model"])); };
    ConfigPreferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigPreferencesComponent, selectors: [["app-config-preferences"]], decls: 2, vars: 1, consts: [[1, "form-row"], ["class", "form-group col-md-4", 4, "ngFor", "ngForOf"], [1, "form-group", "col-md-4"], ["style", "margin-top: 0px;", 4, "ngIf"], ["class", "checkbox", 4, "ngIf"], [4, "ngIf"], ["id", "key", 1, "text-muted"], [2, "margin-top", "0px"], ["for", "key", 1, "bmd-label-floating"], ["class", "form-control", "id", "key", "type", "number", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["class", "form-control", "id", "key", "type", "number", "step", "0.01", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["class", "form-control", "id", "key", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["id", "key", "type", "number", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["id", "key", "type", "number", "step", "0.01", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["id", "key", "type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["id", "key", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "key", 1, "bmd-label-floating", "mb-2", "p-0"], ["id", "key", "class", "mr-2 mb-2 w-100", 4, "ngFor", "ngForOf"], ["id", "key", 1, "mr-2", "mb-2", "w-100"], ["id", "key", "type", "checkbox", 3, "checklist", "checklistValue", "checklistChange"]], template: function ConfigPreferencesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigPreferencesComponent_div_1_Template, 7, 5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infoPreferences);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], angular_checklist__WEBPACK_IMPORTED_MODULE_4__["ChecklistDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy1wcmVmZXJlbmNlcy9jb25maWctcHJlZmVyZW5jZXMuY29tcG9uZW50LmNzcyJ9 */"] });
    return ConfigPreferencesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigPreferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-config-preferences',
                templateUrl: './config-preferences.component.html',
                styleUrls: ['./config-preferences.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Model"] }]; }, null); })();


/***/ }),

/***/ "./src/app/config-training/config-training.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/config-training/config-training.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfigTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigTrainingComponent", function() { return ConfigTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/__ivy_ngcc__/fesm5/angular-checklist.js");









function ConfigTrainingComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r3);
} }
function ConfigTrainingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_div_6_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.selectedItems = $event; })("onSelect", function ConfigTrainingComponent_div_6_Template_ng_multiselect_dropdown_onSelect_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.saveModelsSelected(); })("onDeSelect", function ConfigTrainingComponent_div_6_Template_ng_multiselect_dropdown_onDeSelect_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.saveModelsSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "select models")("data", ctx_r1.model.trained_models.sort())("ngModel", ctx_r1.selectedItems)("settings", ctx_r1.dropdownSettings);
} }
function ConfigTrainingComponent_div_8_div_1_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_div_8_div_1_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.model.parameters[key_r8].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.model.parameters[key_r8].value);
} }
function ConfigTrainingComponent_div_8_div_1_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_div_8_div_1_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.model.parameters[key_r8].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.model.parameters[key_r8].value);
} }
function ConfigTrainingComponent_div_8_div_1_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_div_8_div_1_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.model.parameters[key_r8].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.model.parameters[key_r8].value);
} }
function ConfigTrainingComponent_div_8_div_1_input_6_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_div_8_div_1_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.model.parameters[key_r8].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.model.parameters[key_r8].value);
} }
function ConfigTrainingComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigTrainingComponent_div_8_div_1_input_3_Template, 1, 1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigTrainingComponent_div_8_div_1_input_4_Template, 1, 1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConfigTrainingComponent_div_8_div_1_input_5_Template, 1, 1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ConfigTrainingComponent_div_8_div_1_input_6_Template, 1, 1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r8.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.model.parameters[key_r8].object_type === "int");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.model.parameters[key_r8].object_type === "float");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.model.parameters[key_r8].object_type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.model.parameters[key_r8].object_type === "list");
} }
function ConfigTrainingComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_div_8_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.model.parameters[key_r8].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.model.parameters[key_r8].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r8.replace("_", " "), " ");
} }
function ConfigTrainingComponent_div_8_div_3_option_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " --none-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigTrainingComponent_div_8_div_3_option_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r39, " ");
} }
function ConfigTrainingComponent_div_8_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConfigTrainingComponent_div_8_div_3_option_4_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConfigTrainingComponent_div_8_div_3_option_4_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", value_r39 == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", value_r39 != null);
} }
function ConfigTrainingComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_div_8_div_3_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.model.parameters[key_r8].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigTrainingComponent_div_8_div_3_option_4_Template, 3, 3, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r8.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.model.parameters[key_r8].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.model.parameters[key_r8].options);
} }
function ConfigTrainingComponent_div_8_div_4_label_3_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checklistChange", function ConfigTrainingComponent_div_8_div_4_label_3_Template_input_checklistChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.model.parameters[key_r8].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r48 = ctx.$implicit;
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checklist", ctx_r47.model.parameters[key_r8].value)("checklistValue", value_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r48, " ");
} }
function ConfigTrainingComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigTrainingComponent_div_8_div_4_label_3_Template, 3, 3, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r8.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.model.parameters[key_r8].options);
} }
function ConfigTrainingComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConfigTrainingComponent_div_8_div_1_Template, 7, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConfigTrainingComponent_div_8_div_2_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigTrainingComponent_div_8_div_3_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigTrainingComponent_div_8_div_4_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r8 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.model.parameters[key_r8].writable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.model.parameters[key_r8].writable && ctx_r2.model.parameters[key_r8].object_type === "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.model.parameters[key_r8].writable && ctx_r2.model.parameters[key_r8].object_type != "list" && ctx_r2.model.parameters[key_r8].object_type != "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.model.parameters[key_r8].writable && ctx_r2.model.parameters[key_r8].object_type === "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.model.parameters[key_r8].description, " ");
} }
var ConfigTrainingComponent = /** @class */ (function () {
    function ConfigTrainingComponent(model) {
        this.model = model;
        this.objectKeys = Object.keys;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.infoSeries = {
            'molecule': ['SDFile_name', 'SDFile_activity', 'SDFile_experimental', 'SDFile_complementary', 'quantitative', 'normalize_method',
                'convert3D_method', 'ionize_method', 'modelAutoscaling', 'computeMD_method'],
            'model_ensemble': ['SDFile_name', 'SDFile_activity', 'SDFile_experimental', 'SDFile_complementary', 'quantitative', 'normalize_method',
                'modelAutoscaling'],
            'data': ['TSV_objnames', 'TSV_activity', 'TSV_varnames'],
            'ext_data': ['model_set']
        };
    }
    ConfigTrainingComponent.prototype.ngOnInit = function () {
        var e_1, _a;
        this.selectedItems = [];
        if (this.model.parameters['ensemble_names'] !== undefined && this.model.parameters['ensemble_names'].value !== null) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.model.parameters['ensemble_names'].value)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var index = _c.value;
                    var name_1 = this.model.parameters['ensemble_names'].value[index];
                    var version = 0;
                    if (this.model.parameters['ensemble_versions'].value !== null) {
                        version = this.model.parameters['ensemble_versions'].value[index];
                    }
                    this.selectedItems.push(name_1 + ' v.' + version);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 5,
            allowSearchFilter: true
        };
    };
    ConfigTrainingComponent.prototype.saveModelsSelected = function () {
        var e_2, _a;
        var info;
        var name;
        var version;
        this.model.parameters['ensemble_names'].value = [];
        this.model.parameters['ensemble_versions'].value = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var model = _c.value;
                info = model.split(' .v');
                version = info[info.length - 1];
                name = (info.slice(0, info.length - 1)).join();
                this.model.parameters['ensemble_names'].value.push(name);
                this.model.parameters['ensemble_versions'].value.push(Number(version));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    ConfigTrainingComponent.ɵfac = function ConfigTrainingComponent_Factory(t) { return new (t || ConfigTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"])); };
    ConfigTrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfigTrainingComponent, selectors: [["app-config-training"]], decls: 9, vars: 4, consts: [[1, "form-row"], [1, "form-group", "col-md-4"], ["for", "input_type", 1, "bmd-label-static"], ["id", "key", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["class", "form-group col-md-4", 4, "ngIf"], ["class", "form-group col-md-4 mb-4 is-filled", 4, "ngFor", "ngForOf"], [3, "placeholder", "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect"], [1, "form-group", "col-md-4", "mb-4", "is-filled"], ["style", "margin-top: 11px;", 4, "ngIf"], ["class", "checkbox", 4, "ngIf"], [4, "ngIf"], ["class", "checkbox mt-3", 4, "ngIf"], ["id", "key", 1, "text-muted"], [2, "margin-top", "11px"], ["for", "key", 1, "bmd-label-static", 2, "margin-top", "11px"], ["class", "form-control", "id", "key", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "form-control", "id", "key", "type", "number", "step", "0.01", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "form-control", "id", "key", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "key", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "key", "type", "number", "step", "0.01", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "key", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "key", 1, "bmd-label-static"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "checkbox", "mt-3"], ["id", "key", 1, "bmd-label-static", "mb-2", "p-0"], ["id", "key", "class", "mr-2 mb-2 w-100", 4, "ngFor", "ngForOf"], ["id", "key", 1, "mr-2", "mb-2", "w-100"], ["id", "key", "type", "checkbox", 3, "checklist", "checklistValue", "checklistChange"]], template: function ConfigTrainingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Input type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfigTrainingComponent_Template_select_ngModelChange_4_listener($event) { return ctx.model.parameters["input_type"].value = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConfigTrainingComponent_option_5_Template, 2, 1, "option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ConfigTrainingComponent_div_6_Template, 2, 4, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ConfigTrainingComponent_div_8_Template, 7, 5, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.parameters["input_type"].value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.model.parameters["input_type"].options);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.parameters["input_type"].value == "model_ensemble");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.infoSeries[ctx.model.parameters["input_type"].value]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], angular_checklist__WEBPACK_IMPORTED_MODULE_6__["ChecklistDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy10cmFpbmluZy9jb25maWctdHJhaW5pbmcuY29tcG9uZW50LmNzcyJ9 */"] });
    return ConfigTrainingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigTrainingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-config-training',
                templateUrl: './config-training.component.html',
                styleUrls: ['./config-training.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }]; }, null); })();


/***/ }),

/***/ "./src/app/confusion-matrix/confusion-matrix.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/confusion-matrix/confusion-matrix.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfusionMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfusionMatrixComponent", function() { return ConfusionMatrixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ConfusionMatrixComponent = /** @class */ (function () {
    function ConfusionMatrixComponent() {
    }
    ConfusionMatrixComponent.prototype.ngOnInit = function () {
    };
    ConfusionMatrixComponent.ɵfac = function ConfusionMatrixComponent_Factory(t) { return new (t || ConfusionMatrixComponent)(); };
    ConfusionMatrixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfusionMatrixComponent, selectors: [["app-confusion-matrix"]], inputs: { TP: "TP", FP: "FP", TN: "TN", FN: "FN" }, decls: 40, vars: 9, consts: [["id", "matrix", 1, "container"], [1, "row"], [1, "signcell"], [1, "numcell", "TP"], [1, "numcell", "FP"], [1, "numcell"], [1, "numcell", "FN"], [1, "numcell", "TN"]], template: function ConfusionMatrixComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "pred + ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "pred - ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TP);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FP);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TP + ctx.FP);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FN);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TN);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FN + ctx.TN);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TP + ctx.FN);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FP + ctx.TN);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TP + ctx.FP + ctx.TN + ctx.FN);
        } }, styles: [".TP[_ngcontent-%COMP%] {\r\n    \r\n    background-color: rgba(70,143,184,0.8);\r\n}\r\n.FP[_ngcontent-%COMP%] {\r\n    \r\n    background-color: rgba(249,219,132,0.8);\r\n}\r\n.TN[_ngcontent-%COMP%] {\r\n    \r\n    background-color: rgba(156,198,221,0.8);\r\n}\r\n.FN[_ngcontent-%COMP%] {\r\n    \r\n    background-color:rgba(242,185,15,0.8);\r\n}\r\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(200, 200, 200);\r\n    border-collapse: collapse;\r\n    padding: 2px;\r\n    text-align: center;\r\n}\r\n.numcell[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n.signcell[_ngcontent-%COMP%] {\r\n    min-width: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZnVzaW9uLW1hdHJpeC9jb25mdXNpb24tbWF0cml4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7SUFDekMsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbmZ1c2lvbi1tYXRyaXgvY29uZnVzaW9uLW1hdHJpeC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRQIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwwLjgpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MCwxNDMsMTg0LDAuOCk7XHJcbn1cclxuLkZQIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsMTQzLDMsMC4zKTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LDIxOSwxMzIsMC44KTtcclxufVxyXG4uVE4ge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDMsNDksMTU1LDAuMyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwxOTgsMjIxLDAuOCk7XHJcbn1cclxuLkZOIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMCwwLDAuMyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDE4NSwxNSwwLjgpO1xyXG59XHJcblxyXG50YWJsZSwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyMDApO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm51bWNlbGwge1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnNpZ25jZWxsIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxufSJdfQ== */"] });
    return ConfusionMatrixComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfusionMatrixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confusion-matrix',
                templateUrl: './confusion-matrix.component.html',
                styleUrls: ['./confusion-matrix.component.css']
            }]
    }], function () { return []; }, { TP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], FP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], TN: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], FN: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/manage-models/manage-models.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/manage-models/manage-models.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageModelsComponent", function() { return ManageModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _manage_models_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-models.service */ "./src/app/manage-models/manage-models.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _builder_builder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../builder/builder.component */ "./src/app/builder/builder.component.ts");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common.functions */ "./src/app/common.functions.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


















var _c0 = function (a0) { return { "disabled": a0 }; };
var ManageModelsComponent = /** @class */ (function () {
    function ManageModelsComponent(manage, commonService, service, model, globals, toastr, modalService, func) {
        this.manage = manage;
        this.commonService = commonService;
        this.service = service;
        this.model = model;
        this.globals = globals;
        this.toastr = toastr;
        this.modalService = modalService;
        this.func = func;
        this.objectKeys = Object.keys;
    }
    ManageModelsComponent.prototype.ngOnInit = function () {
    };
    ManageModelsComponent.prototype.buildModel = function (name, version) {
        var modalRef = this.modalService.open(_builder_builder_component__WEBPACK_IMPORTED_MODULE_7__["BuilderComponent"], { windowClass: 'modalClass' });
        modalRef.componentInstance.name = name;
        modalRef.componentInstance.version = version;
    };
    /**
     * Creates a new model with the given name and informs the user with a toastr
     */
    ManageModelsComponent.prototype.createModel = function () {
        var _this = this;
        var letters = /^[A-Za-z0-9_]+$/;
        if (this.modelName.match(letters)) {
            this.service.createModel(this.modelName).subscribe(function (result) {
                // this.modelName = '';
                _this.model.listModels = {};
                $('#dataTableModels').DataTable().destroy();
                _this.model.name = _this.modelName;
                _this.model.version = 0;
                _this.model.trained = false;
                _this.func.getModelList();
                _this.toastr.success('Model ' + result.modelName, 'CREATED', {
                    timeOut: 4000, positionClass: 'toast-top-right', progressBar: true
                });
            }, function (error) {
                _this.toastr.error(error.error.error, 'ERROR', {
                    timeOut: 4000, positionClass: 'toast-top-right', progressBar: true
                });
            });
        }
        else {
            alert('Invalid name');
        }
    };
    ManageModelsComponent.prototype.deleteModel = function () {
        var _this = this;
        this.service.deleteModel(this.model.name).subscribe(function (result) {
            _this.toastr.success('Model ' + _this.model.name + ' deleted', 'DELETED', {
                timeOut: 4000, positionClass: 'toast-top-right', progressBar: true
            });
            _this.model.listModels = {};
            $('#dataTableModels').DataTable().destroy();
            _this.model.name = undefined;
            _this.model.version = undefined;
            _this.func.getModelList();
        }, function (error) {
            alert('Delete ERROR');
        });
    };
    ManageModelsComponent.prototype.deleteVersion = function () {
        var _this = this;
        this.service.deleteVersion(this.model.name, this.model.version).subscribe(function (result) {
            _this.toastr.success('Model ' + _this.model.name + '.v' + _this.model.version + ' deleted', 'DELETED', {
                timeOut: 4000, positionClass: 'toast-top-right'
            });
            var table = $('#dataTableModels').DataTable();
            table.row('.selected').remove().draw(false);
            table.destroy();
            // $('#dataTableModels').DataTable().destroy();
            _this.model.name = _this.model.name;
            _this.model.version = 0;
            _this.func.getModelList();
        }, function (error) {
            console.log(error);
            _this.toastr.error('Model ' + _this.model.name + '.v' + _this.model.version + ' NOT deleted', 'ERROR', {
                timeOut: 4000, positionClass: 'toast-top-right'
            });
        });
    };
    ManageModelsComponent.prototype.cloneModel = function () {
        var _this = this;
        this.service.cloneModel(this.model.name).subscribe(function (result) {
            _this.toastr.success('Model \'' + result['modelName'] + ' v.' + result['version'] + '\'', 'CREATED SUCCESFULLY', {
                timeOut: 5000, positionClass: 'toast-top-right'
            });
            _this.model.listModels = {};
            $('#dataTableModels').DataTable().destroy();
            _this.model.name = _this.model.name;
            _this.model.version = 0;
            _this.func.getModelList();
        }, function (error) {
            alert('Error cloning');
        });
    };
    ManageModelsComponent.prototype.exportModel = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl_manage + 'model/' + this.model.name + '/export';
        window.open(url);
    };
    ManageModelsComponent.prototype.importModel = function (fileList) {
        var _this = this;
        var file = fileList[0];
        this.manage.file = file;
        this.service.importModel().subscribe(function (result) {
            _this.toastr.success('Model \'' + result.Model + '\' imported', 'IMPORTED SUCCESFULLY', {
                timeOut: 5000, positionClass: 'toast-top-right'
            });
            _this.manage.file = undefined;
            _this.model.listModels = {};
            $('#dataTableModels').DataTable().destroy();
            _this.func.getModelList();
        }, function (error) {
            _this.toastr.error('Model \'' + error.error.Model + '\' already exist', 'ERROR IMPORTING', {
                timeOut: 5000, positionClass: 'toast-top-right'
            });
        });
    };
    ManageModelsComponent.ɵfac = function ManageModelsComponent_Factory(t) { return new (t || ManageModelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Manager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_manage_models_service__WEBPACK_IMPORTED_MODULE_3__["ManageModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_functions__WEBPACK_IMPORTED_MODULE_8__["CommonFunctions"])); };
    ManageModelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageModelsComponent, selectors: [["app-manage-models"]], decls: 73, vars: 19, consts: [["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar", "mt-3", "mb-3", "ml-4"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["type", "button", "data-toggle", "modal", "data-target", "#newModal", 1, "btn", "btn-outline-primary", "btn-lg"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-lg", 3, "ngClass", "click"], ["role", "group", "aria-label", "second group", 1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-outline-success", "btn-lg", 3, "ngClass", "click"], ["for", "manager", 1, "btn", "btn-outline-success", "btn-lg", "mb-0"], ["id", "manager", "type", "file", 2, "display", "none", 3, "change"], ["role", "group", "aria-label", "third group", 1, "btn-group", "mr-2"], ["type", "button", "data-toggle", "modal", "data-target", "#deleteModel", 1, "btn", "btn-outline-danger", "btn-lg", 3, "ngClass"], ["type", "button", "data-toggle", "modal", "data-target", "#deleteVersion", 1, "btn", "btn-outline-danger", "btn-lg", 3, "ngClass"], ["id", "newModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "newModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "newModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Cancel", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "form-inline"], [1, "form-group", "mx-sm-3", "mb-2"], ["for", "model_name"], ["type", "text", "placeholder", "name", 1, "form-control", "ml-2", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["id", "deleteModel", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "id", "action", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["id", "deleteVersion", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"]], template: function ManageModelsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageModelsComponent_Template_button_click_4_listener() { return ctx.buildModel(ctx.model.name, ctx.model.version); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Build");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageModelsComponent_Template_button_click_6_listener() { return ctx.cloneModel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageModelsComponent_Template_button_click_9_listener() { return ctx.exportModel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Export");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ManageModelsComponent_Template_input_change_12_listener($event) { return ctx.importModel($event.target.files); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Import ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete Model ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete Version");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "New Model");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Model name: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageModelsComponent_Template_input_ngModelChange_33_listener($event) { return ctx.modelName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageModelsComponent_Template_button_click_37_listener() { return ctx.createModel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Create");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Are you sure you want to delete this model?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageModelsComponent_Template_button_click_54_listener() { return ctx.deleteModel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Are you sure you want to delete this model version?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageModelsComponent_Template_button_click_71_listener() { return ctx.deleteVersion(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.model.name === undefined || ctx.model.version != "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.model.name === undefined));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.model.name === undefined));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.model.name === undefined || ctx.model.version != "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.model.name === undefined || ctx.model.version == "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delete model '", ctx.model.name, "'");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Delete model '", ctx.model.name, " v.", ctx.model.version, "'");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], styles: ["a[_ngcontent-%COMP%]:hover {\r\n\r\n    background: #E7E7E7;\r\n}\r\n\r\na.active[_ngcontent-%COMP%] {\r\n    background: #EBAB39;\r\n    border-bottom: 1px solid #0076a3;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    background:#22577a;\r\n    color: #f7f9ea;\r\n    border-bottom: 1px solid #0076a3;\r\n}\r\n\r\n.wrap[_ngcontent-%COMP%] {\r\n    cursor:not-allowed;\r\n}\r\n\r\na.disabled[_ngcontent-%COMP%]{\r\n    background:#22577a;\r\n    pointer-events: none;\r\n}\r\n\r\n.actions[_ngcontent-%COMP%] {\r\n    background:#22577a;\r\n    background-color:#22577a;\r\n    color: #f7f9ea;\r\n    border-bottom: 2px solid #0076a3;\r\n}\r\n\r\nbutton.disabled[_ngcontent-%COMP%] {\r\n    cursor: not-allowed;\r\n    pointer-events: none !important;\r\n}\r\n\r\nlabel.disabled[_ngcontent-%COMP%] {\r\n    cursor: not-allowed;\r\n    pointer-events: none !important;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n   min-width: 90px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLW1vZGVscy9tYW5hZ2UtbW9kZWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0dBQ0csMEJBQTBCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLW1vZGVscy9tYW5hZ2UtbW9kZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjRTdFN0U3O1xyXG59XHJcblxyXG5hLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUJBQjM5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDc2YTM7XHJcbn1cclxuYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiMyMjU3N2E7XHJcbiAgICBjb2xvcjogI2Y3ZjllYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3NmEzO1xyXG59XHJcbi53cmFwIHtcclxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcclxufVxyXG5hLmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZDojMjI1NzdhO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQ6IzIyNTc3YTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzIyNTc3YTtcclxuICAgIGNvbG9yOiAjZjdmOWVhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDc2YTM7XHJcbn1cclxuYnV0dG9uLmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbC5kaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgbWluLXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return ManageModelsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageModelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-models',
                templateUrl: './manage-models.component.html',
                styleUrls: ['./manage-models.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Manager"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _manage_models_service__WEBPACK_IMPORTED_MODULE_3__["ManageModelService"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Model"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _common_functions__WEBPACK_IMPORTED_MODULE_8__["CommonFunctions"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manage-models/manage-models.service.ts":
/*!********************************************************!*\
  !*** ./src/app/manage-models/manage-models.service.ts ***!
  \********************************************************/
/*! exports provided: ManageModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageModelService", function() { return ManageModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var ManageModelService = /** @class */ (function () {
    function ManageModelService(http, manager) {
        this.http = http;
        this.manager = manager;
    }
    /**
     * Call to the server to create a new model with the given name
     * @param model Name of the model to add
     */
    ManageModelService.prototype.createModel = function (model) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model;
        return this.http.post(url, null);
    };
    ManageModelService.prototype.deleteModel = function (model) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model;
        return this.http.delete(url);
    };
    ManageModelService.prototype.deleteVersion = function (model, version) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version;
        return this.http.delete(url);
    };
    ManageModelService.prototype.cloneModel = function (model) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model;
        return this.http.put(url, null);
    };
    ManageModelService.prototype.importModel = function () {
        var formData = new FormData();
        formData.append('model', this.manager.file);
        // formData.append('parameters',  this.model.parameters);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/import';
        return this.http.post(url, formData);
    };
    ManageModelService.ɵfac = function ManageModelService_Factory(t) { return new (t || ManageModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Manager"])); };
    ManageModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManageModelService, factory: ManageModelService.ɵfac, providedIn: 'root' });
    return ManageModelService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Manager"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manage-predictions/manage-predictions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/manage-predictions/manage-predictions.component.ts ***!
  \********************************************************************/
/*! exports provided: ManagePredictionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePredictionsComponent", function() { return ManagePredictionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _manage_predictions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-predictions.service */ "./src/app/manage-predictions/manage-predictions.service.ts");
/* harmony import */ var _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../predictor/predictor.component */ "./src/app/predictor/predictor.component.ts");

// import 'jquery';













var ManagePredictionsComponent = /** @class */ (function () {
    function ManagePredictionsComponent(commonService, modalService, toastr, service, prediction) {
        this.commonService = commonService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.prediction = prediction;
    }
    ManagePredictionsComponent.prototype.ngOnInit = function () {
    };
    ManagePredictionsComponent.prototype.newPrediction = function () {
        var modalRef = this.modalService.open(_predictor_predictor_component__WEBPACK_IMPORTED_MODULE_7__["PredictorComponent"], { size: 'lg' });
    };
    ManagePredictionsComponent.prototype.deletePrediction = function () {
        var _this = this;
        this.service.deletePrediction(this.prediction.name).subscribe(function (result) {
            var table = $('#dataTablePredictions').DataTable();
            table.row('.selected').remove().draw(false);
            // $('#dataTablePredictions').DataTable().destroy();
            // $('#dataTablePredictions').DataTable();
            _this.toastr.success('Prediction "' + _this.prediction.name + '" deleted', 'DELETED', {
                timeOut: 4000, positionClass: 'toast-top-right', progressBar: true
            });
            _this.prediction.name = $('#dataTablePredictions tbody tr:first td:first').text();
            _this.prediction.modelName = $('#dataTablePredictions tbody tr:first td:eq(1)').text();
            _this.prediction.modelVersion = $('#dataTablePredictions tbody tr:first td:eq(2)').text();
            _this.prediction.date = $('#dataTablePredictions tbody tr:first td:eq(4)').text();
        }, function (error) {
            _this.toastr.error(error.error.error, 'ERROR', {
                timeOut: 4000, positionClass: 'toast-top-right', progressBar: true
            });
        });
    };
    ManagePredictionsComponent.ɵfac = function ManagePredictionsComponent_Factory(t) { return new (t || ManagePredictionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_manage_predictions_service__WEBPACK_IMPORTED_MODULE_6__["ManagePredictionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"])); };
    ManagePredictionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagePredictionsComponent, selectors: [["app-manage-predictions"]], decls: 22, vars: 0, consts: [[1, "btn-toolbar", "mt-3", "mb-3", "ml-4"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-lg", "mr-2", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#deletePrediction", 1, "btn", "btn-outline-danger", "btn-lg"], ["id", "deletePrediction", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Cancel", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "id", "action", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function ManagePredictionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePredictionsComponent_Template_button_click_1_listener() { return ctx.newPrediction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete Predctions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Are you sure you want to delete this prediction?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePredictionsComponent_Template_button_click_20_listener() { return ctx.deletePrediction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1wcmVkaWN0aW9ucy9tYW5hZ2UtcHJlZGljdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
    return ManagePredictionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagePredictionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-predictions',
                templateUrl: './manage-predictions.component.html',
                styleUrls: ['./manage-predictions.component.css']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _manage_predictions_service__WEBPACK_IMPORTED_MODULE_6__["ManagePredictionsService"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manage-predictions/manage-predictions.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/manage-predictions/manage-predictions.service.ts ***!
  \******************************************************************/
/*! exports provided: ManagePredictionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePredictionsService", function() { return ManagePredictionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var ManagePredictionsService = /** @class */ (function () {
    function ManagePredictionsService(http) {
        this.http = http;
    }
    ManagePredictionsService.prototype.deletePrediction = function (predictionName) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'prediction/' + predictionName;
        return this.http.delete(url);
    };
    ManagePredictionsService.ɵfac = function ManagePredictionsService_Factory(t) { return new (t || ManagePredictionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ManagePredictionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManagePredictionsService, factory: ManagePredictionsService.ɵfac, providedIn: 'root' });
    return ManagePredictionsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagePredictionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model-documentation/model-documentation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/model-documentation/model-documentation.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModelDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDocumentationComponent", function() { return ModelDocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _model_documentation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model-documentation.service */ "./src/app/model-documentation/model-documentation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");













function ModelDocumentationComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.modelDocumentation[key_r6].value, "");
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.modelDocumentation[key_r6].value[key2_r14].value, "");
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.modelDocumentation[key_r6].value[key2_r14], "");
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r17.modelDocumentation[key_r6].value[key2_r14].description, "");
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " na");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_3_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_4_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_5_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_td_6_Template, 2, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r14 = ctx.$implicit;
    var key_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.cleanStr(key2_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.isObject(ctx_r13.modelDocumentation[key_r6].value[key2_r14]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.isObject(ctx_r13.modelDocumentation[key_r6].value[key2_r14]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.isObject(ctx_r13.modelDocumentation[key_r6].value[key2_r14]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.isObject(ctx_r13.modelDocumentation[key_r6].value[key2_r14]));
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_tr_3_Template, 7, 5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.objectKeys(ctx_r10.modelDocumentation[key_r6].value));
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td");
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_1_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_2_Template, 4, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_22_ng_container_3_td_3_Template, 1, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var key_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.modelDocumentation[key_r6].value && !ctx_r7.isObject(ctx_r7.modelDocumentation[key_r6].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.modelDocumentation[key_r6].value && ctx_r7.isObject(ctx_r7.modelDocumentation[key_r6].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.modelDocumentation[key_r6].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.modelDocumentation[key_r6].description);
} }
function ModelDocumentationComponent_div_0_tr_22_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ModelDocumentationComponent_div_0_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_22_ng_container_3_Template, 6, 4, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModelDocumentationComponent_div_0_tr_22_ng_container_4_Template, 3, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r6 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.cleanStr(key_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.objectKeys(ctx_r3.modelDocumentation).includes(key_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.objectKeys(ctx_r3.modelDocumentation).includes(key_r6));
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r31.modelDocumentation[key_r28].value, "");
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r37.modelDocumentation[key_r28].value[key2_r36].value, "");
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r38.modelDocumentation[key_r28].value[key2_r36], "");
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r39.modelDocumentation[key_r28].value[key2_r36].description, "");
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " na");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_3_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_4_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_5_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_td_6_Template, 2, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r36 = ctx.$implicit;
    var key_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r35.cleanStr(key2_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.isObject(ctx_r35.modelDocumentation[key_r28].value[key2_r36]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.isObject(ctx_r35.modelDocumentation[key_r28].value[key2_r36]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.isObject(ctx_r35.modelDocumentation[key_r28].value[key2_r36]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.isObject(ctx_r35.modelDocumentation[key_r28].value[key2_r36]));
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_tr_3_Template, 7, 5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.objectKeys(ctx_r32.modelDocumentation[key_r28].value));
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td");
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_1_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_2_Template, 4, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_41_ng_container_3_td_3_Template, 1, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var key_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.modelDocumentation[key_r28].value && !ctx_r29.isObject(ctx_r29.modelDocumentation[key_r28].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.modelDocumentation[key_r28].value && ctx_r29.isObject(ctx_r29.modelDocumentation[key_r28].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r29.modelDocumentation[key_r28].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.modelDocumentation[key_r28].description);
} }
function ModelDocumentationComponent_div_0_tr_41_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ModelDocumentationComponent_div_0_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_41_ng_container_3_Template, 6, 4, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModelDocumentationComponent_div_0_tr_41_ng_container_4_Template, 3, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r28 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.cleanStr(key_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.objectKeys(ctx_r4.modelDocumentation).includes(key_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.objectKeys(ctx_r4.modelDocumentation).includes(key_r28));
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r53.modelDocumentation[key_r50].value, "");
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r59.modelDocumentation[key_r50].value[key2_r58].value, "");
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r60.modelDocumentation[key_r50].value[key2_r58], "");
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r61.modelDocumentation[key_r50].value[key2_r58].description, "");
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " na");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_3_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_4_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_5_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_td_6_Template, 2, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r58 = ctx.$implicit;
    var key_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r57.cleanStr(key2_r58));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.isObject(ctx_r57.modelDocumentation[key_r50].value[key2_r58]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r57.isObject(ctx_r57.modelDocumentation[key_r50].value[key2_r58]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.isObject(ctx_r57.modelDocumentation[key_r50].value[key2_r58]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r57.isObject(ctx_r57.modelDocumentation[key_r50].value[key2_r58]));
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_tr_3_Template, 7, 5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r54.objectKeys(ctx_r54.modelDocumentation[key_r50].value));
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td");
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_1_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_2_Template, 4, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_60_ng_container_3_td_3_Template, 1, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var key_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r51.modelDocumentation[key_r50].value && !ctx_r51.isObject(ctx_r51.modelDocumentation[key_r50].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r51.modelDocumentation[key_r50].value && ctx_r51.isObject(ctx_r51.modelDocumentation[key_r50].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r51.modelDocumentation[key_r50].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r51.modelDocumentation[key_r50].description);
} }
function ModelDocumentationComponent_div_0_tr_60_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ModelDocumentationComponent_div_0_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_0_tr_60_ng_container_3_Template, 6, 4, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModelDocumentationComponent_div_0_tr_60_ng_container_4_Template, 3, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r50 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.cleanStr(key_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.objectKeys(ctx_r5.modelDocumentation).includes(key_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.objectKeys(ctx_r5.modelDocumentation).includes(key_r50));
} }
function ModelDocumentationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModelDocumentationComponent_div_0_div_2_Template, 4, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " General model information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModelDocumentationComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r72.editSection(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ModelDocumentationComponent_div_0_tr_22_Template, 5, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Algorithm and software ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModelDocumentationComponent_div_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r74.editSection(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ModelDocumentationComponent_div_0_tr_41_Template, 5, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Other information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModelDocumentationComponent_div_0_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.editSection(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ModelDocumentationComponent_div_0_tr_60_Template, 5, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.documentationVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.docLevel[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.docLevel[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.docLevel[2]);
} }
function ModelDocumentationComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModelDocumentationComponent_div_11_div_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r79.modelDocumentation[key_r76].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r77.cleanStr(key_r76));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r77.cleanStr(key_r76));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r77.modelDocumentation[key_r76].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r77.modelDocumentation[key_r76].description);
} }
function ModelDocumentationComponent_div_11_div_2_div_7_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModelDocumentationComponent_div_11_div_2_div_7_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); var key2_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.modelDocumentation[key_r76].value[key2_r84].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r85.cleanStr(key_r76 + " : " + key2_r84));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r85.cleanStr(key2_r84));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r85.modelDocumentation[key_r76].value[key2_r84].value);
} }
function ModelDocumentationComponent_div_11_div_2_div_7_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModelDocumentationComponent_div_11_div_2_div_7_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); var key2_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r95.modelDocumentation[key_r76].value[key2_r84] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r86.cleanStr(key_r76 + " : " + key2_r84));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r86.cleanStr(key2_r84));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r86.modelDocumentation[key_r76].value[key2_r84]);
} }
function ModelDocumentationComponent_div_11_div_2_div_7_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r87.modelDocumentation[key_r76].value[key2_r84].description, "");
} }
function ModelDocumentationComponent_div_11_div_2_div_7_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " na");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModelDocumentationComponent_div_11_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModelDocumentationComponent_div_11_div_2_div_7_input_2_Template, 1, 3, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModelDocumentationComponent_div_11_div_2_div_7_input_3_Template, 1, 3, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModelDocumentationComponent_div_11_div_2_div_7_label_4_Template, 2, 1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModelDocumentationComponent_div_11_div_2_div_7_label_5_Template, 2, 0, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key2_r84 = ctx.$implicit;
    var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r83.isObject(ctx_r83.modelDocumentation[key_r76].value[key2_r84]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r83.isObject(ctx_r83.modelDocumentation[key_r76].value[key2_r84]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r83.isObject(ctx_r83.modelDocumentation[key_r76].value[key2_r84]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r83.isObject(ctx_r83.modelDocumentation[key_r76].value[key2_r84]));
} }
function ModelDocumentationComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ModelDocumentationComponent_div_11_div_2_div_7_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r78.cleanStr(key_r76));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r78.objectKeys(ctx_r78.modelDocumentation[key_r76].value));
} }
function ModelDocumentationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModelDocumentationComponent_div_11_div_1_Template, 5, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModelDocumentationComponent_div_11_div_2_Template, 8, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r76 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isObject(ctx_r1.modelDocumentation[key_r76].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isObject(ctx_r1.modelDocumentation[key_r76].value));
} }
var ModelDocumentationComponent = /** @class */ (function () {
    function ModelDocumentationComponent(model, service, toastr, commonService) {
        this.model = model;
        this.service = service;
        this.toastr = toastr;
        this.commonService = commonService;
        this.modelDocumentation = undefined;
        this.documentationVisible = false;
        this.levelLabels = ['General model information', 'Algorithms and software', 'Other information'];
        this.docLevel = [['ID', 'Version', 'Contact', 'Institution', 'Date', 'Endpoint',
                'Endpoint_units', 'Interpretation', 'Dependent_variable', 'Species',
                'Limits_applicability', 'Experimental_protocol', 'Model_availability',
                'Data_info'],
            ['Algorithm', 'Software', 'Descriptors', 'Algorithm_settings',
                'AD_method', 'AD_parameters', 'Goodness_of_fit_statistics',
                'Internal_validation_1', 'Internal_validation_2', 'External_validation',
                'Comments'],
            ['Other_related_models', 'Date_of_QMRF', 'Date_of_QMRF_updates',
                'QMRF_updates', 'References', 'QMRF_same_models', 'Comment_on_the_endpoint',
                'Endpoint_data_quality_and_variability', 'Descriptor_selection']
        ];
        this.editLevel = [['ID', 'Version', 'Contact', 'Institution', 'Date', 'Endpoint',
                'Endpoint_units', 'Interpretation', 'Dependent_variable', 'Species',
                'Limits_applicability', 'Experimental_protocol', 'Model_availability',
                'Data_info'],
            ['Algorithm', 'Software', 'Descriptors', 'AD_method', 'AD_parameters',
                'Internal_validation_2', 'External_validation',
                'Comments'],
            ['Other_related_models', 'Date_of_QMRF', 'Date_of_QMRF_updates',
                'QMRF_updates', 'References', 'QMRF_same_models', 'Comment_on_the_endpoint',
                'Endpoint_data_quality_and_variability', 'Descriptor_selection']
        ];
        this.objectKeys = Object.keys;
    }
    ModelDocumentationComponent.prototype.ngOnChanges = function () {
        this.getDocumentation();
    };
    ModelDocumentationComponent.prototype.isObject = function (val) {
        if (val === null) {
            return false;
        }
        return typeof val === 'object';
    };
    ModelDocumentationComponent.prototype.cleanStr = function (str) {
        return str.replace(/_/g, ' ');
    };
    ModelDocumentationComponent.prototype.isDict = function (v) {
        return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
    };
    ModelDocumentationComponent.prototype.editSection = function (val) {
        this.sectionActive = val;
        // deep copy modelDocumentation. In case of cancel we will restore it
        this.modelDocumentationBackup = JSON.parse(JSON.stringify(this.modelDocumentation));
    };
    ModelDocumentationComponent.prototype.cancelInput = function () {
        this.modelDocumentation = JSON.parse(JSON.stringify(this.modelDocumentationBackup));
    };
    ModelDocumentationComponent.prototype.applyInput = function () {
        var _this = this;
        var delta = JSON.stringify(this.genDelta(this.modelDocumentation));
        // console.log (delta)
        this.service.updateDocumentation(this.model.name, this.model.version, delta).subscribe(function (result) {
            _this.toastr.success('Model ' + _this.model.name + '.v' + _this.model.version, 'DOCUMENTATION UPDATED', {
                timeOut: 5000, positionClass: 'toast-top-right'
            });
        }, function (error) {
            alert('Error updating documentation');
        });
    };
    ModelDocumentationComponent.prototype.genDelta = function (dict_in) {
        var e_1, _a, e_2, _b;
        var dict_aux = {};
        var dict_out = {};
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(dict_in)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                var val = dict_in[key]['value'];
                if (!this.isDict(val)) {
                    dict_out[key] = val;
                }
                else {
                    dict_aux = {};
                    try {
                        for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(val))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var key2 = _f.value;
                            if (!this.isDict(val[key2])) {
                                dict_aux[key2] = val[key2];
                            }
                            else {
                                dict_aux[key2] = val[key2]['value'];
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    dict_out[key] = dict_aux;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return dict_out;
    };
    ModelDocumentationComponent.prototype.getDocumentation = function () {
        var _this = this;
        this.documentationVisible = false;
        this.commonService.getDocumentation(this.modelName, this.modelVersion).subscribe(function (result) {
            _this.modelDocumentation = result;
            // for (var key in this.modelDocumentation) {
            //       console.log(key, this.modelDocumentation[key]);
            //   }
        }, function (error) {
            _this.modelDocumentation = undefined;
        });
        this.documentationVisible = true;
    };
    ModelDocumentationComponent.ɵfac = function ModelDocumentationComponent_Factory(t) { return new (t || ModelDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_model_documentation_service__WEBPACK_IMPORTED_MODULE_5__["ModelDocumentationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
    ModelDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModelDocumentationComponent, selectors: [["app-model-documentation"]], inputs: { modelName: "modelName", modelVersion: "modelVersion" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 3, consts: [["class", "row", 4, "ngIf"], ["id", "docSection", "tabindex", "-1", "role", "dialog", "aria-labelledby", "docSectionLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["id", "docSectionLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Cancel", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "row"], [1, "card", "w-100", 2, "width", "18rem"], ["id", "overlay", 4, "ngIf"], ["id", "docAccordion", 1, "accordion"], [1, "card"], ["id", "headingOneDoc", "data-toggle", "collapse", "data-target", "#collapseOneDoc", "aria-expanded", "false", "aria-controls", "collapseOneDoc", 1, "card-header", "collapsed"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-link", "pt-0", "pb-0", "float-right"], ["id", "collapseOneDoc", "aria-labelledby", "headingOneDoc", "data-parent", "#docAccordion", 1, "collapse"], [1, "card-body", "pt-0", "pb-0", "pl-0", "pr-0"], [1, "table", "documentation"], [2, "vertical-align", "middle"], [2, "width", "25%"], ["type", "button", "data-toggle", "modal", "data-target", "#docSection", 1, "btn", "btn-sm", "btn-outline-primary", "ml-2", 3, "click"], [2, "width", "60%"], [1, "text-right", 2, "width", "15%"], ["id", "headingTwoDoc", "data-toggle", "collapse", "data-target", "#collapseTwoDoc", "aria-expanded", "false", "aria-controls", "collapseTwoDoc", 1, "card-header", "collapsed"], ["id", "collapseTwoDoc", "aria-labelledby", "headingTwoDoc", "data-parent", "#docAccordion", 1, "collapse"], ["id", "headingThreeDoc", "data-toggle", "collapse", "data-target", "#collapseThreeDoc", "aria-expanded", "false", "aria-controls", "collapseThreeDoc", 1, "card-header", "collapsed"], ["id", "collapseThreeDoc", "aria-labelledby", "headingThreeDoc", "data-parent", "#docAccordion", 1, "collapse"], ["id", "overlay"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "10rem", "height", "10rem"], [1, "sr-only"], [4, "ngIf"], ["class", "doc-value", 4, "ngIf"], [1, "text-right", "comment"], [1, "doc-value"], ["id", "documentationTable", 1, "table"], ["style", "width: 50%", "class", "doc-value", 4, "ngIf"], ["style", "width: 25%", "class", "text-right comment", 4, "ngIf"], [1, "doc-value", 2, "width", "50%"], [1, "text-right", "comment", 2, "width", "25%"], ["class", "form-group row", 4, "ngIf"], [1, "form-group", "row"], [1, "col-8"], ["data-toggle", "tooltip", "data-placement", "top", "id", "#key", "type", "text-area", 1, "form-control", "doc-value", 3, "ngModel", "title", "placeholder", "ngModelChange"], ["for", "key", 1, "col-4", "text-muted", "small", "pl-0"], [1, "col-12", "col-sm-12"], [1, "col-2", "col-sm-2"], ["for", "key", 1, "col-2", "small", "pl-0"], [1, "col-8", "col-sm-10"], ["class", "col-sm-7 form-control doc-value-inner", "data-toggle", "tooltip", "data-placement", "top", "id", "key2", "type", "text-area", 3, "ngModel", "title", "placeholder", "ngModelChange", 4, "ngIf"], ["for", "key", "class", "col-sm-3 text-muted small", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "id", "key2", "type", "text-area", 1, "col-sm-7", "form-control", "doc-value-inner", 3, "ngModel", "title", "placeholder", "ngModelChange"], ["for", "key", 1, "col-sm-3", "text-muted", "small"]], template: function ModelDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModelDocumentationComponent_div_0_Template, 61, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ModelDocumentationComponent_div_11_Template, 3, 2, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModelDocumentationComponent_Template_button_click_13_listener() { return ctx.cancelInput(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModelDocumentationComponent_Template_button_click_15_listener() { return ctx.applyInput(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Apply");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelDocumentation !== undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Documentation editor for section ", ctx.levelLabels[ctx.sectionActive], "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.editLevel[ctx.sectionActive]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".card-header[data-toggle=\"collapse\"] button:after {\r\n  display: inline-block;\r\n  font: normal normal normal 10px/1 FontAwesome;\r\n  font-size: 25px;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  content: \"\\f056\";\r\n  align-content: flex-end;\r\n  transform: rotate(0deg) ;\r\n  transition: all linear 0.25s;\r\n  color: #e59300;\r\n}   \r\n  .card-header[data-toggle=\"collapse\"].collapsed button:after {\r\n  transform: rotate(90deg) ;\r\n  content: \"\\f055\";\r\n}   \r\na[_ngcontent-%COMP%]{\r\n  text-align: end;\r\n}   \r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding-top: 1px;\r\n    padding-bottom: 1px;\r\n}   \r\n.docAccordion[_ngcontent-%COMP%] {\r\n  \r\n  overflow: auto;\r\n}   \r\n.comment[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}   \r\n.doc-value[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n  color: #0076a3;\r\n}   \r\n.doc-value-inner[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  color: #0076a3;\r\n}   \r\n.documentation[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n}   \r\n   \r\n.spinner-border[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 1031;\r\n  top: 25%; \r\n  right: 45%; \r\n}   \r\n#overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #FAFAFA;\r\n  opacity: 0.7;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n}   \r\n.card-body[_ngcontent-%COMP%] {\r\n  border-width: 0px;\r\n}   \r\n.card[_ngcontent-%COMP%] {\r\n  border-width: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwtZG9jdW1lbnRhdGlvbi9tb2RlbC1kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUSxFQUFFLHNDQUFzQztFQUNoRCxVQUFVLEVBQUUscUNBQXFDO0FBQ25EO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLWRvY3VtZW50YXRpb24vbW9kZWwtZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYXJkLWhlYWRlcltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIGJ1dHRvbjphZnRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEwcHgvMSBGb250QXdlc29tZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBjb250ZW50OiBcIlxcZjA1NlwiO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIDtcclxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMjVzO1xyXG4gIGNvbG9yOiAjZTU5MzAwO1xyXG59ICAgXHJcbjo6bmctZGVlcCAuY2FyZC1oZWFkZXJbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXS5jb2xsYXBzZWQgYnV0dG9uOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDU1XCI7XHJcbn1cclxuYXtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcbiAgXHJcbi5kb2NBY2NvcmRpb24ge1xyXG4gIC8qIHNjcm9sbC1iZWhhdmlvcjogYXV0bzsgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uZG9jLXZhbHVlIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgY29sb3I6ICMwMDc2YTM7XHJcbn1cclxuXHJcbi5kb2MtdmFsdWUtaW5uZXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogIzAwNzZhMztcclxufVxyXG5cclxuLmRvY3VtZW50YXRpb24ge1xyXG4gIC8qIHRhYmxlLWxheW91dDogZml4ZWQ7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIHJvdGF0aW5nIGNpcmNsZSB0byBzaG93IHByb2dyZXNzICovXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMzE7XHJcbiAgdG9wOiAyNSU7IC8qIHdoZXJlIC4uLiBpcyB0aGUgZWxlbWVudCdzIGhlaWdodCAqL1xyXG4gIHJpZ2h0OiA0NSU7IC8qIHdoZXJlIC4uLiBpcyB0aGUgZWxlbWVudCdzIHdpZHRoICovXHJcbn1cclxuXHJcbiNvdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLypkaXNwbGF5OiBub25lOyovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcbiJdfQ== */"] });
    return ModelDocumentationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModelDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-model-documentation',
                templateUrl: './model-documentation.component.html',
                styleUrls: ['./model-documentation.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }, { type: _model_documentation_service__WEBPACK_IMPORTED_MODULE_5__["ModelDocumentationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, { modelName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modelVersion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/model-documentation/model-documentation.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/model-documentation/model-documentation.service.ts ***!
  \********************************************************************/
/*! exports provided: ModelDocumentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDocumentationService", function() { return ModelDocumentationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var ModelDocumentationService = /** @class */ (function () {
    function ModelDocumentationService(http) {
        this.http = http;
    }
    ModelDocumentationService.prototype.updateDocumentation = function (model, version, doc) {
        var formData = new FormData();
        formData.append('documentation', doc);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/documentation';
        return this.http.post(url, formData);
    };
    ModelDocumentationService.ɵfac = function ModelDocumentationService_Factory(t) { return new (t || ModelDocumentationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ModelDocumentationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelDocumentationService, factory: ModelDocumentationService.ɵfac, providedIn: 'root' });
    return ModelDocumentationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelDocumentationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model-list/model-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/model-list/model-list.component.ts ***!
  \****************************************************/
/*! exports provided: ModelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelListComponent", function() { return ModelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _model_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-list.service */ "./src/app/model-list/model-list.service.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.functions */ "./src/app/common.functions.ts");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _manage_models_manage_models_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manage-models/manage-models.component */ "./src/app/manage-models/manage-models.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");











function ModelListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "selected": a0, "version": a1 }; };
var _c1 = function (a0, a1, a2, a3) { return { "fa-grip-lines": a0, "fa-circle": a1, "fa-times": a2, "faa-flash animated": a3 }; };
var _c2 = function (a0) { return { "color": a0 }; };
function ModelListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelListComponent_tr_21_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var key_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectModel(ctx_r3.model.listModels[key_r2].name, ctx_r3.model.listModels[key_r2].version, ctx_r3.model.listModels[key_r2].trained, ctx_r3.model.listModels[key_r2].type, ctx_r3.model.listModels[key_r2].quantitative, ctx_r3.model.listModels[key_r2].conformal, ctx_r3.model.listModels[key_r2].ensemble, ctx_r3.model.listModels[key_r2].error); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx_r1.model.listModels[key_r2].name === ctx_r1.model.name && ctx_r1.model.listModels[key_r2].version === ctx_r1.model.version, ctx_r1.model.listModels[key_r2].version > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](11, _c1, ctx_r1.model.listModels[key_r2].type.indexOf("qualitative") > 0 - 1 || ctx_r1.model.listModels[key_r2].type.indexOf("majority") > 0 - 1, ctx_r1.model.listModels[key_r2].type.indexOf("quantitative") > 0 - 1 || ctx_r1.model.listModels[key_r2].type.indexOf("mean") > 0 - 1 || ctx_r1.model.listModels[key_r2].type.indexOf("matrix") > 0 - 1 || ctx_r1.model.listModels[key_r2].type.indexOf("median") > 0 - 1, ctx_r1.model.listModels[key_r2].type == "-", ctx_r1.model.trainig_models.includes(ctx_r1.model.listModels[key_r2].name + "-" + ctx_r1.model.listModels[key_r2].version)))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r1.model.trainig_models.includes(ctx_r1.model.listModels[key_r2].name + "-" + ctx_r1.model.listModels[key_r2].version) ? "#E69400" : ctx_r1.model.listModels[key_r2].trained ? "#51cf66" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.listModels[key_r2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.listModels[key_r2].version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.listModels[key_r2].numMols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.listModels[key_r2].variables);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.listModels[key_r2].type);
} }
var ModelListComponent = /** @class */ (function () {
    function ModelListComponent(service, model, globals, prediction, func) {
        this.service = service;
        this.model = model;
        this.globals = globals;
        this.prediction = prediction;
        this.func = func;
        this.objectKeys = Object.keys;
    }
    ModelListComponent.prototype.ngOnInit = function () {
        this.prediction.name = undefined;
        this.model.name = undefined;
        this.model.version = undefined;
        this.func.getModelList();
    };
    ModelListComponent.prototype.selectModel = function (name, version, trained, type, quantitative, conformal, ensemble, error) {
        this.func.selectModel(name, version, trained, type, quantitative, conformal, ensemble, error);
    };
    ModelListComponent.ɵfac = function ModelListComponent_Factory(t) { return new (t || ModelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_list_service__WEBPACK_IMPORTED_MODULE_1__["ModelListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_functions__WEBPACK_IMPORTED_MODULE_3__["CommonFunctions"])); };
    ModelListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelListComponent, selectors: [["app-model-list"]], decls: 22, vars: 3, consts: [[1, "my-0"], ["class", "text-center spinner-table", 4, "ngIf"], [1, "ml-3", "mr-3", 3, "hidden"], [1, "col-12", "scrolltable"], ["id", "dataTableModels", 1, "table"], [1, "text-center", 2, "width", "5%"], [2, "width", "35%"], [2, "width", "10%"], [2, "width", "12.5%"], [2, "width", "25%"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "spinner-table"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "10rem", "height", "10rem"], [1, "sr-only"], [3, "ngClass", "click"], [1, "text-center"], ["aria-hidden", "true", 1, "fas", 3, "ngClass", "ngStyle"], [1, "text-truncate", "iffyTip", "hideText"], [1, "text-capitalize", "text-truncate", "iffyTip", "hideText"]], template: function ModelListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-manage-models");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModelListComponent_div_2_Template, 4, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Version");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#Molecules");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "#Variables");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "3 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ModelListComponent_tr_21_Template, 13, 18, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.globals.tableModelVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.globals.tableModelVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.model.listModels).sort());
        } }, directives: [_manage_models_manage_models_component__WEBPACK_IMPORTED_MODULE_5__["ManageModelsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["i[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n}\r\n.table[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    background: white;\r\n    color: #22577A;\r\n    \r\n    width: 100%;\r\n}\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    padding-left: 1px;\r\n    padding-right: 1px;\r\n    color:#0076a3;\r\n}\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    font-family: 'Barlow Semi Condensed', sans-serif;\r\n    border-bottom: 1px solid #B8DCED;\r\n    vertical-align: middle;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\ntr.selected[_ngcontent-%COMP%] {\r\n    background: #f7f9ea;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background: #f7f9ea;\r\n}\r\n.model-content[_ngcontent-%COMP%] {\r\n    max-width: 350px;\r\n    max-height: 350px;\r\n}\r\n.scrolltable[_ngcontent-%COMP%]{\r\n    max-height: 90vh;\r\n    overflow: auto;\r\n}\r\n.spinner-table[_ngcontent-%COMP%] {\r\n    position: absolute; \r\n    right: 45%; \r\n    top: 30%; \r\n    z-index: 1031;\r\n}\r\n.iffyTip[_ngcontent-%COMP%] {\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  text-overflow:ellipsis;\r\n}\r\n.hideText[_ngcontent-%COMP%]{\r\nmax-width:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwtbGlzdC9tb2RlbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtBQUNBLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLWxpc3QvbW9kZWwtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMjI1NzdBO1xyXG4gICAgLyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50YWJsZSB0aHtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gICAgY29sb3I6IzAwNzZhMztcclxufVxyXG4udGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOERDRUQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50ci5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xyXG59XHJcbi50YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xyXG59XHJcblxyXG4ubW9kZWwtY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbn1cclxuLnNjcm9sbHRhYmxle1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc3Bpbm5lci10YWJsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgcmlnaHQ6IDQ1JTsgXHJcbiAgICB0b3A6IDMwJTsgXHJcbiAgICB6LWluZGV4OiAxMDMxO1xyXG59XHJcblxyXG4uaWZmeVRpcCB7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG59XHJcbi5oaWRlVGV4dHtcclxubWF4LXdpZHRoOjIwMHB4O1xyXG59Il19 */"] });
    return ModelListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-model-list',
                templateUrl: './model-list.component.html',
                styleUrls: ['./model-list.component.css']
            }]
    }], function () { return [{ type: _model_list_service__WEBPACK_IMPORTED_MODULE_1__["ModelListService"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"] }, { type: _common_functions__WEBPACK_IMPORTED_MODULE_3__["CommonFunctions"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model-list/model-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/model-list/model-list.service.ts ***!
  \**************************************************/
/*! exports provided: ModelListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelListService", function() { return ModelListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




// import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
var ModelListService = /** @class */ (function () {
    function ModelListService(http) {
        this.http = http;
    }
    ModelListService.ɵfac = function ModelListService_Factory(t) { return new (t || ModelListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ModelListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelListService, factory: ModelListService.ɵfac, providedIn: 'root' });
    return ModelListService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/prediction-list/prediction-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/prediction-list/prediction-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PredictionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionListComponent", function() { return PredictionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.functions */ "./src/app/common.functions.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _manage_predictions_manage_predictions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manage-predictions/manage-predictions.component */ "./src/app/manage-predictions/manage-predictions.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function PredictionListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PredictionListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r3 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prediction.predicting[key_r3][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prediction.predicting[key_r3][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.prediction.predicting[key_r3][2].substring(ctx_r1.prediction.predicting[key_r3][2].lastIndexOf("/") + 1));
} }
var _c0 = function (a0) { return { "selected": a0 }; };
function PredictionListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictionListComponent_tr_20_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var info_r4 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectPrediction(info_r4[0], info_r4[1], info_r4[2], info_r4[3]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var info_r4 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r2.prediction.name === info_r4[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r4[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r4[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r4[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r4[4].substring(info_r4[4].lastIndexOf("/") + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r4[3]);
} }
var PredictionListComponent = /** @class */ (function () {
    function PredictionListComponent(func, globals, prediction, model) {
        this.func = func;
        this.globals = globals;
        this.prediction = prediction;
        this.model = model;
        this.objectKeys = Object.keys;
    }
    PredictionListComponent.prototype.ngOnInit = function () {
        this.prediction.name = undefined;
        this.model.name = undefined;
        this.model.version = undefined;
        this.model.trained = false;
        this.func.getPredictionList();
    };
    PredictionListComponent.prototype.selectPrediction = function (name, modelName, modelVersion, date) {
        this.prediction.name = name;
        this.prediction.modelName = modelName;
        this.prediction.modelVersion = modelVersion;
        this.prediction.date = date;
    };
    PredictionListComponent.ɵfac = function PredictionListComponent_Factory(t) { return new (t || PredictionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_functions__WEBPACK_IMPORTED_MODULE_1__["CommonFunctions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"])); };
    PredictionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictionListComponent, selectors: [["app-prediction-list"]], decls: 21, vars: 4, consts: [[1, "my-0"], ["class", "text-center spinner-table", 4, "ngIf"], [1, "ml-3", "mr-3", 3, "hidden"], [1, "col-12", "scrolltable"], ["id", "dataTablePredictions", 1, "table"], [2, "width", "40%"], [2, "width", "5%"], [2, "width", "20%"], [2, "width", "30%"], ["class", "blink", 4, "ngFor", "ngForOf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "spinner-table"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "10rem", "height", "10rem"], [1, "sr-only"], [1, "blink"], [3, "ngClass", "click"], [1, "text-truncate", "iffyTip", "hideText"]], template: function PredictionListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-manage-predictions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PredictionListComponent_div_2_Template, 4, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Model");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ver");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PredictionListComponent_tr_19_Template, 11, 4, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PredictionListComponent_tr_20_Template, 11, 8, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.globals.tablePredictionVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.globals.tablePredictionVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.prediction.predicting));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prediction.predictions);
        } }, directives: [_manage_predictions_manage_predictions_component__WEBPACK_IMPORTED_MODULE_4__["ManagePredictionsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["i[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n}\r\n.table[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    background: white;\r\n    color: #22577A; \r\n    \r\n    width: 100%;\r\n}\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    padding-left: 1px;\r\n    padding-right: 1px;\r\n    color:#0076a3;\r\n}\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    font-family: 'Barlow Semi Condensed', sans-serif;\r\n    border-bottom: 1px solid #B8DCED;\r\n    vertical-align: middle;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\ntr.selected[_ngcontent-%COMP%] {\r\n    background: #f7f9ea;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background: #f7f9ea;\r\n}\r\n.blink[_ngcontent-%COMP%] {\r\n    -webkit-animation: blinker 0.6s linear infinite;\r\n            animation: blinker 0.6s linear infinite;\r\n}\r\n@-webkit-keyframes blinker {  \r\n    100% { opacity: 0; }\r\n}\r\n@keyframes blinker {  \r\n    100% { opacity: 0; }\r\n}\r\n\r\n.scrolltable[_ngcontent-%COMP%]{\r\n    max-height: 90vh;\r\n    overflow: auto;\r\n}\r\n.spinner-table[_ngcontent-%COMP%] {\r\n    position: absolute; \r\n    right: 45%; \r\n    top: 30%; \r\n    z-index: 1031;\r\n}\r\n.iffyTip[_ngcontent-%COMP%] {\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  text-overflow:ellipsis;\r\n}\r\n.hideText[_ngcontent-%COMP%]{\r\nmax-width:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbi1saXN0L3ByZWRpY3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksK0NBQXVDO1lBQXZDLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksT0FBTyxVQUFVLEVBQUU7QUFDdkI7QUFGQTtJQUNJLE9BQU8sVUFBVSxFQUFFO0FBQ3ZCO0FBRUE7OztHQUdHO0FBQ0g7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUVBOzs7Ozs7Ozs7Ozs7R0FZRztBQUVELFdBQVc7QUFDWDs7O0tBR0c7QUFFTDs7O0lBR0kiLCJmaWxlIjoic3JjL2FwcC9wcmVkaWN0aW9uLWxpc3QvcHJlZGljdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMyMjU3N0E7IFxyXG4gICAgLyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50YWJsZSB0aHtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gICAgY29sb3I6IzAwNzZhMztcclxufVxyXG4udGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOERDRUQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50ci5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xyXG59XHJcbi50YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xyXG59XHJcblxyXG4uYmxpbmsge1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDAuNnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmtlciB7ICBcclxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuXHJcbi8qIC5tb2RlbC1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxufSAqL1xyXG4uc2Nyb2xsdGFibGV7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zcGlubmVyLXRhYmxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICByaWdodDogNDUlOyBcclxuICAgIHRvcDogMzAlOyBcclxuICAgIHotaW5kZXg6IDEwMzE7XHJcbn1cclxuXHJcbi5pZmZ5VGlwIHtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbn1cclxuLmhpZGVUZXh0e1xyXG5tYXgtd2lkdGg6MjAwcHg7XHJcbn1cclxuXHJcbi8qIC5sb2FkaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMCAwIDAgMHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2U2OTAxYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjQjhEQ0VEO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufSAqL1xyXG5cclxuICAvKiBTYWZhcmkgKi9cclxuICAvKiBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9ICovXHJcblxyXG4vKiBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufSAgKi9cclxuIl19 */"] });
    return PredictionListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PredictionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prediction-list',
                templateUrl: './prediction-list.component.html',
                styleUrls: ['./prediction-list.component.css']
            }]
    }], function () { return [{ type: _common_functions__WEBPACK_IMPORTED_MODULE_1__["CommonFunctions"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }]; }, null); })();


/***/ }),

/***/ "./src/app/prediction/prediction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prediction/prediction.component.ts ***!
  \****************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smiles-drawer */ "./node_modules/smiles-drawer/app.js");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smiles_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "./node_modules/plotly.js/dist/plotly.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _prediction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prediction.service */ "./src/app/prediction/prediction.service.ts");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../confusion-matrix/confusion-matrix.component */ "./src/app/confusion-matrix/confusion-matrix.component.ts");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/__ivy_ngcc__/fesm5/angular-plotly.js.js");








// import 'datatables.net-buttons-bs4';










var _c0 = ["cmp"];
var _c1 = ["cmpone"];
function PredictionComponent_div_0_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r8.modelValidationInfo[key_r7][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r7.split("_").join(" "));
} }
function PredictionComponent_div_0_tr_9_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.modelValidationInfo[key_r7][1]);
} }
function PredictionComponent_div_0_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PredictionComponent_div_0_tr_9_td_1_Template, 3, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PredictionComponent_div_0_tr_9_td_2_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r7 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.q_measures.includes(key_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.q_measures.includes(key_r7));
} }
function PredictionComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-confusion-matrix", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("TP", ctx_r5.modelValidationInfo["TP"][1])("FP", ctx_r5.modelValidationInfo["FP"][1])("FN", ctx_r5.modelValidationInfo["FN"][1])("TN", ctx_r5.modelValidationInfo["TN"][1]);
} }
function PredictionComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "plotly-plot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r6.predictData)("layout", ctx_r6.plotCommon.layout)("config", ctx_r6.plotCommon.config);
} }
function PredictionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "External validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PredictionComponent_div_0_tr_9_Template, 3, 2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PredictionComponent_div_0_div_10_Template, 2, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PredictionComponent_div_0_div_11_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.objectKeys(ctx_r0.modelValidationInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modelValidationInfo["TP"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modelValidationInfo["TP"]);
} }
function PredictionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.predictionResult.warning, " ");
} }
function PredictionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.predictionError, " ");
} }
function PredictionComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PredictionComponent_div_3_th_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r18.modelDocumentation == null ? null : ctx_r18.modelDocumentation.Endpoint_units.value, ")");
} }
function PredictionComponent_div_3_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Prediction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PredictionComponent_div_3_th_28_span_2_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.modelDocumentation == null ? null : ctx_r13.modelDocumentation.Endpoint_units.value) != null);
} }
function PredictionComponent_div_3_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PredictionComponent_div_3_tr_31_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.castValue(ctx_r22.predictionResult.values[i_r20]));
} }
function PredictionComponent_div_3_tr_31_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r23.predictionResult.lower_limit[i_r20].toFixed(3), " to ", ctx_r23.predictionResult.upper_limit[i_r20].toFixed(3), " ");
} }
function PredictionComponent_div_3_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "canvas", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PredictionComponent_div_3_tr_31_td_9_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PredictionComponent_div_3_tr_31_td_10_Template, 2, 2, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r20 = ctx.index;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r20 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.predictionResult.obj_nam[i_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.predictionResult.SMILES[i_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.predictionResult.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.predictionResult.upper_limit);
} }
function PredictionComponent_div_3_div_32_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r26.castValue(ctx_r26.predictionResult.values[ctx_r26.molIndex]));
} }
function PredictionComponent_div_3_div_32_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r27.modelDocumentation["Endpoint_units"].value, "");
} }
function PredictionComponent_div_3_div_32_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.predictionResult.ymatrix[ctx_r28.molIndex]);
} }
function PredictionComponent_div_3_div_32_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PredictionComponent_div_3_div_32_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PredictionComponent_div_3_div_32_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (1 - ctx_r31.modelBuildInfo["conformal_significance"]) * 100, "%CI:");
} }
function PredictionComponent_div_3_div_32_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r32.predictionResult.lower_limit[ctx_r32.molIndex].toFixed(1), " to ", ctx_r32.predictionResult.upper_limit[ctx_r32.molIndex].toFixed(3), " ");
} }
function PredictionComponent_div_3_div_32_div_71_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "canvas", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dist_r40 = ctx.$implicit;
    var j_r41 = ctx.index;
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dist_r40.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "one_canvas" + j_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r39.predictionResult.search_results[ctx_r39.molIndex].obj_nam[j_r41]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r39.castValue(ctx_r39.predictionResult.search_results[ctx_r39.molIndex].ymatrix[j_r41]));
} }
function PredictionComponent_div_3_div_32_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Similars");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Structure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PredictionComponent_div_3_div_32_div_71_tr_17_Template, 9, 4, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r33.predictionResult.search_results[ctx_r33.molIndex].distances);
} }
function PredictionComponent_div_3_div_32_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PredictionComponent_div_3_div_32_div_77_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r42.modelDocumentation["Endpoint"].value);
} }
function PredictionComponent_div_3_div_32_div_77_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r43.modelDocumentation == null ? null : ctx_r43.modelDocumentation.Interpretation.value);
} }
function PredictionComponent_div_3_div_32_div_77_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r44.modelDocumentation["Species"].value);
} }
function PredictionComponent_div_3_div_32_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PredictionComponent_div_3_div_32_div_77_p_1_Template, 2, 1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PredictionComponent_div_3_div_32_div_77_p_2_Template, 3, 1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PredictionComponent_div_3_div_32_div_77_p_3_Template, 3, 1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.modelDocumentation["Endpoint"].value != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.objectKeys(ctx_r35.modelDocumentation).includes("Interpretation") && ctx_r35.modelDocumentation["Interpretation"].value != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.modelDocumentation["Species"].value != undefined);
} }
function PredictionComponent_div_3_div_32_div_78_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R2: ", ctx_r45.modelBuildInfo["R2"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SDEC: ", ctx_r46.modelBuildInfo["SDEC"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Q2: ", ctx_r47.modelBuildInfo["Q2"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SDEP: ", ctx_r48.modelBuildInfo["SDEP"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sensitivity: ", ctx_r49.modelBuildInfo["Sensitivity"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Specificity: ", ctx_r50.modelBuildInfo["Specificity"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("MCC: ", ctx_r51.modelBuildInfo["MCC"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sensitivity (predicted): ", ctx_r52.modelBuildInfo["SensitivityPed"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Specificity (predicted): ", ctx_r53.modelBuildInfo["SpecificityPred"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("MCC (predicted): ", ctx_r54.modelBuildInfo["MCCpred"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Conformal mean interval: ", ctx_r55.modelBuildInfo["Conformal_mean_interval"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Conformal coverage: ", ctx_r56.modelBuildInfo["Conformal_coverage"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_78_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Conformal accuracy: ", ctx_r57.modelBuildInfo["Conformal_accuracy"].toFixed(2), " ");
} }
function PredictionComponent_div_3_div_32_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PredictionComponent_div_3_div_32_div_78_span_12_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PredictionComponent_div_3_div_32_div_78_span_13_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PredictionComponent_div_3_div_32_div_78_span_14_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PredictionComponent_div_3_div_32_div_78_span_15_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PredictionComponent_div_3_div_32_div_78_span_16_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PredictionComponent_div_3_div_32_div_78_span_17_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PredictionComponent_div_3_div_32_div_78_span_18_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PredictionComponent_div_3_div_32_div_78_span_19_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PredictionComponent_div_3_div_32_div_78_span_20_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PredictionComponent_div_3_div_32_div_78_span_21_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PredictionComponent_div_3_div_32_div_78_span_22_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PredictionComponent_div_3_div_32_div_78_span_23_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PredictionComponent_div_3_div_32_div_78_span_24_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.modelBuildInfo["model"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" using ", ctx_r36.modelBuildInfo["nvarx"], " vars ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Training series ", ctx_r36.modelBuildInfo["nobj"], " compounds. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["R2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["SDEC"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["Q2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["SDEP"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["Sensitivity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["Specificity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["MCC"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["SensitivityPed"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["SpecificityPred"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["MCCpred"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["Conformal_mean_interval"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["Conformal_coverage"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.modelBuildInfo["Conformal_accuracy"]);
} }
function PredictionComponent_div_3_div_32_div_79_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var model_r59 = ctx.$implicit;
    var j_r60 = ctx.index;
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r59.split(":")[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r59.split(":")[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r58.castValue(ctx_r58.predictionResult.xmatrix[ctx_r58.molIndex][j_r60]));
} }
function PredictionComponent_div_3_div_32_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Combined Model ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PredictionComponent_div_3_div_32_div_79_tr_21_Template, 7, 3, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r37.modelBuildInfo["model"].replace("combination:", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" using ", ctx_r37.modelBuildInfo["nvarx"], " models");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r37.predictionResult.var_nam);
} }
function PredictionComponent_div_3_div_32_div_80_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R2: ", ctx_r61.submodels[ctx_r61.submodelsIndex]["R2"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SDEC: ", ctx_r62.submodels[ctx_r62.submodelsIndex]["SDEC"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Q2: ", ctx_r63.submodels[ctx_r63.submodelsIndex]["Q2"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SDEP: ", ctx_r64.submodels[ctx_r64.submodelsIndex]["SDEP"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sensitivity: ", ctx_r65.submodels[ctx_r65.submodelsIndex]["Sensitivity"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Specificity: ", ctx_r66.submodels[ctx_r66.submodelsIndex]["Specificity"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("MCC: ", ctx_r67.submodels[ctx_r67.submodelsIndex]["MCC"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sensitivity (predicted): ", ctx_r68.submodels[ctx_r68.submodelsIndex]["SensitivityPed"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Specificity (predicted): ", ctx_r69.submodels[ctx_r69.submodelsIndex]["SpecificityPred"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("MCC (predicted): ", ctx_r70.submodels[ctx_r70.submodelsIndex]["MCCpred"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Conformal mean interval: ", ctx_r71.submodels[ctx_r71.submodelsIndex]["Conformal_mean_interval"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Conformal coverage: ", ctx_r72.submodels[ctx_r72.submodelsIndex]["Conformal_coverage"].toFixed(2), ", ");
} }
function PredictionComponent_div_3_div_32_div_80_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Conformal accuracy: ", ctx_r73.submodels[ctx_r73.submodelsIndex]["Conformal_accuracy"].toFixed(2), " ");
} }
var _c2 = function (a0) { return { "disabled": a0 }; };
function PredictionComponent_div_3_div_32_div_80_Template(rf, ctx) { if (rf & 1) {
    var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictionComponent_div_3_div_32_div_80_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r74.PreviousModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictionComponent_div_3_div_32_div_80_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r76.NextModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PredictionComponent_div_3_div_32_div_80_span_37_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, PredictionComponent_div_3_div_32_div_80_span_38_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, PredictionComponent_div_3_div_32_div_80_span_39_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, PredictionComponent_div_3_div_32_div_80_span_40_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, PredictionComponent_div_3_div_32_div_80_span_41_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, PredictionComponent_div_3_div_32_div_80_span_42_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, PredictionComponent_div_3_div_32_div_80_span_43_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, PredictionComponent_div_3_div_32_div_80_span_45_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, PredictionComponent_div_3_div_32_div_80_span_46_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, PredictionComponent_div_3_div_32_div_80_span_47_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, PredictionComponent_div_3_div_32_div_80_span_48_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, PredictionComponent_div_3_div_32_div_80_span_49_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, PredictionComponent_div_3_div_32_div_80_span_50_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Model ", ctx_r38.submodelsIndex + 1, "/", ctx_r38.submodels.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c2, ctx_r38.noPreviousModel));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c2, ctx_r38.noNextModel));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r38.submodels[ctx_r38.submodelsIndex]["name"], " v.", ctx_r38.submodels[ctx_r38.submodelsIndex]["version"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r38.submodels[ctx_r38.submodelsIndex]["model"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" using ", ctx_r38.submodels[ctx_r38.submodelsIndex]["nvarx"], " vars ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Training series ", ctx_r38.submodels[ctx_r38.submodelsIndex]["nobj"], " compounds. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["R2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["SDEC"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["Q2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["SDEP"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["Sensitivity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["Specificity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["MCC"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["SensitivityPed"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["SpecificityPred"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["MCCpred"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["Conformal_mean_interval"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["Conformal_coverage"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.submodels[ctx_r38.submodelsIndex]["Conformal_accuracy"]);
} }
function PredictionComponent_div_3_div_32_Template(rf, ctx) { if (rf & 1) {
    var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictionComponent_div_3_div_32_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r77.PreviousMol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictionComponent_div_3_div_32_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r79.NextMol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Structure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "canvas", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, PredictionComponent_div_3_div_32_span_52_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, PredictionComponent_div_3_div_32_span_53_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Activity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, PredictionComponent_div_3_div_32_span_61_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, PredictionComponent_div_3_div_32_span_62_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Reliability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, PredictionComponent_div_3_div_32_span_68_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, PredictionComponent_div_3_div_32_span_69_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, PredictionComponent_div_3_div_32_span_70_Template, 2, 2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, PredictionComponent_div_3_div_32_div_71_Template, 18, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Interpretation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, PredictionComponent_div_3_div_32_div_76_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, PredictionComponent_div_3_div_32_div_77_Template, 4, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, PredictionComponent_div_3_div_32_div_78_Template, 26, 16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, PredictionComponent_div_3_div_32_div_79_Template, 23, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, PredictionComponent_div_3_div_32_div_80_Template, 52, 26, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r16.molIndex + 1, " of ", ctx_r16.predictionResult.SMILES.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c2, ctx_r16.noPreviousMol));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c2, ctx_r16.noNextMol));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.prediction.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Model ", ctx_r16.prediction.modelName, " version ", ctx_r16.prediction.modelVersion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.prediction.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.predictionResult.obj_nam[ctx_r16.molIndex], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.predictionResult.obj_id[ctx_r16.molIndex], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.predictionResult.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.modelDocumentation != undefined && ctx_r16.modelDocumentation["Endpoint_units"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.predictionResult.ymatrix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r16.predictionResult.ymatrix);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r16.modelBuildInfo["conformal"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.modelBuildInfo["conformal"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.modelBuildInfo["conformal"] && ctx_r16.modelBuildInfo["quantitative"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.predictionResult["search_results"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.modelDocumentation === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.modelDocumentation != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r16.modelBuildInfo["ensemble"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.modelBuildInfo["ensemble"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.modelBuildInfo["ensemble"] && ctx_r16.submodels.length > 0);
} }
function PredictionComponent_div_3_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "canvas", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "canvas", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PredictionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PredictionComponent_div_3_div_2_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Mol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PredictionComponent_div_3_th_28_Template, 3, 1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PredictionComponent_div_3_th_29_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PredictionComponent_div_3_tr_31_Template, 11, 6, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, PredictionComponent_div_3_div_32_Template, 81, 27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PredictionComponent_div_3_div_33_Template, 7, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.predictionVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.predictionResult.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.predictionResult.upper_limit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.predictionResult.SMILES);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.predictionResult != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.predictionResult != undefined);
} }
// import { isMainThread } from 'worker_threads';
var PredictionComponent = /** @class */ (function () {
    // icon1 : {
    //   'width': 500,
    //   'height': 600,
    //   'path': 'M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
    // }
    // colored = true;
    function PredictionComponent(prediction, service, commonService) {
        this.prediction = prediction;
        this.service = service;
        this.commonService = commonService;
        this.objectKeys = Object.keys;
        this.predictionVisible = false;
        this.q_measures = ['TP', 'FP', 'TN', 'FN'];
        this.table = undefined;
        this.info = [];
        this.head = [];
        this.modelDocumentation = undefined;
        this.molIndex = 0;
        this.noNextMol = false;
        this.noPreviousMol = true;
        this.noNextModel = false;
        this.noPreviousModel = true;
        this.modelBuildInfo = {};
        this.modelValidationInfo = {};
        this.submodels = [];
        this.submodelsIndex = 0;
        this.predictionError = '';
        this.isQuantitative = false;
        this.predictData = [{
                offset: 45,
                r: [],
                theta: ["TP", "FN", "TN", "FP"],
                meta: ["TP", "FN", "TN", "FP"],
                marker: {
                    opacity: 0.8,
                    color: ["#468FB8", "#F2B90F", "#9CC6DD", "#F9DB84"]
                },
                type: "barpolar",
                hovertemplate: "%{meta}: %{r}<extra></extra>"
            }];
        this.plotCommon = {
            layout: {
                width: 300,
                height: 300,
                margin: { r: 10, t: 30, b: 0, pad: 0 },
                polar: {
                    bargap: 0,
                    gridcolor: "grey",
                    gridwidth: 1,
                    radialaxis: {
                        angle: 90,
                        ticks: '',
                        tickfont: { size: 12, fontStyle: 'Barlow Semi Condensed, sans-serif' },
                    },
                    angularaxis: {
                        showticklabels: false,
                        ticks: '',
                    }
                }
            },
            config: {
                // responsive: true,
                displayModeBar: false
            }
        };
        this.plotScores = {
            data: [
                { x: [],
                    y: [],
                    text: [],
                    meta: [],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {
                        color: [],
                        opacity: 0.6,
                        size: 10,
                        colorscale: 'RdBu',
                        showscale: true,
                        cauto: true,
                        colorbar: {
                            tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 20 }
                        }
                    },
                    hovertemplate: '<b>%{text}</b><br>%{marker.color:.2f}<extra></extra>',
                },
                { x: [],
                    y: [],
                    text: [],
                    meta: [],
                    type: 'scatter',
                    mode: 'markers+text',
                    textfont: {
                        fontStyle: 'Barlow Semi Condensed, sans-serif',
                        color: '#59c427',
                        size: 16
                    },
                    textposition: 'top right',
                    marker: {
                        color: '#6be831',
                        symbol: 'circle-open',
                        opacity: 1,
                        size: 14,
                        line: {
                            color: '#6be831',
                            width: 3
                        }
                    },
                    hovertemplate: '<b>%{text}</b><br>%{meta:.2f}<extra></extra>',
                },
            ],
            layout: {
                width: 800,
                height: 600,
                hovermode: 'closest',
                margin: { r: 10, t: 30, pad: 0 },
                showlegend: false,
                showtitle: false,
                xaxis: {
                    zeroline: true,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'PCA PC1',
                    titlefont: { family: 'Barlow Semi Condensed, sans-serif', size: 20 },
                    tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 18 },
                },
                yaxis: {
                    zeroline: true,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'PCA PC2',
                    titlefont: { family: 'Barlow Semi Condensed, sans-serif', size: 20 },
                    tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 18 },
                },
            },
            config: {
                // responsive: true,
                displaylogo: false,
                // modeBarButtonsToAdd: [
                //   { name: 'color toggler',
                //     icon: this.icon1,
                //     click: function(gd) {
                //       if (this.colored) {
                //         var update = {
                //           'marker.colorscale': 'Greys'
                //         };
                //         PlotlyJS.restyle(gd, update, [0]);
                //         PlotlyJS.restyle(gd, 'marker.color', 'red', [1]);
                //         this.colored = false;
                //       }
                //       else {
                //         var update = {
                //           'marker.colorscale': 'Bluered'
                //         };
                //         PlotlyJS.restyle(gd, update, [0]);
                //         PlotlyJS.restyle(gd, 'marker.color', 'black', [1]);
                //         this.colored = true;
                //       }
                //     }}],
                toImageButtonOptions: {
                    format: 'svg',
                    filename: 'flame_prediction',
                    width: 800,
                    height: 600,
                    scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
                },
                modeBarButtonsToRemove: ['lasso2d', 'select2d', 'autoScale2d', 'hoverCompareCartesian']
            }
        };
        this.message = '';
    }
    PredictionComponent.prototype.drawReportHeader = function () {
        var options = { 'width': 600, 'height': 300 };
        var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
        smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](this.predictionResult.SMILES[this.molIndex], function (tree) {
            // Draw to the canvas
            smilesDrawer.draw(tree, 'one_canvas', 'light', false);
        }, function (err) {
            console.log(err);
        });
    };
    PredictionComponent.prototype.drawSimilars = function () {
        var _this = this;
        setTimeout(function () {
            var e_1, _a;
            // draw similar compounds (if applicable)
            if (_this.predictionResult.hasOwnProperty('search_results')) {
                var optionsA = { 'width': 400, 'height': 150 };
                var smiles = _this.predictionResult.search_results[_this.molIndex].SMILES;
                var iteratorCount_1 = 0;
                var _loop_1 = function () {
                    var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](optionsA);
                    smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](value, function (tree) {
                        var canvasName = 'one_canvas';
                        smilesDrawer.draw(tree, canvasName.concat(iteratorCount_1.toString()), 'light', false);
                    }, function (err) {
                        console.log(err);
                    });
                    iteratorCount_1++;
                };
                try {
                    for (var smiles_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(smiles), smiles_1_1 = smiles_1.next(); !smiles_1_1.done; smiles_1_1 = smiles_1.next()) {
                        var value = smiles_1_1.value;
                        _loop_1();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (smiles_1_1 && !smiles_1_1.done && (_a = smiles_1.return)) _a.call(smiles_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                ;
            }
            ;
        }, 0);
    };
    PredictionComponent.prototype.NextMol = function () {
        this.molIndex++;
        this.noPreviousMol = false;
        if ((this.predictionResult.SMILES.length - 1) === this.molIndex) {
            this.noNextMol = true;
        }
        this.drawReportHeader();
        this.drawSimilars();
    };
    PredictionComponent.prototype.PreviousMol = function () {
        this.molIndex--;
        this.noNextMol = false;
        if (this.molIndex === 0) {
            this.noPreviousMol = true;
        }
        this.drawReportHeader();
        this.drawSimilars();
    };
    PredictionComponent.prototype.NextModel = function () {
        this.submodelsIndex++;
        this.noPreviousModel = false;
        if ((this.submodels.length - 1) === this.submodelsIndex) {
            this.noNextModel = true;
        }
    };
    PredictionComponent.prototype.PreviousModel = function () {
        this.submodelsIndex--;
        this.noNextModel = false;
        if (this.submodelsIndex === 0) {
            this.noPreviousModel = true;
        }
    };
    PredictionComponent.prototype.ngOnChanges = function () {
        this.noNextMol = false;
        this.noPreviousMol = true;
        this.noNextModel = false;
        this.noPreviousModel = true;
        this.molIndex = 0;
        this.submodelsIndex = 0;
        this.modelBuildInfo = {};
        this.predictData[0].r = [0, 0, 0, 0];
        this.predictionError = '';
        this.plotScores.data[0].x = [];
        this.plotScores.data[0].y = [];
        this.plotScores.data[0].text = [];
        this.plotScores.data[0].meta = [];
        this.plotScores.data[0].marker.color = [];
        this.plotScores.data[1].x = [];
        this.plotScores.data[1].y = [];
        this.plotScores.data[1].text = [];
        this.plotScores.data[1].meta = [];
        this.getInfo();
        this.getDocumentation();
        this.getPrediction();
        this.getValidation();
    };
    PredictionComponent.prototype.tabClickHandler = function (info) {
        // console.log(info[0], info[1]);
        this.molIndex = parseInt(info[0]) - 1;
        this.noPreviousMol = false;
        this.noNextMol = false;
        if (this.molIndex == 0) {
            this.noPreviousMol = true;
        }
        if (this.molIndex == (this.predictionResult.SMILES.length - 1)) {
            this.noNextMol = true;
        }
        // var b = document.querySelector("#pills-all"); 
        // b.setAttribute('aria-selected', 'false');
        // b.setAttribute('tabindex', "-1");
        $('a[aria-controls="pills-home"]').removeClass('active');
        $('#pills-all').removeClass('active');
        $('#pills-all').removeClass('show');
        // var tab = document.querySelector("#pills-one"); 
        // tab.setAttribute('aria-selected', 'true');
        // tab.removeAttribute('tabindex');
        $('a[aria-controls="pills-one"]').addClass('active');
        $('#pills-one').addClass('active');
        $('#pills-one').addClass('show');
        this.drawReportHeader();
        this.drawSimilars();
    };
    PredictionComponent.prototype.getValidation = function () {
        var _this = this;
        this.commonService.getValidation(this.prediction.modelName, this.prediction.modelVersion).subscribe(function (result) {
            var info = result;
            if ('PC1' in info) {
                _this.plotScores.data[0].x = info['PC1'];
                _this.plotScores.data[0].y = info['PC2'];
                _this.plotScores.data[0].text = info['obj_nam'];
                _this.plotScores.data[0].meta = info['SMILES'];
                _this.plotScores.data[0].marker.color = info['ymatrix'];
                _this.plotScores.data[0].marker.showscale = _this.isQuantitative;
                if (_this.isQuantitative) {
                    _this.plotScores.data[0].marker.colorscale = 'RdBu';
                }
                else {
                    _this.plotScores.data[0].marker.colorscale = 'Bluered';
                }
            }
        });
    };
    PredictionComponent.prototype.getInfo = function () {
        var _this = this;
        this.commonService.getModel(this.prediction.modelName, this.prediction.modelVersion).subscribe(function (result) {
            var e_2, _a;
            try {
                for (var result_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                    var info = result_1_1.value;
                    _this.modelBuildInfo[info[0]] = info[2];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.isQuantitative = _this.modelBuildInfo['quantitative'];
            if (_this.modelBuildInfo['ensemble']) {
                var version_1 = '0';
                _this.submodels = [];
                _this.modelBuildInfo['ensemble_names'].forEach(function (submodel, index) {
                    if (_this.modelBuildInfo['ensemble_names']) {
                        version_1 = _this.modelBuildInfo['ensemble_versions'][index];
                    }
                    else {
                        version_1 = '0';
                    }
                    _this.submodels[index] = {};
                    _this.submodels[index]['name'] = submodel;
                    _this.submodels[index]['version'] = version_1;
                    _this.commonService.getModel(submodel, version_1).subscribe(function (result3) {
                        var e_3, _a;
                        try {
                            for (var result3_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(result3), result3_1_1 = result3_1.next(); !result3_1_1.done; result3_1_1 = result3_1.next()) {
                                var info = result3_1_1.value;
                                _this.submodels[index][info[0]] = info[2];
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (result3_1_1 && !result3_1_1.done && (_a = result3_1.return)) _a.call(result3_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }, function (error) {
                    });
                });
            }
        }, function (error) {
        });
    };
    PredictionComponent.prototype.getDocumentation = function () {
        var _this = this;
        this.commonService.getDocumentation(this.prediction.modelName, this.prediction.modelVersion).subscribe(function (result) {
            _this.modelDocumentation = result;
        }, function (error) {
            _this.modelDocumentation = undefined;
        });
    };
    PredictionComponent.prototype.castValue = function (value) {
        if (this.modelBuildInfo['quantitative']) {
            return value.toFixed(3);
        }
        else {
            if (value === 0) {
                return 'Negative';
            }
            else if (value === 1) {
                return 'Positive';
            }
            else {
                return 'Uncertain';
            }
        }
    };
    PredictionComponent.prototype.getPrediction = function () {
        var _this = this;
        this.predictionVisible = false;
        this.predictionResult = undefined;
        $('#prediction').DataTable().destroy();
        // $('#predictionOne').DataTable().destroy();
        this.modelValidationInfo = {};
        this.commonService.getPrediction(this.predictionName).subscribe(function (result) {
            var e_4, _a;
            if (result['error']) {
                _this.predictionError = result['error'];
            }
            if ('PC1proj' in result) {
                _this.plotScores.data[1].x = result['PC1proj'];
                _this.plotScores.data[1].y = result['PC2proj'];
                _this.plotScores.data[1].text = result['obj_nam'];
                _this.plotScores.data[1].meta = result['values'];
            }
            _this.predictionResult = result;
            if ('external-validation' in _this.predictionResult) {
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.predictionResult['external-validation']), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var modelInfo = _c.value;
                        if (typeof modelInfo[2] === 'number') {
                            modelInfo[2] = parseFloat(modelInfo[2].toFixed(3));
                        }
                        if (typeof modelInfo[2] !== 'object') {
                            _this.modelValidationInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            if ('TP' in _this.modelValidationInfo) {
                _this.predictData[0].r = [_this.modelValidationInfo['TP'][1],
                    _this.modelValidationInfo['FN'][1],
                    _this.modelValidationInfo['TN'][1],
                    _this.modelValidationInfo['FP'][1]];
            }
            // use a long timeout because this can take a lot of time
            setTimeout(function () {
                var options_list = { 'width': 300, 'height': 150 };
                var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options_list);
                _this.components.forEach(function (child) {
                    smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](child.nativeElement.textContent, function (tree) {
                        smilesDrawer.draw(tree, child.nativeElement.id, 'light', false);
                    }, function (err) {
                        console.log(err);
                    });
                });
                var settingsObj = {
                    dom: '<"row"<"col-sm-6"B><"col-sm-6"f>>' +
                        '<"row"<"col-sm-12"tr>>' +
                        '<"row"<"col-sm-5"i><"col-sm-7"p>>',
                    buttons: [
                        { 'extend': 'copy', 'text': 'Copy', 'className': 'btn-primary', title: '' },
                        { 'extend': 'excel', 'text': 'Excel', 'className': 'btn-primary', title: '' },
                        { 'extend': 'pdf', 'text': 'Pdf', 'className': 'btn-primary', title: '' },
                        { 'extend': 'print', 'text': 'Print', 'className': 'btn-primary', title: '' }
                    ],
                    rowCallback: function (row, data, index) {
                        var self = _this;
                        $('td', row).unbind('click');
                        $('td', row).bind('click', function () {
                            _this.tabClickHandler(data);
                        });
                        return row;
                    },
                    destroy: true,
                    deferRender: true
                    // order: []
                };
                // const table = $('#prediction').DataTable(settingsObj);
                $('#prediction').DataTable(settingsObj);
                var me = _this;
                $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                    if (e.target.id === 'pills-one-tab') {
                        me.drawReportHeader();
                        me.drawSimilars();
                    }
                });
                // scores plot         
                var options = { 'width': 300, 'height': 300 };
                var smilesDrawerScores = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
                var canvas_ref = document.getElementById('scores_canvas_ref');
                var context_ref = canvas_ref.getContext('2d');
                var canvas = document.getElementById('scores_canvas_pre');
                var context = canvas.getContext('2d');
                plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5__["newPlot"]('scoresPreDIV', _this.plotScores.data, _this.plotScores.layout, _this.plotScores.config);
                var myPlot = document.getElementById('scoresPreDIV');
                // on hover, draw the molecule
                myPlot.on('plotly_hover', function (eventdata) {
                    var points = eventdata.points[0];
                    // console.log (points)
                    if (points.curveNumber === 1) {
                        smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](result['SMILES'][points.pointNumber], function (tree) {
                            smilesDrawerScores.draw(tree, 'scores_canvas_ref', 'light', false);
                        });
                        context_ref.font = "30px Barlow Semi Condensed";
                        context_ref.fillText(result['obj_nam'][points.pointNumber], 20, 50);
                    }
                    else {
                        smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](points.meta, function (tree) {
                            smilesDrawerScores.draw(tree, 'scores_canvas_pre', 'light', false);
                        });
                    }
                });
                // on onhover, clear the canvas
                myPlot.on('plotly_unhover', function (eventdata) {
                    var points = eventdata.points[0];
                    if (points.curveNumber === 0) {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                    }
                });
                myPlot.on('plotly_click', function (eventdata) {
                    var points = eventdata.points[0];
                    if (points.curveNumber === 1) {
                        context_ref.clearRect(0, 0, canvas_ref.width, canvas_ref.height);
                    }
                });
                _this.predictionVisible = true;
            }, 500);
        });
    };
    PredictionComponent.prototype.existKey = function (obj, key) {
        if (key in this.objectKeys(obj)) {
            return true;
        }
        return false;
    };
    PredictionComponent.prototype.saveEXCEL = function () {
        var xls = Object.assign([], this.info);
        xls.splice(0, 0, this.head);
        /* generate worksheet */
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].aoa_to_sheet(xls);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](wb, this.prediction.name + '.xlsx');
    };
    PredictionComponent.prototype.savePDF = function () {
        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_8___default.a();
        pdf.autoTable({
            head: [this.head],
            body: this.info,
            headStyles: {
                2: { halign: 'center' },
                3: { halign: 'center' },
            },
            columnStyles: {
                0: { columnWidth: 40 },
                1: { columnWidth: 40 },
                2: { columnWidth: 10, halign: 'center' },
                3: { columnWidth: 10, halign: 'center' },
            }
        });
        pdf.save(this.prediction.name + '.pdf');
    };
    PredictionComponent.prototype.ngAfterViewInit = function () {
        // pdf.autoTable({html: '#info'});
        this.info = [];
        this.head = ['Name', 'Mol'];
        if (this.predictionResult !== undefined) {
            if (this.predictionResult.ymatrix) {
                this.head.push('Value');
            }
            if (this.predictionResult.values) {
                this.head.push('Prediction');
            }
            if (this.predictionResult.upper_limit) {
                this.head.push('Upper limit');
            }
            if (this.predictionResult.lower_limit) {
                this.head.push('Lower limit');
            }
            if (this.predictionResult.c0) {
                this.head.push('Inactive');
            }
            if (this.predictionResult.c1) {
                this.head.push('Active');
            }
            if (this.predictionResult.ensemble_c0) {
                this.head.push('Ensemble Class 0');
            }
            if (this.predictionResult.ensemble_c1) {
                this.head.push('Ensemble Class 1');
            }
            var prediction = [];
            for (var i = 0; i < this.predictionResult.SMILES.length;) {
                prediction = [];
                prediction = [this.predictionResult.obj_nam[i], this.predictionResult.SMILES[i]];
                if (this.predictionResult.ymatrix) {
                    prediction.push(this.predictionResult.ymatrix[i].toFixed(3));
                }
                if (this.predictionResult.values) {
                    prediction.push(this.predictionResult.values[i].toFixed(3));
                }
                if (this.predictionResult.upper_limit) {
                    prediction.push(this.predictionResult.upper_limit[i].toFixed(3));
                }
                if (this.predictionResult.lower_limit) {
                    prediction.push(this.predictionResult.lower_limit[i].toFixed(3));
                }
                if (this.predictionResult.c0) {
                    prediction.push(this.predictionResult.c0[i]);
                }
                if (this.predictionResult.c1) {
                    prediction.push(this.predictionResult.c1[i]);
                }
                if (this.predictionResult.ensemble_c0) {
                    this.head.push(this.predictionResult.ensemble_c0[i].toFixed(3));
                }
                if (this.predictionResult.ensemble_c1) {
                    this.head.push(this.predictionResult.ensemble_c1[i].toFixed(3));
                }
                this.info.push(prediction);
                i = i + 1;
            }
        }
    };
    PredictionComponent.ɵfac = function PredictionComponent_Factory(t) { return new (t || PredictionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_prediction_service__WEBPACK_IMPORTED_MODULE_6__["PredictionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
    PredictionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PredictionComponent, selectors: [["app-prediction"]], viewQuery: function PredictionComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.components = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentOne = _t);
        } }, inputs: { predictionName: "predictionName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "card", "w-100", 2, "width", "18rem"], [1, "card-body"], [2, "color", "grey"], ["id", "container"], [1, "col-3"], [1, "table", "table-sm"], [4, "ngFor", "ngForOf"], ["class", "col-4", 4, "ngIf"], ["class", "text-left text-capitalize", "data-toggle", "tooltip", "data-placement", "left", 3, "title", 4, "ngIf"], ["class", "text-right text-capitalize", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "left", 1, "text-left", "text-capitalize", 3, "title"], [1, "text-right", "text-capitalize"], [1, "col-4"], [3, "TP", "FP", "FN", "TN"], [3, "data", "layout", "config"], [1, "card", "w-100"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], ["id", "overlay", 4, "ngIf"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3"], [1, "nav-item"], ["id", "pills-all-tab", "data-toggle", "tab", "href", "#pills-all", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-one-tab", "data-toggle", "tab", "href", "#pills-one", "role", "tab", "aria-controls", "pills-one", "aria-selected", "false", 1, "nav-link"], ["id", "pills-two-tab", "data-toggle", "tab", "href", "#pills-two", "role", "tab", "aria-controls", "pills-two", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-all", "role", "tabpanel", "aria-labelledby", "pills-all-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "prediction", 1, "table", "m-0"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Mol index", 2, "width", "5%"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Name of the molecule, as present in the input file", 2, "width", "20%"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Structure of the molecule in SMILES format", 1, "align-middle", "text-center"], ["class", "align-middle text-center", "data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Results of the prediction", 4, "ngIf"], ["class", "align-middle text-center", 4, "ngIf"], ["class", "tab-pane fade", "id", "pills-one", "role", "tabpanel", "aria-labelledby", "pills-one-tab", 4, "ngIf"], ["class", "tab-pane fade", "id", "pills-two", "role", "tabpanel", "aria-labelledby", "pills-two-tab", 4, "ngIf"], ["id", "overlay"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "10rem", "height", "10rem"], [1, "sr-only"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Results of the prediction", 1, "align-middle", "text-center"], [4, "ngIf"], [1, "align-middle", "text-center"], [1, "align-middle"], [3, "id"], ["cmp", ""], ["id", "pills-one", "role", "tabpanel", "aria-labelledby", "pills-one-tab", 1, "tab-pane", "fade"], [1, "row", "align-items-center"], [1, "col-2", "offset-5"], [1, "col-1", "p-0", "offset-4"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item", 3, "ngClass"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link", 3, "click"], [1, "row", 2, "background-color", "#22577a", "color", "white"], [1, "col-3", "border"], [1, "col-6", "border"], [1, "col-9", "border"], ["id", "one_canvas"], ["class", "row bg-light", 4, "ngIf"], [1, "row", "bg-light"], ["class", "col-9 border", 4, "ngIf"], [1, "table"], ["scope", "col", 1, "pl-0", "pb-2", "pt-2", "pr-2", "text-left"], ["scope", "col", 1, "pl-0", "pb-2", "pt-2", "pr-2", "text-center"], ["scope", "col", 1, "pr-0", "pl-2", "pb-2", "pt-2", "text-left"], ["scope", "col", 1, "pr-0", "pl-2", "pb-2", "pt-2", "text-right"], [1, "p-0", "text-left"], [1, "p-0", "text-center"], [1, "p-0", "text-right"], [1, "text-capitalize"], [1, "table", "table-striped", "w-auto"], ["scope", "col", 1, "p-2", "text-center"], [1, "row", "justify-content-between"], [1, "col"], [1, "col-3", "p-0"], ["id", "pills-two", "role", "tabpanel", "aria-labelledby", "pills-two-tab", 1, "tab-pane", "fade"], ["id", "scores_canvas_ref"], ["id", "scores_canvas_pre"], ["id", "scoresPreDIV"]], template: function PredictionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PredictionComponent_div_0_Template, 12, 3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PredictionComponent_div_1_Template, 5, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PredictionComponent_div_2_Template, 5, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PredictionComponent_div_3_Template, 34, 6, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.predictionResult != undefined && ctx.predictionResult["external-validation"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.predictionResult != undefined && ctx.predictionResult.warning);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.predictionError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.predictionResult != undefined && ctx.predictionError == "");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_12__["ConfusionMatrixComponent"], angular_plotly_js__WEBPACK_IMPORTED_MODULE_13__["PlotComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], styles: [".table[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  background: white;\r\n  color: #22577A;\r\n  \r\n  width: 100%;\r\n}\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n  padding-left: 1px;\r\n  padding-right: 1px;\r\n  border-bottom: 1px solid #B8DCED;\r\n  color:#0076a3;\r\n}\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  font-family: 'Barlow Semi Condensed', sans-serif;\r\n  border-bottom: 1px solid #B8DCED;\r\n  vertical-align: middle;\r\n}\r\ntr[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\ntr.selected[_ngcontent-%COMP%] {\r\n  background: #f7f9ea;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background: #f7f9ea;\r\n}\r\n.scrollable[_ngcontent-%COMP%]{\r\n  \r\n  overflow: auto;\r\n\r\n  \r\n}\r\n.border[_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  max-width: 60vw;\r\n  border-width: 0px;\r\n  padding-top: 0px;\r\n  padding-bottom: 5px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  max-width: 60vw;\r\n  border-width: 0px;\r\n}\r\nul[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background:white;\r\n  \r\n  color: #B8DCED;\r\n}\r\nul[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  background:white;\r\n  color:#22577A;\r\n  font-weight: bold;\r\n  border-bottom: 4px solid #e59300;\r\n}\r\n#container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 350px; \r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.TP[_ngcontent-%COMP%] {\r\n  background-color: rgba(0,255,0,0.3);\r\n}\r\n.FP[_ngcontent-%COMP%] {\r\n  background-color:rgba(235,143,3,0.3);\r\n}\r\n.TN[_ngcontent-%COMP%] {\r\n  background-color:rgba(3,49,155,0.3);\r\n}\r\n.FN[_ngcontent-%COMP%] {\r\n  background-color:rgba(255,0,0,0.3);\r\n}\r\n.card-header[_ngcontent-%COMP%] {\r\n  background: #B8DCED;\r\n  background-color: #B8DCED;\r\n}\r\n\r\n.spinner-border[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 1031;\r\n  top: 25%; \r\n  right: 45%; \r\n}\r\n#overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #FAFAFA;\r\n  opacity: 0.7;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDs7OztHQUlHO0FBRUg7Ozs7R0FJRztBQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0RBQWdEO0VBQ2hELGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYzs7RUFFZDt3QkFDc0I7QUFDeEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUSxFQUFFLHNDQUFzQztFQUNoRCxVQUFVLEVBQUUscUNBQXFDO0FBQ25EO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0EsY0FBYyIsImZpbGUiOiJzcmMvYXBwL3ByZWRpY3Rpb24vcHJlZGljdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnRhYmxlIHRoe1xyXG4gIGNvbG9yOiAjMjI1NzdBO1xyXG59ICovXHJcbi8qIC50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcclxufSAqL1xyXG5cclxuLyogLnRhYmxlIHRyIHtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcclxufSAqL1xyXG5cclxuLnRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzIyNTc3QTtcclxuICAvKiB0YWJsZS1sYXlvdXQ6IGZpeGVkOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50YWJsZSB0aHtcclxuICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOERDRUQ7XHJcbiAgY29sb3I6IzAwNzZhMztcclxufVxyXG4udGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOERDRUQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50ciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50ci5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjllYTtcclxufVxyXG4udGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y5ZWE7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxle1xyXG4gIC8qIG1heC1oZWlnaHQ6IDkwdmg7ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIC8qIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICovXHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MHZ3O1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG51bCBsaS5uYXYtaXRlbSBhIHtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIC8qIGNvbG9yOiAjNkM3NTdEOyAqL1xyXG4gIGNvbG9yOiAjQjhEQ0VEO1xyXG59XHJcblxyXG51bCBsaS5uYXYtaXRlbSBhLmFjdGl2ZXtcclxuICAvKiBiYWNrZ3JvdW5kOiAjRjBGMEYwOyAqL1xyXG4gIC8qIGNvbG9yOiAjNkM3NTdEOyAqL1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6IzIyNTc3QTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2U1OTMwMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDM1MHB4OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLlRQIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMjU1LDAsMC4zKTtcclxufVxyXG4uRlAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsMTQzLDMsMC4zKTtcclxufVxyXG4uVE4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgzLDQ5LDE1NSwwLjMpO1xyXG59XHJcbi5GTiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC4zKTtcclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNCOERDRUQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4RENFRDtcclxufVxyXG5cclxuLyogcm90YXRpbmcgY2lyY2xlIHRvIHNob3cgcHJvZ3Jlc3MgKi9cclxuLnNwaW5uZXItYm9yZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAzMTtcclxuICB0b3A6IDI1JTsgLyogd2hlcmUgLi4uIGlzIHRoZSBlbGVtZW50J3MgaGVpZ2h0ICovXHJcbiAgcmlnaHQ6IDQ1JTsgLyogd2hlcmUgLi4uIGlzIHRoZSBlbGVtZW50J3Mgd2lkdGggKi9cclxufVxyXG5cclxuI292ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKmRpc3BsYXk6IG5vbmU7Ki9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgei1pbmRleDogMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLypFTkQgTE9BRElORyovIl19 */"] });
    return PredictionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PredictionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-prediction',
                templateUrl: './prediction.component.html',
                styleUrls: ['./prediction.component.css'] /*,
                encapsulation: ViewEncapsulation.ShadowDom*/
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"] }, { type: _prediction_service__WEBPACK_IMPORTED_MODULE_6__["PredictionService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, { predictionName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], components: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['cmp']
        }], componentOne: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['cmpone']
        }] }); })();


/***/ }),

/***/ "./src/app/prediction/prediction.service.ts":
/*!**************************************************!*\
  !*** ./src/app/prediction/prediction.service.ts ***!
  \**************************************************/
/*! exports provided: PredictionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionService", function() { return PredictionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var PredictionService = /** @class */ (function () {
    function PredictionService(http) {
        this.http = http;
    }
    PredictionService.ɵfac = function PredictionService_Factory(t) { return new (t || PredictionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    PredictionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PredictionService, factory: PredictionService.ɵfac, providedIn: 'root' });
    return PredictionService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PredictionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/predictor/predictor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/predictor/predictor.component.ts ***!
  \**************************************************/
/*! exports provided: PredictorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictorComponent", function() { return PredictorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predictor.service */ "./src/app/predictor/predictor.service.ts");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.functions */ "./src/app/common.functions.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");

















function PredictorComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r2, " ");
} }
function PredictorComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r3, " ");
} }
var PredictorComponent = /** @class */ (function () {
    function PredictorComponent(service, commonService, func, activeModal, prediction, model, globals, toastr) {
        this.service = service;
        this.commonService = commonService;
        this.func = func;
        this.activeModal = activeModal;
        this.prediction = prediction;
        this.model = model;
        this.globals = globals;
        this.toastr = toastr;
        this.objectKeys = Object.keys;
        this.modelName = '';
        this.predictName = '';
        this.version = '0';
        this.file = undefined;
        this.isvalid = false;
        this.predictionsNames = {};
    }
    PredictorComponent.prototype.ngOnInit = function () {
        var e_1, _a;
        this.models = {};
        this.getModelListPredict();
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.prediction.predictions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                this.predictionsNames[name_1[0]] = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var i = 1;
        var nameFound = false;
        while (!nameFound) {
            this.predictName = 'Prediction_' + i;
            if (!this.objectKeys(this.predictionsNames).includes(this.predictName)) {
                nameFound = true;
                this.isvalid = true;
            }
            i = i + 1;
        }
    };
    PredictorComponent.prototype.change = function (fileList) {
        var file = fileList[0];
        this.file = file;
    };
    PredictorComponent.prototype.predictNameChange = function () {
        this.isvalid = true;
        var letters = /^[A-Za-z0-9_]+$/;
        if (!(this.predictName.match(letters)) || this.predictName in this.predictionsNames || this.predictName.startsWith('ensemble')) {
            this.isvalid = false;
        }
    };
    PredictorComponent.prototype.getModelListPredict = function () {
        var _this = this;
        this.commonService.getModelList().subscribe(function (result) {
            var e_2, _a;
            if (result[0]) {
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(result[1]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var model = _c.value;
                        if (typeof (model.info) === 'object') {
                            var modelName = model.modelname;
                            if (!(modelName in _this.models)) {
                                _this.models[modelName] = [];
                            }
                            if (model.info) {
                                _this.models[modelName].push(model.version);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                alert(result[1]);
            }
        });
    };
    PredictorComponent.prototype.predict = function () {
        var _this = this;
        this.activeModal.close('Close click');
        if (this.modelName != '') {
            var inserted_1 = this.toastr.info('Running!', 'Prediction ' + this.predictName, {
                disableTimeOut: true, positionClass: 'toast-top-right'
            });
            this.prediction.predicting[this.predictName] = [this.modelName, this.version, this.file.name];
            this.service.predict(this.modelName, this.version, this.file, this.predictName).subscribe(function (result) {
                var iter = 0;
                var intervalId = setInterval(function () {
                    if (iter < 30) {
                        _this.checkPrediction(_this.predictName, inserted_1, intervalId);
                    }
                    else {
                        clearInterval(intervalId);
                        _this.toastr.clear(inserted_1.toastId);
                        _this.toastr.warning('Prediction ' + name + ' \n Time Out', 'Warning', {
                            timeOut: 10000, positionClass: 'toast-top-right'
                        });
                        delete _this.prediction.predicting[_this.predictName];
                        $('#dataTablePredictions').DataTable().destroy();
                        _this.func.getPredictionList();
                    }
                    iter += 1;
                }, 2500);
            }, function (error) {
                alert('Error prediction');
            });
        }
        else {
            alert('Model name undefined!');
        }
    };
    // Periodic function to check model
    PredictorComponent.prototype.checkPrediction = function (name, inserted, intervalId) {
        var _this = this;
        this.commonService.getPrediction(name).subscribe(function (result) {
            // console.log(result);
            _this.toastr.clear(inserted.toastId);
            if (result['error']) {
                _this.toastr.warning('Prediction ' + name + ' finished with error ' + result['error'], 'PREDICTION COMPLETED', {
                    timeOut: 5000, positionClass: 'toast-top-right'
                });
            }
            else {
                _this.toastr.success('Prediction ' + name + ' created', 'PREDICTION COMPLETED', {
                    timeOut: 5000, positionClass: 'toast-top-right'
                });
            }
            clearInterval(intervalId);
            delete _this.prediction.predicting[_this.predictName];
            $('#dataTablePredictions').DataTable().destroy();
            _this.func.getPredictionList();
        }, function (error) {
            if (error.error.code !== 0) {
                _this.toastr.clear(inserted.toastId);
                _this.toastr.error('Prediction ' + name + ' \n ' + error.error.message, 'ERROR!', {
                    timeOut: 10000, positionClass: 'toast-top-right'
                });
                clearInterval(intervalId);
                delete _this.prediction.predicting[_this.predictName];
                $('#dataTablePredictions').DataTable().destroy();
                _this.func.getPredictionList();
            }
        });
    };
    PredictorComponent.ɵfac = function PredictorComponent_Factory(t) { return new (t || PredictorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_predictor_service__WEBPACK_IMPORTED_MODULE_4__["PredictorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_functions__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
    PredictorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PredictorComponent, selectors: [["app-predictor"]], decls: 50, vars: 10, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Cancel", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", "mt-1"], [1, "row"], [1, "col-8"], ["for", "predictionName"], ["type", "text", "id", "predictionName", "required", "", 1, "form-control", "is-invalid", 3, "ngModel", "ngModelChange"], [1, "valid-feedback"], [1, "invalid-feedback"], [1, "row", "mt-2"], [1, "col"], ["for", "inputGroupFile01"], [1, "form-group"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", "onchange", "this.nextElementSibling.innerText = this.files[0].name", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"], [1, "text-muted"], [1, "col", "-8"], ["for", "model"], ["id", "model", "name", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "model", 1, "text-muted"], [1, "col-4"], ["for", "version"], ["name", "version", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "version", 1, "text-muted"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "disabled", "click"], [3, "value"]], template: function PredictorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Prediction");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictorComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Prediction name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PredictorComponent_Template_input_ngModelChange_12_listener($event) { return ctx.predictName = $event; })("ngModelChange", function PredictorComponent_Template_input_ngModelChange_12_listener() { return ctx.predictNameChange(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Valid Name! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " The name of the prediction is invalid or already exist! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Input file");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PredictorComponent_Template_input_change_23_listener($event) { return ctx.change($event.target.files); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Choose file");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "small", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Enter a SDFile format input file.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Model");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PredictorComponent_Template_select_ngModelChange_33_listener($event) { return ctx.modelName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PredictorComponent_option_34_Template, 2, 2, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "small", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Select model. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Version");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PredictorComponent_Template_select_ngModelChange_41_listener($event) { return ctx.version = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, PredictorComponent_option_42_Template, 2, 2, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "small", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Select version. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictorComponent_Template_button_click_46_listener() { return ctx.activeModal.close("Close click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictorComponent_Template_button_click_48_listener() { return ctx.predict(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Predict");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-valid", ctx.isvalid)("is-invalid", !ctx.isvalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.predictName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.modelName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.models).sort());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.version);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.models[ctx.modelName]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modelName == "" || ctx.file == undefined);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]], styles: ["a[_ngcontent-%COMP%]:hover {\r\n\r\n    background: #E7E7E7;\r\n}\r\n\r\na.active[_ngcontent-%COMP%] {\r\n    background: #EBAB39;\r\n    border-bottom: 1px solid #0076a3;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    \r\n    background:#22577a;\r\n    color: #f7f9ea;\r\n    border-bottom: 1px solid #0076a3;\r\n}\r\n\r\n.formControl[_ngcontent-%COMP%]{\r\n    font-family: 'Barlow Semi Condensed', 'sans-serif';\r\n    font-size: 20px;\r\n}\r\n\r\n.wrap[_ngcontent-%COMP%] {\r\n    cursor:not-allowed;\r\n}\r\n\r\na.disabled[_ngcontent-%COMP%]{\r\n    background:#22577a;\r\n    pointer-events: none;\r\n    color: #f7f9ea; \r\n}\r\n\r\n.loading[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: 50%;\r\n    z-index: 1;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 0 0 0 0px;\r\n    border: 5px solid #e6901a;\r\n    border-radius: 60%;\r\n    border-top: 5px solid #B8DCED;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 1s linear infinite;\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdG9yL3ByZWRpY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7O0FBRUEsV0FBVzs7QUFDWDtJQUNFLEtBQUssK0JBQStCLEVBQUU7SUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtFQUM1Qzs7QUFFQTtJQUNFLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtFQUNwQyIsImZpbGUiOiJzcmMvYXBwL3ByZWRpY3Rvci9wcmVkaWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNFN0U3RTc7XHJcbn1cclxuXHJcbmEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNFQkFCMzk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNzZhMztcclxufVxyXG5hIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDojMjI1NzdhO1xyXG4gICAgY29sb3I6ICNmN2Y5ZWE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNzZhMztcclxufVxyXG4gICBcclxuLmZvcm1Db250cm9se1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaSBDb25kZW5zZWQnLCAnc2Fucy1zZXJpZic7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLndyYXAge1xyXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xyXG59XHJcbmEuZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiMyMjU3N2E7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAjZjdmOWVhOyBcclxufVxyXG4ubG9hZGluZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAwIDBweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlNjkwMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgI0I4RENFRDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAvKiBTYWZhcmkgKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH1cclxuIl19 */"] });
    return PredictorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PredictorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-predictor',
                templateUrl: './predictor.component.html',
                styleUrls: ['./predictor.component.css']
            }]
    }], function () { return [{ type: _predictor_service__WEBPACK_IMPORTED_MODULE_4__["PredictorService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _common_functions__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/predictor/predictor.service.ts":
/*!************************************************!*\
  !*** ./src/app/predictor/predictor.service.ts ***!
  \************************************************/
/*! exports provided: PredictorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictorService", function() { return PredictorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PredictorService = /** @class */ (function () {
    function PredictorService(http) {
        this.http = http;
    }
    PredictorService.prototype.predict = function (modelName, version, file, predictionName) {
        var formData = new FormData();
        formData.append('SDF', file);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_predict + 'model/' + modelName + '/version/' + version + '/predictionName/' + predictionName;
        return this.http.put(url, formData);
    };
    PredictorService.ɵfac = function PredictorService_Factory(t) { return new (t || PredictorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    PredictorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PredictorService, factory: PredictorService.ɵfac, providedIn: 'root' });
    return PredictorService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PredictorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/qualit-conformal/qualit-conformal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/qualit-conformal/qualit-conformal.component.ts ***!
  \****************************************************************/
/*! exports provided: QualitConformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualitConformalComponent", function() { return QualitConformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _qualit_conformal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qualit-conformal.service */ "./src/app/qualit-conformal/qualit-conformal.service.ts");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smiles-drawer */ "./node_modules/smiles-drawer/app.js");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smiles_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "./node_modules/plotly.js/dist/plotly.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/__ivy_ngcc__/fesm5/angular-plotly.js.js");
/* harmony import */ var _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confusion-matrix/confusion-matrix.component */ "./src/app/confusion-matrix/confusion-matrix.component.ts");












function QualitConformalComponent_div_19_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Conformal coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Conformal accuracy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r5.modelValidationInfo["Conformal_coverage"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.modelValidationInfo["Conformal_coverage"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r5.modelValidationInfo["Conformal_accuracy"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.modelValidationInfo["Conformal_accuracy"][1]);
} }
function QualitConformalComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sensitivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Specificity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "MCC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, QualitConformalComponent_div_19_ng_container_21_Template, 13, 4, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r0.modelValidationInfo["Sensitivity"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modelValidationInfo["Sensitivity"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r0.modelValidationInfo["Specificity"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modelValidationInfo["Specificity"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r0.modelValidationInfo["MCC"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modelValidationInfo["MCC"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.model.conformal);
} }
function QualitConformalComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-confusion-matrix", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("TP", ctx_r1.modelValidationInfo["TP"][1])("FP", ctx_r1.modelValidationInfo["FP"][1])("FN", ctx_r1.modelValidationInfo["FN"][1])("TN", ctx_r1.modelValidationInfo["TN"][1]);
} }
function QualitConformalComponent_div_26_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Conformal coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Conformal accuracy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r6.modelValidationInfo["Conformal_coverage"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.modelValidationInfo["Conformal_coverage_f"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r6.modelValidationInfo["Conformal_accuracy"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.modelValidationInfo["Conformal_accuracy_f"][1]);
} }
function QualitConformalComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sensitivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Specificity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "MCC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, QualitConformalComponent_div_26_ng_container_21_Template, 13, 4, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r2.modelValidationInfo["Sensitivity"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.modelValidationInfo["Sensitivity_f"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r2.modelValidationInfo["Specificity"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.modelValidationInfo["Specificity_f"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r2.modelValidationInfo["MCC"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.modelValidationInfo["MCC_f"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.model.conformal);
} }
function QualitConformalComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-confusion-matrix", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("TP", ctx_r3.modelValidationInfo["TP_f"][1])("FP", ctx_r3.modelValidationInfo["FP_f"][1])("FN", ctx_r3.modelValidationInfo["FN_f"][1])("TN", ctx_r3.modelValidationInfo["TN_f"][1]);
} }
function QualitConformalComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.modelWarning, " ");
} }
var QualitConformalComponent = /** @class */ (function () {
    function QualitConformalComponent(service, model) {
        this.service = service;
        this.model = model;
        this.objectKeys = Object.keys;
        this.modelValidationInfo = {};
        this.modelWarning = '';
        this.predictData = [{
                offset: 45,
                r: [],
                theta: ["TP", "FN", "TN", "FP"],
                meta: ["TP", "FN", "TN", "FP"],
                marker: {
                    opacity: 0.8,
                    color: ["#468FB8", "#F2B90F", "#9CC6DD", "#F9DB84"],
                },
                type: "barpolar",
                hovertemplate: "%{meta}: %{r}<extra></extra>"
            }];
        this.fittingData = [{
                offset: 45,
                r: [],
                theta: ["TP", "FP", "TN", "FN"],
                meta: ["TP", "FP", "TN", "FN"],
                marker: {
                    opacity: 0.8,
                    color: ["#468FB8", "#F2B90F", "#9CC6DD", "#F9DB84"],
                },
                type: "barpolar",
                hovertemplate: "%{meta}: %{r}<extra></extra>"
            }];
        this.plotCommon = {
            layout: {
                width: 350,
                // height: 300,
                // margin: {r: 10, t: 30, b:30, pad: 0 },
                polar: {
                    bargap: 0,
                    gridcolor: "grey",
                    gridwidth: 1,
                    radialaxis: {
                        angle: 90,
                        ticks: '',
                        tickfont: { size: 12, fontStyle: 'Barlow Semi Condensed, sans-serif' },
                    },
                    angularaxis: {
                        showticklabels: false,
                        ticks: '',
                    }
                }
            },
            config: {
                // responsive: true,
                displayModeBar: false
            }
        };
        this.plotScores = {
            data: [
                { x: [],
                    y: [],
                    text: [],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {
                        color: [],
                        opacity: 0.6,
                        colorscale: 'Bluered',
                        showscale: false,
                        cmax: 1.0,
                        cmin: 0.0,
                        size: 14,
                        // line: {
                        //   width: 2
                        // },
                        colorbar: {
                            tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 20 }
                        }
                    },
                    hovertemplate: '<b>%{text}</b><br>%{marker.color:.2f}<extra></extra>',
                }
            ],
            layout: {
                width: 800,
                height: 600,
                hovermode: 'closest',
                margin: { r: 10, t: 30, pad: 0 },
                showlegend: false,
                showtitle: false,
                xaxis: {
                    hoverformat: '.2f',
                    zeroline: true,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'PCA PC1',
                    titlefont: { family: 'Barlow Semi Condensed, sans-serif', size: 24 },
                    tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 18 },
                },
                yaxis: {
                    hoverformat: '.2f',
                    zeroline: true,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'PCA PC2',
                    titlefont: { family: 'Barlow Semi Condensed, sans-serif', size: 24 },
                    tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 18 },
                },
            },
            config: {
                displaylogo: false,
                toImageButtonOptions: {
                    format: 'svg',
                    filename: 'flame_scores',
                    width: 800,
                    height: 600,
                    scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
                },
                modeBarButtonsToRemove: ['lasso2d', 'select2d', 'autoScale2d', 'hoverCompareCartesian']
            }
        };
        this.plotPie = {
            data: [{
                    values: [],
                    labels: ['positive', 'negative'],
                    textinfo: "label+percent",
                    marker: { colors: ["red", "blue"] },
                    type: 'pie'
                }],
            layout: {
                width: 300,
                height: 200,
                showlegend: false,
                margin: { r: 30, t: 30, b: 10, l: 30, pad: 0 },
            },
            config: {
                displaylogo: false,
                modeBarButtonsToRemove: ['lasso2d', 'select2d', 'autoScale2d', 'hoverCompareCartesian']
            }
        };
    }
    QualitConformalComponent.prototype.ngOnChanges = function () {
        this.modelWarning = '';
        this.plotScores.data[0].x = [];
        this.plotScores.data[0].y = [];
        this.plotScores.data[0].text = [];
        this.plotScores.data[0].marker.color = [];
        this.predictData[0].r = [0, 0, 0, 0];
        this.fittingData[0].r = [0, 0, 0, 0];
        this.plotPie.data[0].values = [];
        this.getValidation();
    };
    QualitConformalComponent.prototype.isObject = function (val) {
        if (val === null) {
            return false;
        }
        return typeof val === 'object';
    };
    QualitConformalComponent.prototype.getValidation = function () {
        var _this = this;
        this.service.getValidation(this.modelName, this.modelVersion).subscribe(function (result) {
            var e_1, _a;
            var info = result;
            // process warnings
            if (info.warning) {
                _this.modelWarning = info.warning;
            }
            // PCA scores plot
            if ('PC1' in info) {
                _this.plotScores.data[0].x = info['PC1'];
                _this.plotScores.data[0].y = info['PC2'];
                _this.plotScores.data[0].text = info['obj_nam'];
                _this.plotScores.data[0].marker.color = info['ymatrix'];
            }
            try {
                // INFO ABOUT VALIDATION
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(info['model_valid_info']), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var modelInfo = _c.value;
                    if (typeof modelInfo[2] === 'number') {
                        modelInfo[2] = parseFloat(modelInfo[2].toFixed(3));
                    }
                    if (typeof modelInfo[2] !== 'object') {
                        _this.modelValidationInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            setTimeout(function () {
                if (_this.modelValidationInfo['TP']) {
                    _this.predictData[0].r = [_this.modelValidationInfo['TP'][1],
                        _this.modelValidationInfo['FN'][1],
                        _this.modelValidationInfo['TN'][1],
                        _this.modelValidationInfo['FP'][1]];
                    _this.plotPie.data[0].values = [_this.modelValidationInfo['TP'][1] +
                            _this.modelValidationInfo['FN'][1],
                        _this.modelValidationInfo['TN'][1] +
                            _this.modelValidationInfo['FP'][1],
                    ];
                }
                if (_this.modelValidationInfo['TP_f']) {
                    _this.fittingData[0].r = [_this.modelValidationInfo['TP_f'][1],
                        _this.modelValidationInfo['FN_f'][1],
                        _this.modelValidationInfo['TN_f'][1],
                        _this.modelValidationInfo['FP_f'][1]];
                    _this.plotPie.data[0].values = [_this.modelValidationInfo['TP_f'][1] +
                            _this.modelValidationInfo['FN_f'][1],
                        _this.modelValidationInfo['TN_f'][1] +
                            _this.modelValidationInfo['FP_f'][1],
                    ];
                }
                // common to all plots in this component
                var options = { 'width': 300, 'height': 300 };
                var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
                // scores plot                 
                var canvas = document.getElementById('scores_canvas');
                var context = canvas.getContext('2d');
                plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__["newPlot"]('scoresDIV', _this.plotScores.data, _this.plotScores.layout, _this.plotScores.config);
                var myPlot = document.getElementById('scoresDIV');
                // on hover, draw the molecule
                myPlot.on('plotly_hover', function (eventdata) {
                    var points = eventdata.points[0];
                    smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](info['SMILES'][points.pointNumber], function (tree) {
                        smilesDrawer.draw(tree, 'scores_canvas', 'light', false);
                    });
                });
                // on onhover, clear the canvas
                myPlot.on('plotly_unhover', function (data) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                });
            }, 100);
        }, function (error) {
            alert('Error getting model');
        });
    };
    QualitConformalComponent.ɵfac = function QualitConformalComponent_Factory(t) { return new (t || QualitConformalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_qualit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QualitConformalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_5__["Model"])); };
    QualitConformalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QualitConformalComponent, selectors: [["app-qualit-conformal"]], inputs: { modelName: "modelName", modelVersion: "modelVersion" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 38, vars: 14, consts: [[1, "row"], [1, "card", "w-100"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3"], [1, "nav-item"], ["id", "pills-all-tab", "data-toggle", "tab", "href", "#pills-all", "role", "tab", "aria-controls", "pills-all", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-one-tab", "data-toggle", "tab", "href", "#pills-one", "role", "tab", "aria-controls", "pills-one", "aria-selected", "false", 1, "nav-link"], ["id", "pills-two-tab", "data-toggle", "tab", "href", "#pills-two", "role", "tab", "aria-controls", "pills-two", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-all", "role", "tabpanel", "aria-labelledby", "pills-all-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card-body"], ["id", "container"], ["class", "col-3", 4, "ngIf"], ["class", "col-4", 4, "ngIf"], [1, "col-4"], [3, "data", "layout", "config"], ["id", "pills-one", "role", "tabpanel", "aria-labelledby", "pills-one-tab", 1, "tab-pane", "fade"], ["id", "pills-two", "role", "tabpanel", "aria-labelledby", "pills-two-tab", 1, "tab-pane", "fade"], [1, "row", "justify-content-between"], [1, "col"], ["id", "scores_canvas"], ["id", "scoresDIV"], ["class", "row", 4, "ngIf"], [1, "col-3"], [1, "table", "table-sm"], ["data-toggle", "tooltip", "data-placement", "left", 1, "text-left", "text-capitalize", 3, "title"], [1, "text-right", "text-capitalize"], [4, "ngIf"], [3, "TP", "FP", "FN", "TN"], ["role", "alert", 1, "alert", "alert-danger", "text-center"]], template: function QualitConformalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Predictivity");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "GOF");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Series");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, QualitConformalComponent_div_19_Template, 22, 7, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, QualitConformalComponent_div_20_Template, 2, 4, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "plotly-plot", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, QualitConformalComponent_div_26_Template, 22, 7, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, QualitConformalComponent_div_27_Template, 2, 4, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "plotly-plot", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "plotly-plot", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "canvas", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, QualitConformalComponent_div_37_Template, 5, 1, "div", 21);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.objectKeys(ctx.modelValidationInfo).length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.objectKeys(ctx.modelValidationInfo).length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.predictData)("layout", ctx.plotCommon.layout)("config", ctx.plotCommon.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.objectKeys(ctx.modelValidationInfo).length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.objectKeys(ctx.modelValidationInfo).length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.fittingData)("layout", ctx.plotCommon.layout)("config", ctx.plotCommon.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.plotPie.data)("layout", ctx.plotPie.layout)("config", ctx.plotPie.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelWarning != "");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_plotly_js__WEBPACK_IMPORTED_MODULE_7__["PlotComponent"], _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_8__["ConfusionMatrixComponent"]], styles: [".TP[_ngcontent-%COMP%] {\r\n  background-color: rgba(0,255,0,0.3);\r\n}\r\n.FP[_ngcontent-%COMP%] {\r\n  background-color:rgba(235,143,3,0.3);\r\n}\r\n.TN[_ngcontent-%COMP%] {\r\n  background-color:rgba(3,49,155,0.3);\r\n}\r\n.FN[_ngcontent-%COMP%] {\r\n  background-color:rgba(255,0,0,0.3);\r\n}\r\n.card-header[_ngcontent-%COMP%] {\r\n  background: #B8DCED;\r\n  background-color: #B8DCED;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  border-width: 0px;\r\n  padding-top: 0px;\r\n  padding-bottom: 5px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  border-width: 0px;\r\n}\r\n#matrix[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\npadding: 0px;\r\ntext-align: center;\r\n}\r\n#container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 300px; \r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background:white;\r\n  color: #B8DCED;\r\n}\r\nul[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n  background:white;\r\n  color:#22577A;\r\n  font-weight: bold;\r\n  border-bottom: 4px solid #e59300;\r\n}\r\n\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhbGl0LWNvbmZvcm1hbC9xdWFsaXQtY29uZm9ybWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtBQUNBLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUVBOzs7Ozs7OztHQVFHO0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDO0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVIOzs7Ozs7OztHQVFHO0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcXVhbGl0LWNvbmZvcm1hbC9xdWFsaXQtY29uZm9ybWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVFAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwwLjMpO1xyXG59XHJcbi5GUCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzNSwxNDMsMywwLjMpO1xyXG59XHJcbi5UTiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDMsNDksMTU1LDAuMyk7XHJcbn1cclxuLkZOIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMCwwLjMpO1xyXG59XHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI0I4RENFRDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjhEQ0VEO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG5cclxuI21hdHJpeCAqIHtcclxucGFkZGluZzogMHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzMDBweDsgXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHVsIGxpLm5hdi1pdGVtIGEge1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6ICM2Qzc1N0Q7XHJcbn1cclxuXHJcbnVsIGxpLm5hdi1pdGVtIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XHJcbiAgY29sb3I6ICM2Qzc1N0Q7XHJcbn0gKi9cclxuXHJcbnVsIGxpLm5hdi1pdGVtIGEge1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6ICNCOERDRUQ7XHJcbn1cclxuXHJcbnVsIGxpLm5hdi1pdGVtIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6IzIyNTc3QTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2U1OTMwMDtcclxufVxyXG5cclxuLyogdWwge1xyXG4gIGJhY2tncm91bmQ6ICMwMDc2YTM7XHJcbn1cclxudWwgbGkgYSB7XHJcbiAgYmFja2dyb3VuZDogIzAwNzZhMztcclxuICBjb2xvcjogI0I4RENFRDtcclxuIFxyXG59XHJcblxyXG51bCBsaSBhLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiAjMjI1NzdhO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U1OTMwMDtcclxufSAqL1xyXG5cclxuLyogLnJvdGF0ZSA+IHNwYW4ge1xyXG50cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDoxMDtcclxucmlnaHQ6MDtcclxudG9wOiAxMHB4O1xyXG5tYXJnaW46YXV0bztcclxuXHJcbn0gKi9cclxuXHJcbnRhYmxlIHRkIHtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
    return QualitConformalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QualitConformalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-qualit-conformal',
                templateUrl: './qualit-conformal.component.html',
                styleUrls: ['./qualit-conformal.component.css']
            }]
    }], function () { return [{ type: _qualit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QualitConformalService"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_5__["Model"] }]; }, { modelName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modelVersion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/qualit-conformal/qualit-conformal.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/qualit-conformal/qualit-conformal.service.ts ***!
  \**************************************************************/
/*! exports provided: QualitConformalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualitConformalService", function() { return QualitConformalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var QualitConformalService = /** @class */ (function () {
    function QualitConformalService(http) {
        this.http = http;
    }
    QualitConformalService.prototype.getValidation = function (model, version) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/validation';
        return this.http.get(url);
    };
    QualitConformalService.ɵfac = function QualitConformalService_Factory(t) { return new (t || QualitConformalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    QualitConformalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QualitConformalService, factory: QualitConformalService.ɵfac, providedIn: 'root' });
    return QualitConformalService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QualitConformalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quantit-conformal/quantit-conformal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/quantit-conformal/quantit-conformal.component.ts ***!
  \******************************************************************/
/*! exports provided: QuantitConformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantitConformalComponent", function() { return QuantitConformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _quantit_conformal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantit-conformal.service */ "./src/app/quantit-conformal/quantit-conformal.service.ts");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smiles-drawer */ "./node_modules/smiles-drawer/app.js");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smiles_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "./node_modules/plotly.js/dist/plotly.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/__ivy_ngcc__/fesm5/angular-plotly.js.js");











function QuantitConformalComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Scoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r0.modelValidationInfo["scoringP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modelValidationInfo["scoringP"][1]);
} }
function QuantitConformalComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Q2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r1.modelValidationInfo["Q2"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modelValidationInfo["Q2"][1]);
} }
function QuantitConformalComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SDEP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r2.modelValidationInfo["SDEP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.modelValidationInfo["SDEP"][1]);
} }
function QuantitConformalComponent_ng_container_25_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Conformal accuracy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r9.modelValidationInfo["SDEP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.modelValidationInfo["Conformal_accuracy"][1]);
} }
function QuantitConformalComponent_ng_container_25_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mean interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r10.modelValidationInfo["SDEP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.modelValidationInfo["Conformal_mean_interval"][1]);
} }
function QuantitConformalComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuantitConformalComponent_ng_container_25_tr_1_Template, 6, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuantitConformalComponent_ng_container_25_tr_2_Template, 6, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.modelValidationInfo["Conformal_accuracy"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.modelValidationInfo["Conformal_mean_interval"]);
} }
function QuantitConformalComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Scoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r4.modelValidationInfo["scoringP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.modelValidationInfo["scoringR"][1]);
} }
function QuantitConformalComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "R2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r5.modelValidationInfo["Q2"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.modelValidationInfo["R2"][1]);
} }
function QuantitConformalComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SDEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r6.modelValidationInfo["SDEP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.modelValidationInfo["SDEC"][1]);
} }
function QuantitConformalComponent_ng_container_37_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Conformal accuracy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r11.modelValidationInfo["SDEP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.modelValidationInfo["Conformal_accuracy_fitting"][1]);
} }
function QuantitConformalComponent_ng_container_37_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mean interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r12.modelValidationInfo["SDEP"][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.modelValidationInfo["Conformal_mean_interval_fitting"][1]);
} }
function QuantitConformalComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuantitConformalComponent_ng_container_37_tr_1_Template, 6, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuantitConformalComponent_ng_container_37_tr_2_Template, 6, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.modelValidationInfo["Conformal_accuracy_fitting"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.modelValidationInfo["Conformal_mean_interval_fitting"]);
} }
function QuantitConformalComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.modelWarning, " ");
} }
var QuantitConformalComponent = /** @class */ (function () {
    function QuantitConformalComponent(service, model) {
        this.service = service;
        this.model = model;
        this.objectKeys = Object.keys;
        this.modelValidationInfo = {};
        this.modelConformal = {};
        this.modelWarning = '';
        this.plotFitted = {
            data: [{ x: [],
                    y: [],
                    text: [],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {
                        color: 'rgba(255,0,0,0.2)',
                        size: 12,
                        line: {
                            color: 'red',
                            width: 2
                        },
                    },
                    hovertemplate: '<b>%{text}</b><br>(%{x:.2f} %{y:.2f})<extra></extra>',
                    error_y: {
                        type: 'data',
                        color: 'rgba(0,0,0,0.2)',
                        symmetric: false,
                        array: [],
                        arrayminus: []
                    }
                },
                { x: [],
                    y: [],
                    type: 'scatter',
                    mode: 'lines',
                    line: {
                        color: 'black',
                        width: 2
                    }
                }
            ]
        };
        this.plotPredicted = {
            data: [
                { x: [],
                    y: [],
                    text: [],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {
                        color: 'rgba(255,0,0,0.2)',
                        size: 12,
                        line: {
                            color: 'red',
                            width: 2
                        }
                    },
                    hovertemplate: '<b>%{text}</b><br>(%{x:.2f} %{y:.2f})<extra></extra>',
                    error_y: {
                        type: 'data',
                        color: 'rgba(0,0,0,0.2)',
                        symmetric: false,
                        array: [],
                        arrayminus: []
                    }
                },
                { x: [],
                    y: [],
                    type: 'scatter',
                    mode: 'lines',
                    line: {
                        color: 'black',
                        width: 2
                    }
                }
            ],
        };
        this.plotScatter = {
            layout: {
                width: 800,
                height: 550,
                hovermode: 'closest',
                margin: { r: 10, t: 30, pad: 10 },
                showlegend: false,
                showtitle: false,
                xaxis: {
                    hoverformat: '.2f',
                    zeroline: false,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'Experimental',
                    titlefont: { family: 'Barlow Semi Condensed, sans-serif', size: 24 },
                    tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 18 },
                },
                yaxis: {
                    hoverformat: '.2f',
                    zeroline: false,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'Model',
                    titlefont: { family: 'Barlow Semi Condensed, sans-serif', size: 24 },
                    tickfont: { family: 'Barlow Semi Condensed, sans-serif', size: 18 },
                },
            },
            config: {
                displaylogo: false,
                toImageButtonOptions: {
                    format: 'svg',
                    filename: 'flame_scatter',
                    width: 800,
                    height: 550,
                    scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
                },
                modeBarButtonsToRemove: ['lasso2d', 'select2d', 'autoScale2d']
            }
        };
        this.plotScores = {
            data: [
                { x: [],
                    y: [],
                    text: [],
                    meta: [],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {
                        color: [],
                        opacity: 0.6,
                        colorscale: 'RdBu',
                        showscale: true,
                        cauto: true,
                        size: 14,
                        colorbar: {
                            tickfont: {
                                family: 'Barlow Semi Condensed, sans-serif',
                                size: 20
                            }
                        }
                    },
                    hovertemplate: '<b>%{text}</b><br>%{marker.color:.2f}<extra></extra>',
                }
            ],
            layout: {
                width: 800,
                height: 600,
                hovermode: 'closest',
                margin: { r: 10, t: 30, pad: 0 },
                showlegend: false,
                showtitle: false,
                xaxis: {
                    zeroline: true,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'PCA PC1',
                    titlefont: {
                        family: 'Barlow Semi Condensed, sans-serif',
                        size: 24,
                    },
                    tickfont: {
                        family: 'Barlow Semi Condensed, sans-serif',
                        size: 18,
                    },
                },
                yaxis: {
                    zeroline: true,
                    showgrid: true,
                    showline: true,
                    gridwidth: 1,
                    linecolor: 'rgb(200,200,200)',
                    linewidth: 2,
                    title: 'PCA PC2',
                    titlefont: {
                        family: 'Barlow Semi Condensed, sans-serif',
                        size: 24,
                    },
                    tickfont: {
                        family: 'Barlow Semi Condensed, sans-serif',
                        size: 18,
                    },
                },
            },
            config: {
                displaylogo: false,
                toImageButtonOptions: {
                    format: 'svg',
                    filename: 'flame_scores',
                    width: 800,
                    height: 600,
                    scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
                },
                modeBarButtonsToRemove: ['lasso2d', 'select2d', 'autoScale2d', 'hoverCompareCartesian']
            }
        };
        this.plotViolin = {
            data: [{
                    type: 'violin',
                    // orientation: 'h',
                    y: [],
                    text: [],
                    points: 'all',
                    pointpos: 2,
                    hoveron: "violins+points",
                    box: { visible: true },
                    boxpoints: true,
                    hoverlabel: { bgcolor: "#22577" },
                    line: { color: '#22577' },
                    hovertemplate: '<b>%{text}</b><br>%{y:.2f}<extra></extra>',
                    fillcolor: "#B8DCED",
                    opacity: 0.8,
                    meanline: { visible: true },
                    name: 'Activity'
                }],
            layout: {
                width: 300,
                height: 250,
                hovermode: 'closest',
                margin: { r: 10, t: 30, b: 0, l: 10, pad: 0 },
                xaxis: {
                    zeroline: false,
                    tickfont: { family: 'Barlow Semi Condensed, sans-serif' },
                }
            },
            config: {
                displaylogo: false,
                toImageButtonOptions: {
                    format: 'svg',
                    filename: 'flame_violin',
                    width: 600,
                    height: 500,
                    scale: 2 // Multiply title/legend/axis/canvas sizes by this factor
                },
                modeBarButtonsToRemove: ['lasso2d', 'select2d', 'autoScale2d', 'hoverCompareCartesian']
            }
        };
    }
    QuantitConformalComponent.prototype.ngOnChanges = function () {
        this.modelWarning = '';
        this.plotFitted.data[0].x = [];
        this.plotFitted.data[0].y = [];
        this.plotFitted.data[0].error_y.array = [];
        this.plotFitted.data[0].error_y.arrayminus = [];
        this.plotFitted.data[0].text = [];
        this.plotPredicted.data[0].x = [];
        this.plotPredicted.data[0].y = [];
        this.plotPredicted.data[0].error_y.array = [];
        this.plotPredicted.data[0].error_y.arrayminus = [];
        this.plotPredicted.data[0].text = [];
        this.plotScores.data[0].x = [];
        this.plotScores.data[0].y = [];
        this.plotScores.data[0].text = [];
        this.plotScores.data[0].meta = [];
        this.plotScores.data[0].marker.color = [];
        this.plotViolin.data[0].y = [];
        this.plotViolin.data[0].text = [];
        this.getValidation();
    };
    QuantitConformalComponent.prototype.isObject = function (val) {
        if (val === null) {
            return false;
        }
        return typeof val === 'object';
    };
    QuantitConformalComponent.prototype.getValidation = function () {
        var _this = this;
        this.service.getValidation(this.modelName, this.modelVersion).subscribe(function (result) {
            var e_1, _a;
            var info = result;
            // process warnings
            if (info.warning) {
                _this.modelWarning = info.warning;
            }
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(info['model_valid_info']), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var modelInfo = _c.value;
                    if (typeof modelInfo[2] === 'number') {
                        modelInfo[2] = parseFloat(modelInfo[2].toFixed(3));
                    }
                    if (typeof modelInfo[2] !== 'object') {
                        _this.modelValidationInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
                    }
                    else {
                        if (_this.model.conformal) {
                            _this.modelConformal[modelInfo[0]] = modelInfo[2];
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            setTimeout(function () {
                // PCA scores plot
                if ('PC1' in info) {
                    _this.plotScores.data[0].x = info['PC1'];
                    _this.plotScores.data[0].y = info['PC2'];
                    _this.plotScores.data[0].text = info['obj_nam'];
                    _this.plotScores.data[0].meta = info['SMILES'];
                    _this.plotScores.data[0].marker.color = info['ymatrix'];
                }
                // common to all plots in this component
                var options = { 'width': 300, 'height': 300 };
                var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
                // scores plot                 
                var canvas = document.getElementById('scores_canvas');
                var context = canvas.getContext('2d');
                plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__["newPlot"]('scoresDIV', _this.plotScores.data, _this.plotScores.layout, _this.plotScores.config);
                var myPlot = document.getElementById('scoresDIV');
                // on hover, draw the molecule
                myPlot.on('plotly_hover', function (eventdata) {
                    var points = eventdata.points[0];
                    smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](info['SMILES'][points.pointNumber], function (tree) {
                        smilesDrawer.draw(tree, 'scores_canvas', 'light', false);
                    });
                });
                // on onhover, clear the canvas
                myPlot.on('plotly_unhover', function (data) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                });
                _this.plotViolin.data[0].y = info['ymatrix'];
                _this.plotViolin.data[0].text = info['obj_nam'];
                // predicted data
                if ('Y_pred' in info) {
                    _this.plotPredicted.data[0].x = info['ymatrix'];
                    _this.plotPredicted.data[0].y = info['Y_pred'];
                    if (_this.model.conformal) {
                        var yintpred = _this.modelConformal['Conformal_prediction_ranges']; // (min, max)
                        for (var i in info['ymatrix']) {
                            _this.plotPredicted.data[0].error_y.array[i] = yintpred[i][1] - info['Y_pred'][i];
                            _this.plotPredicted.data[0].error_y.arrayminus[i] = info['Y_pred'][i] - yintpred[i][0];
                        }
                    }
                    _this.plotPredicted.data[0].text = info['obj_nam'];
                    _this.plotPredicted.data[1].x = [Math.min.apply(Math, info['ymatrix']), Math.max.apply(Math, info['ymatrix'])];
                    _this.plotPredicted.data[1].y = [Math.min.apply(Math, info['Y_pred']), Math.max.apply(Math, info['Y_pred'])];
                }
                else { // legacy method
                    if (_this.model.conformal) {
                        var ymean = _this.modelConformal['Conformal_interval_medians'];
                        var yint = _this.modelConformal['Conformal_prediction_ranges']; // (min, max)
                        _this.plotPredicted.data[0].x = info['ymatrix'];
                        _this.plotPredicted.data[0].y = ymean;
                        for (var i in info['ymatrix']) {
                            _this.plotPredicted.data[0].error_y.array[i] = yint[i][1] - ymean[i];
                            _this.plotPredicted.data[0].error_y.arrayminus[i] = ymean[i] - yint[i][0];
                        }
                        _this.plotPredicted.data[0].text = info['obj_nam'];
                        _this.plotPredicted.data[1].x = [Math.min.apply(Math, info['ymatrix']), Math.max.apply(Math, info['ymatrix'])];
                        _this.plotPredicted.data[1].y = [Math.min.apply(Math, ymean), Math.max.apply(Math, ymean)];
                    }
                }
                // ajusted data
                if ('Y_adj' in info) {
                    _this.plotFitted.data[0].x = info['ymatrix'];
                    _this.plotFitted.data[0].y = info['Y_adj'];
                    if (_this.model.conformal) {
                        var yintfit = _this.modelConformal['Conformal_prediction_ranges_fitting']; // (min, max)
                        for (var i in info['ymatrix']) {
                            _this.plotFitted.data[0].error_y.array[i] = yintfit[i][1] - info['Y_adj'][i];
                            _this.plotFitted.data[0].error_y.arrayminus[i] = info['Y_adj'][i] - yintfit[i][0];
                        }
                    }
                    _this.plotFitted.data[0].text = info['obj_nam'];
                    _this.plotFitted.data[1].x = [Math.min.apply(Math, info['ymatrix']), Math.max.apply(Math, info['ymatrix'])];
                    _this.plotFitted.data[1].y = [Math.min.apply(Math, info['Y_adj']), Math.max.apply(Math, info['Y_adj'])];
                }
                // predicted plot                 
                var canvas_pred = document.getElementById('scatter_pred_canvas');
                var context_pred = canvas_pred.getContext('2d');
                plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__["newPlot"]('scatterPredDIV', _this.plotPredicted.data, _this.plotScatter.layout, _this.plotScatter.config);
                var myPlotPred = document.getElementById('scatterPredDIV');
                // on hover, draw the molecule
                myPlotPred.on('plotly_hover', function (eventdata) {
                    var points = eventdata.points[0];
                    smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](info['SMILES'][points.pointNumber], function (tree) {
                        smilesDrawer.draw(tree, 'scatter_pred_canvas', 'light', false);
                    });
                });
                // on onhover, clear the canvas
                myPlotPred.on('plotly_unhover', function (data) {
                    context_pred.clearRect(0, 0, canvas_pred.width, canvas_pred.height);
                });
                // fitted plott
                var canvas_fit = document.getElementById('scatter_fit_canvas');
                var context_fit = canvas_fit.getContext('2d');
                plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__["newPlot"]('scatterFitDIV', _this.plotFitted.data, _this.plotScatter.layout, _this.plotScatter.config);
                var myPlotFit = document.getElementById('scatterFitDIV');
                // on hover, draw the molecule
                myPlotFit.on('plotly_hover', function (eventdata) {
                    var points = eventdata.points[0];
                    smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](info['SMILES'][points.pointNumber], function (tree) {
                        smilesDrawer.draw(tree, 'scatter_fit_canvas', 'light', false);
                    });
                });
                // on onhover, clear the canvas
                myPlotFit.on('plotly_unhover', function (data) {
                    context_fit.clearRect(0, 0, canvas_fit.width, canvas_fit.height);
                });
            }, 100);
        }, function (error) {
            alert('Error getting model');
        });
    };
    ;
    QuantitConformalComponent.ɵfac = function QuantitConformalComponent_Factory(t) { return new (t || QuantitConformalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_quantit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QuantitConformalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_5__["Model"])); };
    QuantitConformalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuantitConformalComponent, selectors: [["app-quantit-conformal"]], inputs: { modelName: "modelName", modelVersion: "modelVersion" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 48, vars: 12, consts: [[1, "row"], [1, "card", "w-100"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3"], [1, "nav-item"], ["id", "pills-predict-tab", "data-toggle", "tab", "href", "#pills-predict", "role", "tab", "aria-controls", "pills-predict", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-fitting-tab", "data-toggle", "tab", "href", "#pills-fitting", "role", "tab", "aria-controls", "pills-fitting", "aria-selected", "false", 1, "nav-link"], ["id", "pills-two-tab", "data-toggle", "tab", "href", "#pills-two", "role", "tab", "aria-controls", "pills-two", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-predict", "role", "tabpanel", "aria-labelledby", "pills-predict-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card-body"], [1, "row", "justify-content-between"], [1, "col-3", "mt-1"], [1, "table", "table-sm", "mt-4"], [4, "ngIf"], ["id", "scatter_pred_canvas"], ["id", "scatterPredDIV"], ["id", "pills-fitting", "role", "tabpanel", "aria-labelledby", "pills-fitting-tab", 1, "tab-pane", "fade"], ["id", "scatter_fit_canvas"], ["id", "scatterFitDIV"], ["id", "pills-two", "role", "tabpanel", "aria-labelledby", "pills-two-tab", 1, "tab-pane", "fade"], [1, "col"], [3, "data", "layout", "config"], ["id", "scores_canvas"], ["id", "scoresDIV"], ["class", "row", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "left", 1, "text-left", "text-capitalize", 3, "title"], [1, "text-right", "text-capitalize"], ["role", "alert", 1, "alert", "alert-danger", "text-center"]], template: function QuantitConformalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Predictivity");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "GOF");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Series");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "table", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, QuantitConformalComponent_tr_22_Template, 6, 2, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, QuantitConformalComponent_tr_23_Template, 6, 2, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, QuantitConformalComponent_tr_24_Template, 6, 2, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, QuantitConformalComponent_ng_container_25_Template, 3, 2, "ng-container", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "canvas", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "table", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, QuantitConformalComponent_tr_34_Template, 6, 2, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, QuantitConformalComponent_tr_35_Template, 6, 2, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, QuantitConformalComponent_tr_36_Template, 6, 2, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, QuantitConformalComponent_ng_container_37_Template, 3, 2, "ng-container", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "canvas", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "plotly-plot", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "canvas", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, QuantitConformalComponent_div_47_Template, 5, 1, "div", 24);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelValidationInfo["scoringP"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelValidationInfo["Q2"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelValidationInfo["SDEP"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.conformal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelValidationInfo["scoringR"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelValidationInfo["R2"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelValidationInfo["SDEC"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.conformal);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.plotViolin.data)("layout", ctx.plotViolin.layout)("config", ctx.plotViolin.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelWarning != "");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_plotly_js__WEBPACK_IMPORTED_MODULE_7__["PlotComponent"]], styles: ["ul[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background:white;\r\n  color: #B8DCED;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n  background:white;\r\n  color:#22577A;\r\n  font-weight: bold;\r\n  border-bottom: 4px solid #e59300;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  border-width: 0px;\r\n  padding-top: 0px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-width: 0px;\r\n}\r\n\r\n\r\n\r\n.spinner-border[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 1031;\r\n  top: 25%; \r\n  right: 45%; \r\n}\r\n\r\n#overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #FAFAFA;\r\n  opacity: 0.7;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhbnRpdC1jb25mb3JtYWwvcXVhbnRpdC1jb25mb3JtYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRzs7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRLEVBQUUsc0NBQXNDO0VBQ2hELFVBQVUsRUFBRSxxQ0FBcUM7QUFDbkQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcXVhbnRpdC1jb25mb3JtYWwvcXVhbnRpdC1jb25mb3JtYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHVsIGxpLm5hdi1pdGVtIGEge1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6ICM2Qzc1N0Q7XHJcbn1cclxuXHJcbnVsIGxpLm5hdi1pdGVtIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XHJcbiAgY29sb3I6ICM2Qzc1N0Q7XHJcbn0gKi9cclxuXHJcbnVsIGxpLm5hdi1pdGVtIGEge1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6ICNCOERDRUQ7XHJcbn1cclxuXHJcbnVsIGxpLm5hdi1pdGVtIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgY29sb3I6IzIyNTc3QTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2U1OTMwMDtcclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8qIHJvdGF0aW5nIGNpcmNsZSB0byBzaG93IHByb2dyZXNzICovXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMzE7XHJcbiAgdG9wOiAyNSU7IC8qIHdoZXJlIC4uLiBpcyB0aGUgZWxlbWVudCdzIGhlaWdodCAqL1xyXG4gIHJpZ2h0OiA0NSU7IC8qIHdoZXJlIC4uLiBpcyB0aGUgZWxlbWVudCdzIHdpZHRoICovXHJcbn1cclxuXHJcbiNvdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLypkaXNwbGF5OiBub25lOyovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
    return QuantitConformalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuantitConformalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-quantit-conformal',
                templateUrl: './quantit-conformal.component.html',
                styleUrls: ['./quantit-conformal.component.css']
            }]
    }], function () { return [{ type: _quantit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QuantitConformalService"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_5__["Model"] }]; }, { modelName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modelVersion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/quantit-conformal/quantit-conformal.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/quantit-conformal/quantit-conformal.service.ts ***!
  \****************************************************************/
/*! exports provided: QuantitConformalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantitConformalService", function() { return QuantitConformalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var QuantitConformalService = /** @class */ (function () {
    function QuantitConformalService(http) {
        this.http = http;
    }
    QuantitConformalService.prototype.getValidation = function (model, version) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/validation';
        return this.http.get(url);
    };
    QuantitConformalService.ɵfac = function QuantitConformalService_Factory(t) { return new (t || QuantitConformalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    QuantitConformalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuantitConformalService, factory: QuantitConformalService.ɵfac, providedIn: 'root' });
    return QuantitConformalService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuantitConformalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/animations */ "./src/app/animations/animations.ts");







var _c0 = function () { return ["/predictions"]; };
var _c1 = function () { return ["/models"]; };
var _c2 = function () { return ["/similarity"]; };
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(model, globals, router) {
        this.model = model;
        this.globals = globals;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.isActive = function (url) {
        return this.router.url.includes(url);
    };
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Model"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 19, vars: 12, consts: [["id", "top-bar", 1, "row"], [1, "col", "p-0"], ["role", "tablist", 1, "nav", "nav-pills", "pl-2"], [1, "nav-item"], ["id", "predict-tab", "data-toggle", "tab", "href", "#predict", "role", "tab", "aria-controls", "predict", "aria-selected", "true", 1, "nav-link", 3, "routerLink"], ["id", "build-tab", "data-toggle", "tab", "href", "#build", "role", "tab", "aria-controls", "build", "aria-selected", "false", 1, "nav-link", 3, "routerLink"], ["id", "similarity-tab", "data-toggle", "tab", "href", "#similarity", "role", "tab", "aria-controls", "similarity", "aria-selected", "false", 1, "nav-link", 3, "routerLink"], [1, "col-7"], [1, "row", "logo-right"], ["href", "http://etransafe.eu", "target", "_Blank"], ["src", "assets/img/etransafe-line.png", 1, "logo"], ["src", "assets/img/efpia-line.png", 1, "logo"], ["src", "assets/img/imi-line.png", 1, "logo"], ["src", "assets/img/eu-line.png", 1, "logo"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Predictions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Models");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Similarity");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isActive("predictions"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isActive("models"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isActive("similarity"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".top-bar[_ngcontent-%COMP%]{\r\n    \r\n    max-height: 5vh; \r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    background: #0076a3;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: #0076a3;\r\n    color: #B8DCED;\r\n   \r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n    background: #22577a;\r\n    color: white;\r\n    border-bottom: 3px solid #e59300;\r\n}\r\n\r\n.logo-right[_ngcontent-%COMP%] {\r\n    \r\n    vertical-align: middle;\r\n    position: absolute;\r\n    right: 0px;\r\n    \r\n    \r\n    padding: 5px; \r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTs7QUFFaEI7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYmFye1xyXG4gICAgLyogdG9wIGJhciBpcyBtYXggNSUgb2YgR1VJICovXHJcbiAgICBtYXgtaGVpZ2h0OiA1dmg7IFxyXG59XHJcblxyXG51bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3NmEzO1xyXG59XHJcblxyXG51bCBsaSBhIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YTM7XHJcbiAgICBjb2xvcjogI0I4RENFRDtcclxuICAgXHJcbn1cclxuXHJcbnVsIGxpIGEuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogIzIyNTc3YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTU5MzAwO1xyXG59XHJcblxyXG4ubG9nby1yaWdodCB7XHJcbiAgICBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTsgKi9cclxuICAgIHBhZGRpbmc6IDVweDsgXHJcblxyXG59XHJcblxyXG5cclxuLmxvZ28ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */"], data: { animation: [
                _animations_animations__WEBPACK_IMPORTED_MODULE_3__["fade"],
                _animations_animations__WEBPACK_IMPORTED_MODULE_3__["slideUp"]
            ] } });
    return SidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css'],
                animations: [
                    _animations_animations__WEBPACK_IMPORTED_MODULE_3__["fade"],
                    _animations_animations__WEBPACK_IMPORTED_MODULE_3__["slideUp"]
                ]
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Model"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/similarity/similarity.component.ts":
/*!****************************************************!*\
  !*** ./src/app/similarity/similarity.component.ts ***!
  \****************************************************/
/*! exports provided: SimilarityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarityComponent", function() { return SimilarityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _similarity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./similarity.service */ "./src/app/similarity/similarity.service.ts");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smiles-drawer */ "./node_modules/smiles-drawer/app.js");
/* harmony import */ var smiles_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(smiles_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






// import 'jquery';






var _c0 = ["cmp"];
function SimilarityComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r5 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", value_r5, " (", ctx_r0.molsXspace[value_r5], ") ");
} }
function SimilarityComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
function SimilarityComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SimilarityComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ERROR: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.error_message, " ");
} }
function SimilarityComponent_div_49_div_4_ng_container_19_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "canvas", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "canvas", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var j_r13 = ctx.index;
    var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r10, " - ", j_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.nameSrc[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "query_" + i_r10 + "_" + j_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.smileSrc[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.result[i_r10].obj_id[j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.result[i_r10].obj_nam[j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "ref_" + i_r10 + "_" + j_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.result[i_r10].SMILES[j_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.result[i_r10].distances[j_r13].toFixed(3));
} }
function SimilarityComponent_div_49_div_4_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimilarityComponent_div_49_div_4_ng_container_19_tr_1_Template, 19, 10, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var i_r10 = ctx.index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.result[i_r10].obj_nam);
} }
function SimilarityComponent_div_49_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Query name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Query molecule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Reference ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Reference name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reference molecule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Similarity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SimilarityComponent_div_49_div_4_ng_container_19_Template, 2, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.nameSrc);
} }
function SimilarityComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Similarity Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SimilarityComponent_div_49_div_4_Template, 20, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.result.length > 0);
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
var SimilarityComponent = /** @class */ (function () {
    function SimilarityComponent(similarity, service, prediction, model) {
        this.similarity = similarity;
        this.service = service;
        this.prediction = prediction;
        this.model = model;
        this.num_cutoff = '10';
        this.dist_cutoff = '0.7';
        this.objectKeys = Object.keys;
        this.space = undefined;
        this.molsXspace = {};
        this.version = undefined;
        this.predicting = false;
        this.result = [];
        this.smileSrc = [];
        this.nameSrc = [];
        this.error = false;
        this.error_message = '';
    }
    SimilarityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prediction.name = undefined;
        this.model.name = undefined;
        this.model.version = undefined;
        this.model.trained = false;
        this.spaces = {};
        this.service.getSpaces().subscribe(function (result) {
            var e_1, _a;
            var _loop_1 = function (space) {
                var e_2, _a;
                var _loop_2 = function (version) {
                    _this.service.getInfo(space.spacename, version).subscribe(function (result2) {
                        if (!(space.spacename in _this.spaces)) {
                            _this.spaces[space.spacename] = [];
                        }
                        _this.spaces[space.spacename].push(version);
                        _this.molsXspace[space.spacename] = result2[0][2];
                    }, function (error) {
                        _this.molsXspace[space.spacename] = 0;
                    });
                };
                try {
                    for (var _b = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(space.versions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var version = _c.value;
                        _loop_2(version);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            };
            try {
                for (var result_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                    var space = result_1_1.value;
                    _loop_1(space);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function (error) {
            console.log(error.message);
            alert(error.message);
        });
    };
    SimilarityComponent.prototype.search = function () {
        var _this = this;
        // CAST VERSION
        this.result = [];
        this.nameSrc = [];
        this.smileSrc = [];
        this.predicting = true;
        this.error = false;
        this.service.search(this.space, this.version, this.num_cutoff, this.dist_cutoff).subscribe(function (result) {
            var iter = 0;
            console.log(result);
            var intervalId = setInterval(function () {
                if (iter < 15) {
                    _this.checkSearch(result, intervalId);
                }
                else {
                    _this.predicting = false;
                    _this.error = true;
                    _this.error_message = 'Time out exceeded!';
                    clearInterval(intervalId);
                }
                iter += 1;
            }, 4000);
            // this.result = result.search_results;
            // this.nameSrc = result.obj_nam;
            // this.smileSrc = result.SMILES;
        }, function (error) {
            alert(error.message);
        });
    };
    SimilarityComponent.prototype.checkSearch = function (searchName, intervalId) {
        var _this = this;
        this.service.getSearch(searchName).subscribe(function (result) {
            _this.result = result.search_results;
            _this.nameSrc = result.obj_nam;
            _this.smileSrc = result.SMILES;
            clearInterval(intervalId);
        }, function (error) {
            if (error.error.code !== 0) {
                _this.predicting = false;
                _this.error = true;
                _this.error_message = error.error.message;
                clearInterval(intervalId);
            }
        });
    };
    SimilarityComponent.prototype.change = function (fileList) {
        var file = fileList[0];
        this.similarity.file = file;
        this.similarity.file_info = {};
        this.similarity.file_info['name'] = file.name;
        this.similarity.file_info['size_M'] = ((file.size / 1024) / 1024).toFixed(2);
        var extension = file.name.split('.');
        this.similarity.file_info['type_file'] = extension[1];
        var fileReader = new FileReader();
        var self = this;
        fileReader.onloadend = function (x) {
            var e_3, _a;
            self.fileContent = fileReader.result;
            self.similarity.file_info['num_mols'] = (self.fileContent.match(/(\$\$\$\$)/g) || []).length;
            var res_array = self.fileContent.match(/>( )*<(.*)>/g);
            var res_dict = {};
            try {
                for (var res_array_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(res_array), res_array_1_1 = res_array_1.next(); !res_array_1_1.done; res_array_1_1 = res_array_1.next()) {
                    var variable = res_array_1_1.value;
                    var value = variable.replace(/[<> ]*/g, '');
                    if (value in res_dict) {
                        res_dict[value] = res_dict[value] + 1;
                    }
                    else {
                        res_dict[value] = 1;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (res_array_1_1 && !res_array_1_1.done && (_a = res_array_1.return)) _a.call(res_array_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            self.similarity.file_fields = res_dict;
        };
        fileReader.readAsText(file);
    };
    SimilarityComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.components.changes.subscribe(function () {
            $('#simlarityTable').DataTable().destroy();
            if (_this.components !== undefined) {
                _this.components.forEach(function (child) {
                    var options = { 'width': 300, 'height': 150 };
                    var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_4__["Drawer"](options);
                    smiles_drawer__WEBPACK_IMPORTED_MODULE_4__["parse"](child.nativeElement.textContent, function (tree) {
                        smilesDrawer.draw(tree, child.nativeElement.id, 'light', false);
                    }, function (err) {
                        console.log(err);
                    });
                });
                var settingsObj = {
                    dom: '<"row"<"col-sm-6"B><"col-sm-6"f>>' +
                        '<"row"<"col-sm-12"tr>>' +
                        '<"row"<"col-sm-5"i><"col-sm-7"p>>',
                    buttons: [
                        { 'extend': 'copy', 'text': 'Copy', 'className': 'btn-primary', title: '' },
                        { 'extend': 'excel', 'text': 'Excel', 'className': 'btn-primary', title: '' },
                        { 'extend': 'pdf', 'text': 'Pdf', 'className': 'btn-primary', title: '' },
                        { 'extend': 'print', 'text': 'Print', 'className': 'btn-primary', title: '' }
                    ]
                };
                $('#simlarityTable').DataTable(settingsObj);
            }
        });
    };
    SimilarityComponent.ɵfac = function SimilarityComponent_Factory(t) { return new (t || SimilarityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Similarity"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_similarity_service__WEBPACK_IMPORTED_MODULE_3__["SimilarityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"])); };
    SimilarityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SimilarityComponent, selectors: [["app-similarity"]], viewQuery: function SimilarityComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.components = _t);
        } }, decls: 50, vars: 12, consts: [[1, "container", "mt-5"], [1, "row", "align-items-centermt-4"], [1, "col-6"], ["for", "inputGroupFile01"], [1, "form-group"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", "onchange", "this.nextElementSibling.innerText = this.files[0].name", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"], [1, "text-muted"], [1, "col-6", "align-self-center"], ["for", "space"], ["id", "space", "name", "space", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "space", 1, "text-muted"], [1, "form-group", "w-25"], ["for", "dist_cutoff"], ["type", "number", "id", "dist_cutoff", "aria-describedby", "dist_cutoff", "min", "0", "max", "10", "step", ".01", 1, "form-control", "mx-sm-1", 3, "ngModel", "ngModelChange"], ["id", "dist_cutoff", 1, "text-muted"], ["for", "version"], ["name", "version", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "version", 1, "text-muted"], ["for", "num_cutoff"], ["type", "number", "id", "num_cutoff", "aria-describedby", "num_cutoff", "min", "1", "step", "1", 1, "form-control", "mx-sm-1", 3, "ngModel", "ngModelChange"], ["id", "num_cutoff", 1, "text-muted"], [1, "row", "justify-content-end"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", 3, "ngClass", "click"], ["class", "text-center mt-5", 4, "ngIf"], ["class", "alert alert-danger row mt-5", "role", "alert", 4, "ngIf"], ["class", "row mt-5", 4, "ngIf"], [3, "value"], [1, "text-center", "mt-5"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "10rem", "height", "10rem"], [1, "sr-only"], ["role", "alert", 1, "alert", "alert-danger", "row", "mt-5"], [1, "col-12"], [1, "font-weight-bold"], [1, "row", "mt-5"], ["class", "col-12", 4, "ngIf"], [1, "row"], ["id", "processing", "hidden", "true", 1, "loader"], ["id", "simlarityTable", 1, "table", "table-fixed", "table-bordered", "table-striped"], ["s", ""], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Query molecule from query test set"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Reference column ID from Reference training set"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Reference column name from Reference training set"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Reference molecule column from Reference training set"], ["data-toggle", "tooltip", "data-placement", "top", "data-html", "true", "title", "Similarity distance score: Tanimoto for binary descriptors and Euclidean for continues ones"], [4, "ngFor", "ngForOf"], ["width", "", 1, "align-middle"], [1, "align-middle"], ["width", "300", "height", "150", 3, "id"], ["cmp", ""]], template: function SimilarityComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Input file");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SimilarityComponent_Template_input_change_7_listener($event) { return ctx.change($event.target.files); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Choose file");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Enter a SDFile format input file. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Space");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimilarityComponent_Template_select_ngModelChange_17_listener($event) { return ctx.space = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SimilarityComponent_option_18_Template, 2, 3, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Select space. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Distance cutoff");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimilarityComponent_Template_input_ngModelChange_25_listener($event) { return ctx.dist_cutoff = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "small", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " (0-10) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Version");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimilarityComponent_Template_select_ngModelChange_32_listener($event) { return ctx.version = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, SimilarityComponent_option_33_Template, 2, 2, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "small", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Select version. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Number cutoff");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimilarityComponent_Template_input_ngModelChange_40_listener($event) { return ctx.num_cutoff = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "small", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " (min 1) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimilarityComponent_Template_button_click_45_listener() { return ctx.search(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, SimilarityComponent_div_47_Template, 4, 0, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, SimilarityComponent_div_48_Template, 5, 1, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SimilarityComponent_div_49_Template, 7, 1, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.space);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.spaces));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dist_cutoff);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.version);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.spaces[ctx.space]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.num_cutoff);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx.similarity.file === undefined || ctx.space === undefined || ctx.version === undefined));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.length == 0 && ctx.predicting);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.length > 0);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: ["button.disabled[_ngcontent-%COMP%] {\r\n    cursor: not-allowed;\r\n    pointer-events: none !important;\r\n}\r\n\r\nlabel.disabled[_ngcontent-%COMP%] {\r\n    cursor: not-allowed;\r\n    pointer-events: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltaWxhcml0eS9zaW1pbGFyaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL3NpbWlsYXJpdHkvc2ltaWxhcml0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbC5kaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
    return SimilarityComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SimilarityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-similarity',
                templateUrl: './similarity.component.html',
                styleUrls: ['./similarity.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Similarity"] }, { type: _similarity_service__WEBPACK_IMPORTED_MODULE_3__["SimilarityService"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }]; }, { components: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['cmp']
        }] }); })();


/***/ }),

/***/ "./src/app/similarity/similarity.service.ts":
/*!**************************************************!*\
  !*** ./src/app/similarity/similarity.service.ts ***!
  \**************************************************/
/*! exports provided: SimilarityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarityService", function() { return SimilarityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var SimilarityService = /** @class */ (function () {
    function SimilarityService(http, similarity) {
        this.http = http;
        this.similarity = similarity;
    }
    SimilarityService.prototype.getSpaces = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_smanage + 'spaces';
        return this.http.get(url);
    };
    SimilarityService.prototype.getSearch = function (label) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_smanage + 'search/' + label;
        return this.http.get(url);
    };
    SimilarityService.prototype.getInfo = function (label, version) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_smanage + 'space/' + label + '/version/' + version;
        return this.http.get(url);
    };
    SimilarityService.prototype.search = function (space_name, version, num_cutoff, dist_cutoff) {
        var formData = new FormData();
        formData.append('SDF', this.similarity.file);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('numsel', num_cutoff)
            .set('cutoff', dist_cutoff);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_search + 'space/' + space_name + '/version/' + version;
        return this.http.put(url, formData, { params: params });
    };
    SimilarityService.ɵfac = function SimilarityService_Factory(t) { return new (t || SimilarityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Similarity"])); };
    SimilarityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SimilarityService, factory: SimilarityService.ɵfac, providedIn: 'root' });
    return SimilarityService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimilarityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Similarity"] }]; }, null); })();


/***/ }),

/***/ "./src/app/training-series/training-series.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/training-series/training-series.component.ts ***!
  \**************************************************************/
/*! exports provided: TrainingSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingSeriesComponent", function() { return TrainingSeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");







function TrainingSeriesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Input file info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "File name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Type file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Number of molecules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.model.file_info["name"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.model.file_info["type_file"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.model.file_info["size_M"], " MB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.model.file_info["num_mols"]);
} }
function TrainingSeriesComponent_div_3_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.model.file_fields[key_r3]);
} }
function TrainingSeriesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SDFile fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TrainingSeriesComponent_div_3_li_5_Template, 5, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.objectKeys(ctx_r1.model.file_fields));
} }
var TrainingSeriesComponent = /** @class */ (function () {
    function TrainingSeriesComponent(model) {
        this.model = model;
        this.objectKeys = Object.keys;
        this.num_of_mols = 0;
    }
    /**
     * Checks if the first step is completed and initites the upload method observable
     */
    TrainingSeriesComponent.prototype.ngOnInit = function () {
        this.model.file_info = undefined;
        this.model.file_fields = undefined;
    };
    TrainingSeriesComponent.prototype.onChange = function (fileList) {
        var file = fileList[0];
        this.model.file = file;
        this.model.file_info = {};
        this.model.file_info['name'] = file.name;
        this.model.file_info['size_M'] = ((file.size / 1024) / 1024).toFixed(2);
        var extension = file.name.split('.');
        this.model.file_info['type_file'] = extension[1];
        var fileReader = new FileReader();
        var self = this;
        fileReader.onloadend = function (x) {
            var e_1, _a;
            self.fileContent = fileReader.result;
            self.model.file_info['num_mols'] = (self.fileContent.match(/(\$\$\$\$)/g) || []).length;
            var res_array = self.fileContent.match(/>( )*<(.*)>/g);
            var res_dict = {};
            try {
                for (var res_array_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(res_array), res_array_1_1 = res_array_1.next(); !res_array_1_1.done; res_array_1_1 = res_array_1.next()) {
                    var variable = res_array_1_1.value;
                    var value = variable.replace(/[<> ]*/g, '');
                    if (value in res_dict) {
                        res_dict[value] = res_dict[value] + 1;
                    }
                    else {
                        res_dict[value] = 1;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (res_array_1_1 && !res_array_1_1.done && (_a = res_array_1.return)) _a.call(res_array_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            self.model.file_fields = res_dict;
        };
        fileReader.readAsText(file);
    };
    TrainingSeriesComponent.ɵfac = function TrainingSeriesComponent_Factory(t) { return new (t || TrainingSeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"])); };
    TrainingSeriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrainingSeriesComponent, selectors: [["app-training-series"]], decls: 16, vars: 3, consts: [[1, "container", "m-3"], [1, "row"], ["class", "col-4 card p-0 mb-0 mr-4", 4, "ngIf"], ["class", "col-4 card p-0", 4, "ngIf"], [1, "col-4"], ["id", "input-file-selector", "type", "file", "accept", ".sdf", "onchange", "this.nextElementSibling.innerText = this.files[0].name", 2, "display", "none", 3, "change"], ["for", "input-file-selector", "id", "input-file-selector-label", 1, "custom-file-label"], [1, "col-6"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["id", "key", 1, "text-muted"], [1, "col-4", "card", "p-0", "mb-0", "mr-4"], [1, "card-header", "p-2"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-left", "p-1"], [1, "badge", "badge-primary", "badge-pill"], [1, "col-4", "card", "p-0"], ["class", "list-group-item d-flex justify-content-between align-items-left p-1", 4, "ngFor", "ngForOf"]], template: function TrainingSeriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TrainingSeriesComponent_div_2_Template, 22, 4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TrainingSeriesComponent_div_3_Template, 6, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TrainingSeriesComponent_Template_input_change_6_listener($event) { return ctx.onChange($event.target.files); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Choose file");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TrainingSeriesComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.incremental = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Incremental ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select only if you want this input to be added to existing training series ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.file_info !== undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.file_fields !== undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.incremental);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".card-header[_ngcontent-%COMP%] {\r\n    background: #B8DCED;\r\n    background-color:#B8DCED;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaW5pbmctc2VyaWVzL3RyYWluaW5nLXNlcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nLXNlcmllcy90cmFpbmluZy1zZXJpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjhEQ0VEO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQjhEQ0VEO1xyXG59Il19 */"] });
    return TrainingSeriesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrainingSeriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-training-series',
                templateUrl: './training-series.component.html',
                styleUrls: ['./training-series.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"] }]; }, null); })();


/***/ }),

/***/ "./src/app/validations/validations.component.ts":
/*!******************************************************!*\
  !*** ./src/app/validations/validations.component.ts ***!
  \******************************************************/
/*! exports provided: ValidationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsComponent", function() { return ValidationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals */ "./src/app/Globals.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _model_documentation_model_documentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-documentation/model-documentation.component */ "./src/app/model-documentation/model-documentation.component.ts");
/* harmony import */ var _qualit_conformal_qualit_conformal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../qualit-conformal/qualit-conformal.component */ "./src/app/qualit-conformal/qualit-conformal.component.ts");
/* harmony import */ var _quantit_conformal_quantit_conformal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quantit-conformal/quantit-conformal.component */ "./src/app/quantit-conformal/quantit-conformal.component.ts");








function ValidationsComponent_div_0_app_qualit_conformal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-qualit-conformal", 3);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modelName", ctx_r2.model.name)("modelVersion", ctx_r2.model.version);
} }
function ValidationsComponent_div_0_app_quantit_conformal_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-quantit-conformal", 3);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modelName", ctx_r3.model.name)("modelVersion", ctx_r3.model.version);
} }
function ValidationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationsComponent_div_0_app_qualit_conformal_1_Template, 1, 2, "app-qualit-conformal", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidationsComponent_div_0_app_quantit_conformal_2_Template, 1, 2, "app-quantit-conformal", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-model-documentation", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.model.quantitative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.quantitative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modelName", ctx_r0.model.name)("modelVersion", ctx_r0.model.version);
} }
function ValidationsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ERROR: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.model.error, "! ");
} }
function ValidationsComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WARNING: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Model created but not built. No information to show. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ValidationsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationsComponent_div_1_div_1_Template, 4, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidationsComponent_div_1_div_2_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.model.error != "Info file not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.model.error == "Info file not found");
} }
var ValidationsComponent = /** @class */ (function () {
    function ValidationsComponent(model) {
        this.model = model;
    }
    ValidationsComponent.ɵfac = function ValidationsComponent_Factory(t) { return new (t || ValidationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Globals__WEBPACK_IMPORTED_MODULE_1__["Model"])); };
    ValidationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationsComponent, selectors: [["app-validations"]], inputs: { name: "name", version: "version" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "m-3", 4, "ngIf"], [3, "modelName", "modelVersion", 4, "ngIf"], [3, "modelName", "modelVersion"], [1, "m-3"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], [1, "font-weight-bolder"], ["role", "alert", 1, "alert", "alert-warning", "text-center"]], template: function ValidationsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidationsComponent_div_0_Template, 4, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationsComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.name != undefined && ctx.model.trained);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.name != undefined && ctx.model.error != undefined && !ctx.model.trained);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _model_documentation_model_documentation_component__WEBPACK_IMPORTED_MODULE_3__["ModelDocumentationComponent"], _qualit_conformal_qualit_conformal_component__WEBPACK_IMPORTED_MODULE_4__["QualitConformalComponent"], _quantit_conformal_quantit_conformal_component__WEBPACK_IMPORTED_MODULE_5__["QuantitConformalComponent"]], styles: [".container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIGRpdiB7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG4iXX0= */"] });
    return ValidationsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validations',
                templateUrl: './validations.component.html',
                styleUrls: ['./validations.component.css']
            }]
    }], function () { return [{ type: _Globals__WEBPACK_IMPORTED_MODULE_1__["Model"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], version: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
// Add here your keycloak setup infos
var keycloakConfig = {
    url: 'KEYCLOAK-INSTANCE-URL',
    realm: 'REALM-NAME',
    clientId: 'CLIENT-ID-NAME'
};
var environment = {
    keycloakConfig: keycloakConfig,
    production: false,
    baseUrl: 'http://localhost:8000/api/v1',
    baseUrl_manage: 'http://localhost:8000/api/v1/manage/',
    baseUrl_build: 'http://localhost:8000/api/v1/build/',
    baseUrl_predict: 'http://localhost:8000/api/v1/predict/',
    baseUrl_smanage: 'http://localhost:8000/api/v1/smanage/',
    baseUrl_sbuild: 'http://localhost:8000/api/v1/sbuild/',
    baseUrl_search: 'http://localhost:8000/api/v1/search/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\soft\flameWeb2\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map