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
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
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
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ArrowLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ArrowLinkstyles__ArrowLinkWrapper",
  componentId: "sc-ttw39x-0"
})(["display:flex;align-items:center;justify-content:center;align-self:flex-end;&:visited{border-bottom:2px solid ", ";color:", ";}h5{border-bottom:2px solid ", ";color:", ";margin-right:2rem;font-size:", ";}"], ({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.mainColor, ({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.mainColor, ({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.mainColor, ({
  theme,
  accented
}) => accented ? theme.colors.accentColor : theme.colors.mainColor, ({
  theme
}) => theme.fontSize.body);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ArrowLinkstyles__ImageWrapper",
  componentId: "sc-ttw39x-1"
})(["width:3.8rem;"]);

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
  componentId: "sc-4g74f2-0"
})(["border-radius:", ";padding:1rem 2rem;border:", ";border-color:", ";background-color:", ";color:", ";display:flex;align-items:center;&:first-child{margin-right:", ";}"], ({
  theme
}) => theme.utils.borderRadius, ({
  theme,
  isFilled
}) => isFilled ? '0' : `3px solid ${theme.colors.mainColor}`, ({
  theme,
  accent
}) => accent ? theme.colors.accentColor : theme.colors.mainColor, ({
  theme,
  isFilled,
  accent
}) => isFilled ? accent ? theme.colors.accentColor : theme.colors.mainColor : 'transparent', ({
  theme,
  isFilled
}) => isFilled ? theme.colors.white : theme.colors.mainColor, ({
  hasMargin
}) => hasMargin ? '2rem' : '0');

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image.styles */ "./components/atoms/Image/Image.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Image\\Image.js";






const Image = ({
  image
}) => {
  if (image) {
    const {
      alternativeText,
      width,
      height
    } = image;

    const loader = () => {
      return (0,utils_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image);
    };

    const imageUrl = (0,utils_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_3__.NextImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_3__.StyledNextImage, {
        loader: loader,
        unoptimized: true,
        layout: "responsive",
        width: width,
        height: height,
        src: imageUrl,
        alt: alternativeText,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined);
  } else {
    console.error('Image was required but not provided'); // throw new Error('Image was required but not provided');

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/imgError.svg",
      height: 300,
      width: 300
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, undefined);
  }
};

Image.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    url: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    alternativeText: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
  }),
  priority: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
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


const NextImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Imagestyles__NextImageWrapper",
  componentId: "sc-asbtv6-0"
})(["height:max-content;width:100%;"]);
const StyledNextImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({
  displayName: "Imagestyles__StyledNextImage",
  componentId: "sc-asbtv6-1"
})(["border-radius:", ";"], ({
  theme
}) => theme.utils.borderRadius);

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
  componentId: "sc-i252ef-0"
})(["display:flex;flex-direction:column;width:100%;text-align:center;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "LineHorizontalstyles__Line",
  componentId: "sc-i252ef-1"
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
      title: linkName,
      image: image
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
}) => theme.colors.white, ({
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
})(["display:flex;align-items:center;&:not(:last-child){margin-bottom:1.5rem;}a{font-size:", ";}"], ({
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RichText_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RichText.styles */ "./components/molecules/RichText/RichText.styles.js");
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\RichText\\RichText.js";






const RichText = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_RichText_styles__WEBPACK_IMPORTED_MODULE_2__.StyledMarkdown, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

RichText.propTypes = {
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_3__.childrenShape
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
})(["margin-top:", ";h1,h2,h3,h4,h5,h6{color:", ";margin-top:1rem;margin-bottom:0.5rem;}h1,h2{font-weight:300;margin-top:2rem;}h3,h4,h5{font-weight:400;}h1{font-size:9.5rem;letter-spacing:-0.15rem;}h2{font-size:5.9rem;letter-spacing:-0.05rem;}h3{font-size:4.8rem;}h4{font-size:3.4rem;letter-spacing:0.025rem;}h5{font-size:2.4rem;}h6{font-size:2rem;letter-spacing:0.015rem;font-weight:600;}a{color:", ";text-decoration:none;font-weight:400;&:visited{color:", ";}}li{font-size:", ";margin-left:3rem;&:first-child{margin-top:0.8rem;}a{color:", ";font-size:", ";&:visited{color:", ";}}}p{&:not(:last-child){margin:0 0 1rem 0;}}"], ({
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
/* harmony export */   "StyledSchoolInfo": () => (/* binding */ StyledSchoolInfo),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "InformationWrapper": () => (/* binding */ InformationWrapper),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "ImagesWrapper": () => (/* binding */ ImagesWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer.withConfig({
  displayName: "Footerstyles__StyledFooter",
  componentId: "sc-1y4rl0m-0"
})(["padding:", " ", ";background-color:", ";color:", ";display:flex;justify-content:center;", "{padding:", " ", ";}p{text-align:left;font-size:", ";}"], ({
  theme
}) => theme.padding.mV, ({
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
}) => theme.padding.s, ({
  theme
}) => theme.fontSize.subText);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__FooterWrapper",
  componentId: "sc-1y4rl0m-1"
})(["display:grid;column-gap:", ";row-gap:", ";width:100%;grid-template:'content line images';justify-content:space-between;", "{row-gap:", ";max-width:", ";justify-content:stretch;grid-template:'content' 'line' 'images';}", "{p{font-size:", ";}}", "{max-width:100%;text-align:center;}", "{width:unset;max-width:unset;}"], ({
  theme
}) => theme.padding.xs, ({
  theme
}) => theme.padding.xsV, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.padding.xsV, ({
  theme
}) => theme.dimensions.tileWidth, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.fontSize.subText, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.mq.desktopTall);
const StyledSchoolInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "Footerstyles__StyledSchoolInfo",
  componentId: "sc-1y4rl0m-2"
})(["max-width:14rem;margin-right:3rem;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__ContentWrapper",
  componentId: "sc-1y4rl0m-3"
})(["grid-area:content;display:grid;align-items:center;h3{color:", ";text-align:start;grid-row:1/2;grid-column:1/3;margin-bottom:1rem;}", "{justify-content:space-between;}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.mq.laptop);
const InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__InformationWrapper",
  componentId: "sc-1y4rl0m-4"
})(["margin-left:8rem;width:max-content;span{color:", ";margin-right:0.4rem;font-weight:600;}", "{margin-left:0;}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.mq.laptop);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Footerstyles__Line",
  componentId: "sc-1y4rl0m-5"
})(["grid-area:line;justify-self:center;width:0.6rem;height:100%;background-color:", ";", "{width:100%;height:0.5rem;}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.mq.laptop);
const ImagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__ImagesWrapper",
  componentId: "sc-1y4rl0m-6"
})(["grid-area:images;display:flex;justify-content:space-between;align-items:center;", "{flex-direction:column;}"], ({
  theme
}) => theme.mq.tablet);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__ImageWrapper",
  componentId: "sc-1y4rl0m-7"
})(["width:12vw;max-width:30rem;&:first-child{margin-right:5rem;}", "{width:25rem;}", "{min-width:30rem;&:first-child{margin:0 0 3rem 0;}}"], ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.tablet);

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
    setIsNavOpen
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
          image: logo,
          priority: true
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {
      onClick: () => setIsNavOpen(state => !state),
      isNavOpen: isNavOpen,
      "data-testid": "menu-button",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.StyledSpan, {
        short: true,
        isNavOpen: isNavOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.StyledSpan, {
        isNavOpen: isNavOpen
      }, void 0, false, {
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
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "NavBarstyles__Header",
  componentId: "sc-6b3hw5-0"
})(["display:flex;justify-content:space-between;align-items:center;min-height:10vh;padding:1rem ", ";background-color:", ";color:", ";z-index:30;border-bottom:2px solid ", ";position:relative;img{border-radius:0;}", "{padding:", ";}", "{padding:2rem ", ";}"], ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.mq.laptop, ({
  theme,
  isNavOpen
}) => isNavOpen ? `1rem ${theme.padding.s}` : `1rem ${theme.padding.m}`, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.s);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "NavBarstyles__Logo",
  componentId: "sc-6b3hw5-1"
})(["width:22rem;"]);
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "NavBarstyles__MenuButton",
  componentId: "sc-6b3hw5-2"
})(["position:relative;background-color:transparent;border:none;width:6rem;height:", ";cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;"], ({
  isNavOpen
}) => isNavOpen ? '6rem' : 'unset');
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "NavBarstyles__StyledSpan",
  componentId: "sc-6b3hw5-3"
})(["width:100%;height:1rem;background-color:", ";transform-origin:", ";transform:", ";&:first-child{margin-bottom:1rem;transform:", ";}&:nth-child(2){transform:", ";}"], ({
  theme
}) => theme.colors.accentColor, ({
  isNavOpen,
  short
}) => short && !isNavOpen ? 'right' : 'center', ({
  short,
  isNavOpen
}) => isNavOpen ? 'scaleX(1)' : short ? 'scaleX(0.5)' : 'scaleX(1)', ({
  isNavOpen
}) => isNavOpen ? 'translateY(2.5rem) rotate(45deg)' : '', ({
  isNavOpen
}) => isNavOpen ? 'translateY(-2.5rem) rotate(-45deg)' : '');
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "NavBarstyles__Loader",
  componentId: "sc-6b3hw5-4"
})(["height:0.2rem;width:100%;bottom:-0.2rem;left:0;background-color:", ";position:absolute;"], ({
  theme,
  isLoading
}) => isLoading ? 'transparent' : theme.colors.accentColor);

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
/* harmony export */   "ExitButton": () => (/* binding */ ExitButton),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({
  displayName: "Navigationstyles__StyledNavigation",
  componentId: "sc-1adzo3a-0"
})(["position:absolute;min-height:90vh;width:100%;z-index:20;background-color:", ";padding:", " ", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(40rem,auto));row-gap:", ";column-gap:", ";align-content:flex-start;", "{column-gap:", ";padding:", " ", ";}", "{padding:", " ", ";grid-template-columns:100%;}img{border-radius:0;}"], ({
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
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.sV, ({
  theme
}) => theme.padding.s);
const ExitButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Navigationstyles__ExitButton",
  componentId: "sc-1adzo3a-1"
})(["border:none;background-color:transparent;height:5rem;width:5rem;position:absolute;top:5vh;right:5vw;cursor:pointer;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navigationstyles__ContentWrapper",
  componentId: "sc-1adzo3a-2"
})(["justify-self:center;min-width:40rem;display:flex;flex-direction:column;width:100%;& > div{margin-bottom:2rem;text-align:left;}a{font-size:", ";}"], ({
  theme
}) => theme.fontSize.navList);

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
/* harmony export */   "StyledList": () => (/* binding */ StyledList),
/* harmony export */   "StyledItem": () => (/* binding */ StyledItem),
/* harmony export */   "PageTileWrapper": () => (/* binding */ PageTileWrapper),
/* harmony export */   "StyledTileHeader": () => (/* binding */ StyledTileHeader)
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
})(["display:flex;justify-content:space-between;margin:0 auto;max-width:", ";", "{width:max-content;flex-direction:column;align-items:flex-start;}"], ({
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
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "CiscoCoursestyles__StyledList",
  componentId: "sc-16b5gs6-5"
})(["margin-top:4rem;font-size:", ";"], ({
  theme
}) => theme.fontSize.body);
const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "CiscoCoursestyles__StyledItem",
  componentId: "sc-16b5gs6-6"
})(["inline-size:40rem;overflow-wrap:break-word;", "{inline-size:100%;}"], ({
  theme
}) => theme.mq.mobileLarge);
const PageTileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__PageTileWrapper",
  componentId: "sc-16b5gs6-7"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;", "{flex-direction:column;align-items:center;div{width:", ";}}", "{div{width:100%;}}"], ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.dimensions.tileWidth, ({
  theme
}) => theme.mq.tablet);
const StyledTileHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "CiscoCoursestyles__StyledTileHeader",
  componentId: "sc-16b5gs6-8"
})(["", "{max-width:67%;}", "{max-width:60%;}"], ({
  theme
}) => theme.mobileLarge, ({
  theme
}) => theme.mq.mobileSmall);

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

const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Contactstyles__ContentWrapper",
  componentId: "sc-mucvv7-0"
})(["background-color:", ";border-radius:", ";box-shadow:", ";padding:", ";width:clamp(", ",100%,80rem);h1{font-size:", ";}", "{padding:", ";}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.utils.borderRadius, ({
  theme
}) => theme.utils.boxShadow, ({
  theme
}) => theme.dimensions.tilePadding, ({
  theme
}) => theme.dimensions.tileWidth, ({
  theme
}) => theme.fontSize.header, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.tilePaddingMobile);
const AddressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Contactstyles__AddressWrapper",
  componentId: "sc-mucvv7-1"
})(["margin-top:5rem;h4,h5{font-weight:400;}h5{font-size:", ";margin-top:0.5rem;}"], ({
  theme
}) => theme.fontSize.subText);
const InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Contactstyles__InformationWrapper",
  componentId: "sc-mucvv7-2"
})(["margin:2rem 0 6rem 0;p,span{text-align:start;font-size:", ";}span{margin-right:0.4rem;font-weight:600;}", "{margin:2rem 0 0 0;}"], ({
  theme
}) => theme.fontSize.captionLarge, ({
  theme
}) => theme.mq.tablet);

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
}) => theme.colors.white, ({
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
})(["display:flex;align-items:center;justify-content:space-between;margin-top:6rem;width:", ";", "{flex-direction:column;}", "{flex-direction:column;}", "{width:unset;margin-top:4rem;}a{color:", ";border-color:", ";&:visited{color:", ";border-color:", ";}}& > div{font-size:", ";margin:0 5rem 0 0;width:39rem;", "{margin:0 0 4rem 0;}", "{margin:0 0 4rem 0;}", "{margin:0 0 3rem 0;width:100%;}}"], ({
  theme
}) => theme.dimensions.tileWidth, ({
  theme
}) => theme.mq.desktopTall, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor, ({
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _Hero_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hero.styles */ "./components/sections/Hero/Hero.styles.js");
/* harmony import */ var propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! propTypes/componentTypes */ "./propTypes/componentTypes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Hero\\Hero.js";









const Hero = ({
  data: {
    title,
    description,
    buttons,
    image
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.HeroWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.ButtonWrapper, {
        children: buttons.map(buttonData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: buttonData,
          hasMargin: true
        }, buttonData.id, false, {
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
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

Hero.propTypes = {
  data: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_6__.dataShape
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
}) => theme.colors.white, ({
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
})(["width:44rem;display:flex;flex-direction:column;h1{max-width:40rem;margin-bottom:5rem;}", "{width:100%;}", "{margin-right:10vmin;}"], ({
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
})(["width:40vw;display:flex;align-items:center;justify-content:center;", "{width:44rem;}", "{width:100%;}"], ({
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
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
  'sections.cisco-course': _sections_CiscoCourse_CiscoCourse__WEBPACK_IMPORTED_MODULE_10__.default
}; // Display a section individually

const Section = ({
  sectionData
}) => {
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SectionComponent, {
    data: sectionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 10
  }, undefined);
}; // Display the list of sections


const Sections = ({
  sections
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: sections.map(section => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Section, {
      sectionData: section
    }, `${section.__component}${section.id}`, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
}) => theme.colors.white, ({
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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["zse-cisco-experimental.herokuapp.com","localhost"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

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
  router
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
      setIsNavOpen
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxJQUFQO0FBQ0QsR0FSdUMsQ0FVeEM7OztBQUNBLFNBQU93cUIsU0FBUyxDQUFDLENBQUQsQ0FBaEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2REO0FBRU8sU0FBUzc0QixjQUFULENBQXdCO0FBQUVVLEVBQUFBO0FBQUYsQ0FBeEIsRUFBaUM7QUFDdEMsUUFBTUgsUUFBUSxHQUFHRyxHQUFHLENBQUNtVCxVQUFKLENBQWUsR0FBZixJQUFzQjRrQixrREFBWSxDQUFDLzNCLEdBQUQsQ0FBbEMsR0FBMENBLEdBQTNEO0FBQ0EsU0FBT0gsUUFBUDtBQUNEOzs7Ozs7Ozs7O0FDTEQsMkdBQStDOzs7Ozs7Ozs7OztBQ0EvQyx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvQXJyb3dMaW5rL0Fycm93TGluay5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uL0J1dHRvbi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9GdW5jdGlvbmFsTGluay9GdW5jdGlvbmFsTGluay5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvSW1hZ2Uuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC9IZXJvQ291cnNlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0hlcm9Db3Vyc2VDb21wb25lbnQvSGVyb0NvdXJzZUNvbXBvbmVudC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQvSGVyb0luc3RydWN0b3JDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQvSGVyb0luc3RydWN0b3JDb21wb25lbnQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljaW5nQ29tcG9uZW50L1ByaWNpbmdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUHJpY2luZ0NvbXBvbmVudC9QcmljaW5nQ29tcG9uZW50LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXIvRm9vdGVyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdkJhci9OYXZCYXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvQ2lzY29Db3Vyc2UvQ2lzY29Db3Vyc2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9DaXNjb0NvdXJzZS9DaXNjb0NvdXJzZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Db250YWN0L0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Db250YWN0L0NvbnRhY3Quc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0FjYWRlbXkvSGVyb0FjYWRlbXkuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQ291cnNlcy9IZXJvQ291cnNlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvSW5zdHJ1Y3RvcnMvSGVyb0luc3RydWN0b3JzLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9QcmljaW5nL0hlcm9QcmljaW5nLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyby9IZXJvLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyby9IZXJvLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL09mZmVydC9PZmZlcnQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9PZmZlcnQvT2ZmZXJ0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL1ByaWNpbmcvUHJpY2luZy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL1JlZ3VsYXRpb25zL1JlZ3VsYXRpb25zLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc3RyYXBpL3NlY3Rpb25zLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc3RyYXBpL3Nlby5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dC9MYXlvdXQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VIZWFkZXIvUGFnZUhlYWRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlSGVhZGVyL1BhZ2VIZWFkZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uLnN0eWxlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VUaWxlV3JhcHBlci9QYWdlVGlsZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVRpbGVXcmFwcGVyL1BhZ2VUaWxlV3JhcHBlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVRpbGUvUGFnZVRpbGUuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVRpbGUvUGFnZVRpbGUuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3BhZ2VzL1tbLi4uc2x1Z11dLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9wcm92aWRlcnMvQXBwUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3V0aWxzL2dldFBhZ2VEYXRhLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3V0aWxzL21lZGlhLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZXJyb3JcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vaWdub3JlZHxDOlxcVXNlcnNcXG5uYWQzXFxEZXNrdG9wXFxXZWIgZGV2ZWxvcG1lbnRcXE9yaWdpbmFsXFx6c2UtY2lzY29cXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBBcnJvd0xpbmtXcmFwcGVyLCBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL0Fycm93TGluay5zdHlsZXMnO1xyXG5cclxuY29uc3QgQXJyb3dMaW5rID0gKHsgc2x1ZywgdGl0bGUsIGltYWdlLCBhY2NlbnRlZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8QXJyb3dMaW5rV3JhcHBlciBhY2NlbnRlZD17YWNjZW50ZWR9PlxyXG4gICAgICAgIDxoNT57dGl0bGV9PC9oNT5cclxuICAgICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgPEltYWdlIGltYWdlPXtpbWFnZX0gLz5cclxuICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgPC9BcnJvd0xpbmtXcmFwcGVyPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5BcnJvd0xpbmsucHJvcFR5cGVzID0ge1xyXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFjY2VudGVkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbkFycm93TGluay5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2x1ZzogJycsXHJcbiAgdGl0bGU6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3dMaW5rO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcnJvd0xpbmtXcmFwcGVyID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7KHsgdGhlbWUsIGFjY2VudGVkIH0pID0+IChhY2NlbnRlZCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKX07XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudGVkIH0pID0+IChhY2NlbnRlZCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMy44cmVtO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBTdHlsZWRCdXR0b24gfSBmcm9tICcuL0J1dHRvbi5zdHlsZXMnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgZGF0YSwgaGFzTWFyZ2luLCBhY2NlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNhcHRpb24sXHJcbiAgICBpc0ZpbGxlZCxcclxuICAgIGxpbms6IHsgc2x1ZyB9LFxyXG4gIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7c2x1Z31gfSBwYXNzSHJlZj5cclxuICAgICAgPFN0eWxlZEJ1dHRvbiBoYXNNYXJnaW49e2hhc01hcmdpbn0gaXNGaWxsZWQ9e2lzRmlsbGVkfSBhY2NlbnQ9e2FjY2VudH0+XHJcbiAgICAgICAge2NhcHRpb259XHJcbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaXNGaWxsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbGluazogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgaGFzTWFyZ2luOiBQcm9wVHlwZXMuYm9vbCxcclxuICBhY2NlcHQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBjYXB0aW9uOiAnJyxcclxuICAgIGxpbms6IHtcclxuICAgICAgc2x1ZzogJycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5hYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgYm9yZGVyOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCB9KSA9PiAoaXNGaWxsZWQgPyAnMCcgOiBgM3B4IHNvbGlkICR7dGhlbWUuY29sb3JzLm1haW5Db2xvcn1gKX07XHJcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnQgfSkgPT4gKGFjY2VudCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCwgYWNjZW50IH0pID0+IChpc0ZpbGxlZCA/IChhY2NlbnQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKSA6ICd0cmFuc3BhcmVudCcpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSwgaXNGaWxsZWQgfSkgPT4gKGlzRmlsbGVkID8gdGhlbWUuY29sb3JzLndoaXRlIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICR7KHsgaGFzTWFyZ2luIH0pID0+IChoYXNNYXJnaW4gPyAnMnJlbScgOiAnMCcpfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBGdW5jdGlvbmFsTGluayA9ICh7IGxpbms6IHsgbmFtZSwgc2x1ZywgbmV3VGFiIH0sIHNldElzTmF2T3BlbiB9KSA9PiB7XHJcbiAgaWYgKG5ld1RhYikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGEgaHJlZj17c2x1Z30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIHtuYW1lfVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfT57bmFtZX08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkZ1bmN0aW9uYWxMaW5rLnByb3BUeXBlcyA9IHtcclxuICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuZXdUYWI6IFByb3BUeXBlcy5ib29sLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgc2V0SXNOYXZPcGVuOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbkZ1bmN0aW9uYWxMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsaW5rOiB7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIHNsdWc6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbmFsTGluaztcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE5leHRJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICd1dGlscy9tZWRpYSc7XHJcbmltcG9ydCB7IE5leHRJbWFnZVdyYXBwZXIsIFN0eWxlZE5leHRJbWFnZSB9IGZyb20gJy4vSW1hZ2Uuc3R5bGVzJztcclxuXHJcbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UgfSkgPT4ge1xyXG4gIGlmIChpbWFnZSkge1xyXG4gICAgY29uc3QgeyBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlO1xyXG5cclxuICAgIGNvbnN0IGxvYWRlciA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGdldFN0cmFwaU1lZGlhKGltYWdlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1hZ2VVcmwgPSBnZXRTdHJhcGlNZWRpYShpbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5leHRJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPFN0eWxlZE5leHRJbWFnZVxyXG4gICAgICAgICAgbG9hZGVyPXtsb2FkZXJ9XHJcbiAgICAgICAgICB1bm9wdGltaXplZFxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dH1cclxuICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9OZXh0SW1hZ2VXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIHJldHVybiA8TmV4dEltYWdlIHNyYz1cIi9pbWdFcnJvci5zdmdcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0gLz47XHJcbiAgfVxyXG59O1xyXG5cclxuSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWx0ZXJuYXRpdmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfSksXHJcbiAgcHJpb3JpdHk6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XHJcbiIsImltcG9ydCBOZXh0SW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5leHRJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTmV4dEltYWdlID0gc3R5bGVkKE5leHRJbWFnZSlgXHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IHsgTGluZUhvcml6b250YWxXcmFwcGVyLCBMaW5lIH0gZnJvbSAnLi9MaW5lSG9yaXpvbnRhbC5zdHlsZXMnO1xyXG5cclxuY29uc3QgTGluZUhvcml6b250YWwgPSAoeyBjaGlsZHJlbiwgbGFyZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUhvcml6b250YWxXcmFwcGVyIGRhdGEtdGVzdGlkPVwibGluZS1ob3Jpem9udGFsLXdyYXBwZXJcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8TGluZSBsYXJnZT17bGFyZ2V9IGRhdGEtdGVzdGlkPVwibGluZS1ob3Jpem9udGFsXCIgLz5cclxuICAgIDwvTGluZUhvcml6b250YWxXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5MaW5lSG9yaXpvbnRhbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZUhvcml6b250YWw7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVIb3Jpem9udGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWluLWhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMC44cmVtJyA6ICcwLjRyZW0nKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzIuMnJlbScgOiAnLjhyZW0nKX07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5lVmVydGljYWxXcmFwcGVyLCBMaW5lIH0gZnJvbSAnLi9MaW5lVmVydGljYWwuc3R5bGVzJztcclxuXHJcbmNvbnN0IExpbmVWZXJ0aWNhbCA9ICh7IGNoaWxkcmVuLCBsYXJnZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5lVmVydGljYWxXcmFwcGVyIGRhdGEtdGVzdGlkPVwibGluZS12ZXJ0aWNhbC13cmFwcGVyXCI+XHJcbiAgICAgIDxMaW5lIGxhcmdlPXtsYXJnZX0gZGF0YS10ZXN0aWQ9XCJsaW5lLXZlcnRpY2FsXCIgLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5lVmVydGljYWxXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5MaW5lVmVydGljYWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVWZXJ0aWNhbDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZVZlcnRpY2FsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWluLXdpZHRoOiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcwLjhyZW0nIDogJzAuNHJlbScpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgbWFyZ2luLXJpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcyLjJyZW0nIDogJzEuNXJlbScpfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcxLjhyZW0nIDogJzEuNXJlbScpfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnQGF0b21zL0Fycm93TGluay9BcnJvd0xpbmsnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIgfSBmcm9tICcuL0hlcm9Db3Vyc2VDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnQgPSAoe1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBsaW5rOiB7IHNsdWcgfSxcclxuICAgIGxpbmtOYW1lLFxyXG4gIH0sXHJcbiAgaW1hZ2UsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIDxBcnJvd0xpbmsgc2x1Zz17c2x1Z30gdGl0bGU9e2xpbmtOYW1lfSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICA8L0hlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQ291cnNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxpbms6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICAgIGxpbmtOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbkhlcm9Db3Vyc2VDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIGxpbmtOYW1lOiAnJyxcclxuICAgIGxpbms6IHtcclxuICAgICAgc2x1ZzogJycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBtYXgtd2lkdGg6IDUwcmVtO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEhlcm9JbnN0cnVjdG9yV3JhcHBlciB9IGZyb20gJy4vSGVyb0luc3RydWN0b3JDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50ID0gKHsgZGF0YTogeyBoZWFkZXIsIGluc3RydWN0b3IsIGRlc2NyaXB0aW9uIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICAgICA8aDU+e2hlYWRlcn08L2g1PlxyXG4gICAgICA8aDQ+e2luc3RydWN0b3J9PC9oND5cclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvSGVyb0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGluc3RydWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBpbnN0cnVjdG9yOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9JbnN0cnVjdG9yV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgRnVuY3Rpb25hbExpbmsgZnJvbSAnQGF0b21zL0Z1bmN0aW9uYWxMaW5rL0Z1bmN0aW9uYWxMaW5rJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1XcmFwcGVyLCBCdWxsZXQgfSBmcm9tICcuL0xpc3RJdGVtLnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgTGlzdEl0ZW0gPSAoeyBsaW5rLCBzZXRJc05hdk9wZW4sIGhhc0xpbmtzLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVdyYXBwZXI+XHJcbiAgICAgIDxCdWxsZXQgLz5cclxuICAgICAge2hhc0xpbmtzID8gPEZ1bmN0aW9uYWxMaW5rIGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPiA6IGNoaWxkcmVufVxyXG4gICAgPC9MaXN0SXRlbVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcclxuICBsaW5rOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFzTGlua3M6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtV3JhcHBlciA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZMaXN0fTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnVsbGV0ID0gc3R5bGVkLnNwYW5gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMjJweDtcclxuICBtaW4taGVpZ2h0OiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWluLXdpZHRoOiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlU21hbGx9IHtcclxuICAgIG1pbi13aWR0aDogMTZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgbWluLXdpZHRoOiA5cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDlweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgUGFnZVRpbGUgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZSc7XHJcbmltcG9ydCB7IFNlbWVzdGVyLCBIZWFkLCBSb3csIEFubm90YXRpb24gfSBmcm9tICcuL1ByaWNpbmdDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IFByaWNpbmdDb21wb25lbnQgPSAoeyBkYXRhOiB7IHRpdGxlLCBzZW1lc3RlciwgdGFibGVIZWFkLCB0YWJsZVJvd3MsIGFubm90YXRpb25zIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVRpbGU+XHJcbiAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAge3NlbWVzdGVyICYmIDxTZW1lc3Rlcj57c2VtZXN0ZXJ9PC9TZW1lc3Rlcj59XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzcGFuPnt0YWJsZUhlYWQucm93TmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3RhYmxlSGVhZC5yb3dDb250ZW50fTwvc3Bhbj5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7dGFibGVSb3dzLm1hcCgoeyByb3dOYW1lLCByb3dDb250ZW50LCBpZCB9KSA9PiAoXHJcbiAgICAgICAgPFJvdyBrZXk9e2lkfT5cclxuICAgICAgICAgIDxzcGFuPntyb3dOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3dDb250ZW50fTwvc3Bhbj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2Fubm90YXRpb25zLm1hcCgoeyBhbm5vdGF0aW9uLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICA8QW5ub3RhdGlvbiBrZXk9e2lkfT57YW5ub3RhdGlvbn08L0Fubm90YXRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYWdlVGlsZT5cclxuICApO1xyXG59O1xyXG5cclxuUHJpY2luZ0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VtZXN0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0YWJsZUhlYWQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB0YWJsZVJvd3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgYW5ub3RhdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5QcmljaW5nQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBzZW1lc3RlcjogJycsXHJcbiAgICB0YWJsZUhlYWQ6IHtcclxuICAgICAgcm93TmFtZTogJycsXHJcbiAgICAgIHJvd0NvbnRlbnQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHRhYmxlUm93czogW10sXHJcbiAgICBhbm5vdGF0aW9uczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbWVzdGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XHJcbiAgY29sdW1uLWdhcDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtCbHVlfTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWQgPSBzdHlsZWQoUm93KWBcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmNhcHRpb25NZWRpdW19O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uU21hbGx9O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgU3R5bGVkTWFya2Rvd24gfSBmcm9tICcuL1JpY2hUZXh0LnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgUmljaFRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTdHlsZWRNYXJrZG93bj57Y2hpbGRyZW59PC9TdHlsZWRNYXJrZG93bj47XHJcbn07XHJcblxyXG5SaWNoVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dDtcclxuIiwiaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFya2Rvd24gPSBzdHlsZWQoTWFya2Rvd24pYFxyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5yaWNoVGV4dE1hcmdpblRvcH07XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICBoMyxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA5LjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDUuOXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogNC44cmVtO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAzLjRyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICB9XHJcblxyXG4gIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcblxyXG4gICAgICAmOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRGb290ZXIsXHJcbiAgRm9vdGVyV3JhcHBlcixcclxuICBDb250ZW50V3JhcHBlcixcclxuICBJbmZvcm1hdGlvbldyYXBwZXIsXHJcbiAgU3R5bGVkU2Nob29sSW5mbyxcclxuICBMaW5lLFxyXG4gIEltYWdlc1dyYXBwZXIsXHJcbiAgSW1hZ2VXcmFwcGVyLFxyXG59IGZyb20gJy4vRm9vdGVyLnN0eWxlcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgZm9vdGVyOiB7IGhlYWRlciwgc2Nob29sTmFtZSwgZm9vdGVySW5mbywgZm9vdGVySW1hZ2VzIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRm9vdGVyPlxyXG4gICAgICA8Rm9vdGVyV3JhcHBlcj5cclxuICAgICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICA8aDM+e2hlYWRlcn08L2gzPlxyXG4gICAgICAgICAgPFN0eWxlZFNjaG9vbEluZm8+e3NjaG9vbE5hbWV9PC9TdHlsZWRTY2hvb2xJbmZvPlxyXG4gICAgICAgICAgPEluZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgICAgICAge2Zvb3RlckluZm8ubWFwKCh7IGlkLCBjYXB0aW9uLCBpbmZvIH0pID0+IChcclxuICAgICAgICAgICAgICA8cCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntjYXB0aW9ufTwvc3Bhbj4ge2luZm99XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvSW5mb3JtYXRpb25XcmFwcGVyPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPExpbmUgLz5cclxuICAgICAgICA8SW1hZ2VzV3JhcHBlcj5cclxuICAgICAgICAgIHtmb290ZXJJbWFnZXMubWFwKChmb290ZXJJbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyIGtleT17Zm9vdGVySW1hZ2UuaWR9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBpbWFnZT17Zm9vdGVySW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbWFnZXNXcmFwcGVyPlxyXG4gICAgICA8L0Zvb3RlcldyYXBwZXI+XHJcbiAgICA8L1N0eWxlZEZvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuRm9vdGVyLnByb3BUeXBlcyA9IHtcclxuICBmb290ZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzY2hvb2xOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZm9vdGVySW5mbzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAgIGZvb3RlckltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBmb290ZXI6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBzY2hvb2xOYW1lOiAnJyxcclxuICAgIGZvb3RlckluZm86IFtdLFxyXG4gICAgZm9vdGVySW1hZ2VzOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zdWJUZXh0fTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueHN9O1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54c1Z9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGU6ICdjb250ZW50IGxpbmUgaW1hZ2VzJztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueHNWfTtcclxuICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBncmlkLXRlbXBsYXRlOlxyXG4gICAgICAnY29udGVudCdcclxuICAgICAgJ2xpbmUnXHJcbiAgICAgICdpbWFnZXMnO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BUYWxsfSB7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTY2hvb2xJbmZvID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiAxNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogY29udGVudDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDhyZW07XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuc3BhbmBcclxuICBncmlkLWFyZWE6IGxpbmU7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDAuNnJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiBpbWFnZXM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEydnc7XHJcbiAgbWF4LXdpZHRoOiAzMHJlbTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIG1pbi13aWR0aDogMzByZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICdwcm92aWRlcnMvQXBwUHJvdmlkZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVhZGVyLCBMb2dvLCBNZW51QnV0dG9uLCBTdHlsZWRTcGFuLCBMb2FkZXIgfSBmcm9tICcuL05hdkJhci5zdHlsZXMnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKHsgbG9nbyB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzTmF2T3Blbiwgc2V0SXNOYXZPcGVuIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlciBpc0xvYWRpbmc9e2lzTG9hZGluZ30gaXNOYXZPcGVuPXtpc05hdk9wZW59PlxyXG4gICAgICA8TG9hZGVyIGlkPVwibG9hZGVyXCIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgPExvZ28gb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2xvZ299IHByaW9yaXR5IC8+XHJcbiAgICAgICAgPC9Mb2dvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxNZW51QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9IGlzTmF2T3Blbj17aXNOYXZPcGVufSBkYXRhLXRlc3RpZD1cIm1lbnUtYnV0dG9uXCI+XHJcbiAgICAgICAgPFN0eWxlZFNwYW4gc2hvcnQgaXNOYXZPcGVuPXtpc05hdk9wZW59IC8+XHJcbiAgICAgICAgPFN0eWxlZFNwYW4gaXNOYXZPcGVuPXtpc05hdk9wZW59IC8+XHJcbiAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGxvZ286IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIHBhZGRpbmc6IDFyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICB6LWluZGV4OiAzMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSwgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyBgMXJlbSAke3RoZW1lLnBhZGRpbmcuc31gIDogYDFyZW0gJHt0aGVtZS5wYWRkaW5nLm19YCl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogMnJlbSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuYWBcclxuICB3aWR0aDogMjJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogNnJlbTtcclxuICBoZWlnaHQ6ICR7KHsgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyAnNnJlbScgOiAndW5zZXQnKX07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46ICR7KHsgaXNOYXZPcGVuLCBzaG9ydCB9KSA9PiAoc2hvcnQgJiYgIWlzTmF2T3BlbiA/ICdyaWdodCcgOiAnY2VudGVyJyl9O1xyXG4gIHRyYW5zZm9ybTogJHsoeyBzaG9ydCwgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyAnc2NhbGVYKDEpJyA6IHNob3J0ID8gJ3NjYWxlWCgwLjUpJyA6ICdzY2FsZVgoMSknKX07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRyYW5zZm9ybTogJHsoeyBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICd0cmFuc2xhdGVZKDIuNXJlbSkgcm90YXRlKDQ1ZGVnKScgOiAnJyl9O1xyXG4gIH1cclxuXHJcbiAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJ3RyYW5zbGF0ZVkoLTIuNXJlbSkgcm90YXRlKC00NWRlZyknIDogJycpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDAuMnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IC0wLjJyZW07XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBpc0xvYWRpbmcgfSkgPT4gKGlzTG9hZGluZyA/ICd0cmFuc3BhcmVudCcgOiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IpfTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IExpbmVIb3Jpem9udGFsIGZyb20gJ0BhdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICdwcm92aWRlcnMvQXBwUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBTdHlsZWROYXZpZ2F0aW9uLCBDb250ZW50V3JhcHBlciB9IGZyb20gJy4vTmF2aWdhdGlvbi5zdHlsZXMnO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IG5hdkxpbmtzIH0pID0+IHtcclxuICBjb25zdCB7IHNldElzTmF2T3BlbiB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWROYXZpZ2F0aW9uPlxyXG4gICAgICB7bmF2TGlua3MubWFwKCh7IGdyb3VwTmFtZSwgaWQsIGxpbmtzIH0pID0+IChcclxuICAgICAgICA8Q29udGVudFdyYXBwZXIga2V5PXtpZH0+XHJcbiAgICAgICAgICA8TGluZUhvcml6b250YWw+XHJcbiAgICAgICAgICAgIDxoMz57Z3JvdXBOYW1lfTwvaDM+XHJcbiAgICAgICAgICA8L0xpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGhhc0xpbmtzIGtleT17bGluay5pZH0gbGluaz17bGlua30gc2V0SXNOYXZPcGVuPXtzZXRJc05hdk9wZW59IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICApKX1cclxuICAgIDwvU3R5bGVkTmF2aWdhdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgbmF2TGlua3M6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgZ3JvdXBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgbGlua3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgfSlcclxuICApLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5OYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBuYXZMaW5rczogW1xyXG4gICAge1xyXG4gICAgICBncm91cE5hbWU6ICcnLFxyXG4gICAgICBpZDogMCxcclxuICAgICAgbGlua3M6IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDByZW0sIGF1dG8pKTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc1Z9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeGl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDV2aDtcclxuICByaWdodDogNXZ3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiA0MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZMaXN0fTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnQG1vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dCc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgUGFnZVRpbGUgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZSc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRUaXRsZSxcclxuICBJbmZvU2VjdGlvbixcclxuICBJbmZvV3JhcHBlcixcclxuICBJbmZvQ29tcG9uZW50LFxyXG4gIFN0eWxlZFNwYW4sXHJcbiAgU3R5bGVkTGlzdCxcclxuICBTdHlsZWRJdGVtLFxyXG4gIFBhZ2VUaWxlV3JhcHBlcixcclxuICBTdHlsZWRUaWxlSGVhZGVyLFxyXG59IGZyb20gJy4vQ2lzY29Db3Vyc2Uuc3R5bGVzJztcclxuXHJcbmNvbnN0IENpc2NvQ291cnNlID0gKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXI6IHsgdGl0bGUsIGltYWdlIH0sXHJcbiAgICByaWNoVGV4dCxcclxuICAgIGNvdXJzZUluZm8sXHJcbiAgICBsaXN0VGl0bGUsXHJcbiAgICBsaXN0Q29tcG9uZW50LFxyXG4gIH0sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgaW1hZ2U9e2ltYWdlfT5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBjb2x1bW4+XHJcbiAgICAgICAge3JpY2hUZXh0Lm1hcCgoeyB0aXRsZSwgY29udGVudCwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgPFBhZ2VTZWN0aW9uIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgIDxSaWNoVGV4dD57Y29udGVudH08L1JpY2hUZXh0PlxyXG4gICAgICAgICAgPC9QYWdlU2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgICAgPEluZm9TZWN0aW9uPlxyXG4gICAgICAgIDxJbmZvV3JhcHBlcj5cclxuICAgICAgICAgIHtjb3Vyc2VJbmZvLm1hcCgoeyBjYXB0aW9uLCBpbmZvLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxJbmZvQ29tcG9uZW50IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRTcGFuPntjYXB0aW9ufTwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57aW5mb308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvSW5mb0NvbXBvbmVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW5mb1dyYXBwZXI+XHJcbiAgICAgIDwvSW5mb1NlY3Rpb24+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBzaG9ydCB3aWRlPlxyXG4gICAgICAgIDxQYWdlU2VjdGlvbiB3aWRlPlxyXG4gICAgICAgICAgPExpbmVIb3Jpem9udGFsIGxhcmdlPlxyXG4gICAgICAgICAgICA8aDE+e2xpc3RUaXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgIDxQYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIHtsaXN0Q29tcG9uZW50Lm1hcCgoeyB0aXRsZSwgbGlzdEl0ZW1zLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFBhZ2VUaWxlIHdpZGUga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGlsZUhlYWRlcj57dGl0bGV9PC9TdHlsZWRUaWxlSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkTGlzdD5cclxuICAgICAgICAgICAgICAgICAge2xpc3RJdGVtcy5tYXAoKHsgaXRlbSwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRJdGVtPntpdGVtfTwvU3R5bGVkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkTGlzdD5cclxuICAgICAgICAgICAgICA8L1BhZ2VUaWxlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvUGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQ2lzY29Db3Vyc2UucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG4gICAgcmljaFRleHQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgY291cnNlSW5mbzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXN0Q29tcG9uZW50OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuQ2lzY29Db3Vyc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICB9LFxyXG4gICAgcmljaFRleHQ6IFtdLFxyXG4gICAgY291cnNlSW5mbzogW10sXHJcbiAgICBsaXN0VGl0bGU6ICcnLFxyXG4gICAgbGlzdENvbXBvbmVudDogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpc2NvQ291cnNlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyTW9iaWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZ2VTZWN0aW9uV2lkdGh9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvQ29tcG9uZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZyZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC51bGBcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJdGVtID0gc3R5bGVkLnNwYW5gXHJcbiAgaW5saW5lLXNpemU6IDQwcmVtO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIGlubGluZS1zaXplOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlVGlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGlsZUhlYWRlciA9IHN0eWxlZC5oNGBcclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBtYXgtd2lkdGg6IDY3JTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlU21hbGx9IHtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgQ29udGVudFdyYXBwZXIsIEFkZHJlc3NXcmFwcGVyLCBJbmZvcm1hdGlvbldyYXBwZXIgfSBmcm9tICcuL0NvbnRhY3Quc3R5bGVzJztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoeyBkYXRhOiB7IHRpdGxlLCBzY2hvb2xOYW1lLCBjb250YWN0SW5mbyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8QWRkcmVzc1dyYXBwZXI+XHJcbiAgICAgICAgICA8aDQ+e3NjaG9vbE5hbWV9PC9oND5cclxuICAgICAgICA8L0FkZHJlc3NXcmFwcGVyPlxyXG4gICAgICAgIDxJbmZvcm1hdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICB7Y29udGFjdEluZm8ubWFwKCh7IGlkLCBjYXB0aW9uLCBpbmZvIH0pID0+IChcclxuICAgICAgICAgICAgPHAga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2NhcHRpb259PC9zcGFuPiB7aW5mb31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbmZvcm1hdGlvbldyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db250YWN0LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2Nob29sTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRhY3RJbmZvOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuQ29udGFjdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgYWRkcmVzczogJycsXHJcbiAgICBzY2hvb2xOYW1lOiAnJyxcclxuICAgIGNvbnRhY3RJbmZvOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ307XHJcbiAgd2lkdGg6IGNsYW1wKCR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlV2lkdGh9LCAxMDAlLCA4MHJlbSk7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkcmVzc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG4gIGg0LFxyXG4gIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAycmVtIDAgNnJlbSAwO1xyXG5cclxuICBwLFxyXG4gIHNwYW4ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvbkxhcmdlfTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRhdGFTaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGF0b21zL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEhlcm9BY2FkZW15V3JhcHBlciwgSGVhZGVyV3JhcHBlciwgRGVzY3JpcHRpb25XcmFwcGVyLCBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL0hlcm9BY2FkZW15LnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQWNhZGVteSA9ICh7IGRhdGE6IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b24sIGltYWdlIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0FjYWRlbXlXcmFwcGVyPlxyXG4gICAgICA8SGVhZGVyV3JhcHBlcj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8L0hlYWRlcldyYXBwZXI+XHJcbiAgICAgIDxEZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8QnV0dG9uIGRhdGE9e2J1dHRvbn0gLz5cclxuICAgICAgPC9EZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtpbWFnZX0gLz5cclxuICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICA8L0hlcm9BY2FkZW15V3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0FjYWRlbXkucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IGRhdGFTaGFwZSxcclxufTtcclxuXHJcbkhlcm9BY2FkZW15LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9BY2FkZW15O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvQWNhZGVteVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWNvbHVtbjogMS8zO1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogY2xhbXAoMzhyZW0sIDEwMCUsIDYwcmVtKTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ307XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofSk7XHJcbiAgICBncmlkLXJvdzogMy80O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrR3JheTtcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofSk7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZXJvQ291cnNlQ29tcG9uZW50IGZyb20gJ0Btb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC9IZXJvQ291cnNlQ29tcG9uZW50JztcclxuaW1wb3J0IExpbmVIb3Jpem9udGFsIGZyb20gJ0BhdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbCc7XHJcbmltcG9ydCB7IEhlcm9Db3Vyc2VXcmFwcGVyLCBDb250ZW50V3JhcHBlciB9IGZyb20gJy4vSGVyb0NvdXJzZXMuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VzID0gKHsgZGF0YTogeyB0aXRsZSwgaGVyb0NvdXJzZXMsIGFycm93SW1hZ2UgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlV3JhcHBlcj5cclxuICAgICAgPExpbmVIb3Jpem9udGFsIGxhcmdlPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIHtoZXJvQ291cnNlcy5tYXAoKGNvdXJzZURhdGEpID0+IChcclxuICAgICAgICAgIDxIZXJvQ291cnNlQ29tcG9uZW50IGtleT17Y291cnNlRGF0YS5pZH0gZGF0YT17Y291cnNlRGF0YX0gaW1hZ2U9e2Fycm93SW1hZ2V9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L0hlcm9Db3Vyc2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQ291cnNlcy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGFycm93SW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoZXJvQ291cnNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvQ291cnNlcy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVyb0NvdXJzZXM6IFtdLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlcztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0NvdXJzZVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwcmVtLCBhdXRvKSk7XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICAgIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVyb0luc3RydWN0b3JDb21wb25lbnQgZnJvbSAnQG1vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9JbnN0cnVjdG9yc1dyYXBwZXIgfSBmcm9tICcuL0hlcm9JbnN0cnVjdG9ycy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0luc3RydWN0b3JzID0gKHsgZGF0YTogeyBpbnN0cnVjdG9yQ29tcG9uZW50cyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9JbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgICAgIHtpbnN0cnVjdG9yQ29tcG9uZW50cy5tYXAoKGluc3RydWN0b3JEYXRhKSA9PiAoXHJcbiAgICAgICAgPEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50IGtleT17aW5zdHJ1Y3RvckRhdGEuaWR9IGRhdGE9e2luc3RydWN0b3JEYXRhfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvSGVyb0luc3RydWN0b3JzV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JzLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaW5zdHJ1Y3RvckNvbXBvbmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvSW5zdHJ1Y3RvcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGluc3RydWN0b3JDb21wb25lbnRzOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGF0b21zL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IEhlcm9QcmljaW5nV3JhcHBlciwgRGVzY3JpcHRpb25XcmFwcGVyIH0gZnJvbSAnLi9IZXJvUHJpY2luZy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb1ByaWNpbmcgPSAoeyBkYXRhOiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb1ByaWNpbmdXcmFwcGVyPlxyXG4gICAgICA8TGluZUhvcml6b250YWw+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICA8L0xpbmVIb3Jpem9udGFsPlxyXG4gICAgICA8RGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxCdXR0b24gZGF0YT17YnV0dG9ufSBhY2NlbnQgLz5cclxuICAgICAgPC9EZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICA8L0hlcm9QcmljaW5nV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1ByaWNpbmcucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5IZXJvUHJpY2luZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvUHJpY2luZztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb1ByaWNpbmdXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIHdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICBtYXJnaW46IDAgNXJlbSAwIDA7XHJcbiAgICB3aWR0aDogMzlyZW07XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgICBtYXJnaW46IDAgMCA0cmVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgICAgbWFyZ2luOiAwIDAgNHJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgICAgbWFyZ2luOiAwIDAgM3JlbSAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGF0b21zL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEhlcm9XcmFwcGVyLCBDb250ZW50V3JhcHBlciwgQnV0dG9uV3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9IZXJvLnN0eWxlcyc7XHJcbmltcG9ydCB7IGRhdGFTaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHsgZGF0YTogeyB0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbnMsIGltYWdlIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb1dyYXBwZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgIDxoMj57ZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIHtidXR0b25zLm1hcCgoYnV0dG9uRGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGtleT17YnV0dG9uRGF0YS5pZH0gZGF0YT17YnV0dG9uRGF0YX0gaGFzTWFyZ2luIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtpbWFnZX0gLz5cclxuICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICA8L0hlcm9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBkYXRhU2hhcGUsXHJcbn07XHJcblxyXG5IZXJvLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBidXR0b25zOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJ9O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wV2lkZX0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHZtaW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICB3aWR0aDogNDRyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlSGVhZGVyL1BhZ2VIZWFkZXInO1xyXG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnQHRlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnQG1vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dCc7XHJcbmltcG9ydCBQYWdlVGlsZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZVdyYXBwZXIvUGFnZVRpbGVXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VUaWxlIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGUvUGFnZVRpbGUnO1xyXG5pbXBvcnQgQXJyb3dMaW5rIGZyb20gJ0BhdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rJztcclxuaW1wb3J0IHsgU3R5bGVkVGl0bGUsIFN0eWxlZFNwYW4gfSBmcm9tICcuL09mZmVydC5zdHlsZXMnO1xyXG5cclxuY29uc3QgT2ZmZXJ0ID0gKHtcclxuICBkYXRhOiB7XHJcbiAgICBzZWN0aW9uSGVhZGVyOiB7IHRpdGxlLCBpbWFnZSB9LFxyXG4gICAgb2ZmZXJ0Q29tcG9uZW50cyxcclxuICAgIGFycm93SW1hZ2UsXHJcbiAgfSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZUhlYWRlciBpbWFnZT17aW1hZ2V9IGxvbmdUZXh0PlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIDwvUGFnZUhlYWRlcj5cclxuICAgICAgPFBhZ2VXcmFwcGVyIHNob3J0IGNvbHVtbj5cclxuICAgICAgICB7b2ZmZXJ0Q29tcG9uZW50cy5tYXAoKHsgdGl0bGUsIGNvbnRlbnQsIG9mZmVydENvdXJzZXMsIGlkIH0pID0+IChcclxuICAgICAgICAgIDxQYWdlU2VjdGlvbiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+e3RpdGxlfTwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICA8UmljaFRleHQ+e2NvbnRlbnR9PC9SaWNoVGV4dD5cclxuICAgICAgICAgICAgPFBhZ2VUaWxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICB7b2ZmZXJ0Q291cnNlcy5tYXAoKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBsaW5rTmFtZSwgbGluazogeyBzbHVnIH0sIGlkIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxQYWdlVGlsZSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj57ZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dMaW5rIGFjY2VudGVkIHNsdWc9e3NsdWd9IHRpdGxlPXtsaW5rTmFtZX0gaW1hZ2U9e2Fycm93SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VUaWxlPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1BhZ2VUaWxlV3JhcHBlcj5cclxuICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuT2ZmZXJ0LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgc2VjdGlvbkhlYWRlcjogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgfSksXHJcbiAgICBvZmZlcnRDb21wb25lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIGFycm93SW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbk9mZmVydC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgc2VjdGlvbkhlYWRlcjoge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXJ0Q29tcG9uZW50czogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVydDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmhlYWRlck1vYmlsZX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5U21hbGx9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnQG1vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dCc7XHJcbmltcG9ydCBQYWdlVGlsZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZVdyYXBwZXIvUGFnZVRpbGVXcmFwcGVyJztcclxuaW1wb3J0IFByaWNpbmdDb21wb25lbnQgZnJvbSAnQG1vbGVjdWxlcy9QcmljaW5nQ29tcG9uZW50L1ByaWNpbmdDb21wb25lbnQnO1xyXG5cclxuY29uc3QgUHJpY2luZyA9ICh7IGRhdGE6IHsgdGl0bGUsIGNvbnRlbnQsIHByaWNpbmdDb21wb25lbnRzIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgIDxQYWdlU2VjdGlvbj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxSaWNoVGV4dD57Y29udGVudH08L1JpY2hUZXh0PlxyXG4gICAgICAgIDxQYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICB7cHJpY2luZ0NvbXBvbmVudHMubWFwKChwcmljaW5nQ29tcG9uZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICA8UHJpY2luZ0NvbXBvbmVudCBrZXk9e2lkfSBkYXRhPXtwcmljaW5nQ29tcG9uZW50fSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9QYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5QcmljaW5nLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJpY2luZ0NvbXBvbmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5QcmljaW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIHByaWNpbmdDb21wb25lbnRzOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ0Btb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQnO1xyXG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5cclxuY29uc3QgUmVndWxhdGlvbnMgPSAoeyBkYXRhOiB7IHRpdGxlLCBjb250ZW50IH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgIDxQYWdlU2VjdGlvbj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxSaWNoVGV4dD57Y29udGVudH08L1JpY2hUZXh0PlxyXG4gICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgPC9QYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuUmVndWxhdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblJlZ3VsYXRpb25zLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVndWxhdGlvbnM7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZXJvIGZyb20gJ0BzZWN0aW9ucy9IZXJvL0hlcm8nO1xyXG5pbXBvcnQgSGVyb0luc3RydWN0b3JzIGZyb20gJ0BzZWN0aW9ucy9IZXJvSW5zdHJ1Y3RvcnMvSGVyb0luc3RydWN0b3JzJztcclxuaW1wb3J0IEhlcm9Db3Vyc2VzIGZyb20gJ0BzZWN0aW9ucy9IZXJvQ291cnNlcy9IZXJvQ291cnNlcyc7XHJcbmltcG9ydCBIZXJvUHJpY2luZyBmcm9tICdAc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcnO1xyXG5pbXBvcnQgSGVyb0FjYWRlbXkgZnJvbSAnQHNlY3Rpb25zL0hlcm9BY2FkZW15L0hlcm9BY2FkZW15JztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnQHNlY3Rpb25zL0NvbnRhY3QvQ29udGFjdCc7XHJcbmltcG9ydCBSZWd1bGF0aW9ucyBmcm9tICdAc2VjdGlvbnMvUmVndWxhdGlvbnMvUmVndWxhdGlvbnMnO1xyXG5pbXBvcnQgUHJpY2luZyBmcm9tICdAc2VjdGlvbnMvUHJpY2luZy9QcmljaW5nJztcclxuaW1wb3J0IE9mZmVydCBmcm9tICdAc2VjdGlvbnMvT2ZmZXJ0L09mZmVydCc7XHJcbmltcG9ydCBDaXNjb0NvdXJzZSBmcm9tICdAc2VjdGlvbnMvQ2lzY29Db3Vyc2UvQ2lzY29Db3Vyc2UnO1xyXG5cclxuLy8gTWFwIFN0cmFwaSBzZWN0aW9ucyB0byBzZWN0aW9uIGNvbXBvbmVudHNcclxuY29uc3Qgc2VjdGlvbkNvbXBvbmVudHMgPSB7XHJcbiAgJ3NlY3Rpb25zLmhlcm8nOiBIZXJvLFxyXG4gICdzZWN0aW9ucy5oZXJvLWluc3RydWN0b3JzJzogSGVyb0luc3RydWN0b3JzLFxyXG4gICdzZWN0aW9ucy5oZXJvLWNvdXJzZXMnOiBIZXJvQ291cnNlcyxcclxuICAnc2VjdGlvbnMuaGVyby1wcmljaW5nJzogSGVyb1ByaWNpbmcsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tYWNhZGVteSc6IEhlcm9BY2FkZW15LFxyXG4gICdzZWN0aW9ucy5jb250YWN0JzogQ29udGFjdCxcclxuICAnc2VjdGlvbnMucmVndWxhdGlvbnMnOiBSZWd1bGF0aW9ucyxcclxuICAnc2VjdGlvbnMucHJpY2luZyc6IFByaWNpbmcsXHJcbiAgJ3NlY3Rpb25zLm9mZmVydCc6IE9mZmVydCxcclxuICAnc2VjdGlvbnMuY2lzY28tY291cnNlJzogQ2lzY29Db3Vyc2UsXHJcbn07XHJcblxyXG4vLyBEaXNwbGF5IGEgc2VjdGlvbiBpbmRpdmlkdWFsbHlcclxuY29uc3QgU2VjdGlvbiA9ICh7IHNlY3Rpb25EYXRhIH0pID0+IHtcclxuICBjb25zdCBTZWN0aW9uQ29tcG9uZW50ID0gc2VjdGlvbkNvbXBvbmVudHNbc2VjdGlvbkRhdGEuX19jb21wb25lbnRdO1xyXG5cclxuICBpZiAoIVNlY3Rpb25Db21wb25lbnQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxTZWN0aW9uQ29tcG9uZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPjtcclxufTtcclxuXHJcbi8vIERpc3BsYXkgdGhlIGxpc3Qgb2Ygc2VjdGlvbnNcclxuY29uc3QgU2VjdGlvbnMgPSAoeyBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICA8U2VjdGlvbiBzZWN0aW9uRGF0YT17c2VjdGlvbn0ga2V5PXtgJHtzZWN0aW9uLl9fY29tcG9uZW50fSR7c2VjdGlvbi5pZH1gfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuICBzZWN0aW9uRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuU2VjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuU2VjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2VjdGlvbkRhdGE6IHtcclxuICAgIF9fY29tcG9uZW50OiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuU2VjdGlvbnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNlY3Rpb25zOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5cclxuY29uc3QgU2VvID0gKHsgc2VvIH0pID0+IHtcclxuICAvLyBQcmV2ZW50IGVycm9ycyBpZiBubyBtZXRhZGF0YSB3YXMgc2V0XHJcbiAgaWYgKCFzZW8pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHsgbWV0YVRpdGxlLCBtZXRhRGVzY3JpcHRpb24gfSA9IHNlbztcclxuXHJcbiAgcmV0dXJuIDxOZXh0U2VvIHRpdGxlPXttZXRhVGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259IC8+O1xyXG59O1xyXG5cclxuU2VvLnByb3BUeXBlcyA9IHtcclxuICBzZW86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBtZXRhVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtZXRhRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbztcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnQG9yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQG9yZ2FuaXNtcy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0BvcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICdwcm92aWRlcnMvQXBwUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBTdHlsZWRMYXlvdXQgfSBmcm9tICcuL0xheW91dC5zdHlsZXMnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIG5hdmlnYXRpb246IHsgbG9nbywgbmF2TGlua3MgfSwgZm9vdGVyIH0pID0+IHtcclxuICBjb25zdCB7IGlzTmF2T3BlbiB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRMYXlvdXQgaXNOYXZPcGVuPXtpc05hdk9wZW59PlxyXG4gICAgICA8TmF2QmFyIGxvZ289e2xvZ299IC8+XHJcbiAgICAgIHtpc05hdk9wZW4gJiYgPE5hdmlnYXRpb24gbmF2TGlua3M9e25hdkxpbmtzfSAvPn1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIGZvb3Rlcj17Zm9vdGVyfSAvPlxyXG4gICAgPC9TdHlsZWRMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgbmF2aWdhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGZvb3RlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBuYXZpZ2F0aW9uOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5b3V0ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJzEwMHZoJyA6ICdmaXQtY29udGVudCcpfTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJXcmFwcGVyLCBDb250ZW50V3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9QYWdlSGVhZGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBQYWdlSGVhZGVyID0gKHsgY2hpbGRyZW4sIGltYWdlLCBsb25nVGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlSGVhZGVyV3JhcHBlcj5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyIGxvbmdUZXh0PXtsb25nVGV4dH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxJbWFnZVdyYXBwZXIgbG9uZ1RleHQ9e2xvbmdUZXh0fT5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L1BhZ2VIZWFkZXJXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5QYWdlSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBsb25nVGV4dDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhsVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgaDEge1xyXG4gICAgbWF4LXdpZHRoOiAkeyh7IGxvbmdUZXh0IH0pID0+IChsb25nVGV4dCA/IGBtYXgtY29udGVudGAgOiBgNDByZW1gKX07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6ICR7KHsgbG9uZ1RleHQgfSkgPT4gKGxvbmdUZXh0ID8gYDEwMCVgIDogYDUwcmVtYCl9O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWF4LXdpZHRoOiAkeyh7IGxvbmdUZXh0IH0pID0+IChsb25nVGV4dCA/IGBtYXgtY29udGVudGAgOiBgNDByZW1gKX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHsoeyBsb25nVGV4dCB9KSA9PiAobG9uZ1RleHQgPyBgNDByZW1gIDogYDgwcmVtYCl9O1xyXG4gIG1heC13aWR0aDogJHsoeyBsb25nVGV4dCB9KSA9PiAobG9uZ1RleHQgPyBgNDByZW1gIDogYDgwcmVtYCl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gICAgbWFyZ2luOiAkeyh7IGxvbmdUZXh0IH0pID0+IChsb25nVGV4dCA/ICcwIGF1dG8nIDogMCl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHBhZGRpbmctdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFBhZ2VTZWN0aW9uV3JhcHBlciB9IGZyb20gJy4vUGFnZVNlY3Rpb24uc3R5bGUnO1xyXG5cclxuY29uc3QgUGFnZVNlY3Rpb24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8UGFnZVNlY3Rpb25XcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvUGFnZVNlY3Rpb25XcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VTZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlU2VjdGlvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVNlY3Rpb25XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFnZVNlY3Rpb25QYWRkaW5nfTtcclxuICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUsIHdpZGUgfSkgPT4gKHdpZGUgPyAnbWF4LWNvbnRlbnQnIDogdGhlbWUuZGltZW5zaW9ucy5wYWdlU2VjdGlvbldpZHRoKX07XHJcbiAgbWluLXdpZHRoOiAkeyh7IHdpZGUgfSkgPT4gKHdpZGUgPyAnMTIwcmVtJyA6IDApfTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIG1pbi13aWR0aDogJHsoeyB3aWRlIH0pID0+ICh3aWRlID8gJzEwMCUnIDogMCl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc1Z9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zc1Z9O1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgeyBTdHlsZWRQYWdlVGlsZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VUaWxlV3JhcHBlci5zdHlsZXMnO1xyXG5cclxuY29uc3QgUGFnZVRpbGVXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkUGFnZVRpbGVXcmFwcGVyPntjaGlsZHJlbn08L1N0eWxlZFBhZ2VUaWxlV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlVGlsZVdyYXBwZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpbGVXcmFwcGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRQYWdlVGlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgUGFnZVRpbGVXcmFwcGVyIH0gZnJvbSAnLi9QYWdlVGlsZS5zdHlsZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IFBhZ2VUaWxlID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPFBhZ2VUaWxlV3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1BhZ2VUaWxlV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlVGlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpbGU7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VUaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5yaWNoVGV4dE1hcmdpblRvcH07XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICB3aWR0aDogJHsoeyB3aWRlIH0pID0+ICh3aWRlID8gJ21heC1jb250ZW50JyA6ICc0MHJlbScpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFN0eWxlZFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi9QYWdlV3JhcHBlci5zdHlsZXMnO1xyXG5cclxuY29uc3QgUGFnZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkUGFnZVdyYXBwZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9TdHlsZWRQYWdlV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlV3JhcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBtaW4taGVpZ2h0OiAkeyh7IHNob3J0IH0pID0+IChzaG9ydCA/ICd1bnNldCcgOiAnOTB2aCcpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246ICR7KHsgY29sdW1uIH0pID0+IChjb2x1bW4gPyAnY29sdW1uJyA6ICdyb3cnKX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lLCB3aWRlIH0pID0+ICh3aWRlID8gdGhlbWUucGFkZGluZy54cyA6IHRoZW1lLnBhZGRpbmcubSl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSwgd2lkZSB9KSA9PiAod2lkZSA/IHRoZW1lLm1xLmxhcHRvcExhcmdlIDogdGhlbWUubXEudGFibGV0KX0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gIH1cclxuYDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAndXRpbHMvYXBpJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL3RlbXBsYXRlcy9MYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IFNlbyBmcm9tICdjb21wb25lbnRzL3N0cmFwaS9zZW8nO1xyXG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gJ3V0aWxzL2dldFBhZ2VEYXRhJztcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJztcclxuXHJcbmNvbnN0IER5bmFtaWNQYWdlID0gKHsgc2VjdGlvbnMsIG5hdmlnYXRpb24sIGZvb3Rlciwgc2VvIH0pID0+IHtcclxuICBpZiAoIXNlY3Rpb25zPy5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBmb290ZXI9e2Zvb3Rlcn0+XHJcbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XHJcbiAgICAgIDxTZWN0aW9ucyBzZWN0aW9ucz17c2VjdGlvbnN9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuRHluYW1pY1BhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICBuYXZpZ2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlbzogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYWdlcyA9IGF3YWl0IGZldGNoQVBJKCcvcGFnZXMnKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwYWdlcy5tYXAoKHBhZ2UpID0+IHtcclxuICAgIC8vIERlY29tcG9zZSB0aGUgc2x1ZyB0aGF0IHdhcyBzYXZlZCBpbiBTdHJhcGlcclxuICAgIGNvbnN0IHNsdWdBcnJheSA9ICFwYWdlLnNsdWcgPyBmYWxzZSA6IHBhZ2Uuc2x1Zy5zcGxpdCgnLycpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnOiBzbHVnQXJyYXkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGEoeyBzbHVnOiAhcGFyYW1zLnNsdWcgPyBbJyddIDogcGFyYW1zLnNsdWcgfSk7XHJcbiAgY29uc3QgbmF2aWdhdGlvbiA9IGF3YWl0IGZldGNoQVBJKCcvbmF2aWdhdGlvbicpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGF3YWl0IGZldGNoQVBJKCcvZm9vdGVyJyk7XHJcblxyXG4gIGlmIChwYWdlRGF0YSA9PSBudWxsKSB7XHJcbiAgICAvLyBHaXZpbmcgdGhlIHBhZ2Ugbm8gcHJvcHMgd2lsbCB0cmlnZ2VyIGEgNDA0IHBhZ2VcclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb250ZW50LCBzZW8gfSA9IHBhZ2VEYXRhO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VjdGlvbnM6IGNvbnRlbnQsXHJcbiAgICAgIHNlbyxcclxuICAgICAgbmF2aWdhdGlvbixcclxuICAgICAgZm9vdGVyLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksIFByb3BUeXBlcy5vYmplY3RdKSxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxufSkuaXNSZXF1aXJlZDtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGlsZHJlblNoYXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLCBQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLm5vZGVdKTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGlzTmF2T3BlbjogZmFsc2UsXHJcbiAgc2V0SXNOYXZPcGVuOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBBcHBQcm92aWRlciA9ICh7IGNoaWxkcmVuLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTmF2T3Blbiwgc2V0SXNOYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKHJvdXRlcikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHBhcmVudDogJyNsb2FkZXInIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTmF2T3BlbixcclxuICAgICAgICBzZXRJc05hdk9wZW4sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwUHJvdmlkZXI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnfSR7cGF0aH1gO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZURhdGEocGFyYW1zKSB7XHJcbiAgY29uc3Qgc2x1ZyA9IHBhcmFtcy5zbHVnLmpvaW4oJy8nKTtcclxuICAvLyBGaW5kIHRoZSBwYWdlcyB0aGF0IG1hdGNoIHRoaXMgc2x1Z1xyXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IGZldGNoQVBJKGAvcGFnZXM/c2x1Zz0ke3NsdWd9YCk7XHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBmb3VuZCBzb21ldGhpbmcsIG90aGVyd2lzZSByZXR1cm4gbnVsbFxyXG4gIGlmIChwYWdlc0RhdGEgPT0gbnVsbCB8fCBwYWdlc0RhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgaXRlbSBzaW5jZSB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgcmVzdWx0IHBlciBzbHVnXHJcbiAgcmV0dXJuIHBhZ2VzRGF0YVswXTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEoeyB1cmwgfSkge1xyXG4gIGNvbnN0IGltYWdlVXJsID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsO1xyXG4gIHJldHVybiBpbWFnZVVybDtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxpbmsiLCJJbWFnZSIsIkFycm93TGlua1dyYXBwZXIiLCJJbWFnZVdyYXBwZXIiLCJBcnJvd0xpbmsiLCJzbHVnIiwidGl0bGUiLCJpbWFnZSIsImFjY2VudGVkIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsIm1haW5Db2xvciIsImZvbnRTaXplIiwiYm9keSIsImRpdiIsIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsImRhdGEiLCJoYXNNYXJnaW4iLCJhY2NlbnQiLCJjYXB0aW9uIiwiaXNGaWxsZWQiLCJsaW5rIiwic2hhcGUiLCJhY2NlcHQiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsIndoaXRlIiwiRnVuY3Rpb25hbExpbmsiLCJuYW1lIiwibmV3VGFiIiwic2V0SXNOYXZPcGVuIiwic3RhdGUiLCJmdW5jIiwiTmV4dEltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJOZXh0SW1hZ2VXcmFwcGVyIiwiU3R5bGVkTmV4dEltYWdlIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkZXIiLCJpbWFnZVVybCIsImNvbnNvbGUiLCJlcnJvciIsInVybCIsIm51bWJlciIsInByaW9yaXR5IiwiY2hpbGRyZW5TaGFwZSIsIkxpbmVIb3Jpem9udGFsV3JhcHBlciIsIkxpbmUiLCJMaW5lSG9yaXpvbnRhbCIsImNoaWxkcmVuIiwibGFyZ2UiLCJzcGFuIiwiTGluZVZlcnRpY2FsV3JhcHBlciIsIkxpbmVWZXJ0aWNhbCIsIm1xIiwibW9iaWxlTGFyZ2UiLCJIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciIsIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsImxpbmtOYW1lIiwiZGltZW5zaW9ucyIsInRpbGVQYWRkaW5nIiwiYm94U2hhZG93IiwidGlsZVBhZGRpbmdNb2JpbGUiLCJIZXJvSW5zdHJ1Y3RvcldyYXBwZXIiLCJIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCIsImhlYWRlciIsImluc3RydWN0b3IiLCJkZXNrdG9wIiwibGFwdG9wIiwicGFkZGluZyIsIm1WIiwiTGlzdEl0ZW1XcmFwcGVyIiwiQnVsbGV0IiwiTGlzdEl0ZW0iLCJoYXNMaW5rcyIsImxpIiwibmF2TGlzdCIsIm1vYmlsZVNtYWxsIiwiUGFnZVRpbGUiLCJTZW1lc3RlciIsIkhlYWQiLCJSb3ciLCJBbm5vdGF0aW9uIiwiUHJpY2luZ0NvbXBvbmVudCIsInNlbWVzdGVyIiwidGFibGVIZWFkIiwidGFibGVSb3dzIiwiYW5ub3RhdGlvbnMiLCJyb3dOYW1lIiwicm93Q29udGVudCIsIm1hcCIsImlkIiwiYW5ub3RhdGlvbiIsImFycmF5T2YiLCJzdWJUZXh0IiwiZGFya0JsdWUiLCJjYXB0aW9uTWVkaXVtIiwicCIsImNhcHRpb25TbWFsbCIsIlN0eWxlZE1hcmtkb3duIiwiUmljaFRleHQiLCJNYXJrZG93biIsInJpY2hUZXh0TWFyZ2luVG9wIiwiYmxhY2siLCJTdHlsZWRGb290ZXIiLCJGb290ZXJXcmFwcGVyIiwiQ29udGVudFdyYXBwZXIiLCJJbmZvcm1hdGlvbldyYXBwZXIiLCJTdHlsZWRTY2hvb2xJbmZvIiwiSW1hZ2VzV3JhcHBlciIsIkZvb3RlciIsImZvb3RlciIsInNjaG9vbE5hbWUiLCJmb290ZXJJbmZvIiwiZm9vdGVySW1hZ2VzIiwiaW5mbyIsImZvb3RlckltYWdlIiwibSIsInMiLCJ4cyIsInhzViIsInRpbGVXaWR0aCIsImRlc2t0b3BUYWxsIiwidGFibGV0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJIZWFkZXIiLCJMb2dvIiwiTWVudUJ1dHRvbiIsIlN0eWxlZFNwYW4iLCJMb2FkZXIiLCJOYXZCYXIiLCJsb2dvIiwiaXNMb2FkaW5nIiwiaXNOYXZPcGVuIiwiYnV0dG9uIiwic2hvcnQiLCJTdHlsZWROYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsIm5hdkxpbmtzIiwiZ3JvdXBOYW1lIiwibGlua3MiLCJuYXYiLCJ4ViIsIngiLCJzViIsIkV4aXRCdXR0b24iLCJQYWdlSGVhZGVyIiwiUGFnZVdyYXBwZXIiLCJQYWdlU2VjdGlvbiIsIlN0eWxlZFRpdGxlIiwiSW5mb1NlY3Rpb24iLCJJbmZvV3JhcHBlciIsIkluZm9Db21wb25lbnQiLCJTdHlsZWRMaXN0IiwiU3R5bGVkSXRlbSIsIlBhZ2VUaWxlV3JhcHBlciIsIlN0eWxlZFRpbGVIZWFkZXIiLCJDaXNjb0NvdXJzZSIsInJpY2hUZXh0IiwiY291cnNlSW5mbyIsImxpc3RUaXRsZSIsImxpc3RDb21wb25lbnQiLCJjb250ZW50IiwibGlzdEl0ZW1zIiwiaXRlbSIsImgxIiwiaGVhZGVyTW9iaWxlIiwic2VjdGlvbiIsInBhZ2VTZWN0aW9uV2lkdGgiLCJjYXB0aW9uTGFyZ2VNZWRpdW0iLCJ1bCIsImg0IiwiQWRkcmVzc1dyYXBwZXIiLCJDb250YWN0IiwiY29udGFjdEluZm8iLCJhZGRyZXNzIiwiY2FwdGlvbkxhcmdlIiwiZGF0YVNoYXBlIiwiSGVyb0FjYWRlbXlXcmFwcGVyIiwiSGVhZGVyV3JhcHBlciIsIkRlc2NyaXB0aW9uV3JhcHBlciIsIkhlcm9BY2FkZW15IiwiSGVyb0NvdXJzZVdyYXBwZXIiLCJIZXJvQ291cnNlcyIsImhlcm9Db3Vyc2VzIiwiYXJyb3dJbWFnZSIsImNvdXJzZURhdGEiLCJIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyIiwiSGVyb0luc3RydWN0b3JzIiwiaW5zdHJ1Y3RvckNvbXBvbmVudHMiLCJpbnN0cnVjdG9yRGF0YSIsImxhcHRvcExhcmdlIiwiSGVyb1ByaWNpbmdXcmFwcGVyIiwiSGVyb1ByaWNpbmciLCJIZXJvV3JhcHBlciIsIkJ1dHRvbldyYXBwZXIiLCJIZXJvIiwiYnV0dG9ucyIsImJ1dHRvbkRhdGEiLCJkZXNrdG9wV2lkZSIsIk9mZmVydCIsInNlY3Rpb25IZWFkZXIiLCJvZmZlcnRDb21wb25lbnRzIiwib2ZmZXJ0Q291cnNlcyIsImJvZHlTbWFsbCIsIlByaWNpbmciLCJwcmljaW5nQ29tcG9uZW50cyIsInByaWNpbmdDb21wb25lbnQiLCJSZWd1bGF0aW9ucyIsInNlY3Rpb25Db21wb25lbnRzIiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiU2VjdGlvbkNvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiU2VjdGlvbnMiLCJzZWN0aW9ucyIsIk5leHRTZW8iLCJTZW8iLCJzZW8iLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJTdHlsZWRMYXlvdXQiLCJMYXlvdXQiLCJuYXZpZ2F0aW9uIiwiUGFnZUhlYWRlcldyYXBwZXIiLCJsb25nVGV4dCIsInhsViIsIlBhZ2VTZWN0aW9uV3JhcHBlciIsInByb3BzIiwicGFnZVNlY3Rpb25QYWRkaW5nIiwid2lkZSIsInNzViIsIlN0eWxlZFBhZ2VUaWxlV3JhcHBlciIsIlN0eWxlZFBhZ2VXcmFwcGVyIiwiY29sdW1uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwia2luZCIsInciLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZldGNoQVBJIiwiZ2V0UGFnZURhdGEiLCJFcnJvclBhZ2UiLCJEeW5hbWljUGFnZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJzbHVnQXJyYXkiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFnZURhdGEiLCJvbmVPZlR5cGUiLCJub2RlIiwiY3JlYXRlQ29udGV4dCIsIk5Qcm9ncmVzcyIsIkFwcFByb3ZpZGVyIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3RhcnQiLCJjb25maWd1cmUiLCJoYW5kbGVTdG9wIiwiZG9uZSIsIm9mZiIsImdldFN0cmFwaVVSTCIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwicGFnZXNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==