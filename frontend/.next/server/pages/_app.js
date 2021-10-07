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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/nprogress.css */ "./public/nprogress.css");
/* harmony import */ var _public_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_styles_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/styles/theme */ "./assets/styles/theme.js");
/* harmony import */ var assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/styles/GlobalStyle */ "./assets/styles/GlobalStyle.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_14__);


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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_14___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleStart = url => {
      console.log(`Loading: ${url}`);
      setIsLoading(true);
      nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
    };

    const handleStop = () => {
      setIsLoading(false);
      nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_10__.DefaultSeo, {
      titleTemplate: `%s | ${metaTitleSuffix}`,
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        images: Object.values(sharedImage.formats).map(image => {
          return {
            url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(image),
            width: image.width,
            height: image.height
          };
        })
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {
      theme: assets_styles_theme__WEBPACK_IMPORTED_MODULE_12__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_13__.GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    global: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
      defaultSeo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        metaDescription: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
        metaTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
        metaTitleSuffix: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        sharedImage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
      }),
      favicon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
      id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    }),
    navigation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    sections: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),
    seo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
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
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_6___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const global = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_8__.fetchAPI)('/global'); // Pass the data to our page via props

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

/***/ "./public/nprogress.css":
/*!******************************!*\
  !*** ./public/nprogress.css ***!
  \******************************/
/***/ (function() {



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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZXJyb3JcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJtcSIsIm1vYmlsZUxhcmdlIiwibW9iaWxlTWVkaXVtIiwibW9iaWxlU21hbGwiLCJkZXNrdG9wVGFsbCIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiYm9keSIsImhlYWRlciIsInN1YkhlYWRlciIsIm5hdkhlYWRlciIsIndoaXRlIiwiY2FwdGlvbkxhcmdlIiwiY2FwdGlvbk1lZGl1bSIsImNhcHRpb25TbWFsbCIsImJsYWNrIiwibWFpbkNvbG9yIiwiYWNjZW50Q29sb3IiLCJuYXZMaXN0Iiwic3ViVGV4dCIsImJvZHlTbWFsbCIsImRpbWVuc2lvbnMiLCJwYWRkaW5nIiwicGFkZGluZ01vYmlsZSIsInBhZGRpbmdOYXJyb3ciLCJoZXJvQ291cnNlUGFkZGluZyIsImNhcmRQYWRkaW5nTW9iaWxlIiwiaGVyb0FjYWRlbXlQYWRkaW5nIiwibmF2aWdhdGlvblBhZGRpbmciLCJuYXZpZ2F0aW9uQ29sdW1uR2FwIiwibmF2aWdhdGlvblJvd0dhcCIsInV0aWxzIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiaGVyb0luc3RydWN0b3JzIiwiZGVza3RvcCIsImRlc2t0b3BXaWRlIiwibGFwdG9wIiwidGFibGV0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImFwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJBcHAiLCJkZWZhdWx0IiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIk15QXBwIiwiZ2xvYmFsIiwiZmF2aWNvbiIsImRlZmF1bHRTZW8iLCJtZXRhVGl0bGVTdWZmaXgiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJzaGFyZWRJbWFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhcnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiTlByb2dyZXNzIiwiaGFuZGxlU3RvcCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZ2V0U3RyYXBpTWVkaWEiLCJpbWFnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JtYXRzIiwibWFwIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlkIiwib2JqZWN0IiwibnVtYmVyIiwibmF2aWdhdGlvbiIsInNlY3Rpb25zIiwic2VvIiwiZGVmYXVsdFByb3BzIiwiYXBwUHJvcHMiLCJmZXRjaEFQSSIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJyZXF1ZXN0VXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWVkaWEiLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVHQUE2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTWVkaXVtfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVTbWFsbH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgIFxyXG59XHJcblxyXG5hLCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgIFxyXG59XHJcblxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YkhlYWRlcn07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2SGVhZGVyfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvbkxhcmdlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvbk1lZGl1bX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuaDYge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmNhcHRpb25TbWFsbH07XHJcbiAgIFxyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcblxyXG4gICAgICAgICY6dmlzaXRlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmA7XHJcbiIsImV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBibGFjazogJyMwMDAwMDAnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0U4RUJGMScsXHJcbiAgICBtYWluQ29sb3I6ICcjMEUyNzREJyxcclxuICAgIGFjY2VudENvbG9yOiAnIzAwQkNFQScsXHJcbiAgfSxcclxuICBmb250U2l6ZToge1xyXG4gICAgaGVhZGVyOiAnNC44cmVtJyxcclxuICAgIG5hdkhlYWRlcjogJzMuNnJlbScsXHJcbiAgICBuYXZMaXN0OiAnMS44cmVtJyxcclxuICAgIHN1YkhlYWRlcjogJzJyZW0nLFxyXG4gICAgc3ViVGV4dDogJzEuOHJlbScsXHJcbiAgICBjYXB0aW9uTGFyZ2U6ICcyLjRyZW0nLFxyXG4gICAgY2FwdGlvbk1lZGl1bTogJzEuM3JlbScsXHJcbiAgICBjYXB0aW9uU21hbGw6ICcxLjJyZW0nLFxyXG4gICAgYm9keTogJzEuNnJlbScsXHJcbiAgICBib2R5U21hbGw6ICcxLjRyZW0nLFxyXG4gIH0sXHJcbiAgZGltZW5zaW9uczoge1xyXG4gICAgcGFkZGluZzogJzEwdncnLFxyXG4gICAgcGFkZGluZ01vYmlsZTogJzV2dycsXHJcbiAgICBwYWRkaW5nTmFycm93OiAnMTV2dycsXHJcbiAgICBoZXJvQ291cnNlUGFkZGluZzogJzNyZW0gNXJlbScsXHJcbiAgICBjYXJkUGFkZGluZ01vYmlsZTogJzV2dycsXHJcbiAgICBoZXJvQWNhZGVteVBhZGRpbmc6ICc0cmVtIDQuNXJlbScsXHJcbiAgICBuYXZpZ2F0aW9uUGFkZGluZzogJzE1dmggMTJ2dycsXHJcbiAgICBuYXZpZ2F0aW9uQ29sdW1uR2FwOiAnMTV2dycsXHJcbiAgICBuYXZpZ2F0aW9uUm93R2FwOiAnNnJlbScsXHJcbiAgfSxcclxuICB1dGlsczoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIGJveFNoYWRvdzogJzBweCA0cHggMTRweCAgcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICB9LFxyXG4gIG1xOiB7XHJcbiAgICBoZXJvSW5zdHJ1Y3RvcnM6IGBAbWVkaWEgKG1pbi13aWR0aDogMTQzOHB4KWAsXHJcbiAgICBkZXNrdG9wOiBgQG1lZGlhIChtYXgtd2lkdGg6IDE1NTBweClgLFxyXG4gICAgZGVza3RvcFRhbGw6IGBAbWVkaWEgKG1pbi1oZWlnaHQ6IDExMDBweCkgYW5kIChtaW4td2lkdGg6IDg1MHB4KSBhbmQgKG1heC13aWR0aDogMTQwMHB4KWAsXHJcbiAgICBkZXNrdG9wV2lkZTogYEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpYCxcclxuICAgIGxhcHRvcDogYEBtZWRpYSAobWF4LXdpZHRoOiAxMjI0cHgpYCxcclxuICAgIHRhYmxldDogYEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweClgLFxyXG4gICAgbW9iaWxlTGFyZ2U6IGBAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpYCxcclxuICAgIG1vYmlsZU1lZGl1bTogYEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweClgLFxyXG4gICAgbW9iaWxlU21hbGw6IGBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpYCxcclxuICB9LFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wcztleHBvcnRzLk5leHRXZWJWaXRhbHNNZXRyaWM9X3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pe2NvbnN0IHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe2NvbnN0e0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LHBhZ2VQcm9wcyk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCAnLi4vcHVibGljL25wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcvdXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ2Fzc2V0cy9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJ2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wcztcclxuXHJcbiAgaWYgKGdsb2JhbCA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZmF2aWNvbixcclxuICAgIGRlZmF1bHRTZW86IHsgbWV0YVRpdGxlU3VmZml4LCBtZXRhVGl0bGUsIG1ldGFEZXNjcmlwdGlvbiwgc2hhcmVkSW1hZ2UgfSxcclxuICB9ID0gZ2xvYmFsO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKHVybCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XHJcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgIH07XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuICAgIH07XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+ezxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtnZXRTdHJhcGlNZWRpYShmYXZpY29uKX0gLz59PC9IZWFkPlxyXG4gICAgICA8RGVmYXVsdFNlb1xyXG4gICAgICAgIHRpdGxlVGVtcGxhdGU9e2AlcyB8ICR7bWV0YVRpdGxlU3VmZml4fWB9XHJcbiAgICAgICAgdGl0bGU9e21ldGFUaXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YURlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNoYXJlZEltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB1cmw6IGdldFN0cmFwaU1lZGlhKGltYWdlKSxcclxuICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGdsb2JhbDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgZGVmYXVsdFNlbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBtZXRhRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICBtZXRhVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICBtZXRhVGl0bGVTdWZmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2hhcmVkSW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIH0pLFxyXG4gICAgICBmYXZpY29uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICAgbmF2aWdhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHNlbzogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KSxcclxufTtcclxuXHJcbk15QXBwLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwYWdlUHJvcHM6IHtcclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBkZWZhdWx0U2VvOiB7XHJcbiAgICAgICAgbWV0YURlc2NyaXB0aW9uOiAnQWthZGVtaWEgQ2lzY28gdyBaZXNwb2xlIFN6a8OzxYIgRWxla3Ryb25pY3pueWNoIHcgUmFkb21pdScsXHJcbiAgICAgICAgbWV0YVRpdGxlOiAnQWthZGVtaWEgQ2lzY28nLFxyXG4gICAgICAgIG1ldGFUaXRsZVN1ZmZpeDogJ1plc3DDs8WCIFN6a8OzxYIgRWxla3Ryb25pY3pueWNoJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxyXG4vLyBoYXZlIGdldFN0YXRpY1Byb3BzLiBTbyBbWy4uLnNsdWddXSBwYWdlcyBzdGlsbCBnZXQgU1NHLlxyXG4vLyBIb3BlZnVsbHkgd2UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGdldFN0YXRpY1Byb3BzIG9uY2UgdGhpcyBpc3N1ZSBpcyBmaXhlZDpcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcclxuICBjb25zdCBnbG9iYWwgPSBhd2FpdCBmZXRjaEFQSSgnL2dsb2JhbCcpO1xyXG4gIC8vIFBhc3MgdGhlIGRhdGEgdG8gb3VyIHBhZ2UgdmlhIHByb3BzXHJcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWwgfSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YDtcbn1cblxuLy8gSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgpIHtcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCBpbWFnZVVybCA9IG1lZGlhLnVybC5zdGFydHNXaXRoKCcvJykgPyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKSA6IG1lZGlhLnVybDtcbiAgcmV0dXJuIGltYWdlVXJsO1xufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==