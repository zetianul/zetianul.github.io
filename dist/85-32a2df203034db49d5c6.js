(self["webpackChunkzetianul_github_io"] = self["webpackChunkzetianul_github_io"] || []).push([[85],{

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ mobxDemo
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/mobxDemo/style.less
var style = __webpack_require__(339);
;// CONCATENATED MODULE: ./src/pages/mobxDemo/style.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);



/* harmony default export */ const mobxDemo_style = (style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/pages/mobxDemo/index.tsx


/* harmony default export */ const mobxDemo = (function (props) {
  console.log('welcome to the mobx demo');
  var main = (0,react.useMemo)(function () {
    return function () {
      alert(123);
    };
  });
  return /*#__PURE__*/react.createElement("div", null, "hi mobx", /*#__PURE__*/react.createElement("button", {
    onClick: main
  }, "\u8FD9\u662F\u4E2A\u6309\u94AE"), /*#__PURE__*/react.createElement("div", {
    className: "tetris"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  })));
});

/***/ }),

/***/ 339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tetris .container {\n  margin: auto;\n  width: 640px;\n  height: 800px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);