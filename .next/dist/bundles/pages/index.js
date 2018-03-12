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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown__ = __webpack_require__("react-markdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Metadata_js__ = __webpack_require__("./comps/Metadata.js");
var _jsxFileName = '/Users/esteladiaz/Desktop/fuckyou/next-play/comps/Header.js';





var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'nav', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Metadata_js__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/work', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'Work'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        'About'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./comps/Hero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/esteladiaz/Desktop/fuckyou/next-play/comps/Hero.js";



var Hero = function Hero() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "hero", __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h1",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      "Hi, Im Estela."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h2",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      "Im a Front-End Developer based in San Francisco, CA."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      "Check back soon to see some of my work! I pushed this live with Now CLI on 2/28, and will be ready to showcase by 3/3."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      "Until then, read a little bit about me under the  ",
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: "/about", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { className: "aboutLink", __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          "about"
        )
      ),
      " section."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      "Or, follow me around the internet:"
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),

/***/ "./comps/Metadata.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/esteladiaz/Desktop/fuckyou/next-play/comps/Metadata.js";



var Metadata = function Metadata() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charSet: "utf-8", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: "Front-End Developer based in San Francisco, CA.", __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:card", content: "summary", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:site", content: "@_diazela", __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:title", content: "Hi, I'm Estela <3", __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:description", content: "Front-End Developer / professional extrovert based in San Francisco, CA.", __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "twitter:image:src", content: "https://github.com/esteladiaz/esteladiaz.github.io/raw/master/statics/img/twittercard.jpg", __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono", rel: "stylesheet", __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "title",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      "Estela Diaz"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { defer: true, src: "https://use.fontawesome.com/releases/v5.0.8/js/all.js", __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Metadata);

/***/ }),

/***/ "./comps/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./comps/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_glamor__);
var _jsxFileName = '/Users/esteladiaz/Desktop/fuckyou/next-play/comps/MyLayout.js';




var layoutStyle = {
  margin: 50,
  padding: 50,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    props.children,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'banana', src: '/static/img/banana.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./comps/Social.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/esteladiaz/Desktop/fuckyou/next-play/comps/Social.js";



var Social = function Social() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "social", __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "//twitter.com/_diazela", __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fab fa-twitter", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "//www.facebook.com/diazela", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fab fa-facebook-f", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "//www.instagram.com/diazela/", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fab fa-instagram", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "//github.com/esteladiaz/", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fab fa-github", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "mailto: estela@diazela.com", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fas fa-envelope", __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Social);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comps_MyLayout_js__ = __webpack_require__("./comps/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown__ = __webpack_require__("react-markdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comps_Metadata_js__ = __webpack_require__("./comps/Metadata.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comps_Hero_js__ = __webpack_require__("./comps/Hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comps_Social_js__ = __webpack_require__("./comps/Social.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_css__);
var _jsxFileName = '/Users/esteladiaz/Desktop/fuckyou/next-play/pages/index.js';










/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__comps_MyLayout_js__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__comps_Metadata_js__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'hiimhere', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      'hi'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__comps_Hero_js__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__comps_Social_js__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    })
  );
});

/***/ }),

/***/ "./style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "glamor":
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map