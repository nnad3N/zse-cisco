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
        src: imageUrl ? imageUrl : '/imgError.svg',
        alt: alternativeText || 'image',
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
  image: {
    url: '',
    alternativeText: 'Image failed to load properly',
    width: 0,
    height: 0
  }
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
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/ArrowLink/ArrowLink */ "./components/atoms/ArrowLink/ArrowLink.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroCourseComponent.styles */ "./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent\\HeroCourseComponent.js";








const HeroCourseComponent = ({
  data: {
    title,
    description,
    link: {
      slug
    },
    linkName,
    icon
  },
  image
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_5__.HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_3__.default, {
      slug: slug,
      title: linkName,
      image: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
/* harmony export */   "HeroCourseComponentWrapper": () => (/* binding */ HeroCourseComponentWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroCourseComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroCourseComponentstyles__HeroCourseComponentWrapper",
  componentId: "sc-jbblf5-0"
})(["align-self:flex-start;display:flex;flex-direction:column;padding:", ";background-color:", ";border-radius:", ";box-shadow:", ";position:relative;max-width:50rem;&:nth-child(odd){justify-self:end;}&:nth-child(even){justify-self:start;}h4{text-align:center;margin-bottom:2rem;}a{margin-top:4rem;}", "{padding:", ";}"], ({
  theme
}) => theme.dimensions.heroCoursePadding, ({
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
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroCourseComponentstyles__ImageWrapper",
  componentId: "sc-jbblf5-1"
})(["height:10rem;width:10rem;border-radius:50%;position:absolute;transform:translate(-90%,-65%);", "{display:none;}"], ({
  theme
}) => theme.mq.mobileLarge);

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
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroInstructorComponent.styles */ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroInstructorComponent\\HeroInstructorComponent.js";






const HeroInstructorComponent = ({
  data: {
    header,
    instructor,
    description,
    image
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__.HeroInstructorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__.InstructorWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        children: instructor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
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

HeroInstructorComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    instructor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
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
/* harmony export */   "HeroInstructorWrapper": () => (/* binding */ HeroInstructorWrapper),
/* harmony export */   "InstructorWrapper": () => (/* binding */ InstructorWrapper),
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroInstructorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__HeroInstructorWrapper",
  componentId: "sc-185e0jh-0"
})(["display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:", " 0;", "{&:first-child{justify-content:flex-start;}&:nth-child(2){justify-content:flex-end;}}", "{padding:0 0 ", " 0;&:not(:last-child){padding:", " 0;}}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.mq.heroInstructors, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.mV);
const InstructorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__InstructorWrapper",
  componentId: "sc-185e0jh-1"
})(["flex-basis:42rem;display:flex;flex-direction:column;color:", ";padding:0 3rem;h4{margin-bottom:1rem;}", "{flex-basis:32rem;padding:0;}", "{padding:0 ", ";flex-basis:unset;}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.heroInstructors, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.s);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__ImageWrapper",
  componentId: "sc-185e0jh-2"
})(["width:20rem;border-radius:50%;margin:2rem 3rem;", "{margin:0 6rem 0 0;}"], ({
  theme
}) => theme.mq.heroInstructors);

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
const _excluded = ["link", "setIsNavOpen", "hasLinks", "children"];
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\ListItem\\ListItem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ListItem = _ref => {
  let {
    link,
    setIsNavOpen,
    hasLinks,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ListItem_styles__WEBPACK_IMPORTED_MODULE_3__.ListItemWrapper, _objectSpread(_objectSpread({}, props), {}, {
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
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

ListItem.propTypes = {
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  hasLinks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  children: propTypes_componentTypes__WEBPACK_IMPORTED_MODULE_4__.childrenShape,
  props: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
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
})(["display:flex;align-items:", ";&:not(:last-child){margin-bottom:1.5rem;}a{font-size:", ";}"], ({
  long
}) => long ? 'flex-start' : 'center', ({
  theme
}) => theme.fontSize.navList);
const Bullet = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "ListItemstyles__Bullet",
  componentId: "sc-14qipgk-1"
})(["position:relative;min-width:2.2rem;min-height:2.2rem;border-radius:50%;margin-right:1.5rem;background-color:", ";&::before{position:absolute;content:'';top:50%;left:50%;min-width:1.2rem;min-height:1.2rem;border-radius:50%;transform:translate(-50%,-50%);background-color:", ";}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.mainColor);

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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.StyledSchoolInfo, {
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
        lineNumber: 20,
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
})(["padding:", " ", ";background-color:", ";color:", ";display:flex;justify-content:center;", "{padding:", " ", ";}h3{grid-area:header;color:", ";}p{text-align:left;font-size:", ";}"], ({
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
}) => theme.colors.accentColor, ({
  theme
}) => theme.fontSize.subText);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__FooterWrapper",
  componentId: "sc-1y4rl0m-1"
})(["display:grid;column-gap:", ";row-gap:", ";width:100%;grid-template:'header line images' 'content line images';", "{max-width:", ";grid-template:'header ' 'content' 'line' 'images';}", "{p{font-size:", ";}}", "{max-width:100%;text-align:center;}", "{width:unset;max-width:unset;}"], ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.padding.xsV, ({
  theme
}) => theme.mq.desktop, ({
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
})(["grid-area:content;display:flex;align-items:center;", "{justify-content:space-between;}"], ({
  theme
}) => theme.mq.desktop);
const InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__InformationWrapper",
  componentId: "sc-1y4rl0m-4"
})(["margin-left:8rem;span{color:", ";margin-right:0.4rem;font-weight:600;}", "{margin-left:0;}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.mq.desktop);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Footerstyles__Line",
  componentId: "sc-1y4rl0m-5"
})(["grid-area:line;justify-self:center;width:0.6rem;height:100%;background-color:", ";", "{width:100%;height:0.5rem;}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.mq.desktop);
const ImagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__ImagesWrapper",
  componentId: "sc-1y4rl0m-6"
})(["grid-area:images;display:flex;justify-content:space-between;align-items:center;", "{flex-direction:column;}"], ({
  theme
}) => theme.mq.tablet);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Footerstyles__ImageWrapper",
  componentId: "sc-1y4rl0m-7"
})(["width:12vw;max-width:30rem;&:first-child{margin-right:5rem;}", "{width:25rem;}", "{min-width:30rem;&:first-child{margin:5rem 0;}}"], ({
  theme
}) => theme.mq.desktop, ({
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
})(["display:flex;justify-content:space-between;align-items:center;min-height:10vh;padding:1rem ", ";background-color:", ";color:", ";z-index:30;border-bottom:2px solid ", ";position:relative;img{border-radius:0;}", "{padding:2rem ", ";}"], ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.accentColor, ({
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
    groupName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    links: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired
  }))
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
})(["position:absolute;min-height:90vh;width:100%;z-index:20;background-color:", ";padding:", " ", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(50rem,auto));row-gap:", ";column-gap:", ";justify-content:center;align-content:start;", "{padding:", " ", ";grid-template-columns:100%;}img{border-radius:0;}"], ({
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
})(["display:flex;flex-direction:column;width:100%;justify-self:center;& > div{margin-bottom:2rem;text-align:left;}a{font-size:", ";}"], ({
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
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @templates/PageTile/PageTile */ "./components/templates/PageTile/PageTile.js");
/* harmony import */ var _molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @molecules/ListItem/ListItem */ "./components/molecules/ListItem/ListItem.js");
/* harmony import */ var _CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CiscoCourse.styles */ "./components/sections/CiscoCourse/CiscoCourse.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\CiscoCourse\\CiscoCourse.js";














const CiscoCourse = ({
  data: {
    header: {
      title,
      image
    },
    richText,
    iconInfo,
    listTitle,
    listComponent
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_templates_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
      image: image,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h1", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
      column: true,
      children: richText.map(({
        title,
        content,
        id
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.StyledTitle, {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_molecules_RichText_RichText__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.InfoSection, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.InfoWrapper, {
        children: iconInfo.map(({
          caption,
          value,
          icon,
          id
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.InfoComponent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.ImageWrapper, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_7__.default, {
              image: icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.StyledSpan, {
            children: caption
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
            children: value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_templates_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
      short: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_templates_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_5__.default, {
        wide: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_8__.default, {
          large: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h1", {
            children: listTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.PageTileWrapper, {
          children: listComponent.map(({
            title,
            listItems,
            id
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_templates_PageTile_PageTile__WEBPACK_IMPORTED_MODULE_9__.default, {
            wide: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.StyledTileHeader, {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.StyledList, {
              children: listItems.map(({
                item,
                id
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_10__.default, {
                long: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CiscoCourse_styles__WEBPACK_IMPORTED_MODULE_11__.StyledItem, {
                  children: item
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 23
                }, undefined)
              }, id, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined)]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

CiscoCourse.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    header: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
    }),
    richText: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
    iconInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
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
    iconInfo: [],
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
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper),
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
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s);
const InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__InfoWrapper",
  componentId: "sc-16b5gs6-2"
})(["display:flex;justify-content:space-between;margin:0 auto;", "{width:max-content;flex-direction:column;align-items:flex-start;}"], ({
  theme
}) => theme.mq.laptopLarge);
const InfoComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__InfoComponent",
  componentId: "sc-16b5gs6-3"
})(["display:flex;align-items:center;color:", ";&:not(:last-child){margin-right:8rem;}span{font-size:", ";}", "{&:not(:last-child){margin-right:0;margin-bottom:4rem;}}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.fontSize.captionLargeMedium, ({
  theme
}) => theme.mq.laptopLarge);
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "CiscoCoursestyles__StyledSpan",
  componentId: "sc-16b5gs6-4"
})(["color:", ";font-weight:600;margin-right:0.6rem;"], ({
  theme
}) => theme.colors.accentColor);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__ImageWrapper",
  componentId: "sc-16b5gs6-5"
})(["width:7rem;margin-right:3rem;"]);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "CiscoCoursestyles__StyledList",
  componentId: "sc-16b5gs6-6"
})(["margin-top:4rem;font-size:", ";"], ({
  theme
}) => theme.fontSize.body);
const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "CiscoCoursestyles__StyledItem",
  componentId: "sc-16b5gs6-7"
})(["inline-size:40rem;overflow-wrap:break-word;", "{inline-size:100%;}"], ({
  theme
}) => theme.mq.mobileLarge);
const PageTileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CiscoCoursestyles__PageTileWrapper",
  componentId: "sc-16b5gs6-8"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;", "{flex-direction:column;align-items:center;}"], ({
  theme
}) => theme.mq.laptopLarge);
const StyledTileHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "CiscoCoursestyles__StyledTileHeader",
  componentId: "sc-16b5gs6-9"
})(["", "{max-width:75%;}"], ({
  theme
}) => theme.mobileLarge);

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
    address,
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
          children: schoolName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h5", {
          children: address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
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
            lineNumber: 21,
            columnNumber: 15
          }, undefined), " ", info]
        }, id, true, {
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
})(["background-color:", ";border-radius:", ";box-shadow:", ";padding:", ";width:clamp(", ",100%,80rem);", "{padding:", ";}"], ({
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
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.tilePaddingMobile);
const AddressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Contactstyles__AddressWrapper",
  componentId: "sc-mucvv7-1"
})(["margin-top:6rem;h4,h5{font-weight:400;}h5{font-size:", ";margin-top:0.5rem;}"], ({
  theme
}) => theme.fontSize.subText);
const InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Contactstyles__InformationWrapper",
  componentId: "sc-mucvv7-2"
})(["margin:4rem 0 6rem 0;p,span{font-size:", ";}span{margin-right:0.4rem;font-weight:600;}", "{margin:4rem 0 0 0;}"], ({
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
}) => theme.padding.x, ({
  theme
}) => `calc(${theme.padding.xV} + 2rem)`, ({
  theme
}) => `calc(${theme.padding.xV} + 2rem)`, ({
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
})(["padding:0 ", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(34rem,1fr));column-gap:", ";justify-content:center;background-color:", ";", "{column-gap:", ";}", "{padding:0;}"], ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.padding.s, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.padding.m, ({
  theme
}) => theme.mq.mobileLarge);

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
  sectionData: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
};
Sections.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)).isRequired
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
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\seo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    metaTitle,
    metaDescription,
    sharedImage
  } = seo; // Prevent errors if no metadata was set

  if (!seo) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: metaTitle,
    description: metaDescription,
    openGraph: _objectSpread({
      title: metaTitle,
      description: metaDescription
    }, sharedImage && sharedImage.formats && {
      images: Object.values(sharedImage.formats).map(image => {
        return {
          url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image),
          width: image.width,
          height: image.height
        };
      })
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

Seo.propTypes = {
  seo: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    metaTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    metaDescription: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    shareImage: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
  })
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
  navigation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
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
  image
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PageHeader_styles__WEBPACK_IMPORTED_MODULE_4__.PageHeaderWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PageHeader_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PageHeader_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
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
  image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
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
})(["width:100%;display:flex;align-items:center;justify-content:space-between;h1{max-width:40rem;}", "{width:max-content;flex-direction:column;align-items:flex-start;h1{max-width:max-content;}}", "{width:50rem;h1{max-width:30rem;}}", "{width:100%;}"], ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.mq.mobileLarge);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PageHeaderstyles__ImageWrapper",
  componentId: "sc-6s6ap7-2"
})(["width:80rem;max-width:80rem;display:flex;align-items:center;justify-content:center;", "{width:100%;padding-top:", ";}", "{padding-top:", ";}"], ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.padding.xV, ({
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
})(["margin-bottom:", ";background-color:", ";border-radius:", ";box-shadow:", ";padding:", ";max-width:", ";min-width:", ";&:last-child{margin-bottom:0;}", "{min-width:", ";}", "{margin-bottom:", ";padding:", ";}"], ({
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
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
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
})(["display:flex;flex-direction:column;margin-top:", ";padding:", ";background-color:", ";border-radius:", ";width:", ";color:", ";", "{width:100%;}", "{padding:", ";}"], ({
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
}) => theme.mq.tablet, ({
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
})(["padding:", " ", ";min-height:", ";display:flex;align-items:center;justify-content:center;flex-direction:", ";", "{padding:", " ", ";min-height:unset;}"], ({
  theme
}) => theme.padding.xV, ({
  theme
}) => theme.padding.m, ({
  short
}) => short ? 'unset' : '90vh', ({
  column
}) => column ? 'column' : 'row', ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.padding.mV, ({
  theme
}) => theme.padding.s);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0Fycm93TGluay9BcnJvd0xpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vQnV0dG9uLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0Z1bmN0aW9uYWxMaW5rL0Z1bmN0aW9uYWxMaW5rLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50L0hlcm9Db3Vyc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC9IZXJvQ291cnNlQ29tcG9uZW50LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNpbmdDb21wb25lbnQvUHJpY2luZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljaW5nQ29tcG9uZW50L1ByaWNpbmdDb21wb25lbnQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3Rlci9Gb290ZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9DaXNjb0NvdXJzZS9DaXNjb0NvdXJzZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0Npc2NvQ291cnNlL0Npc2NvQ291cnNlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3QvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3QvQ29udGFjdC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9BY2FkZW15L0hlcm9BY2FkZW15LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0NvdXJzZXMvSGVyb0NvdXJzZXMuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0luc3RydWN0b3JzL0hlcm9JbnN0cnVjdG9ycy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZy5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvL0hlcm8uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvT2ZmZXJ0L09mZmVydC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL09mZmVydC9PZmZlcnQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJpY2luZy9QcmljaW5nLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUmVndWxhdGlvbnMvUmVndWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zdHJhcGkvc2VvLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0L0xheW91dC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VIZWFkZXIvUGFnZUhlYWRlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24uc3R5bGUuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVRpbGVXcmFwcGVyL1BhZ2VUaWxlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZVdyYXBwZXIvUGFnZVRpbGVXcmFwcGVyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vcGFnZXMvW1suLi5zbHVnXV0uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vcHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3Byb3ZpZGVycy9BcHBQcm92aWRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvZ2V0UGFnZURhdGEuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9lcnJvclwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL3pzZS1jaXNjby9pZ25vcmVkfEM6XFxVc2Vyc1xcbm5hZDNcXERlc2t0b3BcXFdlYiBkZXZlbG9wbWVudFxcT3JpZ2luYWxcXHpzZS1jaXNjb1xcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEFycm93TGlua1dyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vQXJyb3dMaW5rLnN0eWxlcyc7XHJcblxyXG5jb25zdCBBcnJvd0xpbmsgPSAoeyBzbHVnLCB0aXRsZSwgaW1hZ2UsIGFjY2VudGVkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke3NsdWd9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxBcnJvd0xpbmtXcmFwcGVyIGFjY2VudGVkPXthY2NlbnRlZH0+XHJcbiAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8L0Fycm93TGlua1dyYXBwZXI+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkFycm93TGluay5wcm9wVHlwZXMgPSB7XHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYWNjZW50ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuQXJyb3dMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzbHVnOiAnJyxcclxuICB0aXRsZTogJycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xpbms7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFycm93TGlua1dyYXBwZXIgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudGVkIH0pID0+IChhY2NlbnRlZCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKX07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzLjhyZW07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFN0eWxlZEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uLnN0eWxlcyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBkYXRhLCBoYXNNYXJnaW4sIGFjY2VudCB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2FwdGlvbixcclxuICAgIGlzRmlsbGVkLFxyXG4gICAgbGluazogeyBzbHVnIH0sXHJcbiAgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8U3R5bGVkQnV0dG9uIGhhc01hcmdpbj17aGFzTWFyZ2lufSBpc0ZpbGxlZD17aXNGaWxsZWR9IGFjY2VudD17YWNjZW50fT5cclxuICAgICAgICB7Y2FwdGlvbn1cclxuICAgICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpc0ZpbGxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBoYXNNYXJnaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGFjY2VwdDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGNhcHRpb246ICcnLFxyXG4gICAgbGluazoge1xyXG4gICAgICBzbHVnOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBib3JkZXI6ICR7KHsgdGhlbWUsIGlzRmlsbGVkIH0pID0+IChpc0ZpbGxlZCA/ICcwJyA6IGAzcHggc29saWQgJHt0aGVtZS5jb2xvcnMubWFpbkNvbG9yfWApfTtcclxuICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudCB9KSA9PiAoYWNjZW50ID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGlzRmlsbGVkLCBhY2NlbnQgfSkgPT4gKGlzRmlsbGVkID8gKGFjY2VudCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpIDogJ3RyYW5zcGFyZW50Jyl9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCB9KSA9PiAoaXNGaWxsZWQgPyB0aGVtZS5jb2xvcnMud2hpdGUgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogJHsoeyBoYXNNYXJnaW4gfSkgPT4gKGhhc01hcmdpbiA/ICcycmVtJyA6ICcwJyl9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEZ1bmN0aW9uYWxMaW5rID0gKHsgbGluazogeyBuYW1lLCBzbHVnLCBuZXdUYWIgfSwgc2V0SXNOYXZPcGVuIH0pID0+IHtcclxuICBpZiAobmV3VGFiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YSBocmVmPXtzbHVnfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKChzdGF0ZSkgPT4gIXN0YXRlKX0+XHJcbiAgICAgICAge25hbWV9XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke3NsdWd9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PntuYW1lfTwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuRnVuY3Rpb25hbExpbmsucHJvcFR5cGVzID0ge1xyXG4gIGxpbms6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5ld1RhYjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBzZXRJc05hdk9wZW46IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRnVuY3Rpb25hbExpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxpbms6IHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgc2x1ZzogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uYWxMaW5rO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJ3V0aWxzL21lZGlhJztcclxuaW1wb3J0IHsgTmV4dEltYWdlV3JhcHBlciwgU3R5bGVkTmV4dEltYWdlIH0gZnJvbSAnLi9JbWFnZS5zdHlsZXMnO1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSB9KSA9PiB7XHJcbiAgaWYgKGltYWdlKSB7XHJcbiAgICBjb25zdCB7IGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2U7XHJcblxyXG4gICAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TmV4dEltYWdlV3JhcHBlcj5cclxuICAgICAgICA8U3R5bGVkTmV4dEltYWdlXHJcbiAgICAgICAgICBsb2FkZXI9e2xvYWRlcn1cclxuICAgICAgICAgIHVub3B0aW1pemVkXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgc3JjPXtpbWFnZVVybCA/IGltYWdlVXJsIDogJy9pbWdFcnJvci5zdmcnfVxyXG4gICAgICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgJ2ltYWdlJ31cclxuICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9OZXh0SW1hZ2VXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIHJldHVybiA8TmV4dEltYWdlIHNyYz1cIi9pbWdFcnJvci5zdmdcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0gLz47XHJcbiAgfVxyXG59O1xyXG5cclxuSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWx0ZXJuYXRpdmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfSksXHJcbiAgcHJpb3JpdHk6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlOiB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYWx0ZXJuYXRpdmVUZXh0OiAnSW1hZ2UgZmFpbGVkIHRvIGxvYWQgcHJvcGVybHknLFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXh0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5leHRJbWFnZSA9IHN0eWxlZChOZXh0SW1hZ2UpYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IExpbmVIb3Jpem9udGFsV3JhcHBlciwgTGluZSB9IGZyb20gJy4vTGluZUhvcml6b250YWwuc3R5bGVzJztcclxuXHJcbmNvbnN0IExpbmVIb3Jpem9udGFsID0gKHsgY2hpbGRyZW4sIGxhcmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVIb3Jpem9udGFsV3JhcHBlciBkYXRhLXRlc3RpZD1cImxpbmUtaG9yaXpvbnRhbC13cmFwcGVyXCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPExpbmUgbGFyZ2U9e2xhcmdlfSBkYXRhLXRlc3RpZD1cImxpbmUtaG9yaXpvbnRhbFwiIC8+XHJcbiAgICA8L0xpbmVIb3Jpem9udGFsV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGluZUhvcml6b250YWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVIb3Jpem9udGFsO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lSG9yaXpvbnRhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi1oZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzAuOHJlbScgOiAnMC40cmVtJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBtYXJnaW4tdG9wOiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcyLjJyZW0nIDogJy44cmVtJyl9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IHsgTGluZVZlcnRpY2FsV3JhcHBlciwgTGluZSB9IGZyb20gJy4vTGluZVZlcnRpY2FsLnN0eWxlcyc7XHJcblxyXG5jb25zdCBMaW5lVmVydGljYWwgPSAoeyBjaGlsZHJlbiwgbGFyZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZVZlcnRpY2FsV3JhcHBlciBkYXRhLXRlc3RpZD1cImxpbmUtdmVydGljYWwtd3JhcHBlclwiPlxyXG4gICAgICA8TGluZSBsYXJnZT17bGFyZ2V9IGRhdGEtdGVzdGlkPVwibGluZS12ZXJ0aWNhbFwiIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluZVZlcnRpY2FsV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGluZVZlcnRpY2FsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lVmVydGljYWw7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVWZXJ0aWNhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi13aWR0aDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMC44cmVtJyA6ICcwLjRyZW0nKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIG1hcmdpbi1yaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMi4ycmVtJyA6ICcxLjVyZW0nKX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi1yaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMS44cmVtJyA6ICcxLjVyZW0nKX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IEFycm93TGluayBmcm9tICdAYXRvbXMvQXJyb3dMaW5rL0Fycm93TGluayc7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgeyBIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9IZXJvQ291cnNlQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlQ29tcG9uZW50ID0gKHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgbGluazogeyBzbHVnIH0sXHJcbiAgICBsaW5rTmFtZSxcclxuICAgIGljb24sXHJcbiAgfSxcclxuICBpbWFnZSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtpY29ufSAvPlxyXG4gICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8QXJyb3dMaW5rIHNsdWc9e3NsdWd9IHRpdGxlPXtsaW5rTmFtZX0gaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgPC9IZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0NvdXJzZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgICBsaW5rTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5IZXJvQ291cnNlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBsaW5rTmFtZTogJycsXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIHNsdWc6ICcnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0NvdXJzZUNvbXBvbmVudDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5oZXJvQ291cnNlUGFkZGluZ307XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogNTByZW07XHJcblxyXG4gICY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgfVxyXG5cclxuICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTAlLCAtNjUlKTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZXJvSW5zdHJ1Y3RvcldyYXBwZXIsIEltYWdlV3JhcHBlciwgSW5zdHJ1Y3RvcldyYXBwZXIgfSBmcm9tICcuL0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCA9ICh7IGRhdGE6IHsgaGVhZGVyLCBpbnN0cnVjdG9yLCBkZXNjcmlwdGlvbiwgaW1hZ2UgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvSW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtpbWFnZX0gLz5cclxuICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgIDxJbnN0cnVjdG9yV3JhcHBlcj5cclxuICAgICAgICA8aDU+e2hlYWRlcn08L2g1PlxyXG4gICAgICAgIDxoND57aW5zdHJ1Y3Rvcn08L2g0PlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvSW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgICA8L0hlcm9JbnN0cnVjdG9yV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnN0cnVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjogJycsXHJcbiAgICBpbnN0cnVjdG9yOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9JbnN0cnVjdG9yV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9IDA7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuaGVyb0luc3RydWN0b3JzfSB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6IDAgMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9IDA7XHJcblxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnN0cnVjdG9yV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1iYXNpczogNDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgcGFkZGluZzogMCAzcmVtO1xyXG5cclxuICBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5oZXJvSW5zdHJ1Y3RvcnN9IHtcclxuICAgIGZsZXgtYmFzaXM6IDMycmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgZmxleC1iYXNpczogdW5zZXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDJyZW0gM3JlbTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5oZXJvSW5zdHJ1Y3RvcnN9IHtcclxuICAgIG1hcmdpbjogMCA2cmVtIDAgMDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBGdW5jdGlvbmFsTGluayBmcm9tICdAYXRvbXMvRnVuY3Rpb25hbExpbmsvRnVuY3Rpb25hbExpbmsnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbVdyYXBwZXIsIEJ1bGxldCB9IGZyb20gJy4vTGlzdEl0ZW0uc3R5bGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcblxyXG5jb25zdCBMaXN0SXRlbSA9ICh7IGxpbmssIHNldElzTmF2T3BlbiwgaGFzTGlua3MsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVdyYXBwZXIgey4uLnByb3BzfT5cclxuICAgICAgPEJ1bGxldCAvPlxyXG4gICAgICB7aGFzTGlua3MgPyA8RnVuY3Rpb25hbExpbmsgbGluaz17bGlua30gc2V0SXNOYXZPcGVuPXtzZXRJc05hdk9wZW59IC8+IDogY2hpbGRyZW59XHJcbiAgICA8L0xpc3RJdGVtV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gIGxpbms6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2V0SXNOYXZPcGVuOiBQcm9wVHlwZXMuZnVuYyxcclxuICBoYXNMaW5rczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtV3JhcHBlciA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkeyh7IGxvbmcgfSkgPT4gKGxvbmcgPyAnZmxleC1zdGFydCcgOiAnY2VudGVyJyl9O1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2TGlzdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1bGxldCA9IHN0eWxlZC5zcGFuYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDIuMnJlbTtcclxuICBtaW4taGVpZ2h0OiAyLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDEuMnJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgUGFnZVRpbGUgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZSc7XHJcbmltcG9ydCB7IFNlbWVzdGVyLCBIZWFkLCBSb3csIEFubm90YXRpb24gfSBmcm9tICcuL1ByaWNpbmdDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IFByaWNpbmdDb21wb25lbnQgPSAoeyBkYXRhOiB7IHRpdGxlLCBzZW1lc3RlciwgdGFibGVIZWFkLCB0YWJsZVJvd3MsIGFubm90YXRpb25zIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVRpbGU+XHJcbiAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAge3NlbWVzdGVyICYmIDxTZW1lc3Rlcj57c2VtZXN0ZXJ9PC9TZW1lc3Rlcj59XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzcGFuPnt0YWJsZUhlYWQucm93TmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3RhYmxlSGVhZC5yb3dDb250ZW50fTwvc3Bhbj5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7dGFibGVSb3dzLm1hcCgoeyByb3dOYW1lLCByb3dDb250ZW50LCBpZCB9KSA9PiAoXHJcbiAgICAgICAgPFJvdyBrZXk9e2lkfT5cclxuICAgICAgICAgIDxzcGFuPntyb3dOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3dDb250ZW50fTwvc3Bhbj5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2Fubm90YXRpb25zLm1hcCgoeyBhbm5vdGF0aW9uLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICA8QW5ub3RhdGlvbiBrZXk9e2lkfT57YW5ub3RhdGlvbn08L0Fubm90YXRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYWdlVGlsZT5cclxuICApO1xyXG59O1xyXG5cclxuUHJpY2luZ0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VtZXN0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0YWJsZUhlYWQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB0YWJsZVJvd3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgYW5ub3RhdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5QcmljaW5nQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBzZW1lc3RlcjogJycsXHJcbiAgICB0YWJsZUhlYWQ6IHtcclxuICAgICAgcm93TmFtZTogJycsXHJcbiAgICAgIHJvd0NvbnRlbnQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHRhYmxlUm93czogW10sXHJcbiAgICBhbm5vdGF0aW9uczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdDb21wb25lbnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbWVzdGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XHJcbiAgY29sdW1uLWdhcDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtCbHVlfTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWQgPSBzdHlsZWQoUm93KWBcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmNhcHRpb25NZWRpdW19O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uU21hbGx9O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgU3R5bGVkTWFya2Rvd24gfSBmcm9tICcuL1JpY2hUZXh0LnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgUmljaFRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTdHlsZWRNYXJrZG93bj57Y2hpbGRyZW59PC9TdHlsZWRNYXJrZG93bj47XHJcbn07XHJcblxyXG5SaWNoVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dDtcclxuIiwiaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFya2Rvd24gPSBzdHlsZWQoTWFya2Rvd24pYFxyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5yaWNoVGV4dE1hcmdpblRvcH07XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICBoMyxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA5LjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDUuOXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogNC44cmVtO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAzLjRyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICB9XHJcblxyXG4gIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcblxyXG4gICAgICAmOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRGb290ZXIsXHJcbiAgRm9vdGVyV3JhcHBlcixcclxuICBDb250ZW50V3JhcHBlcixcclxuICBJbmZvcm1hdGlvbldyYXBwZXIsXHJcbiAgU3R5bGVkU2Nob29sSW5mbyxcclxuICBMaW5lLFxyXG4gIEltYWdlc1dyYXBwZXIsXHJcbiAgSW1hZ2VXcmFwcGVyLFxyXG59IGZyb20gJy4vRm9vdGVyLnN0eWxlcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgZm9vdGVyOiB7IGhlYWRlciwgc2Nob29sTmFtZSwgZm9vdGVySW5mbywgZm9vdGVySW1hZ2VzIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRm9vdGVyPlxyXG4gICAgICA8Rm9vdGVyV3JhcHBlcj5cclxuICAgICAgICA8aDM+e2hlYWRlcn08L2gzPlxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICAgIDxTdHlsZWRTY2hvb2xJbmZvPntzY2hvb2xOYW1lfTwvU3R5bGVkU2Nob29sSW5mbz5cclxuICAgICAgICAgIDxJbmZvcm1hdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIHtmb290ZXJJbmZvLm1hcCgoeyBpZCwgY2FwdGlvbiwgaW5mbyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHAga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57Y2FwdGlvbn08L3NwYW4+IHtpbmZvfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0luZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lIC8+XHJcbiAgICAgICAgPEltYWdlc1dyYXBwZXI+XHJcbiAgICAgICAgICB7Zm9vdGVySW1hZ2VzLm1hcCgoZm9vdGVySW1hZ2UpID0+IChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciBrZXk9e2Zvb3RlckltYWdlLmlkfT5cclxuICAgICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2Zvb3RlckltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VzV3JhcHBlcj5cclxuICAgICAgPC9Gb290ZXJXcmFwcGVyPlxyXG4gICAgPC9TdHlsZWRGb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgZm9vdGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2Nob29sTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZvb3RlckluZm86IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICBmb290ZXJJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBoZWFkZXI6ICcnLFxyXG4gICAgc2Nob29sTmFtZTogJycsXHJcbiAgICBmb290ZXJJbmZvOiBbXSxcclxuICAgIGZvb3RlckltYWdlczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54c1Z9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGU6XHJcbiAgICAnaGVhZGVyIGxpbmUgaW1hZ2VzJ1xyXG4gICAgJ2NvbnRlbnQgbGluZSBpbWFnZXMnO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH07XHJcbiAgICBncmlkLXRlbXBsYXRlOlxyXG4gICAgICAnaGVhZGVyICdcclxuICAgICAgJ2NvbnRlbnQnXHJcbiAgICAgICdsaW5lJ1xyXG4gICAgICAnaW1hZ2VzJztcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkU2Nob29sSW5mbyA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogMTRyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogOHJlbTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGdyaWQtYXJlYTogbGluZTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogMC42cmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiBpbWFnZXM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEydnc7XHJcbiAgbWF4LXdpZHRoOiAzMHJlbTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiAyNXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDVyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICdwcm92aWRlcnMvQXBwUHJvdmlkZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVhZGVyLCBMb2dvLCBNZW51QnV0dG9uLCBTdHlsZWRTcGFuLCBMb2FkZXIgfSBmcm9tICcuL05hdkJhci5zdHlsZXMnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKHsgbG9nbyB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzTmF2T3Blbiwgc2V0SXNOYXZPcGVuIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlciBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XHJcbiAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkZXJcIiBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICA8TG9nbyBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gcHJpb3JpdHkgLz5cclxuICAgICAgICA8L0xvZ28+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPE1lbnVCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKChzdGF0ZSkgPT4gIXN0YXRlKX0gaXNOYXZPcGVuPXtpc05hdk9wZW59IGRhdGEtdGVzdGlkPVwibWVudS1idXR0b25cIj5cclxuICAgICAgICA8U3R5bGVkU3BhbiBzaG9ydCBpc05hdk9wZW49e2lzTmF2T3Blbn0gLz5cclxuICAgICAgICA8U3R5bGVkU3BhbiBpc05hdk9wZW49e2lzTmF2T3Blbn0gLz5cclxuICAgICAgPC9NZW51QnV0dG9uPlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbG9nbzogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgcGFkZGluZzogMXJlbSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIHotaW5kZXg6IDMwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmFgXHJcbiAgd2lkdGg6IDIycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgaGVpZ2h0OiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJzZyZW0nIDogJ3Vuc2V0Jyl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeyh7IGlzTmF2T3Blbiwgc2hvcnQgfSkgPT4gKHNob3J0ICYmICFpc05hdk9wZW4gPyAncmlnaHQnIDogJ2NlbnRlcicpfTtcclxuICB0cmFuc2Zvcm06ICR7KHsgc2hvcnQsIGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJ3NjYWxlWCgxKScgOiBzaG9ydCA/ICdzY2FsZVgoMC41KScgOiAnc2NhbGVYKDEpJyl9O1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyAndHJhbnNsYXRlWSgyLjVyZW0pIHJvdGF0ZSg0NWRlZyknIDogJycpfTtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRyYW5zZm9ybTogJHsoeyBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICd0cmFuc2xhdGVZKC0yLjVyZW0pIHJvdGF0ZSgtNDVkZWcpJyA6ICcnKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAtMC4ycmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgaXNMb2FkaW5nIH0pID0+IChpc0xvYWRpbmcgPyAndHJhbnNwYXJlbnQnIDogdGhlbWUuY29sb3JzLmFjY2VudENvbG9yKX07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1vbGVjdWxlcy9MaXN0SXRlbS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgU3R5bGVkTmF2aWdhdGlvbiwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL05hdmlnYXRpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBuYXZMaW5rcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBzZXRJc05hdk9wZW4gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTmF2aWdhdGlvbj5cclxuICAgICAge25hdkxpbmtzLm1hcCgoeyBncm91cE5hbWUsIGlkLCBsaW5rcyB9KSA9PiAoXHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyIGtleT17aWR9PlxyXG4gICAgICAgICAgPExpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgICAgICA8aDM+e2dyb3VwTmFtZX08L2gzPlxyXG4gICAgICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBoYXNMaW5rcyBrZXk9e2xpbmsuaWR9IGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0eWxlZE5hdmlnYXRpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIG5hdkxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGdyb3VwTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgbGlua3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICB9KVxyXG4gICksXHJcbn07XHJcblxyXG5OYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBuYXZMaW5rczogW1xyXG4gICAge1xyXG4gICAgICBncm91cE5hbWU6ICcnLFxyXG4gICAgICBpZDogMCxcclxuICAgICAgbGlua3M6IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTByZW0sIGF1dG8pKTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnNWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXhpdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogNXJlbTtcclxuICB3aWR0aDogNXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1dmg7XHJcbiAgcmlnaHQ6IDV2dztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm5hdkxpc3R9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlSGVhZGVyL1BhZ2VIZWFkZXInO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnQHRlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbic7XHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICdAbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgUGFnZVRpbGUgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZSc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRUaXRsZSxcclxuICBJbmZvU2VjdGlvbixcclxuICBJbmZvV3JhcHBlcixcclxuICBJbmZvQ29tcG9uZW50LFxyXG4gIFN0eWxlZFNwYW4sXHJcbiAgSW1hZ2VXcmFwcGVyLFxyXG4gIFN0eWxlZExpc3QsXHJcbiAgU3R5bGVkSXRlbSxcclxuICBQYWdlVGlsZVdyYXBwZXIsXHJcbiAgU3R5bGVkVGlsZUhlYWRlcixcclxufSBmcm9tICcuL0Npc2NvQ291cnNlLnN0eWxlcyc7XHJcblxyXG5jb25zdCBDaXNjb0NvdXJzZSA9ICh7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlLCBpbWFnZSB9LFxyXG4gICAgcmljaFRleHQsXHJcbiAgICBpY29uSW5mbyxcclxuICAgIGxpc3RUaXRsZSxcclxuICAgIGxpc3RDb21wb25lbnQsXHJcbiAgfSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFnZUhlYWRlciBpbWFnZT17aW1hZ2V9PlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIDwvUGFnZUhlYWRlcj5cclxuICAgICAgPFBhZ2VXcmFwcGVyIGNvbHVtbj5cclxuICAgICAgICB7cmljaFRleHQubWFwKCh7IHRpdGxlLCBjb250ZW50LCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICA8UGFnZVNlY3Rpb24ga2V5PXtpZH0+XHJcbiAgICAgICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPnt0aXRsZX08L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgPFJpY2hUZXh0Pntjb250ZW50fTwvUmljaFRleHQ+XHJcbiAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgICA8SW5mb1NlY3Rpb24+XHJcbiAgICAgICAgPEluZm9XcmFwcGVyPlxyXG4gICAgICAgICAge2ljb25JbmZvLm1hcCgoeyBjYXB0aW9uLCB2YWx1ZSwgaWNvbiwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8SW5mb0NvbXBvbmVudCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGltYWdlPXtpY29ufSAvPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRTcGFuPntjYXB0aW9ufTwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0luZm9Db21wb25lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0luZm9XcmFwcGVyPlxyXG4gICAgICA8L0luZm9TZWN0aW9uPlxyXG4gICAgICA8UGFnZVdyYXBwZXIgc2hvcnQ+XHJcbiAgICAgICAgPFBhZ2VTZWN0aW9uIHdpZGU+XHJcbiAgICAgICAgICA8TGluZUhvcml6b250YWwgbGFyZ2U+XHJcbiAgICAgICAgICAgIDxoMT57bGlzdFRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8L0xpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgICAgPFBhZ2VUaWxlV3JhcHBlcj5cclxuICAgICAgICAgICAge2xpc3RDb21wb25lbnQubWFwKCh7IHRpdGxlLCBsaXN0SXRlbXMsIGlkIH0pID0+IChcclxuICAgICAgICAgICAgICA8UGFnZVRpbGUgd2lkZSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaWxlSGVhZGVyPnt0aXRsZX08L1N0eWxlZFRpbGVIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRMaXN0PlxyXG4gICAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zLm1hcCgoeyBpdGVtLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGxvbmcga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSXRlbT57aXRlbX08L1N0eWxlZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZExpc3Q+XHJcbiAgICAgICAgICAgICAgPC9QYWdlVGlsZT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1BhZ2VUaWxlV3JhcHBlcj5cclxuICAgICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNpc2NvQ291cnNlLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KSxcclxuICAgIHJpY2hUZXh0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIGljb25JbmZvOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIGxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxpc3RDb21wb25lbnQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5DaXNjb0NvdXJzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgIH0sXHJcbiAgICByaWNoVGV4dDogW10sXHJcbiAgICBpY29uSW5mbzogW10sXHJcbiAgICBsaXN0VGl0bGU6ICcnLFxyXG4gICAgbGlzdENvbXBvbmVudDogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpc2NvQ291cnNlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyTW9iaWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wTGFyZ2V9IHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb0NvbXBvbmVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhyZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BMYXJnZX0ge1xyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1yaWdodDogMC42cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDdyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSXRlbSA9IHN0eWxlZC5zcGFuYFxyXG4gIGlubGluZS1zaXplOiA0MHJlbTtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wTGFyZ2V9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaWxlSGVhZGVyID0gc3R5bGVkLmg0YFxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgQ29udGVudFdyYXBwZXIsIEFkZHJlc3NXcmFwcGVyLCBJbmZvcm1hdGlvbldyYXBwZXIgfSBmcm9tICcuL0NvbnRhY3Quc3R5bGVzJztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoeyBkYXRhOiB7IHRpdGxlLCBhZGRyZXNzLCBzY2hvb2xOYW1lLCBjb250YWN0SW5mbyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8QWRkcmVzc1dyYXBwZXI+XHJcbiAgICAgICAgICA8aDQ+e3NjaG9vbE5hbWV9PC9oND5cclxuICAgICAgICAgIDxoNT57YWRkcmVzc308L2g1PlxyXG4gICAgICAgIDwvQWRkcmVzc1dyYXBwZXI+XHJcbiAgICAgICAgPEluZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgICAgIHtjb250YWN0SW5mby5tYXAoKHsgaWQsIGNhcHRpb24sIGluZm8gfSkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8c3Bhbj57Y2FwdGlvbn08L3NwYW4+IHtpbmZvfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0luZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbnRhY3QucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzY2hvb2xOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGFjdEluZm86IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5Db250YWN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBhZGRyZXNzOiAnJyxcclxuICAgIHNjaG9vbE5hbWU6ICcnLFxyXG4gICAgY29udGFjdEluZm86IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nfTtcclxuICB3aWR0aDogY2xhbXAoJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH0sIDEwMCUsIDgwcmVtKTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkcmVzc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcblxyXG4gIGg0LFxyXG4gIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiA0cmVtIDAgNnJlbSAwO1xyXG5cclxuICBwLFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmNhcHRpb25MYXJnZX07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBtYXJnaW46IDRyZW0gMCAwIDA7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYXRhU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdG9tcy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZXJvQWNhZGVteVdyYXBwZXIsIEhlYWRlcldyYXBwZXIsIERlc2NyaXB0aW9uV3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9IZXJvQWNhZGVteS5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0FjYWRlbXkgPSAoeyBkYXRhOiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uLCBpbWFnZSB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9BY2FkZW15V3JhcHBlcj5cclxuICAgICAgPEhlYWRlcldyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgPC9IZWFkZXJXcmFwcGVyPlxyXG4gICAgICA8RGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBkYXRhPXtidXR0b259IC8+XHJcbiAgICAgIDwvRGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgPC9IZXJvQWNhZGVteVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9BY2FkZW15LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBkYXRhU2hhcGUsXHJcbn07XHJcblxyXG5IZXJvQWNhZGVteS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQWNhZGVteTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0FjYWRlbXlXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICBncmlkLXJvdzogMS8yO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzE7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCA2MHJlbSk7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH0pO1xyXG4gICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya0dyYXk7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH0pO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVyb0NvdXJzZUNvbXBvbmVudCBmcm9tICdAbW9sZWN1bGVzL0hlcm9Db3Vyc2VDb21wb25lbnQvSGVyb0NvdXJzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgeyBIZXJvQ291cnNlV3JhcHBlciwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL0hlcm9Db3Vyc2VzLnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlcyA9ICh7IGRhdGE6IHsgdGl0bGUsIGhlcm9Db3Vyc2VzLCBhcnJvd0ltYWdlIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZVdyYXBwZXI+XHJcbiAgICAgIDxMaW5lSG9yaXpvbnRhbCBsYXJnZT5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICB7aGVyb0NvdXJzZXMubWFwKChjb3Vyc2VEYXRhKSA9PiAoXHJcbiAgICAgICAgICA8SGVyb0NvdXJzZUNvbXBvbmVudCBrZXk9e2NvdXJzZURhdGEuaWR9IGRhdGE9e2NvdXJzZURhdGF9IGltYWdlPXthcnJvd0ltYWdlfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9IZXJvQ291cnNlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0NvdXJzZXMucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBhcnJvd0ltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaGVyb0NvdXJzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0NvdXJzZXMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlcm9Db3Vyc2VzOiBbXSxcclxuICAgIHRpdGxlOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0NvdXJzZXM7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9Db3Vyc2VXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MHJlbSwgYXV0bykpO1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IGBjYWxjKCR7dGhlbWUucGFkZGluZy54Vn0gKyAycmVtKWB9O1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gYGNhbGMoJHt0aGVtZS5wYWRkaW5nLnhWfSArIDJyZW0pYH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50IGZyb20gJ0Btb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQvSGVyb0luc3RydWN0b3JDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyIH0gZnJvbSAnLi9IZXJvSW5zdHJ1Y3RvcnMuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9JbnN0cnVjdG9ycyA9ICh7IGRhdGE6IHsgaW5zdHJ1Y3RvckNvbXBvbmVudHMgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyPlxyXG4gICAgICB7aW5zdHJ1Y3RvckNvbXBvbmVudHMubWFwKChpbnN0cnVjdG9yRGF0YSkgPT4gKFxyXG4gICAgICAgIDxIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCBrZXk9e2luc3RydWN0b3JEYXRhLmlkfSBkYXRhPXtpbnN0cnVjdG9yRGF0YX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlcm9JbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9JbnN0cnVjdG9ycy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGluc3RydWN0b3JDb21wb25lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBpbnN0cnVjdG9yQ29tcG9uZW50czogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9JbnN0cnVjdG9ycztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0luc3RydWN0b3JzV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNHJlbSwgMWZyKSk7XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYXRvbXMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgSGVyb1ByaWNpbmdXcmFwcGVyLCBEZXNjcmlwdGlvbldyYXBwZXIgfSBmcm9tICcuL0hlcm9QcmljaW5nLnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvUHJpY2luZyA9ICh7IGRhdGE6IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b24gfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvUHJpY2luZ1dyYXBwZXI+XHJcbiAgICAgIDxMaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDxEZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbiBkYXRhPXtidXR0b259IGFjY2VudCAvPlxyXG4gICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgIDwvSGVyb1ByaWNpbmdXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvUHJpY2luZy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBidXR0b246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkhlcm9QcmljaW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9QcmljaW5nO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvUHJpY2luZ1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbiAgd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlV2lkdGh9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BUYWxsfSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcblxyXG4gICAgJjp2aXNpdGVkIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zdWJUZXh0fTtcclxuICAgIG1hcmdpbjogMCA1cmVtIDAgMDtcclxuICAgIHdpZHRoOiAzOXJlbTtcclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BUYWxsfSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDRyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgICBtYXJnaW46IDAgMCA0cmVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYXRvbXMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVyb1dyYXBwZXIsIENvbnRlbnRXcmFwcGVyLCBCdXR0b25XcmFwcGVyLCBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL0hlcm8uc3R5bGVzJztcclxuaW1wb3J0IHsgZGF0YVNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IEhlcm8gPSAoeyBkYXRhOiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9ucywgaW1hZ2UgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvV3JhcHBlcj5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgPGgyPntkZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAge2J1dHRvbnMubWFwKChidXR0b25EYXRhKSA9PiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24ga2V5PXtidXR0b25EYXRhLmlkfSBkYXRhPXtidXR0b25EYXRhfSBoYXNNYXJnaW4gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgIDwvSGVyb1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm8ucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IGRhdGFTaGFwZSxcclxufTtcclxuXHJcbkhlcm8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIGJ1dHRvbnM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmhlYWRlcn07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0NHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGgxIHtcclxuICAgIG1heC13aWR0aDogNDByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BXaWRlfSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdm1pbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIHdpZHRoOiA0NHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VIZWFkZXIvUGFnZUhlYWRlcic7XHJcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICdAdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICdAbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0JztcclxuaW1wb3J0IFBhZ2VUaWxlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VUaWxlV3JhcHBlci9QYWdlVGlsZVdyYXBwZXInO1xyXG5pbXBvcnQgUGFnZVRpbGUgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZSc7XHJcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnQGF0b21zL0Fycm93TGluay9BcnJvd0xpbmsnO1xyXG5pbXBvcnQgeyBTdHlsZWRUaXRsZSwgU3R5bGVkU3BhbiB9IGZyb20gJy4vT2ZmZXJ0LnN0eWxlcyc7XHJcblxyXG5jb25zdCBPZmZlcnQgPSAoe1xyXG4gIGRhdGE6IHtcclxuICAgIHNlY3Rpb25IZWFkZXI6IHsgdGl0bGUsIGltYWdlIH0sXHJcbiAgICBvZmZlcnRDb21wb25lbnRzLFxyXG4gICAgYXJyb3dJbWFnZSxcclxuICB9LFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYWdlSGVhZGVyIGltYWdlPXtpbWFnZX0+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgPC9QYWdlSGVhZGVyPlxyXG4gICAgICA8UGFnZVdyYXBwZXIgc2hvcnQgY29sdW1uPlxyXG4gICAgICAgIHtvZmZlcnRDb21wb25lbnRzLm1hcCgoeyB0aXRsZSwgY29udGVudCwgb2ZmZXJ0Q291cnNlcywgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgPFBhZ2VTZWN0aW9uIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgIDxSaWNoVGV4dD57Y29udGVudH08L1JpY2hUZXh0PlxyXG4gICAgICAgICAgICA8UGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIHtvZmZlcnRDb3Vyc2VzLm1hcCgoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGxpbmtOYW1lLCBsaW5rOiB7IHNsdWcgfSwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFBhZ2VUaWxlIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuPntkZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0xpbmsgYWNjZW50ZWQgc2x1Zz17c2x1Z30gdGl0bGU9e2xpbmtOYW1lfSBpbWFnZT17YXJyb3dJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvUGFnZVRpbGU+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvUGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgICAgPC9QYWdlU2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5PZmZlcnQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBzZWN0aW9uSGVhZGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KSxcclxuICAgIG9mZmVydENvbXBvbmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgYXJyb3dJbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuT2ZmZXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBzZWN0aW9uSGVhZGVyOiB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgIH0sXHJcbiAgICBvZmZlcnRDb21wb25lbnRzOiBbXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJ0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyTW9iaWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHlTbWFsbH07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICdAbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0JztcclxuaW1wb3J0IFBhZ2VUaWxlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VUaWxlV3JhcHBlci9QYWdlVGlsZVdyYXBwZXInO1xyXG5pbXBvcnQgUHJpY2luZ0NvbXBvbmVudCBmcm9tICdAbW9sZWN1bGVzL1ByaWNpbmdDb21wb25lbnQvUHJpY2luZ0NvbXBvbmVudCc7XHJcblxyXG5jb25zdCBQcmljaW5nID0gKHsgZGF0YTogeyB0aXRsZSwgY29udGVudCwgcHJpY2luZ0NvbXBvbmVudHMgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlV3JhcHBlcj5cclxuICAgICAgPFBhZ2VTZWN0aW9uPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPFJpY2hUZXh0Pntjb250ZW50fTwvUmljaFRleHQ+XHJcbiAgICAgICAgPFBhZ2VUaWxlV3JhcHBlcj5cclxuICAgICAgICAgIHtwcmljaW5nQ29tcG9uZW50cy5tYXAoKHByaWNpbmdDb21wb25lbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcmljaW5nQ29tcG9uZW50IGtleT17aWR9IGRhdGE9e3ByaWNpbmdDb21wb25lbnR9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1BhZ2VUaWxlV3JhcHBlcj5cclxuICAgICAgPC9QYWdlU2VjdGlvbj5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblByaWNpbmcucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwcmljaW5nQ29tcG9uZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblByaWNpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgcHJpY2luZ0NvbXBvbmVudHM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnQG1vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dCc7XHJcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlU2VjdGlvbi9QYWdlU2VjdGlvbic7XHJcblxyXG5jb25zdCBSZWd1bGF0aW9ucyA9ICh7IGRhdGE6IHsgdGl0bGUsIGNvbnRlbnQgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlV3JhcHBlcj5cclxuICAgICAgPFBhZ2VTZWN0aW9uPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPFJpY2hUZXh0Pntjb250ZW50fTwvUmljaFRleHQ+XHJcbiAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZWd1bGF0aW9ucy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuUmVndWxhdGlvbnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWd1bGF0aW9ucztcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnQHNlY3Rpb25zL0hlcm8vSGVybyc7XHJcbmltcG9ydCBIZXJvSW5zdHJ1Y3RvcnMgZnJvbSAnQHNlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgSGVyb0NvdXJzZXMgZnJvbSAnQHNlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzJztcclxuaW1wb3J0IEhlcm9QcmljaW5nIGZyb20gJ0BzZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZyc7XHJcbmltcG9ydCBIZXJvQWNhZGVteSBmcm9tICdAc2VjdGlvbnMvSGVyb0FjYWRlbXkvSGVyb0FjYWRlbXknO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICdAc2VjdGlvbnMvQ29udGFjdC9Db250YWN0JztcclxuaW1wb3J0IFJlZ3VsYXRpb25zIGZyb20gJ0BzZWN0aW9ucy9SZWd1bGF0aW9ucy9SZWd1bGF0aW9ucyc7XHJcbmltcG9ydCBQcmljaW5nIGZyb20gJ0BzZWN0aW9ucy9QcmljaW5nL1ByaWNpbmcnO1xyXG5pbXBvcnQgT2ZmZXJ0IGZyb20gJ0BzZWN0aW9ucy9PZmZlcnQvT2ZmZXJ0JztcclxuaW1wb3J0IENpc2NvQ291cnNlIGZyb20gJ0BzZWN0aW9ucy9DaXNjb0NvdXJzZS9DaXNjb0NvdXJzZSc7XHJcblxyXG4vLyBNYXAgU3RyYXBpIHNlY3Rpb25zIHRvIHNlY3Rpb24gY29tcG9uZW50c1xyXG5jb25zdCBzZWN0aW9uQ29tcG9uZW50cyA9IHtcclxuICAnc2VjdGlvbnMuaGVybyc6IEhlcm8sXHJcbiAgJ3NlY3Rpb25zLmhlcm8taW5zdHJ1Y3RvcnMnOiBIZXJvSW5zdHJ1Y3RvcnMsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tY291cnNlcyc6IEhlcm9Db3Vyc2VzLFxyXG4gICdzZWN0aW9ucy5oZXJvLXByaWNpbmcnOiBIZXJvUHJpY2luZyxcclxuICAnc2VjdGlvbnMuaGVyby1hY2FkZW15JzogSGVyb0FjYWRlbXksXHJcbiAgJ3NlY3Rpb25zLmNvbnRhY3QnOiBDb250YWN0LFxyXG4gICdzZWN0aW9ucy5yZWd1bGF0aW9ucyc6IFJlZ3VsYXRpb25zLFxyXG4gICdzZWN0aW9ucy5wcmljaW5nJzogUHJpY2luZyxcclxuICAnc2VjdGlvbnMub2ZmZXJ0JzogT2ZmZXJ0LFxyXG4gICdzZWN0aW9ucy5jaXNjby1jb3Vyc2UnOiBDaXNjb0NvdXJzZSxcclxufTtcclxuXHJcbi8vIERpc3BsYXkgYSBzZWN0aW9uIGluZGl2aWR1YWxseVxyXG5jb25zdCBTZWN0aW9uID0gKHsgc2VjdGlvbkRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFNlY3Rpb25Db21wb25lbnQgPSBzZWN0aW9uQ29tcG9uZW50c1tzZWN0aW9uRGF0YS5fX2NvbXBvbmVudF07XHJcblxyXG4gIGlmICghU2VjdGlvbkNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPFNlY3Rpb25Db21wb25lbnQgZGF0YT17c2VjdGlvbkRhdGF9IC8+O1xyXG59O1xyXG5cclxuLy8gRGlzcGxheSB0aGUgbGlzdCBvZiBzZWN0aW9uc1xyXG5jb25zdCBTZWN0aW9ucyA9ICh7IHNlY3Rpb25zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgIDxTZWN0aW9uIHNlY3Rpb25EYXRhPXtzZWN0aW9ufSBrZXk9e2Ake3NlY3Rpb24uX19jb21wb25lbnR9JHtzZWN0aW9uLmlkfWB9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25EYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuU2VjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuU2VjdGlvbnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNlY3Rpb25zOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJy91dGlscy9tZWRpYSc7XHJcblxyXG5jb25zdCBTZW8gPSAoeyBzZW8gfSkgPT4ge1xyXG4gIGNvbnN0IHsgbWV0YVRpdGxlLCBtZXRhRGVzY3JpcHRpb24sIHNoYXJlZEltYWdlIH0gPSBzZW87XHJcblxyXG4gIC8vIFByZXZlbnQgZXJyb3JzIGlmIG5vIG1ldGFkYXRhIHdhcyBzZXRcclxuICBpZiAoIXNlbykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT17bWV0YVRpdGxlfVxyXG4gICAgICBkZXNjcmlwdGlvbj17bWV0YURlc2NyaXB0aW9ufVxyXG4gICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICB0aXRsZTogbWV0YVRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgLy8gQ2FyZWZ1bDogaWYgeW91IGRpc2FibGUgaW1hZ2Ugb3B0aW1pemF0aW9uIGluIFN0cmFwaSwgdGhpcyB3aWxsIGJyZWFrXHJcbiAgICAgICAgLi4uKHNoYXJlZEltYWdlICYmXHJcbiAgICAgICAgICBzaGFyZWRJbWFnZS5mb3JtYXRzICYmIHtcclxuICAgICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNoYXJlZEltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBnZXRTdHJhcGlNZWRpYShpbWFnZSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuU2VvLnByb3BUeXBlcyA9IHtcclxuICBzZW86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBtZXRhVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtZXRhRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzaGFyZUltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VvO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICdAb3JnYW5pc21zL05hdkJhci9OYXZCYXInO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdAb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQG9yZ2FuaXNtcy9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJ3Byb3ZpZGVycy9BcHBQcm92aWRlcic7XHJcbmltcG9ydCB7IFN0eWxlZExheW91dCB9IGZyb20gJy4vTGF5b3V0LnN0eWxlcyc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgbmF2aWdhdGlvbjogeyBsb2dvLCBuYXZMaW5rcyB9LCBmb290ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNOYXZPcGVuIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZExheW91dCBpc05hdk9wZW49e2lzTmF2T3Blbn0+XHJcbiAgICAgIDxOYXZCYXIgbG9nbz17bG9nb30gLz5cclxuICAgICAge2lzTmF2T3BlbiAmJiA8TmF2aWdhdGlvbiBuYXZMaW5rcz17bmF2TGlua3N9IC8+fVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxGb290ZXIgZm9vdGVyPXtmb290ZXJ9IC8+XHJcbiAgICA8L1N0eWxlZExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBuYXZpZ2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6ICR7KHsgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyAnMTAwdmgnIDogJ2ZpdC1jb250ZW50Jyl9O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlcldyYXBwZXIsIENvbnRlbnRXcmFwcGVyLCBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VIZWFkZXIuc3R5bGVzJztcclxuXHJcbmNvbnN0IFBhZ2VIZWFkZXIgPSAoeyBjaGlsZHJlbiwgaW1hZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUhlYWRlcldyYXBwZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L1BhZ2VIZWFkZXJXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5QYWdlSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueGxWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHdpZHRoOiA1MHJlbTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1heC13aWR0aDogMzByZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODByZW07XHJcbiAgbWF4LXdpZHRoOiA4MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBwYWRkaW5nLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgeyBQYWdlU2VjdGlvbldyYXBwZXIgfSBmcm9tICcuL1BhZ2VTZWN0aW9uLnN0eWxlJztcclxuXHJcbmNvbnN0IFBhZ2VTZWN0aW9uID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPFBhZ2VTZWN0aW9uV3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1BhZ2VTZWN0aW9uV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlY3Rpb247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZ2VTZWN0aW9uUGFkZGluZ307XHJcbiAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lLCB3aWRlIH0pID0+ICh3aWRlID8gJ21heC1jb250ZW50JyA6IHRoZW1lLmRpbWVuc2lvbnMucGFnZVNlY3Rpb25XaWR0aCl9O1xyXG4gIG1pbi13aWR0aDogJHsoeyB3aWRlIH0pID0+ICh3aWRlID8gJzEyMHJlbScgOiAwKX07XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBtaW4td2lkdGg6ICR7KHsgd2lkZSB9KSA9PiAod2lkZSA/ICcxMDAlJyA6IDApfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFN0eWxlZFBhZ2VUaWxlV3JhcHBlciB9IGZyb20gJy4vUGFnZVRpbGVXcmFwcGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBQYWdlVGlsZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTdHlsZWRQYWdlVGlsZVdyYXBwZXI+e2NoaWxkcmVufTwvU3R5bGVkUGFnZVRpbGVXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VUaWxlV3JhcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGlsZVdyYXBwZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhZ2VUaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBQYWdlVGlsZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VUaWxlLnN0eWxlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgUGFnZVRpbGUgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8UGFnZVRpbGVXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvUGFnZVRpbGVXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VUaWxlLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGlsZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnJpY2hUZXh0TWFyZ2luVG9wfTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIHdpZHRoOiAkeyh7IHdpZGUgfSkgPT4gKHdpZGUgPyAnbWF4LWNvbnRlbnQnIDogJzQwcmVtJyl9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IHsgU3R5bGVkUGFnZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VXcmFwcGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBQYWdlV3JhcHBlciA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTdHlsZWRQYWdlV3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1N0eWxlZFBhZ2VXcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VXcmFwcGVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIG1pbi1oZWlnaHQ6ICR7KHsgc2hvcnQgfSkgPT4gKHNob3J0ID8gJ3Vuc2V0JyA6ICc5MHZoJyl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogJHsoeyBjb2x1bW4gfSkgPT4gKGNvbHVtbiA/ICdjb2x1bW4nIDogJ3JvdycpfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICB9XHJcbmA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJ3V0aWxzL2FwaSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBTZW8gZnJvbSAnY29tcG9uZW50cy9zdHJhcGkvc2VvJztcclxuaW1wb3J0IFNlY3Rpb25zIGZyb20gJ2NvbXBvbmVudHMvc3RyYXBpL3NlY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0UGFnZURhdGEgfSBmcm9tICd1dGlscy9nZXRQYWdlRGF0YSc7XHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcic7XHJcblxyXG5jb25zdCBEeW5hbWljUGFnZSA9ICh7IHNlY3Rpb25zLCBuYXZpZ2F0aW9uLCBmb290ZXIsIHNlbyB9KSA9PiB7XHJcbiAgaWYgKCFzZWN0aW9ucz8ubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gZm9vdGVyPXtmb290ZXJ9PlxyXG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxyXG4gICAgICA8U2VjdGlvbnMgc2VjdGlvbnM9e3NlY3Rpb25zfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkR5bmFtaWNQYWdlLnByb3BUeXBlcyA9IHtcclxuICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgbmF2aWdhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZW86IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBmZXRjaEFQSSgnL3BhZ2VzJyk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcGFnZXMubWFwKChwYWdlKSA9PiB7XHJcbiAgICAvLyBEZWNvbXBvc2UgdGhlIHNsdWcgdGhhdCB3YXMgc2F2ZWQgaW4gU3RyYXBpXHJcbiAgICBjb25zdCBzbHVnQXJyYXkgPSAhcGFnZS5zbHVnID8gZmFsc2UgOiBwYWdlLnNsdWcuc3BsaXQoJy8nKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgc2x1Zzogc2x1Z0FycmF5IH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGdldFBhZ2VEYXRhKHsgc2x1ZzogIXBhcmFtcy5zbHVnID8gWycnXSA6IHBhcmFtcy5zbHVnIH0pO1xyXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBhd2FpdCBmZXRjaEFQSSgnL25hdmlnYXRpb24nKTtcclxuICBjb25zdCBmb290ZXIgPSBhd2FpdCBmZXRjaEFQSSgnL2Zvb3RlcicpO1xyXG5cclxuICBpZiAocGFnZURhdGEgPT0gbnVsbCkge1xyXG4gICAgLy8gR2l2aW5nIHRoZSBwYWdlIG5vIHByb3BzIHdpbGwgdHJpZ2dlciBhIDQwNCBwYWdlXHJcbiAgICByZXR1cm4geyBwcm9wczoge30gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgY29udGVudCwgc2VvIH0gPSBwYWdlRGF0YTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlY3Rpb25zOiBjb250ZW50LFxyXG4gICAgICBzZW8sXHJcbiAgICAgIG5hdmlnYXRpb24sXHJcbiAgICAgIGZvb3RlcixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1BhZ2U7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBidXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLCBQcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbn0pLmlzUmVxdWlyZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgY2hpbGRyZW5TaGFwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSwgUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5ub2RlXSk7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBpc05hdk9wZW46IGZhbHNlLFxyXG4gIHNldElzTmF2T3BlbjogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc05hdk9wZW4sIHNldElzTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGlmIChyb3V0ZXIpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoeyBwYXJlbnQ6ICcjbG9hZGVyJyB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBpc05hdk9wZW4sXHJcbiAgICAgICAgc2V0SXNOYXZPcGVuLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFByb3ZpZGVyO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpVVJMKHBhdGggPSAnJykge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YDtcclxufVxyXG5cclxuLy8gSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCkge1xyXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBnZXRTdHJhcGlVUkwocGF0aCk7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VEYXRhKHBhcmFtcykge1xyXG4gIGNvbnN0IHNsdWcgPSBwYXJhbXMuc2x1Zy5qb2luKCcvJyk7XHJcbiAgLy8gRmluZCB0aGUgcGFnZXMgdGhhdCBtYXRjaCB0aGlzIHNsdWdcclxuICBjb25zdCBwYWdlc0RhdGEgPSBhd2FpdCBmZXRjaEFQSShgL3BhZ2VzP3NsdWc9JHtzbHVnfWApO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgd2UgZm91bmQgc29tZXRoaW5nLCBvdGhlcndpc2UgcmV0dXJuIG51bGxcclxuICBpZiAocGFnZXNEYXRhID09IG51bGwgfHwgcGFnZXNEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IGl0ZW0gc2luY2UgdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIHJlc3VsdCBwZXIgc2x1Z1xyXG4gIHJldHVybiBwYWdlc0RhdGFbMF07XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKHsgdXJsIH0pIHtcclxuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBnZXRTdHJhcGlVUkwodXJsKSA6IHVybDtcclxuICByZXR1cm4gaW1hZ2VVcmw7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Vycm9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcmtkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMaW5rIiwiSW1hZ2UiLCJBcnJvd0xpbmtXcmFwcGVyIiwiSW1hZ2VXcmFwcGVyIiwiQXJyb3dMaW5rIiwic2x1ZyIsInRpdGxlIiwiaW1hZ2UiLCJhY2NlbnRlZCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIiwic3R5bGVkIiwiYSIsInRoZW1lIiwiY29sb3JzIiwiYWNjZW50Q29sb3IiLCJtYWluQ29sb3IiLCJmb250U2l6ZSIsImJvZHkiLCJkaXYiLCJTdHlsZWRCdXR0b24iLCJCdXR0b24iLCJkYXRhIiwiaGFzTWFyZ2luIiwiYWNjZW50IiwiY2FwdGlvbiIsImlzRmlsbGVkIiwibGluayIsInNoYXBlIiwiYWNjZXB0IiwidXRpbHMiLCJib3JkZXJSYWRpdXMiLCJ3aGl0ZSIsIkZ1bmN0aW9uYWxMaW5rIiwibmFtZSIsIm5ld1RhYiIsInNldElzTmF2T3BlbiIsInN0YXRlIiwiZnVuYyIsIk5leHRJbWFnZSIsImdldFN0cmFwaU1lZGlhIiwiTmV4dEltYWdlV3JhcHBlciIsIlN0eWxlZE5leHRJbWFnZSIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwibG9hZGVyIiwiaW1hZ2VVcmwiLCJjb25zb2xlIiwiZXJyb3IiLCJ1cmwiLCJudW1iZXIiLCJwcmlvcml0eSIsImNoaWxkcmVuU2hhcGUiLCJMaW5lSG9yaXpvbnRhbFdyYXBwZXIiLCJMaW5lIiwiTGluZUhvcml6b250YWwiLCJjaGlsZHJlbiIsImxhcmdlIiwic3BhbiIsIkxpbmVWZXJ0aWNhbFdyYXBwZXIiLCJMaW5lVmVydGljYWwiLCJtcSIsIm1vYmlsZUxhcmdlIiwiSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIiLCJIZXJvQ291cnNlQ29tcG9uZW50IiwiZGVzY3JpcHRpb24iLCJsaW5rTmFtZSIsImljb24iLCJkaW1lbnNpb25zIiwiaGVyb0NvdXJzZVBhZGRpbmciLCJib3hTaGFkb3ciLCJ0aWxlUGFkZGluZ01vYmlsZSIsIkhlcm9JbnN0cnVjdG9yV3JhcHBlciIsIkluc3RydWN0b3JXcmFwcGVyIiwiSGVyb0luc3RydWN0b3JDb21wb25lbnQiLCJoZWFkZXIiLCJpbnN0cnVjdG9yIiwicGFkZGluZyIsInhWIiwiaGVyb0luc3RydWN0b3JzIiwibVYiLCJzIiwiTGlzdEl0ZW1XcmFwcGVyIiwiQnVsbGV0IiwiTGlzdEl0ZW0iLCJoYXNMaW5rcyIsInByb3BzIiwibGkiLCJsb25nIiwibmF2TGlzdCIsIlBhZ2VUaWxlIiwiU2VtZXN0ZXIiLCJIZWFkIiwiUm93IiwiQW5ub3RhdGlvbiIsIlByaWNpbmdDb21wb25lbnQiLCJzZW1lc3RlciIsInRhYmxlSGVhZCIsInRhYmxlUm93cyIsImFubm90YXRpb25zIiwicm93TmFtZSIsInJvd0NvbnRlbnQiLCJtYXAiLCJpZCIsImFubm90YXRpb24iLCJhcnJheU9mIiwic3ViVGV4dCIsImRhcmtCbHVlIiwiY2FwdGlvbk1lZGl1bSIsInAiLCJjYXB0aW9uU21hbGwiLCJTdHlsZWRNYXJrZG93biIsIlJpY2hUZXh0IiwiTWFya2Rvd24iLCJyaWNoVGV4dE1hcmdpblRvcCIsImJsYWNrIiwiU3R5bGVkRm9vdGVyIiwiRm9vdGVyV3JhcHBlciIsIkNvbnRlbnRXcmFwcGVyIiwiSW5mb3JtYXRpb25XcmFwcGVyIiwiU3R5bGVkU2Nob29sSW5mbyIsIkltYWdlc1dyYXBwZXIiLCJGb290ZXIiLCJmb290ZXIiLCJzY2hvb2xOYW1lIiwiZm9vdGVySW5mbyIsImZvb3RlckltYWdlcyIsImluZm8iLCJmb290ZXJJbWFnZSIsIm0iLCJ4c1YiLCJkZXNrdG9wIiwidGlsZVdpZHRoIiwibGFwdG9wIiwiZGVza3RvcFRhbGwiLCJ0YWJsZXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkhlYWRlciIsIkxvZ28iLCJNZW51QnV0dG9uIiwiU3R5bGVkU3BhbiIsIkxvYWRlciIsIk5hdkJhciIsImxvZ28iLCJpc0xvYWRpbmciLCJpc05hdk9wZW4iLCJidXR0b24iLCJzaG9ydCIsIlN0eWxlZE5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwibmF2TGlua3MiLCJncm91cE5hbWUiLCJsaW5rcyIsIm5hdiIsIngiLCJzViIsIkV4aXRCdXR0b24iLCJQYWdlSGVhZGVyIiwiUGFnZVdyYXBwZXIiLCJQYWdlU2VjdGlvbiIsIlN0eWxlZFRpdGxlIiwiSW5mb1NlY3Rpb24iLCJJbmZvV3JhcHBlciIsIkluZm9Db21wb25lbnQiLCJTdHlsZWRMaXN0IiwiU3R5bGVkSXRlbSIsIlBhZ2VUaWxlV3JhcHBlciIsIlN0eWxlZFRpbGVIZWFkZXIiLCJDaXNjb0NvdXJzZSIsInJpY2hUZXh0IiwiaWNvbkluZm8iLCJsaXN0VGl0bGUiLCJsaXN0Q29tcG9uZW50IiwiY29udGVudCIsInZhbHVlIiwibGlzdEl0ZW1zIiwiaXRlbSIsImgxIiwiaGVhZGVyTW9iaWxlIiwic2VjdGlvbiIsImxhcHRvcExhcmdlIiwiY2FwdGlvbkxhcmdlTWVkaXVtIiwidWwiLCJoNCIsIkFkZHJlc3NXcmFwcGVyIiwiQ29udGFjdCIsImFkZHJlc3MiLCJjb250YWN0SW5mbyIsInRpbGVQYWRkaW5nIiwiY2FwdGlvbkxhcmdlIiwiZGF0YVNoYXBlIiwiSGVyb0FjYWRlbXlXcmFwcGVyIiwiSGVhZGVyV3JhcHBlciIsIkRlc2NyaXB0aW9uV3JhcHBlciIsIkhlcm9BY2FkZW15IiwiSGVyb0NvdXJzZVdyYXBwZXIiLCJIZXJvQ291cnNlcyIsImhlcm9Db3Vyc2VzIiwiYXJyb3dJbWFnZSIsImNvdXJzZURhdGEiLCJIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyIiwiSGVyb0luc3RydWN0b3JzIiwiaW5zdHJ1Y3RvckNvbXBvbmVudHMiLCJpbnN0cnVjdG9yRGF0YSIsIkhlcm9QcmljaW5nV3JhcHBlciIsIkhlcm9QcmljaW5nIiwiSGVyb1dyYXBwZXIiLCJCdXR0b25XcmFwcGVyIiwiSGVybyIsImJ1dHRvbnMiLCJidXR0b25EYXRhIiwiZGVza3RvcFdpZGUiLCJPZmZlcnQiLCJzZWN0aW9uSGVhZGVyIiwib2ZmZXJ0Q29tcG9uZW50cyIsIm9mZmVydENvdXJzZXMiLCJib2R5U21hbGwiLCJQcmljaW5nIiwicHJpY2luZ0NvbXBvbmVudHMiLCJwcmljaW5nQ29tcG9uZW50IiwiUmVndWxhdGlvbnMiLCJzZWN0aW9uQ29tcG9uZW50cyIsIlNlY3Rpb24iLCJzZWN0aW9uRGF0YSIsIlNlY3Rpb25Db21wb25lbnQiLCJfX2NvbXBvbmVudCIsIlNlY3Rpb25zIiwic2VjdGlvbnMiLCJOZXh0U2VvIiwiU2VvIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwic2hhcmVkSW1hZ2UiLCJmb3JtYXRzIiwiaW1hZ2VzIiwiT2JqZWN0IiwidmFsdWVzIiwic2hhcmVJbWFnZSIsIlN0eWxlZExheW91dCIsIkxheW91dCIsIm5hdmlnYXRpb24iLCJQYWdlSGVhZGVyV3JhcHBlciIsInhsViIsIlBhZ2VTZWN0aW9uV3JhcHBlciIsInBhZ2VTZWN0aW9uUGFkZGluZyIsIndpZGUiLCJwYWdlU2VjdGlvbldpZHRoIiwiU3R5bGVkUGFnZVRpbGVXcmFwcGVyIiwiU3R5bGVkUGFnZVdyYXBwZXIiLCJjb2x1bW4iLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwia2luZCIsInciLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZldGNoQVBJIiwiZ2V0UGFnZURhdGEiLCJFcnJvclBhZ2UiLCJEeW5hbWljUGFnZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJzbHVnQXJyYXkiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFnZURhdGEiLCJvbmVPZlR5cGUiLCJub2RlIiwiY3JlYXRlQ29udGV4dCIsIk5Qcm9ncmVzcyIsIkFwcFByb3ZpZGVyIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3RhcnQiLCJjb25maWd1cmUiLCJoYW5kbGVTdG9wIiwiZG9uZSIsIm9mZiIsImdldFN0cmFwaVVSTCIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwicGFnZXNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==