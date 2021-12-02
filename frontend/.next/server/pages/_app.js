(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./assets/styles/GlobalStyle.js":
/*!**************************************!*\
  !*** ./assets/styles/GlobalStyle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 10px;

    ${({
  theme
}) => theme.mq.mobileLarge} {
        font-size: 9px;
    }

    ${({
  theme
}) => theme.mq.mobileMedium} {
        font-size: 8px;
    }

    ${({
  theme
}) => theme.mq.mobileSmall} {
        font-size: 6px;
    }

    ${({
  theme
}) => theme.mq.desktopTall} {
        font-size: 16px;
    }

}

body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${({
  theme
}) => theme.colors.backgroundColor};
    color: ${({
  theme
}) => theme.colors.black};
   
}

a, button {
    font-family: 'Open Sans', sans-serif;
    font-size: ${({
  theme
}) => theme.fontSize.body};
    font-weight: 600;
    cursor: pointer;

   
}

a {
	text-decoration: none;
}

h1 {
    font-size: ${({
  theme
}) => theme.fontSize.header};
    font-weight: 700;

    ${({
  theme
}) => theme.mq.tablet} {
    font-size: ${({
  theme
}) => theme.fontSize.headerMobile};

    }
}

h2 {
    font-size: ${({
  theme
}) => theme.fontSize.subHeader};
    font-weight: 400;
}

h3 {
    font-size: ${({
  theme
}) => theme.fontSize.navHeader};
    color: ${({
  theme
}) => theme.colors.white};
    font-weight: 700;
}

h4 {
    font-size: ${({
  theme
}) => theme.fontSize.captionLarge};
    font-weight: 700;

}

h5 {
    font-size: ${({
  theme
}) => theme.fontSize.captionMedium};
    font-weight: 600;

}

h6 {
    font-size: ${({
  theme
}) => theme.fontSize.captionSmall};
   
}

p {
    font-size: ${({
  theme
}) => theme.fontSize.body};
    font-weight: 400;
    text-align: justify;
    line-height: 1.6;
}

ul {
    text-decoration: none;
}

li {
    a {
        color: ${({
  theme
}) => theme.colors.white};
        font-size: ${({
  theme
}) => theme.fontSize.body};

        &:visited {
            color: ${({
  theme
}) => theme.colors.white};
        }
    }
}

span{
    font-size: ${({
  theme
}) => theme.fontSize.body}
}

`;

/***/ }),

/***/ "./assets/styles/theme.js":
/*!********************************!*\
  !*** ./assets/styles/theme.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lightTheme": () => (/* binding */ lightTheme),
/* harmony export */   "darkTheme": () => (/* binding */ darkTheme)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const light = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    backgroundLight: '#FFFFFF',
    backgroundWhite: '#FFFFFF',
    backgroundColor: '#E8EBF1',
    mainColor: '#0D274D',
    accentColor: '#00BCFF',
    lighterAccentColor: '#00cdff',
    buttonColor: '#0D274D',
    buttonTextColor: '#FFFFFF',
    lighterButtonColor: '#103369'
  }
};
const dark = {
  colors: {
    white: '#e6e6e6',
    black: '#e6e6e6',
    backgroundLight: '#14161a',
    backgroundWhite: '#101114',
    backgroundColor: '#101114',
    mainColor: '#0b1b30',
    accentColor: '#00a4de',
    lighterAccentColor: '#00BCFF',
    buttonColor: '#00a4de',
    buttonTextColor: '#0b1b30',
    lighterButtonColor: '#00BCFF'
  }
};
const defaultTheme = {
  fontSize: {
    header: '4.8rem',
    headerMobile: '4rem',
    navHeader: '3.6rem',
    navList: '1.8rem',
    subHeader: '2rem',
    subText: '1.8rem',
    captionLarge: '3rem',
    captionLargeMedium: '2.4rem',
    captionMedium: '1.3rem',
    captionSmall: '1.2rem',
    body: '1.6rem',
    bodySmall: '1.4rem'
  },
  padding: {
    xl: '18vw',
    x: '15vw',
    m: '10vw',
    xs: '8vw',
    s: '5vw',
    xxlV: '10rem',
    xlV: '8rem',
    xV: '7rem',
    mV: '5rem',
    xsV: '4rem',
    sV: '3rem',
    ssV: '2rem'
  },
  dimensions: {
    tilePadding: '4rem 3.5rem',
    tilePaddingMobile: '3rem 5vw',
    tileWidth: '65rem',
    pageSectionPadding: '4rem 5rem',
    pageSectionWidth: '100rem',
    richTextMarginTop: '4rem'
  },
  utils: {
    borderRadius: '6px',
    boxShadow: '0px 4px 14px  rgba(0, 0, 0, 0.1)'
  },
  mq: {
    heroInstructors: `@media (min-width: 1570px)`,
    desktop: `@media (max-width: 1550px)`,
    desktopTall: `@media (min-height: 1100px) and (min-width: 1000px) and (max-width: 1400px)`,
    desktopWide: `@media (min-width: 1400px)`,
    laptopLarge: `@media (max-width: 1450px)`,
    laptop: `@media (max-width: 1224px)`,
    tabletLarge: `@media (max-width: 1050px)`,
    tablet: `@media (max-width: 850px)`,
    mobileLarge: `@media (max-width: 568px)`,
    mobileMedium: `@media (max-width: 450px)`,
    mobileSmall: `@media (max-width: 350px)`
  }
};
const lightTheme = _objectSpread(_objectSpread({}, defaultTheme), light);
const darkTheme = _objectSpread(_objectSpread({}, defaultTheme), dark);

/***/ }),

/***/ "./hooks/useDarkMode.js":
/*!******************************!*\
  !*** ./hooks/useDarkMode.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useDarkMode = (state = false) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const defaultDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || state;

    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', defaultDarkMode);
    }

    setCurrentDarkMode(JSON.parse(localStorage.getItem('darkMode')));
  }, []);
  const {
    0: currentDarkMode,
    1: setCurrentDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state);

  const handleDarkModeChange = () => {
    setCurrentDarkMode(prevState => !prevState);
    localStorage.setItem('darkMode', !currentDarkMode);
  };

  return {
    currentDarkMode,
    handleDarkModeChange
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDarkMode);

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function () {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator(function* ({
    Component,
    ctx
  }) {
    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));
  }

}

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var propTypes_appTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/appTypes */ "./propTypes/appTypes.js");
/* harmony import */ var providers_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/AppProvider */ "./providers/AppProvider.js");
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
/* harmony import */ var hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hooks/useDarkMode */ "./hooks/useDarkMode.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    0: isMounted,
    1: setIsMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMounted(true);
  }, []);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    global
  } = pageProps;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_14___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
  const {
    currentDarkMode,
    handleDarkModeChange
  } = (0,hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_15__.default)(false);
  const theme = currentDarkMode ? assets_styles_theme__WEBPACK_IMPORTED_MODULE_12__.darkTheme : assets_styles_theme__WEBPACK_IMPORTED_MODULE_12__.lightTheme;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_10__.DefaultSeo, {
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
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {
      theme: theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_13__.GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(providers_AppProvider__WEBPACK_IMPORTED_MODULE_3__.default, {
        router: router,
        handleDarkModeChange: handleDarkModeChange,
        currentDarkMode: currentDarkMode,
        children: isMounted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  pageProps: propTypes_appTypes__WEBPACK_IMPORTED_MODULE_2__.pagePropsShape
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./propTypes/appTypes.js":
/*!*******************************!*\
  !*** ./propTypes/appTypes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagePropsShape": () => (/* binding */ pagePropsShape)
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

/***/ "./providers/AppProvider.js":
/*!**********************************!*\
  !*** ./providers/AppProvider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": () => (/* binding */ AppContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\providers\\AppProvider.js";



const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isLoading: false,
  isNavOpen: false,
  setIsNavOpen: () => {}
});

const AppProvider = ({
  children,
  router,
  handleDarkModeChange,
  currentDarkMode
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isNavOpen,
    1: setIsNavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  if (router) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      const handleStart = () => {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().configure({
          parent: '#loader'
        });
        setIsLoading(true);
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      };

      const handleStop = () => {
        setIsLoading(false);
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AppContext.Provider, {
    value: {
      isLoading,
      isNavOpen,
      setIsNavOpen,
      handleDarkModeChange,
      currentDarkMode
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProvider);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": () => (/* binding */ getStrapiURL),
/* harmony export */   "fetchAPI": () => (/* binding */ fetchAPI)
/* harmony export */ });
function getStrapiURL(path = '') {
  return `${"https://zse-cisco-5v79m.ondigitalocean.app" || 0}${path}`;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": () => (/* binding */ getStrapiMedia)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./utils/api.js");

function getStrapiMedia({
  url
}) {
  const imageUrl = url.startsWith('/') ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;
  return imageUrl;
}

/***/ }),

/***/ "./public/nprogress.css":
/*!******************************!*\
  !*** ./public/nprogress.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1R0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUVPLE1BQU1DLFdBQVcsR0FBR0QsZ0VBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0MsV0FBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxNQUFNLENBQUM7QUFBRUYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsRUFBTixDQUFTRSxZQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FBQztBQUFFSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxFQUFOLENBQVNHLFdBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxDQUFDO0FBQUVKLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0ksV0FBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixDQUFDO0FBQUVMLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsZUFBZ0I7QUFDcEUsYUFBYSxDQUFDO0FBQUVQLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYUUsS0FBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLENBQUM7QUFBRVIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1MsUUFBTixDQUFlQyxJQUFLO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFVixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVFLE1BQU87QUFDdEQ7QUFDQTtBQUNBLE1BQU0sQ0FBQztBQUFFWCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxFQUFOLENBQVNXLE1BQU87QUFDckMsaUJBQWlCLENBQUM7QUFBRVosRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1MsUUFBTixDQUFlSSxZQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFYixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVLLFNBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFZCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVNLFNBQVU7QUFDekQsYUFBYSxDQUFDO0FBQUVmLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYVUsS0FBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVoQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVRLFlBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVqQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVTLGFBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVsQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVVLFlBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFbkIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1MsUUFBTixDQUFlQyxJQUFLO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFVixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTSxNQUFOLENBQWFVLEtBQU07QUFDbkQscUJBQXFCLENBQUM7QUFBRWhCLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZUMsSUFBSztBQUN4RDtBQUNBO0FBQ0EscUJBQXFCLENBQUM7QUFBRVYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ00sTUFBTixDQUFhVSxLQUFNO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFaEIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1MsUUFBTixDQUFlQyxJQUFLO0FBQ3BEO0FBQ0E7QUFDQSxDQWpITzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQLE1BQU1VLEtBQUssR0FBRztBQUNaZCxFQUFBQSxNQUFNLEVBQUU7QUFDTlUsSUFBQUEsS0FBSyxFQUFFLFNBREQ7QUFFTlIsSUFBQUEsS0FBSyxFQUFFLFNBRkQ7QUFHTmEsSUFBQUEsZUFBZSxFQUFFLFNBSFg7QUFJTkMsSUFBQUEsZUFBZSxFQUFFLFNBSlg7QUFLTmYsSUFBQUEsZUFBZSxFQUFFLFNBTFg7QUFNTmdCLElBQUFBLFNBQVMsRUFBRSxTQU5MO0FBT05DLElBQUFBLFdBQVcsRUFBRSxTQVBQO0FBUU5DLElBQUFBLGtCQUFrQixFQUFFLFNBUmQ7QUFTTkMsSUFBQUEsV0FBVyxFQUFFLFNBVFA7QUFVTkMsSUFBQUEsZUFBZSxFQUFFLFNBVlg7QUFXTkMsSUFBQUEsa0JBQWtCLEVBQUU7QUFYZDtBQURJLENBQWQ7QUFnQkEsTUFBTUMsSUFBSSxHQUFHO0FBQ1h2QixFQUFBQSxNQUFNLEVBQUU7QUFDTlUsSUFBQUEsS0FBSyxFQUFFLFNBREQ7QUFFTlIsSUFBQUEsS0FBSyxFQUFFLFNBRkQ7QUFHTmEsSUFBQUEsZUFBZSxFQUFFLFNBSFg7QUFJTkMsSUFBQUEsZUFBZSxFQUFFLFNBSlg7QUFLTmYsSUFBQUEsZUFBZSxFQUFFLFNBTFg7QUFNTmdCLElBQUFBLFNBQVMsRUFBRSxTQU5MO0FBT05DLElBQUFBLFdBQVcsRUFBRSxTQVBQO0FBUU5DLElBQUFBLGtCQUFrQixFQUFFLFNBUmQ7QUFTTkMsSUFBQUEsV0FBVyxFQUFFLFNBVFA7QUFVTkMsSUFBQUEsZUFBZSxFQUFFLFNBVlg7QUFXTkMsSUFBQUEsa0JBQWtCLEVBQUU7QUFYZDtBQURHLENBQWI7QUFnQkEsTUFBTUUsWUFBWSxHQUFHO0FBQ25CckIsRUFBQUEsUUFBUSxFQUFFO0FBQ1JFLElBQUFBLE1BQU0sRUFBRSxRQURBO0FBRVJFLElBQUFBLFlBQVksRUFBRSxNQUZOO0FBR1JFLElBQUFBLFNBQVMsRUFBRSxRQUhIO0FBSVJnQixJQUFBQSxPQUFPLEVBQUUsUUFKRDtBQUtSakIsSUFBQUEsU0FBUyxFQUFFLE1BTEg7QUFNUmtCLElBQUFBLE9BQU8sRUFBRSxRQU5EO0FBT1JmLElBQUFBLFlBQVksRUFBRSxNQVBOO0FBUVJnQixJQUFBQSxrQkFBa0IsRUFBRSxRQVJaO0FBU1JmLElBQUFBLGFBQWEsRUFBRSxRQVRQO0FBVVJDLElBQUFBLFlBQVksRUFBRSxRQVZOO0FBV1JULElBQUFBLElBQUksRUFBRSxRQVhFO0FBWVJ3QixJQUFBQSxTQUFTLEVBQUU7QUFaSCxHQURTO0FBZW5CQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsRUFBRSxFQUFFLE1BREc7QUFFUEMsSUFBQUEsQ0FBQyxFQUFFLE1BRkk7QUFHUEMsSUFBQUEsQ0FBQyxFQUFFLE1BSEk7QUFJUEMsSUFBQUEsRUFBRSxFQUFFLEtBSkc7QUFLUEMsSUFBQUEsQ0FBQyxFQUFFLEtBTEk7QUFPUEMsSUFBQUEsSUFBSSxFQUFFLE9BUEM7QUFRUEMsSUFBQUEsR0FBRyxFQUFFLE1BUkU7QUFTUEMsSUFBQUEsRUFBRSxFQUFFLE1BVEc7QUFVUEMsSUFBQUEsRUFBRSxFQUFFLE1BVkc7QUFXUEMsSUFBQUEsR0FBRyxFQUFFLE1BWEU7QUFZUEMsSUFBQUEsRUFBRSxFQUFFLE1BWkc7QUFhUEMsSUFBQUEsR0FBRyxFQUFFO0FBYkUsR0FmVTtBQThCbkJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxXQUFXLEVBQUUsYUFESDtBQUVWQyxJQUFBQSxpQkFBaUIsRUFBRSxVQUZUO0FBR1ZDLElBQUFBLFNBQVMsRUFBRSxPQUhEO0FBSVZDLElBQUFBLGtCQUFrQixFQUFFLFdBSlY7QUFLVkMsSUFBQUEsZ0JBQWdCLEVBQUUsUUFMUjtBQU1WQyxJQUFBQSxpQkFBaUIsRUFBRTtBQU5ULEdBOUJPO0FBc0NuQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLFlBQVksRUFBRSxLQURUO0FBRUxDLElBQUFBLFNBQVMsRUFBRTtBQUZOLEdBdENZO0FBMENuQnhELEVBQUFBLEVBQUUsRUFBRTtBQUNGeUQsSUFBQUEsZUFBZSxFQUFHLDRCQURoQjtBQUVGQyxJQUFBQSxPQUFPLEVBQUcsNEJBRlI7QUFHRnRELElBQUFBLFdBQVcsRUFBRyw2RUFIWjtBQUlGdUQsSUFBQUEsV0FBVyxFQUFHLDRCQUpaO0FBS0ZDLElBQUFBLFdBQVcsRUFBRyw0QkFMWjtBQU1GQyxJQUFBQSxNQUFNLEVBQUcsNEJBTlA7QUFPRkMsSUFBQUEsV0FBVyxFQUFHLDRCQVBaO0FBUUZuRCxJQUFBQSxNQUFNLEVBQUcsMkJBUlA7QUFTRlYsSUFBQUEsV0FBVyxFQUFHLDJCQVRaO0FBVUZDLElBQUFBLFlBQVksRUFBRywyQkFWYjtBQVdGQyxJQUFBQSxXQUFXLEVBQUc7QUFYWjtBQTFDZSxDQUFyQjtBQXlETyxNQUFNNEQsVUFBVSxtQ0FBUWxDLFlBQVIsR0FBeUJWLEtBQXpCLENBQWhCO0FBQ0EsTUFBTTZDLFNBQVMsbUNBQVFuQyxZQUFSLEdBQXlCRCxJQUF6QixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFGUDs7QUFFQSxNQUFNdUMsV0FBVyxHQUFHLENBQUNDLEtBQUssR0FBRyxLQUFULEtBQW1CO0FBQ3JDRixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNRyxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQiw4QkFBbEIsRUFBa0RDLE9BQWxELElBQTZESixLQUFyRjs7QUFFQSxRQUFJSyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsTUFBcUMsSUFBekMsRUFBK0M7QUFDN0NELE1BQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixVQUFyQixFQUFpQ04sZUFBakM7QUFDRDs7QUFDRE8sSUFBQUEsa0JBQWtCLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBWCxDQUFELENBQWxCO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFFBQU07QUFBQSxPQUFDSyxlQUFEO0FBQUEsT0FBa0JIO0FBQWxCLE1BQXdDWCwrQ0FBUSxDQUFDRyxLQUFELENBQXREOztBQUVBLFFBQU1ZLG9CQUFvQixHQUFHLE1BQU07QUFDakNKLElBQUFBLGtCQUFrQixDQUFFSyxTQUFELElBQWUsQ0FBQ0EsU0FBakIsQ0FBbEI7QUFDQVIsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDLENBQUNJLGVBQWxDO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQ0xBLElBQUFBLGVBREs7QUFFTEMsSUFBQUE7QUFGSyxHQUFQO0FBSUQsQ0FyQkQ7O0FBdUJBLGlFQUFlYixXQUFmOzs7Ozs7Ozs7OztBQ3pCYTs7QUFDYmUsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUgsbURBQWtEO0FBQzlDSSxFQUFBQSxVQUFVLEVBQUUsSUFEa0M7QUFFOUNDLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT0MsTUFBTSxDQUFDQyxlQUFkO0FBQ0g7QUFKNkMsQ0FBbEQ7QUFNQVAsdURBQXNEO0FBQ2xESSxFQUFBQSxVQUFVLEVBQUUsSUFEc0M7QUFFbERDLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT0MsTUFBTSxDQUFDRSxtQkFBZDtBQUNIO0FBSmlELENBQXREO0FBTUFOLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJUSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSU4sTUFBTSxHQUFHTSxtQkFBTyxDQUFDLGdEQUFELENBQXBCOztBQUNBLFNBQVNDLGtCQUFULENBQTRCQyxHQUE1QixFQUFpQ0MsT0FBakMsRUFBMENDLE1BQTFDLEVBQWtEQyxLQUFsRCxFQUF5REMsTUFBekQsRUFBaUVDLEdBQWpFLEVBQXNFQyxHQUF0RSxFQUEyRTtBQUN2RSxNQUFJO0FBQ0EsUUFBSUMsSUFBSSxHQUFHUCxHQUFHLENBQUNLLEdBQUQsQ0FBSCxDQUFTQyxHQUFULENBQVg7QUFDQSxRQUFJakIsS0FBSyxHQUFHa0IsSUFBSSxDQUFDbEIsS0FBakI7QUFDSCxHQUhELENBR0UsT0FBT21CLEtBQVAsRUFBYztBQUNaTixJQUFBQSxNQUFNLENBQUNNLEtBQUQsQ0FBTjtBQUNBO0FBQ0g7O0FBQ0QsTUFBSUQsSUFBSSxDQUFDRSxJQUFULEVBQWU7QUFDWFIsSUFBQUEsT0FBTyxDQUFDWixLQUFELENBQVA7QUFDSCxHQUZELE1BRU87QUFDSHFCLElBQUFBLE9BQU8sQ0FBQ1QsT0FBUixDQUFnQlosS0FBaEIsRUFBdUJzQixJQUF2QixDQUE0QlIsS0FBNUIsRUFBbUNDLE1BQW5DO0FBQ0g7QUFDSjs7QUFDRCxTQUFTUSxpQkFBVCxDQUEyQkMsRUFBM0IsRUFBK0I7QUFDM0IsU0FBTyxZQUFXO0FBQ2QsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFBQSxRQUFpQkMsSUFBSSxHQUFHQyxTQUF4QjtBQUNBLFdBQU8sSUFBSU4sT0FBSixDQUFZLFVBQVNULE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDLFVBQUlGLEdBQUcsR0FBR2EsRUFBRSxDQUFDSSxLQUFILENBQVNILElBQVQsRUFBZUMsSUFBZixDQUFWOztBQUNBLGVBQVNaLEtBQVQsQ0FBZWQsS0FBZixFQUFzQjtBQUNsQlUsUUFBQUEsa0JBQWtCLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFlQyxNQUFmLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0MsTUFBdEMsRUFBOENmLEtBQTlDLENBQWxCO0FBQ0g7O0FBQ0QsZUFBU2UsTUFBVCxDQUFnQmMsR0FBaEIsRUFBcUI7QUFDakJuQixRQUFBQSxrQkFBa0IsQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWVDLE1BQWYsRUFBdUJDLEtBQXZCLEVBQThCQyxNQUE5QixFQUFzQyxPQUF0QyxFQUErQ2MsR0FBL0MsQ0FBbEI7QUFDSDs7QUFDRGYsTUFBQUEsS0FBSyxDQUFDZ0IsU0FBRCxDQUFMO0FBQ0gsS0FUTSxDQUFQO0FBVUgsR0FaRDtBQWFIOztBQUNELFNBQVN0QixzQkFBVCxDQUFnQ3VCLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ3pCLElBQUFBLE9BQU8sRUFBRXlCO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBU0UsbUJBQVQsR0FBK0I7QUFDM0JBLEVBQUFBLG1CQUFtQjtBQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUFJVixFQUFBQSxpQkFBaUIsQ0FBQyxXQUFVO0FBQUVXLElBQUFBLFNBQUY7QUFBY0MsSUFBQUE7QUFBZCxHQUFWLEVBQWdDO0FBQzlDLFVBQU1DLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBR2pDLE1BQUosRUFBWWtDLG1CQUFaLENBQWdDSCxTQUFoQyxFQUEyQ0MsR0FBM0MsQ0FBeEI7QUFDQSxXQUFPO0FBQ0hDLE1BQUFBO0FBREcsS0FBUDtBQUdILEdBTGdCLENBSGpCO0FBU0EsU0FBT0gsbUJBQW1CLENBQUNMLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDRCxTQUFoQyxDQUFQO0FBQ0g7O0FBQ0QsU0FBU1csa0JBQVQsQ0FBNEJDLENBQTVCLEVBQStCO0FBQzNCLFNBQU9OLG1CQUFtQixDQUFDTCxLQUFwQixDQUEwQixJQUExQixFQUFnQ0QsU0FBaEMsQ0FBUDtBQUNIOztBQUNELE1BQU1hLEdBQU4sU0FBa0JqQyxNQUFNLENBQUNELE9BQVAsQ0FBZTRCLFNBQWpDLENBQTJDO0FBQ3ZDTyxFQUFBQSxNQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVQLE1BQUFBLFNBQUY7QUFBY0UsTUFBQUE7QUFBZCxRQUE2QixLQUFLTSxLQUF4QztBQUNBLFdBQU8sYUFBY25DLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlcUMsYUFBZixDQUE2QlQsU0FBN0IsRUFBd0NyQyxNQUFNLENBQUMrQyxNQUFQLENBQWMsRUFBZCxFQUMxRFIsU0FEMEQsQ0FBeEMsQ0FBckI7QUFFSDs7QUFMc0M7O0FBTzNDSSxHQUFHLENBQUNLLG1CQUFKLEdBQTBCUCxrQkFBMUI7QUFDQUUsR0FBRyxDQUFDTSxlQUFKLEdBQXNCUixrQkFBdEI7QUFDQXZDLGVBQUEsR0FBa0J5QyxHQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNaUIsS0FBSyxHQUFHLENBQUM7QUFBRXZCLEVBQUFBLFNBQUY7QUFBYUUsRUFBQUE7QUFBYixDQUFELEtBQThCO0FBQzFDLFFBQU07QUFBQSxPQUFDc0IsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEIvRSwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2Q4RSxJQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFFBQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVXLElBQUFBO0FBQUYsTUFBYXpCLFNBQW5COztBQUVBLE1BQUl5QixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNsQix3QkFBTywrREFBQyxvREFBRDtBQUFXLGdCQUFVLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELFFBQU07QUFDSkMsSUFBQUEsT0FESTtBQUVKQyxJQUFBQSxVQUFVLEVBQUU7QUFBRUMsTUFBQUEsZUFBRjtBQUFtQkMsTUFBQUEsU0FBbkI7QUFBOEJDLE1BQUFBLGVBQTlCO0FBQStDQyxNQUFBQTtBQUEvQztBQUZSLE1BR0ZOLE1BSEo7QUFLQSxRQUFNO0FBQUVuRSxJQUFBQSxlQUFGO0FBQW1CQyxJQUFBQTtBQUFuQixNQUE0Q2IsMkRBQVcsQ0FBQyxLQUFELENBQTdEO0FBRUEsUUFBTXBFLEtBQUssR0FBR2dGLGVBQWUsR0FBR2YsMkRBQUgsR0FBZUQsNERBQTVDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSwrREFBQyxrREFBRDtBQUFBLDZCQUFPO0FBQU0sV0FBRyxFQUFDLGVBQVY7QUFBMEIsWUFBSSxFQUFFMkUsMkRBQWMsQ0FBQ1MsT0FBRDtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLCtEQUFDLGlEQUFEO0FBQ0UsbUJBQWEsRUFBRyxRQUFPRSxlQUFnQixFQUR6QztBQUVFLFdBQUssRUFBRUMsU0FGVDtBQUdFLGlCQUFXLEVBQUVDLGVBSGY7QUFJRSxlQUFTLG9CQUNIQyxXQUFXLElBQ2JBLFdBQVcsQ0FBQ0MsT0FEVixJQUNxQjtBQUNyQkMsUUFBQUEsTUFBTSxFQUFFeEUsTUFBTSxDQUFDeUUsTUFBUCxDQUFjSCxXQUFXLENBQUNDLE9BQTFCLEVBQW1DRyxHQUFuQyxDQUF3Q0MsS0FBRCxJQUFXO0FBQ3hELGlCQUFPO0FBQ0xDLFlBQUFBLEdBQUcsRUFBRXBCLDJEQUFjLENBQUNtQixLQUFELENBRGQ7QUFFTEUsWUFBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNFLEtBRlI7QUFHTEMsWUFBQUEsTUFBTSxFQUFFSCxLQUFLLENBQUNHO0FBSFQsV0FBUDtBQUtELFNBTk87QUFEYSxPQUZsQjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFtQkUsK0RBQUMsNkRBQUQ7QUFBZSxXQUFLLEVBQUVqSyxLQUF0QjtBQUFBLDhCQUNFLCtEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSwrREFBQywwREFBRDtBQUFhLGNBQU0sRUFBRWtKLE1BQXJCO0FBQTZCLDRCQUFvQixFQUFFakUsb0JBQW5EO0FBQXlFLHVCQUFlLEVBQUVELGVBQTFGO0FBQUEsa0JBQ0dnRSxTQUFTLGlCQUFJLCtEQUFDLFNBQUQsb0JBQWV0QixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGO0FBQUEsa0JBREY7QUE0QkQsQ0FuREQ7O0FBcURBcUIsS0FBSyxDQUFDbUIsU0FBTixHQUFrQjtBQUNoQjFDLEVBQUFBLFNBQVMsRUFBRWEsd0RBREs7QUFFaEJYLEVBQUFBLFNBQVMsRUFBRVksOERBQWNBO0FBRlQsQ0FBbEI7QUFLQVMsS0FBSyxDQUFDcUIsWUFBTixHQUFxQjtBQUNuQjFDLEVBQUFBLFNBQVMsRUFBRTtBQUNUeUIsSUFBQUEsTUFBTSxFQUFFO0FBQ05FLE1BQUFBLFVBQVUsRUFBRTtBQUNWRyxRQUFBQSxlQUFlLEVBQUUsMERBRFA7QUFFVkQsUUFBQUEsU0FBUyxFQUFFLGdCQUZEO0FBR1ZELFFBQUFBLGVBQWUsRUFBRTtBQUhQO0FBRE47QUFEQztBQURRLENBQXJCLEVBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FQLEtBQUssQ0FBQ1gsZUFBTixHQUF3QixNQUFPWCxHQUFQLElBQWU7QUFDckMsUUFBTTRDLFFBQVEsR0FBRyxNQUFNdkMsK0RBQUEsQ0FBb0JMLEdBQXBCLENBQXZCO0FBQ0EsUUFBTTBCLE1BQU0sR0FBRyxNQUFNVCxtREFBUSxDQUFDLFNBQUQsQ0FBN0I7QUFFQSx5Q0FBWTJCLFFBQVo7QUFBc0IzQyxJQUFBQSxTQUFTLEVBQUU7QUFBRXlCLE1BQUFBO0FBQUY7QUFBakM7QUFDRCxDQUxEOztBQU9BLGlFQUFlSixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUVPLE1BQU1ULGNBQWMsR0FBR0QsdURBQUEsQ0FBZ0I7QUFDNUNjLEVBQUFBLE1BQU0sRUFBRWQsdURBQUEsQ0FBZ0I7QUFDdEJnQixJQUFBQSxVQUFVLEVBQUVoQix1REFBQSxDQUFnQjtBQUMxQmtDLE1BQUFBLEVBQUUsRUFBRWxDLDBEQURzQjtBQUUxQm1CLE1BQUFBLGVBQWUsRUFBRW5CLHFFQUZTO0FBRzFCa0IsTUFBQUEsU0FBUyxFQUFFbEIscUVBSGU7QUFJMUJpQixNQUFBQSxlQUFlLEVBQUVqQiwwREFKUztBQUsxQm9CLE1BQUFBLFdBQVcsRUFBRXBCLDBEQUFnQnNDO0FBTEgsS0FBaEIsQ0FEVTtBQVF0QnZCLElBQUFBLE9BQU8sRUFBRWYsMERBUmE7QUFTdEJrQyxJQUFBQSxFQUFFLEVBQUVsQywwREFBZ0JtQztBQVRFLEdBQWhCLENBRG9DO0FBWTVDSSxFQUFBQSxVQUFVLEVBQUV2QywwREFaZ0M7QUFhNUN3QyxFQUFBQSxRQUFRLEVBQUV4Qyx5REFBQSxDQUFrQkEsMERBQWxCLENBYmtDO0FBYzVDMEMsRUFBQUEsR0FBRyxFQUFFMUMsMERBQWdCc0M7QUFkdUIsQ0FBaEIsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTs7QUFFTyxNQUFNTyxVQUFVLGdCQUFHRixvREFBYSxDQUFDO0FBQ3RDRyxFQUFBQSxTQUFTLEVBQUUsS0FEMkI7QUFFdENDLEVBQUFBLFNBQVMsRUFBRSxLQUYyQjtBQUd0Q0MsRUFBQUEsWUFBWSxFQUFFLE1BQU0sQ0FBRTtBQUhnQixDQUFELENBQWhDOztBQU1QLE1BQU05QyxXQUFXLEdBQUcsQ0FBQztBQUFFK0MsRUFBQUEsUUFBRjtBQUFZcEMsRUFBQUEsTUFBWjtBQUFvQmpFLEVBQUFBLG9CQUFwQjtBQUEwQ0QsRUFBQUE7QUFBMUMsQ0FBRCxLQUFpRTtBQUNuRixRQUFNO0FBQUEsT0FBQ21HLFNBQUQ7QUFBQSxPQUFZSTtBQUFaLE1BQTRCckgsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNrSCxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qm5ILCtDQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxNQUFJZ0YsTUFBSixFQUFZO0FBQ1YvRSxJQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxZQUFNcUgsV0FBVyxHQUFHLE1BQU07QUFDeEJQLFFBQUFBLDBEQUFBLENBQW9CO0FBQUVTLFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBQXBCO0FBQ0FILFFBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDQU4sUUFBQUEsc0RBQUE7QUFDRCxPQUpEOztBQUtBLFlBQU1XLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCTCxRQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FOLFFBQUFBLHFEQUFBO0FBQ0QsT0FIRDs7QUFLQS9CLE1BQUFBLE1BQU0sQ0FBQzJDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNOLFdBQXJDO0FBQ0F0QyxNQUFBQSxNQUFNLENBQUMyQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDRixVQUF4QztBQUNBMUMsTUFBQUEsTUFBTSxDQUFDMkMsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0YsVUFBckM7QUFFQSxhQUFPLE1BQU07QUFDWDFDLFFBQUFBLE1BQU0sQ0FBQzJDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NQLFdBQXRDO0FBQ0F0QyxRQUFBQSxNQUFNLENBQUMyQyxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDSCxVQUF6QztBQUNBMUMsUUFBQUEsTUFBTSxDQUFDMkMsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0gsVUFBdEM7QUFDRCxPQUpEO0FBS0QsS0FwQlEsRUFvQk4sQ0FBQzFDLE1BQUQsQ0FwQk0sQ0FBVDtBQXFCRDs7QUFFRCxzQkFDRSw4REFBQyxVQUFELENBQVksUUFBWjtBQUNFLFNBQUssRUFBRTtBQUNMaUMsTUFBQUEsU0FESztBQUVMQyxNQUFBQSxTQUZLO0FBR0xDLE1BQUFBLFlBSEs7QUFJTHBHLE1BQUFBLG9CQUpLO0FBS0xELE1BQUFBO0FBTEssS0FEVDtBQUFBLGNBU0dzRztBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBekNEOztBQTJDQSxpRUFBZS9DLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRE8sU0FBU3lELFlBQVQsQ0FBc0JDLElBQUksR0FBRyxFQUE3QixFQUFpQztBQUN0QyxTQUFRLEdBQUVDLDRDQUFBLElBQTBDLENBQXdCLEdBQUVELElBQUssRUFBbkY7QUFDRCxFQUVEOztBQUNPLGVBQWV2RCxRQUFmLENBQXdCdUQsSUFBeEIsRUFBOEI7QUFDbkMsUUFBTUksVUFBVSxHQUFHTCxZQUFZLENBQUNDLElBQUQsQ0FBL0I7QUFDQSxRQUFNSyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixVQUFELENBQTVCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUNBLFNBQU9ELElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBRU8sU0FBUzdELGNBQVQsQ0FBd0I7QUFBRW9CLEVBQUFBO0FBQUYsQ0FBeEIsRUFBaUM7QUFDdEMsUUFBTTJDLFFBQVEsR0FBRzNDLEdBQUcsQ0FBQzRDLFVBQUosQ0FBZSxHQUFmLElBQXNCWCxrREFBWSxDQUFDakMsR0FBRCxDQUFsQyxHQUEwQ0EsR0FBM0Q7QUFDQSxTQUFPMkMsUUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9hc3NldHMvc3R5bGVzL0dsb2JhbFN0eWxlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2Fzc2V0cy9zdHlsZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vaG9va3MvdXNlRGFya01vZGUuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vcHJvcFR5cGVzL2FwcFR5cGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3Byb3ZpZGVycy9BcHBQcm92aWRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZXJyb3JcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTWVkaXVtfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVTbWFsbH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICBcclxufVxyXG5cclxuYSwgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICBcclxufVxyXG5cclxuYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJNb2JpbGV9O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YkhlYWRlcn07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2SGVhZGVyfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvbkxhcmdlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvbk1lZGl1bX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuaDYge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmNhcHRpb25TbWFsbH07XHJcbiAgIFxyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxudWwge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuXHJcbiAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX1cclxufVxyXG5cclxuYDtcclxuIiwiY29uc3QgbGlnaHQgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICB3aGl0ZTogJyNGRkZGRkYnLFxyXG4gICAgYmxhY2s6ICcjMDAwMDAwJyxcclxuICAgIGJhY2tncm91bmRMaWdodDogJyNGRkZGRkYnLFxyXG4gICAgYmFja2dyb3VuZFdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRThFQkYxJyxcclxuICAgIG1haW5Db2xvcjogJyMwRDI3NEQnLFxyXG4gICAgYWNjZW50Q29sb3I6ICcjMDBCQ0ZGJyxcclxuICAgIGxpZ2h0ZXJBY2NlbnRDb2xvcjogJyMwMGNkZmYnLFxyXG4gICAgYnV0dG9uQ29sb3I6ICcjMEQyNzREJyxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgbGlnaHRlckJ1dHRvbkNvbG9yOiAnIzEwMzM2OScsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGRhcmsgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICB3aGl0ZTogJyNlNmU2ZTYnLFxyXG4gICAgYmxhY2s6ICcjZTZlNmU2JyxcclxuICAgIGJhY2tncm91bmRMaWdodDogJyMxNDE2MWEnLFxyXG4gICAgYmFja2dyb3VuZFdoaXRlOiAnIzEwMTExNCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTAxMTE0JyxcclxuICAgIG1haW5Db2xvcjogJyMwYjFiMzAnLFxyXG4gICAgYWNjZW50Q29sb3I6ICcjMDBhNGRlJyxcclxuICAgIGxpZ2h0ZXJBY2NlbnRDb2xvcjogJyMwMEJDRkYnLFxyXG4gICAgYnV0dG9uQ29sb3I6ICcjMDBhNGRlJyxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogJyMwYjFiMzAnLFxyXG4gICAgbGlnaHRlckJ1dHRvbkNvbG9yOiAnIzAwQkNGRicsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRUaGVtZSA9IHtcclxuICBmb250U2l6ZToge1xyXG4gICAgaGVhZGVyOiAnNC44cmVtJyxcclxuICAgIGhlYWRlck1vYmlsZTogJzRyZW0nLFxyXG4gICAgbmF2SGVhZGVyOiAnMy42cmVtJyxcclxuICAgIG5hdkxpc3Q6ICcxLjhyZW0nLFxyXG4gICAgc3ViSGVhZGVyOiAnMnJlbScsXHJcbiAgICBzdWJUZXh0OiAnMS44cmVtJyxcclxuICAgIGNhcHRpb25MYXJnZTogJzNyZW0nLFxyXG4gICAgY2FwdGlvbkxhcmdlTWVkaXVtOiAnMi40cmVtJyxcclxuICAgIGNhcHRpb25NZWRpdW06ICcxLjNyZW0nLFxyXG4gICAgY2FwdGlvblNtYWxsOiAnMS4ycmVtJyxcclxuICAgIGJvZHk6ICcxLjZyZW0nLFxyXG4gICAgYm9keVNtYWxsOiAnMS40cmVtJyxcclxuICB9LFxyXG4gIHBhZGRpbmc6IHtcclxuICAgIHhsOiAnMTh2dycsXHJcbiAgICB4OiAnMTV2dycsXHJcbiAgICBtOiAnMTB2dycsXHJcbiAgICB4czogJzh2dycsXHJcbiAgICBzOiAnNXZ3JyxcclxuXHJcbiAgICB4eGxWOiAnMTByZW0nLFxyXG4gICAgeGxWOiAnOHJlbScsXHJcbiAgICB4VjogJzdyZW0nLFxyXG4gICAgbVY6ICc1cmVtJyxcclxuICAgIHhzVjogJzRyZW0nLFxyXG4gICAgc1Y6ICczcmVtJyxcclxuICAgIHNzVjogJzJyZW0nLFxyXG4gIH0sXHJcbiAgZGltZW5zaW9uczoge1xyXG4gICAgdGlsZVBhZGRpbmc6ICc0cmVtIDMuNXJlbScsXHJcbiAgICB0aWxlUGFkZGluZ01vYmlsZTogJzNyZW0gNXZ3JyxcclxuICAgIHRpbGVXaWR0aDogJzY1cmVtJyxcclxuICAgIHBhZ2VTZWN0aW9uUGFkZGluZzogJzRyZW0gNXJlbScsXHJcbiAgICBwYWdlU2VjdGlvbldpZHRoOiAnMTAwcmVtJyxcclxuICAgIHJpY2hUZXh0TWFyZ2luVG9wOiAnNHJlbScsXHJcbiAgfSxcclxuICB1dGlsczoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIGJveFNoYWRvdzogJzBweCA0cHggMTRweCAgcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICB9LFxyXG4gIG1xOiB7XHJcbiAgICBoZXJvSW5zdHJ1Y3RvcnM6IGBAbWVkaWEgKG1pbi13aWR0aDogMTU3MHB4KWAsXHJcbiAgICBkZXNrdG9wOiBgQG1lZGlhIChtYXgtd2lkdGg6IDE1NTBweClgLFxyXG4gICAgZGVza3RvcFRhbGw6IGBAbWVkaWEgKG1pbi1oZWlnaHQ6IDExMDBweCkgYW5kIChtaW4td2lkdGg6IDEwMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0MDBweClgLFxyXG4gICAgZGVza3RvcFdpZGU6IGBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KWAsXHJcbiAgICBsYXB0b3BMYXJnZTogYEBtZWRpYSAobWF4LXdpZHRoOiAxNDUwcHgpYCxcclxuICAgIGxhcHRvcDogYEBtZWRpYSAobWF4LXdpZHRoOiAxMjI0cHgpYCxcclxuICAgIHRhYmxldExhcmdlOiBgQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweClgLFxyXG4gICAgdGFibGV0OiBgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KWAsXHJcbiAgICBtb2JpbGVMYXJnZTogYEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweClgLFxyXG4gICAgbW9iaWxlTWVkaXVtOiBgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KWAsXHJcbiAgICBtb2JpbGVTbWFsbDogYEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweClgLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlnaHRUaGVtZSA9IHsgLi4uZGVmYXVsdFRoZW1lLCAuLi5saWdodCB9O1xyXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0geyAuLi5kZWZhdWx0VGhlbWUsIC4uLmRhcmsgfTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZURhcmtNb2RlID0gKHN0YXRlID0gZmFsc2UpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdERhcmtNb2RlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzIHx8IHN0YXRlO1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKSA9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCBkZWZhdWx0RGFya01vZGUpO1xyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudERhcmtNb2RlKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJykpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50RGFya01vZGUsIHNldEN1cnJlbnREYXJrTW9kZV0gPSB1c2VTdGF0ZShzdGF0ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURhcmtNb2RlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudERhcmtNb2RlKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgIWN1cnJlbnREYXJrTW9kZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGN1cnJlbnREYXJrTW9kZSxcclxuICAgIGhhbmRsZURhcmtNb2RlQ2hhbmdlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VEYXJrTW9kZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHBhZ2VQcm9wc1NoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2FwcFR5cGVzJztcclxuaW1wb3J0IEFwcFByb3ZpZGVyIGZyb20gJ3Byb3ZpZGVycy9BcHBQcm92aWRlcic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICdwdWJsaWMvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJ3V0aWxzL2FwaSc7XHJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSAndXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSBmcm9tICdhc3NldHMvc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICdhc3NldHMvc3R5bGVzL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJztcclxuaW1wb3J0IHVzZURhcmtNb2RlIGZyb20gJ2hvb2tzL3VzZURhcmtNb2RlJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzO1xyXG5cclxuICBpZiAoZ2xvYmFsID09IG51bGwpIHtcclxuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBmYXZpY29uLFxyXG4gICAgZGVmYXVsdFNlbzogeyBtZXRhVGl0bGVTdWZmaXgsIG1ldGFUaXRsZSwgbWV0YURlc2NyaXB0aW9uLCBzaGFyZWRJbWFnZSB9LFxyXG4gIH0gPSBnbG9iYWw7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudERhcmtNb2RlLCBoYW5kbGVEYXJrTW9kZUNoYW5nZSB9ID0gdXNlRGFya01vZGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IGN1cnJlbnREYXJrTW9kZSA/IGRhcmtUaGVtZSA6IGxpZ2h0VGhlbWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD57PGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9e2dldFN0cmFwaU1lZGlhKGZhdmljb24pfSAvPn08L0hlYWQ+XHJcbiAgICAgIDxEZWZhdWx0U2VvXHJcbiAgICAgICAgdGl0bGVUZW1wbGF0ZT17YCVzIHwgJHttZXRhVGl0bGVTdWZmaXh9YH1cclxuICAgICAgICB0aXRsZT17bWV0YVRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259XHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICAuLi4oc2hhcmVkSW1hZ2UgJiZcclxuICAgICAgICAgICAgc2hhcmVkSW1hZ2UuZm9ybWF0cyAmJiB7XHJcbiAgICAgICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNoYXJlZEltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8QXBwUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IGhhbmRsZURhcmtNb2RlQ2hhbmdlPXtoYW5kbGVEYXJrTW9kZUNoYW5nZX0gY3VycmVudERhcmtNb2RlPXtjdXJyZW50RGFya01vZGV9PlxyXG4gICAgICAgICAge2lzTW91bnRlZCAmJiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+fVxyXG4gICAgICAgIDwvQXBwUHJvdmlkZXI+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuICBwYWdlUHJvcHM6IHBhZ2VQcm9wc1NoYXBlLFxyXG59O1xyXG5cclxuTXlBcHAuZGVmYXVsdFByb3BzID0ge1xyXG4gIHBhZ2VQcm9wczoge1xyXG4gICAgZ2xvYmFsOiB7XHJcbiAgICAgIGRlZmF1bHRTZW86IHtcclxuICAgICAgICBtZXRhRGVzY3JpcHRpb246ICdBa2FkZW1pYSBDaXNjbyB3IFplc3BvbGUgU3prw7PFgiBFbGVrdHJvbmljem55Y2ggdyBSYWRvbWl1JyxcclxuICAgICAgICBtZXRhVGl0bGU6ICdBa2FkZW1pYSBDaXNjbycsXHJcbiAgICAgICAgbWV0YVRpdGxlU3VmZml4OiAnWmVzcMOzxYIgU3prw7PFgiBFbGVrdHJvbmljem55Y2gnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XHJcbi8vIGhhdmUgZ2V0U3RhdGljUHJvcHMuIFNvIFtbLi4uc2x1Z11dIHBhZ2VzIHN0aWxsIGdldCBTU0cuXHJcbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGZldGNoQVBJKCcvZ2xvYmFsJyk7XHJcblxyXG4gIHJldHVybiB7IC4uLmFwcFByb3BzLCBwYWdlUHJvcHM6IHsgZ2xvYmFsIH0gfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VQcm9wc1NoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBnbG9iYWw6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBkZWZhdWx0U2VvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgbWV0YURlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIG1ldGFUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBtZXRhVGl0bGVTdWZmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHNoYXJlZEltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgfSksXHJcbiAgICBmYXZpY29uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfSksXHJcbiAgbmF2aWdhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgc2VvOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGlzTmF2T3BlbjogZmFsc2UsXHJcbiAgc2V0SXNOYXZPcGVuOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBBcHBQcm92aWRlciA9ICh7IGNoaWxkcmVuLCByb3V0ZXIsIGhhbmRsZURhcmtNb2RlQ2hhbmdlLCBjdXJyZW50RGFya01vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTmF2T3Blbiwgc2V0SXNOYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKHJvdXRlcikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHBhcmVudDogJyNsb2FkZXInIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTmF2T3BlbixcclxuICAgICAgICBzZXRJc05hdk9wZW4sXHJcbiAgICAgICAgaGFuZGxlRGFya01vZGVDaGFuZ2UsXHJcbiAgICAgICAgY3VycmVudERhcmtNb2RlLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFByb3ZpZGVyO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpVVJMKHBhdGggPSAnJykge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YDtcclxufVxyXG5cclxuLy8gSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCkge1xyXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBnZXRTdHJhcGlVUkwocGF0aCk7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYSh7IHVybCB9KSB7XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gZ2V0U3RyYXBpVVJMKHVybCkgOiB1cmw7XHJcbiAgcmV0dXJuIGltYWdlVXJsO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZSIsInRoZW1lIiwibXEiLCJtb2JpbGVMYXJnZSIsIm1vYmlsZU1lZGl1bSIsIm1vYmlsZVNtYWxsIiwiZGVza3RvcFRhbGwiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsImZvbnRTaXplIiwiYm9keSIsImhlYWRlciIsInRhYmxldCIsImhlYWRlck1vYmlsZSIsInN1YkhlYWRlciIsIm5hdkhlYWRlciIsIndoaXRlIiwiY2FwdGlvbkxhcmdlIiwiY2FwdGlvbk1lZGl1bSIsImNhcHRpb25TbWFsbCIsImxpZ2h0IiwiYmFja2dyb3VuZExpZ2h0IiwiYmFja2dyb3VuZFdoaXRlIiwibWFpbkNvbG9yIiwiYWNjZW50Q29sb3IiLCJsaWdodGVyQWNjZW50Q29sb3IiLCJidXR0b25Db2xvciIsImJ1dHRvblRleHRDb2xvciIsImxpZ2h0ZXJCdXR0b25Db2xvciIsImRhcmsiLCJkZWZhdWx0VGhlbWUiLCJuYXZMaXN0Iiwic3ViVGV4dCIsImNhcHRpb25MYXJnZU1lZGl1bSIsImJvZHlTbWFsbCIsInBhZGRpbmciLCJ4bCIsIngiLCJtIiwieHMiLCJzIiwieHhsViIsInhsViIsInhWIiwibVYiLCJ4c1YiLCJzViIsInNzViIsImRpbWVuc2lvbnMiLCJ0aWxlUGFkZGluZyIsInRpbGVQYWRkaW5nTW9iaWxlIiwidGlsZVdpZHRoIiwicGFnZVNlY3Rpb25QYWRkaW5nIiwicGFnZVNlY3Rpb25XaWR0aCIsInJpY2hUZXh0TWFyZ2luVG9wIiwidXRpbHMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJoZXJvSW5zdHJ1Y3RvcnMiLCJkZXNrdG9wIiwiZGVza3RvcFdpZGUiLCJsYXB0b3BMYXJnZSIsImxhcHRvcCIsInRhYmxldExhcmdlIiwibGlnaHRUaGVtZSIsImRhcmtUaGVtZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRGFya01vZGUiLCJzdGF0ZSIsImRlZmF1bHREYXJrTW9kZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzZXRDdXJyZW50RGFya01vZGUiLCJKU09OIiwicGFyc2UiLCJjdXJyZW50RGFya01vZGUiLCJoYW5kbGVEYXJrTW9kZUNoYW5nZSIsInByZXZTdGF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl8iLCJBcHAiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJhc3NpZ24iLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiUHJvcFR5cGVzIiwicGFnZVByb3BzU2hhcGUiLCJBcHBQcm92aWRlciIsInVzZVJvdXRlciIsIkhlYWQiLCJmZXRjaEFQSSIsImdldFN0cmFwaU1lZGlhIiwiRGVmYXVsdFNlbyIsIlRoZW1lUHJvdmlkZXIiLCJFcnJvclBhZ2UiLCJNeUFwcCIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsInJvdXRlciIsImdsb2JhbCIsImZhdmljb24iLCJkZWZhdWx0U2VvIiwibWV0YVRpdGxlU3VmZml4IiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwic2hhcmVkSW1hZ2UiLCJmb3JtYXRzIiwiaW1hZ2VzIiwidmFsdWVzIiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJhcHBQcm9wcyIsInNoYXBlIiwiaWQiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwibmF2aWdhdGlvbiIsInNlY3Rpb25zIiwiYXJyYXlPZiIsInNlbyIsImNyZWF0ZUNvbnRleHQiLCJOUHJvZ3Jlc3MiLCJBcHBDb250ZXh0IiwiaXNMb2FkaW5nIiwiaXNOYXZPcGVuIiwic2V0SXNOYXZPcGVuIiwiY2hpbGRyZW4iLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVTdGFydCIsImNvbmZpZ3VyZSIsInBhcmVudCIsInN0YXJ0IiwiaGFuZGxlU3RvcCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZ2V0U3RyYXBpVVJMIiwicGF0aCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiXSwic291cmNlUm9vdCI6IiJ9