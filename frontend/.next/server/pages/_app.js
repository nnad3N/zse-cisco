(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./assets/styles/GlobalStyle.js":
/*!**************************************!*\
  !*** ./assets/styles/GlobalStyle.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": function() { return /* binding */ GlobalStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{box-sizing:border-box;margin:0;padding:0;}html{font-size:62.5%;}body{font-family:'Open Sans',sans-serif;background-color:", ";}a,button{font-family:'Open Sans',sans-serif;font-size:", ";font-weight:600;cursor:pointer;}a{text-decoration:none;}h1{font-size:", ";font-weight:700;}h2{font-size:", ";font-weight:400;}h3{font-size:", ";font-weight:700;}h4{font-size:", ";font-weight:700;}h5{font-size:", ";font-weight:600;}h6{font-size:", ";}p{font-size:", ";font-weight:400;text-align:justify;}ul{text-decoration:none;}li{font-size:", ";}"], ({
  theme
}) => theme.colors.backgroundColor, ({
  theme
}) => theme.fontSize.body, ({
  theme
}) => theme.fontSize.header, ({
  theme
}) => theme.fontSize.subHeader, ({
  theme
}) => theme.fontSize.navHeader, ({
  theme
}) => theme.fontSize.captionLarge, ({
  theme
}) => theme.fontSize.captionMedium, ({
  theme
}) => theme.fontSize.captionSmall, ({
  theme
}) => theme.fontSize.body, ({
  theme,
  nav
}) => nav ? theme.fontSize.navList : theme.fontSize.body);

/***/ }),

/***/ "./assets/styles/theme.js":
/*!********************************!*\
  !*** ./assets/styles/theme.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    backgroundColor: '#E8EBF1',
    mainColor: '#0E274D',
    accentColor: '#00BCEA'
  },
  fontSize: {
    header: '4.8rem',
    navHeader: '3.6rem',
    navList: '1.8rem',
    subHeader: '2rem',
    captionLarge: '2.4rem',
    captionMedium: '1.3rem',
    captionSmall: '1.2rem',
    body: '1.6rem',
    bodySmall: '1.4rem'
  },
  dimensions: {
    padding: '10vw',
    paddingNarrow: '15vw',
    heroCoursePadding: '3rem 5rem',
    heroAcademyPadding: '4rem 4.5rem'
  },
  utils: {
    borderRadius: '6px',
    boxShadow: '0px 4px 14px  rgba(0, 0, 0, 0.1)'
  }
};

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../assets/styles/theme */ "./assets/styles/theme.js");
/* harmony import */ var _assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../assets/styles/GlobalStyle */ "./assets/styles/GlobalStyle.js");


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Store Strapi Global object in context

const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: _assets_styles_theme__WEBPACK_IMPORTED_MODULE_7__.theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
        value: global,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__.GlobalStyle, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const global = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchAPI)('/global'); // Pass the data to our page via props

  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
} // Helper to make GET requests to Strapi

async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

/***/ }),

/***/ "./utils/media.js":
/*!************************!*\
  !*** ./utils/media.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./utils/api.js");

function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith('/') ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(media.url) : media.url;
  return imageUrl;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiYm9keSIsImhlYWRlciIsInN1YkhlYWRlciIsIm5hdkhlYWRlciIsImNhcHRpb25MYXJnZSIsImNhcHRpb25NZWRpdW0iLCJjYXB0aW9uU21hbGwiLCJuYXYiLCJuYXZMaXN0Iiwid2hpdGUiLCJibGFjayIsIm1haW5Db2xvciIsImFjY2VudENvbG9yIiwiYm9keVNtYWxsIiwiZGltZW5zaW9ucyIsInBhZGRpbmciLCJwYWRkaW5nTmFycm93IiwiaGVyb0NvdXJzZVBhZGRpbmciLCJoZXJvQWNhZGVteVBhZGRpbmciLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiZGVmYXVsdCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk15QXBwIiwiZ2xvYmFsIiwiYXBwUHJvcHMiLCJmZXRjaEFQSSIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJyZXF1ZXN0VXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZ2V0U3RyYXBpTWVkaWEiLCJtZWRpYSIsImltYWdlVXJsIiwidXJsIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUdBQTZD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Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgXHJcbn1cclxuXHJcbmEsIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YkhlYWRlcn07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2SGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2V9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICAgXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lLCBuYXYgfSkgPT4gKG5hdiA/IHRoZW1lLmZvbnRTaXplLm5hdkxpc3QgOiB0aGVtZS5mb250U2l6ZS5ib2R5KX07XHJcbn1cclxuXHJcbmA7XHJcbiIsImV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBibGFjazogJyMwMDAwMDAnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0U4RUJGMScsXHJcbiAgICBtYWluQ29sb3I6ICcjMEUyNzREJyxcclxuICAgIGFjY2VudENvbG9yOiAnIzAwQkNFQScsXHJcbiAgfSxcclxuICBmb250U2l6ZToge1xyXG4gICAgaGVhZGVyOiAnNC44cmVtJyxcclxuICAgIG5hdkhlYWRlcjogJzMuNnJlbScsXHJcbiAgICBuYXZMaXN0OiAnMS44cmVtJyxcclxuICAgIHN1YkhlYWRlcjogJzJyZW0nLFxyXG4gICAgY2FwdGlvbkxhcmdlOiAnMi40cmVtJyxcclxuICAgIGNhcHRpb25NZWRpdW06ICcxLjNyZW0nLFxyXG4gICAgY2FwdGlvblNtYWxsOiAnMS4ycmVtJyxcclxuICAgIGJvZHk6ICcxLjZyZW0nLFxyXG4gICAgYm9keVNtYWxsOiAnMS40cmVtJyxcclxuICB9LFxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHBhZGRpbmc6ICcxMHZ3JyxcclxuICAgIHBhZGRpbmdOYXJyb3c6ICcxNXZ3JyxcclxuICAgIGhlcm9Db3Vyc2VQYWRkaW5nOiAnM3JlbSA1cmVtJyxcclxuICAgIGhlcm9BY2FkZW15UGFkZGluZzogJzRyZW0gNC41cmVtJyxcclxuICB9LFxyXG4gIHV0aWxzOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDRweCAxNHB4ICByZ2JhKDAsIDAsIDAsIDAuMSknLFxyXG4gIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcvdXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy9hc3NldHMvc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcvYXNzZXRzL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD57LyogPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5mYXZpY29uKX0gLz4gKi99PC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWx9PlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XHJcbi8vIGhhdmUgZ2V0U3RhdGljUHJvcHMuIFNvIGFydGljbGUsIGNhdGVnb3J5IGFuZCBob21lIHBhZ2VzIHN0aWxsIGdldCBTU0cuXHJcbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcclxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAvLyBGZXRjaCBnbG9iYWwgc2l0ZSBzZXR0aW5ncyBmcm9tIFN0cmFwaVxyXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGZldGNoQVBJKCcvZ2xvYmFsJyk7XHJcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyAuLi5hcHBQcm9wcywgcGFnZVByb3BzOiB7IGdsb2JhbCB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gJycpIHtcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnfSR7cGF0aH1gO1xufVxuXG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCkge1xuICBjb25zdCByZXF1ZXN0VXJsID0gZ2V0U3RyYXBpVVJMKHBhdGgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gJy4vYXBpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKG1lZGlhKSB7XG4gIGNvbnN0IGltYWdlVXJsID0gbWVkaWEudXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGdldFN0cmFwaVVSTChtZWRpYS51cmwpIDogbWVkaWEudXJsO1xuICByZXR1cm4gaW1hZ2VVcmw7XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=