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
    heroInstructors: `@media (min-width: 1570px)`,
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
/* harmony import */ var types_appTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! types/appTypes */ "./types/appTypes.js");
/* harmony import */ var providers_LoadingProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/LoadingProvider */ "./providers/LoadingProvider.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var public_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/nprogress.css */ "./public/nprogress.css");
/* harmony import */ var public_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(public_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
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
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    global
  } = pageProps;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_14___default()), {
      statusCode: 500
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_10__.DefaultSeo, {
      titleTemplate: `%s | ${metaTitleSuffix}`,
      title: metaTitle,
      description: metaDescription,
      openGraph: _objectSpread({}, sharedImage && sharedImage.formats && {
        images: Object.values(sharedImage.formats).map(image => {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(image),
            width: image.width,
            height: image.height
          };
        })
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {
      theme: assets_styles_theme__WEBPACK_IMPORTED_MODULE_12__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_13__.GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(providers_LoadingProvider__WEBPACK_IMPORTED_MODULE_3__.default, {
        router: router,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  pageProps: types_appTypes__WEBPACK_IMPORTED_MODULE_2__.pagePropsShape
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
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_6___default().getInitialProps(ctx);
  const global = await (0,utils_api__WEBPACK_IMPORTED_MODULE_8__.fetchAPI)('/global');
  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./providers/LoadingProvider.js":
/*!**************************************!*\
  !*** ./providers/LoadingProvider.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingContext": function() { return /* binding */ LoadingContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\providers\\LoadingProvider.js";
// import { LoadingContext } from 'pages/_app'


const LoadingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);

const LoadingProvider = ({
  children,
  router
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  if (router) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      const handleStart = () => {
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({
          parent: '#loader'
        });
        setIsLoading(true);
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
      };

      const handleStop = () => {
        setIsLoading(false);
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
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
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingContext.Provider, {
    value: isLoading,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingProvider);

/***/ }),

/***/ "./types/appTypes.js":
/*!***************************!*\
  !*** ./types/appTypes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagePropsShape": function() { return /* binding */ pagePropsShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const pagePropsShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  global: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    defaultSeo: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
      metaDescription: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
      metaTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
      metaTitleSuffix: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
      sharedImage: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
    }),
    favicon: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
  }),
  navigation: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  sections: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
  seo: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3Byb3ZpZGVycy9Mb2FkaW5nUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi90eXBlcy9hcHBUeXBlcy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZXJyb3JcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJtcSIsIm1vYmlsZUxhcmdlIiwibW9iaWxlTWVkaXVtIiwibW9iaWxlU21hbGwiLCJkZXNrdG9wVGFsbCIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiYm9keSIsImhlYWRlciIsInN1YkhlYWRlciIsIm5hdkhlYWRlciIsIndoaXRlIiwiY2FwdGlvbkxhcmdlIiwiY2FwdGlvbk1lZGl1bSIsImNhcHRpb25TbWFsbCIsImJsYWNrIiwibWFpbkNvbG9yIiwiYWNjZW50Q29sb3IiLCJuYXZMaXN0Iiwic3ViVGV4dCIsImJvZHlTbWFsbCIsImRpbWVuc2lvbnMiLCJwYWRkaW5nIiwicGFkZGluZ01vYmlsZSIsInBhZGRpbmdOYXJyb3ciLCJoZXJvQ291cnNlUGFkZGluZyIsImNhcmRQYWRkaW5nTW9iaWxlIiwiaGVyb0FjYWRlbXlQYWRkaW5nIiwibmF2aWdhdGlvblBhZGRpbmciLCJuYXZpZ2F0aW9uQ29sdW1uR2FwIiwibmF2aWdhdGlvblJvd0dhcCIsInV0aWxzIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiaGVyb0luc3RydWN0b3JzIiwiZGVza3RvcCIsImRlc2t0b3BXaWRlIiwibGFwdG9wIiwidGFibGV0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImFwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJBcHAiLCJkZWZhdWx0IiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIk15QXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2xvYmFsIiwiZmF2aWNvbiIsImRlZmF1bHRTZW8iLCJtZXRhVGl0bGVTdWZmaXgiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJzaGFyZWRJbWFnZSIsImdldFN0cmFwaU1lZGlhIiwiZm9ybWF0cyIsImltYWdlcyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImltYWdlIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJwYWdlUHJvcHNTaGFwZSIsImRlZmF1bHRQcm9wcyIsImFwcFByb3BzIiwiZmV0Y2hBUEkiLCJMb2FkaW5nQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2FkaW5nUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhcnQiLCJOUHJvZ3Jlc3MiLCJwYXJlbnQiLCJoYW5kbGVTdG9wIiwiZXZlbnRzIiwib24iLCJvZmYiLCJpZCIsIm9iamVjdCIsIm51bWJlciIsIm5hdmlnYXRpb24iLCJzZWN0aW9ucyIsInNlbyIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJyZXF1ZXN0VXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWVkaWEiLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVHQUE2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBRU8sTUFBTUEsV0FBVyxHQUFHQyxvRUFBSCwrcEJBV2xCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsRUFBTixDQUFTQyxXQVhOLEVBZWxCLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsRUFBTixDQUFTRSxZQWZOLEVBbUJsQixDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0csV0FuQk4sRUF1QmxCLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsRUFBTixDQUFTSSxXQXZCTixFQStCQSxDQUFDO0FBQUVMO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsZUEvQjVCLEVBcUNQLENBQUM7QUFBRVA7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1EsUUFBTixDQUFlQyxJQXJDdkIsRUFpRFAsQ0FBQztBQUFFVDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUSxRQUFOLENBQWVFLE1BakR2QixFQXNEUCxDQUFDO0FBQUVWO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNRLFFBQU4sQ0FBZUcsU0F0RHZCLEVBMkRQLENBQUM7QUFBRVg7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1EsUUFBTixDQUFlSSxTQTNEdkIsRUE0RFgsQ0FBQztBQUFFWjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTSxNQUFOLENBQWFPLEtBNURqQixFQWlFUCxDQUFDO0FBQUViO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNRLFFBQU4sQ0FBZU0s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QU8sQ0FBQ0MsR0FBUixDQUFZQywwQkFBWixJQUEwQyx1QkFBd0IsR0FBRUgsSUFBSyxFQUFuRjtBQUNELEMsQ0FFRDs7QUFDTyxlQUFldkIsUUFBZixDQUF3QnVCLElBQXhCLEVBQThCO0FBQ25DLFFBQU1JLFVBQVUsR0FBR0wsWUFBWSxDQUFDQyxJQUFELENBQS9CO0FBQ0EsUUFBTUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsVUFBRCxDQUE1QjtBQUNBLFFBQU1HLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBRU8sU0FBUzdDLGNBQVQsQ0FBd0IrQyxLQUF4QixFQUErQjtBQUNwQyxRQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ3hDLEdBQU4sQ0FBVTBDLFVBQVYsQ0FBcUIsR0FBckIsSUFBNEJaLGtEQUFZLENBQUNVLEtBQUssQ0FBQ3hDLEdBQVAsQ0FBeEMsR0FBc0R3QyxLQUFLLENBQUN4QyxHQUE3RTtBQUNBLFNBQU95QyxRQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLHNDOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVNZWRpdW19IHtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZVNtYWxsfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgXHJcbn1cclxuXHJcbmEsIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgXHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmhlYWRlcn07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViSGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZIZWFkZXJ9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2V9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICAgXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuXHJcbiAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYDtcclxuIiwiZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcclxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRThFQkYxJyxcclxuICAgIG1haW5Db2xvcjogJyMwRTI3NEQnLFxyXG4gICAgYWNjZW50Q29sb3I6ICcjMDBCQ0VBJyxcclxuICB9LFxyXG4gIGZvbnRTaXplOiB7XHJcbiAgICBoZWFkZXI6ICc0LjhyZW0nLFxyXG4gICAgbmF2SGVhZGVyOiAnMy42cmVtJyxcclxuICAgIG5hdkxpc3Q6ICcxLjhyZW0nLFxyXG4gICAgc3ViSGVhZGVyOiAnMnJlbScsXHJcbiAgICBzdWJUZXh0OiAnMS44cmVtJyxcclxuICAgIGNhcHRpb25MYXJnZTogJzIuNHJlbScsXHJcbiAgICBjYXB0aW9uTWVkaXVtOiAnMS4zcmVtJyxcclxuICAgIGNhcHRpb25TbWFsbDogJzEuMnJlbScsXHJcbiAgICBib2R5OiAnMS42cmVtJyxcclxuICAgIGJvZHlTbWFsbDogJzEuNHJlbScsXHJcbiAgfSxcclxuICBkaW1lbnNpb25zOiB7XHJcbiAgICBwYWRkaW5nOiAnMTB2dycsXHJcbiAgICBwYWRkaW5nTW9iaWxlOiAnNXZ3JyxcclxuICAgIHBhZGRpbmdOYXJyb3c6ICcxNXZ3JyxcclxuICAgIGhlcm9Db3Vyc2VQYWRkaW5nOiAnM3JlbSA1cmVtJyxcclxuICAgIGNhcmRQYWRkaW5nTW9iaWxlOiAnNXZ3JyxcclxuICAgIGhlcm9BY2FkZW15UGFkZGluZzogJzRyZW0gNC41cmVtJyxcclxuICAgIG5hdmlnYXRpb25QYWRkaW5nOiAnMTV2aCAxMnZ3JyxcclxuICAgIG5hdmlnYXRpb25Db2x1bW5HYXA6ICcxNXZ3JyxcclxuICAgIG5hdmlnYXRpb25Sb3dHYXA6ICc2cmVtJyxcclxuICB9LFxyXG4gIHV0aWxzOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDRweCAxNHB4ICByZ2JhKDAsIDAsIDAsIDAuMSknLFxyXG4gIH0sXHJcbiAgbXE6IHtcclxuICAgIGhlcm9JbnN0cnVjdG9yczogYEBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpYCxcclxuICAgIGRlc2t0b3A6IGBAbWVkaWEgKG1heC13aWR0aDogMTU1MHB4KWAsXHJcbiAgICBkZXNrdG9wVGFsbDogYEBtZWRpYSAobWluLWhlaWdodDogMTEwMHB4KSBhbmQgKG1pbi13aWR0aDogODUwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpYCxcclxuICAgIGRlc2t0b3BXaWRlOiBgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweClgLFxyXG4gICAgbGFwdG9wOiBgQG1lZGlhIChtYXgtd2lkdGg6IDEyMjRweClgLFxyXG4gICAgdGFibGV0OiBgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KWAsXHJcbiAgICBtb2JpbGVMYXJnZTogYEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweClgLFxyXG4gICAgbW9iaWxlTWVkaXVtOiBgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KWAsXHJcbiAgICBtb2JpbGVTbWFsbDogYEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweClgLFxyXG4gIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBwYWdlUHJvcHNTaGFwZSB9IGZyb20gJ3R5cGVzL2FwcFR5cGVzJztcclxuaW1wb3J0IExvYWRpbmdQcm92aWRlciBmcm9tICdwcm92aWRlcnMvTG9hZGluZ1Byb3ZpZGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgJ3B1YmxpYy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAndXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICd1dGlscy9tZWRpYSc7XHJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnYXNzZXRzL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnYXNzZXRzL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcic7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzO1xyXG5cclxuICBpZiAoZ2xvYmFsID09IG51bGwpIHtcclxuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezUwMH0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBmYXZpY29uLFxyXG4gICAgZGVmYXVsdFNlbzogeyBtZXRhVGl0bGVTdWZmaXgsIG1ldGFUaXRsZSwgbWV0YURlc2NyaXB0aW9uLCBzaGFyZWRJbWFnZSB9LFxyXG4gIH0gPSBnbG9iYWw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD57PGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9e2dldFN0cmFwaU1lZGlhKGZhdmljb24pfSAvPn08L0hlYWQ+XHJcbiAgICAgIDxEZWZhdWx0U2VvXHJcbiAgICAgICAgdGl0bGVUZW1wbGF0ZT17YCVzIHwgJHttZXRhVGl0bGVTdWZmaXh9YH1cclxuICAgICAgICB0aXRsZT17bWV0YVRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259XHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICAuLi4oc2hhcmVkSW1hZ2UgJiZcclxuICAgICAgICAgICAgc2hhcmVkSW1hZ2UuZm9ybWF0cyAmJiB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNoYXJlZEltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8TG9hZGluZ1Byb3ZpZGVyIHJvdXRlcj17cm91dGVyfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0xvYWRpbmdQcm92aWRlcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHBhZ2VQcm9wczogcGFnZVByb3BzU2hhcGUsXHJcbn07XHJcblxyXG5NeUFwcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcGFnZVByb3BzOiB7XHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgZGVmYXVsdFNlbzoge1xyXG4gICAgICAgIG1ldGFEZXNjcmlwdGlvbjogJ0FrYWRlbWlhIENpc2NvIHcgWmVzcG9sZSBTemvDs8WCIEVsZWt0cm9uaWN6bnljaCB3IFJhZG9taXUnLFxyXG4gICAgICAgIG1ldGFUaXRsZTogJ0FrYWRlbWlhIENpc2NvJyxcclxuICAgICAgICBtZXRhVGl0bGVTdWZmaXg6ICdaZXNww7PFgiBTemvDs8WCIEVsZWt0cm9uaWN6bnljaCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBnZXRJbml0aWFsUHJvcHMgZGlzYWJsZXMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24gZm9yIHBhZ2VzIHRoYXQgZG9uJ3RcclxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gW1suLi5zbHVnXV0gcGFnZXMgc3RpbGwgZ2V0IFNTRy5cclxuLy8gSG9wZWZ1bGx5IHdlIGNhbiByZXBsYWNlIHRoaXMgd2l0aCBnZXRTdGF0aWNQcm9wcyBvbmNlIHRoaXMgaXNzdWUgaXMgZml4ZWQ6XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9kaXNjdXNzaW9ucy8xMDk0OVxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgY29uc3QgZ2xvYmFsID0gYXdhaXQgZmV0Y2hBUEkoJy9nbG9iYWwnKTtcclxuXHJcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWwgfSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIi8vIGltcG9ydCB7IExvYWRpbmdDb250ZXh0IH0gZnJvbSAncGFnZXMvX2FwcCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSk7XHJcblxyXG5jb25zdCBMb2FkaW5nUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBpZiAocm91dGVyKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgcGFyZW50OiAnI2xvYWRlcicgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPExvYWRpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpc0xvYWRpbmd9PntjaGlsZHJlbn08L0xvYWRpbmdDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdQcm92aWRlcjtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlUHJvcHNTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgZ2xvYmFsOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgZGVmYXVsdFNlbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIG1ldGFEZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBtZXRhVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgbWV0YVRpdGxlU3VmZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBzaGFyZWRJbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG4gICAgZmF2aWNvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIH0pLFxyXG4gIG5hdmlnYXRpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIHNlbzogUHJvcFR5cGVzLm9iamVjdCxcclxufSk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YDtcbn1cblxuLy8gSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgpIHtcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCBpbWFnZVVybCA9IG1lZGlhLnVybC5zdGFydHNXaXRoKCcvJykgPyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKSA6IG1lZGlhLnVybDtcbiAgcmV0dXJuIGltYWdlVXJsO1xufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==