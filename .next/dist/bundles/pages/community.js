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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "animejs"
var external__animejs_ = __webpack_require__(3);
var external__animejs__default = /*#__PURE__*/__webpack_require__.n(external__animejs_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./style.css
var style = __webpack_require__(4);

// EXTERNAL MODULE: ./materialize.css
var materialize = __webpack_require__(7);
var materialize_default = /*#__PURE__*/__webpack_require__.n(materialize);

// EXTERNAL MODULE: ./materialize.js
var materialize_0 = __webpack_require__(8);
var materialize_default_0 = /*#__PURE__*/__webpack_require__.n(materialize_0);

// EXTERNAL MODULE: ./comps/Metadata.js
var Metadata = __webpack_require__(5);

// EXTERNAL MODULE: ./comps/MyLayout.js + 1 modules
var MyLayout = __webpack_require__(6);

// CONCATENATED MODULE: ./comps/ContentCommunity.js



var ContentCommunity_ContentCommunity = function ContentCommunity() {
	return external__react__default.a.createElement(
		"div",
		{ className: "container" },
		external__react__default.a.createElement(
			"h1",
			null,
			"Community"
		),
		external__react__default.a.createElement(
			"div",
			{ className: "whole" },
			external__react__default.a.createElement(
				"p",
				null,
				"Strong corporate communities flourish when employees feel connected to their work, to Genenteccode .h, and to its surrounding neighborhoods. Genentech is committed to building and maintaining strong ties to a diverse organization in order to strengthen our company and the communities in which we live, work, and conduct business. Through this strategic outreach, we aim to support diversity efforts in our local communities, influence science as a discipline, assist in recruiting efforts and work towards cultural competency in healthcare."
			)
		),
		external__react__default.a.createElement(
			"div",
			{ className: "full" },
			external__react__default.a.createElement(
				"div",
				{ className: "left" },
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"The Genentech Community"
				),
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"Community"
				),
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"Education"
				),
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"Resources"
				)
			),
			external__react__default.a.createElement(
				"div",
				{ className: "right" },
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"Diversity Spotlight"
				),
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"Worklife and Career Flexibility"
				),
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"GlobeSmart"
				),
				external__react__default.a.createElement(
					"div",
					{ className: "card" },
					"Mentoring Services"
				)
			)
		),
		external__react__default.a.createElement(
			"div",
			null,
			external__react__default.a.createElement(
				"h1",
				null,
				"Diversity Spotlight"
			),
			external__react__default.a.createElement(
				"section",
				null,
				external__react__default.a.createElement(
					"div",
					{ className: "full" },
					external__react__default.a.createElement(
						"p",
						null,
						"Diversity and Inclusion give us much to be proud of at Genentech. We are regularly involved in initiatives to foster the professional development of our employees, to serve the communities which surround us, and to ensure the inclusive nature of the Genentech community.l This is a vital part of the Genentech community and we welcome you to join us."
					)
				)
			)
		)
	);
};

/* harmony default export */ var comps_ContentCommunity = (ContentCommunity_ContentCommunity);
// CONCATENATED MODULE: ./pages/community.js




// import Markdown from 'react-markdown'







/* harmony default export */ var community = __webpack_exports__["default"] = (function (props) {
  return external__react__default.a.createElement(
    MyLayout["a" /* default */],
    null,
    external__react__default.a.createElement(Metadata["a" /* default */], null),
    external__react__default.a.createElement(comps_ContentCommunity, null)
  );
});

/***/ })
/******/ ]);