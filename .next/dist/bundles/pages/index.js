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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./comps/Header.js



var linkStyle = {
  marginRight: 15
};

var Header_Header = function Header() {
  return external__react__default.a.createElement(
    "div",
    null,
    external__react__default.a.createElement(
      link__default.a,
      { href: "/" },
      external__react__default.a.createElement(
        "a",
        { style: linkStyle },
        "Home"
      )
    ),
    external__react__default.a.createElement(
      link__default.a,
      { href: "/about" },
      external__react__default.a.createElement(
        "a",
        { style: linkStyle },
        "About"
      )
    )
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
    { style: layoutStyle },
    external__react__default.a.createElement(comps_Header, null),
    props.children
  );
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps_MyLayout_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__comps_MyLayout_js__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'description', content: 'Front-End Developer based in San Francisco, CA.', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'twitter:card', content: 'summary_large_image', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'twitter:site', content: '@_diazela', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'twitter:title', content: 'Estela Diaz: Front-End Developer', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'twitter:description', content: 'Based in San Francisco, CA. Let\'s build things together.', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'twitter:image:src', content: '../statics/img/twittercard.jpg', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono', rel: 'stylesheet', className: 'jsx-3911218663'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'title',
        {
          className: 'jsx-3911218663'
        },
        'Estela Diaz'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        className: 'jsx-3911218663'
      },
      props.url.query.title
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3911218663' + ' ' + 'markdown'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_markdown___default.a, { source: '\n  # Hi\n\n  I\'m a Next.js app hosted with Google. I\'m going to show you how awesome Estela is soon.\n\n  ### WORK IN PROGRESS\n       ' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3911218663' + ' ' + 'example'
        },
        'element test'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3911218663',
      css: ['.markdown{font-family:\'Roboto\',sans-serif;}', '.markdown a{text-decoration:none;color:blue;font-family:\'Roboto Mono\',sans-serif;}', '.markdown a:hover{opacity:0.6;}', '.markdown h3{margin:0;padding:0;text-transform:uppercase;}']
    })
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);