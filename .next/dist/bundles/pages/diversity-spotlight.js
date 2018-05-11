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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type.\n| body {\n|   background-color: #fefefe;\n|   font-family: 'Roboto', sans-serif;");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);



var Metadata = function Metadata() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charSet: "utf-8" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: "Genentech Intranet" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:card", content: "summary" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:site", content: "@_diazela" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:title", content: "Genentech Intranet" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:description", content: "Genentech Intranet" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:image:src", content: "Genentech Intranet" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500i,700,700i", rel: "stylesheet" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css", integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp", crossorigin: "anonymous" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "title",
      null,
      "Genentech Intranet | Diversity & Inclusion"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { defer: true, src: "https://use.fontawesome.com/releases/v5.0.8/js/all.js" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
      src: "https://code.jquery.com/jquery-3.3.1.min.js",
      integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
      crossorigin: "anonymous" })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Metadata);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./comps/Nav.js



var Nav_Nav = function Nav() {
	return external__react__default.a.createElement(
		"nav",
		null,
		external__react__default.a.createElement(
			"div",
			{ className: "nav-wrapper" },
			external__react__default.a.createElement(
				link__default.a,
				{ href: "/" },
				external__react__default.a.createElement(
					"a",
					null,
					external__react__default.a.createElement("img", { className: "brand-logo right", src: "/static/img/genentech.svg" })
				)
			),
			external__react__default.a.createElement(
				"ul",
				{ id: "nav-mobile", className: "left hide-on-med-and-down" },
				external__react__default.a.createElement(
					"li",
					null,
					external__react__default.a.createElement(
						"div",
						{ className: "dropdown" },
						external__react__default.a.createElement(
							link__default.a,
							null,
							external__react__default.a.createElement(
								"a",
								null,
								"Our Company  ",
								external__react__default.a.createElement("i", { "class": "fa fa-angle-down" })
							)
						),
						external__react__default.a.createElement(
							"div",
							{ className: "dropdown-content" },
							external__react__default.a.createElement(
								"ul",
								null,
								external__react__default.a.createElement(
									"li",
									null,
									external__react__default.a.createElement(
										link__default.a,
										{ href: "#" },
										external__react__default.a.createElement(
											"a",
											null,
											"Leadership & Organization"
										)
									)
								),
								external__react__default.a.createElement(
									"li",
									null,
									external__react__default.a.createElement(
										link__default.a,
										{ href: "#" },
										external__react__default.a.createElement(
											"a",
											null,
											"Corporate Goals"
										)
									)
								),
								external__react__default.a.createElement(
									"li",
									null,
									external__react__default.a.createElement(
										link__default.a,
										{ href: "#" },
										external__react__default.a.createElement(
											"a",
											null,
											"Company Policy & Guidelines"
										)
									)
								)
							)
						)
					)
				),
				external__react__default.a.createElement(
					"li",
					null,
					external__react__default.a.createElement(
						"div",
						{ className: "dropdown" },
						external__react__default.a.createElement(
							link__default.a,
							{ href: "/" },
							external__react__default.a.createElement(
								"a",
								null,
								"Diversity & Inclusion  ",
								external__react__default.a.createElement("i", { "class": "fa fa-angle-down" })
							)
						),
						external__react__default.a.createElement(
							"div",
							{ className: "dropdown-content" },
							external__react__default.a.createElement(
								"ul",
								null,
								external__react__default.a.createElement(
									"li",
									null,
									external__react__default.a.createElement(
										link__default.a,
										{ href: "/goals" },
										external__react__default.a.createElement(
											"a",
											null,
											"Goals"
										)
									)
								),
								external__react__default.a.createElement(
									"li",
									null,
									external__react__default.a.createElement(
										link__default.a,
										{ href: "/community" },
										external__react__default.a.createElement(
											"a",
											null,
											"Community"
										)
									)
								),
								external__react__default.a.createElement(
									"li",
									null,
									external__react__default.a.createElement(
										link__default.a,
										{ href: "/resources" },
										external__react__default.a.createElement(
											"a",
											null,
											"Resources"
										)
									)
								),
								external__react__default.a.createElement(
									"li",
									null,
									external__react__default.a.createElement(
										link__default.a,
										{ href: "/calendar" },
										external__react__default.a.createElement(
											"a",
											null,
											"Calendar"
										)
									)
								)
							)
						)
					)
				),
				external__react__default.a.createElement(
					"li",
					null,
					external__react__default.a.createElement(
						link__default.a,
						{ href: "#" },
						external__react__default.a.createElement(
							"a",
							null,
							"Gene History"
						)
					)
				),
				external__react__default.a.createElement(
					"li",
					null,
					external__react__default.a.createElement(
						link__default.a,
						{ href: "#" },
						external__react__default.a.createElement(
							"a",
							null,
							"Giving Back"
						)
					)
				),
				external__react__default.a.createElement(
					"li",
					null,
					external__react__default.a.createElement(
						link__default.a,
						{ href: "#" },
						external__react__default.a.createElement(
							"a",
							null,
							"Working Globally"
						)
					)
				)
			)
		)
	);
};

/* harmony default export */ var comps_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./comps/MyLayout.js



var MyLayout_Layout = function Layout(props) {
  return external__react__default.a.createElement(
    'div',
    null,
    external__react__default.a.createElement(comps_Nav, null),
    external__react__default.a.createElement(
      'div',
      null,
      props.children
    )
  );
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materialize_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__materialize_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__materialize_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__materialize_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comps_Metadata_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comps_MyLayout_js__ = __webpack_require__(6);
throw new Error("Cannot find module \"../comps/ContentSpotlight.js\"");




// import Markdown from 'react-markdown'







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_8__comps_MyLayout_js__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__comps_Metadata_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__comps_ContentSpotlight_js___default.a, null)
  );
});

/***/ })
/******/ ]);