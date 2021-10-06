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

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{box-sizing:border-box;margin:0;padding:0;}html{font-size:10px;", "{font-size:9px;}", "{font-size:8px;}", "{font-size:6px;}", "{font-size:18px;}}body{font-family:'Open Sans',sans-serif;background-color:", ";}a,button{font-family:'Open Sans',sans-serif;font-size:", ";font-weight:600;cursor:pointer;}a{text-decoration:none;}h1{font-size:", ";font-weight:700;}h2{font-size:", ";font-weight:400;}h3{font-size:", ";color:", ";font-weight:700;}h4{font-size:", ";font-weight:700;}h5{font-size:", ";font-weight:600;}h6{font-size:", ";}p{font-size:", ";font-weight:400;text-align:justify;}ul{text-decoration:none;}li{a{color:white;font-size:", ";&:visited{color:white;}}}"], ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.mq.mobileMedium, ({
  theme
}) => theme.mq.mobileSmall, ({
  theme
}) => theme.mq.desktopTall, ({
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
}) => theme.colors.white, ({
  theme
}) => theme.fontSize.captionLarge, ({
  theme
}) => theme.fontSize.captionMedium, ({
  theme
}) => theme.fontSize.captionSmall, ({
  theme
}) => theme.fontSize.body, ({
  theme
}) => theme.fontSize.body);

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
    subText: '1.8rem',
    captionLarge: '2.4rem',
    captionMedium: '1.3rem',
    captionSmall: '1.2rem',
    body: '1.6rem',
    bodySmall: '1.4rem'
  },
  dimensions: {
    padding: '10vw',
    paddingMobile: '5vw',
    paddingNarrow: '15vw',
    heroCoursePadding: '3rem 5rem',
    cardPaddingMobile: '5vw',
    heroAcademyPadding: '4rem 4.5rem',
    navigationPadding: '15vh 12vw',
    navigationColumnGap: '15vw',
    navigationRowGap: '6rem'
  },
  utils: {
    borderRadius: '6px',
    boxShadow: '0px 4px 14px  rgba(0, 0, 0, 0.1)'
  },
  mq: {
    heroInstructors: `@media (min-width: 1438px)`,
    desktop: `@media (max-width: 1550px)`,
    desktopTall: `@media (min-height: 1100px) and (min-width: 850px) and (max-width: 1400px)`,
    desktopWide: `@media (min-width: 1400px)`,
    laptop: `@media (max-width: 1224px)`,
    tablet: `@media (max-width: 850px)`,
    mobileLarge: `@media (max-width: 568px)`,
    mobileMedium: `@media (max-width: 450px)`,
    mobileSmall: `@media (max-width: 350px)`
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/styles/theme */ "./assets/styles/theme.js");
/* harmony import */ var assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/styles/GlobalStyle */ "./assets/styles/GlobalStyle.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);


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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_10___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, undefined);
  }

  const {
    favicon,
    defaultSeo: {
      metaTitleSuffix,
      metaTitle,
      metaDescription,
      sharedImage
    }
  } = global;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_utils_media__WEBPACK_IMPORTED_MODULE_5__.getStrapiMedia)(favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_6__.DefaultSeo, {
      titleTemplate: `%s | ${metaTitleSuffix}`,
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        images: Object.values(sharedImage.formats).map(image => {
          return {
            url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_5__.getStrapiMedia)(image),
            width: image.width,
            height: image.height
          };
        })
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
      theme: assets_styles_theme__WEBPACK_IMPORTED_MODULE_8__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_9__.GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    global: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      defaultSeo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
        metaDescription: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        metaTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        metaTitleSuffix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        sharedImage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
      }),
      favicon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
      id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    }),
    navigation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    seo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  })
};
MyApp.defaultProps = {
  pageProps: {
    global: {
      defaultSeo: {
        metaDescription: 'Akademia Cisco w Zespole Szkół Elektronicznych w Radomiu',
        metaTitle: 'Akademia Cisco',
        metaTitleSuffix: 'Zespół Szkół Elektronicznych'
      }
    }
  }
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx); // Fetch global site settings from Strapi

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZXJyb3JcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJtcSIsIm1vYmlsZUxhcmdlIiwibW9iaWxlTWVkaXVtIiwibW9iaWxlU21hbGwiLCJkZXNrdG9wVGFsbCIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiYm9keSIsImhlYWRlciIsInN1YkhlYWRlciIsIm5hdkhlYWRlciIsIndoaXRlIiwiY2FwdGlvbkxhcmdlIiwiY2FwdGlvbk1lZGl1bSIsImNhcHRpb25TbWFsbCIsImJsYWNrIiwibWFpbkNvbG9yIiwiYWNjZW50Q29sb3IiLCJuYXZMaXN0Iiwic3ViVGV4dCIsImJvZHlTbWFsbCIsImRpbWVuc2lvbnMiLCJwYWRkaW5nIiwicGFkZGluZ01vYmlsZSIsInBhZGRpbmdOYXJyb3ciLCJoZXJvQ291cnNlUGFkZGluZyIsImNhcmRQYWRkaW5nTW9iaWxlIiwiaGVyb0FjYWRlbXlQYWRkaW5nIiwibmF2aWdhdGlvblBhZGRpbmciLCJuYXZpZ2F0aW9uQ29sdW1uR2FwIiwibmF2aWdhdGlvblJvd0dhcCIsInV0aWxzIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiaGVyb0luc3RydWN0b3JzIiwiZGVza3RvcCIsImRlc2t0b3BXaWRlIiwibGFwdG9wIiwidGFibGV0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImFwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJBcHAiLCJkZWZhdWx0IiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIk15QXBwIiwiZ2xvYmFsIiwiZmF2aWNvbiIsImRlZmF1bHRTZW8iLCJtZXRhVGl0bGVTdWZmaXgiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJzaGFyZWRJbWFnZSIsImdldFN0cmFwaU1lZGlhIiwiaW1hZ2VzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9ybWF0cyIsIm1hcCIsImltYWdlIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpZCIsIm9iamVjdCIsIm51bWJlciIsIm5hdmlnYXRpb24iLCJzZWN0aW9ucyIsInNlbyIsImRlZmF1bHRQcm9wcyIsImFwcFByb3BzIiwiZmV0Y2hBUEkiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm1lZGlhIiwiaW1hZ2VVcmwiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1R0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUVPLE1BQU1BLFdBQVcsR0FBR0Msb0VBQUgsK3BCQVdsQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0MsV0FYTixFQWVsQixDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0UsWUFmTixFQW1CbEIsQ0FBQztBQUFFSDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxFQUFOLENBQVNHLFdBbkJOLEVBdUJsQixDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4s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QUFlRCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Rk8sU0FBUzZCLFlBQVQsQ0FBc0JDLElBQUksR0FBRyxFQUE3QixFQUFpQztBQUN0QyxTQUFRLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywwQkFBWixJQUEwQyx1QkFBd0IsR0FBRUgsSUFBSyxFQUFuRjtBQUNELEMsQ0FFRDs7QUFDTyxlQUFlRixRQUFmLENBQXdCRSxJQUF4QixFQUE4QjtBQUNuQyxRQUFNSSxVQUFVLEdBQUdMLFlBQVksQ0FBQ0MsSUFBRCxDQUEvQjtBQUNBLFFBQU1LLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLFVBQUQsQ0FBNUI7QUFDQSxRQUFNRyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5CO0FBQ0EsU0FBT0QsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRDtBQUVPLFNBQVM3QixjQUFULENBQXdCK0IsS0FBeEIsRUFBK0I7QUFDcEMsUUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUN4QixHQUFOLENBQVUwQixVQUFWLENBQXFCLEdBQXJCLElBQTRCWixrREFBWSxDQUFDVSxLQUFLLENBQUN4QixHQUFQLENBQXhDLEdBQXNEd0IsS0FBSyxDQUFDeEIsR0FBN0U7QUFDQSxTQUFPeUIsUUFBUDtBQUNELEM7Ozs7Ozs7Ozs7QUNMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLHNDOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVNZWRpdW19IHtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZVNtYWxsfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgXHJcbn1cclxuXHJcbmEsIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgXHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmhlYWRlcn07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViSGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZIZWFkZXJ9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2V9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICAgXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuXHJcbiAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYDtcclxuIiwiZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcclxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRThFQkYxJyxcclxuICAgIG1haW5Db2xvcjogJyMwRTI3NEQnLFxyXG4gICAgYWNjZW50Q29sb3I6ICcjMDBCQ0VBJyxcclxuICB9LFxyXG4gIGZvbnRTaXplOiB7XHJcbiAgICBoZWFkZXI6ICc0LjhyZW0nLFxyXG4gICAgbmF2SGVhZGVyOiAnMy42cmVtJyxcclxuICAgIG5hdkxpc3Q6ICcxLjhyZW0nLFxyXG4gICAgc3ViSGVhZGVyOiAnMnJlbScsXHJcbiAgICBzdWJUZXh0OiAnMS44cmVtJyxcclxuICAgIGNhcHRpb25MYXJnZTogJzIuNHJlbScsXHJcbiAgICBjYXB0aW9uTWVkaXVtOiAnMS4zcmVtJyxcclxuICAgIGNhcHRpb25TbWFsbDogJzEuMnJlbScsXHJcbiAgICBib2R5OiAnMS42cmVtJyxcclxuICAgIGJvZHlTbWFsbDogJzEuNHJlbScsXHJcbiAgfSxcclxuICBkaW1lbnNpb25zOiB7XHJcbiAgICBwYWRkaW5nOiAnMTB2dycsXHJcbiAgICBwYWRkaW5nTW9iaWxlOiAnNXZ3JyxcclxuICAgIHBhZGRpbmdOYXJyb3c6ICcxNXZ3JyxcclxuICAgIGhlcm9Db3Vyc2VQYWRkaW5nOiAnM3JlbSA1cmVtJyxcclxuICAgIGNhcmRQYWRkaW5nTW9iaWxlOiAnNXZ3JyxcclxuICAgIGhlcm9BY2FkZW15UGFkZGluZzogJzRyZW0gNC41cmVtJyxcclxuICAgIG5hdmlnYXRpb25QYWRkaW5nOiAnMTV2aCAxMnZ3JyxcclxuICAgIG5hdmlnYXRpb25Db2x1bW5HYXA6ICcxNXZ3JyxcclxuICAgIG5hdmlnYXRpb25Sb3dHYXA6ICc2cmVtJyxcclxuICB9LFxyXG4gIHV0aWxzOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDRweCAxNHB4ICByZ2JhKDAsIDAsIDAsIDAuMSknLFxyXG4gIH0sXHJcbiAgbXE6IHtcclxuICAgIGhlcm9JbnN0cnVjdG9yczogYEBtZWRpYSAobWluLXdpZHRoOiAxNDM4cHgpYCxcclxuICAgIGRlc2t0b3A6IGBAbWVkaWEgKG1heC13aWR0aDogMTU1MHB4KWAsXHJcbiAgICBkZXNrdG9wVGFsbDogYEBtZWRpYSAobWluLWhlaWdodDogMTEwMHB4KSBhbmQgKG1pbi13aWR0aDogODUwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpYCxcclxuICAgIGRlc2t0b3BXaWRlOiBgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweClgLFxyXG4gICAgbGFwdG9wOiBgQG1lZGlhIChtYXgtd2lkdGg6IDEyMjRweClgLFxyXG4gICAgdGFibGV0OiBgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KWAsXHJcbiAgICBtb2JpbGVMYXJnZTogYEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweClgLFxyXG4gICAgbW9iaWxlTWVkaXVtOiBgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KWAsXHJcbiAgICBtb2JpbGVTbWFsbDogYEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweClgLFxyXG4gIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcvdXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ2Fzc2V0cy9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJ2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wcztcclxuXHJcbiAgaWYgKGdsb2JhbCA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZmF2aWNvbixcclxuICAgIGRlZmF1bHRTZW86IHsgbWV0YVRpdGxlU3VmZml4LCBtZXRhVGl0bGUsIG1ldGFEZXNjcmlwdGlvbiwgc2hhcmVkSW1hZ2UgfSxcclxuICB9ID0gZ2xvYmFsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+ezxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtnZXRTdHJhcGlNZWRpYShmYXZpY29uKX0gLz59PC9IZWFkPlxyXG4gICAgICA8RGVmYXVsdFNlb1xyXG4gICAgICAgIHRpdGxlVGVtcGxhdGU9e2AlcyB8ICR7bWV0YVRpdGxlU3VmZml4fWB9XHJcbiAgICAgICAgdGl0bGU9e21ldGFUaXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YURlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNoYXJlZEltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB1cmw6IGdldFN0cmFwaU1lZGlhKGltYWdlKSxcclxuICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGdsb2JhbDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgZGVmYXVsdFNlbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBtZXRhRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICBtZXRhVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICBtZXRhVGl0bGVTdWZmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2hhcmVkSW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIH0pLFxyXG4gICAgICBmYXZpY29uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICAgbmF2aWdhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHNlbzogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KSxcclxufTtcclxuXHJcbk15QXBwLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwYWdlUHJvcHM6IHtcclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBkZWZhdWx0U2VvOiB7XHJcbiAgICAgICAgbWV0YURlc2NyaXB0aW9uOiAnQWthZGVtaWEgQ2lzY28gdyBaZXNwb2xlIFN6a8OzxYIgRWxla3Ryb25pY3pueWNoIHcgUmFkb21pdScsXHJcbiAgICAgICAgbWV0YVRpdGxlOiAnQWthZGVtaWEgQ2lzY28nLFxyXG4gICAgICAgIG1ldGFUaXRsZVN1ZmZpeDogJ1plc3DDs8WCIFN6a8OzxYIgRWxla3Ryb25pY3pueWNoJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxyXG4vLyBoYXZlIGdldFN0YXRpY1Byb3BzLiBTbyBbWy4uLnNsdWddXSBwYWdlcyBzdGlsbCBnZXQgU1NHLlxyXG4vLyBIb3BlZnVsbHkgd2UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGdldFN0YXRpY1Byb3BzIG9uY2UgdGhpcyBpc3N1ZSBpcyBmaXhlZDpcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcclxuICBjb25zdCBnbG9iYWwgPSBhd2FpdCBmZXRjaEFQSSgnL2dsb2JhbCcpO1xyXG4gIC8vIFBhc3MgdGhlIGRhdGEgdG8gb3VyIHBhZ2UgdmlhIHByb3BzXHJcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWwgfSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YDtcbn1cblxuLy8gSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgpIHtcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCBpbWFnZVVybCA9IG1lZGlhLnVybC5zdGFydHNXaXRoKCcvJykgPyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKSA6IG1lZGlhLnVybDtcbiAgcmV0dXJuIGltYWdlVXJsO1xufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==