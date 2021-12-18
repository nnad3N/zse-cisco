(() => {
var exports = {};
exports.id = "pages/[[...slug]]";
exports.ids = ["pages/[[...slug]]"];
exports.modules = {

/***/ "./components/atoms/ArrowLink/ArrowLink.js":
/*!*************************************************!*\
  !*** ./components/atoms/ArrowLink/ArrowLink.js ***!
  \*************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArrowLink_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArrowLink.styles */ "./components/atoms/ArrowLink/ArrowLink.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\atoms\\ArrowLink\\ArrowLink.js";






const ArrowLink = ({
  url,
  text,
  accented
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: url || '',
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_3__.ArrowLinkWrapper, {
      accented: accented,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_3__.Arrow, {
        accented: accented
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

ArrowLink.propTypes = {
  slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  accented: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ArrowLink.defaultProps = {
  slug: '',
  title: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowLink);

/***/ }),

/***/ "./components/atoms/ArrowLink/ArrowLink.styles.js":
/*!********************************************************!*\
  !*** ./components/atoms/ArrowLink/ArrowLink.styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowLinkWrapper": () => (/* binding */ ArrowLinkWrapper),
/* harmony export */   "Arrow": () => (/* binding */ Arrow)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ArrowLinkWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  transition: transform 0.1s ease-out;

  &:visited {
    border-bottom: 2px solid ${({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.buttonColor};
    color: ${({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.buttonColor};
  }

  h5 {
    color: ${({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.buttonColor};
    border-bottom: 2px solid;
    border-color: transparent;
    margin-right: 2rem;
    font-size: ${({
  theme
}) => theme.fontSize.body};
    transition: all 0.2s ease-out;
  }

  &:hover {
    transform: translate(1%, -10%);

    h5 {
      border-color: ${({
  theme,
  accented
}) => accented ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor};
      color: ${({
  theme,
  accented
}) => accented ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor};
    }
  }

  &:focus-visible {
    outline: 3px solid;
    outline-offset: 0.75rem;
  }
`;
const Arrow = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  background-color: ${({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.buttonColor};
  min-width: 4.2rem;
  min-height: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  position: relative;
  transition: background-color 0.1s ease-out;

  ${ArrowLinkWrapper}:hover &,
  ${ArrowLinkWrapper}:hover &::before,
  ${ArrowLinkWrapper}:hover &::after {
    background-color: ${({
  theme,
  accented
}) => accented ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    transform-origin: right;
    right: 0;
    min-width: 2.5rem;
    min-height: 0.5rem;
    background-color: ${({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.buttonColor};
    border-radius: 0.5rem;
  }

  &::before {
    transform: translateY(30%) rotate(45deg);
  }

  &::after {
    transform: translateY(-30%) rotate(-45deg);
  }
`;

/***/ }),

/***/ "./components/atoms/Button/Button.js":
/*!*******************************************!*\
  !*** ./components/atoms/Button/Button.js ***!
  \*******************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.styles */ "./components/atoms/Button/Button.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\atoms\\Button\\Button.js";






const Button = ({
  data: {
    isFilled,
    text,
    url
  },
  hasMargin,
  accent
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: url || '',
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Button_styles__WEBPACK_IMPORTED_MODULE_3__.StyledButton, {
      hasMargin: hasMargin,
      isFilled: isFilled,
      accent: accent,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

Button.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    caption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    isFilled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })
  }).isRequired,
  hasMargin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  accept: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Button.defaultProps = {
  data: {
    caption: '',
    link: {
      slug: ''
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./components/atoms/Button/Button.styles.js":
/*!**************************************************!*\
  !*** ./components/atoms/Button/Button.styles.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": () => (/* binding */ StyledButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  padding: 1rem 2rem;
  border: ${({
  theme,
  isFilled
}) => isFilled ? '0' : `3px solid ${theme.colors.buttonColor}`};
  border-color: ${({
  theme,
  accent
}) => accent ? theme.colors.accentColor : theme.colors.buttonColor};
  background-color: ${({
  theme,
  isFilled,
  accent
}) => isFilled ? accent ? theme.colors.accentColor : theme.colors.buttonColor : 'transparent'};
  color: ${({
  theme,
  isFilled,
  accent
}) => isFilled ? theme.colors.buttonTextColor : accent ? theme.colors.accentColor : theme.colors.buttonColor};
  display: flex;
  align-items: center;
  transition: all 0.1s ease-out;

  &:first-child {
    margin-right: ${({
  hasMargin
}) => hasMargin ? '2rem' : '0'};
  }

  &:hover {
    transform: translate(1%, -10%);
    border-color: ${({
  theme,
  accent
}) => accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor};
    background-color: ${({
  theme,
  isFilled,
  accent
}) => isFilled ? accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor : 'transparent'};
    color: ${({
  theme,
  isFilled,
  accent
}) => isFilled ? theme.colors.buttonTextColor : accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor};
  }

  &:focus-visible {
    outline: 3px solid ${({
  theme
}) => theme.colors.accentColor};
    outline-offset: -1px;
  }
`;

/***/ }),

/***/ "./components/atoms/FunctionalLink/FunctionalLink.js":
/*!***********************************************************!*\
  !*** ./components/atoms/FunctionalLink/FunctionalLink.js ***!
  \***********************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\atoms\\FunctionalLink\\FunctionalLink.js";





const FunctionalLink = ({
  link: {
    text,
    url,
    newTab
  },
  setIsNavOpen
}) => {
  if (newTab) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: () => setIsNavOpen(state => !state),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: url || '',
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      onClick: () => setIsNavOpen(state => !state),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

FunctionalLink.propTypes = {
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    newTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }).isRequired,
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
FunctionalLink.defaultProps = {
  link: {
    name: '',
    slug: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunctionalLink);

/***/ }),

/***/ "./components/atoms/Image/Image.js":
/*!*****************************************!*\
  !*** ./components/atoms/Image/Image.js ***!
  \*****************************************/
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var providers_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/AppProvider */ "./providers/AppProvider.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Image.styles */ "./components/atoms/Image/Image.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\atoms\\Image\\Image.js";







const Image = ({
  image
}) => {
  const {
    currentDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(providers_AppProvider__WEBPACK_IMPORTED_MODULE_3__.AppContext);

  if (image) {
    const {
      alternativeText,
      url,
      width,
      height
    } = image;

    const loader = ({
      src,
      width
    }) => {
      if (src == null) {
        return null;
      }

      return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${src}?w=${width}`;
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_4__.NextImageWrapper, {
      dark: currentDarkMode,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_4__.StyledNextImage, {
        loader: loader,
        layout: "responsive",
        width: width,
        height: height,
        objectFit: "contain",
        src: url,
        alt: alternativeText,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined);
  } else {
    console.error('Image was required but not provided'); // throw new Error('Image was required but not provided');

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: "/imgError.svg",
      height: 300,
      width: 300
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
    }, undefined);
  }
};

Image.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    alternativeText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  })
};
Image.defaultProps = {
  image: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./components/atoms/Image/Image.styles.js":
/*!************************************************!*\
  !*** ./components/atoms/Image/Image.styles.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextImageWrapper": () => (/* binding */ NextImageWrapper),
/* harmony export */   "StyledNextImage": () => (/* binding */ StyledNextImage)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const NextImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  height: max-content;
  width: 100%;
  filter: ${({
  dark
}) => dark ? `brightness(0.85)` : `brightness(1)`};
`;
const StyledNextImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default()))`
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
`;

/***/ }),

/***/ "./components/atoms/LineHorizontal/LineHorizontal.js":
/*!***********************************************************!*\
  !*** ./components/atoms/LineHorizontal/LineHorizontal.js ***!
  \***********************************************************/
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
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var _LineHorizontal_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineHorizontal.styles */ "./components/atoms/LineHorizontal/LineHorizontal.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\atoms\\LineHorizontal\\LineHorizontal.js";






const LineHorizontal = ({
  children,
  large
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_LineHorizontal_styles__WEBPACK_IMPORTED_MODULE_3__.LineHorizontalWrapper, {
    "data-testid": "line-horizontal-wrapper",
    children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_LineHorizontal_styles__WEBPACK_IMPORTED_MODULE_3__.Line, {
      large: large,
      "data-testid": "line-horizontal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

LineHorizontal.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape,
  large: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineHorizontal);

/***/ }),

/***/ "./components/atoms/LineHorizontal/LineHorizontal.styles.js":
/*!******************************************************************!*\
  !*** ./components/atoms/LineHorizontal/LineHorizontal.styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineHorizontalWrapper": () => (/* binding */ LineHorizontalWrapper),
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LineHorizontalWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;
const Line = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  min-height: ${({
  large
}) => large ? '0.8rem' : '0.4rem'};
  background-color: ${({
  theme
}) => theme.colors.accentColor};
  margin-top: ${({
  large
}) => large ? '2.2rem' : '.8rem'};
`;

/***/ }),

/***/ "./components/atoms/LineVertical/LineVertical.js":
/*!*******************************************************!*\
  !*** ./components/atoms/LineVertical/LineVertical.js ***!
  \*******************************************************/
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
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var _LineVertical_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineVertical.styles */ "./components/atoms/LineVertical/LineVertical.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\atoms\\LineVertical\\LineVertical.js";






const LineVertical = ({
  children,
  large
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_LineVertical_styles__WEBPACK_IMPORTED_MODULE_3__.LineVerticalWrapper, {
    "data-testid": "line-vertical-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_LineVertical_styles__WEBPACK_IMPORTED_MODULE_3__.Line, {
      large: large,
      "data-testid": "line-vertical"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

LineVertical.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape,
  large: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineVertical);

/***/ }),

/***/ "./components/atoms/LineVertical/LineVertical.styles.js":
/*!**************************************************************!*\
  !*** ./components/atoms/LineVertical/LineVertical.styles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineVerticalWrapper": () => (/* binding */ LineVerticalWrapper),
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LineVerticalWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
`;
const Line = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  min-width: ${({
  large
}) => large ? '0.8rem' : '0.4rem'};
  background-color: ${({
  theme
}) => theme.colors.accentColor};
  margin-right: ${({
  large
}) => large ? '2.2rem' : '1.5rem'};

  ${({
  theme
}) => theme.mq.mobileLarge} {
    margin-right: ${({
  large
}) => large ? '1.8rem' : '1.5rem'};
  }
`;

/***/ }),

/***/ "./components/molecules/HeroCourseComponent/HeroCourseComponent.js":
/*!*************************************************************************!*\
  !*** ./components/molecules/HeroCourseComponent/HeroCourseComponent.js ***!
  \*************************************************************************/
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
/* harmony import */ var _atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/ArrowLink/ArrowLink */ "./components/atoms/ArrowLink/ArrowLink.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroCourseComponent.styles */ "./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent\\HeroCourseComponent.js";







const HeroCourseComponent = ({
  data: {
    header,
    description,
    url
  },
  linkCaption
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_4__.HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      url: url,
      text: linkCaption
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

HeroCourseComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  linkCaption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
HeroCourseComponent.defaultProps = {
  data: {
    header: '',
    description: '',
    url: ''
  },
  linkCaption: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroCourseComponent);

/***/ }),

/***/ "./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js":
/*!********************************************************************************!*\
  !*** ./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroCourseComponentWrapper": () => (/* binding */ HeroCourseComponentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroCourseComponentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: ${({
  theme
}) => theme.dimensions.tilePadding};
  background-color: ${({
  theme
}) => theme.colors.backgroundLight};
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  box-shadow: ${({
  theme
}) => theme.utils.boxShadow};
  max-width: 50rem;

  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    margin-top: 4rem;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.dimensions.tilePaddingMobile};
  }
`;

/***/ }),

/***/ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js":
/*!*********************************************************************************!*\
  !*** ./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroInstructorComponent.styles */ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\molecules\\HeroInstructorComponent\\HeroInstructorComponent.js";





const HeroInstructorComponent = ({
  data: {
    header,
    name,
    description
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_2__.HeroInstructorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

HeroInstructorComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};
HeroInstructorComponent.defaultProps = {
  data: {
    header: '',
    name: '',
    description: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroInstructorComponent);

/***/ }),

/***/ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js":
/*!****************************************************************************************!*\
  !*** ./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroInstructorWrapper": () => (/* binding */ HeroInstructorWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroInstructorWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  color: ${({
  theme
}) => theme.colors.white};

  h4 {
    margin-bottom: 1rem;
  }

  ${({
  theme
}) => theme.mq.desktop} {
    max-width: 40rem;
  }

  ${({
  theme
}) => theme.mq.laptop} {
    max-width: 50rem;

    &:not(:last-child) {
      padding: 0 0 ${({
  theme
}) => theme.padding.mV} 0;
    }
  }
`;

/***/ }),

/***/ "./components/molecules/ListItem/ListItem.js":
/*!***************************************************!*\
  !*** ./components/molecules/ListItem/ListItem.js ***!
  \***************************************************/
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
/* harmony import */ var _atoms_FunctionalLink_FunctionalLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/FunctionalLink/FunctionalLink */ "./components/atoms/FunctionalLink/FunctionalLink.js");
/* harmony import */ var _ListItem_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItem.styles */ "./components/molecules/ListItem/ListItem.styles.js");
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\molecules\\ListItem\\ListItem.js";







const ListItem = ({
  link,
  setIsNavOpen,
  hasLinks,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ListItem_styles__WEBPACK_IMPORTED_MODULE_3__.ListItemWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ListItem_styles__WEBPACK_IMPORTED_MODULE_3__.Bullet, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), hasLinks ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_FunctionalLink_FunctionalLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      link: link,
      setIsNavOpen: setIsNavOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 19
    }, undefined) : children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

ListItem.propTypes = {
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  hasLinks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_4__.childrenShape
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./components/molecules/ListItem/ListItem.styles.js":
/*!**********************************************************!*\
  !*** ./components/molecules/ListItem/ListItem.styles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemWrapper": () => (/* binding */ ListItemWrapper),
/* harmony export */   "Bullet": () => (/* binding */ Bullet)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ListItemWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
  display: flex;
  align-items: center;
  width: fit-content;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  a {
    font-size: ${({
  theme
}) => theme.fontSize.navList};
  }
`;
const Bullet = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  position: relative;
  min-width: 22px;
  min-height: 22px;
  border-radius: 50%;
  margin-right: 1.5rem;
  background-color: ${({
  theme
}) => theme.colors.accentColor};

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    min-width: 12px;
    min-height: 12px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({
  theme
}) => theme.colors.mainColor};
  }

  ${({
  theme
}) => theme.mq.mobileSmall} {
    min-width: 16px;
    min-height: 16px;

    &::before {
      min-width: 9px;
      min-height: 9px;
    }
  }
`;

/***/ }),

/***/ "./components/molecules/PricingComponent/PricingComponent.js":
/*!*******************************************************************!*\
  !*** ./components/molecules/PricingComponent/PricingComponent.js ***!
  \*******************************************************************/
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
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @templates/PageTile/PageTile */ "./components/templates/PageTile/PageTile.js");
/* harmony import */ var _PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PricingComponent.styles */ "./components/molecules/PricingComponent/PricingComponent.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\molecules\\PricingComponent\\PricingComponent.js";







const PricingComponent = ({
  data
}) => {
  const {
    header,
    semester,
    group,
    price,
    student,
    studentPrice,
    graduate,
    graduatePrice,
    others,
    othersPrice,
    annotation
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), semester && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Semester, {
      children: semester
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 20
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Head, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: group
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: student
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: studentPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: graduate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: graduatePrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: others
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: othersPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), annotation && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Annotation, {
      children: annotation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 22
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

PricingComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    semester: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    group: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    price: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    student: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    studentPrice: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    graduate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    graduatePrice: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    others: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    othersPrice: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    annotation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};
PricingComponent.defaultProps = {
  data: {
    header: '',
    semester: '',
    group: '',
    price: '',
    student: '',
    studentPrice: '',
    graduate: '',
    graduatePrice: '',
    others: '',
    othersPrice: '',
    annotations: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingComponent);

/***/ }),

/***/ "./components/molecules/PricingComponent/PricingComponent.styles.js":
/*!**************************************************************************!*\
  !*** ./components/molecules/PricingComponent/PricingComponent.styles.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Semester": () => (/* binding */ Semester),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "Annotation": () => (/* binding */ Annotation)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Semester = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  margin-top: 1rem;
  font-size: ${({
  theme
}) => theme.fontSize.subText};
  color: ${({
  theme
}) => theme.colors.accentColor};
  font-weight: 600;
`;
const Row = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.3rem solid ${({
  theme
}) => theme.colors.darkBlue};

  span {
    font-size: ${({
  theme
}) => theme.fontSize.body};
  }
`;
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Row)`
  margin-top: 2rem;
  border-bottom: 0.1rem solid ${({
  theme
}) => theme.colors.accentColor};

  span {
    font-size: ${({
  theme
}) => theme.fontSize.captionMedium};
  }
`;
const Annotation = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-style: italic;
  font-size: ${({
  theme
}) => theme.fontSize.captionSmall};
  font-weight: 300;
  margin-top: 1rem;

  &:first-child {
    margin-top: 2rem;
  }
`;

/***/ }),

/***/ "./components/molecules/RichText/RichText.js":
/*!***************************************************!*\
  !*** ./components/molecules/RichText/RichText.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RichText_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RichText.styles */ "./components/molecules/RichText/RichText.styles.js");
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\molecules\\RichText\\RichText.js";





const RichText = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_RichText_styles__WEBPACK_IMPORTED_MODULE_1__.StyledMarkdown, {
    children: children,
    skipHtml: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

RichText.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichText);

/***/ }),

/***/ "./components/molecules/RichText/RichText.styles.js":
/*!**********************************************************!*\
  !*** ./components/molecules/RichText/RichText.styles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledMarkdown": () => (/* binding */ StyledMarkdown)
/* harmony export */ });
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledMarkdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((react_markdown__WEBPACK_IMPORTED_MODULE_0___default()))`
  margin-top: ${({
  theme
}) => theme.dimensions.richTextMarginTop};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({
  theme
}) => theme.colors.black};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.7rem;
  }

  h1,
  h2 {
    font-weight: 300;
    margin-top: 2rem;
  }

  h3,
  h4,
  h5 {
    font-weight: 400;
  }

  h1 {
    font-size: 9.5rem;
    letter-spacing: -0.15rem;
  }

  h2 {
    font-size: 5.9rem;
    letter-spacing: -0.05rem;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  h4 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 2rem;
    font-weight: 600;
  }

  a {
    color: ${({
  theme
}) => theme.colors.black};
    text-decoration: none;
    font-weight: 400;

    &:visited {
      color: ${({
  theme
}) => theme.colors.black};
    }
  }

  li {
    font-size: ${({
  theme
}) => theme.fontSize.body};
    margin-left: 3rem;
    line-height: 1.6;

    &:first-child {
      margin-top: 0.8rem;
    }

    a {
      color: ${({
  theme
}) => theme.colors.black};
      font-size: ${({
  theme
}) => theme.fontSize.body};

      &:visited {
        color: ${({
  theme
}) => theme.colors.black};
      }
    }
  }

  p {
    &:not(:last-child) {
      margin: 0 0 1rem 0;
    }
  }
`;

/***/ }),

/***/ "./components/organisms/Footer/Footer.js":
/*!***********************************************!*\
  !*** ./components/organisms/Footer/Footer.js ***!
  \***********************************************/
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
/* harmony import */ var _Footer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.styles */ "./components/organisms/Footer/Footer.styles.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\organisms\\Footer\\Footer.js";






const Footer = ({
  footer: {
    header,
    schoolName,
    footerInfos,
    footerImages
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.StyledFooter, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.FooterWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.StyledSchoolInfo, {
          children: schoolName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.InformationWrapper, {
          children: footerInfos.map(({
            id,
            caption,
            content
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              children: caption
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, undefined), " ", content]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.ImagesWrapper, {
        children: footerImages.data.map(({
          attributes,
          id
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.ImageWrapper, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: attributes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined)
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
}; // Footer.propTypes = {
//   footer: PropTypes.shape({
//     header: PropTypes.string,
//     schoolName: PropTypes.string,
//     footerInfos: PropTypes.arrayOf(PropTypes.object).isRequired,
//     footerImages: PropTypes.arrayOf(PropTypes.object).isRequired,
//   }).isRequired,
// };
// Footer.defaultProps = {
//   footer: {
//     header: '',
//     schoolName: '',
//     footerInfos: [],
//     footerImages: [],
//   },
// };


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./components/organisms/Footer/Footer.styles.js":
/*!******************************************************!*\
  !*** ./components/organisms/Footer/Footer.styles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledFooter": () => (/* binding */ StyledFooter),
/* harmony export */   "FooterWrapper": () => (/* binding */ FooterWrapper),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "StyledSchoolInfo": () => (/* binding */ StyledSchoolInfo),
/* harmony export */   "InformationWrapper": () => (/* binding */ InformationWrapper),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "ImagesWrapper": () => (/* binding */ ImagesWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledFooter = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer)`
  padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.m};
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  color: ${({
  theme
}) => theme.colors.white};
  display: flex;
  justify-content: center;

  ${({
  theme
}) => theme.mq.laptopLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }

  p {
    font-size: ${({
  theme
}) => theme.fontSize.subText};
    word-wrap: break-word;
  }
`;
const FooterWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  row-gap: ${({
  theme
}) => theme.padding.xsV};
  width: 100%;
  grid-template: 'content line images';
  justify-content: space-between;

  ${({
  theme
}) => theme.mq.desktop} {
    column-gap: 5rem;
  }

  ${({
  theme
}) => theme.mq.laptop} {
    max-width: ${({
  theme
}) => theme.dimensions.tileWidth};
    display: flex;
    flex-direction: column;
  }

  ${({
  theme
}) => theme.mq.laptop} {
    p {
      font-size: ${({
  theme
}) => theme.fontSize.subText};
    }
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    justify-content: space-between;
    width: 100%;
    text-align: center;
  }

  ${({
  theme
}) => theme.mq.desktopTall} {
    width: unset;
    max-width: unset;
  }
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: content;
  display: grid;
  justify-content: space-between;
  min-width: 30vw;

  h3 {
    color: ${({
  theme
}) => theme.colors.accentColor};
    text-align: start;
    grid-row: 1/2;
    grid-column: 1/3;
    margin-bottom: 2rem;
  }

  ${({
  theme
}) => theme.mq.laptop} {
    width: unset;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h3 {
      text-align: center;
    }
  }
`;
const StyledSchoolInfo = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  width: 24rem;

  ${({
  theme
}) => theme.mq.mobileLarge} {
    text-align: center;
    width: 32rem;
    margin-bottom: 1rem;
  }
`;
const InformationWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-left: 6rem;
  width: max-content;

  span {
    color: ${({
  theme
}) => theme.colors.accentColor};
    margin-right: 0.4rem;
    font-weight: 600;
  }

  ${({
  theme
}) => theme.mq.laptop} {
    margin-left: 0;
  }
`;
const Line = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  grid-area: line;
  justify-self: center;
  width: 0.6rem;
  height: 100%;
  background-color: ${({
  theme
}) => theme.colors.accentColor};

  ${({
  theme
}) => theme.mq.laptop} {
    width: 100%;
    height: 0.5rem;
  }
`;
const ImagesWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: images;
  min-width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: fit-content;

  ${({
  theme
}) => theme.mq.mobileLarge} {
    flex-direction: column;
  }
`;
const ImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: clamp(9vw, 100%, 12rem);
  max-width: 30rem;

  &:first-child {
    margin-right: 5rem;
    width: clamp(14vw, 100%, 24rem);
  }

  ${({
  theme
}) => theme.mq.laptop} {
    width: 20rem;

    &:first-child {
      width: 25rem;
    }
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    min-width: 20rem;

    &:first-child {
      min-width: 30rem;
      margin: 0 0 3rem 0;
    }
  }
`;

/***/ }),

/***/ "./components/organisms/NavBar/NavBar.js":
/*!***********************************************!*\
  !*** ./components/organisms/NavBar/NavBar.js ***!
  \***********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var providers_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/AppProvider */ "./providers/AppProvider.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _NavBar_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar.styles */ "./components/organisms/NavBar/NavBar.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\organisms\\NavBar\\NavBar.js";








const NavBar = ({
  logo
}) => {
  const {
    isLoading,
    isNavOpen,
    setIsNavOpen,
    handleDarkModeChange,
    currentDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(providers_AppProvider__WEBPACK_IMPORTED_MODULE_3__.AppContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Header, {
    isLoading: isLoading,
    isNavOpen: isNavOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Loader, {
      id: "loader",
      isLoading: isLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/",
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Logo, {
        onClick: () => setIsNavOpen(false),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
          image: logo.data.attributes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.ButtonsWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.DarkModeButton, {
        onClick: handleDarkModeChange,
        dark: currentDarkMode,
        "aria-label": "Dark Mode Toggle Button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {
        onClick: () => setIsNavOpen(state => !state),
        isNavOpen: isNavOpen,
        "data-testid": "menu-button",
        "aria-label": "Menu Toggle Button",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.StyledSpan, {
          short: true,
          isNavOpen: isNavOpen
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.StyledSpan, {
          isNavOpen: isNavOpen
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

NavBar.propTypes = {
  logo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./components/organisms/NavBar/NavBar.styles.js":
/*!******************************************************!*\
  !*** ./components/organisms/NavBar/NavBar.styles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Logo": () => (/* binding */ Logo),
/* harmony export */   "MenuButton": () => (/* binding */ MenuButton),
/* harmony export */   "StyledSpan": () => (/* binding */ StyledSpan),
/* harmony export */   "Loader": () => (/* binding */ Loader),
/* harmony export */   "ButtonsWrapper": () => (/* binding */ ButtonsWrapper),
/* harmony export */   "DarkModeButton": () => (/* binding */ DarkModeButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 1rem ${({
  theme
}) => theme.padding.m};
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  color: ${({
  theme
}) => theme.colors.white};
  z-index: 30;
  border-bottom: 2px solid ${({
  theme
}) => theme.colors.accentColor};
  position: relative;

  img {
    border-radius: 0;
  }

  ${({
  theme
}) => theme.mq.laptop} {
    padding: ${({
  theme,
  isNavOpen
}) => isNavOpen ? `1rem ${theme.padding.s}` : `1rem ${theme.padding.m}`};
  }

  ${({
  theme
}) => theme.mq.tabletLarge} {
    padding: 1rem ${({
  theme
}) => theme.padding.m};
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: 2rem ${({
  theme
}) => theme.padding.s};
  }
`;
const Logo = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  width: 19rem;
`;
const MenuButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  position: relative;
  background-color: transparent;
  border: none;
  width: 6rem;
  height: ${({
  isNavOpen
}) => isNavOpen ? '6rem' : 'unset'};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  transition: transform 0.1s ease-out;

  &:hover {
    transform: ${({
  isNavOpen
}) => isNavOpen ? `translate(2%, -6%)` : `translate(2%, -10%)`};

    span {
      background-color: ${({
  theme
}) => theme.colors.lighterAccentColor};
    }
  }
`;
const StyledSpan = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  transition: background-color 0.3s ease-out;
  width: 100%;
  height: 1rem;
  background-color: ${({
  theme
}) => theme.colors.accentColor};
  transform-origin: ${({
  isNavOpen,
  short
}) => short && !isNavOpen ? 'right' : 'center'};
  transform: ${({
  short,
  isNavOpen
}) => isNavOpen ? 'scaleX(1)' : short ? 'scaleX(0.5)' : 'scaleX(1)'};

  &:first-child {
    margin-bottom: 1rem;
    transform: ${({
  isNavOpen
}) => isNavOpen ? 'translateY(2.5rem) rotate(45deg)' : ''};
  }

  &:nth-child(2) {
    transform: ${({
  isNavOpen
}) => isNavOpen ? 'translateY(-2.5rem) rotate(-45deg)' : ''};
  }
`;
const Loader = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  height: 0.2rem;
  width: 100%;
  bottom: -0.2rem;
  left: 0;
  background-color: ${({
  theme,
  isLoading
}) => isLoading ? 'transparent' : theme.colors.accentColor};
  position: absolute;
`;
const ButtonsWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: center;
`;
const DarkModeButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  margin-right: 5rem;
  background-color: ${({
  theme
}) => theme.colors.accentColor};
  min-height: 5rem;
  min-width: 5rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.1s ease-out;

  &:hover {
    transform: translate(2%, -7%);
    background-color: ${({
  theme
}) => theme.colors.lighterAccentColor};
  }

  &:hover::before {
    background-color: ${({
  theme,
  dark
}) => dark ? theme.colors.lighterAccentColor : theme.colors.mainColor};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &::before {
    background-color: ${({
  theme,
  dark
}) => dark ? theme.colors.accentColor : theme.colors.mainColor};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 846 846' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg id='sun'%3E%3Ccircle cx='422.12' cy='422.452' r='188.656' style='fill:%230b1b30;'/%3E%3Cpath d='M463.366,43.63c0,-22.764 -18.482,-41.245 -41.246,-41.245c-22.764,-0 -41.245,18.481 -41.245,41.245l-0,86.241c-0,22.765 18.481,41.246 41.245,41.246c22.764,0 41.246,-18.481 41.246,-41.246l0,-86.241Z' style='fill:%230b1b30;'/%3E%3Cpath d='M463.366,714.745c0,-22.764 -18.482,-41.245 -41.246,-41.245c-22.764,-0 -41.245,18.481 -41.245,41.245l-0,86.241c-0,22.765 18.481,41.246 41.245,41.246c22.764,0 41.246,-18.481 41.246,-41.246l0,-86.241Z' style='fill:%230b1b30;'/%3E%3Cpath d='M800.798,463.697c22.764,0 41.246,-18.481 41.246,-41.245c0,-22.764 -18.482,-41.246 -41.246,-41.246l-86.241,-0c-22.764,-0 -41.245,18.482 -41.245,41.246c-0,22.764 18.481,41.245 41.245,41.245l86.241,0Z' style='fill:%230b1b30;'/%3E%3Cpath d='M129.683,463.697c22.764,0 41.246,-18.481 41.246,-41.245c0,-22.764 -18.482,-41.246 -41.246,-41.246l-86.241,-0c-22.764,-0 -41.245,18.482 -41.245,41.246c-0,22.764 18.481,41.245 41.245,41.245l86.241,0Z' style='fill:%230b1b30;'/%3E%3Cpath d='M719.051,183.708c16.097,-16.097 16.097,-42.234 0,-58.331c-16.096,-16.096 -42.233,-16.096 -58.33,0l-60.982,60.982c-16.096,16.097 -16.096,42.234 0,58.33c16.097,16.097 42.234,16.097 58.331,0l60.981,-60.981Z' style='fill:%230b1b30;'/%3E%3Cpath d='M244.501,658.258c16.097,-16.097 16.097,-42.234 0,-58.331c-16.096,-16.096 -42.233,-16.096 -58.33,0l-60.982,60.982c-16.096,16.097 -16.096,42.234 0,58.33c16.097,16.097 42.234,16.097 58.331,0l60.981,-60.981Z' style='fill:%230b1b30;'/%3E%3Cpath d='M183.52,125.377c-16.097,-16.096 -42.234,-16.096 -58.331,0c-16.096,16.097 -16.096,42.234 0,58.331l60.982,60.981c16.097,16.097 42.234,16.097 58.33,0c16.097,-16.096 16.097,-42.233 0,-58.33l-60.981,-60.982Z' style='fill:%230b1b30;'/%3E%3Cpath d='M658.07,599.927c-16.097,-16.096 -42.234,-16.096 -58.331,0c-16.096,16.097 -16.096,42.234 0,58.331l60.982,60.981c16.097,16.097 42.234,16.097 58.33,0c16.097,-16.096 16.097,-42.233 0,-58.33l-60.981,-60.982Z' style='fill:%230b1b30;'/%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    min-height: 3.8rem;
    min-width: 3.8rem;
  }

  &::after {
    background-color: ${({
  theme
}) => theme.colors.accentColor};
    border-radius: ${({
  dark
}) => dark ? '50% 0 0 50%' : '0 50% 50% 0'};
    transform: ${({
  dark
}) => dark ? 'translate(100%, -50%)' : 'translate(-77%, -75%)'};
    min-height: 4rem;
    min-width: 4rem;
  }
`;

/***/ }),

/***/ "./components/organisms/Navigation/Navigation.js":
/*!*******************************************************!*\
  !*** ./components/organisms/Navigation/Navigation.js ***!
  \*******************************************************/
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
/* harmony import */ var _molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @molecules/ListItem/ListItem */ "./components/molecules/ListItem/ListItem.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var providers_AppProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! providers/AppProvider */ "./providers/AppProvider.js");
/* harmony import */ var _Navigation_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation.styles */ "./components/organisms/Navigation/Navigation.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\organisms\\Navigation\\Navigation.js";








const Navigation = ({
  navLinks
}) => {
  const {
    setIsNavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(providers_AppProvider__WEBPACK_IMPORTED_MODULE_4__.AppContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_5__.StyledNavigation, {
    children: navLinks.map(({
      groupName,
      id,
      links
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_5__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
          children: groupName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
        children: links.map(link => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_2__.default, {
          hasLinks: true,
          link: link,
          setIsNavOpen: setIsNavOpen
        }, link.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

Navigation.propTypes = {
  navLinks: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    groupName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    links: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  })).isRequired
};
Navigation.defaultProps = {
  navLinks: [{
    groupName: '',
    id: 0,
    links: []
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./components/organisms/Navigation/Navigation.styles.js":
/*!**************************************************************!*\
  !*** ./components/organisms/Navigation/Navigation.styles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledNavigation": () => (/* binding */ StyledNavigation),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledNavigation = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav)`
  position: absolute;
  min-height: 90vh;
  width: 100%;
  z-index: 20;
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
  row-gap: ${({
  theme
}) => theme.padding.xV};
  column-gap: ${({
  theme
}) => theme.padding.x};
  align-content: flex-start;

  ${({
  theme
}) => theme.mq.laptop} {
    column-gap: ${({
  theme
}) => theme.padding.s};
    padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.s};
  }

  ${({
  theme
}) => theme.mq.tabletLarge} {
    grid-template-columns: 100%;
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.m};
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.sV} ${({
  theme
}) => theme.padding.s};
  }

  img {
    border-radius: 0;
  }

  li {
    transition: transform 0.1s ease-out;

    &:hover {
      transform: translate(1%, -7%);
    }
  }
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  justify-self: center;
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    margin-bottom: 2rem;
    text-align: left;
  }

  a {
    font-size: ${({
  theme
}) => theme.fontSize.navList};
  }
`;

/***/ }),

/***/ "./components/sections/CiscoCourse/CiscoCourse.js":
/*!********************************************************!*\
  !*** ./components/sections/CiscoCourse/CiscoCourse.js ***!
  \********************************************************/
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
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var _templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @templates/PageSection/PageSection */ "./components/templates/PageSection/PageSection.js");
/* harmony import */ var _molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @molecules/RichText/RichText */ "./components/molecules/RichText/RichText.js");
/* harmony import */ var _CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CiscoCourse.styles */ "./components/sections/CiscoCourse/CiscoCourse.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\CiscoCourse\\CiscoCourse.js";










const CiscoCourse = ({
  data: {
    richTextSections,
    courseInfos
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_3__.default, {
      column: true,
      modular: true,
      children: richTextSections.map(({
        header,
        content,
        id
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_6__.StyledTitle, {
            children: header
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, undefined)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_6__.InfoSection, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_6__.InfoWrapper, {
        children: courseInfos.map(({
          caption,
          content,
          id
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_6__.InfoComponent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_6__.StyledSpan, {
            children: caption
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            children: content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

CiscoCourse.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    richTextSections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    courseInfos: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
CiscoCourse.defaultProps = {
  data: {
    richText: [],
    courseInfo: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CiscoCourse);

/***/ }),

/***/ "./components/sections/CiscoCourse/CiscoCourse.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/CiscoCourse/CiscoCourse.styles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTitle": () => (/* binding */ StyledTitle),
/* harmony export */   "InfoSection": () => (/* binding */ InfoSection),
/* harmony export */   "InfoWrapper": () => (/* binding */ InfoWrapper),
/* harmony export */   "InfoComponent": () => (/* binding */ InfoComponent),
/* harmony export */   "StyledSpan": () => (/* binding */ StyledSpan)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
  font-size: ${({
  theme
}) => theme.fontSize.headerMobile};
`;
const InfoSection = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.m};
  width: 100%;
  background-color: ${({
  theme
}) => theme.colors.mainColor};

  ${({
  theme
}) => theme.mq.laptop} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }
`;
const InfoWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({
  theme
}) => theme.dimensions.pageSectionWidth};

  ${({
  theme
}) => theme.mq.tablet} {
    width: fit-content;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const InfoComponent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: flex-start;
  color: ${({
  theme
}) => theme.colors.white};

  &:not(:last-child) {
    margin-right: 6rem;
  }

  span {
    font-size: ${({
  theme
}) => theme.fontSize.captionLargeMedium};
  }

  ${({
  theme
}) => theme.mq.laptop} {
    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  ${({
  theme
}) => theme.mq.tablet} {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`;
const StyledSpan = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  color: ${({
  theme
}) => theme.colors.accentColor};
  font-weight: 600;
  margin-right: 0.6rem;
`;

/***/ }),

/***/ "./components/sections/Contact/Contact.js":
/*!************************************************!*\
  !*** ./components/sections/Contact/Contact.js ***!
  \************************************************/
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
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _Contact_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact.styles */ "./components/sections/Contact/Contact.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\Contact\\Contact.js";







const Contact = ({
  data: {
    header,
    schoolName,
    contactInfos
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Contact_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Contact_styles__WEBPACK_IMPORTED_MODULE_4__.AddressWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
          children: schoolName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Contact_styles__WEBPACK_IMPORTED_MODULE_4__.InformationWrapper, {
        children: contactInfos.map(({
          id,
          caption,
          content
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: caption
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined), " ", content]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

Contact.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    address: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    schoolName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    contactInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
Contact.defaultProps = {
  data: {
    title: '',
    address: '',
    schoolName: '',
    contactInfo: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./components/sections/Contact/Contact.styles.js":
/*!*******************************************************!*\
  !*** ./components/sections/Contact/Contact.styles.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "AddressWrapper": () => (/* binding */ AddressWrapper),
/* harmony export */   "InformationWrapper": () => (/* binding */ InformationWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background-color: ${({
  theme
}) => theme.colors.backgroundLight};
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  box-shadow: ${({
  theme
}) => theme.utils.boxShadow};
  padding: ${({
  theme
}) => theme.dimensions.tilePadding};
  width: clamp(${({
  theme
}) => theme.dimensions.tileWidth}, 100%, 80rem);

  h1 {
    font-size: ${({
  theme
}) => theme.fontSize.header};
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.dimensions.tilePaddingMobile};
  }
`;
const AddressWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-top: 5rem;

  h4 {
    font-size: ${({
  theme
}) => theme.fontSize.captionLargeMedium};
    font-weight: 400;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    margin-top: 4rem;
  }
`;
const InformationWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 2.5rem 0 5rem 0;

  p,
  span {
    text-align: start;
    font-size: ${({
  theme
}) => theme.fontSize.captionLargeMedium};
  }

  span {
    margin-right: 0.4rem;
    font-weight: 600;
  }

  ${({
  theme
}) => theme.mq.tablet} {
    margin: 2rem 0 0 0;
  }
`;

/***/ }),

/***/ "./components/sections/Courses/Courses.js":
/*!************************************************!*\
  !*** ./components/sections/Courses/Courses.js ***!
  \************************************************/
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
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var _templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @templates/PageSection/PageSection */ "./components/templates/PageSection/PageSection.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @molecules/RichText/RichText */ "./components/molecules/RichText/RichText.js");
/* harmony import */ var _templates_PageTileWrapper_PageTileWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @templates/PageTileWrapper/PageTileWrapper */ "./components/templates/PageTileWrapper/PageTileWrapper.js");
/* harmony import */ var _templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @templates/PageTile/PageTile */ "./components/templates/PageTile/PageTile.js");
/* harmony import */ var _atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @atoms/ArrowLink/ArrowLink */ "./components/atoms/ArrowLink/ArrowLink.js");
/* harmony import */ var _Courses_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Courses.styles */ "./components/sections/Courses/Courses.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\Courses\\Courses.js";












const Courses = ({
  data: {
    header,
    content,
    courses,
    linkCaption
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    short: true,
    column: true,
    modular: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Courses_styles__WEBPACK_IMPORTED_MODULE_9__.StyledTitle, {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_templates_PageTileWrapper_PageTileWrapper__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: courses.map(({
          header,
          description,
          url,
          id
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h4", {
              children: header
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Courses_styles__WEBPACK_IMPORTED_MODULE_9__.StyledSpan, {
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_8__.default, {
            accented: true,
            url: url,
            text: linkCaption
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

Courses.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    linkCaption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    courses: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
Courses.defaultProps = {
  data: {
    header: '',
    content: '',
    linkCaption: '',
    courses: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Courses);

/***/ }),

/***/ "./components/sections/Courses/Courses.styles.js":
/*!*******************************************************!*\
  !*** ./components/sections/Courses/Courses.styles.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTitle": () => (/* binding */ StyledTitle),
/* harmony export */   "StyledSpan": () => (/* binding */ StyledSpan)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
  font-size: ${({
  theme
}) => theme.fontSize.headerMobile};
`;
const StyledSpan = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  margin: 2rem 0;
  font-size: ${({
  theme
}) => theme.fontSize.bodySmall};
`;

/***/ }),

/***/ "./components/sections/HeroAcademy/HeroAbout.js":
/*!******************************************************!*\
  !*** ./components/sections/HeroAcademy/HeroAbout.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _HeroAbout_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroAbout.styles */ "./components/sections/HeroAcademy/HeroAbout.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\HeroAcademy\\HeroAbout.js";








const HeroAbout = ({
  data: {
    header,
    description,
    button,
    image
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAbout_styles__WEBPACK_IMPORTED_MODULE_5__.HeroAboutWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAbout_styles__WEBPACK_IMPORTED_MODULE_5__.HeaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAbout_styles__WEBPACK_IMPORTED_MODULE_5__.DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: button
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAbout_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: image.data.attributes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

HeroAbout.propTypes = {
  data: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_1__.dataShape
};
HeroAbout.defaultProps = {
  data: {
    header: '',
    description: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroAbout);

/***/ }),

/***/ "./components/sections/HeroAcademy/HeroAbout.styles.js":
/*!*************************************************************!*\
  !*** ./components/sections/HeroAcademy/HeroAbout.styles.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroAboutWrapper": () => (/* binding */ HeroAboutWrapper),
/* harmony export */   "HeaderWrapper": () => (/* binding */ HeaderWrapper),
/* harmony export */   "DescriptionWrapper": () => (/* binding */ DescriptionWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroAboutWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: ${({
  theme
}) => theme.padding.xV} 0 ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  display: grid;
  row-gap: ${({
  theme
}) => theme.padding.xV};
  column-gap: ${({
  theme
}) => theme.padding.xV};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  ${({
  theme
}) => theme.mq.desktop} {
    padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.s};
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
    row-gap: ${({
  theme
}) => theme.padding.mV};
  }
`;
const HeaderWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-column: 1/3;
  grid-row: 1/2;

  ${({
  theme
}) => theme.mq.desktop} {
    grid-column: 1/1;
  }
`;
const DescriptionWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: clamp(38rem, 100%, 60rem);
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({
  theme
}) => theme.dimensions.tilePadding};
  background-color: ${({
  theme
}) => theme.colors.backgroundLight};
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  box-shadow: ${({
  theme
}) => theme.utils.boxShadow};

  p {
    margin-bottom: 5rem;
  }

  ${({
  theme
}) => theme.mq.desktop} {
    width: clamp(38rem, 100%, ${({
  theme
}) => theme.dimensions.tileWidth});
    grid-row: 3/4;
    margin-right: 0;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.dimensions.tilePaddingMobile};
  }
`;
const ImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  justify-self: end;
  align-self: center;

  ${({
  theme
}) => theme.mq.desktop} {
    width: clamp(38rem, 100%, ${({
  theme
}) => theme.dimensions.tileWidth});
    max-width: 100%;
    justify-self: center;
  }
`;

/***/ }),

/***/ "./components/sections/HeroCourses/HeroCourses.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroCourses/HeroCourses.js ***!
  \********************************************************/
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
/* harmony import */ var _molecules_HeroCourseComponent_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @molecules/HeroCourseComponent/HeroCourseComponent */ "./components/molecules/HeroCourseComponent/HeroCourseComponent.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _HeroCourses_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroCourses.styles */ "./components/sections/HeroCourses/HeroCourses.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\HeroCourses\\HeroCourses.js";







const HeroCourses = ({
  data: {
    header,
    courses,
    linkCaption
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_HeroCourses_styles__WEBPACK_IMPORTED_MODULE_4__.HeroCourseWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_HeroCourses_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: courses.map(course => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_molecules_HeroCourseComponent_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: course,
        linkCaption: linkCaption
      }, course.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

HeroCourses.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    courses: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }).isRequired
};
HeroCourses.defaultProps = {
  data: {
    courses: [],
    header: '',
    link: {}
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroCourses);

/***/ }),

/***/ "./components/sections/HeroCourses/HeroCourses.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/HeroCourses/HeroCourses.styles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroCourseWrapper": () => (/* binding */ HeroCourseWrapper),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroCourseWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.x};

  ${({
  theme
}) => theme.mq.desktop} {
    padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
  column-gap: ${({
  theme
}) => theme.padding.m};
  row-gap: ${({
  theme
}) => theme.padding.xV};
  margin-top: ${({
  theme
}) => theme.padding.xV};

  ${({
  theme
}) => theme.mq.mobileLarge} {
    margin-top: ${({
  theme
}) => theme.padding.mV};
    row-gap: ${({
  theme
}) => theme.padding.mV};
  }
`;

/***/ }),

/***/ "./components/sections/HeroInstructors/HeroInstructors.js":
/*!****************************************************************!*\
  !*** ./components/sections/HeroInstructors/HeroInstructors.js ***!
  \****************************************************************/
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
/* harmony import */ var _molecules_HeroInstructorComponent_HeroInstructorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @molecules/HeroInstructorComponent/HeroInstructorComponent */ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js");
/* harmony import */ var _HeroInstructors_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroInstructors.styles */ "./components/sections/HeroInstructors/HeroInstructors.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\HeroInstructors\\HeroInstructors.js";






const HeroInstructors = ({
  data: {
    instructors
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_HeroInstructors_styles__WEBPACK_IMPORTED_MODULE_3__.HeroInstructorsWrapper, {
    children: instructors.map(instructor => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_molecules_HeroInstructorComponent_HeroInstructorComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: instructor
    }, instructor.id, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

HeroInstructors.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    instructors: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
HeroInstructors.defaultProps = {
  data: {
    instructors: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroInstructors);

/***/ }),

/***/ "./components/sections/HeroInstructors/HeroInstructors.styles.js":
/*!***********************************************************************!*\
  !*** ./components/sections/HeroInstructors/HeroInstructors.styles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroInstructorsWrapper": () => (/* binding */ HeroInstructorsWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroInstructorsWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.x};
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  display: flex;
  justify-content: space-between;

  ${({
  theme
}) => theme.mq.laptopLarge} {
    padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  }

  ${({
  theme
}) => theme.mq.laptop} {
    flex-direction: column;
    align-items: center;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }
`;

/***/ }),

/***/ "./components/sections/HeroPricing/HeroPricing.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroPricing/HeroPricing.js ***!
  \********************************************************/
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
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroPricing.styles */ "./components/sections/HeroPricing/HeroPricing.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\HeroPricing\\HeroPricing.js";








const HeroPricing = ({
  data: {
    header,
    description,
    button
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__.HeroPricingWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__.DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: button,
        accent: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

HeroPricing.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    button: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }).isRequired
};
HeroPricing.defaultProps = {
  data: {
    header: '',
    description: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroPricing);

/***/ }),

/***/ "./components/sections/HeroPricing/HeroPricing.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/HeroPricing/HeroPricing.styles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroPricingWrapper": () => (/* binding */ HeroPricingWrapper),
/* harmony export */   "DescriptionWrapper": () => (/* binding */ DescriptionWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroPricingWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.x};
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  color: ${({
  theme
}) => theme.colors.white};

  ${({
  theme
}) => theme.mq.desktop} {
    padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  }

  ${({
  theme
}) => theme.mq.tablet} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.m};
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }
`;
const DescriptionWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  width: ${({
  theme
}) => theme.dimensions.tileWidth};

  ${({
  theme
}) => theme.mq.desktopTall} {
    flex-direction: column;
  }

  ${({
  theme
}) => theme.mq.tablet} {
    flex-direction: column;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    width: unset;
    margin-top: 4rem;
  }

  & > div {
    font-size: ${({
  theme
}) => theme.fontSize.subText};
    margin: 0 5rem 0 0;
    width: 39rem;

    ${({
  theme
}) => theme.mq.desktopTall} {
      margin: 0 0 4rem 0;
    }

    ${({
  theme
}) => theme.mq.tablet} {
      margin: 0 0 4rem 0;
    }

    ${({
  theme
}) => theme.mq.mobileLarge} {
      margin: 0 0 3rem 0;
      width: 100%;
    }
  }
`;

/***/ }),

/***/ "./components/sections/Hero/Hero.js":
/*!******************************************!*\
  !*** ./components/sections/Hero/Hero.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _Hero_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.styles */ "./components/sections/Hero/Hero.styles.js");
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\Hero\\Hero.js";








const Hero = ({
  data: {
    header,
    description,
    buttons,
    image
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_4__.HeroWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_4__.ButtonWrapper, {
        children: buttons.map(button => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
          data: button,
          hasMargin: true
        }, button.id, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
        image: image.data.attributes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

Hero.propTypes = {
  data: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_5__.dataShape
};
Hero.defaultProps = {
  data: {
    header: '',
    description: '',
    buttons: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./components/sections/Hero/Hero.styles.js":
/*!*************************************************!*\
  !*** ./components/sections/Hero/Hero.styles.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroWrapper": () => (/* binding */ HeroWrapper),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "ButtonWrapper": () => (/* binding */ ButtonWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  background-color: ${({
  theme
}) => theme.colors.backgroundWhite};

  ${({
  theme
}) => theme.mq.laptop} {
    flex-direction: column;
    justify-content: center;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
    min-height: unset;

    h1 {
      font-size: ${({
  theme
}) => theme.fontSize.header};
      text-align: center;
    }
  }
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 50rem;
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 40rem;
    margin-bottom: 5rem;

    ${({
  theme
}) => theme.mq.laptop} {
      margin-bottom: 3rem;
    }
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    width: 100%;
  }

  ${({
  theme
}) => theme.mq.desktopWide} {
    margin-right: 10vmin;
  }
`;
const ButtonWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  margin-top: 5rem;

  ${({
  theme
}) => theme.mq.laptop} {
    justify-content: center;
    margin-bottom: 5rem;
  }
`;
const ImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({
  theme
}) => theme.mq.laptop} {
    width: 50rem;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    width: 100%;
  }
`;

/***/ }),

/***/ "./components/sections/Pricing/Pricing.js":
/*!************************************************!*\
  !*** ./components/sections/Pricing/Pricing.js ***!
  \************************************************/
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
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var components_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/templates/PageSection/PageSection */ "./components/templates/PageSection/PageSection.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @molecules/RichText/RichText */ "./components/molecules/RichText/RichText.js");
/* harmony import */ var _templates_PageTileWrapper_PageTileWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @templates/PageTileWrapper/PageTileWrapper */ "./components/templates/PageTileWrapper/PageTileWrapper.js");
/* harmony import */ var _molecules_PricingComponent_PricingComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @molecules/PricingComponent/PricingComponent */ "./components/molecules/PricingComponent/PricingComponent.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\Pricing\\Pricing.js";










const Pricing = ({
  data: {
    header,
    content,
    pricingComponents
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(components_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_templates_PageTileWrapper_PageTileWrapper__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: pricingComponents.map((pricingComponent, id) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_molecules_PricingComponent_PricingComponent__WEBPACK_IMPORTED_MODULE_7__.default, {
          data: pricingComponent
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

Pricing.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    pricingComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
Pricing.defaultProps = {
  data: {
    header: '',
    content: '',
    pricingComponents: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pricing);

/***/ }),

/***/ "./components/sections/Regulations/Regulations.js":
/*!********************************************************!*\
  !*** ./components/sections/Regulations/Regulations.js ***!
  \********************************************************/
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
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @molecules/RichText/RichText */ "./components/molecules/RichText/RichText.js");
/* harmony import */ var components_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/templates/PageSection/PageSection */ "./components/templates/PageSection/PageSection.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\Regulations\\Regulations.js";








const Regulations = ({
  data: {
    header,
    content
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(components_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

Regulations.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};
Regulations.defaultProps = {
  data: {
    header: '',
    content: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Regulations);

/***/ }),

/***/ "./components/sections/Rodo/Rodo.js":
/*!******************************************!*\
  !*** ./components/sections/Rodo/Rodo.js ***!
  \******************************************/
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
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _Rodo_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rodo.styles */ "./components/sections/Rodo/Rodo.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\Rodo\\Rodo.js";







const Rodo = ({
  data: {
    header,
    description
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Rodo_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

Rodo.propTypes = {
  header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Rodo.defaultProps = {
  header: '',
  description: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rodo);

/***/ }),

/***/ "./components/sections/Rodo/Rodo.styles.js":
/*!*************************************************!*\
  !*** ./components/sections/Rodo/Rodo.styles.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background-color: ${({
  theme
}) => theme.colors.backgroundLight};
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  box-shadow: ${({
  theme
}) => theme.utils.boxShadow};
  padding: ${({
  theme
}) => theme.dimensions.tilePadding};
  width: clamp(${({
  theme
}) => theme.dimensions.tileWidth}, 100%, 80rem);

  h1 {
    font-size: ${({
  theme
}) => theme.fontSize.header};
  }

  p {
    margin-top: 2rem;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.dimensions.tilePaddingMobile};
  }
`;

/***/ }),

/***/ "./components/sections/SectionHeader/SectionHeader.js":
/*!************************************************************!*\
  !*** ./components/sections/SectionHeader/SectionHeader.js ***!
  \************************************************************/
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
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _SectionHeader_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SectionHeader.styles */ "./components/sections/SectionHeader/SectionHeader.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\SectionHeader\\SectionHeader.js";







const SectionHeader = ({
  data: {
    header,
    image,
    isLong
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SectionHeader_styles__WEBPACK_IMPORTED_MODULE_4__.SectionHeaderWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SectionHeader_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      isLong: isLong,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SectionHeader_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
        isLong: isLong,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: image.data.attributes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

SectionHeader.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    isLong: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }).isRequired
};
SectionHeader.defaultProps = {
  data: {
    header: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeader);

/***/ }),

/***/ "./components/sections/SectionHeader/SectionHeader.styles.js":
/*!*******************************************************************!*\
  !*** ./components/sections/SectionHeader/SectionHeader.styles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionHeaderWrapper": () => (/* binding */ SectionHeaderWrapper),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SectionHeaderWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`
  padding: ${({
  theme
}) => theme.padding.xlV} ${({
  theme
}) => theme.padding.m};
  margin-bottom: ${({
  theme
}) => theme.padding.xV};
  width: 100%;
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  color: ${({
  theme
}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({
  theme
}) => theme.mq.tablet} {
    margin-bottom: 0;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    max-width: ${({
  isLong
}) => isLong ? `max-content` : `40rem`};
    margin-right: 2rem;
  }

  ${({
  theme
}) => theme.mq.desktop} {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      max-width: max-content;
    }
  }

  ${({
  theme
}) => theme.mq.tablet} {
    width: ${({
  isLong
}) => isLong ? `100%` : `50rem`};

    h1 {
      max-width: ${({
  isLong
}) => isLong ? `max-content` : `40rem`};
    }
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    width: 100%;
  }
`;
const ImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: ${({
  isLong
}) => isLong ? `40rem` : `80rem`};
  max-width: ${({
  isLong
}) => isLong ? `40rem` : `80rem`};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({
  theme
}) => theme.mq.desktop} {
    width: 100%;
    padding-top: ${({
  theme
}) => theme.padding.xV};
    margin: ${({
  isLong
}) => isLong ? '0 auto' : 0};
  }

  ${({
  theme
}) => theme.mq.tablet} {
    padding-top: ${({
  theme
}) => theme.padding.mV};
  }
`;

/***/ }),

/***/ "./components/sections/SectionTextHeader/SectionTextHeader.js":
/*!********************************************************************!*\
  !*** ./components/sections/SectionTextHeader/SectionTextHeader.js ***!
  \********************************************************************/
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
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _SectionTextHeader_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTextHeader.styles */ "./components/sections/SectionTextHeader/SectionTextHeader.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\SectionTextHeader\\SectionTextHeader.js";






const SectionTextHeader = ({
  data: {
    header
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SectionTextHeader_styles__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SectionTextHeader_styles__WEBPACK_IMPORTED_MODULE_3__.HeaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_2__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

SectionTextHeader.propTypes = {
  header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
SectionTextHeader.defaultProps = {
  header: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTextHeader);

/***/ }),

/***/ "./components/sections/SectionTextHeader/SectionTextHeader.styles.js":
/*!***************************************************************************!*\
  !*** ./components/sections/SectionTextHeader/SectionTextHeader.styles.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper),
/* harmony export */   "HeaderWrapper": () => (/* binding */ HeaderWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  background-color: ${({
  theme
}) => theme.colors.backgroundWhite};

  ${({
  theme
}) => theme.mq.tablet} {
    width: unset;
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }
`;
const HeaderWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 70rem;
  margin: 0 auto;

  ${({
  theme
}) => theme.mq.tablet} {
    width: unset;
  }
`;

/***/ }),

/***/ "./components/sections/SectionWithDesc/SectionWithDesc.js":
/*!****************************************************************!*\
  !*** ./components/sections/SectionWithDesc/SectionWithDesc.js ***!
  \****************************************************************/
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
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @templates/SectionStyles/Section.styles */ "./components/templates/SectionStyles/Section.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\SectionWithDesc\\SectionWithDesc.js";






const SectionWithDesc = ({
  data: {
    header,
    description
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_3__.SectionDarkWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

SectionWithDesc.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })
};
SectionWithDesc.defaultProps = {
  data: {
    header: '',
    description: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionWithDesc);

/***/ }),

/***/ "./components/sections/SectionWithImage/SectionWithImage.js":
/*!******************************************************************!*\
  !*** ./components/sections/SectionWithImage/SectionWithImage.js ***!
  \******************************************************************/
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
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @templates/SectionStyles/Section.styles */ "./components/templates/SectionStyles/Section.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\SectionWithImage\\SectionWithImage.js";








const SectionWithImage = ({
  data: {
    header,
    description,
    image,
    isReversed
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_4__.SectionWrapper, {
    children: isReversed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: image.data.attributes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
        isReversed: isReversed,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: header
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: header
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_SectionStyles_Section_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: image.data.attributes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

SectionWithImage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    isReversed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  })
};
SectionWithImage.defaultProps = {
  data: {
    header: '',
    description: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionWithImage);

/***/ }),

/***/ "./components/sections/SectionWithList/SectionWithList.js":
/*!****************************************************************!*\
  !*** ./components/sections/SectionWithList/SectionWithList.js ***!
  \****************************************************************/
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
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @molecules/ListItem/ListItem */ "./components/molecules/ListItem/ListItem.js");
/* harmony import */ var _SectionWithList_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SectionWithList.styles */ "./components/sections/SectionWithList/SectionWithList.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\sections\\SectionWithList\\SectionWithList.js";








const SectionWithList = ({
  data: {
    header,
    listItems
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    short: true,
    modular: true,
    white: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_SectionWithList_styles__WEBPACK_IMPORTED_MODULE_5__.Tile, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_SectionWithList_styles__WEBPACK_IMPORTED_MODULE_5__.StyledList, {
        children: listItems.map(({
          item,
          id
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_SectionWithList_styles__WEBPACK_IMPORTED_MODULE_5__.StyledItem, {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, undefined)
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

SectionWithList.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    listItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
  })
};
SectionWithList.defaultProps = {
  data: {
    header: '',
    listItems: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionWithList);

/***/ }),

/***/ "./components/sections/SectionWithList/SectionWithList.styles.js":
/*!***********************************************************************!*\
  !*** ./components/sections/SectionWithList/SectionWithList.styles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tile": () => (/* binding */ Tile),
/* harmony export */   "StyledList": () => (/* binding */ StyledList),
/* harmony export */   "StyledItem": () => (/* binding */ StyledItem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Tile = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  padding: ${({
  theme
}) => theme.dimensions.tilePadding};
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  width: 70rem;
  color: ${({
  theme
}) => theme.colors.white};
  align-items: flex-start;

  ${({
  theme
}) => theme.mq.tablet} {
    width: 100%;
    padding: ${({
  theme
}) => theme.dimensions.tilePaddingMobile};
    margin: 0 ${({
  theme
}) => theme.padding.s} ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
  }
`;
const StyledList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  margin-top: 4rem;
  font-size: ${({
  theme
}) => theme.fontSize.body};

  li {
    align-items: flex-start;
  }
`;
const StyledItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  inline-size: 40rem;
  overflow-wrap: break-word;

  ${({
  theme
}) => theme.mq.mobileLarge} {
    inline-size: 100%;
  }
`;

/***/ }),

/***/ "./components/strapi/sections.js":
/*!***************************************!*\
  !*** ./components/strapi/sections.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sections/Hero/Hero */ "./components/sections/Hero/Hero.js");
/* harmony import */ var _sections_HeroInstructors_HeroInstructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sections/HeroInstructors/HeroInstructors */ "./components/sections/HeroInstructors/HeroInstructors.js");
/* harmony import */ var _sections_HeroCourses_HeroCourses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sections/HeroCourses/HeroCourses */ "./components/sections/HeroCourses/HeroCourses.js");
/* harmony import */ var _sections_HeroPricing_HeroPricing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sections/HeroPricing/HeroPricing */ "./components/sections/HeroPricing/HeroPricing.js");
/* harmony import */ var _sections_HeroAcademy_HeroAbout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sections/HeroAcademy/HeroAbout */ "./components/sections/HeroAcademy/HeroAbout.js");
/* harmony import */ var _sections_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sections/Contact/Contact */ "./components/sections/Contact/Contact.js");
/* harmony import */ var _sections_Regulations_Regulations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sections/Regulations/Regulations */ "./components/sections/Regulations/Regulations.js");
/* harmony import */ var _sections_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sections/Pricing/Pricing */ "./components/sections/Pricing/Pricing.js");
/* harmony import */ var _sections_Courses_Courses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sections/Courses/Courses */ "./components/sections/Courses/Courses.js");
/* harmony import */ var _sections_CiscoCourse_CiscoCourse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sections/CiscoCourse/CiscoCourse */ "./components/sections/CiscoCourse/CiscoCourse.js");
/* harmony import */ var _sections_SectionWithImage_SectionWithImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sections/SectionWithImage/SectionWithImage */ "./components/sections/SectionWithImage/SectionWithImage.js");
/* harmony import */ var _sections_SectionWithDesc_SectionWithDesc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sections/SectionWithDesc/SectionWithDesc */ "./components/sections/SectionWithDesc/SectionWithDesc.js");
/* harmony import */ var _sections_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sections/SectionHeader/SectionHeader */ "./components/sections/SectionHeader/SectionHeader.js");
/* harmony import */ var _sections_SectionTextHeader_SectionTextHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sections/SectionTextHeader/SectionTextHeader */ "./components/sections/SectionTextHeader/SectionTextHeader.js");
/* harmony import */ var _sections_SectionWithList_SectionWithList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sections/SectionWithList/SectionWithList */ "./components/sections/SectionWithList/SectionWithList.js");
/* harmony import */ var _sections_Rodo_Rodo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @sections/Rodo/Rodo */ "./components/sections/Rodo/Rodo.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\strapi\\sections.js";
















 // Map Strapi sections to section components



const sectionComponents = {
  'sections.hero': _sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default,
  'sections.hero-instructors': _sections_HeroInstructors_HeroInstructors__WEBPACK_IMPORTED_MODULE_2__.default,
  'sections.hero-courses': _sections_HeroCourses_HeroCourses__WEBPACK_IMPORTED_MODULE_3__.default,
  'sections.hero-pricing': _sections_HeroPricing_HeroPricing__WEBPACK_IMPORTED_MODULE_4__.default,
  'sections.hero-about': _sections_HeroAcademy_HeroAbout__WEBPACK_IMPORTED_MODULE_5__.default,
  'sections.contact': _sections_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__.default,
  'sections.regulations': _sections_Regulations_Regulations__WEBPACK_IMPORTED_MODULE_7__.default,
  'sections.pricing': _sections_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_8__.default,
  'sections.courses': _sections_Courses_Courses__WEBPACK_IMPORTED_MODULE_9__.default,
  'sections.cisco-course': _sections_CiscoCourse_CiscoCourse__WEBPACK_IMPORTED_MODULE_10__.default,
  'sections.section-with-image': _sections_SectionWithImage_SectionWithImage__WEBPACK_IMPORTED_MODULE_11__.default,
  'sections.section-with-desc': _sections_SectionWithDesc_SectionWithDesc__WEBPACK_IMPORTED_MODULE_12__.default,
  'sections.section-header': _sections_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_13__.default,
  'sections.section-text-header': _sections_SectionTextHeader_SectionTextHeader__WEBPACK_IMPORTED_MODULE_14__.default,
  'sections.section-with-list': _sections_SectionWithList_SectionWithList__WEBPACK_IMPORTED_MODULE_15__.default,
  'sections.rodo': _sections_Rodo_Rodo__WEBPACK_IMPORTED_MODULE_16__.default
}; // Display the list of sections

const Sections = ({
  sections
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: sections.map(section => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(Section, {
      sectionData: section
    }, `${section.__component}${section.id}`, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined))
  }, void 0, false);
};

Sections.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)).isRequired
};
Sections.defaultProps = {
  sections: []
}; // Display a section individually

const Section = ({
  sectionData
}) => {
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(SectionComponent, {
    data: sectionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 10
  }, undefined);
};

Section.propTypes = {
  sectionData: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object.isRequired)
};
Section.defaultProps = {
  sectionData: {
    __component: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sections);

/***/ }),

/***/ "./components/strapi/seo.js":
/*!**********************************!*\
  !*** ./components/strapi/seo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\strapi\\seo.js";




const Seo = ({
  seo
}) => {
  // Prevent errors if no metadata was set
  if (!seo) return null;
  const {
    metaTitle,
    metaDescription
  } = seo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: metaTitle,
    description: metaDescription
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, undefined);
};

Seo.propTypes = {
  seo: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    metaTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    metaDescription: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./components/templates/Layout/Layout.js":
/*!***********************************************!*\
  !*** ./components/templates/Layout/Layout.js ***!
  \***********************************************/
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
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var _organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @organisms/NavBar/NavBar */ "./components/organisms/NavBar/NavBar.js");
/* harmony import */ var _organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @organisms/Navigation/Navigation */ "./components/organisms/Navigation/Navigation.js");
/* harmony import */ var _organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @organisms/Footer/Footer */ "./components/organisms/Footer/Footer.js");
/* harmony import */ var providers_AppProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! providers/AppProvider */ "./providers/AppProvider.js");
/* harmony import */ var _Layout_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Layout.styles */ "./components/templates/Layout/Layout.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\templates\\Layout\\Layout.js";











const Layout = ({
  children,
  navigation: {
    logo,
    navLinks
  },
  footer
}) => {
  const {
    isNavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(providers_AppProvider__WEBPACK_IMPORTED_MODULE_6__.AppContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Layout_styles__WEBPACK_IMPORTED_MODULE_7__.StyledLayout, {
    isNavOpen: isNavOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__.default, {
      logo: logo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), isNavOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__.default, {
      navLinks: navLinks
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {
        footer: footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

Layout.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape,
  navigation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  footer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
Layout.defaultProps = {
  navigation: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/templates/Layout/Layout.styles.js":
/*!******************************************************!*\
  !*** ./components/templates/Layout/Layout.styles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledLayout": () => (/* binding */ StyledLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledLayout = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  max-height: ${({
  isNavOpen
}) => isNavOpen ? '100vh' : 'fit-content'};
  overflow: hidden;
`;

/***/ }),

/***/ "./components/templates/PageSection/PageSection.js":
/*!*********************************************************!*\
  !*** ./components/templates/PageSection/PageSection.js ***!
  \*********************************************************/
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
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var _PageSection_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageSection.style */ "./components/templates/PageSection/PageSection.style.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["children"];
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\templates\\PageSection\\PageSection.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const PageSection = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_PageSection_style__WEBPACK_IMPORTED_MODULE_3__.PageSectionWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

PageSection.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape,
  props: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSection);

/***/ }),

/***/ "./components/templates/PageSection/PageSection.style.js":
/*!***************************************************************!*\
  !*** ./components/templates/PageSection/PageSection.style.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSectionWrapper": () => (/* binding */ PageSectionWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageSectionWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  margin-bottom: ${({
  theme
}) => theme.padding.xV};
  background-color: ${({
  theme
}) => theme.colors.backgroundLight};
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  box-shadow: ${({
  theme
}) => theme.utils.boxShadow};
  padding: ${({
  theme
}) => theme.dimensions.pageSectionPadding};
  width: ${({
  theme
}) => theme.dimensions.pageSectionWidth};

  &:last-child {
    margin-bottom: 0;
  }

  ${({
  theme
}) => theme.mq.laptop} {
    width: 100%;
  }

  ${({
  theme
}) => theme.mq.tablet} {
    border-radius: 0;
    margin-bottom: ${({
  theme
}) => theme.padding.sV};
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    border-radius: 0;
    margin-bottom: ${({
  theme
}) => theme.padding.ssV};
    padding: ${({
  theme
}) => theme.dimensions.tilePaddingMobile};
  }
`;

/***/ }),

/***/ "./components/templates/PageTileWrapper/PageTileWrapper.js":
/*!*****************************************************************!*\
  !*** ./components/templates/PageTileWrapper/PageTileWrapper.js ***!
  \*****************************************************************/
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
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var _PageTileWrapper_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageTileWrapper.styles */ "./components/templates/PageTileWrapper/PageTileWrapper.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\templates\\PageTileWrapper\\PageTileWrapper.js";






const PageTileWrapper = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_PageTileWrapper_styles__WEBPACK_IMPORTED_MODULE_3__.StyledPageTileWrapper, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

PageTileWrapper.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTileWrapper);

/***/ }),

/***/ "./components/templates/PageTileWrapper/PageTileWrapper.styles.js":
/*!************************************************************************!*\
  !*** ./components/templates/PageTileWrapper/PageTileWrapper.styles.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledPageTileWrapper": () => (/* binding */ StyledPageTileWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledPageTileWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({
  theme
}) => theme.mq.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;

/***/ }),

/***/ "./components/templates/PageTile/PageTile.js":
/*!***************************************************!*\
  !*** ./components/templates/PageTile/PageTile.js ***!
  \***************************************************/
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
/* harmony import */ var _PageTile_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTile.styles */ "./components/templates/PageTile/PageTile.styles.js");
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\templates\\PageTile\\PageTile.js";






const PageTile = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_PageTile_styles__WEBPACK_IMPORTED_MODULE_2__.PageTileWrapper, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

PageTile.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_3__.childrenShape,
  props: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTile);

/***/ }),

/***/ "./components/templates/PageTile/PageTile.styles.js":
/*!**********************************************************!*\
  !*** ./components/templates/PageTile/PageTile.styles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTileWrapper": () => (/* binding */ PageTileWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageTileWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  margin-top: ${({
  theme
}) => theme.dimensions.richTextMarginTop};
  padding: ${({
  theme
}) => theme.dimensions.tilePadding};
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  border-radius: ${({
  theme
}) => theme.utils.borderRadius};
  width: 40rem;
  color: ${({
  theme
}) => theme.colors.white};
  align-items: flex-start;

  ${({
  theme
}) => theme.mq.laptop} {
    width: 50rem;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    width: 100%;
    padding: ${({
  theme
}) => theme.dimensions.tilePaddingMobile};
  }
`;

/***/ }),

/***/ "./components/templates/PageWrapper/PageWrapper.js":
/*!*********************************************************!*\
  !*** ./components/templates/PageWrapper/PageWrapper.js ***!
  \*********************************************************/
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
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var _PageWrapper_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper.styles */ "./components/templates/PageWrapper/PageWrapper.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["children"];
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\components\\templates\\PageWrapper\\PageWrapper.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const PageWrapper = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_PageWrapper_styles__WEBPACK_IMPORTED_MODULE_3__.StyledPageWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

PageWrapper.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape,
  props: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ "./components/templates/PageWrapper/PageWrapper.styles.js":
/*!****************************************************************!*\
  !*** ./components/templates/PageWrapper/PageWrapper.styles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledPageWrapper": () => (/* binding */ StyledPageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledPageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  padding: ${({
  theme,
  modular
}) => modular ? 0 : theme.padding.xV} ${({
  theme
}) => theme.padding.m} ${({
  theme
}) => theme.padding.xV}
    ${({
  theme
}) => theme.padding.m};
  min-height: ${({
  short
}) => short ? 'unset' : '90vh'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({
  column
}) => column ? 'column' : 'row'};
  background-color: ${({
  theme,
  white
}) => white ? theme.colors.backgroundWhite : 'transparent'};

  ${({
  theme
}) => theme.mq.desktop} {
    padding: ${({
  theme,
  modular
}) => modular ? 0 : theme.padding.xV} ${({
  theme
}) => theme.padding.m} ${({
  theme
}) => theme.padding.xV}
      ${({
  theme
}) => theme.padding.m};
  }

  ${({
  theme
}) => theme.mq.tablet} {
    padding: 0;
    min-height: unset;
  }
`;

/***/ }),

/***/ "./components/templates/SectionStyles/Section.styles.js":
/*!**************************************************************!*\
  !*** ./components/templates/SectionStyles/Section.styles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionWrapper": () => (/* binding */ SectionWrapper),
/* harmony export */   "SectionDarkWrapper": () => (/* binding */ SectionDarkWrapper),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SectionWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  padding: ${({
  theme
}) => theme.padding.xV} ${({
  theme
}) => theme.padding.m};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({
  theme
}) => theme.colors.backgroundWhite};

  ${({
  theme
}) => theme.mq.laptop} {
    flex-direction: column;
    justify-content: center;
  }

  ${({
  theme
}) => theme.mq.mobileLarge} {
    padding: ${({
  theme
}) => theme.padding.mV} ${({
  theme
}) => theme.padding.s};
    min-height: unset;

    h1 {
      font-size: ${({
  theme
}) => theme.fontSize.header};
    }
  }
`;
const SectionDarkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(SectionWrapper)`
  background-color: ${({
  theme
}) => theme.colors.mainColor};
  color: ${({
  theme
}) => theme.colors.white};

  p {
    max-width: 60rem;
    margin-left: 5vw;

    ${({
  theme
}) => theme.mq.laptopLarge} {
      max-width: 50rem;
    }

    ${({
  theme
}) => theme.mq.laptop} {
      max-width: 60rem;
      margin: 5rem 0 0 0;
    }
  }
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 60rem;
  display: flex;
  flex-direction: column;
  margin: ${({
  isReversed
}) => isReversed ? `0 0 0 5vw` : `0 5vw 0 0`};

  p {
    margin-top: 3rem;

    ${({
  theme
}) => theme.mq.laptopLarge} {
      font-size: ${({
  theme
}) => theme.fontSize.bodySmall};
    }

    ${({
  theme
}) => theme.mq.laptop} {
      font-size: ${({
  theme
}) => theme.fontSize.body};
    }
  }

  ${({
  theme
}) => theme.mq.laptop} {
    margin: 0 0 3rem 0;
  }

  ${({
  theme
}) => theme.mq.tablet} {
    width: 100%;
  }

  ${({
  theme
}) => theme.mq.desktopWide} {
  }
`;
const ImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({
  theme
}) => theme.mq.laptop} {
    width: 60rem;
    order: 2;
  }

  ${({
  theme
}) => theme.mq.tablet} {
    width: 100%;
  }
`;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["zse-cisco-5v79m.ondigitalocean.app","localhost"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/[[...slug]].js":
/*!******************************!*\
  !*** ./pages/[[...slug]].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var components_templates_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/templates/Layout/Layout */ "./components/templates/Layout/Layout.js");
/* harmony import */ var components_strapi_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/strapi/seo */ "./components/strapi/seo.js");
/* harmony import */ var components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/strapi/sections */ "./components/strapi/sections.js");
/* harmony import */ var utils_getPageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/getPageData */ "./utils/getPageData.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\pages\\[[...slug]].js";









const DynamicPage = ({
  sections,
  navigation,
  footer,
  seo
}) => {
  if (!(sections !== null && sections !== void 0 && sections.length)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_6___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_templates_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    navigation: navigation,
    footer: footer,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_strapi_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__.default, {
      sections: sections
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

DynamicPage.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
  navigation: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  seo: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
};
async function getStaticPaths() {
  const {
    data
  } = await (0,utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/api/pages');
  const paths = data.map(({
    attributes
  }) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !attributes.slug ? false : attributes.slug.split('/');
    return {
      params: {
        slug: slugArray
      }
    };
  });
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps({
  params
}) {
  const pageData = await (0,utils_getPageData__WEBPACK_IMPORTED_MODULE_5__.getPageData)({
    slug: !params.slug ? [''] : params.slug
  });
  const navigation = await (0,utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/api/navigation?populate[logo][populate]=*&populate[navLinks][populate]=*');
  const footer = await (0,utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/api/footer?populate=*');

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return {
      props: {}
    };
  }

  const {
    content,
    seo
  } = pageData;
  return {
    props: {
      sections: content,
      seo,
      navigation: navigation.data.attributes,
      footer: footer.data.attributes
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicPage);

/***/ }),

/***/ "./propTypes/componentTypes.js":
/*!*************************************!*\
  !*** ./propTypes/componentTypes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataShape": () => (/* binding */ dataShape),
/* harmony export */   "childrenShape": () => (/* binding */ childrenShape)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const dataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  header: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  button: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
}).isRequired;
const childrenShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().element)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Praca\\zse-cisco\\frontend\\providers\\AppProvider.js";



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

/***/ "./utils/getPageData.js":
/*!******************************!*\
  !*** ./utils/getPageData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPageData": () => (/* binding */ getPageData)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./utils/api.js");

async function getPageData(params) {
  const slug = params.slug.join('/'); // Find the pages that match this slug

  const {
    data
  } = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`/api/pages?filters[slug][$eq]=${slug}&populate[content][populate]=*&populate[seo][populate]=*`);
  console.log(data);
  const pageData = data[0].attributes; // Make sure we found something, otherwise return null

  if (data == null || data.length === 0) {
    return null;
  } // Return the first item since there should only be one result per slug


  return pageData;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

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

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[[...slug]].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMLEtBQWdCLENBQXBDLEVBQXVDO0FBQ3JDLFdBQU8sSUFBUDtBQUNELEdBVnVDLENBWXhDOzs7QUFDQSxTQUFPcXBCLFFBQVA7QUFDRDs7Ozs7Ozs7OztBQ2hCRCwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0Fycm93TGluay9BcnJvd0xpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vQnV0dG9uLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0Z1bmN0aW9uYWxMaW5rL0Z1bmN0aW9uYWxMaW5rLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50L0hlcm9Db3Vyc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC9IZXJvQ291cnNlQ29tcG9uZW50LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNpbmdDb21wb25lbnQvUHJpY2luZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljaW5nQ29tcG9uZW50L1ByaWNpbmdDb21wb25lbnQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3Rlci9Gb290ZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9DaXNjb0NvdXJzZS9DaXNjb0NvdXJzZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0Npc2NvQ291cnNlL0Npc2NvQ291cnNlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3QvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3QvQ29udGFjdC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Db3Vyc2VzL0NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Db3Vyc2VzL0NvdXJzZXMuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0FjYWRlbXkvSGVyb0Fib3V0LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0FjYWRlbXkvSGVyb0Fib3V0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0NvdXJzZXMvSGVyb0NvdXJzZXMuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0luc3RydWN0b3JzL0hlcm9JbnN0cnVjdG9ycy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZy5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvL0hlcm8uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJpY2luZy9QcmljaW5nLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUmVndWxhdGlvbnMvUmVndWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Sb2RvL1JvZG8uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Sb2RvL1JvZG8uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VjdGlvbkhlYWRlci9TZWN0aW9uSGVhZGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VjdGlvbkhlYWRlci9TZWN0aW9uSGVhZGVyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL1NlY3Rpb25UZXh0SGVhZGVyL1NlY3Rpb25UZXh0SGVhZGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VjdGlvblRleHRIZWFkZXIvU2VjdGlvblRleHRIZWFkZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VjdGlvbldpdGhEZXNjL1NlY3Rpb25XaXRoRGVzYy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL1NlY3Rpb25XaXRoSW1hZ2UvU2VjdGlvbldpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL1NlY3Rpb25XaXRoTGlzdC9TZWN0aW9uV2l0aExpc3QuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9TZWN0aW9uV2l0aExpc3QvU2VjdGlvbldpdGhMaXN0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3N0cmFwaS9zZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3N0cmFwaS9zZW8uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9MYXlvdXQvTGF5b3V0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbi5zdHlsZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZVdyYXBwZXIvUGFnZVRpbGVXcmFwcGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VUaWxlV3JhcHBlci9QYWdlVGlsZVdyYXBwZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VUaWxlL1BhZ2VUaWxlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VUaWxlL1BhZ2VUaWxlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvU2VjdGlvblN0eWxlcy9TZWN0aW9uLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3BhZ2VzL1tbLi4uc2x1Z11dLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9wcm92aWRlcnMvQXBwUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3V0aWxzL2dldFBhZ2VEYXRhLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZXJyb3JcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vaWdub3JlZHxDOlxcVXNlcnNcXG5uYWQzXFxEZXNrdG9wXFxXZWIgZGV2ZWxvcG1lbnRcXFByYWNhXFx6c2UtY2lzY29cXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEFycm93TGlua1dyYXBwZXIsIEFycm93IH0gZnJvbSAnLi9BcnJvd0xpbmsuc3R5bGVzJztcclxuXHJcbmNvbnN0IEFycm93TGluayA9ICh7IHVybCwgdGV4dCwgYWNjZW50ZWQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXt1cmwgfHwgJyd9IHBhc3NIcmVmPlxyXG4gICAgICA8QXJyb3dMaW5rV3JhcHBlciBhY2NlbnRlZD17YWNjZW50ZWR9PlxyXG4gICAgICAgIDxoNT57dGV4dH08L2g1PlxyXG4gICAgICAgIDxBcnJvdyBhY2NlbnRlZD17YWNjZW50ZWR9IC8+XHJcbiAgICAgIDwvQXJyb3dMaW5rV3JhcHBlcj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuQXJyb3dMaW5rLnByb3BUeXBlcyA9IHtcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhY2NlbnRlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5BcnJvd0xpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNsdWc6ICcnLFxyXG4gIHRpdGxlOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFycm93TGluaztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXJyb3dMaW5rV3JhcHBlciA9IHN0eWxlZC5hYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dDtcclxuXHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3IpfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3IpfTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3IpfTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMSUsIC0xMCUpO1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmxpZ2h0ZXJCdXR0b25Db2xvcil9O1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmxpZ2h0ZXJBY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5saWdodGVyQnV0dG9uQ29sb3IpfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAzcHggc29saWQ7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMC43NXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQuc3BhbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3IpfTtcclxuICBtaW4td2lkdGg6IDQuMnJlbTtcclxuICBtaW4taGVpZ2h0OiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwLjVyZW0gMC41cmVtIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLW91dDtcclxuXHJcbiAgJHtBcnJvd0xpbmtXcmFwcGVyfTpob3ZlciAmLFxyXG4gICR7QXJyb3dMaW5rV3JhcHBlcn06aG92ZXIgJjo6YmVmb3JlLFxyXG4gICR7QXJyb3dMaW5rV3JhcHBlcn06aG92ZXIgJjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmxpZ2h0ZXJBY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5saWdodGVyQnV0dG9uQ29sb3IpfTtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSxcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDIuNXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudGVkIH0pID0+IChhY2NlbnRlZCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5idXR0b25Db2xvcil9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSkgcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBTdHlsZWRCdXR0b24gfSBmcm9tICcuL0J1dHRvbi5zdHlsZXMnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgZGF0YTogeyBpc0ZpbGxlZCwgdGV4dCwgdXJsIH0sIGhhc01hcmdpbiwgYWNjZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17dXJsIHx8ICcnfSBwYXNzSHJlZj5cclxuICAgICAgPFN0eWxlZEJ1dHRvbiBoYXNNYXJnaW49e2hhc01hcmdpbn0gaXNGaWxsZWQ9e2lzRmlsbGVkfSBhY2NlbnQ9e2FjY2VudH0+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaXNGaWxsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbGluazogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgaGFzTWFyZ2luOiBQcm9wVHlwZXMuYm9vbCxcclxuICBhY2NlcHQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBjYXB0aW9uOiAnJyxcclxuICAgIGxpbms6IHtcclxuICAgICAgc2x1ZzogJycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5hYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgYm9yZGVyOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCB9KSA9PiAoaXNGaWxsZWQgPyAnMCcgOiBgM3B4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yfWApfTtcclxuICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudCB9KSA9PiAoYWNjZW50ID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgaXNGaWxsZWQsIGFjY2VudCB9KSA9PiAoaXNGaWxsZWQgPyAoYWNjZW50ID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yKSA6ICd0cmFuc3BhcmVudCcpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSwgaXNGaWxsZWQsIGFjY2VudCB9KSA9PiAoaXNGaWxsZWQgPyB0aGVtZS5jb2xvcnMuYnV0dG9uVGV4dENvbG9yIDogYWNjZW50ID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogJHsoeyBoYXNNYXJnaW4gfSkgPT4gKGhhc01hcmdpbiA/ICcycmVtJyA6ICcwJyl9O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxJSwgLTEwJSk7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudCB9KSA9PiAoYWNjZW50ID8gdGhlbWUuY29sb3JzLmxpZ2h0ZXJBY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5saWdodGVyQnV0dG9uQ29sb3IpfTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGlzRmlsbGVkLCBhY2NlbnQgfSkgPT5cclxuICAgICAgaXNGaWxsZWQgPyAoYWNjZW50ID8gdGhlbWUuY29sb3JzLmxpZ2h0ZXJBY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5saWdodGVyQnV0dG9uQ29sb3IpIDogJ3RyYW5zcGFyZW50J307XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSwgaXNGaWxsZWQsIGFjY2VudCB9KSA9PlxyXG4gICAgICBpc0ZpbGxlZCA/IHRoZW1lLmNvbG9ycy5idXR0b25UZXh0Q29sb3IgOiBhY2NlbnQgPyB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmxpZ2h0ZXJCdXR0b25Db2xvcn07XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgb3V0bGluZTogM3B4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEZ1bmN0aW9uYWxMaW5rID0gKHsgbGluazogeyB0ZXh0LCB1cmwsIG5ld1RhYiB9LCBzZXRJc05hdk9wZW4gfSkgPT4ge1xyXG4gIGlmIChuZXdUYWIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e3VybCB8fCAnJ30gcGFzc0hyZWY+XHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9Pnt0ZXh0fTwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuRnVuY3Rpb25hbExpbmsucHJvcFR5cGVzID0ge1xyXG4gIGxpbms6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5ld1RhYjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBzZXRJc05hdk9wZW46IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRnVuY3Rpb25hbExpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxpbms6IHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgc2x1ZzogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uYWxMaW5rO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgTmV4dEltYWdlV3JhcHBlciwgU3R5bGVkTmV4dEltYWdlIH0gZnJvbSAnLi9JbWFnZS5zdHlsZXMnO1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW50RGFya01vZGUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIGlmIChpbWFnZSkge1xyXG4gICAgY29uc3QgeyBhbHRlcm5hdGl2ZVRleHQsIHVybCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2U7XHJcblxyXG4gICAgY29uc3QgbG9hZGVyID0gKHsgc3JjLCB3aWR0aCB9KSA9PiB7XHJcbiAgICAgIGlmIChzcmMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3NyY30/dz0ke3dpZHRofWA7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOZXh0SW1hZ2VXcmFwcGVyIGRhcms9e2N1cnJlbnREYXJrTW9kZX0+XHJcbiAgICAgICAgPFN0eWxlZE5leHRJbWFnZVxyXG4gICAgICAgICAgbG9hZGVyPXtsb2FkZXJ9XHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICBzcmM9e3VybH1cclxuICAgICAgICAgIGFsdD17YWx0ZXJuYXRpdmVUZXh0fVxyXG4gICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAvPlxyXG4gICAgICA8L05leHRJbWFnZVdyYXBwZXI+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdJbWFnZSB3YXMgcmVxdWlyZWQgYnV0IG5vdCBwcm92aWRlZCcpO1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKCdJbWFnZSB3YXMgcmVxdWlyZWQgYnV0IG5vdCBwcm92aWRlZCcpO1xyXG4gICAgcmV0dXJuIDxOZXh0SW1hZ2Ugc3JjPVwiL2ltZ0Vycm9yLnN2Z1wiIGhlaWdodD17MzAwfSB3aWR0aD17MzAwfSAvPjtcclxuICB9XHJcbn07XHJcblxyXG5JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhbHRlcm5hdGl2ZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICB9KSxcclxufTtcclxuXHJcbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbWFnZTogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXh0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZpbHRlcjogJHsoeyBkYXJrIH0pID0+IChkYXJrID8gYGJyaWdodG5lc3MoMC44NSlgIDogYGJyaWdodG5lc3MoMSlgKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTmV4dEltYWdlID0gc3R5bGVkKE5leHRJbWFnZSlgXHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IHsgTGluZUhvcml6b250YWxXcmFwcGVyLCBMaW5lIH0gZnJvbSAnLi9MaW5lSG9yaXpvbnRhbC5zdHlsZXMnO1xyXG5cclxuY29uc3QgTGluZUhvcml6b250YWwgPSAoeyBjaGlsZHJlbiwgbGFyZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUhvcml6b250YWxXcmFwcGVyIGRhdGEtdGVzdGlkPVwibGluZS1ob3Jpem9udGFsLXdyYXBwZXJcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8TGluZSBsYXJnZT17bGFyZ2V9IGRhdGEtdGVzdGlkPVwibGluZS1ob3Jpem9udGFsXCIgLz5cclxuICAgIDwvTGluZUhvcml6b250YWxXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5MaW5lSG9yaXpvbnRhbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZUhvcml6b250YWw7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVIb3Jpem9udGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWluLWhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMC44cmVtJyA6ICcwLjRyZW0nKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzIuMnJlbScgOiAnLjhyZW0nKX07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5lVmVydGljYWxXcmFwcGVyLCBMaW5lIH0gZnJvbSAnLi9MaW5lVmVydGljYWwuc3R5bGVzJztcclxuXHJcbmNvbnN0IExpbmVWZXJ0aWNhbCA9ICh7IGNoaWxkcmVuLCBsYXJnZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5lVmVydGljYWxXcmFwcGVyIGRhdGEtdGVzdGlkPVwibGluZS12ZXJ0aWNhbC13cmFwcGVyXCI+XHJcbiAgICAgIDxMaW5lIGxhcmdlPXtsYXJnZX0gZGF0YS10ZXN0aWQ9XCJsaW5lLXZlcnRpY2FsXCIgLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5lVmVydGljYWxXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5MaW5lVmVydGljYWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVWZXJ0aWNhbDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZVZlcnRpY2FsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWluLXdpZHRoOiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcwLjhyZW0nIDogJzAuNHJlbScpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgbWFyZ2luLXJpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcyLjJyZW0nIDogJzEuNXJlbScpfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcxLjhyZW0nIDogJzEuNXJlbScpfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnQGF0b21zL0Fycm93TGluay9BcnJvd0xpbmsnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIgfSBmcm9tICcuL0hlcm9Db3Vyc2VDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnQgPSAoeyBkYXRhOiB7IGhlYWRlciwgZGVzY3JpcHRpb24sIHVybCB9LCBsaW5rQ2FwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlcj5cclxuICAgICAgPGg0PntoZWFkZXJ9PC9oND5cclxuICAgICAgPExpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgPEFycm93TGluayB1cmw9e3VybH0gdGV4dD17bGlua0NhcHRpb259IC8+XHJcbiAgICA8L0hlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQ291cnNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSksXHJcbiAgbGlua0NhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5IZXJvQ291cnNlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXI6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgdXJsOiAnJyxcclxuICB9LFxyXG4gIGxpbmtDYXB0aW9uOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9Db3Vyc2VDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBtYXgtd2lkdGg6IDUwcmVtO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEhlcm9JbnN0cnVjdG9yV3JhcHBlciB9IGZyb20gJy4vSGVyb0luc3RydWN0b3JDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50ID0gKHsgZGF0YTogeyBoZWFkZXIsIG5hbWUsIGRlc2NyaXB0aW9uIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICAgICA8aDU+e2hlYWRlcn08L2g1PlxyXG4gICAgICA8aDQ+e25hbWV9PC9oND5cclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvSGVyb0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9JbnN0cnVjdG9yV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgRnVuY3Rpb25hbExpbmsgZnJvbSAnQGF0b21zL0Z1bmN0aW9uYWxMaW5rL0Z1bmN0aW9uYWxMaW5rJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1XcmFwcGVyLCBCdWxsZXQgfSBmcm9tICcuL0xpc3RJdGVtLnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgTGlzdEl0ZW0gPSAoeyBsaW5rLCBzZXRJc05hdk9wZW4sIGhhc0xpbmtzLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVdyYXBwZXI+XHJcbiAgICAgIDxCdWxsZXQgLz5cclxuICAgICAge2hhc0xpbmtzID8gPEZ1bmN0aW9uYWxMaW5rIGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPiA6IGNoaWxkcmVufVxyXG4gICAgPC9MaXN0SXRlbVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcclxuICBsaW5rOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFzTGlua3M6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtV3JhcHBlciA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2TGlzdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1bGxldCA9IHN0eWxlZC5zcGFuYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDIycHg7XHJcbiAgbWluLWhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMTJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZVNtYWxsfSB7XHJcbiAgICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIG1pbi13aWR0aDogOXB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFBhZ2VUaWxlIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGUvUGFnZVRpbGUnO1xyXG5pbXBvcnQgeyBTZW1lc3RlciwgSGVhZCwgUm93LCBBbm5vdGF0aW9uIH0gZnJvbSAnLi9QcmljaW5nQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBQcmljaW5nQ29tcG9uZW50ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBoZWFkZXIsIHNlbWVzdGVyLCBncm91cCwgcHJpY2UsIHN0dWRlbnQsIHN0dWRlbnRQcmljZSwgZ3JhZHVhdGUsIGdyYWR1YXRlUHJpY2UsIG90aGVycywgb3RoZXJzUHJpY2UsIGFubm90YXRpb24gfSA9IGRhdGE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVRpbGU+XHJcbiAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgPGg0PntoZWFkZXJ9PC9oND5cclxuICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIHtzZW1lc3RlciAmJiA8U2VtZXN0ZXI+e3NlbWVzdGVyfTwvU2VtZXN0ZXI+fVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c3Bhbj57Z3JvdXB9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntwcmljZX08L3NwYW4+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8c3Bhbj57c3R1ZGVudH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3N0dWRlbnRQcmljZX08L3NwYW4+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxzcGFuPntncmFkdWF0ZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2dyYWR1YXRlUHJpY2V9PC9zcGFuPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8c3Bhbj57b3RoZXJzfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57b3RoZXJzUHJpY2V9PC9zcGFuPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAge2Fubm90YXRpb24gJiYgPEFubm90YXRpb24+e2Fubm90YXRpb259PC9Bbm5vdGF0aW9uPn1cclxuICAgIDwvUGFnZVRpbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblByaWNpbmdDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZW1lc3RlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGdyb3VwOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJpY2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzdHVkZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3R1ZGVudFByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZ3JhZHVhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBncmFkdWF0ZVByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3RoZXJzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3RoZXJzUHJpY2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhbm5vdGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5QcmljaW5nQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXI6ICcnLFxyXG4gICAgc2VtZXN0ZXI6ICcnLFxyXG4gICAgZ3JvdXA6ICcnLFxyXG4gICAgcHJpY2U6ICcnLFxyXG4gICAgc3R1ZGVudDogJycsXHJcbiAgICBzdHVkZW50UHJpY2U6ICcnLFxyXG4gICAgZ3JhZHVhdGU6ICcnLFxyXG4gICAgZ3JhZHVhdGVQcmljZTogJycsXHJcbiAgICBvdGhlcnM6ICcnLFxyXG4gICAgb3RoZXJzUHJpY2U6ICcnLFxyXG4gICAgYW5ub3RhdGlvbnM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZW1lc3RlciA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xyXG4gIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrQmx1ZX07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkID0gc3R5bGVkKFJvdylgXHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0eWxlZE1hcmtkb3duIH0gZnJvbSAnLi9SaWNoVGV4dC5zdHlsZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IFJpY2hUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkTWFya2Rvd24gY2hpbGRyZW49e2NoaWxkcmVufSBza2lwSHRtbD17dHJ1ZX0gLz47XHJcbn07XHJcblxyXG5SaWNoVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dDtcclxuIiwiaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFya2Rvd24gPSBzdHlsZWQoTWFya2Rvd24pYFxyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5yaWNoVGV4dE1hcmdpblRvcH07XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICBoMyxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA5LjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDUuOXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG5cclxuICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkRm9vdGVyLFxyXG4gIEZvb3RlcldyYXBwZXIsXHJcbiAgQ29udGVudFdyYXBwZXIsXHJcbiAgSW5mb3JtYXRpb25XcmFwcGVyLFxyXG4gIFN0eWxlZFNjaG9vbEluZm8sXHJcbiAgTGluZSxcclxuICBJbWFnZXNXcmFwcGVyLFxyXG4gIEltYWdlV3JhcHBlcixcclxufSBmcm9tICcuL0Zvb3Rlci5zdHlsZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IGZvb3RlcjogeyBoZWFkZXIsIHNjaG9vbE5hbWUsIGZvb3RlckluZm9zLCBmb290ZXJJbWFnZXMgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRGb290ZXI+XHJcbiAgICAgIDxGb290ZXJXcmFwcGVyPlxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICAgIDxoMz57aGVhZGVyfTwvaDM+XHJcbiAgICAgICAgICA8U3R5bGVkU2Nob29sSW5mbz57c2Nob29sTmFtZX08L1N0eWxlZFNjaG9vbEluZm8+XHJcbiAgICAgICAgICA8SW5mb3JtYXRpb25XcmFwcGVyPlxyXG4gICAgICAgICAgICB7Zm9vdGVySW5mb3MubWFwKCh7IGlkLCBjYXB0aW9uLCBjb250ZW50IH0pID0+IChcclxuICAgICAgICAgICAgICA8cCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntjYXB0aW9ufTwvc3Bhbj4ge2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvSW5mb3JtYXRpb25XcmFwcGVyPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPExpbmUgLz5cclxuICAgICAgICA8SW1hZ2VzV3JhcHBlcj5cclxuICAgICAgICAgIHtmb290ZXJJbWFnZXMuZGF0YS5tYXAoKHsgYXR0cmlidXRlcywgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBpbWFnZT17YXR0cmlidXRlc30gLz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0ltYWdlc1dyYXBwZXI+XHJcbiAgICAgIDwvRm9vdGVyV3JhcHBlcj5cclxuICAgIDwvU3R5bGVkRm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBGb290ZXIucHJvcFR5cGVzID0ge1xyXG4vLyAgIGZvb3RlcjogUHJvcFR5cGVzLnNoYXBlKHtcclxuLy8gICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gICAgIHNjaG9vbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICAgICBmb290ZXJJbmZvczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuLy8gICAgIGZvb3RlckltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuLy8gICB9KS5pc1JlcXVpcmVkLFxyXG4vLyB9O1xyXG5cclxuLy8gRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuLy8gICBmb290ZXI6IHtcclxuLy8gICAgIGhlYWRlcjogJycsXHJcbi8vICAgICBzY2hvb2xOYW1lOiAnJyxcclxuLy8gICAgIGZvb3RlckluZm9zOiBbXSxcclxuLy8gICAgIGZvb3RlckltYWdlczogW10sXHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zdWJUZXh0fTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueHNWfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlOiAnY29udGVudCBsaW5lIGltYWdlcyc7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGNvbHVtbi1nYXA6IDVyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLXdpZHRoOiAzMHZ3O1xyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNjaG9vbEluZm8gPSBzdHlsZWQucGBcclxuICB3aWR0aDogMjRyZW07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuc3BhbmBcclxuICBncmlkLWFyZWE6IGxpbmU7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDAuNnJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiBpbWFnZXM7XHJcbiAgbWluLXdpZHRoOiAzMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNsYW1wKDl2dywgMTAwJSwgMTJyZW0pO1xyXG4gIG1heC13aWR0aDogMzByZW07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgd2lkdGg6IGNsYW1wKDE0dncsIDEwMCUsIDI0cmVtKTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICB3aWR0aDogMjByZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAyNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1pbi13aWR0aDogMjByZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1pbi13aWR0aDogMzByZW07XHJcbiAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICdwcm92aWRlcnMvQXBwUHJvdmlkZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVhZGVyLCBMb2dvLCBNZW51QnV0dG9uLCBTdHlsZWRTcGFuLCBMb2FkZXIsIEJ1dHRvbnNXcmFwcGVyLCBEYXJrTW9kZUJ1dHRvbiB9IGZyb20gJy4vTmF2QmFyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBsb2dvIH0pID0+IHtcclxuICBjb25zdCB7IGlzTG9hZGluZywgaXNOYXZPcGVuLCBzZXRJc05hdk9wZW4sIGhhbmRsZURhcmtNb2RlQ2hhbmdlLCBjdXJyZW50RGFya01vZGUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIGlzTG9hZGluZz17aXNMb2FkaW5nfSBpc05hdk9wZW49e2lzTmF2T3Blbn0+XHJcbiAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkZXJcIiBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICA8TG9nbyBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17bG9nby5kYXRhLmF0dHJpYnV0ZXN9IC8+XHJcbiAgICAgICAgPC9Mb2dvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxCdXR0b25zV3JhcHBlcj5cclxuICAgICAgICA8RGFya01vZGVCdXR0b24gb25DbGljaz17aGFuZGxlRGFya01vZGVDaGFuZ2V9IGRhcms9e2N1cnJlbnREYXJrTW9kZX0gYXJpYS1sYWJlbD1cIkRhcmsgTW9kZSBUb2dnbGUgQnV0dG9uXCIgLz5cclxuICAgICAgICA8TWVudUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfSBpc05hdk9wZW49e2lzTmF2T3Blbn0gZGF0YS10ZXN0aWQ9XCJtZW51LWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJNZW51IFRvZ2dsZSBCdXR0b25cIj5cclxuICAgICAgICAgIDxTdHlsZWRTcGFuIHNob3J0IGlzTmF2T3Blbj17aXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAgPFN0eWxlZFNwYW4gaXNOYXZPcGVuPXtpc05hdk9wZW59IC8+XHJcbiAgICAgICAgPC9NZW51QnV0dG9uPlxyXG4gICAgICA8L0J1dHRvbnNXcmFwcGVyPlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbG9nbzogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgcGFkZGluZzogMXJlbSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIHotaW5kZXg6IDMwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lLCBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/IGAxcmVtICR7dGhlbWUucGFkZGluZy5zfWAgOiBgMXJlbSAke3RoZW1lLnBhZGRpbmcubX1gKX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldExhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmFgXHJcbiAgd2lkdGg6IDE5cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgaGVpZ2h0OiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJzZyZW0nIDogJ3Vuc2V0Jyl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyBgdHJhbnNsYXRlKDIlLCAtNiUpYCA6IGB0cmFuc2xhdGUoMiUsIC0xMCUpYCl9O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodGVyQWNjZW50Q29sb3J9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2Utb3V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHsoeyBpc05hdk9wZW4sIHNob3J0IH0pID0+IChzaG9ydCAmJiAhaXNOYXZPcGVuID8gJ3JpZ2h0JyA6ICdjZW50ZXInKX07XHJcbiAgdHJhbnNmb3JtOiAkeyh7IHNob3J0LCBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICdzY2FsZVgoMSknIDogc2hvcnQgPyAnc2NhbGVYKDAuNSknIDogJ3NjYWxlWCgxKScpfTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJ3RyYW5zbGF0ZVkoMi41cmVtKSByb3RhdGUoNDVkZWcpJyA6ICcnKX07XHJcbiAgfVxyXG5cclxuICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyAndHJhbnNsYXRlWSgtMi41cmVtKSByb3RhdGUoLTQ1ZGVnKScgOiAnJyl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMC4ycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogLTAuMnJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGlzTG9hZGluZyB9KSA9PiAoaXNMb2FkaW5nID8gJ3RyYW5zcGFyZW50JyA6IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcil9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25zV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhcmtNb2RlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gIG1pbi13aWR0aDogNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMiUsIC03JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodGVyQWNjZW50Q29sb3J9O1xyXG4gIH1cclxuXHJcbiAgJjpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGRhcmsgfSkgPT4gKGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgZGFyayB9KSA9PiAoZGFyayA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0MlM0Z4bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJyUzRiUzRSUzQyFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJyUzRSUzQ3N2ZyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDg0NiA4NDYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sOnNwYWNlPSdwcmVzZXJ2ZScgeG1sbnM6c2VyaWY9J2h0dHA6Ly93d3cuc2VyaWYuY29tLycgc3R5bGU9J2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyclM0UlM0NnIGlkPSdzdW4nJTNFJTNDY2lyY2xlIGN4PSc0MjIuMTInIGN5PSc0MjIuNDUyJyByPScxODguNjU2JyBzdHlsZT0nZmlsbDolMjMwYjFiMzA7Jy8lM0UlM0NwYXRoIGQ9J000NjMuMzY2LDQzLjYzYzAsLTIyLjc2NCAtMTguNDgyLC00MS4yNDUgLTQxLjI0NiwtNDEuMjQ1Yy0yMi43NjQsLTAgLTQxLjI0NSwxOC40ODEgLTQxLjI0NSw0MS4yNDVsLTAsODYuMjQxYy0wLDIyLjc2NSAxOC40ODEsNDEuMjQ2IDQxLjI0NSw0MS4yNDZjMjIuNzY0LDAgNDEuMjQ2LC0xOC40ODEgNDEuMjQ2LC00MS4yNDZsMCwtODYuMjQxWicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNNDYzLjM2Niw3MTQuNzQ1YzAsLTIyLjc2NCAtMTguNDgyLC00MS4yNDUgLTQxLjI0NiwtNDEuMjQ1Yy0yMi43NjQsLTAgLTQxLjI0NSwxOC40ODEgLTQxLjI0NSw0MS4yNDVsLTAsODYuMjQxYy0wLDIyLjc2NSAxOC40ODEsNDEuMjQ2IDQxLjI0NSw0MS4yNDZjMjIuNzY0LDAgNDEuMjQ2LC0xOC40ODEgNDEuMjQ2LC00MS4yNDZsMCwtODYuMjQxWicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNODAwLjc5OCw0NjMuNjk3YzIyLjc2NCwwIDQxLjI0NiwtMTguNDgxIDQxLjI0NiwtNDEuMjQ1YzAsLTIyLjc2NCAtMTguNDgyLC00MS4yNDYgLTQxLjI0NiwtNDEuMjQ2bC04Ni4yNDEsLTBjLTIyLjc2NCwtMCAtNDEuMjQ1LDE4LjQ4MiAtNDEuMjQ1LDQxLjI0NmMtMCwyMi43NjQgMTguNDgxLDQxLjI0NSA0MS4yNDUsNDEuMjQ1bDg2LjI0MSwwWicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNMTI5LjY4Myw0NjMuNjk3YzIyLjc2NCwwIDQxLjI0NiwtMTguNDgxIDQxLjI0NiwtNDEuMjQ1YzAsLTIyLjc2NCAtMTguNDgyLC00MS4yNDYgLTQxLjI0NiwtNDEuMjQ2bC04Ni4yNDEsLTBjLTIyLjc2NCwtMCAtNDEuMjQ1LDE4LjQ4MiAtNDEuMjQ1LDQxLjI0NmMtMCwyMi43NjQgMTguNDgxLDQxLjI0NSA0MS4yNDUsNDEuMjQ1bDg2LjI0MSwwWicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNNzE5LjA1MSwxODMuNzA4YzE2LjA5NywtMTYuMDk3IDE2LjA5NywtNDIuMjM0IDAsLTU4LjMzMWMtMTYuMDk2LC0xNi4wOTYgLTQyLjIzMywtMTYuMDk2IC01OC4zMywwbC02MC45ODIsNjAuOTgyYy0xNi4wOTYsMTYuMDk3IC0xNi4wOTYsNDIuMjM0IDAsNTguMzNjMTYuMDk3LDE2LjA5NyA0Mi4yMzQsMTYuMDk3IDU4LjMzMSwwbDYwLjk4MSwtNjAuOTgxWicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNMjQ0LjUwMSw2NTguMjU4YzE2LjA5NywtMTYuMDk3IDE2LjA5NywtNDIuMjM0IDAsLTU4LjMzMWMtMTYuMDk2LC0xNi4wOTYgLTQyLjIzMywtMTYuMDk2IC01OC4zMywwbC02MC45ODIsNjAuOTgyYy0xNi4wOTYsMTYuMDk3IC0xNi4wOTYsNDIuMjM0IDAsNTguMzNjMTYuMDk3LDE2LjA5NyA0Mi4yMzQsMTYuMDk3IDU4LjMzMSwwbDYwLjk4MSwtNjAuOTgxWicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNMTgzLjUyLDEyNS4zNzdjLTE2LjA5NywtMTYuMDk2IC00Mi4yMzQsLTE2LjA5NiAtNTguMzMxLDBjLTE2LjA5NiwxNi4wOTcgLTE2LjA5Niw0Mi4yMzQgMCw1OC4zMzFsNjAuOTgyLDYwLjk4MWMxNi4wOTcsMTYuMDk3IDQyLjIzNCwxNi4wOTcgNTguMzMsMGMxNi4wOTcsLTE2LjA5NiAxNi4wOTcsLTQyLjIzMyAwLC01OC4zM2wtNjAuOTgxLC02MC45ODJaJyBzdHlsZT0nZmlsbDolMjMwYjFiMzA7Jy8lM0UlM0NwYXRoIGQ9J002NTguMDcsNTk5LjkyN2MtMTYuMDk3LC0xNi4wOTYgLTQyLjIzNCwtMTYuMDk2IC01OC4zMzEsMGMtMTYuMDk2LDE2LjA5NyAtMTYuMDk2LDQyLjIzNCAwLDU4LjMzMWw2MC45ODIsNjAuOTgxYzE2LjA5NywxNi4wOTcgNDIuMjM0LDE2LjA5NyA1OC4zMywwYzE2LjA5NywtMTYuMDk2IDE2LjA5NywtNDIuMjMzIDAsLTU4LjMzbC02MC45ODEsLTYwLjk4MlonIHN0eWxlPSdmaWxsOiUyMzBiMWIzMDsnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzLjhyZW07XHJcbiAgICBtaW4td2lkdGg6IDMuOHJlbTtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgIGJvcmRlci1yYWRpdXM6ICR7KHsgZGFyayB9KSA9PiAoZGFyayA/ICc1MCUgMCAwIDUwJScgOiAnMCA1MCUgNTAlIDAnKX07XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgZGFyayB9KSA9PiAoZGFyayA/ICd0cmFuc2xhdGUoMTAwJSwgLTUwJSknIDogJ3RyYW5zbGF0ZSgtNzclLCAtNzUlKScpfTtcclxuICAgIG1pbi1oZWlnaHQ6IDRyZW07XHJcbiAgICBtaW4td2lkdGg6IDRyZW07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1vbGVjdWxlcy9MaXN0SXRlbS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgU3R5bGVkTmF2aWdhdGlvbiwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL05hdmlnYXRpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBuYXZMaW5rcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBzZXRJc05hdk9wZW4gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTmF2aWdhdGlvbj5cclxuICAgICAge25hdkxpbmtzLm1hcCgoeyBncm91cE5hbWUsIGlkLCBsaW5rcyB9KSA9PiAoXHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyIGtleT17aWR9PlxyXG4gICAgICAgICAgPExpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgICAgICA8aDM+e2dyb3VwTmFtZX08L2gzPlxyXG4gICAgICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBoYXNMaW5rcyBrZXk9e2xpbmsuaWR9IGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0eWxlZE5hdmlnYXRpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIG5hdkxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGdyb3VwTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbmF2TGlua3M6IFtcclxuICAgIHtcclxuICAgICAgZ3JvdXBOYW1lOiAnJyxcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGxpbmtzOiBbXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwcmVtLCBhdXRvKSk7XHJcbiAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXRMYXJnZX0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc1Z9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDElLCAtNyUpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiA0MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZMaXN0fTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICdAdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uJztcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ0Btb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQnO1xyXG5pbXBvcnQgeyBTdHlsZWRUaXRsZSwgSW5mb1NlY3Rpb24sIEluZm9XcmFwcGVyLCBJbmZvQ29tcG9uZW50LCBTdHlsZWRTcGFuIH0gZnJvbSAnLi9DaXNjb0NvdXJzZS5zdHlsZXMnO1xyXG5cclxuY29uc3QgQ2lzY29Db3Vyc2UgPSAoeyBkYXRhOiB7IHJpY2hUZXh0U2VjdGlvbnMsIGNvdXJzZUluZm9zIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZVdyYXBwZXIgY29sdW1uIG1vZHVsYXI+XHJcbiAgICAgICAge3JpY2hUZXh0U2VjdGlvbnMubWFwKCh7IGhlYWRlciwgY29udGVudCwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgPFBhZ2VTZWN0aW9uIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57aGVhZGVyfTwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICA8UmljaFRleHQ+e2NvbnRlbnR9PC9SaWNoVGV4dD5cclxuICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICAgIDxJbmZvU2VjdGlvbj5cclxuICAgICAgICA8SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICB7Y291cnNlSW5mb3MubWFwKCh7IGNhcHRpb24sIGNvbnRlbnQsIGlkIH0pID0+IChcclxuICAgICAgICAgICAgPEluZm9Db21wb25lbnQga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+e2NhcHRpb259PC9TdHlsZWRTcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntjb250ZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9JbmZvQ29tcG9uZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbmZvV3JhcHBlcj5cclxuICAgICAgPC9JbmZvU2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5DaXNjb0NvdXJzZS5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHJpY2hUZXh0U2VjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgY291cnNlSW5mb3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5DaXNjb0NvdXJzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgcmljaFRleHQ6IFtdLFxyXG4gICAgY291cnNlSW5mbzogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpc2NvQ291cnNlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyTW9iaWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZ2VTZWN0aW9uV2lkdGh9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvQ29tcG9uZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZyZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IENvbnRlbnRXcmFwcGVyLCBBZGRyZXNzV3JhcHBlciwgSW5mb3JtYXRpb25XcmFwcGVyIH0gZnJvbSAnLi9Db250YWN0LnN0eWxlcyc7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgZGF0YTogeyBoZWFkZXIsIHNjaG9vbE5hbWUsIGNvbnRhY3RJbmZvcyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEFkZHJlc3NXcmFwcGVyPlxyXG4gICAgICAgICAgPGg0PntzY2hvb2xOYW1lfTwvaDQ+XHJcbiAgICAgICAgPC9BZGRyZXNzV3JhcHBlcj5cclxuICAgICAgICA8SW5mb3JtYXRpb25XcmFwcGVyPlxyXG4gICAgICAgICAge2NvbnRhY3RJbmZvcy5tYXAoKHsgaWQsIGNhcHRpb24sIGNvbnRlbnQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8c3Bhbj57Y2FwdGlvbn08L3NwYW4+IHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0luZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbnRhY3QucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzY2hvb2xOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGFjdEluZm86IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5Db250YWN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBhZGRyZXNzOiAnJyxcclxuICAgIHNjaG9vbE5hbWU6ICcnLFxyXG4gICAgY29udGFjdEluZm86IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZExpZ2h0fTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ307XHJcbiAgd2lkdGg6IGNsYW1wKCR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlV2lkdGh9LCAxMDAlLCA4MHJlbSk7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkcmVzc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAyLjVyZW0gMCA1cmVtIDA7XHJcblxyXG4gIHAsXHJcbiAgc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgbWFyZ2luOiAycmVtIDAgMCAwO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnQHRlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnQG1vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dCc7XHJcbmltcG9ydCBQYWdlVGlsZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZVdyYXBwZXIvUGFnZVRpbGVXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VUaWxlIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGUvUGFnZVRpbGUnO1xyXG5pbXBvcnQgQXJyb3dMaW5rIGZyb20gJ0BhdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rJztcclxuaW1wb3J0IHsgU3R5bGVkVGl0bGUsIFN0eWxlZFNwYW4gfSBmcm9tICcuL0NvdXJzZXMuc3R5bGVzJztcclxuXHJcbmNvbnN0IENvdXJzZXMgPSAoeyBkYXRhOiB7IGhlYWRlciwgY29udGVudCwgY291cnNlcywgbGlua0NhcHRpb24gfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlV3JhcHBlciBzaG9ydCBjb2x1bW4gbW9kdWxhcj5cclxuICAgICAgPFBhZ2VTZWN0aW9uPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8U3R5bGVkVGl0bGU+e2hlYWRlcn08L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxSaWNoVGV4dD57Y29udGVudH08L1JpY2hUZXh0PlxyXG4gICAgICAgIDxQYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICB7Y291cnNlcy5tYXAoKHsgaGVhZGVyLCBkZXNjcmlwdGlvbiwgdXJsLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxQYWdlVGlsZSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgPGg0PntoZWFkZXJ9PC9oND5cclxuICAgICAgICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj57ZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuPlxyXG4gICAgICAgICAgICAgIDxBcnJvd0xpbmsgYWNjZW50ZWQgdXJsPXt1cmx9IHRleHQ9e2xpbmtDYXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8L1BhZ2VUaWxlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9QYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db3Vyc2VzLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxpbmtDYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY291cnNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkNvdXJzZXMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGxpbmtDYXB0aW9uOiAnJyxcclxuICAgIGNvdXJzZXM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyTW9iaWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHlTbWFsbH07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRhdGFTaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGF0b21zL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEhlcm9BYm91dFdyYXBwZXIsIEhlYWRlcldyYXBwZXIsIERlc2NyaXB0aW9uV3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9IZXJvQWJvdXQuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9BYm91dCA9ICh7IGRhdGE6IHsgaGVhZGVyLCBkZXNjcmlwdGlvbiwgYnV0dG9uLCBpbWFnZSB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9BYm91dFdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXJXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e2hlYWRlcn08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8L0hlYWRlcldyYXBwZXI+XHJcbiAgICAgIDxEZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8QnV0dG9uIGRhdGE9e2J1dHRvbn0gLz5cclxuICAgICAgPC9EZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtpbWFnZS5kYXRhLmF0dHJpYnV0ZXN9IC8+XHJcbiAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgPC9IZXJvQWJvdXRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQWJvdXQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IGRhdGFTaGFwZSxcclxufTtcclxuXHJcbkhlcm9BYm91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0Fib3V0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvQWJvdXRXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICBncmlkLXJvdzogMS8yO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzE7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCA2MHJlbSk7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogY2xhbXAoMzhyZW0sIDEwMCUsICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlV2lkdGh9KTtcclxuICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogY2xhbXAoMzhyZW0sIDEwMCUsICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlV2lkdGh9KTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlcm9Db3Vyc2VDb21wb25lbnQgZnJvbSAnQG1vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50L0hlcm9Db3Vyc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IHsgSGVyb0NvdXJzZVdyYXBwZXIsIENvbnRlbnRXcmFwcGVyIH0gZnJvbSAnLi9IZXJvQ291cnNlcy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0NvdXJzZXMgPSAoeyBkYXRhOiB7IGhlYWRlciwgY291cnNlcywgbGlua0NhcHRpb24gfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlV3JhcHBlcj5cclxuICAgICAgPExpbmVIb3Jpem9udGFsIGxhcmdlPlxyXG4gICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XHJcbiAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICB7Y291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKFxyXG4gICAgICAgICAgPEhlcm9Db3Vyc2VDb21wb25lbnQga2V5PXtjb3Vyc2UuaWR9IGRhdGE9e2NvdXJzZX0gbGlua0NhcHRpb249e2xpbmtDYXB0aW9ufSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9IZXJvQ291cnNlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0NvdXJzZXMucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBjb3Vyc2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGluazogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0NvdXJzZXMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGNvdXJzZXM6IFtdLFxyXG4gICAgaGVhZGVyOiAnJyxcclxuICAgIGxpbms6IHt9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlcztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0NvdXJzZVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwcmVtLCBhdXRvKSk7XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICAgIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVyb0luc3RydWN0b3JDb21wb25lbnQgZnJvbSAnQG1vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9JbnN0cnVjdG9yc1dyYXBwZXIgfSBmcm9tICcuL0hlcm9JbnN0cnVjdG9ycy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0luc3RydWN0b3JzID0gKHsgZGF0YTogeyBpbnN0cnVjdG9ycyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9JbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgICAgIHtpbnN0cnVjdG9ycy5tYXAoKGluc3RydWN0b3IpID0+IChcclxuICAgICAgICA8SGVyb0luc3RydWN0b3JDb21wb25lbnQga2V5PXtpbnN0cnVjdG9yLmlkfSBkYXRhPXtpbnN0cnVjdG9yfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvSGVyb0luc3RydWN0b3JzV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JzLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaW5zdHJ1Y3RvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvSW5zdHJ1Y3RvcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGluc3RydWN0b3JzOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGF0b21zL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IEhlcm9QcmljaW5nV3JhcHBlciwgRGVzY3JpcHRpb25XcmFwcGVyIH0gZnJvbSAnLi9IZXJvUHJpY2luZy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb1ByaWNpbmcgPSAoeyBkYXRhOiB7IGhlYWRlciwgZGVzY3JpcHRpb24sIGJ1dHRvbiB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9QcmljaW5nV3JhcHBlcj5cclxuICAgICAgPExpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XHJcbiAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDxEZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbiBkYXRhPXtidXR0b259IGFjY2VudCAvPlxyXG4gICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgIDwvSGVyb1ByaWNpbmdXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvUHJpY2luZy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvUHJpY2luZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1ByaWNpbmc7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9QcmljaW5nV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnh9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxuICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG5cclxuICAmID4gZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zdWJUZXh0fTtcclxuICAgIG1hcmdpbjogMCA1cmVtIDAgMDtcclxuICAgIHdpZHRoOiAzOXJlbTtcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BUYWxsfSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDRyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgICBtYXJnaW46IDAgMCA0cmVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYXRvbXMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVyb1dyYXBwZXIsIENvbnRlbnRXcmFwcGVyLCBCdXR0b25XcmFwcGVyLCBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL0hlcm8uc3R5bGVzJztcclxuaW1wb3J0IHsgZGF0YVNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IEhlcm8gPSAoeyBkYXRhOiB7IGhlYWRlciwgZGVzY3JpcHRpb24sIGJ1dHRvbnMsIGltYWdlIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb1dyYXBwZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICA8aDE+e2hlYWRlcn08L2gxPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGtleT17YnV0dG9uLmlkfSBkYXRhPXtidXR0b259IGhhc01hcmdpbiAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2UuZGF0YS5hdHRyaWJ1dGVzfSAvPlxyXG4gICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgIDwvSGVyb1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm8ucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IGRhdGFTaGFwZSxcclxufTtcclxuXHJcbkhlcm8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBidXR0b25zOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZFdoaXRlfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaDEge1xyXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wV2lkZX0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHZtaW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICB3aWR0aDogNTByZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICdAbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0JztcclxuaW1wb3J0IFBhZ2VUaWxlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VUaWxlV3JhcHBlci9QYWdlVGlsZVdyYXBwZXInO1xyXG5pbXBvcnQgUHJpY2luZ0NvbXBvbmVudCBmcm9tICdAbW9sZWN1bGVzL1ByaWNpbmdDb21wb25lbnQvUHJpY2luZ0NvbXBvbmVudCc7XHJcblxyXG5jb25zdCBQcmljaW5nID0gKHsgZGF0YTogeyBoZWFkZXIsIGNvbnRlbnQsIHByaWNpbmdDb21wb25lbnRzIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgIDxQYWdlU2VjdGlvbj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPntoZWFkZXJ9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8UmljaFRleHQ+e2NvbnRlbnR9PC9SaWNoVGV4dD5cclxuICAgICAgICA8UGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgICAge3ByaWNpbmdDb21wb25lbnRzLm1hcCgocHJpY2luZ0NvbXBvbmVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgPFByaWNpbmdDb21wb25lbnQga2V5PXtpZH0gZGF0YT17cHJpY2luZ0NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgPC9QYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuUHJpY2luZy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwcmljaW5nQ29tcG9uZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblByaWNpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIHByaWNpbmdDb21wb25lbnRzOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ0Btb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQnO1xyXG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5cclxuY29uc3QgUmVndWxhdGlvbnMgPSAoeyBkYXRhOiB7IGhlYWRlciwgY29udGVudCB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8UGFnZVNlY3Rpb24+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPFJpY2hUZXh0Pntjb250ZW50fTwvUmljaFRleHQ+XHJcbiAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZWd1bGF0aW9ucy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblJlZ3VsYXRpb25zLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXI6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ3VsYXRpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgeyBDb250ZW50V3JhcHBlciB9IGZyb20gJy4vUm9kby5zdHlsZXMnO1xyXG5cclxuY29uc3QgUm9kbyA9ICh7IGRhdGE6IHsgaGVhZGVyLCBkZXNjcmlwdGlvbiB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblJvZG8ucHJvcFR5cGVzID0ge1xyXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcblJvZG8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGhlYWRlcjogJycsXHJcbiAgZGVzY3JpcHRpb246ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9kbztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIHdpZHRoOiBjbGFtcCgkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofSwgMTAwJSwgODByZW0pO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXJXcmFwcGVyLCBDb250ZW50V3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9TZWN0aW9uSGVhZGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHsgZGF0YTogeyBoZWFkZXIsIGltYWdlLCBpc0xvbmcgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uSGVhZGVyV3JhcHBlcj5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyIGlzTG9uZz17aXNMb25nfT5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPntoZWFkZXJ9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8SW1hZ2VXcmFwcGVyIGlzTG9uZz17aXNMb25nfT5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2UuZGF0YS5hdHRyaWJ1dGVzfSAvPlxyXG4gICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9TZWN0aW9uSGVhZGVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaXNMb25nOiBQcm9wVHlwZXMuYm9vbCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuU2VjdGlvbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkhlYWRlcldyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54bFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXgtd2lkdGg6ICR7KHsgaXNMb25nIH0pID0+IChpc0xvbmcgPyBgbWF4LWNvbnRlbnRgIDogYDQwcmVtYCl9O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHdpZHRoOiAkeyh7IGlzTG9uZyB9KSA9PiAoaXNMb25nID8gYDEwMCVgIDogYDUwcmVtYCl9O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWF4LXdpZHRoOiAkeyh7IGlzTG9uZyB9KSA9PiAoaXNMb25nID8gYG1heC1jb250ZW50YCA6IGA0MHJlbWApfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAkeyh7IGlzTG9uZyB9KSA9PiAoaXNMb25nID8gYDQwcmVtYCA6IGA4MHJlbWApfTtcclxuICBtYXgtd2lkdGg6ICR7KHsgaXNMb25nIH0pID0+IChpc0xvbmcgPyBgNDByZW1gIDogYDgwcmVtYCl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gICAgbWFyZ2luOiAkeyh7IGlzTG9uZyB9KSA9PiAoaXNMb25nID8gJzAgYXV0bycgOiAwKX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgcGFkZGluZy10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IHsgV3JhcHBlciwgSGVhZGVyV3JhcHBlciB9IGZyb20gJy4vU2VjdGlvblRleHRIZWFkZXIuc3R5bGVzJztcclxuXHJcbmNvbnN0IFNlY3Rpb25UZXh0SGVhZGVyID0gKHsgZGF0YTogeyBoZWFkZXIgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8SGVhZGVyV3JhcHBlcj5cclxuICAgICAgICA8TGluZUhvcml6b250YWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e2hlYWRlcn08L2gxPlxyXG4gICAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvblRleHRIZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcblNlY3Rpb25UZXh0SGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBoZWFkZXI6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRleHRIZWFkZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRXaGl0ZX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNzByZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgU2VjdGlvbkRhcmtXcmFwcGVyIH0gZnJvbSAnQHRlbXBsYXRlcy9TZWN0aW9uU3R5bGVzL1NlY3Rpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IFNlY3Rpb25XaXRoRGVzYyA9ICh7IGRhdGE6IHsgaGVhZGVyLCBkZXNjcmlwdGlvbiB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb25EYXJrV3JhcHBlcj5cclxuICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICA8aDE+e2hlYWRlcn08L2gxPlxyXG4gICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvU2VjdGlvbkRhcmtXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uV2l0aERlc2MucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSxcclxufTtcclxuXHJcblNlY3Rpb25XaXRoRGVzYy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbldpdGhEZXNjO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25XcmFwcGVyLCBDb250ZW50V3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnQHRlbXBsYXRlcy9TZWN0aW9uU3R5bGVzL1NlY3Rpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IFNlY3Rpb25XaXRoSW1hZ2UgPSAoeyBkYXRhOiB7IGhlYWRlciwgZGVzY3JpcHRpb24sIGltYWdlLCBpc1JldmVyc2VkIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbldyYXBwZXI+XHJcbiAgICAgIHtpc1JldmVyc2VkID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlLmRhdGEuYXR0cmlidXRlc30gLz5cclxuICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyIGlzUmV2ZXJzZWQ9e2lzUmV2ZXJzZWR9PlxyXG4gICAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XHJcbiAgICAgICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICAgIDxoMT57aGVhZGVyfTwvaDE+XHJcbiAgICAgICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2UuZGF0YS5hdHRyaWJ1dGVzfSAvPlxyXG4gICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1NlY3Rpb25XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uV2l0aEltYWdlLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpc1JldmVyc2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICB9KSxcclxufTtcclxuXHJcblNlY3Rpb25XaXRoSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25XaXRoSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuXHJcbmltcG9ydCB7IFN0eWxlZExpc3QsIFN0eWxlZEl0ZW0sIFRpbGUgfSBmcm9tICcuL1NlY3Rpb25XaXRoTGlzdC5zdHlsZXMnO1xyXG5cclxuY29uc3QgU2VjdGlvbldpdGhMaXN0ID0gKHsgZGF0YTogeyBoZWFkZXIsIGxpc3RJdGVtcyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyIHNob3J0IG1vZHVsYXIgd2hpdGU+XHJcbiAgICAgIDxUaWxlPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8aDQ+e2hlYWRlcn08L2g0PlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxTdHlsZWRMaXN0PlxyXG4gICAgICAgICAge2xpc3RJdGVtcy5tYXAoKHsgaXRlbSwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEl0ZW0+e2l0ZW19PC9TdHlsZWRJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWRMaXN0PlxyXG4gICAgICA8L1RpbGU+XHJcbiAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uV2l0aExpc3QucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXN0SXRlbXM6IFByb3BUeXBlcy5hcnJheSxcclxuICB9KSxcclxufTtcclxuXHJcblNlY3Rpb25XaXRoTGlzdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyOiAnJyxcclxuICAgIGxpc3RJdGVtczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25XaXRoTGlzdDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ307XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgd2lkdGg6IDcwcmVtO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgICBtYXJnaW46IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG5cclxuICBsaSB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSXRlbSA9IHN0eWxlZC5zcGFuYFxyXG4gIGlubGluZS1zaXplOiA0MHJlbTtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZXJvIGZyb20gJ0BzZWN0aW9ucy9IZXJvL0hlcm8nO1xyXG5pbXBvcnQgSGVyb0luc3RydWN0b3JzIGZyb20gJ0BzZWN0aW9ucy9IZXJvSW5zdHJ1Y3RvcnMvSGVyb0luc3RydWN0b3JzJztcclxuaW1wb3J0IEhlcm9Db3Vyc2VzIGZyb20gJ0BzZWN0aW9ucy9IZXJvQ291cnNlcy9IZXJvQ291cnNlcyc7XHJcbmltcG9ydCBIZXJvUHJpY2luZyBmcm9tICdAc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcnO1xyXG5pbXBvcnQgSGVyb0Fib3V0IGZyb20gJ0BzZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICdAc2VjdGlvbnMvQ29udGFjdC9Db250YWN0JztcclxuaW1wb3J0IFJlZ3VsYXRpb25zIGZyb20gJ0BzZWN0aW9ucy9SZWd1bGF0aW9ucy9SZWd1bGF0aW9ucyc7XHJcbmltcG9ydCBQcmljaW5nIGZyb20gJ0BzZWN0aW9ucy9QcmljaW5nL1ByaWNpbmcnO1xyXG5pbXBvcnQgQ291cnNlcyBmcm9tICdAc2VjdGlvbnMvQ291cnNlcy9Db3Vyc2VzJztcclxuaW1wb3J0IENpc2NvQ291cnNlIGZyb20gJ0BzZWN0aW9ucy9DaXNjb0NvdXJzZS9DaXNjb0NvdXJzZSc7XHJcbmltcG9ydCBTZWN0aW9uV2l0aEltYWdlIGZyb20gJ0BzZWN0aW9ucy9TZWN0aW9uV2l0aEltYWdlL1NlY3Rpb25XaXRoSW1hZ2UnO1xyXG5pbXBvcnQgU2VjdGlvbldpdGhEZXNjIGZyb20gJ0BzZWN0aW9ucy9TZWN0aW9uV2l0aERlc2MvU2VjdGlvbldpdGhEZXNjJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnQHNlY3Rpb25zL1NlY3Rpb25IZWFkZXIvU2VjdGlvbkhlYWRlcic7XHJcbmltcG9ydCBTZWN0aW9uVGV4dEhlYWRlciBmcm9tICdAc2VjdGlvbnMvU2VjdGlvblRleHRIZWFkZXIvU2VjdGlvblRleHRIZWFkZXInO1xyXG5pbXBvcnQgU2VjdGlvbldpdGhMaXN0IGZyb20gJ0BzZWN0aW9ucy9TZWN0aW9uV2l0aExpc3QvU2VjdGlvbldpdGhMaXN0JztcclxuaW1wb3J0IFJvZG8gZnJvbSAnQHNlY3Rpb25zL1JvZG8vUm9kbyc7XHJcblxyXG4vLyBNYXAgU3RyYXBpIHNlY3Rpb25zIHRvIHNlY3Rpb24gY29tcG9uZW50c1xyXG5jb25zdCBzZWN0aW9uQ29tcG9uZW50cyA9IHtcclxuICAnc2VjdGlvbnMuaGVybyc6IEhlcm8sXHJcbiAgJ3NlY3Rpb25zLmhlcm8taW5zdHJ1Y3RvcnMnOiBIZXJvSW5zdHJ1Y3RvcnMsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tY291cnNlcyc6IEhlcm9Db3Vyc2VzLFxyXG4gICdzZWN0aW9ucy5oZXJvLXByaWNpbmcnOiBIZXJvUHJpY2luZyxcclxuICAnc2VjdGlvbnMuaGVyby1hYm91dCc6IEhlcm9BYm91dCxcclxuICAnc2VjdGlvbnMuY29udGFjdCc6IENvbnRhY3QsXHJcbiAgJ3NlY3Rpb25zLnJlZ3VsYXRpb25zJzogUmVndWxhdGlvbnMsXHJcbiAgJ3NlY3Rpb25zLnByaWNpbmcnOiBQcmljaW5nLFxyXG4gICdzZWN0aW9ucy5jb3Vyc2VzJzogQ291cnNlcyxcclxuICAnc2VjdGlvbnMuY2lzY28tY291cnNlJzogQ2lzY29Db3Vyc2UsXHJcbiAgJ3NlY3Rpb25zLnNlY3Rpb24td2l0aC1pbWFnZSc6IFNlY3Rpb25XaXRoSW1hZ2UsXHJcbiAgJ3NlY3Rpb25zLnNlY3Rpb24td2l0aC1kZXNjJzogU2VjdGlvbldpdGhEZXNjLFxyXG4gICdzZWN0aW9ucy5zZWN0aW9uLWhlYWRlcic6IFNlY3Rpb25IZWFkZXIsXHJcbiAgJ3NlY3Rpb25zLnNlY3Rpb24tdGV4dC1oZWFkZXInOiBTZWN0aW9uVGV4dEhlYWRlcixcclxuICAnc2VjdGlvbnMuc2VjdGlvbi13aXRoLWxpc3QnOiBTZWN0aW9uV2l0aExpc3QsXHJcbiAgJ3NlY3Rpb25zLnJvZG8nOiBSb2RvLFxyXG59O1xyXG5cclxuLy8gRGlzcGxheSB0aGUgbGlzdCBvZiBzZWN0aW9uc1xyXG5jb25zdCBTZWN0aW9ucyA9ICh7IHNlY3Rpb25zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgIDxTZWN0aW9uIHNlY3Rpb25EYXRhPXtzZWN0aW9ufSBrZXk9e2Ake3NlY3Rpb24uX19jb21wb25lbnR9JHtzZWN0aW9uLmlkfWB9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblNlY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzZWN0aW9uczogW10sXHJcbn07XHJcblxyXG4vLyBEaXNwbGF5IGEgc2VjdGlvbiBpbmRpdmlkdWFsbHlcclxuY29uc3QgU2VjdGlvbiA9ICh7IHNlY3Rpb25EYXRhIH0pID0+IHtcclxuICBjb25zdCBTZWN0aW9uQ29tcG9uZW50ID0gc2VjdGlvbkNvbXBvbmVudHNbc2VjdGlvbkRhdGEuX19jb21wb25lbnRdO1xyXG5cclxuICBpZiAoIVNlY3Rpb25Db21wb25lbnQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxTZWN0aW9uQ29tcG9uZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPjtcclxufTtcclxuXHJcblNlY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25EYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5TZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzZWN0aW9uRGF0YToge1xyXG4gICAgX19jb21wb25lbnQ6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9ucztcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuXHJcbmNvbnN0IFNlbyA9ICh7IHNlbyB9KSA9PiB7XHJcbiAgLy8gUHJldmVudCBlcnJvcnMgaWYgbm8gbWV0YWRhdGEgd2FzIHNldFxyXG4gIGlmICghc2VvKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB7IG1ldGFUaXRsZSwgbWV0YURlc2NyaXB0aW9uIH0gPSBzZW87XHJcblxyXG4gIHJldHVybiA8TmV4dFNlbyB0aXRsZT17bWV0YVRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YURlc2NyaXB0aW9ufSAvPjtcclxufTtcclxuXHJcblNlby5wcm9wVHlwZXMgPSB7XHJcbiAgc2VvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbWV0YVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWV0YURlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW87XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJ0BvcmdhbmlzbXMvTmF2QmFyL05hdkJhcic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0BvcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAb3JnYW5pc21zL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgU3R5bGVkTGF5b3V0IH0gZnJvbSAnLi9MYXlvdXQuc3R5bGVzJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBuYXZpZ2F0aW9uOiB7IGxvZ28sIG5hdkxpbmtzIH0sIGZvb3RlciB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc05hdk9wZW4gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTGF5b3V0IGlzTmF2T3Blbj17aXNOYXZPcGVufT5cclxuICAgICAgPE5hdkJhciBsb2dvPXtsb2dvfSAvPlxyXG4gICAgICB7aXNOYXZPcGVuID8gKFxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIG5hdkxpbmtzPXtuYXZMaW5rc30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEZvb3RlciBmb290ZXI9e2Zvb3Rlcn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvU3R5bGVkTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG4gIG5hdmlnYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBmb290ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbmF2aWdhdGlvbjoge30sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExheW91dCA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogJHsoeyBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICcxMDB2aCcgOiAnZml0LWNvbnRlbnQnKX07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFBhZ2VTZWN0aW9uV3JhcHBlciB9IGZyb20gJy4vUGFnZVNlY3Rpb24uc3R5bGUnO1xyXG5cclxuY29uc3QgUGFnZVNlY3Rpb24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8UGFnZVNlY3Rpb25XcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvUGFnZVNlY3Rpb25XcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VTZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlU2VjdGlvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVNlY3Rpb25XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kTGlnaHR9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZ2VTZWN0aW9uUGFkZGluZ307XHJcbiAgd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWdlU2VjdGlvbldpZHRofTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zVn07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnNzVn07XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFN0eWxlZFBhZ2VUaWxlV3JhcHBlciB9IGZyb20gJy4vUGFnZVRpbGVXcmFwcGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBQYWdlVGlsZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTdHlsZWRQYWdlVGlsZVdyYXBwZXI+e2NoaWxkcmVufTwvU3R5bGVkUGFnZVRpbGVXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VUaWxlV3JhcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGlsZVdyYXBwZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhZ2VUaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBQYWdlVGlsZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VUaWxlLnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgUGFnZVRpbGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxQYWdlVGlsZVdyYXBwZXI+e2NoaWxkcmVufTwvUGFnZVRpbGVXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VUaWxlLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGlsZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnJpY2hUZXh0TWFyZ2luVG9wfTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIHdpZHRoOiA0MHJlbTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFN0eWxlZFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi9QYWdlV3JhcHBlci5zdHlsZXMnO1xyXG5cclxuY29uc3QgUGFnZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkUGFnZVdyYXBwZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9TdHlsZWRQYWdlV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlV3JhcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lLCBtb2R1bGFyIH0pID0+IChtb2R1bGFyID8gMCA6IHRoZW1lLnBhZGRpbmcueFYpfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfVxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIG1pbi1oZWlnaHQ6ICR7KHsgc2hvcnQgfSkgPT4gKHNob3J0ID8gJ3Vuc2V0JyA6ICc5MHZoJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogJHsoeyBjb2x1bW4gfSkgPT4gKGNvbHVtbiA/ICdjb2x1bW4nIDogJ3JvdycpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCB3aGl0ZSB9KSA9PiAod2hpdGUgPyB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZFdoaXRlIDogJ3RyYW5zcGFyZW50Jyl9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUsIG1vZHVsYXIgfSkgPT4gKG1vZHVsYXIgPyAwIDogdGhlbWUucGFkZGluZy54Vil9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9XHJcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZFdoaXRlfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkRhcmtXcmFwcGVyID0gc3R5bGVkKFNlY3Rpb25XcmFwcGVyKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gIHAge1xyXG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BMYXJnZX0ge1xyXG4gICAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICAgIG1heC13aWR0aDogNjByZW07XHJcbiAgICAgIG1hcmdpbjogNXJlbSAwIDAgMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAkeyh7IGlzUmV2ZXJzZWQgfSkgPT4gKGlzUmV2ZXJzZWQgPyBgMCAwIDAgNXZ3YCA6IGAwIDV2dyAwIDBgKX07XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcExhcmdlfSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5U21hbGx9O1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBtYXJnaW46IDAgMCAzcmVtIDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BXaWRlfSB7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDYwcmVtO1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICd1dGlscy9hcGknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgU2VvIGZyb20gJ2NvbXBvbmVudHMvc3RyYXBpL3Nlbyc7XHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tICdjb21wb25lbnRzL3N0cmFwaS9zZWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldFBhZ2VEYXRhIH0gZnJvbSAndXRpbHMvZ2V0UGFnZURhdGEnO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InO1xyXG5cclxuY29uc3QgRHluYW1pY1BhZ2UgPSAoeyBzZWN0aW9ucywgbmF2aWdhdGlvbiwgZm9vdGVyLCBzZW8gfSkgPT4ge1xyXG4gIGlmICghc2VjdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IG5hdmlnYXRpb249e25hdmlnYXRpb259IGZvb3Rlcj17Zm9vdGVyfT5cclxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cclxuICAgICAgPFNlY3Rpb25zIHNlY3Rpb25zPXtzZWN0aW9uc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5EeW5hbWljUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgc2VjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIG5hdmlnYXRpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VvOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZmV0Y2hBUEkoJy9hcGkvcGFnZXMnKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoeyBhdHRyaWJ1dGVzIH0pID0+IHtcclxuICAgIC8vIERlY29tcG9zZSB0aGUgc2x1ZyB0aGF0IHdhcyBzYXZlZCBpbiBTdHJhcGlcclxuICAgIGNvbnN0IHNsdWdBcnJheSA9ICFhdHRyaWJ1dGVzLnNsdWcgPyBmYWxzZSA6IGF0dHJpYnV0ZXMuc2x1Zy5zcGxpdCgnLycpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnOiBzbHVnQXJyYXkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGEoeyBzbHVnOiAhcGFyYW1zLnNsdWcgPyBbJyddIDogcGFyYW1zLnNsdWcgfSk7XHJcbiAgY29uc3QgbmF2aWdhdGlvbiA9IGF3YWl0IGZldGNoQVBJKCcvYXBpL25hdmlnYXRpb24/cG9wdWxhdGVbbG9nb11bcG9wdWxhdGVdPSomcG9wdWxhdGVbbmF2TGlua3NdW3BvcHVsYXRlXT0qJyk7XHJcbiAgY29uc3QgZm9vdGVyID0gYXdhaXQgZmV0Y2hBUEkoJy9hcGkvZm9vdGVyP3BvcHVsYXRlPSonKTtcclxuXHJcbiAgaWYgKHBhZ2VEYXRhID09IG51bGwpIHtcclxuICAgIC8vIEdpdmluZyB0aGUgcGFnZSBubyBwcm9wcyB3aWxsIHRyaWdnZXIgYSA0MDQgcGFnZVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNvbnRlbnQsIHNlbyB9ID0gcGFnZURhdGE7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzZWN0aW9uczogY29udGVudCxcclxuICAgICAgc2VvLFxyXG4gICAgICBuYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uLmRhdGEuYXR0cmlidXRlcyxcclxuICAgICAgZm9vdGVyOiBmb290ZXIuZGF0YS5hdHRyaWJ1dGVzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBidXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLCBQcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbn0pLmlzUmVxdWlyZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgY2hpbGRyZW5TaGFwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSwgUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5ub2RlXSk7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBpc05hdk9wZW46IGZhbHNlLFxyXG4gIHNldElzTmF2T3BlbjogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcm91dGVyLCBoYW5kbGVEYXJrTW9kZUNoYW5nZSwgY3VycmVudERhcmtNb2RlIH0pID0+IHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc05hdk9wZW4sIHNldElzTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGlmIChyb3V0ZXIpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoeyBwYXJlbnQ6ICcjbG9hZGVyJyB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBpc05hdk9wZW4sXHJcbiAgICAgICAgc2V0SXNOYXZPcGVuLFxyXG4gICAgICAgIGhhbmRsZURhcmtNb2RlQ2hhbmdlLFxyXG4gICAgICAgIGN1cnJlbnREYXJrTW9kZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBQcm92aWRlcjtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gJycpIHtcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNyd9JHtwYXRofWA7XHJcbn1cclxuXHJcbi8vIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgpIHtcclxuICBjb25zdCByZXF1ZXN0VXJsID0gZ2V0U3RyYXBpVVJMKHBhdGgpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlRGF0YShwYXJhbXMpIHtcclxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWcuam9pbignLycpO1xyXG4gIC8vIEZpbmQgdGhlIHBhZ2VzIHRoYXQgbWF0Y2ggdGhpcyBzbHVnXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBmZXRjaEFQSShgL2FwaS9wYWdlcz9maWx0ZXJzW3NsdWddWyRlcV09JHtzbHVnfSZwb3B1bGF0ZVtjb250ZW50XVtwb3B1bGF0ZV09KiZwb3B1bGF0ZVtzZW9dW3BvcHVsYXRlXT0qYCk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgcGFnZURhdGEgPSBkYXRhWzBdLmF0dHJpYnV0ZXM7XHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBmb3VuZCBzb21ldGhpbmcsIG90aGVyd2lzZSByZXR1cm4gbnVsbFxyXG4gIGlmIChkYXRhID09IG51bGwgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCBpdGVtIHNpbmNlIHRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSByZXN1bHQgcGVyIHNsdWdcclxuICByZXR1cm4gcGFnZURhdGE7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Vycm9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcmtkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMaW5rIiwiQXJyb3dMaW5rV3JhcHBlciIsIkFycm93IiwiQXJyb3dMaW5rIiwidXJsIiwidGV4dCIsImFjY2VudGVkIiwicHJvcFR5cGVzIiwic2x1ZyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ0aXRsZSIsImltYWdlIiwib2JqZWN0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsInN0eWxlZCIsImEiLCJ0aGVtZSIsImNvbG9ycyIsImFjY2VudENvbG9yIiwiYnV0dG9uQ29sb3IiLCJmb250U2l6ZSIsImJvZHkiLCJsaWdodGVyQWNjZW50Q29sb3IiLCJsaWdodGVyQnV0dG9uQ29sb3IiLCJzcGFuIiwiU3R5bGVkQnV0dG9uIiwiQnV0dG9uIiwiZGF0YSIsImlzRmlsbGVkIiwiaGFzTWFyZ2luIiwiYWNjZW50Iiwic2hhcGUiLCJjYXB0aW9uIiwibGluayIsImFjY2VwdCIsInV0aWxzIiwiYm9yZGVyUmFkaXVzIiwiYnV0dG9uVGV4dENvbG9yIiwiRnVuY3Rpb25hbExpbmsiLCJuZXdUYWIiLCJzZXRJc05hdk9wZW4iLCJzdGF0ZSIsIm5hbWUiLCJmdW5jIiwidXNlQ29udGV4dCIsIk5leHRJbWFnZSIsIkFwcENvbnRleHQiLCJOZXh0SW1hZ2VXcmFwcGVyIiwiU3R5bGVkTmV4dEltYWdlIiwiSW1hZ2UiLCJjdXJyZW50RGFya01vZGUiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRlciIsInNyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImNvbnNvbGUiLCJlcnJvciIsIm51bWJlciIsImRpdiIsImRhcmsiLCJjaGlsZHJlblNoYXBlIiwiTGluZUhvcml6b250YWxXcmFwcGVyIiwiTGluZSIsIkxpbmVIb3Jpem9udGFsIiwiY2hpbGRyZW4iLCJsYXJnZSIsIkxpbmVWZXJ0aWNhbFdyYXBwZXIiLCJMaW5lVmVydGljYWwiLCJtcSIsIm1vYmlsZUxhcmdlIiwiSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIiLCJIZXJvQ291cnNlQ29tcG9uZW50IiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJsaW5rQ2FwdGlvbiIsImRpbWVuc2lvbnMiLCJ0aWxlUGFkZGluZyIsImJhY2tncm91bmRMaWdodCIsImJveFNoYWRvdyIsInRpbGVQYWRkaW5nTW9iaWxlIiwiSGVyb0luc3RydWN0b3JXcmFwcGVyIiwiSGVyb0luc3RydWN0b3JDb21wb25lbnQiLCJ3aGl0ZSIsImRlc2t0b3AiLCJsYXB0b3AiLCJwYWRkaW5nIiwibVYiLCJMaXN0SXRlbVdyYXBwZXIiLCJCdWxsZXQiLCJMaXN0SXRlbSIsImhhc0xpbmtzIiwibGkiLCJuYXZMaXN0IiwibWFpbkNvbG9yIiwibW9iaWxlU21hbGwiLCJQYWdlVGlsZSIsIlNlbWVzdGVyIiwiSGVhZCIsIlJvdyIsIkFubm90YXRpb24iLCJQcmljaW5nQ29tcG9uZW50Iiwic2VtZXN0ZXIiLCJncm91cCIsInByaWNlIiwic3R1ZGVudCIsInN0dWRlbnRQcmljZSIsImdyYWR1YXRlIiwiZ3JhZHVhdGVQcmljZSIsIm90aGVycyIsIm90aGVyc1ByaWNlIiwiYW5ub3RhdGlvbiIsImFubm90YXRpb25zIiwic3ViVGV4dCIsImRhcmtCbHVlIiwiY2FwdGlvbk1lZGl1bSIsInAiLCJjYXB0aW9uU21hbGwiLCJTdHlsZWRNYXJrZG93biIsIlJpY2hUZXh0IiwiTWFya2Rvd24iLCJyaWNoVGV4dE1hcmdpblRvcCIsImJsYWNrIiwiU3R5bGVkRm9vdGVyIiwiRm9vdGVyV3JhcHBlciIsIkNvbnRlbnRXcmFwcGVyIiwiSW5mb3JtYXRpb25XcmFwcGVyIiwiU3R5bGVkU2Nob29sSW5mbyIsIkltYWdlc1dyYXBwZXIiLCJJbWFnZVdyYXBwZXIiLCJGb290ZXIiLCJmb290ZXIiLCJzY2hvb2xOYW1lIiwiZm9vdGVySW5mb3MiLCJmb290ZXJJbWFnZXMiLCJtYXAiLCJpZCIsImNvbnRlbnQiLCJhdHRyaWJ1dGVzIiwibSIsImxhcHRvcExhcmdlIiwicyIsInhzViIsInRpbGVXaWR0aCIsImRlc2t0b3BUYWxsIiwiSGVhZGVyIiwiTG9nbyIsIk1lbnVCdXR0b24iLCJTdHlsZWRTcGFuIiwiTG9hZGVyIiwiQnV0dG9uc1dyYXBwZXIiLCJEYXJrTW9kZUJ1dHRvbiIsIk5hdkJhciIsImxvZ28iLCJpc0xvYWRpbmciLCJpc05hdk9wZW4iLCJoYW5kbGVEYXJrTW9kZUNoYW5nZSIsInRhYmxldExhcmdlIiwiYnV0dG9uIiwic2hvcnQiLCJTdHlsZWROYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsIm5hdkxpbmtzIiwiZ3JvdXBOYW1lIiwibGlua3MiLCJhcnJheU9mIiwibmF2IiwieFYiLCJ4Iiwic1YiLCJQYWdlV3JhcHBlciIsIlBhZ2VTZWN0aW9uIiwiU3R5bGVkVGl0bGUiLCJJbmZvU2VjdGlvbiIsIkluZm9XcmFwcGVyIiwiSW5mb0NvbXBvbmVudCIsIkNpc2NvQ291cnNlIiwicmljaFRleHRTZWN0aW9ucyIsImNvdXJzZUluZm9zIiwicmljaFRleHQiLCJjb3Vyc2VJbmZvIiwiaDEiLCJoZWFkZXJNb2JpbGUiLCJzZWN0aW9uIiwicGFnZVNlY3Rpb25XaWR0aCIsInRhYmxldCIsImNhcHRpb25MYXJnZU1lZGl1bSIsIkFkZHJlc3NXcmFwcGVyIiwiQ29udGFjdCIsImNvbnRhY3RJbmZvcyIsImFkZHJlc3MiLCJjb250YWN0SW5mbyIsIlBhZ2VUaWxlV3JhcHBlciIsIkNvdXJzZXMiLCJjb3Vyc2VzIiwiYm9keVNtYWxsIiwiZGF0YVNoYXBlIiwiSGVyb0Fib3V0V3JhcHBlciIsIkhlYWRlcldyYXBwZXIiLCJEZXNjcmlwdGlvbldyYXBwZXIiLCJIZXJvQWJvdXQiLCJIZXJvQ291cnNlV3JhcHBlciIsIkhlcm9Db3Vyc2VzIiwiY291cnNlIiwiSGVyb0luc3RydWN0b3JzV3JhcHBlciIsIkhlcm9JbnN0cnVjdG9ycyIsImluc3RydWN0b3JzIiwiaW5zdHJ1Y3RvciIsIkhlcm9QcmljaW5nV3JhcHBlciIsIkhlcm9QcmljaW5nIiwiSGVyb1dyYXBwZXIiLCJCdXR0b25XcmFwcGVyIiwiSGVybyIsImJ1dHRvbnMiLCJiYWNrZ3JvdW5kV2hpdGUiLCJkZXNrdG9wV2lkZSIsIlByaWNpbmciLCJwcmljaW5nQ29tcG9uZW50cyIsInByaWNpbmdDb21wb25lbnQiLCJSZWd1bGF0aW9ucyIsIlJvZG8iLCJTZWN0aW9uSGVhZGVyV3JhcHBlciIsIlNlY3Rpb25IZWFkZXIiLCJpc0xvbmciLCJ4bFYiLCJXcmFwcGVyIiwiU2VjdGlvblRleHRIZWFkZXIiLCJTZWN0aW9uRGFya1dyYXBwZXIiLCJTZWN0aW9uV2l0aERlc2MiLCJTZWN0aW9uV3JhcHBlciIsIlNlY3Rpb25XaXRoSW1hZ2UiLCJpc1JldmVyc2VkIiwiU3R5bGVkTGlzdCIsIlN0eWxlZEl0ZW0iLCJUaWxlIiwiU2VjdGlvbldpdGhMaXN0IiwibGlzdEl0ZW1zIiwiaXRlbSIsImFycmF5IiwidWwiLCJzZWN0aW9uQ29tcG9uZW50cyIsIlNlY3Rpb25zIiwic2VjdGlvbnMiLCJfX2NvbXBvbmVudCIsIlNlY3Rpb24iLCJzZWN0aW9uRGF0YSIsIlNlY3Rpb25Db21wb25lbnQiLCJOZXh0U2VvIiwiU2VvIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiU3R5bGVkTGF5b3V0IiwiTGF5b3V0IiwibmF2aWdhdGlvbiIsIlBhZ2VTZWN0aW9uV3JhcHBlciIsInByb3BzIiwicGFnZVNlY3Rpb25QYWRkaW5nIiwic3NWIiwiU3R5bGVkUGFnZVRpbGVXcmFwcGVyIiwiU3R5bGVkUGFnZVdyYXBwZXIiLCJtb2R1bGFyIiwiY29sdW1uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJraW5kIiwidyIsImZpbmQiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZldGNoQVBJIiwiZ2V0UGFnZURhdGEiLCJFcnJvclBhZ2UiLCJEeW5hbWljUGFnZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJzbHVnQXJyYXkiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFnZURhdGEiLCJvbmVPZlR5cGUiLCJub2RlIiwiY3JlYXRlQ29udGV4dCIsIk5Qcm9ncmVzcyIsIkFwcFByb3ZpZGVyIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3RhcnQiLCJjb25maWd1cmUiLCJoYW5kbGVTdG9wIiwiZG9uZSIsIm9mZiIsImdldFN0cmFwaVVSTCIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=