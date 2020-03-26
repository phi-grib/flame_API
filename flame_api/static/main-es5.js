function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!--<div class=\"page-header border-bottom mb-3\">\n  <div class=\"d-flex\">\n        <div class=\"mr-auto p-2\">\n            <ul class=\"nav nav-pills nav-fill\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" routerLink=\"/modeling\"  data-toggle=\"pill\" role=\"tab\">Modeling</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/similarity\" data-toggle=\"pill\" role=\"tab\">Similarity</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"p-2\">\n            <!--<a target=\"_blank\">\n                <img [src]=\"imageSource\" data-holder-rendered=\"true\" height=\"40\"/>\n            </a>\n        </div>\n    </div>\n</div>-->\n<div class=\"row\">\n    <div class=\"col p-0\">\n        <div class=\"\">\n            <app-sidebar></app-sidebar>\n        </div>\n        <div class=\"pr-3\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <div class=\"col-6 border-left info v-100 scrollable\" *ngIf=\"!isActive('similarity')\">\n        <div *ngIf=\"(this.prediction.name != undefined && this.model.name == undefined && isActive('predictions'))\">\n            <app-prediction [predictionName]=this.prediction.name></app-prediction>\n        </div>\n        <div *ngIf=\"(this.model.name != undefined && this.prediction.name == undefined && isActive('models'))\">\n          <div  *ngIf=\"\"></div>\n            <app-validations [name] = this.model.name [version] = this.model.version></app-validations>\n        </div>\n    </div>\n    <!--<div class=\"col-6 border-left info  v-100\" *ngIf=\"isActive('similarity')\">\n        <p>SIMILARITY</p>\n    </div>-->\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/builder/builder.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/builder/builder.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuilderBuilderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Build</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"accordion m-3\" *ngIf=\"this.model.parameters!==undefined\">\n    <!--START CARD CONFIG TRAIN-->\n\n    <!-- END CONFIG TRAIN-->\n\n    <div class=\"card\">\n      <div class=\"card-header\" id=\"headingZero\" data-toggle=\"collapse\" data-target=\"#collapseZero\" aria-expanded=\"true\" aria-controls=\"collapseZero\">\n        <h5 class=\"mb-0\">\n            1 - Training Serie\n          <button class=\"btn btn-link pt-0 pb-0 float-right\"  type=\"button\" >\n          </button>\n        </h5>\n        \n      </div>\n  \n      <div #trainigseries id=\"collapseZero\" class=\"collapse show\" aria-labelledby=\"headingZero\" >\n        <div class=\"card-body p-2 pl-5 pr-5\">\n            <app-training-series></app-training-series>\n        </div>\n      </div>\n    </div>\n\n    <!--START CARD CONFIG TRAIN-->\n    <div class=\"card\">\n      <div class=\"card-header\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n        <h5 class=\"mb-0\">\n            2 - Input\n          <button class=\"btn btn-link pt-0 pb-0 float-right\"  type=\"button\" >\n          </button>\n        </h5>\n        \n      </div>\n  \n      <div #trainigseries id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" >\n        <div class=\"card-body p-2 pl-5 pr-5\">\n            <app-config-training></app-config-training>\n        </div>\n      </div>\n    </div>\n    <!-- END CONFIG TRAIN-->\n    <!--START CARD CONFIG MODEL-->\n    <div class=\"card\">\n      <div class=\"card-header collapsed\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n        <h5 class=\"mb-0\">\n            3 - Learner\n          <button class=\"btn btn-link pt-0 pb-0 float-right\"  type=\"button\">\n          </button>\n        </h5>\n      </div>\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" >\n        <div class=\"card-body p-2 pl-5 pr-5\">\n          <app-config-model></app-config-model>\n        </div>\n      </div>\n    </div>\n    <!-- END CONFIG MODEL-->\n    <!--START CARD CONFIG PREFERENCES-->\n    <div class=\"card\">\n      <div class=\"card-header collapsed\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n        <h5 class=\"mb-0\">\n            4 - Preferences\n          <button class=\"btn btn-link pt-0 pb-0 float-right\" type=\"button\">\n          </button>\n        </h5>\n      </div>\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" >\n        <div class=\"card-body p-2 pl-5 pr-5\">\n          <app-config-preferences></app-config-preferences>\n        </div>\n      </div>\n    </div>\n    <!-- END CONFIG PREFERENCES-->\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-secondary btn-lg\" (click)=\"activeModal.close('Close click')\">Close</button>\n  <button type=\"button\" class=\"btn btn-outline-primary btn-lg\" (click)=\"buildModel(this.model.name, this.model.version)\">Build</button>\n</div>\n  \n    <!--<div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col align-self-center\">\n          <button type=\"button\" class=\"btn btn-outline-light btn-block btn-lg\" \n                  [ngClass]=\"{'disabled': ((model.file === undefined && model.trained === false) || model.parameters === undefined)}\" \n                  (click)=\"buildModel(this.model.name,this.model.version)\">Build model</button>\n        </div>\n      </div>\n    </div>-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/config-model/config-model.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config-model/config-model.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfigModelConfigModelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Model-->\n<div class=\"form-row\">\n  <div class=\"form-group col-md-4\">\n    <label class=\"bmd-label-static\" for=\"model\">Model</label>\n    <select id=\"key\" class=\"form-control\" [(ngModel)]=\"this.model.parameters['model'].value\">\n      <option *ngFor=\"let value of this.type_models[this.model.parameters['input_type'].value]\" [value]='value' >\n        <div *ngIf=\"value==null\">\n          --none--\n        </div>\n        <div *ngIf=\"value!=null\">\n          {{value}}\n        </div>\n      </option>\n    </select>\n    <small id=\"model\" class=\"text-muted\">\n        {{this.model.parameters['model'].description}}\n    </small> \n  </div>\n\n\n  <!--CONFORMAL-->\n  <div class=\"form-group col-md-4\" *ngIf=\"this.model.parameters['model'].value!='PLSDA' && this.model.parameters['model'].value!='median' \n  && this.model.parameters['model'].value!='mean' && this.model.parameters['model'].value!='majority'\">\n    <div class=\"checkbox\">\n      <label>\n        <input  type=\"checkbox\" [(ngModel)]=\"this.model.parameters['conformal'].value\">\n        Conformal\n      </label>\n    </div>\n    <small id=\"conformal\" class=\"text-muted\">\n        {{this.model.parameters['conformal'].description}}\n    </small>\n  </div> \n  <div class=\"form-group col-md-4\" *ngIf=\"this.model.parameters['model'].value!='median' && this.model.parameters['model'].value!='mean' \n  && this.model.parameters['model'].value!='majority'\">\n    <div *ngIf=\"(this.model.parameters['model'].value!='PLSDA') && (this.model.parameters['conformal'].value)\" style=\"margin-top: 11px;\">\n        <label class=\"bmd-label-static\" for=\"conformalSignificance\" style=\"margin-top: 11px;\">conformalSignificance</label>\n      <input class=\"form-control\" [(ngModel)]=\"this.model.parameters['conformalSignificance'].value\" type='number' step=\"0.05\">\n      <small id=\"conformalSignificance\" class=\"text-muted\">\n          {{this.model.parameters['conformalSignificance'].description}}\n      </small>\n    </div>\n  </div> \n  <!--Conformal significance-->\n</div>\n<!--'ModelValidationCV', 'ModelValidationN' ,'ModelValidationP'-->\n<div class=\"form-row\" *ngIf=\"this.model.parameters['model'].value!='median' && this.model.parameters['model'].value!='mean' \n  && this.model.parameters['model'].value!='majority'\">\n  <div class=\"form-group col-md-4\">\n    <label class=\"bmd-label-static\" for=\"key\">ModelValidationCV</label>\n    <select id=\"ModelValidationCV\" class=\"form-control\" [(ngModel)]=\"this.model.parameters['ModelValidationCV'].value\">\n      <option *ngFor=\"let value of this.model.parameters['ModelValidationCV'].options\" [value]='value'>\n        <div *ngIf=\"value==null\">\n          --none--\n        </div>\n        <div *ngIf=\"value!=null\">\n          {{value}}\n        </div>\n      </option>\n    </select>\n    <small id=\"key\" class=\"text-muted\">\n        {{this.model.parameters['ModelValidationCV'].description}}\n    </small>  \n  </div>\n  <div class=\"form-group col-md-4\" *ngIf=\"this.model.parameters['ModelValidationCV'].value=='kfold'\" style=\"margin-top: 11px;\">\n      <label class=\"bmd-label-static\" for=\"ModelValidationN\">ModelValidationN</label>\n    <input class=\"form-control\" [(ngModel)]=\"this.model.parameters['ModelValidationN'].value\" type='number' step=\"1\">\n    <small id=\"ModelValidationN\" class=\"text-muted\">\n        {{this.model.parameters['ModelValidationN'].description}}\n    </small>\n  </div>\n  <div class=\"form-group col-md-4\" *ngIf=\"this.model.parameters['ModelValidationCV'].value=='lpo'\" style=\"margin-top: 11px;\">\n      <label class=\"bmd-label-static\" for=\"ModelValidationP\">ModelValidationP</label>\n    <input class=\"form-control\" [(ngModel)]=\"this.model.parameters['ModelValidationP'].value\" type='number' step=\"1\">\n    <small id=\"ModelValidationP\" class=\"text-muted\">\n        {{this.model.parameters['ModelValidationP'].description}}\n    </small>\n  </div>\n</div>\n<!--'feature_selection', 'feature_number'-->\n<div class=\"form-row\" *ngIf=\"this.model.parameters['model'].value!='median' && this.model.parameters['model'].value!='mean' \n  && this.model.parameters['model'].value!='majority'\">\n  <div class=\"form-group col-md-4\">\n    <label class=\"bmd-label-static\" for=\"key\">Feature selection</label>\n    <select id=\"feature_selection\" class=\"form-control\" [(ngModel)]=\"this.model.parameters['feature_selection'].value\">\n      <option *ngFor=\"let value of this.model.parameters['feature_selection'].options\" [value]='value'>\n        <div *ngIf=\"value==null\">\n          --none--\n        </div>\n        <div *ngIf=\"value!=null\">\n          {{value}}\n        </div>   \n      </option>\n    </select>\n    <small id=\"feature_selection\" class=\"text-muted\">\n        {{this.model.parameters['feature_selection'].description}}\n    </small>  \n  </div>\n  <div class=\"form-group col-md-4\" *ngIf=\"this.model.parameters['feature_selection'].value=='Kbest'\" style=\"margin-top: 11px;\">\n      <label class=\"bmd-label-static\" for=\"feature_number\">Feature number</label>\n    <input class=\"form-control\" [(ngModel)]=\"this.model.parameters['feature_number'].value\" type='text' step=\"1\">\n    <small id=\"feature_number\" class=\"text-muted\">\n        {{this.model.parameters['feature_number'].description}}\n    </small>\n  </div>\n</div>\n\n<div class=\"form-row\" *ngIf=\"this.model.parameters['model'].value!='median' && this.model.parameters['model'].value!='mean' \n  && this.model.parameters['model'].value!='majority'\">\n\n<!--REST OF PARAMETERS-->\n  <div *ngFor=\"let key of infoModel\" class=\"form-group col-md-4\">\n    <div *ngIf=\"this.model.parameters[key].writable\" style=\"margin-top: 11px;\">\n      <label class=\"bmd-label-static\" for=\"key\" style=\"margin-top: 11px;\">{{key.replace('_',' ')}}</label>\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='int'\" id=\"key\" type='number' placeholder=\"{{key}}\" >\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='float'\" id=\"key\" type='number' placeholder=\"{{key}}\" step=0.01 >\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='string'\" id=\"key\" type='text' placeholder=\"{{key}}\">\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='list'\" id=\"key\" type='text' placeholder=\"{{key}}\">\n    </div>\n    <div class=\"checkbox\" *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type==='boolean'\">\n      <label>\n        <input  type=\"checkbox\" [(ngModel)]=\"this.model.parameters[key].value\">\n        {{key.replace('_',' ')}}\n      </label>\n    </div>  \n    <div *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type!='list' && this.model.parameters[key].object_type!='boolean'\">\n      <label class=\"bmd-label-static\" for=\"key\">{{key.replace('_',' ')}}</label>\n      <select id=\"key\" class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\">\n        <option *ngFor=\"let value of this.model.parameters[key].options\" [value]='value'>\n          <div *ngIf=\"value==null\">\n            --none--\n          </div>\n          <div *ngIf=\"value!=null\">\n            {{value}}\n          </div>\n        </option>\n      </select>\n    </div>\n    <div class=\"checkbox mt-3\" *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type==='list' \">\n      <label id=\"key\" class=\"bmd-label-static mb-2 p-0\">{{key.replace('_',' ')}}</label>\n      <label id=\"key\" class=\"mr-2 mb-2 w-100\" *ngFor=\"let value of this.model.parameters[key].options\">\n        <input id=\"key\" type=\"checkbox\"\n              [(checklist)]=\"this.model.parameters[key].value\"\n              [checklistValue]=\"value\" />\n            {{value}}\n      </label>\n    </div>\n    <small id=\"key\" class=\"text-muted\">\n      {{this.model.parameters[key].description}}\n    </small>\n  </div>\n</div>\n\n\n<!--MODEL PARAMETERS-->\n<fieldset class=\"border\" *ngIf=\"this.model.parameters['model'].value != 'mean' && this.model.parameters['model'].value != 'majority' \n&& this.model.parameters['model'].value != 'median'\">  \n    <legend>{{this.model.parameters['model'].value}} parameters</legend>\n      <div class=\"m-2 w-50\" *ngFor=\"let key of objectKeys(this.model.parameters[parametersModel[this.model.parameters['model'].value]].value)\" >\n        <div class=\"form-group\" *ngIf=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].writable\">\n          <label class=\"bmd-label-static\">{{key}}</label>\n            <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].value\" *ngIf=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type==='string'\" id=\"key\" type='text' placeholder=\"{{key}}\" >\n            <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].value\" *ngIf=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type==='int'\" id=\"key\" type='number'>\n            <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].value\" *ngIf=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type==='float'\" id=\"key\" type='number' step=0.01>\n            <small id=\"key\" class=\"text-muted\">\n              {{this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].description}}\n            </small>\n        </div>\n        <div class=\"checkbox\" *ngIf=\"!this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].writable && this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type==='boolean'\">\n          <label>\n            <input type=\"checkbox\"  [(ngModel)]=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].value\">\n            {{key}}\n          </label>\n          <small id=\"key\" class=\"text-muted\">\n          {{this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].description}}\n          </small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"!this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].writable && this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type!='list' && this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type!='boolean'\">\n          <label for=\"key\" class=\"bmd-label-static\">{{key}}</label>\n          <select id=\"key\" class=\"form-control\" [(ngModel)]=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].value\">\n            <option *ngFor=\"let value of this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].options\" [value]='value'>\n              <div *ngIf=\"value==null\">\n                --none--\n              </div>\n              <div *ngIf=\"value!=null\">\n                {{value}}\n              </div>\n            </option>\n          </select>\n          <small id=\"key\" class=\"text-muted\">\n          {{this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].description}}\n          </small>\n        </div>\n        <!--CASE NO XGBOOST-->\n        <div class=\"checkbox mt-3\" *ngIf=\"!this.model.parameters['model'].value=='XGBOOST' && !this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].writable && this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type==='list' \">\n          <label id=\"key\" class=\"bmd-label-static mb-2 p-0\">{{key}}</label>\n          <label id=\"key\" class=\"mr-2 mb-2 w-100\" *ngFor=\"let value of this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].options\">\n           \n            <input id=\"key\" type=\"checkbox\"\n                  [(checklist)]=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].value\"\n                  [checklistValue]=\"value\" />\n                {{value}}\n\n          </label>\n          <small id=\"key\" class=\"text-muted\">\n            {{this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].description}}\n          </small>\n        </div>\n\n         <!--CASE XGBOOST-->\n\n        \n         <div *ngIf=\"this.model.parameters['model'].value=='XGBOOST' && !this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].writable && this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].object_type==='list' \">\n            <label id=\"key\" class=\"bmd-label-static mb-2 p-0\">{{key}}</label><br>\n            <div class=\"form-check form-check-inline\" *ngFor=\"let value of this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].options\">\n              <input class=\"form-check-input\" type=\"radio\" id=\"value\" name=\"inlineRadioOptions\" [value]=\"value\" [(ngModel)]=\"this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].value\"\n             >\n              <label class=\"form-check-label\" for=\"value\">{{value}}</label>\n            </div>\n            <br>\n            <small id=\"key\" class=\"text-muted\">\n              {{this.model.parameters[parametersModel[this.model.parameters['model'].value]].value[key].description}}\n            </small>\n          </div>\n      </div>\n</fieldset>\n<!-- TUNE HARDCODED-->\n<br>\n<div class=\"checkbox\" *ngIf=\"this.model.parameters['model'].value != 'mean' && this.model.parameters['model'].value != 'majority' \n&& this.model.parameters['model'].value != 'median'\">\n <label>\n     <input type=\"checkbox\" [(ngModel)]=\"this.model.parameters['tune'].value\">\n      Tune\n    </label>\n</div>\n<!--MODEL OPTIMIZE-->\n<fieldset class=\"border\" *ngIf=\"this.model.parameters['tune'].value\">  \n  <legend>{{this.model.parameters['model'].value}} optimize</legend>\n    <div class=\"m-2 w-50\" *ngFor=\"let key of objectKeys(this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value)\" >\n      <div class=\"form-group\" *ngIf=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].writable\">\n        <label class=\"bmd-label-static\">{{key}}</label>\n          <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].value\" *ngIf=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].object_type==='string'\" id=\"key\" type='text' placeholder=\"{{key}}\" >\n          <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].value\" *ngIf=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].object_type==='int'\" id=\"key\" type='number'>\n          <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].value\" *ngIf=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].object_type==='float'\" id=\"key\" type='number' step=0.01>\n          <small id=\"key\" class=\"text-muted\">\n            {{this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].description}}\n          </small>\n      </div>\n      <div class=\"checkbox\" *ngIf=\"!this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].writable && this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].object_type==='boolean'\">\n        <label>\n          <input type=\"checkbox\" [(ngModel)]=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].value\">\n          {{key}}\n        </label>\n        <small id=\"key\" class=\"text-muted\">\n        {{this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].description}}\n        </small>\n      </div>\n      <div class=\"form-group\" *ngIf=\"!this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].writable && this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].object_type!='list' && this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].object_type!='boolean'\">\n        <label class=\"bmd-label-static\" for=\"key\">{{key}}</label>\n        <select id=\"key\" class=\"form-control\" [(ngModel)]=\"this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].value\">\n          <option *ngFor=\"let value of this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].options\" [value]='value'>\n            <div *ngIf=\"value==null\">\n              --none--\n            </div>\n            <div *ngIf=\"value!=null\">\n              {{value}}\n            </div>\n          </option>\n        </select>\n        <small id=\"key\" class=\"text-muted\">\n        {{this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].description}}\n      </small>\n      </div>\n      <div class=\"form-group\" *ngIf=\"!this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].writable && this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].object_type==='list' \">\n        <label for=\"key\" class=\"bmd-label-static\">{{key}}</label>\n        <select multiple id=\"key\" class=\"form-control\">\n          <option *ngFor=\"let value of this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].options\">{{value}}</option>\n        </select>\n        <small id=\"key\" class=\"text-muted\">\n          {{this.model.parameters[optimizeModel[this.model.parameters['model'].value]].value[key].description}}\n        </small>\n      </div>\n      \n    </div>\n</fieldset>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/config-preferences/config-preferences.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config-preferences/config-preferences.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfigPreferencesConfigPreferencesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-row\">\n  <div *ngFor=\"let key of infoPreferences\" class=\"form-group col-md-4\">\n    <div *ngIf=\"this.model.parameters[key].writable\" style=\"margin-top: 11px;\">\n        <label class=\"bmd-label-floating\" for=\"key\" style=\"margin-top: 11px;\">{{key.replace('_',' ')}}</label>\n          <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='int'\" id=\"key\" type='number' placeholder=\"{{key}}\" >\n          <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='float'\" id=\"key\" type='number' placeholder=\"{{key}}\" step=0.01 >\n          <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='string'\" id=\"key\" type='text' placeholder=\"{{key.replace('_',' ')}}\">\n          <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='list'\" id=\"key\" type='text' placeholder=\"{{key.replace('_',' ')}}\">\n      </div>\n      <div class=\"checkbox\" *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type==='boolean'\">\n        <label>\n          <input  type=\"checkbox\" [(ngModel)]=\"this.model.parameters[key].value\">\n          {{key.replace('_',' ')}}\n        </label>\n      </div>  \n      <div *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type!='list' && this.model.parameters[key].object_type!='boolean'\">\n        <label class=\"bmd-label-floating\" for=\"key\">{{key.replace('_',' ')}}</label>\n        <select id=\"key\" class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\">\n          <option *ngFor=\"let value of this.model.parameters[key].options\" [value]='value'>\n            <div *ngIf=\"value==null\">\n              --none--\n            </div>\n            <div *ngIf=\"value!=null\">\n              {{value}}\n            </div>   \n          </option>\n        </select>\n      </div>\n      <div class=\"checkbox mt-3\" *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type==='list' \">\n        <label id=\"key\" class=\"bmd-label-floating mb-2 p-0\">{{key.replace('_',' ')}}</label>\n        <label id=\"key\" class=\"mr-2 mb-2 w-100\" *ngFor=\"let value of this.model.parameters[key].options\">\n          <input id=\"key\" type=\"checkbox\"\n                [(checklist)]=\"this.model.parameters[key].value\"\n                [checklistValue]=\"value\" />\n              {{value}}\n        </label>\n      </div>\n      <small id=\"key\" class=\"text-muted\">\n        {{this.model.parameters[key].description}}\n      </small>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/config-training/config-training.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config-training/config-training.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfigTrainingConfigTrainingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!--Input type-->\n<div class=\"form-row\">\n  <div class=\"form-group col-md-4\">\n    <label class=\"bmd-label-static\" for=\"input_type\">Input type</label>\n    <select id=\"key\" class=\"form-control\" [(ngModel)]=\"this.model.parameters['input_type'].value\">\n      <option *ngFor=\"let value of this.model.parameters['input_type'].options\">{{value}}</option>\n    </select>\n  </div>\n  <div class=\"form-group col-md-4\" *ngIf=\"this.model.parameters['input_type'].value=='model_ensemble'\">\n    <ng-multiselect-dropdown\n      [placeholder]=\"'select models'\"\n      [data]=\"this.model.trained_models.sort()\"\n      [(ngModel)]=\"selectedItems\"\n      [settings]=\"dropdownSettings\"\n      (onSelect)=\"saveModelsSelected()\"\n      (onDeSelect)=\"saveModelsSelected()\"\n    >\n    </ng-multiselect-dropdown>\n  </div>\n</div>\n\n\n\n<div class=\"form-row\">\n  <div *ngFor=\"let key of infoSeries[this.model.parameters['input_type'].value]\" class=\"form-group col-md-4 mb-4 is-filled\">\n    <div *ngIf=\"this.model.parameters[key].writable\" style=\"margin-top: 11px;\">\n      <label class=\"bmd-label-static\" for=\"key\" style=\"margin-top: 11px;\">{{key.replace('_',' ')}}</label>\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='int'\" id=\"key\" type='number'  >\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='float'\" id=\"key\" type='number' step=0.01 >\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='string'\" id=\"key\" type='text'>\n        <input class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\" *ngIf=\"this.model.parameters[key].object_type==='list'\" id=\"key\" type='text'>\n    </div>\n    <div class=\"checkbox\" *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type==='boolean'\">\n      <label>\n        <input  type=\"checkbox\" [(ngModel)]=\"this.model.parameters[key].value\">\n        {{key.replace('_',' ')}}\n      </label>\n    </div>  \n    <div *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type!='list' && this.model.parameters[key].object_type!='boolean'\">\n      <label class=\"bmd-label-static\" for=\"key\">{{key.replace('_',' ')}}</label>\n      <select id=\"key\" class=\"form-control\" [(ngModel)]=\"this.model.parameters[key].value\"> \n        <option *ngFor=\"let value of this.model.parameters[key].options\" [value]='value'>\n          <div *ngIf=\"value==null\">\n            --none--\n          </div>\n          <div *ngIf=\"value!=null\">\n            {{value}}\n          </div>   \n        </option>\n      </select>\n    </div>\n    <div class=\"checkbox mt-3\" *ngIf=\"!this.model.parameters[key].writable && this.model.parameters[key].object_type==='list'\">\n      <label id=\"key\" class=\"bmd-label-static mb-2 p-0\">{{key.replace('_',' ')}}</label>\n      <label id=\"key\" class=\"mr-2 mb-2 w-100\" *ngFor=\"let value of this.model.parameters[key].options\">\n        <input id=\"key\" type=\"checkbox\"\n              [(checklist)]=\"this.model.parameters[key].value\"\n              [checklistValue]=\"value\" />\n            {{value}}\n      </label>\n    </div>\n    <small id=\"key\" class=\"text-muted\">\n      {{this.model.parameters[key].description}}\n    </small>\n    <!--<span class=\"bmd-help\">{{this.model.parameters['computeMD_method'].description}}</span>--> \n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/confusion-matrix/confusion-matrix.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confusion-matrix/confusion-matrix.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfusionMatrixConfusionMatrixComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!--CONFUSION MATRIX-->\n  <div id=\"matrix\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6 offset-4 text-center\">\n        <strong>Actual</strong>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3 offset-4 text-center border-left border-right border-bottom\">\n        <strong>+</strong>\n      </div>\n      <div class=\"col-3 text-center border-right border-bottom\">\n        <strong>-</strong>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3 rotate text-right\">\n          <span><strong>Predicted</strong></span>\n      </div>\n      <div class=\"col-1 text-center border-top border-right border-bottom\">\n        <strong>+</strong>\n      </div>\n      <div class=\"col-3 text-center border-top border-right border-bottom TP\">\n          {{this.TP}}\n       </div>\n       <div class=\"col-3 text-center border-top border-right border-bottom FP\">\n          {{this.FP}}\n       </div>\n       <div class=\"col-2 border-top border-left border-bottom\">\n          {{this.TP+this.FP}}\n       </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-1 offset-3 text-center border-top border-right border-bottom\">\n          <strong>-</strong>\n      </div>\n      <div class=\"col-3 text-center border-top border-right border-bottom FN\">\n          {{this.FN}}\n      </div>\n      <div class=\"col-3 text-center border-top border-right border-bottom TN\">\n          {{this.TN}}\n      </div>\n      <div class=\"col-2 border-top border-left border-bottom\">\n          {{this.FN+this.TN}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3 offset-4 border-left text-center\">\n          {{this.TP+this.FN}}\n      </div>\n      <div class=\"col-3 border-left text-center\">\n          {{this.FP+this.TN}}\n      </div>\n      <div class=\"col-2 border-left\">\n          {{this.TP+this.FP+this.TN+this.FN}}  \n      </div>\n    </div>\n          \n        \n                      \n                \n                     \n                  \n                      \n                \n                     \n                  \n                      \n                \n                      \n          \n                      \n                  \n                     \n                  \n                 \n  </div>  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-models/manage-models.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-models/manage-models.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageModelsManageModelsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"btn-toolbar mt-3 mb-3 ml-4\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n  <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n    <button type=\"button\" class=\"btn btn-outline-primary btn-lg\" data-toggle=\"modal\" data-target=\"#newModal\">New</button>\n    <button type=\"button\" class=\"btn btn-outline-primary btn-lg\" [ngClass]=\"{'disabled': model.name === undefined || model.version != '0'}\" (click)=\"buildModel(model.name, model.version)\">Build</button>\n    <button type=\"button\" class=\"btn btn-outline-primary btn-lg\" [ngClass]=\"{'disabled': model.name === undefined}\" (click)=\"cloneModel()\">Clone</button>\n  </div>\n  <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"second group\">\n    <button type=\"button\" class=\"btn btn-outline-success btn-lg\"  (click)=\"exportModel()\" [ngClass]=\"{'disabled': model.name === undefined}\">Export</button>\n    <label class=\"btn btn-outline-success btn-lg mb-0\" for=\"manager\">\n            <input id=\"manager\" type=\"file\" style=\"display:none;\" (change)=\"importModel($event.target.files)\">\n            Import\n          </label>\n  </div>\n  <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"third group\">\n    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\" data-toggle=\"modal\" data-target=\"#deleteModel\" [ngClass]=\"{'disabled': model.name === undefined || model.version != '0'}\">Delete Model </button>\n    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\" data-toggle=\"modal\" data-target=\"#deleteVersion\"[ngClass]=\"{'disabled': model.name === undefined || model.version == '0'}\">Delete Version</button>\n  </div>    \n</div>\n\n\n\n<!-- New Model -->\n<div  class=\"modal fade\" id=\"newModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"newModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"newModalLabel\">New Model</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <div class=\"row form-inline\" >\n              <div class=\"form-group mx-sm-3 mb-2\">\n                <label for=\"model_name\">Model name: </label>\n                <input type=\"text\" class=\"form-control ml-2\" [(ngModel)]=\"modelName\" placeholder=\"name\">\n              </div>\n            </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-etransafe\" data-dismiss=\"modal\" (click)=\"createModel()\">Create</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Delete Model-->\n<div class=\"modal fade\" id=\"deleteModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete model '{{this.model.name}}'</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this model?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" id =\"action\" data-dismiss=\"modal\" (click)=\"deleteModel()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Delete Version-->\n<div class=\"modal fade\" id=\"deleteVersion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete model '{{this.model.name}} v.{{this.model.version}}'</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this model version?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" id =\"action\" data-dismiss=\"modal\" (click)=\"deleteVersion()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-predictions/manage-predictions.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-predictions/manage-predictions.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagePredictionsManagePredictionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"btn-toolbar mt-3 mb-3 ml-4\">\n  <button type=\"button\" class=\"btn btn-outline-primary btn-lg mr-2\" (click)=\"newPrediction()\">New</button>\n  <button type=\"button\" class=\"btn btn-outline-danger btn-lg\" data-toggle=\"modal\" data-target=\"#deletePrediction\">Delete</button>\n</div>\n<!-- Delete Prediction-->\n<div class=\"modal fade\" id=\"deletePrediction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete Predctions</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this prediction?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" id =\"action\" data-dismiss=\"modal\" (click)=\"deletePrediction()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/model-list/model-list.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model-list/model-list.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModelListModelListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<hr class=\"my-0\">\n\n<app-manage-models></app-manage-models>\n  <!-- Extra large modal -->\n  {{num_models}}\n<div class =\"text-center spinner-table\" *ngIf = \"!this.globals.tableModelVisible\">\n  <div class=\"spinner-border text-primary\"  style=\"width: 10rem; height: 10rem;\"  role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div class =\"ml-3 mr-3\" [hidden] = \"!this.globals.tableModelVisible\">\n  <div class=\"col-12 scrolltable\">\n    <table id =\"dataTableModels\" class=\"table\">\n      <thead>\n        <tr>\n          <th style=\"width: 5%\" class=\"text-center\"></th>\n          <!--<th width=\"5%\"></th>-->\n          <th style=\"width: 35%\">Name</th>\n          <th style=\"width: 10%\">Version</th>\n          <th style=\"width: 12.5%\">#Molecules</th>\n          <th style=\"width: 12.5%\">#Variables</th>3\n          <th style=\"width: 25%\">Type</th>\n         \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let key of objectKeys(model.listModels).sort()\" \n          [ngClass]=\"{'selected': (model.listModels[key].name===this.model.name) && (model.listModels[key].version===this.model.version),\n                      'version': model.listModels[key].version > 0}\"\n          (click)= \"selectModel(model.listModels[key].name, model.listModels[key].version, model.listModels[key].trained,model.listModels[key].type,model.listModels[key].quantitative\n          , model.listModels[key].conformal, model.listModels[key].ensemble, model.listModels[key].error)\">\n           <!--\"{'background-color': style1 ? 'red' : (style2 ? 'blue' : null) }\" fas fa-circle, fas fa-square -->\n          <td class=\"text-center\">\n            <i class = \"fas\" [ngClass]=\"{'fa-grip-lines': model.listModels[key].type.indexOf('qualitative') > -1 ||\n                                                        model.listModels[key].type.indexOf('majority') > -1,\n                        'fa-circle': model.listModels[key].type.indexOf('quantitative') >-1 ||\n                                     model.listModels[key].type.indexOf('mean') > -1 ||\n                                     model.listModels[key].type.indexOf('matrix') > -1 ||\n                                     model.listModels[key].type.indexOf('median') > -1,\n                        'fa-times': model.listModels[key].type == '-',\n                        'faa-flash animated': this.model.trainig_models.includes(model.listModels[key].name + '-' + model.listModels[key].version)}\"\n                        [ngStyle]=\"{'color': this.model.trainig_models.includes(model.listModels[key].name + '-' + model.listModels[key].version) ? '#E69400' : (model.listModels[key].trained ? '#51cf66' : 'red' ) }\" \n                        aria-hidden=\"true\"></i> \n         \n                        \n          </td>\n          <!--<td scope=\"row\" class=\"text-left\">\n\n            <button class=\"btn p-0\" (click)=\"openValidation(model.listModels[key].name,model.listModels[key].version)\"\n              *ngIf=\"model.listModels[key].type != '-'\">\n                <i class=\"far fa-chart-bar\" title=\"Validation\" ></i>\n            </button>\n\n            <button *ngIf=\"model.listModels[key].type != '-'\"\n              class=\"btn p-0\" \n              id =\"collapse_{{model.listModels[key].name}}_{{model.listModels[key].version}}\" \n              [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n              placement=\"right\"\n              [autoClose]=\"'inside'\"\n              > <i class=\"far fa-eye\" title=\"Quality\" ></i>\n            </button>-->\n                \n            <!-- Content poppover--> \n             <!--<ng-template #popTitle>Info</ng-template>   \n            <ng-template #popContent>\n              <table class=\"table\">\n                <tbody>\n                  <tr style =\"border-bottom: 2px solid #B8DCED;\" *ngFor=\"let key2 of objectKeys(model.listModels[key].quality)\">\n                    <td class=\"text-left\"><strong>{{key2}}: </strong></td>\n                    <td class=\"text-right\">{{model.listModels[key].quality[key2]}}</td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </ng-template>     \n          </td>-->\n          <td class=\"text-truncate iffyTip hideText\">{{model.listModels[key].name}}</td>\n          <td>{{model.listModels[key].version}}</td>\n          <td>{{model.listModels[key].numMols}}</td>\n          <td>{{model.listModels[key].variables}}</td>\n          <td class=\"text-capitalize text-truncate iffyTip hideText\">{{model.listModels[key].type}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n\n\n \n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modeling-sidebar/modeling-sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modeling-sidebar/modeling-sidebar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModelingSidebarModelingSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ul class=\"nav nav-pills\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"predict-tab\" data-toggle=\"tab\" href=\"#predict\" role=\"tab\" aria-controls=\"predict\" aria-selected=\"true\" [routerLink]=\"['/predictions']\" [class.active]=\"isActive('predictions')\">Predictions</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"build-tab\" data-toggle=\"tab\" href=\"#build\" role=\"tab\" aria-controls=\"build\" aria-selected=\"false\" [routerLink]=\"['/models']\" [class.active]=\"isActive('models')\">Models</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"similarity-tab\" data-toggle=\"tab\" href=\"#similarity\" role=\"tab\" aria-controls=\"similarity\" aria-selected=\"false\" [routerLink]=\"['/similarity']\" [class.active]=\"isActive('similarity')\">Similarity</a>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prediction-list/prediction-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prediction-list/prediction-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPredictionListPredictionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr class=\"my-0\">\n\n<app-manage-predictions></app-manage-predictions>\n<div class=\"ml-3 mr-3\">\n  <div class =\"text-center spinner-table\" *ngIf = \"!this.tableVisible\">\n    <div class=\"spinner-border text-primary\"  style=\"width: 10rem; height: 10rem;\"  role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n  <div class=\"col-12\"  [hidden] = \"!this.tableVisible\">\n    <table class=\"table\" id=\"dataTablePredictions\">\n      <thead>\n        <tr>\n          <th style=\"width: 40%\">Name</th>\n          <th style=\"width: 5%\">Models</th>\n          <th style=\"width: 5%\">Version</th>\n          <th style=\"width: 20%\">Prediction Set</th>\n          <th style=\"width: 30%\" >Date</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr class=\"blink\" *ngFor=\"let key of objectKeys(this.prediction.predicting)\">\n              <td >{{key}}</td>\n              <td>{{this.prediction.predicting[key][0]}}</td>\n              <td>{{this.prediction.predicting[key][1]}}</td>\n              <td>{{this.prediction.predicting[key][2].substring(this.prediction.predicting[key][2].lastIndexOf('/') + 1)}}</td>\n              <td>-</td>         \n            </tr>\n        <tr *ngFor=\"let info of this.prediction.predictions\" (click)= \"selectPrediction(info[0], info[1], info[2], info[3])\"\n        [ngClass]=\"{'selected': this.prediction.name=== info[0]}\">\n          <td class=\"text-truncate iffyTip hideText\">{{info[0]}}</td>\n          <td>{{info[1]}}</td>\n          <td>{{info[2]}}</td>\n          <td class=\"text-truncate iffyTip hideText\">{{info[4].substring(info[4].lastIndexOf('/') + 1)}}</td>\n          <td class=\"text-truncate iffyTip hideText\">{{info[3]}}</td>         \n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prediction/prediction.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prediction/prediction.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPredictionPredictionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!--<div class =\"overlay text-center\">\n  <div class=\"spinner-border text-primary\"  style=\"width: 10rem; height: 10rem;\"  role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>-->\n<div class=\"container\"  *ngIf=\"this.predictionResult != undefined\">\n  <div class=\"row\" *ngIf=\"this.predictionResult != undefined  && this.predictionResult['external-validation']\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n      <div class=\"card-body\"> \n        <div class=\"row ml-2\">\n            <small class=\"h2 text-muted\"><u>Fitting</u></small>\n        </div>\n        <div class=\"row align-items-center\">\n          <div class=\"col-2 mt-1\">\n            <table class=\"table table-sm mt-4\">\n              <tbody>\n                <tr *ngFor = \"let key of objectKeys(modelValidationInfo)\">\n                  \n                  <td  *ngIf=\"!this.q_measures.includes(key)\" class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo[key][0]}}\"><strong>{{key.split('_').join(' ')}}:</strong></td>\n                  <td  *ngIf=\"!this.q_measures.includes(key)\" class=\"text-right text-capitalize\">{{modelValidationInfo[key][1]}}</td>\n              </tr>\n              </tbody>\n            </table> \n          </div>\n          <div class=\"col-5\" *ngIf=\"this.modelValidationInfo['TP']\">\n            <!--CONFUSION MATRIX-->\n            <app-confusion-matrix \n                  [TP] = \"this.modelValidationInfo['TP'][1]\"\n                  [FP] = \"this.modelValidationInfo['FP'][1]\"\n                  [FN] = \"this.modelValidationInfo['FN'][1]\"\n                  [TN] = \"this.modelValidationInfo['TN'][1]\"\n              ></app-confusion-matrix>                 \n          </div>\n          <div class=\"col-5\"  *ngIf=\"this.modelValidationInfo['TP']\">\n            <div style=\"display: block\">\n              <canvas baseChart\n                  [data]=\"polarAreaChartData\"\n                  [options]=\"polarChartOptions\"\n                  [labels]=\"polarAreaChartLabels\"\n                  [legend]=\"polarAreaLegend\"\n                  [colors]=\"polarAreaChartColors\"\n                  [chartType]=\"polarAreaChartType\">\n              </canvas>\n            </div>\n          </div>\n        </div><!--row---->\n      </div><!--body-->\n    </div><!--card-->\n  </div>\n  <div class=\"row\" *ngIf=\"this.predictionResult != undefined && this.predictionResult.warning\">\n    <div class=\"card w-100\">\n      <div class=\"card-body\"> \n        <div class=\"alert alert-danger text-center\" role=\"alert\">\n          {{this.predictionResult.warning}}\n        </div>\n      </div>\n    </div>\n  </div>\n \n    <!--<div class=\"d-flex flex-row-reverse\" *ngIf=\"this.predictionResult != undefined\">\n      \n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n          <button type=\"button\" class=\"btn btn-raised btn-etransafe\" (click)=\"savePDF()\"><i class=\"far fa-file-pdf\"></i>  PDF</button>\n          <button type=\"button\" class=\"btn btn-raised btn-etransafe\" (click)=\"saveEXCEL()\"><i class=\"fas fa-file-excel\"></i>  Excel</button>\n        </div>\n      \n    </div>-->\n  <div class=\"row mt-3\" *ngIf=\"this.predictionResult != undefined\">\n    <div class=\"card w-100\">\n        <div id=\"overlay\" *ngIf=\"!this.predictionVisible\">\n          <div class=\"spinner-border text-primary\"  style=\"width: 10rem; height: 10rem;\"  role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n      <!--NAVS tables-->\n        <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"pills-all-tab\" data-toggle=\"tab\" href=\"#pills-all\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\"><h4>List</h4></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"pills-one-tab\" data-toggle=\"tab\" href=\"#pills-one\" role=\"tab\" aria-controls=\"pills-one\" aria-selected=\"false\"><h4>Reports</h4></a>\n          </li>\n        </ul>\n\n        <div class=\"tab-content\" id=\"pills-tabContent\">\n          <!--ALL-->\n          <div class=\"tab-pane fade show active\" id=\"pills-all\" role=\"tabpanel\" aria-labelledby=\"pills-all-tab\">\n            <div class=\"card-body\">\n              \n              <table  id=\"prediction\" class=\"table m-0 table-light\">\n                <thead>\n                  <tr>\n                  \n                    <th data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\" title=\"Name of the molecule, as present in the input file\">Name</th>\n                    <th class=\"align-middle text-center\" data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\" title=\"Structure of the molecule in SMILES format\">Mol</th>\n                    <!--<th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.ymatrix\">Value</th>-->\n                    <th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.values\" data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\" title=\"Results of the prediction\">\n                    Prediction \n                      <span *ngIf =\"this.modelDocumentation?.Endpoint_units.value != null\">({{this.modelDocumentation?.Endpoint_units.value}})</span>\n                    </th>\n                    <!--<th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.upper_limit\">Upper limit</th>-->\n                    <!--<th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.lower_limit\">Lower limit</th>-->\n                    <!--<th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.c0\">Inactive</th>-->\n                    <!--<th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.c1\">Active</th>-->\n                    <!--<th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.ensemble_c0\">Ensemble Class 0</th>-->\n                    <!--<th class=\"align-middle text-center\" *ngIf=\"this.predictionResult.ensemble_c1\">Ensemble Class 1</th>-->\n      \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let res of this.predictionResult.SMILES; let i=index\">\n                    <td class=\"align-middle\" >{{this.predictionResult.obj_nam[i]}}</td>\n                    <td class=\"align-middle text-center\">\n                      <canvas #cmp id=\"{{i}}\">{{this.predictionResult.SMILES[i]}}</canvas>\n                    </td>\n                   <!--<td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.ymatrix\" >{{this.predictionResult.ymatrix[i].toFixed(3)}}</td>-->\n                    <td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.values\">{{castValue(this.predictionResult.values[i])}}</td>\n                    <!--<td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.upper_limit\">{{this.predictionResult.upper_limit[i].toFixed(3)}}</td>-->\n                    <!--<td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.lower_limit\">{{this.predictionResult.lower_limit[i].toFixed(3)}}</td>-->\n                    <!--<td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.c0\">{{this.predictionResult.c0[i]}}</td>-->\n                    <!--<td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.c1\">{{this.predictionResult.c1[i]}}</td>-->\n                    <!--<td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.ensemble_c0\">{{this.predictionResult.ensemble_c0[i].toFixed(3)}}</td>-->\n                    <!--<td class=\"align-middle text-center\" *ngIf=\"this.predictionResult.ensemble_c1\">{{this.predictionResult.ensemble_c1[i].toFixed(3)}}</td>-->\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!--END ALL-->\n          <!--ONE-->\n        \n          <div class=\"tab-pane fade\" id=\"pills-one\" role=\"tabpanel\" aria-labelledby=\"pills-one-tab\" *ngIf=\"this.predictionResult != undefined \">\n            <div class=\"card-body\">\n              <!--PAGINATION-->\n              <div class=\"row  align-items-center\">\n                <div class=\"col-2 offset-5\">\n                  <span><strong>{{this.molIndex +1}} of {{this.predictionResult.SMILES.length}}</strong></span>\n                </div>\n                <div class=\"col-1  p-0 offset-4\">\n                  <nav aria-label=\"Page navigation example\">\n                    <ul class=\"pagination\">\n                      <li class=\"page-item\" [ngClass]=\"{'disabled': this.noPreviousMol}\">\n                        <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\" (click) = \"PreviousMol()\">\n                          <span aria-hidden=\"true\">&laquo;</span>\n                          <span class=\"sr-only\">Previous</span>\n                        </a>\n                      </li>\n                      <li class=\"page-item\" [ngClass]=\"{'disabled': this.noNextMol}\">\n                        <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Next\" (click) = \"NextMol()\">\n                          <span aria-hidden=\"true\">&raquo;</span>\n                          <span class=\"sr-only\">Next</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </nav>\n                </div>\n              </div>\n              <!--END PAGINATION-->\n\n\n              <div class=\"row\" style=\"background-color: #22577a;color: white\">\n                <div class=\"col-3 border\">\n                  {{this.prediction.name}}\n                </div>\n                <div class=\"col-6 border\">\n                 Model {{this.prediction.modelName}} version {{this.prediction.modelVersion}}\n                </div>\n                <div class=\"col-3 border\">\n                  {{this.prediction.date}}\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-3 border\">\n                  <strong>Name</strong>\n                </div>\n                <div class=\"col-9 border\">\n                 {{this.predictionResult.obj_nam[molIndex]}}\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-3 border\">\n                  <strong>ID</strong>\n                </div>\n                <div class=\"col-9 border\">\n                  {{this.predictionResult.obj_id[molIndex]}}\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-3 border\">\n                  <strong>Structure</strong>\n                </div>\n                <div class=\"col-9 border\">\n                  <canvas id=\"one_canvas\"></canvas>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-3 border\">\n                  <strong>Other</strong>\n                </div>\n                <div class=\"col-9 border\">\n                  <span><strong>Activity: </strong></span>\n                  <span *ngIf=\"this.predictionResult.ymatrix\">{{this.predictionResult.ymatrix[molIndex]}}</span> \n                  <span *ngIf=\"!this.predictionResult.ymatrix\">-</span> \n                </div>\n              </div>\n              <div class=\"row bg-light\">\n                <div class=\"col-3 border\">\n                  <strong>Result</strong>\n                </div>\n                <div class=\"col-9 border\">\n                  <span *ngIf=\"this.predictionResult.values\">{{castValue(this.predictionResult.values[molIndex])}}</span>\n                  <span *ngIf=\"this.modelDocumentation != undefined && this.modelDocumentation['Endpoint_units']\"> {{this.modelDocumentation['Endpoint_units'].value}}</span>\n                </div>\n              </div>\n              <div class=\"row bg-light\">\n                <div class=\"col-3 border\">\n                  <strong>Reliability</strong>\n                </div>\n                <div class=\"col-9 border\">\n                  <span *ngIf=\"!this.modelBuildInfo['conformal']\">-</span>\n                  <span *ngIf=\"this.modelBuildInfo['conformal']\">{{(1.0-this.modelBuildInfo['conformal_significance'])*100}}%CI</span>\n                  <span *ngIf=\"this.modelBuildInfo['conformal'] && this.modelBuildInfo['quantitative']\">\n                    : {{this.predictionResult.lower_limit[molIndex].toFixed(1)}} <strong>-</strong> {{this.predictionResult.upper_limit[molIndex].toFixed(3)}}\n                  </span>\n                  <!--90%CI: 8.3 - 10.6-->\n                </div>\n              </div>\n              <div class=\"row bg-light\">\n                <div class=\"col-3 border\">\n                  <strong>Interpretation</strong>\n                </div>\n                <div class=\"col-9 border\" *ngIf=\"this.modelDocumentation === undefined\">\n                  <span>No documentation</span>\n                </div>\n                <div class=\"col-9 border\" *ngIf=\"this.modelDocumentation != undefined\">\n                  <p *ngIf=\"this.modelDocumentation['Endpoint'].value != undefined\">{{this.modelDocumentation['Endpoint'].value}}</p>\n                  <p *ngIf=\"this.objectKeys(this.modelDocumentation).includes('Interpretation') && this.modelDocumentation['Interpretation'].value != undefined\"> <br>{{this.modelDocumentation?.Interpretation.value}}</p>\n                  <p *ngIf=\"this.modelDocumentation['Species'].value != undefined\"> <br>{{this.modelDocumentation['Species'].value}}</p>\n                </div>\n              </div>\n              <div class=\"row bg-light\" *ngIf=\"!this.modelBuildInfo['ensemble']\">\n                <div class=\"col-3 border\">\n                  <strong >Model</strong>\n                </div>\n                <div class=\"col-9 border\">\n                  <span class=\"text-capitalize\">{{this.modelBuildInfo['model']}}</span><span> using {{this.modelBuildInfo['nvarx']}}vars</span>\n                  <br><br>\n                  <span>Training series {{this.modelBuildInfo['nobj']}} compounds</span><br>\n                    <span *ngIf=\"this.modelBuildInfo['R2']\">R2: {{this.modelBuildInfo['R2'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['SDEC']\">SDEC: {{this.modelBuildInfo['SDEC'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['Q2']\">Q2: {{this.modelBuildInfo['Q2'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['SDEP']\">SDEP: {{this.modelBuildInfo['SDEP'].toFixed(2)}}</span>\n                    <span *ngIf=\"this.modelBuildInfo['Sensitivity']\">Sensitivity: {{this.modelBuildInfo['Sensitivity'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['Specificity']\">Specificity: {{this.modelBuildInfo['Specificity'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['MCC']\">MCC: {{this.modelBuildInfo['MCC'].toFixed(2)}}</span><br>\n                    <span *ngIf=\"this.modelBuildInfo['SensitivityPed']\">Sensitivity (predicted): {{this.modelBuildInfo['SensitivityPed'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['SpecificityPred']\">Specificity (predicted): {{this.modelBuildInfo['SpecificityPred'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['MCCpred']\">MCC (predicted): {{this.modelBuildInfo['MCCpred'].toFixed(2)}}</span>\n                    <span *ngIf=\"this.modelBuildInfo['Conformal_mean_interval']\">Conformal mean interval: {{this.modelBuildInfo['Conformal_mean_interval'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['Conformal_coverage']\">Conformal coverage: {{this.modelBuildInfo['Conformal_coverage'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.modelBuildInfo['Conformal_accuracy']\">Conformal accuracy: {{this.modelBuildInfo['Conformal_accuracy'].toFixed(2)}} </span>\n                  <br>\n                    <a href=\"javascript:void(0);\">QMRF report</a>\n                    \n                </div>\n              </div>\n              <div class=\"row bg-light\" *ngIf=\"this.modelBuildInfo['ensemble']\">\n                <div class=\"col-3 border\">\n                  <strong >Combined Model </strong>\n                </div>\n                <div class=\"col-9 border\">\n                  <span class=\"text-capitalize\">{{this.modelBuildInfo['model'].replace('combination:','')}}</span><span> using {{this.modelBuildInfo['nvarx']}} models</span>\n                  <br><br>\n                  <!--SUBMODEL RESULTS-->\n                    <table class=\"table table-striped w-auto\">\n                        <thead>\n                          <tr>\n                            <th class=\"pl-0 pb-2 pt-2 pr-2 text-left\" scope=\"col\">Model</th>\n                            <th class=\"p-2 text-center\" scope=\"col\">Version</th>\n                            <th class=\"pr-0 pl-2 pb-2 pt-2 text-right\" scope=\"col\">Result</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let model of this.predictionResult.var_nam; let j = index\">\n                            <td class=\"p-0 text-left\">{{model.split(\":\")[1]}}</td>\n                            <td class=\"p-0 text-center\">{{model.split(\":\")[2]}}</td>\n                            <td class=\"p-0 text-right\">{{castValue(this.predictionResult.xmatrix[this.molIndex][j])}}</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                  <!--END SUBMODEL RESULTS-->\n                   \n                  <br>\n                    <a href=\"javascript:void(0);\">QMRF report</a>\n                    \n                </div>\n              </div>\n              <div class=\"row bg-light\" *ngIf=\"this.modelBuildInfo['ensemble'] && this.submodels.length > 0\">\n                <div class=\"col-3 border\">\n                  <div class=\"row justify-content-between\">\n                    <div class=\"col\">\n                      <strong class=\"align-middle\" >Model {{this.submodelsIndex+1}}/{{this.submodels.length}} </strong>\n                    </div>\n                    <div class=\"col-3 p-0\">\n                      <nav aria-label=\"Page navigation example\">\n                        <ul class=\"pagination\">\n                          <li class=\"page-item\" [ngClass]=\"{'disabled': this.noPreviousModel}\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\" (click) = \"PreviousModel()\">\n                              <span aria-hidden=\"true\">&laquo;</span>\n                              <span class=\"sr-only\">Previous</span>\n                            </a>\n                          </li>\n                          <li class=\"page-item\" [ngClass]=\"{'disabled': this.noNextModel}\">\n                            <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Next\" (click) = \"NextModel()\">\n                              <span aria-hidden=\"true\">&raquo;</span>\n                              <span class=\"sr-only\">Next</span>\n                            </a>\n                          </li>\n                        </ul>\n                      </nav>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <strong><h4>{{this.submodels[this.submodelsIndex]['name']}} v.{{this.submodels[this.submodelsIndex]['version']}}</h4></strong>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-9 border\">\n                  <span class=\"text-capitalize\">{{this.submodels[this.submodelsIndex]['model']}}</span><span> using {{this.submodels[this.submodelsIndex]['nvarx']}}vars</span>\n                  <br><br>\n                  <span>Training series {{this.submodels[this.submodelsIndex]['nobj']}} compounds</span><br><br>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['R2']\">R2: {{this.submodels[this.submodelsIndex]['R2'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['SDEC']\">SDEC: {{this.submodels[this.submodelsIndex]['SDEC'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['Q2']\">Q2: {{this.submodels[this.submodelsIndex]['Q2'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['SDEP']\">SDEP: {{this.submodels[this.submodelsIndex]['SDEP'].toFixed(2)}}</span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['Sensitivity']\">Sensitivity: {{this.submodels[this.submodelsIndex]['Sensitivity'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['Specificity']\">Specificity: {{this.submodels[this.submodelsIndex]['Specificity'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['MCC']\">MCC: {{this.submodels[this.submodelsIndex]['MCC'].toFixed(2)}}</span><br>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['SensitivityPed']\">Sensitivity (predicted): {{this.submodels[this.submodelsIndex]['SensitivityPed'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['SpecificityPred']\">Specificity (predicted): {{this.submodels[this.submodelsIndex]['SpecificityPred'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['MCCpred']\">MCC (predicted): {{this.submodels[this.submodelsIndex]['MCCpred'].toFixed(2)}}</span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['Conformal_mean_interval']\">Conformal mean interval: {{this.submodels[this.submodelsIndex]['Conformal_mean_interval'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['Conformal_coverage']\">Conformal coverage: {{this.submodels[this.submodelsIndex]['Conformal_coverage'].toFixed(2)}}, </span>\n                    <span *ngIf=\"this.submodels[this.submodelsIndex]['Conformal_accuracy']\">Conformal accuracy: {{this.submodels[this.submodelsIndex]['Conformal_accuracy'].toFixed(2)}} </span>\n                  <br><br>\n                     <a href=\"javascript:void(0);\">QMRF report</a>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      <!---->\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/predictor/predictor.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/predictor/predictor.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPredictorPredictorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Prediction</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n  <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container mt-1\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <label for=\"predictionName\">Prediction name</label>\n        <input type=\"text\" class=\"form-control is-invalid\" [class.is-valid]=\"isvalid\"  [class.is-invalid]=\"!isvalid\"\n         id=\"predictionName\" [(ngModel)]=\"predictName\"  (ngModelChange)=\"predictNameChange()\" required>\n        <div class=\"valid-feedback\">\n          Valid Name!\n        </div>\n        <div class=\"invalid-feedback\">\n          The name of the prediction is invalid or already exist!\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-2\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputFile\" class=\"bmd-label-floating\">File input</label>\n          <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" accept=\".sdf\" (change)=\"change($event.target.files)\">\n          <small class=\"text-muted\">Input search file.</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col -8\">\n        <div class=\"form-group\">\n          <label for=\"model\">Model</label>\n            <select id=\"model\" class=\"form-control\" [(ngModel)]=\"this.modelName\" name=\"modelName\"> \n              <option *ngFor=\"let value of objectKeys(this.models).sort()\" [value]='value'>\n              {{value}}\n              </option>\n          </select>\n            <small id=\"model\" class=\"text-muted\">\n            Select model.\n          </small>\n        </div>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label for=\"version\">Version</label>\n            <select class=\"form-control\" [(ngModel)]=\"this.version\" name=\"version\"> \n                <option *ngFor=\"let value of this.models[this.modelName]\" [value]='value'>\n                {{value}}\n                </option>\n            </select>\n              <small id=\"version\" class=\"text-muted\">\n            Select version.\n          </small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-outline-secondary btn-lg\" (click)=\"activeModal.close('Close click')\">Close</button>\n<button type=\"button\" class=\"btn btn-outline-primary btn-lg\" (click)=\"predict()\">Predict</button>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/qualit-conformal/qualit-conformal.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qualit-conformal/qualit-conformal.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQualitConformalQualitConformalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-3\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Prediction (cross-validation)</u></small>\n            </div>\n            <div class=\"row align-items-center\">\n                <div class=\"col-2 mt-1\" *ngIf=\"objectKeys(this.modelValidationInfo).length > 0\">\n                    <table class=\"table table-sm mt-4\">\n                        <tbody>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['Sensitivity'][0]}}\"><strong>Sensitivity:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['Sensitivity'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['Specificity'][0]}}\"><strong>Specificity:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['Specificity'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['MCC'][0]}}\"><strong>MCC:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['MCC'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['Conformal_coverage'][0]}}\"><strong>Conformal coverage:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['Conformal_coverage'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['Conformal_accuracy'][0]}}\"><strong>Conformal accuracy:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['Conformal_accuracy'][1]}}</td>\n                            </tr>\n                        </tbody>\n                    </table>    \n                </div>\n                <div class=\"col-5\" *ngIf=\"objectKeys(this.modelValidationInfo).length > 0\">\n                    <!--CONFUSION MATRIX-->\n                    <app-confusion-matrix  \n                        [TP] = \"this.modelValidationInfo['TP'][1]\"\n                        [FP] = \"this.modelValidationInfo['FP'][1]\"\n                        [FN] = \"this.modelValidationInfo['FN'][1]\"\n                        [TN] = \"this.modelValidationInfo['TN'][1]\"\n                    > </app-confusion-matrix>\n                </div>\n                <div class=\"col-5\">\n                        <div style=\"display: block\">\n                        <canvas baseChart\n                                [data]=\"polarAreaChartData\"\n                                [options]=\"polarChartOptions\"\n                                [labels]=\"polarAreaChartLabels\"\n                                [legend]=\"polarAreaLegend\"\n                                [colors]=\"polarAreaChartColors\"\n                                [chartType]=\"polarAreaChartType\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-3\" *ngIf=\"this.modelDocumentation !== undefined\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <!--<div class=\"card-header\"><h5>Prediction (cross-validation)</h5></div>-->\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Documentation</u></small>\n            </div>\n            <br>\n            <div class=\"row\">\n                <table class=\"table table-striped documentation\">\n                    <tbody>\n                        <tr *ngFor=\"let key of this.orderDocumentation\">\n                            <td>{{key}}</td>\n                            <ng-container *ngIf=\"this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td *ngIf=\"this.modelDocumentation[key].value && !isObject(this.modelDocumentation[key].value)\">{{this.modelDocumentation[key].value}}</td>\n                                <td *ngIf=\"this.modelDocumentation[key].value && isObject(this.modelDocumentation[key].value)\">   \n                                    <div class=\"accordion\" id=\"accordionExample\">\n                                        <div>        \n                                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + key\" aria-expanded=\"false\" >\n                                             INFO\n                                            </button>\n                                            <div id=\"{{key}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                                                <div class=\"card-body\">\n                                                    <table class=\"table table-striped\">\n                                                        <tbody>\n                                                            <tr *ngFor=\"let key2 of this.objectKeys(this.modelDocumentation[key].value)\">\n                                                                <td>{{key2}}</td>\n                                                                <td *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].value}}</td>\n                                                                <td *ngIf=\"!isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2]}}</td>\n                                                                <td class=\"text-right font-italic\" *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].description}}</td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table> \n                                                </div>\n                                            </div>\n                                        </div>\n                                        \n                                    </div>\n                                </td>\n                                <td *ngIf=\"!this.modelDocumentation[key].value\">-</td>\n                                <td class=\"text-right font-italic\" >{{this.modelDocumentation[key].description}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td>NO INFO</td>\n                                <td class=\"text-right font-italic\">NO INFO</td>\n                           </ng-container>\n                        </tr>\n                    </tbody>\n                </table> \n            </div>\n        </div>\n    </div>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/qualit-no-conformal/qualit-no-conformal.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qualit-no-conformal/qualit-no-conformal.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQualitNoConformalQualitNoConformalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-3\" *ngIf=\"this.modelValidationInfo['TPpred']\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <div class=\"card-body\"> \n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Fitting</u></small>\n            </div>\n            <div class=\"row align-items-center\">\n                <div class=\"col-2 mt-1\">\n                    <table class=\"table table-sm mt-4\">\n                        <tbody>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['SensitivityPed'][0]}}\"><strong>Sensitivity:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['SensitivityPed'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['SpecificityPred'][0]}}\"><strong>Specificity:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['SpecificityPred'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['MCCpred'][0]}}\"><strong>MCC:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['MCCpred'][1]}}</td>\n                            </tr>\n                        </tbody>\n                    </table> \n                </div>\n                <div class=\"col-5\">\n                  <!--CONFUSION MATRIX-->\n                 <app-confusion-matrix \n                        [TP] = \"this.modelValidationInfo['TPpred'][1]\"\n                        [FP] = \"this.modelValidationInfo['FPpred'][1]\"\n                        [FN] = \"this.modelValidationInfo['FNpred'][1]\"\n                        [TN] = \"this.modelValidationInfo['TNpred'][1]\"\n                    ></app-confusion-matrix>                 \n                </div>\n                <div class=\"col-5\">\n                     <div style=\"display: block\">\n                        <canvas baseChart\n                            [data]=\"polarAreaChartData2\"\n                            [options]=\"polarChartOptions\"\n                            [labels]=\"polarAreaChartLabels\"\n                            [legend]=\"polarAreaLegend\"\n                            [colors]=\"polarAreaChartColors\"\n                            [chartType]=\"polarAreaChartType\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mt-3\" *ngIf=\"this.modelValidationInfo['TP']\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Prediction (cross-validation)</u></small>\n            </div>\n            <div class=\"row align-items-center\">\n                <div class=\"col-2\">\n                    <table class=\"table table-sm mt-4\">\n                        <tbody>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['Sensitivity'][0]}}\"><strong>Sensitivity:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['Sensitivity'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['Specificity'][0]}}\"><strong>Specificity:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['Specificity'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['MCC'][0]}}\"><strong>MCC:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['MCC'][1]}}</td>\n                            </tr>\n                        </tbody>\n                    </table>    \n                </div>\n                <div class=\"col-5\">\n                    <!--CONFUSION MATRIX-->\n                     <app-confusion-matrix \n                        [TP] = \"this.modelValidationInfo['TP'][1]\"\n                        [FP] = \"this.modelValidationInfo['FP'][1]\"\n                        [FN] = \"this.modelValidationInfo['FN'][1]\"\n                        [TN] = \"this.modelValidationInfo['TN'][1]\"\n                    ></app-confusion-matrix>\n                </div>\n                <div class=\"col-5\">\n                     <div style=\"display: block\">\n                        <canvas baseChart\n                                [data]=\"polarAreaChartData\"\n                                [options]=\"polarChartOptions\"\n                                [labels]=\"polarAreaChartLabels\"\n                                [legend]=\"polarAreaLegend\"\n                                [colors]=\"polarAreaChartColors\"\n                                [chartType]=\"polarAreaChartType\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-3\" *ngIf=\"this.modelDocumentation !== undefined\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <!--<div class=\"card-header\"><h5>Prediction (cross-validation)</h5></div>-->\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Documentation</u></small>\n            </div>\n            <br>\n            <div class=\"row\">\n                <table class=\"table table-striped documentation\">\n                    <tbody>\n                        <tr *ngFor=\"let key of this.orderDocumentation\">\n                            <td>{{key}}</td>\n                            <ng-container *ngIf=\"this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td *ngIf=\"this.modelDocumentation[key].value && !isObject(this.modelDocumentation[key].value)\">{{this.modelDocumentation[key].value}}</td>\n                                <td *ngIf=\"this.modelDocumentation[key].value && isObject(this.modelDocumentation[key].value)\">   \n                                    <div class=\"accordion\" id=\"accordionExample\">\n                                        <div>        \n                                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + key\" aria-expanded=\"false\" >\n                                             INFO\n                                            </button>\n                                            <div id=\"{{key}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                                                <div class=\"card-body\">\n                                                    <table class=\"table table-striped\">\n                                                        <tbody>\n                                                            <tr *ngFor=\"let key2 of this.objectKeys(this.modelDocumentation[key].value)\">\n                                                                <td>{{key2}}</td>\n                                                                <td *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].value}}</td>\n                                                                <td *ngIf=\"!isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2]}}</td>\n                                                                <td class=\"text-right font-italic\" *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].description}}</td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table> \n                                                </div>\n                                            </div>\n                                        </div>\n                                        \n                                    </div>\n                                </td>\n                                <td *ngIf=\"!this.modelDocumentation[key].value\">-</td>\n                                <td class=\"text-right font-italic\" >{{this.modelDocumentation[key].description}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td>-</td>\n                                <td class=\"text-right font-italic\">-</td>\n                           </ng-container>\n                        </tr>\n                    </tbody>\n                </table> \n            </div>\n        </div>\n    </div>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quantit-conformal/quantit-conformal.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quantit-conformal/quantit-conformal.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuantitConformalQuantitConformalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-3\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Fitting</u></small>\n            </div>\n            <div class=\"row justify-content-between\">\n                <div class=\"col-3 mt-1\">\n                    <table class=\"table table-sm mt-4\">\n                        <tbody>\n                            <tr *ngFor = \"let key of objectKeys(modelValidationInfo)\">\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo[key][0]}}\"><strong>{{key}}:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo[key][1]}}</td>\n                            </tr>\n                        </tbody>\n                    </table>    \n                </div>\n                <div class=\"col-9\">\n                    <div style=\"display: block\">\n                         <canvas baseChart #QuantitConformalChart\n                            [datasets]=\"ChartDataFitted\"\n                            [options]=\"ChartOptionsFitted\"\n                            [labels]=\"ChartLabels\"\n                            [chartType]=\"ChartType\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-3\" *ngIf=\"this.modelDocumentation !== undefined\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <!--<div class=\"card-header\"><h5>Prediction (cross-validation)</h5></div>-->\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Documentation</u></small>\n            </div>\n            <br>\n            <div class=\"row\">\n                <table class=\"table table-striped documentation\">\n                    <tbody>\n                        <tr *ngFor=\"let key of this.orderDocumentation\">\n                            <td>{{key}}</td>\n                            <ng-container *ngIf=\"this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td *ngIf=\"this.modelDocumentation[key].value && !isObject(this.modelDocumentation[key].value)\">{{this.modelDocumentation[key].value}}</td>\n                                <td *ngIf=\"this.modelDocumentation[key].value && isObject(this.modelDocumentation[key].value)\">   \n                                    <div class=\"accordion\" id=\"accordionExample\">\n                                        <div>        \n                                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + key\" aria-expanded=\"false\" >\n                                             INFO\n                                            </button>\n                                            <div id=\"{{key}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                                                <div class=\"card-body\">\n                                                    <table class=\"table table-striped\">\n                                                        <tbody>\n                                                            <tr *ngFor=\"let key2 of this.objectKeys(this.modelDocumentation[key].value)\">\n                                                                <td>{{key2}}</td>\n                                                                <td *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].value}}</td>\n                                                                <td *ngIf=\"!isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2]}}</td>\n                                                                <td class=\"text-right font-italic\" *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].description}}</td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table> \n                                                </div>\n                                            </div>\n                                        </div>\n                                        \n                                    </div>\n                                </td>\n                                <td *ngIf=\"!this.modelDocumentation[key].value\">-</td>\n                                <td class=\"text-right font-italic\" >{{this.modelDocumentation[key].description}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td>-</td>\n                                <td class=\"text-right font-italic\">-</td>\n                           </ng-container>\n                        </tr>\n                    </tbody>\n                </table> \n            </div>\n        </div>\n    </div>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quantit-no-conformal/quantit-no-conformal.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quantit-no-conformal/quantit-no-conformal.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuantitNoConformalQuantitNoConformalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-3\" *ngIf=\"objectKeys(this.modelValidationInfo).length > 0\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <!--<div class=\"card-header\"><h5>Fitting</h5></div>-->\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Fitting</u></small>\n            </div>\n            <div class=\"row justify-content-between\">\n                <div class=\"col-3 mt-1\">\n                    <table class=\"table table-sm mt-4\">\n                        <tbody>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['scoringR'][0]}}\"><strong>Scoring:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['scoringR'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['R2'][0]}}\"><strong>R2:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['R2'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['SDEC'][0]}}\"><strong>SDEC:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['SDEC'][1]}}</td>\n                            </tr>\n                        </tbody>\n                    </table>    \n                </div>\n                <div class=\"col-9\">\n                    <div style=\"display: block\">\n                         <canvas baseChart\n                            [datasets]=\"ChartDataFitted\"\n                            [options]=\"ChartOptionsFitted\"\n                            [labels]=\"ChartLabels\"\n                            [chartType]=\"ChartType\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-3\" *ngIf=\"ChartDataPredicted[0].data.length>0\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <!--<div class=\"card-header\"><h5>Prediction (cross-validation)</h5></div>-->\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Prediction (cross-validation)</u></small>\n            </div>\n            <div class=\"row justify-content-between\">\n                <div class=\"col-3 mt-1\">\n                    \n                    <table class=\"table table-sm mt-4\">\n                        <tbody>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['scoringP'][0]}}\"><strong>Scoring:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['scoringP'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['Q2'][0]}}\"><strong>Q2:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['Q2'][1]}}</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left text-capitalize\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"{{modelValidationInfo['SDEP'][0]}}\"><strong>SDEP:</strong></td>\n                                <td class=\"text-right text-capitalize\">{{modelValidationInfo['SDEP'][1]}}</td>\n                            </tr>\n                        </tbody>\n                    </table> \n                </div>\n                \n                <div class=\"col-9\">\n                    <div style=\"display: block\">\n                        <canvas baseChart\n                            [datasets]=\"ChartDataPredicted\"\n                            [options]=\"ChartOptionsPredicted\"\n                            [labels]=\"ChartLabels\"\n                            [chartType]=\"ChartType\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>  \n<div class=\"row mt-3\" *ngIf=\"this.modelDocumentation !== undefined\">\n    <div class=\"card w-100\" style=\"width: 18rem;\">\n        <!--<div class=\"card-header\"><h5>Prediction (cross-validation)</h5></div>-->\n        <div class=\"card-body\">\n            <div class=\"row ml-2\">\n                <small class=\"h2 text-muted\"><u>Documentation</u></small>\n            </div>\n            <br>\n            <div class=\"row\">\n                <table class=\"table table-striped documentation\">\n                    <tbody>\n                        <tr *ngFor=\"let key of this.orderDocumentation\">\n                            <td>{{key}}</td>\n                            <ng-container *ngIf=\"this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td *ngIf=\"this.modelDocumentation[key].value && !isObject(this.modelDocumentation[key].value)\">{{this.modelDocumentation[key].value}}</td>\n                                <td *ngIf=\"this.modelDocumentation[key].value && isObject(this.modelDocumentation[key].value)\">   \n                                    <div class=\"accordion\" id=\"accordionExample\">\n                                        <div>        \n                                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + key\" aria-expanded=\"false\" >\n                                             INFO\n                                            </button>\n                                            <div id=\"{{key}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                                                <div class=\"card-body\">\n                                                    <table class=\"table table-striped\">\n                                                        <tbody>\n                                                            <tr *ngFor=\"let key2 of this.objectKeys(this.modelDocumentation[key].value)\">\n                                                                <td>{{key2}}</td>\n                                                                <td *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].value}}</td>\n                                                                <td *ngIf=\"!isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2]}}</td>\n                                                                <td class=\"text-right font-italic\" *ngIf=\"isObject(this.modelDocumentation[key].value[key2])\">{{this.modelDocumentation[key].value[key2].description}}</td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table> \n                                                </div>\n                                            </div>\n                                        </div>\n                                        \n                                    </div>\n                                </td>\n                                <td *ngIf=\"!this.modelDocumentation[key].value\">-</td>\n                                <td class=\"text-right font-italic\" >{{this.modelDocumentation[key].description}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!this.objectKeys(this.modelDocumentation).includes(key)\">\n                                <td>-</td>\n                                <td class=\"text-right font-italic\">-</td>\n                           </ng-container>\n                        </tr>\n                    </tbody>\n                </table> \n            </div>\n        </div>\n    </div>\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ul class=\"nav nav-pills pl-2\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"predict-tab\" data-toggle=\"tab\" href=\"#predict\" role=\"tab\" aria-controls=\"predict\" aria-selected=\"true\" [routerLink]=\"['/predictions']\" [class.active]=\"isActive('predictions')\">Predictions</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"build-tab\" data-toggle=\"tab\" href=\"#build\" role=\"tab\" aria-controls=\"build\" aria-selected=\"false\" [routerLink]=\"['/models']\" [class.active]=\"isActive('models')\">Models</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"similarity-tab\" data-toggle=\"tab\" href=\"#similarity\" role=\"tab\" aria-controls=\"similarity\" aria-selected=\"false\" [routerLink]=\"['/similarity']\" [class.active]=\"isActive('similarity')\">Similarity</a>\n  </li>\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/similarity/similarity.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/similarity/similarity.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSimilaritySimilarityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n  <div class=\"row align-items-centermt-4\">\n    <div class=\"col-6\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputFile\" class=\"bmd-label-floating\">File input</label>\n        <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" accept=\".sdf\" (change)=\"change($event.target.files)\">\n        <small class=\"text-muted\">Input search file.</small>\n      </div>\n    </div>\n    <div class=\"col-6 align-self-center\">\n      <!--<div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n        <label class=\"form-check-label\" for=\"gridRadios1\">\n          Euclidean\n        </label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\n        <label class=\"form-check-label\" for=\"gridRadios2\">\n          Tanimoto\n        </label>\n      </div>-->\n    </div>\n    <div class=\"col-6\">\n      <div class=\"form-group\">\n        <label for=\"space\">Space</label>\n          <select id=\"space\" class=\"form-control\" [(ngModel)]=\"this.space\" name=\"space\"> \n            <option *ngFor=\"let value of objectKeys(this.spaces)\" [value]='value'>\n            {{value}} ({{this.molsXspace[value]}})\n            </option>\n        </select>\n         <small id=\"space\" class=\"text-muted\">\n          Select space.\n        </small>\n      </div>\n    </div>\n    <div class=\"col-6\"> \n      <div class=\"form-group w-25\">\n        <label for=\"dist_cutoff\">Distance cutoff</label>\n        <input type=\"number\" id=\"dist_cutoff\" class=\"form-control mx-sm-1\" [(ngModel)]=\"this.dist_cutoff\" aria-describedby=\"dist_cutoff\" min=\"0\" max=\"10\" step=\".01\">\n        <small id=\"dist_cutoff\" class=\"text-muted\">\n          (0-10)\n        </small>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"form-group\">\n        <label for=\"version\">Version</label>\n          <select class=\"form-control\" [(ngModel)]=\"this.version\" name=\"version\"> \n              <option *ngFor=\"let value of this.spaces[this.space]\" [value]='value'>\n              {{value}}\n              </option>\n          </select>\n           <small id=\"version\" class=\"text-muted\">\n          Select version.\n        </small>\n      </div> \n    </div>\n    <div class=\"col-6\">\n      <div class=\"form-group w-25\">\n        <label for=\"num_cutoff\">Number cutoff</label>\n        <input type=\"number\" id=\"num_cutoff\" class=\"form-control mx-sm-1\" [(ngModel)]=\"this.num_cutoff\" aria-describedby=\"num_cutoff\" min=\"1\" step=\"1\">\n        <small id=\"num_cutoff\" class=\"text-muted\">\n          (min 1)\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-end\">\n    <div class=\"col\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" \n      [ngClass]=\"{'disabled': this.similarity.file === undefined || this.space === undefined || this.version === undefined }\"\n     (click) = \"search()\" >Search</button>\n    </div>\n  </div>\n\n  <div class=\"text-center mt-5\" *ngIf= \"this.result.length == 0 && predicting\">\n    <div class=\"spinner-border text-primary\"  style=\"width: 10rem; height: 10rem;\"  role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n\n\n  <div *ngIf = \"this.error\" class=\"alert alert-danger row mt-5\" role=\"alert\">\n    <div class=\"col-12\">\n      <span class=\"font-weight-bold\">ERROR: </span> {{this.error_message}}\n    </div>\n  </div>    \n\n  <div class=\"row mt-5\" *ngIf = \"this.result.length > 0\">\n    <div class=\"col-12\" >\n      <h4>Similarity Results</h4>\n    </div>\n    <div class=\"col-12\" *ngIf = \"this.result.length > 0\">\n      <table id=\"simlarityTable\" class=\"table table-fixed table-bordered table-striped\">\n        <thead>\n          <tr>\n            <th>Index</th>\n            <th s>Query name</th>\n            <th data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\" title=\"Query molecule from query test set\">Query molecule</th>\n              <th data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\" title=\"Reference column ID from Reference training set\">Reference ID</th>\n            <th data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\" title=\"Reference column name from Reference training set\">Reference name</th>\n            <th data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\"  title=\"Reference molecule column from Reference training set\">Reference molecule</th>\n            <th data-toggle=\"tooltip\" data-placement=\"top\" data-html=\"true\"  title=\"Similarity distance score: Tanimoto for binary descriptors and Euclidean for continues ones\">Similarity</th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let src of this.nameSrc;let i=index\">\n            <tr *ngFor=\"let pred of this.result[i].obj_nam;let j=index\">\n              <td class=\"align-middle\" width=\"\">{{i}} - {{j}}</td>\n              <td class=\"align-middle\" >{{this.nameSrc[i]}}</td>\n              <td class=\"align-middle\"><canvas #cmp id=\"{{'query_' + i + '_' + j}}\" width=\"300\" height=\"150\">{{this.smileSrc[i]}}</canvas></td>\n              <td class=\"align-middle\">{{this.result[i].obj_id[j]}}</td>\n              <td class=\"align-middle\">{{this.result[i].obj_nam[j]}}</td>\n              <td class=\"align-middle\"><canvas #cmp id=\"{{'ref_' + i + '_' + j}}\" width=\"300\" height=\"150\">{{this.result[i].SMILES[j]}}</canvas></td>\n              <td class=\"align-middle\">{{this.result[i].distances[j].toFixed(3)}}</td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>   \n    <div class=\"row\">\n      <div class=\"loader\" id=\"processing\" hidden=\"true\"></div>\n    </div>\n  </div>  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/training-series/training-series.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training-series/training-series.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTrainingSeriesTrainingSeriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container m-3\">\n  <div class=\"row\">\n    <div *ngIf=\"this.model.file_info!==undefined\" class=\"col-4 card p-0 mb-0 mr-4\">\n      <div class=\"card-header p-2\"><h5>FILE INFO</h5></div>\n      <ul class=\"list-group\">\n          <li class=\"list-group-item d-flex justify-content-between align-items-left p-1\" >\n              <strong>File name: </strong> \n            {{this.model.file_info['name']}}\n            </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-left p-1\" >\n          <strong>Type file: </strong> \n          {{this.model.file_info['type_file']}}\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-left p-1\" >\n            <strong>Size: </strong> \n            {{this.model.file_info['size_M']}} MB\n          </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-left p-1\" >\n          <strong>Number of molecules: </strong> \n          <span class=\"badge badge-primary badge-pill\">{{this.model.file_info['num_mols']}}</span>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"this.model.file_fields!==undefined\" class=\"col-4 card p-0\">\n      <div class=\"card-header p-2\"><h5>SDFILE FIELDS</h5></div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-left p-1\" *ngFor=\"let key of objectKeys(this.model.file_fields)\">\n          <strong>{{key}}</strong>\n          <span class=\"badge badge-primary badge-pill\">{{this.model.file_fields[key]}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <div class=\"col-3\">\n      <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"incremental\"\n          [checked]=\"this.model.incremental\" (change)=\"this.model.incremental = !this.model.incremental\" >\n          <label class=\"control-label\" for=\"incremental\">\n           Incremental\n          </label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"new\"\n          [checked]=\"!this.model.incremental\" (change)=\"this.model.incremental = !this.model.incremental\" >\n          <label class=\"control-label\" for=\"new\">\n            New\n          </label>\n        </div>  \n    </div>\n    <div class=\"col-3\">\n      <label class=\"btn btn-outline-primary btn-lg\" for=\"my-file-selector\">\n          <input id=\"my-file-selector\" type=\"file\" style=\"display:none;\" accept=\".sdf\" (change)=\"onChange($event.target.files)\">\n          BROWSE FILE\n      </label>\n    </div>\n  </div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/validations/validations.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validations/validations.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppValidationsValidationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\" *ngIf=\"this.model.name !=undefined && this.model.trained\">\n    <div *ngIf=\"!this.model.quantitative && !this.model.conformal\">\n        <app-qualit-no-conformal [modelName]=\"this.model.name\" [modelVersion]= \"this.model.version\"></app-qualit-no-conformal>\n    </div>\n    <div *ngIf=\"!this.model.quantitative && this.model.conformal\">\n        <app-qualit-conformal [modelName]=\"this.model.name\" [modelVersion]= \"this.model.version\"></app-qualit-conformal>\n    </div>\n    <div *ngIf=\"this.model.quantitative && !this.model.conformal\">\n        <app-quantit-no-conformal [modelName]=\"this.model.name\" [modelVersion]= \"this.model.version\"></app-quantit-no-conformal>\n    </div>\n    <div *ngIf=\"this.model.quantitative && this.model.conformal\">\n        <app-quantit-conformal [modelName]=\"this.model.name\" [modelVersion]= \"this.model.version\"></app-quantit-conformal>\n    </div>\n</div> \n<div class=\"m-3\" *ngIf=\"this.model.name !=undefined && this.model.error!=undefined  && !this.model.trained\">\n  <div *ngIf=\"this.model.error!='Info file not found'\"class=\"alert alert-danger text-center\" role=\"alert\">\n      <span class=\"font-weight-bolder\">ERROR: </span>{{this.model.error}}!\n  </div>\n  <div *ngIf=\"this.model.error=='Info file not found'\"class=\"alert alert-warning text-center\" role=\"alert\">\n      <span class=\"font-weight-bolder\">WARNING: </span> the model remains to be trained.\n</div>               \n<!--END Modal Documentation-->\n\n\n                \n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Globals.ts":
  /*!****************************!*\
    !*** ./src/app/Globals.ts ***!
    \****************************/

  /*! exports provided: Model, Prediction, Manager, Globals, Similarity */

  /***/
  function srcAppGlobalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Model", function () {
      return Model;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Prediction", function () {
      return Prediction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Manager", function () {
      return Manager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Globals", function () {
      return Globals;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Similarity", function () {
      return Similarity;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Model = function Model() {
      _classCallCheck(this, Model);

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
    };

    Model = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Model);

    var Prediction = function Prediction() {
      _classCallCheck(this, Prediction);

      this.name = undefined; // Name of the model selected in the first step

      this.modelName = undefined;
      this.modelVersion = undefined;
      this.predictions = [];
      this.predicting = {};
      this.conformal = false;
      this.file = undefined; // Name of file uploaded in the second step

      this.result = undefined;
      this.date = undefined;
    };

    Prediction = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Prediction);

    var Manager = function Manager() {
      _classCallCheck(this, Manager);

      this.name = undefined; // Name of the model selected in the first step

      this.version = undefined; // Version of the model selected in the first step

      this.file = undefined; // Name of file uploaded in the second step
    };

    Manager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Manager);

    var Globals = function Globals() {
      _classCallCheck(this, Globals);

      this.tableModelVisible = false;
    };

    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Globals);

    var Similarity = function Similarity() {
      _classCallCheck(this, Similarity);

      this.model_name = undefined;
      this.model_version = undefined;
      this.file = undefined; // Name of file uploaded in the second step

      this.file_info = undefined; // Info file ej. num mols, variables

      this.file_fields = undefined;
      this.result = undefined;
      this.predicting = false;
      this.nameSrc = undefined;
      this.smileSrc = undefined;
    };

    Similarity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Similarity);
    /***/
  },

  /***/
  "./src/app/animations/animations.ts":
  /*!******************************************!*\
    !*** ./src/app/animations/animations.ts ***!
    \******************************************/

  /*! exports provided: slideUp, fade */

  /***/
  function srcAppAnimationsAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideUp", function () {
      return slideUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fade", function () {
      return fade;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var slideUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateY(100vh)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms cubic-bezier(.61, .29, .07, 1.02)')])]);
    var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)])]);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./model-list/model-list.component */
    "./src/app/model-list/model-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _validations_validations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./validations/validations.component */
    "./src/app/validations/validations.component.ts");
    /* harmony import */


    var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prediction/prediction.component */
    "./src/app/prediction/prediction.component.ts");
    /* harmony import */


    var _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./similarity/similarity.component */
    "./src/app/similarity/similarity.component.ts");
    /* harmony import */


    var _builder_builder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./builder/builder.component */
    "./src/app/builder/builder.component.ts");
    /* harmony import */


    var _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./prediction-list/prediction-list.component */
    "./src/app/prediction-list/prediction-list.component.ts");
    /* harmony import */


    var _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./predictor/predictor.component */
    "./src/app/predictor/predictor.component.ts");

    var routes = [{
      path: 'predictions',
      component: _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_9__["PredictionListComponent"]
    }, {
      path: 'models',
      component: _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_3__["ModelListComponent"]
    }, {
      path: 'similarity',
      component: _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_7__["SimilarityComponent"]
    }, {
      path: 'predictor',
      component: _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_10__["PredictorComponent"]
    }, {
      path: 'builder',
      component: _builder_builder_component__WEBPACK_IMPORTED_MODULE_8__["BuilderComponent"]
    }, {
      path: 'validation',
      component: _validations_validations_component__WEBPACK_IMPORTED_MODULE_5__["ValidationsComponent"]
    }, {
      path: 'prediction',
      component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_6__["PredictionComponent"]
    }, {
      path: '',
      redirectTo: '/predictions',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      declarations: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info {\n    background-color: #FAFAFA;\n    min-height: 100vh;   \n}\n.scrollable{\n    max-height: 90vh;\n    overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gICAgbWluLWhlaWdodDogMTAwdmg7ICAgXG59XG4uc2Nyb2xsYWJsZXtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(prediction, model, router) {
        _classCallCheck(this, AppComponent);

        this.prediction = prediction;
        this.model = model;
        this.router = router;
        this.title = 'flameweb';
      }

      _createClass(AppComponent, [{
        key: "isActive",
        value: function isActive(url) {
          return this.router.url.includes(url);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./model-list/model-list.component */
    "./src/app/model-list/model-list.component.ts");
    /* harmony import */


    var _training_series_training_series_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./training-series/training-series.component */
    "./src/app/training-series/training-series.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _validations_validations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./validations/validations.component */
    "./src/app/validations/validations.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _config_training_config_training_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./config-training/config-training.component */
    "./src/app/config-training/config-training.component.ts");
    /* harmony import */


    var _config_model_config_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./config-model/config-model.component */
    "./src/app/config-model/config-model.component.ts");
    /* harmony import */


    var _config_preferences_config_preferences_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./config-preferences/config-preferences.component */
    "./src/app/config-preferences/config-preferences.component.ts");
    /* harmony import */


    var angular_checklist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angular-checklist */
    "./node_modules/angular-checklist/dist/index.js");
    /* harmony import */


    var angular_checklist__WEBPACK_IMPORTED_MODULE_17___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_checklist__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _qualit_no_conformal_qualit_no_conformal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./qualit-no-conformal/qualit-no-conformal.component */
    "./src/app/qualit-no-conformal/qualit-no-conformal.component.ts");
    /* harmony import */


    var _qualit_conformal_qualit_conformal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./qualit-conformal/qualit-conformal.component */
    "./src/app/qualit-conformal/qualit-conformal.component.ts");
    /* harmony import */


    var _quantit_no_conformal_quantit_no_conformal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./quantit-no-conformal/quantit-no-conformal.component */
    "./src/app/quantit-no-conformal/quantit-no-conformal.component.ts");
    /* harmony import */


    var _quantit_conformal_quantit_conformal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./quantit-conformal/quantit-conformal.component */
    "./src/app/quantit-conformal/quantit-conformal.component.ts");
    /* harmony import */


    var _builder_builder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./builder/builder.component */
    "./src/app/builder/builder.component.ts");
    /* harmony import */


    var _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./predictor/predictor.component */
    "./src/app/predictor/predictor.component.ts");
    /* harmony import */


    var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./prediction/prediction.component */
    "./src/app/prediction/prediction.component.ts");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./similarity/similarity.component */
    "./src/app/similarity/similarity.component.ts");
    /* harmony import */


    var _modeling_sidebar_modeling_sidebar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./modeling-sidebar/modeling-sidebar.component */
    "./src/app/modeling-sidebar/modeling-sidebar.component.ts");
    /* harmony import */


    var _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./prediction-list/prediction-list.component */
    "./src/app/prediction-list/prediction-list.component.ts");
    /* harmony import */


    var _manage_models_manage_models_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./manage-models/manage-models.component */
    "./src/app/manage-models/manage-models.component.ts");
    /* harmony import */


    var _manage_predictions_manage_predictions_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./manage-predictions/manage-predictions.component */
    "./src/app/manage-predictions/manage-predictions.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./confusion-matrix/confusion-matrix.component */
    "./src/app/confusion-matrix/confusion-matrix.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_7__["ModelListComponent"], _training_series_training_series_component__WEBPACK_IMPORTED_MODULE_8__["TrainingSeriesComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _validations_validations_component__WEBPACK_IMPORTED_MODULE_10__["ValidationsComponent"], _config_training_config_training_component__WEBPACK_IMPORTED_MODULE_14__["ConfigTrainingComponent"], _config_model_config_model_component__WEBPACK_IMPORTED_MODULE_15__["ConfigModelComponent"], _config_preferences_config_preferences_component__WEBPACK_IMPORTED_MODULE_16__["ConfigPreferencesComponent"], _qualit_no_conformal_qualit_no_conformal_component__WEBPACK_IMPORTED_MODULE_19__["QualitNoConformalComponent"], _qualit_conformal_qualit_conformal_component__WEBPACK_IMPORTED_MODULE_20__["QualitConformalComponent"], _quantit_no_conformal_quantit_no_conformal_component__WEBPACK_IMPORTED_MODULE_21__["QuantitNoConformalComponent"], _quantit_conformal_quantit_conformal_component__WEBPACK_IMPORTED_MODULE_22__["QuantitConformalComponent"], _builder_builder_component__WEBPACK_IMPORTED_MODULE_23__["BuilderComponent"], _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_24__["PredictorComponent"], _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_25__["PredictionComponent"], _similarity_similarity_component__WEBPACK_IMPORTED_MODULE_27__["SimilarityComponent"], _modeling_sidebar_modeling_sidebar_component__WEBPACK_IMPORTED_MODULE_28__["ModelingSidebarComponent"], _prediction_list_prediction_list_component__WEBPACK_IMPORTED_MODULE_29__["PredictionListComponent"], _manage_models_manage_models_component__WEBPACK_IMPORTED_MODULE_30__["ManageModelsComponent"], _manage_predictions_manage_predictions_component__WEBPACK_IMPORTED_MODULE_31__["ManagePredictionsComponent"], _confusion_matrix_confusion_matrix_component__WEBPACK_IMPORTED_MODULE_33__["ConfusionMatrixComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__["NgMultiSelectDropDownModule"].forRoot(), angular_checklist__WEBPACK_IMPORTED_MODULE_17__["ChecklistModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__["NgbModule"]],
      providers: [_Globals__WEBPACK_IMPORTED_MODULE_12__["Model"], _Globals__WEBPACK_IMPORTED_MODULE_12__["Prediction"], _Globals__WEBPACK_IMPORTED_MODULE_12__["Globals"], _Globals__WEBPACK_IMPORTED_MODULE_12__["Manager"], _Globals__WEBPACK_IMPORTED_MODULE_12__["Similarity"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/builder/builder.component.css":
  /*!***********************************************!*\
    !*** ./src/app/builder/builder.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuilderBuilderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .card-header[data-toggle=\"collapse\"] button:after {\n    display: inline-block;\n    font: normal normal normal 10px/1 FontAwesome;\n    font-size: 25px;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    content: \"\\f056\";\n    align-content: flex-end;\n    -webkit-transform: rotate(0deg) ;\n            transform: rotate(0deg) ;\n    -webkit-transition: all linear 0.25s;\n    transition: all linear 0.25s;\n    color:#275B7D;\n\n}   \n::ng-deep .card-header[data-toggle=\"collapse\"].collapsed button:after {\n    \n    -webkit-transform: rotate(90deg) ;\n    \n            transform: rotate(90deg) ;\n    content: \"\\f055\";\n}   \na{\n    text-align: end;\n}   \n.disabledbutton {\n    pointer-events: none;\n    opacity: 0.4;\n}   \n.card-header {\n    background: #B8DCED;\n    background-color: #B8DCED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsb0NBQTRCO0lBQTVCLDRCQUE0QjtJQUM1QixhQUFhOztBQUVqQjtBQUNBOztJQUVJLGlDQUF5Qjs7WUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9idWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY2FyZC1oZWFkZXJbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSBidXR0b246YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxMHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgY29udGVudDogXCJcXGYwNTZcIjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSA7XG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjI1cztcbiAgICBjb2xvcjojMjc1QjdEO1xuXG59ICAgXG46Om5nLWRlZXAgLmNhcmQtaGVhZGVyW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0uY29sbGFwc2VkIGJ1dHRvbjphZnRlciB7XG4gICAgXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIDtcbiAgICBjb250ZW50OiBcIlxcZjA1NVwiO1xufVxuYXtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5kaXNhYmxlZGJ1dHRvbiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNCOERDRUQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4RENFRDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/builder/builder.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/builder/builder.component.ts ***!
    \**********************************************/

  /*! exports provided: BuilderComponent */

  /***/
  function srcAppBuilderBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuilderComponent", function () {
      return BuilderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./builder.service */
    "./src/app/builder/builder.service.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _common_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common.functions */
    "./src/app/common.functions.ts");

    var BuilderComponent =
    /*#__PURE__*/
    function () {
      function BuilderComponent(model, service, commonService, router, toastr, activeModal, func) {
        _classCallCheck(this, BuilderComponent);

        this.model = model;
        this.service = service;
        this.commonService = commonService;
        this.router = router;
        this.toastr = toastr;
        this.activeModal = activeModal;
        this.func = func;
      }

      _createClass(BuilderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getParameters();
        }
      }, {
        key: "getParameters",
        value: function getParameters() {
          var _this = this;

          this.commonService.getParameters(this.model.name, this.model.version).subscribe(function (result) {
            _this.model.parameters = result;
          }, function (error) {
            alert(error.status + ' : ' + error.statusText);
          }, function () {// console.log('actual parameters.yaml \n', parameters);
          });
        }
      }, {
        key: "isDict",
        value: function isDict(v) {
          return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
        }
      }, {
        key: "recursiveDelta",
        value: function recursiveDelta(dict_in) {
          var dict_aux = {};
          var dict_out = {};

          for (var _i = 0, _Object$keys = Object.keys(dict_in); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            dict_aux = dict_in[key];

            for (var _i2 = 0, _Object$keys2 = Object.keys(dict_aux); _i2 < _Object$keys2.length; _i2++) {
              var key2 = _Object$keys2[_i2];

              if (key2 === 'value') {
                if (this.isDict(dict_aux[key2])) {
                  dict_out[key] = this.recursiveDelta(dict_aux[key2]);
                } else {
                  if (dict_aux[key2] === '' || dict_aux[key2] === 'null') {
                    dict_aux[key2] = null;
                  }

                  dict_out[key] = dict_aux[key2];
                }
              }
            }
          }

          return dict_out;
        }
      }, {
        key: "buildModel",
        value: function buildModel(name, version) {
          var _this2 = this;

          this.model.delta = {};
          this.model.delta = this.recursiveDelta(this.model.parameters);
          this.model.listModels[name + '-' + version] = {
            name: name,
            version: version,
            trained: false,
            numMols: '-',
            variables: '-',
            type: '-',
            quality: {},
            quantitative: false,
            conformal: false,
            ensemble: false
          };
          this.model.trainig_models.push(name + '-' + version);
          var inserted = this.toastr.info('Running!', 'Model ' + name + '.v' + version, {
            disableTimeOut: true,
            positionClass: 'toast-top-right'
          });
          this.activeModal.close('Close click');
          this.service.buildModel().subscribe(function (result) {
            var iter = 0;
            var intervalId = setInterval(function () {
              if (iter < 15) {
                _this2.checkModel(name, version, inserted, intervalId);
              } else {
                clearInterval(intervalId);

                var index = _this2.model.trainig_models.indexOf(name + '-' + version, 0);

                if (index > -1) {
                  _this2.model.trainig_models.splice(index, 1);
                }

                _this2.toastr.clear(inserted.toastId);

                _this2.toastr.error('Model ' + name + '.v' + version + ' \n ', 'ERROR!', {
                  timeOut: 10000,
                  positionClass: 'toast-top-right'
                });
              }

              iter += 1;
            }, 10000);
          }, function (error) {
            $('#dataTableModels').DataTable().destroy();

            var index = _this2.model.trainig_models.indexOf(name + '-' + version, 0);

            if (index > -1) {
              _this2.model.trainig_models.splice(index, 1);
            }

            _this2.model.listModels[name + '-' + version].trained = false;

            _this2.toastr.clear(inserted.toastId);

            _this2.toastr.error('Model ' + name + '.v' + version + ' \n ' + error.error, 'ERROR!', {
              timeOut: 10000,
              positionClass: 'toast-top-right'
            });

            _this2.func.getModelList();
          });
          this.router.navigate(['/models']);
        } // Periodic function to check model

      }, {
        key: "checkModel",
        value: function checkModel(name, version, inserted, intervalId) {
          var _this3 = this;

          this.commonService.getModel(name, version).subscribe(function (result) {
            $('#dataTableModels').DataTable().destroy();
            var dict_info = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var aux = _step.value;
                dict_info[aux[0]] = aux[2];
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            var quality = {};

            for (var _i3 = 0, _Object$keys3 = Object.keys(dict_info); _i3 < _Object$keys3.length; _i3++) {
              var info = _Object$keys3[_i3];

              if (typeof dict_info[info] === 'number') {
                quality[info] = parseFloat(dict_info[info].toFixed(3));
              }
            }

            _this3.model.trained_models.push(name + ' .v' + version);

            var index = _this3.model.trainig_models.indexOf(name + '-' + version, 0);

            if (index > -1) {
              _this3.model.trainig_models.splice(index, 1);
            }

            _this3.toastr.clear(inserted.toastId);

            _this3.model.listModels[name + '-' + version] = {
              name: name,
              version: version,
              trained: true,
              numMols: dict_info['nobj'],
              variables: dict_info['nvarx'],
              type: dict_info['model'],
              quality: quality,
              quantitative: dict_info['quantitative'],
              conformal: dict_info['conformal'],
              ensemble: dict_info['ensemble']
            };

            _this3.model.trained_models.push(name + ' .v' + version);

            _this3.toastr.success('Model ' + name + '.v' + version + ' created', 'MODEL CREATED', {
              timeOut: 5000,
              positionClass: 'toast-top-right'
            });

            clearInterval(intervalId);

            _this3.func.getModelList();
          }, function (error) {
            if (error.error.code !== 0) {
              $('#dataTableModels').DataTable().destroy();

              var index = _this3.model.trainig_models.indexOf(name + '-' + version, 0);

              if (index > -1) {
                _this3.model.trainig_models.splice(index, 1);
              }

              _this3.model.listModels[name + '-' + version].trained = false;

              _this3.toastr.clear(inserted.toastId);

              _this3.toastr.error('Model ' + name + '.v' + version + ' \n ' + error.error.message, 'ERROR!', {
                timeOut: 10000,
                positionClass: 'toast-top-right'
              });

              clearInterval(intervalId);

              _this3.func.getModelList();
            }
          });
        }
      }]);

      return BuilderComponent;
    }();

    BuilderComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }, {
        type: _builder_service__WEBPACK_IMPORTED_MODULE_3__["BuilderService"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]
      }, {
        type: _common_functions__WEBPACK_IMPORTED_MODULE_8__["CommonFunctions"]
      }];
    };

    BuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-builder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./builder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/builder/builder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./builder.component.css */
      "./src/app/builder/builder.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"], _builder_service__WEBPACK_IMPORTED_MODULE_3__["BuilderService"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"], _common_functions__WEBPACK_IMPORTED_MODULE_8__["CommonFunctions"]])], BuilderComponent);
    /***/
  },

  /***/
  "./src/app/builder/builder.service.ts":
  /*!********************************************!*\
    !*** ./src/app/builder/builder.service.ts ***!
    \********************************************/

  /*! exports provided: BuilderService */

  /***/
  function srcAppBuilderBuilderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuilderService", function () {
      return BuilderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");

    var BuilderService =
    /*#__PURE__*/
    function () {
      function BuilderService(http, model) {
        _classCallCheck(this, BuilderService);

        this.http = http;
        this.model = model;
      }

      _createClass(BuilderService, [{
        key: "buildModel",
        value: function buildModel() {
          var formData = new FormData();
          formData.append('SDF', this.model.file);
          formData.append('parameters', JSON.stringify(this.model.delta));
          formData.append('incremental', JSON.stringify(this.model.incremental));
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_build + 'model/' + this.model.name;
          return this.http.post(url, formData);
        }
      }]);

      return BuilderService;
    }();

    BuilderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Model"]
      }];
    };

    BuilderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Model"]])], BuilderService);
    /***/
  },

  /***/
  "./src/app/common.functions.ts":
  /*!*************************************!*\
    !*** ./src/app/common.functions.ts ***!
    \*************************************/

  /*! exports provided: CommonFunctions */

  /***/
  function srcAppCommonFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonFunctions", function () {
      return CommonFunctions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Globals */
    "./src/app/Globals.ts");

    var CommonFunctions =
    /*#__PURE__*/
    function () {
      function CommonFunctions(http, commonService, model, globals, prediction) {
        _classCallCheck(this, CommonFunctions);

        this.http = http;
        this.commonService = commonService;
        this.model = model;
        this.globals = globals;
        this.prediction = prediction;
        this.objectKeys = Object.keys;
      }

      _createClass(CommonFunctions, [{
        key: "getModelList",
        value: function getModelList() {
          var _this4 = this;

          this.globals.tableModelVisible = false;
          var num_models = 0;
          this.commonService.getModelList().subscribe(function (result) {
            // result = JSON.parse(result[1]);
            _this4.model.trained_models = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = result[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var model = _step2.value;
                var modelName = model.modelname;
                var version = model.version; // INFO OF EACH MODEL

                console.log(typeof model.info);
                num_models++;

                if (typeof model.info !== 'string') {
                  var dict_info = {};
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (var _iterator3 = model.info[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var aux = _step3.value;
                      dict_info[aux[0]] = aux[2];
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }

                  var quality = {};

                  for (var _i4 = 0, _Object$keys4 = Object.keys(dict_info); _i4 < _Object$keys4.length; _i4++) {
                    var info = _Object$keys4[_i4];

                    if (typeof dict_info[info] === 'number') {
                      quality[info] = parseFloat(dict_info[info].toFixed(3));
                    }
                  }

                  _this4.model.listModels[modelName + '-' + version] = {
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

                  _this4.model.trained_models.push(modelName + ' .v' + version);

                  num_models--;
                } else {
                  _this4.model.listModels[modelName + '-' + version] = {
                    name: modelName,
                    version: version,
                    trained: false,
                    numMols: '-',
                    variables: '-',
                    type: '-',
                    quality: {},
                    quantitative: false,
                    conformal: false,
                    ensemble: false,
                    error: model.info
                  };
                  num_models--;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            var intervalId = setInterval(function () {
              if (num_models <= 0) {
                if (_this4.objectKeys(_this4.model.listModels).length > 0) {
                  var a = _this4.objectKeys(_this4.model.listModels).sort();

                  _this4.model.name = _this4.model.listModels[a[0]].name;
                  _this4.model.version = _this4.model.listModels[a[0]].version;
                  _this4.model.trained = _this4.model.listModels[a[0]].trained;
                  _this4.model.conformal = _this4.model.listModels[a[0]].conformal;
                  _this4.model.quantitative = _this4.model.listModels[a[0]].quantitative;
                  _this4.model.ensemble = _this4.model.listModels[a[0]].ensemble;
                  _this4.model.error = _this4.model.listModels[a[0]].error;
                }

                var table = $('#dataTableModels').DataTable({
                  'autoWidth': false
                });
                _this4.globals.tableModelVisible = true;
                clearInterval(intervalId);
              }
            }, 10);
          }, function (error) {
            /*this.model.listModels[modelName + '-' + version] = {name: modelName, version: version, trained: false, numMols: '-',
                    variables: '-', type: '-', quality: {}};
                    num_models--;*/
            console.log(error);
          });
        }
      }]);

      return CommonFunctions;
    }();

    CommonFunctions.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Model"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"]
      }];
    };

    CommonFunctions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Model"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"]])], CommonFunctions);
    /***/
  },

  /***/
  "./src/app/common.service.ts":
  /*!***********************************!*\
    !*** ./src/app/common.service.ts ***!
    \***********************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var CommonService =
    /*#__PURE__*/
    function () {
      function CommonService(http) {
        _classCallCheck(this, CommonService);

        this.http = http;
      }
      /**
       * Retrives the list of all models form the server
       */


      _createClass(CommonService, [{
        key: "getModelList",
        value: function getModelList() {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'models';
          return this.http.get(url);
        }
      }, {
        key: "getPredictionList",
        value: function getPredictionList() {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'predictions';
          return this.http.get(url);
        }
      }, {
        key: "getModel",
        value: function getModel(model, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version;
          return this.http.get(url);
        }
      }, {
        key: "getPrediction",
        value: function getPrediction(predictionName) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'prediction/' + predictionName;
          return this.http.get(url);
        }
        /**
        * @param modelname The model name to recieve parameters
        * Version will be automatically set to 'dev'
        */

      }, {
        key: "getParameters",
        value: function getParameters(model, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/parameters';
          return this.http.get(url);
        }
      }, {
        key: "getDocumentation",
        value: function getDocumentation(modelName, modelVersion) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + modelName + '/version/' + modelVersion + '/documentation';
          return this.http.get(url);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CommonService);
    /***/
  },

  /***/
  "./src/app/config-model/config-model.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/config-model/config-model.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigModelConfigModelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".border {\n    padding: 20px;\n    background: #F7F7F7;\n    border: 1cm;\n    border-top: 1cm;\n}\n\nlegend {\n    margin-bottom: 0px;\n    font-weight: bold;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlnLW1vZGVsL2NvbmZpZy1tb2RlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb25maWctbW9kZWwvY29uZmlnLW1vZGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG4gICAgYm9yZGVyOiAxY207XG4gICAgYm9yZGVyLXRvcDogMWNtO1xufVxuXG5sZWdlbmQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/config-model/config-model.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/config-model/config-model.component.ts ***!
    \********************************************************/

  /*! exports provided: ConfigModelComponent */

  /***/
  function srcAppConfigModelConfigModelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigModelComponent", function () {
      return ConfigModelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");

    var ConfigModelComponent =
    /*#__PURE__*/
    function () {
      function ConfigModelComponent(model) {
        _classCallCheck(this, ConfigModelComponent);

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

      _createClass(ConfigModelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
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
        }
      }]);

      return ConfigModelComponent;
    }();

    ConfigModelComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }];
    };

    ConfigModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config-model',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config-model.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/config-model/config-model.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config-model.component.css */
      "./src/app/config-model/config-model.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]])], ConfigModelComponent);
    /***/
  },

  /***/
  "./src/app/config-preferences/config-preferences.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/config-preferences/config-preferences.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigPreferencesConfigPreferencesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy1wcmVmZXJlbmNlcy9jb25maWctcHJlZmVyZW5jZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/config-preferences/config-preferences.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/config-preferences/config-preferences.component.ts ***!
    \********************************************************************/

  /*! exports provided: ConfigPreferencesComponent */

  /***/
  function srcAppConfigPreferencesConfigPreferencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPreferencesComponent", function () {
      return ConfigPreferencesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");

    var ConfigPreferencesComponent =
    /*#__PURE__*/
    function () {
      function ConfigPreferencesComponent(model) {
        _classCallCheck(this, ConfigPreferencesComponent);

        this.model = model;
        this.objectKeys = Object.keys;
        this.infoPreferences = ['SDFile_experimental', 'modelingToolkit', 'mol_batch', 'numCPUs', 'output_format', 'output_md', 'verbose_error'];
      }

      _createClass(ConfigPreferencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfigPreferencesComponent;
    }();

    ConfigPreferencesComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }];
    };

    ConfigPreferencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config-preferences',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config-preferences.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/config-preferences/config-preferences.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config-preferences.component.css */
      "./src/app/config-preferences/config-preferences.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]])], ConfigPreferencesComponent);
    /***/
  },

  /***/
  "./src/app/config-training/config-training.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/config-training/config-training.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigTrainingConfigTrainingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy10cmFpbmluZy9jb25maWctdHJhaW5pbmcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/config-training/config-training.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/config-training/config-training.component.ts ***!
    \**************************************************************/

  /*! exports provided: ConfigTrainingComponent */

  /***/
  function srcAppConfigTrainingConfigTrainingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigTrainingComponent", function () {
      return ConfigTrainingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");

    var ConfigTrainingComponent =
    /*#__PURE__*/
    function () {
      function ConfigTrainingComponent(model) {
        _classCallCheck(this, ConfigTrainingComponent);

        this.model = model;
        this.objectKeys = Object.keys;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.infoSeries = {
          'molecule': ['SDFile_name', 'SDFile_activity', 'SDFile_experimental', 'quantitative', 'normalize_method', 'convert3D_method', 'ionize_method', 'modelAutoscaling', 'computeMD_method'],
          'model_ensemble': ['SDFile_name', 'SDFile_activity', 'SDFile_experimental', 'quantitative', 'normalize_method', 'convert3D_method', 'ionize_method', 'modelAutoscaling'],
          'data': ['TSV_objnames', 'TSV_activity', 'TSV_varnames'],
          'ext_data': ['model_set']
        };
      }

      _createClass(ConfigTrainingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedItems = [];

          if (this.model.parameters['ensemble_names'] !== undefined && this.model.parameters['ensemble_names'].value !== null) {
            for (var _i5 = 0, _Object$keys5 = Object.keys(this.model.parameters['ensemble_names'].value); _i5 < _Object$keys5.length; _i5++) {
              var index = _Object$keys5[_i5];
              var _name = this.model.parameters['ensemble_names'].value[index];
              var version = 0;

              if (this.model.parameters['ensemble_versions'].value !== null) {
                version = this.model.parameters['ensemble_versions'].value[index];
              }

              this.selectedItems.push(_name + ' v.' + version);
            }
          }

          this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 5,
            allowSearchFilter: true
          };
        }
      }, {
        key: "saveModelsSelected",
        value: function saveModelsSelected() {
          var info;
          var name;
          var version;
          this.model.parameters['ensemble_names'].value = [];
          this.model.parameters['ensemble_versions'].value = [];
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.selectedItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var model = _step4.value;
              info = model.split(' .v');
              version = info[info.length - 1];
              name = info.slice(0, info.length - 1).join();
              this.model.parameters['ensemble_names'].value.push(name);
              this.model.parameters['ensemble_versions'].value.push(Number(version));
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      }]);

      return ConfigTrainingComponent;
    }();

    ConfigTrainingComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }];
    };

    ConfigTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config-training',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config-training.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/config-training/config-training.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config-training.component.css */
      "./src/app/config-training/config-training.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]])], ConfigTrainingComponent);
    /***/
  },

  /***/
  "./src/app/confusion-matrix/confusion-matrix.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/confusion-matrix/confusion-matrix.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfusionMatrixConfusionMatrixComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".TP {\n    background-color: rgba(0,255,0,0.3);\n}\n.FP {\n    background-color:rgba(235,143,3,0.3);\n}\n.TN {\n    background-color:rgba(3,49,155,0.3);\n}\n.FN {\n    background-color:rgba(255,0,0,0.3);\n}\n.card-header {\n    background: #B8DCED;\n    background-color: #B8DCED;\n}\n#matrix * {\n  padding: 0px;\n  text-align: center;\n}\n.rotate > span {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  position:absolute;\n  left:10;\n  right:0;\n  top: 10px;\n  margin:auto;\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZnVzaW9uLW1hdHJpeC9jb25mdXNpb24tbWF0cml4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9jb25mdXNpb24tbWF0cml4L2NvbmZ1c2lvbi1tYXRyaXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UUCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDI1NSwwLDAuMyk7XG59XG4uRlAge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsMTQzLDMsMC4zKTtcbn1cbi5UTiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDMsNDksMTU1LDAuMyk7XG59XG4uRk4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMCwwLDAuMyk7XG59XG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNCOERDRUQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4RENFRDtcbn1cbiNtYXRyaXggKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm90YXRlID4gc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBsZWZ0OjEwO1xuICByaWdodDowO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjphdXRvO1xuICBcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/confusion-matrix/confusion-matrix.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/confusion-matrix/confusion-matrix.component.ts ***!
    \****************************************************************/

  /*! exports provided: ConfusionMatrixComponent */

  /***/
  function srcAppConfusionMatrixConfusionMatrixComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfusionMatrixComponent", function () {
      return ConfusionMatrixComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfusionMatrixComponent =
    /*#__PURE__*/
    function () {
      function ConfusionMatrixComponent() {
        _classCallCheck(this, ConfusionMatrixComponent);
      }

      _createClass(ConfusionMatrixComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfusionMatrixComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ConfusionMatrixComponent.prototype, "TP", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ConfusionMatrixComponent.prototype, "FP", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ConfusionMatrixComponent.prototype, "TN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ConfusionMatrixComponent.prototype, "FN", void 0);
    ConfusionMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confusion-matrix',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confusion-matrix.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/confusion-matrix/confusion-matrix.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confusion-matrix.component.css */
      "./src/app/confusion-matrix/confusion-matrix.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConfusionMatrixComponent);
    /***/
  },

  /***/
  "./src/app/manage-models/manage-models.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/manage-models/manage-models.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageModelsManageModelsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a:hover {\n\n    background: #E7E7E7;\n}\n\na.active {\n    background: #EBAB39;\n    border-bottom: 2px solid #0076a3;\n}\n\na {\n    background:#22577a;\n    color: #f7f9ea;\n    border-bottom: 2px solid #0076a3;\n}\n\n.wrap {\n    cursor:not-allowed;\n}\n\na.disabled{\n    background:#22577a;\n    pointer-events: none;\n}\n\n.actions {\n    background:#22577a;\n    background-color:#22577a;\n    color: #f7f9ea;\n    border-bottom: 2px solid #0076a3;\n}\n\nbutton.disabled {\n    cursor: not-allowed;\n    pointer-events: none !important;\n}\n\nlabel.disabled {\n    cursor: not-allowed;\n    pointer-events: none !important;\n}\n\n.btn{\n   min-width: 90px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLW1vZGVscy9tYW5hZ2UtbW9kZWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0dBQ0csMEJBQTBCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLW1vZGVscy9tYW5hZ2UtbW9kZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcblxuICAgIGJhY2tncm91bmQ6ICNFN0U3RTc7XG59XG5cbmEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUJBQjM5O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3NmEzO1xufVxuYSB7XG4gICAgYmFja2dyb3VuZDojMjI1NzdhO1xuICAgIGNvbG9yOiAjZjdmOWVhO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3NmEzO1xufVxuLndyYXAge1xuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcbn1cbmEuZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDojMjI1NzdhO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgYmFja2dyb3VuZDojMjI1NzdhO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzIyNTc3YTtcbiAgICBjb2xvcjogI2Y3ZjllYTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNzZhMztcbn1cbmJ1dHRvbi5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5sYWJlbC5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnRue1xuICAgbWluLXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/manage-models/manage-models.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/manage-models/manage-models.component.ts ***!
    \**********************************************************/

  /*! exports provided: ManageModelsComponent */

  /***/
  function srcAppManageModelsManageModelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageModelsComponent", function () {
      return ManageModelsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _manage_models_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./manage-models.service */
    "./src/app/manage-models/manage-models.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _builder_builder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../builder/builder.component */
    "./src/app/builder/builder.component.ts");
    /* harmony import */


    var _common_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common.functions */
    "./src/app/common.functions.ts");

    var ManageModelsComponent =
    /*#__PURE__*/
    function () {
      function ManageModelsComponent(manage, commonService, service, model, globals, toastr, modalService, func) {
        _classCallCheck(this, ManageModelsComponent);

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

      _createClass(ManageModelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buildModel",
        value: function buildModel(name, version) {
          var modalRef = this.modalService.open(_builder_builder_component__WEBPACK_IMPORTED_MODULE_8__["BuilderComponent"], {
            windowClass: 'modalClass'
          });
          modalRef.componentInstance.name = name;
          modalRef.componentInstance.version = version;
        }
        /**
         * Creates a new model with the given name and informs the user with a toastr
         */

      }, {
        key: "createModel",
        value: function createModel() {
          var _this5 = this;

          var letters = /^[A-Za-z0-9_]+$/;

          if (this.modelName.match(letters)) {
            this.service.createModel(this.modelName).subscribe(function (result) {
              _this5.modelName = '';
              _this5.model.listModels = {};
              $('#dataTableModels').DataTable().destroy();

              _this5.func.getModelList();

              _this5.toastr.success('Model ' + result.modelName, 'CREATED', {
                timeOut: 4000,
                positionClass: 'toast-top-right',
                progressBar: true
              });
            }, function (error) {
              _this5.toastr.error(error.error.error, 'ERROR', {
                timeOut: 4000,
                positionClass: 'toast-top-right',
                progressBar: true
              });
            });
          } else {
            alert('Invalid name');
          }
        }
      }, {
        key: "deleteModel",
        value: function deleteModel() {
          var _this6 = this;

          this.service.deleteModel(this.model.name).subscribe(function (result) {
            _this6.toastr.success('Model ' + _this6.model.name + ' deleted', 'DELETED', {
              timeOut: 4000,
              positionClass: 'toast-top-right',
              progressBar: true
            });

            _this6.model.listModels = {};
            $('#dataTableModels').DataTable().destroy();

            _this6.func.getModelList();

            _this6.model.name = undefined;
            _this6.model.version = undefined;
          }, function (error) {
            alert('Delete ERROR');
          });
        }
      }, {
        key: "deleteVersion",
        value: function deleteVersion() {
          var _this7 = this;

          this.service.deleteVersion(this.model.name, this.model.version).subscribe(function (result) {
            _this7.toastr.success('Model ' + _this7.model.name + '.v' + _this7.model.version + ' deleted', 'DELETED', {
              timeOut: 4000,
              positionClass: 'toast-top-right'
            });

            var table = $('#dataTableModels').DataTable();
            table.row('.selected').remove().draw(false);
            $('#dataTableModels').DataTable().destroy();

            _this7.func.getModelList();

            _this7.model.name = undefined;
            _this7.model.version = undefined;
          }, function (error) {
            console.log(error);

            _this7.toastr.error('Model ' + _this7.model.name + '.v' + _this7.model.version + ' NOT deleted', 'ERROR', {
              timeOut: 4000,
              positionClass: 'toast-top-right'
            });
          });
        }
      }, {
        key: "cloneModel",
        value: function cloneModel() {
          var _this8 = this;

          this.service.cloneModel(this.model.name).subscribe(function (result) {
            _this8.toastr.success('Model \'' + result['modelName'] + ' v.' + result['version'] + '\'', 'CREATED SUCCESFULLY', {
              timeOut: 5000,
              positionClass: 'toast-top-right'
            });

            _this8.model.listModels = {};
            $('#dataTableModels').DataTable().destroy();

            _this8.func.getModelList();
          }, function (error) {
            alert('Error cloning');
          });
        }
      }, {
        key: "exportModel",
        value: function exportModel() {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl_manage + 'model/' + this.model.name + '/export';
          window.open(url);
        }
      }, {
        key: "importModel",
        value: function importModel(fileList) {
          var _this9 = this;

          var file = fileList[0];
          this.manage.file = file;
          this.service.importModel().subscribe(function (result) {
            _this9.toastr.success('Model \'' + result.Model + '\' imported', 'IMPORTED SUCCESFULLY', {
              timeOut: 5000,
              positionClass: 'toast-top-right'
            });

            _this9.manage.file = undefined;
            _this9.model.listModels = {};
            $('#dataTableModels').DataTable().destroy();

            _this9.func.getModelList();
          }, function (error) {
            _this9.toastr.error('Model \'' + error.error.Model + '\' already exist', 'ERROR IMPORTING', {
              timeOut: 5000,
              positionClass: 'toast-top-right'
            });
          });
        }
      }]);

      return ManageModelsComponent;
    }();

    ManageModelsComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Manager"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _manage_models_service__WEBPACK_IMPORTED_MODULE_4__["ManageModelService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
      }, {
        type: _common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"]
      }];
    };

    ManageModelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-models',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-models.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-models/manage-models.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-models.component.css */
      "./src/app/manage-models/manage-models.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Manager"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _manage_models_service__WEBPACK_IMPORTED_MODULE_4__["ManageModelService"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"]])], ManageModelsComponent);
    /***/
  },

  /***/
  "./src/app/manage-models/manage-models.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/manage-models/manage-models.service.ts ***!
    \********************************************************/

  /*! exports provided: ManageModelService */

  /***/
  function srcAppManageModelsManageModelsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageModelService", function () {
      return ManageModelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ManageModelService =
    /*#__PURE__*/
    function () {
      function ManageModelService(http, manager) {
        _classCallCheck(this, ManageModelService);

        this.http = http;
        this.manager = manager;
      }
      /**
       * Call to the server to create a new model with the given name
       * @param model Name of the model to add
       */


      _createClass(ManageModelService, [{
        key: "createModel",
        value: function createModel(model) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_manage + 'model/' + model;
          return this.http.post(url, null);
        }
      }, {
        key: "deleteModel",
        value: function deleteModel(model) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_manage + 'model/' + model;
          return this.http.delete(url);
        }
      }, {
        key: "deleteVersion",
        value: function deleteVersion(model, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version;
          return this.http.delete(url);
        }
      }, {
        key: "cloneModel",
        value: function cloneModel(model) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_manage + 'model/' + model;
          return this.http.put(url, null);
        }
      }, {
        key: "importModel",
        value: function importModel() {
          var formData = new FormData();
          formData.append('model', this.manager.file); // formData.append('parameters',  this.model.parameters);

          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_manage + 'model/import';
          return this.http.post(url, formData);
        }
      }]);

      return ManageModelService;
    }();

    ManageModelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Manager"]
      }];
    };

    ManageModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Manager"]])], ManageModelService);
    /***/
  },

  /***/
  "./src/app/manage-predictions/manage-predictions.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/manage-predictions/manage-predictions.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagePredictionsManagePredictionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1wcmVkaWN0aW9ucy9tYW5hZ2UtcHJlZGljdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/manage-predictions/manage-predictions.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/manage-predictions/manage-predictions.component.ts ***!
    \********************************************************************/

  /*! exports provided: ManagePredictionsComponent */

  /***/
  function srcAppManagePredictionsManagePredictionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagePredictionsComponent", function () {
      return ManagePredictionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! datatables.net-bs4 */
    "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
    /* harmony import */


    var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _manage_predictions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./manage-predictions.service */
    "./src/app/manage-predictions/manage-predictions.service.ts");
    /* harmony import */


    var _predictor_predictor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../predictor/predictor.component */
    "./src/app/predictor/predictor.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManagePredictionsComponent =
    /*#__PURE__*/
    function () {
      function ManagePredictionsComponent(commonService, modalService, toastr, service, prediction, router) {
        _classCallCheck(this, ManagePredictionsComponent);

        this.commonService = commonService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.prediction = prediction;
        this.router = router;
      }

      _createClass(ManagePredictionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "newPrediction",
        value: function newPrediction() {
          var modalRef = this.modalService.open(_predictor_predictor_component__WEBPACK_IMPORTED_MODULE_9__["PredictorComponent"], {
            size: 'lg'
          });
        }
      }, {
        key: "deletePrediction",
        value: function deletePrediction() {
          var _this10 = this;

          this.service.deletePrediction(this.prediction.name).subscribe(function (result) {
            var table = $('#dataTablePredictions').DataTable();
            table.row('.selected').remove().draw(false); // $('#dataTablePredictions').DataTable().destroy();
            // $('#dataTablePredictions').DataTable();

            _this10.toastr.success('Prediction "' + _this10.prediction.name + '" deleted', 'DELETED', {
              timeOut: 4000,
              positionClass: 'toast-top-right',
              progressBar: true
            });

            _this10.prediction.name = $('#dataTablePredictions tbody tr:first td:first').text();
            _this10.prediction.modelName = $('#dataTablePredictions tbody tr:first td:eq(1)').text();
            _this10.prediction.modelVersion = $('#dataTablePredictions tbody tr:first td:eq(2)').text();
            _this10.prediction.date = $('#dataTablePredictions tbody tr:first td:eq(4)').text();
          }, function (error) {
            _this10.toastr.error(error.error.error, 'ERROR', {
              timeOut: 4000,
              positionClass: 'toast-top-right',
              progressBar: true
            });
          });
        }
      }]);

      return ManagePredictionsComponent;
    }();

    ManagePredictionsComponent.ctorParameters = function () {
      return [{
        type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: _manage_predictions_service__WEBPACK_IMPORTED_MODULE_8__["ManagePredictionsService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_6__["Prediction"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    ManagePredictionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-predictions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-predictions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-predictions/manage-predictions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-predictions.component.css */
      "./src/app/manage-predictions/manage-predictions.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _manage_predictions_service__WEBPACK_IMPORTED_MODULE_8__["ManagePredictionsService"], _Globals__WEBPACK_IMPORTED_MODULE_6__["Prediction"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])], ManagePredictionsComponent);
    /***/
  },

  /***/
  "./src/app/manage-predictions/manage-predictions.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/manage-predictions/manage-predictions.service.ts ***!
    \******************************************************************/

  /*! exports provided: ManagePredictionsService */

  /***/
  function srcAppManagePredictionsManagePredictionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagePredictionsService", function () {
      return ManagePredictionsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ManagePredictionsService =
    /*#__PURE__*/
    function () {
      function ManagePredictionsService(http) {
        _classCallCheck(this, ManagePredictionsService);

        this.http = http;
      }

      _createClass(ManagePredictionsService, [{
        key: "deletePrediction",
        value: function deletePrediction(predictionName) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'prediction/' + predictionName;
          return this.http.delete(url);
        }
      }]);

      return ManagePredictionsService;
    }();

    ManagePredictionsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ManagePredictionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ManagePredictionsService);
    /***/
  },

  /***/
  "./src/app/model-list/model-list.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/model-list/model-list.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModelListModelListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "i {\n    margin-right: 5px;\n    cursor: pointer;\n}\n.table {\n    background-color: white;\n    /*background: linear-gradient(to left, #F7F7F7 0%, #F7F7F7 100%);*/\n    background: white;\n    color: #22577A;\n    /*border: 1px solid;*/\n    table-layout: fixed;\n    width: 100%;\n    \n   /* max-height: 80vh;*/\n    /*overflow-y: scroll;*/\n    \n    \n}\n.table th{\n    /*padding-left: 1px;\n    padding-right: 1px;*/\n    /* background: #B8DCED; */\n    color:#0076a3;\n   \n}\n.table td {\n    padding: 5px;\n   \n    font-family: 'Barlow Semi Condensed', sans-serif;\n    border-bottom: 2px solid #B8DCED;\n    vertical-align: middle;\n}\ntr {\n    cursor: pointer;\n}\ntr.selected {\n    background: #f7f9ea;\n}\n.table tbody tr:hover {\n    background: #f7f9ea;\n}\n.model-content {\n    max-width: 350px;\n    max-height: 350px;\n}\n.scrolltable{\n    max-height: 90vh;\n    overflow: auto;\n}\n.spinner-table {\n    position: absolute; \n    right: 45%; \n    top: 30%; \n    z-index: 1031;\n}\n.iffyTip {\n  overflow:hidden;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n}\n.hideText{\nmax-width:200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwtbGlzdC9tb2RlbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtFQUFrRTtJQUNsRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVzs7R0FFWixxQkFBcUI7SUFDcEIsc0JBQXNCOzs7QUFHMUI7QUFFQTtJQUNJO3dCQUNvQjtJQUNwQix5QkFBeUI7SUFDekIsYUFBYTs7QUFFakI7QUFFQTtJQUNJLFlBQVk7O0lBRVosZ0RBQWdEO0lBQ2hELGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFHQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtBQUNBLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLWxpc3QvbW9kZWwtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRjdGN0Y3IDAlLCAjRjdGN0Y3IDEwMCUpOyovXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICMyMjU3N0E7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZDsqL1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAvKiBtYXgtaGVpZ2h0OiA4MHZoOyovXG4gICAgLypvdmVyZmxvdy15OiBzY3JvbGw7Ki9cbiAgICBcbiAgICBcbn1cblxuLnRhYmxlIHRoe1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMXB4OyovXG4gICAgLyogYmFja2dyb3VuZDogI0I4RENFRDsgKi9cbiAgICBjb2xvcjojMDA3NmEzO1xuICAgXG59XG5cbi50YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQjhEQ0VEO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG50ciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbnRyLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xufVxuLnRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xufVxuLm1vZGVsLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgbWF4LWhlaWdodDogMzUwcHg7XG59XG4uc2Nyb2xsdGFibGV7XG4gICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNwaW5uZXItdGFibGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgcmlnaHQ6IDQ1JTsgXG4gICAgdG9wOiAzMCU7IFxuICAgIHotaW5kZXg6IDEwMzE7XG59XG5cbi5pZmZ5VGlwIHtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG59XG4uaGlkZVRleHR7XG5tYXgtd2lkdGg6MjAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/model-list/model-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/model-list/model-list.component.ts ***!
    \****************************************************/

  /*! exports provided: ModelListComponent */

  /***/
  function srcAppModelListModelListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelListComponent", function () {
      return ModelListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _model_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./model-list.service */
    "./src/app/model-list/model-list.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _common_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common.functions */
    "./src/app/common.functions.ts");

    var ModelListComponent =
    /*#__PURE__*/
    function () {
      function ModelListComponent(service, commonService, model, globals, prediction, func) {
        _classCallCheck(this, ModelListComponent);

        this.service = service;
        this.commonService = commonService;
        this.model = model;
        this.globals = globals;
        this.prediction = prediction;
        this.func = func;
        this.objectKeys = Object.keys;
      }

      _createClass(ModelListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.prediction.name = undefined;
          this.model.name = undefined;
          this.model.version = undefined;
          this.func.getModelList();
        }
      }, {
        key: "selectModel",
        value: function selectModel(name, version, trained, type, quantitative, conformal, ensemble, error) {
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
        }
      }]);

      return ModelListComponent;
    }();

    ModelListComponent.ctorParameters = function () {
      return [{
        type: _model_list_service__WEBPACK_IMPORTED_MODULE_3__["ModelListService"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Model"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"]
      }, {
        type: _common_functions__WEBPACK_IMPORTED_MODULE_6__["CommonFunctions"]
      }];
    };

    ModelListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-model-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./model-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/model-list/model-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./model-list.component.css */
      "./src/app/model-list/model-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_list_service__WEBPACK_IMPORTED_MODULE_3__["ModelListService"], _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Model"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _Globals__WEBPACK_IMPORTED_MODULE_4__["Prediction"], _common_functions__WEBPACK_IMPORTED_MODULE_6__["CommonFunctions"]])], ModelListComponent);
    /***/
  },

  /***/
  "./src/app/model-list/model-list.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/model-list/model-list.service.ts ***!
    \**************************************************/

  /*! exports provided: ModelListService */

  /***/
  function srcAppModelListModelListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelListService", function () {
      return ModelListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ModelListService = function ModelListService(http) {
      _classCallCheck(this, ModelListService);

      this.http = http;
    };

    ModelListService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ModelListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ModelListService);
    /***/
  },

  /***/
  "./src/app/modeling-sidebar/modeling-sidebar.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/modeling-sidebar/modeling-sidebar.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModelingSidebarModelingSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\nul li a {\n    background: #E7E6E6;\n    color: white;\n}\n\nul li a.active{\n    background: #22577a;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxpbmctc2lkZWJhci9tb2RlbGluZy1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2RlbGluZy1zaWRlYmFyL21vZGVsaW5nLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG51bCBsaSBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTdFNkU2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxudWwgbGkgYS5hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogIzIyNTc3YTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modeling-sidebar/modeling-sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modeling-sidebar/modeling-sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: ModelingSidebarComponent */

  /***/
  function srcAppModelingSidebarModelingSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelingSidebarComponent", function () {
      return ModelingSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ModelingSidebarComponent =
    /*#__PURE__*/
    function () {
      function ModelingSidebarComponent(router) {
        _classCallCheck(this, ModelingSidebarComponent);

        this.router = router;
      }

      _createClass(ModelingSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isActive",
        value: function isActive(url) {
          return this.router.url.includes(url);
        }
      }]);

      return ModelingSidebarComponent;
    }();

    ModelingSidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ModelingSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modeling-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modeling-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modeling-sidebar/modeling-sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modeling-sidebar.component.css */
      "./src/app/modeling-sidebar/modeling-sidebar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ModelingSidebarComponent);
    /***/
  },

  /***/
  "./src/app/prediction-list/prediction-list.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/prediction-list/prediction-list.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPredictionListPredictionListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "i {\n    margin-right: 5px;\n    cursor: pointer;\n}\n\n.table {\n    background-color: white;\n    background: white;\n    color: #22577A;\n    /*table-layout: fixed;*/\n    width: 100%;\n}\n\n.table th{\n    padding-left: 1px;\n    padding-right: 1px;\n    /* background: #B8DCED;*/\n    color:#0076a3;\n    vertical-align: middle;\n}\n\n.table td {\n    padding: 5px;\n    font-family: 'Barlow Semi Condensed', sans-serif;\n    border-bottom: 2px solid #B8DCED;\n    vertical-align: middle;\n}\n\ntr {\n    cursor: pointer;\n}\n\ntr.selected {\n    background: #f7f9ea;\n}\n\n.table tbody tr:hover {\n    background: #f7f9ea;\n}\n\n.blink {\n    -webkit-animation: blinker 0.6s linear infinite;\n            animation: blinker 0.6s linear infinite;\n}\n\n@-webkit-keyframes blinker {  \n    100% { opacity: 0; }\n}\n\n@keyframes blinker {  \n    100% { opacity: 0; }\n}\n\n.spinner-table {\n    position: absolute; \n    right: 45%; \n    top: 30%; \n    z-index: 1031;\n}\n\n.iffyTip {\n  overflow:hidden;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n}\n\n.hideText{\nmax-width:200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbi1saXN0L3ByZWRpY3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0FBQzNDOztBQUNBO0lBQ0ksT0FBTyxVQUFVLEVBQUU7QUFDdkI7O0FBRkE7SUFDSSxPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFDQTtBQUNBLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ByZWRpY3Rpb24tbGlzdC9wcmVkaWN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzIyNTc3QTtcbiAgICAvKnRhYmxlLWxheW91dDogZml4ZWQ7Ki9cbiAgICB3aWR0aDogMTAwJTtcbn1cbi50YWJsZSB0aHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgLyogYmFja2dyb3VuZDogI0I4RENFRDsqL1xuICAgIGNvbG9yOiMwMDc2YTM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi50YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0I4RENFRDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxudHIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbnRyLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xufVxuLnRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWVhO1xufVxuXG4uYmxpbmsge1xuICAgIGFuaW1hdGlvbjogYmxpbmtlciAwLjZzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxpbmtlciB7ICBcbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG4uc3Bpbm5lci10YWJsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICByaWdodDogNDUlOyBcbiAgICB0b3A6IDMwJTsgXG4gICAgei1pbmRleDogMTAzMTtcbn1cblxuLmlmZnlUaXAge1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbn1cbi5oaWRlVGV4dHtcbm1heC13aWR0aDoyMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/prediction-list/prediction-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/prediction-list/prediction-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: PredictionListComponent */

  /***/
  function srcAppPredictionListPredictionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionListComponent", function () {
      return PredictionListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

    var PredictionListComponent =
    /*#__PURE__*/
    function () {
      function PredictionListComponent(commonService, prediction, model) {
        _classCallCheck(this, PredictionListComponent);

        this.commonService = commonService;
        this.prediction = prediction;
        this.model = model;
        this.objectKeys = Object.keys;
        this.tableVisible = false;
      }

      _createClass(PredictionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.prediction.name = undefined;
          this.model.name = undefined;
          this.model.version = undefined;
          this.model.trained = false;
          this.getPredictionList();
        }
      }, {
        key: "selectPrediction",
        value: function selectPrediction(name, modelName, modelVersion, date) {
          this.prediction.name = name;
          this.prediction.modelName = modelName;
          this.prediction.modelVersion = modelVersion;
          this.prediction.date = date;
        }
      }, {
        key: "getPredictionList",
        value: function getPredictionList() {
          var _this11 = this;

          this.tableVisible = false;
          this.commonService.getPredictionList().subscribe(function (result) {
            _this11.prediction.predictions = result;
            setTimeout(function () {
              var table = $('#dataTablePredictions').DataTable({
                /*Ordering by date */
                order: [[4, 'desc']],
                columnDefs: [{
                  'type': 'date-euro',
                  'targets': 4
                }]
              });

              if (result.length > 0) {
                _this11.prediction.name = $('#dataTablePredictions tbody tr:first td:first').text();
                _this11.prediction.modelName = $('#dataTablePredictions tbody tr:first td:eq(1)').text();
                _this11.prediction.modelVersion = $('#dataTablePredictions tbody tr:first td:eq(2)').text();
                _this11.prediction.date = $('#dataTablePredictions tbody tr:first td:eq(4)').text();
              }

              $('#dataTablePredictions tbody').on('click', 'tr', function () {
                $('tr').removeClass('selected'); // removes all highlights from tr's

                $(this).addClass('selected'); // adds the highlight to this row
              });
              _this11.tableVisible = true;
            }, 100);
          }, function (error) {
            alert(error.message);
          });
        }
      }]);

      return PredictionListComponent;
    }();

    PredictionListComponent.ctorParameters = function () {
      return [{
        type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Prediction"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"]
      }];
    };

    PredictionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prediction-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prediction-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prediction-list/prediction-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prediction-list.component.css */
      "./src/app/prediction-list/prediction-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Prediction"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"]])], PredictionListComponent);
    /***/
  },

  /***/
  "./src/app/prediction/prediction.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/prediction/prediction.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPredictionPredictionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* @import '../../assets/css/dataTables.material.min.css';\n@import '../../assets/css/material.min.css'; */\n\n.table th{\n    color: #22577A;\n}\n\n.table td {\n    /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/\n}\n\n.table td, .table th {\n    border-top: 4px solid rgba(0,0,0,.06);\n}\n\nul li.nav-item a {\n  background:white;\n  color: #6C757D;\n}\n\nul li.nav-item a.active{\n  background: #F0F0F0;\n  color: #6C757D;\n}\n\n/* rotating circle to show progress */\n\n.TP {\n  background-color: rgba(0,255,0,0.3);\n}\n\n.FP {\n  background-color:rgba(235,143,3,0.3);\n}\n\n.TN {\n  background-color:rgba(3,49,155,0.3);\n}\n\n.FN {\n  background-color:rgba(255,0,0,0.3);\n}\n\n.card-header {\n  background: #B8DCED;\n  background-color: #B8DCED;\n}\n\n.spinner-border {\n  display: block;\n  position: absolute;\n  z-index: 1031;\n  top: 25%; /* where ... is the element's height */\n  right: 45%; /* where ... is the element's width */\n}\n\n#overlay {\n  position: absolute;\n  /*display: none;*/\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #FAFAFA;\n  opacity: 0.7;\n  z-index: 2;\n  cursor: pointer;\n}\n\n/*END LOADING*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OENBQzhDOztBQUU5QztJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxvREFBb0Q7QUFDeEQ7O0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBLHFDQUFxQzs7QUFFckM7RUFDRSxtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUSxFQUFFLHNDQUFzQztFQUNoRCxVQUFVLEVBQUUscUNBQXFDO0FBQ25EOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFDQSxjQUFjIiwiZmlsZSI6InNyYy9hcHAvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL2RhdGFUYWJsZXMubWF0ZXJpYWwubWluLmNzcyc7XG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL21hdGVyaWFsLm1pbi5jc3MnOyAqL1xuXG4udGFibGUgdGh7XG4gICAgY29sb3I6ICMyMjU3N0E7XG59XG4udGFibGUgdGQge1xuICAgIC8qZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmOyovXG59XG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMCwwLDAsLjA2KTtcbn1cblxudWwgbGkubmF2LWl0ZW0gYSB7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG4gIGNvbG9yOiAjNkM3NTdEO1xufVxuXG51bCBsaS5uYXYtaXRlbSBhLmFjdGl2ZXtcbiAgYmFja2dyb3VuZDogI0YwRjBGMDtcbiAgY29sb3I6ICM2Qzc1N0Q7XG59XG5cbi8qIHJvdGF0aW5nIGNpcmNsZSB0byBzaG93IHByb2dyZXNzICovXG5cbi5UUCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwwLjMpO1xufVxuLkZQIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzNSwxNDMsMywwLjMpO1xufVxuLlROIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDMsNDksMTU1LDAuMyk7XG59XG4uRk4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMCwwLjMpO1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI0I4RENFRDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4RENFRDtcbn1cblxuLnNwaW5uZXItYm9yZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAzMTtcbiAgdG9wOiAyNSU7IC8qIHdoZXJlIC4uLiBpcyB0aGUgZWxlbWVudCdzIGhlaWdodCAqL1xuICByaWdodDogNDUlOyAvKiB3aGVyZSAuLi4gaXMgdGhlIGVsZW1lbnQncyB3aWR0aCAqL1xufVxuXG5cbiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBvcGFjaXR5OiAwLjc7XG4gIHotaW5kZXg6IDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qRU5EIExPQURJTkcqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/prediction/prediction.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/prediction/prediction.component.ts ***!
    \****************************************************/

  /*! exports provided: PredictionComponent */

  /***/
  function srcAppPredictionPredictionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionComponent", function () {
      return PredictionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var smiles_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! smiles-drawer */
    "./node_modules/smiles-drawer/app.js");
    /* harmony import */


    var smiles_drawer__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(smiles_drawer__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _prediction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prediction.service */
    "./src/app/prediction/prediction.service.ts");
    /* harmony import */


    var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! datatables.net-bs4 */
    "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
    /* harmony import */


    var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! datatables.net-buttons-bs4 */
    "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
    /* harmony import */


    var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! jspdf-autotable */
    "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);

    var PredictionComponent =
    /*#__PURE__*/
    function () {
      function PredictionComponent(prediction, service, commonService) {
        _classCallCheck(this, PredictionComponent);

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
        this.submodelsIndex = 0; // PolarArea

        this.polarChartOptions = {
          responsive: true,
          startAngle: 1 * Math.PI,
          scale: {
            gridLines: {
              color: 'rgba(0, 0, 0, 0.5)'
            },
            ticks: {
              color: 'rgba(0, 0, 0, 0.5)',
              fontStyle: 'bold'
            }
          }
        };
        this.polarAreaChartLabels = ['TP', 'FP', 'TN', 'FN'];
        this.polarAreaChartData = [0, 0, 0, 0];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartColors = [{
          backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(235,143,3,0.3)', 'rgba(3,49,155,0.3)', 'rgba(255,0,0,0.3)']
        }];
      }

      _createClass(PredictionComponent, [{
        key: "NextMol",
        value: function NextMol() {
          this.molIndex++;
          this.noPreviousMol = false;

          if (this.predictionResult.SMILES.length - 1 === this.molIndex) {
            this.noNextMol = true;
          }

          var options = {
            'width': 600,
            'height': 300
          };
          var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
          smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](this.predictionResult.SMILES[this.molIndex], function (tree) {
            // Draw to the canvas
            smilesDrawer.draw(tree, 'one_canvas', 'light', false);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "PreviousMol",
        value: function PreviousMol() {
          this.molIndex--;
          this.noNextMol = false;

          if (this.molIndex === 0) {
            this.noPreviousMol = true;
          }

          var options = {
            'width': 600,
            'height': 300
          };
          var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
          smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](this.predictionResult.SMILES[this.molIndex], function (tree) {
            // Draw to the canvas
            smilesDrawer.draw(tree, 'one_canvas', 'light', false);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "NextModel",
        value: function NextModel() {
          this.submodelsIndex++;
          this.noPreviousModel = false;

          if (this.submodels.length - 1 === this.submodelsIndex) {
            this.noNextModel = true;
          }
        }
      }, {
        key: "PreviousModel",
        value: function PreviousModel() {
          this.submodelsIndex--;
          this.noNextModel = false;

          if (this.submodelsIndex === 0) {
            this.noPreviousModel = true;
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.noNextMol = false;
          this.noPreviousMol = true;
          this.noNextModel = false;
          this.noPreviousModel = true;
          this.molIndex = 0;
          this.submodelsIndex = 0;
          this.modelBuildInfo = {};
          this.getInfo();
          this.getDocumentation();
          this.getPrediction();
        }
      }, {
        key: "getInfo",
        value: function getInfo() {
          var _this12 = this;

          this.commonService.getModel(this.prediction.modelName, this.prediction.modelVersion).subscribe(function (result) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = result[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var info = _step5.value;
                _this12.modelBuildInfo[info[0]] = info[2];
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            if (_this12.modelBuildInfo['ensemble']) {
              var version = '0';
              _this12.submodels = [];

              _this12.modelBuildInfo['ensemble_names'].forEach(function (submodel, index) {
                if (_this12.modelBuildInfo['ensemble_names']) {
                  version = _this12.modelBuildInfo['ensemble_versions'][index];
                } else {
                  version = '0';
                }

                _this12.submodels[index] = {};
                _this12.submodels[index]['name'] = submodel;
                _this12.submodels[index]['version'] = version;

                _this12.commonService.getModel(submodel, version).subscribe(function (result3) {
                  var _iteratorNormalCompletion6 = true;
                  var _didIteratorError6 = false;
                  var _iteratorError6 = undefined;

                  try {
                    for (var _iterator6 = result3[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                      var info = _step6.value;
                      _this12.submodels[index][info[0]] = info[2];
                    }
                  } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                        _iterator6.return();
                      }
                    } finally {
                      if (_didIteratorError6) {
                        throw _iteratorError6;
                      }
                    }
                  }
                }, function (error) {});
              });
            }
          }, function (error) {});
        }
      }, {
        key: "getDocumentation",
        value: function getDocumentation() {
          var _this13 = this;

          this.commonService.getDocumentation(this.prediction.modelName, this.prediction.modelVersion).subscribe(function (result) {
            _this13.modelDocumentation = result;
          }, function (error) {
            _this13.modelDocumentation = undefined;
          });
        }
      }, {
        key: "castValue",
        value: function castValue(value) {
          if (this.modelBuildInfo['quantitative']) {
            return value.toFixed(3);
          } else {
            if (value === 0) {
              return 'Negative';
            } else if (value === 1) {
              return 'Positive';
            } else {
              return 'Uncertain';
            }
          }
        }
      }, {
        key: "getPrediction",
        value: function getPrediction() {
          var _this14 = this;

          this.predictionVisible = false;
          this.predictionResult = undefined;
          $('#prediction').DataTable().destroy();
          $('#predictionOne').DataTable().destroy();
          this.modelValidationInfo = {};
          this.commonService.getPrediction(this.predictionName).subscribe(function (result) {
            _this14.predictionResult = result;

            if ('external-validation' in _this14.predictionResult) {
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = _this14.predictionResult['external-validation'][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var modelInfo = _step7.value;

                  if (typeof modelInfo[2] === 'number') {
                    modelInfo[2] = parseFloat(modelInfo[2].toFixed(3));
                  }

                  if (typeof modelInfo[2] !== 'object') {
                    _this14.modelValidationInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
                  }
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
            }

            if ('TP' in _this14.modelValidationInfo) {
              _this14.polarAreaChartData = [_this14.modelValidationInfo['TP'][1], _this14.modelValidationInfo['FP'][1], _this14.modelValidationInfo['TN'][1], _this14.modelValidationInfo['FN'][1]];
            }

            setTimeout(function () {
              _this14.components.forEach(function (child) {
                var options = {
                  'width': 300,
                  'height': 150
                };
                var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
                smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](child.nativeElement.textContent, function (tree) {
                  smilesDrawer.draw(tree, child.nativeElement.id, 'light', false);
                }, function (err) {
                  console.log(err);
                });
              });

              var settingsObj = {
                dom: '<"row"<"col-sm-6"B><"col-sm-6"f>>' + '<"row"<"col-sm-12"tr>>' + '<"row"<"col-sm-5"i><"col-sm-7"p>>',
                buttons: [{
                  'extend': 'copy',
                  'text': 'Copy',
                  'className': 'btn-primary',
                  title: ''
                }, {
                  'extend': 'excel',
                  'text': 'Excel',
                  'className': 'btn-primary',
                  title: ''
                }, {
                  'extend': 'pdf',
                  'text': 'Pdf',
                  'className': 'btn-primary',
                  title: ''
                }, {
                  'extend': 'print',
                  'text': 'Print',
                  'className': 'btn-primary',
                  title: ''
                }],
                order: []
              };
              var table = $('#prediction').DataTable(settingsObj);
              _this14.predictionVisible = true;
              var me = _this14;
              $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                if (e.target.id === 'pills-one-tab') {
                  var options = {
                    'width': 600,
                    'height': 300
                  };
                  var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"](options);
                  smiles_drawer__WEBPACK_IMPORTED_MODULE_3__["parse"](me.predictionResult.SMILES[me.molIndex], function (tree) {
                    // Draw to the canvas
                    smilesDrawer.draw(tree, 'one_canvas', 'light', false);
                  }, function (err) {
                    console.log(err);
                  });
                }
              });
            }, 0);
          });
        }
      }, {
        key: "existKey",
        value: function existKey(obj, key) {
          if (key in this.objectKeys(obj)) {
            return true;
          }

          return false;
        }
      }, {
        key: "saveEXCEL",
        value: function saveEXCEL() {
          var xls = Object.assign([], this.info);
          xls.splice(0, 0, this.head);
          /* generate worksheet */

          var ws = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].aoa_to_sheet(xls);
          /* generate workbook and add the worksheet */

          var wb = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
          xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(wb, ws, 'Sheet1');
          /* save to file */

          xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](wb, this.prediction.name + '.xlsx');
        }
      }, {
        key: "savePDF",
        value: function savePDF() {
          var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_8___default.a();
          pdf.autoTable({
            head: [this.head],
            body: this.info,
            headStyles: {
              2: {
                halign: 'center'
              },
              3: {
                halign: 'center'
              }
            },
            columnStyles: {
              0: {
                columnWidth: 40
              },
              1: {
                columnWidth: 40
              },
              2: {
                columnWidth: 10,
                halign: 'center'
              },
              3: {
                columnWidth: 10,
                halign: 'center'
              }
            }
          });
          pdf.save(this.prediction.name + '.pdf');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
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
        }
      }]);

      return PredictionComponent;
    }();

    PredictionComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]
      }, {
        type: _prediction_service__WEBPACK_IMPORTED_MODULE_5__["PredictionService"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PredictionComponent.prototype, "predictionName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('cmp'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], PredictionComponent.prototype, "components", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('cmpone'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], PredictionComponent.prototype, "componentOne", void 0);
    PredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prediction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prediction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prediction/prediction.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prediction.component.css */
      "./src/app/prediction/prediction.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"], _prediction_service__WEBPACK_IMPORTED_MODULE_5__["PredictionService"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])], PredictionComponent);
    /***/
  },

  /***/
  "./src/app/prediction/prediction.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/prediction/prediction.service.ts ***!
    \**************************************************/

  /*! exports provided: PredictionService */

  /***/
  function srcAppPredictionPredictionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionService", function () {
      return PredictionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PredictionService = function PredictionService(http) {
      _classCallCheck(this, PredictionService);

      this.http = http;
    };

    PredictionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PredictionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PredictionService);
    /***/
  },

  /***/
  "./src/app/predictor/predictor.component.css":
  /*!***************************************************!*\
    !*** ./src/app/predictor/predictor.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPredictorPredictorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a:hover {\n\n    background: #E7E7E7;\n}\n\na.active {\n    background: #EBAB39;\n    border-bottom: 2px solid #0076a3;\n}\n\na {\n    \n    background:#22577a;\n    color: #f7f9ea;\n    border-bottom: 2px solid #0076a3;\n   \n}\n\n.wrap {\n    cursor:not-allowed;\n}\n\na.disabled{\n    background:#22577a;\n    pointer-events: none;\n    color: #f7f9ea; \n}\n\n.loading {\n    position: relative;\n    left: 50%;\n    z-index: 1;\n    width: 20px;\n    height: 20px;\n    margin: 0 0 0 0px;\n    border: 5px solid #e6901a;\n    border-radius: 60%;\n    border-top: 5px solid #B8DCED;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 1s linear infinite;\n  }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdG9yL3ByZWRpY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQ0FBZ0M7O0FBRXBDOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQzs7QUFFQSxXQUFXOztBQUNYO0lBQ0UsS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0VBQzVDOztBQUVBO0lBQ0UsS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7RUFDcEMiLCJmaWxlIjoic3JjL2FwcC9wcmVkaWN0b3IvcHJlZGljdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcblxuICAgIGJhY2tncm91bmQ6ICNFN0U3RTc7XG59XG5cbmEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUJBQjM5O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3NmEzO1xufVxuYSB7XG4gICAgXG4gICAgYmFja2dyb3VuZDojMjI1NzdhO1xuICAgIGNvbG9yOiAjZjdmOWVhO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3NmEzO1xuICAgXG59XG4ud3JhcCB7XG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xufVxuYS5kaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kOiMyMjU3N2E7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICNmN2Y5ZWE7IFxufVxuLmxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwIDAgMCAwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2U2OTAxYTtcbiAgICBib3JkZXItcmFkaXVzOiA2MCU7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNCOERDRUQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICAvKiBTYWZhcmkgKi9cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/predictor/predictor.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/predictor/predictor.component.ts ***!
    \**************************************************/

  /*! exports provided: PredictorComponent */

  /***/
  function srcAppPredictorPredictorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictorComponent", function () {
      return PredictorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./predictor.service */
    "./src/app/predictor/predictor.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);

    var PredictorComponent =
    /*#__PURE__*/
    function () {
      function PredictorComponent(service, router, commonService, activeModal, prediction, model, toastr) {
        _classCallCheck(this, PredictorComponent);

        this.service = service;
        this.router = router;
        this.commonService = commonService;
        this.activeModal = activeModal;
        this.prediction = prediction;
        this.model = model;
        this.toastr = toastr;
        this.objectKeys = Object.keys;
        this.modelName = 'Model1';
        this.predictName = '';
        this.version = '0';
        this.isvalid = false;
        this.predictionsNames = {};
      }

      _createClass(PredictorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.models = {};
          this.getModelListPredict();
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this.prediction.predictions[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _name2 = _step8.value;
              this.predictionsNames[_name2[0]] = true;
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
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
        }
      }, {
        key: "change",
        value: function change(fileList) {
          var file = fileList[0];
          this.file = file;
        }
      }, {
        key: "predictNameChange",
        value: function predictNameChange() {
          this.isvalid = true;
          var letters = /^[A-Za-z0-9_]+$/;

          if (!this.predictName.match(letters) || this.predictName in this.predictionsNames || this.predictName.startsWith('ensemble')) {
            this.isvalid = false;
          }
        }
      }, {
        key: "getModelListPredict",
        value: function getModelListPredict() {
          var _this15 = this;

          this.commonService.getModelList().subscribe(function (result) {
            // result = JSON.parse(result[1]);
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = result[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var model = _step9.value;

                if (typeof model.info === 'object') {
                  var modelName = model.modelname;

                  if (!(modelName in _this15.models)) {
                    _this15.models[modelName] = [];
                  }

                  if (model.info) {
                    _this15.models[modelName].push(model.version);
                  }
                }
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                  _iterator9.return();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }
          });
        }
      }, {
        key: "getPredictionList",
        value: function getPredictionList() {
          var _this16 = this;

          this.commonService.getPredictionList().subscribe(function (result) {
            _this16.prediction.predictions = result;
            setTimeout(function () {
              var table = $('#dataTablePredictions').DataTable({
                /*Ordering by date */
                order: [[4, 'desc']],
                columnDefs: [{
                  'type': 'date',
                  'targets': 4
                }]
              });
              _this16.prediction.name = $('#dataTablePredictions tbody tr:first td:first').text();
              _this16.prediction.modelName = $('#dataTablePredictions tbody tr:first td:eq(1)').text();
              _this16.prediction.modelVersion = $('#dataTablePredictions tbody tr:first td:eq(2)').text();
              _this16.prediction.date = $('#dataTablePredictions tbody tr:first td:eq(4)').text();
            }, 100);
          }, function (error) {
            alert(error.message);
          });
        }
      }, {
        key: "predict",
        value: function predict() {
          var _this17 = this;

          this.activeModal.close('Close click');
          var inserted = this.toastr.info('Running!', 'Prediction ' + this.predictName, {
            disableTimeOut: true,
            positionClass: 'toast-top-right'
          });
          this.prediction.predicting[this.predictName] = [this.modelName, this.version, this.file.name];
          this.service.predict(this.modelName, this.version, this.file, this.predictName).subscribe(function (result) {
            var iter = 0;
            var intervalId = setInterval(function () {
              if (iter < 15) {
                _this17.checkPrediction(_this17.predictName, inserted, intervalId);
              } else {
                clearInterval(intervalId);

                _this17.toastr.clear(inserted.toastId);

                _this17.toastr.error('Prediction ' + name + ' \n Time Out', 'ERROR!', {
                  timeOut: 10000,
                  positionClass: 'toast-top-right'
                });

                delete _this17.prediction.predicting[_this17.predictName];
                $('#dataTablePredictions').DataTable().destroy();

                _this17.getPredictionList();
              }

              iter += 1;
            }, 5000);
          }, function (error) {
            alert('Error prediction');
          });
        } // Periodic function to check model

      }, {
        key: "checkPrediction",
        value: function checkPrediction(name, inserted, intervalId) {
          var _this18 = this;

          this.commonService.getPrediction(name).subscribe(function (result) {
            console.log(result);

            _this18.toastr.clear(inserted.toastId);

            _this18.toastr.success('Prediction ' + name + ' created', 'PREDICTION CREATED', {
              timeOut: 5000,
              positionClass: 'toast-top-right'
            });

            clearInterval(intervalId);
            delete _this18.prediction.predicting[_this18.predictName];
            $('#dataTablePredictions').DataTable().destroy();

            _this18.getPredictionList();
          }, function (error) {
            if (error.error.code !== 0) {
              _this18.toastr.clear(inserted.toastId);

              _this18.toastr.error('Prediction ' + name + ' \n ' + error.error.message, 'ERROR!', {
                timeOut: 10000,
                positionClass: 'toast-top-right'
              });

              clearInterval(intervalId);
              delete _this18.prediction.predicting[_this18.predictName];
              $('#dataTablePredictions').DataTable().destroy();

              _this18.getPredictionList();
            }
          });
        }
      }]);

      return PredictorComponent;
    }();

    PredictorComponent.ctorParameters = function () {
      return [{
        type: _predictor_service__WEBPACK_IMPORTED_MODULE_4__["PredictorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    PredictorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predictor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/predictor/predictor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predictor.component.css */
      "./src/app/predictor/predictor.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_predictor_service__WEBPACK_IMPORTED_MODULE_4__["PredictorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], PredictorComponent);
    /***/
  },

  /***/
  "./src/app/predictor/predictor.service.ts":
  /*!************************************************!*\
    !*** ./src/app/predictor/predictor.service.ts ***!
    \************************************************/

  /*! exports provided: PredictorService */

  /***/
  function srcAppPredictorPredictorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictorService", function () {
      return PredictorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var PredictorService =
    /*#__PURE__*/
    function () {
      function PredictorService(http) {
        _classCallCheck(this, PredictorService);

        this.http = http;
      }

      _createClass(PredictorService, [{
        key: "predict",
        value: function predict(modelName, version, file, predictionName) {
          var formData = new FormData();
          formData.append('SDF', file);
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_predict + 'model/' + modelName + '/version/' + version + '/predictionName/' + predictionName;
          return this.http.put(url, formData);
        }
      }]);

      return PredictorService;
    }();

    PredictorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PredictorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PredictorService);
    /***/
  },

  /***/
  "./src/app/qualit-conformal/qualit-conformal.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/qualit-conformal/qualit-conformal.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQualitConformalQualitConformalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".TP {\n  background-color: rgba(0,255,0,0.3);\n}\n.FP {\n  background-color:rgba(235,143,3,0.3);\n}\n.TN {\n  background-color:rgba(3,49,155,0.3);\n}\n.FN {\n  background-color:rgba(255,0,0,0.3);\n}\n.card-header {\n  background: #B8DCED;\n  background-color: #B8DCED;\n}\n#matrix * {\npadding: 0px;\ntext-align: center;\n}\n.rotate > span {\n-webkit-transform: rotate(-90deg);\n        transform: rotate(-90deg);\nposition:absolute;\nleft:10;\nright:0;\ntop: 10px;\nmargin:auto;\n\n}\ntable td {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhbGl0LWNvbmZvcm1hbC9xdWFsaXQtY29uZm9ybWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtBQUNBLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFFQTtBQUNBLGlDQUF5QjtRQUF6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLE9BQU87QUFDUCxPQUFPO0FBQ1AsU0FBUztBQUNULFdBQVc7O0FBRVg7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9xdWFsaXQtY29uZm9ybWFsL3F1YWxpdC1jb25mb3JtYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UUCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwwLjMpO1xufVxuLkZQIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzNSwxNDMsMywwLjMpO1xufVxuLlROIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDMsNDksMTU1LDAuMyk7XG59XG4uRk4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMCwwLjMpO1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI0I4RENFRDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4RENFRDtcbn1cbiNtYXRyaXggKiB7XG5wYWRkaW5nOiAwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3RhdGUgPiBzcGFuIHtcbnRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbmxlZnQ6MTA7XG5yaWdodDowO1xudG9wOiAxMHB4O1xubWFyZ2luOmF1dG87XG5cbn1cblxudGFibGUgdGQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/qualit-conformal/qualit-conformal.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/qualit-conformal/qualit-conformal.component.ts ***!
    \****************************************************************/

  /*! exports provided: QualitConformalComponent */

  /***/
  function srcAppQualitConformalQualitConformalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualitConformalComponent", function () {
      return QualitConformalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _qualit_conformal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./qualit-conformal.service */
    "./src/app/qualit-conformal/qualit-conformal.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");

    var QualitConformalComponent =
    /*#__PURE__*/
    function () {
      function QualitConformalComponent(service, model, commonService) {
        _classCallCheck(this, QualitConformalComponent);

        this.service = service;
        this.model = model;
        this.commonService = commonService;
        this.modelDocumentation = undefined;
        this.orderDocumentation = ['ID', 'Version', 'Contact', 'Institution', 'Date', 'Endpoint', 'Endpoint_units', 'Interpretation', 'Dependent_variable', 'Species', 'Limits_applicability', 'Experimental_protocol', 'Model_availability', 'Data_info', 'Algorithm', 'Software', 'Descriptors', 'Algorithm_settings', 'AD_method', 'AD_parameters', 'Goodness_of_fit_statistics', 'Internal_validation_1', 'Internal_validation_2', 'External_validation', 'Comments', 'Other_related_models', 'Date_of_QMRF', 'Data_of_QMRF_updates', 'QMRF_updates', 'References', 'QMRF_same_models', 'Comment_on_the_endpoint', 'Endpoint_data_quality_and_variability', 'Descriptor_selection'];
        this.objectKeys = Object.keys;
        this.modelBuildInfo = {};
        this.modelValidationInfo = {}; // PolarArea

        this.polarChartOptions = {
          responsive: true,
          startAngle: 1 * Math.PI,
          scale: {
            gridLines: {
              color: 'rgba(0, 0, 0, 0.5)'
            },
            ticks: {
              color: 'rgba(0, 0, 0, 0.5)',
              fontStyle: 'bold'
            }
          }
        };
        this.polarAreaChartLabels = ['TP', 'FP', 'TN', 'FN'];
        this.polarAreaChartData = [0, 0, 0, 0];
        this.polarAreaChartData2 = [0, 0, 0, 0];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartColors = [{
          backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(235,143,3,0.3)', 'rgba(3,49,155,0.3)', 'rgba(255,0,0,0.3)']
        }];
      }

      _createClass(QualitConformalComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.polarAreaChartData = [0, 0, 0, 0];
          this.getDocumentation();
          this.getValidation();
        }
      }, {
        key: "isObject",
        value: function isObject(val) {
          if (val === null) {
            return false;
          }

          return typeof val === 'object';
        }
      }, {
        key: "getValidation",
        value: function getValidation() {
          var _this19 = this;

          this.service.getValidation(this.modelName, this.modelVersion).subscribe(function (result) {
            var info = result; // INFO ABOUT MODEL

            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = info['model_build_info'][Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var modelInfo = _step10.value;

                if (typeof modelInfo[2] === 'number') {
                  modelInfo[2] = parseFloat(modelInfo[2].toFixed(3));
                }

                _this19.modelBuildInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
              } // INFO ABOUT VALIDATION

            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                  _iterator10.return();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }

            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = info['model_valid_info'][Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var _modelInfo = _step11.value;

                if (typeof _modelInfo[2] === 'number') {
                  _modelInfo[2] = parseFloat(_modelInfo[2].toFixed(3));
                }

                if (typeof _modelInfo[2] !== 'object') {
                  _this19.modelValidationInfo[_modelInfo[0]] = [_modelInfo[1], _modelInfo[2]];
                }
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                  _iterator11.return();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }

            setTimeout(function () {
              if (_this19.modelValidationInfo['TP']) {
                _this19.polarAreaChartData = [_this19.modelValidationInfo['TP'][1], _this19.modelValidationInfo['FP'][1], _this19.modelValidationInfo['TN'][1], _this19.modelValidationInfo['FN'][1]];
              }
            }, 50);
          }, function (error) {
            alert('Error getting model');
          });
        }
      }, {
        key: "getDocumentation",
        value: function getDocumentation() {
          var _this20 = this;

          this.commonService.getDocumentation(this.modelName, this.modelVersion).subscribe(function (result) {
            _this20.modelDocumentation = result;
            console.log(_this20.modelDocumentation);
          }, function (error) {
            _this20.modelDocumentation = undefined;
          });
        }
      }]);

      return QualitConformalComponent;
    }();

    QualitConformalComponent.ctorParameters = function () {
      return [{
        type: _qualit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QualitConformalService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualitConformalComponent.prototype, "modelName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualitConformalComponent.prototype, "modelVersion", void 0);
    QualitConformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qualit-conformal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qualit-conformal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/qualit-conformal/qualit-conformal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qualit-conformal.component.css */
      "./src/app/qualit-conformal/qualit-conformal.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_qualit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QualitConformalService"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])], QualitConformalComponent);
    /***/
  },

  /***/
  "./src/app/qualit-conformal/qualit-conformal.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/qualit-conformal/qualit-conformal.service.ts ***!
    \**************************************************************/

  /*! exports provided: QualitConformalService */

  /***/
  function srcAppQualitConformalQualitConformalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualitConformalService", function () {
      return QualitConformalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var QualitConformalService =
    /*#__PURE__*/
    function () {
      function QualitConformalService(http) {
        _classCallCheck(this, QualitConformalService);

        this.http = http;
      }

      _createClass(QualitConformalService, [{
        key: "getValidation",
        value: function getValidation(model, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/validation';
          return this.http.get(url);
        }
      }]);

      return QualitConformalService;
    }();

    QualitConformalService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QualitConformalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], QualitConformalService);
    /***/
  },

  /***/
  "./src/app/qualit-no-conformal/qualit-no-conformal.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/qualit-no-conformal/qualit-no-conformal.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQualitNoConformalQualitNoConformalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".TP {\n    background-color: rgba(0,255,0,0.3);\n}\n.FP {\n    background-color:rgba(235,143,3,0.3);\n}\n.TN {\n    background-color:rgba(3,49,155,0.3);\n}\n.FN {\n    background-color:rgba(255,0,0,0.3);\n}\n.card-header {\n    background: #B8DCED;\n    background-color: #B8DCED;\n}\n#matrix * {\n  padding: 0px;\n  text-align: center;\n}\n.rotate > span {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  position:absolute;\n  left:10;\n  right:0;\n  top: 10px;\n  margin:auto;\n  \n}\ntable td {\n    padding-top: 1px;\n    padding-bottom: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhbGl0LW5vLWNvbmZvcm1hbC9xdWFsaXQtbm8tY29uZm9ybWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7O0FBRWI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9xdWFsaXQtbm8tY29uZm9ybWFsL3F1YWxpdC1uby1jb25mb3JtYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UUCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDI1NSwwLDAuMyk7XG59XG4uRlAge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsMTQzLDMsMC4zKTtcbn1cbi5UTiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDMsNDksMTU1LDAuMyk7XG59XG4uRk4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMCwwLDAuMyk7XG59XG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNCOERDRUQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4RENFRDtcbn1cbiNtYXRyaXggKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm90YXRlID4gc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBsZWZ0OjEwO1xuICByaWdodDowO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjphdXRvO1xuICBcbn1cblxudGFibGUgdGQge1xuICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/qualit-no-conformal/qualit-no-conformal.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/qualit-no-conformal/qualit-no-conformal.component.ts ***!
    \**********************************************************************/

  /*! exports provided: QualitNoConformalComponent */

  /***/
  function srcAppQualitNoConformalQualitNoConformalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualitNoConformalComponent", function () {
      return QualitNoConformalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _qualit_no_conformal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./qualit-no-conformal.service */
    "./src/app/qualit-no-conformal/qualit-no-conformal.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");

    var QualitNoConformalComponent =
    /*#__PURE__*/
    function () {
      function QualitNoConformalComponent(service, model, commonService) {
        _classCallCheck(this, QualitNoConformalComponent);

        this.service = service;
        this.model = model;
        this.commonService = commonService;
        this.modelDocumentation = undefined;
        this.orderDocumentation = ['ID', 'Version', 'Contact', 'Institution', 'Date', 'Endpoint', 'Endpoint_units', 'Interpretation', 'Dependent_variable', 'Species', 'Limits_applicability', 'Experimental_protocol', 'Model_availability', 'Data_info', 'Algorithm', 'Software', 'Descriptors', 'Algorithm_settings', 'AD_method', 'AD_parameters', 'Goodness_of_fit_statistics', 'Internal_validation_1', 'Internal_validation_2', 'External_validation', 'Comments', 'Other_related_models', 'Date_of_QMRF', 'Data_of_QMRF_updates', 'QMRF_updates', 'References', 'QMRF_same_models', 'Comment_on_the_endpoint', 'Endpoint_data_quality_and_variability', 'Descriptor_selection'];
        this.objectKeys = Object.keys;
        this.modelBuildInfo = {};
        this.modelValidationInfo = {}; // PolarArea

        this.polarChartOptions = {
          responsive: true,
          startAngle: 1 * Math.PI,
          scale: {
            gridLines: {
              color: 'rgba(0, 0, 0, 0.5)'
            },
            ticks: {
              color: 'rgba(0, 0, 0, 0.5)',
              fontStyle: 'bold'
            }
          }
        };
        this.polarAreaChartLabels = ['TP', 'FP', 'TN', 'FN'];
        this.polarAreaChartData = [0, 0, 0, 0];
        this.polarAreaChartData2 = [0, 0, 0, 0];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartColors = [{
          backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(235,143,3,0.3)', 'rgba(3,49,155,0.3)', 'rgba(255,0,0,0.3)']
        }];
      }

      _createClass(QualitNoConformalComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.polarAreaChartData = [0, 0, 0, 0];
          this.polarAreaChartData2 = [0, 0, 0, 0];
          this.getDocumentation();
          this.getValidation();
        }
      }, {
        key: "isObject",
        value: function isObject(val) {
          if (val === null) {
            return false;
          }

          return typeof val === 'object';
        }
      }, {
        key: "getValidation",
        value: function getValidation() {
          var _this21 = this;

          this.service.getValidation(this.modelName, this.modelVersion).subscribe(function (result) {
            var info = result;
            console.log(info); // INFO ABOUT MODEL

            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = info['model_build_info'][Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var modelInfo = _step12.value;

                if (typeof modelInfo[2] === 'number') {
                  modelInfo[2] = parseFloat(modelInfo[2].toFixed(3));
                }

                _this21.modelBuildInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
              } // INFO ABOUT VALIDATION

            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                  _iterator12.return();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }

            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = info['model_valid_info'][Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _modelInfo2 = _step13.value;

                if (typeof _modelInfo2[2] === 'number') {
                  _modelInfo2[2] = parseFloat(_modelInfo2[2].toFixed(3));
                }

                if (typeof _modelInfo2[2] !== 'object') {
                  _this21.modelValidationInfo[_modelInfo2[0]] = [_modelInfo2[1], _modelInfo2[2]];
                }
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                  _iterator13.return();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }

            setTimeout(function () {
              if (_this21.modelValidationInfo['TP']) {
                _this21.polarAreaChartData = [_this21.modelValidationInfo['TP'][1], _this21.modelValidationInfo['FP'][1], _this21.modelValidationInfo['TN'][1], _this21.modelValidationInfo['FN'][1]];
              }

              if (_this21.modelValidationInfo['TPpred']) {
                _this21.polarAreaChartData2 = [_this21.modelValidationInfo['TPpred'][1], _this21.modelValidationInfo['FPpred'][1], _this21.modelValidationInfo['TNpred'][1], _this21.modelValidationInfo['FNpred'][1]];
              }
            }, 50);
          }, function (error) {
            alert('Error getting model');
          });
        }
      }, {
        key: "getDocumentation",
        value: function getDocumentation() {
          var _this22 = this;

          this.commonService.getDocumentation(this.modelName, this.modelVersion).subscribe(function (result) {
            _this22.modelDocumentation = result;
          }, function (error) {
            _this22.modelDocumentation = undefined;
          });
        }
      }]);

      return QualitNoConformalComponent;
    }();

    QualitNoConformalComponent.ctorParameters = function () {
      return [{
        type: _qualit_no_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QualitNoConformalService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualitNoConformalComponent.prototype, "modelName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QualitNoConformalComponent.prototype, "modelVersion", void 0);
    QualitNoConformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qualit-no-conformal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qualit-no-conformal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/qualit-no-conformal/qualit-no-conformal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qualit-no-conformal.component.css */
      "./src/app/qualit-no-conformal/qualit-no-conformal.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_qualit_no_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QualitNoConformalService"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])], QualitNoConformalComponent);
    /***/
  },

  /***/
  "./src/app/qualit-no-conformal/qualit-no-conformal.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/qualit-no-conformal/qualit-no-conformal.service.ts ***!
    \********************************************************************/

  /*! exports provided: QualitNoConformalService */

  /***/
  function srcAppQualitNoConformalQualitNoConformalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QualitNoConformalService", function () {
      return QualitNoConformalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var QualitNoConformalService =
    /*#__PURE__*/
    function () {
      function QualitNoConformalService(http) {
        _classCallCheck(this, QualitNoConformalService);

        this.http = http;
      }

      _createClass(QualitNoConformalService, [{
        key: "getValidation",
        value: function getValidation(model, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/validation';
          return this.http.get(url);
        }
      }]);

      return QualitNoConformalService;
    }();

    QualitNoConformalService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QualitNoConformalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], QualitNoConformalService);
    /***/
  },

  /***/
  "./src/app/quantit-conformal/quantit-conformal.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/quantit-conformal/quantit-conformal.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuantitConformalQuantitConformalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".TP {\n  background-color: rgba(0,255,0,0.3);\n}\n.FP {\n  background-color:rgba(235,143,3,0.3);\n}\n.TN {\n  background-color:rgba(3,49,155,0.3);\n}\n.FN {\n  background-color:rgba(255,0,0,0.3);\n}\n.card-header {\n  background: #B8DCED;\n  background-color: #B8DCED;\n}\n#matrix * {\npadding: 0px;\ntext-align: center;\n}\n.rotate > span {\n-webkit-transform: rotate(-90deg);\n        transform: rotate(-90deg);\nposition:absolute;\nleft:10;\nright:0;\ntop: 10px;\nmargin:auto;\n\n}\ntable td {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhbnRpdC1jb25mb3JtYWwvcXVhbnRpdC1jb25mb3JtYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUVBO0FBQ0EsaUNBQXlCO1FBQXpCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsT0FBTztBQUNQLE9BQU87QUFDUCxTQUFTO0FBQ1QsV0FBVzs7QUFFWDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3F1YW50aXQtY29uZm9ybWFsL3F1YW50aXQtY29uZm9ybWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVFAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMjU1LDAsMC4zKTtcbn1cbi5GUCB7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsMTQzLDMsMC4zKTtcbn1cbi5UTiB7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgzLDQ5LDE1NSwwLjMpO1xufVxuLkZOIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC4zKTtcbn1cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNCOERDRUQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCOERDRUQ7XG59XG4jbWF0cml4ICoge1xucGFkZGluZzogMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm90YXRlID4gc3BhbiB7XG50cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xucG9zaXRpb246YWJzb2x1dGU7XG5sZWZ0OjEwO1xucmlnaHQ6MDtcbnRvcDogMTBweDtcbm1hcmdpbjphdXRvO1xuXG59XG5cbnRhYmxlIHRkIHtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/quantit-conformal/quantit-conformal.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/quantit-conformal/quantit-conformal.component.ts ***!
    \******************************************************************/

  /*! exports provided: QuantitConformalComponent */

  /***/
  function srcAppQuantitConformalQuantitConformalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuantitConformalComponent", function () {
      return QuantitConformalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _quantit_conformal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./quantit-conformal.service */
    "./src/app/quantit-conformal/quantit-conformal.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var chartjs_plugin_error_bars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! chartjs-plugin-error-bars */
    "./node_modules/chartjs-plugin-error-bars/build/Plugin.Errorbars.js");
    /* harmony import */


    var chartjs_plugin_error_bars__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_error_bars__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");

    var QuantitConformalComponent =
    /*#__PURE__*/
    function () {
      function QuantitConformalComponent(service, model, commonService) {
        _classCallCheck(this, QuantitConformalComponent);

        this.service = service;
        this.model = model;
        this.commonService = commonService;
        this.modelDocumentation = undefined;
        this.orderDocumentation = ['ID', 'Version', 'Contact', 'Institution', 'Date', 'Endpoint', 'Endpoint_units', 'Interpretation', 'Dependent_variable', 'Species', 'Limits_applicability', 'Experimental_protocol', 'Model_availability', 'Data_info', 'Algorithm', 'Software', 'Descriptors', 'Algorithm_settings', 'AD_method', 'AD_parameters', 'Goodness_of_fit_statistics', 'Internal_validation_1', 'Internal_validation_2', 'External_validation', 'Comments', 'Other_related_models', 'Date_of_QMRF', 'Data_of_QMRF_updates', 'QMRF_updates', 'References', 'QMRF_same_models', 'Comment_on_the_endpoint', 'Endpoint_data_quality_and_variability', 'Descriptor_selection'];
        this.objectKeys = Object.keys;
        this.modelBuildInfo = {};
        this.modelValidationInfo = {};
        this.modelConformal = {}; // Options

        this.ChartOptionsPredicted = {
          responsive: true,
          tooltips: {
            callbacks: {
              label: function label(tooltipItem, data) {
                return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
              },
              title: function title(tooltipItem, data) {
                var label = data.labels[tooltipItem[0].index];
                return label;
              }
            }
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'experimental'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Predicted'
              }
            }]
          },
          legend: {
            display: false
          }
        };
        this.ChartOptionsFitted = {
          responsive: true,
          tooltips: {
            callbacks: {
              label: function label(tooltipItem, data) {
                return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
              },
              title: function title(tooltipItem, data) {
                var label = data.labels[tooltipItem[0].index];
                return label;
              }
            }
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'experimental'
              }
            }],
            yAxes: [{
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'Fitted'
              }
              /*,
              ticks: {
              min: -10,
              max: 0,
              }*/

            }]
          },
          legend: {
            display: false
          },
          plugins: {
            chartJsPluginErrorBars: {
              color: '#666',
              lineWidth: 2,
              absoluteValues: true
            }
          }
        };
        this.ChartLabels = [];
        this.ChartDataPredicted = [{
          data: [],
          pointRadius: 3,
          backgroundColor: 'rgba(255,0,0,0.3)',
          type: 'scatter',
          showLine: false,
          fill: false
        }, {
          data: [],
          type: 'line',
          fill: false,
          pointRadius: 1
        }];
        this.ChartDataFitted = [{
          errorBars: {},
          data: [],
          pointRadius: 3,
          showLine: false,
          fill: false
        }, {
          data: [],
          fill: false,
          pointRadius: 1
        }];
        this.ChartType = 'line';
      }

      _createClass(QuantitConformalComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.ChartDataFitted[0].data = [];
          this.ChartDataFitted[1].data = [];
          this.ChartLabels = [];
          this.getDocumentation();
          this.getValidation();
          var toggler = document.getElementsByClassName('caret');
          var i;

          for (i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener('click', function () {
              this.parentElement.querySelector('.nested').classList.toggle('active');
              this.classList.toggle('caret-down');
            });
          }
        }
      }, {
        key: "isObject",
        value: function isObject(val) {
          if (val === null) {
            return false;
          }

          return typeof val === 'object';
        }
      }, {
        key: "getValidation",
        value: function getValidation() {
          var _this23 = this;

          this.service.getValidation(this.modelName, this.modelVersion).subscribe(function (result) {
            var info = result;
            console.log(info);
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = info['model_build_info'][Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var modelInfo = _step14.value;

                if (typeof modelInfo[2] === 'number') {
                  modelInfo[2] = parseFloat(modelInfo[2].toFixed(3)); // do something
                }

                _this23.modelBuildInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                  _iterator14.return();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }

            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = info['model_valid_info'][Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var _modelInfo3 = _step15.value;

                if (typeof _modelInfo3[2] === 'number') {
                  _modelInfo3[2] = parseFloat(_modelInfo3[2].toFixed(3)); // do something
                }

                if (typeof _modelInfo3[2] !== 'object') {
                  _this23.modelValidationInfo[_modelInfo3[0]] = [_modelInfo3[1], _modelInfo3[2]];
                } else {
                  _this23.modelConformal[_modelInfo3[0]] = _modelInfo3[2];
                }
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }

            setTimeout(function () {
              var max = null;
              var min = null; // tslint:disable-next-line:forin

              for (var i in info['ymatrix']) {
                // this.ChartDataPredicted[0].data[i] = { x: info['ymatrix'][i], y: info['Y_pred'][i]};
                // this.ChartDataPredicted[1].data[i] = { x: info['ymatrix'][i], y: info['ymatrix'][i]};
                _this23.ChartDataFitted[0].data[i] = {
                  x: info['ymatrix'][i],
                  y: _this23.modelConformal['Conformal_interval_medians'][i]
                };
                _this23.ChartDataFitted[0].errorBars[info['obj_nam'][i]] = {
                  plus: _this23.modelConformal['Conformal_prediction_ranges'][i][0],
                  minus: _this23.modelConformal['Conformal_prediction_ranges'][i][1]
                };
                _this23.ChartDataFitted[1].data[i] = {
                  x: info['ymatrix'][i],
                  y: info['ymatrix'][i]
                };

                if (max) {
                  if (max < _this23.modelConformal['Conformal_prediction_ranges'][i][0]) {
                    max = _this23.modelConformal['Conformal_prediction_ranges'][i][0];
                  }
                } else {
                  max = _this23.modelConformal['Conformal_prediction_ranges'][i][0];
                }

                if (min) {
                  if (min > _this23.modelConformal['Conformal_prediction_ranges'][i][1]) {
                    min = _this23.modelConformal['Conformal_prediction_ranges'][i][1];
                  }
                } else {
                  min = _this23.modelConformal['Conformal_prediction_ranges'][i][1];
                }

                _this23.ChartLabels[i] = info['obj_nam'][i];
              } // this.ChartOptionsFitted.scales.yAxes[0].ticks.min = min - 1 ;
              // this.ChartOptionsFitted.scales.yAxes[0].ticks.max = max + 1;
              // console.log(this.QuantitConformalChart.nativeElement);

            }, 50);
          }, function (error) {
            alert('Error getting model');
          });
        }
      }, {
        key: "getDocumentation",
        value: function getDocumentation() {
          var _this24 = this;

          this.commonService.getDocumentation(this.modelName, this.modelVersion).subscribe(function (result) {
            _this24.modelDocumentation = result;
          }, function (error) {
            _this24.modelDocumentation = undefined;
          });
        }
      }]);

      return QuantitConformalComponent;
    }();

    QuantitConformalComponent.ctorParameters = function () {
      return [{
        type: _quantit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QuantitConformalService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuantitConformalComponent.prototype, "modelName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuantitConformalComponent.prototype, "modelVersion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('QuantitConformalChart', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuantitConformalComponent.prototype, "QuantitConformalChart", void 0);
    QuantitConformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quantit-conformal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quantit-conformal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quantit-conformal/quantit-conformal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quantit-conformal.component.css */
      "./src/app/quantit-conformal/quantit-conformal.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quantit_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QuantitConformalService"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])], QuantitConformalComponent);
    /***/
  },

  /***/
  "./src/app/quantit-conformal/quantit-conformal.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/quantit-conformal/quantit-conformal.service.ts ***!
    \****************************************************************/

  /*! exports provided: QuantitConformalService */

  /***/
  function srcAppQuantitConformalQuantitConformalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuantitConformalService", function () {
      return QuantitConformalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var QuantitConformalService =
    /*#__PURE__*/
    function () {
      function QuantitConformalService(http) {
        _classCallCheck(this, QuantitConformalService);

        this.http = http;
      }

      _createClass(QuantitConformalService, [{
        key: "getValidation",
        value: function getValidation(model, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/validation';
          return this.http.get(url);
        }
      }]);

      return QuantitConformalService;
    }();

    QuantitConformalService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuantitConformalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], QuantitConformalService);
    /***/
  },

  /***/
  "./src/app/quantit-no-conformal/quantit-no-conformal.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/quantit-no-conformal/quantit-no-conformal.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuantitNoConformalQuantitNoConformalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".TP {\n    background-color: rgba(0,255,0,0.3);\n}\n.FP {\n    background-color:rgba(235,143,3,0.3);\n}\n.TN {\n    background-color:rgba(3,49,155,0.3);\n}\n.FN {\n    background-color:rgba(255,0,0,0.3);\n}\n.card-header {\n    background: #B8DCED;\n    background-color: #B8DCED;\n}\n#matrix * {\n  padding: 0px;\n  text-align: center;\n}\n.rotate > span {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  position:absolute;\n  left:10;\n  right:0;\n  top: 10px;\n  margin:auto;\n  \n}\ntable td {\n    padding-top: 1px;\n    padding-bottom: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhbnRpdC1uby1jb25mb3JtYWwvcXVhbnRpdC1uby1jb25mb3JtYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsT0FBTztFQUNQLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVzs7QUFFYjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3F1YW50aXQtbm8tY29uZm9ybWFsL3F1YW50aXQtbm8tY29uZm9ybWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVFAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwwLjMpO1xufVxuLkZQIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM1LDE0MywzLDAuMyk7XG59XG4uVE4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgzLDQ5LDE1NSwwLjMpO1xufVxuLkZOIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMCwwLjMpO1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQjhEQ0VEO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOERDRUQ7XG59XG4jbWF0cml4ICoge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvdGF0ZSA+IHNwYW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDoxMDtcbiAgcmlnaHQ6MDtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46YXV0bztcbiAgXG59XG5cbnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/quantit-no-conformal/quantit-no-conformal.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/quantit-no-conformal/quantit-no-conformal.component.ts ***!
    \************************************************************************/

  /*! exports provided: QuantitNoConformalComponent */

  /***/
  function srcAppQuantitNoConformalQuantitNoConformalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuantitNoConformalComponent", function () {
      return QuantitNoConformalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _quantit_no_conformal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./quantit-no-conformal.service */
    "./src/app/quantit-no-conformal/quantit-no-conformal.service.ts");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");

    var QuantitNoConformalComponent =
    /*#__PURE__*/
    function () {
      function QuantitNoConformalComponent(service, model, commonService) {
        _classCallCheck(this, QuantitNoConformalComponent);

        this.service = service;
        this.model = model;
        this.commonService = commonService;
        this.modelDocumentation = undefined;
        this.orderDocumentation = ['ID', 'Version', 'Contact', 'Institution', 'Date', 'Endpoint', 'Endpoint_units', 'Interpretation', 'Dependent_variable', 'Species', 'Limits_applicability', 'Experimental_protocol', 'Model_availability', 'Data_info', 'Algorithm', 'Software', 'Descriptors', 'Algorithm_settings', 'AD_method', 'AD_parameters', 'Goodness_of_fit_statistics', 'Internal_validation_1', 'Internal_validation_2', 'External_validation', 'Comments', 'Other_related_models', 'Date_of_QMRF', 'Data_of_QMRF_updates', 'QMRF_updates', 'References', 'QMRF_same_models', 'Comment_on_the_endpoint', 'Endpoint_data_quality_and_variability', 'Descriptor_selection'];
        this.objectKeys = Object.keys;
        this.modelBuildInfo = {};
        this.modelValidationInfo = {}; // Options

        this.ChartOptionsPredicted = {
          responsive: true,
          tooltips: {
            callbacks: {
              label: function label(tooltipItem, data) {
                return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
              },
              title: function title(tooltipItem, data) {
                var label = data.labels[tooltipItem[0].index];
                return label;
              }
            }
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'experimental'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Predicted'
              }
            }],
            ticks: {
              min: -8,
              max: -3
            }
          },
          legend: {
            display: false
          }
        };
        this.ChartOptionsFitted = {
          responsive: true,
          tooltips: {
            callbacks: {
              label: function label(tooltipItem, data) {
                return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
              },
              title: function title(tooltipItem, data) {
                var label = data.labels[tooltipItem[0].index];
                return label;
              }
            }
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'experimental'
              }
            }],
            yAxes: [{
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'Fitted'
              }
            }]
          },
          legend: {
            display: false
          }
        };
        this.ChartLabels = [];
        this.ChartDataPredicted = [{
          data: [],
          pointRadius: 3,
          backgroundColor: 'rgba(255,0,0,0.3)',
          type: 'scatter',
          showLine: false,
          fill: false
        }, {
          data: [],
          type: 'line',
          fill: false,
          pointRadius: 1
        }];
        this.ChartDataFitted = [{
          data: [],
          pointRadius: 3,
          backgroundColor: 'rgba(255,0,0,0.3)',
          type: '',
          showLine: false,
          fill: false
        }, {
          data: [],
          type: 'line',
          fill: false,
          pointRadius: 1
        }];
        this.ChartType = 'line';
      }

      _createClass(QuantitNoConformalComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.ChartDataFitted[0].data = [];
          this.ChartDataFitted[1].data = [];
          this.ChartDataPredicted[0].data = [];
          this.ChartDataPredicted[1].data = [];
          this.ChartLabels = [];
          this.getDocumentation();
          this.getValidation();
        }
      }, {
        key: "isObject",
        value: function isObject(val) {
          if (val === null) {
            return false;
          }

          return typeof val === 'object';
        }
      }, {
        key: "getValidation",
        value: function getValidation() {
          var _this25 = this;

          this.service.getValidation(this.modelName, this.modelVersion).subscribe(function (result) {
            var info = result;
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
              for (var _iterator16 = info['model_valid_info'][Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                var modelInfo = _step16.value;

                if (typeof modelInfo[2] === 'number') {
                  modelInfo[2] = parseFloat(modelInfo[2].toFixed(3));
                }

                if (typeof modelInfo[2] !== 'object') {
                  _this25.modelValidationInfo[modelInfo[0]] = [modelInfo[1], modelInfo[2]];
                }
              }
            } catch (err) {
              _didIteratorError16 = true;
              _iteratorError16 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                  _iterator16.return();
                }
              } finally {
                if (_didIteratorError16) {
                  throw _iteratorError16;
                }
              }
            }

            setTimeout(function () {
              // tslint:disable-next-line:forin
              for (var i in info['ymatrix']) {
                if ('Y_pred' in info) {
                  _this25.ChartDataPredicted[0].data[i] = {
                    x: info['ymatrix'][i],
                    y: info['Y_pred'][i]
                  };
                  _this25.ChartDataPredicted[1].data[i] = {
                    x: info['ymatrix'][i],
                    y: info['ymatrix'][i]
                  };
                }

                _this25.ChartDataFitted[0].data[i] = {
                  x: info['ymatrix'][i],
                  y: info['Y_adj'][i]
                };
                _this25.ChartDataFitted[1].data[i] = {
                  x: info['ymatrix'][i],
                  y: info['ymatrix'][i]
                };
                _this25.ChartLabels[i] = info['obj_nam'][i];
              }
            }, 50);
          }, function (error) {
            alert('Error getting model');
          });
        }
      }, {
        key: "getDocumentation",
        value: function getDocumentation() {
          var _this26 = this;

          this.commonService.getDocumentation(this.modelName, this.modelVersion).subscribe(function (result) {
            _this26.modelDocumentation = result;
          }, function (error) {
            _this26.modelDocumentation = undefined;
          });
        }
      }]);

      return QuantitNoConformalComponent;
    }();

    QuantitNoConformalComponent.ctorParameters = function () {
      return [{
        type: _quantit_no_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QuantitNoConformalService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuantitNoConformalComponent.prototype, "modelName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], QuantitNoConformalComponent.prototype, "modelVersion", void 0);
    QuantitNoConformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quantit-no-conformal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quantit-no-conformal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quantit-no-conformal/quantit-no-conformal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quantit-no-conformal.component.css */
      "./src/app/quantit-no-conformal/quantit-no-conformal.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quantit_no_conformal_service__WEBPACK_IMPORTED_MODULE_2__["QuantitNoConformalService"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Model"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])], QuantitNoConformalComponent);
    /***/
  },

  /***/
  "./src/app/quantit-no-conformal/quantit-no-conformal.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/quantit-no-conformal/quantit-no-conformal.service.ts ***!
    \**********************************************************************/

  /*! exports provided: QuantitNoConformalService */

  /***/
  function srcAppQuantitNoConformalQuantitNoConformalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuantitNoConformalService", function () {
      return QuantitNoConformalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var QuantitNoConformalService =
    /*#__PURE__*/
    function () {
      function QuantitNoConformalService(http) {
        _classCallCheck(this, QuantitNoConformalService);

        this.http = http;
      }

      _createClass(QuantitNoConformalService, [{
        key: "getValidation",
        value: function getValidation(model, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl_manage + 'model/' + model + '/version/' + version + '/validation';
          return this.http.get(url);
        }
      }]);

      return QuantitNoConformalService;
    }();

    QuantitNoConformalService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuantitNoConformalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], QuantitNoConformalService);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidebar {\n    min-height: 100vh;\n    padding-bottom: 10px;\n    background-color:#0076a3;\n    /*background: linear-gradient(to left, #F7F7F7 0%, #F7F7F7 100%);*/\n    background: #0076a3;\n    border-right: 5px solid #B8DCED; \n    \n}\n\nul {\n    background: #0076a3;\n}\n\nul li a {\n    background: #0076a3;\n    color: #B8DCED;\n   \n}\n\nul li a.active{\n    background: #22577a;\n    color: white;\n    border-bottom: 3px solid #e59300;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixrRUFBa0U7SUFDbEUsbUJBQW1CO0lBQ25CLCtCQUErQjs7QUFFbkM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzZhMztcbiAgICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjRjdGN0Y3IDAlLCAjRjdGN0Y3IDEwMCUpOyovXG4gICAgYmFja2dyb3VuZDogIzAwNzZhMztcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjQjhEQ0VEOyBcbiAgICBcbn1cblxudWwge1xuICAgIGJhY2tncm91bmQ6ICMwMDc2YTM7XG59XG51bCBsaSBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3NmEzO1xuICAgIGNvbG9yOiAjQjhEQ0VEO1xuICAgXG59XG5cbnVsIGxpIGEuYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMyMjU3N2E7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTU5MzAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _animations_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../animations/animations */
    "./src/app/animations/animations.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(model, globals, router) {
        _classCallCheck(this, SidebarComponent);

        this.model = model;
        this.globals = globals;
        this.router = router;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isActive",
        value: function isActive(url) {
          return this.router.url.includes(url);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
      animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_4__["fade"], _animations_animations__WEBPACK_IMPORTED_MODULE_4__["slideUp"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/sidebar/sidebar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/similarity/similarity.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/similarity/similarity.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSimilaritySimilarityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.disabled {\n    cursor: not-allowed;\n    pointer-events: none !important;\n}\n\nlabel.disabled {\n    cursor: not-allowed;\n    pointer-events: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltaWxhcml0eS9zaW1pbGFyaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL3NpbWlsYXJpdHkvc2ltaWxhcml0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/similarity/similarity.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/similarity/similarity.component.ts ***!
    \****************************************************/

  /*! exports provided: SimilarityComponent */

  /***/
  function srcAppSimilaritySimilarityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimilarityComponent", function () {
      return SimilarityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _similarity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./similarity.service */
    "./src/app/similarity/similarity.service.ts");
    /* harmony import */


    var smiles_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! smiles-drawer */
    "./node_modules/smiles-drawer/app.js");
    /* harmony import */


    var smiles_drawer__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(smiles_drawer__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);

    var SimilarityComponent =
    /*#__PURE__*/
    function () {
      function SimilarityComponent(similarity, service, prediction, model) {
        _classCallCheck(this, SimilarityComponent);

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

      _createClass(SimilarityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.prediction.name = undefined;
          this.model.name = undefined;
          this.model.version = undefined;
          this.model.trained = false;
          this.spaces = {};
          this.service.getSpaces().subscribe(function (result) {
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              var _loop = function _loop() {
                var space = _step17.value;
                var _iteratorNormalCompletion18 = true;
                var _didIteratorError18 = false;
                var _iteratorError18 = undefined;

                try {
                  var _loop2 = function _loop2() {
                    var version = _step18.value;

                    _this27.service.getInfo(space.spacename, version).subscribe(function (result2) {
                      if (!(space.spacename in _this27.spaces)) {
                        _this27.spaces[space.spacename] = [];
                      }

                      _this27.spaces[space.spacename].push(version);

                      _this27.molsXspace[space.spacename] = result2[0][2];
                    }, function (error) {
                      _this27.molsXspace[space.spacename] = 0;
                    });
                  };

                  for (var _iterator18 = space.versions[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    _loop2();
                  }
                } catch (err) {
                  _didIteratorError18 = true;
                  _iteratorError18 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                      _iterator18.return();
                    }
                  } finally {
                    if (_didIteratorError18) {
                      throw _iteratorError18;
                    }
                  }
                }
              };

              for (var _iterator17 = result[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                _loop();
              }
            } catch (err) {
              _didIteratorError17 = true;
              _iteratorError17 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                  _iterator17.return();
                }
              } finally {
                if (_didIteratorError17) {
                  throw _iteratorError17;
                }
              }
            }
          }, function (error) {
            console.log(error.message);
            alert(error.message);
          });
        }
      }, {
        key: "search",
        value: function search() {
          var _this28 = this;

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
                _this28.checkSearch(result, intervalId);
              } else {
                _this28.predicting = false;
                _this28.error = true;
                _this28.error_message = 'Time out exceeded!';
                clearInterval(intervalId);
              }

              iter += 1;
            }, 4000); // this.result = result.search_results;
            // this.nameSrc = result.obj_nam;
            // this.smileSrc = result.SMILES;
          }, function (error) {
            alert(error.message);
          });
        }
      }, {
        key: "checkSearch",
        value: function checkSearch(searchName, intervalId) {
          var _this29 = this;

          this.service.getSearch(searchName).subscribe(function (result) {
            _this29.result = result.search_results;
            _this29.nameSrc = result.obj_nam;
            _this29.smileSrc = result.SMILES;
            clearInterval(intervalId);
          }, function (error) {
            if (error.error.code !== 0) {
              _this29.predicting = false;
              _this29.error = true;
              _this29.error_message = error.error.message;
              clearInterval(intervalId);
            }
          });
        }
      }, {
        key: "change",
        value: function change(fileList) {
          var file = fileList[0];
          this.similarity.file = file;
          this.similarity.file_info = {};
          this.similarity.file_info['name'] = file.name;
          this.similarity.file_info['size_M'] = (file.size / 1024 / 1024).toFixed(2);
          var extension = file.name.split('.');
          this.similarity.file_info['type_file'] = extension[1];
          var fileReader = new FileReader();
          var self = this;

          fileReader.onloadend = function (x) {
            self.fileContent = fileReader.result;
            self.similarity.file_info['num_mols'] = (self.fileContent.match(/(\$\$\$\$)/g) || []).length;
            var res_array = self.fileContent.match(/>( )*<(.*)>/g);
            var res_dict = {};
            var _iteratorNormalCompletion19 = true;
            var _didIteratorError19 = false;
            var _iteratorError19 = undefined;

            try {
              for (var _iterator19 = res_array[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                var variable = _step19.value;
                var value = variable.replace(/[<> ]*/g, '');

                if (value in res_dict) {
                  res_dict[value] = res_dict[value] + 1;
                } else {
                  res_dict[value] = 1;
                }
              }
            } catch (err) {
              _didIteratorError19 = true;
              _iteratorError19 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                  _iterator19.return();
                }
              } finally {
                if (_didIteratorError19) {
                  throw _iteratorError19;
                }
              }
            }

            self.similarity.file_fields = res_dict;
          };

          fileReader.readAsText(file);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this30 = this;

          this.components.changes.subscribe(function () {
            $('#simlarityTable').DataTable().destroy();

            if (_this30.components !== undefined) {
              _this30.components.forEach(function (child) {
                var options = {
                  'width': 300,
                  'height': 150
                };
                var smilesDrawer = new smiles_drawer__WEBPACK_IMPORTED_MODULE_4__["Drawer"](options);
                smiles_drawer__WEBPACK_IMPORTED_MODULE_4__["parse"](child.nativeElement.textContent, function (tree) {
                  smilesDrawer.draw(tree, child.nativeElement.id, 'light', false);
                }, function (err) {
                  console.log(err);
                });
              });

              var settingsObj = {
                dom: '<"row"<"col-sm-6"B><"col-sm-6"f>>' + '<"row"<"col-sm-12"tr>>' + '<"row"<"col-sm-5"i><"col-sm-7"p>>',
                buttons: [{
                  'extend': 'copy',
                  'text': 'Copy',
                  'className': 'btn-primary',
                  title: ''
                }, {
                  'extend': 'excel',
                  'text': 'Excel',
                  'className': 'btn-primary',
                  title: ''
                }, {
                  'extend': 'pdf',
                  'text': 'Pdf',
                  'className': 'btn-primary',
                  title: ''
                }, {
                  'extend': 'print',
                  'text': 'Print',
                  'className': 'btn-primary',
                  title: ''
                }]
              };
              $('#simlarityTable').DataTable(settingsObj);
            }
          });
        }
      }]);

      return SimilarityComponent;
    }();

    SimilarityComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Similarity"]
      }, {
        type: _similarity_service__WEBPACK_IMPORTED_MODULE_3__["SimilarityService"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('cmp'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], SimilarityComponent.prototype, "components", void 0);
    SimilarityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-similarity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./similarity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/similarity/similarity.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./similarity.component.css */
      "./src/app/similarity/similarity.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Similarity"], _similarity_service__WEBPACK_IMPORTED_MODULE_3__["SimilarityService"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Prediction"], _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]])], SimilarityComponent);
    /***/
  },

  /***/
  "./src/app/similarity/similarity.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/similarity/similarity.service.ts ***!
    \**************************************************/

  /*! exports provided: SimilarityService */

  /***/
  function srcAppSimilaritySimilarityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimilarityService", function () {
      return SimilarityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var SimilarityService =
    /*#__PURE__*/
    function () {
      function SimilarityService(http, similarity) {
        _classCallCheck(this, SimilarityService);

        this.http = http;
        this.similarity = similarity;
      }

      _createClass(SimilarityService, [{
        key: "getSpaces",
        value: function getSpaces() {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_smanage + 'spaces';
          return this.http.get(url);
        }
      }, {
        key: "getSearch",
        value: function getSearch(label) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_smanage + 'search/' + label;
          return this.http.get(url);
        }
      }, {
        key: "getInfo",
        value: function getInfo(label, version) {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_smanage + 'space/' + label + '/version/' + version;
          return this.http.get(url);
        }
      }, {
        key: "search",
        value: function search(space_name, version, num_cutoff, dist_cutoff) {
          var formData = new FormData();
          formData.append('SDF', this.similarity.file);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('numsel', num_cutoff).set('cutoff', dist_cutoff);
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl_search + 'space/' + space_name + '/version/' + version;
          return this.http.put(url, formData, {
            params: params
          });
        }
      }]);

      return SimilarityService;
    }();

    SimilarityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _Globals__WEBPACK_IMPORTED_MODULE_3__["Similarity"]
      }];
    };

    SimilarityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Globals__WEBPACK_IMPORTED_MODULE_3__["Similarity"]])], SimilarityService);
    /***/
  },

  /***/
  "./src/app/training-series/training-series.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/training-series/training-series.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTrainingSeriesTrainingSeriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\n    background: #B8DCED;\n    background-color:#B8DCED;\n}\nul {\n    border-bottom: 2px solid #B8DCED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaW5pbmctc2VyaWVzL3RyYWluaW5nLXNlcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvdHJhaW5pbmctc2VyaWVzL3RyYWluaW5nLXNlcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQjhEQ0VEO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0I4RENFRDtcbn1cbnVsIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0I4RENFRDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/training-series/training-series.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/training-series/training-series.component.ts ***!
    \**************************************************************/

  /*! exports provided: TrainingSeriesComponent */

  /***/
  function srcAppTrainingSeriesTrainingSeriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrainingSeriesComponent", function () {
      return TrainingSeriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");

    var TrainingSeriesComponent =
    /*#__PURE__*/
    function () {
      function TrainingSeriesComponent(model) {
        _classCallCheck(this, TrainingSeriesComponent);

        this.model = model;
        this.objectKeys = Object.keys;
        this.num_of_mols = 0;
      }
      /**
       * Checks if the first step is completed and initites the upload method observable
       */


      _createClass(TrainingSeriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange(fileList) {
          var file = fileList[0];
          this.model.file = file;
          this.model.file_info = {};
          this.model.file_info['name'] = file.name;
          this.model.file_info['size_M'] = (file.size / 1024 / 1024).toFixed(2);
          var extension = file.name.split('.');
          this.model.file_info['type_file'] = extension[1];
          var fileReader = new FileReader();
          var self = this;

          fileReader.onloadend = function (x) {
            self.fileContent = fileReader.result;
            self.model.file_info['num_mols'] = (self.fileContent.match(/(\$\$\$\$)/g) || []).length;
            var res_array = self.fileContent.match(/>( )*<(.*)>/g);
            var res_dict = {};
            var _iteratorNormalCompletion20 = true;
            var _didIteratorError20 = false;
            var _iteratorError20 = undefined;

            try {
              for (var _iterator20 = res_array[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                var variable = _step20.value;
                var value = variable.replace(/[<> ]*/g, '');

                if (value in res_dict) {
                  res_dict[value] = res_dict[value] + 1;
                } else {
                  res_dict[value] = 1;
                }
              }
            } catch (err) {
              _didIteratorError20 = true;
              _iteratorError20 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                  _iterator20.return();
                }
              } finally {
                if (_didIteratorError20) {
                  throw _iteratorError20;
                }
              }
            }

            self.model.file_fields = res_dict;
          };

          fileReader.readAsText(file);
        }
      }]);

      return TrainingSeriesComponent;
    }();

    TrainingSeriesComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }];
    };

    TrainingSeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-training-series',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./training-series.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/training-series/training-series.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./training-series.component.css */
      "./src/app/training-series/training-series.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]])], TrainingSeriesComponent);
    /***/
  },

  /***/
  "./src/app/validations/validations.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/validations/validations.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppValidationsValidationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container div {\n    border: 2px;\n}\n.rotate {\n\n    /* Safari */\n    -webkit-transform: rotate(-90deg);\n    \n    /* Firefox */\n    -moz-transform: rotate(-90deg);\n    \n    /* IE */\n    -ms-transform: rotate(-90deg);\n    \n    /* Opera */\n    -o-transform: rotate(-90deg);\n    \n    float: left;\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLFdBQVc7SUFDWCxpQ0FBaUM7O0lBRWpDLFlBQVk7SUFDWiw4QkFBOEI7O0lBRTlCLE9BQU87SUFDUCw2QkFBNkI7O0lBRTdCLFVBQVU7SUFDViw0QkFBNEI7O0lBRTVCLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciBkaXYge1xuICAgIGJvcmRlcjogMnB4O1xufVxuLnJvdGF0ZSB7XG5cbiAgICAvKiBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgXG4gICAgLyogRmlyZWZveCAqL1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICBcbiAgICAvKiBJRSAqL1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIFxuICAgIC8qIE9wZXJhICovXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICBcbiAgICBmbG9hdDogbGVmdDtcbiAgICBcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/validations/validations.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/validations/validations.component.ts ***!
    \******************************************************/

  /*! exports provided: ValidationsComponent */

  /***/
  function srcAppValidationsValidationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationsComponent", function () {
      return ValidationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Globals */
    "./src/app/Globals.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");

    var ValidationsComponent =
    /*#__PURE__*/
    function () {
      function ValidationsComponent(model, commonService) {
        _classCallCheck(this, ValidationsComponent);

        this.model = model;
        this.commonService = commonService;
        this.modelDocumentation = undefined;
      }

      _createClass(ValidationsComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.modelDocumentation = undefined;
        }
      }]);

      return ValidationsComponent;
    }();

    ValidationsComponent.ctorParameters = function () {
      return [{
        type: _Globals__WEBPACK_IMPORTED_MODULE_2__["Model"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ValidationsComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ValidationsComponent.prototype, "version", void 0);
    ValidationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-validations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./validations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/validations/validations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./validations.component.css */
      "./src/app/validations/validations.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Globals__WEBPACK_IMPORTED_MODULE_2__["Model"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])], ValidationsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/gemmaportaramirez/Desktop/work/Projects/flameWeb2/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map