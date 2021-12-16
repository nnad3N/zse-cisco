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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1R0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUVPLE1BQU1DLFdBQVcsR0FBR0QsZ0VBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0MsV0FBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxNQUFNLENBQUM7QUFBRUYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsRUFBTixDQUFTRSxZQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FBQztBQUFFSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxFQUFOLENBQVNHLFdBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxDQUFDO0FBQUVKLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0ksV0FBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixDQUFDO0FBQUVMLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsZUFBZ0I7QUFDcEUsYUFBYSxDQUFDO0FBQUVQLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYUUsS0FBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLENBQUM7QUFBRVIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1MsUUFBTixDQUFlQyxJQUFLO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVWLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZUUsTUFBTztBQUN0RDtBQUNBO0FBQ0EsTUFBTSxDQUFDO0FBQUVYLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU1csTUFBTztBQUNyQyxpQkFBaUIsQ0FBQztBQUFFWixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVJLFlBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUViLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZUssU0FBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVkLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZU0sU0FBVTtBQUN6RCxhQUFhLENBQUM7QUFBRWYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ00sTUFBTixDQUFhVSxLQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLENBQUM7QUFBRWhCLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZVEsWUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLENBQUM7QUFBRWpCLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZVMsYUFBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLENBQUM7QUFBRWxCLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZVUsWUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVuQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVDLElBQUs7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVWLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYVUsS0FBTTtBQUNuRCxxQkFBcUIsQ0FBQztBQUFFaEIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1MsUUFBTixDQUFlQyxJQUFLO0FBQ3hEO0FBQ0E7QUFDQSxxQkFBcUIsQ0FBQztBQUFFVixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTSxNQUFOLENBQWFVLEtBQU07QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixDQUFDO0FBQUVoQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUyxRQUFOLENBQWVDLElBQUs7QUFDcEQ7QUFDQTtBQUNBLENBL0dPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsTUFBTVUsS0FBSyxHQUFHO0FBQ1pkLEVBQUFBLE1BQU0sRUFBRTtBQUNOVSxJQUFBQSxLQUFLLEVBQUUsU0FERDtBQUVOUixJQUFBQSxLQUFLLEVBQUUsU0FGRDtBQUdOYSxJQUFBQSxlQUFlLEVBQUUsU0FIWDtBQUlOQyxJQUFBQSxlQUFlLEVBQUUsU0FKWDtBQUtOZixJQUFBQSxlQUFlLEVBQUUsU0FMWDtBQU1OZ0IsSUFBQUEsU0FBUyxFQUFFLFNBTkw7QUFPTkMsSUFBQUEsV0FBVyxFQUFFLFNBUFA7QUFRTkMsSUFBQUEsa0JBQWtCLEVBQUUsU0FSZDtBQVNOQyxJQUFBQSxXQUFXLEVBQUUsU0FUUDtBQVVOQyxJQUFBQSxlQUFlLEVBQUUsU0FWWDtBQVdOQyxJQUFBQSxrQkFBa0IsRUFBRTtBQVhkO0FBREksQ0FBZDtBQWdCQSxNQUFNQyxJQUFJLEdBQUc7QUFDWHZCLEVBQUFBLE1BQU0sRUFBRTtBQUNOVSxJQUFBQSxLQUFLLEVBQUUsU0FERDtBQUVOUixJQUFBQSxLQUFLLEVBQUUsU0FGRDtBQUdOYSxJQUFBQSxlQUFlLEVBQUUsU0FIWDtBQUlOQyxJQUFBQSxlQUFlLEVBQUUsU0FKWDtBQUtOZixJQUFBQSxlQUFlLEVBQUUsU0FMWDtBQU1OZ0IsSUFBQUEsU0FBUyxFQUFFLFNBTkw7QUFPTkMsSUFBQUEsV0FBVyxFQUFFLFNBUFA7QUFRTkMsSUFBQUEsa0JBQWtCLEVBQUUsU0FSZDtBQVNOQyxJQUFBQSxXQUFXLEVBQUUsU0FUUDtBQVVOQyxJQUFBQSxlQUFlLEVBQUUsU0FWWDtBQVdOQyxJQUFBQSxrQkFBa0IsRUFBRTtBQVhkO0FBREcsQ0FBYjtBQWdCQSxNQUFNRSxZQUFZLEdBQUc7QUFDbkJyQixFQUFBQSxRQUFRLEVBQUU7QUFDUkUsSUFBQUEsTUFBTSxFQUFFLFFBREE7QUFFUkUsSUFBQUEsWUFBWSxFQUFFLE1BRk47QUFHUkUsSUFBQUEsU0FBUyxFQUFFLFFBSEg7QUFJUmdCLElBQUFBLE9BQU8sRUFBRSxRQUpEO0FBS1JqQixJQUFBQSxTQUFTLEVBQUUsTUFMSDtBQU1Sa0IsSUFBQUEsT0FBTyxFQUFFLFFBTkQ7QUFPUmYsSUFBQUEsWUFBWSxFQUFFLE1BUE47QUFRUmdCLElBQUFBLGtCQUFrQixFQUFFLFFBUlo7QUFTUmYsSUFBQUEsYUFBYSxFQUFFLFFBVFA7QUFVUkMsSUFBQUEsWUFBWSxFQUFFLFFBVk47QUFXUlQsSUFBQUEsSUFBSSxFQUFFLFFBWEU7QUFZUndCLElBQUFBLFNBQVMsRUFBRTtBQVpILEdBRFM7QUFlbkJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxFQUFFLEVBQUUsTUFERztBQUVQQyxJQUFBQSxDQUFDLEVBQUUsTUFGSTtBQUdQQyxJQUFBQSxDQUFDLEVBQUUsTUFISTtBQUlQQyxJQUFBQSxFQUFFLEVBQUUsS0FKRztBQUtQQyxJQUFBQSxDQUFDLEVBQUUsS0FMSTtBQU9QQyxJQUFBQSxJQUFJLEVBQUUsT0FQQztBQVFQQyxJQUFBQSxHQUFHLEVBQUUsTUFSRTtBQVNQQyxJQUFBQSxFQUFFLEVBQUUsTUFURztBQVVQQyxJQUFBQSxFQUFFLEVBQUUsTUFWRztBQVdQQyxJQUFBQSxHQUFHLEVBQUUsTUFYRTtBQVlQQyxJQUFBQSxFQUFFLEVBQUUsTUFaRztBQWFQQyxJQUFBQSxHQUFHLEVBQUU7QUFiRSxHQWZVO0FBOEJuQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFdBQVcsRUFBRSxhQURIO0FBRVZDLElBQUFBLGlCQUFpQixFQUFFLFVBRlQ7QUFHVkMsSUFBQUEsU0FBUyxFQUFFLE9BSEQ7QUFJVkMsSUFBQUEsa0JBQWtCLEVBQUUsV0FKVjtBQUtWQyxJQUFBQSxnQkFBZ0IsRUFBRSxRQUxSO0FBTVZDLElBQUFBLGlCQUFpQixFQUFFO0FBTlQsR0E5Qk87QUFzQ25CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsWUFBWSxFQUFFLEtBRFQ7QUFFTEMsSUFBQUEsU0FBUyxFQUFFO0FBRk4sR0F0Q1k7QUEwQ25CeEQsRUFBQUEsRUFBRSxFQUFFO0FBQ0Z5RCxJQUFBQSxlQUFlLEVBQUcsNEJBRGhCO0FBRUZDLElBQUFBLE9BQU8sRUFBRyw0QkFGUjtBQUdGdEQsSUFBQUEsV0FBVyxFQUFHLDZFQUhaO0FBSUZ1RCxJQUFBQSxXQUFXLEVBQUcsNEJBSlo7QUFLRkMsSUFBQUEsV0FBVyxFQUFHLDRCQUxaO0FBTUZDLElBQUFBLE1BQU0sRUFBRyw0QkFOUDtBQU9GQyxJQUFBQSxXQUFXLEVBQUcsNEJBUFo7QUFRRm5ELElBQUFBLE1BQU0sRUFBRywyQkFSUDtBQVNGVixJQUFBQSxXQUFXLEVBQUcsMkJBVFo7QUFVRkMsSUFBQUEsWUFBWSxFQUFHLDJCQVZiO0FBV0ZDLElBQUFBLFdBQVcsRUFBRztBQVhaO0FBMUNlLENBQXJCO0FBeURPLE1BQU00RCxVQUFVLG1DQUFRbEMsWUFBUixHQUF5QlYsS0FBekIsQ0FBaEI7QUFDQSxNQUFNNkMsU0FBUyxtQ0FBUW5DLFlBQVIsR0FBeUJELElBQXpCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZQOztBQUVBLE1BQU11QyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLEtBQVQsS0FBbUI7QUFDckNGLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1HLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLDhCQUFsQixFQUFrREMsT0FBbEQsSUFBNkRKLEtBQXJGOztBQUVBLFFBQUlLLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixNQUFxQyxJQUF6QyxFQUErQztBQUM3Q0QsTUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDTixlQUFqQztBQUNEOztBQUNETyxJQUFBQSxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFYLENBQUQsQ0FBbEI7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsUUFBTTtBQUFBLE9BQUNLLGVBQUQ7QUFBQSxPQUFrQkg7QUFBbEIsTUFBd0NYLCtDQUFRLENBQUNHLEtBQUQsQ0FBdEQ7O0FBRUEsUUFBTVksb0JBQW9CLEdBQUcsTUFBTTtBQUNqQ0osSUFBQUEsa0JBQWtCLENBQUVLLFNBQUQsSUFBZSxDQUFDQSxTQUFqQixDQUFsQjtBQUNBUixJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMsQ0FBQ0ksZUFBbEM7QUFDRCxHQUhEOztBQUtBLFNBQU87QUFDTEEsSUFBQUEsZUFESztBQUVMQyxJQUFBQTtBQUZLLEdBQVA7QUFJRCxDQXJCRDs7QUF1QkEsaUVBQWViLFdBQWY7Ozs7Ozs7Ozs7O0FDekJhOztBQUNiZSw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBSCxtREFBa0Q7QUFDOUNJLEVBQUFBLFVBQVUsRUFBRSxJQURrQztBQUU5Q0MsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPQyxNQUFNLENBQUNDLGVBQWQ7QUFDSDtBQUo2QyxDQUFsRDtBQU1BUCx1REFBc0Q7QUFDbERJLEVBQUFBLFVBQVUsRUFBRSxJQURzQztBQUVsREMsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPQyxNQUFNLENBQUNFLG1CQUFkO0FBQ0g7QUFKaUQsQ0FBdEQ7QUFNQU4sZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlRLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJTixNQUFNLEdBQUdNLG1CQUFPLENBQUMsZ0RBQUQsQ0FBcEI7O0FBQ0EsU0FBU0Msa0JBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDQyxPQUFqQyxFQUEwQ0MsTUFBMUMsRUFBa0RDLEtBQWxELEVBQXlEQyxNQUF6RCxFQUFpRUMsR0FBakUsRUFBc0VDLEdBQXRFLEVBQTJFO0FBQ3ZFLE1BQUk7QUFDQSxRQUFJQyxJQUFJLEdBQUdQLEdBQUcsQ0FBQ0ssR0FBRCxDQUFILENBQVNDLEdBQVQsQ0FBWDtBQUNBLFFBQUlqQixLQUFLLEdBQUdrQixJQUFJLENBQUNsQixLQUFqQjtBQUNILEdBSEQsQ0FHRSxPQUFPbUIsS0FBUCxFQUFjO0FBQ1pOLElBQUFBLE1BQU0sQ0FBQ00sS0FBRCxDQUFOO0FBQ0E7QUFDSDs7QUFDRCxNQUFJRCxJQUFJLENBQUNFLElBQVQsRUFBZTtBQUNYUixJQUFBQSxPQUFPLENBQUNaLEtBQUQsQ0FBUDtBQUNILEdBRkQsTUFFTztBQUNIcUIsSUFBQUEsT0FBTyxDQUFDVCxPQUFSLENBQWdCWixLQUFoQixFQUF1QnNCLElBQXZCLENBQTRCUixLQUE1QixFQUFtQ0MsTUFBbkM7QUFDSDtBQUNKOztBQUNELFNBQVNRLGlCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUMzQixTQUFPLFlBQVc7QUFDZCxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUFBLFFBQWlCQyxJQUFJLEdBQUdDLFNBQXhCO0FBQ0EsV0FBTyxJQUFJTixPQUFKLENBQVksVUFBU1QsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsVUFBSUYsR0FBRyxHQUFHYSxFQUFFLENBQUNJLEtBQUgsQ0FBU0gsSUFBVCxFQUFlQyxJQUFmLENBQVY7O0FBQ0EsZUFBU1osS0FBVCxDQUFlZCxLQUFmLEVBQXNCO0FBQ2xCVSxRQUFBQSxrQkFBa0IsQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWVDLE1BQWYsRUFBdUJDLEtBQXZCLEVBQThCQyxNQUE5QixFQUFzQyxNQUF0QyxFQUE4Q2YsS0FBOUMsQ0FBbEI7QUFDSDs7QUFDRCxlQUFTZSxNQUFULENBQWdCYyxHQUFoQixFQUFxQjtBQUNqQm5CLFFBQUFBLGtCQUFrQixDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBZUMsTUFBZixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDLE9BQXRDLEVBQStDYyxHQUEvQyxDQUFsQjtBQUNIOztBQUNEZixNQUFBQSxLQUFLLENBQUNnQixTQUFELENBQUw7QUFDSCxLQVRNLENBQVA7QUFVSCxHQVpEO0FBYUg7O0FBQ0QsU0FBU3RCLHNCQUFULENBQWdDdUIsR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDekIsSUFBQUEsT0FBTyxFQUFFeUI7QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxTQUFTRSxtQkFBVCxHQUErQjtBQUMzQkEsRUFBQUEsbUJBQW1CO0FBQUc7QUFDMUI7QUFDQTtBQUNBO0FBQUlWLEVBQUFBLGlCQUFpQixDQUFDLFdBQVU7QUFBRVcsSUFBQUEsU0FBRjtBQUFjQyxJQUFBQTtBQUFkLEdBQVYsRUFBZ0M7QUFDOUMsVUFBTUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHakMsTUFBSixFQUFZa0MsbUJBQVosQ0FBZ0NILFNBQWhDLEVBQTJDQyxHQUEzQyxDQUF4QjtBQUNBLFdBQU87QUFDSEMsTUFBQUE7QUFERyxLQUFQO0FBR0gsR0FMZ0IsQ0FIakI7QUFTQSxTQUFPSCxtQkFBbUIsQ0FBQ0wsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NELFNBQWhDLENBQVA7QUFDSDs7QUFDRCxTQUFTVyxrQkFBVCxDQUE0QkMsQ0FBNUIsRUFBK0I7QUFDM0IsU0FBT04sbUJBQW1CLENBQUNMLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDRCxTQUFoQyxDQUFQO0FBQ0g7O0FBQ0QsTUFBTWEsR0FBTixTQUFrQmpDLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlNEIsU0FBakMsQ0FBMkM7QUFDdkNPLEVBQUFBLE1BQU0sR0FBRztBQUNMLFVBQU07QUFBRVAsTUFBQUEsU0FBRjtBQUFjRSxNQUFBQTtBQUFkLFFBQTZCLEtBQUtNLEtBQXhDO0FBQ0EsV0FBTyxhQUFjbkMsTUFBTSxDQUFDRCxPQUFQLENBQWVxQyxhQUFmLENBQTZCVCxTQUE3QixFQUF3Q3JDLE1BQU0sQ0FBQytDLE1BQVAsQ0FBYyxFQUFkLEVBQzFEUixTQUQwRCxDQUF4QyxDQUFyQjtBQUVIOztBQUxzQzs7QUFPM0NJLEdBQUcsQ0FBQ0ssbUJBQUosR0FBMEJQLGtCQUExQjtBQUNBRSxHQUFHLENBQUNNLGVBQUosR0FBc0JSLGtCQUF0QjtBQUNBdkMsZUFBQSxHQUFrQnlDLEdBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1pQixLQUFLLEdBQUcsQ0FBQztBQUFFdkIsRUFBQUEsU0FBRjtBQUFhRSxFQUFBQTtBQUFiLENBQUQsS0FBOEI7QUFDMUMsUUFBTTtBQUFBLE9BQUNzQixTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qi9FLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDhFLElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsUUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRVcsSUFBQUE7QUFBRixNQUFhekIsU0FBbkI7O0FBRUEsTUFBSXlCLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2xCLHdCQUFPLCtEQUFDLG9EQUFEO0FBQVcsZ0JBQVUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLFVBQVUsRUFBRTtBQUFFQyxNQUFBQSxlQUFGO0FBQW1CQyxNQUFBQSxTQUFuQjtBQUE4QkMsTUFBQUEsZUFBOUI7QUFBK0NDLE1BQUFBO0FBQS9DO0FBRlIsTUFHRk4sTUFISjtBQUtBLFFBQU07QUFBRW5FLElBQUFBLGVBQUY7QUFBbUJDLElBQUFBO0FBQW5CLE1BQTRDYiwyREFBVyxDQUFDLEtBQUQsQ0FBN0Q7QUFFQSxRQUFNcEUsS0FBSyxHQUFHZ0YsZUFBZSxHQUFHZiwyREFBSCxHQUFlRCw0REFBNUM7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLCtEQUFDLGtEQUFEO0FBQUEsNkJBQU87QUFBTSxXQUFHLEVBQUMsZUFBVjtBQUEwQixZQUFJLEVBQUUyRSwyREFBYyxDQUFDUyxPQUFEO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsK0RBQUMsaURBQUQ7QUFDRSxtQkFBYSxFQUFHLFFBQU9FLGVBQWdCLEVBRHpDO0FBRUUsV0FBSyxFQUFFQyxTQUZUO0FBR0UsaUJBQVcsRUFBRUMsZUFIZjtBQUlFLGVBQVMsb0JBQ0hDLFdBQVcsSUFDYkEsV0FBVyxDQUFDQyxPQURWLElBQ3FCO0FBQ3JCQyxRQUFBQSxNQUFNLEVBQUV4RSxNQUFNLENBQUN5RSxNQUFQLENBQWNILFdBQVcsQ0FBQ0MsT0FBMUIsRUFBbUNHLEdBQW5DLENBQXdDQyxLQUFELElBQVc7QUFDeEQsaUJBQU87QUFDTEMsWUFBQUEsR0FBRyxFQUFFcEIsMkRBQWMsQ0FBQ21CLEtBQUQsQ0FEZDtBQUVMRSxZQUFBQSxLQUFLLEVBQUVGLEtBQUssQ0FBQ0UsS0FGUjtBQUdMQyxZQUFBQSxNQUFNLEVBQUVILEtBQUssQ0FBQ0c7QUFIVCxXQUFQO0FBS0QsU0FOTztBQURhLE9BRmxCO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQW1CRSwrREFBQyw2REFBRDtBQUFlLFdBQUssRUFBRWpLLEtBQXRCO0FBQUEsOEJBQ0UsK0RBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLCtEQUFDLDBEQUFEO0FBQWEsY0FBTSxFQUFFa0osTUFBckI7QUFBNkIsNEJBQW9CLEVBQUVqRSxvQkFBbkQ7QUFBeUUsdUJBQWUsRUFBRUQsZUFBMUY7QUFBQSxrQkFDR2dFLFNBQVMsaUJBQUksK0RBQUMsU0FBRCxvQkFBZXRCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQkY7QUFBQSxrQkFERjtBQTRCRCxDQW5ERDs7QUFxREFxQixLQUFLLENBQUNtQixTQUFOLEdBQWtCO0FBQ2hCMUMsRUFBQUEsU0FBUyxFQUFFYSx3REFESztBQUVoQlgsRUFBQUEsU0FBUyxFQUFFWSw4REFBY0E7QUFGVCxDQUFsQjtBQUtBUyxLQUFLLENBQUNxQixZQUFOLEdBQXFCO0FBQ25CMUMsRUFBQUEsU0FBUyxFQUFFO0FBQ1R5QixJQUFBQSxNQUFNLEVBQUU7QUFDTkUsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZHLFFBQUFBLGVBQWUsRUFBRSwwREFEUDtBQUVWRCxRQUFBQSxTQUFTLEVBQUUsZ0JBRkQ7QUFHVkQsUUFBQUEsZUFBZSxFQUFFO0FBSFA7QUFETjtBQURDO0FBRFEsQ0FBckIsRUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVAsS0FBSyxDQUFDWCxlQUFOLEdBQXdCLE1BQU9YLEdBQVAsSUFBZTtBQUNyQyxRQUFNNEMsUUFBUSxHQUFHLE1BQU12QywrREFBQSxDQUFvQkwsR0FBcEIsQ0FBdkI7QUFDQSxRQUFNMEIsTUFBTSxHQUFHLE1BQU1ULG1EQUFRLENBQUMsU0FBRCxDQUE3QjtBQUVBLHlDQUFZMkIsUUFBWjtBQUFzQjNDLElBQUFBLFNBQVMsRUFBRTtBQUFFeUIsTUFBQUE7QUFBRjtBQUFqQztBQUNELENBTEQ7O0FBT0EsaUVBQWVKLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBRU8sTUFBTVQsY0FBYyxHQUFHRCx1REFBQSxDQUFnQjtBQUM1Q2MsRUFBQUEsTUFBTSxFQUFFZCx1REFBQSxDQUFnQjtBQUN0QmdCLElBQUFBLFVBQVUsRUFBRWhCLHVEQUFBLENBQWdCO0FBQzFCa0MsTUFBQUEsRUFBRSxFQUFFbEMsMERBRHNCO0FBRTFCbUIsTUFBQUEsZUFBZSxFQUFFbkIscUVBRlM7QUFHMUJrQixNQUFBQSxTQUFTLEVBQUVsQixxRUFIZTtBQUkxQmlCLE1BQUFBLGVBQWUsRUFBRWpCLDBEQUpTO0FBSzFCb0IsTUFBQUEsV0FBVyxFQUFFcEIsMERBQWdCc0M7QUFMSCxLQUFoQixDQURVO0FBUXRCdkIsSUFBQUEsT0FBTyxFQUFFZiwwREFSYTtBQVN0QmtDLElBQUFBLEVBQUUsRUFBRWxDLDBEQUFnQm1DO0FBVEUsR0FBaEIsQ0FEb0M7QUFZNUNJLEVBQUFBLFVBQVUsRUFBRXZDLDBEQVpnQztBQWE1Q3dDLEVBQUFBLFFBQVEsRUFBRXhDLHlEQUFBLENBQWtCQSwwREFBbEIsQ0Fia0M7QUFjNUMwQyxFQUFBQSxHQUFHLEVBQUUxQywwREFBZ0JzQztBQWR1QixDQUFoQixDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBOztBQUVPLE1BQU1PLFVBQVUsZ0JBQUdGLG9EQUFhLENBQUM7QUFDdENHLEVBQUFBLFNBQVMsRUFBRSxLQUQyQjtBQUV0Q0MsRUFBQUEsU0FBUyxFQUFFLEtBRjJCO0FBR3RDQyxFQUFBQSxZQUFZLEVBQUUsTUFBTSxDQUFFO0FBSGdCLENBQUQsQ0FBaEM7O0FBTVAsTUFBTTlDLFdBQVcsR0FBRyxDQUFDO0FBQUUrQyxFQUFBQSxRQUFGO0FBQVlwQyxFQUFBQSxNQUFaO0FBQW9CakUsRUFBQUEsb0JBQXBCO0FBQTBDRCxFQUFBQTtBQUExQyxDQUFELEtBQWlFO0FBQ25GLFFBQU07QUFBQSxPQUFDbUcsU0FBRDtBQUFBLE9BQVlJO0FBQVosTUFBNEJySCwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ2tILFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCbkgsK0NBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLE1BQUlnRixNQUFKLEVBQVk7QUFDVi9FLElBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFlBQU1xSCxXQUFXLEdBQUcsTUFBTTtBQUN4QlAsUUFBQUEsMERBQUEsQ0FBb0I7QUFBRVMsVUFBQUEsTUFBTSxFQUFFO0FBQVYsU0FBcEI7QUFDQUgsUUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBTixRQUFBQSxzREFBQTtBQUNELE9BSkQ7O0FBS0EsWUFBTVcsVUFBVSxHQUFHLE1BQU07QUFDdkJMLFFBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQU4sUUFBQUEscURBQUE7QUFDRCxPQUhEOztBQUtBL0IsTUFBQUEsTUFBTSxDQUFDMkMsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ04sV0FBckM7QUFDQXRDLE1BQUFBLE1BQU0sQ0FBQzJDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NGLFVBQXhDO0FBQ0ExQyxNQUFBQSxNQUFNLENBQUMyQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDRixVQUFyQztBQUVBLGFBQU8sTUFBTTtBQUNYMUMsUUFBQUEsTUFBTSxDQUFDMkMsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ1AsV0FBdEM7QUFDQXRDLFFBQUFBLE1BQU0sQ0FBQzJDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNILFVBQXpDO0FBQ0ExQyxRQUFBQSxNQUFNLENBQUMyQyxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDSCxVQUF0QztBQUNELE9BSkQ7QUFLRCxLQXBCUSxFQW9CTixDQUFDMUMsTUFBRCxDQXBCTSxDQUFUO0FBcUJEOztBQUVELHNCQUNFLDhEQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQ0UsU0FBSyxFQUFFO0FBQ0xpQyxNQUFBQSxTQURLO0FBRUxDLE1BQUFBLFNBRks7QUFHTEMsTUFBQUEsWUFISztBQUlMcEcsTUFBQUEsb0JBSks7QUFLTEQsTUFBQUE7QUFMSyxLQURUO0FBQUEsY0FTR3NHO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0F6Q0Q7O0FBMkNBLGlFQUFlL0MsV0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BETyxTQUFTeUQsWUFBVCxDQUFzQkMsSUFBSSxHQUFHLEVBQTdCLEVBQWlDO0FBQ3RDLFNBQVEsR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDBCQUFaLElBQTBDLHVCQUF3QixHQUFFSCxJQUFLLEVBQW5GO0FBQ0QsRUFFRDs7QUFDTyxlQUFldkQsUUFBZixDQUF3QnVELElBQXhCLEVBQThCO0FBQ25DLFFBQU1JLFVBQVUsR0FBR0wsWUFBWSxDQUFDQyxJQUFELENBQS9CO0FBQ0EsUUFBTUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsVUFBRCxDQUE1QjtBQUNBLFFBQU1HLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRDtBQUVPLFNBQVM3RCxjQUFULENBQXdCO0FBQUVvQixFQUFBQTtBQUFGLENBQXhCLEVBQWlDO0FBQ3RDLFFBQU0yQyxRQUFRLEdBQUczQyxHQUFHLENBQUM0QyxVQUFKLENBQWUsR0FBZixJQUFzQlgsa0RBQVksQ0FBQ2pDLEdBQUQsQ0FBbEMsR0FBMENBLEdBQTNEO0FBQ0EsU0FBTzJDLFFBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vYXNzZXRzL3N0eWxlcy9HbG9iYWxTdHlsZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2hvb2tzL3VzZURhcmtNb2RlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3Byb3BUeXBlcy9hcHBUeXBlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9wcm92aWRlcnMvQXBwUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZU1lZGl1bX0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlU21hbGx9IHtcclxuICAgICAgICBmb250LXNpemU6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BUYWxsfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgXHJcbn1cclxuXHJcbmEsIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmhlYWRlck1vYmlsZX07XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViSGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZIZWFkZXJ9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2V9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICAgXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG5cclxuICAgICAgICAmOnZpc2l0ZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fVxyXG59XHJcblxyXG5gO1xyXG4iLCJjb25zdCBsaWdodCA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBibGFjazogJyMwMDAwMDAnLFxyXG4gICAgYmFja2dyb3VuZExpZ2h0OiAnI0ZGRkZGRicsXHJcbiAgICBiYWNrZ3JvdW5kV2hpdGU6ICcjRkZGRkZGJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFOEVCRjEnLFxyXG4gICAgbWFpbkNvbG9yOiAnIzBEMjc0RCcsXHJcbiAgICBhY2NlbnRDb2xvcjogJyMwMEJDRkYnLFxyXG4gICAgbGlnaHRlckFjY2VudENvbG9yOiAnIzAwY2RmZicsXHJcbiAgICBidXR0b25Db2xvcjogJyMwRDI3NEQnLFxyXG4gICAgYnV0dG9uVGV4dENvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICBsaWdodGVyQnV0dG9uQ29sb3I6ICcjMTAzMzY5JyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZGFyayA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIHdoaXRlOiAnI2U2ZTZlNicsXHJcbiAgICBibGFjazogJyNlNmU2ZTYnLFxyXG4gICAgYmFja2dyb3VuZExpZ2h0OiAnIzE0MTYxYScsXHJcbiAgICBiYWNrZ3JvdW5kV2hpdGU6ICcjMTAxMTE0JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxMDExMTQnLFxyXG4gICAgbWFpbkNvbG9yOiAnIzBiMWIzMCcsXHJcbiAgICBhY2NlbnRDb2xvcjogJyMwMGE0ZGUnLFxyXG4gICAgbGlnaHRlckFjY2VudENvbG9yOiAnIzAwQkNGRicsXHJcbiAgICBidXR0b25Db2xvcjogJyMwMGE0ZGUnLFxyXG4gICAgYnV0dG9uVGV4dENvbG9yOiAnIzBiMWIzMCcsXHJcbiAgICBsaWdodGVyQnV0dG9uQ29sb3I6ICcjMDBCQ0ZGJyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdFRoZW1lID0ge1xyXG4gIGZvbnRTaXplOiB7XHJcbiAgICBoZWFkZXI6ICc0LjhyZW0nLFxyXG4gICAgaGVhZGVyTW9iaWxlOiAnNHJlbScsXHJcbiAgICBuYXZIZWFkZXI6ICczLjZyZW0nLFxyXG4gICAgbmF2TGlzdDogJzEuOHJlbScsXHJcbiAgICBzdWJIZWFkZXI6ICcycmVtJyxcclxuICAgIHN1YlRleHQ6ICcxLjhyZW0nLFxyXG4gICAgY2FwdGlvbkxhcmdlOiAnM3JlbScsXHJcbiAgICBjYXB0aW9uTGFyZ2VNZWRpdW06ICcyLjRyZW0nLFxyXG4gICAgY2FwdGlvbk1lZGl1bTogJzEuM3JlbScsXHJcbiAgICBjYXB0aW9uU21hbGw6ICcxLjJyZW0nLFxyXG4gICAgYm9keTogJzEuNnJlbScsXHJcbiAgICBib2R5U21hbGw6ICcxLjRyZW0nLFxyXG4gIH0sXHJcbiAgcGFkZGluZzoge1xyXG4gICAgeGw6ICcxOHZ3JyxcclxuICAgIHg6ICcxNXZ3JyxcclxuICAgIG06ICcxMHZ3JyxcclxuICAgIHhzOiAnOHZ3JyxcclxuICAgIHM6ICc1dncnLFxyXG5cclxuICAgIHh4bFY6ICcxMHJlbScsXHJcbiAgICB4bFY6ICc4cmVtJyxcclxuICAgIHhWOiAnN3JlbScsXHJcbiAgICBtVjogJzVyZW0nLFxyXG4gICAgeHNWOiAnNHJlbScsXHJcbiAgICBzVjogJzNyZW0nLFxyXG4gICAgc3NWOiAnMnJlbScsXHJcbiAgfSxcclxuICBkaW1lbnNpb25zOiB7XHJcbiAgICB0aWxlUGFkZGluZzogJzRyZW0gMy41cmVtJyxcclxuICAgIHRpbGVQYWRkaW5nTW9iaWxlOiAnM3JlbSA1dncnLFxyXG4gICAgdGlsZVdpZHRoOiAnNjVyZW0nLFxyXG4gICAgcGFnZVNlY3Rpb25QYWRkaW5nOiAnNHJlbSA1cmVtJyxcclxuICAgIHBhZ2VTZWN0aW9uV2lkdGg6ICcxMDByZW0nLFxyXG4gICAgcmljaFRleHRNYXJnaW5Ub3A6ICc0cmVtJyxcclxuICB9LFxyXG4gIHV0aWxzOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDRweCAxNHB4ICByZ2JhKDAsIDAsIDAsIDAuMSknLFxyXG4gIH0sXHJcbiAgbXE6IHtcclxuICAgIGhlcm9JbnN0cnVjdG9yczogYEBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpYCxcclxuICAgIGRlc2t0b3A6IGBAbWVkaWEgKG1heC13aWR0aDogMTU1MHB4KWAsXHJcbiAgICBkZXNrdG9wVGFsbDogYEBtZWRpYSAobWluLWhlaWdodDogMTEwMHB4KSBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTQwMHB4KWAsXHJcbiAgICBkZXNrdG9wV2lkZTogYEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpYCxcclxuICAgIGxhcHRvcExhcmdlOiBgQG1lZGlhIChtYXgtd2lkdGg6IDE0NTBweClgLFxyXG4gICAgbGFwdG9wOiBgQG1lZGlhIChtYXgtd2lkdGg6IDEyMjRweClgLFxyXG4gICAgdGFibGV0TGFyZ2U6IGBAbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KWAsXHJcbiAgICB0YWJsZXQ6IGBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpYCxcclxuICAgIG1vYmlsZUxhcmdlOiBgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KWAsXHJcbiAgICBtb2JpbGVNZWRpdW06IGBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpYCxcclxuICAgIG1vYmlsZVNtYWxsOiBgQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KWAsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lID0geyAuLi5kZWZhdWx0VGhlbWUsIC4uLmxpZ2h0IH07XHJcbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSB7IC4uLmRlZmF1bHRUaGVtZSwgLi4uZGFyayB9O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlRGFya01vZGUgPSAoc3RhdGUgPSBmYWxzZSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0RGFya01vZGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgfHwgc3RhdGU7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIGRlZmF1bHREYXJrTW9kZSk7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50RGFya01vZGUoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnREYXJrTW9kZSwgc2V0Q3VycmVudERhcmtNb2RlXSA9IHVzZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGFya01vZGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50RGFya01vZGUoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCAhY3VycmVudERhcmtNb2RlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY3VycmVudERhcmtNb2RlLFxyXG4gICAgaGFuZGxlRGFya01vZGVDaGFuZ2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZURhcmtNb2RlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFwcEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkFwcEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5leHRXZWJWaXRhbHNNZXRyaWNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfYXBwR2V0SW5pdGlhbFByb3BzKCkge1xuICAgIF9hcHBHZXRJbml0aWFsUHJvcHMgPSAvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoXykge1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgLCBwYWdlUHJvcHMgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHBhZ2VQcm9wcykpKTtcbiAgICB9XG59XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcGFnZVByb3BzU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvYXBwVHlwZXMnO1xyXG5pbXBvcnQgQXBwUHJvdmlkZXIgZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgJ3B1YmxpYy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAndXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICd1dGlscy9tZWRpYSc7XHJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSB9IGZyb20gJ2Fzc2V0cy9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJ2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InO1xyXG5pbXBvcnQgdXNlRGFya01vZGUgZnJvbSAnaG9va3MvdXNlRGFya01vZGUnO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTW91bnRlZCh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZ2xvYmFsIH0gPSBwYWdlUHJvcHM7XHJcblxyXG4gIGlmIChnbG9iYWwgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGZhdmljb24sXHJcbiAgICBkZWZhdWx0U2VvOiB7IG1ldGFUaXRsZVN1ZmZpeCwgbWV0YVRpdGxlLCBtZXRhRGVzY3JpcHRpb24sIHNoYXJlZEltYWdlIH0sXHJcbiAgfSA9IGdsb2JhbDtcclxuXHJcbiAgY29uc3QgeyBjdXJyZW50RGFya01vZGUsIGhhbmRsZURhcmtNb2RlQ2hhbmdlIH0gPSB1c2VEYXJrTW9kZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3VycmVudERhcmtNb2RlID8gZGFya1RoZW1lIDogbGlnaHRUaGVtZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPns8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17Z2V0U3RyYXBpTWVkaWEoZmF2aWNvbil9IC8+fTwvSGVhZD5cclxuICAgICAgPERlZmF1bHRTZW9cclxuICAgICAgICB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke21ldGFUaXRsZVN1ZmZpeH1gfVxyXG4gICAgICAgIHRpdGxlPXttZXRhVGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e21ldGFEZXNjcmlwdGlvbn1cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIC4uLihzaGFyZWRJbWFnZSAmJlxyXG4gICAgICAgICAgICBzaGFyZWRJbWFnZS5mb3JtYXRzICYmIHtcclxuICAgICAgICAgICAgICBpbWFnZXM6IE9iamVjdC52YWx1ZXMoc2hhcmVkSW1hZ2UuZm9ybWF0cykubWFwKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiBnZXRTdHJhcGlNZWRpYShpbWFnZSksXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxBcHBQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gaGFuZGxlRGFya01vZGVDaGFuZ2U9e2hhbmRsZURhcmtNb2RlQ2hhbmdlfSBjdXJyZW50RGFya01vZGU9e2N1cnJlbnREYXJrTW9kZX0+XHJcbiAgICAgICAgICB7aXNNb3VudGVkICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICAgICAgPC9BcHBQcm92aWRlcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHBhZ2VQcm9wczogcGFnZVByb3BzU2hhcGUsXHJcbn07XHJcblxyXG5NeUFwcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcGFnZVByb3BzOiB7XHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgZGVmYXVsdFNlbzoge1xyXG4gICAgICAgIG1ldGFEZXNjcmlwdGlvbjogJ0FrYWRlbWlhIENpc2NvIHcgWmVzcG9sZSBTemvDs8WCIEVsZWt0cm9uaWN6bnljaCB3IFJhZG9taXUnLFxyXG4gICAgICAgIG1ldGFUaXRsZTogJ0FrYWRlbWlhIENpc2NvJyxcclxuICAgICAgICBtZXRhVGl0bGVTdWZmaXg6ICdaZXNww7PFgiBTemvDs8WCIEVsZWt0cm9uaWN6bnljaCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBnZXRJbml0aWFsUHJvcHMgZGlzYWJsZXMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24gZm9yIHBhZ2VzIHRoYXQgZG9uJ3RcclxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gW1suLi5zbHVnXV0gcGFnZXMgc3RpbGwgZ2V0IFNTRy5cclxuLy8gSG9wZWZ1bGx5IHdlIGNhbiByZXBsYWNlIHRoaXMgd2l0aCBnZXRTdGF0aWNQcm9wcyBvbmNlIHRoaXMgaXNzdWUgaXMgZml4ZWQ6XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9kaXNjdXNzaW9ucy8xMDk0OVxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgY29uc3QgZ2xvYmFsID0gYXdhaXQgZmV0Y2hBUEkoJy9nbG9iYWwnKTtcclxuXHJcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWwgfSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnZVByb3BzU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGdsb2JhbDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGRlZmF1bHRTZW86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBtZXRhRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgbWV0YVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIG1ldGFUaXRsZVN1ZmZpeDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgc2hhcmVkSW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KSxcclxuICAgIGZhdmljb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICB9KSxcclxuICBuYXZpZ2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICBzZW86IFByb3BUeXBlcy5vYmplY3QsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgaXNOYXZPcGVuOiBmYWxzZSxcclxuICBzZXRJc05hdk9wZW46ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4sIHJvdXRlciwgaGFuZGxlRGFya01vZGVDaGFuZ2UsIGN1cnJlbnREYXJrTW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBpZiAocm91dGVyKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgcGFyZW50OiAnI2xvYWRlcicgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgaXNOYXZPcGVuLFxyXG4gICAgICAgIHNldElzTmF2T3BlbixcclxuICAgICAgICBoYW5kbGVEYXJrTW9kZUNoYW5nZSxcclxuICAgICAgICBjdXJyZW50RGFya01vZGUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwUHJvdmlkZXI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnfSR7cGF0aH1gO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKHsgdXJsIH0pIHtcclxuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBnZXRTdHJhcGlVUkwodXJsKSA6IHVybDtcclxuICByZXR1cm4gaW1hZ2VVcmw7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkdsb2JhbFN0eWxlIiwidGhlbWUiLCJtcSIsIm1vYmlsZUxhcmdlIiwibW9iaWxlTWVkaXVtIiwibW9iaWxlU21hbGwiLCJkZXNrdG9wVGFsbCIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImJsYWNrIiwiZm9udFNpemUiLCJib2R5IiwiaGVhZGVyIiwidGFibGV0IiwiaGVhZGVyTW9iaWxlIiwic3ViSGVhZGVyIiwibmF2SGVhZGVyIiwid2hpdGUiLCJjYXB0aW9uTGFyZ2UiLCJjYXB0aW9uTWVkaXVtIiwiY2FwdGlvblNtYWxsIiwibGlnaHQiLCJiYWNrZ3JvdW5kTGlnaHQiLCJiYWNrZ3JvdW5kV2hpdGUiLCJtYWluQ29sb3IiLCJhY2NlbnRDb2xvciIsImxpZ2h0ZXJBY2NlbnRDb2xvciIsImJ1dHRvbkNvbG9yIiwiYnV0dG9uVGV4dENvbG9yIiwibGlnaHRlckJ1dHRvbkNvbG9yIiwiZGFyayIsImRlZmF1bHRUaGVtZSIsIm5hdkxpc3QiLCJzdWJUZXh0IiwiY2FwdGlvbkxhcmdlTWVkaXVtIiwiYm9keVNtYWxsIiwicGFkZGluZyIsInhsIiwieCIsIm0iLCJ4cyIsInMiLCJ4eGxWIiwieGxWIiwieFYiLCJtViIsInhzViIsInNWIiwic3NWIiwiZGltZW5zaW9ucyIsInRpbGVQYWRkaW5nIiwidGlsZVBhZGRpbmdNb2JpbGUiLCJ0aWxlV2lkdGgiLCJwYWdlU2VjdGlvblBhZGRpbmciLCJwYWdlU2VjdGlvbldpZHRoIiwicmljaFRleHRNYXJnaW5Ub3AiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImhlcm9JbnN0cnVjdG9ycyIsImRlc2t0b3AiLCJkZXNrdG9wV2lkZSIsImxhcHRvcExhcmdlIiwibGFwdG9wIiwidGFibGV0TGFyZ2UiLCJsaWdodFRoZW1lIiwiZGFya1RoZW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VEYXJrTW9kZSIsInN0YXRlIiwiZGVmYXVsdERhcmtNb2RlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInNldEN1cnJlbnREYXJrTW9kZSIsIkpTT04iLCJwYXJzZSIsImN1cnJlbnREYXJrTW9kZSIsImhhbmRsZURhcmtNb2RlQ2hhbmdlIiwicHJldlN0YXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJQcm9wVHlwZXMiLCJwYWdlUHJvcHNTaGFwZSIsIkFwcFByb3ZpZGVyIiwidXNlUm91dGVyIiwiSGVhZCIsImZldGNoQVBJIiwiZ2V0U3RyYXBpTWVkaWEiLCJEZWZhdWx0U2VvIiwiVGhlbWVQcm92aWRlciIsIkVycm9yUGFnZSIsIk15QXBwIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwicm91dGVyIiwiZ2xvYmFsIiwiZmF2aWNvbiIsImRlZmF1bHRTZW8iLCJtZXRhVGl0bGVTdWZmaXgiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJzaGFyZWRJbWFnZSIsImZvcm1hdHMiLCJpbWFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJpbWFnZSIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImFwcFByb3BzIiwic2hhcGUiLCJpZCIsIm51bWJlciIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJuYXZpZ2F0aW9uIiwic2VjdGlvbnMiLCJhcnJheU9mIiwic2VvIiwiY3JlYXRlQ29udGV4dCIsIk5Qcm9ncmVzcyIsIkFwcENvbnRleHQiLCJpc0xvYWRpbmciLCJpc05hdk9wZW4iLCJzZXRJc05hdk9wZW4iLCJjaGlsZHJlbiIsInNldElzTG9hZGluZyIsImhhbmRsZVN0YXJ0IiwiY29uZmlndXJlIiwicGFyZW50Iiwic3RhcnQiLCJoYW5kbGVTdG9wIiwiZXZlbnRzIiwib24iLCJvZmYiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImltYWdlVXJsIiwic3RhcnRzV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=