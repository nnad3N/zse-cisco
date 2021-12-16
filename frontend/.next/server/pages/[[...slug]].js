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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ArrowLink_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowLink.styles */ "./components/atoms/ArrowLink/ArrowLink.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\ArrowLink\\ArrowLink.js";







const ArrowLink = ({
  slug,
  title,
  image,
  accented
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${slug}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_4__.ArrowLinkWrapper, {
      accented: accented,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h5", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_4__.Arrow, {
        accented: accented
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
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
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper),
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
`;
const ImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 3.8rem;
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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Button\\Button.js";






const Button = ({
  data,
  hasMargin,
  accent
}) => {
  const {
    caption,
    isFilled,
    link: {
      slug
    }
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${slug}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Button_styles__WEBPACK_IMPORTED_MODULE_3__.StyledButton, {
      hasMargin: hasMargin,
      isFilled: isFilled,
      accent: accent,
      children: caption
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "Buttonstyles__StyledButton",
  componentId: "sc-owlh7l-0"
})(["border-radius:", ";padding:1rem 2rem;border:", ";border-color:", ";background-color:", ";color:", ";display:flex;align-items:center;transition:all 0.1s ease-out;&:first-child{margin-right:", ";}&:hover{transform:translate(1%,-10%);border-color:", ";background-color:", ";color:", ";}"], ({
  theme
}) => theme.utils.borderRadius, ({
  theme,
  isFilled
}) => isFilled ? '0' : `3px solid ${theme.colors.buttonColor}`, ({
  theme,
  accent
}) => accent ? theme.colors.accentColor : theme.colors.buttonColor, ({
  theme,
  isFilled,
  accent
}) => isFilled ? accent ? theme.colors.accentColor : theme.colors.buttonColor : 'transparent', ({
  theme,
  isFilled,
  accent
}) => isFilled ? theme.colors.buttonTextColor : accent ? theme.colors.accentColor : theme.colors.buttonColor, ({
  hasMargin
}) => hasMargin ? '2rem' : '0', ({
  theme,
  accent
}) => accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor, ({
  theme,
  isFilled,
  accent
}) => isFilled ? accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor : 'transparent', ({
  theme,
  isFilled,
  accent
}) => isFilled ? theme.colors.buttonTextColor : accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\FunctionalLink\\FunctionalLink.js";





const FunctionalLink = ({
  link: {
    name,
    slug,
    newTab
  },
  setIsNavOpen
}) => {
  if (newTab) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      href: slug,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: () => setIsNavOpen(state => !state),
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${slug}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      onClick: () => setIsNavOpen(state => !state),
      children: name
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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Image\\Image.js";







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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\LineHorizontal\\LineHorizontal.js";






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

const LineHorizontalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LineHorizontalstyles__LineHorizontalWrapper",
  componentId: "sc-124isu3-0"
})(["display:flex;flex-direction:column;width:100%;text-align:center;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "LineHorizontalstyles__Line",
  componentId: "sc-124isu3-1"
})(["min-height:", ";background-color:", ";margin-top:", ";"], ({
  large
}) => large ? '0.8rem' : '0.4rem', ({
  theme
}) => theme.colors.accentColor, ({
  large
}) => large ? '2.2rem' : '.8rem');

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\LineVertical\\LineVertical.js";






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

const LineVerticalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LineVerticalstyles__LineVerticalWrapper",
  componentId: "sc-1yt5gg9-0"
})(["display:flex;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "LineVerticalstyles__Line",
  componentId: "sc-1yt5gg9-1"
})(["min-width:", ";background-color:", ";margin-right:", ";", "{margin-right:", ";}"], ({
  large
}) => large ? '0.8rem' : '0.4rem', ({
  theme
}) => theme.colors.accentColor, ({
  large
}) => large ? '2.2rem' : '1.5rem', ({
  theme
}) => theme.mq.mobileLarge, ({
  large
}) => large ? '1.8rem' : '1.5rem');

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent\\HeroCourseComponent.js";







const HeroCourseComponent = ({
  data: {
    title,
    description,
    link: {
      slug
    },
    linkName
  },
  image
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_4__.HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      slug: slug,
      title: linkName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

HeroCourseComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }),
    linkName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
  }).isRequired,
  image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
HeroCourseComponent.defaultProps = {
  data: {
    title: '',
    description: '',
    linkName: '',
    link: {
      slug: ''
    }
  }
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

const HeroCourseComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroCourseComponentstyles__HeroCourseComponentWrapper",
  componentId: "sc-jbblf5-0"
})(["align-self:flex-start;display:flex;flex-direction:column;padding:", ";background-color:", ";border-radius:", ";box-shadow:", ";max-width:50rem;h4{text-align:center;margin-bottom:2rem;}a{margin-top:4rem;}", "{padding:", ";}"], ({
  theme
}) => theme.dimensions.tilePadding, ({
  theme
}) => theme.colors.backgroundLight, ({
  theme
}) => theme.utils.borderRadius, ({
  theme
}) => theme.utils.boxShadow, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.tilePaddingMobile);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroInstructorComponent\\HeroInstructorComponent.js";





const HeroInstructorComponent = ({
  data: {
    header,
    instructor,
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
      children: instructor
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
    instructor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};
HeroInstructorComponent.defaultProps = {
  data: {
    header: '',
    instructor: '',
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

const HeroInstructorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__HeroInstructorWrapper",
  componentId: "sc-185e0jh-0"
})(["max-width:50rem;display:flex;flex-direction:column;color:", ";h4{margin-bottom:1rem;}", "{max-width:40rem;}", "{max-width:50rem;&:not(:last-child){padding:0 0 ", " 0;}}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.padding.mV);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\ListItem\\ListItem.js";







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

const ListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ListItemstyles__ListItemWrapper",
  componentId: "sc-14qipgk-0"
})(["display:flex;align-items:center;width:fit-content;&:not(:last-child){margin-bottom:1.5rem;}a{font-size:", ";}"], ({
  theme
}) => theme.fontSize.navList);
const Bullet = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "ListItemstyles__Bullet",
  componentId: "sc-14qipgk-1"
})(["position:relative;min-width:22px;min-height:22px;border-radius:50%;margin-right:1.5rem;background-color:", ";&::before{position:absolute;content:'';top:50%;left:50%;min-width:12px;min-height:12px;border-radius:50%;transform:translate(-50%,-50%);background-color:", ";}", "{min-width:16px;min-height:16px;&::before{min-width:9px;min-height:9px;}}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.mq.mobileSmall);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\PricingComponent\\PricingComponent.js";







const PricingComponent = ({
  data: {
    title,
    semester,
    tableHead,
    tableRows,
    annotations
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), semester && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Semester, {
      children: semester
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 20
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Head, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: tableHead.rowName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: tableHead.rowContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), tableRows.map(({
      rowName,
      rowContent,
      id
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: rowName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: rowContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: annotations.map(({
        annotation,
        id
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingComponent_styles__WEBPACK_IMPORTED_MODULE_4__.Annotation, {
        children: annotation
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

PricingComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    semester: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    tableHead: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    tableRows: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    annotations: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
PricingComponent.defaultProps = {
  data: {
    title: '',
    semester: '',
    tableHead: {
      rowName: '',
      rowContent: ''
    },
    tableRows: [],
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

const Semester = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "PricingComponentstyles__Semester",
  componentId: "sc-105bm7r-0"
})(["margin-top:1rem;font-size:", ";color:", ";font-weight:600;"], ({
  theme
}) => theme.fontSize.subText, ({
  theme
}) => theme.colors.accentColor);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PricingComponentstyles__Row",
  componentId: "sc-105bm7r-1"
})(["width:100%;display:grid;grid-template-columns:4fr 1fr;column-gap:2rem;margin-top:1rem;padding-bottom:0.5rem;border-bottom:0.3rem solid ", ";span{font-size:", ";}"], ({
  theme
}) => theme.colors.darkBlue, ({
  theme
}) => theme.fontSize.body);
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Row).withConfig({
  displayName: "PricingComponentstyles__Head",
  componentId: "sc-105bm7r-2"
})(["margin-top:2rem;border-bottom:0.1rem solid ", ";span{font-size:", ";}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.fontSize.captionMedium);
const Annotation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "PricingComponentstyles__Annotation",
  componentId: "sc-105bm7r-3"
})(["font-style:italic;font-size:", ";font-weight:300;margin-top:1rem;&:first-child{margin-top:2rem;}"], ({
  theme
}) => theme.fontSize.captionSmall);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\RichText\\RichText.js";





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


const StyledMarkdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((react_markdown__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({
  displayName: "RichTextstyles__StyledMarkdown",
  componentId: "sc-1ay07v0-0"
})(["margin-top:", ";h1,h2,h3,h4,h5,h6{color:", ";margin-top:1rem;margin-bottom:0.5rem;}h1,h2,h3,h4{margin-bottom:0.7rem;}h1,h2{font-weight:300;margin-top:2rem;}h3,h4,h5{font-weight:400;}h1{font-size:9.5rem;letter-spacing:-0.15rem;}h2{font-size:5.9rem;letter-spacing:-0.05rem;}h3{font-size:2.5rem;font-weight:400;}h4{font-size:2.5rem;font-weight:600;}h5{font-size:2rem;}h6{font-size:2rem;font-weight:600;}a{color:", ";text-decoration:none;font-weight:400;&:visited{color:", ";}}li{font-size:", ";margin-left:3rem;line-height:1.6;&:first-child{margin-top:0.8rem;}a{color:", ";font-size:", ";&:visited{color:", ";}}}p{&:not(:last-child){margin:0 0 1rem 0;}}"], ({
  theme
}) => theme.dimensions.richTextMarginTop, ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.fontSize.body, ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.fontSize.body, ({
  theme
}) => theme.colors.black);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Footer\\Footer.js";






const Footer = ({
  footer: {
    header,
    schoolName,
    footerInfo,
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
          children: footerInfo.map(({
            id,
            caption,
            info
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              children: caption
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, undefined), " ", info]
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
        children: footerImages.map(footerImage => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.ImageWrapper, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: footerImage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined)
        }, footerImage.id, false, {
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
};

Footer.propTypes = {
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    schoolName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    footerInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
    footerImages: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired
  }).isRequired
};
Footer.defaultProps = {
  footer: {
    header: '',
    schoolName: '',
    footerInfo: [],
    footerImages: []
  }
};
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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\NavBar\\NavBar.js";








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
          image: logo
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
        dark: currentDarkMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {
        onClick: () => setIsNavOpen(state => !state),
        isNavOpen: isNavOpen,
        "data-testid": "menu-button",
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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Navigation\\Navigation.js";








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

const StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({
  displayName: "Navigationstyles__StyledNavigation",
  componentId: "sc-1adzo3a-0"
})(["position:absolute;min-height:90vh;width:100%;z-index:20;background-color:", ";padding:", " ", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(40rem,auto));row-gap:", ";column-gap:", ";align-content:flex-start;", "{column-gap:", ";padding:", " ", ";}", "{grid-template-columns:100%;padding:", " ", ";}", "{padding:", " ", ";}img{border-radius:0;}li{transition:transform 0.1s ease-out;&:hover{transform:translate(1%,-7%);}}"], ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.x, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.mq.tabletLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.sV, ({
  theme
}) => theme.padding.s);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navigationstyles__ContentWrapper",
  componentId: "sc-1adzo3a-1"
})(["justify-self:center;min-width:40rem;display:flex;flex-direction:column;width:100%;& > div{margin-bottom:2rem;text-align:left;}a{font-size:", ";}"], ({
  theme
}) => theme.fontSize.navList);

/***/ }),

/***/ "./components/sections/About/About.js":
/*!********************************************!*\
  !*** ./components/sections/About/About.js ***!
  \********************************************/
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
/* harmony import */ var _About_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.styles */ "./components/sections/About/About.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\About\\About.js";








const About = ({
  data: {
    secOneDescription,
    secOneTitle,
    secOneImage,
    secTwoDescription,
    secTwoTitle,
    secThreeTitle,
    secThreeImage,
    secThreeDescription
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_About_styles__WEBPACK_IMPORTED_MODULE_4__.SectionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_About_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: secOneTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: secOneDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_About_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: secOneImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_About_styles__WEBPACK_IMPORTED_MODULE_4__.SectionDarkWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: secTwoTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        children: secTwoDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_About_styles__WEBPACK_IMPORTED_MODULE_4__.SectionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_About_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: secThreeImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_About_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
        reverse: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_2__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: secThreeTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: secThreeDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

About.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    secOneTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    secOneDescription: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    secOneImage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    secTwoTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    secTwoDescription: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    secThreeTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    secThreeDescription: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    secThreeImage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }).isRequired
};
About.defaultProps = {
  data: {
    // secOneTitle: '',
    secOneDescription: '',
    secTwoTitle: '',
    secTwoDescription: '',
    secThreeTitle: '',
    secThreeDescription: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./components/sections/About/About.styles.js":
/*!***************************************************!*\
  !*** ./components/sections/About/About.styles.js ***!
  \***************************************************/
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

const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "Aboutstyles__SectionWrapper",
  componentId: "sc-1w464xi-0"
})(["padding:", " ", ";display:flex;align-items:center;justify-content:space-between;background-color:", ";", "{flex-direction:column;justify-content:center;}", "{padding:", " ", ";min-height:unset;h1{font-size:", ";}}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.colors.backgroundWhite, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.fontSize.header);
const SectionDarkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(SectionWrapper).withConfig({
  displayName: "Aboutstyles__SectionDarkWrapper",
  componentId: "sc-1w464xi-1"
})(["background-color:", ";color:", ";p{max-width:60rem;margin-left:5vw;", "{max-width:50rem;}", "{max-width:60rem;margin:5rem 0 0 0;}}"], ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.laptopLarge, ({
  theme
}) => theme.mq.laptop);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Aboutstyles__ContentWrapper",
  componentId: "sc-1w464xi-2"
})(["width:60rem;display:flex;flex-direction:column;margin:", ";p{margin-top:3rem;", "{font-size:", ";}", "{font-size:", ";}}", "{margin:0 0 3rem 0;}", "{width:100%;}", "{}"], ({
  reverse
}) => reverse ? `0 0 0 5vw` : `0 5vw 0 0`, ({
  theme
}) => theme.mq.laptopLarge, ({
  theme
}) => theme.fontSize.bodySmall, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.fontSize.body, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.mq.desktopWide);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Aboutstyles__ImageWrapper",
  componentId: "sc-1w464xi-3"
})(["width:40vw;display:flex;align-items:center;justify-content:center;", "{width:60rem;order:2;}", "{width:100%;}"], ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.tablet);

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
/* harmony import */ var _templates_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/PageHeader/PageHeader */ "./components/templates/PageHeader/PageHeader.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @templates/PageWrapper/PageWrapper */ "./components/templates/PageWrapper/PageWrapper.js");
/* harmony import */ var _templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @templates/PageSection/PageSection */ "./components/templates/PageSection/PageSection.js");
/* harmony import */ var _molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @molecules/RichText/RichText */ "./components/molecules/RichText/RichText.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @templates/PageTile/PageTile */ "./components/templates/PageTile/PageTile.js");
/* harmony import */ var _molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @molecules/ListItem/ListItem */ "./components/molecules/ListItem/ListItem.js");
/* harmony import */ var _CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CiscoCourse.styles */ "./components/sections/CiscoCourse/CiscoCourse.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\CiscoCourse\\CiscoCourse.js";














const CiscoCourse = ({
  data: {
    header: {
      title,
      image
    },
    richText,
    courseInfo,
    listTitle,
    listComponent
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
      image: image,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h1", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
      column: true,
      children: richText.map(({
        title,
        content,
        id
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.StyledTitle, {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.InfoSection, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.InfoWrapper, {
        children: courseInfo.map(({
          caption,
          info,
          id
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.InfoComponent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.StyledSpan, {
            children: caption
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            children: info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, undefined)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
      short: true,
      wide: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__.default, {
        wide: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_7__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h1", {
            children: listTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.PageTileWrapper, {
          children: listComponent.map(({
            title,
            listItems,
            id
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_8__.default, {
            wide: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.StyledTileHeader, {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.StyledList, {
              children: listItems.map(({
                item,
                id
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_9__.default, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_10__.StyledItem, {
                  children: item
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 23
                }, undefined)
              }, id, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, undefined)]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

CiscoCourse.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
    }),
    richText: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    courseInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    listTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    listComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
CiscoCourse.defaultProps = {
  data: {
    header: {
      title: ''
    },
    richText: [],
    courseInfo: [],
    listTitle: '',
    listComponent: []
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
/* harmony export */   "StyledSpan": () => (/* binding */ StyledSpan),
/* harmony export */   "PageTileWrapper": () => (/* binding */ PageTileWrapper),
/* harmony export */   "StyledTileHeader": () => (/* binding */ StyledTileHeader),
/* harmony export */   "StyledList": () => (/* binding */ StyledList),
/* harmony export */   "StyledItem": () => (/* binding */ StyledItem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "CiscoCoursestyles__StyledTitle",
  componentId: "sc-16b5gs6-0"
})(["font-size:", ";"], ({
  theme
}) => theme.fontSize.headerMobile);
const InfoSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "CiscoCoursestyles__InfoSection",
  componentId: "sc-16b5gs6-1"
})(["padding:", " ", ";width:100%;background-color:", ";", "{padding:", " ", ";}"], ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s);
const InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__InfoWrapper",
  componentId: "sc-16b5gs6-2"
})(["display:flex;justify-content:space-between;margin:0 auto;max-width:", ";", "{width:fit-content;flex-direction:column;align-items:flex-start;}"], ({
  theme
}) => theme.dimensions.pageSectionWidth, ({
  theme
}) => theme.mq.tablet);
const InfoComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__InfoComponent",
  componentId: "sc-16b5gs6-3"
})(["display:flex;align-items:flex-start;color:", ";&:not(:last-child){margin-right:6rem;}span{font-size:", ";}", "{&:not(:last-child){margin-right:4rem;}}", "{&:not(:last-child){margin-right:0;margin-bottom:2rem;}}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.fontSize.captionLargeMedium, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.tablet);
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "CiscoCoursestyles__StyledSpan",
  componentId: "sc-16b5gs6-4"
})(["color:", ";font-weight:600;margin-right:0.6rem;"], ({
  theme
}) => theme.colors.accentColor);
const PageTileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__PageTileWrapper",
  componentId: "sc-16b5gs6-5"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;", "{flex-direction:column;align-items:center;div{width:", ";}}", "{div{width:100%;}}"], ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.dimensions.tileWidth, ({
  theme
}) => theme.mq.tablet);
const StyledTileHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "CiscoCoursestyles__StyledTileHeader",
  componentId: "sc-16b5gs6-6"
})(["", "{max-width:67%;}", "{max-width:60%;}"], ({
  theme
}) => theme.mobileLarge, ({
  theme
}) => theme.mq.mobileSmall);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "CiscoCoursestyles__StyledList",
  componentId: "sc-16b5gs6-7"
})(["margin-top:4rem;font-size:", ";li{align-items:flex-start;}"], ({
  theme
}) => theme.fontSize.body);
const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "CiscoCoursestyles__StyledItem",
  componentId: "sc-16b5gs6-8"
})(["inline-size:40rem;overflow-wrap:break-word;", "{inline-size:100%;}"], ({
  theme
}) => theme.mq.mobileLarge);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Contact\\Contact.js";







const Contact = ({
  data: {
    title,
    schoolName,
    contactInfo
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Contact_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: title
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
        children: contactInfo.map(({
          id,
          caption,
          info
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: caption
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined), " ", info]
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

/***/ "./components/sections/HeroAcademy/HeroAcademy.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroAcademy/HeroAcademy.js ***!
  \********************************************************/
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
/* harmony import */ var _HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroAcademy.styles */ "./components/sections/HeroAcademy/HeroAcademy.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroAcademy\\HeroAcademy.js";








const HeroAcademy = ({
  data: {
    title,
    description,
    button,
    image
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.HeroAcademyWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.HeaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: title
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.DescriptionWrapper, {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: image
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

HeroAcademy.propTypes = {
  data: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_1__.dataShape
};
HeroAcademy.defaultProps = {
  data: {
    title: '',
    description: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroAcademy);

/***/ }),

/***/ "./components/sections/HeroAcademy/HeroAcademy.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/HeroAcademy/HeroAcademy.styles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroAcademyWrapper": () => (/* binding */ HeroAcademyWrapper),
/* harmony export */   "HeaderWrapper": () => (/* binding */ HeaderWrapper),
/* harmony export */   "DescriptionWrapper": () => (/* binding */ DescriptionWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroAcademyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroAcademystyles__HeroAcademyWrapper",
  componentId: "sc-zz2bsp-0"
})(["padding:", " 0 ", " ", ";display:grid;row-gap:", ";column-gap:", ";grid-template-columns:1fr 1fr;grid-template-rows:auto auto;", "{padding:", " ", ";grid-template-columns:1fr;grid-template-rows:auto auto auto;justify-items:center;}", "{padding:", " ", ";row-gap:", ";}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.padding.mV);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroAcademystyles__HeaderWrapper",
  componentId: "sc-zz2bsp-1"
})(["grid-column:1/3;grid-row:1/2;", "{grid-column:1/1;}"], ({
  theme
}) => theme.mq.desktop);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroAcademystyles__DescriptionWrapper",
  componentId: "sc-zz2bsp-2"
})(["width:clamp(38rem,100%,60rem);align-self:center;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:", ";background-color:", ";border-radius:", ";box-shadow:", ";p{margin-bottom:5rem;}", "{width:clamp(38rem,100%,", ");grid-row:3/4;margin-right:0;}", "{padding:", ";}"], ({
  theme
}) => theme.dimensions.tilePadding, ({
  theme
}) => theme.colors.backgroundLight, ({
  theme
}) => theme.utils.borderRadius, ({
  theme
}) => theme.utils.boxShadow, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.dimensions.tileWidth, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.tilePaddingMobile);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroAcademystyles__ImageWrapper",
  componentId: "sc-zz2bsp-3"
})(["width:100%;background-color:darkGray;justify-self:end;align-self:center;", "{width:clamp(38rem,100%,", ");max-width:100%;justify-self:center;}"], ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.dimensions.tileWidth);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroCourses\\HeroCourses.js";







const HeroCourses = ({
  data: {
    title,
    heroCourses,
    arrowImage
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_HeroCourses_styles__WEBPACK_IMPORTED_MODULE_4__.HeroCourseWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        children: title
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
      children: heroCourses.map(courseData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_molecules_HeroCourseComponent_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: courseData,
        image: arrowImage
      }, courseData.id, false, {
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
    arrowImage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    heroCourses: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};
HeroCourses.defaultProps = {
  data: {
    heroCourses: [],
    title: ''
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

const HeroCourseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroCoursesstyles__HeroCourseWrapper",
  componentId: "sc-10jx66m-0"
})(["padding:", " ", ";", "{padding:", " ", ";}", "{padding:", " ", ";}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.x, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroCoursesstyles__ContentWrapper",
  componentId: "sc-10jx66m-1"
})(["display:grid;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(40rem,auto));column-gap:", ";row-gap:", ";margin-top:", ";", "{margin-top:", ";row-gap:", ";}"], ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.mV);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroInstructors\\HeroInstructors.js";






const HeroInstructors = ({
  data: {
    instructorComponents
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_HeroInstructors_styles__WEBPACK_IMPORTED_MODULE_3__.HeroInstructorsWrapper, {
    children: instructorComponents.map(instructorData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_molecules_HeroInstructorComponent_HeroInstructorComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: instructorData
    }, instructorData.id, false, {
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
    instructorComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
HeroInstructors.defaultProps = {
  data: {
    instructorComponents: []
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

const HeroInstructorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroInstructorsstyles__HeroInstructorsWrapper",
  componentId: "sc-13537bz-0"
})(["padding:", " ", ";background-color:", ";display:flex;justify-content:space-between;", "{padding:", " ", ";}", "{flex-direction:column;align-items:center;}", "{padding:", " ", ";}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.x, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.mq.laptopLarge, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroPricing\\HeroPricing.js";








const HeroPricing = ({
  data: {
    title,
    description,
    button
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__.HeroPricingWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: title
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
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    button: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }).isRequired
};
HeroPricing.defaultProps = {
  data: {
    title: '',
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

const HeroPricingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroPricingstyles__HeroPricingWrapper",
  componentId: "sc-1kofqz6-0"
})(["display:flex;flex-direction:column;align-items:center;padding:", " ", ";background-color:", ";color:", ";", "{padding:", " ", ";}", "{padding:", " ", ";}", "{padding:", " ", ";}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.x, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroPricingstyles__DescriptionWrapper",
  componentId: "sc-1kofqz6-1"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:6rem;width:", ";", "{flex-direction:column;}", "{flex-direction:column;}", "{width:unset;margin-top:4rem;}& > div{font-size:", ";margin:0 5rem 0 0;width:39rem;", "{margin:0 0 4rem 0;}", "{margin:0 0 4rem 0;}", "{margin:0 0 3rem 0;width:100%;}}"], ({
  theme
}) => theme.dimensions.tileWidth, ({
  theme
}) => theme.mq.desktopTall, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.fontSize.subText, ({
  theme
}) => theme.mq.desktopTall, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.mq.mobileLarge);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Hero\\Hero.js";








const Hero = ({
  data: {
    title,
    description,
    buttons,
    image
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_4__.HeroWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: title
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
        children: buttons.map(buttonData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
          data: buttonData,
          hasMargin: true
        }, buttonData.id, false, {
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
        image: image
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
    title: '',
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

const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "Herostyles__HeroWrapper",
  componentId: "sc-1gkf8j4-0"
})(["padding:", " ", ";display:flex;align-items:center;justify-content:space-between;min-height:90vh;background-color:", ";", "{flex-direction:column;justify-content:center;}", "{padding:", " ", ";min-height:unset;h1{font-size:", ";text-align:center;}}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.colors.backgroundWhite, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.fontSize.header);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Herostyles__ContentWrapper",
  componentId: "sc-1gkf8j4-1"
})(["width:50rem;display:flex;flex-direction:column;h1{max-width:40rem;margin-bottom:5rem;", "{margin-bottom:3rem;}}", "{width:100%;}", "{margin-right:10vmin;}"], ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.mq.desktopWide);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Herostyles__ButtonWrapper",
  componentId: "sc-1gkf8j4-2"
})(["display:flex;margin-top:5rem;", "{justify-content:center;margin-bottom:5rem;}"], ({
  theme
}) => theme.mq.laptop);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Herostyles__ImageWrapper",
  componentId: "sc-1gkf8j4-3"
})(["width:40vw;display:flex;align-items:center;justify-content:center;", "{width:50rem;}", "{width:100%;}"], ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileLarge);

/***/ }),

/***/ "./components/sections/Offert/Offert.js":
/*!**********************************************!*\
  !*** ./components/sections/Offert/Offert.js ***!
  \**********************************************/
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
/* harmony import */ var _templates_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @templates/PageHeader/PageHeader */ "./components/templates/PageHeader/PageHeader.js");
/* harmony import */ var _templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @templates/PageSection/PageSection */ "./components/templates/PageSection/PageSection.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @molecules/RichText/RichText */ "./components/molecules/RichText/RichText.js");
/* harmony import */ var _templates_PageTileWrapper_PageTileWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @templates/PageTileWrapper/PageTileWrapper */ "./components/templates/PageTileWrapper/PageTileWrapper.js");
/* harmony import */ var _templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @templates/PageTile/PageTile */ "./components/templates/PageTile/PageTile.js");
/* harmony import */ var _atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @atoms/ArrowLink/ArrowLink */ "./components/atoms/ArrowLink/ArrowLink.js");
/* harmony import */ var _Offert_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Offert.styles */ "./components/sections/Offert/Offert.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Offert\\Offert.js";














const Offert = ({
  data: {
    sectionHeader: {
      title,
      image
    },
    offertComponents,
    arrowImage
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_3__.default, {
      image: image,
      longText: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_5__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h1", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
      short: true,
      column: true,
      children: offertComponents.map(({
        title,
        content,
        offertCourses,
        id
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_5__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Offert_styles__WEBPACK_IMPORTED_MODULE_10__.StyledTitle, {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageTileWrapper_PageTileWrapper__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: offertCourses.map(({
            title,
            description,
            linkName,
            link: {
              slug
            },
            id
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_5__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h4", {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Offert_styles__WEBPACK_IMPORTED_MODULE_10__.StyledSpan, {
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_9__.default, {
              accented: true,
              slug: slug,
              title: linkName,
              image: arrowImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 19
            }, undefined)]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

Offert.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
    }),
    offertComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    arrowImage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  }).isRequired
};
Offert.defaultProps = {
  data: {
    sectionHeader: {
      title: ''
    },
    offertComponents: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offert);

/***/ }),

/***/ "./components/sections/Offert/Offert.styles.js":
/*!*****************************************************!*\
  !*** ./components/sections/Offert/Offert.styles.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTitle": () => (/* binding */ StyledTitle),
/* harmony export */   "StyledSpan": () => (/* binding */ StyledSpan)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "Offertstyles__StyledTitle",
  componentId: "sc-1n0g0rj-0"
})(["font-size:", ";"], ({
  theme
}) => theme.fontSize.headerMobile);
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Offertstyles__StyledSpan",
  componentId: "sc-1n0g0rj-1"
})(["margin:2rem 0;font-size:", ";"], ({
  theme
}) => theme.fontSize.bodySmall);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Pricing\\Pricing.js";










const Pricing = ({
  data: {
    title,
    content,
    pricingComponents
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(components_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
          children: title
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
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    pricingComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
  }).isRequired
};
Pricing.defaultProps = {
  data: {
    title: '',
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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Regulations\\Regulations.js";








const Regulations = ({
  data: {
    title,
    content
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(components_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          children: title
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
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};
Regulations.defaultProps = {
  data: {
    title: '',
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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Rodo\\Rodo.js";







const Rodo = ({
  data: {
    title,
    description
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Rodo_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: title
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

Rodo.propTypes = {};
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
/* harmony import */ var _sections_HeroAcademy_HeroAcademy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sections/HeroAcademy/HeroAcademy */ "./components/sections/HeroAcademy/HeroAcademy.js");
/* harmony import */ var _sections_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sections/Contact/Contact */ "./components/sections/Contact/Contact.js");
/* harmony import */ var _sections_Regulations_Regulations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sections/Regulations/Regulations */ "./components/sections/Regulations/Regulations.js");
/* harmony import */ var _sections_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sections/Pricing/Pricing */ "./components/sections/Pricing/Pricing.js");
/* harmony import */ var _sections_Offert_Offert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sections/Offert/Offert */ "./components/sections/Offert/Offert.js");
/* harmony import */ var _sections_CiscoCourse_CiscoCourse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sections/CiscoCourse/CiscoCourse */ "./components/sections/CiscoCourse/CiscoCourse.js");
/* harmony import */ var _sections_About_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sections/About/About */ "./components/sections/About/About.js");
/* harmony import */ var _sections_Rodo_Rodo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sections/Rodo/Rodo */ "./components/sections/Rodo/Rodo.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\sections.js";












 // Map Strapi sections to section components



const sectionComponents = {
  'sections.hero': _sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default,
  'sections.hero-instructors': _sections_HeroInstructors_HeroInstructors__WEBPACK_IMPORTED_MODULE_2__.default,
  'sections.hero-courses': _sections_HeroCourses_HeroCourses__WEBPACK_IMPORTED_MODULE_3__.default,
  'sections.hero-pricing': _sections_HeroPricing_HeroPricing__WEBPACK_IMPORTED_MODULE_4__.default,
  'sections.hero-academy': _sections_HeroAcademy_HeroAcademy__WEBPACK_IMPORTED_MODULE_5__.default,
  'sections.contact': _sections_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__.default,
  'sections.regulations': _sections_Regulations_Regulations__WEBPACK_IMPORTED_MODULE_7__.default,
  'sections.pricing': _sections_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_8__.default,
  'sections.offert': _sections_Offert_Offert__WEBPACK_IMPORTED_MODULE_9__.default,
  'sections.cisco-course': _sections_CiscoCourse_CiscoCourse__WEBPACK_IMPORTED_MODULE_10__.default,
  'sections.about': _sections_About_About__WEBPACK_IMPORTED_MODULE_11__.default,
  'sections.rodo': _sections_Rodo_Rodo__WEBPACK_IMPORTED_MODULE_12__.default
}; // Display a section individually

const Section = ({
  sectionData
}) => {
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(SectionComponent, {
    data: sectionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 10
  }, undefined);
}; // Display the list of sections


const Sections = ({
  sections
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: sections.map(section => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Section, {
      sectionData: section
    }, `${section.__component}${section.id}`, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, undefined))
  }, void 0, false);
};

Section.propTypes = {
  sectionData: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object.isRequired)
};
Sections.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)).isRequired
};
Section.defaultProps = {
  sectionData: {
    __component: ''
  }
};
Sections.defaultProps = {
  sections: []
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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\seo.js";




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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\Layout\\Layout.js";










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
    }, undefined), isNavOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__.default, {
      navLinks: navLinks
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {
      footer: footer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
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

const StyledLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Layoutstyles__StyledLayout",
  componentId: "sc-t5nsbt-0"
})(["max-height:", ";overflow:hidden;"], ({
  isNavOpen
}) => isNavOpen ? '100vh' : 'fit-content');

/***/ }),

/***/ "./components/templates/PageHeader/PageHeader.js":
/*!*******************************************************!*\
  !*** ./components/templates/PageHeader/PageHeader.js ***!
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
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _PageHeader_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageHeader.styles */ "./components/templates/PageHeader/PageHeader.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\PageHeader\\PageHeader.js";







const PageHeader = ({
  children,
  image,
  longText
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PageHeader_styles__WEBPACK_IMPORTED_MODULE_4__.PageHeaderWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PageHeader_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      longText: longText,
      children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PageHeader_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
        longText: longText,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
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

PageHeader.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_2__.childrenShape,
  image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  longText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./components/templates/PageHeader/PageHeader.styles.js":
/*!**************************************************************!*\
  !*** ./components/templates/PageHeader/PageHeader.styles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderWrapper": () => (/* binding */ PageHeaderWrapper),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "PageHeaderstyles__PageHeaderWrapper",
  componentId: "sc-6s6ap7-0"
})(["padding:", " ", ";width:100%;background-color:", ";color:", ";display:flex;align-items:center;justify-content:center;", "{padding:", " ", ";}"], ({
  theme
}) => theme.padding.xlV, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PageHeaderstyles__ContentWrapper",
  componentId: "sc-6s6ap7-1"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;h1{max-width:", ";margin-right:2rem;}", "{width:max-content;flex-direction:column;align-items:flex-start;h1{max-width:max-content;}}", "{width:", ";h1{max-width:", ";}}", "{width:100%;}"], ({
  longText
}) => longText ? `max-content` : `40rem`, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.mq.tablet, ({
  longText
}) => longText ? `100%` : `50rem`, ({
  longText
}) => longText ? `max-content` : `40rem`, ({
  theme
}) => theme.mq.mobileLarge);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PageHeaderstyles__ImageWrapper",
  componentId: "sc-6s6ap7-2"
})(["width:", ";max-width:", ";display:flex;align-items:center;justify-content:center;", "{width:100%;padding-top:", ";margin:", ";}", "{padding-top:", ";}"], ({
  longText
}) => longText ? `40rem` : `80rem`, ({
  longText
}) => longText ? `40rem` : `80rem`, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.padding.xV, ({
  longText
}) => longText ? '0 auto' : 0, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.padding.mV);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\PageSection\\PageSection.js";

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

const PageSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "PageSectionstyle__PageSectionWrapper",
  componentId: "sc-bqxnpc-0"
})(["margin-bottom:", ";background-color:", ";border-radius:", ";box-shadow:", ";padding:", ";max-width:", ";min-width:", ";&:last-child{margin-bottom:0;}", "{min-width:", ";}", "{border-radius:0;margin-bottom:", ";}", "{border-radius:0;margin-bottom:", ";padding:", ";}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.colors.backgroundLight, ({
  theme
}) => theme.utils.borderRadius, ({
  theme
}) => theme.utils.boxShadow, ({
  theme
}) => theme.dimensions.pageSectionPadding, ({
  theme,
  wide
}) => wide ? 'max-content' : theme.dimensions.pageSectionWidth, ({
  wide
}) => wide ? '120rem' : 0, ({
  theme
}) => theme.mq.desktop, ({
  wide
}) => wide ? '100%' : 0, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.padding.sV, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.ssV, ({
  theme
}) => theme.dimensions.tilePaddingMobile);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\PageTileWrapper\\PageTileWrapper.js";






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

const StyledPageTileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PageTileWrapperstyles__StyledPageTileWrapper",
  componentId: "sc-1rfy7tn-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;", "{flex-direction:column;align-items:center;}"], ({
  theme
}) => theme.mq.laptop);

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
const _excluded = ["children"];
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\PageTile\\PageTile.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const PageTile = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_PageTile_styles__WEBPACK_IMPORTED_MODULE_2__.PageTileWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
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

const PageTileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PageTilestyles__PageTileWrapper",
  componentId: "sc-16piobu-0"
})(["display:flex;flex-direction:column;margin-top:", ";padding:", ";background-color:", ";border-radius:", ";width:", ";color:", ";align-items:flex-start;", "{width:50rem;}", "{width:100%;padding:", ";}"], ({
  theme
}) => theme.dimensions.richTextMarginTop, ({
  theme
}) => theme.dimensions.tilePadding, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.utils.borderRadius, ({
  wide
}) => wide ? 'max-content' : '40rem', ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.tilePaddingMobile);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\PageWrapper\\PageWrapper.js";

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

const StyledPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PageWrapperstyles__StyledPageWrapper",
  componentId: "sc-19gb2ve-0"
})(["padding:", " ", ";min-height:", ";display:flex;align-items:center;justify-content:center;flex-direction:", ";", "{padding:", " ", ";}", "{padding:0;min-height:unset;}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  short
}) => short ? 'unset' : '90vh', ({
  column
}) => column ? 'column' : 'row', ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.padding.xV, ({
  theme,
  wide
}) => wide ? theme.padding.xs : theme.padding.m, ({
  theme,
  wide
}) => wide ? theme.mq.laptopLarge : theme.mq.tablet);

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
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\[[...slug]].js";









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
  const pages = await (0,utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/pages');
  const paths = pages.map(page => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !page.slug ? false : page.slug.split('/');
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
  const navigation = await (0,utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/navigation');
  const footer = await (0,utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/footer');

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
      navigation,
      footer
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
  title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
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

  const pagesData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`/pages?slug=${slug}`); // Make sure we found something, otherwise return null

  if (pagesData == null || pagesData.length === 0) {
    return null;
  } // Return the first item since there should only be one result per slug


  return pagesData[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBRU8sZUFBZTA1QixXQUFmLENBQTJCOWQsTUFBM0IsRUFBbUM7QUFDeEMsUUFBTXBkLElBQUksR0FBR29kLE1BQU0sQ0FBQ3BkLElBQVAsQ0FBWTZXLElBQVosQ0FBaUIsR0FBakIsQ0FBYixDQUR3QyxDQUV4Qzs7QUFDQSxRQUFNNGxCLFNBQVMsR0FBRyxNQUFNeEIsOENBQVEsQ0FBRSxlQUFjajdCLElBQUssRUFBckIsQ0FBaEMsQ0FId0MsQ0FLeEM7O0FBQ0EsTUFBSXk4QixTQUFTLElBQUksSUFBYixJQUFxQkEsU0FBUyxDQUFDbnFCLE1BQVYsS0FBcUIsQ0FBOUMsRUFBaUQ7QUFDL0MsV0FBTyxJQUFQO0FBQ0QsR0FSdUMsQ0FVeEM7OztBQUNBLFNBQU9tcUIsU0FBUyxDQUFDLENBQUQsQ0FBaEI7QUFDRDs7Ozs7Ozs7OztBQ2RELDJHQUErQzs7Ozs7Ozs7Ozs7QUNBL0MseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUM7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvQXJyb3dMaW5rL0Fycm93TGluay5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0Fycm93TGluay9BcnJvd0xpbmsuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b24uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvRnVuY3Rpb25hbExpbmsvRnVuY3Rpb25hbExpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlcm9Db3Vyc2VDb21wb25lbnQvSGVyb0NvdXJzZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50L0hlcm9Db3Vyc2VDb21wb25lbnQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50L0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50L0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9MaXN0SXRlbS9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9MaXN0SXRlbS9MaXN0SXRlbS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUHJpY2luZ0NvbXBvbmVudC9QcmljaW5nQ29tcG9uZW50LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNpbmdDb21wb25lbnQvUHJpY2luZ0NvbXBvbmVudC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0Fib3V0L0Fib3V0LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvQWJvdXQvQWJvdXQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvQ2lzY29Db3Vyc2UvQ2lzY29Db3Vyc2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9DaXNjb0NvdXJzZS9DaXNjb0NvdXJzZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Db250YWN0L0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Db250YWN0L0NvbnRhY3Quc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0FjYWRlbXkvSGVyb0FjYWRlbXkuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQ291cnNlcy9IZXJvQ291cnNlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvSW5zdHJ1Y3RvcnMvSGVyb0luc3RydWN0b3JzLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9QcmljaW5nL0hlcm9QcmljaW5nLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyby9IZXJvLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyby9IZXJvLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL09mZmVydC9PZmZlcnQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9PZmZlcnQvT2ZmZXJ0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL1ByaWNpbmcvUHJpY2luZy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL1JlZ3VsYXRpb25zL1JlZ3VsYXRpb25zLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUm9kby9Sb2RvLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUm9kby9Sb2RvLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3N0cmFwaS9zZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3N0cmFwaS9zZW8uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9MYXlvdXQvTGF5b3V0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlSGVhZGVyL1BhZ2VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbi5zdHlsZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZVdyYXBwZXIvUGFnZVRpbGVXcmFwcGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VUaWxlV3JhcHBlci9QYWdlVGlsZVdyYXBwZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VUaWxlL1BhZ2VUaWxlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VUaWxlL1BhZ2VUaWxlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9wYWdlcy9bWy4uLnNsdWddXS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9wcm9wVHlwZXMvY29tcG9uZW50VHlwZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vcHJvdmlkZXJzL0FwcFByb3ZpZGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi91dGlscy9nZXRQYWdlRGF0YS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2lnbm9yZWR8QzpcXFVzZXJzXFxubmFkM1xcRGVza3RvcFxcV2ViIGRldmVsb3BtZW50XFxPcmlnaW5hbFxcenNlLWNpc2NvXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEFycm93TGlua1dyYXBwZXIsIEltYWdlV3JhcHBlciwgQXJyb3cgfSBmcm9tICcuL0Fycm93TGluay5zdHlsZXMnO1xyXG5cclxuY29uc3QgQXJyb3dMaW5rID0gKHsgc2x1ZywgdGl0bGUsIGltYWdlLCBhY2NlbnRlZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8QXJyb3dMaW5rV3JhcHBlciBhY2NlbnRlZD17YWNjZW50ZWR9PlxyXG4gICAgICAgIDxoNT57dGl0bGV9PC9oNT5cclxuICAgICAgICA8QXJyb3cgYWNjZW50ZWQ9e2FjY2VudGVkfSAvPlxyXG4gICAgICA8L0Fycm93TGlua1dyYXBwZXI+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkFycm93TGluay5wcm9wVHlwZXMgPSB7XHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYWNjZW50ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuQXJyb3dMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzbHVnOiAnJyxcclxuICB0aXRsZTogJycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xpbms7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFycm93TGlua1dyYXBwZXIgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yKX07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yKX07XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yKX07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDElLCAtMTAlKTtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmxpZ2h0ZXJBY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5saWdodGVyQnV0dG9uQ29sb3IpfTtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudGVkIH0pID0+IChhY2NlbnRlZCA/IHRoZW1lLmNvbG9ycy5saWdodGVyQWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubGlnaHRlckJ1dHRvbkNvbG9yKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMuOHJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZC5zcGFuYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudGVkIH0pID0+IChhY2NlbnRlZCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5idXR0b25Db2xvcil9O1xyXG4gIG1pbi13aWR0aDogNC4ycmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2Utb3V0O1xyXG5cclxuICAke0Fycm93TGlua1dyYXBwZXJ9OmhvdmVyICYsXHJcbiAgJHtBcnJvd0xpbmtXcmFwcGVyfTpob3ZlciAmOjpiZWZvcmUsXHJcbiAgJHtBcnJvd0xpbmtXcmFwcGVyfTpob3ZlciAmOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmxpZ2h0ZXJCdXR0b25Db2xvcil9O1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1pbi13aWR0aDogMi41cmVtO1xyXG4gICAgbWluLWhlaWdodDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmJ1dHRvbkNvbG9yKX07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKSByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFN0eWxlZEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uLnN0eWxlcyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBkYXRhLCBoYXNNYXJnaW4sIGFjY2VudCB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2FwdGlvbixcclxuICAgIGlzRmlsbGVkLFxyXG4gICAgbGluazogeyBzbHVnIH0sXHJcbiAgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8U3R5bGVkQnV0dG9uIGhhc01hcmdpbj17aGFzTWFyZ2lufSBpc0ZpbGxlZD17aXNGaWxsZWR9IGFjY2VudD17YWNjZW50fT5cclxuICAgICAgICB7Y2FwdGlvbn1cclxuICAgICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpc0ZpbGxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBoYXNNYXJnaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGFjY2VwdDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGNhcHRpb246ICcnLFxyXG4gICAgbGluazoge1xyXG4gICAgICBzbHVnOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBib3JkZXI6ICR7KHsgdGhlbWUsIGlzRmlsbGVkIH0pID0+IChpc0ZpbGxlZCA/ICcwJyA6IGAzcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3J9YCl9O1xyXG4gIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50IH0pID0+IChhY2NlbnQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3IpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCwgYWNjZW50IH0pID0+IChpc0ZpbGxlZCA/IChhY2NlbnQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3IpIDogJ3RyYW5zcGFyZW50Jyl9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCwgYWNjZW50IH0pID0+IChpc0ZpbGxlZCA/IHRoZW1lLmNvbG9ycy5idXR0b25UZXh0Q29sb3IgOiBhY2NlbnQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMuYnV0dG9uQ29sb3IpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkeyh7IGhhc01hcmdpbiB9KSA9PiAoaGFzTWFyZ2luID8gJzJyZW0nIDogJzAnKX07XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDElLCAtMTAlKTtcclxuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50IH0pID0+IChhY2NlbnQgPyB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmxpZ2h0ZXJCdXR0b25Db2xvcil9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgaXNGaWxsZWQsIGFjY2VudCB9KSA9PlxyXG4gICAgICBpc0ZpbGxlZCA/IChhY2NlbnQgPyB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLmxpZ2h0ZXJCdXR0b25Db2xvcikgOiAndHJhbnNwYXJlbnQnfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCwgYWNjZW50IH0pID0+XHJcbiAgICAgIGlzRmlsbGVkID8gdGhlbWUuY29sb3JzLmJ1dHRvblRleHRDb2xvciA6IGFjY2VudCA/IHRoZW1lLmNvbG9ycy5saWdodGVyQWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubGlnaHRlckJ1dHRvbkNvbG9yfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBGdW5jdGlvbmFsTGluayA9ICh7IGxpbms6IHsgbmFtZSwgc2x1ZywgbmV3VGFiIH0sIHNldElzTmF2T3BlbiB9KSA9PiB7XHJcbiAgaWYgKG5ld1RhYikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGEgaHJlZj17c2x1Z30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIHtuYW1lfVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfT57bmFtZX08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkZ1bmN0aW9uYWxMaW5rLnByb3BUeXBlcyA9IHtcclxuICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuZXdUYWI6IFByb3BUeXBlcy5ib29sLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgc2V0SXNOYXZPcGVuOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbkZ1bmN0aW9uYWxMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsaW5rOiB7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIHNsdWc6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbmFsTGluaztcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE5leHRJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJ3Byb3ZpZGVycy9BcHBQcm92aWRlcic7XHJcbmltcG9ydCB7IE5leHRJbWFnZVdyYXBwZXIsIFN0eWxlZE5leHRJbWFnZSB9IGZyb20gJy4vSW1hZ2Uuc3R5bGVzJztcclxuXHJcbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudERhcmtNb2RlIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICBpZiAoaW1hZ2UpIHtcclxuICAgIGNvbnN0IHsgYWx0ZXJuYXRpdmVUZXh0LCB1cmwsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlO1xyXG5cclxuICAgIGNvbnN0IGxvYWRlciA9ICh7IHNyYywgd2lkdGggfSkgPT4ge1xyXG4gICAgICBpZiAoc3JjID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNyd9JHtzcmN9P3c9JHt3aWR0aH1gO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TmV4dEltYWdlV3JhcHBlciBkYXJrPXtjdXJyZW50RGFya01vZGV9PlxyXG4gICAgICAgIDxTdHlsZWROZXh0SW1hZ2VcclxuICAgICAgICAgIGxvYWRlcj17bG9hZGVyfVxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgc3JjPXt1cmx9XHJcbiAgICAgICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dH1cclxuICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9OZXh0SW1hZ2VXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIHJldHVybiA8TmV4dEltYWdlIHNyYz1cIi9pbWdFcnJvci5zdmdcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0gLz47XHJcbiAgfVxyXG59O1xyXG5cclxuSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWx0ZXJuYXRpdmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfSksXHJcbn07XHJcblxyXG5JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW1hZ2U6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcclxuIiwiaW1wb3J0IE5leHRJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV4dEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmaWx0ZXI6ICR7KHsgZGFyayB9KSA9PiAoZGFyayA/IGBicmlnaHRuZXNzKDAuODUpYCA6IGBicmlnaHRuZXNzKDEpYCl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5leHRJbWFnZSA9IHN0eWxlZChOZXh0SW1hZ2UpYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IExpbmVIb3Jpem9udGFsV3JhcHBlciwgTGluZSB9IGZyb20gJy4vTGluZUhvcml6b250YWwuc3R5bGVzJztcclxuXHJcbmNvbnN0IExpbmVIb3Jpem9udGFsID0gKHsgY2hpbGRyZW4sIGxhcmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVIb3Jpem9udGFsV3JhcHBlciBkYXRhLXRlc3RpZD1cImxpbmUtaG9yaXpvbnRhbC13cmFwcGVyXCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPExpbmUgbGFyZ2U9e2xhcmdlfSBkYXRhLXRlc3RpZD1cImxpbmUtaG9yaXpvbnRhbFwiIC8+XHJcbiAgICA8L0xpbmVIb3Jpem9udGFsV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGluZUhvcml6b250YWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVIb3Jpem9udGFsO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lSG9yaXpvbnRhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi1oZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzAuOHJlbScgOiAnMC40cmVtJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBtYXJnaW4tdG9wOiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcyLjJyZW0nIDogJy44cmVtJyl9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IHsgTGluZVZlcnRpY2FsV3JhcHBlciwgTGluZSB9IGZyb20gJy4vTGluZVZlcnRpY2FsLnN0eWxlcyc7XHJcblxyXG5jb25zdCBMaW5lVmVydGljYWwgPSAoeyBjaGlsZHJlbiwgbGFyZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZVZlcnRpY2FsV3JhcHBlciBkYXRhLXRlc3RpZD1cImxpbmUtdmVydGljYWwtd3JhcHBlclwiPlxyXG4gICAgICA8TGluZSBsYXJnZT17bGFyZ2V9IGRhdGEtdGVzdGlkPVwibGluZS12ZXJ0aWNhbFwiIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluZVZlcnRpY2FsV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGluZVZlcnRpY2FsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lVmVydGljYWw7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVWZXJ0aWNhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi13aWR0aDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMC44cmVtJyA6ICcwLjRyZW0nKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIG1hcmdpbi1yaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMi4ycmVtJyA6ICcxLjVyZW0nKX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi1yaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMS44cmVtJyA6ICcxLjVyZW0nKX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXJyb3dMaW5rIGZyb20gJ0BhdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyIH0gZnJvbSAnLi9IZXJvQ291cnNlQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlQ29tcG9uZW50ID0gKHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgbGluazogeyBzbHVnIH0sXHJcbiAgICBsaW5rTmFtZSxcclxuICB9LFxyXG4gIGltYWdlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlcj5cclxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8QXJyb3dMaW5rIHNsdWc9e3NsdWd9IHRpdGxlPXtsaW5rTmFtZX0gLz5cclxuICAgIDwvSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9Db3Vyc2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGluazogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gICAgbGlua05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuSGVyb0NvdXJzZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgbGlua05hbWU6ICcnLFxyXG4gICAgbGluazoge1xyXG4gICAgICBzbHVnOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9Db3Vyc2VDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBtYXgtd2lkdGg6IDUwcmVtO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEhlcm9JbnN0cnVjdG9yV3JhcHBlciB9IGZyb20gJy4vSGVyb0luc3RydWN0b3JDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50ID0gKHsgZGF0YTogeyBoZWFkZXIsIGluc3RydWN0b3IsIGRlc2NyaXB0aW9uIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICAgICA8aDU+e2hlYWRlcn08L2g1PlxyXG4gICAgICA8aDQ+e2luc3RydWN0b3J9PC9oND5cclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvSGVyb0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGluc3RydWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBpbnN0cnVjdG9yOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9JbnN0cnVjdG9yV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgRnVuY3Rpb25hbExpbmsgZnJvbSAnQGF0b21zL0Z1bmN0aW9uYWxMaW5rL0Z1bmN0aW9uYWxMaW5rJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1XcmFwcGVyLCBCdWxsZXQgfSBmcm9tICcuL0xpc3RJdGVtLnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgTGlzdEl0ZW0gPSAoeyBsaW5rLCBzZXRJc05hdk9wZW4sIGhhc0xpbmtzLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVdyYXBwZXI+XHJcbiAgICAgIDxCdWxsZXQgLz5cclxuICAgICAge2hhc0xpbmtzID8gPEZ1bmN0aW9uYWxMaW5rIGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPiA6IGNoaWxkcmVufVxyXG4gICAgPC9MaXN0SXRlbVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcclxuICBsaW5rOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFzTGlua3M6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtV3JhcHBlciA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2TGlzdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1bGxldCA9IHN0eWxlZC5zcGFuYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDIycHg7XHJcbiAgbWluLWhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMTJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZVNtYWxsfSB7XHJcbiAgICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIG1pbi13aWR0aDogOXB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFBhZ2VUaWxlIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGUvUGFnZVRpbGUnO1xyXG5pbXBvcnQgeyBTZW1lc3RlciwgSGVhZCwgUm93LCBBbm5vdGF0aW9uIH0gZnJvbSAnLi9QcmljaW5nQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBQcmljaW5nQ29tcG9uZW50ID0gKHsgZGF0YTogeyB0aXRsZSwgc2VtZXN0ZXIsIHRhYmxlSGVhZCwgdGFibGVSb3dzLCBhbm5vdGF0aW9ucyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VUaWxlPlxyXG4gICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIHtzZW1lc3RlciAmJiA8U2VtZXN0ZXI+e3NlbWVzdGVyfTwvU2VtZXN0ZXI+fVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c3Bhbj57dGFibGVIZWFkLnJvd05hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPnt0YWJsZUhlYWQucm93Q29udGVudH08L3NwYW4+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge3RhYmxlUm93cy5tYXAoKHsgcm93TmFtZSwgcm93Q29udGVudCwgaWQgfSkgPT4gKFxyXG4gICAgICAgIDxSb3cga2V5PXtpZH0+XHJcbiAgICAgICAgICA8c3Bhbj57cm93TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57cm93Q29udGVudH08L3NwYW4+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICkpfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthbm5vdGF0aW9ucy5tYXAoKHsgYW5ub3RhdGlvbiwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgPEFubm90YXRpb24ga2V5PXtpZH0+e2Fubm90YXRpb259PC9Bbm5vdGF0aW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFnZVRpbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblByaWNpbmdDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlbWVzdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFibGVIZWFkOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgdGFibGVSb3dzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIGFubm90YXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuUHJpY2luZ0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgc2VtZXN0ZXI6ICcnLFxyXG4gICAgdGFibGVIZWFkOiB7XHJcbiAgICAgIHJvd05hbWU6ICcnLFxyXG4gICAgICByb3dDb250ZW50OiAnJyxcclxuICAgIH0sXHJcbiAgICB0YWJsZVJvd3M6IFtdLFxyXG4gICAgYW5ub3RhdGlvbnM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZW1lc3RlciA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xyXG4gIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrQmx1ZX07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkID0gc3R5bGVkKFJvdylgXHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0eWxlZE1hcmtkb3duIH0gZnJvbSAnLi9SaWNoVGV4dC5zdHlsZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IFJpY2hUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkTWFya2Rvd24gY2hpbGRyZW49e2NoaWxkcmVufSBza2lwSHRtbD17dHJ1ZX0gLz47XHJcbn07XHJcblxyXG5SaWNoVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dDtcclxuIiwiaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFya2Rvd24gPSBzdHlsZWQoTWFya2Rvd24pYFxyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5yaWNoVGV4dE1hcmdpblRvcH07XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICBoMyxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA5LjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDUuOXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG5cclxuICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkRm9vdGVyLFxyXG4gIEZvb3RlcldyYXBwZXIsXHJcbiAgQ29udGVudFdyYXBwZXIsXHJcbiAgSW5mb3JtYXRpb25XcmFwcGVyLFxyXG4gIFN0eWxlZFNjaG9vbEluZm8sXHJcbiAgTGluZSxcclxuICBJbWFnZXNXcmFwcGVyLFxyXG4gIEltYWdlV3JhcHBlcixcclxufSBmcm9tICcuL0Zvb3Rlci5zdHlsZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IGZvb3RlcjogeyBoZWFkZXIsIHNjaG9vbE5hbWUsIGZvb3RlckluZm8sIGZvb3RlckltYWdlcyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEZvb3Rlcj5cclxuICAgICAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgPGgzPntoZWFkZXJ9PC9oMz5cclxuICAgICAgICAgIDxTdHlsZWRTY2hvb2xJbmZvPntzY2hvb2xOYW1lfTwvU3R5bGVkU2Nob29sSW5mbz5cclxuICAgICAgICAgIDxJbmZvcm1hdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIHtmb290ZXJJbmZvLm1hcCgoeyBpZCwgY2FwdGlvbiwgaW5mbyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHAga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57Y2FwdGlvbn08L3NwYW4+IHtpbmZvfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0luZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lIC8+XHJcbiAgICAgICAgPEltYWdlc1dyYXBwZXI+XHJcbiAgICAgICAgICB7Zm9vdGVySW1hZ2VzLm1hcCgoZm9vdGVySW1hZ2UpID0+IChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciBrZXk9e2Zvb3RlckltYWdlLmlkfT5cclxuICAgICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2Zvb3RlckltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VzV3JhcHBlcj5cclxuICAgICAgPC9Gb290ZXJXcmFwcGVyPlxyXG4gICAgPC9TdHlsZWRGb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgZm9vdGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2Nob29sTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZvb3RlckluZm86IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICBmb290ZXJJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBoZWFkZXI6ICcnLFxyXG4gICAgc2Nob29sTmFtZTogJycsXHJcbiAgICBmb290ZXJJbmZvOiBbXSxcclxuICAgIGZvb3RlckltYWdlczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zdWJUZXh0fTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueHNWfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlOiAnY29udGVudCBsaW5lIGltYWdlcyc7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGNvbHVtbi1nYXA6IDVyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLXdpZHRoOiAzMHZ3O1xyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNjaG9vbEluZm8gPSBzdHlsZWQucGBcclxuICB3aWR0aDogMjRyZW07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuc3BhbmBcclxuICBncmlkLWFyZWE6IGxpbmU7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDAuNnJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiBpbWFnZXM7XHJcbiAgbWluLXdpZHRoOiAzMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNsYW1wKDl2dywgMTAwJSwgMTJyZW0pO1xyXG4gIG1heC13aWR0aDogMzByZW07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgd2lkdGg6IGNsYW1wKDE0dncsIDEwMCUsIDI0cmVtKTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICB3aWR0aDogMjByZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAyNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1pbi13aWR0aDogMjByZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1pbi13aWR0aDogMzByZW07XHJcbiAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICdwcm92aWRlcnMvQXBwUHJvdmlkZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVhZGVyLCBMb2dvLCBNZW51QnV0dG9uLCBTdHlsZWRTcGFuLCBMb2FkZXIsIEJ1dHRvbnNXcmFwcGVyLCBEYXJrTW9kZUJ1dHRvbiB9IGZyb20gJy4vTmF2QmFyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBsb2dvIH0pID0+IHtcclxuICBjb25zdCB7IGlzTG9hZGluZywgaXNOYXZPcGVuLCBzZXRJc05hdk9wZW4sIGhhbmRsZURhcmtNb2RlQ2hhbmdlLCBjdXJyZW50RGFya01vZGUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIGlzTG9hZGluZz17aXNMb2FkaW5nfSBpc05hdk9wZW49e2lzTmF2T3Blbn0+XHJcbiAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkZXJcIiBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICA8TG9nbyBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gLz5cclxuICAgICAgICA8L0xvZ28+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPEJ1dHRvbnNXcmFwcGVyPlxyXG4gICAgICAgIDxEYXJrTW9kZUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEYXJrTW9kZUNoYW5nZX0gZGFyaz17Y3VycmVudERhcmtNb2RlfSAvPlxyXG4gICAgICAgIDxNZW51QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9IGlzTmF2T3Blbj17aXNOYXZPcGVufSBkYXRhLXRlc3RpZD1cIm1lbnUtYnV0dG9uXCI+XHJcbiAgICAgICAgICA8U3R5bGVkU3BhbiBzaG9ydCBpc05hdk9wZW49e2lzTmF2T3Blbn0gLz5cclxuICAgICAgICAgIDxTdHlsZWRTcGFuIGlzTmF2T3Blbj17aXNOYXZPcGVufSAvPlxyXG4gICAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgICAgPC9CdXR0b25zV3JhcHBlcj5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGxvZ286IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIHBhZGRpbmc6IDFyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICB6LWluZGV4OiAzMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSwgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyBgMXJlbSAke3RoZW1lLnBhZGRpbmcuc31gIDogYDFyZW0gJHt0aGVtZS5wYWRkaW5nLm19YCl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXRMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogMXJlbSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAycmVtICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxyXG4gIHdpZHRoOiAxOXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA2cmVtO1xyXG4gIGhlaWdodDogJHsoeyBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICc2cmVtJyA6ICd1bnNldCcpfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gYHRyYW5zbGF0ZSgyJSwgLTYlKWAgOiBgdHJhbnNsYXRlKDIlLCAtMTAlKWApfTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLW91dDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46ICR7KHsgaXNOYXZPcGVuLCBzaG9ydCB9KSA9PiAoc2hvcnQgJiYgIWlzTmF2T3BlbiA/ICdyaWdodCcgOiAnY2VudGVyJyl9O1xyXG4gIHRyYW5zZm9ybTogJHsoeyBzaG9ydCwgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyAnc2NhbGVYKDEpJyA6IHNob3J0ID8gJ3NjYWxlWCgwLjUpJyA6ICdzY2FsZVgoMSknKX07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRyYW5zZm9ybTogJHsoeyBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICd0cmFuc2xhdGVZKDIuNXJlbSkgcm90YXRlKDQ1ZGVnKScgOiAnJyl9O1xyXG4gIH1cclxuXHJcbiAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJ3RyYW5zbGF0ZVkoLTIuNXJlbSkgcm90YXRlKC00NWRlZyknIDogJycpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDAuMnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IC0wLjJyZW07XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBpc0xvYWRpbmcgfSkgPT4gKGlzTG9hZGluZyA/ICd0cmFuc3BhcmVudCcgOiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IpfTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrTW9kZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgbWluLWhlaWdodDogNXJlbTtcclxuICBtaW4td2lkdGg6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIlLCAtNyUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHRlckFjY2VudENvbG9yfTtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBkYXJrIH0pID0+IChkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0ZXJBY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSxcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGRhcmsgfSkgPT4gKGRhcmsgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKX07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDJTNGeG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyclM0YlM0UlM0MhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCclM0UlM0Nzdmcgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgMCA4NDYgODQ2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbDpzcGFjZT0ncHJlc2VydmUnIHhtbG5zOnNlcmlmPSdodHRwOi8vd3d3LnNlcmlmLmNvbS8nIHN0eWxlPSdmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsnJTNFJTNDZyBpZD0nc3VuJyUzRSUzQ2NpcmNsZSBjeD0nNDIyLjEyJyBjeT0nNDIyLjQ1Micgcj0nMTg4LjY1Nicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNNDYzLjM2Niw0My42M2MwLC0yMi43NjQgLTE4LjQ4MiwtNDEuMjQ1IC00MS4yNDYsLTQxLjI0NWMtMjIuNzY0LC0wIC00MS4yNDUsMTguNDgxIC00MS4yNDUsNDEuMjQ1bC0wLDg2LjI0MWMtMCwyMi43NjUgMTguNDgxLDQxLjI0NiA0MS4yNDUsNDEuMjQ2YzIyLjc2NCwwIDQxLjI0NiwtMTguNDgxIDQxLjI0NiwtNDEuMjQ2bDAsLTg2LjI0MVonIHN0eWxlPSdmaWxsOiUyMzBiMWIzMDsnLyUzRSUzQ3BhdGggZD0nTTQ2My4zNjYsNzE0Ljc0NWMwLC0yMi43NjQgLTE4LjQ4MiwtNDEuMjQ1IC00MS4yNDYsLTQxLjI0NWMtMjIuNzY0LC0wIC00MS4yNDUsMTguNDgxIC00MS4yNDUsNDEuMjQ1bC0wLDg2LjI0MWMtMCwyMi43NjUgMTguNDgxLDQxLjI0NiA0MS4yNDUsNDEuMjQ2YzIyLjc2NCwwIDQxLjI0NiwtMTguNDgxIDQxLjI0NiwtNDEuMjQ2bDAsLTg2LjI0MVonIHN0eWxlPSdmaWxsOiUyMzBiMWIzMDsnLyUzRSUzQ3BhdGggZD0nTTgwMC43OTgsNDYzLjY5N2MyMi43NjQsMCA0MS4yNDYsLTE4LjQ4MSA0MS4yNDYsLTQxLjI0NWMwLC0yMi43NjQgLTE4LjQ4MiwtNDEuMjQ2IC00MS4yNDYsLTQxLjI0NmwtODYuMjQxLC0wYy0yMi43NjQsLTAgLTQxLjI0NSwxOC40ODIgLTQxLjI0NSw0MS4yNDZjLTAsMjIuNzY0IDE4LjQ4MSw0MS4yNDUgNDEuMjQ1LDQxLjI0NWw4Ni4yNDEsMFonIHN0eWxlPSdmaWxsOiUyMzBiMWIzMDsnLyUzRSUzQ3BhdGggZD0nTTEyOS42ODMsNDYzLjY5N2MyMi43NjQsMCA0MS4yNDYsLTE4LjQ4MSA0MS4yNDYsLTQxLjI0NWMwLC0yMi43NjQgLTE4LjQ4MiwtNDEuMjQ2IC00MS4yNDYsLTQxLjI0NmwtODYuMjQxLC0wYy0yMi43NjQsLTAgLTQxLjI0NSwxOC40ODIgLTQxLjI0NSw0MS4yNDZjLTAsMjIuNzY0IDE4LjQ4MSw0MS4yNDUgNDEuMjQ1LDQxLjI0NWw4Ni4yNDEsMFonIHN0eWxlPSdmaWxsOiUyMzBiMWIzMDsnLyUzRSUzQ3BhdGggZD0nTTcxOS4wNTEsMTgzLjcwOGMxNi4wOTcsLTE2LjA5NyAxNi4wOTcsLTQyLjIzNCAwLC01OC4zMzFjLTE2LjA5NiwtMTYuMDk2IC00Mi4yMzMsLTE2LjA5NiAtNTguMzMsMGwtNjAuOTgyLDYwLjk4MmMtMTYuMDk2LDE2LjA5NyAtMTYuMDk2LDQyLjIzNCAwLDU4LjMzYzE2LjA5NywxNi4wOTcgNDIuMjM0LDE2LjA5NyA1OC4zMzEsMGw2MC45ODEsLTYwLjk4MVonIHN0eWxlPSdmaWxsOiUyMzBiMWIzMDsnLyUzRSUzQ3BhdGggZD0nTTI0NC41MDEsNjU4LjI1OGMxNi4wOTcsLTE2LjA5NyAxNi4wOTcsLTQyLjIzNCAwLC01OC4zMzFjLTE2LjA5NiwtMTYuMDk2IC00Mi4yMzMsLTE2LjA5NiAtNTguMzMsMGwtNjAuOTgyLDYwLjk4MmMtMTYuMDk2LDE2LjA5NyAtMTYuMDk2LDQyLjIzNCAwLDU4LjMzYzE2LjA5NywxNi4wOTcgNDIuMjM0LDE2LjA5NyA1OC4zMzEsMGw2MC45ODEsLTYwLjk4MVonIHN0eWxlPSdmaWxsOiUyMzBiMWIzMDsnLyUzRSUzQ3BhdGggZD0nTTE4My41MiwxMjUuMzc3Yy0xNi4wOTcsLTE2LjA5NiAtNDIuMjM0LC0xNi4wOTYgLTU4LjMzMSwwYy0xNi4wOTYsMTYuMDk3IC0xNi4wOTYsNDIuMjM0IDAsNTguMzMxbDYwLjk4Miw2MC45ODFjMTYuMDk3LDE2LjA5NyA0Mi4yMzQsMTYuMDk3IDU4LjMzLDBjMTYuMDk3LC0xNi4wOTYgMTYuMDk3LC00Mi4yMzMgMCwtNTguMzNsLTYwLjk4MSwtNjAuOTgyWicgc3R5bGU9J2ZpbGw6JTIzMGIxYjMwOycvJTNFJTNDcGF0aCBkPSdNNjU4LjA3LDU5OS45MjdjLTE2LjA5NywtMTYuMDk2IC00Mi4yMzQsLTE2LjA5NiAtNTguMzMxLDBjLTE2LjA5NiwxNi4wOTcgLTE2LjA5Niw0Mi4yMzQgMCw1OC4zMzFsNjAuOTgyLDYwLjk4MWMxNi4wOTcsMTYuMDk3IDQyLjIzNCwxNi4wOTcgNTguMzMsMGMxNi4wOTcsLTE2LjA5NiAxNi4wOTcsLTQyLjIzMyAwLC01OC4zM2wtNjAuOTgxLC02MC45ODJaJyBzdHlsZT0nZmlsbDolMjMwYjFiMzA7Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWluLWhlaWdodDogMy44cmVtO1xyXG4gICAgbWluLXdpZHRoOiAzLjhyZW07XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBib3JkZXItcmFkaXVzOiAkeyh7IGRhcmsgfSkgPT4gKGRhcmsgPyAnNTAlIDAgMCA1MCUnIDogJzAgNTAlIDUwJSAwJyl9O1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IGRhcmsgfSkgPT4gKGRhcmsgPyAndHJhbnNsYXRlKDEwMCUsIC01MCUpJyA6ICd0cmFuc2xhdGUoLTc3JSwgLTc1JSknKX07XHJcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xyXG4gICAgbWluLXdpZHRoOiA0cmVtO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0Btb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJ3Byb3ZpZGVycy9BcHBQcm92aWRlcic7XHJcbmltcG9ydCB7IFN0eWxlZE5hdmlnYXRpb24sIENvbnRlbnRXcmFwcGVyIH0gZnJvbSAnLi9OYXZpZ2F0aW9uLnN0eWxlcyc7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgbmF2TGlua3MgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0SXNOYXZPcGVuIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZE5hdmlnYXRpb24+XHJcbiAgICAgIHtuYXZMaW5rcy5tYXAoKHsgZ3JvdXBOYW1lLCBpZCwgbGlua3MgfSkgPT4gKFxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlciBrZXk9e2lkfT5cclxuICAgICAgICAgIDxMaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgICAgPGgzPntncm91cE5hbWV9PC9oMz5cclxuICAgICAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gaGFzTGlua3Mga2V5PXtsaW5rLmlkfSBsaW5rPXtsaW5rfSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TdHlsZWROYXZpZ2F0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcclxuICBuYXZMaW5rczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBncm91cE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBsaW5rczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbk5hdmlnYXRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIG5hdkxpbmtzOiBbXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTmFtZTogJycsXHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICBsaW5rczogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWROYXZpZ2F0aW9uID0gc3R5bGVkLm5hdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MHJlbSwgYXV0bykpO1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnh9O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0TGFyZ2V9IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnNWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxJSwgLTclKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogNDByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmID4gZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2TGlzdH07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25XcmFwcGVyLCBDb250ZW50V3JhcHBlciwgSW1hZ2VXcmFwcGVyLCBTZWN0aW9uRGFya1dyYXBwZXIgfSBmcm9tICcuL0Fib3V0LnN0eWxlcyc7XHJcblxyXG5jb25zdCBBYm91dCA9ICh7XHJcbiAgZGF0YTogeyBzZWNPbmVEZXNjcmlwdGlvbiwgc2VjT25lVGl0bGUsIHNlY09uZUltYWdlLCBzZWNUd29EZXNjcmlwdGlvbiwgc2VjVHdvVGl0bGUsIHNlY1RocmVlVGl0bGUsIHNlY1RocmVlSW1hZ2UsIHNlY1RocmVlRGVzY3JpcHRpb24gfSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VjdGlvbldyYXBwZXI+XHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgICAgPGgxPntzZWNPbmVUaXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8cD57c2VjT25lRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17c2VjT25lSW1hZ2V9IC8+XHJcbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgIDwvU2VjdGlvbldyYXBwZXI+XHJcbiAgICAgIDxTZWN0aW9uRGFya1dyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57c2VjVHdvVGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8cD57c2VjVHdvRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L1NlY3Rpb25EYXJrV3JhcHBlcj5cclxuICAgICAgPFNlY3Rpb25XcmFwcGVyPlxyXG4gICAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e3NlY1RocmVlSW1hZ2V9IC8+XHJcbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyIHJldmVyc2U+XHJcbiAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICA8aDE+e3NlY1RocmVlVGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgPHA+e3NlY1RocmVlRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgIDwvU2VjdGlvbldyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQWJvdXQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBzZWNPbmVUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlY09uZURlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VjT25lSW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWNUd29UaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlY1R3b0Rlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VjVGhyZWVUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlY1RocmVlRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWNUaHJlZUltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5BYm91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgLy8gc2VjT25lVGl0bGU6ICcnLFxyXG4gICAgc2VjT25lRGVzY3JpcHRpb246ICcnLFxyXG4gICAgc2VjVHdvVGl0bGU6ICcnLFxyXG4gICAgc2VjVHdvRGVzY3JpcHRpb246ICcnLFxyXG4gICAgc2VjVGhyZWVUaXRsZTogJycsXHJcbiAgICBzZWNUaHJlZURlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kV2hpdGV9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGFya1dyYXBwZXIgPSBzdHlsZWQoU2VjdGlvbldyYXBwZXIpYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcExhcmdlfSB7XHJcbiAgICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgICAgbWF4LXdpZHRoOiA2MHJlbTtcclxuICAgICAgbWFyZ2luOiA1cmVtIDAgMCAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDYwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46ICR7KHsgcmV2ZXJzZSB9KSA9PiAocmV2ZXJzZSA/IGAwIDAgMCA1dndgIDogYDAgNXZ3IDAgMGApfTtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wTGFyZ2V9IHtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHlTbWFsbH07XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFdpZGV9IHtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICB3aWR0aDogNjByZW07XHJcbiAgICBvcmRlcjogMjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnQG1vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dCc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgUGFnZVRpbGUgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZSc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRUaXRsZSxcclxuICBJbmZvU2VjdGlvbixcclxuICBJbmZvV3JhcHBlcixcclxuICBJbmZvQ29tcG9uZW50LFxyXG4gIFN0eWxlZFNwYW4sXHJcbiAgU3R5bGVkTGlzdCxcclxuICBTdHlsZWRJdGVtLFxyXG4gIFBhZ2VUaWxlV3JhcHBlcixcclxuICBTdHlsZWRUaWxlSGVhZGVyLFxyXG59IGZyb20gJy4vQ2lzY29Db3Vyc2Uuc3R5bGVzJztcclxuXHJcbmNvbnN0IENpc2NvQ291cnNlID0gKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXI6IHsgdGl0bGUsIGltYWdlIH0sXHJcbiAgICByaWNoVGV4dCxcclxuICAgIGNvdXJzZUluZm8sXHJcbiAgICBsaXN0VGl0bGUsXHJcbiAgICBsaXN0Q29tcG9uZW50LFxyXG4gIH0sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgaW1hZ2U9e2ltYWdlfT5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBjb2x1bW4+XHJcbiAgICAgICAge3JpY2hUZXh0Lm1hcCgoeyB0aXRsZSwgY29udGVudCwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgPFBhZ2VTZWN0aW9uIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgIDxSaWNoVGV4dD57Y29udGVudH08L1JpY2hUZXh0PlxyXG4gICAgICAgICAgPC9QYWdlU2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgICAgPEluZm9TZWN0aW9uPlxyXG4gICAgICAgIDxJbmZvV3JhcHBlcj5cclxuICAgICAgICAgIHtjb3Vyc2VJbmZvLm1hcCgoeyBjYXB0aW9uLCBpbmZvLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxJbmZvQ29tcG9uZW50IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRTcGFuPntjYXB0aW9ufTwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57aW5mb308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvSW5mb0NvbXBvbmVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW5mb1dyYXBwZXI+XHJcbiAgICAgIDwvSW5mb1NlY3Rpb24+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBzaG9ydCB3aWRlPlxyXG4gICAgICAgIDxQYWdlU2VjdGlvbiB3aWRlPlxyXG4gICAgICAgICAgPExpbmVIb3Jpem9udGFsIGxhcmdlPlxyXG4gICAgICAgICAgICA8aDE+e2xpc3RUaXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgIDxQYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIHtsaXN0Q29tcG9uZW50Lm1hcCgoeyB0aXRsZSwgbGlzdEl0ZW1zLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFBhZ2VUaWxlIHdpZGUga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGlsZUhlYWRlcj57dGl0bGV9PC9TdHlsZWRUaWxlSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkTGlzdD5cclxuICAgICAgICAgICAgICAgICAge2xpc3RJdGVtcy5tYXAoKHsgaXRlbSwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRJdGVtPntpdGVtfTwvU3R5bGVkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkTGlzdD5cclxuICAgICAgICAgICAgICA8L1BhZ2VUaWxlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvUGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQ2lzY29Db3Vyc2UucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG4gICAgcmljaFRleHQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgY291cnNlSW5mbzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXN0Q29tcG9uZW50OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuQ2lzY29Db3Vyc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICB9LFxyXG4gICAgcmljaFRleHQ6IFtdLFxyXG4gICAgY291cnNlSW5mbzogW10sXHJcbiAgICBsaXN0VGl0bGU6ICcnLFxyXG4gICAgbGlzdENvbXBvbmVudDogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpc2NvQ291cnNlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyTW9iaWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZ2VTZWN0aW9uV2lkdGh9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvQ29tcG9uZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZyZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRpbGVIZWFkZXIgPSBzdHlsZWQuaDRgXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWF4LXdpZHRoOiA2NyU7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZVNtYWxsfSB7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC51bGBcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuXHJcbiAgbGkge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQuc3BhbmBcclxuICBpbmxpbmUtc2l6ZTogNDByZW07XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgaW5saW5lLXNpemU6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgeyBDb250ZW50V3JhcHBlciwgQWRkcmVzc1dyYXBwZXIsIEluZm9ybWF0aW9uV3JhcHBlciB9IGZyb20gJy4vQ29udGFjdC5zdHlsZXMnO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICh7IGRhdGE6IHsgdGl0bGUsIHNjaG9vbE5hbWUsIGNvbnRhY3RJbmZvIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxBZGRyZXNzV3JhcHBlcj5cclxuICAgICAgICAgIDxoND57c2Nob29sTmFtZX08L2g0PlxyXG4gICAgICAgIDwvQWRkcmVzc1dyYXBwZXI+XHJcbiAgICAgICAgPEluZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgICAgIHtjb250YWN0SW5mby5tYXAoKHsgaWQsIGNhcHRpb24sIGluZm8gfSkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8c3Bhbj57Y2FwdGlvbn08L3NwYW4+IHtpbmZvfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0luZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbnRhY3QucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzY2hvb2xOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGFjdEluZm86IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5Db250YWN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBhZGRyZXNzOiAnJyxcclxuICAgIHNjaG9vbE5hbWU6ICcnLFxyXG4gICAgY29udGFjdEluZm86IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZExpZ2h0fTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ307XHJcbiAgd2lkdGg6IGNsYW1wKCR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlV2lkdGh9LCAxMDAlLCA4MHJlbSk7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkcmVzc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAyLjVyZW0gMCA1cmVtIDA7XHJcblxyXG4gIHAsXHJcbiAgc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgbWFyZ2luOiAycmVtIDAgMCAwO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGF0YVNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYXRvbXMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVyb0FjYWRlbXlXcmFwcGVyLCBIZWFkZXJXcmFwcGVyLCBEZXNjcmlwdGlvbldyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vSGVyb0FjYWRlbXkuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9BY2FkZW15ID0gKHsgZGF0YTogeyB0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbiwgaW1hZ2UgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQWNhZGVteVdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXJXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICAgICAgPERlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxCdXR0b24gZGF0YT17YnV0dG9ufSAvPlxyXG4gICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgIDwvSGVyb0FjYWRlbXlXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQWNhZGVteS5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogZGF0YVNoYXBlLFxyXG59O1xyXG5cclxuSGVyb0FjYWRlbXkuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0FjYWRlbXk7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9BY2FkZW15V3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgZ3JpZC1yb3c6IDEvMjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8xO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgNjByZW0pO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kTGlnaHR9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofSk7XHJcbiAgICBncmlkLXJvdzogMy80O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrR3JheTtcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofSk7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZXJvQ291cnNlQ29tcG9uZW50IGZyb20gJ0Btb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC9IZXJvQ291cnNlQ29tcG9uZW50JztcclxuaW1wb3J0IExpbmVIb3Jpem9udGFsIGZyb20gJ0BhdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbCc7XHJcbmltcG9ydCB7IEhlcm9Db3Vyc2VXcmFwcGVyLCBDb250ZW50V3JhcHBlciB9IGZyb20gJy4vSGVyb0NvdXJzZXMuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VzID0gKHsgZGF0YTogeyB0aXRsZSwgaGVyb0NvdXJzZXMsIGFycm93SW1hZ2UgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlV3JhcHBlcj5cclxuICAgICAgPExpbmVIb3Jpem9udGFsIGxhcmdlPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIHtoZXJvQ291cnNlcy5tYXAoKGNvdXJzZURhdGEpID0+IChcclxuICAgICAgICAgIDxIZXJvQ291cnNlQ29tcG9uZW50IGtleT17Y291cnNlRGF0YS5pZH0gZGF0YT17Y291cnNlRGF0YX0gaW1hZ2U9e2Fycm93SW1hZ2V9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L0hlcm9Db3Vyc2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQ291cnNlcy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGFycm93SW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoZXJvQ291cnNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvQ291cnNlcy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVyb0NvdXJzZXM6IFtdLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlcztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0NvdXJzZVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwcmVtLCBhdXRvKSk7XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICAgIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVyb0luc3RydWN0b3JDb21wb25lbnQgZnJvbSAnQG1vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9JbnN0cnVjdG9yc1dyYXBwZXIgfSBmcm9tICcuL0hlcm9JbnN0cnVjdG9ycy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0luc3RydWN0b3JzID0gKHsgZGF0YTogeyBpbnN0cnVjdG9yQ29tcG9uZW50cyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9JbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgICAgIHtpbnN0cnVjdG9yQ29tcG9uZW50cy5tYXAoKGluc3RydWN0b3JEYXRhKSA9PiAoXHJcbiAgICAgICAgPEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50IGtleT17aW5zdHJ1Y3RvckRhdGEuaWR9IGRhdGE9e2luc3RydWN0b3JEYXRhfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvSGVyb0luc3RydWN0b3JzV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JzLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaW5zdHJ1Y3RvckNvbXBvbmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvSW5zdHJ1Y3RvcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGluc3RydWN0b3JDb21wb25lbnRzOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGF0b21zL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IEhlcm9QcmljaW5nV3JhcHBlciwgRGVzY3JpcHRpb25XcmFwcGVyIH0gZnJvbSAnLi9IZXJvUHJpY2luZy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb1ByaWNpbmcgPSAoeyBkYXRhOiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb1ByaWNpbmdXcmFwcGVyPlxyXG4gICAgICA8TGluZUhvcml6b250YWw+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICA8L0xpbmVIb3Jpem9udGFsPlxyXG4gICAgICA8RGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxCdXR0b24gZGF0YT17YnV0dG9ufSBhY2NlbnQgLz5cclxuICAgICAgPC9EZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICA8L0hlcm9QcmljaW5nV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1ByaWNpbmcucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvUHJpY2luZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvUHJpY2luZztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb1ByaWNpbmdXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIHdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gICAgbWFyZ2luOiAwIDVyZW0gMCAwO1xyXG4gICAgd2lkdGg6IDM5cmVtO1xyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgICAgbWFyZ2luOiAwIDAgNHJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDRyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdG9tcy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZXJvV3JhcHBlciwgQ29udGVudFdyYXBwZXIsIEJ1dHRvbldyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vSGVyby5zdHlsZXMnO1xyXG5pbXBvcnQgeyBkYXRhU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgSGVybyA9ICh7IGRhdGE6IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b25zLCBpbWFnZSB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9XcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoKGJ1dHRvbkRhdGEpID0+IChcclxuICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2J1dHRvbkRhdGEuaWR9IGRhdGE9e2J1dHRvbkRhdGF9IGhhc01hcmdpbiAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgPC9IZXJvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyby5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogZGF0YVNoYXBlLFxyXG59O1xyXG5cclxuSGVyby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgYnV0dG9uczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRXaGl0ZX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmhlYWRlcn07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGgxIHtcclxuICAgIG1heC13aWR0aDogNDByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFdpZGV9IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTB2bWluO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyJztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ0Btb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQnO1xyXG5pbXBvcnQgUGFnZVRpbGVXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGVXcmFwcGVyL1BhZ2VUaWxlV3JhcHBlcic7XHJcbmltcG9ydCBQYWdlVGlsZSBmcm9tICdAdGVtcGxhdGVzL1BhZ2VUaWxlL1BhZ2VUaWxlJztcclxuaW1wb3J0IEFycm93TGluayBmcm9tICdAYXRvbXMvQXJyb3dMaW5rL0Fycm93TGluayc7XHJcbmltcG9ydCB7IFN0eWxlZFRpdGxlLCBTdHlsZWRTcGFuIH0gZnJvbSAnLi9PZmZlcnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IE9mZmVydCA9ICh7XHJcbiAgZGF0YToge1xyXG4gICAgc2VjdGlvbkhlYWRlcjogeyB0aXRsZSwgaW1hZ2UgfSxcclxuICAgIG9mZmVydENvbXBvbmVudHMsXHJcbiAgICBhcnJvd0ltYWdlLFxyXG4gIH0sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgaW1hZ2U9e2ltYWdlfSBsb25nVGV4dD5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBzaG9ydCBjb2x1bW4+XHJcbiAgICAgICAge29mZmVydENvbXBvbmVudHMubWFwKCh7IHRpdGxlLCBjb250ZW50LCBvZmZlcnRDb3Vyc2VzLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICA8UGFnZVNlY3Rpb24ga2V5PXtpZH0+XHJcbiAgICAgICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPnt0aXRsZX08L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgPFJpY2hUZXh0Pntjb250ZW50fTwvUmljaFRleHQ+XHJcbiAgICAgICAgICAgIDxQYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAge29mZmVydENvdXJzZXMubWFwKCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlua05hbWUsIGxpbms6IHsgc2x1ZyB9LCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UGFnZVRpbGUga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+e2Rlc2NyaXB0aW9ufTwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPEFycm93TGluayBhY2NlbnRlZCBzbHVnPXtzbHVnfSB0aXRsZT17bGlua05hbWV9IGltYWdlPXthcnJvd0ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlVGlsZT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9QYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk9mZmVydC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHNlY3Rpb25IZWFkZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG4gICAgb2ZmZXJ0Q29tcG9uZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBhcnJvd0ltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5PZmZlcnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgfSxcclxuICAgIG9mZmVydENvbXBvbmVudHM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlcnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJNb2JpbGV9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keVNtYWxsfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ0Btb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQnO1xyXG5pbXBvcnQgUGFnZVRpbGVXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGVXcmFwcGVyL1BhZ2VUaWxlV3JhcHBlcic7XHJcbmltcG9ydCBQcmljaW5nQ29tcG9uZW50IGZyb20gJ0Btb2xlY3VsZXMvUHJpY2luZ0NvbXBvbmVudC9QcmljaW5nQ29tcG9uZW50JztcclxuXHJcbmNvbnN0IFByaWNpbmcgPSAoeyBkYXRhOiB7IHRpdGxlLCBjb250ZW50LCBwcmljaW5nQ29tcG9uZW50cyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8UGFnZVNlY3Rpb24+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8UmljaFRleHQ+e2NvbnRlbnR9PC9SaWNoVGV4dD5cclxuICAgICAgICA8UGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgICAge3ByaWNpbmdDb21wb25lbnRzLm1hcCgocHJpY2luZ0NvbXBvbmVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgPFByaWNpbmdDb21wb25lbnQga2V5PXtpZH0gZGF0YT17cHJpY2luZ0NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgPC9QYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuUHJpY2luZy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHByaWNpbmdDb21wb25lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuUHJpY2luZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBwcmljaW5nQ29tcG9uZW50czogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICdAbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0JztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uJztcclxuXHJcbmNvbnN0IFJlZ3VsYXRpb25zID0gKHsgZGF0YTogeyB0aXRsZSwgY29udGVudCB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8UGFnZVNlY3Rpb24+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8UmljaFRleHQ+e2NvbnRlbnR9PC9SaWNoVGV4dD5cclxuICAgICAgPC9QYWdlU2VjdGlvbj5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblJlZ3VsYXRpb25zLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5SZWd1bGF0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ3VsYXRpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgeyBDb250ZW50V3JhcHBlciB9IGZyb20gJy4vUm9kby5zdHlsZXMnO1xyXG5cclxuY29uc3QgUm9kbyA9ICh7IGRhdGE6IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Sb2RvLnByb3BUeXBlcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9kbztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRMaWdodH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIHdpZHRoOiBjbGFtcCgkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofSwgMTAwJSwgODByZW0pO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVybyBmcm9tICdAc2VjdGlvbnMvSGVyby9IZXJvJztcclxuaW1wb3J0IEhlcm9JbnN0cnVjdG9ycyBmcm9tICdAc2VjdGlvbnMvSGVyb0luc3RydWN0b3JzL0hlcm9JbnN0cnVjdG9ycyc7XHJcbmltcG9ydCBIZXJvQ291cnNlcyBmcm9tICdAc2VjdGlvbnMvSGVyb0NvdXJzZXMvSGVyb0NvdXJzZXMnO1xyXG5pbXBvcnQgSGVyb1ByaWNpbmcgZnJvbSAnQHNlY3Rpb25zL0hlcm9QcmljaW5nL0hlcm9QcmljaW5nJztcclxuaW1wb3J0IEhlcm9BY2FkZW15IGZyb20gJ0BzZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteSc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJ0BzZWN0aW9ucy9Db250YWN0L0NvbnRhY3QnO1xyXG5pbXBvcnQgUmVndWxhdGlvbnMgZnJvbSAnQHNlY3Rpb25zL1JlZ3VsYXRpb25zL1JlZ3VsYXRpb25zJztcclxuaW1wb3J0IFByaWNpbmcgZnJvbSAnQHNlY3Rpb25zL1ByaWNpbmcvUHJpY2luZyc7XHJcbmltcG9ydCBPZmZlcnQgZnJvbSAnQHNlY3Rpb25zL09mZmVydC9PZmZlcnQnO1xyXG5pbXBvcnQgQ2lzY29Db3Vyc2UgZnJvbSAnQHNlY3Rpb25zL0Npc2NvQ291cnNlL0Npc2NvQ291cnNlJztcclxuaW1wb3J0IEFib3V0IGZyb20gJ0BzZWN0aW9ucy9BYm91dC9BYm91dCc7XHJcbmltcG9ydCBSb2RvIGZyb20gJ0BzZWN0aW9ucy9Sb2RvL1JvZG8nO1xyXG5cclxuLy8gTWFwIFN0cmFwaSBzZWN0aW9ucyB0byBzZWN0aW9uIGNvbXBvbmVudHNcclxuY29uc3Qgc2VjdGlvbkNvbXBvbmVudHMgPSB7XHJcbiAgJ3NlY3Rpb25zLmhlcm8nOiBIZXJvLFxyXG4gICdzZWN0aW9ucy5oZXJvLWluc3RydWN0b3JzJzogSGVyb0luc3RydWN0b3JzLFxyXG4gICdzZWN0aW9ucy5oZXJvLWNvdXJzZXMnOiBIZXJvQ291cnNlcyxcclxuICAnc2VjdGlvbnMuaGVyby1wcmljaW5nJzogSGVyb1ByaWNpbmcsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tYWNhZGVteSc6IEhlcm9BY2FkZW15LFxyXG4gICdzZWN0aW9ucy5jb250YWN0JzogQ29udGFjdCxcclxuICAnc2VjdGlvbnMucmVndWxhdGlvbnMnOiBSZWd1bGF0aW9ucyxcclxuICAnc2VjdGlvbnMucHJpY2luZyc6IFByaWNpbmcsXHJcbiAgJ3NlY3Rpb25zLm9mZmVydCc6IE9mZmVydCxcclxuICAnc2VjdGlvbnMuY2lzY28tY291cnNlJzogQ2lzY29Db3Vyc2UsXHJcbiAgJ3NlY3Rpb25zLmFib3V0JzogQWJvdXQsXHJcbiAgJ3NlY3Rpb25zLnJvZG8nOiBSb2RvLFxyXG59O1xyXG5cclxuLy8gRGlzcGxheSBhIHNlY3Rpb24gaW5kaXZpZHVhbGx5XHJcbmNvbnN0IFNlY3Rpb24gPSAoeyBzZWN0aW9uRGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgU2VjdGlvbkNvbXBvbmVudCA9IHNlY3Rpb25Db21wb25lbnRzW3NlY3Rpb25EYXRhLl9fY29tcG9uZW50XTtcclxuXHJcbiAgaWYgKCFTZWN0aW9uQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiA8U2VjdGlvbkNvbXBvbmVudCBkYXRhPXtzZWN0aW9uRGF0YX0gLz47XHJcbn07XHJcblxyXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIHNlY3Rpb25zXHJcbmNvbnN0IFNlY3Rpb25zID0gKHsgc2VjdGlvbnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgPFNlY3Rpb24gc2VjdGlvbkRhdGE9e3NlY3Rpb259IGtleT17YCR7c2VjdGlvbi5fX2NvbXBvbmVudH0ke3NlY3Rpb24uaWR9YH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgc2VjdGlvbkRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblNlY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblNlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHNlY3Rpb25EYXRhOiB7XHJcbiAgICBfX2NvbXBvbmVudDogJycsXHJcbiAgfSxcclxufTtcclxuXHJcblNlY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzZWN0aW9uczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9ucztcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuXHJcbmNvbnN0IFNlbyA9ICh7IHNlbyB9KSA9PiB7XHJcbiAgLy8gUHJldmVudCBlcnJvcnMgaWYgbm8gbWV0YWRhdGEgd2FzIHNldFxyXG4gIGlmICghc2VvKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB7IG1ldGFUaXRsZSwgbWV0YURlc2NyaXB0aW9uIH0gPSBzZW87XHJcblxyXG4gIHJldHVybiA8TmV4dFNlbyB0aXRsZT17bWV0YVRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YURlc2NyaXB0aW9ufSAvPjtcclxufTtcclxuXHJcblNlby5wcm9wVHlwZXMgPSB7XHJcbiAgc2VvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbWV0YVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWV0YURlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW87XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJ0BvcmdhbmlzbXMvTmF2QmFyL05hdkJhcic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0BvcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAb3JnYW5pc21zL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgU3R5bGVkTGF5b3V0IH0gZnJvbSAnLi9MYXlvdXQuc3R5bGVzJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBuYXZpZ2F0aW9uOiB7IGxvZ28sIG5hdkxpbmtzIH0sIGZvb3RlciB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc05hdk9wZW4gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTGF5b3V0IGlzTmF2T3Blbj17aXNOYXZPcGVufT5cclxuICAgICAgPE5hdkJhciBsb2dvPXtsb2dvfSAvPlxyXG4gICAgICB7aXNOYXZPcGVuICYmIDxOYXZpZ2F0aW9uIG5hdkxpbmtzPXtuYXZMaW5rc30gLz59XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPEZvb3RlciBmb290ZXI9e2Zvb3Rlcn0gLz5cclxuICAgIDwvU3R5bGVkTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG4gIG5hdmlnYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBmb290ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbmF2aWdhdGlvbjoge30sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExheW91dCA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogJHsoeyBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICcxMDB2aCcgOiAnZml0LWNvbnRlbnQnKX07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyV3JhcHBlciwgQ29udGVudFdyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vUGFnZUhlYWRlci5zdHlsZXMnO1xyXG5cclxuY29uc3QgUGFnZUhlYWRlciA9ICh7IGNoaWxkcmVuLCBpbWFnZSwgbG9uZ1RleHQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUhlYWRlcldyYXBwZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlciBsb25nVGV4dD17bG9uZ1RleHR9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8SW1hZ2VXcmFwcGVyIGxvbmdUZXh0PXtsb25nVGV4dH0+XHJcbiAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9QYWdlSGVhZGVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuUGFnZUhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbG9uZ1RleHQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlcldyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54bFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGgxIHtcclxuICAgIG1heC13aWR0aDogJHsoeyBsb25nVGV4dCB9KSA9PiAobG9uZ1RleHQgPyBgbWF4LWNvbnRlbnRgIDogYDQwcmVtYCl9O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHdpZHRoOiAkeyh7IGxvbmdUZXh0IH0pID0+IChsb25nVGV4dCA/IGAxMDAlYCA6IGA1MHJlbWApfTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1heC13aWR0aDogJHsoeyBsb25nVGV4dCB9KSA9PiAobG9uZ1RleHQgPyBgbWF4LWNvbnRlbnRgIDogYDQwcmVtYCl9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7KHsgbG9uZ1RleHQgfSkgPT4gKGxvbmdUZXh0ID8gYDQwcmVtYCA6IGA4MHJlbWApfTtcclxuICBtYXgtd2lkdGg6ICR7KHsgbG9uZ1RleHQgfSkgPT4gKGxvbmdUZXh0ID8gYDQwcmVtYCA6IGA4MHJlbWApfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICAgIG1hcmdpbjogJHsoeyBsb25nVGV4dCB9KSA9PiAobG9uZ1RleHQgPyAnMCBhdXRvJyA6IDApfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBwYWRkaW5nLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgeyBQYWdlU2VjdGlvbldyYXBwZXIgfSBmcm9tICcuL1BhZ2VTZWN0aW9uLnN0eWxlJztcclxuXHJcbmNvbnN0IFBhZ2VTZWN0aW9uID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPFBhZ2VTZWN0aW9uV3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1BhZ2VTZWN0aW9uV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlY3Rpb247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZExpZ2h0fTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWdlU2VjdGlvblBhZGRpbmd9O1xyXG4gIG1heC13aWR0aDogJHsoeyB0aGVtZSwgd2lkZSB9KSA9PiAod2lkZSA/ICdtYXgtY29udGVudCcgOiB0aGVtZS5kaW1lbnNpb25zLnBhZ2VTZWN0aW9uV2lkdGgpfTtcclxuICBtaW4td2lkdGg6ICR7KHsgd2lkZSB9KSA9PiAod2lkZSA/ICcxMjByZW0nIDogMCl9O1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgbWluLXdpZHRoOiAkeyh7IHdpZGUgfSkgPT4gKHdpZGUgPyAnMTAwJScgOiAwKX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zVn07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnNzVn07XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFN0eWxlZFBhZ2VUaWxlV3JhcHBlciB9IGZyb20gJy4vUGFnZVRpbGVXcmFwcGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBQYWdlVGlsZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTdHlsZWRQYWdlVGlsZVdyYXBwZXI+e2NoaWxkcmVufTwvU3R5bGVkUGFnZVRpbGVXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VUaWxlV3JhcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGlsZVdyYXBwZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhZ2VUaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBQYWdlVGlsZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VUaWxlLnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgUGFnZVRpbGUgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8UGFnZVRpbGVXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvUGFnZVRpbGVXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VUaWxlLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGlsZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnJpY2hUZXh0TWFyZ2luVG9wfTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIHdpZHRoOiAkeyh7IHdpZGUgfSkgPT4gKHdpZGUgPyAnbWF4LWNvbnRlbnQnIDogJzQwcmVtJyl9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICB3aWR0aDogNTByZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IHsgU3R5bGVkUGFnZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VXcmFwcGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBQYWdlV3JhcHBlciA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTdHlsZWRQYWdlV3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1N0eWxlZFBhZ2VXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VXcmFwcGVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIG1pbi1oZWlnaHQ6ICR7KHsgc2hvcnQgfSkgPT4gKHNob3J0ID8gJ3Vuc2V0JyA6ICc5MHZoJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogJHsoeyBjb2x1bW4gfSkgPT4gKGNvbHVtbiA/ICdjb2x1bW4nIDogJ3JvdycpfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUsIHdpZGUgfSkgPT4gKHdpZGUgPyB0aGVtZS5wYWRkaW5nLnhzIDogdGhlbWUucGFkZGluZy5tKX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lLCB3aWRlIH0pID0+ICh3aWRlID8gdGhlbWUubXEubGFwdG9wTGFyZ2UgOiB0aGVtZS5tcS50YWJsZXQpfSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICd1dGlscy9hcGknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgU2VvIGZyb20gJ2NvbXBvbmVudHMvc3RyYXBpL3Nlbyc7XHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tICdjb21wb25lbnRzL3N0cmFwaS9zZWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldFBhZ2VEYXRhIH0gZnJvbSAndXRpbHMvZ2V0UGFnZURhdGEnO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InO1xyXG5cclxuY29uc3QgRHluYW1pY1BhZ2UgPSAoeyBzZWN0aW9ucywgbmF2aWdhdGlvbiwgZm9vdGVyLCBzZW8gfSkgPT4ge1xyXG4gIGlmICghc2VjdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IG5hdmlnYXRpb249e25hdmlnYXRpb259IGZvb3Rlcj17Zm9vdGVyfT5cclxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cclxuICAgICAgPFNlY3Rpb25zIHNlY3Rpb25zPXtzZWN0aW9uc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5EeW5hbWljUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgc2VjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIG5hdmlnYXRpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VvOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZmV0Y2hBUEkoJy9wYWdlcycpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHBhZ2VzLm1hcCgocGFnZSkgPT4ge1xyXG4gICAgLy8gRGVjb21wb3NlIHRoZSBzbHVnIHRoYXQgd2FzIHNhdmVkIGluIFN0cmFwaVxyXG4gICAgY29uc3Qgc2x1Z0FycmF5ID0gIXBhZ2Uuc2x1ZyA/IGZhbHNlIDogcGFnZS5zbHVnLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IHNsdWc6IHNsdWdBcnJheSB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRQYWdlRGF0YSh7IHNsdWc6ICFwYXJhbXMuc2x1ZyA/IFsnJ10gOiBwYXJhbXMuc2x1ZyB9KTtcclxuICBjb25zdCBuYXZpZ2F0aW9uID0gYXdhaXQgZmV0Y2hBUEkoJy9uYXZpZ2F0aW9uJyk7XHJcbiAgY29uc3QgZm9vdGVyID0gYXdhaXQgZmV0Y2hBUEkoJy9mb290ZXInKTtcclxuXHJcbiAgaWYgKHBhZ2VEYXRhID09IG51bGwpIHtcclxuICAgIC8vIEdpdmluZyB0aGUgcGFnZSBubyBwcm9wcyB3aWxsIHRyaWdnZXIgYSA0MDQgcGFnZVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNvbnRlbnQsIHNlbyB9ID0gcGFnZURhdGE7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzZWN0aW9uczogY29udGVudCxcclxuICAgICAgc2VvLFxyXG4gICAgICBuYXZpZ2F0aW9uLFxyXG4gICAgICBmb290ZXIsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSwgUHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gIGltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59KS5pc1JlcXVpcmVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoaWxkcmVuU2hhcGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksIFByb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgaXNOYXZPcGVuOiBmYWxzZSxcclxuICBzZXRJc05hdk9wZW46ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4sIHJvdXRlciwgaGFuZGxlRGFya01vZGVDaGFuZ2UsIGN1cnJlbnREYXJrTW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBpZiAocm91dGVyKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgcGFyZW50OiAnI2xvYWRlcicgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgaXNOYXZPcGVuLFxyXG4gICAgICAgIHNldElzTmF2T3BlbixcclxuICAgICAgICBoYW5kbGVEYXJrTW9kZUNoYW5nZSxcclxuICAgICAgICBjdXJyZW50RGFya01vZGUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwUHJvdmlkZXI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnfSR7cGF0aH1gO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZURhdGEocGFyYW1zKSB7XHJcbiAgY29uc3Qgc2x1ZyA9IHBhcmFtcy5zbHVnLmpvaW4oJy8nKTtcclxuICAvLyBGaW5kIHRoZSBwYWdlcyB0aGF0IG1hdGNoIHRoaXMgc2x1Z1xyXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IGZldGNoQVBJKGAvcGFnZXM/c2x1Zz0ke3NsdWd9YCk7XHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBmb3VuZCBzb21ldGhpbmcsIG90aGVyd2lzZSByZXR1cm4gbnVsbFxyXG4gIGlmIChwYWdlc0RhdGEgPT0gbnVsbCB8fCBwYWdlc0RhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgaXRlbSBzaW5jZSB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgcmVzdWx0IHBlciBzbHVnXHJcbiAgcmV0dXJuIHBhZ2VzRGF0YVswXTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxpbmsiLCJJbWFnZSIsIkFycm93TGlua1dyYXBwZXIiLCJJbWFnZVdyYXBwZXIiLCJBcnJvdyIsIkFycm93TGluayIsInNsdWciLCJ0aXRsZSIsImltYWdlIiwiYWNjZW50ZWQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsInN0eWxlZCIsImEiLCJ0aGVtZSIsImNvbG9ycyIsImFjY2VudENvbG9yIiwiYnV0dG9uQ29sb3IiLCJmb250U2l6ZSIsImJvZHkiLCJsaWdodGVyQWNjZW50Q29sb3IiLCJsaWdodGVyQnV0dG9uQ29sb3IiLCJkaXYiLCJzcGFuIiwiU3R5bGVkQnV0dG9uIiwiQnV0dG9uIiwiZGF0YSIsImhhc01hcmdpbiIsImFjY2VudCIsImNhcHRpb24iLCJpc0ZpbGxlZCIsImxpbmsiLCJzaGFwZSIsImFjY2VwdCIsInV0aWxzIiwiYm9yZGVyUmFkaXVzIiwiYnV0dG9uVGV4dENvbG9yIiwiRnVuY3Rpb25hbExpbmsiLCJuYW1lIiwibmV3VGFiIiwic2V0SXNOYXZPcGVuIiwic3RhdGUiLCJmdW5jIiwidXNlQ29udGV4dCIsIk5leHRJbWFnZSIsIkFwcENvbnRleHQiLCJOZXh0SW1hZ2VXcmFwcGVyIiwiU3R5bGVkTmV4dEltYWdlIiwiY3VycmVudERhcmtNb2RlIiwiYWx0ZXJuYXRpdmVUZXh0IiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkZXIiLCJzcmMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJjb25zb2xlIiwiZXJyb3IiLCJudW1iZXIiLCJkYXJrIiwiY2hpbGRyZW5TaGFwZSIsIkxpbmVIb3Jpem9udGFsV3JhcHBlciIsIkxpbmUiLCJMaW5lSG9yaXpvbnRhbCIsImNoaWxkcmVuIiwibGFyZ2UiLCJMaW5lVmVydGljYWxXcmFwcGVyIiwiTGluZVZlcnRpY2FsIiwibXEiLCJtb2JpbGVMYXJnZSIsIkhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyIiwiSGVyb0NvdXJzZUNvbXBvbmVudCIsImRlc2NyaXB0aW9uIiwibGlua05hbWUiLCJkaW1lbnNpb25zIiwidGlsZVBhZGRpbmciLCJiYWNrZ3JvdW5kTGlnaHQiLCJib3hTaGFkb3ciLCJ0aWxlUGFkZGluZ01vYmlsZSIsIkhlcm9JbnN0cnVjdG9yV3JhcHBlciIsIkhlcm9JbnN0cnVjdG9yQ29tcG9uZW50IiwiaGVhZGVyIiwiaW5zdHJ1Y3RvciIsIndoaXRlIiwiZGVza3RvcCIsImxhcHRvcCIsInBhZGRpbmciLCJtViIsIkxpc3RJdGVtV3JhcHBlciIsIkJ1bGxldCIsIkxpc3RJdGVtIiwiaGFzTGlua3MiLCJsaSIsIm5hdkxpc3QiLCJtYWluQ29sb3IiLCJtb2JpbGVTbWFsbCIsIlBhZ2VUaWxlIiwiU2VtZXN0ZXIiLCJIZWFkIiwiUm93IiwiQW5ub3RhdGlvbiIsIlByaWNpbmdDb21wb25lbnQiLCJzZW1lc3RlciIsInRhYmxlSGVhZCIsInRhYmxlUm93cyIsImFubm90YXRpb25zIiwicm93TmFtZSIsInJvd0NvbnRlbnQiLCJtYXAiLCJpZCIsImFubm90YXRpb24iLCJhcnJheU9mIiwic3ViVGV4dCIsImRhcmtCbHVlIiwiY2FwdGlvbk1lZGl1bSIsInAiLCJjYXB0aW9uU21hbGwiLCJTdHlsZWRNYXJrZG93biIsIlJpY2hUZXh0IiwiTWFya2Rvd24iLCJyaWNoVGV4dE1hcmdpblRvcCIsImJsYWNrIiwiU3R5bGVkRm9vdGVyIiwiRm9vdGVyV3JhcHBlciIsIkNvbnRlbnRXcmFwcGVyIiwiSW5mb3JtYXRpb25XcmFwcGVyIiwiU3R5bGVkU2Nob29sSW5mbyIsIkltYWdlc1dyYXBwZXIiLCJGb290ZXIiLCJmb290ZXIiLCJzY2hvb2xOYW1lIiwiZm9vdGVySW5mbyIsImZvb3RlckltYWdlcyIsImluZm8iLCJmb290ZXJJbWFnZSIsIm0iLCJsYXB0b3BMYXJnZSIsInMiLCJ4c1YiLCJ0aWxlV2lkdGgiLCJkZXNrdG9wVGFsbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiTG9nbyIsIk1lbnVCdXR0b24iLCJTdHlsZWRTcGFuIiwiTG9hZGVyIiwiQnV0dG9uc1dyYXBwZXIiLCJEYXJrTW9kZUJ1dHRvbiIsIk5hdkJhciIsImxvZ28iLCJpc0xvYWRpbmciLCJpc05hdk9wZW4iLCJoYW5kbGVEYXJrTW9kZUNoYW5nZSIsInRhYmxldExhcmdlIiwiYnV0dG9uIiwic2hvcnQiLCJTdHlsZWROYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsIm5hdkxpbmtzIiwiZ3JvdXBOYW1lIiwibGlua3MiLCJuYXYiLCJ4ViIsIngiLCJzViIsIlNlY3Rpb25XcmFwcGVyIiwiU2VjdGlvbkRhcmtXcmFwcGVyIiwiQWJvdXQiLCJzZWNPbmVEZXNjcmlwdGlvbiIsInNlY09uZVRpdGxlIiwic2VjT25lSW1hZ2UiLCJzZWNUd29EZXNjcmlwdGlvbiIsInNlY1R3b1RpdGxlIiwic2VjVGhyZWVUaXRsZSIsInNlY1RocmVlSW1hZ2UiLCJzZWNUaHJlZURlc2NyaXB0aW9uIiwic2VjdGlvbiIsImJhY2tncm91bmRXaGl0ZSIsInJldmVyc2UiLCJib2R5U21hbGwiLCJ0YWJsZXQiLCJkZXNrdG9wV2lkZSIsIlBhZ2VIZWFkZXIiLCJQYWdlV3JhcHBlciIsIlBhZ2VTZWN0aW9uIiwiU3R5bGVkVGl0bGUiLCJJbmZvU2VjdGlvbiIsIkluZm9XcmFwcGVyIiwiSW5mb0NvbXBvbmVudCIsIlN0eWxlZExpc3QiLCJTdHlsZWRJdGVtIiwiUGFnZVRpbGVXcmFwcGVyIiwiU3R5bGVkVGlsZUhlYWRlciIsIkNpc2NvQ291cnNlIiwicmljaFRleHQiLCJjb3Vyc2VJbmZvIiwibGlzdFRpdGxlIiwibGlzdENvbXBvbmVudCIsImNvbnRlbnQiLCJsaXN0SXRlbXMiLCJpdGVtIiwiaDEiLCJoZWFkZXJNb2JpbGUiLCJwYWdlU2VjdGlvbldpZHRoIiwiY2FwdGlvbkxhcmdlTWVkaXVtIiwiaDQiLCJ1bCIsIkFkZHJlc3NXcmFwcGVyIiwiQ29udGFjdCIsImNvbnRhY3RJbmZvIiwiYWRkcmVzcyIsImRhdGFTaGFwZSIsIkhlcm9BY2FkZW15V3JhcHBlciIsIkhlYWRlcldyYXBwZXIiLCJEZXNjcmlwdGlvbldyYXBwZXIiLCJIZXJvQWNhZGVteSIsIkhlcm9Db3Vyc2VXcmFwcGVyIiwiSGVyb0NvdXJzZXMiLCJoZXJvQ291cnNlcyIsImFycm93SW1hZ2UiLCJjb3Vyc2VEYXRhIiwiSGVyb0luc3RydWN0b3JzV3JhcHBlciIsIkhlcm9JbnN0cnVjdG9ycyIsImluc3RydWN0b3JDb21wb25lbnRzIiwiaW5zdHJ1Y3RvckRhdGEiLCJIZXJvUHJpY2luZ1dyYXBwZXIiLCJIZXJvUHJpY2luZyIsIkhlcm9XcmFwcGVyIiwiQnV0dG9uV3JhcHBlciIsIkhlcm8iLCJidXR0b25zIiwiYnV0dG9uRGF0YSIsIk9mZmVydCIsInNlY3Rpb25IZWFkZXIiLCJvZmZlcnRDb21wb25lbnRzIiwib2ZmZXJ0Q291cnNlcyIsIlByaWNpbmciLCJwcmljaW5nQ29tcG9uZW50cyIsInByaWNpbmdDb21wb25lbnQiLCJSZWd1bGF0aW9ucyIsIlJvZG8iLCJzZWN0aW9uQ29tcG9uZW50cyIsIlNlY3Rpb24iLCJzZWN0aW9uRGF0YSIsIlNlY3Rpb25Db21wb25lbnQiLCJfX2NvbXBvbmVudCIsIlNlY3Rpb25zIiwic2VjdGlvbnMiLCJOZXh0U2VvIiwiU2VvIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiU3R5bGVkTGF5b3V0IiwiTGF5b3V0IiwibmF2aWdhdGlvbiIsIlBhZ2VIZWFkZXJXcmFwcGVyIiwibG9uZ1RleHQiLCJ4bFYiLCJQYWdlU2VjdGlvbldyYXBwZXIiLCJwcm9wcyIsInBhZ2VTZWN0aW9uUGFkZGluZyIsIndpZGUiLCJzc1YiLCJTdHlsZWRQYWdlVGlsZVdyYXBwZXIiLCJTdHlsZWRQYWdlV3JhcHBlciIsImNvbHVtbiIsInhzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJraW5kIiwidyIsImZpbmQiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hBUEkiLCJnZXRQYWdlRGF0YSIsIkVycm9yUGFnZSIsIkR5bmFtaWNQYWdlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsInNsdWdBcnJheSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYWdlRGF0YSIsIm9uZU9mVHlwZSIsIm5vZGUiLCJjcmVhdGVDb250ZXh0IiwiTlByb2dyZXNzIiwiQXBwUHJvdmlkZXIiLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVTdGFydCIsImNvbmZpZ3VyZSIsImhhbmRsZVN0b3AiLCJkb25lIiwib2ZmIiwiZ2V0U3RyYXBpVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwicGFnZXNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==