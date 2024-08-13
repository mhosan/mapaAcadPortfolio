"use strict";
(self["webpackChunkmapa"] = self["webpackChunkmapa"] || []).push([["src_app_components_portfolio_portfolio_component_ts"],{

/***/ 581:
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class PortfolioComponent {
  static #_ = this.ɵfac = function PortfolioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PortfolioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PortfolioComponent,
    selectors: [["app-portfolio"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 0,
    consts: [[1, "container-fluid", "fondo", 2, "position", "fixed", "height", "100vh"], [1, "row", "text-center", "mb-2", "sticky-top"], ["routerLink", "/", 1, "btn", "btn-secondary", "btn-sm", "col-1", "mb-1", "mt-1", 2, "width", "5vw", "height", "30px", "margin-left", "45px"], [1, "col-10"], ["download", "", "href", "assets/cvHosan.pdf", 1, "col", "mt-1"], ["src", "assets/images/bajar3.png", "alt", "Bajar CV", "title", "Descargar C.V.", 2, "max-width", "5vh", "max-height", "5vh"], [2, "background-color", "rgb(200, 200, 200)", "border-radius", "6px"], ["routerLink", "./dos"], ["routerLink", "./tres"], ["routerLink", "./uno"], ["routerLink", "./cuatro"], ["target", "_blank", "href", "https://github.com/mhosan", "ref", "noreferrer"], ["target", "_blank", "href", "https://gitlab.com/users/mhosan/projects", "ref", "noreferrer"], [1, "row"], [1, "col-11"], [1, "col"], ["title", "Marcelito", "src", "assets/images/perfil-removebg-preview.png", "alt", "Una foto de M.H.", 2, "position", "absolute", "right", "1vw", "max-width", "10vh", "max-height", "10vh"], [1, "row", "text-center", "sticky-bottom"], ["href", "mailto:mhosan@gmail.com", 1, "col"]],
    template: function PortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Portfolio de M.H. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tecnolog\u00EDas favoritas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Preguntas frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Repo Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Repo GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "main")(22, "div", 13)(23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+ 30 a\u00F1os experiencia en sistemas. Desarrollador desktop y web. + 9 a\u00F1os Angular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "footer", 17)(29, "em", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Copyright \u00A9 Marcelo Hosan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18)(32, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enviarme un correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".fondo[_ngcontent-%COMP%] {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        height: 100vh;\n        background-image: url('unsplash3.jpg'); \n\n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n        display: flex;\n        flex-direction: column;\n}\n\nnav[_ngcontent-%COMP%] {\n    height: 33px;\n    padding-top: 2px;\n}\n\nnav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    background-color: rgb(220, 220, 220);\n    color: black;\n    border-radius: 3px;\n    padding-left: 7px;\n    padding-right: 7px;\n    padding-top: 3px;\n    padding-bottom: 5px;\n    margin-left: 5px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: small;\n}\n\nmain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\n    text-align: center;\n    font-style: italic;\n}\n\nfooter[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 101%;\n    left: 0;\n    right: 0;\n    bottom: 0.5vh;\n    background-color: rgb(200, 200, 200);\n    color: black;\n    min-height: 5px;\n    font-size: small;\n}\n\nfooter[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: black;\n}\n\ndiv[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    color: rgb(200,200,200);\n}\n\nheader[_ngcontent-%COMP%] {\n    background-color: rgb(50,50,50);\n}\n\nheader[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    color: rgb(200, 200, 200);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxTQUFTO1FBQ1QsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2Isc0NBQTZELEVBQUUsNENBQTRDO1FBQzNHLHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLGFBQWE7UUFDYixzQkFBc0I7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kbyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy91bnNwbGFzaDMuanBnJyk7IC8qdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RhYmxldC5wbmcnKTsqL1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxubmF2ID4gYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxubWFpbiBwOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMSU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDAuNXZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWluLWhlaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuZm9vdGVyID4gYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmRpdiA+IHAge1xyXG4gICAgY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsNTAsNTApO1xyXG59XHJcblxyXG5oZWFkZXIgPiBoMyB7XHJcbiAgICBjb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_portfolio_portfolio_component_ts.js.map