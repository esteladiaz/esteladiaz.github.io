module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-markdown"
var external__react_markdown_ = __webpack_require__(2);
var external__react_markdown__default = /*#__PURE__*/__webpack_require__.n(external__react_markdown_);

// CONCATENATED MODULE: ./comps/Header.js





var styles = {
  marginRight: 20,
  fontFamily: 'Roboto Mono',
  textDecorationLine: 'none'
};

var Header_Header = function Header() {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-1174385295'
    },
    external__react__default.a.createElement(
      link__default.a,
      { href: '/' },
      external__react__default.a.createElement(
        'a',
        { style: styles, className: 'jsx-1174385295'
        },
        'Home'
      )
    ),
    external__react__default.a.createElement(
      link__default.a,
      { href: '/work' },
      external__react__default.a.createElement(
        'a',
        { style: styles, className: 'jsx-1174385295'
        },
        'Work'
      )
    ),
    external__react__default.a.createElement(
      link__default.a,
      { href: '/about' },
      external__react__default.a.createElement(
        'a',
        { style: styles, className: 'jsx-1174385295'
        },
        'About'
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1174385295',
      css: ['a.jsx-1174385295{color:black;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}']
    })
  );
};

/* harmony default export */ var comps_Header = (Header_Header);
// CONCATENATED MODULE: ./comps/MyLayout.js




var layoutStyle = {
  margin: 50,
  padding: 50,
  border: '1px solid #DDD'
};

var MyLayout_Layout = function Layout(props) {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-2125341318'
    },
    external__react__default.a.createElement(comps_Header, null),
    props.children,
    external__react__default.a.createElement(style__default.a, {
      styleId: '2125341318',
      css: ['body{background-color:#f7ccc7;}', '.markdown{font-family:\'Roboto\',sans-serif;}', '.markdown a{text-decoration:none;color:blue;font-family:\'Roboto Mono\',sans-serif;}', '.markdown a:hover{opacity:0.6;}', '.markdown h3{margin:0;padding:0;text-transform:uppercase;}']
    })
  );
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comps_MyLayout_js__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["default"] = (function () {
   return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__comps_MyLayout_js__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
         'p',
         null,
         'lol hi'
      )
   );
});

/***/ })
/******/ ]);