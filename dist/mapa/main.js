"use strict";
(self["webpackChunkmapa"] = self["webpackChunkmapa"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mapa/mapa.component */ 3733);
/* harmony import */ var _components_cad_cad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cad/cad.component */ 5285);



const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'portfolio',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_portfolio_portfolio_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/portfolio/portfolio.component */ 581)),
  children: [{
    path: 'uno',
    title: "Uno",
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_portfolio_uno_uno_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/portfolio/uno/uno.component */ 3878))
  }, {
    path: 'dos',
    title: "Dos",
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_portfolio_dos_dos_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/portfolio/dos/dos.component */ 9082))
  }, {
    path: 'tres',
    title: "Tres",
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_portfolio_tres_tres_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/portfolio/tres/tres.component */ 9008))
  }, {
    path: 'cuatro',
    title: "Cuatro",
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_portfolio_cuatro_cuatro_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/portfolio/cuatro/cuatro.component */ 4544))
  }, {
    path: '**',
    redirectTo: 'dos'
  }]
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'mapa',
  component: _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__.MapaComponent
}, {
  path: 'cad',
  component: _components_cad_cad_component__WEBPACK_IMPORTED_MODULE_2__.CadComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: '**',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];

/***/ }),

/***/ 5285:
/*!*************************************************!*\
  !*** ./src/app/components/cad/cad.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadComponent: () => (/* binding */ CadComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




function CadComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 12)(2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Este plugin est\u00E1 dise\u00F1ado para los profesionales de la Agrimensura de la Provincia de Buenos Aires, Argentina, los cuales envian archivos cad en formato DXF a la Agencia de Recaudaci\u00F3n de la Provincia (ARBA). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14)(5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadComponent_div_53_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.verControlesGeograficos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CadComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24)(1, "div", 12)(2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Este plugin es de uso gen\u00E9rico. Proporciona informaci\u00F3n de las \u00E1reas de los pol\u00EDgonos que se encuentran en el layer seleccionado y realiza la sumatoria de todas las \u00E1reas. Dispone de una opci\u00F3n para recalcular en caso de modificaciones tanto en la cantidad de poligonos como en el \u00E1rea de cada uno. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14)(5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadComponent_div_54_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.switchShowCardHelpAreaPoligonos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CadComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "div", 12)(2, "h6")(3, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Para instalar complementos (plugins):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cada complemento (plugin) es un archivo con extensi\u00F3n \".dll\". Por ejemplo el que c\u00E1lcula \u00E1reas es PoligonosAreas.dll.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cuando se realiza la instalaci\u00F3n aceptando las opciones por defecto, este archivo de tipo dll quedar\u00E1 en la carpeta \"Archivos de programa/Argengis/Poligonos Areas/PoligonosAreas.dll\" (en el caso de este ejemplo).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br")(11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Es importante tener en claro la ubicaci\u00F3n del complemento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " porque para utilizarlo hay que tipear en la l\u00EDnea de comandos del cad el comando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\"Netload\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " y presionar Enter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br")(19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Este comando muestra una pantalla de selecci\u00F3n de archivos, propia de Windows, y en esa pantalla hay que localizar y seleccionar este archivo dll (\"PoligonosAreas.dll\" en este ejemplo). Con esto el complemento qued\u00E1 incorporado al cad como un comando m\u00E1s.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br")(22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Por \u00FAltimo, en la l\u00EDnea de comandos del cad, escribir \"calcarea\" (para este ejemplo) y presionar Enter para comenzar la ejecuci\u00F3n del complemento (o plugin).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br")(25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Al finalizar la instalaci\u00F3n de cualquier plugin, queda una carpeta en el escritorio de Windows con el nombre del plugin descargado, conteniendo un archivo de texto con instrucciones. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14)(28, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadComponent_div_55_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showCardHelpInstall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class CadComponent {
  constructor() {
    this.showControlesGeograficos = false;
    this.showAreaPoligonos = false;
    this.showHelpInstall = false;
  }
  verControlesGeograficos() {
    this.showControlesGeograficos = !this.showControlesGeograficos;
  }
  switchShowCardHelpAreaPoligonos() {
    this.showAreaPoligonos = !this.showAreaPoligonos;
  }
  showCardHelpInstall() {
    this.showHelpInstall = !this.showHelpInstall;
  }
  static #_ = this.ɵfac = function CadComponent_Factory(t) {
    return new (t || CadComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CadComponent,
    selectors: [["app-cad"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 56,
    vars: 3,
    consts: [[1, "fondo"], [1, "ms-2", "mt-2"], ["routerLink", "/home", 1, "btn", "btn-primary", "btn-sm"], [1, "btn", "btn-primary", "btn-sm", "text-center", "ms-3", 3, "click"], ["href", "assets/InstalarPlugin.pdf", "download", "", 1, "btn", "btn-primary", "btn-sm", "ms-3"], [2, "margin-top", "8vh", "color", "black"], ["id", "divCards", 1, "row"], [1, "col-sm-4"], [1, "card", "h-100"], [1, "card-header", 2, "display", "flex", "justify-content", "space-between"], [1, "d-inline"], [1, "d-inline", "btn", "btn-primary", "btn-sm", 3, "click"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "text-center"], ["href", "assets/ControlesGeo.msi", "download", "", 1, "btn", "btn-primary", "btn-sm"], ["href", "assets/PoligonosAreasInstaller.msi", "download", "", 1, "btn", "btn-primary", "btn-sm"], [1, "card-header", "text-center"], [1, "btn", "btn-primary", "btn-sm"], ["class", "card", "style", "width: 18rem; position:absolute; top: 25vh; left: 5%", 4, "ngIf"], ["class", "card", "style", "width: 18rem; position:absolute; top: 25vh; left: 40%", 4, "ngIf"], ["class", "card", "style", "width: 60rem; position:absolute; top: 10vh; left: 5%", 4, "ngIf"], [1, "card", 2, "width", "18rem", "position", "absolute", "top", "25vh", "left", "5%"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "card", 2, "width", "18rem", "position", "absolute", "top", "25vh", "left", "40%"], [1, "card", 2, "width", "60rem", "position", "absolute", "top", "10vh", "left", "5%"], [1, "card-text", 2, "font-family", "Arial", "font-size", "14px", "line-height", "1.2"]],
    template: function CadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadComponent_Template_button_click_4_listener() {
          return ctx.showCardHelpInstall();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Instalaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Complementos (Plugin's) para cad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Controles geogr\u00E1ficos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadComponent_Template_button_click_16_listener() {
          return ctx.verControlesGeograficos();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12)(19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Este plugin envia el plano activo a la p\u00E1gina de ARBA para que se le apliquen los controles geogr\u00E1ficos y muestra los resultados dentro del programa cad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " La versi\u00F3n trial (de prueba) funciona por completo, sin restricciones, en forma gratuita, por siete dias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14)(24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Descargar plugin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7)(27, "div", 8)(28, "div", 9)(29, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "C\u00E1lculo \u00E1rea pol\u00EDgonos en layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadComponent_Template_button_click_31_listener() {
          return ctx.switchShowCardHelpAreaPoligonos();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12)(34, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Este plugin calcula el \u00E1rea de todas las pol\u00EDlineas cuyo punto de inicio coincida con el punto final (pol\u00EDgonos cerrados), que se encuentran en una determinada capa (layer). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " La versi\u00F3n trial (de prueba) funciona por completo, sin restricciones, en forma gratuita, por siete dias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14)(39, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Descargar plugin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7)(42, "div", 8)(43, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cambiar todos los textos a mayusculas o minusculas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12)(46, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Este plugin cambia todos los textos de un plano, o todos aquellos que se encuentren en una determinada capa (layer|), a mayusculas o minusculas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " La versi\u00F3n trial (de prueba) funciona por completo, sin restricciones, en forma gratuita, por siete dias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14)(51, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "No disponible a\u00FAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CadComponent_div_53_Template, 7, 0, "div", 19)(54, CadComponent_div_54_Template, 7, 0, "div", 20)(55, CadComponent_div_55_Template, 30, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showControlesGeograficos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAreaPoligonos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHelpInstall);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".fondo[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    \n\n    height: 100vh;\n    background-image: url('autocad01.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n  }\n  h4[_ngcontent-%COMP%] {\n    text-align: center;\n    color: rgb(150, 35, 35);\n    margin-top: 5vh;\n}\n#divCards[_ngcontent-%COMP%] {\n  max-height: 85%; \n  margin: 10vh 15vh;\n  border-radius: 10px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYWQvY2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isc0NBQTZEO0lBQzdELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7OztHQWFHIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKmJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXV0b2NhZDAxLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxNTAsIDM1LCAzNSk7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuI2RpdkNhcmRzIHtcclxuICBtYXgtaGVpZ2h0OiA4NSU7IFxyXG4gIG1hcmdpbjogMTB2aCAxNXZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLyogLnF1ZXN0aW9uLW1hcmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTIwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICB3aWR0aDogMjAwcHg7XHJcbn0gKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 0,
    consts: [[1, "container-fluid", "fondo"], [1, "parent"], [1, "card", "me-5", 2, "width", "18rem"], [1, "card-header", "text-center"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "text-center"], ["routerLink", "/cad", 1, "btn", "btn-primary", "btn-sm"], [1, "card", 2, "width", "18rem"], ["routerLink", "/mapa", 1, "btn", "btn-primary", "btn-sm"], [1, "footer"], ["routerLink", "/portfolio", 2, "color", "black"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Argengis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Empowering CAD + GIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "div", 2)(7, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add-ons (Plugins) para Autocad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add-ons (Plugins) para Autocad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Estos complementos se ejecutan dentro de la aplicaci\u00F3n cad. Deben ser descargados e instalados en la computadora donde se los quiere utilizar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " La versi\u00F3n de prueba funciona en su totalidad, sin ninguna restricci\u00F3n, por siete d\u00EDas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6)(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8)(19, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Visor Gis Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Visor Gis web con manejo de capas base y capas superpuestas (overlays). Contiene una funci\u00F3n de ruteo para establecer la ruta optima entre dos puntos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Es una versi\u00F3n libre que funciona sin restricciones. Est\u00E1 pensada como un mapa base para desarrollos gis web. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6)(27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Gis (map)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "footer", 10)(31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00A9 M.Hosan 2024 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".fondo[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  \n\n  height: 100vh;\n  background-image: url('fondo1.jpg'); \n\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n}\n\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: white;\n    margin-top: 5vh;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin-top: 3vh;\n}\n\n.parent[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin-top: 5vh;\n\n  }\n  \n\n\n\n\n\n  .card[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  .footer[_ngcontent-%COMP%] {\n    background-color: #09f;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 5px;\n    text-align: center;\n    font-style: italic;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQ0FBMEQsRUFBRSw0Q0FBNEM7RUFDeEcsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTs7RUFFakI7RUFDQTs7OztLQUlHO0VBQ0g7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLypib3gtc2l6aW5nOiBib3JkZXItYm94OyovXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9uZG8xLmpwZycpOyAvKnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90YWJsZXQucG5nJyk7Ki9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzdmg7XHJcbn1cclxuXHJcbi5wYXJlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuXHJcbiAgfVxyXG4gIC8qIC5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAwLjU7XHJcbiAgfSAqL1xyXG4gIC5jYXJkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlmO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2449:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class MainComponent {
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["app-main"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3733:
/*!***************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapaComponent: () => (/* binding */ MapaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 9847);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/turf */ 5995);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-routing-machine */ 512);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _servicios_get_datos_web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/get-datos-web.service */ 104);
/* harmony import */ var _servicios_capa_ign_partidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/capa-ign-partidos.service */ 3948);
/* harmony import */ var _servicios_capa_arba_partidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servicios/capa-arba-partidos.service */ 4138);
/* harmony import */ var _servicios_capa_circuitos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/capa-circuitos.service */ 8212);
/* harmony import */ var _servicios_capa_secciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../servicios/capa-secciones.service */ 5314);
/* harmony import */ var src_app_servicios_capa_conae_riesgo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/capa-conae-riesgo.service */ 1945);
/* harmony import */ var src_app_servicios_capa_estabEduca_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/capa-estabEduca.service */ 7314);



//import * as L from 'leaflet';










function MapaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Ruteo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 7)(5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Posici\u00F3n inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MapaComponent_div_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.ruteoPuntoA());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Punto A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Posici\u00F3n final");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MapaComponent_div_3_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.ruteoPuntoB());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Punto B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 10)(15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Rutear");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MapaComponent_div_3_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.comenzarRuteo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
}
let miMapa;
class MapaComponent {
  constructor(servicioDatosWeb, servicioIGN, servicioArba, servicioCircuitos, servicioSecciones, servicioConaeRiesgo, servicioEstablecimientosEducativos) {
    this.servicioDatosWeb = servicioDatosWeb;
    this.servicioIGN = servicioIGN;
    this.servicioArba = servicioArba;
    this.servicioCircuitos = servicioCircuitos;
    this.servicioSecciones = servicioSecciones;
    this.servicioConaeRiesgo = servicioConaeRiesgo;
    this.servicioEstablecimientosEducativos = servicioEstablecimientosEducativos;
    this.title = 'mhMapa';
    this.imagenNasaVisible = false;
    this.vengoDe = " ";
  }
  ngOnInit() {
    L.Icon.Default.imagePath = "assets/leaflet/";
    this.iniciarMapa();
    this.agregarLayerGroupMarcadores();
  }
  //===================================================================
  // Agregar layer para los marcadores
  //===================================================================
  agregarLayerGroupMarcadores() {
    this.marcadoresLayerA = L.layerGroup().addTo(miMapa);
    this.marcadoresLayerB = L.layerGroup().addTo(miMapa);
  }
  //===================================================================
  // Iniciar el mapa
  //===================================================================
  iniciarMapa() {
    //-----------------------------------------------------------------
    this.googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    this.osm2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20
    });
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    this.argenMap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
      minZoom: 1,
      maxZoom: 20
    });
    //esri world topo map-----------------------------------------------------------------
    this.openmap = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
      attribution: 'terms and feedback'
    });
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    this.googleMaps = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    this.esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 22
    });
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    this.esriTransportes = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}');
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    //https://www.terrestris.de/en/
    this.wmsTerrestrisTopo = L.tileLayer.wms('https://ows.terrestris.de/osm/service?', {
      layers: 'TOPO-OSM-WMS'
    });
    this.wmsTerrestrisOsm = L.tileLayer.wms('https://ows.mundialis.de/services/service?', {
      layers: 'OSM-WMS'
    });
    //-----------------------------------------------------------------
    miMapa = L.map('mapid', {
      contextmenu: true,
      contextmenuWidth: 180,
      contextmenuItems: [{
        text: 'Ver las coordenadas',
        callback: this.verCoordenadas,
        icon: 'assets/images/coordenadas.png'
      }, {
        text: 'Centrar aqui',
        callback: this.centrarMapa,
        icon: 'assets/images/banderita.png'
      }, '-', {
        text: 'Acercar',
        callback: this.acercar,
        icon: 'assets/images/zoom-in.png'
      }, {
        text: 'Alejar',
        callback: this.alejar,
        icon: 'assets/images/zoom-out.png'
      }],
      center: [-34.92120403564976, -57.95442560727841],
      //[-36.214269, -61.073242]
      zoom: 10.5,
      zoomControl: false,
      maxZoom: 20
    }).addLayer(this.osm2);
    this.capaBaseActiva = this.osm2;
    L.control.scale().addTo(miMapa);
    /* L.control.coordinates({
      position:"bottomleft", //optional default "bootomright"
      decimals:2, //optional default 4
      decimalSeperator:".", //optional default "."
      labelTemplateLat:"Latitude: {y}", //optional default "Lat: {y}"
      labelTemplateLng:"Longitude: {x}", //optional default "Lng: {x}"
      enableUserInput:true, //optional default true
      useDMS:false, //optional default false
      useLatLngOrder: true, //ordering of labels, default false-> lng-lat
      markerType: L.marker, //optional default L.marker
      markerProps: {}, //optional default {},
      labelFormatterLng : function(lng){return lng+" lng"}, //optional default none,
      labelFormatterLat : function(lat){return lat+" lat"}, //optional default none
      //customLabelFcn: function(latLonObj, opts) { "Geohash: " + encodeGeoHash(latLonObj.lat, latLonObj.lng)} //optional default none
    }).addTo(miMapa); */
    L.control.coordinates({
      labelTemplateLat: "Latitud:  {y}",
      labelTemplateLng: "Longitud:  {x},",
      decimals: 2,
      useDMS: false
    }).addTo(miMapa);
    L.control.zoom({
      position: 'bottomright'
    }).addTo(miMapa);
    /* let marker = L.marker([-34.893832, -57.957300]).bindPopup('Ud. está aqui!');
      miMapa.addLayer(marker); */
  } //<--------------------------------------end iniciarMapa
  verCoordenadas(e) {
    const popupCoordenadas = L.popup();
    popupCoordenadas.setLatLng(e.latlng).setContent('Coordenadas: ' + e.latlng).openOn(miMapa);
  }
  centrarMapa(e) {
    miMapa.panTo(e.latlng);
  }
  acercar(e) {
    miMapa.zoomIn();
  }
  alejar(e) {
    miMapa.zoomOut();
  }
  //===================================================================
  // NO USAR - el wfs del ign, ojo es muy lento! este lee de la web
  //===================================================================
  capaWFSIgn() {
    if (miMapa.hasLayer(this.layerWFSIgn)) {
      miMapa.removeLayer(this.layerWFSIgn);
    }
    this.servicioDatosWeb.getWfsIgn().subscribe(respuestaJson => {
      //console.log('El ign respondió: ', respuestaJson);
      this.layerWFSIgn = this.servicioIGN.getWfs(respuestaJson, 'Partido');
      miMapa.addLayer(this.layerWFSIgn);
      miMapa.fitBounds(this.layerWFSIgn.getBounds());
    });
  }
  //===================================================================
  // el wfs educacion gob ar, no es conae ni conaeRiesto, son las universidades
  // TODO: cambiar el nombre de este metodo!
  //===================================================================
  capaConaeRiesgo() {
    if (!this.layerConaeRiesgo === undefined) {
      if (miMapa.hasLayer(this.layerConaeRiesgo)) {
        miMapa.removeLayer(this.layerConaeRiesgo);
      }
    }
    this.servicioDatosWeb.getWfsConaeRiesgoEpi().subscribe(respuestaJson => {
      //console.log('Educacion respondió: ', respuestaJson);
      this.layerConaeRiesgo = this.servicioConaeRiesgo.getConaeRiesgo(respuestaJson);
      miMapa.addLayer(this.layerConaeRiesgo);
      miMapa.fitBounds(this.layerConaeRiesgo.getBounds());
    });
  }
  //===================================================================
  // el wfs educacion gob ar, establecimientos educativos
  //===================================================================
  capaEstablecimientosEducativos() {
    if (!this.layerEstablecimientosEducativos === undefined) {
      if (miMapa.hasLayer(this.layerEstablecimientosEducativos)) {
        miMapa.removeLayer(this.layerEstablecimientosEducativos);
      }
    }
    this.servicioDatosWeb.getWfsEstablecimientosEducativos().subscribe(respuestaJson => {
      //console.log('Educacion respondió: ', respuestaJson);
      this.layerEstablecimientosEducativos = this.servicioEstablecimientosEducativos.getEstabEduca(respuestaJson);
      miMapa.addLayer(this.layerEstablecimientosEducativos);
      miMapa.fitBounds(this.layerEstablecimientosEducativos.getBounds());
    });
  }
  //===================================================================
  // el wfs de Arba (desde un geoJson: ./assets/partidos.txt)
  //===================================================================
  capaWFSArba() {
    if (!this.layerWFSArba === undefined) {
      if (miMapa.hasLayer(this.layerWFSArba)) {
        miMapa.removeLayer(this.layerWFSArba);
      }
    }
    this.servicioDatosWeb.getWfsArba().subscribe(respuestaJson => {
      this.layerWFSArba = this.servicioArba.getWfs(respuestaJson, '');
      miMapa.addLayer(this.layerWFSArba);
      //miMapa.fitBounds(this.layerWFSArba.getBounds());
    });
  }
  //===================================================================
  // circuitos electorales (desde un geoJson: ./assets/circuitosElectoralesBuenosAires.geojson)
  //===================================================================
  capaCircuitos() {
    if (!this.layerCircuitos === undefined) {
      if (miMapa.hasLayer(this.layerCircuitos)) {
        miMapa.removeLayer(this.layerCircuitos);
      }
    }
    this.servicioDatosWeb.getCircuitosElectorales().subscribe(respuestaJson => {
      this.layerCircuitos = this.servicioCircuitos.getCircuitosDepurado(respuestaJson, '');
      miMapa.addLayer(this.layerCircuitos);
      //miMapa.fitBounds(this.layerCircuitos.getBounds());
    });
  }
  //===================================================================
  // secciones  electorales (desde un geoJson: ./assets/seccElec.geojson)
  //===================================================================
  capaSecciones() {
    if (!this.layerSecciones === undefined) {
      if (miMapa.hasLayer(this.layerSecciones)) {
        miMapa.removeLayer(this.layerSecciones);
      }
    }
    this.servicioDatosWeb.getSeccionesElectorales().subscribe(respuestaJson => {
      this.layerSecciones = this.servicioSecciones.getCircuitosDepurado(respuestaJson, '');
      miMapa.addLayer(this.layerSecciones);
      //miMapa.fitBounds(this.layerSecciones.getBounds());
    });
  }
  //===================================================================
  // geolocalizar al usuario con Leaflet (en local no funca)
  //===================================================================
  geolocaLeaflet() {
    miMapa.locate({
      setView: true,
      maxZoom: 16
    }).on('locationfound', e => {
      let marker = L.marker([e.latitude, e.longitude]).bindPopup('Ud. está aqui!');
      miMapa.addLayer(marker);
      var radius = e.accuracy * 300;
      var location = e.latlng;
      let circle = L.circle(location, radius);
      miMapa.addLayer(circle);
    }).on('locationerror', e => {
      console.log(e);
      alert('Location access denied');
    });
  }
  //===================================================================
  // geolocalizar al usuario con html
  //===================================================================
  geolocaHtml() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    function onSuccess(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let marker = L.marker([latitude, longitude]).bindPopup('Ud. está aqui!');
      miMapa.addLayer(marker);
      var radius = 300;
      var location = [latitude, longitude];
      let circle = L.circle(location, radius);
      miMapa.addLayer(circle);
      const today = new Date();
      const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      alert(`Ok, ubicación resuelta. ${dateTime}`);
    }
    function onError(error) {
      var txt;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          txt = 'Location permission denied';
          break;
        case error.POSITION_UNAVAILABLE:
          txt = 'Location position unavailable';
          break;
        case error.TIMEOUT:
          txt = 'Location position lookup timed out';
          break;
        default:
          txt = 'Unknown position.';
      }
      alert(txt);
    }
  }
  //===================================================================
  // gestor de msgs de la navBar <---
  //=================================================================== 
  navBarMsgDrv(seleccion) {
    if (seleccion['accion']) {
      if (seleccion['accion'] == 'geolocaLeaflet') {
        console.log('geolocalizar con Leaflet');
        this.geolocaLeaflet();
        return;
      }
      if (seleccion['accion'] == 'geolocaHtml') {
        console.log('geolocalizar con html');
        this.geolocaHtml();
        return;
      }
    }
    if (seleccion === 'activarRuteo') {
      console.log('Activar ruteo');
      this.cardPuntosRuteo = true;
    }
    let laCapa;
    //console.log(`La capa seleccionada es: ${seleccion['nombre']}, capaBase: ${seleccion['capaBase']} y su estado actual de encendido es: ${seleccion['encendido']}`);
    if (!seleccion['capaBase']) {
      //<---- es una capa overlay
      switch (seleccion['encendido']) {
        case true:
          //hay que apagar la capa conaeRiesgo
          switch (seleccion['nombre']) {
            case 'partidos':
              if (miMapa.hasLayer(this.layerWFSArba)) {
                miMapa.removeLayer(this.layerWFSArba);
              }
              break;
            case 'secciones':
              if (miMapa.hasLayer(this.layerSecciones)) {
                miMapa.removeLayer(this.layerSecciones);
              }
              break;
            case 'circuitos':
              if (miMapa.hasLayer(this.layerCircuitos)) {
                miMapa.removeLayer(this.layerCircuitos);
              }
              break;
            case 'conaeRiesgo':
              if (miMapa.hasLayer(this.layerConaeRiesgo)) {
                miMapa.removeLayer(this.layerConaeRiesgo);
              }
              break;
            case 'establecimientosEducativos':
              if (miMapa.hasLayer(this.layerEstablecimientosEducativos)) {
                miMapa.removeLayer(this.layerEstablecimientosEducativos);
              }
          }
          break;
        case false:
          //hay que encender la capa 
          switch (seleccion['nombre']) {
            case 'partidos':
              this.capaWFSArba();
              break;
            case 'secciones':
              this.capaSecciones();
              break;
            case 'circuitos':
              this.capaCircuitos();
              break;
            case 'conaeRiesgo':
              this.capaConaeRiesgo();
              break;
            case 'establecimientosEducativos':
              this.capaEstablecimientosEducativos();
          }
          break;
      }
    } else {
      //<---- es una capa base
      switch (seleccion['nombreFantasia']) {
        case 'ArgenMap IGN (xyz)':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.argenMap.addTo(miMapa);
          this.capaBaseActiva = this.argenMap;
          break;
        case 'Open Street Map':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.osm2.addTo(miMapa);
          this.capaBaseActiva = this.osm2;
          break;
        case 'Google callejero':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.googleMaps.addTo(miMapa);
          this.capaBaseActiva = this.googleMaps;
          break;
        case 'Google hibrido':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.googleHybrid.addTo(miMapa);
          this.capaBaseActiva = this.googleHybrid;
          break;
        case 'ArcGis OnLine':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.openmap.addTo(miMapa);
          this.capaBaseActiva = this.openmap;
          break;
        case 'Esri sat':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.esriSat.addTo(miMapa);
          this.capaBaseActiva = this.esriSat;
          break;
        case 'Esri transportes':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.esriTransportes.addTo(miMapa);
          this.capaBaseActiva = this.esriTransportes;
          break;
        case 'Terrestris topo':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.wmsTerrestrisTopo.addTo(miMapa);
          this.capaBaseActiva = this.wmsTerrestrisTopo;
          break;
        case 'Terrestris Osm':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.wmsTerrestrisOsm.addTo(miMapa);
          this.capaBaseActiva = this.wmsTerrestrisOsm;
          break;
        case 'Esri World Topo Map':
          if (miMapa.hasLayer(this.capaBaseActiva)) {
            miMapa.removeLayer(this.capaBaseActiva);
          }
          this.openmap.addTo(miMapa);
          this.capaBaseActiva = this.openmap;
          break;
      }
    }
  }
  //===================================================================
  // ruteo, seleccionar punto inicio
  //===================================================================
  ruteoPuntoA() {
    const iconoSalida = L.icon({
      iconUrl: 'assets/ruteo/ruteoSalida03.png',
      iconSize: [27, 30],
      iconAnchor: [12, 22],
      popupAnchor: [1, -20]
    });
    this.seleccionUbicacion(true, iconoSalida);
    this.vengoDe = "A";
  }
  //===================================================================
  // ruteo, seleccionar punto final
  //===================================================================
  ruteoPuntoB() {
    const iconoLlegada = L.icon({
      iconUrl: 'assets/ruteo/ruteoLlegada03.png',
      iconSize: [27, 30],
      iconAnchor: [12, 22],
      popupAnchor: [1, -20]
    });
    this.seleccionUbicacion(true, iconoLlegada);
    this.vengoDe = "B";
  }
  //===================================================================
  // comenzar el ruteo
  //===================================================================
  comenzarRuteo() {
    this.seleccionUbicacion(false, "-");
    console.log(this.marcadorRuteoPuntoA._latlng);
    console.log(this.marcadorRuteoPuntoB._latlng);
    this.cardPuntosRuteo = false;
    this.iniciarRuteo(this.marcadorRuteoPuntoA, this.marcadorRuteoPuntoB);
    this.marcadoresLayerA.clearLayers();
    this.marcadoresLayerB.clearLayers();
  }
  //===================================================================
  // ACTIVAR seleccion de una posición en el mapa (viene de seleccionar
  // punto A o B)
  //===================================================================
  seleccionUbicacion(activar, iconoAUtilizar) {
    if (activar) {
      miMapa.on('click', e => {
        let coordPunto = e.latlng;
        let marcadorPunto = L.marker(coordPunto, {
          icon: iconoAUtilizar,
          draggable: 'true'
        }).bindPopup(coordPunto.toString());
        localStorage.setItem(`punto${this.vengoDe}`, JSON.stringify({
          lat: coordPunto.lat,
          lng: coordPunto.lng
        }));
        marcadorPunto.on('dragend', event => {
          marcadorPunto = event.target;
          coordPunto = "";
          coordPunto = marcadorPunto.getLatLng();
          marcadorPunto.setLatLng(coordPunto, {
            icon: iconoAUtilizar,
            draggable: 'true'
          }).bindPopup(coordPunto.toString()).update();
          localStorage.setItem(`punto${this.vengoDe}`, JSON.stringify({
            lat: coordPunto.lat,
            lng: coordPunto.lng
          }));
        });
        if (this.vengoDe === "A") {
          this.marcadorRuteoPuntoA = marcadorPunto;
          miMapa.addLayer(this.marcadorRuteoPuntoA);
          this.marcadoresLayerA.clearLayers();
          this.marcadoresLayerA.addLayer(this.marcadorRuteoPuntoA);
        } else if (this.vengoDe === "B") {
          this.marcadorRuteoPuntoB = marcadorPunto;
          miMapa.addLayer(this.marcadorRuteoPuntoB);
          this.marcadoresLayerB.clearLayers();
          this.marcadoresLayerB.addLayer(this.marcadorRuteoPuntoB);
        }
      });
    } else {
      miMapa.off('click');
    }
  }
  //===================================================================
  // Iniciar ruteo
  //===================================================================
  iniciarRuteo(puntoA, puntoB) {
    this.controlRuteo = L.Routing.control({
      waypoints: [puntoA._latlng, puntoB._latlng],
      router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1'
      }),
      language: 'it',
      collapsible: true,
      autoRoute: true,
      routeWhileDragging: true,
      reverseWaypoints: true,
      showAlternatives: true,
      altLineOptions: {
        styles: [{
          color: 'black',
          opacity: 0.15,
          weight: 9
        },
        //sombra
        {
          color: 'white',
          opacity: 0.8,
          weight: 6
        },
        //contorno
        {
          color: 'blue',
          opacity: 0.5,
          weight: 2
        } //centro
        ]
      },
      summaryTemplate: '<h2>Trayectoria: {name}</h2><h3>Distancia: {distance}, Tiempo: {time}</h3>'
    }).addTo(miMapa);
    const tables = document.querySelectorAll('table');
    console.log(tables);
    L.Routing.errorControl(this.controlRuteo).addTo(miMapa);
    L.Routing.Formatter = L.Class.extend({
      options: {
        language: 'it'
      }
    });
    let divRuteo = document.getElementsByClassName("leaflet-routing-container")[0];
    divRuteo.style.position = "absolute";
    divRuteo.style.left = "-150vh";
    divRuteo.style.top = "3vh";
    const botonCerrarRuteo = document.createElement("button");
    botonCerrarRuteo.textContent = "Cerrar ruteo";
    botonCerrarRuteo.className = "btn btn-primary btn-sm mt-1 mb-1 ms-1";
    botonCerrarRuteo.onclick = () => {
      console.log("Se hizo clic en el botón");
      this.controlRuteo.remove();
    };
    divRuteo.appendChild(botonCerrarRuteo);
  }
  turf() {
    const puntoUno = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.point([-34.889176, -58.046951]);
    console.log(puntoUno);
  }
  static #_ = this.ɵfac = function MapaComponent_Factory(t) {
    return new (t || MapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_servicios_get_datos_web_service__WEBPACK_IMPORTED_MODULE_3__.GetDatosWebService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_servicios_capa_ign_partidos_service__WEBPACK_IMPORTED_MODULE_4__.CapaIgnPartidosService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_servicios_capa_arba_partidos_service__WEBPACK_IMPORTED_MODULE_5__.CapaArbaPartidosService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_servicios_capa_circuitos_service__WEBPACK_IMPORTED_MODULE_6__.CapaCircuitosService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_servicios_capa_secciones_service__WEBPACK_IMPORTED_MODULE_7__.CapaSeccionesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_servicios_capa_conae_riesgo_service__WEBPACK_IMPORTED_MODULE_8__.CapaConaeRiesgoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_servicios_capa_estabEduca_service__WEBPACK_IMPORTED_MODULE_9__.CapaEstabEducaService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: MapaComponent,
    selectors: [["app-mapa"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 1,
    consts: [[3, "msgNavbar"], ["id", "mapid"], ["class", "card cardRuteo", 4, "ngIf"], ["hidden", "", 1, "btn", "btn-primary", "mt-5", 2, "position", "absolute", "z-index", "10000", 3, "click"], [1, "card", "cardRuteo"], [1, "card-body"], [1, "card-title"], [1, "inline-container"], ["for", "botonA"], ["id", "botonA", 1, "btn", "btn-primary", "btn-sm", "ms-2", 3, "click"], [1, "inline-container", "mt-3"], ["for", "botonB"], ["id", "botonB", 1, "btn", "btn-primary", "btn-sm", "ms-2", 3, "click"], ["for", "botonFin"], ["id", "botonFin", 1, "btn", "btn-primary", "btn-sm", "ms-2", 3, "click"]],
    template: function MapaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("msgNavbar", function MapaComponent_Template_app_navbar_msgNavbar_0_listener($event) {
          return ctx.navBarMsgDrv($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MapaComponent_div_3_Template, 19, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MapaComponent_Template_button_click_4_listener() {
          return ctx.turf();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Test Turf");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cardPuntosRuteo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    styles: ["#mapid[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 93%;\n    \n\n    width: 100%;\n    left: 0px;\n    top: 7vh;\n}\n\n.cardRuteo[_ngcontent-%COMP%] {\n    z-index: 10000;\n    width: 25vw;\n    margin-top: 7vh;\n    margin-left: 1vh;\n}\n\n.inline-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-evenly;\n    align-items: flex-start;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXBhL21hcGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBpZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDkzJTtcclxuICAgIC8qMzByZW07Ki9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiA3dmg7XHJcbn1cclxuXHJcbi5jYXJkUnV0ZW8ge1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxdmg7XHJcbn1cclxuXHJcbi5pbmxpbmUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);




function NavbarComponent_ul_26_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_ul_26_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_ul_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 35)(1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ul_26_Template_li_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.capaSeleccionadaBase(item_r2.id, item_r2.capaBase, item_r2.nombre, item_r2.nombreFantasia, item_r2.encendido));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_ul_26_span_4_Template, 2, 0, "span", 37)(5, NavbarComponent_ul_26_span_5_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.nombreFantasia);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.encendido == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.encendido == true);
  }
}
function NavbarComponent_ul_31_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_ul_31_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_ul_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 35)(1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ul_31_Template_li_click_1_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.capaSeleccionadaOverlay(item_r5.id, item_r5.capaBase, item_r5.nombre, item_r5.encendido));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_ul_31_span_4_Template, 2, 0, "span", 37)(5, NavbarComponent_ul_31_span_5_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.nombreFantasia);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.encendido == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.encendido == true);
  }
}
class NavbarComponent {
  constructor() {
    this.capasBase = [];
    this.capasOverlay = [];
    this.msgNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.capasOverlay[0] = {
      id: 0,
      nombreFantasia: "Capa partidos de Arba (GeoJson)",
      capaBase: false,
      nombre: 'partidos',
      encendido: false
    };
    this.capasOverlay[1] = {
      id: 1,
      nombreFantasia: "Capa secc. elect. (GeoJson)",
      capaBase: false,
      nombre: 'secciones',
      encendido: false
    };
    this.capasOverlay[2] = {
      id: 2,
      nombreFantasia: "Capa circuitos elect. (GeoJson)",
      capaBase: false,
      nombre: 'circuitos',
      encendido: false
    };
    this.capasOverlay[3] = {
      id: 3,
      nombreFantasia: "Universidades (WFS https://mapa.educacion.gob.ar). Features tot: 1450. Viendo: 1450",
      capaBase: false,
      nombre: 'conaeRiesgo',
      encendido: false
    };
    this.capasOverlay[4] = {
      id: 4,
      nombreFantasia: "Establecimientos Educativos (WFS https://mapa.educacion.gob.ar). Features tot: 64490. Viendo: 5000",
      capaBase: false,
      nombre: 'establecimientosEducativos',
      encendido: false
    };
    //----------------------------------------------------------------
    this.capasBase[0] = {
      id: 0,
      nombreFantasia: "Open Street Map",
      capaBase: true,
      nombre: 'osm2',
      encendido: true
    };
    this.capasBase[1] = {
      id: 1,
      nombreFantasia: "ArgenMap IGN (xyz)",
      capaBase: true,
      nombre: 'argenMap',
      encendido: false
    };
    this.capasBase[2] = {
      id: 2,
      nombreFantasia: "Google callejero",
      capaBase: true,
      nombre: 'googleMaps',
      encendido: false
    };
    this.capasBase[3] = {
      id: 3,
      nombreFantasia: "Google hibrido",
      capaBase: true,
      nombre: 'googleHybrid',
      encendido: false
    };
    this.capasBase[4] = {
      id: 4,
      nombreFantasia: "ArcGis OnLine",
      capaBase: true,
      nombre: 'openmap',
      encendido: false
    };
    this.capasBase[5] = {
      id: 5,
      nombreFantasia: "Esri sat",
      capaBase: true,
      nombre: 'esriSat',
      encendido: false
    };
    this.capasBase[6] = {
      id: 6,
      nombreFantasia: "Esri transportes",
      capaBase: true,
      nombre: 'esriTransportes',
      encendido: false
    };
    this.capasBase[7] = {
      id: 7,
      nombreFantasia: "Terrestris topo",
      capaBase: true,
      nombre: 'wmsTerrestrisTopo',
      encendido: false
    };
    this.capasBase[8] = {
      id: 8,
      nombreFantasia: "Terrestris Osm",
      capaBase: true,
      nombre: 'wmsTerrestrisOsm',
      encendido: false
    };
    this.capasBase[9] = {
      id: 9,
      nombreFantasia: "Esri World Topo Map",
      capaBase: true,
      nombre: 'openmap',
      encendido: false
    };
  }
  capaSeleccionadaBase(idCapaSeleccionada, tipoCapaSeleccionada, nombreCapaSeleccionada, nombreFantasiaCapaSeleccionada, encendidoCapaSeleccionada) {
    if (encendidoCapaSeleccionada) {
      alert("La capa ya está encendida...");
      return;
    } else {
      let capaEnviar = {
        nombre: nombreCapaSeleccionada,
        capaBase: tipoCapaSeleccionada,
        nombreFantasia: nombreFantasiaCapaSeleccionada,
        encendido: encendidoCapaSeleccionada
      };
      this.capasBase.forEach(element => {
        element.encendido = false;
      });
      this.capasBase[idCapaSeleccionada]['encendido'] = !encendidoCapaSeleccionada;
      this.msgNavbar.emit(capaEnviar);
    }
  }
  capaSeleccionadaOverlay(idCapaSeleccionada, tipoCapaSeleccionada, nombreCapaSeleccionada, encendidoCapaSeleccionada) {
    let capaEnviar = {
      id: idCapaSeleccionada,
      nombre: nombreCapaSeleccionada,
      capaBase: tipoCapaSeleccionada,
      encendido: encendidoCapaSeleccionada
    };
    this.capasOverlay[idCapaSeleccionada]['encendido'] = !encendidoCapaSeleccionada;
    this.msgNavbar.emit(capaEnviar);
  }
  activarRuteo() {
    this.msgNavbar.emit('activarRuteo');
    const eventoClick = new Event('click');
    document.dispatchEvent(eventoClick);
    document.getElementById('OpenMenu').dispatchEvent(eventoClick);
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    outputs: {
      msgNavbar: "msgNavbar"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 51,
    vars: 2,
    consts: [[1, "navbar", "fixed-top", "py-0", 2, "background-color", "#d9d9d9"], ["href", "#", 1, "navbar-brand"], [1, "fw-bold", "px-2"], ["routerLink", "/home", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar", "aria-controls", "offcanvasNavbar", "id", "OpenMenu", 1, "btn", "btn-primary", "btn-sm", "me-2"], [1, "navbar-toggler-icon"], ["tabindex", "-1", "id", "offcanvasNavbar", "aria-labelledby", "offcanvasNavbarLabel", "data-modal", "false", 1, "offcanvas", "offcanvas-end", "offcanvas-menu"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "offcanvas-body"], ["id", "accordionExample", 1, "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], [1, "navbar-nav", "justify-content-end", "flex-grow-1", "pe-3"], [1, "card-title"], [1, "card", 2, "width", "17rem", "height", "9rem", "overflow", "auto"], [1, "card-body"], ["class", "list-group", 4, "ngFor", "ngForOf"], [1, "card-title", "mt-3"], [1, "card", 2, "width", "17rem", "height", "9rem", "overflow", "auto", "margin-right", "1vh"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "inline-container"], ["id", "botonA", 1, "btn", "btn-primary", "btn-sm", "ms-2", 3, "click"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["role", "search", 1, "d-flex", "mt-4"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "py-0", 3, "click"], [4, "ngIf"], [1, "fa", "fa-eye-slash", "fa-1x"], [1, "fa", "fa-eye", "fa-1x"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MH - ArgenGis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ArgenGis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "h2", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Gesti\u00F3n de capas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "ul", 17)(22, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CAPAS BASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19)(25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_ul_26_Template, 6, 3, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CAPAS SUPERPUESTAS (OVERLAY)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23)(30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_ul_31_Template, 6, 3, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12)(33, "h2", 24)(34, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Ruteo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26)(37, "div", 16)(38, "span", 27)(39, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_39_listener() {
          return ctx.activarRuteo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Activar ruteo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12)(42, "h2", 29)(43, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31)(46, "div", 16)(47, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.capasBase);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.capasOverlay);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["\n\nbody[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], dt[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  html[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n  }\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n    box-sizing: inherit;\n  }\n\n\n  \nh5[_ngcontent-%COMP%] {\n    font-size: 10px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.offcanvas-menu[_ngcontent-%COMP%] {\n    width: 23vw;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.navbar-toggler[_ngcontent-%COMP%] {\n    height: 22px;\n    vertical-align: top;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    \n\n}\n\n.list-group-item[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%] {\n    background-color: rgba(242, 242, 242, 0.6);\n}\n\n\n\n.inline-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n\n\n\n@media (min-width: 576px) {\n    .botonMenu[_ngcontent-%COMP%] {\n        position: absolute;\n        z-index: 450;\n        right: 18px;\n    }\n    .tarjeta[_ngcontent-%COMP%] {\n        position: absolute;\n        z-index: 450;\n        top: 33px;\n        right: 15px;\n        width: 18rem;\n    }\n    .card-title[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n    select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n        font-size: 12px;\n        font-style: oblique;\n    }\n    .form-control[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n}\n\n\n\n\n\n@media (max-width: 575.98px) {\n    .botonMenu[_ngcontent-%COMP%] {\n        position: absolute;\n        z-index: 450;\n        right: 26px;\n    }\n    .tarjeta[_ngcontent-%COMP%] {\n        position: absolute;\n        z-index: 450;\n        top: 60px;\n        right: 22px;\n        width: 18rem;\n    }\n    .card-title[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n    select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n    .form-control[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0lBQ0ksU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiwyQ0FBMkM7O0FBRTNDO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7Ozs7Ozs7Ozs7R0FVRzs7QUFFSDtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdEQUFnRDtBQUNwRDs7QUFFQTs7O0lBR0ksMENBQTBDO0FBQzlDOztBQUVBLCtDQUErQztBQUMvQztJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUEsdUNBQXVDOztBQUV2QztJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7OztBQUdBLHNDQUFzQzs7QUFFdEM7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLSBSZXNldCBDU1MgYsODwqFzaWNvIC0tLS0tLS0tLS0gKi9cclxuYm9keSwgaDEsIGgyLCBoMywgcCwgdWwsIG9sLCBsaSwgZmlndXJlLCBmaWdjYXB0aW9uLCBkbCwgZGQsIGR0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIGh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbi8qIC0tLS0tLS0tLS0gUmVzZXQgQ1NTIGLDg8Khc2ljbyAtLS0tLS0tLS0tICovXHJcbiAgXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIC5vZmZjYW52YXMtbWVudSB7XHJcbiAgICB3aWR0aDogMTh2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMSU7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcclxufSAqL1xyXG5cclxuLm9mZmNhbnZhcy1tZW51IHtcclxuICAgIHdpZHRoOiAyM3Z3O1xyXG59XHJcblxyXG5cclxuLyogLmNhcmQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmJiO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhcmQtYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSAqL1xyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbn1cclxuXHJcbnVsIGxpOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMTYsIDIxNiwgMC41KTsgKi9cclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSxcclxuLmNhcmQtaGVhZGVyLFxyXG4uY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjYpO1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIENTUyBwYXJhIGFsaW5lYXIgZW4gbGEgbWlzbWEgbMODwq1uZWEgKi9cclxuLmlubGluZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tZ3JhbmRlIC0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5ib3Rvbk1lbnUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA0NTA7XHJcbiAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAudGFyamV0YSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDQ1MDtcclxuICAgICAgICB0b3A6IDMzcHg7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIHNlbGVjdCBvcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS1jaGljbyAtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIC5ib3Rvbk1lbnUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA0NTA7XHJcbiAgICAgICAgcmlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAudGFyamV0YSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDQ1MDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIHNlbGVjdCBvcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4138:
/*!*********************************************************!*\
  !*** ./src/app/servicios/capa-arba-partidos.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapaArbaPartidosService: () => (/* binding */ CapaArbaPartidosService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CapaArbaPartidosService {
  constructor() {}
  getWfs(elJson, filtro) {
    this.capaArba = L.geoJson(elJson, {
      filter: elFiltradorDeIGN,
      style: feature => {
        return {
          color: 'rgba(200, 40, 0, 0.5)',
          "weight": 2.5,
          "opacity": 0.40
        };
      },
      onEachFeature: (feature, layer) => {
        let colorBordeOriginal = '';
        let espesorBordeOriginal = 0;
        let colorRellenoOriginal = '';
        var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Partido</th>
              <th scope="col" class="text-center">Código</th>
              <th scope="col" class="text-center">Origen del dato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.fna}</td>  
              <td class="text-center">${feature.properties.in1}</td>
              <td class="text-center">${feature.properties.sag}</td>
            </tr>
          </tbody>
        </table>
      `;
        layer.bindPopup(popupContent);
        layer.on({
          mouseover: e => {
            colorBordeOriginal = e.target.options.color;
            espesorBordeOriginal = e.target.options.weight;
            colorRellenoOriginal = e.target.options.fillColor;
            layer.setStyle({
              "color": "rgba(0,255,0,0.5)",
              "weight": 4,
              "fillColor": "#cc9900"
            });
            let laCapa = e.target;
            let miTooltip = L.tooltip({
              position: 'bottom',
              noWrap: true,
              offset: [0, -30],
              sticky: true,
              opacity: 0.8
            }).setContent('<b>Pdo:</b>' + feature.properties.fna).setLatLng(e.latlng);
            laCapa.bindTooltip(miTooltip);
          },
          mouseout: e => {
            layer.setStyle({
              "color": colorBordeOriginal,
              "weight": espesorBordeOriginal,
              "fillColor": colorRellenoOriginal
            });
          }
        });
      }
      //,
      //pane: 'partidos'
    });
    function elFiltradorDeIGN(feature) {
      if (filtro != '') {
        if (feature.properties.gna === filtro) {
          return true;
        }
      } else {
        return true;
      }
    }
    return this.capaArba;
  }
  static #_ = this.ɵfac = function CapaArbaPartidosService_Factory(t) {
    return new (t || CapaArbaPartidosService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CapaArbaPartidosService,
    factory: CapaArbaPartidosService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8212:
/*!*****************************************************!*\
  !*** ./src/app/servicios/capa-circuitos.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapaCircuitosService: () => (/* binding */ CapaCircuitosService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CapaCircuitosService {
  constructor() {}
  getCircuitosDepurado(elJson, filtro) {
    this.capaCircuitos = L.geoJson(elJson, {
      filter: elFiltradorDeCircuitos,
      style: feature => {
        return {
          color: 'rgb(255, 32, 0)',
          "weight": 0.5,
          "opacity": 0.60,
          "fillColor": "#000000",
          "fillOpacity": 0.1
        };
      },
      onEachFeature: (feature, layer) => {
        let colorBordeOriginal = '';
        let espesorBordeOriginal = 0;
        let colorRellenoOriginal = '';
        var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Partido</th>
              <th scope="col" class="text-center">Municipio</th>
              <th scope="col" class="text-center">Circuito</th>
              <th scope="col" class="text-center">Indec_d(?)</th>
              <th scope="col" class="text-center">gid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.departamen}</td>  
              <td class="text-center">${feature.properties.cabecera}</td>
              <td class="text-center">${feature.properties.circuito}</td>
              <td class="text-center">${feature.properties.indec_d}</td>
              <td class="text-center">${feature.properties.gid}</td>
            </tr>
          </tbody>
        </table>
      `;
        layer.bindPopup(popupContent);
        layer.on({
          mouseover: e => {
            colorBordeOriginal = e.target.options.color;
            espesorBordeOriginal = e.target.options.weight;
            colorRellenoOriginal = e.target.options.fillColor;
            layer.setStyle({
              "color": "rgba(0,255,0,0.5)",
              "weight": 4,
              "fillColor": "#cc9900"
            });
            let laCapa = e.target;
            let miTooltip = L.tooltip({
              position: 'bottom',
              noWrap: true,
              offset: [0, -30],
              sticky: true,
              opacity: 0.8
            }).setContent('<b>Pdo:</b>' + feature.properties.departamen).setLatLng(e.latlng);
            laCapa.bindTooltip(miTooltip);
          },
          mouseout: e => {
            layer.setStyle({
              "color": colorBordeOriginal,
              "weight": espesorBordeOriginal,
              "fillColor": colorRellenoOriginal
            });
          }
        });
      }
      //pane: 'circuitos'
    });
    function elFiltradorDeCircuitos(feature) {
      if (filtro != '') {
        if (feature.properties.departamen === filtro) {
          return true;
        }
      } else {
        return true;
      }
    }
    return this.capaCircuitos;
  }
  static #_ = this.ɵfac = function CapaCircuitosService_Factory(t) {
    return new (t || CapaCircuitosService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CapaCircuitosService,
    factory: CapaCircuitosService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1945:
/*!********************************************************!*\
  !*** ./src/app/servicios/capa-conae-riesgo.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapaConaeRiesgoService: () => (/* binding */ CapaConaeRiesgoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CapaConaeRiesgoService {
  constructor() {}
  getConaeRiesgo(elJson) {
    //una capa de tipo punto
    let estiloPunto = {
      radius: 5,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.5
    };
    this.capaConaeRiesgo = L.geoJson(elJson, {
      pointToLayer: function (feature, latlng) {
        let miPopup = L.popup().setContent('hola mundo');
        let miMarcadorCircular = L.circleMarker(latlng, estiloPunto);
        miMarcadorCircular.bindPopup(miPopup);
        //return L.circleMarker(latlng, estiloPunto);
        return miMarcadorCircular;
      },
      onEachFeature: function (feature, layer) {
        var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Regimen</th>
              <th scope="col" class="text-center">Universidad</th>
              <th scope="col" class="text-center">Unidad Acad.</th>
              <th scope="col" class="text-center">Niveles</th>
              <th scope="col" class="text-center">Domicilio</th>
             
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.regimen}</td>  
              <td class="text-center">${feature.properties.universidad}</td>
              <td class="text-center">${feature.properties.unidad_academica}</td>
              <td class="text-center">${feature.properties.niveles}</td>
              <td class="text-center">${feature.properties.domicilio}</td>
            
             
            </tr>
          </tbody>
        </table>
      `;
        layer.bindPopup(popupContent);
        // layer.on({
        //   mouseover: (e:any) =>{
        //     //colorBordeOriginal = e.target.options.color;
        //     //espesorBordeOriginal = e.target.options.weight;
        //     //colorRellenoOriginal = e.target.options.fillColor
        //     layer.setStyle({
        //       "color": "rgba(0,255,0,0.5)",
        //       "weight": 4,
        //       "fillColor": "#cc9900"
        //     });
        //     let laCapa = e.target;
        //     let miTooltip = L.tooltip({
        //       position: 'bottom',
        //       noWrap: true,
        //       offset: [0, -30],
        //       sticky: true,
        //       opacity: 0.8
        //     })
        //       .setContent('<b>Cartel:</b>')
        //       .setLatLng(e.latlng);
        //     laCapa.bindTooltip(miTooltip);
        //   }
        // });
      }
    });
    return this.capaConaeRiesgo;
  }
  static #_ = this.ɵfac = function CapaConaeRiesgoService_Factory(t) {
    return new (t || CapaConaeRiesgoService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CapaConaeRiesgoService,
    factory: CapaConaeRiesgoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7314:
/*!******************************************************!*\
  !*** ./src/app/servicios/capa-estabEduca.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapaEstabEducaService: () => (/* binding */ CapaEstabEducaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CapaEstabEducaService {
  constructor() {}
  getEstabEduca(elJson) {
    //una capa de tipo punto
    let estiloPunto = {
      radius: 5,
      fillColor: "#ffff00",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.5
    };
    this.capaEstabEduca = L.geoJson(elJson, {
      pointToLayer: function (feature, latlng) {
        let miPopup = L.popup().setContent('hola mundo');
        let miMarcadorCircular = L.circleMarker(latlng, estiloPunto);
        miMarcadorCircular.bindPopup(miPopup);
        //return L.circleMarker(latlng, estiloPunto);
        return miMarcadorCircular;
      },
      onEachFeature: function (feature, layer) {
        var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Nombre</th>
              <th scope="col" class="text-center">Tipo</th>
              <th scope="col" class="text-center">Gestión</th>
              <th scope="col" class="text-center">Nivel</th>
              
             
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.fna}</td>  
              <td class="text-center">${feature.properties.gna}</td>
              <td class="text-center">${feature.properties.ges}</td>
              <td class="text-center">${feature.properties.nen}</td>
              
            
             
            </tr>
          </tbody>
        </table>
      `;
        layer.bindPopup(popupContent);
        // layer.on({
        //   mouseover: (e:any) =>{
        //     //colorBordeOriginal = e.target.options.color;
        //     //espesorBordeOriginal = e.target.options.weight;
        //     //colorRellenoOriginal = e.target.options.fillColor
        //     layer.setStyle({
        //       "color": "rgba(0,255,0,0.5)",
        //       "weight": 4,
        //       "fillColor": "#cc9900"
        //     });
        //     let laCapa = e.target;
        //     let miTooltip = L.tooltip({
        //       position: 'bottom',
        //       noWrap: true,
        //       offset: [0, -30],
        //       sticky: true,
        //       opacity: 0.8
        //     })
        //       .setContent('<b>Cartel:</b>')
        //       .setLatLng(e.latlng);
        //     laCapa.bindTooltip(miTooltip);
        //   }
        // });
      }
    });
    return this.capaEstabEduca;
  }
  static #_ = this.ɵfac = function CapaEstabEducaService_Factory(t) {
    return new (t || CapaEstabEducaService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CapaEstabEducaService,
    factory: CapaEstabEducaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3948:
/*!********************************************************!*\
  !*** ./src/app/servicios/capa-ign-partidos.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapaIgnPartidosService: () => (/* binding */ CapaIgnPartidosService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CapaIgnPartidosService {
  constructor() {}
  getWfs(elJson, filtro) {
    this.capaIgn = L.geoJson(elJson, {
      filter: elFiltradorDeIGN,
      style: feature => {
        return {
          color: 'rgba(51, 102, 0, 0.5)',
          "weight": 8.5,
          "opacity": 0.40
        };
      },
      onEachFeature: (feature, layer) => {
        let colorBordeOriginal = '';
        let espesorBordeOriginal = 0;
        let colorRellenoOriginal = '';
        var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Partido</th>
              <th scope="col" class="text-center">Código</th>
              <th scope="col" class="text-center">Origen del dato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.fna}</td>  
              <td class="text-center">${feature.properties.in1}</td>
              <td class="text-center">${feature.properties.sag}</td>
            </tr>
          </tbody>
        </table>
      `;
        layer.bindPopup(popupContent);
        layer.on({
          mouseover: e => {
            colorBordeOriginal = e.target.options.color;
            espesorBordeOriginal = e.target.options.weight;
            colorRellenoOriginal = e.target.options.fillColor;
            layer.setStyle({
              "color": "rgba(0,255,0,0.5)",
              "weight": 4,
              "fillColor": "#cc9900"
            });
            let laCapa = e.target;
            let miTooltip = L.tooltip({
              position: 'bottom',
              noWrap: true,
              offset: [0, -30],
              sticky: true,
              opacity: 0.8
            }).setContent('<b>Pdo:</b>' + feature.properties.fna).setLatLng(e.latlng);
            laCapa.bindTooltip(miTooltip);
          },
          mouseout: e => {
            layer.setStyle({
              "color": colorBordeOriginal,
              "weight": espesorBordeOriginal,
              "fillColor": colorRellenoOriginal
            });
          }
        });
      }
      //,
      //pane: 'partidos'
    });
    function elFiltradorDeIGN(feature) {
      if (filtro != '') {
        if (feature.properties.gna === filtro) {
          return true;
        }
      } else {
        return true;
      }
    }
    return this.capaIgn;
  }
  static #_ = this.ɵfac = function CapaIgnPartidosService_Factory(t) {
    return new (t || CapaIgnPartidosService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CapaIgnPartidosService,
    factory: CapaIgnPartidosService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5314:
/*!*****************************************************!*\
  !*** ./src/app/servicios/capa-secciones.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapaSeccionesService: () => (/* binding */ CapaSeccionesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CapaSeccionesService {
  constructor() {}
  getCircuitosDepurado(elJson, filtro) {
    this.capaSecciones = L.geoJson(elJson, {
      filter: elFiltradorDeCircuitos,
      style: feature => {
        return {
          color: 'rgb(0, 32, 255)',
          "weight": 1.5,
          "opacity": 0.60,
          "fillColor": "#000000",
          "fillOpacity": 0.1
        };
      },
      onEachFeature: (feature, layer) => {
        let colorBordeOriginal = '';
        let espesorBordeOriginal = 0;
        let colorRellenoOriginal = '';
        var popupContent = `
        <table class="table table-striped table-borderless table-sm" style="font-family: 'Arial Narrow'">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="text-center">Cabecera</th>
              <th scope="col" class="text-center">Municipio</th>
              <th scope="col" class="text-center">Seccion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">${feature.properties.cabecera}</td>
              <td class="text-center">${feature.properties.municipio_nombre}</td>
              <td class="text-center">${feature.properties.seccion}</td>
            </tr>
          </tbody>
        </table>
      `;
        layer.bindPopup(popupContent);
        layer.on({
          mouseover: e => {
            colorBordeOriginal = e.target.options.color;
            espesorBordeOriginal = e.target.options.weight;
            colorRellenoOriginal = e.target.options.fillColor;
            layer.setStyle({
              "color": "rgba(0,255,0,0.5)",
              "weight": 4,
              "fillColor": "#cc9900"
            });
            let laCapa = e.target;
            let miTooltip = L.tooltip({
              position: 'bottom',
              noWrap: true,
              offset: [0, -30],
              sticky: true,
              opacity: 0.8
            }).setContent('<b>Sección Electoral:</b>' + feature.properties.seccion).setLatLng(e.latlng);
            laCapa.bindTooltip(miTooltip);
          },
          mouseout: e => {
            layer.setStyle({
              "color": colorBordeOriginal,
              "weight": espesorBordeOriginal,
              "fillColor": colorRellenoOriginal
            });
          }
        });
      }
      //pane: 'circuitos'
    });
    function elFiltradorDeCircuitos(feature) {
      if (filtro != '') {
        if (feature.properties.departamen === filtro) {
          return true;
        }
      } else {
        return true;
      }
    }
    return this.capaSecciones;
  }
  static #_ = this.ɵfac = function CapaSeccionesService_Factory(t) {
    return new (t || CapaSeccionesService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CapaSeccionesService,
    factory: CapaSeccionesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 104:
/*!****************************************************!*\
  !*** ./src/app/servicios/get-datos-web.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDatosWebService: () => (/* binding */ GetDatosWebService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


//import { Subject } from "rxjs/Subject";
class GetDatosWebService {
  constructor(http) {
    this.http = http;
  }
  getSeccionesElectorales() {
    let lasSecciones = this.http.get("./assets/seccElec.geojson");
    return lasSecciones;
  }
  getCircuitosElectorales() {
    let losCircuitos = this.http.get("./assets/circuitosElectoralesBuenosAires.geojson");
    return losCircuitos;
  }
  //===================================================================
  // cuando lee el wms del ign se pone muy lento
  //===================================================================
  getWfsIgn() {
    let laUrlCompleta = 'https://wms.ign.gob.ar/geoserver/ows?service=wfs&version=1.1.0&request=GetFeature&typeName=ign:departamento&outputFormat=application/json';
    //let laUrlFiltrada = 'https://wms.ign.gob.ar/geoserver/ows?service=wfs&version=1.1.0&request=GetFeature&typeName=ign:departamento&outputFormat=application/json&CQL_FILTER=geometryType=%27MultiPolygon%27&PROPERTYNAME=gna&CQL_FILTER=gna=%27Partido%27';
    //this.elJsonDelIGN = this.http.get<any>(laUrlCompleta);
    //this.elJsonDelIGN = this.http.get<any>('./assets/partidos.geojson');
    this.elJsonDelIGN = this.http.get(laUrlCompleta);
    return this.elJsonDelIGN;
  }
  //===================================================================
  // educacion gob ar, universidades
  //===================================================================
  getWfsConaeRiesgoEpi() {
    let laUrlCompleta = 'https://mapa.educacion.gob.ar/geoserver/publico/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publico%3Ainstitucion_universitaria&maxFeatures=1450&outputFormat=application%2Fjson';
    let otraUrl = 'https://mapa.educacion.gob.ar/geoserver/publico/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publico%3Aestablecimiento_educativo&maxFeatures=64490&outputFormat=application%2Fjson';
    this.elJsonConaeRiesgo = this.http.get(laUrlCompleta);
    return this.elJsonConaeRiesgo;
  }
  //===================================================================
  // educacion gob ar, establecimientos educativos
  //===================================================================
  getWfsEstablecimientosEducativos() {
    let laUrlCompleta = 'https://mapa.educacion.gob.ar/geoserver/publico/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=publico%3Aestablecimiento_educativo&maxFeatures=5000&outputFormat=application%2Fjson';
    let otraUrl = '';
    this.elJsonEstablecimientosEducativos = this.http.get(laUrlCompleta);
    return this.elJsonEstablecimientosEducativos;
  }
  getWfsArba() {
    //dominio del server: https://geo.arba.gov.ar
    //let laUrlArbaProxy = '/geoserver/idera/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=idera:Departamento&outputFormat=application/json&srsName=EPSG:4326'
    //let laUrlArba = 'https://geo.arba.gov.ar/geoserver/idera/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=idera:Departamento&outputFormat=application/json&srsName=EPSG:4326'
    //let laUrlSecGobAmbSust = 'http://geo2.ambiente.gob.ar/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeName=ordenamiento:apn_sifal2016&outputFormat=application/json'
    //this.elJsonDeArba = this.http.get<any>(laUrlSecGobAmbSust);
    this.elJsonDeArba = this.http.get("./assets/partidos.txt");
    return this.elJsonDeArba;
  }
  static #_ = this.ɵfac = function GetDatosWebService_Factory(t) {
    return new (t || GetDatosWebService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GetDatosWebService,
    factory: GetDatosWebService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/components/main/main.component */ 2449);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.provideAnimations)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.provideRouter)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.withHashLocation)())]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map