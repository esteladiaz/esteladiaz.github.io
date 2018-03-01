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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./comps/MyLayout.js + 1 modules
var MyLayout = __webpack_require__(3);

// EXTERNAL MODULE: external "react-markdown"
var external__react_markdown_ = __webpack_require__(2);
var external__react_markdown__default = /*#__PURE__*/__webpack_require__.n(external__react_markdown_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./comps/Metadata.js



var Metadata_Metadata = function Metadata() {
  return external__react__default.a.createElement(
    "div",
    null,
    external__react__default.a.createElement("meta", { charSet: "utf-8" }),
    external__react__default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    external__react__default.a.createElement("meta", { name: "description", content: "Front-End Developer based in San Francisco, CA." }),
    external__react__default.a.createElement("meta", { name: "twitter:card", content: "summary" }),
    external__react__default.a.createElement("meta", { name: "twitter:site", content: "@_diazela" }),
    external__react__default.a.createElement("meta", { name: "twitter:title", content: "Hi, I'm Estela <3" }),
    external__react__default.a.createElement("meta", { name: "twitter:description", content: "Front-End Developer and generalist based in San Francisco, CA." }),
    external__react__default.a.createElement("meta", { name: "twitter:image:src", content: "https://github.com/esteladiaz/esteladiaz.github.io/raw/master/statics/img/twittercard.jpg" }),
    external__react__default.a.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono", rel: "stylesheet" }),
    external__react__default.a.createElement(
      "title",
      null,
      "Estela Diaz"
    )
  );
};

/* harmony default export */ var comps_Metadata = (Metadata_Metadata);
// CONCATENATED MODULE: ./pages/index.js






/* harmony default export */ var pages = __webpack_exports__["default"] = (function (props) {
  return external__react__default.a.createElement(
    MyLayout["a" /* default */],
    null,
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement(comps_Metadata, null)
    ),
    external__react__default.a.createElement(
      'h1',
      null,
      props.url.query.title
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'markdown' },
      external__react__default.a.createElement(external__react_markdown__default.a, { source: '\n  # Hi\n\n  I\'m a Next.js app hosted with Google. I\'m going to show you how awesome Estela is soon.\n\n  ### WORK IN PROGRESS\n       ' }),
      external__react__default.a.createElement(
        'p',
        { className: 'example' },
        'element test'
      )
    )
  );
});

/***/ })
/******/ ]);