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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../assets/styles/theme */ "./assets/styles/theme.js");
/* harmony import */ var _assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../assets/styles/GlobalStyle */ "./assets/styles/GlobalStyle.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    global
  } = pageProps;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_9___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, undefined);
  }

  const {
    defaultSeo
  } = global;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_utils_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(global.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_5__.DefaultSeo, {
      titleTemplate: `%s | ${defaultSeo.metaTitleSuffix}`,
      title: defaultSeo.metaTitle,
      description: defaultSeo.metaDescription,
      openGraph: {
        images: Object.values(defaultSeo.sharedImage.formats).map(image => {
          return {
            url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(image),
            width: image.width,
            height: image.height
          };
        })
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: _assets_styles_theme__WEBPACK_IMPORTED_MODULE_7__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__.GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const global = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.fetchAPI)('/global'); // Pass the data to our page via props

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

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZXJyb3JcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImJvZHkiLCJoZWFkZXIiLCJzdWJIZWFkZXIiLCJuYXZIZWFkZXIiLCJjYXB0aW9uTGFyZ2UiLCJjYXB0aW9uTWVkaXVtIiwiY2FwdGlvblNtYWxsIiwibmF2IiwibmF2TGlzdCIsIndoaXRlIiwiYmxhY2siLCJtYWluQ29sb3IiLCJhY2NlbnRDb2xvciIsImJvZHlTbWFsbCIsImRpbWVuc2lvbnMiLCJwYWRkaW5nIiwicGFkZGluZ05hcnJvdyIsImhlcm9Db3Vyc2VQYWRkaW5nIiwiaGVyb0FjYWRlbXlQYWRkaW5nIiwidXRpbHMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImRlZmF1bHQiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiTXlBcHAiLCJnbG9iYWwiLCJkZWZhdWx0U2VvIiwiZ2V0U3RyYXBpTWVkaWEiLCJmYXZpY29uIiwibWV0YVRpdGxlU3VmZml4IiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiT2JqZWN0IiwidmFsdWVzIiwic2hhcmVkSW1hZ2UiLCJmb3JtYXRzIiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImFwcFByb3BzIiwiZmV0Y2hBUEkiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm1lZGlhIiwiaW1hZ2VVcmwiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1R0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUVPLE1BQU1BLFdBQVcsR0FBR0Msb0VBQUgsOGhCQWNBLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxlQWQ1QixFQW9CUCxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLFFBQU4sQ0FBZUMsSUFwQnZCLEVBOEJQLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csUUFBTixDQUFlRSxNQTlCdkIsRUFtQ1AsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxRQUFOLENBQWVHLFNBbkN2QixFQXdDUCxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLFFBQU4sQ0FBZUksU0F4Q3ZCLEVBNkNQLENBQUM7QUFBRVA7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csUUFBTixDQUFlSyxZQTdDdkIsRUFtRFAsQ0FBQztBQUFFUjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRyxRQUFOLENBQWVNLGFBbkR2QixFQXlEUCxDQUFDO0FBQUVUO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLFFBQU4sQ0FBZU8sWUF6RHZCLEVBOERQLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxJQTlEdkIsRUF3RVAsQ0FBQztBQUFFSixPQUFGO0FBQVNXO0FBQVQsQ0FBRCxLQUFxQkEsR0FBRyxH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anMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgXHJcbn1cclxuXHJcbmEsIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YkhlYWRlcn07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2SGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2V9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICAgXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lLCBuYXYgfSkgPT4gKG5hdiA/IHRoZW1lLmZvbnRTaXplLm5hdkxpc3QgOiB0aGVtZS5mb250U2l6ZS5ib2R5KX07XHJcbn1cclxuXHJcbmA7XHJcbiIsImV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBibGFjazogJyMwMDAwMDAnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0U4RUJGMScsXHJcbiAgICBtYWluQ29sb3I6ICcjMEUyNzREJyxcclxuICAgIGFjY2VudENvbG9yOiAnIzAwQkNFQScsXHJcbiAgfSxcclxuICBmb250U2l6ZToge1xyXG4gICAgaGVhZGVyOiAnNC44cmVtJyxcclxuICAgIG5hdkhlYWRlcjogJzMuNnJlbScsXHJcbiAgICBuYXZMaXN0OiAnMS44cmVtJyxcclxuICAgIHN1YkhlYWRlcjogJzJyZW0nLFxyXG4gICAgY2FwdGlvbkxhcmdlOiAnMi40cmVtJyxcclxuICAgIGNhcHRpb25NZWRpdW06ICcxLjNyZW0nLFxyXG4gICAgY2FwdGlvblNtYWxsOiAnMS4ycmVtJyxcclxuICAgIGJvZHk6ICcxLjZyZW0nLFxyXG4gICAgYm9keVNtYWxsOiAnMS40cmVtJyxcclxuICB9LFxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHBhZGRpbmc6ICcxMHZ3JyxcclxuICAgIHBhZGRpbmdOYXJyb3c6ICcxNXZ3JyxcclxuICAgIGhlcm9Db3Vyc2VQYWRkaW5nOiAnM3JlbSA1cmVtJyxcclxuICAgIGhlcm9BY2FkZW15UGFkZGluZzogJzRyZW0gNC41cmVtJyxcclxuICB9LFxyXG4gIHV0aWxzOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDRweCAxNHB4ICByZ2JhKDAsIDAsIDAsIDAuMSknLFxyXG4gIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcvdXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy9hc3NldHMvc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcvYXNzZXRzL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcic7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzO1xyXG4gIGlmIChnbG9iYWwgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZGVmYXVsdFNlbyB9ID0gZ2xvYmFsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+ezxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtnZXRTdHJhcGlNZWRpYShnbG9iYWwuZmF2aWNvbil9IC8+fTwvSGVhZD5cclxuICAgICAgPERlZmF1bHRTZW9cclxuICAgICAgICB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke2RlZmF1bHRTZW8ubWV0YVRpdGxlU3VmZml4fWB9XHJcbiAgICAgICAgdGl0bGU9e2RlZmF1bHRTZW8ubWV0YVRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZWZhdWx0U2VvLm1ldGFEZXNjcmlwdGlvbn1cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIGltYWdlczogT2JqZWN0LnZhbHVlcyhkZWZhdWx0U2VvLnNoYXJlZEltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB1cmw6IGdldFN0cmFwaU1lZGlhKGltYWdlKSxcclxuICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxyXG4vLyBoYXZlIGdldFN0YXRpY1Byb3BzLiBTbyBbWy4uLnNsdWddXSBwYWdlcyBzdGlsbCBnZXQgU1NHLlxyXG4vLyBIb3BlZnVsbHkgd2UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGdldFN0YXRpY1Byb3BzIG9uY2UgdGhpcyBpc3N1ZSBpcyBmaXhlZDpcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcclxuICBjb25zdCBnbG9iYWwgPSBhd2FpdCBmZXRjaEFQSSgnL2dsb2JhbCcpO1xyXG4gIC8vIFBhc3MgdGhlIGRhdGEgdG8gb3VyIHBhZ2UgdmlhIHByb3BzXHJcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWwgfSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YDtcbn1cblxuLy8gSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgpIHtcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCBpbWFnZVVybCA9IG1lZGlhLnVybC5zdGFydHNXaXRoKCcvJykgPyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKSA6IG1lZGlhLnVybDtcbiAgcmV0dXJuIGltYWdlVXJsO1xufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==