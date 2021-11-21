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
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroInstructorComponent.styles */ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroInstructorComponent\\HeroInstructorComponent.js";






const HeroInstructorComponent = ({
  data: {
    header,
    instructor,
    description
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__.HeroInstructorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h5", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
      children: instructor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
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
/* harmony export */   "ImageWrapper": () => (/* binding */ ImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroInstructorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__HeroInstructorWrapper",
  componentId: "sc-185e0jh-0"
})(["max-width:50rem;display:flex;flex-direction:column;color:", ";h4{margin-bottom:1rem;}", "{&:not(:last-child){padding:0 0 ", " 0;}}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.padding.mV);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__ImageWrapper",
  componentId: "sc-185e0jh-1"
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
}) => theme.padding.s, ({
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
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\seo.js";





const Seo = ({
  seo
}) => {
  const {
    metaTitle,
    metaDescription
  } = seo; // Prevent errors if no metadata was set

  if (!seo) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: metaTitle,
    description: metaDescription
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvW1suLi5zbHVnXV0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1NLFNBQVMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUY7QUFBUUMsRUFBQUEsS0FBUjtBQUFlQyxFQUFBQSxLQUFmO0FBQXNCQyxFQUFBQTtBQUF0QixDQUFELEtBQXNDO0FBQ3RELHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFHLElBQUdILElBQUssRUFBckI7QUFBd0IsWUFBUSxNQUFoQztBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQWtCLGNBQVEsRUFBRUcsUUFBNUI7QUFBQSw4QkFDRTtBQUFBLGtCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQywyREFBRDtBQUFBLCtCQUNFLDhEQUFDLHVEQUFEO0FBQU8sZUFBSyxFQUFFQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBWEQ7O0FBYUFILFNBQVMsQ0FBQ0ssU0FBVixHQUFzQjtBQUNwQkosRUFBQUEsSUFBSSxFQUFFTixxRUFEYztBQUVwQk8sRUFBQUEsS0FBSyxFQUFFUCxxRUFGYTtBQUdwQlEsRUFBQUEsS0FBSyxFQUFFUiwwREFIYTtBQUlwQlMsRUFBQUEsUUFBUSxFQUFFVCx3REFBY2M7QUFKSixDQUF0QjtBQU9BVCxTQUFTLENBQUNVLFlBQVYsR0FBeUI7QUFDdkJULEVBQUFBLElBQUksRUFBRSxFQURpQjtBQUV2QkMsRUFBQUEsS0FBSyxFQUFFO0FBRmdCLENBQXpCO0FBS0EsaUVBQWVGLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVPLE1BQU1GLGdCQUFnQixHQUFHYSxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvTkFPRSxDQUFDO0FBQUVFLEVBQUFBLEtBQUY7QUFBU1QsRUFBQUE7QUFBVCxDQUFELEtBQTBCQSxRQUFRLEdBQUdTLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxXQUFoQixHQUE4QkYsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFNBUC9FLEVBUWhCLENBQUM7QUFBRUgsRUFBQUEsS0FBRjtBQUFTVCxFQUFBQTtBQUFULENBQUQsS0FBMEJBLFFBQVEsR0FBR1MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBQWhCLEdBQThCRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsU0FSN0QsRUFZRSxDQUFDO0FBQUVILEVBQUFBLEtBQUY7QUFBU1QsRUFBQUE7QUFBVCxDQUFELEtBQTBCQSxRQUFRLEdBQUdTLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxXQUFoQixHQUE4QkYsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFNBWi9FLEVBYWhCLENBQUM7QUFBRUgsRUFBQUEsS0FBRjtBQUFTVCxFQUFBQTtBQUFULENBQUQsS0FBMEJBLFFBQVEsR0FBR1MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBQWhCLEdBQThCRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsU0FiN0QsRUFlWixDQUFDO0FBQUVILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFmbEIsQ0FBdEI7QUFtQkEsTUFBTW5CLFlBQVksR0FBR1ksdUVBQUg7QUFBQTtBQUFBO0FBQUEscUJBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJQO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNVSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxJQUFGO0FBQVFDLEVBQUFBLFNBQVI7QUFBbUJDLEVBQUFBO0FBQW5CLENBQUQsS0FBaUM7QUFDOUMsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLFFBRkk7QUFHSkMsSUFBQUEsSUFBSSxFQUFFO0FBQUUxQixNQUFBQTtBQUFGO0FBSEYsTUFJRnFCLElBSko7QUFLQSxzQkFDRSw4REFBQyxrREFBRDtBQUFNLFFBQUksRUFBRyxJQUFHckIsSUFBSyxFQUFyQjtBQUF3QixZQUFRLE1BQWhDO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFBYyxlQUFTLEVBQUVzQixTQUF6QjtBQUFvQyxjQUFRLEVBQUVHLFFBQTlDO0FBQXdELFlBQU0sRUFBRUYsTUFBaEU7QUFBQSxnQkFDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FiRDs7QUFlQUosTUFBTSxDQUFDaEIsU0FBUCxHQUFtQjtBQUNqQmlCLEVBQUFBLElBQUksRUFBRTNCLHVEQUFBLENBQWdCO0FBQ3BCOEIsSUFBQUEsT0FBTyxFQUFFOUIsMERBRFc7QUFFcEIrQixJQUFBQSxRQUFRLEVBQUUvQix3REFGVTtBQUdwQmdDLElBQUFBLElBQUksRUFBRWhDLHVEQUFBLENBQWdCO0FBQ3BCTSxNQUFBQSxJQUFJLEVBQUVOLDBEQUFnQlc7QUFERixLQUFoQjtBQUhjLEdBQWhCLEVBTUhDLFVBUGM7QUFRakJnQixFQUFBQSxTQUFTLEVBQUU1Qix3REFSTTtBQVNqQmtDLEVBQUFBLE1BQU0sRUFBRWxDLHdEQUFjYztBQVRMLENBQW5CO0FBWUFZLE1BQU0sQ0FBQ1gsWUFBUCxHQUFzQjtBQUNwQlksRUFBQUEsSUFBSSxFQUFFO0FBQ0pHLElBQUFBLE9BQU8sRUFBRSxFQURMO0FBRUpFLElBQUFBLElBQUksRUFBRTtBQUNKMUIsTUFBQUEsSUFBSSxFQUFFO0FBREY7QUFGRjtBQURjLENBQXRCO0FBU0EsaUVBQWVvQixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUVPLE1BQU1ELFlBQVksR0FBR1QscUVBQUg7QUFBQTtBQUFBO0FBQUEsOEtBQ04sQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUIsS0FBTixDQUFZQyxZQURyQixFQUdiLENBQUM7QUFBRWxCLEVBQUFBLEtBQUY7QUFBU2EsRUFBQUE7QUFBVCxDQUFELEtBQTBCQSxRQUFRLEdBQUcsR0FBSCxHQUFVLGFBQVliLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxTQUFVLEVBSGxFLEVBSVAsQ0FBQztBQUFFSCxFQUFBQSxLQUFGO0FBQVNXLEVBQUFBO0FBQVQsQ0FBRCxLQUF3QkEsTUFBTSxHQUFHWCxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsV0FBaEIsR0FBOEJGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxTQUpsRSxFQUtILENBQUM7QUFBRUgsRUFBQUEsS0FBRjtBQUFTYSxFQUFBQSxRQUFUO0FBQW1CRixFQUFBQTtBQUFuQixDQUFELEtBQWtDRSxRQUFRLEdBQUlGLE1BQU0sR0FBR1gsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBQWhCLEdBQThCRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsU0FBckQsR0FBa0UsYUFMekcsRUFNZCxDQUFDO0FBQUVILEVBQUFBLEtBQUY7QUFBU2EsRUFBQUE7QUFBVCxDQUFELEtBQTBCQSxRQUFRLEdBQUdiLEtBQUssQ0FBQ0MsTUFBTixDQUFha0IsS0FBaEIsR0FBd0JuQixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsU0FOekQsRUFXTCxDQUFDO0FBQUVPLEVBQUFBO0FBQUYsQ0FBRCxLQUFvQkEsU0FBUyxHQUFHLE1BQUgsR0FBWSxHQVhwQyxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNBOzs7QUFFQSxNQUFNVSxjQUFjLEdBQUcsQ0FBQztBQUFFTixFQUFBQSxJQUFJLEVBQUU7QUFBRU8sSUFBQUEsSUFBRjtBQUFRakMsSUFBQUEsSUFBUjtBQUFja0MsSUFBQUE7QUFBZCxHQUFSO0FBQWdDQyxFQUFBQTtBQUFoQyxDQUFELEtBQW9EO0FBQ3pFLE1BQUlELE1BQUosRUFBWTtBQUNWLHdCQUNFO0FBQUcsVUFBSSxFQUFFbEMsSUFBVDtBQUFlLFlBQU0sRUFBQyxRQUF0QjtBQUErQixTQUFHLEVBQUMscUJBQW5DO0FBQXlELGFBQU8sRUFBRSxNQUFNbUMsWUFBWSxDQUFFQyxLQUFELElBQVcsQ0FBQ0EsS0FBYixDQUFwRjtBQUFBLGdCQUNHSDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRDs7QUFFRCxzQkFDRSw4REFBQyxrREFBRDtBQUFNLFFBQUksRUFBRyxJQUFHakMsSUFBSyxFQUFyQjtBQUF3QixZQUFRLE1BQWhDO0FBQUEsMkJBQ0U7QUFBRyxhQUFPLEVBQUUsTUFBTW1DLFlBQVksQ0FBRUMsS0FBRCxJQUFXLENBQUNBLEtBQWIsQ0FBOUI7QUFBQSxnQkFBb0RIO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQWREOztBQWdCQUQsY0FBYyxDQUFDNUIsU0FBZixHQUEyQjtBQUN6QnNCLEVBQUFBLElBQUksRUFBRWhDLHVEQUFBLENBQWdCO0FBQ3BCdUMsSUFBQUEsSUFBSSxFQUFFdkMsMERBRGM7QUFFcEJNLElBQUFBLElBQUksRUFBRU4sMERBRmM7QUFHcEJ3QyxJQUFBQSxNQUFNLEVBQUV4Qyx3REFBY2M7QUFIRixHQUFoQixFQUlIRixVQUxzQjtBQU16QjZCLEVBQUFBLFlBQVksRUFBRXpDLHdEQUFjMkM7QUFOSCxDQUEzQjtBQVNBTCxjQUFjLENBQUN2QixZQUFmLEdBQThCO0FBQzVCaUIsRUFBQUEsSUFBSSxFQUFFO0FBQ0pPLElBQUFBLElBQUksRUFBRSxFQURGO0FBRUpqQyxJQUFBQSxJQUFJLEVBQUU7QUFGRjtBQURzQixDQUE5QjtBQU9BLGlFQUFlZ0MsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNcEMsS0FBSyxHQUFHLENBQUM7QUFBRU0sRUFBQUE7QUFBRixDQUFELEtBQWU7QUFDM0IsTUFBSUEsS0FBSixFQUFXO0FBQ1QsVUFBTTtBQUFFd0MsTUFBQUEsZUFBRjtBQUFtQkMsTUFBQUEsS0FBbkI7QUFBMEJDLE1BQUFBO0FBQTFCLFFBQXFDMUMsS0FBM0M7O0FBRUEsVUFBTTJDLE1BQU0sR0FBRyxNQUFNO0FBQ25CLGFBQU9OLDJEQUFjLENBQUNyQyxLQUFELENBQXJCO0FBQ0QsS0FGRDs7QUFJQSxVQUFNNEMsUUFBUSxHQUFHUCwyREFBYyxDQUFDckMsS0FBRCxDQUEvQjtBQUVBLHdCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFDRSxjQUFNLEVBQUUyQyxNQURWO0FBRUUsbUJBQVcsTUFGYjtBQUdFLGNBQU0sRUFBQyxZQUhUO0FBSUUsYUFBSyxFQUFFRixLQUpUO0FBS0UsY0FBTSxFQUFFQyxNQUxWO0FBTUUsV0FBRyxFQUFFRSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxlQU43QjtBQU9FLFdBQUcsRUFBRUosZUFBZSxJQUFJLE9BUDFCO0FBUUUsZ0JBQVE7QUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWNELEdBdkJELE1BdUJPO0FBQ0xLLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLHFDQUFkLEVBREssQ0FFTDs7QUFDQSx3QkFBTyw4REFBQyxtREFBRDtBQUFXLFNBQUcsRUFBQyxlQUFmO0FBQStCLFlBQU0sRUFBRSxHQUF2QztBQUE0QyxXQUFLLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEO0FBQ0YsQ0E3QkQ7O0FBK0JBcEQsS0FBSyxDQUFDUSxTQUFOLEdBQWtCO0FBQ2hCRixFQUFBQSxLQUFLLEVBQUVSLHVEQUFBLENBQWdCO0FBQ3JCdUQsSUFBQUEsR0FBRyxFQUFFdkQsMERBRGdCO0FBRXJCZ0QsSUFBQUEsZUFBZSxFQUFFaEQsMERBRkk7QUFHckJpRCxJQUFBQSxLQUFLLEVBQUVqRCwwREFIYztBQUlyQmtELElBQUFBLE1BQU0sRUFBRWxELDBEQUFnQndEO0FBSkgsR0FBaEIsQ0FEUztBQU9oQkMsRUFBQUEsUUFBUSxFQUFFekQsd0RBQWNjO0FBUFIsQ0FBbEI7QUFVQVosS0FBSyxDQUFDYSxZQUFOLEdBQXFCO0FBQ25CUCxFQUFBQSxLQUFLLEVBQUU7QUFDTCtDLElBQUFBLEdBQUcsRUFBRSxFQURBO0FBRUxQLElBQUFBLGVBQWUsRUFBRSwrQkFGWjtBQUdMQyxJQUFBQSxLQUFLLEVBQUUsQ0FIRjtBQUlMQyxJQUFBQSxNQUFNLEVBQUU7QUFKSDtBQURZLENBQXJCO0FBU0EsaUVBQWVoRCxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBRU8sTUFBTTRDLGdCQUFnQixHQUFHOUIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsc0NBQXRCO0FBS0EsTUFBTStCLGVBQWUsR0FBRy9CLHdEQUFNLENBQUM0QixtREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRCQUNULENBQUM7QUFBRTFCLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpQixLQUFOLENBQVlDLFlBRGxCLENBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTXlCLGNBQWMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLFFBQUY7QUFBWUMsRUFBQUE7QUFBWixDQUFELEtBQXlCO0FBQzlDLHNCQUNFLDhEQUFDLHlFQUFEO0FBQXVCLG1CQUFZLHlCQUFuQztBQUFBLGVBQ0dELFFBREgsZUFFRSw4REFBQyx3REFBRDtBQUFNLFdBQUssRUFBRUMsS0FBYjtBQUFvQixxQkFBWTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FQRDs7QUFTQUYsY0FBYyxDQUFDbkQsU0FBZixHQUEyQjtBQUN6Qm9ELEVBQUFBLFFBQVEsRUFBRUosbUVBRGU7QUFFekJLLEVBQUFBLEtBQUssRUFBRS9ELHdEQUFjYztBQUZJLENBQTNCO0FBS0EsaUVBQWUrQyxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFFTyxNQUFNRixxQkFBcUIsR0FBRzNDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdFQUEzQjtBQU9BLE1BQU00QyxJQUFJLEdBQUc1Qyx3RUFBSDtBQUFBO0FBQUE7QUFBQSwrREFDRCxDQUFDO0FBQUUrQyxFQUFBQTtBQUFGLENBQUQsS0FBZ0JBLEtBQUssR0FBRyxRQUFILEdBQWMsUUFEbEMsRUFFSyxDQUFDO0FBQUU3QyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBRmpDLEVBR0QsQ0FBQztBQUFFMkMsRUFBQUE7QUFBRixDQUFELEtBQWdCQSxLQUFLLEdBQUcsUUFBSCxHQUFjLE9BSGxDLENBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsQ0FBQztBQUFFSixFQUFBQSxRQUFGO0FBQVlDLEVBQUFBO0FBQVosQ0FBRCxLQUF5QjtBQUM1QyxzQkFDRSw4REFBQyxxRUFBRDtBQUFxQixtQkFBWSx1QkFBakM7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFNLFdBQUssRUFBRUEsS0FBYjtBQUFvQixxQkFBWTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdELFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQVBEOztBQVNBSSxZQUFZLENBQUN4RCxTQUFiLEdBQXlCO0FBQ3ZCb0QsRUFBQUEsUUFBUSxFQUFFSixtRUFEYTtBQUV2QkssRUFBQUEsS0FBSyxFQUFFL0Qsd0RBQWNjO0FBRkUsQ0FBekI7QUFLQSxpRUFBZW9ELFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUVPLE1BQU1ELG1CQUFtQixHQUFHakQsdUVBQUg7QUFBQTtBQUFBO0FBQUEscUJBQXpCO0FBSUEsTUFBTTRDLElBQUksR0FBRzVDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHdGQUNGLENBQUM7QUFBRStDLEVBQUFBO0FBQUYsQ0FBRCxLQUFnQkEsS0FBSyxHQUFHLFFBQUgsR0FBYyxRQURqQyxFQUVLLENBQUM7QUFBRTdDLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsV0FGakMsRUFHQyxDQUFDO0FBQUUyQyxFQUFBQTtBQUFGLENBQUQsS0FBZ0JBLEtBQUssR0FBRyxRQUFILEdBQWMsUUFIcEMsRUFLYixDQUFDO0FBQUU3QyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTQyxXQUxYLEVBTUcsQ0FBQztBQUFFTCxFQUFBQTtBQUFGLENBQUQsS0FBZ0JBLEtBQUssR0FBRyxRQUFILEdBQWMsUUFOdEMsQ0FBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1PLG1CQUFtQixHQUFHLENBQUM7QUFDM0IzQyxFQUFBQSxJQUFJLEVBQUU7QUFDSnBCLElBQUFBLEtBREk7QUFFSmdFLElBQUFBLFdBRkk7QUFHSnZDLElBQUFBLElBQUksRUFBRTtBQUFFMUIsTUFBQUE7QUFBRixLQUhGO0FBSUprRSxJQUFBQTtBQUpJLEdBRHFCO0FBTzNCaEUsRUFBQUE7QUFQMkIsQ0FBRCxLQVF0QjtBQUNKLHNCQUNFLDhEQUFDLG1GQUFEO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMscUVBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFJZ0U7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFLDhEQUFDLCtEQUFEO0FBQVcsVUFBSSxFQUFFakUsSUFBakI7QUFBdUIsV0FBSyxFQUFFa0UsUUFBOUI7QUFBd0MsV0FBSyxFQUFFaEU7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBbEJEOztBQW9CQThELG1CQUFtQixDQUFDNUQsU0FBcEIsR0FBZ0M7QUFDOUJpQixFQUFBQSxJQUFJLEVBQUUzQix1REFBQSxDQUFnQjtBQUNwQk8sSUFBQUEsS0FBSyxFQUFFUCwwREFEYTtBQUVwQnVFLElBQUFBLFdBQVcsRUFBRXZFLDBEQUZPO0FBR3BCZ0MsSUFBQUEsSUFBSSxFQUFFaEMsdURBQUEsQ0FBZ0I7QUFDcEJNLE1BQUFBLElBQUksRUFBRU4sMERBQWdCVztBQURGLEtBQWhCLENBSGM7QUFNcEI2RCxJQUFBQSxRQUFRLEVBQUV4RSxxRUFBMkJZO0FBTmpCLEdBQWhCLEVBT0hBLFVBUjJCO0FBUzlCSixFQUFBQSxLQUFLLEVBQUVSLDBEQUFnQmE7QUFUTyxDQUFoQztBQVlBeUQsbUJBQW1CLENBQUN2RCxZQUFwQixHQUFtQztBQUNqQ1ksRUFBQUEsSUFBSSxFQUFFO0FBQ0pwQixJQUFBQSxLQUFLLEVBQUUsRUFESDtBQUVKZ0UsSUFBQUEsV0FBVyxFQUFFLEVBRlQ7QUFHSkMsSUFBQUEsUUFBUSxFQUFFLEVBSE47QUFJSnhDLElBQUFBLElBQUksRUFBRTtBQUNKMUIsTUFBQUEsSUFBSSxFQUFFO0FBREY7QUFKRjtBQUQyQixDQUFuQztBQVdBLGlFQUFlZ0UsbUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRU8sTUFBTUQsMEJBQTBCLEdBQUdyRCx1RUFBSDtBQUFBO0FBQUE7QUFBQSx1T0FJMUIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDdUQsVUFBTixDQUFpQkMsV0FKTixFQUtqQixDQUFDO0FBQUV4RCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFrQixLQUxYLEVBTXBCLENBQUM7QUFBRW5CLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpQixLQUFOLENBQVlDLFlBTlAsRUFPdkIsQ0FBQztBQUFFbEIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWXdDLFNBUEosRUFtQm5DLENBQUM7QUFBRXpELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBbkJXLEVBb0J4QixDQUFDO0FBQUVsRCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDdUQsVUFBTixDQUFpQkcsaUJBcEJSLENBQWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUcsdUJBQXVCLEdBQUcsQ0FBQztBQUFFcEQsRUFBQUEsSUFBSSxFQUFFO0FBQUVxRCxJQUFBQSxNQUFGO0FBQVVDLElBQUFBLFVBQVY7QUFBc0JWLElBQUFBO0FBQXRCO0FBQVIsQ0FBRCxLQUFtRDtBQUNqRixzQkFDRSw4REFBQyxrRkFBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtTO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQUlWO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVUFRLHVCQUF1QixDQUFDckUsU0FBeEIsR0FBb0M7QUFDbENpQixFQUFBQSxJQUFJLEVBQUUzQix1REFBQSxDQUFnQjtBQUNwQmdGLElBQUFBLE1BQU0sRUFBRWhGLDBEQURZO0FBRXBCaUYsSUFBQUEsVUFBVSxFQUFFakYsMERBRlE7QUFHcEJ1RSxJQUFBQSxXQUFXLEVBQUV2RSwwREFITztBQUlwQlEsSUFBQUEsS0FBSyxFQUFFUiwwREFBZ0JhO0FBSkgsR0FBaEIsRUFLSEQ7QUFOK0IsQ0FBcEM7QUFTQW1FLHVCQUF1QixDQUFDaEUsWUFBeEIsR0FBdUM7QUFDckNZLEVBQUFBLElBQUksRUFBRTtBQUNKcUQsSUFBQUEsTUFBTSxFQUFFLEVBREo7QUFFSkMsSUFBQUEsVUFBVSxFQUFFLEVBRlI7QUFHSlYsSUFBQUEsV0FBVyxFQUFFO0FBSFQ7QUFEK0IsQ0FBdkM7QUFRQSxpRUFBZVEsdUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUVPLE1BQU1GLHFCQUFxQixHQUFHN0QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsMklBSXZCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFha0IsS0FKTCxFQVU5QixDQUFDO0FBQUVuQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTZSxNQVZNLEVBWWIsQ0FBQztBQUFFaEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY0MsRUFaaEIsQ0FBM0I7QUFpQkEsTUFBTWhGLFlBQVksR0FBR1ksdUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0ZBS3JCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2tCLGVBTEgsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUcsUUFBUSxHQUFHLENBQUM7QUFBRXhELEVBQUFBLElBQUY7QUFBUVMsRUFBQUEsWUFBUjtBQUFzQmdELEVBQUFBLFFBQXRCO0FBQWdDM0IsRUFBQUE7QUFBaEMsQ0FBRCxLQUFnRDtBQUMvRCxzQkFDRSw4REFBQyw2REFBRDtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRzJCLFFBQVEsZ0JBQUcsOERBQUMseUVBQUQ7QUFBZ0IsVUFBSSxFQUFFekQsSUFBdEI7QUFBNEIsa0JBQVksRUFBRVM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxHQUFnRXFCLFFBRjNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FQRDs7QUFTQTBCLFFBQVEsQ0FBQzlFLFNBQVQsR0FBcUI7QUFDbkJzQixFQUFBQSxJQUFJLEVBQUVoQywwREFEYTtBQUVuQnlDLEVBQUFBLFlBQVksRUFBRXpDLHdEQUZLO0FBR25CeUYsRUFBQUEsUUFBUSxFQUFFekYsd0RBSFM7QUFJbkI4RCxFQUFBQSxRQUFRLEVBQUVKLG1FQUFhQTtBQUpKLENBQXJCO0FBT0EsaUVBQWU4QixRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFFTyxNQUFNRixlQUFlLEdBQUd0RSxzRUFBSDtBQUFBO0FBQUE7QUFBQSxvR0FTWCxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLFFBQU4sQ0FBZXFFLE9BVG5CLENBQXJCO0FBYUEsTUFBTUosTUFBTSxHQUFHdkUsd0VBQUg7QUFBQTtBQUFBO0FBQUEsa1dBTUcsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBTi9CLEVBaUJLLENBQUM7QUFBRUYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxTQWpCakMsRUFvQmYsQ0FBQztBQUFFSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTeUIsV0FwQlQsQ0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1NLGdCQUFnQixHQUFHLENBQUM7QUFBRXZFLEVBQUFBLElBQUksRUFBRTtBQUFFcEIsSUFBQUEsS0FBRjtBQUFTNEYsSUFBQUEsUUFBVDtBQUFtQkMsSUFBQUEsU0FBbkI7QUFBOEJDLElBQUFBLFNBQTlCO0FBQXlDQyxJQUFBQTtBQUF6QztBQUFSLENBQUQsS0FBc0U7QUFDN0Ysc0JBQ0UsOERBQUMsaUVBQUQ7QUFBQSw0QkFDRSw4REFBQyxxRUFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQUsvRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUc0RixRQUFRLGlCQUFJLDhEQUFDLDhEQUFEO0FBQUEsZ0JBQVdBO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKZixlQUtFLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBT0MsU0FBUyxDQUFDRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxrQkFBT0gsU0FBUyxDQUFDSTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixFQVNHSCxTQUFTLENBQUNJLEdBQVYsQ0FBYyxDQUFDO0FBQUVGLE1BQUFBLE9BQUY7QUFBV0MsTUFBQUEsVUFBWDtBQUF1QkUsTUFBQUE7QUFBdkIsS0FBRCxrQkFDYiw4REFBQyx5REFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQU9IO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsa0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLE9BQVVFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxDQVRILGVBZUU7QUFBQSxnQkFDR0osV0FBVyxDQUFDRyxHQUFaLENBQWdCLENBQUM7QUFBRUUsUUFBQUEsVUFBRjtBQUFjRCxRQUFBQTtBQUFkLE9BQUQsa0JBQ2YsOERBQUMsZ0VBQUQ7QUFBQSxrQkFBc0JDO0FBQXRCLFNBQWlCRCxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXVCRCxDQXhCRDs7QUEwQkFSLGdCQUFnQixDQUFDeEYsU0FBakIsR0FBNkI7QUFDM0JpQixFQUFBQSxJQUFJLEVBQUUzQix1REFBQSxDQUFnQjtBQUNwQk8sSUFBQUEsS0FBSyxFQUFFUCwwREFEYTtBQUVwQm1HLElBQUFBLFFBQVEsRUFBRW5HLDBEQUZVO0FBR3BCb0csSUFBQUEsU0FBUyxFQUFFcEcsMERBSFM7QUFJcEJxRyxJQUFBQSxTQUFTLEVBQUVyRyx5REFBQSxDQUFrQkEsMERBQWxCLENBSlM7QUFLcEJzRyxJQUFBQSxXQUFXLEVBQUV0Ryx5REFBQSxDQUFrQkEsMERBQWxCO0FBTE8sR0FBaEIsRUFNSFk7QUFQd0IsQ0FBN0I7QUFVQXNGLGdCQUFnQixDQUFDbkYsWUFBakIsR0FBZ0M7QUFDOUJZLEVBQUFBLElBQUksRUFBRTtBQUNKcEIsSUFBQUEsS0FBSyxFQUFFLEVBREg7QUFFSjRGLElBQUFBLFFBQVEsRUFBRSxFQUZOO0FBR0pDLElBQUFBLFNBQVMsRUFBRTtBQUNURyxNQUFBQSxPQUFPLEVBQUUsRUFEQTtBQUVUQyxNQUFBQSxVQUFVLEVBQUU7QUFGSCxLQUhQO0FBT0pILElBQUFBLFNBQVMsRUFBRSxFQVBQO0FBUUpDLElBQUFBLFdBQVcsRUFBRTtBQVJUO0FBRHdCLENBQWhDO0FBYUEsaUVBQWVKLGdCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUVPLE1BQU1KLFFBQVEsR0FBRzlFLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1FQUVOLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ksUUFBTixDQUFldUYsT0FGeEIsRUFHVixDQUFDO0FBQUUzRixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBSGxCLENBQWQ7QUFPQSxNQUFNNEUsR0FBRyxHQUFHaEYsdUVBQUg7QUFBQTtBQUFBO0FBQUEsMEtBT2dCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhMkYsUUFQNUMsRUFVQyxDQUFDO0FBQUU1RixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBVi9CLENBQVQ7QUFjQSxNQUFNd0UsSUFBSSxHQUFHL0Usd0RBQU0sQ0FBQ2dGLEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4RUFFZSxDQUFDO0FBQUU5RSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBRjNDLEVBS0EsQ0FBQztBQUFFRixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWV5RixhQUw5QixDQUFWO0FBU0EsTUFBTWQsVUFBVSxHQUFHakYscUVBQUg7QUFBQTtBQUFBO0FBQUEseUdBRVIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWUyRixZQUZ0QixDQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENQO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRSxRQUFRLEdBQUcsQ0FBQztBQUFFckQsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQ2pDLHNCQUFPLDhEQUFDLDREQUFEO0FBQUEsY0FBaUJBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUFxRCxRQUFRLENBQUN6RyxTQUFULEdBQXFCO0FBQ25Cb0QsRUFBQUEsUUFBUSxFQUFFSixtRUFBYUE7QUFESixDQUFyQjtBQUlBLGlFQUFleUQsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFTyxNQUFNRCxjQUFjLEdBQUdsRyx3REFBTSxDQUFDb0csdURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxtbkJBQ1gsQ0FBQztBQUFFbEcsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUI0QyxpQkFEckIsRUFTZCxDQUFDO0FBQUVuRyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFtRyxLQVRkLEVBd0RkLENBQUM7QUFBRXBHLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYW1HLEtBeERkLEVBNkRaLENBQUM7QUFBRXBHLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYW1HLEtBN0RoQixFQWtFVixDQUFDO0FBQUVwRyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBbEVwQixFQTBFWixDQUFDO0FBQUVMLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYW1HLEtBMUVoQixFQTJFUixDQUFDO0FBQUVwRyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBM0V0QixFQThFVixDQUFDO0FBQUVMLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYW1HLEtBOUVsQixDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBVUE7OztBQUVBLE1BQU1PLE1BQU0sR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE1BQU0sRUFBRTtBQUFFOUMsSUFBQUEsTUFBRjtBQUFVK0MsSUFBQUEsVUFBVjtBQUFzQkMsSUFBQUEsVUFBdEI7QUFBa0NDLElBQUFBO0FBQWxDO0FBQVYsQ0FBRCxLQUFrRTtBQUMvRSxzQkFDRSw4REFBQyx3REFBRDtBQUFBLDJCQUNFLDhEQUFDLHlEQUFEO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLakQ7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsNERBQUQ7QUFBQSxvQkFBbUIrQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMsOERBQUQ7QUFBQSxvQkFDR0MsVUFBVSxDQUFDdkIsR0FBWCxDQUFlLENBQUM7QUFBRUMsWUFBQUEsRUFBRjtBQUFNNUUsWUFBQUEsT0FBTjtBQUFlb0csWUFBQUE7QUFBZixXQUFELGtCQUNkO0FBQUEsb0NBQ0U7QUFBQSx3QkFBT3BHO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixPQUMwQm9HLElBRDFCO0FBQUEsYUFBUXhCLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBWUUsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQWFFLDhEQUFDLHlEQUFEO0FBQUEsa0JBQ0d1QixZQUFZLENBQUN4QixHQUFiLENBQWtCMEIsV0FBRCxpQkFDaEIsOERBQUMsd0RBQUQ7QUFBQSxpQ0FDRSw4REFBQyx1REFBRDtBQUFPLGlCQUFLLEVBQUVBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQW1CQSxXQUFXLENBQUN6QixFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0ExQkQ7O0FBNEJBbUIsTUFBTSxDQUFDbkgsU0FBUCxHQUFtQjtBQUNqQm9ILEVBQUFBLE1BQU0sRUFBRTlILHVEQUFBLENBQWdCO0FBQ3RCZ0YsSUFBQUEsTUFBTSxFQUFFaEYsMERBRGM7QUFFdEIrSCxJQUFBQSxVQUFVLEVBQUUvSCwwREFGVTtBQUd0QmdJLElBQUFBLFVBQVUsRUFBRWhJLHlEQUFBLENBQWtCQSwwREFBbEIsRUFBb0NZLFVBSDFCO0FBSXRCcUgsSUFBQUEsWUFBWSxFQUFFakkseURBQUEsQ0FBa0JBLDBEQUFsQixFQUFvQ1k7QUFKNUIsR0FBaEIsRUFLTEE7QUFOYyxDQUFuQjtBQVNBaUgsTUFBTSxDQUFDOUcsWUFBUCxHQUFzQjtBQUNwQitHLEVBQUFBLE1BQU0sRUFBRTtBQUNOOUMsSUFBQUEsTUFBTSxFQUFFLEVBREY7QUFFTitDLElBQUFBLFVBQVUsRUFBRSxFQUZOO0FBR05DLElBQUFBLFVBQVUsRUFBRSxFQUhOO0FBSU5DLElBQUFBLFlBQVksRUFBRTtBQUpSO0FBRFksQ0FBdEI7QUFTQSxpRUFBZUosTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBRU8sTUFBTU4sWUFBWSxHQUFHdkcsMEVBQUg7QUFBQTtBQUFBO0FBQUEsMEpBQ1osQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjQyxFQURqQixFQUN1QixDQUFDO0FBQUVsRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjaUQsQ0FEcEQsRUFFSCxDQUFDO0FBQUVsSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFNBRnpCLEVBR2QsQ0FBQztBQUFFSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFrQixLQUhkLEVBT3JCLENBQUM7QUFBRW5CLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBUEgsRUFRVixDQUFDO0FBQUVsRCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjQyxFQVJuQixFQVF5QixDQUFDO0FBQUVsRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFja0QsQ0FSdEQsRUFhUixDQUFDO0FBQUVuSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWV1RixPQWJ0QixDQUFsQjtBQWlCQSxNQUFNVyxhQUFhLEdBQUd4Ryx1RUFBSDtBQUFBO0FBQUE7QUFBQSxtVUFFVixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNtRCxFQUZuQixFQUdiLENBQUM7QUFBRXBILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNvRCxHQUhoQixFQVF0QixDQUFDO0FBQUVySCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTZSxNQVJGLEVBU1gsQ0FBQztBQUFFaEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY29ELEdBVGxCLEVBVVQsQ0FBQztBQUFFckgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUIrRCxTQVZ2QixFQWtCdEIsQ0FBQztBQUFFdEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFsQkYsRUFvQlAsQ0FBQztBQUFFaEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ksUUFBTixDQUFldUYsT0FwQnZCLEVBd0J0QixDQUFDO0FBQUUzRixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTQyxXQXhCRixFQTZCdEIsQ0FBQztBQUFFbEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3NFLFdBN0JGLENBQW5CO0FBbUNBLE1BQU1kLGdCQUFnQixHQUFHM0cscUVBQUg7QUFBQTtBQUFBO0FBQUEsMENBQXRCO0FBS0EsTUFBTXlHLGNBQWMsR0FBR3pHLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtLQU1kLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxXQU5kLEVBYXZCLENBQUM7QUFBRUYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFiRCxDQUFwQjtBQWtCQSxNQUFNd0Msa0JBQWtCLEdBQUcxRyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxSEFLbEIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBTFYsRUFVM0IsQ0FBQztBQUFFRixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTZSxNQVZHLENBQXhCO0FBZUEsTUFBTXRCLElBQUksR0FBRzVDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDBIQUtLLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxXQUxqQyxFQU9iLENBQUM7QUFBRUYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFQWCxDQUFWO0FBYUEsTUFBTTBDLGFBQWEsR0FBRzVHLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQU10QixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVN1RSxNQU5GLENBQW5CO0FBV0EsTUFBTXRJLFlBQVksR0FBR1ksdUVBQUg7QUFBQTtBQUFBO0FBQUEsOElBUXJCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFSSCxFQVlyQixDQUFDO0FBQUVoRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTdUUsTUFaSCxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVEsTUFBTSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWM7QUFDM0IsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBLFNBQWI7QUFBd0I1RyxJQUFBQTtBQUF4QixNQUF5Q2tHLGlEQUFVLENBQUNDLDZEQUFELENBQXpEO0FBRUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBUSxhQUFTLEVBQUVRLFNBQW5CO0FBQThCLGFBQVMsRUFBRUMsU0FBekM7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFRLFFBQUUsRUFBQyxRQUFYO0FBQW9CLGVBQVMsRUFBRUQ7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBZSxjQUFRLE1BQXZCO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxlQUFPLEVBQUUsTUFBTTNHLFlBQVksQ0FBQyxLQUFELENBQWpDO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFBTyxlQUFLLEVBQUUwRyxJQUFkO0FBQW9CLGtCQUFRO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU9FLDhEQUFDLHNEQUFEO0FBQVksYUFBTyxFQUFFLE1BQU0xRyxZQUFZLENBQUVDLEtBQUQsSUFBVyxDQUFDQSxLQUFiLENBQXZDO0FBQTRELGVBQVMsRUFBRTJHLFNBQXZFO0FBQWtGLHFCQUFZLGFBQTlGO0FBQUEsOEJBQ0UsOERBQUMsc0RBQUQ7QUFBWSxhQUFLLE1BQWpCO0FBQWtCLGlCQUFTLEVBQUVBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxzREFBRDtBQUFZLGlCQUFTLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBY0QsQ0FqQkQ7O0FBbUJBSCxNQUFNLENBQUN4SSxTQUFQLEdBQW1CO0FBQ2pCeUksRUFBQUEsSUFBSSxFQUFFbkosMERBQWdCYTtBQURMLENBQW5CO0FBSUEsaUVBQWVxSSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFFTyxNQUFNTCxNQUFNLEdBQUc3SCwwRUFBSDtBQUFBO0FBQUE7QUFBQSxvUUFLRCxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNpRCxDQUw1QixFQU1HLENBQUM7QUFBRWxILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsU0FOL0IsRUFPUixDQUFDO0FBQUVILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYWtCLEtBUHBCLEVBU1UsQ0FBQztBQUFFbkIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxXQVR0QyxFQWdCZixDQUFDO0FBQUVGLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNlLE1BaEJULEVBaUJKLENBQUM7QUFBRWhFLEVBQUFBLEtBQUY7QUFBU21JLEVBQUFBO0FBQVQsQ0FBRCxLQUEyQkEsU0FBUyxHQUFJLFFBQU9uSSxLQUFLLENBQUNpRSxPQUFOLENBQWNrRCxDQUFFLEVBQTNCLEdBQWdDLFFBQU9uSCxLQUFLLENBQUNpRSxPQUFOLENBQWNpRCxDQUFFLEVBakJ2RixFQW9CZixDQUFDO0FBQUVsSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTQyxXQXBCVCxFQXFCQyxDQUFDO0FBQUVsRCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFja0QsQ0FyQjlCLENBQVo7QUF5QkEsTUFBTVMsSUFBSSxHQUFHOUgscUVBQUg7QUFBQTtBQUFBO0FBQUEsb0JBQVY7QUFJQSxNQUFNK0gsVUFBVSxHQUFHL0gsMEVBQUg7QUFBQTtBQUFBO0FBQUEsZ01BS1gsQ0FBQztBQUFFcUksRUFBQUE7QUFBRixDQUFELEtBQW9CQSxTQUFTLEdBQUcsTUFBSCxHQUFZLE9BTDlCLENBQWhCO0FBYUEsTUFBTUwsVUFBVSxHQUFHaEksd0VBQUg7QUFBQTtBQUFBO0FBQUEsMktBR0QsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBSDNCLEVBSUQsQ0FBQztBQUFFaUksRUFBQUEsU0FBRjtBQUFhRSxFQUFBQTtBQUFiLENBQUQsS0FBMkJBLEtBQUssSUFBSSxDQUFDRixTQUFWLEdBQXNCLE9BQXRCLEdBQWdDLFFBSjFELEVBS1IsQ0FBQztBQUFFRSxFQUFBQSxLQUFGO0FBQVNGLEVBQUFBO0FBQVQsQ0FBRCxLQUEyQkEsU0FBUyxHQUFHLFdBQUgsR0FBaUJFLEtBQUssR0FBRyxhQUFILEdBQW1CLFdBTHJFLEVBU04sQ0FBQztBQUFFRixFQUFBQTtBQUFGLENBQUQsS0FBb0JBLFNBQVMsR0FBRyxrQ0FBSCxHQUF3QyxFQVQvRCxFQWFOLENBQUM7QUFBRUEsRUFBQUE7QUFBRixDQUFELEtBQW9CQSxTQUFTLEdBQUcsb0NBQUgsR0FBMEMsRUFiakUsQ0FBaEI7QUFpQkEsTUFBTUosTUFBTSxHQUFHakksdUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0dBS0csQ0FBQztBQUFFRSxFQUFBQSxLQUFGO0FBQVNrSSxFQUFBQTtBQUFULENBQUQsS0FBMkJBLFNBQVMsR0FBRyxhQUFILEdBQW1CbEksS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBTHZFLENBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTXFJLFVBQVUsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUNuQyxRQUFNO0FBQUVqSCxJQUFBQTtBQUFGLE1BQW1Ca0csaURBQVUsQ0FBQ0MsNkRBQUQsQ0FBbkM7QUFFQSxzQkFDRSw4REFBQyxnRUFBRDtBQUFBLGNBQ0djLFFBQVEsQ0FBQ2pELEdBQVQsQ0FBYSxDQUFDO0FBQUVrRCxNQUFBQSxTQUFGO0FBQWFqRCxNQUFBQSxFQUFiO0FBQWlCa0QsTUFBQUE7QUFBakIsS0FBRCxrQkFDWiw4REFBQyw4REFBRDtBQUFBLDhCQUNFLDhEQUFDLHlFQUFEO0FBQUEsK0JBQ0U7QUFBQSxvQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUEsa0JBQ0dDLEtBQUssQ0FBQ25ELEdBQU4sQ0FBV3pFLElBQUQsaUJBQ1QsOERBQUMsaUVBQUQ7QUFBVSxrQkFBUSxNQUFsQjtBQUFpQyxjQUFJLEVBQUVBLElBQXZDO0FBQTZDLHNCQUFZLEVBQUVTO0FBQTNELFdBQXdCVCxJQUFJLENBQUMwRSxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBLE9BQXFCQSxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBbkJEOztBQXFCQStDLFVBQVUsQ0FBQy9JLFNBQVgsR0FBdUI7QUFDckJnSixFQUFBQSxRQUFRLEVBQUUxSix5REFBQSxDQUNSQSx1REFBQSxDQUFnQjtBQUNkMkosSUFBQUEsU0FBUyxFQUFFM0oscUVBREc7QUFFZDBHLElBQUFBLEVBQUUsRUFBRTFHLDBEQUZVO0FBR2Q0SixJQUFBQSxLQUFLLEVBQUU1Six5REFBQSxDQUFrQkEsMERBQWxCLEVBQW9DWTtBQUg3QixHQUFoQixDQURRO0FBRFcsQ0FBdkI7QUFVQTZJLFVBQVUsQ0FBQzFJLFlBQVgsR0FBMEI7QUFDeEIySSxFQUFBQSxRQUFRLEVBQUUsQ0FDUjtBQUNFQyxJQUFBQSxTQUFTLEVBQUUsRUFEYjtBQUVFakQsSUFBQUEsRUFBRSxFQUFFLENBRk47QUFHRWtELElBQUFBLEtBQUssRUFBRTtBQUhULEdBRFE7QUFEYyxDQUExQjtBQVVBLGlFQUFlSCxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBRU8sTUFBTUQsZ0JBQWdCLEdBQUd4SSx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzVkFLUCxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsU0FMckIsRUFNaEIsQ0FBQztBQUFFSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFOYixFQU1tQixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjaUQsQ0FOaEQsRUFTaEIsQ0FBQztBQUFFbEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzJFLEVBVGIsRUFVYixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjNEUsQ0FWaEIsRUFhekIsQ0FBQztBQUFFN0ksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFiQyxFQWNYLENBQUM7QUFBRWhFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNrRCxDQWRsQixFQWVkLENBQUM7QUFBRW5ILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWMyRSxFQWZmLEVBZXFCLENBQUM7QUFBRTVJLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNrRCxDQWZsRCxFQWtCekIsQ0FBQztBQUFFbkgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0FsQkMsRUFtQmQsQ0FBQztBQUFFbEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzZFLEVBbkJmLEVBbUJxQixDQUFDO0FBQUU5SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFja0QsQ0FuQmxELENBQXRCO0FBNEJBLE1BQU00QixVQUFVLEdBQUdqSiwwRUFBSDtBQUFBO0FBQUE7QUFBQSwySEFBaEI7QUFXQSxNQUFNeUcsY0FBYyxHQUFHekcsdUVBQUg7QUFBQTtBQUFBO0FBQUEseUpBYVYsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWVxRSxPQWJwQixDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBWUEsTUFBTWtGLFdBQVcsR0FBRyxDQUFDO0FBQ25CbEosRUFBQUEsSUFBSSxFQUFFO0FBQ0pxRCxJQUFBQSxNQUFNLEVBQUU7QUFBRXpFLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxLQURKO0FBRUpzSyxJQUFBQSxRQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFJSkMsSUFBQUEsU0FKSTtBQUtKQyxJQUFBQTtBQUxJO0FBRGEsQ0FBRCxLQVFkO0FBQ0osc0JBQ0U7QUFBQSw0QkFDRSwrREFBQyxxRUFBRDtBQUFZLFdBQUssRUFBRXpLLEtBQW5CO0FBQUEsNkJBQ0UsK0RBQUMscUVBQUQ7QUFBYyxhQUFLLE1BQW5CO0FBQUEsK0JBQ0U7QUFBQSxvQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSwrREFBQyx1RUFBRDtBQUFhLFlBQU0sTUFBbkI7QUFBQSxnQkFDR3VLLFFBQVEsQ0FBQ3JFLEdBQVQsQ0FBYSxDQUFDO0FBQUVsRyxRQUFBQSxLQUFGO0FBQVMySyxRQUFBQSxPQUFUO0FBQWtCeEUsUUFBQUE7QUFBbEIsT0FBRCxrQkFDWiwrREFBQyx1RUFBRDtBQUFBLGdDQUNFLCtEQUFDLHFFQUFEO0FBQWMsZUFBSyxNQUFuQjtBQUFBLGlDQUNFLCtEQUFDLDZEQUFEO0FBQUEsc0JBQWNuRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUUsK0RBQUMsaUVBQUQ7QUFBQSxvQkFBVzJLO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBLFNBQWtCeEUsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFnQkUsK0RBQUMsNkRBQUQ7QUFBQSw2QkFDRSwrREFBQyw2REFBRDtBQUFBLGtCQUNHcUUsVUFBVSxDQUFDdEUsR0FBWCxDQUFlLENBQUM7QUFBRTNFLFVBQUFBLE9BQUY7QUFBV29HLFVBQUFBLElBQVg7QUFBaUJ4QixVQUFBQTtBQUFqQixTQUFELGtCQUNkLCtEQUFDLCtEQUFEO0FBQUEsa0NBQ0UsK0RBQUMsNERBQUQ7QUFBQSxzQkFBYTVFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsc0JBQU9vRztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxXQUFvQnhCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUEwQkUsK0RBQUMsdUVBQUQ7QUFBYSxXQUFLLE1BQWxCO0FBQW1CLFVBQUksTUFBdkI7QUFBQSw2QkFDRSwrREFBQyx1RUFBRDtBQUFhLFlBQUksTUFBakI7QUFBQSxnQ0FDRSwrREFBQyx5RUFBRDtBQUFnQixlQUFLLE1BQXJCO0FBQUEsaUNBQ0U7QUFBQSxzQkFBS3NFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSwrREFBQyxpRUFBRDtBQUFBLG9CQUNHQyxhQUFhLENBQUN4RSxHQUFkLENBQWtCLENBQUM7QUFBRWxHLFlBQUFBLEtBQUY7QUFBUzRLLFlBQUFBLFNBQVQ7QUFBb0J6RSxZQUFBQTtBQUFwQixXQUFELGtCQUNqQiwrREFBQyxpRUFBRDtBQUFVLGdCQUFJLE1BQWQ7QUFBQSxvQ0FDRSwrREFBQyxxRUFBRDtBQUFBLHFDQUNFLCtEQUFDLGtFQUFEO0FBQUEsMEJBQW1Cbkc7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRSwrREFBQyw0REFBRDtBQUFBLHdCQUNHNEssU0FBUyxDQUFDMUUsR0FBVixDQUFjLENBQUM7QUFBRTJFLGdCQUFBQSxJQUFGO0FBQVExRSxnQkFBQUE7QUFBUixlQUFELGtCQUNiLCtEQUFDLGlFQUFEO0FBQUEsdUNBQ0UsK0RBQUMsNERBQUQ7QUFBQSw0QkFBYTBFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFlMUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBLGFBQW9CQSxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRjtBQUFBLGtCQURGO0FBb0RELENBN0REOztBQStEQW1FLFdBQVcsQ0FBQ25LLFNBQVosR0FBd0I7QUFDdEJpQixFQUFBQSxJQUFJLEVBQUUzQix1REFBQSxDQUFnQjtBQUNwQmdGLElBQUFBLE1BQU0sRUFBRWhGLHVEQUFBLENBQWdCO0FBQ3RCTyxNQUFBQSxLQUFLLEVBQUVQLDBEQURlO0FBRXRCUSxNQUFBQSxLQUFLLEVBQUVSLDBEQUFnQmE7QUFGRCxLQUFoQixDQURZO0FBS3BCaUssSUFBQUEsUUFBUSxFQUFFOUsseURBQUEsQ0FBa0JBLDBEQUFsQixDQUxVO0FBTXBCK0ssSUFBQUEsVUFBVSxFQUFFL0sseURBQUEsQ0FBa0JBLDBEQUFsQixDQU5RO0FBT3BCZ0wsSUFBQUEsU0FBUyxFQUFFaEwsMERBUFM7QUFRcEJpTCxJQUFBQSxhQUFhLEVBQUVqTCx5REFBQSxDQUFrQkEsMERBQWxCO0FBUkssR0FBaEIsRUFTSFk7QUFWbUIsQ0FBeEI7QUFhQWlLLFdBQVcsQ0FBQzlKLFlBQVosR0FBMkI7QUFDekJZLEVBQUFBLElBQUksRUFBRTtBQUNKcUQsSUFBQUEsTUFBTSxFQUFFO0FBQ056RSxNQUFBQSxLQUFLLEVBQUU7QUFERCxLQURKO0FBSUp1SyxJQUFBQSxRQUFRLEVBQUUsRUFKTjtBQUtKQyxJQUFBQSxVQUFVLEVBQUUsRUFMUjtBQU1KQyxJQUFBQSxTQUFTLEVBQUUsRUFOUDtBQU9KQyxJQUFBQSxhQUFhLEVBQUU7QUFQWDtBQURtQixDQUEzQjtBQVlBLGlFQUFlSixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBRU8sTUFBTVIsV0FBVyxHQUFHckosc0VBQUg7QUFBQTtBQUFBO0FBQUEsd0JBQ1QsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWVnSyxZQURyQixDQUFqQjtBQUlBLE1BQU1oQixXQUFXLEdBQUd0SiwyRUFBSDtBQUFBO0FBQUE7QUFBQSxvRkFDWCxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNDLEVBRGxCLEVBQ3dCLENBQUM7QUFBRWxFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNpRCxDQURyRCxFQUdGLENBQUM7QUFBRWxILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsU0FIMUIsRUFLcEIsQ0FBQztBQUFFSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTZSxNQUxKLEVBTVQsQ0FBQztBQUFFaEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY0MsRUFOcEIsRUFNMEIsQ0FBQztBQUFFbEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2tELENBTnZELENBQWpCO0FBVUEsTUFBTWtDLFdBQVcsR0FBR3ZKLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHNKQUlULENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUIrRyxnQkFKdkIsRUFNcEIsQ0FBQztBQUFFdEssRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BTkosQ0FBakI7QUFhQSxNQUFNOEIsYUFBYSxHQUFHeEosdUVBQUg7QUFBQTtBQUFBO0FBQUEsMk5BR2YsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFrQixLQUhiLEVBVVQsQ0FBQztBQUFFbkIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ksUUFBTixDQUFlbUssa0JBVnJCLEVBYXRCLENBQUM7QUFBRXZLLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNlLE1BYkYsRUFtQnRCLENBQUM7QUFBRWhFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVN1RSxNQW5CRixDQUFuQjtBQTJCQSxNQUFNTSxVQUFVLEdBQUdoSSx3RUFBSDtBQUFBO0FBQUE7QUFBQSx3REFDWixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsV0FEaEIsQ0FBaEI7QUFNQSxNQUFNcUosVUFBVSxHQUFHekosc0VBQUg7QUFBQTtBQUFBO0FBQUEsd0NBRVIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWVDLElBRnRCLENBQWhCO0FBS0EsTUFBTW1KLFVBQVUsR0FBRzFKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDJFQUluQixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBSkwsQ0FBaEI7QUFTQSxNQUFNdUcsZUFBZSxHQUFHM0osdUVBQUg7QUFBQTtBQUFBO0FBQUEsd0pBS3hCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFMQSxFQVViLENBQUM7QUFBRWhFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUN1RCxVQUFOLENBQWlCK0QsU0FWbkIsRUFjeEIsQ0FBQztBQUFFdEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BZEEsQ0FBckI7QUFxQkEsTUFBTWtDLGdCQUFnQixHQUFHNUosc0VBQUg7QUFBQTtBQUFBO0FBQUEsNkJBQ3pCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2tELFdBREksQ0FBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTXlILE9BQU8sR0FBRyxDQUFDO0FBQUVsSyxFQUFBQSxJQUFJLEVBQUU7QUFBRXBCLElBQUFBLEtBQUY7QUFBU3dILElBQUFBLFVBQVQ7QUFBcUIrRCxJQUFBQTtBQUFyQjtBQUFSLENBQUQsS0FBa0Q7QUFDaEUsc0JBQ0UsOERBQUMsdUVBQUQ7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLHFFQUFEO0FBQWMsYUFBSyxNQUFuQjtBQUFBLCtCQUNFO0FBQUEsb0JBQUt2TDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRTtBQUFBLG9CQUFLd0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQU9FLDhEQUFDLCtEQUFEO0FBQUEsa0JBQ0crRCxXQUFXLENBQUNyRixHQUFaLENBQWdCLENBQUM7QUFBRUMsVUFBQUEsRUFBRjtBQUFNNUUsVUFBQUEsT0FBTjtBQUFlb0csVUFBQUE7QUFBZixTQUFELGtCQUNmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBT3BHO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixPQUMwQm9HLElBRDFCO0FBQUEsV0FBUXhCLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUJELENBcEJEOztBQXNCQW1GLE9BQU8sQ0FBQ25MLFNBQVIsR0FBb0I7QUFDbEJpQixFQUFBQSxJQUFJLEVBQUUzQix1REFBQSxDQUFnQjtBQUNwQk8sSUFBQUEsS0FBSyxFQUFFUCwwREFEYTtBQUVwQitMLElBQUFBLE9BQU8sRUFBRS9MLDBEQUZXO0FBR3BCK0gsSUFBQUEsVUFBVSxFQUFFL0gsMERBSFE7QUFJcEI4TCxJQUFBQSxXQUFXLEVBQUU5TCx5REFBQSxDQUFrQkEsMERBQWxCO0FBSk8sR0FBaEIsRUFLSFk7QUFOZSxDQUFwQjtBQVNBaUwsT0FBTyxDQUFDOUssWUFBUixHQUF1QjtBQUNyQlksRUFBQUEsSUFBSSxFQUFFO0FBQ0pwQixJQUFBQSxLQUFLLEVBQUUsRUFESDtBQUVKd0wsSUFBQUEsT0FBTyxFQUFFLEVBRkw7QUFHSmhFLElBQUFBLFVBQVUsRUFBRSxFQUhSO0FBSUorRCxJQUFBQSxXQUFXLEVBQUU7QUFKVDtBQURlLENBQXZCO0FBU0EsaUVBQWVELE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFFTyxNQUFNcEUsY0FBYyxHQUFHekcsdUVBQUg7QUFBQTtBQUFBO0FBQUEsa0pBQ0wsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFrQixLQUR2QixFQUVSLENBQUM7QUFBRW5CLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpQixLQUFOLENBQVlDLFlBRm5CLEVBR1gsQ0FBQztBQUFFbEIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWXdDLFNBSGhCLEVBSWQsQ0FBQztBQUFFekQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUJDLFdBSmxCLEVBS1YsQ0FBQztBQUFFeEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUIrRCxTQUx0QixFQVFWLENBQUM7QUFBRXRILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLFFBQU4sQ0FBZTBELE1BUnBCLEVBV3ZCLENBQUM7QUFBRTlELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBWEQsRUFZWixDQUFDO0FBQUVsRCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDdUQsVUFBTixDQUFpQkcsaUJBWnBCLENBQXBCO0FBZ0JBLE1BQU1nSCxjQUFjLEdBQUc1Syx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxRkFTVixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLFFBQU4sQ0FBZXVGLE9BVHBCLENBQXBCO0FBY0EsTUFBTWEsa0JBQWtCLEdBQUcxRyx1RUFBSDtBQUFBO0FBQUE7QUFBQSx3SUFNZCxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLFFBQU4sQ0FBZTBLLFlBTmhCLEVBYzNCLENBQUM7QUFBRTlLLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVN1RSxNQWRHLENBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTTJELFdBQVcsR0FBRyxDQUFDO0FBQUUxSyxFQUFBQSxJQUFJLEVBQUU7QUFBRXBCLElBQUFBLEtBQUY7QUFBU2dFLElBQUFBLFdBQVQ7QUFBc0IrRSxJQUFBQSxNQUF0QjtBQUE4QjlJLElBQUFBO0FBQTlCO0FBQVIsQ0FBRCxLQUFxRDtBQUN2RSxzQkFDRSw4REFBQyxtRUFBRDtBQUFBLDRCQUNFLDhEQUFDLDhEQUFEO0FBQUEsNkJBQ0UsOERBQUMscUVBQUQ7QUFBYyxhQUFLLE1BQW5CO0FBQUEsK0JBQ0U7QUFBQSxvQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSw4REFBQyxtRUFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQUlnRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFRLFlBQUksRUFBRStFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFVRSw4REFBQyw2REFBRDtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQU8sYUFBSyxFQUFFOUk7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQWpCRDs7QUFtQkE2TCxXQUFXLENBQUMzTCxTQUFaLEdBQXdCO0FBQ3RCaUIsRUFBQUEsSUFBSSxFQUFFc0ssK0RBQVNBO0FBRE8sQ0FBeEI7QUFJQUksV0FBVyxDQUFDdEwsWUFBWixHQUEyQjtBQUN6QlksRUFBQUEsSUFBSSxFQUFFO0FBQ0pwQixJQUFBQSxLQUFLLEVBQUUsRUFESDtBQUVKZ0UsSUFBQUEsV0FBVyxFQUFFO0FBRlQ7QUFEbUIsQ0FBM0I7QUFPQSxpRUFBZThILFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBRU8sTUFBTUgsa0JBQWtCLEdBQUdsTCwyRUFBSDtBQUFBO0FBQUE7QUFBQSxxUkFDbEIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFEWCxFQUNtQixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFEaEQsRUFDc0QsQ0FBQztBQUFFNUksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2lELENBRG5GLEVBR2xCLENBQUM7QUFBRWxILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWMyRSxFQUhYLEVBSWYsQ0FBQztBQUFFNUksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzJFLEVBSmQsRUFRM0IsQ0FBQztBQUFFNUksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU21JLE9BUkcsRUFTaEIsQ0FBQztBQUFFcEwsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzJFLEVBVGIsRUFTbUIsQ0FBQztBQUFFNUksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2tELENBVGhELEVBZTNCLENBQUM7QUFBRW5ILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBZkcsRUFnQmhCLENBQUM7QUFBRWxELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNDLEVBaEJiLEVBZ0JtQixDQUFDO0FBQUVsRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFja0QsQ0FoQmhELEVBaUJoQixDQUFDO0FBQUVuSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjQyxFQWpCYixDQUF4QjtBQXFCQSxNQUFNK0csYUFBYSxHQUFHbkwsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNERBSXRCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU21JLE9BSkYsQ0FBbkI7QUFTQSxNQUFNRixrQkFBa0IsR0FBR3BMLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDJUQU9sQixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUN1RCxVQUFOLENBQWlCQyxXQVBkLEVBUVQsQ0FBQztBQUFFeEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFha0IsS0FSbkIsRUFTWixDQUFDO0FBQUVuQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUIsS0FBTixDQUFZQyxZQVRmLEVBVWYsQ0FBQztBQUFFbEIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWXdDLFNBVlosRUFnQjNCLENBQUM7QUFBRXpELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNtSSxPQWhCRyxFQWlCQyxDQUFDO0FBQUVwTCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDdUQsVUFBTixDQUFpQitELFNBakJqQyxFQXNCM0IsQ0FBQztBQUFFdEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0F0QkcsRUF1QmhCLENBQUM7QUFBRWxELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUN1RCxVQUFOLENBQWlCRyxpQkF2QmhCLENBQXhCO0FBMkJBLE1BQU14RSxZQUFZLEdBQUdZLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVKQU1yQixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNtSSxPQU5ILEVBT08sQ0FBQztBQUFFcEwsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUIrRCxTQVB2QyxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNZ0UsV0FBVyxHQUFHLENBQUM7QUFBRTdLLEVBQUFBLElBQUksRUFBRTtBQUFFcEIsSUFBQUEsS0FBRjtBQUFTa00sSUFBQUEsV0FBVDtBQUFzQkMsSUFBQUE7QUFBdEI7QUFBUixDQUFELEtBQWtEO0FBQ3BFLHNCQUNFLDhEQUFDLGtFQUFEO0FBQUEsNEJBQ0UsOERBQUMseUVBQUQ7QUFBZ0IsV0FBSyxNQUFyQjtBQUFBLDZCQUNFO0FBQUEsa0JBQUtuTTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsK0RBQUQ7QUFBQSxnQkFDR2tNLFdBQVcsQ0FBQ2hHLEdBQVosQ0FBaUJrRyxVQUFELGlCQUNmLDhEQUFDLHVGQUFEO0FBQXlDLFlBQUksRUFBRUEsVUFBL0M7QUFBMkQsYUFBSyxFQUFFRDtBQUFsRSxTQUEwQkMsVUFBVSxDQUFDakcsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQWJEOztBQWVBOEYsV0FBVyxDQUFDOUwsU0FBWixHQUF3QjtBQUN0QmlCLEVBQUFBLElBQUksRUFBRTNCLHVEQUFBLENBQWdCO0FBQ3BCME0sSUFBQUEsVUFBVSxFQUFFMU0sMERBRFE7QUFFcEJ5TSxJQUFBQSxXQUFXLEVBQUV6TSx5REFBQSxDQUFrQkEsMERBQWxCLENBRk87QUFHcEIwRyxJQUFBQSxFQUFFLEVBQUUxRywwREFIZ0I7QUFJcEJPLElBQUFBLEtBQUssRUFBRVAsMERBQWdCVztBQUpILEdBQWhCLEVBS0hDO0FBTm1CLENBQXhCO0FBU0E0TCxXQUFXLENBQUN6TCxZQUFaLEdBQTJCO0FBQ3pCWSxFQUFBQSxJQUFJLEVBQUU7QUFDSjhLLElBQUFBLFdBQVcsRUFBRSxFQURUO0FBRUpsTSxJQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURtQixDQUEzQjtBQU9BLGlFQUFlaU0sV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBRU8sTUFBTUQsaUJBQWlCLEdBQUd2TCwyRUFBSDtBQUFBO0FBQUE7QUFBQSwyRUFDakIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFEWixFQUNrQixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjNEUsQ0FEL0MsRUFHMUIsQ0FBQztBQUFFN0ksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU21JLE9BSEUsRUFJZixDQUFDO0FBQUVwTCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFKZCxFQUlvQixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjaUQsQ0FKakQsRUFPMUIsQ0FBQztBQUFFbEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0FQRSxFQVFmLENBQUM7QUFBRWxELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNDLEVBUmQsRUFRb0IsQ0FBQztBQUFFbEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2tELENBUmpELENBQXZCO0FBWUEsTUFBTVosY0FBYyxHQUFHekcsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUxBSVgsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjaUQsQ0FKbEIsRUFLZCxDQUFDO0FBQUVsSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFMZixFQU1YLENBQUM7QUFBRTVJLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWMyRSxFQU5sQixFQVF2QixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTQyxXQVJELEVBU1QsQ0FBQztBQUFFbEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY0MsRUFUcEIsRUFVWixDQUFDO0FBQUVsRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjQyxFQVZqQixDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZFA7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU15SCxlQUFlLEdBQUcsQ0FBQztBQUFFbEwsRUFBQUEsSUFBSSxFQUFFO0FBQUVtTCxJQUFBQTtBQUFGO0FBQVIsQ0FBRCxLQUF3QztBQUM5RCxzQkFDRSw4REFBQywyRUFBRDtBQUFBLGNBQ0dBLG9CQUFvQixDQUFDckcsR0FBckIsQ0FBMEJzRyxjQUFELGlCQUN4Qiw4REFBQywrRkFBRDtBQUFpRCxVQUFJLEVBQUVBO0FBQXZELE9BQThCQSxjQUFjLENBQUNyRyxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7QUFVQW1HLGVBQWUsQ0FBQ25NLFNBQWhCLEdBQTRCO0FBQzFCaUIsRUFBQUEsSUFBSSxFQUFFM0IsdURBQUEsQ0FBZ0I7QUFDcEI4TSxJQUFBQSxvQkFBb0IsRUFBRTlNLHlEQUFBLENBQWtCQSwwREFBbEI7QUFERixHQUFoQixFQUVIWTtBQUh1QixDQUE1QjtBQU1BaU0sZUFBZSxDQUFDOUwsWUFBaEIsR0FBK0I7QUFDN0JZLEVBQUFBLElBQUksRUFBRTtBQUNKbUwsSUFBQUEsb0JBQW9CLEVBQUU7QUFEbEI7QUFEdUIsQ0FBL0I7QUFNQSxpRUFBZUQsZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFTyxNQUFNRCxzQkFBc0IsR0FBRzVMLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDJMQUN0QixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWMyRSxFQURQLEVBQ2EsQ0FBQztBQUFFNUksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzRFLENBRDFDLEVBRWIsQ0FBQztBQUFFN0ksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxTQUZmLEVBTS9CLENBQUM7QUFBRUgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBUzZJLFdBTk8sRUFPcEIsQ0FBQztBQUFFOUwsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzJFLEVBUFQsRUFPZSxDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFja0QsQ0FQNUMsRUFVL0IsQ0FBQztBQUFFbkgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFWTyxFQWUvQixDQUFDO0FBQUVoRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTQyxXQWZPLEVBZ0JwQixDQUFDO0FBQUVsRCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjQyxFQWhCVCxFQWdCZSxDQUFDO0FBQUVsRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFja0QsQ0FoQjVDLENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTTZFLFdBQVcsR0FBRyxDQUFDO0FBQUV2TCxFQUFBQSxJQUFJLEVBQUU7QUFBRXBCLElBQUFBLEtBQUY7QUFBU2dFLElBQUFBLFdBQVQ7QUFBc0IrRSxJQUFBQTtBQUF0QjtBQUFSLENBQUQsS0FBOEM7QUFDaEUsc0JBQ0UsOERBQUMsbUVBQUQ7QUFBQSw0QkFDRSw4REFBQyx5RUFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQUsvSTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsbUVBQUQ7QUFBQSw4QkFDRSw4REFBQyxxRUFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQUlnRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMseURBQUQ7QUFBUSxZQUFJLEVBQUUrRSxNQUFkO0FBQXNCLGNBQU07QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFhRCxDQWREOztBQWdCQTRELFdBQVcsQ0FBQ3hNLFNBQVosR0FBd0I7QUFDdEJpQixFQUFBQSxJQUFJLEVBQUUzQix1REFBQSxDQUFnQjtBQUNwQk8sSUFBQUEsS0FBSyxFQUFFUCwwREFEYTtBQUVwQnVFLElBQUFBLFdBQVcsRUFBRXZFLDBEQUZPO0FBR3BCc0osSUFBQUEsTUFBTSxFQUFFdEosMERBQWdCYTtBQUhKLEdBQWhCLEVBSUhEO0FBTG1CLENBQXhCO0FBUUFzTSxXQUFXLENBQUNuTSxZQUFaLEdBQTJCO0FBQ3pCWSxFQUFBQSxJQUFJLEVBQUU7QUFDSnBCLElBQUFBLEtBQUssRUFBRSxFQURIO0FBRUpnRSxJQUFBQSxXQUFXLEVBQUU7QUFGVDtBQURtQixDQUEzQjtBQU9BLGlFQUFlMkksV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBRU8sTUFBTUQsa0JBQWtCLEdBQUdqTSwyRUFBSDtBQUFBO0FBQUE7QUFBQSwwTEFJbEIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFKWCxFQUlpQixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjNEUsQ0FKOUMsRUFLVCxDQUFDO0FBQUU3SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFNBTG5CLEVBTXBCLENBQUM7QUFBRUgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFha0IsS0FOUixFQVEzQixDQUFDO0FBQUVuQixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTbUksT0FSRyxFQVNoQixDQUFDO0FBQUVwTCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFUYixFQVNtQixDQUFDO0FBQUU1SSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjaUQsQ0FUaEQsRUFZM0IsQ0FBQztBQUFFbEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BWkcsRUFhaEIsQ0FBQztBQUFFeEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY0MsRUFiYixFQWFtQixDQUFDO0FBQUVsRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjaUQsQ0FiaEQsRUFnQjNCLENBQUM7QUFBRWxILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBaEJHLEVBaUJoQixDQUFDO0FBQUVsRCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjQyxFQWpCYixFQWlCbUIsQ0FBQztBQUFFbEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2tELENBakJoRCxDQUF4QjtBQXFCQSxNQUFNK0Qsa0JBQWtCLEdBQUdwTCx1RUFBSDtBQUFBO0FBQUE7QUFBQSw2WUFLcEIsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDdUQsVUFBTixDQUFpQitELFNBTFosRUFPM0IsQ0FBQztBQUFFdEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3NFLFdBUEcsRUFXM0IsQ0FBQztBQUFFdkgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BWEcsRUFlM0IsQ0FBQztBQUFFeEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0FmRyxFQXFCbEIsQ0FBQztBQUFFbEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxXQXJCVixFQXNCWCxDQUFDO0FBQUVGLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsV0F0QmpCLEVBeUJoQixDQUFDO0FBQUVGLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsV0F6QlosRUEwQlQsQ0FBQztBQUFFRixFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFdBMUJuQixFQStCZCxDQUFDO0FBQUVGLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLFFBQU4sQ0FBZXVGLE9BL0JoQixFQW1DekIsQ0FBQztBQUFFM0YsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3NFLFdBbkNDLEVBdUN6QixDQUFDO0FBQUV2SCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTdUUsTUF2Q0MsRUEyQ3pCLENBQUM7QUFBRXhILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBM0NDLENBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1pSixJQUFJLEdBQUcsQ0FBQztBQUFFMUwsRUFBQUEsSUFBSSxFQUFFO0FBQUVwQixJQUFBQSxLQUFGO0FBQVNnRSxJQUFBQSxXQUFUO0FBQXNCK0ksSUFBQUEsT0FBdEI7QUFBK0I5TSxJQUFBQTtBQUEvQjtBQUFSLENBQUQsS0FBc0Q7QUFDakUsc0JBQ0UsOERBQUMscURBQUQ7QUFBQSw0QkFDRSw4REFBQyx3REFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQUtEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLHFFQUFEO0FBQUEsK0JBQ0U7QUFBQSxvQkFBS2dFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFLRSw4REFBQyx1REFBRDtBQUFBLGtCQUNHK0ksT0FBTyxDQUFDN0csR0FBUixDQUFhOEcsVUFBRCxpQkFDWCw4REFBQyx5REFBRDtBQUE0QixjQUFJLEVBQUVBLFVBQWxDO0FBQThDLG1CQUFTO0FBQXZELFdBQWFBLFVBQVUsQ0FBQzdHLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLDhEQUFDLHNEQUFEO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBTyxhQUFLLEVBQUVsRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELENBbkJEOztBQXFCQTZNLElBQUksQ0FBQzNNLFNBQUwsR0FBaUI7QUFDZmlCLEVBQUFBLElBQUksRUFBRXNLLCtEQUFTQTtBQURBLENBQWpCO0FBSUFvQixJQUFJLENBQUN0TSxZQUFMLEdBQW9CO0FBQ2xCWSxFQUFBQSxJQUFJLEVBQUU7QUFDSnBCLElBQUFBLEtBQUssRUFBRSxFQURIO0FBRUpnRSxJQUFBQSxXQUFXLEVBQUUsRUFGVDtBQUdKK0ksSUFBQUEsT0FBTyxFQUFFO0FBSEw7QUFEWSxDQUFwQjtBQVFBLGlFQUFlRCxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUVPLE1BQU1GLFdBQVcsR0FBR25NLDJFQUFIO0FBQUE7QUFBQTtBQUFBLGdRQUNYLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzJFLEVBRGxCLEVBQ3dCLENBQUM7QUFBRTVJLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNpRCxDQURyRCxFQU1GLENBQUM7QUFBRWxILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYWtCLEtBTjFCLEVBUXBCLENBQUM7QUFBRW5CLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNlLE1BUkosRUFhcEIsQ0FBQztBQUFFaEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0FiSixFQWNULENBQUM7QUFBRWxELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNDLEVBZHBCLEVBYzBCLENBQUM7QUFBRWxFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNrRCxDQWR2RCxFQWtCTCxDQUFDO0FBQUVuSCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxRQUFOLENBQWUwRCxNQWxCekIsQ0FBakI7QUF3QkEsTUFBTXlDLGNBQWMsR0FBR3pHLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBJQVV2QixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBVkQsRUFjdkIsQ0FBQztBQUFFbEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3FKLFdBZEQsQ0FBcEI7QUFtQkEsTUFBTUosYUFBYSxHQUFHcE0sdUVBQUg7QUFBQTtBQUFBO0FBQUEsc0ZBSXRCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFKRixDQUFuQjtBQVVBLE1BQU05RSxZQUFZLEdBQUdZLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDhHQU1yQixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNlLE1BTkgsRUFVckIsQ0FBQztBQUFFaEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0FWSCxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTXFKLE1BQU0sR0FBRyxDQUFDO0FBQ2Q5TCxFQUFBQSxJQUFJLEVBQUU7QUFDSitMLElBQUFBLGFBQWEsRUFBRTtBQUFFbk4sTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULEtBRFg7QUFFSm1OLElBQUFBLGdCQUZJO0FBR0pqQixJQUFBQTtBQUhJO0FBRFEsQ0FBRCxLQU1UO0FBQ0osc0JBQ0U7QUFBQSw0QkFDRSwrREFBQyxxRUFBRDtBQUFZLFdBQUssRUFBRWxNLEtBQW5CO0FBQTBCLGNBQVEsTUFBbEM7QUFBQSw2QkFDRSwrREFBQyxxRUFBRDtBQUFjLGFBQUssTUFBbkI7QUFBQSwrQkFDRTtBQUFBLG9CQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FLCtEQUFDLHVFQUFEO0FBQWEsV0FBSyxNQUFsQjtBQUFtQixZQUFNLE1BQXpCO0FBQUEsZ0JBQ0dvTixnQkFBZ0IsQ0FBQ2xILEdBQWpCLENBQXFCLENBQUM7QUFBRWxHLFFBQUFBLEtBQUY7QUFBUzJLLFFBQUFBLE9BQVQ7QUFBa0IwQyxRQUFBQSxhQUFsQjtBQUFpQ2xILFFBQUFBO0FBQWpDLE9BQUQsa0JBQ3BCLCtEQUFDLHVFQUFEO0FBQUEsZ0NBQ0UsK0RBQUMscUVBQUQ7QUFBYyxlQUFLLE1BQW5CO0FBQUEsaUNBQ0UsK0RBQUMsd0RBQUQ7QUFBQSxzQkFBY25HO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSwrREFBQyxpRUFBRDtBQUFBLG9CQUFXMks7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0UsK0RBQUMsK0VBQUQ7QUFBQSxvQkFDRzBDLGFBQWEsQ0FBQ25ILEdBQWQsQ0FBa0IsQ0FBQztBQUFFbEcsWUFBQUEsS0FBRjtBQUFTZ0UsWUFBQUEsV0FBVDtBQUFzQkMsWUFBQUEsUUFBdEI7QUFBZ0N4QyxZQUFBQSxJQUFJLEVBQUU7QUFBRTFCLGNBQUFBO0FBQUYsYUFBdEM7QUFBZ0RvRyxZQUFBQTtBQUFoRCxXQUFELGtCQUNqQiwrREFBQyxpRUFBRDtBQUFBLG9DQUNFLCtEQUFDLHFFQUFEO0FBQUEscUNBQ0U7QUFBQSwwQkFBS25HO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRSwrREFBQyx1REFBRDtBQUFBLHdCQUFhZ0U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0UsK0RBQUMsK0RBQUQ7QUFBVyxzQkFBUSxNQUFuQjtBQUFvQixrQkFBSSxFQUFFakUsSUFBMUI7QUFBZ0MsbUJBQUssRUFBRWtFLFFBQXZDO0FBQWlELG1CQUFLLEVBQUVrSTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUEsYUFBZWhHLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQSxTQUFrQkEsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxrQkFERjtBQThCRCxDQXJDRDs7QUF1Q0ErRyxNQUFNLENBQUMvTSxTQUFQLEdBQW1CO0FBQ2pCaUIsRUFBQUEsSUFBSSxFQUFFM0IsdURBQUEsQ0FBZ0I7QUFDcEIwTixJQUFBQSxhQUFhLEVBQUUxTix1REFBQSxDQUFnQjtBQUM3Qk8sTUFBQUEsS0FBSyxFQUFFUCwwREFEc0I7QUFFN0JRLE1BQUFBLEtBQUssRUFBRVIsMERBQWdCYTtBQUZNLEtBQWhCLENBREs7QUFLcEI4TSxJQUFBQSxnQkFBZ0IsRUFBRTNOLHlEQUFBLENBQWtCQSwwREFBbEIsQ0FMRTtBQU1wQjBNLElBQUFBLFVBQVUsRUFBRTFNLDBEQUFnQmE7QUFOUixHQUFoQixFQU9IRDtBQVJjLENBQW5CO0FBV0E2TSxNQUFNLENBQUMxTSxZQUFQLEdBQXNCO0FBQ3BCWSxFQUFBQSxJQUFJLEVBQUU7QUFDSitMLElBQUFBLGFBQWEsRUFBRTtBQUNibk4sTUFBQUEsS0FBSyxFQUFFO0FBRE0sS0FEWDtBQUlKb04sSUFBQUEsZ0JBQWdCLEVBQUU7QUFKZDtBQURjLENBQXRCO0FBU0EsaUVBQWVGLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUVPLE1BQU1wRCxXQUFXLEdBQUdySixzRUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFDVCxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNJLFFBQU4sQ0FBZWdLLFlBRHJCLENBQWpCO0FBSUEsTUFBTXRDLFVBQVUsR0FBR2hJLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNDQUVSLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ksUUFBTixDQUFldU0sU0FGdEIsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQztBQUFFbk0sRUFBQUEsSUFBSSxFQUFFO0FBQUVwQixJQUFBQSxLQUFGO0FBQVMySyxJQUFBQSxPQUFUO0FBQWtCNkMsSUFBQUE7QUFBbEI7QUFBUixDQUFELEtBQXFEO0FBQ25FLHNCQUNFLDhEQUFDLHVFQUFEO0FBQUEsMkJBQ0UsOERBQUMsaUZBQUQ7QUFBQSw4QkFDRSw4REFBQyxxRUFBRDtBQUFjLGFBQUssTUFBbkI7QUFBQSwrQkFDRTtBQUFBLG9CQUFLeE47QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLDhEQUFDLGlFQUFEO0FBQUEsa0JBQVcySztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSw4REFBQywrRUFBRDtBQUFBLGtCQUNHNkMsaUJBQWlCLENBQUN0SCxHQUFsQixDQUFzQixDQUFDdUgsZ0JBQUQsRUFBbUJ0SCxFQUFuQixrQkFDckIsOERBQUMsaUZBQUQ7QUFBMkIsY0FBSSxFQUFFc0g7QUFBakMsV0FBdUJ0SCxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQWhCRDs7QUFrQkFvSCxPQUFPLENBQUNwTixTQUFSLEdBQW9CO0FBQ2xCaUIsRUFBQUEsSUFBSSxFQUFFM0IsdURBQUEsQ0FBZ0I7QUFDcEJPLElBQUFBLEtBQUssRUFBRVAsMERBRGE7QUFFcEJrTCxJQUFBQSxPQUFPLEVBQUVsTCwwREFGVztBQUdwQitOLElBQUFBLGlCQUFpQixFQUFFL04seURBQUEsQ0FBa0JBLDBEQUFsQjtBQUhDLEdBQWhCLEVBSUhZO0FBTGUsQ0FBcEI7QUFRQWtOLE9BQU8sQ0FBQy9NLFlBQVIsR0FBdUI7QUFDckJZLEVBQUFBLElBQUksRUFBRTtBQUNKcEIsSUFBQUEsS0FBSyxFQUFFLEVBREg7QUFFSjJLLElBQUFBLE9BQU8sRUFBRSxFQUZMO0FBR0o2QyxJQUFBQSxpQkFBaUIsRUFBRTtBQUhmO0FBRGUsQ0FBdkI7QUFRQSxpRUFBZUQsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRyxXQUFXLEdBQUcsQ0FBQztBQUFFdE0sRUFBQUEsSUFBSSxFQUFFO0FBQUVwQixJQUFBQSxLQUFGO0FBQVMySyxJQUFBQTtBQUFUO0FBQVIsQ0FBRCxLQUFrQztBQUNwRCxzQkFDRSw4REFBQyx1RUFBRDtBQUFBLDJCQUNFLDhEQUFDLGlGQUFEO0FBQUEsOEJBQ0UsOERBQUMscUVBQUQ7QUFBYyxhQUFLLE1BQW5CO0FBQUEsK0JBQ0U7QUFBQSxvQkFBSzNLO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyxpRUFBRDtBQUFBLGtCQUFXMks7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBWEQ7O0FBYUErQyxXQUFXLENBQUN2TixTQUFaLEdBQXdCO0FBQ3RCaUIsRUFBQUEsSUFBSSxFQUFFM0IsdURBQUEsQ0FBZ0I7QUFDcEJPLElBQUFBLEtBQUssRUFBRVAsMERBRGE7QUFFcEJrTCxJQUFBQSxPQUFPLEVBQUVsTCwwREFBZ0JXO0FBRkwsR0FBaEIsRUFHSEM7QUFKbUIsQ0FBeEI7QUFPQXFOLFdBQVcsQ0FBQ2xOLFlBQVosR0FBMkI7QUFDekJZLEVBQUFBLElBQUksRUFBRTtBQUNKcEIsSUFBQUEsS0FBSyxFQUFFLEVBREg7QUFFSjJLLElBQUFBLE9BQU8sRUFBRTtBQUZMO0FBRG1CLENBQTNCO0FBT0EsaUVBQWUrQyxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUNBLE1BQU1DLGlCQUFpQixHQUFHO0FBQ3hCLG1CQUFpQmIsd0RBRE87QUFFeEIsK0JBQTZCUiw4RUFGTDtBQUd4QiwyQkFBeUJMLHNFQUhEO0FBSXhCLDJCQUF5QlUsc0VBSkQ7QUFLeEIsMkJBQXlCYixzRUFMRDtBQU14QixzQkFBb0JSLDhEQU5JO0FBT3hCLDBCQUF3Qm9DLHNFQVBBO0FBUXhCLHNCQUFvQkgsOERBUkk7QUFTeEIscUJBQW1CTCw0REFUSztBQVV4QiwyQkFBeUI1Qyx1RUFBV0E7QUFWWixDQUExQixFQWFBOztBQUNBLE1BQU1zRCxPQUFPLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBcUI7QUFDbkMsUUFBTUMsZ0JBQWdCLEdBQUdILGlCQUFpQixDQUFDRSxXQUFXLENBQUNFLFdBQWIsQ0FBMUM7O0FBRUEsTUFBSSxDQUFDRCxnQkFBTCxFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFBTywrREFBQyxnQkFBRDtBQUFrQixRQUFJLEVBQUVEO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBUkQsRUFVQTs7O0FBQ0EsTUFBTUcsUUFBUSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQ2pDLHNCQUNFO0FBQUEsY0FDR0EsUUFBUSxDQUFDL0gsR0FBVCxDQUFjOEUsT0FBRCxpQkFDWiwrREFBQyxPQUFEO0FBQVMsaUJBQVcsRUFBRUE7QUFBdEIsT0FBcUMsR0FBRUEsT0FBTyxDQUFDK0MsV0FBWSxHQUFFL0MsT0FBTyxDQUFDN0UsRUFBRyxFQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREgsbUJBREY7QUFPRCxDQVJEOztBQVVBeUgsT0FBTyxDQUFDek4sU0FBUixHQUFvQjtBQUNsQjBOLEVBQUFBLFdBQVcsRUFBRXBPLHFFQUEyQlk7QUFEdEIsQ0FBcEI7QUFJQTJOLFFBQVEsQ0FBQzdOLFNBQVQsR0FBcUI7QUFDbkI4TixFQUFBQSxRQUFRLEVBQUV4Tyx5REFBQSxDQUFrQkEsMERBQWxCLEVBQW9DWTtBQUQzQixDQUFyQjtBQUlBdU4sT0FBTyxDQUFDcE4sWUFBUixHQUF1QjtBQUNyQnFOLEVBQUFBLFdBQVcsRUFBRTtBQUNYRSxJQUFBQSxXQUFXLEVBQUU7QUFERjtBQURRLENBQXZCO0FBTUFDLFFBQVEsQ0FBQ3hOLFlBQVQsR0FBd0I7QUFDdEJ5TixFQUFBQSxRQUFRLEVBQUU7QUFEWSxDQUF4QjtBQUlBLGlFQUFlRCxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1HLEdBQUcsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFhO0FBQ3ZCLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQTtBQUFiLE1BQWlDRixHQUF2QyxDQUR1QixDQUd2Qjs7QUFDQSxNQUFJLENBQUNBLEdBQUwsRUFBVSxPQUFPLElBQVA7QUFFVixzQkFBTyw4REFBQyw2Q0FBRDtBQUFTLFNBQUssRUFBRUMsU0FBaEI7QUFBMkIsZUFBVyxFQUFFQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQVBEOztBQVNBSCxHQUFHLENBQUNoTyxTQUFKLEdBQWdCO0FBQ2RpTyxFQUFBQSxHQUFHLEVBQUUzTyx1REFBQSxDQUFnQjtBQUNuQjRPLElBQUFBLFNBQVMsRUFBRTVPLDBEQURRO0FBRW5CNk8sSUFBQUEsZUFBZSxFQUFFN08sMERBRkU7QUFHbkI4TyxJQUFBQSxVQUFVLEVBQUU5TywwREFBZ0JhO0FBSFQsR0FBaEI7QUFEUyxDQUFoQjtBQVFBLGlFQUFlNk4sR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNTSxNQUFNLEdBQUcsQ0FBQztBQUFFbEwsRUFBQUEsUUFBRjtBQUFZbUwsRUFBQUEsVUFBVSxFQUFFO0FBQUU5RixJQUFBQSxJQUFGO0FBQVFPLElBQUFBO0FBQVIsR0FBeEI7QUFBNEM1QixFQUFBQTtBQUE1QyxDQUFELEtBQTBEO0FBQ3ZFLFFBQU07QUFBRXVCLElBQUFBO0FBQUYsTUFBZ0JWLGlEQUFVLENBQUNDLDZEQUFELENBQWhDO0FBRUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBYyxhQUFTLEVBQUVTLFNBQXpCO0FBQUEsNEJBQ0UsOERBQUMsNkRBQUQ7QUFBUSxVQUFJLEVBQUVGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHRSxTQUFTLGlCQUFJLDhEQUFDLHFFQUFEO0FBQVksY0FBUSxFQUFFSztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZoQixFQUdHNUYsUUFISCxlQUlFLDhEQUFDLDZEQUFEO0FBQVEsWUFBTSxFQUFFZ0U7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBWEQ7O0FBYUFrSCxNQUFNLENBQUN0TyxTQUFQLEdBQW1CO0FBQ2pCb0QsRUFBQUEsUUFBUSxFQUFFSixtRUFETztBQUVqQnVMLEVBQUFBLFVBQVUsRUFBRWpQLDBEQUFnQmE7QUFGWCxDQUFuQjtBQUtBLGlFQUFlbU8sTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFTyxNQUFNRCxZQUFZLEdBQUcvTix1RUFBSDtBQUFBO0FBQUE7QUFBQSx5Q0FDVCxDQUFDO0FBQUVxSSxFQUFBQTtBQUFGLENBQUQsS0FBb0JBLFNBQVMsR0FBRyxPQUFILEdBQWEsYUFEakMsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNYSxVQUFVLEdBQUcsQ0FBQztBQUFFcEcsRUFBQUEsUUFBRjtBQUFZdEQsRUFBQUEsS0FBWjtBQUFtQjJPLEVBQUFBO0FBQW5CLENBQUQsS0FBbUM7QUFDcEQsc0JBQ0UsOERBQUMsaUVBQUQ7QUFBQSwyQkFDRSw4REFBQyw4REFBRDtBQUFnQixjQUFRLEVBQUVBLFFBQTFCO0FBQUEsaUJBQ0dyTCxRQURILGVBRUUsOERBQUMsNERBQUQ7QUFBYyxnQkFBUSxFQUFFcUwsUUFBeEI7QUFBQSwrQkFDRSw4REFBQyx1REFBRDtBQUFPLGVBQUssRUFBRTNPO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FYRDs7QUFhQTBKLFVBQVUsQ0FBQ3hKLFNBQVgsR0FBdUI7QUFDckJvRCxFQUFBQSxRQUFRLEVBQUVKLG1FQURXO0FBRXJCbEQsRUFBQUEsS0FBSyxFQUFFUiwwREFGYztBQUdyQm1QLEVBQUFBLFFBQVEsRUFBRW5QLHdEQUFjYztBQUhILENBQXZCO0FBTUEsaUVBQWVvSixVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRU8sTUFBTWdGLGlCQUFpQixHQUFHbE8sMEVBQUg7QUFBQTtBQUFBO0FBQUEsc0pBQ2pCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2lLLEdBRFosRUFDbUIsQ0FBQztBQUFFbE8sRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2lELENBRGhELEVBR1IsQ0FBQztBQUFFbEgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxTQUhwQixFQUluQixDQUFDO0FBQUVILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYWtCLEtBSlQsRUFTMUIsQ0FBQztBQUFFbkIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0FURSxFQVVmLENBQUM7QUFBRWxELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNDLEVBVmQsRUFVb0IsQ0FBQztBQUFFbEUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2tELENBVmpELENBQXZCO0FBY0EsTUFBTVosY0FBYyxHQUFHekcsdUVBQUg7QUFBQTtBQUFBO0FBQUEsMlFBT1YsQ0FBQztBQUFFbU8sRUFBQUE7QUFBRixDQUFELEtBQW1CQSxRQUFRLEdBQUksYUFBSixHQUFvQixPQVByQyxFQVd2QixDQUFDO0FBQUVqTyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTbUksT0FYRCxFQXFCdkIsQ0FBQztBQUFFcEwsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BckJELEVBc0JkLENBQUM7QUFBRXlHLEVBQUFBO0FBQUYsQ0FBRCxLQUFtQkEsUUFBUSxHQUFJLE1BQUosR0FBYSxPQXRCMUIsRUF5QlIsQ0FBQztBQUFFQSxFQUFBQTtBQUFGLENBQUQsS0FBbUJBLFFBQVEsR0FBSSxhQUFKLEdBQW9CLE9BekJ2QyxFQTZCdkIsQ0FBQztBQUFFak8sRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU0MsV0E3QkQsQ0FBcEI7QUFrQ0EsTUFBTWhFLFlBQVksR0FBR1ksdUVBQUg7QUFBQTtBQUFBO0FBQUEsK0pBQ2QsQ0FBQztBQUFFbU8sRUFBQUE7QUFBRixDQUFELEtBQW1CQSxRQUFRLEdBQUksT0FBSixHQUFjLE9BRDNCLEVBRVYsQ0FBQztBQUFFQSxFQUFBQTtBQUFGLENBQUQsS0FBbUJBLFFBQVEsR0FBSSxPQUFKLEdBQWMsT0FGL0IsRUFPckIsQ0FBQztBQUFFak8sRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU21JLE9BUEgsRUFTTixDQUFDO0FBQUVwTCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjMkUsRUFUdkIsRUFVWCxDQUFDO0FBQUVxRixFQUFBQTtBQUFGLENBQUQsS0FBbUJBLFFBQVEsR0FBRyxRQUFILEdBQWMsQ0FWOUIsRUFhckIsQ0FBQztBQUFFak8sRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BYkgsRUFjTixDQUFDO0FBQUV4SCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUUsT0FBTixDQUFjQyxFQWR2QixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERQO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNZ0YsV0FBVyxHQUFHLFFBQTRCO0FBQUEsTUFBM0I7QUFBRXRHLElBQUFBO0FBQUYsR0FBMkI7QUFBQSxNQUFad0wsS0FBWTs7QUFDOUMsc0JBQU8sOERBQUMsa0VBQUQsa0NBQXdCQSxLQUF4QjtBQUFBLGNBQWdDeEw7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJQXNHLFdBQVcsQ0FBQzFKLFNBQVosR0FBd0I7QUFDdEJvRCxFQUFBQSxRQUFRLEVBQUVKLG1FQURZO0FBRXRCNEwsRUFBQUEsS0FBSyxFQUFFdFAsd0RBQWNjO0FBRkMsQ0FBeEI7QUFLQSxpRUFBZXNKLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFTyxNQUFNaUYsa0JBQWtCLEdBQUdyTywyRUFBSDtBQUFBO0FBQUE7QUFBQSxrUkFDWixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWMyRSxFQURqQixFQUVULENBQUM7QUFBRTVJLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYWtCLEtBRm5CLEVBR1osQ0FBQztBQUFFbkIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWUMsWUFIZixFQUlmLENBQUM7QUFBRWxCLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpQixLQUFOLENBQVl3QyxTQUpaLEVBS2xCLENBQUM7QUFBRXpELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUN1RCxVQUFOLENBQWlCOEssa0JBTGQsRUFNaEIsQ0FBQztBQUFFck8sRUFBQUEsS0FBRjtBQUFTc08sRUFBQUE7QUFBVCxDQUFELEtBQXNCQSxJQUFJLEdBQUcsYUFBSCxHQUFtQnRPLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUIrRyxnQkFOOUMsRUFPaEIsQ0FBQztBQUFFZ0UsRUFBQUE7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxRQUFILEdBQWMsQ0FQakIsRUFhM0IsQ0FBQztBQUFFdE8sRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU21JLE9BYkcsRUFjZCxDQUFDO0FBQUVrRCxFQUFBQTtBQUFGLENBQUQsS0FBZUEsSUFBSSxHQUFHLE1BQUgsR0FBWSxDQWRqQixFQWlCM0IsQ0FBQztBQUFFdE8sRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BakJHLEVBbUJWLENBQUM7QUFBRXhILEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWM2RSxFQW5CbkIsRUFzQjNCLENBQUM7QUFBRTlJLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNDLFdBdEJHLEVBd0JWLENBQUM7QUFBRWxELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRSxPQUFOLENBQWNzSyxHQXhCbkIsRUF5QmhCLENBQUM7QUFBRXZPLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUN1RCxVQUFOLENBQWlCRyxpQkF6QmhCLENBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTStGLGVBQWUsR0FBRyxDQUFDO0FBQUU3RyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDeEMsc0JBQU8sOERBQUMsMEVBQUQ7QUFBQSxjQUF3QkE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJQTZHLGVBQWUsQ0FBQ2pLLFNBQWhCLEdBQTRCO0FBQzFCb0QsRUFBQUEsUUFBUSxFQUFFSixtRUFBYUE7QUFERyxDQUE1QjtBQUlBLGlFQUFlaUgsZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVPLE1BQU0rRSxxQkFBcUIsR0FBRzFPLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGtIQUs5QixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNlLE1BTE0sQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNVyxRQUFRLEdBQUcsUUFBNEI7QUFBQSxNQUEzQjtBQUFFL0IsSUFBQUE7QUFBRixHQUEyQjtBQUFBLE1BQVp3TCxLQUFZOztBQUMzQyxzQkFBTyw4REFBQyw2REFBRCxrQ0FBcUJBLEtBQXJCO0FBQUEsY0FBNkJ4TDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBK0IsUUFBUSxDQUFDbkYsU0FBVCxHQUFxQjtBQUNuQm9ELEVBQUFBLFFBQVEsRUFBRUosbUVBRFM7QUFFbkI0TCxFQUFBQSxLQUFLLEVBQUV0UCx3REFBY2M7QUFGRixDQUFyQjtBQUtBLGlFQUFlK0UsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUVPLE1BQU04RSxlQUFlLEdBQUczSix1RUFBSDtBQUFBO0FBQUE7QUFBQSwrTUFHWixDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUN1RCxVQUFOLENBQWlCNEMsaUJBSHBCLEVBSWYsQ0FBQztBQUFFbkcsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ3VELFVBQU4sQ0FBaUJDLFdBSmpCLEVBS04sQ0FBQztBQUFFeEQsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxTQUx0QixFQU1ULENBQUM7QUFBRUgsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWUMsWUFObEIsRUFPakIsQ0FBQztBQUFFb04sRUFBQUE7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxhQUFILEdBQW1CLE9BUHJCLEVBUWpCLENBQUM7QUFBRXRPLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYWtCLEtBUlgsRUFXeEIsQ0FBQztBQUFFbkIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU2UsTUFYQSxFQWV4QixDQUFDO0FBQUVoRSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDaUQsRUFBTixDQUFTQyxXQWZBLEVBaUJiLENBQUM7QUFBRWxELEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUN1RCxVQUFOLENBQWlCRyxpQkFqQm5CLENBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTXVGLFdBQVcsR0FBRyxRQUE0QjtBQUFBLE1BQTNCO0FBQUVyRyxJQUFBQTtBQUFGLEdBQTJCO0FBQUEsTUFBWndMLEtBQVk7O0FBQzlDLHNCQUFPLDhEQUFDLGtFQUFELGtDQUF1QkEsS0FBdkI7QUFBQSxjQUErQnhMO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUFxRyxXQUFXLENBQUN6SixTQUFaLEdBQXdCO0FBQ3RCb0QsRUFBQUEsUUFBUSxFQUFFSixtRUFEWTtBQUV0QjRMLEVBQUFBLEtBQUssRUFBRXRQLHdEQUFjYztBQUZDLENBQXhCO0FBS0EsaUVBQWVxSixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBRU8sTUFBTXdGLGlCQUFpQixHQUFHM08sdUVBQUg7QUFBQTtBQUFBO0FBQUEsK0tBQ2pCLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzJFLEVBRFosRUFDa0IsQ0FBQztBQUFFNUksRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2lELENBRC9DLEVBRWQsQ0FBQztBQUFFbUIsRUFBQUE7QUFBRixDQUFELEtBQWdCQSxLQUFLLEdBQUcsT0FBSCxHQUFhLE1BRnBCLEVBTVYsQ0FBQztBQUFFcUcsRUFBQUE7QUFBRixDQUFELEtBQWlCQSxNQUFNLEdBQUcsUUFBSCxHQUFjLEtBTjNCLEVBUTFCLENBQUM7QUFBRTFPLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNpRCxFQUFOLENBQVNtSSxPQVJFLEVBU2YsQ0FBQztBQUFFcEwsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ2lFLE9BQU4sQ0FBYzJFLEVBVGQsRUFTb0IsQ0FBQztBQUFFNUksRUFBQUEsS0FBRjtBQUFTc08sRUFBQUE7QUFBVCxDQUFELEtBQXNCQSxJQUFJLEdBQUd0TyxLQUFLLENBQUNpRSxPQUFOLENBQWNtRCxFQUFqQixHQUFzQnBILEtBQUssQ0FBQ2lFLE9BQU4sQ0FBY2lELENBVGxGLEVBWTFCLENBQUM7QUFBRWxILEVBQUFBLEtBQUY7QUFBU3NPLEVBQUFBO0FBQVQsQ0FBRCxLQUFzQkEsSUFBSSxHQUFHdE8sS0FBSyxDQUFDaUQsRUFBTixDQUFTNkksV0FBWixHQUEwQjlMLEtBQUssQ0FBQ2lELEVBQU4sQ0FBU3VFLE1BWm5DLENBQXZCOzs7Ozs7Ozs7OztBQ0ZNOztBQUNibUgsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQkcsTUFBbEI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLEtBQUssR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOENBQUQsQ0FBUixDQUFsQzs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLG1CQUFPLENBQUMsMERBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsWUFBWSxHQUFHSCxtQkFBTyxDQUFDLHNEQUFELENBQTFCOztBQUNBLElBQUlJLGdCQUFnQixHQUFHSixtQkFBTyxDQUFDLCtFQUFELENBQTlCOztBQUNBLFNBQVNLLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ1osS0FBbkMsRUFBMEM7QUFDdEMsTUFBSVksR0FBRyxJQUFJRCxHQUFYLEVBQWdCO0FBQ1pkLElBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQmEsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzVCWixNQUFBQSxLQUFLLEVBQUVBLEtBRHFCO0FBRTVCYSxNQUFBQSxVQUFVLEVBQUUsSUFGZ0I7QUFHNUJDLE1BQUFBLFlBQVksRUFBRSxJQUhjO0FBSTVCQyxNQUFBQSxRQUFRLEVBQUU7QUFKa0IsS0FBaEM7QUFNSCxHQVBELE1BT087QUFDSEosSUFBQUEsR0FBRyxDQUFDQyxHQUFELENBQUgsR0FBV1osS0FBWDtBQUNIOztBQUNELFNBQU9XLEdBQVA7QUFDSDs7QUFDRCxTQUFTUCxzQkFBVCxDQUFnQ08sR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNLLFVBQVgsR0FBd0JMLEdBQXhCLEdBQThCO0FBQ2pDVixJQUFBQSxPQUFPLEVBQUVVO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBU00sYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFDM0IsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBN0IsRUFBcUNGLENBQUMsRUFBdEMsRUFBeUM7QUFDckMsUUFBSUcsTUFBTSxHQUFHRixTQUFTLENBQUNELENBQUQsQ0FBVCxJQUFnQixJQUFoQixHQUF1QkMsU0FBUyxDQUFDRCxDQUFELENBQWhDLEdBQXNDLEVBQW5EO0FBRUEsUUFBSUksT0FBTyxHQUFHMUIsTUFBTSxDQUFDMkIsSUFBUCxDQUFZRixNQUFaLENBQWQ7O0FBQ0EsUUFBSSxPQUFPekIsTUFBTSxDQUFDNEIscUJBQWQsS0FBd0MsVUFBNUMsRUFBd0Q7QUFDcERGLE1BQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDRyxNQUFSLENBQWU3QixNQUFNLENBQUM0QixxQkFBUCxDQUE2QkgsTUFBN0IsRUFBcUNLLE1BQXJDLENBQTRDLFVBQVNDLEdBQVQsRUFBYztBQUMvRSxlQUFPL0IsTUFBTSxDQUFDZ0Msd0JBQVAsQ0FBZ0NQLE1BQWhDLEVBQXdDTSxHQUF4QyxFQUE2Q2YsVUFBcEQ7QUFDSCxPQUZ3QixDQUFmLENBQVY7QUFHSDs7QUFDRFUsSUFBQUEsT0FBTyxDQUFDTyxPQUFSLENBQWdCLFVBQVNsQixHQUFULEVBQWM7QUFDMUJGLE1BQUFBLGVBQWUsQ0FBQ1EsTUFBRCxFQUFTTixHQUFULEVBQWNVLE1BQU0sQ0FBQ1YsR0FBRCxDQUFwQixDQUFmO0FBQ0gsS0FGRDtBQUdIOztBQUNELFNBQU9NLE1BQVA7QUFDSDs7QUFDRCxTQUFTYSx3QkFBVCxDQUFrQ1QsTUFBbEMsRUFBMENVLFFBQTFDLEVBQW9EO0FBQ2hELE1BQUlWLE1BQU0sSUFBSSxJQUFkLEVBQW9CLE9BQU8sRUFBUDs7QUFFcEIsTUFBSUosTUFBTSxHQUFHZSw2QkFBNkIsQ0FBQ1gsTUFBRCxFQUFTVSxRQUFULENBQTFDOztBQUNBLE1BQUlwQixHQUFKLEVBQVNPLENBQVQ7O0FBQ0EsTUFBSXRCLE1BQU0sQ0FBQzRCLHFCQUFYLEVBQWtDO0FBQzlCLFFBQUlTLGdCQUFnQixHQUFHckMsTUFBTSxDQUFDNEIscUJBQVAsQ0FBNkJILE1BQTdCLENBQXZCOztBQUNBLFNBQUlILENBQUMsR0FBRyxDQUFSLEVBQVdBLENBQUMsR0FBR2UsZ0JBQWdCLENBQUNiLE1BQWhDLEVBQXdDRixDQUFDLEVBQXpDLEVBQTRDO0FBQ3hDUCxNQUFBQSxHQUFHLEdBQUdzQixnQkFBZ0IsQ0FBQ2YsQ0FBRCxDQUF0QjtBQUNBLFVBQUlhLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQnZCLEdBQWpCLEtBQXlCLENBQTdCLEVBQWdDO0FBQ2hDLFVBQUksQ0FBQ2YsTUFBTSxDQUFDdUMsU0FBUCxDQUFpQkMsb0JBQWpCLENBQXNDQyxJQUF0QyxDQUEyQ2hCLE1BQTNDLEVBQW1EVixHQUFuRCxDQUFMLEVBQThEO0FBQzlETSxNQUFBQSxNQUFNLENBQUNOLEdBQUQsQ0FBTixHQUFjVSxNQUFNLENBQUNWLEdBQUQsQ0FBcEI7QUFDSDtBQUNKOztBQUNELFNBQU9NLE1BQVA7QUFDSDs7QUFDRCxTQUFTZSw2QkFBVCxDQUF1Q1gsTUFBdkMsRUFBK0NVLFFBQS9DLEVBQXlEO0FBQ3JELE1BQUlWLE1BQU0sSUFBSSxJQUFkLEVBQW9CLE9BQU8sRUFBUDtBQUVwQixNQUFJSixNQUFNLEdBQUcsRUFBYjtBQUVBLE1BQUlxQixVQUFVLEdBQUcxQyxNQUFNLENBQUMyQixJQUFQLENBQVlGLE1BQVosQ0FBakI7QUFDQSxNQUFJVixHQUFKLEVBQVNPLENBQVQ7O0FBQ0EsT0FBSUEsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHb0IsVUFBVSxDQUFDbEIsTUFBMUIsRUFBa0NGLENBQUMsRUFBbkMsRUFBc0M7QUFDbENQLElBQUFBLEdBQUcsR0FBRzJCLFVBQVUsQ0FBQ3BCLENBQUQsQ0FBaEI7QUFDQSxRQUFJYSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJ2QixHQUFqQixLQUF5QixDQUE3QixFQUFnQztBQUNoQ00sSUFBQUEsTUFBTSxDQUFDTixHQUFELENBQU4sR0FBY1UsTUFBTSxDQUFDVixHQUFELENBQXBCO0FBQ0g7O0FBQ0QsU0FBT00sTUFBUDtBQUNIOztBQUNELE1BQU1zQixlQUFlLEdBQUcsSUFBSUMsR0FBSixFQUF4Qjs7QUFDQSxJQUFJLE1BQStCO0FBQy9CQyxFQUFBQSxNQUFNLENBQUNDLHFCQUFQLEdBQStCLElBQS9CO0FBQ0g7O0FBQ0QsTUFBTUMsb0JBQW9CLEdBQUcsQ0FDekIsTUFEeUIsRUFFekIsT0FGeUIsRUFHekJDLFNBSHlCLENBQTdCO0FBS0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLEdBQUosQ0FBUSxDQUNwQixDQUNJLFNBREosRUFFSUMsYUFGSixDQURvQixFQUtwQixDQUNJLE9BREosRUFFSUMsV0FGSixDQUxvQixFQVNwQixDQUNJLFlBREosRUFFSUMsZ0JBRkosQ0FUb0IsRUFhcEIsQ0FDSSxRQURKLEVBRUlDLFlBRkosQ0Fib0IsRUFpQnBCLENBQ0ksUUFESixFQUVJQyxZQUZKLENBakJvQixDQUFSLENBQWhCO0FBc0JBLE1BQU1DLG1CQUFtQixHQUFHLENBQ3hCLE1BRHdCLEVBRXhCLE9BRndCLEVBR3hCLFdBSHdCLEVBSXhCLFlBSndCLEVBS3hCUixTQUx3QixDQUE1Qjs7QUFPQSxTQUFTUyxlQUFULENBQXlCQyxHQUF6QixFQUE4QjtBQUMxQixTQUFPQSxHQUFHLENBQUN0RCxPQUFKLEtBQWdCNEMsU0FBdkI7QUFDSDs7QUFDRCxTQUFTVyxpQkFBVCxDQUEyQkQsR0FBM0IsRUFBZ0M7QUFDNUIsU0FBT0EsR0FBRyxDQUFDQSxHQUFKLEtBQVlWLFNBQW5CO0FBQ0g7O0FBQ0QsU0FBU1ksY0FBVCxDQUF3QkYsR0FBeEIsRUFBNkI7QUFDekIsU0FBTyxPQUFPQSxHQUFQLEtBQWUsUUFBZixLQUE0QkQsZUFBZSxDQUFDQyxHQUFELENBQWYsSUFBd0JDLGlCQUFpQixDQUFDRCxHQUFELENBQXJFLENBQVA7QUFDSDs7QUFDRCxNQUFNO0FBQUVHLEVBQUFBLFdBQVcsRUFBRUMsaUJBQWY7QUFBbUNDLEVBQUFBLFVBQVUsRUFBRUMsZ0JBQS9DO0FBQWtFMVEsRUFBQUEsTUFBTSxFQUFFMlEsWUFBMUU7QUFBeUZDLEVBQUFBLElBQUksRUFBRUMsVUFBL0Y7QUFBNEdDLEVBQUFBLE9BQU8sRUFBRUM7QUFBckgsSUFBMElDLHdNQUFBLElBQWlDM0QsWUFBWSxDQUFDOEQsa0JBQTlMLEVBQ0E7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQ2IsR0FBR1osaUJBRFUsRUFFYixHQUFHRSxnQkFGVSxDQUFqQjtBQUlBRixpQkFBaUIsQ0FBQ2EsSUFBbEIsQ0FBdUIsQ0FBQ3ZULENBQUQsRUFBSXdULENBQUosS0FBUXhULENBQUMsR0FBR3dULENBQW5DO0FBRUFGLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQUN2VCxDQUFELEVBQUl3VCxDQUFKLEtBQVF4VCxDQUFDLEdBQUd3VCxDQUExQjs7QUFFQSxTQUFTQyxTQUFULENBQW1CelIsS0FBbkIsRUFBMEIwUixNQUExQixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDckMsTUFBSUEsS0FBSyxLQUFLRCxNQUFNLEtBQUssTUFBWCxJQUFxQkEsTUFBTSxLQUFLLFlBQXJDLENBQVQsRUFBNkQ7QUFDekQ7QUFDQSxVQUFNRSxlQUFlLEdBQUcsb0JBQXhCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLEVBQXJCOztBQUNBLFNBQUksSUFBSUMsS0FBUixFQUFlQSxLQUFLLEdBQUdGLGVBQWUsQ0FBQ0csSUFBaEIsQ0FBcUJKLEtBQXJCLENBQXZCLEVBQW9ERyxLQUFwRCxFQUEwRDtBQUN0REQsTUFBQUEsWUFBWSxDQUFDRyxJQUFiLENBQWtCQyxRQUFRLENBQUNILEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBMUI7QUFDSDs7QUFDRCxRQUFJRCxZQUFZLENBQUN6RCxNQUFqQixFQUF5QjtBQUNyQixZQUFNOEQsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxHQUFHUCxZQUFaLElBQTRCLElBQWxEO0FBQ0EsYUFBTztBQUNIUSxRQUFBQSxNQUFNLEVBQUVmLFFBQVEsQ0FBQzVDLE1BQVQsQ0FBaUJ0SixDQUFELElBQUtBLENBQUMsSUFBSXNMLGlCQUFpQixDQUFDLENBQUQsQ0FBakIsR0FBdUJ3QixhQUFqRCxDQURMO0FBR0hJLFFBQUFBLElBQUksRUFBRTtBQUhILE9BQVA7QUFLSDs7QUFDRCxXQUFPO0FBQ0hELE1BQUFBLE1BQU0sRUFBRWYsUUFETDtBQUVIZ0IsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELE1BQUksT0FBT3RTLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIwUixNQUFNLEtBQUssTUFBeEMsSUFBa0RBLE1BQU0sS0FBSyxZQUFqRSxFQUErRTtBQUMzRSxXQUFPO0FBQ0hXLE1BQUFBLE1BQU0sRUFBRTNCLGlCQURMO0FBRUg0QixNQUFBQSxJQUFJLEVBQUU7QUFGSCxLQUFQO0FBSUg7O0FBQ0QsUUFBTUQsTUFBTSxHQUFHLENBQ1gsR0FBRyxJQUFJN0MsR0FBSixFQUFRO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNJeFAsS0FESixFQUVJQSxLQUFLLEdBQUc7QUFBRTtBQUZkLElBR0V3RCxHQUhGLENBR08rTyxDQUFELElBQUtqQixRQUFRLENBQUNrQixJQUFULENBQWV6TyxDQUFELElBQUtBLENBQUMsSUFBSXdPLENBQXhCLEtBQ0ZqQixRQUFRLENBQUNBLFFBQVEsQ0FBQ2xELE1BQVQsR0FBa0IsQ0FBbkIsQ0FKakIsQ0FSRyxDQURRLENBQWY7QUFnQkEsU0FBTztBQUNIaUUsSUFBQUEsTUFERztBQUVIQyxJQUFBQSxJQUFJLEVBQUU7QUFGSCxHQUFQO0FBSUg7O0FBQ0QsU0FBU0csZ0JBQVQsQ0FBMEI7QUFBRW5DLEVBQUFBLEdBQUY7QUFBUW9DLEVBQUFBLFdBQVI7QUFBc0JoQixFQUFBQSxNQUF0QjtBQUErQjFSLEVBQUFBLEtBQS9CO0FBQXVDMlMsRUFBQUEsT0FBdkM7QUFBaURoQixFQUFBQSxLQUFqRDtBQUF5RHpSLEVBQUFBO0FBQXpELENBQTFCLEVBQThGO0FBQzFGLE1BQUl3UyxXQUFKLEVBQWlCO0FBQ2IsV0FBTztBQUNIcEMsTUFBQUEsR0FERztBQUVIc0MsTUFBQUEsTUFBTSxFQUFFaEQsU0FGTDtBQUdIK0IsTUFBQUEsS0FBSyxFQUFFL0I7QUFISixLQUFQO0FBS0g7O0FBQ0QsUUFBTTtBQUFFeUMsSUFBQUEsTUFBRjtBQUFXQyxJQUFBQTtBQUFYLE1BQXFCYixTQUFTLENBQUN6UixLQUFELEVBQVEwUixNQUFSLEVBQWdCQyxLQUFoQixDQUFwQztBQUNBLFFBQU1rQixJQUFJLEdBQUdSLE1BQU0sQ0FBQ2pFLE1BQVAsR0FBZ0IsQ0FBN0I7QUFDQSxTQUFPO0FBQ0h1RCxJQUFBQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBRCxJQUFVVyxJQUFJLEtBQUssR0FBbkIsR0FBeUIsT0FBekIsR0FBbUNYLEtBRHZDO0FBRUhpQixJQUFBQSxNQUFNLEVBQUVQLE1BQU0sQ0FBQzdPLEdBQVAsQ0FBVyxDQUFDK08sQ0FBRCxFQUFJckUsQ0FBSixLQUFTLEdBQUVoTyxNQUFNLENBQUM7QUFDN0JvUSxNQUFBQSxHQUQ2QjtBQUU3QnFDLE1BQUFBLE9BRjZCO0FBRzdCM1MsTUFBQUEsS0FBSyxFQUFFdVM7QUFIc0IsS0FBRCxDQUk3QixJQUFHRCxJQUFJLEtBQUssR0FBVCxHQUFlQyxDQUFmLEdBQW1CckUsQ0FBQyxHQUFHLENBQUUsR0FBRW9FLElBQUssRUFKbEMsRUFLTlEsSUFMTSxDQUtELElBTEMsQ0FGTDtBQVFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBeEMsSUFBQUEsR0FBRyxFQUFFcFEsTUFBTSxDQUFDO0FBQ1JvUSxNQUFBQSxHQURRO0FBRVJxQyxNQUFBQSxPQUZRO0FBR1IzUyxNQUFBQSxLQUFLLEVBQUVxUyxNQUFNLENBQUNRLElBQUQ7QUFITCxLQUFEO0FBZFIsR0FBUDtBQW9CSDs7QUFDRCxTQUFTRSxNQUFULENBQWdCak0sQ0FBaEIsRUFBbUI7QUFDZixNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUN2QixXQUFPQSxDQUFQO0FBQ0g7O0FBQ0QsTUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDdkIsV0FBT21MLFFBQVEsQ0FBQ25MLENBQUQsRUFBSSxFQUFKLENBQWY7QUFDSDs7QUFDRCxTQUFPOEksU0FBUDtBQUNIOztBQUNELFNBQVNvRCxrQkFBVCxDQUE0QkMsV0FBNUIsRUFBeUM7QUFDckMsUUFBTUMsSUFBSSxHQUFHckQsT0FBTyxDQUFDc0QsR0FBUixDQUFZdEMsWUFBWixDQUFiOztBQUNBLE1BQUlxQyxJQUFKLEVBQVU7QUFDTixXQUFPQSxJQUFJLENBQUNsRixhQUFhLENBQUM7QUFDdEJvRixNQUFBQSxJQUFJLEVBQUVyQztBQURnQixLQUFELEVBRXRCa0MsV0FGc0IsQ0FBZCxDQUFYO0FBR0g7O0FBQ0QsUUFBTSxJQUFJSSxLQUFKLENBQVcseURBQXdEOUYsWUFBWSxDQUFDK0YsYUFBYixDQUEyQlIsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBc0MsZUFBY2pDLFlBQWEsRUFBcEksQ0FBTjtBQUNILEVBQ0Q7QUFDQTs7O0FBQ0EsU0FBUzBDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCbEQsR0FBNUIsRUFBaUNvQixNQUFqQyxFQUF5QytCLFdBQXpDLEVBQXNEQyxpQkFBdEQsRUFBeUU7QUFDckUsTUFBSSxDQUFDRixHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNELFFBQU1HLFVBQVUsR0FBRyxNQUFJO0FBQ25CLFFBQUksQ0FBQ0gsR0FBRyxDQUFDbEQsR0FBSixDQUFRc0QsVUFBUixDQUFtQixPQUFuQixDQUFMLEVBQWtDO0FBQzlCLFlBQU03UCxDQUFDLEdBQUcsWUFBWXlQLEdBQVosR0FBa0JBLEdBQUcsQ0FBQ0ssTUFBSixFQUFsQixHQUFpQ0MsT0FBTyxDQUFDQyxPQUFSLEVBQTNDO0FBQ0FoUSxNQUFBQSxDQUFDLENBQUNpUSxLQUFGLENBQVEsTUFBSSxDQUNYLENBREQsRUFDR0MsSUFESCxDQUNRLE1BQUk7QUFDUixZQUFJUixXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFDeEJELFVBQUFBLEdBQUcsQ0FBQ1UsS0FBSixDQUFVeEYsTUFBVixHQUFtQixNQUFuQjtBQUNBOEUsVUFBQUEsR0FBRyxDQUFDVSxLQUFKLENBQVVDLGNBQVYsR0FBMkIsTUFBM0I7QUFDQVgsVUFBQUEsR0FBRyxDQUFDVSxLQUFKLENBQVVFLGVBQVYsR0FBNEIsTUFBNUI7QUFDSDs7QUFDRDdFLFFBQUFBLGVBQWUsQ0FBQzhFLEdBQWhCLENBQW9CL0QsR0FBcEI7O0FBQ0EsWUFBSW9ELGlCQUFKLEVBQXVCO0FBQ25CLGdCQUFNO0FBQUVZLFlBQUFBLFlBQUY7QUFBaUJDLFlBQUFBO0FBQWpCLGNBQW9DZixHQUExQyxDQURtQixDQUVuQjtBQUNBOztBQUNBRSxVQUFBQSxpQkFBaUIsQ0FBQztBQUNkWSxZQUFBQSxZQURjO0FBRWRDLFlBQUFBO0FBRmMsV0FBRCxDQUFqQjtBQUlIOztBQUNELGtCQUEyQztBQUN2QyxjQUFJQyxHQUFKOztBQUNBLGNBQUksQ0FBQ0EsR0FBRyxHQUFHaEIsR0FBRyxDQUFDaUIsYUFBWCxNQUE4QixJQUE5QixJQUFzQ0QsR0FBRyxLQUFLLEtBQUssQ0FBbkQsR0FBdUQsS0FBSyxDQUE1RCxHQUFnRUEsR0FBRyxDQUFDQyxhQUF4RSxFQUF1RjtBQUNuRixrQkFBTUMsTUFBTSxHQUFHQyxnQkFBZ0IsQ0FBQ25CLEdBQUcsQ0FBQ2lCLGFBQUosQ0FBa0JBLGFBQW5CLENBQS9COztBQUNBLGdCQUFJL0MsTUFBTSxLQUFLLFlBQVgsSUFBMkJnRCxNQUFNLENBQUNFLE9BQVAsS0FBbUIsTUFBbEQsRUFBMEQ7QUFDdER4VSxjQUFBQSxPQUFPLENBQUN5VSxJQUFSLENBQWMsbUJBQWtCdkUsR0FBSSwwSEFBcEM7QUFDSCxhQUZELE1BRU8sSUFBSW9CLE1BQU0sS0FBSyxNQUFYLElBQXFCZ0QsTUFBTSxDQUFDSSxRQUFQLEtBQW9CLFVBQTdDLEVBQXlEO0FBQzVEMVUsY0FBQUEsT0FBTyxDQUFDeVUsSUFBUixDQUFjLG1CQUFrQnZFLEdBQUksMkRBQTBEb0UsTUFBTSxDQUFDSSxRQUFTLHVGQUE5RztBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BNUJEO0FBNkJIO0FBQ0osR0FqQ0Q7O0FBa0NBLE1BQUl0QixHQUFHLENBQUN1QixRQUFSLEVBQWtCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0FwQixJQUFBQSxVQUFVO0FBQ2IsR0FMRCxNQUtPO0FBQ0hILElBQUFBLEdBQUcsQ0FBQ3dCLE1BQUosR0FBYXJCLFVBQWI7QUFDSDtBQUNKOztBQUNELFNBQVMxRyxNQUFULENBQWdCZ0ksTUFBaEIsRUFBd0I7QUFDcEIsTUFBSTtBQUFFM0UsSUFBQUEsR0FBRjtBQUFRcUIsSUFBQUEsS0FBUjtBQUFnQmUsSUFBQUEsV0FBVyxHQUFFLEtBQTdCO0FBQXFDbFMsSUFBQUEsUUFBUSxHQUFFLEtBQS9DO0FBQXVEMFUsSUFBQUEsT0FBdkQ7QUFBaUVDLElBQUFBLFlBQVksR0FBRSxPQUEvRTtBQUF5RkMsSUFBQUEsU0FBekY7QUFBcUd6QyxJQUFBQSxPQUFyRztBQUErRzNTLElBQUFBLEtBQS9HO0FBQXVIQyxJQUFBQSxNQUF2SDtBQUFnSW9WLElBQUFBLFNBQWhJO0FBQTRJQyxJQUFBQSxjQUE1STtBQUE2SjVCLElBQUFBLGlCQUE3SjtBQUFpTHhULElBQUFBLE1BQU0sR0FBRThTLGtCQUF6TDtBQUE4TVMsSUFBQUEsV0FBVyxHQUFFLE9BQTNOO0FBQXFPOEIsSUFBQUE7QUFBck8sTUFBc1BOLE1BQTFQO0FBQUEsTUFBa1FPLEdBQUcsR0FBRzFHLHdCQUF3QixDQUFDbUcsTUFBRCxFQUFTLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsYUFBakIsRUFBZ0MsVUFBaEMsRUFBNEMsU0FBNUMsRUFBdUQsY0FBdkQsRUFBdUUsV0FBdkUsRUFBb0YsU0FBcEYsRUFBK0YsT0FBL0YsRUFBd0csUUFBeEcsRUFBa0gsV0FBbEgsRUFBK0gsZ0JBQS9ILEVBQWlKLG1CQUFqSixFQUFzSyxRQUF0SyxFQUFnTCxhQUFoTCxFQUErTCxhQUEvTCxDQUFULENBQWhTOztBQUNBLE1BQUlRLElBQUksR0FBR0QsR0FBWDtBQUNBLE1BQUk5RCxNQUFNLEdBQUdDLEtBQUssR0FBRyxZQUFILEdBQWtCLFdBQXBDOztBQUNBLE1BQUksWUFBWThELElBQWhCLEVBQXNCO0FBQ2xCO0FBQ0EsUUFBSUEsSUFBSSxDQUFDL0QsTUFBVCxFQUFpQkEsTUFBTSxHQUFHK0QsSUFBSSxDQUFDL0QsTUFBZCxDQUZDLENBR2xCOztBQUNBLFdBQU8rRCxJQUFJLENBQUMsUUFBRCxDQUFYO0FBQ0g7O0FBQ0QsTUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLE1BQUlsRixjQUFjLENBQUNGLEdBQUQsQ0FBbEIsRUFBeUI7QUFDckIsVUFBTXFGLGVBQWUsR0FBR3RGLGVBQWUsQ0FBQ0MsR0FBRCxDQUFmLEdBQXVCQSxHQUFHLENBQUN0RCxPQUEzQixHQUFxQ3NELEdBQTdEOztBQUNBLFFBQUksQ0FBQ3FGLGVBQWUsQ0FBQ3JGLEdBQXJCLEVBQTBCO0FBQ3RCLFlBQU0sSUFBSStDLEtBQUosQ0FBVyw4SUFBNkl1QyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsZUFBZixDQUFnQyxFQUF4TCxDQUFOO0FBQ0g7O0FBQ0RKLElBQUFBLFdBQVcsR0FBR0EsV0FBVyxJQUFJSSxlQUFlLENBQUNKLFdBQTdDO0FBQ0FHLElBQUFBLFNBQVMsR0FBR0MsZUFBZSxDQUFDckYsR0FBNUI7O0FBQ0EsUUFBSSxDQUFDb0IsTUFBRCxJQUFXQSxNQUFNLEtBQUssTUFBMUIsRUFBa0M7QUFDOUJ6UixNQUFBQSxNQUFNLEdBQUdBLE1BQU0sSUFBSTBWLGVBQWUsQ0FBQzFWLE1BQW5DO0FBQ0FELE1BQUFBLEtBQUssR0FBR0EsS0FBSyxJQUFJMlYsZUFBZSxDQUFDM1YsS0FBakM7O0FBQ0EsVUFBSSxDQUFDMlYsZUFBZSxDQUFDMVYsTUFBakIsSUFBMkIsQ0FBQzBWLGVBQWUsQ0FBQzNWLEtBQWhELEVBQXVEO0FBQ25ELGNBQU0sSUFBSXFULEtBQUosQ0FBVywySkFBMEp1QyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsZUFBZixDQUFnQyxFQUFyTSxDQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUNEckYsRUFBQUEsR0FBRyxHQUFHLE9BQU9BLEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQ29GLFNBQXRDO0FBQ0EsUUFBTUksUUFBUSxHQUFHL0MsTUFBTSxDQUFDL1MsS0FBRCxDQUF2QjtBQUNBLFFBQU0rVixTQUFTLEdBQUdoRCxNQUFNLENBQUM5UyxNQUFELENBQXhCO0FBQ0EsUUFBTStWLFVBQVUsR0FBR2pELE1BQU0sQ0FBQ0osT0FBRCxDQUF6QjtBQUNBLE1BQUlzRCxNQUFNLEdBQUcsQ0FBQ3pWLFFBQUQsS0FBYzBVLE9BQU8sS0FBSyxNQUFaLElBQXNCLE9BQU9BLE9BQVAsS0FBbUIsV0FBdkQsQ0FBYjs7QUFDQSxNQUFJNUUsR0FBRyxDQUFDc0QsVUFBSixDQUFlLE9BQWYsS0FBMkJ0RCxHQUFHLENBQUNzRCxVQUFKLENBQWUsT0FBZixDQUEvQixFQUF3RDtBQUNwRDtBQUNBbEIsSUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQXVELElBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0g7O0FBQ0QsTUFBSSxLQUFKLEVBQStELEVBRTlEOztBQUNELFlBQTJDO0FBQ3ZDLFFBQUksQ0FBQzNGLEdBQUwsRUFBVTtBQUNOLFlBQU0sSUFBSStDLEtBQUosQ0FBVywwSEFBeUh1QyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNySjdWLFFBQUFBLEtBRHFKO0FBRXJKQyxRQUFBQSxNQUZxSjtBQUdySjBTLFFBQUFBO0FBSHFKLE9BQWYsQ0FJdkksRUFKRyxDQUFOO0FBS0g7O0FBQ0QsUUFBSSxDQUFDdkMsbUJBQW1CLENBQUMrRixRQUFwQixDQUE2QnpFLE1BQTdCLENBQUwsRUFBMkM7QUFDdkMsWUFBTSxJQUFJMkIsS0FBSixDQUFXLG1CQUFrQi9DLEdBQUksOENBQTZDb0IsTUFBTyxzQkFBcUJ0QixtQkFBbUIsQ0FBQzVNLEdBQXBCLENBQXdCNFMsTUFBeEIsRUFBZ0N0RCxJQUFoQyxDQUFxQyxHQUFyQyxDQUEwQyxHQUFwSixDQUFOO0FBQ0g7O0FBQ0QsUUFBSSxPQUFPZ0QsUUFBUCxLQUFvQixXQUFwQixJQUFtQ08sS0FBSyxDQUFDUCxRQUFELENBQXhDLElBQXNELE9BQU9DLFNBQVAsS0FBcUIsV0FBckIsSUFBb0NNLEtBQUssQ0FBQ04sU0FBRCxDQUFuRyxFQUFnSDtBQUM1RyxZQUFNLElBQUkxQyxLQUFKLENBQVcsbUJBQWtCL0MsR0FBSSw2RUFBakMsQ0FBTjtBQUNIOztBQUNELFFBQUlvQixNQUFNLEtBQUssTUFBWCxLQUFzQjFSLEtBQUssSUFBSUMsTUFBL0IsQ0FBSixFQUE0QztBQUN4Q0csTUFBQUEsT0FBTyxDQUFDeVUsSUFBUixDQUFjLG1CQUFrQnZFLEdBQUksMkZBQXBDO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDWCxvQkFBb0IsQ0FBQ3dHLFFBQXJCLENBQThCakIsT0FBOUIsQ0FBTCxFQUE2QztBQUN6QyxZQUFNLElBQUk3QixLQUFKLENBQVcsbUJBQWtCL0MsR0FBSSwrQ0FBOEM0RSxPQUFRLHNCQUFxQnZGLG9CQUFvQixDQUFDbk0sR0FBckIsQ0FBeUI0UyxNQUF6QixFQUFpQ3RELElBQWpDLENBQXNDLEdBQXRDLENBQTJDLEdBQXZKLENBQU47QUFDSDs7QUFDRCxRQUFJdFMsUUFBUSxJQUFJMFUsT0FBTyxLQUFLLE1BQTVCLEVBQW9DO0FBQ2hDLFlBQU0sSUFBSTdCLEtBQUosQ0FBVyxtQkFBa0IvQyxHQUFJLGlGQUFqQyxDQUFOO0FBQ0g7O0FBQ0QsUUFBSW1ELFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUN4QixVQUFJL0IsTUFBTSxLQUFLLE1BQVgsSUFBcUIsQ0FBQ29FLFFBQVEsSUFBSSxDQUFiLEtBQW1CQyxTQUFTLElBQUksQ0FBaEMsSUFBcUMsSUFBOUQsRUFBb0U7QUFDaEUzVixRQUFBQSxPQUFPLENBQUN5VSxJQUFSLENBQWMsbUJBQWtCdkUsR0FBSSxzR0FBcEM7QUFDSDs7QUFDRCxVQUFJLENBQUNpRixXQUFMLEVBQWtCO0FBQ2QsY0FBTWUsY0FBYyxHQUFHLENBQ25CLE1BRG1CLEVBRW5CLEtBRm1CLEVBR25CLE1BSG1CLENBQXZCLENBSUU7QUFKRjtBQU1BLGNBQU0sSUFBSWpELEtBQUosQ0FBVyxtQkFBa0IvQyxHQUFJO0FBQ3ZEO0FBQ0E7QUFDQSxtR0FBbUdnRyxjQUFjLENBQUN4RCxJQUFmLENBQW9CLEdBQXBCLENBQXlCO0FBQzVIO0FBQ0EsZ0ZBTHNCLENBQU47QUFNSDtBQUNKOztBQUNELFFBQUksU0FBUzJDLElBQWIsRUFBbUI7QUFDZnJWLE1BQUFBLE9BQU8sQ0FBQ3lVLElBQVIsQ0FBYyxtQkFBa0J2RSxHQUFJLGlHQUFwQztBQUNIOztBQUNELFFBQUksV0FBV21GLElBQWYsRUFBcUI7QUFDakJyVixNQUFBQSxPQUFPLENBQUN5VSxJQUFSLENBQWMsbUJBQWtCdkUsR0FBSSx1RkFBcEM7QUFDSDs7QUFDRCxVQUFNaUcsSUFBSSxHQUFHcEUsSUFBSSxDQUFDcUUsS0FBTCxDQUFXckUsSUFBSSxDQUFDc0UsTUFBTCxLQUFnQixJQUEzQixJQUFtQyxHQUFoRDs7QUFDQSxRQUFJLENBQUMvRCxXQUFELElBQWdCLENBQUN4UyxNQUFNLENBQUM7QUFDeEJvUSxNQUFBQSxHQUR3QjtBQUV4QnRRLE1BQUFBLEtBQUssRUFBRXVXLElBRmlCO0FBR3hCNUQsTUFBQUEsT0FBTyxFQUFFO0FBSGUsS0FBRCxDQUFOLENBSWxCd0QsUUFKa0IsQ0FJVEksSUFBSSxDQUFDRyxRQUFMLEVBSlMsQ0FBckIsRUFJOEI7QUFDMUJ0VyxNQUFBQSxPQUFPLENBQUN5VSxJQUFSLENBQWMsbUJBQWtCdkUsR0FBSSx5SEFBdkIsR0FBbUosK0VBQWhLO0FBQ0g7QUFDSjs7QUFDRCxRQUFNLENBQUNxRyxNQUFELEVBQVNDLGFBQVQsSUFBMEIsQ0FBQyxHQUFHcEosZ0JBQUosRUFBc0JxSixlQUF0QixDQUFzQztBQUNsRUMsSUFBQUEsVUFBVSxFQUFFM0IsWUFEc0Q7QUFFbEU0QixJQUFBQSxRQUFRLEVBQUUsQ0FBQ2Q7QUFGdUQsR0FBdEMsQ0FBaEM7QUFJQSxRQUFNZSxTQUFTLEdBQUcsQ0FBQ2YsTUFBRCxJQUFXVyxhQUE3QjtBQUNBLE1BQUlLLFlBQUo7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsUUFBSjtBQUNBLE1BQUlDLFFBQVEsR0FBRztBQUNYdEMsSUFBQUEsUUFBUSxFQUFFLFVBREM7QUFFWHVDLElBQUFBLEdBQUcsRUFBRSxDQUZNO0FBR1hDLElBQUFBLElBQUksRUFBRSxDQUhLO0FBSVhDLElBQUFBLE1BQU0sRUFBRSxDQUpHO0FBS1hDLElBQUFBLEtBQUssRUFBRSxDQUxJO0FBTVhDLElBQUFBLFNBQVMsRUFBRSxZQU5BO0FBT1h2VixJQUFBQSxPQUFPLEVBQUUsQ0FQRTtBQVFYd1YsSUFBQUEsTUFBTSxFQUFFLE1BUkc7QUFTWEMsSUFBQUEsTUFBTSxFQUFFLE1BVEc7QUFVWC9DLElBQUFBLE9BQU8sRUFBRSxPQVZFO0FBV1g1VSxJQUFBQSxLQUFLLEVBQUUsQ0FYSTtBQVlYQyxJQUFBQSxNQUFNLEVBQUUsQ0FaRztBQWFYMlgsSUFBQUEsUUFBUSxFQUFFLE1BYkM7QUFjWEMsSUFBQUEsUUFBUSxFQUFFLE1BZEM7QUFlWEMsSUFBQUEsU0FBUyxFQUFFLE1BZkE7QUFnQlhDLElBQUFBLFNBQVMsRUFBRSxNQWhCQTtBQWlCWDFDLElBQUFBLFNBakJXO0FBa0JYQyxJQUFBQTtBQWxCVyxHQUFmO0FBb0JBLFFBQU0wQyxTQUFTLEdBQUd2RSxXQUFXLEtBQUssTUFBaEIsR0FBeUI7QUFDdkMvRSxJQUFBQSxNQUFNLEVBQUUsWUFEK0I7QUFFdkN5RixJQUFBQSxjQUFjLEVBQUVrQixTQUFTLElBQUksT0FGVTtBQUd2Q2pCLElBQUFBLGVBQWUsRUFBRyxRQUFPbUIsV0FBWSxJQUhFO0FBSXZDMEMsSUFBQUEsa0JBQWtCLEVBQUUzQyxjQUFjLElBQUk7QUFKQyxHQUF6QixHQUtkLEVBTEo7O0FBT0EsTUFBSTVELE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ25CO0FBQ0F1RixJQUFBQSxZQUFZLEdBQUc7QUFDWHJDLE1BQUFBLE9BQU8sRUFBRSxPQURFO0FBRVhzRCxNQUFBQSxRQUFRLEVBQUUsUUFGQztBQUdYcEQsTUFBQUEsUUFBUSxFQUFFLFVBSEM7QUFJWHVDLE1BQUFBLEdBQUcsRUFBRSxDQUpNO0FBS1hDLE1BQUFBLElBQUksRUFBRSxDQUxLO0FBTVhDLE1BQUFBLE1BQU0sRUFBRSxDQU5HO0FBT1hDLE1BQUFBLEtBQUssRUFBRSxDQVBJO0FBUVhDLE1BQUFBLFNBQVMsRUFBRSxZQVJBO0FBU1hFLE1BQUFBLE1BQU0sRUFBRTtBQVRHLEtBQWY7QUFXSCxHQWJELE1BYU8sSUFBSSxPQUFPN0IsUUFBUCxLQUFvQixXQUFwQixJQUFtQyxPQUFPQyxTQUFQLEtBQXFCLFdBQTVELEVBQXlFO0FBQzVFO0FBQ0EsVUFBTW9DLFFBQVEsR0FBR3BDLFNBQVMsR0FBR0QsUUFBN0I7QUFDQSxVQUFNc0MsVUFBVSxHQUFHL0IsS0FBSyxDQUFDOEIsUUFBRCxDQUFMLEdBQWtCLE1BQWxCLEdBQTRCLEdBQUVBLFFBQVEsR0FBRyxHQUFJLEdBQWhFOztBQUNBLFFBQUl6RyxNQUFNLEtBQUssWUFBZixFQUE2QjtBQUN6QjtBQUNBdUYsTUFBQUEsWUFBWSxHQUFHO0FBQ1hyQyxRQUFBQSxPQUFPLEVBQUUsT0FERTtBQUVYc0QsUUFBQUEsUUFBUSxFQUFFLFFBRkM7QUFHWHBELFFBQUFBLFFBQVEsRUFBRSxVQUhDO0FBSVgyQyxRQUFBQSxTQUFTLEVBQUUsWUFKQTtBQUtYRSxRQUFBQSxNQUFNLEVBQUU7QUFMRyxPQUFmO0FBT0FULE1BQUFBLFVBQVUsR0FBRztBQUNUdEMsUUFBQUEsT0FBTyxFQUFFLE9BREE7QUFFVDZDLFFBQUFBLFNBQVMsRUFBRSxZQUZGO0FBR1RXLFFBQUFBO0FBSFMsT0FBYjtBQUtILEtBZEQsTUFjTyxJQUFJMUcsTUFBTSxLQUFLLFdBQWYsRUFBNEI7QUFDL0I7QUFDQXVGLE1BQUFBLFlBQVksR0FBRztBQUNYckMsUUFBQUEsT0FBTyxFQUFFLGNBREU7QUFFWGlELFFBQUFBLFFBQVEsRUFBRSxNQUZDO0FBR1hLLFFBQUFBLFFBQVEsRUFBRSxRQUhDO0FBSVhwRCxRQUFBQSxRQUFRLEVBQUUsVUFKQztBQUtYMkMsUUFBQUEsU0FBUyxFQUFFLFlBTEE7QUFNWEUsUUFBQUEsTUFBTSxFQUFFO0FBTkcsT0FBZjtBQVFBVCxNQUFBQSxVQUFVLEdBQUc7QUFDVE8sUUFBQUEsU0FBUyxFQUFFLFlBREY7QUFFVDdDLFFBQUFBLE9BQU8sRUFBRSxPQUZBO0FBR1RpRCxRQUFBQSxRQUFRLEVBQUU7QUFIRCxPQUFiO0FBS0FWLE1BQUFBLFFBQVEsR0FBSSxlQUFjckIsUUFBUyxhQUFZQyxTQUFVLHNEQUF6RDtBQUNILEtBaEJNLE1BZ0JBLElBQUlyRSxNQUFNLEtBQUssT0FBZixFQUF3QjtBQUMzQjtBQUNBdUYsTUFBQUEsWUFBWSxHQUFHO0FBQ1hpQixRQUFBQSxRQUFRLEVBQUUsUUFEQztBQUVYVCxRQUFBQSxTQUFTLEVBQUUsWUFGQTtBQUdYN0MsUUFBQUEsT0FBTyxFQUFFLGNBSEU7QUFJWEUsUUFBQUEsUUFBUSxFQUFFLFVBSkM7QUFLWDlVLFFBQUFBLEtBQUssRUFBRThWLFFBTEk7QUFNWDdWLFFBQUFBLE1BQU0sRUFBRThWO0FBTkcsT0FBZjtBQVFIO0FBQ0osR0E3Q00sTUE2Q0E7QUFDSDtBQUNBLGNBQTJDO0FBQ3ZDLFlBQU0sSUFBSTFDLEtBQUosQ0FBVyxtQkFBa0IvQyxHQUFJLHlFQUFqQyxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxNQUFJK0gsYUFBYSxHQUFHO0FBQ2hCL0gsSUFBQUEsR0FBRyxFQUFFLGdGQURXO0FBRWhCc0MsSUFBQUEsTUFBTSxFQUFFaEQsU0FGUTtBQUdoQitCLElBQUFBLEtBQUssRUFBRS9CO0FBSFMsR0FBcEI7O0FBS0EsTUFBSW9ILFNBQUosRUFBZTtBQUNYcUIsSUFBQUEsYUFBYSxHQUFHNUYsZ0JBQWdCLENBQUM7QUFDN0JuQyxNQUFBQSxHQUQ2QjtBQUU3Qm9DLE1BQUFBLFdBRjZCO0FBRzdCaEIsTUFBQUEsTUFINkI7QUFJN0IxUixNQUFBQSxLQUFLLEVBQUU4VixRQUpzQjtBQUs3Qm5ELE1BQUFBLE9BQU8sRUFBRXFELFVBTG9CO0FBTTdCckUsTUFBQUEsS0FONkI7QUFPN0J6UixNQUFBQTtBQVA2QixLQUFELENBQWhDO0FBU0g7O0FBQ0QsTUFBSW9ZLFNBQVMsR0FBR2hJLEdBQWhCO0FBQ0EsU0FBTyxhQUFjcEQsTUFBTSxDQUFDRixPQUFQLENBQWV1TCxhQUFmLENBQTZCLEtBQTdCLEVBQW9DO0FBQ3JEckUsSUFBQUEsS0FBSyxFQUFFK0M7QUFEOEMsR0FBcEMsRUFFbEJDLFVBQVUsR0FBRyxhQUFjaEssTUFBTSxDQUFDRixPQUFQLENBQWV1TCxhQUFmLENBQTZCLEtBQTdCLEVBQW9DO0FBQzlEckUsSUFBQUEsS0FBSyxFQUFFZ0Q7QUFEdUQsR0FBcEMsRUFFM0JDLFFBQVEsR0FBRyxhQUFjakssTUFBTSxDQUFDRixPQUFQLENBQWV1TCxhQUFmLENBQTZCLEtBQTdCLEVBQW9DO0FBQzVEckUsSUFBQUEsS0FBSyxFQUFFO0FBQ0gyRCxNQUFBQSxRQUFRLEVBQUUsTUFEUDtBQUVIakQsTUFBQUEsT0FBTyxFQUFFLE9BRk47QUFHSCtDLE1BQUFBLE1BQU0sRUFBRSxDQUhMO0FBSUhELE1BQUFBLE1BQU0sRUFBRSxNQUpMO0FBS0h4VixNQUFBQSxPQUFPLEVBQUU7QUFMTixLQURxRDtBQVE1RHNXLElBQUFBLEdBQUcsRUFBRSxFQVJ1RDtBQVM1RCxtQkFBZSxJQVQ2QztBQVU1RGxJLElBQUFBLEdBQUcsRUFBRyw2QkFBNEIsQ0FBQyxHQUFHaEQsU0FBSixFQUFlbUwsUUFBZixDQUF3QnRCLFFBQXhCLENBQWtDO0FBVlIsR0FBcEMsQ0FBakIsR0FXTixJQWJ5QixDQUFqQixHQWFBLElBZlEsRUFlRixhQUFjakssTUFBTSxDQUFDRixPQUFQLENBQWV1TCxhQUFmLENBQTZCLEtBQTdCLEVBQW9DM0wsTUFBTSxDQUFDOEwsTUFBUCxDQUFjLEVBQWQsRUFDbEVqRCxJQURrRSxFQUM1RDRDLGFBRDRELEVBQzdDO0FBQ3BCTSxJQUFBQSxRQUFRLEVBQUUsT0FEVTtBQUVwQixpQkFBYWpILE1BRk87QUFHcEIwRCxJQUFBQSxTQUFTLEVBQUVBLFNBSFM7QUFJcEJaLElBQUFBLEdBQUcsRUFBR2hCLEdBQUQsSUFBTztBQUNSbUQsTUFBQUEsTUFBTSxDQUFDbkQsR0FBRCxDQUFOO0FBQ0FELE1BQUFBLGFBQWEsQ0FBQ0MsR0FBRCxFQUFNOEUsU0FBTixFQUFpQjVHLE1BQWpCLEVBQXlCK0IsV0FBekIsRUFBc0NDLGlCQUF0QyxDQUFiO0FBQ0gsS0FQbUI7QUFRcEJRLElBQUFBLEtBQUssRUFBRWxHLGFBQWEsQ0FBQyxFQUFELEVBQ2pCb0osUUFEaUIsRUFDUFksU0FETztBQVJBLEdBRDZDLENBQXBDLENBZlosRUEwQmhCLGFBQWM5SyxNQUFNLENBQUNGLE9BQVAsQ0FBZXVMLGFBQWYsQ0FBNkIsVUFBN0IsRUFBeUMsSUFBekMsRUFBK0MsYUFBY3JMLE1BQU0sQ0FBQ0YsT0FBUCxDQUFldUwsYUFBZixDQUE2QixLQUE3QixFQUFvQzNMLE1BQU0sQ0FBQzhMLE1BQVAsQ0FBYyxFQUFkLEVBQ2pIakQsSUFEaUgsRUFDM0doRCxnQkFBZ0IsQ0FBQztBQUN0Qm5DLElBQUFBLEdBRHNCO0FBRXRCb0MsSUFBQUEsV0FGc0I7QUFHdEJoQixJQUFBQSxNQUhzQjtBQUl0QjFSLElBQUFBLEtBQUssRUFBRThWLFFBSmU7QUFLdEJuRCxJQUFBQSxPQUFPLEVBQUVxRCxVQUxhO0FBTXRCckUsSUFBQUEsS0FOc0I7QUFPdEJ6UixJQUFBQTtBQVBzQixHQUFELENBRDJGLEVBU2hIO0FBQ0F5WSxJQUFBQSxRQUFRLEVBQUUsT0FEVjtBQUVBLGlCQUFhakgsTUFGYjtBQUdBd0MsSUFBQUEsS0FBSyxFQUFFa0QsUUFIUDtBQUlBaEMsSUFBQUEsU0FBUyxFQUFFQSxTQUpYO0FBS0FGLElBQUFBLE9BQU8sRUFBRUEsT0FBTyxJQUFJO0FBTHBCLEdBVGdILENBQXBDLENBQTdELENBMUJFLEVBeUNmMVUsUUFBUSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQWMwTSxFQUFBQSxNQUFNLENBQUNGLE9BQVAsQ0FBZXVMLGFBQWYsQ0FBNkJsTCxLQUFLLENBQUNMLE9BQW5DLEVBQTRDLElBQTVDLEVBQWtELGFBQWNFLE1BQU0sQ0FBQ0YsT0FBUCxDQUFldUwsYUFBZixDQUE2QixNQUE3QixFQUFxQztBQUMvRzVLLElBQUFBLEdBQUcsRUFBRSxZQUFZMEssYUFBYSxDQUFDL0gsR0FBMUIsR0FBZ0MrSCxhQUFhLENBQUN6RixNQUE5QyxHQUF1RHlGLGFBQWEsQ0FBQzFHLEtBRHFDO0FBRS9HaUgsSUFBQUEsR0FBRyxFQUFFLFNBRjBHO0FBRy9HQyxJQUFBQSxFQUFFLEVBQUUsT0FIMkc7QUFJL0dDLElBQUFBLElBQUksRUFBRVQsYUFBYSxDQUFDekYsTUFBZCxHQUF1QmhELFNBQXZCLEdBQW1DeUksYUFBYSxDQUFDL0gsR0FKd0Q7QUFLL0c7QUFDQXlJLElBQUFBLFdBQVcsRUFBRVYsYUFBYSxDQUFDekYsTUFOb0Y7QUFPL0c7QUFDQW9HLElBQUFBLFVBQVUsRUFBRVgsYUFBYSxDQUFDMUc7QUFScUYsR0FBckMsQ0FBaEUsQ0FMQSxHQWNSLElBdkRlLENBQXJCO0FBd0RIOztBQUNELFNBQVNzSCxZQUFULENBQXNCM0ksR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLEdBQVgsR0FBaUJBLEdBQUcsQ0FBQzRJLEtBQUosQ0FBVSxDQUFWLENBQWpCLEdBQWdDNUksR0FBdkM7QUFDSDs7QUFDRCxTQUFTTixXQUFULENBQXFCO0FBQUVvRCxFQUFBQSxJQUFGO0FBQVM5QyxFQUFBQSxHQUFUO0FBQWV0USxFQUFBQSxLQUFmO0FBQXVCMlMsRUFBQUE7QUFBdkIsQ0FBckIsRUFBd0Q7QUFDcEQ7QUFDQSxRQUFNclMsR0FBRyxHQUFHLElBQUk2WSxHQUFKLENBQVMsR0FBRS9GLElBQUssR0FBRTZGLFlBQVksQ0FBQzNJLEdBQUQsQ0FBTSxFQUFwQyxDQUFaO0FBQ0EsUUFBTThJLE1BQU0sR0FBRzlZLEdBQUcsQ0FBQytZLFlBQW5CO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE1BQVgsRUFBbUJGLE1BQU0sQ0FBQ2pHLEdBQVAsQ0FBVyxNQUFYLEtBQXNCLFFBQXpDO0FBQ0FpRyxFQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxLQUFYLEVBQWtCRixNQUFNLENBQUNqRyxHQUFQLENBQVcsS0FBWCxLQUFxQixLQUF2QztBQUNBaUcsRUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsR0FBWCxFQUFnQkYsTUFBTSxDQUFDakcsR0FBUCxDQUFXLEdBQVgsS0FBbUJuVCxLQUFLLENBQUMwVyxRQUFOLEVBQW5DOztBQUNBLE1BQUkvRCxPQUFKLEVBQWE7QUFDVHlHLElBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLEdBQVgsRUFBZ0IzRyxPQUFPLENBQUMrRCxRQUFSLEVBQWhCO0FBQ0g7O0FBQ0QsU0FBT3BXLEdBQUcsQ0FBQ3dZLElBQVg7QUFDSDs7QUFDRCxTQUFTNUksWUFBVCxDQUFzQjtBQUFFa0QsRUFBQUEsSUFBRjtBQUFTOUMsRUFBQUEsR0FBVDtBQUFldFEsRUFBQUE7QUFBZixDQUF0QixFQUErQztBQUMzQyxTQUFRLEdBQUVvVCxJQUFLLEdBQUU2RixZQUFZLENBQUMzSSxHQUFELENBQU0sWUFBV3RRLEtBQU0sRUFBcEQ7QUFDSDs7QUFDRCxTQUFTaVEsZ0JBQVQsQ0FBMEI7QUFBRW1ELEVBQUFBLElBQUY7QUFBUzlDLEVBQUFBLEdBQVQ7QUFBZXRRLEVBQUFBLEtBQWY7QUFBdUIyUyxFQUFBQTtBQUF2QixDQUExQixFQUE2RDtBQUN6RDtBQUNBLFFBQU15RyxNQUFNLEdBQUcsQ0FDWCxRQURXLEVBRVgsU0FGVyxFQUdYLE9BQU9wWixLQUhJLEVBSVgsUUFBUTJTLE9BQU8sSUFBSSxNQUFuQixDQUpXLENBQWY7QUFNQSxNQUFJNEcsWUFBWSxHQUFHSCxNQUFNLENBQUN0RyxJQUFQLENBQVksR0FBWixJQUFtQixHQUF0QztBQUNBLFNBQVEsR0FBRU0sSUFBSyxHQUFFbUcsWUFBYSxHQUFFTixZQUFZLENBQUMzSSxHQUFELENBQU0sRUFBbEQ7QUFDSDs7QUFDRCxTQUFTSCxZQUFULENBQXNCO0FBQUVHLEVBQUFBO0FBQUYsQ0FBdEIsRUFBZ0M7QUFDNUIsUUFBTSxJQUFJK0MsS0FBSixDQUFXLG1CQUFrQi9DLEdBQUksNkJBQXZCLEdBQXVELHlFQUFqRSxDQUFOO0FBQ0g7O0FBQ0QsU0FBU1AsYUFBVCxDQUF1QjtBQUFFcUQsRUFBQUEsSUFBRjtBQUFTOUMsRUFBQUEsR0FBVDtBQUFldFEsRUFBQUEsS0FBZjtBQUF1QjJTLEVBQUFBO0FBQXZCLENBQXZCLEVBQTBEO0FBQ3RELFlBQTJDO0FBQ3ZDLFVBQU02RyxhQUFhLEdBQUcsRUFBdEIsQ0FEdUMsQ0FFdkM7O0FBQ0EsUUFBSSxDQUFDbEosR0FBTCxFQUFVa0osYUFBYSxDQUFDeEgsSUFBZCxDQUFtQixLQUFuQjtBQUNWLFFBQUksQ0FBQ2hTLEtBQUwsRUFBWXdaLGFBQWEsQ0FBQ3hILElBQWQsQ0FBbUIsT0FBbkI7O0FBQ1osUUFBSXdILGFBQWEsQ0FBQ3BMLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsWUFBTSxJQUFJaUYsS0FBSixDQUFXLG9DQUFtQ21HLGFBQWEsQ0FBQzFHLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsZ0dBQStGOEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkx2RixRQUFBQSxHQUR1TDtBQUV2THRRLFFBQUFBLEtBRnVMO0FBR3ZMMlMsUUFBQUE7QUFIdUwsT0FBZixDQUl6SyxFQUpHLENBQU47QUFLSDs7QUFDRCxRQUFJckMsR0FBRyxDQUFDc0QsVUFBSixDQUFlLElBQWYsQ0FBSixFQUEwQjtBQUN0QixZQUFNLElBQUlQLEtBQUosQ0FBVyx3QkFBdUIvQyxHQUFJLDBHQUF0QyxDQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDQSxHQUFHLENBQUNzRCxVQUFKLENBQWUsR0FBZixDQUFELElBQXdCM0MsYUFBNUIsRUFBMkM7QUFDdkMsVUFBSXdJLFNBQUo7O0FBQ0EsVUFBSTtBQUNBQSxRQUFBQSxTQUFTLEdBQUcsSUFBSU4sR0FBSixDQUFRN0ksR0FBUixDQUFaO0FBQ0gsT0FGRCxDQUVFLE9BQU9vSixHQUFQLEVBQVk7QUFDVnRaLFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjcVosR0FBZDtBQUNBLGNBQU0sSUFBSXJHLEtBQUosQ0FBVyx3QkFBdUIvQyxHQUFJLGlJQUF0QyxDQUFOO0FBQ0g7O0FBQ0QsVUFBSSxTQUFtQyxDQUFDVyxhQUFhLENBQUNrRixRQUFkLENBQXVCc0QsU0FBUyxDQUFDRSxRQUFqQyxDQUF4QyxFQUFvRjtBQUNoRixjQUFNLElBQUl0RyxLQUFKLENBQVcscUJBQW9CL0MsR0FBSSxrQ0FBaUNtSixTQUFTLENBQUNFLFFBQVMsK0RBQTdFLEdBQStJLDhFQUF6SixDQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUNELFNBQVEsR0FBRXZHLElBQUssUUFBT3dHLGtCQUFrQixDQUFDdEosR0FBRCxDQUFNLE1BQUt0USxLQUFNLE1BQUsyUyxPQUFPLElBQUksRUFBRyxFQUE1RTtBQUNIOzs7Ozs7Ozs7OztBQ2htQlk7O0FBQ2IvRiw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSUksTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUl5TSxPQUFPLEdBQUd6TSxtQkFBTyxDQUFDLHlGQUFELENBQXJCOztBQUNBLElBQUkwTSxRQUFRLEdBQUcxTSxtQkFBTyxDQUFDLDJEQUFELENBQXRCOztBQUNBLElBQUlJLGdCQUFnQixHQUFHSixtQkFBTyxDQUFDLCtFQUFELENBQTlCOztBQUNBLFNBQVNELHNCQUFULENBQWdDTyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ssVUFBWCxHQUF3QkwsR0FBeEIsR0FBOEI7QUFDakNWLElBQUFBLE9BQU8sRUFBRVU7QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNcU0sVUFBVSxHQUFHLEVBQW5COztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCbkIsSUFBMUIsRUFBZ0NELEVBQWhDLEVBQW9DcUIsT0FBcEMsRUFBNkM7QUFDekMsTUFBSSxJQUFKLEVBQThDO0FBQzlDLE1BQUksQ0FBQyxDQUFDLEdBQUdMLE9BQUosRUFBYU0sVUFBYixDQUF3QnJCLElBQXhCLENBQUwsRUFBb0MsT0FGSyxDQUd6QztBQUNBO0FBQ0E7QUFDQTs7QUFDQW1CLEVBQUFBLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQmxCLElBQWhCLEVBQXNCRCxFQUF0QixFQUEwQnFCLE9BQTFCLEVBQW1DbEcsS0FBbkMsQ0FBMEMwRixHQUFELElBQU87QUFDNUMsY0FBMkM7QUFDdkM7QUFDQSxZQUFNQSxHQUFOO0FBQ0g7QUFDSixHQUxEO0FBTUEsUUFBTVUsU0FBUyxHQUFHRixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDRyxNQUFmLEtBQTBCLFdBQXJDLEdBQW1ESCxPQUFPLENBQUNHLE1BQTNELEdBQW9FSixNQUFNLElBQUlBLE1BQU0sQ0FBQ0ksTUFBdkcsQ0FieUMsQ0FjekM7O0FBQ0FOLEVBQUFBLFVBQVUsQ0FBQ2pCLElBQUksR0FBRyxHQUFQLEdBQWFELEVBQWIsSUFBbUJ1QixTQUFTLEdBQUcsTUFBTUEsU0FBVCxHQUFxQixFQUFqRCxDQUFELENBQVYsR0FBbUUsSUFBbkU7QUFDSDs7QUFDRCxTQUFTRSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM1QixRQUFNO0FBQUV0TSxJQUFBQTtBQUFGLE1BQWNzTSxLQUFLLENBQUNDLGFBQTFCO0FBQ0EsU0FBT3ZNLE1BQU0sSUFBSUEsTUFBTSxLQUFLLE9BQXJCLElBQWdDc00sS0FBSyxDQUFDRSxPQUF0QyxJQUFpREYsS0FBSyxDQUFDRyxPQUF2RCxJQUFrRUgsS0FBSyxDQUFDSSxRQUF4RSxJQUFvRkosS0FBSyxDQUFDSyxNQUExRixJQUFvR0wsS0FBSyxDQUFDTSxXQUFOLElBQXFCTixLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEtBQWxCLEtBQTRCLENBQTVKO0FBQ0g7O0FBQ0QsU0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JmLE1BQXhCLEVBQWdDbkIsSUFBaEMsRUFBc0NELEVBQXRDLEVBQTBDb0MsT0FBMUMsRUFBbURDLE9BQW5ELEVBQTREQyxNQUE1RCxFQUFvRWQsTUFBcEUsRUFBNEU7QUFDeEUsUUFBTTtBQUFFZSxJQUFBQTtBQUFGLE1BQWdCSixDQUFDLENBQUNSLGFBQXhCOztBQUNBLE1BQUlZLFFBQVEsS0FBSyxHQUFiLEtBQXFCZCxlQUFlLENBQUNVLENBQUQsQ0FBZixJQUFzQixDQUFDLENBQUMsR0FBR25CLE9BQUosRUFBYU0sVUFBYixDQUF3QnJCLElBQXhCLENBQTVDLENBQUosRUFBZ0Y7QUFDNUU7QUFDQTtBQUNIOztBQUNEa0MsRUFBQUEsQ0FBQyxDQUFDSyxjQUFGLEdBTndFLENBT3hFOztBQUNBLE1BQUlGLE1BQU0sSUFBSSxJQUFWLElBQWtCdEMsRUFBRSxDQUFDM0osT0FBSCxDQUFXLEdBQVgsS0FBbUIsQ0FBekMsRUFBNEM7QUFDeENpTSxJQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNILEdBVnVFLENBV3hFOzs7QUFDQWxCLEVBQUFBLE1BQU0sQ0FBQ2dCLE9BQU8sR0FBRyxTQUFILEdBQWUsTUFBdkIsQ0FBTixDQUFxQ25DLElBQXJDLEVBQTJDRCxFQUEzQyxFQUErQztBQUMzQ3FDLElBQUFBLE9BRDJDO0FBRTNDYixJQUFBQSxNQUYyQztBQUczQ2MsSUFBQUE7QUFIMkMsR0FBL0M7QUFLSDs7QUFDRCxTQUFTbmUsSUFBVCxDQUFjcVAsS0FBZCxFQUFxQjtBQUNqQixZQUEyQztBQUN2QyxhQUFTaVAsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDM0IsYUFBTyxJQUFJbEksS0FBSixDQUFXLGdDQUErQmtJLElBQUksQ0FBQzVOLEdBQUksZ0JBQWU0TixJQUFJLENBQUNDLFFBQVMsNkJBQTRCRCxJQUFJLENBQUNFLE1BQU8sYUFBOUcsSUFBOEgsU0FBZ0MsQ0FBaEMsR0FBcUcsRUFBbk8sQ0FBVixDQUFQO0FBQ0gsS0FIc0MsQ0FJdkM7OztBQUNBLFVBQU1DLGtCQUFrQixHQUFHO0FBQ3ZCNUMsTUFBQUEsSUFBSSxFQUFFO0FBRGlCLEtBQTNCO0FBR0EsVUFBTTZDLGFBQWEsR0FBRy9PLE1BQU0sQ0FBQzJCLElBQVAsQ0FBWW1OLGtCQUFaLENBQXRCO0FBQ0FDLElBQUFBLGFBQWEsQ0FBQzlNLE9BQWQsQ0FBdUJsQixHQUFELElBQU87QUFDekIsVUFBSUEsR0FBRyxLQUFLLE1BQVosRUFBb0I7QUFDaEIsWUFBSXRCLEtBQUssQ0FBQ3NCLEdBQUQsQ0FBTCxJQUFjLElBQWQsSUFBc0IsT0FBT3RCLEtBQUssQ0FBQ3NCLEdBQUQsQ0FBWixLQUFzQixRQUF0QixJQUFrQyxPQUFPdEIsS0FBSyxDQUFDc0IsR0FBRCxDQUFaLEtBQXNCLFFBQWxGLEVBQTRGO0FBQ3hGLGdCQUFNMk4sZUFBZSxDQUFDO0FBQ2xCM04sWUFBQUEsR0FEa0I7QUFFbEI2TixZQUFBQSxRQUFRLEVBQUUsc0JBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRXBQLEtBQUssQ0FBQ3NCLEdBQUQsQ0FBTCxLQUFlLElBQWYsR0FBc0IsTUFBdEIsR0FBK0IsT0FBT3RCLEtBQUssQ0FBQ3NCLEdBQUQ7QUFIakMsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPO0FBQ0g7QUFDQTtBQUNBLGNBQU1pTyxDQUFDLEdBQUdqTyxHQUFWO0FBQ0g7QUFDSixLQWRELEVBVHVDLENBd0J2Qzs7QUFDQSxVQUFNa08sa0JBQWtCLEdBQUc7QUFDdkJoRCxNQUFBQSxFQUFFLEVBQUUsSUFEbUI7QUFFdkJvQyxNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCWSxNQUFBQSxRQUFRLEVBQUUsSUFMYTtBQU12QjlCLE1BQUFBLFFBQVEsRUFBRSxJQU5hO0FBT3ZCSyxNQUFBQSxNQUFNLEVBQUU7QUFQZSxLQUEzQjtBQVNBLFVBQU0wQixhQUFhLEdBQUduUCxNQUFNLENBQUMyQixJQUFQLENBQVlzTixrQkFBWixDQUF0QjtBQUNBRSxJQUFBQSxhQUFhLENBQUNsTixPQUFkLENBQXVCbEIsR0FBRCxJQUFPO0FBQ3pCLFlBQU1xTyxPQUFPLEdBQUcsT0FBTzNQLEtBQUssQ0FBQ3NCLEdBQUQsQ0FBNUI7O0FBQ0EsVUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDZCxZQUFJdEIsS0FBSyxDQUFDc0IsR0FBRCxDQUFMLElBQWNxTyxPQUFPLEtBQUssUUFBMUIsSUFBc0NBLE9BQU8sS0FBSyxRQUF0RCxFQUFnRTtBQUM1RCxnQkFBTVYsZUFBZSxDQUFDO0FBQ2xCM04sWUFBQUEsR0FEa0I7QUFFbEI2TixZQUFBQSxRQUFRLEVBQUUsc0JBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRU87QUFIVSxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJELE1BUU8sSUFBSXJPLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3pCLFlBQUl0QixLQUFLLENBQUNzQixHQUFELENBQUwsSUFBY3FPLE9BQU8sS0FBSyxRQUE5QixFQUF3QztBQUNwQyxnQkFBTVYsZUFBZSxDQUFDO0FBQ2xCM04sWUFBQUEsR0FEa0I7QUFFbEI2TixZQUFBQSxRQUFRLEVBQUUsVUFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFTztBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUk0sTUFRQSxJQUFJck8sR0FBRyxLQUFLLFNBQVIsSUFBcUJBLEdBQUcsS0FBSyxRQUE3QixJQUF5Q0EsR0FBRyxLQUFLLFNBQWpELElBQThEQSxHQUFHLEtBQUssVUFBdEUsSUFBb0ZBLEdBQUcsS0FBSyxVQUFoRyxFQUE0RztBQUMvRyxZQUFJdEIsS0FBSyxDQUFDc0IsR0FBRCxDQUFMLElBQWMsSUFBZCxJQUFzQnFPLE9BQU8sS0FBSyxTQUF0QyxFQUFpRDtBQUM3QyxnQkFBTVYsZUFBZSxDQUFDO0FBQ2xCM04sWUFBQUEsR0FEa0I7QUFFbEI2TixZQUFBQSxRQUFRLEVBQUUsV0FGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFTztBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUk0sTUFRQTtBQUNIO0FBQ0E7QUFDQSxjQUFNSixDQUFDLEdBQUdqTyxHQUFWO0FBQ0g7QUFDSixLQS9CRCxFQW5DdUMsQ0FtRXZDO0FBQ0E7O0FBQ0EsVUFBTXNPLFNBQVMsR0FBRy9PLE1BQU0sQ0FBQ0YsT0FBUCxDQUFla1AsTUFBZixDQUFzQixLQUF0QixDQUFsQjs7QUFDQSxRQUFJN1AsS0FBSyxDQUFDMk4sUUFBTixJQUFrQixDQUFDaUMsU0FBUyxDQUFDRSxPQUFqQyxFQUEwQztBQUN0Q0YsTUFBQUEsU0FBUyxDQUFDRSxPQUFWLEdBQW9CLElBQXBCO0FBQ0EvYixNQUFBQSxPQUFPLENBQUN5VSxJQUFSLENBQWEsc0tBQWI7QUFDSDtBQUNKOztBQUNELFFBQU05USxDQUFDLEdBQUdzSSxLQUFLLENBQUMyTixRQUFOLEtBQW1CLEtBQTdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBR0gsUUFBSixFQUFjc0MsU0FBZCxFQUFmOztBQUNBLFFBQU07QUFBRXRELElBQUFBLElBQUY7QUFBU0QsSUFBQUE7QUFBVCxNQUFpQjNMLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlcVAsT0FBZixDQUF1QixNQUFJO0FBQzlDLFVBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxVQUFmLElBQTZCLENBQUMsR0FBRzFDLE9BQUosRUFBYTJDLFdBQWIsQ0FBeUJ2QyxNQUF6QixFQUFpQzVOLEtBQUssQ0FBQ3lNLElBQXZDLEVBQTZDLElBQTdDLENBQW5DO0FBQ0EsV0FBTztBQUNIQSxNQUFBQSxJQUFJLEVBQUV3RCxZQURIO0FBRUh6RCxNQUFBQSxFQUFFLEVBQUV4TSxLQUFLLENBQUN3TSxFQUFOLEdBQVcsQ0FBQyxHQUFHZ0IsT0FBSixFQUFhMkMsV0FBYixDQUF5QnZDLE1BQXpCLEVBQWlDNU4sS0FBSyxDQUFDd00sRUFBdkMsQ0FBWCxHQUF3RDBELFVBQVUsSUFBSUQ7QUFGdkUsS0FBUDtBQUlILEdBTnNCLEVBTXBCLENBQ0NyQyxNQURELEVBRUM1TixLQUFLLENBQUN5TSxJQUZQLEVBR0N6TSxLQUFLLENBQUN3TSxFQUhQLENBTm9CLENBQXZCOztBQVdBLE1BQUk7QUFBRWhZLElBQUFBLFFBQUY7QUFBYW9hLElBQUFBLE9BQWI7QUFBdUJDLElBQUFBLE9BQXZCO0FBQWlDQyxJQUFBQSxNQUFqQztBQUEwQ2QsSUFBQUE7QUFBMUMsTUFBc0RoTyxLQUExRCxDQXpGaUIsQ0EwRmpCOztBQUNBLE1BQUksT0FBT3hMLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUJBLElBQUFBLFFBQVEsR0FBRyxhQUFjcU0sTUFBTSxDQUFDRixPQUFQLENBQWV1TCxhQUFmLENBQTZCLEdBQTdCLEVBQWtDLElBQWxDLEVBQXdDMVgsUUFBeEMsQ0FBekI7QUFDSCxHQTdGZ0IsQ0E4RmpCOzs7QUFDQSxNQUFJNGIsS0FBSjs7QUFDQSxZQUE0QztBQUN4QyxRQUFJO0FBQ0FBLE1BQUFBLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlMFAsUUFBZixDQUF3QkMsSUFBeEIsQ0FBNkI5YixRQUE3QixDQUFSO0FBQ0gsS0FGRCxDQUVFLE9BQU82WSxHQUFQLEVBQVk7QUFDVixZQUFNLElBQUlyRyxLQUFKLENBQVcsOERBQTZEaEgsS0FBSyxDQUFDeU0sSUFBSyw0RkFBekUsSUFBd0ssU0FBZ0MsQ0FBaEMsR0FBc0csRUFBOVEsQ0FBVixDQUFOO0FBQ0g7QUFDSixHQU5ELE1BTU8sRUFFTjs7QUFDRCxRQUFNOEQsUUFBUSxHQUFHSCxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQixJQUFzQ0EsS0FBSyxDQUFDakksR0FBN0Q7QUFDQSxRQUFNLENBQUNxSSxrQkFBRCxFQUFxQjdGLFNBQXJCLElBQWtDLENBQUMsR0FBR3hKLGdCQUFKLEVBQXNCcUosZUFBdEIsQ0FBc0M7QUFDMUVDLElBQUFBLFVBQVUsRUFBRTtBQUQ4RCxHQUF0QyxDQUF4Qzs7QUFHQSxRQUFNSCxNQUFNLEdBQUd6SixNQUFNLENBQUNGLE9BQVAsQ0FBZThQLFdBQWYsQ0FBNEJDLEVBQUQsSUFBTTtBQUM1Q0YsSUFBQUEsa0JBQWtCLENBQUNFLEVBQUQsQ0FBbEI7O0FBQ0EsUUFBSUgsUUFBSixFQUFjO0FBQ1YsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DQSxRQUFRLENBQUNHLEVBQUQsQ0FBUixDQUFwQyxLQUNLLElBQUksT0FBT0gsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNuQ0EsUUFBQUEsUUFBUSxDQUFDVCxPQUFULEdBQW1CWSxFQUFuQjtBQUNIO0FBQ0o7QUFDSixHQVJjLEVBUVosQ0FDQ0gsUUFERCxFQUVDQyxrQkFGRCxDQVJZLENBQWY7O0FBWUEzUCxFQUFBQSxNQUFNLENBQUNGLE9BQVAsQ0FBZWdRLFNBQWYsQ0FBeUIsTUFBSTtBQUN6QixVQUFNQyxjQUFjLEdBQUdqRyxTQUFTLElBQUlqVCxDQUFiLElBQWtCLENBQUMsR0FBRzhWLE9BQUosRUFBYU0sVUFBYixDQUF3QnJCLElBQXhCLENBQXpDO0FBQ0EsVUFBTXNCLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q0osTUFBTSxJQUFJQSxNQUFNLENBQUNJLE1BQTVFO0FBQ0EsVUFBTTZDLFlBQVksR0FBR25ELFVBQVUsQ0FBQ2pCLElBQUksR0FBRyxHQUFQLEdBQWFELEVBQWIsSUFBbUJ1QixTQUFTLEdBQUcsTUFBTUEsU0FBVCxHQUFxQixFQUFqRCxDQUFELENBQS9COztBQUNBLFFBQUk2QyxjQUFjLElBQUksQ0FBQ0MsWUFBdkIsRUFBcUM7QUFDakNsRCxNQUFBQSxRQUFRLENBQUNDLE1BQUQsRUFBU25CLElBQVQsRUFBZUQsRUFBZixFQUFtQjtBQUN2QndCLFFBQUFBLE1BQU0sRUFBRUQ7QUFEZSxPQUFuQixDQUFSO0FBR0g7QUFDSixHQVRELEVBU0csQ0FDQ3ZCLEVBREQsRUFFQ0MsSUFGRCxFQUdDOUIsU0FIRCxFQUlDcUQsTUFKRCxFQUtDdFcsQ0FMRCxFQU1Da1csTUFORCxDQVRIOztBQWlCQSxRQUFNa0QsVUFBVSxHQUFHO0FBQ2YzSSxJQUFBQSxHQUFHLEVBQUVtQyxNQURVO0FBRWZ5RyxJQUFBQSxPQUFPLEVBQUdwQyxDQUFELElBQUs7QUFDVixVQUFJeUIsS0FBSyxDQUFDcFEsS0FBTixJQUFlLE9BQU9vUSxLQUFLLENBQUNwUSxLQUFOLENBQVkrUSxPQUFuQixLQUErQixVQUFsRCxFQUE4RDtBQUMxRFgsUUFBQUEsS0FBSyxDQUFDcFEsS0FBTixDQUFZK1EsT0FBWixDQUFvQnBDLENBQXBCO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDQSxDQUFDLENBQUNxQyxnQkFBUCxFQUF5QjtBQUNyQnRDLFFBQUFBLFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJZixNQUFKLEVBQVluQixJQUFaLEVBQWtCRCxFQUFsQixFQUFzQm9DLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3Q0MsTUFBeEMsRUFBZ0RkLE1BQWhELENBQVg7QUFDSDtBQUNKO0FBVGMsR0FBbkI7O0FBV0E4QyxFQUFBQSxVQUFVLENBQUNHLFlBQVgsR0FBMkJ0QyxDQUFELElBQUs7QUFDM0IsUUFBSSxDQUFDLENBQUMsR0FBR25CLE9BQUosRUFBYU0sVUFBYixDQUF3QnJCLElBQXhCLENBQUwsRUFBb0M7O0FBQ3BDLFFBQUkyRCxLQUFLLENBQUNwUSxLQUFOLElBQWUsT0FBT29RLEtBQUssQ0FBQ3BRLEtBQU4sQ0FBWWlSLFlBQW5CLEtBQW9DLFVBQXZELEVBQW1FO0FBQy9EYixNQUFBQSxLQUFLLENBQUNwUSxLQUFOLENBQVlpUixZQUFaLENBQXlCdEMsQ0FBekI7QUFDSDs7QUFDRGhCLElBQUFBLFFBQVEsQ0FBQ0MsTUFBRCxFQUFTbkIsSUFBVCxFQUFlRCxFQUFmLEVBQW1CO0FBQ3ZCclksTUFBQUEsUUFBUSxFQUFFO0FBRGEsS0FBbkIsQ0FBUjtBQUdILEdBUkQsQ0FySmlCLENBOEpqQjtBQUNBOzs7QUFDQSxNQUFJNkwsS0FBSyxDQUFDeVAsUUFBTixJQUFrQlcsS0FBSyxDQUFDYyxJQUFOLEtBQWUsR0FBZixJQUFzQixFQUFFLFVBQVVkLEtBQUssQ0FBQ3BRLEtBQWxCLENBQTVDLEVBQXNFO0FBQ2xFLFVBQU0rTixTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNKLE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxNQUE1RSxDQURrRSxDQUVsRTtBQUNBOztBQUNBLFVBQU1tRCxZQUFZLEdBQUd2RCxNQUFNLElBQUlBLE1BQU0sQ0FBQ3dELGNBQWpCLElBQW1DLENBQUMsR0FBRzVELE9BQUosRUFBYTZELGVBQWIsQ0FBNkI3RSxFQUE3QixFQUFpQ3VCLFNBQWpDLEVBQTRDSCxNQUFNLElBQUlBLE1BQU0sQ0FBQzBELE9BQTdELEVBQXNFMUQsTUFBTSxJQUFJQSxNQUFNLENBQUMyRCxhQUF2RixDQUF4RDtBQUNBVCxJQUFBQSxVQUFVLENBQUNyRSxJQUFYLEdBQWtCMEUsWUFBWSxJQUFJLENBQUMsR0FBRzNELE9BQUosRUFBYWdFLFdBQWIsQ0FBeUIsQ0FBQyxHQUFHaEUsT0FBSixFQUFhaUUsU0FBYixDQUF1QmpGLEVBQXZCLEVBQTJCdUIsU0FBM0IsRUFBc0NILE1BQU0sSUFBSUEsTUFBTSxDQUFDOEQsYUFBdkQsQ0FBekIsQ0FBbEM7QUFDSDs7QUFDRCxTQUFPLGFBQWM3USxNQUFNLENBQUNGLE9BQVAsQ0FBZWdSLFlBQWYsQ0FBNEJ2QixLQUE1QixFQUFtQ1UsVUFBbkMsQ0FBckI7QUFDSDs7QUFDRCxJQUFJYyxRQUFRLEdBQUdqaEIsSUFBZjtBQUNBOFAsZUFBQSxHQUFrQm1SLFFBQWxCOzs7Ozs7Ozs7OztBQ2pPYTs7QUFDYnJSLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELCtCQUFBLEdBQWtDb1IsdUJBQWxDO0FBQ0FwUixrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVNvUix1QkFBVCxDQUFpQ3BOLElBQWpDLEVBQXVDO0FBQ25DLFNBQU9BLElBQUksQ0FBQ3NOLFFBQUwsQ0FBYyxHQUFkLEtBQXNCdE4sSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUNvSSxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFyQyxHQUF5RHBJLElBQWhFO0FBQ0g7O0FBQ0QsTUFBTXFOLDBCQUEwQixHQUFHak4sTUFBQSxHQUFxQ0osQ0FBckMsR0FRL0JvTix1QkFSSjtBQVNBcFIsa0NBQUEsR0FBcUNxUiwwQkFBckM7Ozs7Ozs7Ozs7O0FDbEJhOztBQUNidlIsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsMkJBQUEsR0FBOEJBLDBCQUFBLEdBQTZCLEtBQUssQ0FBaEU7O0FBQ0EsTUFBTXlSLG1CQUFtQixHQUFHLE9BQU9FLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ0YsbUJBQXBDLElBQTJERSxJQUFJLENBQUNGLG1CQUFMLENBQXlCRyxJQUF6QixDQUE4QkMsTUFBOUIsQ0FBM0QsSUFBb0csVUFBU0MsRUFBVCxFQUFhO0FBQ3pJLE1BQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxTQUFPQyxVQUFVLENBQUMsWUFBVztBQUN6QkosSUFBQUEsRUFBRSxDQUFDO0FBQ0NLLE1BQUFBLFVBQVUsRUFBRSxLQURiO0FBRUNDLE1BQUFBLGFBQWEsRUFBRSxZQUFXO0FBQ3RCLGVBQU8vTSxJQUFJLENBQUNnTixHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU1MLElBQUksQ0FBQ0MsR0FBTCxLQUFhRixLQUFuQixDQUFaLENBQVA7QUFDSDtBQUpGLEtBQUQsQ0FBRjtBQU1ILEdBUGdCLEVBT2QsQ0FQYyxDQUFqQjtBQVFILENBVkQ7O0FBV0EvUiwyQkFBQSxHQUE4QnlSLG1CQUE5Qjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxPQUFPQyxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNELGtCQUFwQyxJQUEwREMsSUFBSSxDQUFDRCxrQkFBTCxDQUF3QkUsSUFBeEIsQ0FBNkJDLE1BQTdCLENBQTFELElBQWtHLFVBQVNsYixFQUFULEVBQWE7QUFDdEksU0FBTzJiLFlBQVksQ0FBQzNiLEVBQUQsQ0FBbkI7QUFDSCxDQUZEOztBQUdBcUosMEJBQUEsR0FBNkIwUixrQkFBN0I7Ozs7Ozs7Ozs7O0FDcEJhOztBQUNiNVIsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsc0JBQUEsR0FBeUJ1UyxjQUF6QjtBQUNBdlMsb0JBQUEsR0FBdUJ3UyxZQUF2QjtBQUNBeFMsOEJBQUEsR0FBaUN5UyxzQkFBakM7QUFDQXpTLHlCQUFBLEdBQTRCMFMsaUJBQTVCOztBQUNBLElBQUlDLHNCQUFzQixHQUFHdFMsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsa0hBQUQsQ0FBUixDQUFuRDs7QUFDQSxJQUFJc1Msb0JBQW9CLEdBQUd0UyxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLFNBQVNELHNCQUFULENBQWdDTyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ssVUFBWCxHQUF3QkwsR0FBeEIsR0FBOEI7QUFDakNWLElBQUFBLE9BQU8sRUFBRVU7QUFEd0IsR0FBckM7QUFHSCxFQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNaVMsaUJBQWlCLEdBQUcsSUFBMUI7O0FBQ0EsU0FBU0MsVUFBVCxDQUFvQmpTLEdBQXBCLEVBQXlCbkssR0FBekIsRUFBOEJxYyxTQUE5QixFQUF5QztBQUNyQyxNQUFJQyxLQUFLLEdBQUd0YyxHQUFHLENBQUMyUCxHQUFKLENBQVF4RixHQUFSLENBQVo7O0FBQ0EsTUFBSW1TLEtBQUosRUFBVztBQUNQLFFBQUksWUFBWUEsS0FBaEIsRUFBdUI7QUFDbkIsYUFBT0EsS0FBSyxDQUFDQyxNQUFiO0FBQ0g7O0FBQ0QsV0FBT2pNLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQitMLEtBQWhCLENBQVA7QUFDSDs7QUFDRCxNQUFJRSxRQUFKO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUluTSxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNoQ2lNLElBQUFBLFFBQVEsR0FBR2pNLE9BQVg7QUFDSCxHQUZZLENBQWI7QUFHQXZRLEVBQUFBLEdBQUcsQ0FBQzhWLEdBQUosQ0FBUTNMLEdBQVIsRUFBYW1TLEtBQUssR0FBRztBQUNqQi9MLElBQUFBLE9BQU8sRUFBRWlNLFFBRFE7QUFFakJELElBQUFBLE1BQU0sRUFBRUU7QUFGUyxHQUFyQjtBQUlBLFNBQU9KLFNBQVMsR0FBR0EsU0FBUyxHQUFHNUwsSUFBWixDQUFrQmxILEtBQUQsS0FBVWlULFFBQVEsQ0FBQ2pULEtBQUQsQ0FBUixFQUFpQkEsS0FBM0IsQ0FBakIsQ0FBSCxHQUNaa1QsSUFESjtBQUVIOztBQUNELFNBQVNDLFdBQVQsQ0FBcUJuaEIsSUFBckIsRUFBMkI7QUFDdkIsTUFBSTtBQUNBQSxJQUFBQSxJQUFJLEdBQUdvaEIsUUFBUSxDQUFDNUgsYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0EsV0FBTztBQUNQO0FBQ0MsT0FBQyxDQUFDb0csTUFBTSxDQUFDeUIsb0JBQVQsSUFBaUMsQ0FBQyxDQUFDRCxRQUFRLENBQUNFLFlBQTdDLElBQThEdGhCLElBQUksQ0FBQ3VoQixPQUFMLENBQWFDLFFBQWIsQ0FBc0IsVUFBdEI7QUFGOUQ7QUFHSCxHQUxELENBS0UsT0FBT3ZGLENBQVAsRUFBVTtBQUNSLFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsTUFBTXdGLFdBQVcsR0FBR04sV0FBVyxFQUEvQjs7QUFDQSxTQUFTTyxjQUFULENBQXdCM0gsSUFBeEIsRUFBOEJELEVBQTlCLEVBQWtDOVosSUFBbEMsRUFBd0M7QUFDcEMsU0FBTyxJQUFJK1UsT0FBSixDQUFZLENBQUM0TSxHQUFELEVBQU1DLEdBQU4sS0FBWTtBQUMzQixRQUFJUixRQUFRLENBQUNTLGFBQVQsQ0FBd0IsK0JBQThCOUgsSUFBSyxJQUEzRCxDQUFKLEVBQXFFO0FBQ2pFLGFBQU80SCxHQUFHLEVBQVY7QUFDSDs7QUFDRDNoQixJQUFBQSxJQUFJLEdBQUdvaEIsUUFBUSxDQUFDNUgsYUFBVCxDQUF1QixNQUF2QixDQUFQLENBSjJCLENBSzNCOztBQUNBLFFBQUlNLEVBQUosRUFBUTlaLElBQUksQ0FBQzhaLEVBQUwsR0FBVUEsRUFBVjtBQUNSOVosSUFBQUEsSUFBSSxDQUFDNlosR0FBTCxHQUFZLFVBQVo7QUFDQTdaLElBQUFBLElBQUksQ0FBQzhoQixXQUFMLEdBQW1CM1AsU0FBbkI7QUFDQW5TLElBQUFBLElBQUksQ0FBQ2lXLE1BQUwsR0FBYzBMLEdBQWQ7QUFDQTNoQixJQUFBQSxJQUFJLENBQUNnaUIsT0FBTCxHQUFlSixHQUFmLENBVjJCLENBVzNCOztBQUNBNWhCLElBQUFBLElBQUksQ0FBQytaLElBQUwsR0FBWUEsSUFBWjtBQUNBcUgsSUFBQUEsUUFBUSxDQUFDYSxJQUFULENBQWNDLFdBQWQsQ0FBMEJsaUIsSUFBMUI7QUFDSCxHQWRNLENBQVA7QUFlSDs7QUFDRCxNQUFNbWlCLGdCQUFnQixHQUFHQyxNQUFNLENBQUMsa0JBQUQsQ0FBL0I7O0FBQ0EsU0FBUzlCLGNBQVQsQ0FBd0IzRixHQUF4QixFQUE2QjtBQUN6QixTQUFPOU0sTUFBTSxDQUFDQyxjQUFQLENBQXNCNk0sR0FBdEIsRUFBMkJ3SCxnQkFBM0IsRUFBNkMsRUFBN0MsQ0FBUDtBQUVIOztBQUNELFNBQVM1QixZQUFULENBQXNCNUYsR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxJQUFJd0gsZ0JBQWdCLElBQUl4SCxHQUFsQztBQUNIOztBQUNELFNBQVMwSCxZQUFULENBQXNCOVEsR0FBdEIsRUFBMkIrUSxNQUEzQixFQUFtQztBQUMvQixTQUFPLElBQUl2TixPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVdU4sTUFBVixLQUFtQjtBQUNsQ0QsSUFBQUEsTUFBTSxHQUFHbEIsUUFBUSxDQUFDNUgsYUFBVCxDQUF1QixRQUF2QixDQUFULENBRGtDLENBRWxDO0FBQ0E7QUFDQTs7QUFDQThJLElBQUFBLE1BQU0sQ0FBQ3JNLE1BQVAsR0FBZ0JqQixPQUFoQjs7QUFDQXNOLElBQUFBLE1BQU0sQ0FBQ04sT0FBUCxHQUFpQixNQUFJTyxNQUFNLENBQUNqQyxjQUFjLENBQUMsSUFBSWhNLEtBQUosQ0FBVywwQkFBeUIvQyxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUEzQixDQU5rQyxDQVFsQztBQUNBOzs7QUFDQStRLElBQUFBLE1BQU0sQ0FBQ1IsV0FBUCxHQUFxQjNQLFNBQXJCLENBVmtDLENBV2xDO0FBQ0E7O0FBQ0FtUSxJQUFBQSxNQUFNLENBQUMvUSxHQUFQLEdBQWFBLEdBQWI7QUFDQTZQLElBQUFBLFFBQVEsQ0FBQzdoQixJQUFULENBQWMyaUIsV0FBZCxDQUEwQkksTUFBMUI7QUFDSCxHQWZNLENBQVA7QUFnQkgsRUFDRDtBQUNBOzs7QUFDQSxJQUFJRSxlQUFKLEVBQ0E7O0FBQ0EsU0FBU0MseUJBQVQsQ0FBbUN6ZCxDQUFuQyxFQUFzQzBkLEVBQXRDLEVBQTBDL0gsR0FBMUMsRUFBK0M7QUFDM0MsU0FBTyxJQUFJNUYsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVXVOLE1BQVYsS0FBbUI7QUFDbEMsUUFBSUksU0FBUyxHQUFHLEtBQWhCO0FBQ0EzZCxJQUFBQSxDQUFDLENBQUNrUSxJQUFGLENBQVEwTixDQUFELElBQUs7QUFDUjtBQUNBRCxNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNBM04sTUFBQUEsT0FBTyxDQUFDNE4sQ0FBRCxDQUFQO0FBQ0gsS0FKRCxFQUlHM04sS0FKSCxDQUlTc04sTUFKVCxFQUZrQyxDQU9sQztBQUNBOztBQUNBLGNBQTRDO0FBQ3hDLE9BQUNDLGVBQWUsSUFBSXpOLE9BQU8sQ0FBQ0MsT0FBUixFQUFwQixFQUF1Q0UsSUFBdkMsQ0FBNEMsTUFBSTtBQUM1QyxTQUFDLEdBQUd5TCxvQkFBSixFQUEwQm5CLG1CQUExQixDQUE4QyxNQUFJUyxVQUFVLENBQUMsTUFBSTtBQUN6RCxjQUFJLENBQUMwQyxTQUFMLEVBQWdCO0FBQ1pKLFlBQUFBLE1BQU0sQ0FBQzVILEdBQUQsQ0FBTjtBQUNIO0FBQ0osU0FKdUQsRUFJckQrSCxFQUpxRCxDQUE1RDtBQU1ILE9BUEQ7QUFRSDs7QUFDRCxlQUE0QyxFQU8zQztBQUNKLEdBM0JNLENBQVA7QUE0Qkg7O0FBQ0QsU0FBU2xDLHNCQUFULEdBQWtDO0FBQzlCLE1BQUlkLElBQUksQ0FBQ21ELGdCQUFULEVBQTJCO0FBQ3ZCLFdBQU85TixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IwSyxJQUFJLENBQUNtRCxnQkFBckIsQ0FBUDtBQUNIOztBQUNELFFBQU1DLGVBQWUsR0FBRyxJQUFJL04sT0FBSixDQUFhQyxPQUFELElBQVc7QUFDM0M7QUFDQSxVQUFNNkssRUFBRSxHQUFHSCxJQUFJLENBQUNxRCxtQkFBaEI7O0FBQ0FyRCxJQUFBQSxJQUFJLENBQUNxRCxtQkFBTCxHQUEyQixNQUFJO0FBQzNCL04sTUFBQUEsT0FBTyxDQUFDMEssSUFBSSxDQUFDbUQsZ0JBQU4sQ0FBUDtBQUNBaEQsTUFBQUEsRUFBRSxJQUFJQSxFQUFFLEVBQVI7QUFDSCxLQUhEO0FBSUgsR0FQdUIsQ0FBeEI7QUFRQSxTQUFPNEMseUJBQXlCLENBQUNLLGVBQUQsRUFBa0JsQyxpQkFBbEIsRUFBcUNOLGNBQWMsQ0FBQyxJQUFJaE0sS0FBSixDQUFVLHNDQUFWLENBQUQsQ0FBbkQsQ0FBaEM7QUFDSDs7QUFDRCxTQUFTME8sZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUMxQyxZQUE0QztBQUN4QyxXQUFPbk8sT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQ25CbU8sTUFBQUEsT0FBTyxFQUFFLENBQ0xGLFdBQVcsR0FBRyw0QkFBZCxHQUE2Q0csU0FBUyxDQUFDLENBQUMsR0FBRzFDLHNCQUFKLEVBQTRCelMsT0FBNUIsQ0FBb0NpVixLQUFwQyxFQUEyQyxLQUEzQyxDQUFELENBRGpELENBRFU7QUFJbkI7QUFDQUcsTUFBQUEsR0FBRyxFQUFFO0FBTGMsS0FBaEIsQ0FBUDtBQU9IOztBQUNELFNBQU83QyxzQkFBc0IsR0FBR3RMLElBQXpCLENBQStCb08sUUFBRCxJQUFZO0FBQzdDLFFBQUksRUFBRUosS0FBSyxJQUFJSSxRQUFYLENBQUosRUFBMEI7QUFDdEIsWUFBTWhELGNBQWMsQ0FBQyxJQUFJaE0sS0FBSixDQUFXLDJCQUEwQjRPLEtBQU0sRUFBM0MsQ0FBRCxDQUFwQjtBQUNIOztBQUNELFVBQU1LLFFBQVEsR0FBR0QsUUFBUSxDQUFDSixLQUFELENBQVIsQ0FBZ0J6ZSxHQUFoQixDQUFxQnNjLEtBQUQsSUFBU2tDLFdBQVcsR0FBRyxTQUFkLEdBQTBCRyxTQUFTLENBQUNyQyxLQUFELENBQWhFLENBQWpCO0FBRUEsV0FBTztBQUNIb0MsTUFBQUEsT0FBTyxFQUFFSSxRQUFRLENBQUM1VCxNQUFULENBQWlCNlQsQ0FBRCxJQUFLQSxDQUFDLENBQUNuRSxRQUFGLENBQVcsS0FBWCxDQUFyQixDQUROO0FBR0hnRSxNQUFBQSxHQUFHLEVBQUVFLFFBQVEsQ0FBQzVULE1BQVQsQ0FBaUI2VCxDQUFELElBQUtBLENBQUMsQ0FBQ25FLFFBQUYsQ0FBVyxNQUFYLENBQXJCO0FBSEYsS0FBUDtBQU1ILEdBWk0sQ0FBUDtBQWFIOztBQUNELFNBQVNvQixpQkFBVCxDQUEyQndDLFdBQTNCLEVBQXdDO0FBQ3BDLFFBQU1RLFdBQVcsR0FBRyxJQUFJMVMsR0FBSixFQUFwQjtBQUNBLFFBQU0yUyxhQUFhLEdBQUcsSUFBSTNTLEdBQUosRUFBdEI7QUFDQSxRQUFNNFMsV0FBVyxHQUFHLElBQUk1UyxHQUFKLEVBQXBCO0FBQ0EsUUFBTTZTLE1BQU0sR0FBRyxJQUFJN1MsR0FBSixFQUFmOztBQUNBLFdBQVM4UyxrQkFBVCxDQUE0QnRTLEdBQTVCLEVBQWlDO0FBQzdCLFFBQUkyUCxJQUFJLEdBQUd3QyxhQUFhLENBQUN0UCxHQUFkLENBQWtCN0MsR0FBbEIsQ0FBWDs7QUFDQSxRQUFJMlAsSUFBSixFQUFVO0FBQ04sYUFBT0EsSUFBUDtBQUNILEtBSjRCLENBSzdCOzs7QUFDQSxRQUFJRSxRQUFRLENBQUNTLGFBQVQsQ0FBd0IsZ0JBQWV0USxHQUFJLElBQTNDLENBQUosRUFBcUQ7QUFDakQsYUFBT3dELE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0g7O0FBQ0QwTyxJQUFBQSxhQUFhLENBQUNuSixHQUFkLENBQWtCaEosR0FBbEIsRUFBdUIyUCxJQUFJLEdBQUdtQixZQUFZLENBQUM5USxHQUFELENBQTFDO0FBQ0EsV0FBTzJQLElBQVA7QUFDSDs7QUFDRCxXQUFTNEMsZUFBVCxDQUF5Qi9KLElBQXpCLEVBQStCO0FBQzNCLFFBQUltSCxJQUFJLEdBQUd5QyxXQUFXLENBQUN2UCxHQUFaLENBQWdCMkYsSUFBaEIsQ0FBWDs7QUFDQSxRQUFJbUgsSUFBSixFQUFVO0FBQ04sYUFBT0EsSUFBUDtBQUNIOztBQUNEeUMsSUFBQUEsV0FBVyxDQUFDcEosR0FBWixDQUFnQlIsSUFBaEIsRUFBc0JtSCxJQUFJLEdBQUc2QyxLQUFLLENBQUNoSyxJQUFELENBQUwsQ0FBWTdFLElBQVosQ0FBa0J5TSxHQUFELElBQU87QUFDakQsVUFBSSxDQUFDQSxHQUFHLENBQUNxQyxFQUFULEVBQWE7QUFDVCxjQUFNLElBQUkxUCxLQUFKLENBQVcsOEJBQTZCeUYsSUFBSyxFQUE3QyxDQUFOO0FBQ0g7O0FBQ0QsYUFBTzRILEdBQUcsQ0FBQ3NDLElBQUosR0FBVy9PLElBQVgsQ0FBaUIrTyxJQUFELEtBQVM7QUFDeEJsSyxRQUFBQSxJQUFJLEVBQUVBLElBRGtCO0FBRXhCN1EsUUFBQUEsT0FBTyxFQUFFK2E7QUFGZSxPQUFULENBQWhCLENBQVA7QUFLSCxLQVQ0QixFQVMxQmhQLEtBVDBCLENBU25CMEYsR0FBRCxJQUFPO0FBQ1osWUFBTTJGLGNBQWMsQ0FBQzNGLEdBQUQsQ0FBcEI7QUFDSCxLQVg0QixDQUE3QjtBQVlBLFdBQU91RyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNIZ0QsSUFBQUEsY0FBYyxDQUFFaEIsS0FBRixFQUFTO0FBQ25CLGFBQU9yQyxVQUFVLENBQUNxQyxLQUFELEVBQVFPLFdBQVIsQ0FBakI7QUFDSCxLQUhFOztBQUlIVSxJQUFBQSxZQUFZLENBQUVqQixLQUFGLEVBQVNrQixPQUFULEVBQWtCO0FBQzFCclAsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCb1AsT0FBaEIsRUFBeUJsUCxJQUF6QixDQUErQm1QLEVBQUQsSUFBTUEsRUFBRSxFQUF0QyxFQUNFblAsSUFERixDQUNRbkgsT0FBRCxLQUFZO0FBQ1h1VyxRQUFBQSxTQUFTLEVBQUV2VyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsT0FBbkIsSUFBOEJGLE9BRDlCO0FBRVhBLFFBQUFBLE9BQU8sRUFBRUE7QUFGRSxPQUFaLENBRFAsRUFLRzRNLEdBQUQsS0FBUTtBQUNGclosUUFBQUEsS0FBSyxFQUFFcVo7QUFETCxPQUFSLENBTEYsRUFRRXpGLElBUkYsQ0FRUXFQLEtBQUQsSUFBUztBQUNaLGNBQU1DLEdBQUcsR0FBR2YsV0FBVyxDQUFDclAsR0FBWixDQUFnQjhPLEtBQWhCLENBQVo7QUFDQU8sUUFBQUEsV0FBVyxDQUFDbEosR0FBWixDQUFnQjJJLEtBQWhCLEVBQXVCcUIsS0FBdkI7QUFDQSxZQUFJQyxHQUFHLElBQUksYUFBYUEsR0FBeEIsRUFBNkJBLEdBQUcsQ0FBQ3hQLE9BQUosQ0FBWXVQLEtBQVo7QUFDaEMsT0FaRDtBQWFILEtBbEJFOztBQW1CSEUsSUFBQUEsU0FBUyxDQUFFdkIsS0FBRixFQUFTakksUUFBVCxFQUFtQjtBQUN4QixhQUFPNEYsVUFBVSxDQUFDcUMsS0FBRCxFQUFRVSxNQUFSLEVBQWdCLE1BQUk7QUFDakMsY0FBTWMsaUJBQWlCLEdBQUcxQixnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFjQyxLQUFkLENBQWhCLENBQXFDaE8sSUFBckMsQ0FBMEMsQ0FBQztBQUFFaU8sVUFBQUEsT0FBRjtBQUFZRSxVQUFBQTtBQUFaLFNBQUQsS0FBc0I7QUFDdEYsaUJBQU90TyxPQUFPLENBQUMwQixHQUFSLENBQVksQ0FDZmdOLFdBQVcsQ0FBQ3RNLEdBQVosQ0FBZ0IrTCxLQUFoQixJQUF5QixFQUF6QixHQUE4Qm5PLE9BQU8sQ0FBQzBCLEdBQVIsQ0FBWTBNLE9BQU8sQ0FBQzFlLEdBQVIsQ0FBWW9mLGtCQUFaLENBQVosQ0FEZixFQUVmOU8sT0FBTyxDQUFDMEIsR0FBUixDQUFZNE0sR0FBRyxDQUFDNWUsR0FBSixDQUFRcWYsZUFBUixDQUFaLENBRmUsQ0FBWixDQUFQO0FBSUgsU0FMeUIsRUFLdkI1TyxJQUx1QixDQUtqQnlNLEdBQUQsSUFBTztBQUNYLGlCQUFPLEtBQUt1QyxjQUFMLENBQW9CaEIsS0FBcEIsRUFBMkJoTyxJQUEzQixDQUFpQ3lQLFVBQUQsS0FBZTtBQUM5Q0EsWUFBQUEsVUFEOEM7QUFFOUNDLFlBQUFBLE1BQU0sRUFBRWpELEdBQUcsQ0FBQyxDQUFEO0FBRm1DLFdBQWYsQ0FBaEMsQ0FBUDtBQUtILFNBWHlCLENBQTFCOztBQVlBLGtCQUE0QztBQUN4Q2EsVUFBQUEsZUFBZSxHQUFHLElBQUl6TixPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNyQyxnQkFBSTBQLGlCQUFKLEVBQXVCO0FBQ25CLHFCQUFPQSxpQkFBaUIsQ0FBQ0csT0FBbEIsQ0FBMEIsTUFBSTtBQUNqQzdQLGdCQUFBQSxPQUFPO0FBQ1YsZUFGTSxDQUFQO0FBR0g7QUFDSixXQU5pQixDQUFsQjtBQU9IOztBQUNELGVBQU95Tix5QkFBeUIsQ0FBQ2lDLGlCQUFELEVBQW9COUQsaUJBQXBCLEVBQXVDTixjQUFjLENBQUMsSUFBSWhNLEtBQUosQ0FBVyxtQ0FBa0M0TyxLQUFNLEVBQW5ELENBQUQsQ0FBckQsQ0FBekIsQ0FBdUloTyxJQUF2SSxDQUE0SSxDQUFDO0FBQUV5UCxVQUFBQSxVQUFGO0FBQWVDLFVBQUFBO0FBQWYsU0FBRCxLQUE0QjtBQUMzSyxnQkFBTWpELEdBQUcsR0FBRzlULE1BQU0sQ0FBQzhMLE1BQVAsQ0FBYztBQUN0QmlMLFlBQUFBLE1BQU0sRUFBRUE7QUFEYyxXQUFkLEVBRVRELFVBRlMsQ0FBWjtBQUdBLGlCQUFPLFdBQVdBLFVBQVgsR0FBd0JBLFVBQXhCLEdBQXFDaEQsR0FBNUM7QUFDSCxTQUxNLEVBS0oxTSxLQUxJLENBS0cwRixHQUFELElBQU87QUFDWixjQUFJTSxRQUFKLEVBQWM7QUFDVjtBQUNBLGtCQUFNTixHQUFOO0FBQ0g7O0FBQ0QsaUJBQU87QUFDSHJaLFlBQUFBLEtBQUssRUFBRXFaO0FBREosV0FBUDtBQUdILFNBYk0sQ0FBUDtBQWNILE9BcENnQixDQUFqQjtBQXFDSCxLQXpERTs7QUEwREhNLElBQUFBLFFBQVEsQ0FBRWlJLEtBQUYsRUFBUztBQUNiO0FBQ0E7QUFDQSxVQUFJNEIsRUFBSjs7QUFDQSxVQUFJQSxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsVUFBbkIsRUFBK0I7QUFDM0I7QUFDQSxZQUFJRixFQUFFLENBQUNHLFFBQUgsSUFBZSxLQUFLMUYsSUFBTCxDQUFVdUYsRUFBRSxDQUFDSSxhQUFiLENBQW5CLEVBQWdELE9BQU9uUSxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNuRDs7QUFDRCxhQUFPZ08sZ0JBQWdCLENBQUNDLFdBQUQsRUFBY0MsS0FBZCxDQUFoQixDQUFxQ2hPLElBQXJDLENBQTJDaVEsTUFBRCxJQUFVcFEsT0FBTyxDQUFDMEIsR0FBUixDQUFZZ0wsV0FBVyxHQUFHMEQsTUFBTSxDQUFDaEMsT0FBUCxDQUFlMWUsR0FBZixDQUFvQjZkLE1BQUQsSUFBVVosY0FBYyxDQUFDWSxNQUFELEVBQVMsUUFBVCxDQUEzQyxDQUFILEdBQzFFLEVBRG1ELENBQXBELEVBRUxwTixJQUZLLENBRUEsTUFBSTtBQUNQLFNBQUMsR0FBR3lMLG9CQUFKLEVBQTBCbkIsbUJBQTFCLENBQThDLE1BQUksS0FBS2lGLFNBQUwsQ0FBZXZCLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEJqTyxLQUE1QixDQUFrQyxNQUFJLENBQ25GLENBRDZDLENBQWxEO0FBR0gsT0FOTSxFQU1KQSxLQU5JLEVBTUU7QUFDVCxZQUFJLENBQ0gsQ0FSTSxDQUFQO0FBU0g7O0FBM0VFLEdBQVA7QUE2RUg7Ozs7Ozs7Ozs7O0FDdFJZOztBQUNicEgsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUgsMENBQXlDO0FBQ3JDZ0IsRUFBQUEsVUFBVSxFQUFFLElBRHlCO0FBRXJDdUYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPMEcsT0FBTyxDQUFDN00sT0FBZjtBQUNIO0FBSm9DLENBQXpDO0FBTUFKLDhDQUE2QztBQUN6Q2dCLEVBQUFBLFVBQVUsRUFBRSxJQUQ2QjtBQUV6Q3VGLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT2dSLFdBQVcsQ0FBQ25YLE9BQW5CO0FBQ0g7QUFKd0MsQ0FBN0M7QUFNQUYsaUJBQUEsR0FBb0JzUCxTQUFwQjtBQUNBdFAsb0JBQUEsR0FBdUJzWCxZQUF2QjtBQUNBdFgsZ0NBQUEsR0FBbUN1WCx3QkFBbkM7QUFDQXZYLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJSSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSXlNLE9BQU8sR0FBRzFNLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHlGQUFELENBQVIsQ0FBcEM7O0FBQ0EsSUFBSWtYLGNBQWMsR0FBR2xYLG1CQUFPLENBQUMsa0VBQUQsQ0FBNUI7O0FBQ0EsSUFBSStXLFdBQVcsR0FBR2hYLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBeEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NPLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDSyxVQUFYLEdBQXdCTCxHQUF4QixHQUE4QjtBQUNqQ1YsSUFBQUEsT0FBTyxFQUFFVTtBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU02VyxlQUFlLEdBQUc7QUFDcEJ0SyxFQUFBQSxNQUFNLEVBQUUsSUFEWTtBQUVwQnVLLEVBQUFBLGNBQWMsRUFBRSxFQUZJOztBQUdwQkMsRUFBQUEsS0FBSyxDQUFFN0YsRUFBRixFQUFNO0FBQ1AsUUFBSSxLQUFLM0UsTUFBVCxFQUFpQixPQUFPMkUsRUFBRSxFQUFUOztBQUNqQixlQUFtQyxFQUVsQztBQUNKOztBQVJtQixDQUF4QixFQVVBOztBQUNBLE1BQU04RixpQkFBaUIsR0FBRyxDQUN0QixVQURzQixFQUV0QixPQUZzQixFQUd0QixPQUhzQixFQUl0QixRQUpzQixFQUt0QixZQUxzQixFQU10QixZQU5zQixFQU90QixVQVBzQixFQVF0QixRQVJzQixFQVN0QixTQVRzQixFQVV0QixlQVZzQixFQVd0QixTQVhzQixFQVl0QixXQVpzQixFQWF0QixnQkFic0IsRUFjdEIsZUFkc0IsQ0FBMUI7QUFnQkEsTUFBTUMsWUFBWSxHQUFHLENBQ2pCLGtCQURpQixFQUVqQixxQkFGaUIsRUFHakIscUJBSGlCLEVBSWpCLGtCQUppQixFQUtqQixpQkFMaUIsRUFNakIsb0JBTmlCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDckIsTUFEcUIsRUFFckIsU0FGcUIsRUFHckIsUUFIcUIsRUFJckIsTUFKcUIsRUFLckIsVUFMcUIsRUFNckIsZ0JBTnFCLENBQXpCLEVBUUE7O0FBQ0FoWSxNQUFNLENBQUNDLGNBQVAsQ0FBc0IwWCxlQUF0QixFQUF1QyxRQUF2QyxFQUFpRDtBQUM3Q3BSLEVBQUFBLEdBQUcsR0FBSTtBQUNILFdBQU8wRyxPQUFPLENBQUM3TSxPQUFSLENBQWdCNlgsTUFBdkI7QUFDSDs7QUFINEMsQ0FBakQ7QUFLQUgsaUJBQWlCLENBQUM3VixPQUFsQixDQUEyQmlXLEtBQUQsSUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBbFksRUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCMFgsZUFBdEIsRUFBdUNPLEtBQXZDLEVBQThDO0FBQzFDM1IsSUFBQUEsR0FBRyxHQUFJO0FBQ0gsWUFBTThHLE1BQU0sR0FBRzhLLFNBQVMsRUFBeEI7QUFDQSxhQUFPOUssTUFBTSxDQUFDNkssS0FBRCxDQUFiO0FBQ0g7O0FBSnlDLEdBQTlDO0FBTUgsQ0FYRDtBQVlBRixnQkFBZ0IsQ0FBQy9WLE9BQWpCLENBQTBCaVcsS0FBRCxJQUFTO0FBQzlCUCxFQUFBQSxlQUFlLENBQUNPLEtBQUQsQ0FBZixHQUF5QixDQUFDLEdBQUd2SixJQUFKLEtBQVc7QUFDaEMsVUFBTXRCLE1BQU0sR0FBRzhLLFNBQVMsRUFBeEI7QUFDQSxXQUFPOUssTUFBTSxDQUFDNkssS0FBRCxDQUFOLENBQWMsR0FBR3ZKLElBQWpCLENBQVA7QUFDSCxHQUhEO0FBSUgsQ0FMRDtBQU1Bb0osWUFBWSxDQUFDOVYsT0FBYixDQUFzQjBMLEtBQUQsSUFBUztBQUMxQmdLLEVBQUFBLGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsTUFBSTtBQUN0QjVLLElBQUFBLE9BQU8sQ0FBQzdNLE9BQVIsQ0FBZ0I2WCxNQUFoQixDQUF1QkcsRUFBdkIsQ0FBMEJ6SyxLQUExQixFQUFpQyxDQUFDLEdBQUdnQixJQUFKLEtBQVc7QUFDeEMsWUFBTTBKLFVBQVUsR0FBSSxLQUFJMUssS0FBSyxDQUFDMkssTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBQThCLEdBQUU1SyxLQUFLLENBQUM2SyxTQUFOLENBQWdCLENBQWhCLENBQW1CLEVBQTNFO0FBQ0EsWUFBTUMsZ0JBQWdCLEdBQUdkLGVBQXpCOztBQUNBLFVBQUljLGdCQUFnQixDQUFDSixVQUFELENBQXBCLEVBQWtDO0FBQzlCLFlBQUk7QUFDQUksVUFBQUEsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBRzFKLElBQWhDO0FBQ0gsU0FGRCxDQUVFLE9BQU83QixHQUFQLEVBQVk7QUFDVnRaLFVBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFlLHdDQUF1QzRrQixVQUFXLEVBQWpFO0FBQ0E3a0IsVUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWUsR0FBRXFaLEdBQUcsQ0FBQzRMLE9BQVEsS0FBSTVMLEdBQUcsQ0FBQzZMLEtBQU0sRUFBM0M7QUFDSDtBQUNKO0FBQ0osS0FYRDtBQVlILEdBYkQ7QUFjSCxDQWZEOztBQWdCQSxTQUFTUixTQUFULEdBQXFCO0FBQ2pCLE1BQUksQ0FBQ1IsZUFBZSxDQUFDdEssTUFBckIsRUFBNkI7QUFDekIsVUFBTXFMLE9BQU8sR0FBRyxnQ0FBZ0MscUVBQWhEO0FBQ0EsVUFBTSxJQUFJalMsS0FBSixDQUFVaVMsT0FBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBT2YsZUFBZSxDQUFDdEssTUFBdkI7QUFDSDs7QUFDRCxJQUFJZ0UsUUFBUSxHQUFHc0csZUFBZjtBQUNBelgsZUFBQSxHQUFrQm1SLFFBQWxCOztBQUNBLFNBQVM3QixTQUFULEdBQXFCO0FBQ2pCLFNBQU9sUCxNQUFNLENBQUNGLE9BQVAsQ0FBZXRILFVBQWYsQ0FBMEI0ZSxjQUFjLENBQUNrQixhQUF6QyxDQUFQO0FBQ0g7O0FBQ0QsU0FBU3BCLFlBQVQsQ0FBc0IsR0FBRzdJLElBQXpCLEVBQStCO0FBQzNCZ0osRUFBQUEsZUFBZSxDQUFDdEssTUFBaEIsR0FBeUIsSUFBSUosT0FBTyxDQUFDN00sT0FBWixDQUFvQixHQUFHdU8sSUFBdkIsQ0FBekI7QUFDQWdKLEVBQUFBLGVBQWUsQ0FBQ0MsY0FBaEIsQ0FBK0IzVixPQUEvQixDQUF3QytQLEVBQUQsSUFBTUEsRUFBRSxFQUEvQztBQUVBMkYsRUFBQUEsZUFBZSxDQUFDQyxjQUFoQixHQUFpQyxFQUFqQztBQUNBLFNBQU9ELGVBQWUsQ0FBQ3RLLE1BQXZCO0FBQ0g7O0FBQ0QsU0FBU29LLHdCQUFULENBQWtDcEssTUFBbEMsRUFBMEM7QUFDdEMsUUFBTUgsUUFBUSxHQUFHRyxNQUFqQjtBQUNBLFFBQU13TCxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxNQUFNQyxRQUFYLElBQXVCaEIsaUJBQXZCLEVBQXlDO0FBQ3JDLFFBQUksT0FBTzVLLFFBQVEsQ0FBQzRMLFFBQUQsQ0FBZixLQUE4QixRQUFsQyxFQUE0QztBQUN4Q0QsTUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUI5WSxNQUFNLENBQUM4TCxNQUFQLENBQWNpTixLQUFLLENBQUNDLE9BQU4sQ0FBYzlMLFFBQVEsQ0FBQzRMLFFBQUQsQ0FBdEIsSUFBb0MsRUFBcEMsR0FBeUMsRUFBdkQsRUFDbEI1TCxRQUFRLENBQUM0TCxRQUFELENBRFUsQ0FBckIsQ0FDdUI7QUFEdkI7QUFHQTtBQUNIOztBQUNERCxJQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFxQjVMLFFBQVEsQ0FBQzRMLFFBQUQsQ0FBN0I7QUFDSCxHQVpxQyxDQWF0Qzs7O0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ1osTUFBVCxHQUFrQmhMLE9BQU8sQ0FBQzdNLE9BQVIsQ0FBZ0I2WCxNQUFsQztBQUNBRCxFQUFBQSxnQkFBZ0IsQ0FBQy9WLE9BQWpCLENBQTBCaVcsS0FBRCxJQUFTO0FBQzlCVyxJQUFBQSxRQUFRLENBQUNYLEtBQUQsQ0FBUixHQUFrQixDQUFDLEdBQUd2SixJQUFKLEtBQVc7QUFDekIsYUFBT3pCLFFBQVEsQ0FBQ2dMLEtBQUQsQ0FBUixDQUFnQixHQUFHdkosSUFBbkIsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQUpEO0FBS0EsU0FBT2tLLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUN4Slk7O0FBQ2I3WSw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCx1QkFBQSxHQUEwQitKLGVBQTFCOztBQUNBLElBQUkzSixNQUFNLEdBQUdFLG1CQUFPLENBQUMsb0JBQUQsQ0FBcEI7O0FBQ0EsSUFBSXNTLG9CQUFvQixHQUFHdFMsbUJBQU8sQ0FBQyx5RkFBRCxDQUFsQzs7QUFDQSxNQUFNeVksdUJBQXVCLEdBQUcsT0FBT0Msb0JBQVAsS0FBZ0MsV0FBaEU7O0FBQ0EsU0FBU2pQLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUEsVUFBRjtBQUFlQyxFQUFBQTtBQUFmLENBQXpCLEVBQXFEO0FBQ2pELFFBQU1nUCxVQUFVLEdBQUdoUCxRQUFRLElBQUksQ0FBQzhPLHVCQUFoQztBQUNBLFFBQU1HLFNBQVMsR0FBRyxDQUFDLEdBQUc5WSxNQUFKLEVBQVlnUCxNQUFaLEVBQWxCO0FBQ0EsUUFBTSxDQUFDK0osT0FBRCxFQUFVQyxVQUFWLElBQXdCLENBQUMsR0FBR2haLE1BQUosRUFBWWlaLFFBQVosQ0FBcUIsS0FBckIsQ0FBOUI7QUFDQSxRQUFNeFAsTUFBTSxHQUFHLENBQUMsR0FBR3pKLE1BQUosRUFBWTRQLFdBQVosQ0FBeUJDLEVBQUQsSUFBTTtBQUN6QyxRQUFJaUosU0FBUyxDQUFDN0osT0FBZCxFQUF1QjtBQUNuQjZKLE1BQUFBLFNBQVMsQ0FBQzdKLE9BQVY7QUFDQTZKLE1BQUFBLFNBQVMsQ0FBQzdKLE9BQVYsR0FBb0J2TSxTQUFwQjtBQUNIOztBQUNELFFBQUltVyxVQUFVLElBQUlFLE9BQWxCLEVBQTJCOztBQUMzQixRQUFJbEosRUFBRSxJQUFJQSxFQUFFLENBQUNxSixPQUFiLEVBQXNCO0FBQ2xCSixNQUFBQSxTQUFTLENBQUM3SixPQUFWLEdBQW9Ca0ssT0FBTyxDQUFDdEosRUFBRCxFQUFNL0YsU0FBRCxJQUFhQSxTQUFTLElBQUlrUCxVQUFVLENBQUNsUCxTQUFELENBQXpDLEVBQ3pCO0FBQ0VGLFFBQUFBO0FBREYsT0FEeUIsQ0FBM0I7QUFJSDtBQUNKLEdBWmMsRUFZWixDQUNDaVAsVUFERCxFQUVDalAsVUFGRCxFQUdDbVAsT0FIRCxDQVpZLENBQWY7QUFpQkEsR0FBQyxHQUFHL1ksTUFBSixFQUFZOFAsU0FBWixDQUFzQixNQUFJO0FBQ3RCLFFBQUksQ0FBQzZJLHVCQUFMLEVBQThCO0FBQzFCLFVBQUksQ0FBQ0ksT0FBTCxFQUFjO0FBQ1YsY0FBTUssWUFBWSxHQUFHLENBQUMsR0FBRzVHLG9CQUFKLEVBQTBCbkIsbUJBQTFCLENBQThDLE1BQUkySCxVQUFVLENBQUMsSUFBRCxDQUE1RCxDQUFyQjtBQUVBLGVBQU8sTUFBSSxDQUFDLEdBQUd4RyxvQkFBSixFQUEwQmxCLGtCQUExQixDQUE2QzhILFlBQTdDLENBQVg7QUFFSDtBQUNKO0FBQ0osR0FURCxFQVNHLENBQ0NMLE9BREQsQ0FUSDtBQVlBLFNBQU8sQ0FDSHRQLE1BREcsRUFFSHNQLE9BRkcsQ0FBUDtBQUlIOztBQUNELFNBQVNJLE9BQVQsQ0FBaUJFLE9BQWpCLEVBQTBCQyxRQUExQixFQUFvQ3RNLE9BQXBDLEVBQTZDO0FBQ3pDLFFBQU07QUFBRXpXLElBQUFBLEVBQUY7QUFBT2dqQixJQUFBQSxRQUFQO0FBQWtCQyxJQUFBQTtBQUFsQixNQUFnQ0MsY0FBYyxDQUFDek0sT0FBRCxDQUFwRDtBQUNBd00sRUFBQUEsUUFBUSxDQUFDcE4sR0FBVCxDQUFhaU4sT0FBYixFQUFzQkMsUUFBdEI7QUFDQUMsRUFBQUEsUUFBUSxDQUFDSixPQUFULENBQWlCRSxPQUFqQjtBQUNBLFNBQU8sU0FBU1AsU0FBVCxHQUFxQjtBQUN4QlUsSUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCTCxPQUFoQjtBQUNBRSxJQUFBQSxRQUFRLENBQUNULFNBQVQsQ0FBbUJPLE9BQW5CLEVBRndCLENBR3hCOztBQUNBLFFBQUlHLFFBQVEsQ0FBQ0csSUFBVCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkosTUFBQUEsUUFBUSxDQUFDSyxVQUFUO0FBQ0FDLE1BQUFBLFNBQVMsQ0FBQ0gsTUFBVixDQUFpQm5qQixFQUFqQjtBQUNIO0FBQ0osR0FSRDtBQVNIOztBQUNELE1BQU1zakIsU0FBUyxHQUFHLElBQUlqWCxHQUFKLEVBQWxCOztBQUNBLFNBQVM2VyxjQUFULENBQXdCek0sT0FBeEIsRUFBaUM7QUFDN0IsUUFBTXpXLEVBQUUsR0FBR3lXLE9BQU8sQ0FBQ3BELFVBQVIsSUFBc0IsRUFBakM7QUFDQSxNQUFJMk8sUUFBUSxHQUFHc0IsU0FBUyxDQUFDNVQsR0FBVixDQUFjMVAsRUFBZCxDQUFmOztBQUNBLE1BQUlnaUIsUUFBSixFQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNIOztBQUNELFFBQU1pQixRQUFRLEdBQUcsSUFBSTVXLEdBQUosRUFBakI7QUFDQSxRQUFNMlcsUUFBUSxHQUFHLElBQUlYLG9CQUFKLENBQTBCa0IsT0FBRCxJQUFXO0FBQ2pEQSxJQUFBQSxPQUFPLENBQUNuWSxPQUFSLENBQWlCaVIsS0FBRCxJQUFTO0FBQ3JCLFlBQU0wRyxRQUFRLEdBQUdFLFFBQVEsQ0FBQ3ZULEdBQVQsQ0FBYTJNLEtBQUssQ0FBQzdSLE1BQW5CLENBQWpCO0FBQ0EsWUFBTStJLFNBQVMsR0FBRzhJLEtBQUssQ0FBQ21ILGNBQU4sSUFBd0JuSCxLQUFLLENBQUNvSCxpQkFBTixHQUEwQixDQUFwRTs7QUFDQSxVQUFJVixRQUFRLElBQUl4UCxTQUFoQixFQUEyQjtBQUN2QndQLFFBQUFBLFFBQVEsQ0FBQ3hQLFNBQUQsQ0FBUjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBUmdCLEVBUWRrRCxPQVJjLENBQWpCO0FBU0E2TSxFQUFBQSxTQUFTLENBQUN6TixHQUFWLENBQWM3VixFQUFkLEVBQWtCZ2lCLFFBQVEsR0FBRztBQUN6QmhpQixJQUFBQSxFQUR5QjtBQUV6QmdqQixJQUFBQSxRQUZ5QjtBQUd6QkMsSUFBQUE7QUFIeUIsR0FBN0I7QUFLQSxTQUFPakIsUUFBUDtBQUNIOzs7Ozs7Ozs7OztBQ25GWTs7QUFDYjdZLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGVBQUEsR0FBa0JxYSxVQUFsQjs7QUFDQSxJQUFJamEsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUl5TSxPQUFPLEdBQUd6TSxtQkFBTyxDQUFDLDJEQUFELENBQXJCOztBQUNBLFNBQVNELHNCQUFULENBQWdDTyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ssVUFBWCxHQUF3QkwsR0FBeEIsR0FBOEI7QUFDakNWLElBQUFBLE9BQU8sRUFBRVU7QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxTQUFTeVosVUFBVCxDQUFvQkMsaUJBQXBCLEVBQXVDO0FBQ25DLFdBQVNDLGlCQUFULENBQTJCaGIsS0FBM0IsRUFBa0M7QUFDOUIsV0FBTyxhQUFjYSxNQUFNLENBQUNGLE9BQVAsQ0FBZXVMLGFBQWYsQ0FBNkI2TyxpQkFBN0IsRUFBZ0R4YSxNQUFNLENBQUM4TCxNQUFQLENBQWM7QUFDL0V1QixNQUFBQSxNQUFNLEVBQUUsQ0FBQyxHQUFHSixPQUFKLEVBQWF1QyxTQUFiO0FBRHVFLEtBQWQsRUFFbEUvUCxLQUZrRSxDQUFoRCxDQUFyQjtBQUdIOztBQUNEZ2IsRUFBQUEsaUJBQWlCLENBQUNDLGVBQWxCLEdBQW9DRixpQkFBaUIsQ0FBQ0UsZUFBdEQ7QUFDQUQsRUFBQUEsaUJBQWlCLENBQUNFLG1CQUFsQixHQUF3Q0gsaUJBQWlCLENBQUNHLG1CQUExRDs7QUFDQSxZQUEyQztBQUN2QyxVQUFNam9CLElBQUksR0FBRzhuQixpQkFBaUIsQ0FBQ0ksV0FBbEIsSUFBaUNKLGlCQUFpQixDQUFDOW5CLElBQW5ELElBQTJELFNBQXhFO0FBQ0ErbkIsSUFBQUEsaUJBQWlCLENBQUNHLFdBQWxCLEdBQWlDLGNBQWFsb0IsSUFBSyxHQUFuRDtBQUNIOztBQUNELFNBQU8rbkIsaUJBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUN6Qlk7O0FBQ2J6YSw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCx1QkFBQSxHQUEwQjRRLGVBQTFCO0FBQ0E1USxpQkFBQSxHQUFvQmdSLFNBQXBCO0FBQ0FoUixpQkFBQSxHQUFvQjJhLFNBQXBCO0FBQ0EzYSxtQkFBQSxHQUFzQjRhLFdBQXRCO0FBQ0E1YSxtQkFBQSxHQUFzQitRLFdBQXRCO0FBQ0EvUSxtQkFBQSxHQUFzQjZhLFdBQXRCO0FBQ0E3YSxrQkFBQSxHQUFxQnFOLFVBQXJCO0FBQ0FyTixxQkFBQSxHQUF3QjhhLGFBQXhCO0FBQ0E5YSxtQkFBQSxHQUFzQjBQLFdBQXRCO0FBQ0ExUCxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSSthLHVCQUF1QixHQUFHemEsbUJBQU8sQ0FBQyw2R0FBRCxDQUFyQzs7QUFDQSxJQUFJMGEsWUFBWSxHQUFHMWEsbUJBQU8sQ0FBQyxxRkFBRCxDQUExQjs7QUFDQSxJQUFJMmEsb0JBQW9CLEdBQUczYSxtQkFBTyxDQUFDLG9GQUFELENBQWxDOztBQUNBLElBQUk0YSxvQkFBb0IsR0FBRzVhLG1CQUFPLENBQUMsb0VBQUQsQ0FBbEM7O0FBQ0EsSUFBSTZhLEtBQUssR0FBRzlhLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHdCQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSThhLE1BQU0sR0FBRzlhLG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0FBQ0EsSUFBSSthLFVBQVUsR0FBRy9hLG1CQUFPLENBQUMsOENBQUQsQ0FBeEI7O0FBQ0EsSUFBSWdiLGlCQUFpQixHQUFHaGIsbUJBQU8sQ0FBQyw4REFBRCxDQUEvQjs7QUFDQSxJQUFJaWIsWUFBWSxHQUFHamIsbUJBQU8sQ0FBQyxnREFBRCxDQUExQjs7QUFDQSxJQUFJa2IsZ0JBQWdCLEdBQUduYixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFSLENBQTdDOztBQUNBLElBQUltYixhQUFhLEdBQUduYixtQkFBTyxDQUFDLG9EQUFELENBQTNCOztBQUNBLElBQUlvYixXQUFXLEdBQUdwYixtQkFBTyxDQUFDLGdEQUFELENBQXpCOztBQUNBLFNBQVNELHNCQUFULENBQWdDTyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ssVUFBWCxHQUF3QkwsR0FBeEIsR0FBOEI7QUFDakNWLElBQUFBLE9BQU8sRUFBRVU7QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxJQUFJK2Esa0JBQUo7O0FBQ0EsSUFBSXZYLEtBQUosRUFBcUMsRUFFcEM7O0FBQ0QsTUFBTXlYLFFBQVEsR0FBR3pYLE1BQUEsSUFBc0MsRUFBdkQ7O0FBQ0EsU0FBUzJYLHNCQUFULEdBQWtDO0FBQzlCLFNBQU9qYyxNQUFNLENBQUM4TCxNQUFQLENBQWMsSUFBSXJGLEtBQUosQ0FBVSxpQkFBVixDQUFkLEVBQTRDO0FBQy9DcU8sSUFBQUEsU0FBUyxFQUFFO0FBRG9DLEdBQTVDLENBQVA7QUFHSDs7QUFDRCxTQUFTb0gsYUFBVCxDQUF1QmhZLElBQXZCLEVBQTZCaVksTUFBN0IsRUFBcUM7QUFDakMsU0FBT0EsTUFBTSxJQUFJalksSUFBSSxDQUFDOEMsVUFBTCxDQUFnQixHQUFoQixDQUFWLEdBQWlDOUMsSUFBSSxLQUFLLEdBQVQsR0FBZSxDQUFDLEdBQUcrVyx1QkFBSixFQUE2QjFKLDBCQUE3QixDQUF3RDRLLE1BQXhELENBQWYsR0FBa0YsR0FBRUEsTUFBTyxHQUFFQyxlQUFlLENBQUNsWSxJQUFELENBQWYsS0FBMEIsR0FBMUIsR0FBZ0NBLElBQUksQ0FBQ3NVLFNBQUwsQ0FBZSxDQUFmLENBQWhDLEdBQW9EdFUsSUFBSyxFQUF2TCxHQUEyTEEsSUFBbE07QUFDSDs7QUFDRCxTQUFTNE0sZUFBVCxDQUF5QjVNLElBQXpCLEVBQStCdUosTUFBL0IsRUFBdUNzRCxPQUF2QyxFQUFnREMsYUFBaEQsRUFBK0Q7QUFDM0QsTUFBSTFNLEtBQUosRUFBcUMsRUFBckMsTUFPTztBQUNILFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBUzRNLFNBQVQsQ0FBbUJoTixJQUFuQixFQUF5QnVKLE1BQXpCLEVBQWlDMEQsYUFBakMsRUFBZ0Q7QUFDNUMsTUFBSTdNLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0osSUFBUDtBQUNIOztBQUNELFNBQVMyVyxTQUFULENBQW1CM1csSUFBbkIsRUFBeUJ1SixNQUF6QixFQUFpQztBQUM3QixNQUFJbkosS0FBSixFQUFxQyxFQUtwQzs7QUFDRCxTQUFPSixJQUFQO0FBQ0g7O0FBQ0QsU0FBU2tZLGVBQVQsQ0FBeUJsWSxJQUF6QixFQUErQjtBQUMzQixRQUFNNlksVUFBVSxHQUFHN1ksSUFBSSxDQUFDNUIsT0FBTCxDQUFhLEdBQWIsQ0FBbkI7QUFDQSxRQUFNMGEsU0FBUyxHQUFHOVksSUFBSSxDQUFDNUIsT0FBTCxDQUFhLEdBQWIsQ0FBbEI7O0FBQ0EsTUFBSXlhLFVBQVUsR0FBRyxDQUFDLENBQWQsSUFBbUJDLFNBQVMsR0FBRyxDQUFDLENBQXBDLEVBQXVDO0FBQ25DOVksSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNzVSxTQUFMLENBQWUsQ0FBZixFQUFrQnVFLFVBQVUsR0FBRyxDQUFDLENBQWQsR0FBa0JBLFVBQWxCLEdBQStCQyxTQUFqRCxDQUFQO0FBQ0g7O0FBQ0QsU0FBTzlZLElBQVA7QUFDSDs7QUFDRCxTQUFTNFcsV0FBVCxDQUFxQjVXLElBQXJCLEVBQTJCO0FBQ3ZCQSxFQUFBQSxJQUFJLEdBQUdrWSxlQUFlLENBQUNsWSxJQUFELENBQXRCO0FBQ0EsU0FBT0EsSUFBSSxLQUFLNlgsUUFBVCxJQUFxQjdYLElBQUksQ0FBQzhDLFVBQUwsQ0FBZ0IrVSxRQUFRLEdBQUcsR0FBM0IsQ0FBNUI7QUFDSDs7QUFDRCxTQUFTOUssV0FBVCxDQUFxQi9NLElBQXJCLEVBQTJCO0FBQ3ZCO0FBQ0EsU0FBT2dZLGFBQWEsQ0FBQ2hZLElBQUQsRUFBTzZYLFFBQVAsQ0FBcEI7QUFDSDs7QUFDRCxTQUFTaEIsV0FBVCxDQUFxQjdXLElBQXJCLEVBQTJCO0FBQ3ZCQSxFQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ29JLEtBQUwsQ0FBV3lQLFFBQVEsQ0FBQ3ZhLE1BQXBCLENBQVA7QUFDQSxNQUFJLENBQUMwQyxJQUFJLENBQUM4QyxVQUFMLENBQWdCLEdBQWhCLENBQUwsRUFBMkI5QyxJQUFJLEdBQUksSUFBR0EsSUFBSyxFQUFoQjtBQUMzQixTQUFPQSxJQUFQO0FBQ0g7O0FBQ0QsU0FBU3FKLFVBQVQsQ0FBb0I3WixHQUFwQixFQUF5QjtBQUNyQjtBQUNBLE1BQUlBLEdBQUcsQ0FBQ3NULFVBQUosQ0FBZSxHQUFmLEtBQXVCdFQsR0FBRyxDQUFDc1QsVUFBSixDQUFlLEdBQWYsQ0FBdkIsSUFBOEN0VCxHQUFHLENBQUNzVCxVQUFKLENBQWUsR0FBZixDQUFsRCxFQUF1RSxPQUFPLElBQVA7O0FBQ3ZFLE1BQUk7QUFDQTtBQUNBLFVBQU1pVyxjQUFjLEdBQUcsQ0FBQyxHQUFHM0IsTUFBSixFQUFZNEIsaUJBQVosRUFBdkI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsSUFBSTVRLEdBQUosQ0FBUTdZLEdBQVIsRUFBYXVwQixjQUFiLENBQWpCO0FBQ0EsV0FBT0UsUUFBUSxDQUFDQyxNQUFULEtBQW9CSCxjQUFwQixJQUFzQ25DLFdBQVcsQ0FBQ3FDLFFBQVEsQ0FBQ1QsUUFBVixDQUF4RDtBQUNILEdBTEQsQ0FLRSxPQUFPMU4sQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFTZ00sYUFBVCxDQUF1QjNGLEtBQXZCLEVBQThCZ0ksVUFBOUIsRUFBMENDLEtBQTFDLEVBQWlEO0FBQzdDLE1BQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBRzVCLFdBQUosRUFBaUI2QixhQUFqQixDQUErQnBJLEtBQS9CLENBQXJCO0FBQ0EsUUFBTXFJLGFBQWEsR0FBR0YsWUFBWSxDQUFDRyxNQUFuQztBQUNBLFFBQU1DLGNBQWMsR0FBRztBQUN2QixHQUFDUCxVQUFVLEtBQUtoSSxLQUFmLEdBQXVCLENBQUMsR0FBR3NHLGFBQUosRUFBbUJrQyxlQUFuQixDQUFtQ0wsWUFBbkMsRUFBaURILFVBQWpELENBQXZCLEdBQXNGLEVBQXZGLEtBQThGO0FBQzlGO0FBQ0FDLEVBQUFBLEtBSEE7QUFJQUMsRUFBQUEsaUJBQWlCLEdBQUdsSSxLQUFwQjtBQUNBLFFBQU03SSxNQUFNLEdBQUd4TSxNQUFNLENBQUMyQixJQUFQLENBQVkrYixhQUFaLENBQWY7O0FBQ0EsTUFBSSxDQUFDbFIsTUFBTSxDQUFDc1IsS0FBUCxDQUFjQyxLQUFELElBQVM7QUFDdkIsUUFBSTVkLEtBQUssR0FBR3lkLGNBQWMsQ0FBQ0csS0FBRCxDQUFkLElBQXlCLEVBQXJDO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxNQUFGO0FBQVdDLE1BQUFBO0FBQVgsUUFBeUJQLGFBQWEsQ0FBQ0ssS0FBRCxDQUE1QyxDQUZ1QixDQUd2QjtBQUNBOztBQUNBLFFBQUlHLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUQsS0FBTSxHQUEvQzs7QUFDQSxRQUFJRSxRQUFKLEVBQWM7QUFDVkMsTUFBQUEsUUFBUSxHQUFJLEdBQUUsQ0FBQy9kLEtBQUQsR0FBUyxHQUFULEdBQWUsRUFBRyxJQUFHK2QsUUFBUyxHQUE1QztBQUNIOztBQUNELFFBQUlGLE1BQU0sSUFBSSxDQUFDakYsS0FBSyxDQUFDQyxPQUFOLENBQWM3WSxLQUFkLENBQWYsRUFBcUNBLEtBQUssR0FBRyxDQUN6Q0EsS0FEeUMsQ0FBUjtBQUdyQyxXQUFPLENBQUM4ZCxRQUFRLElBQUlGLEtBQUssSUFBSUgsY0FBdEIsTUFDTkwsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDbFAsT0FBbEIsQ0FBMEI2UCxRQUExQixFQUFvQ0YsTUFBTSxHQUFHN2QsS0FBSyxDQUFDdkosR0FBTixFQUFVO0FBQzVFO0FBQ0E7QUFDQTtBQUNDdW5CLElBQUFBLE9BQUQsSUFBV25SLGtCQUFrQixDQUFDbVIsT0FBRCxDQUpxQyxFQUtoRWpZLElBTGdFLENBSzNELEdBTDJELENBQUgsR0FLakQ4RyxrQkFBa0IsQ0FBQzdNLEtBQUQsQ0FMWCxLQUt1QixHQU5yQyxDQUFQO0FBT0gsR0FuQkksQ0FBTCxFQW1CSTtBQUNBb2QsSUFBQUEsaUJBQWlCLEdBQUcsRUFBcEIsQ0FBdUI7QUFBdkIsS0FEQSxDQUdKO0FBQ0E7QUFDQzs7QUFDRCxTQUFPO0FBQ0gvUSxJQUFBQSxNQURHO0FBRUg0UixJQUFBQSxNQUFNLEVBQUViO0FBRkwsR0FBUDtBQUlIOztBQUNELFNBQVNjLGtCQUFULENBQTRCZixLQUE1QixFQUFtQzlRLE1BQW5DLEVBQTJDO0FBQ3ZDLFFBQU04UixhQUFhLEdBQUcsRUFBdEI7QUFFQXRlLEVBQUFBLE1BQU0sQ0FBQzJCLElBQVAsQ0FBWTJiLEtBQVosRUFBbUJyYixPQUFuQixDQUE0QmxCLEdBQUQsSUFBTztBQUM5QixRQUFJLENBQUN5TCxNQUFNLENBQUNqRCxRQUFQLENBQWdCeEksR0FBaEIsQ0FBTCxFQUEyQjtBQUN2QnVkLE1BQUFBLGFBQWEsQ0FBQ3ZkLEdBQUQsQ0FBYixHQUFxQnVjLEtBQUssQ0FBQ3ZjLEdBQUQsQ0FBMUI7QUFDSDtBQUNKLEdBSkQ7QUFLQSxTQUFPdWQsYUFBUDtBQUNIOztBQUNELFNBQVMxTyxXQUFULENBQXFCdkMsTUFBckIsRUFBNkJuQixJQUE3QixFQUFtQ3FTLFNBQW5DLEVBQThDO0FBQzFDO0FBQ0EsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxPQUFPdlMsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBM0IsR0FBa0MsQ0FBQyxHQUFHb1AsTUFBSixFQUFZb0Qsb0JBQVosQ0FBaUN4UyxJQUFqQyxDQUFwRCxDQUgwQyxDQUkxQztBQUNBOztBQUNBLFFBQU15UyxhQUFhLEdBQUdGLFdBQVcsQ0FBQ3ZaLEtBQVosQ0FBa0Isb0JBQWxCLENBQXRCO0FBQ0EsUUFBTTBaLGtCQUFrQixHQUFHRCxhQUFhLEdBQUdGLFdBQVcsQ0FBQzNCLE1BQVosQ0FBbUI2QixhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCbmQsTUFBcEMsQ0FBSCxHQUFpRGlkLFdBQXpGO0FBQ0EsUUFBTUksUUFBUSxHQUFHRCxrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUIsR0FBekIsQ0FBakI7O0FBQ0EsTUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWUsRUFBaEIsRUFBb0IzWixLQUFwQixDQUEwQixXQUExQixDQUFKLEVBQTRDO0FBQ3hDMVIsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWUsdUNBQXNDZ3JCLFdBQVksNkVBQWpFO0FBQ0EsVUFBTU0sYUFBYSxHQUFHLENBQUMsR0FBR3pELE1BQUosRUFBWTBELHdCQUFaLENBQXFDSixrQkFBckMsQ0FBdEI7QUFDQUgsSUFBQUEsV0FBVyxHQUFHLENBQUNFLGFBQWEsR0FBR0EsYUFBYSxDQUFDLENBQUQsQ0FBaEIsR0FBc0IsRUFBcEMsSUFBMENJLGFBQXhEO0FBQ0gsR0FieUMsQ0FjMUM7OztBQUNBLE1BQUksQ0FBQ3hSLFVBQVUsQ0FBQ2tSLFdBQUQsQ0FBZixFQUE4QjtBQUMxQixXQUFPRixTQUFTLEdBQUcsQ0FDZkUsV0FEZSxDQUFILEdBRVpBLFdBRko7QUFHSDs7QUFDRCxNQUFJO0FBQ0FELElBQUFBLElBQUksR0FBRyxJQUFJalMsR0FBSixDQUFRa1MsV0FBVyxDQUFDelgsVUFBWixDQUF1QixHQUF2QixJQUE4QnFHLE1BQU0sQ0FBQzRSLE1BQXJDLEdBQThDNVIsTUFBTSxDQUFDcVAsUUFBN0QsRUFBdUUsVUFBdkUsQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPMU4sQ0FBUCxFQUFVO0FBQ1I7QUFDQXdQLElBQUFBLElBQUksR0FBRyxJQUFJalMsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFiLENBQVA7QUFDSDs7QUFDRCxNQUFJO0FBQ0EsVUFBTTJTLFFBQVEsR0FBRyxJQUFJM1MsR0FBSixDQUFRa1MsV0FBUixFQUFxQkQsSUFBckIsQ0FBakI7QUFDQVUsSUFBQUEsUUFBUSxDQUFDeEMsUUFBVCxHQUFvQixDQUFDLEdBQUd6Qix1QkFBSixFQUE2QjFKLDBCQUE3QixDQUF3RDJOLFFBQVEsQ0FBQ3hDLFFBQWpFLENBQXBCO0FBQ0EsUUFBSXlDLGNBQWMsR0FBRyxFQUFyQjs7QUFDQSxRQUFJLENBQUMsR0FBRzVELFVBQUosRUFBZ0I2RCxjQUFoQixDQUErQkYsUUFBUSxDQUFDeEMsUUFBeEMsS0FBcUR3QyxRQUFRLENBQUN6UyxZQUE5RCxJQUE4RThSLFNBQWxGLEVBQTZGO0FBQ3pGLFlBQU1qQixLQUFLLEdBQUcsQ0FBQyxHQUFHN0IsWUFBSixFQUFrQjRELHNCQUFsQixDQUF5Q0gsUUFBUSxDQUFDelMsWUFBbEQsQ0FBZDtBQUNBLFlBQU07QUFBRTJSLFFBQUFBLE1BQUY7QUFBVzVSLFFBQUFBO0FBQVgsVUFBdUJ3TyxhQUFhLENBQUNrRSxRQUFRLENBQUN4QyxRQUFWLEVBQW9Cd0MsUUFBUSxDQUFDeEMsUUFBN0IsRUFBdUNZLEtBQXZDLENBQTFDOztBQUNBLFVBQUljLE1BQUosRUFBWTtBQUNSZSxRQUFBQSxjQUFjLEdBQUcsQ0FBQyxHQUFHN0QsTUFBSixFQUFZb0Qsb0JBQVosQ0FBaUM7QUFDOUNoQyxVQUFBQSxRQUFRLEVBQUUwQixNQURvQztBQUU5Q2tCLFVBQUFBLElBQUksRUFBRUosUUFBUSxDQUFDSSxJQUYrQjtBQUc5Q2hDLFVBQUFBLEtBQUssRUFBRWUsa0JBQWtCLENBQUNmLEtBQUQsRUFBUTlRLE1BQVI7QUFIcUIsU0FBakMsQ0FBakI7QUFLSDtBQUNKLEtBZEQsQ0FlQTs7O0FBQ0EsVUFBTWtELFlBQVksR0FBR3dQLFFBQVEsQ0FBQzlCLE1BQVQsS0FBb0JvQixJQUFJLENBQUNwQixNQUF6QixHQUFrQzhCLFFBQVEsQ0FBQ2hULElBQVQsQ0FBY0ksS0FBZCxDQUFvQjRTLFFBQVEsQ0FBQzlCLE1BQVQsQ0FBZ0I1YixNQUFwQyxDQUFsQyxHQUFnRjBkLFFBQVEsQ0FBQ2hULElBQTlHO0FBQ0EsV0FBT3FTLFNBQVMsR0FBRyxDQUNmN08sWUFEZSxFQUVmeVAsY0FBYyxJQUFJelAsWUFGSCxDQUFILEdBR1pBLFlBSEo7QUFJSCxHQXJCRCxDQXFCRSxPQUFPVixDQUFQLEVBQVU7QUFDUixXQUFPdVAsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7QUFDSjs7QUFDRCxTQUFTYyxXQUFULENBQXFCN3JCLEdBQXJCLEVBQTBCO0FBQ3RCLFFBQU0wcEIsTUFBTSxHQUFHLENBQUMsR0FBRzlCLE1BQUosRUFBWTRCLGlCQUFaLEVBQWY7QUFDQSxTQUFPeHBCLEdBQUcsQ0FBQ3NULFVBQUosQ0FBZW9XLE1BQWYsSUFBeUIxcEIsR0FBRyxDQUFDOGtCLFNBQUosQ0FBYzRFLE1BQU0sQ0FBQzViLE1BQXJCLENBQXpCLEdBQXdEOU4sR0FBL0Q7QUFDSDs7QUFDRCxTQUFTOHJCLFlBQVQsQ0FBc0JuUyxNQUF0QixFQUE4QjNaLEdBQTlCLEVBQW1DdVksRUFBbkMsRUFBdUM7QUFDbkM7QUFDQTtBQUNBLE1BQUksQ0FBQ3lELFlBQUQsRUFBZUMsVUFBZixJQUE2QkMsV0FBVyxDQUFDdkMsTUFBRCxFQUFTM1osR0FBVCxFQUFjLElBQWQsQ0FBNUM7QUFDQSxRQUFNMHBCLE1BQU0sR0FBRyxDQUFDLEdBQUc5QixNQUFKLEVBQVk0QixpQkFBWixFQUFmO0FBQ0EsUUFBTXVDLGFBQWEsR0FBRy9QLFlBQVksQ0FBQzFJLFVBQWIsQ0FBd0JvVyxNQUF4QixDQUF0QjtBQUNBLFFBQU1zQyxXQUFXLEdBQUcvUCxVQUFVLElBQUlBLFVBQVUsQ0FBQzNJLFVBQVgsQ0FBc0JvVyxNQUF0QixDQUFsQztBQUNBMU4sRUFBQUEsWUFBWSxHQUFHNlAsV0FBVyxDQUFDN1AsWUFBRCxDQUExQjtBQUNBQyxFQUFBQSxVQUFVLEdBQUdBLFVBQVUsR0FBRzRQLFdBQVcsQ0FBQzVQLFVBQUQsQ0FBZCxHQUE2QkEsVUFBcEQ7QUFDQSxRQUFNZ1EsV0FBVyxHQUFHRixhQUFhLEdBQUcvUCxZQUFILEdBQWtCdUIsV0FBVyxDQUFDdkIsWUFBRCxDQUE5RDtBQUNBLFFBQU1rUSxVQUFVLEdBQUczVCxFQUFFLEdBQUdzVCxXQUFXLENBQUMzUCxXQUFXLENBQUN2QyxNQUFELEVBQVNwQixFQUFULENBQVosQ0FBZCxHQUEwQzBELFVBQVUsSUFBSUQsWUFBN0U7QUFDQSxTQUFPO0FBQ0hoYyxJQUFBQSxHQUFHLEVBQUVpc0IsV0FERjtBQUVIMVQsSUFBQUEsRUFBRSxFQUFFeVQsV0FBVyxHQUFHRSxVQUFILEdBQWdCM08sV0FBVyxDQUFDMk8sVUFBRDtBQUZ2QyxHQUFQO0FBSUg7O0FBQ0QsU0FBU0MsbUJBQVQsQ0FBNkJuRCxRQUE3QixFQUF1Q29ELEtBQXZDLEVBQThDO0FBQzFDLFFBQU1DLGFBQWEsR0FBRyxDQUFDLEdBQUc5RSx1QkFBSixFQUE2QjNKLHVCQUE3QixDQUFxRCxDQUFDLEdBQUc2SixvQkFBSixFQUEwQjZFLG1CQUExQixDQUE4Q3RELFFBQTlDLENBQXJELENBQXRCOztBQUNBLE1BQUlxRCxhQUFhLEtBQUssTUFBbEIsSUFBNEJBLGFBQWEsS0FBSyxTQUFsRCxFQUE2RDtBQUN6RCxXQUFPckQsUUFBUDtBQUNILEdBSnlDLENBSzFDOzs7QUFDQSxNQUFJLENBQUNvRCxLQUFLLENBQUN2VyxRQUFOLENBQWV3VyxhQUFmLENBQUwsRUFBb0M7QUFDaEM7QUFDQUQsSUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVlDLElBQUQsSUFBUTtBQUNmLFVBQUksQ0FBQyxHQUFHM0UsVUFBSixFQUFnQjZELGNBQWhCLENBQStCYyxJQUEvQixLQUF3QyxDQUFDLEdBQUd0RSxXQUFKLEVBQWlCNkIsYUFBakIsQ0FBK0J5QyxJQUEvQixFQUFxQ0MsRUFBckMsQ0FBd0N6TyxJQUF4QyxDQUE2Q3FPLGFBQTdDLENBQTVDLEVBQXlHO0FBQ3JHckQsUUFBQUEsUUFBUSxHQUFHd0QsSUFBWDtBQUNBLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FMRDtBQU1IOztBQUNELFNBQU8sQ0FBQyxHQUFHakYsdUJBQUosRUFBNkIzSix1QkFBN0IsQ0FBcURvTCxRQUFyRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBTTBELHVCQUF1QixHQUFHOWIsTUFBQSxJQUFtSCxDQUFuSjtBQVFBLE1BQU1xYyxrQkFBa0IsR0FBR3BNLE1BQU0sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxTQUFTcU0sVUFBVCxDQUFvQmx0QixHQUFwQixFQUF5Qm10QixRQUF6QixFQUFtQztBQUMvQixTQUFPM0ssS0FBSyxDQUFDeGlCLEdBQUQsRUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW90QixJQUFBQSxXQUFXLEVBQUU7QUFaQyxHQUFOLENBQUwsQ0FhSnpaLElBYkksQ0FhRXlNLEdBQUQsSUFBTztBQUNYLFFBQUksQ0FBQ0EsR0FBRyxDQUFDcUMsRUFBVCxFQUFhO0FBQ1QsVUFBSTBLLFFBQVEsR0FBRyxDQUFYLElBQWdCL00sR0FBRyxDQUFDaU4sTUFBSixJQUFjLEdBQWxDLEVBQXVDO0FBQ25DLGVBQU9ILFVBQVUsQ0FBQ2x0QixHQUFELEVBQU1tdEIsUUFBUSxHQUFHLENBQWpCLENBQWpCO0FBQ0g7O0FBQ0QsVUFBSS9NLEdBQUcsQ0FBQ2lOLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUNwQixlQUFPak4sR0FBRyxDQUFDa04sSUFBSixHQUFXM1osSUFBWCxDQUFpQnZWLElBQUQsSUFBUTtBQUMzQixjQUFJQSxJQUFJLENBQUNtdkIsUUFBVCxFQUFtQjtBQUNmLG1CQUFPO0FBQ0hBLGNBQUFBLFFBQVEsRUFBRU47QUFEUCxhQUFQO0FBR0g7O0FBQ0QsZ0JBQU0sSUFBSWxhLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0gsU0FQTSxDQUFQO0FBUUg7O0FBQ0QsWUFBTSxJQUFJQSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNIOztBQUNELFdBQU9xTixHQUFHLENBQUNrTixJQUFKLEVBQVA7QUFDSCxHQS9CTSxDQUFQO0FBZ0NIOztBQUNELFNBQVNFLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDQyxjQUFqQyxFQUFpRDtBQUM3QyxTQUFPUixVQUFVLENBQUNPLFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDaGEsS0FBN0MsQ0FBb0QwRixHQUFELElBQU87QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFDc1UsY0FBTCxFQUFxQjtBQUNqQixPQUFDLEdBQUdsRyxZQUFKLEVBQWtCekksY0FBbEIsQ0FBaUMzRixHQUFqQztBQUNIOztBQUNELFVBQU1BLEdBQU47QUFDSCxHQVJNLENBQVA7QUFTSDs7QUFDRCxNQUFNdVUsTUFBTixDQUFhO0FBQ1RDLEVBQUFBLFdBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFFQyxJQUFBQSxZQUFGO0FBQWlCQyxJQUFBQSxVQUFqQjtBQUE4QkMsSUFBQUEsR0FBOUI7QUFBb0NDLElBQUFBLE9BQXBDO0FBQThDQyxJQUFBQSxTQUFTLEVBQUVDLFVBQXpEO0FBQXNFalYsSUFBQUEsR0FBRyxFQUFFa1YsSUFBM0U7QUFBa0ZDLElBQUFBLFlBQWxGO0FBQWlHQyxJQUFBQSxVQUFqRztBQUE4R3pVLElBQUFBLE1BQTlHO0FBQXVIc0QsSUFBQUEsT0FBdkg7QUFBaUlJLElBQUFBLGFBQWpJO0FBQWlKSCxJQUFBQSxhQUFqSjtBQUFpS21SLElBQUFBO0FBQWpLLEdBQXpCLEVBQXVNO0FBQzlNO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVgsQ0FGOE0sQ0FJOU07O0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFFQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjs7QUFDQSxTQUFLQyxVQUFMLEdBQW1CblUsQ0FBRCxJQUFLO0FBQ25CLFlBQU12YixLQUFLLEdBQUd1YixDQUFDLENBQUN2YixLQUFoQjs7QUFDQSxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRTZwQixVQUFBQSxRQUFRLEVBQUU2RSxTQUFaO0FBQXdCakUsVUFBQUEsS0FBSyxFQUFFa0U7QUFBL0IsWUFBMkMsSUFBakQ7QUFDQSxhQUFLZ0IsV0FBTCxDQUFpQixjQUFqQixFQUFpQyxDQUFDLEdBQUdsSCxNQUFKLEVBQVlvRCxvQkFBWixDQUFpQztBQUM5RGhDLFVBQUFBLFFBQVEsRUFBRXpMLFdBQVcsQ0FBQ3NRLFNBQUQsQ0FEeUM7QUFFOURqRSxVQUFBQSxLQUFLLEVBQUVrRTtBQUZ1RCxTQUFqQyxDQUFqQyxFQUdJLENBQUMsR0FBR2xHLE1BQUosRUFBWW1ILE1BQVosRUFISjtBQUlBO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDNXZCLEtBQUssQ0FBQzZ2QixHQUFYLEVBQWdCO0FBQ1o7QUFDSDs7QUFDRCxVQUFJQyxZQUFKO0FBQ0EsWUFBTTtBQUFFanZCLFFBQUFBLEdBQUY7QUFBUXVZLFFBQUFBLEVBQUUsRUFBRXdWLEdBQVo7QUFBa0JuVSxRQUFBQSxPQUFsQjtBQUE0QnNWLFFBQUFBO0FBQTVCLFVBQXFDL3ZCLEtBQTNDOztBQUNBLFVBQUl5UixLQUFKLEVBQTJDLEVBdUIxQzs7QUFDRCxXQUFLZ2UsSUFBTCxHQUFZTSxHQUFaO0FBQ0EsWUFBTTtBQUFFbEcsUUFBQUEsUUFBUSxFQUFFNkU7QUFBWixVQUEyQixDQUFDLEdBQUcvRixpQkFBSixFQUF1QjBILGdCQUF2QixDQUF3Q3h2QixHQUF4QyxDQUFqQyxDQWpEbUIsQ0FrRG5CO0FBQ0E7O0FBQ0EsVUFBSSxLQUFLeXZCLEtBQUwsSUFBYzFCLEdBQUcsS0FBSyxLQUFLeEMsTUFBM0IsSUFBcUNzQyxTQUFTLEtBQUssS0FBSzdFLFFBQTVELEVBQXNFO0FBQ2xFO0FBQ0gsT0F0RGtCLENBdURuQjtBQUNBOzs7QUFDQSxVQUFJLEtBQUswRyxJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVV2d0IsS0FBVixDQUFsQixFQUFvQztBQUNoQztBQUNIOztBQUNELFdBQUt3d0IsTUFBTCxDQUFZLGNBQVosRUFBNEIzdkIsR0FBNUIsRUFBaUMrdEIsR0FBakMsRUFBc0N6aEIsTUFBTSxDQUFDOEwsTUFBUCxDQUFjLEVBQWQsRUFDbkN3QixPQURtQyxFQUMxQjtBQUNSZ0IsUUFBQUEsT0FBTyxFQUFFaEIsT0FBTyxDQUFDZ0IsT0FBUixJQUFtQixLQUFLZ1YsUUFEekI7QUFFUjdWLFFBQUFBLE1BQU0sRUFBRUgsT0FBTyxDQUFDRyxNQUFSLElBQWtCLEtBQUswRDtBQUZ2QixPQUQwQixDQUF0QyxFQUlJd1IsWUFKSjtBQUtILEtBakVELENBUjhNLENBMEU5TTs7O0FBQ0EsU0FBS3ROLEtBQUwsR0FBYSxDQUFDLEdBQUc0Rix1QkFBSixFQUE2QjNKLHVCQUE3QixDQUFxRGlRLFNBQXJELENBQWIsQ0EzRThNLENBNEU5TTs7QUFDQSxTQUFLZ0MsVUFBTCxHQUFrQixFQUFsQixDQTdFOE0sQ0ErRTlNO0FBQ0E7QUFDQTs7QUFDQSxRQUFJaEMsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLFdBQUtnQyxVQUFMLENBQWdCLEtBQUtsTyxLQUFyQixJQUE4QjtBQUMxQnlNLFFBQUFBLFNBQVMsRUFBRUMsVUFEZTtBQUUxQnlCLFFBQUFBLE9BQU8sRUFBRSxJQUZpQjtBQUcxQi9qQixRQUFBQSxLQUFLLEVBQUVpaUIsWUFIbUI7QUFJMUI1VSxRQUFBQSxHQUFHLEVBQUVrVixJQUpxQjtBQUsxQnlCLFFBQUFBLE9BQU8sRUFBRS9CLFlBQVksSUFBSUEsWUFBWSxDQUFDK0IsT0FMWjtBQU0xQkMsUUFBQUEsT0FBTyxFQUFFaEMsWUFBWSxJQUFJQSxZQUFZLENBQUNnQztBQU5aLE9BQTlCO0FBUUg7O0FBQ0QsU0FBS0gsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUN2QnpCLE1BQUFBLFNBQVMsRUFBRUYsR0FEWTtBQUV2QjlMLE1BQUFBLFdBQVcsRUFBRTtBQUZVLEtBQTNCLENBNUY4TSxDQWdHOU07QUFDQTs7QUFDQSxTQUFLbUMsTUFBTCxHQUFjb0osTUFBTSxDQUFDcEosTUFBckI7QUFDQSxTQUFLMEosVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLakYsUUFBTCxHQUFnQjZFLFNBQWhCO0FBQ0EsU0FBS2pFLEtBQUwsR0FBYWtFLE1BQWIsQ0FyRzhNLENBc0c5TTtBQUNBOztBQUNBLFVBQU1tQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUdwSSxVQUFKLEVBQWdCNkQsY0FBaEIsQ0FBK0JtQyxTQUEvQixLQUE2QzFQLElBQUksQ0FBQytSLGFBQUwsQ0FBbUJDLFVBQTFGOztBQUNBLFNBQUs1RSxNQUFMLEdBQWMwRSxpQkFBaUIsR0FBR3BDLFNBQUgsR0FBZUUsR0FBOUM7QUFDQSxTQUFLMUYsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLK0gsR0FBTCxHQUFXN0IsWUFBWDtBQUNBLFNBQUs4QixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JuQyxPQUFoQixDQTdHOE0sQ0E4RzlNO0FBQ0E7O0FBQ0EsU0FBS3NCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS2pCLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBSytCLE9BQUwsR0FBZSxDQUFDLEVBQUVwUyxJQUFJLENBQUMrUixhQUFMLENBQW1CTSxJQUFuQixJQUEyQnJTLElBQUksQ0FBQytSLGFBQUwsQ0FBbUJPLEdBQTlDLElBQXFEdFMsSUFBSSxDQUFDK1IsYUFBTCxDQUFtQlEsTUFBbkIsSUFBNkIsQ0FBQ3ZTLElBQUksQ0FBQytSLGFBQUwsQ0FBbUJTLEdBQXRHLElBQTZHLENBQUNWLGlCQUFELElBQXNCLENBQUM5UixJQUFJLENBQUN5UyxRQUFMLENBQWNDLE1BQXJDLElBQStDLENBQUNqZ0IsS0FBL0osQ0FBaEI7QUFDQSxTQUFLNmQsU0FBTCxHQUFpQixDQUFDLENBQUNBLFNBQW5CO0FBQ0EsU0FBS3RSLGNBQUwsR0FBc0IsS0FBdEI7O0FBQ0EsUUFBSXZNLEtBQUosRUFBcUMsRUFNcEM7O0FBQ0QsZUFBbUMsRUF1QmxDO0FBQ0o7O0FBQ0RzZ0IsRUFBQUEsTUFBTSxHQUFHO0FBQ0w3UyxJQUFBQSxNQUFNLENBQUN1UyxRQUFQLENBQWdCTSxNQUFoQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7QUFBTUMsRUFBQUEsSUFBSSxHQUFHO0FBQ0w5UyxJQUFBQSxNQUFNLENBQUN1TyxPQUFQLENBQWV1RSxJQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNemYsRUFBQUEsSUFBSSxDQUFDMVIsR0FBRCxFQUFNdVksRUFBTixFQUFVcUIsT0FBTyxHQUFHLEVBQXBCLEVBQ0g7QUFDQyxRQUFJaEosS0FBSixFQUEyQyxFQWExQzs7QUFDRCxLQUFDO0FBQUU1USxNQUFBQSxHQUFGO0FBQVF1WSxNQUFBQTtBQUFSLFFBQWdCdVQsWUFBWSxDQUFDLElBQUQsRUFBTzlyQixHQUFQLEVBQVl1WSxFQUFaLENBQTdCO0FBQ0EsV0FBTyxLQUFLb1gsTUFBTCxDQUFZLFdBQVosRUFBeUIzdkIsR0FBekIsRUFBOEJ1WSxFQUE5QixFQUFrQ3FCLE9BQWxDLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU1lLEVBQUFBLE9BQU8sQ0FBQzNhLEdBQUQsRUFBTXVZLEVBQU4sRUFBVXFCLE9BQU8sR0FBRyxFQUFwQixFQUNOO0FBQ0MsS0FBQztBQUFFNVosTUFBQUEsR0FBRjtBQUFRdVksTUFBQUE7QUFBUixRQUFnQnVULFlBQVksQ0FBQyxJQUFELEVBQU85ckIsR0FBUCxFQUFZdVksRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS29YLE1BQUwsQ0FBWSxjQUFaLEVBQTRCM3ZCLEdBQTVCLEVBQWlDdVksRUFBakMsRUFBcUNxQixPQUFyQyxDQUFQO0FBQ0g7O0FBQ1csUUFBTitWLE1BQU0sQ0FBQ3lCLE1BQUQsRUFBU3B4QixHQUFULEVBQWN1WSxFQUFkLEVBQWtCcUIsT0FBbEIsRUFBMkJxVixZQUEzQixFQUF5QztBQUNqRCxRQUFJLENBQUNwVixVQUFVLENBQUM3WixHQUFELENBQWYsRUFBc0I7QUFDbEJxZSxNQUFBQSxNQUFNLENBQUN1UyxRQUFQLENBQWdCcFksSUFBaEIsR0FBdUJ4WSxHQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUNELFVBQU1xeEIsaUJBQWlCLEdBQUdyeEIsR0FBRyxLQUFLdVksRUFBUixJQUFjcUIsT0FBTyxDQUFDMFgsRUFBdEIsSUFBNEIxWCxPQUFPLENBQUNtWCxrQkFBOUQsQ0FMaUQsQ0FNakQ7QUFDQTs7QUFDQSxRQUFJblgsT0FBTyxDQUFDMFgsRUFBWixFQUFnQjtBQUNaLFdBQUtmLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBQ0QsVUFBTWdCLFVBQVUsR0FBRyxLQUFLeFgsTUFBeEI7O0FBQ0EsUUFBSW5KLEtBQUosRUFBcUMsWUE2Q3BDOztBQUNELFFBQUksQ0FBQ2dKLE9BQU8sQ0FBQzBYLEVBQWIsRUFBaUI7QUFDYixXQUFLN0IsS0FBTCxHQUFhLEtBQWI7QUFDSCxLQTVEZ0QsQ0E2RGpEOzs7QUFDQSxRQUFJN0gsTUFBTSxDQUFDZ0ssRUFBWCxFQUFlO0FBQ1hDLE1BQUFBLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixhQUFqQjtBQUNIOztBQUNELFVBQU07QUFBRWxYLE1BQUFBLE9BQU8sR0FBRTtBQUFYLFFBQXNCaEIsT0FBNUI7QUFDQSxVQUFNbVksVUFBVSxHQUFHO0FBQ2ZuWCxNQUFBQTtBQURlLEtBQW5COztBQUdBLFFBQUksS0FBS29YLGNBQVQsRUFBeUI7QUFDckIsV0FBS0Msa0JBQUwsQ0FBd0IsS0FBS0QsY0FBN0IsRUFBNkNELFVBQTdDO0FBQ0g7O0FBQ0R4WixJQUFBQSxFQUFFLEdBQUdnRixXQUFXLENBQUNDLFNBQVMsQ0FBQzRKLFdBQVcsQ0FBQzdPLEVBQUQsQ0FBWCxHQUFrQjhPLFdBQVcsQ0FBQzlPLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDcUIsT0FBTyxDQUFDRyxNQUFqRCxFQUF5RCxLQUFLMEQsYUFBOUQsQ0FBVixDQUFoQjtBQUNBLFVBQU15VSxTQUFTLEdBQUcvSyxTQUFTLENBQUNDLFdBQVcsQ0FBQzdPLEVBQUQsQ0FBWCxHQUFrQjhPLFdBQVcsQ0FBQzlPLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDLEtBQUt3QixNQUE5QyxDQUEzQjtBQUNBLFNBQUtpWSxjQUFMLEdBQXNCelosRUFBdEI7QUFDQSxRQUFJNFosWUFBWSxHQUFHWixVQUFVLEtBQUssS0FBS3hYLE1BQXZDLENBM0VpRCxDQTRFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUNILE9BQU8sQ0FBQzBYLEVBQVQsSUFBZSxLQUFLYyxlQUFMLENBQXFCRixTQUFyQixDQUFmLElBQWtELENBQUNDLFlBQXZELEVBQXFFO0FBQ2pFLFdBQUs1RyxNQUFMLEdBQWMyRyxTQUFkO0FBQ0F2RSxNQUFBQSxNQUFNLENBQUNwSixNQUFQLENBQWM4TixJQUFkLENBQW1CLGlCQUFuQixFQUFzQzlaLEVBQXRDLEVBQTBDd1osVUFBMUMsRUFGaUUsQ0FHakU7O0FBQ0EsV0FBS2pELFdBQUwsQ0FBaUJzQyxNQUFqQixFQUF5QnB4QixHQUF6QixFQUE4QnVZLEVBQTlCLEVBQWtDcUIsT0FBbEM7QUFDQSxXQUFLMFksWUFBTCxDQUFrQkosU0FBbEI7QUFDQSxXQUFLSyxNQUFMLENBQVksS0FBSzFDLFVBQUwsQ0FBZ0IsS0FBS2xPLEtBQXJCLENBQVosRUFBeUMsSUFBekM7QUFDQWdNLE1BQUFBLE1BQU0sQ0FBQ3BKLE1BQVAsQ0FBYzhOLElBQWQsQ0FBbUIsb0JBQW5CLEVBQXlDOVosRUFBekMsRUFBNkN3WixVQUE3QztBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNELFFBQUlTLE1BQU0sR0FBRyxDQUFDLEdBQUcxSyxpQkFBSixFQUF1QjBILGdCQUF2QixDQUF3Q3h2QixHQUF4QyxDQUFiO0FBQ0EsUUFBSTtBQUFFZ3BCLE1BQUFBLFFBQVEsRUFBRTZFLFNBQVo7QUFBd0JqRSxNQUFBQSxLQUFLLEVBQUVrRTtBQUEvQixRQUEyQzBFLE1BQS9DLENBNUZpRCxDQTZGakQ7QUFDQTtBQUNBOztBQUNBLFFBQUlwRyxLQUFKLEVBQVdxRyxRQUFYOztBQUNBLFFBQUk7QUFDQXJHLE1BQUFBLEtBQUssR0FBRyxNQUFNLEtBQUs2QixVQUFMLENBQWdCeUUsV0FBaEIsRUFBZDtBQUNBLE9BQUM7QUFBRUMsUUFBQUEsVUFBVSxFQUFFRjtBQUFkLFVBQTRCLE1BQU0sQ0FBQyxHQUFHakwsWUFBSixFQUFrQnZJLHNCQUFsQixFQUFuQztBQUNILEtBSEQsQ0FHRSxPQUFPcVAsSUFBUCxFQUFhO0FBQ1g7QUFDQTtBQUNBalEsTUFBQUEsTUFBTSxDQUFDdVMsUUFBUCxDQUFnQnBZLElBQWhCLEdBQXVCRCxFQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNILEtBekdnRCxDQTBHakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDLEtBQUtxYSxRQUFMLENBQWNWLFNBQWQsQ0FBRCxJQUE2QixDQUFDQyxZQUFsQyxFQUFnRDtBQUM1Q2YsTUFBQUEsTUFBTSxHQUFHLGNBQVQ7QUFDSCxLQWpIZ0QsQ0FrSGpEO0FBQ0E7OztBQUNBLFFBQUluVixVQUFVLEdBQUcxRCxFQUFqQixDQXBIaUQsQ0FxSGpEO0FBQ0E7QUFDQTs7QUFDQXNWLElBQUFBLFNBQVMsR0FBR0EsU0FBUyxHQUFHLENBQUMsR0FBR3RHLHVCQUFKLEVBQTZCM0osdUJBQTdCLENBQXFEeUosV0FBVyxDQUFDd0csU0FBRCxDQUFoRSxDQUFILEdBQWtGQSxTQUF2Rzs7QUFDQSxRQUFJd0QsaUJBQWlCLElBQUl4RCxTQUFTLEtBQUssU0FBdkMsRUFBa0Q7QUFDOUNqVSxNQUFBQSxPQUFPLENBQUNtWCxrQkFBUixHQUE2QixJQUE3Qjs7QUFDQSxVQUFJbmdCLEtBQUosRUFBMkQsRUFBM0QsTUFXTztBQUNINGhCLFFBQUFBLE1BQU0sQ0FBQ3hKLFFBQVAsR0FBa0JtRCxtQkFBbUIsQ0FBQzBCLFNBQUQsRUFBWXpCLEtBQVosQ0FBckM7O0FBQ0EsWUFBSW9HLE1BQU0sQ0FBQ3hKLFFBQVAsS0FBb0I2RSxTQUF4QixFQUFtQztBQUMvQkEsVUFBQUEsU0FBUyxHQUFHMkUsTUFBTSxDQUFDeEosUUFBbkI7QUFDQXdKLFVBQUFBLE1BQU0sQ0FBQ3hKLFFBQVAsR0FBa0J6TCxXQUFXLENBQUNzUSxTQUFELENBQTdCO0FBQ0E3dEIsVUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzRuQixNQUFKLEVBQVlvRCxvQkFBWixDQUFpQ3dILE1BQWpDLENBQU47QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsVUFBTTdRLEtBQUssR0FBRyxDQUFDLEdBQUc0Rix1QkFBSixFQUE2QjNKLHVCQUE3QixDQUFxRGlRLFNBQXJELENBQWQ7O0FBQ0EsUUFBSSxDQUFDaFUsVUFBVSxDQUFDdEIsRUFBRCxDQUFmLEVBQXFCO0FBQ2pCLGdCQUEyQztBQUN2QyxjQUFNLElBQUl4RixLQUFKLENBQVcsa0JBQWlCL1MsR0FBSSxjQUFhdVksRUFBRywyQ0FBdEMsR0FBb0Ysb0ZBQTlGLENBQU47QUFDSDs7QUFDRDhGLE1BQUFBLE1BQU0sQ0FBQ3VTLFFBQVAsQ0FBZ0JwWSxJQUFoQixHQUF1QkQsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRDBELElBQUFBLFVBQVUsR0FBR2tMLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDcEwsVUFBRCxDQUFaLEVBQTBCLEtBQUtsQyxNQUEvQixDQUF0Qjs7QUFDQSxRQUFJLENBQUMsR0FBRzhOLFVBQUosRUFBZ0I2RCxjQUFoQixDQUErQi9KLEtBQS9CLENBQUosRUFBMkM7QUFDdkMsWUFBTTZQLFFBQVEsR0FBRyxDQUFDLEdBQUcxSixpQkFBSixFQUF1QjBILGdCQUF2QixDQUF3Q3ZULFVBQXhDLENBQWpCO0FBQ0EsWUFBTTBOLFVBQVUsR0FBRzZILFFBQVEsQ0FBQ3hJLFFBQTVCO0FBQ0EsWUFBTStKLFVBQVUsR0FBRyxDQUFDLEdBQUc3SyxXQUFKLEVBQWlCNkIsYUFBakIsQ0FBK0JwSSxLQUEvQixDQUFuQjtBQUNBLFlBQU1xUixVQUFVLEdBQUcsQ0FBQyxHQUFHL0ssYUFBSixFQUFtQmtDLGVBQW5CLENBQW1DNEksVUFBbkMsRUFBK0NwSixVQUEvQyxDQUFuQjtBQUNBLFlBQU1zSixpQkFBaUIsR0FBR3RSLEtBQUssS0FBS2dJLFVBQXBDO0FBQ0EsWUFBTThCLGNBQWMsR0FBR3dILGlCQUFpQixHQUFHM0wsYUFBYSxDQUFDM0YsS0FBRCxFQUFRZ0ksVUFBUixFQUFvQm1FLE1BQXBCLENBQWhCLEdBQThDLEVBQXRGOztBQUVBLFVBQUksQ0FBQ2tGLFVBQUQsSUFBZUMsaUJBQWlCLElBQUksQ0FBQ3hILGNBQWMsQ0FBQ2YsTUFBeEQsRUFBZ0U7QUFDNUQsY0FBTXdJLGFBQWEsR0FBRzVtQixNQUFNLENBQUMyQixJQUFQLENBQVk4a0IsVUFBVSxDQUFDOUksTUFBdkIsRUFBK0I3YixNQUEvQixDQUF1Q2ljLEtBQUQsSUFBUyxDQUFDeUQsTUFBTSxDQUFDekQsS0FBRCxDQUF0RCxDQUF0Qjs7QUFFQSxZQUFJNkksYUFBYSxDQUFDcGxCLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsb0JBQTJDO0FBQ3ZDaE8sWUFBQUEsT0FBTyxDQUFDeVUsSUFBUixDQUFjLEdBQUUwZSxpQkFBaUIsR0FBSSxvQkFBSixHQUEyQixpQ0FBaUMsOEJBQWhGLEdBQWlILGVBQWNDLGFBQWEsQ0FBQzFnQixJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUFySztBQUNIOztBQUNELGdCQUFNLElBQUlPLEtBQUosQ0FBVSxDQUFDa2dCLGlCQUFpQixHQUFJLDBCQUF5Qmp6QixHQUFJLG9DQUFtQ2t6QixhQUFhLENBQUMxZ0IsSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBN0YsR0FBaUksOEJBQTZCbVgsVUFBVyw4Q0FBNkNoSSxLQUFNLEtBQTlPLElBQXVQLCtDQUE4Q3NSLGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUIxYSxRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHcVAsTUFBSixFQUFZb0Qsb0JBQVosQ0FBaUMxZSxNQUFNLENBQUM4TCxNQUFQLENBQWMsRUFBZCxFQUNuQ29aLFFBRG1DLEVBQ3pCO0FBQ1R4SSxVQUFBQSxRQUFRLEVBQUV5QyxjQUFjLENBQUNmLE1BRGhCO0FBRVRkLFVBQUFBLEtBQUssRUFBRWUsa0JBQWtCLENBQUNtRCxNQUFELEVBQVNyQyxjQUFjLENBQUMzUyxNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQXhNLFFBQUFBLE1BQU0sQ0FBQzhMLE1BQVAsQ0FBYzBWLE1BQWQsRUFBc0JrRixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0RyRixJQUFBQSxNQUFNLENBQUNwSixNQUFQLENBQWM4TixJQUFkLENBQW1CLGtCQUFuQixFQUF1QzlaLEVBQXZDLEVBQTJDd1osVUFBM0M7O0FBQ0EsUUFBSTtBQUNBLFVBQUk3ZCxHQUFKLEVBQVNpZixJQUFUO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQjFSLEtBQWxCLEVBQXlCa00sU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDdlYsRUFBNUMsRUFBZ0QwRCxVQUFoRCxFQUE0RDhWLFVBQTVELENBQXRCO0FBQ0EsVUFBSTtBQUFFaHlCLFFBQUFBLEtBQUY7QUFBVWdNLFFBQUFBLEtBQVY7QUFBa0Jna0IsUUFBQUEsT0FBbEI7QUFBNEJDLFFBQUFBO0FBQTVCLFVBQXlDb0QsU0FBN0MsQ0FIQSxDQUlBOztBQUNBLFVBQUksQ0FBQ3JELE9BQU8sSUFBSUMsT0FBWixLQUF3QmprQixLQUE1QixFQUFtQztBQUMvQixZQUFJQSxLQUFLLENBQUN1bkIsU0FBTixJQUFtQnZuQixLQUFLLENBQUN1bkIsU0FBTixDQUFnQkMsWUFBdkMsRUFBcUQ7QUFDakQsZ0JBQU1DLFdBQVcsR0FBR3puQixLQUFLLENBQUN1bkIsU0FBTixDQUFnQkMsWUFBcEMsQ0FEaUQsQ0FFakQ7QUFDQTtBQUNBOztBQUNBLGNBQUlDLFdBQVcsQ0FBQ2xnQixVQUFaLENBQXVCLEdBQXZCLENBQUosRUFBaUM7QUFDN0Isa0JBQU1tZ0IsVUFBVSxHQUFHLENBQUMsR0FBRzNMLGlCQUFKLEVBQXVCMEgsZ0JBQXZCLENBQXdDZ0UsV0FBeEMsQ0FBbkI7QUFDQUMsWUFBQUEsVUFBVSxDQUFDekssUUFBWCxHQUFzQm1ELG1CQUFtQixDQUFDc0gsVUFBVSxDQUFDekssUUFBWixFQUFzQm9ELEtBQXRCLENBQXpDO0FBQ0Esa0JBQU07QUFBRXBzQixjQUFBQSxHQUFHLEVBQUUwekIsTUFBUDtBQUFnQm5iLGNBQUFBLEVBQUUsRUFBRW9iO0FBQXBCLGdCQUErQjdILFlBQVksQ0FBQyxJQUFELEVBQU8wSCxXQUFQLEVBQW9CQSxXQUFwQixDQUFqRDtBQUNBLG1CQUFPLEtBQUs3RCxNQUFMLENBQVl5QixNQUFaLEVBQW9Cc0MsTUFBcEIsRUFBNEJDLEtBQTVCLEVBQW1DL1osT0FBbkMsQ0FBUDtBQUNIOztBQUNEeUUsVUFBQUEsTUFBTSxDQUFDdVMsUUFBUCxDQUFnQnBZLElBQWhCLEdBQXVCZ2IsV0FBdkI7QUFDQSxpQkFBTyxJQUFJaGdCLE9BQUosQ0FBWSxNQUFJLENBQ3RCLENBRE0sQ0FBUDtBQUVIOztBQUNELGFBQUtpYixTQUFMLEdBQWlCLENBQUMsQ0FBQzFpQixLQUFLLENBQUM2bkIsV0FBekIsQ0FoQitCLENBaUIvQjs7QUFDQSxZQUFJN25CLEtBQUssQ0FBQ3doQixRQUFOLEtBQW1CTixrQkFBdkIsRUFBMkM7QUFDdkMsY0FBSTRHLGFBQUo7O0FBQ0EsY0FBSTtBQUNBLGtCQUFNLEtBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBTjtBQUNBRCxZQUFBQSxhQUFhLEdBQUcsTUFBaEI7QUFDSCxXQUhELENBR0UsT0FBT3ZZLENBQVAsRUFBVTtBQUNSdVksWUFBQUEsYUFBYSxHQUFHLFNBQWhCO0FBQ0g7O0FBQ0RULFVBQUFBLFNBQVMsR0FBRyxNQUFNLEtBQUtDLFlBQUwsQ0FBa0JRLGFBQWxCLEVBQWlDQSxhQUFqQyxFQUFnRC9GLE1BQWhELEVBQXdEdlYsRUFBeEQsRUFBNEQwRCxVQUE1RCxFQUF3RTtBQUN0RnJCLFlBQUFBLE9BQU8sRUFBRTtBQUQ2RSxXQUF4RSxDQUFsQjtBQUdIO0FBQ0o7O0FBQ0QrUyxNQUFBQSxNQUFNLENBQUNwSixNQUFQLENBQWM4TixJQUFkLENBQW1CLHFCQUFuQixFQUEwQzlaLEVBQTFDLEVBQThDd1osVUFBOUM7QUFDQSxXQUFLakQsV0FBTCxDQUFpQnNDLE1BQWpCLEVBQXlCcHhCLEdBQXpCLEVBQThCdVksRUFBOUIsRUFBa0NxQixPQUFsQzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTW1hLE9BQU8sR0FBRyxLQUFLbEUsVUFBTCxDQUFnQixPQUFoQixFQUF5QnpCLFNBQXpDO0FBQ0EvUCxRQUFBQSxNQUFNLENBQUMyVixJQUFQLENBQVlDLGFBQVosR0FBNEJGLE9BQU8sQ0FBQy9NLGVBQVIsS0FBNEIrTSxPQUFPLENBQUM5TSxtQkFBcEMsSUFBMkQsQ0FBQ21NLFNBQVMsQ0FBQ2hGLFNBQVYsQ0FBb0JwSCxlQUE1RztBQUNIOztBQUNELFVBQUlwTixPQUFPLENBQUMwWCxFQUFSLElBQWN6RCxTQUFTLEtBQUssU0FBNUIsSUFBeUMsQ0FBQyxDQUFDM1osR0FBRyxHQUFHaUssSUFBSSxDQUFDK1IsYUFBTCxDQUFtQm5rQixLQUExQixNQUFxQyxJQUFyQyxJQUE2Q21JLEdBQUcsS0FBSyxLQUFLLENBQTFELEdBQThELEtBQUssQ0FBbkUsR0FBdUUsQ0FBQ2lmLElBQUksR0FBR2pmLEdBQUcsQ0FBQ29mLFNBQVosTUFBMkIsSUFBM0IsSUFBbUNILElBQUksS0FBSyxLQUFLLENBQWpELEdBQXFELEtBQUssQ0FBMUQsR0FBOERBLElBQUksQ0FBQ2UsVUFBM0ksTUFBMkosR0FBcE0sS0FBNE1ub0IsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ3VuQixTQUFoUSxDQUFKLEVBQWdSO0FBQzVRO0FBQ0E7QUFDQXZuQixRQUFBQSxLQUFLLENBQUN1bkIsU0FBTixDQUFnQlksVUFBaEIsR0FBNkIsR0FBN0I7QUFDSCxPQTlDRCxDQStDQTs7O0FBQ0EsWUFBTUMsbUJBQW1CLEdBQUd2YSxPQUFPLENBQUNnQixPQUFSLElBQW1CLEtBQUsrRyxLQUFMLEtBQWVBLEtBQTlEOztBQUNBLFVBQUl5UyxPQUFKOztBQUNBLFlBQU1DLFlBQVksR0FBRyxDQUFDRCxPQUFPLEdBQUd4YSxPQUFPLENBQUNpQixNQUFuQixNQUErQixJQUEvQixJQUF1Q3VaLE9BQU8sS0FBSyxLQUFLLENBQXhELEdBQTREQSxPQUE1RCxHQUFzRSxDQUFDRCxtQkFBNUY7QUFDQSxZQUFNRyxXQUFXLEdBQUdELFlBQVksR0FBRztBQUMvQjd0QixRQUFBQSxDQUFDLEVBQUUsQ0FENEI7QUFFL0I0b0IsUUFBQUEsQ0FBQyxFQUFFO0FBRjRCLE9BQUgsR0FHNUIsSUFISjtBQUlBLFlBQU0sS0FBS3BXLEdBQUwsQ0FBUzJJLEtBQVQsRUFBZ0JrTSxTQUFoQixFQUEyQkMsTUFBM0IsRUFBbUNvRSxTQUFuQyxFQUE4Q2tCLFNBQTlDLEVBQXlEbkUsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUssS0FBSyxDQUEvQyxHQUFtREEsWUFBbkQsR0FBa0VxRixXQUEzSCxFQUF3STVnQixLQUF4SSxDQUErSWdILENBQUQsSUFBSztBQUNySixZQUFJQSxDQUFDLENBQUMwRyxTQUFOLEVBQWlCcmhCLEtBQUssR0FBR0EsS0FBSyxJQUFJMmEsQ0FBakIsQ0FBakIsS0FDSyxNQUFNQSxDQUFOO0FBQ1IsT0FISyxDQUFOOztBQUlBLFVBQUkzYSxLQUFKLEVBQVc7QUFDUDR0QixRQUFBQSxNQUFNLENBQUNwSixNQUFQLENBQWM4TixJQUFkLENBQW1CLGtCQUFuQixFQUF1Q3R5QixLQUF2QyxFQUE4Q215QixTQUE5QyxFQUF5REgsVUFBekQ7QUFDQSxjQUFNaHlCLEtBQU47QUFDSDs7QUFDRCxVQUFJNlEsS0FBSixFQUFxQyxFQUlwQzs7QUFDRCtjLE1BQUFBLE1BQU0sQ0FBQ3BKLE1BQVAsQ0FBYzhOLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDOVosRUFBMUMsRUFBOEN3WixVQUE5QztBQUNBLGFBQU8sSUFBUDtBQUNILEtBdEVELENBc0VFLE9BQU96RCxJQUFQLEVBQWE7QUFDWCxVQUFJQSxJQUFJLENBQUNsTixTQUFULEVBQW9CO0FBQ2hCLGVBQU8sS0FBUDtBQUNIOztBQUNELFlBQU1rTixJQUFOO0FBQ0g7QUFDSjs7QUFDRFEsRUFBQUEsV0FBVyxDQUFDc0MsTUFBRCxFQUFTcHhCLEdBQVQsRUFBY3VZLEVBQWQsRUFBa0JxQixPQUFPLEdBQUcsRUFBNUIsRUFDUjtBQUNDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT3lFLE1BQU0sQ0FBQ3VPLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkM5c0IsUUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWUsMkNBQWY7QUFDQTtBQUNIOztBQUNELFVBQUksT0FBT3NlLE1BQU0sQ0FBQ3VPLE9BQVAsQ0FBZXdFLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQ3R4QixRQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBZSwyQkFBMEJxeEIsTUFBTyxtQkFBaEQ7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUEsTUFBTSxLQUFLLFdBQVgsSUFBMEIsQ0FBQyxHQUFHeEosTUFBSixFQUFZbUgsTUFBWixPQUF5QnhXLEVBQXZELEVBQTJEO0FBQ3ZELFdBQUtxWCxRQUFMLEdBQWdCaFcsT0FBTyxDQUFDZ0IsT0FBeEI7QUFDQXlELE1BQUFBLE1BQU0sQ0FBQ3VPLE9BQVAsQ0FBZXdFLE1BQWYsRUFBdUI7QUFDbkJweEIsUUFBQUEsR0FEbUI7QUFFbkJ1WSxRQUFBQSxFQUZtQjtBQUduQnFCLFFBQUFBLE9BSG1CO0FBSW5Cb1YsUUFBQUEsR0FBRyxFQUFFLElBSmM7QUFLbkJFLFFBQUFBLEdBQUcsRUFBRSxLQUFLTixJQUFMLEdBQVl3QyxNQUFNLEtBQUssV0FBWCxHQUF5QixLQUFLeEMsSUFBOUIsR0FBcUMsS0FBS0EsSUFBTCxHQUFZO0FBTC9DLE9BQXZCLEVBTUc7QUFDSDtBQUNBO0FBQ0EsUUFUQSxFQVNJclcsRUFUSjtBQVVIO0FBQ0o7O0FBQ3lCLFFBQXBCa2Msb0JBQW9CLENBQUNyYixHQUFELEVBQU00UCxRQUFOLEVBQWdCWSxLQUFoQixFQUF1QnJSLEVBQXZCLEVBQTJCd1osVUFBM0IsRUFBdUMyQyxhQUF2QyxFQUFzRDtBQUM1RSxRQUFJdGIsR0FBRyxDQUFDZ0ksU0FBUixFQUFtQjtBQUNmO0FBQ0EsWUFBTWhJLEdBQU47QUFDSDs7QUFDRCxRQUFJLENBQUMsR0FBR29PLFlBQUosRUFBa0J4SSxZQUFsQixDQUErQjVGLEdBQS9CLEtBQXVDc2IsYUFBM0MsRUFBMEQ7QUFDdEQvRyxNQUFBQSxNQUFNLENBQUNwSixNQUFQLENBQWM4TixJQUFkLENBQW1CLGtCQUFuQixFQUF1Q2paLEdBQXZDLEVBQTRDYixFQUE1QyxFQUFnRHdaLFVBQWhELEVBRHNELENBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ExVCxNQUFBQSxNQUFNLENBQUN1UyxRQUFQLENBQWdCcFksSUFBaEIsR0FBdUJELEVBQXZCLENBUHNELENBUXREO0FBQ0E7O0FBQ0EsWUFBTWdRLHNCQUFzQixFQUE1QjtBQUNIOztBQUNELFFBQUk7QUFDQSxVQUFJOEYsVUFBSjtBQUNBLFVBQUlqTSxXQUFKO0FBQ0EsVUFBSXJXLEtBQUo7O0FBQ0EsVUFBSSxPQUFPc2lCLFVBQVAsS0FBc0IsV0FBdEIsSUFBcUMsT0FBT2pNLFdBQVAsS0FBdUIsV0FBaEUsRUFBNkU7QUFDekUsU0FBQztBQUFFb0ssVUFBQUEsSUFBSSxFQUFFNkIsVUFBUjtBQUFxQmpNLFVBQUFBO0FBQXJCLFlBQXNDLE1BQU0sS0FBSzBSLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBN0M7QUFDSDs7QUFDRCxZQUFNVixTQUFTLEdBQUc7QUFDZHJuQixRQUFBQSxLQURjO0FBRWRxaUIsUUFBQUEsU0FBUyxFQUFFQyxVQUZHO0FBR2RqTSxRQUFBQSxXQUhjO0FBSWRoSixRQUFBQSxHQUpjO0FBS2RyWixRQUFBQSxLQUFLLEVBQUVxWjtBQUxPLE9BQWxCOztBQU9BLFVBQUksQ0FBQ2dhLFNBQVMsQ0FBQ3JuQixLQUFmLEVBQXNCO0FBQ2xCLFlBQUk7QUFDQXFuQixVQUFBQSxTQUFTLENBQUNybkIsS0FBVixHQUFrQixNQUFNLEtBQUtpYixlQUFMLENBQXFCcUgsVUFBckIsRUFBaUM7QUFDckRqVixZQUFBQSxHQURxRDtBQUVyRDRQLFlBQUFBLFFBRnFEO0FBR3JEWSxZQUFBQTtBQUhxRCxXQUFqQyxDQUF4QjtBQUtILFNBTkQsQ0FNRSxPQUFPK0ssTUFBUCxFQUFlO0FBQ2I3MEIsVUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMseUNBQWQsRUFBeUQ0MEIsTUFBekQ7QUFDQXZCLFVBQUFBLFNBQVMsQ0FBQ3JuQixLQUFWLEdBQWtCLEVBQWxCO0FBRUg7QUFDSjs7QUFDRCxhQUFPcW5CLFNBQVA7QUFDSCxLQTVCRCxDQTRCRSxPQUFPd0IsWUFBUCxFQUFxQjtBQUNuQixhQUFPLEtBQUtILG9CQUFMLENBQTBCRyxZQUExQixFQUF3QzVMLFFBQXhDLEVBQWtEWSxLQUFsRCxFQUF5RHJSLEVBQXpELEVBQTZEd1osVUFBN0QsRUFBeUUsSUFBekUsQ0FBUDtBQUNIO0FBQ0o7O0FBQ2lCLFFBQVpzQixZQUFZLENBQUMxUixLQUFELEVBQVFxSCxRQUFSLEVBQWtCWSxLQUFsQixFQUF5QnJSLEVBQXpCLEVBQTZCMEQsVUFBN0IsRUFBeUM4VixVQUF6QyxFQUFxRDtBQUNuRSxRQUFJO0FBQ0EsWUFBTThDLGlCQUFpQixHQUFHLEtBQUtoRixVQUFMLENBQWdCbE8sS0FBaEIsQ0FBMUI7O0FBQ0EsVUFBSW9RLFVBQVUsQ0FBQ25YLE9BQVgsSUFBc0JpYSxpQkFBdEIsSUFBMkMsS0FBS2xULEtBQUwsS0FBZUEsS0FBOUQsRUFBcUU7QUFDakUsZUFBT2tULGlCQUFQO0FBQ0g7O0FBQ0QsWUFBTUMsZUFBZSxHQUFHRCxpQkFBaUIsSUFBSSxhQUFhQSxpQkFBbEMsR0FBc0R2bEIsU0FBdEQsR0FBa0V1bEIsaUJBQTFGO0FBQ0EsWUFBTXpCLFNBQVMsR0FBRzBCLGVBQWUsR0FBR0EsZUFBSCxHQUFxQixNQUFNLEtBQUtoQixjQUFMLENBQW9CblMsS0FBcEIsRUFBMkJoTyxJQUEzQixDQUFpQ3lNLEdBQUQsS0FBUTtBQUM1RmdPLFFBQUFBLFNBQVMsRUFBRWhPLEdBQUcsQ0FBQ29NLElBRDZFO0FBRTVGcEssUUFBQUEsV0FBVyxFQUFFaEMsR0FBRyxDQUFDZ0MsV0FGMkU7QUFHNUYyTixRQUFBQSxPQUFPLEVBQUUzUCxHQUFHLENBQUMyVSxHQUFKLENBQVFoRixPQUgyRTtBQUk1RkMsUUFBQUEsT0FBTyxFQUFFNVAsR0FBRyxDQUFDMlUsR0FBSixDQUFRL0U7QUFKMkUsT0FBUixDQUFoQyxDQUE1RDtBQU9BLFlBQU07QUFBRTVCLFFBQUFBLFNBQVMsRUFBRUMsVUFBYjtBQUEwQjBCLFFBQUFBLE9BQTFCO0FBQW9DQyxRQUFBQTtBQUFwQyxVQUFpRG9ELFNBQXZEOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUU0QixVQUFBQTtBQUFGLFlBQTBCbG9CLG1CQUFPLENBQUMsMEJBQUQsQ0FBdkM7O0FBQ0EsWUFBSSxDQUFDa29CLGtCQUFrQixDQUFDM0csVUFBRCxDQUF2QixFQUFxQztBQUNqQyxnQkFBTSxJQUFJdGIsS0FBSixDQUFXLHlEQUF3RGlXLFFBQVMsR0FBNUUsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBSXlFLFFBQUo7O0FBQ0EsVUFBSXNDLE9BQU8sSUFBSUMsT0FBZixFQUF3QjtBQUNwQnZDLFFBQUFBLFFBQVEsR0FBRyxLQUFLUSxVQUFMLENBQWdCZ0gsV0FBaEIsQ0FBNEIsQ0FBQyxHQUFHck4sTUFBSixFQUFZb0Qsb0JBQVosQ0FBaUM7QUFDcEVoQyxVQUFBQSxRQURvRTtBQUVwRVksVUFBQUE7QUFGb0UsU0FBakMsQ0FBNUIsRUFHUDNOLFVBSE8sRUFHSzhULE9BSEwsRUFHYyxLQUFLaFcsTUFIbkIsQ0FBWDtBQUlIOztBQUNELFlBQU1oTyxLQUFLLEdBQUcsTUFBTSxLQUFLbXBCLFFBQUwsQ0FBYyxNQUFJbkYsT0FBTyxHQUFHLEtBQUtvRixjQUFMLENBQW9CMUgsUUFBcEIsQ0FBSCxHQUFtQ3VDLE9BQU8sR0FBRyxLQUFLb0YsY0FBTCxDQUFvQjNILFFBQXBCLENBQUgsR0FBbUMsS0FBS3pHLGVBQUwsQ0FBcUJxSCxVQUFyQixFQUFpQztBQUN2SjtBQUNJckYsUUFBQUEsUUFESjtBQUVJWSxRQUFBQSxLQUZKO0FBR0kyQixRQUFBQSxNQUFNLEVBQUVoVCxFQUhaO0FBSUl3QixRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFKakI7QUFLSXNELFFBQUFBLE9BQU8sRUFBRSxLQUFLQSxPQUxsQjtBQU1JSSxRQUFBQSxhQUFhLEVBQUUsS0FBS0E7QUFOeEIsT0FEc0gsQ0FBdEcsQ0FBcEI7QUFVQTJWLE1BQUFBLFNBQVMsQ0FBQ3JuQixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLFdBQUs4akIsVUFBTCxDQUFnQmxPLEtBQWhCLElBQXlCeVIsU0FBekI7QUFDQSxhQUFPQSxTQUFQO0FBQ0gsS0F4Q0QsQ0F3Q0UsT0FBT2lDLElBQVAsRUFBYTtBQUNYLGFBQU8sS0FBS1osb0JBQUwsQ0FBMEJZLElBQTFCLEVBQWdDck0sUUFBaEMsRUFBMENZLEtBQTFDLEVBQWlEclIsRUFBakQsRUFBcUR3WixVQUFyRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRC9ZLEVBQUFBLEdBQUcsQ0FBQzJJLEtBQUQsRUFBUXFILFFBQVIsRUFBa0JZLEtBQWxCLEVBQXlCclIsRUFBekIsRUFBNkJuYSxJQUE3QixFQUFtQ2syQixXQUFuQyxFQUFnRDtBQUMvQyxTQUFLOUYsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUs3TSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLcUgsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLWSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLMkIsTUFBTCxHQUFjaFQsRUFBZDtBQUNBLFdBQU8sS0FBS2dhLE1BQUwsQ0FBWW4wQixJQUFaLEVBQWtCazJCLFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLGNBQWMsQ0FBQ2hYLEVBQUQsRUFBSztBQUNqQixTQUFLb1IsSUFBTCxHQUFZcFIsRUFBWjtBQUNIOztBQUNEOFQsRUFBQUEsZUFBZSxDQUFDN1osRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLZ1QsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsVUFBTSxDQUFDZ0ssWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUtqSyxNQUFMLENBQVlILEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUNxSyxZQUFELEVBQWVDLE9BQWYsSUFBMEJuZCxFQUFFLENBQUM2UyxLQUFILENBQVMsR0FBVCxDQUFoQyxDQUhnQixDQUloQjs7QUFDQSxRQUFJc0ssT0FBTyxJQUFJSCxZQUFZLEtBQUtFLFlBQTVCLElBQTRDRCxPQUFPLEtBQUtFLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUGUsQ0FRaEI7OztBQUNBLFFBQUlILFlBQVksS0FBS0UsWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FYZSxDQVloQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0QsT0FBTyxLQUFLRSxPQUFuQjtBQUNIOztBQUNEcEQsRUFBQUEsWUFBWSxDQUFDL1osRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHcVQsSUFBSCxJQUFXclQsRUFBRSxDQUFDNlMsS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsUUFBSVEsSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxLQUFLLEtBQTVCLEVBQW1DO0FBQy9Cdk4sTUFBQUEsTUFBTSxDQUFDc1gsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FQWSxDQVFiOzs7QUFDQSxVQUFNQyxJQUFJLEdBQUcvVixRQUFRLENBQUNnVyxjQUFULENBQXdCakssSUFBeEIsQ0FBYjs7QUFDQSxRQUFJZ0ssSUFBSixFQUFVO0FBQ05BLE1BQUFBLElBQUksQ0FBQ0UsY0FBTDtBQUNBO0FBQ0gsS0FiWSxDQWNiO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR2xXLFFBQVEsQ0FBQ21XLGlCQUFULENBQTJCcEssSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJbUssTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RsRCxFQUFBQSxRQUFRLENBQUNySCxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFvQixRQUFSN1IsUUFBUSxDQUFDMVosR0FBRCxFQUFNdXJCLE1BQU0sR0FBR3ZyQixHQUFmLEVBQW9CNFosT0FBTyxHQUFHLEVBQTlCLEVBQ2I7QUFDQyxRQUFJNFksTUFBTSxHQUFHLENBQUMsR0FBRzFLLGlCQUFKLEVBQXVCMEgsZ0JBQXZCLENBQXdDeHZCLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUVncEIsTUFBQUEsUUFBUSxFQUFFaU47QUFBWixRQUEyQnpELE1BQS9COztBQUNBLFFBQUk1aEIsS0FBSixFQUFxQyxFQVdwQzs7QUFDRCxVQUFNd2IsS0FBSyxHQUFHLE1BQU0sS0FBSzZCLFVBQUwsQ0FBZ0J5RSxXQUFoQixFQUFwQjtBQUNBLFFBQUl6VyxVQUFVLEdBQUdzUCxNQUFqQjs7QUFDQSxRQUFJM2EsS0FBSixFQUErRCxFQUEvRCxNQWFPO0FBQ0g0aEIsTUFBQUEsTUFBTSxDQUFDeEosUUFBUCxHQUFrQm1ELG1CQUFtQixDQUFDcUcsTUFBTSxDQUFDeEosUUFBUixFQUFrQm9ELEtBQWxCLENBQXJDOztBQUNBLFVBQUlvRyxNQUFNLENBQUN4SixRQUFQLEtBQW9CaU4sU0FBeEIsRUFBbUM7QUFDL0JBLFFBQUFBLFNBQVMsR0FBR3pELE1BQU0sQ0FBQ3hKLFFBQW5CO0FBQ0F3SixRQUFBQSxNQUFNLENBQUN4SixRQUFQLEdBQWtCaU4sU0FBbEI7QUFDQWoyQixRQUFBQSxHQUFHLEdBQUcsQ0FBQyxHQUFHNG5CLE1BQUosRUFBWW9ELG9CQUFaLENBQWlDd0gsTUFBakMsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBTTdRLEtBQUssR0FBRyxDQUFDLEdBQUc0Rix1QkFBSixFQUE2QjNKLHVCQUE3QixDQUFxRHFZLFNBQXJELENBQWQsQ0F0Q0QsQ0F1Q0M7O0FBQ0EsY0FBMkM7QUFDdkM7QUFDSDs7QUFDRCxVQUFNemlCLE9BQU8sQ0FBQzBCLEdBQVIsQ0FBWSxDQUNkLEtBQUsrWSxVQUFMLENBQWdCaUksTUFBaEIsQ0FBdUJ2VSxLQUF2QixFQUE4QmhPLElBQTlCLENBQW9Dd2lCLEtBQUQsSUFBUztBQUN4QyxhQUFPQSxLQUFLLEdBQUcsS0FBS2hCLGNBQUwsQ0FBb0IsS0FBS2xILFVBQUwsQ0FBZ0JnSCxXQUFoQixDQUE0QmoxQixHQUE1QixFQUFpQ2ljLFVBQWpDLEVBQTZDLElBQTdDLEVBQW1ELE9BQU9yQyxPQUFPLENBQUNHLE1BQWYsS0FBMEIsV0FBMUIsR0FBd0NILE9BQU8sQ0FBQ0csTUFBaEQsR0FBeUQsS0FBS0EsTUFBakgsQ0FBcEIsQ0FBSCxHQUFtSixLQUEvSjtBQUNILEtBRkQsQ0FEYyxFQUlkLEtBQUtrVSxVQUFMLENBQWdCclUsT0FBTyxDQUFDMVosUUFBUixHQUFtQixVQUFuQixHQUFnQyxVQUFoRCxFQUE0RHloQixLQUE1RCxDQUpjLENBQVosQ0FBTjtBQU1IOztBQUNtQixRQUFkbVMsY0FBYyxDQUFDblMsS0FBRCxFQUFRO0FBQ3hCLFFBQUlQLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNZ1YsTUFBTSxHQUFHLEtBQUsvRixHQUFMLEdBQVcsTUFBSTtBQUMxQmpQLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxVQUFNaVYsZUFBZSxHQUFHLE1BQU0sS0FBS3BJLFVBQUwsQ0FBZ0JxSSxRQUFoQixDQUF5QjNVLEtBQXpCLENBQTlCOztBQUNBLFFBQUlQLFNBQUosRUFBZTtBQUNYLFlBQU1yaEIsS0FBSyxHQUFHLElBQUlnVCxLQUFKLENBQVcsd0NBQXVDNE8sS0FBTSxHQUF4RCxDQUFkO0FBQ0E1aEIsTUFBQUEsS0FBSyxDQUFDcWhCLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxZQUFNcmhCLEtBQU47QUFDSDs7QUFDRCxRQUFJcTJCLE1BQU0sS0FBSyxLQUFLL0YsR0FBcEIsRUFBeUI7QUFDckIsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxXQUFPZ0csZUFBUDtBQUNIOztBQUNEbkIsRUFBQUEsUUFBUSxDQUFDcFMsRUFBRCxFQUFLO0FBQ1QsUUFBSTFCLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNZ1YsTUFBTSxHQUFHLE1BQUk7QUFDZmhWLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxTQUFLaVAsR0FBTCxHQUFXK0YsTUFBWDtBQUNBLFdBQU90VCxFQUFFLEdBQUduUCxJQUFMLENBQVd2VixJQUFELElBQVE7QUFDckIsVUFBSWc0QixNQUFNLEtBQUssS0FBSy9GLEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSWpQLFNBQUosRUFBZTtBQUNYLGNBQU1pVSxJQUFJLEdBQUcsSUFBSXRpQixLQUFKLENBQVUsaUNBQVYsQ0FBYjtBQUNBc2lCLFFBQUFBLElBQUksQ0FBQ2pVLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxjQUFNaVUsSUFBTjtBQUNIOztBQUNELGFBQU9qM0IsSUFBUDtBQUNILEtBVk0sQ0FBUDtBQVdIOztBQUNEKzJCLEVBQUFBLGNBQWMsQ0FBQzFILFFBQUQsRUFBVztBQUNyQixVQUFNO0FBQUVqVixNQUFBQSxJQUFJLEVBQUUrZDtBQUFSLFFBQXNCLElBQUkxZCxHQUFKLENBQVE0VSxRQUFSLEVBQWtCcFAsTUFBTSxDQUFDdVMsUUFBUCxDQUFnQnBZLElBQWxDLENBQTVCOztBQUNBLFFBQUksS0FBSixFQUFvRixFQUVuRjs7QUFDRCxXQUFPZ1YsYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS2dDLEtBQWhCLENBQWIsQ0FBb0M5YixJQUFwQyxDQUEwQ3ZWLElBQUQsSUFBUTtBQUNwRCxXQUFLc3dCLEdBQUwsQ0FBUzZILFFBQVQsSUFBcUJuNEIsSUFBckI7QUFDQSxhQUFPQSxJQUFQO0FBQ0gsS0FITSxDQUFQO0FBSUg7O0FBQ0RnM0IsRUFBQUEsY0FBYyxDQUFDM0gsUUFBRCxFQUFXO0FBQ3JCLFVBQU07QUFBRWpWLE1BQUFBLElBQUksRUFBRWdlO0FBQVIsUUFBeUIsSUFBSTNkLEdBQUosQ0FBUTRVLFFBQVIsRUFBa0JwUCxNQUFNLENBQUN1UyxRQUFQLENBQWdCcFksSUFBbEMsQ0FBL0I7O0FBQ0EsUUFBSSxLQUFLbVcsR0FBTCxDQUFTNkgsV0FBVCxDQUFKLEVBQTJCO0FBQ3ZCLGFBQU8sS0FBSzdILEdBQUwsQ0FBUzZILFdBQVQsQ0FBUDtBQUNIOztBQUNELFdBQU8sS0FBSzdILEdBQUwsQ0FBUzZILFdBQVQsSUFBd0JoSixhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLZ0MsS0FBaEIsQ0FBYixDQUFvQzliLElBQXBDLENBQTBDdlYsSUFBRCxJQUFRO0FBQzVFLGFBQU8sS0FBS3V3QixHQUFMLENBQVM2SCxXQUFULENBQVA7QUFDQSxhQUFPcDRCLElBQVA7QUFDSCxLQUg4QixFQUc1QnNWLEtBSDRCLENBR3JCMmhCLElBQUQsSUFBUTtBQUNiLGFBQU8sS0FBSzFHLEdBQUwsQ0FBUzZILFdBQVQsQ0FBUDtBQUNBLFlBQU1uQixJQUFOO0FBQ0gsS0FOOEIsQ0FBL0I7QUFPSDs7QUFDRHJPLEVBQUFBLGVBQWUsQ0FBQ29ILFNBQUQsRUFBWXFJLEdBQVosRUFBaUI7QUFDNUIsVUFBTTtBQUFFckksTUFBQUEsU0FBUyxFQUFFc0k7QUFBYixRQUF1QixLQUFLN0csVUFBTCxDQUFnQixPQUFoQixDQUE3Qjs7QUFDQSxVQUFNOEcsT0FBTyxHQUFHLEtBQUtyRyxRQUFMLENBQWNvRyxJQUFkLENBQWhCOztBQUNBRCxJQUFBQSxHQUFHLENBQUNFLE9BQUosR0FBY0EsT0FBZDtBQUNBLFdBQU8sQ0FBQyxHQUFHL08sTUFBSixFQUFZZ1AsbUJBQVosQ0FBZ0NGLElBQWhDLEVBQXNDO0FBQ3pDQyxNQUFBQSxPQUR5QztBQUV6Q3ZJLE1BQUFBLFNBRnlDO0FBR3pDelUsTUFBQUEsTUFBTSxFQUFFLElBSGlDO0FBSXpDOGMsTUFBQUE7QUFKeUMsS0FBdEMsQ0FBUDtBQU1IOztBQUNEeEUsRUFBQUEsa0JBQWtCLENBQUMxWixFQUFELEVBQUt3WixVQUFMLEVBQWlCO0FBQy9CLFFBQUksS0FBSzFCLEdBQVQsRUFBYztBQUNWMUMsTUFBQUEsTUFBTSxDQUFDcEosTUFBUCxDQUFjOE4sSUFBZCxDQUFtQixrQkFBbkIsRUFBdUM5SixzQkFBc0IsRUFBN0QsRUFBaUVoUSxFQUFqRSxFQUFxRXdaLFVBQXJFO0FBQ0EsV0FBSzFCLEdBQUw7QUFDQSxXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIO0FBQ0o7O0FBQ0RrQyxFQUFBQSxNQUFNLENBQUNuMEIsSUFBRCxFQUFPazJCLFdBQVAsRUFBb0I7QUFDdEIsV0FBTyxLQUFLbEUsR0FBTCxDQUFTaHlCLElBQVQsRUFBZSxLQUFLeXhCLFVBQUwsQ0FBZ0IsT0FBaEIsRUFBeUJ6QixTQUF4QyxFQUFtRGtHLFdBQW5ELENBQVA7QUFDSDs7QUF2dkJROztBQXl2QmIzRyxNQUFNLENBQUNwSixNQUFQLEdBQWdCLENBQUMsR0FBR29ELEtBQUosRUFBV2piLE9BQVgsRUFBaEI7QUFDQUYsZUFBQSxHQUFrQm1oQixNQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2aUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNcUosV0FBVyxHQUFHLENBQUM7QUFBRS9yQixFQUFBQSxRQUFGO0FBQVlTLEVBQUFBLFVBQVo7QUFBd0JuSCxFQUFBQSxNQUF4QjtBQUFnQzZHLEVBQUFBO0FBQWhDLENBQUQsS0FBMkM7QUFDN0QsTUFBSSxFQUFDSCxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFNkMsTUFBWCxDQUFKLEVBQXVCO0FBQ3JCLHdCQUFPLDhEQUFDLG1EQUFEO0FBQVcsZ0JBQVUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsdUVBQUQ7QUFBUSxjQUFVLEVBQUVwQyxVQUFwQjtBQUFnQyxVQUFNLEVBQUVuSCxNQUF4QztBQUFBLDRCQUNFLDhEQUFDLDBEQUFEO0FBQUssU0FBRyxFQUFFNkc7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsK0RBQUQ7QUFBVSxjQUFRLEVBQUVIO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQVhEOztBQWFBK3JCLFdBQVcsQ0FBQzc1QixTQUFaLEdBQXdCO0FBQ3RCOE4sRUFBQUEsUUFBUSxFQUFFeE8seURBQUEsQ0FBa0JBLDBEQUFsQixDQURZO0FBRXRCaVAsRUFBQUEsVUFBVSxFQUFFalAsMERBRlU7QUFHdEIyTyxFQUFBQSxHQUFHLEVBQUUzTywwREFBZ0JhO0FBSEMsQ0FBeEI7QUFNTyxlQUFlMjVCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTTdLLEtBQUssR0FBRyxNQUFNeUssbURBQVEsQ0FBQyxRQUFELENBQTVCO0FBRUEsUUFBTUssS0FBSyxHQUFHOUssS0FBSyxDQUFDbHBCLEdBQU4sQ0FBV3NwQixJQUFELElBQVU7QUFDaEM7QUFDQSxVQUFNMkssU0FBUyxHQUFHLENBQUMzSyxJQUFJLENBQUN6dkIsSUFBTixHQUFhLEtBQWIsR0FBcUJ5dkIsSUFBSSxDQUFDenZCLElBQUwsQ0FBVXF1QixLQUFWLENBQWdCLEdBQWhCLENBQXZDO0FBRUEsV0FBTztBQUNMdFMsTUFBQUEsTUFBTSxFQUFFO0FBQUUvYixRQUFBQSxJQUFJLEVBQUVvNkI7QUFBUjtBQURILEtBQVA7QUFHRCxHQVBhLENBQWQ7QUFTQSxTQUFPO0FBQUVELElBQUFBLEtBQUY7QUFBU0UsSUFBQUEsUUFBUSxFQUFFO0FBQW5CLEdBQVA7QUFDRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRXZlLEVBQUFBO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0MsUUFBTXdlLFFBQVEsR0FBRyxNQUFNUiw4REFBVyxDQUFDO0FBQUUvNUIsSUFBQUEsSUFBSSxFQUFFLENBQUMrYixNQUFNLENBQUMvYixJQUFSLEdBQWUsQ0FBQyxFQUFELENBQWYsR0FBc0IrYixNQUFNLENBQUMvYjtBQUFyQyxHQUFELENBQWxDO0FBQ0EsUUFBTTJPLFVBQVUsR0FBRyxNQUFNbXJCLG1EQUFRLENBQUMsYUFBRCxDQUFqQztBQUNBLFFBQU10eUIsTUFBTSxHQUFHLE1BQU1zeUIsbURBQVEsQ0FBQyxTQUFELENBQTdCOztBQUVBLE1BQUlTLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQjtBQUNBLFdBQU87QUFBRXZyQixNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFQO0FBQ0Q7O0FBRUQsUUFBTTtBQUFFcEUsSUFBQUEsT0FBRjtBQUFXeUQsSUFBQUE7QUFBWCxNQUFtQmtzQixRQUF6QjtBQUVBLFNBQU87QUFDTHZyQixJQUFBQSxLQUFLLEVBQUU7QUFDTGQsTUFBQUEsUUFBUSxFQUFFdEQsT0FETDtBQUVMeUQsTUFBQUEsR0FGSztBQUdMTSxNQUFBQSxVQUhLO0FBSUxuSCxNQUFBQTtBQUpLO0FBREYsR0FBUDtBQVFEO0FBRUQsaUVBQWV5eUIsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBRU8sTUFBTXR1QixTQUFTLEdBQUdqTSx1REFBQSxDQUFnQjtBQUN2Q08sRUFBQUEsS0FBSyxFQUFFUCwwREFEZ0M7QUFFdkN1RSxFQUFBQSxXQUFXLEVBQUV2RSwwREFGMEI7QUFHdkNzSixFQUFBQSxNQUFNLEVBQUV0SiwyREFBQSxDQUFvQixDQUFDQSx5REFBQSxDQUFrQkEsMERBQWxCLENBQUQsRUFBc0NBLDBEQUF0QyxDQUFwQixDQUgrQjtBQUl2Q1EsRUFBQUEsS0FBSyxFQUFFUiwwREFBZ0JhO0FBSmdCLENBQWhCLEVBS3RCRCxVQUxJO0FBT0EsTUFBTThDLGFBQWEsR0FBRzFELDJEQUFBLENBQW9CLENBQUNBLHlEQUFBLENBQWtCQSwyREFBbEIsQ0FBRCxFQUF1Q0EsMkRBQXZDLEVBQTBEQSx3REFBMUQsQ0FBcEIsQ0FBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFA7QUFDQTs7QUFFTyxNQUFNNEksVUFBVSxnQkFBR295QixvREFBYSxDQUFDO0FBQ3RDNXhCLEVBQUFBLFNBQVMsRUFBRSxLQUQyQjtBQUV0Q0MsRUFBQUEsU0FBUyxFQUFFLEtBRjJCO0FBR3RDNUcsRUFBQUEsWUFBWSxFQUFFLE1BQU0sQ0FBRTtBQUhnQixDQUFELENBQWhDOztBQU1QLE1BQU15NEIsV0FBVyxHQUFHLENBQUM7QUFBRXAzQixFQUFBQSxRQUFGO0FBQVlvWixFQUFBQTtBQUFaLENBQUQsS0FBMEI7QUFDNUMsUUFBTTtBQUFBLE9BQUM5VCxTQUFEO0FBQUEsT0FBWSt4QjtBQUFaLE1BQTRCL1IsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUMvZixTQUFEO0FBQUEsT0FBWTVHO0FBQVosTUFBNEIybUIsK0NBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLE1BQUlsTSxNQUFKLEVBQVk7QUFDVitDLElBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFlBQU1tYixXQUFXLEdBQUcsTUFBTTtBQUN4QkgsUUFBQUEsMERBQUEsQ0FBb0I7QUFBRXRqQixVQUFBQSxNQUFNLEVBQUU7QUFBVixTQUFwQjtBQUNBd2pCLFFBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDQUYsUUFBQUEsc0RBQUE7QUFDRCxPQUpEOztBQUtBLFlBQU1LLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCSCxRQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FGLFFBQUFBLHFEQUFBO0FBQ0QsT0FIRDs7QUFLQS9kLE1BQUFBLE1BQU0sQ0FBQzRLLE1BQVAsQ0FBY0csRUFBZCxDQUFpQixrQkFBakIsRUFBcUNtVCxXQUFyQztBQUNBbGUsTUFBQUEsTUFBTSxDQUFDNEssTUFBUCxDQUFjRyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q3FULFVBQXhDO0FBQ0FwZSxNQUFBQSxNQUFNLENBQUM0SyxNQUFQLENBQWNHLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDcVQsVUFBckM7QUFFQSxhQUFPLE1BQU07QUFDWHBlLFFBQUFBLE1BQU0sQ0FBQzRLLE1BQVAsQ0FBYzBULEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDSixXQUF0QztBQUNBbGUsUUFBQUEsTUFBTSxDQUFDNEssTUFBUCxDQUFjMFQsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNGLFVBQXpDO0FBQ0FwZSxRQUFBQSxNQUFNLENBQUM0SyxNQUFQLENBQWMwVCxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0YsVUFBdEM7QUFDRCxPQUpEO0FBS0QsS0FwQlEsRUFvQk4sQ0FBQ3BlLE1BQUQsQ0FwQk0sQ0FBVDtBQXFCRDs7QUFFRCxzQkFDRSw4REFBQyxVQUFELENBQVksUUFBWjtBQUNFLFNBQUssRUFBRTtBQUNMOVQsTUFBQUEsU0FESztBQUVMQyxNQUFBQSxTQUZLO0FBR0w1RyxNQUFBQTtBQUhLLEtBRFQ7QUFBQSxjQU9HcUI7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQXZDRDs7QUF5Q0EsaUVBQWVvM0IsV0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETyxTQUFTTyxZQUFULENBQXNCMW5CLElBQUksR0FBRyxFQUE3QixFQUFpQztBQUN0QyxTQUFRLEdBQUVJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc25CLDBCQUFaLElBQTBDLHVCQUF3QixHQUFFM25CLElBQUssRUFBbkY7QUFDRCxFQUVEOztBQUNPLGVBQWVxbUIsUUFBZixDQUF3QnJtQixJQUF4QixFQUE4QjtBQUNuQyxRQUFNNG5CLFVBQVUsR0FBR0YsWUFBWSxDQUFDMW5CLElBQUQsQ0FBL0I7QUFDQSxRQUFNNm5CLFFBQVEsR0FBRyxNQUFNN1YsS0FBSyxDQUFDNFYsVUFBRCxDQUE1QjtBQUNBLFFBQU1oNkIsSUFBSSxHQUFHLE1BQU1pNkIsUUFBUSxDQUFDL0ssSUFBVCxFQUFuQjtBQUNBLFNBQU9sdkIsSUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7QUFFTyxlQUFlMDRCLFdBQWYsQ0FBMkJoZSxNQUEzQixFQUFtQztBQUN4QyxRQUFNL2IsSUFBSSxHQUFHK2IsTUFBTSxDQUFDL2IsSUFBUCxDQUFZeVYsSUFBWixDQUFpQixHQUFqQixDQUFiLENBRHdDLENBRXhDOztBQUNBLFFBQU04bEIsU0FBUyxHQUFHLE1BQU16Qiw4Q0FBUSxDQUFFLGVBQWM5NUIsSUFBSyxFQUFyQixDQUFoQyxDQUh3QyxDQUt4Qzs7QUFDQSxNQUFJdTdCLFNBQVMsSUFBSSxJQUFiLElBQXFCQSxTQUFTLENBQUN4cUIsTUFBVixLQUFxQixDQUE5QyxFQUFpRDtBQUMvQyxXQUFPLElBQVA7QUFDRCxHQVJ1QyxDQVV4Qzs7O0FBQ0EsU0FBT3dxQixTQUFTLENBQUMsQ0FBRCxDQUFoQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFFTyxTQUFTaDVCLGNBQVQsQ0FBd0I7QUFBRVUsRUFBQUE7QUFBRixDQUF4QixFQUFpQztBQUN0QyxRQUFNSCxRQUFRLEdBQUdHLEdBQUcsQ0FBQ3NULFVBQUosQ0FBZSxHQUFmLElBQXNCNGtCLGtEQUFZLENBQUNsNEIsR0FBRCxDQUFsQyxHQUEwQ0EsR0FBM0Q7QUFDQSxTQUFPSCxRQUFQO0FBQ0Q7Ozs7Ozs7Ozs7QUNMRCwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0Fycm93TGluay9BcnJvd0xpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vQnV0dG9uLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0Z1bmN0aW9uYWxMaW5rL0Z1bmN0aW9uYWxMaW5rLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL2F0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50L0hlcm9Db3Vyc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC9IZXJvQ291cnNlQ29tcG9uZW50LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1ByaWNpbmdDb21wb25lbnQvUHJpY2luZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL21vbGVjdWxlcy9QcmljaW5nQ29tcG9uZW50L1ByaWNpbmdDb21wb25lbnQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0LmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3Rlci9Gb290ZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9DaXNjb0NvdXJzZS9DaXNjb0NvdXJzZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0Npc2NvQ291cnNlL0Npc2NvQ291cnNlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3QvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3QvQ29udGFjdC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9BY2FkZW15L0hlcm9BY2FkZW15LnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0NvdXJzZXMvSGVyb0NvdXJzZXMuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb0luc3RydWN0b3JzL0hlcm9JbnN0cnVjdG9ycy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZy5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvL0hlcm8uc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvT2ZmZXJ0L09mZmVydC5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3NlY3Rpb25zL09mZmVydC9PZmZlcnQuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJpY2luZy9QcmljaW5nLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUmVndWxhdGlvbnMvUmVndWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy9zdHJhcGkvc2VvLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0L0xheW91dC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VIZWFkZXIvUGFnZUhlYWRlci5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24uc3R5bGUuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVRpbGVXcmFwcGVyL1BhZ2VUaWxlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZVdyYXBwZXIvUGFnZVRpbGVXcmFwcGVyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZS5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXIuc3R5bGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vcGFnZXMvW1suLi5zbHVnXV0uanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vcHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzLmpzIiwid2VicGFjazovL3pzZS1jaXNjby8uL3Byb3ZpZGVycy9BcHBQcm92aWRlci5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvZ2V0UGFnZURhdGEuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vdXRpbHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8venNlLWNpc2NvLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwibmV4dC9lcnJvclwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3pzZS1jaXNjby9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8venNlLWNpc2NvL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly96c2UtY2lzY28vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL3pzZS1jaXNjby9pZ25vcmVkfEM6XFxVc2Vyc1xcbm5hZDNcXERlc2t0b3BcXFdlYiBkZXZlbG9wbWVudFxcT3JpZ2luYWxcXHpzZS1jaXNjb1xcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEFycm93TGlua1dyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vQXJyb3dMaW5rLnN0eWxlcyc7XHJcblxyXG5jb25zdCBBcnJvd0xpbmsgPSAoeyBzbHVnLCB0aXRsZSwgaW1hZ2UsIGFjY2VudGVkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke3NsdWd9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxBcnJvd0xpbmtXcmFwcGVyIGFjY2VudGVkPXthY2NlbnRlZH0+XHJcbiAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8L0Fycm93TGlua1dyYXBwZXI+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkFycm93TGluay5wcm9wVHlwZXMgPSB7XHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYWNjZW50ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuQXJyb3dMaW5rLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzbHVnOiAnJyxcclxuICB0aXRsZTogJycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xpbms7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFycm93TGlua1dyYXBwZXIgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudGVkIH0pID0+IChhY2NlbnRlZCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyh7IHRoZW1lLCBhY2NlbnRlZCB9KSA9PiAoYWNjZW50ZWQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKX07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSwgYWNjZW50ZWQgfSkgPT4gKGFjY2VudGVkID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzLjhyZW07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFN0eWxlZEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uLnN0eWxlcyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBkYXRhLCBoYXNNYXJnaW4sIGFjY2VudCB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2FwdGlvbixcclxuICAgIGlzRmlsbGVkLFxyXG4gICAgbGluazogeyBzbHVnIH0sXHJcbiAgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8U3R5bGVkQnV0dG9uIGhhc01hcmdpbj17aGFzTWFyZ2lufSBpc0ZpbGxlZD17aXNGaWxsZWR9IGFjY2VudD17YWNjZW50fT5cclxuICAgICAgICB7Y2FwdGlvbn1cclxuICAgICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpc0ZpbGxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBoYXNNYXJnaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGFjY2VwdDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGNhcHRpb246ICcnLFxyXG4gICAgbGluazoge1xyXG4gICAgICBzbHVnOiAnJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBib3JkZXI6ICR7KHsgdGhlbWUsIGlzRmlsbGVkIH0pID0+IChpc0ZpbGxlZCA/ICcwJyA6IGAzcHggc29saWQgJHt0aGVtZS5jb2xvcnMubWFpbkNvbG9yfWApfTtcclxuICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGFjY2VudCB9KSA9PiAoYWNjZW50ID8gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGlzRmlsbGVkLCBhY2NlbnQgfSkgPT4gKGlzRmlsbGVkID8gKGFjY2VudCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpIDogJ3RyYW5zcGFyZW50Jyl9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCB9KSA9PiAoaXNGaWxsZWQgPyB0aGVtZS5jb2xvcnMud2hpdGUgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogJHsoeyBoYXNNYXJnaW4gfSkgPT4gKGhhc01hcmdpbiA/ICcycmVtJyA6ICcwJyl9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEZ1bmN0aW9uYWxMaW5rID0gKHsgbGluazogeyBuYW1lLCBzbHVnLCBuZXdUYWIgfSwgc2V0SXNOYXZPcGVuIH0pID0+IHtcclxuICBpZiAobmV3VGFiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YSBocmVmPXtzbHVnfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKChzdGF0ZSkgPT4gIXN0YXRlKX0+XHJcbiAgICAgICAge25hbWV9XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke3NsdWd9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PntuYW1lfTwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuRnVuY3Rpb25hbExpbmsucHJvcFR5cGVzID0ge1xyXG4gIGxpbms6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5ld1RhYjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBzZXRJc05hdk9wZW46IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRnVuY3Rpb25hbExpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxpbms6IHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgc2x1ZzogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uYWxMaW5rO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJ3V0aWxzL21lZGlhJztcclxuaW1wb3J0IHsgTmV4dEltYWdlV3JhcHBlciwgU3R5bGVkTmV4dEltYWdlIH0gZnJvbSAnLi9JbWFnZS5zdHlsZXMnO1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSB9KSA9PiB7XHJcbiAgaWYgKGltYWdlKSB7XHJcbiAgICBjb25zdCB7IGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2U7XHJcblxyXG4gICAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TmV4dEltYWdlV3JhcHBlcj5cclxuICAgICAgICA8U3R5bGVkTmV4dEltYWdlXHJcbiAgICAgICAgICBsb2FkZXI9e2xvYWRlcn1cclxuICAgICAgICAgIHVub3B0aW1pemVkXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgc3JjPXtpbWFnZVVybCA/IGltYWdlVXJsIDogJy9pbWdFcnJvci5zdmcnfVxyXG4gICAgICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgJ2ltYWdlJ31cclxuICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9OZXh0SW1hZ2VXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcignSW1hZ2Ugd2FzIHJlcXVpcmVkIGJ1dCBub3QgcHJvdmlkZWQnKTtcclxuICAgIHJldHVybiA8TmV4dEltYWdlIHNyYz1cIi9pbWdFcnJvci5zdmdcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0gLz47XHJcbiAgfVxyXG59O1xyXG5cclxuSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWx0ZXJuYXRpdmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfSksXHJcbiAgcHJpb3JpdHk6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlOiB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYWx0ZXJuYXRpdmVUZXh0OiAnSW1hZ2UgZmFpbGVkIHRvIGxvYWQgcHJvcGVybHknLFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXh0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5leHRJbWFnZSA9IHN0eWxlZChOZXh0SW1hZ2UpYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IExpbmVIb3Jpem9udGFsV3JhcHBlciwgTGluZSB9IGZyb20gJy4vTGluZUhvcml6b250YWwuc3R5bGVzJztcclxuXHJcbmNvbnN0IExpbmVIb3Jpem9udGFsID0gKHsgY2hpbGRyZW4sIGxhcmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVIb3Jpem9udGFsV3JhcHBlciBkYXRhLXRlc3RpZD1cImxpbmUtaG9yaXpvbnRhbC13cmFwcGVyXCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPExpbmUgbGFyZ2U9e2xhcmdlfSBkYXRhLXRlc3RpZD1cImxpbmUtaG9yaXpvbnRhbFwiIC8+XHJcbiAgICA8L0xpbmVIb3Jpem9udGFsV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGluZUhvcml6b250YWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVIb3Jpem9udGFsO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lSG9yaXpvbnRhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi1oZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzAuOHJlbScgOiAnMC40cmVtJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBtYXJnaW4tdG9wOiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcyLjJyZW0nIDogJy44cmVtJyl9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IHsgTGluZVZlcnRpY2FsV3JhcHBlciwgTGluZSB9IGZyb20gJy4vTGluZVZlcnRpY2FsLnN0eWxlcyc7XHJcblxyXG5jb25zdCBMaW5lVmVydGljYWwgPSAoeyBjaGlsZHJlbiwgbGFyZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZVZlcnRpY2FsV3JhcHBlciBkYXRhLXRlc3RpZD1cImxpbmUtdmVydGljYWwtd3JhcHBlclwiPlxyXG4gICAgICA8TGluZSBsYXJnZT17bGFyZ2V9IGRhdGEtdGVzdGlkPVwibGluZS12ZXJ0aWNhbFwiIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluZVZlcnRpY2FsV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGluZVZlcnRpY2FsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lVmVydGljYWw7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVWZXJ0aWNhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi13aWR0aDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMC44cmVtJyA6ICcwLjRyZW0nKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIG1hcmdpbi1yaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMi4ycmVtJyA6ICcxLjVyZW0nKX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi1yaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMS44cmVtJyA6ICcxLjVyZW0nKX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXJyb3dMaW5rIGZyb20gJ0BhdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyIH0gZnJvbSAnLi9IZXJvQ291cnNlQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlQ29tcG9uZW50ID0gKHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgbGluazogeyBzbHVnIH0sXHJcbiAgICBsaW5rTmFtZSxcclxuICB9LFxyXG4gIGltYWdlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlcj5cclxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8QXJyb3dMaW5rIHNsdWc9e3NsdWd9IHRpdGxlPXtsaW5rTmFtZX0gaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgPC9IZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0NvdXJzZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgICBsaW5rTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5IZXJvQ291cnNlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBsaW5rTmFtZTogJycsXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIHNsdWc6ICcnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0NvdXJzZUNvbXBvbmVudDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ307XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcbiAgbWF4LXdpZHRoOiA1MHJlbTtcclxuXHJcbiAgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVyb0luc3RydWN0b3JXcmFwcGVyLCBJbWFnZVdyYXBwZXIsIEluc3RydWN0b3JXcmFwcGVyIH0gZnJvbSAnLi9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0luc3RydWN0b3JDb21wb25lbnQgPSAoeyBkYXRhOiB7IGhlYWRlciwgaW5zdHJ1Y3RvciwgZGVzY3JpcHRpb24gfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvSW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgICAgIDxoNT57aGVhZGVyfTwvaDU+XHJcbiAgICAgIDxoND57aW5zdHJ1Y3Rvcn08L2g0PlxyXG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9IZXJvSW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9JbnN0cnVjdG9yQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW5zdHJ1Y3RvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkhlcm9JbnN0cnVjdG9yQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXI6ICcnLFxyXG4gICAgaW5zdHJ1Y3RvcjogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvSW5zdHJ1Y3RvcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogNTByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgcGFkZGluZzogMCAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjByZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMnJlbSAzcmVtO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmhlcm9JbnN0cnVjdG9yc30ge1xyXG4gICAgbWFyZ2luOiAwIDZyZW0gMCAwO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEZ1bmN0aW9uYWxMaW5rIGZyb20gJ0BhdG9tcy9GdW5jdGlvbmFsTGluay9GdW5jdGlvbmFsTGluayc7XHJcbmltcG9ydCB7IExpc3RJdGVtV3JhcHBlciwgQnVsbGV0IH0gZnJvbSAnLi9MaXN0SXRlbS5zdHlsZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IExpc3RJdGVtID0gKHsgbGluaywgc2V0SXNOYXZPcGVuLCBoYXNMaW5rcywgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW1XcmFwcGVyPlxyXG4gICAgICA8QnVsbGV0IC8+XHJcbiAgICAgIHtoYXNMaW5rcyA/IDxGdW5jdGlvbmFsTGluayBsaW5rPXtsaW5rfSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz4gOiBjaGlsZHJlbn1cclxuICAgIDwvTGlzdEl0ZW1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgbGluazogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZXRJc05hdk9wZW46IFByb3BUeXBlcy5mdW5jLFxyXG4gIGhhc0xpbmtzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbVdyYXBwZXIgPSBzdHlsZWQubGlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2TGlzdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1bGxldCA9IHN0eWxlZC5zcGFuYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDIycHg7XHJcbiAgbWluLWhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMTJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZVNtYWxsfSB7XHJcbiAgICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIG1pbi13aWR0aDogOXB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFBhZ2VUaWxlIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGUvUGFnZVRpbGUnO1xyXG5pbXBvcnQgeyBTZW1lc3RlciwgSGVhZCwgUm93LCBBbm5vdGF0aW9uIH0gZnJvbSAnLi9QcmljaW5nQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBQcmljaW5nQ29tcG9uZW50ID0gKHsgZGF0YTogeyB0aXRsZSwgc2VtZXN0ZXIsIHRhYmxlSGVhZCwgdGFibGVSb3dzLCBhbm5vdGF0aW9ucyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VUaWxlPlxyXG4gICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIHtzZW1lc3RlciAmJiA8U2VtZXN0ZXI+e3NlbWVzdGVyfTwvU2VtZXN0ZXI+fVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c3Bhbj57dGFibGVIZWFkLnJvd05hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPnt0YWJsZUhlYWQucm93Q29udGVudH08L3NwYW4+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge3RhYmxlUm93cy5tYXAoKHsgcm93TmFtZSwgcm93Q29udGVudCwgaWQgfSkgPT4gKFxyXG4gICAgICAgIDxSb3cga2V5PXtpZH0+XHJcbiAgICAgICAgICA8c3Bhbj57cm93TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57cm93Q29udGVudH08L3NwYW4+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICkpfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthbm5vdGF0aW9ucy5tYXAoKHsgYW5ub3RhdGlvbiwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgPEFubm90YXRpb24ga2V5PXtpZH0+e2Fubm90YXRpb259PC9Bbm5vdGF0aW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFnZVRpbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblByaWNpbmdDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlbWVzdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFibGVIZWFkOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgdGFibGVSb3dzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIGFubm90YXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuUHJpY2luZ0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgc2VtZXN0ZXI6ICcnLFxyXG4gICAgdGFibGVIZWFkOiB7XHJcbiAgICAgIHJvd05hbWU6ICcnLFxyXG4gICAgICByb3dDb250ZW50OiAnJyxcclxuICAgIH0sXHJcbiAgICB0YWJsZVJvd3M6IFtdLFxyXG4gICAgYW5ub3RhdGlvbnM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZW1lc3RlciA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xyXG4gIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrQmx1ZX07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkID0gc3R5bGVkKFJvdylgXHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTWVkaXVtfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvblNtYWxsfTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFN0eWxlZE1hcmtkb3duIH0gZnJvbSAnLi9SaWNoVGV4dC5zdHlsZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IFJpY2hUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkTWFya2Rvd24+e2NoaWxkcmVufTwvU3R5bGVkTWFya2Rvd24+O1xyXG59O1xyXG5cclxuUmljaFRleHQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmljaFRleHQ7XHJcbiIsImltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE1hcmtkb3duID0gc3R5bGVkKE1hcmtkb3duKWBcclxuICBtYXJnaW4tdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucmljaFRleHRNYXJnaW5Ub3B9O1xyXG5cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogOS41cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiA1LjlyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDQuOHJlbTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMy40cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAmOnZpc2l0ZWQge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG5cclxuICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkRm9vdGVyLFxyXG4gIEZvb3RlcldyYXBwZXIsXHJcbiAgQ29udGVudFdyYXBwZXIsXHJcbiAgSW5mb3JtYXRpb25XcmFwcGVyLFxyXG4gIFN0eWxlZFNjaG9vbEluZm8sXHJcbiAgTGluZSxcclxuICBJbWFnZXNXcmFwcGVyLFxyXG4gIEltYWdlV3JhcHBlcixcclxufSBmcm9tICcuL0Zvb3Rlci5zdHlsZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IGZvb3RlcjogeyBoZWFkZXIsIHNjaG9vbE5hbWUsIGZvb3RlckluZm8sIGZvb3RlckltYWdlcyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEZvb3Rlcj5cclxuICAgICAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgPGgzPntoZWFkZXJ9PC9oMz5cclxuICAgICAgICAgIDxTdHlsZWRTY2hvb2xJbmZvPntzY2hvb2xOYW1lfTwvU3R5bGVkU2Nob29sSW5mbz5cclxuICAgICAgICAgIDxJbmZvcm1hdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIHtmb290ZXJJbmZvLm1hcCgoeyBpZCwgY2FwdGlvbiwgaW5mbyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHAga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57Y2FwdGlvbn08L3NwYW4+IHtpbmZvfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0luZm9ybWF0aW9uV3JhcHBlcj5cclxuICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lIC8+XHJcbiAgICAgICAgPEltYWdlc1dyYXBwZXI+XHJcbiAgICAgICAgICB7Zm9vdGVySW1hZ2VzLm1hcCgoZm9vdGVySW1hZ2UpID0+IChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciBrZXk9e2Zvb3RlckltYWdlLmlkfT5cclxuICAgICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2Zvb3RlckltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VzV3JhcHBlcj5cclxuICAgICAgPC9Gb290ZXJXcmFwcGVyPlxyXG4gICAgPC9TdHlsZWRGb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgZm9vdGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2Nob29sTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZvb3RlckluZm86IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICBmb290ZXJJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBoZWFkZXI6ICcnLFxyXG4gICAgc2Nob29sTmFtZTogJycsXHJcbiAgICBmb290ZXJJbmZvOiBbXSxcclxuICAgIGZvb3RlckltYWdlczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhzfTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueHNWfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlOiAnY29udGVudCBsaW5lIGltYWdlcyc7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhzVn07XHJcbiAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlV2lkdGh9O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTpcclxuICAgICAgJ2NvbnRlbnQnXHJcbiAgICAgICdsaW5lJ1xyXG4gICAgICAnaW1hZ2VzJztcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkU2Nob29sSW5mbyA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogMTRyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1sZWZ0OiA4cmVtO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgZ3JpZC1hcmVhOiBsaW5lO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiAwLjZyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogaW1hZ2VzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMnZ3O1xyXG4gIG1heC13aWR0aDogMzByZW07XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIHdpZHRoOiAyNXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEhlYWRlciwgTG9nbywgTWVudUJ1dHRvbiwgU3R5bGVkU3BhbiwgTG9hZGVyIH0gZnJvbSAnLi9OYXZCYXIuc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICh7IGxvZ28gfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBpc05hdk9wZW4sIHNldElzTmF2T3BlbiB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IGlzTmF2T3Blbj17aXNOYXZPcGVufT5cclxuICAgICAgPExvYWRlciBpZD1cImxvYWRlclwiIGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgIDxMb2dvIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgPEltYWdlIGltYWdlPXtsb2dvfSBwcmlvcml0eSAvPlxyXG4gICAgICAgIDwvTG9nbz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TWVudUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfSBpc05hdk9wZW49e2lzTmF2T3Blbn0gZGF0YS10ZXN0aWQ9XCJtZW51LWJ1dHRvblwiPlxyXG4gICAgICAgIDxTdHlsZWRTcGFuIHNob3J0IGlzTmF2T3Blbj17aXNOYXZPcGVufSAvPlxyXG4gICAgICAgIDxTdHlsZWRTcGFuIGlzTmF2T3Blbj17aXNOYXZPcGVufSAvPlxyXG4gICAgICA8L01lbnVCdXR0b24+XHJcbiAgICA8L0hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBsb2dvOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTB2aDtcclxuICBwYWRkaW5nOiAxcmVtICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgei1pbmRleDogMzA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUsIGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gYDFyZW0gJHt0aGVtZS5wYWRkaW5nLnN9YCA6IGAxcmVtICR7dGhlbWUucGFkZGluZy5tfWApfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmFgXHJcbiAgd2lkdGg6IDIycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgaGVpZ2h0OiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJzZyZW0nIDogJ3Vuc2V0Jyl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAkeyh7IGlzTmF2T3Blbiwgc2hvcnQgfSkgPT4gKHNob3J0ICYmICFpc05hdk9wZW4gPyAncmlnaHQnIDogJ2NlbnRlcicpfTtcclxuICB0cmFuc2Zvcm06ICR7KHsgc2hvcnQsIGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJ3NjYWxlWCgxKScgOiBzaG9ydCA/ICdzY2FsZVgoMC41KScgOiAnc2NhbGVYKDEpJyl9O1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgaXNOYXZPcGVuIH0pID0+IChpc05hdk9wZW4gPyAndHJhbnNsYXRlWSgyLjVyZW0pIHJvdGF0ZSg0NWRlZyknIDogJycpfTtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRyYW5zZm9ybTogJHsoeyBpc05hdk9wZW4gfSkgPT4gKGlzTmF2T3BlbiA/ICd0cmFuc2xhdGVZKC0yLjVyZW0pIHJvdGF0ZSgtNDVkZWcpJyA6ICcnKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAtMC4ycmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgaXNMb2FkaW5nIH0pID0+IChpc0xvYWRpbmcgPyAndHJhbnNwYXJlbnQnIDogdGhlbWUuY29sb3JzLmFjY2VudENvbG9yKX07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1vbGVjdWxlcy9MaXN0SXRlbS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgU3R5bGVkTmF2aWdhdGlvbiwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL05hdmlnYXRpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBuYXZMaW5rcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBzZXRJc05hdk9wZW4gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTmF2aWdhdGlvbj5cclxuICAgICAge25hdkxpbmtzLm1hcCgoeyBncm91cE5hbWUsIGlkLCBsaW5rcyB9KSA9PiAoXHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyIGtleT17aWR9PlxyXG4gICAgICAgICAgPExpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgICAgICA8aDM+e2dyb3VwTmFtZX08L2gzPlxyXG4gICAgICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBoYXNMaW5rcyBrZXk9e2xpbmsuaWR9IGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0eWxlZE5hdmlnYXRpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIG5hdkxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGdyb3VwTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgbGlua3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICB9KVxyXG4gICksXHJcbn07XHJcblxyXG5OYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBuYXZMaW5rczogW1xyXG4gICAge1xyXG4gICAgICBncm91cE5hbWU6ICcnLFxyXG4gICAgICBpZDogMCxcclxuICAgICAgbGlua3M6IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDByZW0sIGF1dG8pKTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54fTtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc1Z9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeGl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDV2aDtcclxuICByaWdodDogNXZ3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiA0MHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZMaXN0fTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnQG1vbGVjdWxlcy9SaWNoVGV4dC9SaWNoVGV4dCc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgUGFnZVRpbGUgZnJvbSAnQHRlbXBsYXRlcy9QYWdlVGlsZS9QYWdlVGlsZSc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRUaXRsZSxcclxuICBJbmZvU2VjdGlvbixcclxuICBJbmZvV3JhcHBlcixcclxuICBJbmZvQ29tcG9uZW50LFxyXG4gIFN0eWxlZFNwYW4sXHJcbiAgU3R5bGVkTGlzdCxcclxuICBTdHlsZWRJdGVtLFxyXG4gIFBhZ2VUaWxlV3JhcHBlcixcclxuICBTdHlsZWRUaWxlSGVhZGVyLFxyXG59IGZyb20gJy4vQ2lzY29Db3Vyc2Uuc3R5bGVzJztcclxuXHJcbmNvbnN0IENpc2NvQ291cnNlID0gKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXI6IHsgdGl0bGUsIGltYWdlIH0sXHJcbiAgICByaWNoVGV4dCxcclxuICAgIGNvdXJzZUluZm8sXHJcbiAgICBsaXN0VGl0bGUsXHJcbiAgICBsaXN0Q29tcG9uZW50LFxyXG4gIH0sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgaW1hZ2U9e2ltYWdlfT5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBjb2x1bW4+XHJcbiAgICAgICAge3JpY2hUZXh0Lm1hcCgoeyB0aXRsZSwgY29udGVudCwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgPFBhZ2VTZWN0aW9uIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgIDxSaWNoVGV4dD57Y29udGVudH08L1JpY2hUZXh0PlxyXG4gICAgICAgICAgPC9QYWdlU2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgICAgPEluZm9TZWN0aW9uPlxyXG4gICAgICAgIDxJbmZvV3JhcHBlcj5cclxuICAgICAgICAgIHtjb3Vyc2VJbmZvLm1hcCgoeyBjYXB0aW9uLCBpbmZvLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxJbmZvQ29tcG9uZW50IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRTcGFuPntjYXB0aW9ufTwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57aW5mb308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvSW5mb0NvbXBvbmVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW5mb1dyYXBwZXI+XHJcbiAgICAgIDwvSW5mb1NlY3Rpb24+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBzaG9ydCB3aWRlPlxyXG4gICAgICAgIDxQYWdlU2VjdGlvbiB3aWRlPlxyXG4gICAgICAgICAgPExpbmVIb3Jpem9udGFsIGxhcmdlPlxyXG4gICAgICAgICAgICA8aDE+e2xpc3RUaXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgIDxQYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIHtsaXN0Q29tcG9uZW50Lm1hcCgoeyB0aXRsZSwgbGlzdEl0ZW1zLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFBhZ2VUaWxlIHdpZGUga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGlsZUhlYWRlcj57dGl0bGV9PC9TdHlsZWRUaWxlSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkTGlzdD5cclxuICAgICAgICAgICAgICAgICAge2xpc3RJdGVtcy5tYXAoKHsgaXRlbSwgaWQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRJdGVtPntpdGVtfTwvU3R5bGVkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkTGlzdD5cclxuICAgICAgICAgICAgICA8L1BhZ2VUaWxlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvUGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgIDwvUGFnZVNlY3Rpb24+XHJcbiAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQ2lzY29Db3Vyc2UucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG4gICAgcmljaFRleHQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgY291cnNlSW5mbzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXN0Q29tcG9uZW50OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuQ2lzY29Db3Vyc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICB9LFxyXG4gICAgcmljaFRleHQ6IFtdLFxyXG4gICAgY291cnNlSW5mbzogW10sXHJcbiAgICBsaXN0VGl0bGU6ICcnLFxyXG4gICAgbGlzdENvbXBvbmVudDogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpc2NvQ291cnNlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyTW9iaWxlfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZ2VTZWN0aW9uV2lkdGh9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvQ29tcG9uZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZyZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5jYXB0aW9uTGFyZ2VNZWRpdW19O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC51bGBcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJdGVtID0gc3R5bGVkLnNwYW5gXHJcbiAgaW5saW5lLXNpemU6IDQwcmVtO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIGlubGluZS1zaXplOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlVGlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGlsZUhlYWRlciA9IHN0eWxlZC5oNGBcclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IENvbnRlbnRXcmFwcGVyLCBBZGRyZXNzV3JhcHBlciwgSW5mb3JtYXRpb25XcmFwcGVyIH0gZnJvbSAnLi9Db250YWN0LnN0eWxlcyc7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgZGF0YTogeyB0aXRsZSwgc2Nob29sTmFtZSwgY29udGFjdEluZm8gfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlV3JhcHBlcj5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEFkZHJlc3NXcmFwcGVyPlxyXG4gICAgICAgICAgPGg0PntzY2hvb2xOYW1lfTwvaDQ+XHJcbiAgICAgICAgPC9BZGRyZXNzV3JhcHBlcj5cclxuICAgICAgICA8SW5mb3JtYXRpb25XcmFwcGVyPlxyXG4gICAgICAgICAge2NvbnRhY3RJbmZvLm1hcCgoeyBpZCwgY2FwdGlvbiwgaW5mbyB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxwIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPntjYXB0aW9ufTwvc3Bhbj4ge2luZm99XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW5mb3JtYXRpb25XcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9QYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuQ29udGFjdC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWRkcmVzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNjaG9vbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250YWN0SW5mbzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkNvbnRhY3QuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgc2Nob29sTmFtZTogJycsXHJcbiAgICBjb250YWN0SW5mbzogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIHdpZHRoOiBjbGFtcCgkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVdpZHRofSwgMTAwJSwgODByZW0pO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZHJlc3NXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG5cclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMnJlbSAwIDZyZW0gMDtcclxuXHJcbiAgcCxcclxuICBzcGFuIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmNhcHRpb25MYXJnZX07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBtYXJnaW46IDJyZW0gMCAwIDA7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYXRhU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdG9tcy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZXJvQWNhZGVteVdyYXBwZXIsIEhlYWRlcldyYXBwZXIsIERlc2NyaXB0aW9uV3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9IZXJvQWNhZGVteS5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0FjYWRlbXkgPSAoeyBkYXRhOiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uLCBpbWFnZSB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9BY2FkZW15V3JhcHBlcj5cclxuICAgICAgPEhlYWRlcldyYXBwZXI+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgPC9IZWFkZXJXcmFwcGVyPlxyXG4gICAgICA8RGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBkYXRhPXtidXR0b259IC8+XHJcbiAgICAgIDwvRGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgPC9IZXJvQWNhZGVteVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9BY2FkZW15LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBkYXRhU2hhcGUsXHJcbn07XHJcblxyXG5IZXJvQWNhZGVteS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQWNhZGVteTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0FjYWRlbXlXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgcm93LWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICBncmlkLXJvdzogMS8yO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzE7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCA2MHJlbSk7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH0pO1xyXG4gICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy50aWxlUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya0dyYXk7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH0pO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVyb0NvdXJzZUNvbXBvbmVudCBmcm9tICdAbW9sZWN1bGVzL0hlcm9Db3Vyc2VDb21wb25lbnQvSGVyb0NvdXJzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgeyBIZXJvQ291cnNlV3JhcHBlciwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL0hlcm9Db3Vyc2VzLnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlcyA9ICh7IGRhdGE6IHsgdGl0bGUsIGhlcm9Db3Vyc2VzLCBhcnJvd0ltYWdlIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZVdyYXBwZXI+XHJcbiAgICAgIDxMaW5lSG9yaXpvbnRhbCBsYXJnZT5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICB7aGVyb0NvdXJzZXMubWFwKChjb3Vyc2VEYXRhKSA9PiAoXHJcbiAgICAgICAgICA8SGVyb0NvdXJzZUNvbXBvbmVudCBrZXk9e2NvdXJzZURhdGEuaWR9IGRhdGE9e2NvdXJzZURhdGF9IGltYWdlPXthcnJvd0ltYWdlfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9IZXJvQ291cnNlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0NvdXJzZXMucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBhcnJvd0ltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaGVyb0NvdXJzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0NvdXJzZXMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGhlcm9Db3Vyc2VzOiBbXSxcclxuICAgIHRpdGxlOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0NvdXJzZXM7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9Db3Vyc2VXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MHJlbSwgYXV0bykpO1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn07XHJcbiAgICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50IGZyb20gJ0Btb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQvSGVyb0luc3RydWN0b3JDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyIH0gZnJvbSAnLi9IZXJvSW5zdHJ1Y3RvcnMuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9JbnN0cnVjdG9ycyA9ICh7IGRhdGE6IHsgaW5zdHJ1Y3RvckNvbXBvbmVudHMgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvSW5zdHJ1Y3RvcnNXcmFwcGVyPlxyXG4gICAgICB7aW5zdHJ1Y3RvckNvbXBvbmVudHMubWFwKChpbnN0cnVjdG9yRGF0YSkgPT4gKFxyXG4gICAgICAgIDxIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCBrZXk9e2luc3RydWN0b3JEYXRhLmlkfSBkYXRhPXtpbnN0cnVjdG9yRGF0YX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlcm9JbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9JbnN0cnVjdG9ycy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGluc3RydWN0b3JDb21wb25lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBpbnN0cnVjdG9yQ29tcG9uZW50czogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9JbnN0cnVjdG9ycztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0luc3RydWN0b3JzV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnh9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm1WfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc307XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdG9tcy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IExpbmVIb3Jpem9udGFsIGZyb20gJ0BhdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbCc7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgeyBIZXJvUHJpY2luZ1dyYXBwZXIsIERlc2NyaXB0aW9uV3JhcHBlciB9IGZyb20gJy4vSGVyb1ByaWNpbmcuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9QcmljaW5nID0gKHsgZGF0YTogeyB0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbiB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9QcmljaW5nV3JhcHBlcj5cclxuICAgICAgPExpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgPERlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8QnV0dG9uIGRhdGE9e2J1dHRvbn0gYWNjZW50IC8+XHJcbiAgICAgIDwvRGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgPC9IZXJvUHJpY2luZ1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9QcmljaW5nLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSGVyb1ByaWNpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1ByaWNpbmc7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9QcmljaW5nV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy54Vn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnh9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxuICB3aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVXaWR0aH07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuXHJcbiAgICAmOnZpc2l0ZWQge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YlRleHR9O1xyXG4gICAgbWFyZ2luOiAwIDVyZW0gMCAwO1xyXG4gICAgd2lkdGg6IDM5cmVtO1xyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFRhbGx9IHtcclxuICAgICAgbWFyZ2luOiAwIDAgNHJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDRyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdG9tcy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZXJvV3JhcHBlciwgQ29udGVudFdyYXBwZXIsIEJ1dHRvbldyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vSGVyby5zdHlsZXMnO1xyXG5pbXBvcnQgeyBkYXRhU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5cclxuY29uc3QgSGVybyA9ICh7IGRhdGE6IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b25zLCBpbWFnZSB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9XcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoKGJ1dHRvbkRhdGEpID0+IChcclxuICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2J1dHRvbkRhdGEuaWR9IGRhdGE9e2J1dHRvbkRhdGF9IGhhc01hcmdpbiAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICA8SW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgPC9IZXJvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyby5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogZGF0YVNoYXBlLFxyXG59O1xyXG5cclxuSGVyby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgYnV0dG9uczogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQ0cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaDEge1xyXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcFdpZGV9IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTB2bWluO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDQ0cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQHRlbXBsYXRlcy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlcic7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZUhlYWRlci9QYWdlSGVhZGVyJztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ0Btb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQnO1xyXG5pbXBvcnQgUGFnZVRpbGVXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGVXcmFwcGVyL1BhZ2VUaWxlV3JhcHBlcic7XHJcbmltcG9ydCBQYWdlVGlsZSBmcm9tICdAdGVtcGxhdGVzL1BhZ2VUaWxlL1BhZ2VUaWxlJztcclxuaW1wb3J0IEFycm93TGluayBmcm9tICdAYXRvbXMvQXJyb3dMaW5rL0Fycm93TGluayc7XHJcbmltcG9ydCB7IFN0eWxlZFRpdGxlLCBTdHlsZWRTcGFuIH0gZnJvbSAnLi9PZmZlcnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IE9mZmVydCA9ICh7XHJcbiAgZGF0YToge1xyXG4gICAgc2VjdGlvbkhlYWRlcjogeyB0aXRsZSwgaW1hZ2UgfSxcclxuICAgIG9mZmVydENvbXBvbmVudHMsXHJcbiAgICBhcnJvd0ltYWdlLFxyXG4gIH0sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgaW1hZ2U9e2ltYWdlfSBsb25nVGV4dD5cclxuICAgICAgICA8TGluZVZlcnRpY2FsIGxhcmdlPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBzaG9ydCBjb2x1bW4+XHJcbiAgICAgICAge29mZmVydENvbXBvbmVudHMubWFwKCh7IHRpdGxlLCBjb250ZW50LCBvZmZlcnRDb3Vyc2VzLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICA8UGFnZVNlY3Rpb24ga2V5PXtpZH0+XHJcbiAgICAgICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPnt0aXRsZX08L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgPFJpY2hUZXh0Pntjb250ZW50fTwvUmljaFRleHQ+XHJcbiAgICAgICAgICAgIDxQYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAge29mZmVydENvdXJzZXMubWFwKCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlua05hbWUsIGxpbms6IHsgc2x1ZyB9LCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UGFnZVRpbGUga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4+e2Rlc2NyaXB0aW9ufTwvU3R5bGVkU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPEFycm93TGluayBhY2NlbnRlZCBzbHVnPXtzbHVnfSB0aXRsZT17bGlua05hbWV9IGltYWdlPXthcnJvd0ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlVGlsZT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9QYWdlVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk9mZmVydC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHNlY3Rpb25IZWFkZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG4gICAgb2ZmZXJ0Q29tcG9uZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBhcnJvd0ltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5PZmZlcnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgfSxcclxuICAgIG9mZmVydENvbXBvbmVudHM6IFtdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlcnQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5oZWFkZXJNb2JpbGV9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keVNtYWxsfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXInO1xyXG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFnZVNlY3Rpb24vUGFnZVNlY3Rpb24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ0Btb2xlY3VsZXMvUmljaFRleHQvUmljaFRleHQnO1xyXG5pbXBvcnQgUGFnZVRpbGVXcmFwcGVyIGZyb20gJ0B0ZW1wbGF0ZXMvUGFnZVRpbGVXcmFwcGVyL1BhZ2VUaWxlV3JhcHBlcic7XHJcbmltcG9ydCBQcmljaW5nQ29tcG9uZW50IGZyb20gJ0Btb2xlY3VsZXMvUHJpY2luZ0NvbXBvbmVudC9QcmljaW5nQ29tcG9uZW50JztcclxuXHJcbmNvbnN0IFByaWNpbmcgPSAoeyBkYXRhOiB7IHRpdGxlLCBjb250ZW50LCBwcmljaW5nQ29tcG9uZW50cyB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8UGFnZVNlY3Rpb24+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8UmljaFRleHQ+e2NvbnRlbnR9PC9SaWNoVGV4dD5cclxuICAgICAgICA8UGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICAgICAge3ByaWNpbmdDb21wb25lbnRzLm1hcCgocHJpY2luZ0NvbXBvbmVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgPFByaWNpbmdDb21wb25lbnQga2V5PXtpZH0gZGF0YT17cHJpY2luZ0NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUGFnZVRpbGVXcmFwcGVyPlxyXG4gICAgICA8L1BhZ2VTZWN0aW9uPlxyXG4gICAgPC9QYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuUHJpY2luZy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHByaWNpbmdDb21wb25lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuUHJpY2luZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBwcmljaW5nQ29tcG9uZW50czogW10sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICdAdGVtcGxhdGVzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICdAbW9sZWN1bGVzL1JpY2hUZXh0L1JpY2hUZXh0JztcclxuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL1BhZ2VTZWN0aW9uL1BhZ2VTZWN0aW9uJztcclxuXHJcbmNvbnN0IFJlZ3VsYXRpb25zID0gKHsgZGF0YTogeyB0aXRsZSwgY29udGVudCB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICA8UGFnZVNlY3Rpb24+XHJcbiAgICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8UmljaFRleHQ+e2NvbnRlbnR9PC9SaWNoVGV4dD5cclxuICAgICAgPC9QYWdlU2VjdGlvbj5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblJlZ3VsYXRpb25zLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5SZWd1bGF0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ3VsYXRpb25zO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVybyBmcm9tICdAc2VjdGlvbnMvSGVyby9IZXJvJztcclxuaW1wb3J0IEhlcm9JbnN0cnVjdG9ycyBmcm9tICdAc2VjdGlvbnMvSGVyb0luc3RydWN0b3JzL0hlcm9JbnN0cnVjdG9ycyc7XHJcbmltcG9ydCBIZXJvQ291cnNlcyBmcm9tICdAc2VjdGlvbnMvSGVyb0NvdXJzZXMvSGVyb0NvdXJzZXMnO1xyXG5pbXBvcnQgSGVyb1ByaWNpbmcgZnJvbSAnQHNlY3Rpb25zL0hlcm9QcmljaW5nL0hlcm9QcmljaW5nJztcclxuaW1wb3J0IEhlcm9BY2FkZW15IGZyb20gJ0BzZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteSc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJ0BzZWN0aW9ucy9Db250YWN0L0NvbnRhY3QnO1xyXG5pbXBvcnQgUmVndWxhdGlvbnMgZnJvbSAnQHNlY3Rpb25zL1JlZ3VsYXRpb25zL1JlZ3VsYXRpb25zJztcclxuaW1wb3J0IFByaWNpbmcgZnJvbSAnQHNlY3Rpb25zL1ByaWNpbmcvUHJpY2luZyc7XHJcbmltcG9ydCBPZmZlcnQgZnJvbSAnQHNlY3Rpb25zL09mZmVydC9PZmZlcnQnO1xyXG5pbXBvcnQgQ2lzY29Db3Vyc2UgZnJvbSAnQHNlY3Rpb25zL0Npc2NvQ291cnNlL0Npc2NvQ291cnNlJztcclxuXHJcbi8vIE1hcCBTdHJhcGkgc2VjdGlvbnMgdG8gc2VjdGlvbiBjb21wb25lbnRzXHJcbmNvbnN0IHNlY3Rpb25Db21wb25lbnRzID0ge1xyXG4gICdzZWN0aW9ucy5oZXJvJzogSGVybyxcclxuICAnc2VjdGlvbnMuaGVyby1pbnN0cnVjdG9ycyc6IEhlcm9JbnN0cnVjdG9ycyxcclxuICAnc2VjdGlvbnMuaGVyby1jb3Vyc2VzJzogSGVyb0NvdXJzZXMsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tcHJpY2luZyc6IEhlcm9QcmljaW5nLFxyXG4gICdzZWN0aW9ucy5oZXJvLWFjYWRlbXknOiBIZXJvQWNhZGVteSxcclxuICAnc2VjdGlvbnMuY29udGFjdCc6IENvbnRhY3QsXHJcbiAgJ3NlY3Rpb25zLnJlZ3VsYXRpb25zJzogUmVndWxhdGlvbnMsXHJcbiAgJ3NlY3Rpb25zLnByaWNpbmcnOiBQcmljaW5nLFxyXG4gICdzZWN0aW9ucy5vZmZlcnQnOiBPZmZlcnQsXHJcbiAgJ3NlY3Rpb25zLmNpc2NvLWNvdXJzZSc6IENpc2NvQ291cnNlLFxyXG59O1xyXG5cclxuLy8gRGlzcGxheSBhIHNlY3Rpb24gaW5kaXZpZHVhbGx5XHJcbmNvbnN0IFNlY3Rpb24gPSAoeyBzZWN0aW9uRGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgU2VjdGlvbkNvbXBvbmVudCA9IHNlY3Rpb25Db21wb25lbnRzW3NlY3Rpb25EYXRhLl9fY29tcG9uZW50XTtcclxuXHJcbiAgaWYgKCFTZWN0aW9uQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiA8U2VjdGlvbkNvbXBvbmVudCBkYXRhPXtzZWN0aW9uRGF0YX0gLz47XHJcbn07XHJcblxyXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIHNlY3Rpb25zXHJcbmNvbnN0IFNlY3Rpb25zID0gKHsgc2VjdGlvbnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgPFNlY3Rpb24gc2VjdGlvbkRhdGE9e3NlY3Rpb259IGtleT17YCR7c2VjdGlvbi5fX2NvbXBvbmVudH0ke3NlY3Rpb24uaWR9YH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgc2VjdGlvbkRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblNlY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcblNlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHNlY3Rpb25EYXRhOiB7XHJcbiAgICBfX2NvbXBvbmVudDogJycsXHJcbiAgfSxcclxufTtcclxuXHJcblNlY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzZWN0aW9uczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9ucztcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5cclxuY29uc3QgU2VvID0gKHsgc2VvIH0pID0+IHtcclxuICBjb25zdCB7IG1ldGFUaXRsZSwgbWV0YURlc2NyaXB0aW9uIH0gPSBzZW87XHJcblxyXG4gIC8vIFByZXZlbnQgZXJyb3JzIGlmIG5vIG1ldGFkYXRhIHdhcyBzZXRcclxuICBpZiAoIXNlbykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiA8TmV4dFNlbyB0aXRsZT17bWV0YVRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YURlc2NyaXB0aW9ufSAvPjtcclxufTtcclxuXHJcblNlby5wcm9wVHlwZXMgPSB7XHJcbiAgc2VvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbWV0YVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWV0YURlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2hhcmVJbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbztcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnQG9yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQG9yZ2FuaXNtcy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0BvcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICdwcm92aWRlcnMvQXBwUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBTdHlsZWRMYXlvdXQgfSBmcm9tICcuL0xheW91dC5zdHlsZXMnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIG5hdmlnYXRpb246IHsgbG9nbywgbmF2TGlua3MgfSwgZm9vdGVyIH0pID0+IHtcclxuICBjb25zdCB7IGlzTmF2T3BlbiB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRMYXlvdXQgaXNOYXZPcGVuPXtpc05hdk9wZW59PlxyXG4gICAgICA8TmF2QmFyIGxvZ289e2xvZ299IC8+XHJcbiAgICAgIHtpc05hdk9wZW4gJiYgPE5hdmlnYXRpb24gbmF2TGlua3M9e25hdkxpbmtzfSAvPn1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIGZvb3Rlcj17Zm9vdGVyfSAvPlxyXG4gICAgPC9TdHlsZWRMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgbmF2aWdhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5b3V0ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiAkeyh7IGlzTmF2T3BlbiB9KSA9PiAoaXNOYXZPcGVuID8gJzEwMHZoJyA6ICdmaXQtY29udGVudCcpfTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJXcmFwcGVyLCBDb250ZW50V3JhcHBlciwgSW1hZ2VXcmFwcGVyIH0gZnJvbSAnLi9QYWdlSGVhZGVyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBQYWdlSGVhZGVyID0gKHsgY2hpbGRyZW4sIGltYWdlLCBsb25nVGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlSGVhZGVyV3JhcHBlcj5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyIGxvbmdUZXh0PXtsb25nVGV4dH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxJbWFnZVdyYXBwZXIgbG9uZ1RleHQ9e2xvbmdUZXh0fT5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L1BhZ2VIZWFkZXJXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5QYWdlSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBsb25nVGV4dDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhsVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLm19O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tVn0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgaDEge1xyXG4gICAgbWF4LXdpZHRoOiAkeyh7IGxvbmdUZXh0IH0pID0+IChsb25nVGV4dCA/IGBtYXgtY29udGVudGAgOiBgNDByZW1gKX07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6ICR7KHsgbG9uZ1RleHQgfSkgPT4gKGxvbmdUZXh0ID8gYDEwMCVgIDogYDUwcmVtYCl9O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWF4LXdpZHRoOiAkeyh7IGxvbmdUZXh0IH0pID0+IChsb25nVGV4dCA/IGBtYXgtY29udGVudGAgOiBgNDByZW1gKX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHsoeyBsb25nVGV4dCB9KSA9PiAobG9uZ1RleHQgPyBgNDByZW1gIDogYDgwcmVtYCl9O1xyXG4gIG1heC13aWR0aDogJHsoeyBsb25nVGV4dCB9KSA9PiAobG9uZ1RleHQgPyBgNDByZW1gIDogYDgwcmVtYCl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9O1xyXG4gICAgbWFyZ2luOiAkeyh7IGxvbmdUZXh0IH0pID0+IChsb25nVGV4dCA/ICcwIGF1dG8nIDogMCl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHBhZGRpbmctdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcubVZ9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFBhZ2VTZWN0aW9uV3JhcHBlciB9IGZyb20gJy4vUGFnZVNlY3Rpb24uc3R5bGUnO1xyXG5cclxuY29uc3QgUGFnZVNlY3Rpb24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8UGFnZVNlY3Rpb25XcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvUGFnZVNlY3Rpb25XcmFwcGVyPjtcclxufTtcclxuXHJcblBhZ2VTZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY2hpbGRyZW5TaGFwZSxcclxuICBwcm9wczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlU2VjdGlvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVNlY3Rpb25XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFnZVNlY3Rpb25QYWRkaW5nfTtcclxuICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUsIHdpZGUgfSkgPT4gKHdpZGUgPyAnbWF4LWNvbnRlbnQnIDogdGhlbWUuZGltZW5zaW9ucy5wYWdlU2VjdGlvbldpZHRoKX07XHJcbiAgbWluLXdpZHRoOiAkeyh7IHdpZGUgfSkgPT4gKHdpZGUgPyAnMTIwcmVtJyA6IDApfTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIG1pbi13aWR0aDogJHsoeyB3aWRlIH0pID0+ICh3aWRlID8gJzEwMCUnIDogMCl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcuc1Z9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5zc1Z9O1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNoaWxkcmVuU2hhcGUgfSBmcm9tICdwcm9wVHlwZXMvY29tcG9uZW50VHlwZXMnO1xyXG5pbXBvcnQgeyBTdHlsZWRQYWdlVGlsZVdyYXBwZXIgfSBmcm9tICcuL1BhZ2VUaWxlV3JhcHBlci5zdHlsZXMnO1xyXG5cclxuY29uc3QgUGFnZVRpbGVXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkUGFnZVRpbGVXcmFwcGVyPntjaGlsZHJlbn08L1N0eWxlZFBhZ2VUaWxlV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlVGlsZVdyYXBwZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjaGlsZHJlblNoYXBlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpbGVXcmFwcGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRQYWdlVGlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgUGFnZVRpbGVXcmFwcGVyIH0gZnJvbSAnLi9QYWdlVGlsZS5zdHlsZXMnO1xyXG5pbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAncHJvcFR5cGVzL2NvbXBvbmVudFR5cGVzJztcclxuXHJcbmNvbnN0IFBhZ2VUaWxlID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPFBhZ2VUaWxlV3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1BhZ2VUaWxlV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlVGlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpbGU7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VUaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5yaWNoVGV4dE1hcmdpblRvcH07XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnRpbGVQYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICB3aWR0aDogJHsoeyB3aWRlIH0pID0+ICh3aWRlID8gJ21heC1jb250ZW50JyA6ICc0MHJlbScpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMudGlsZVBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY2hpbGRyZW5TaGFwZSB9IGZyb20gJ3Byb3BUeXBlcy9jb21wb25lbnRUeXBlcyc7XHJcbmltcG9ydCB7IFN0eWxlZFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi9QYWdlV3JhcHBlci5zdHlsZXMnO1xyXG5cclxuY29uc3QgUGFnZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkUGFnZVdyYXBwZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9TdHlsZWRQYWdlV3JhcHBlcj47XHJcbn07XHJcblxyXG5QYWdlV3JhcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgcHJvcHM6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhZGRpbmcueFZ9ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFkZGluZy5tfTtcclxuICBtaW4taGVpZ2h0OiAkeyh7IHNob3J0IH0pID0+IChzaG9ydCA/ICd1bnNldCcgOiAnOTB2aCcpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246ICR7KHsgY29sdW1uIH0pID0+IChjb2x1bW4gPyAnY29sdW1uJyA6ICdyb3cnKX07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nLnhWfSAkeyh7IHRoZW1lLCB3aWRlIH0pID0+ICh3aWRlID8gdGhlbWUucGFkZGluZy54cyA6IHRoZW1lLnBhZGRpbmcubSl9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSwgd2lkZSB9KSA9PiAod2lkZSA/IHRoZW1lLm1xLmxhcHRvcExhcmdlIDogdGhlbWUubXEudGFibGV0KX0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gIH1cclxuYDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAndXRpbHMvYXBpJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL3RlbXBsYXRlcy9MYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IFNlbyBmcm9tICdjb21wb25lbnRzL3N0cmFwaS9zZW8nO1xyXG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gJ3V0aWxzL2dldFBhZ2VEYXRhJztcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJztcclxuXHJcbmNvbnN0IER5bmFtaWNQYWdlID0gKHsgc2VjdGlvbnMsIG5hdmlnYXRpb24sIGZvb3Rlciwgc2VvIH0pID0+IHtcclxuICBpZiAoIXNlY3Rpb25zPy5sZW5ndGgpIHtcclxuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBmb290ZXI9e2Zvb3Rlcn0+XHJcbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XHJcbiAgICAgIDxTZWN0aW9ucyBzZWN0aW9ucz17c2VjdGlvbnN9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuRHluYW1pY1BhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICBuYXZpZ2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlbzogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYWdlcyA9IGF3YWl0IGZldGNoQVBJKCcvcGFnZXMnKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwYWdlcy5tYXAoKHBhZ2UpID0+IHtcclxuICAgIC8vIERlY29tcG9zZSB0aGUgc2x1ZyB0aGF0IHdhcyBzYXZlZCBpbiBTdHJhcGlcclxuICAgIGNvbnN0IHNsdWdBcnJheSA9ICFwYWdlLnNsdWcgPyBmYWxzZSA6IHBhZ2Uuc2x1Zy5zcGxpdCgnLycpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnOiBzbHVnQXJyYXkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGEoeyBzbHVnOiAhcGFyYW1zLnNsdWcgPyBbJyddIDogcGFyYW1zLnNsdWcgfSk7XHJcbiAgY29uc3QgbmF2aWdhdGlvbiA9IGF3YWl0IGZldGNoQVBJKCcvbmF2aWdhdGlvbicpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGF3YWl0IGZldGNoQVBJKCcvZm9vdGVyJyk7XHJcblxyXG4gIGlmIChwYWdlRGF0YSA9PSBudWxsKSB7XHJcbiAgICAvLyBHaXZpbmcgdGhlIHBhZ2Ugbm8gcHJvcHMgd2lsbCB0cmlnZ2VyIGEgNDA0IHBhZ2VcclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb250ZW50LCBzZW8gfSA9IHBhZ2VEYXRhO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VjdGlvbnM6IGNvbnRlbnQsXHJcbiAgICAgIHNlbyxcclxuICAgICAgbmF2aWdhdGlvbixcclxuICAgICAgZm9vdGVyLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksIFByb3BUeXBlcy5vYmplY3RdKSxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxufSkuaXNSZXF1aXJlZDtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGlsZHJlblNoYXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLCBQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLm5vZGVdKTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGlzTmF2T3BlbjogZmFsc2UsXHJcbiAgc2V0SXNOYXZPcGVuOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBBcHBQcm92aWRlciA9ICh7IGNoaWxkcmVuLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTmF2T3Blbiwgc2V0SXNOYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKHJvdXRlcikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHBhcmVudDogJyNsb2FkZXInIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTmF2T3BlbixcclxuICAgICAgICBzZXRJc05hdk9wZW4sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwUHJvdmlkZXI7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnfSR7cGF0aH1gO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZURhdGEocGFyYW1zKSB7XHJcbiAgY29uc3Qgc2x1ZyA9IHBhcmFtcy5zbHVnLmpvaW4oJy8nKTtcclxuICAvLyBGaW5kIHRoZSBwYWdlcyB0aGF0IG1hdGNoIHRoaXMgc2x1Z1xyXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IGZldGNoQVBJKGAvcGFnZXM/c2x1Zz0ke3NsdWd9YCk7XHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBmb3VuZCBzb21ldGhpbmcsIG90aGVyd2lzZSByZXR1cm4gbnVsbFxyXG4gIGlmIChwYWdlc0RhdGEgPT0gbnVsbCB8fCBwYWdlc0RhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgaXRlbSBzaW5jZSB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgcmVzdWx0IHBlciBzbHVnXHJcbiAgcmV0dXJuIHBhZ2VzRGF0YVswXTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEoeyB1cmwgfSkge1xyXG4gIGNvbnN0IGltYWdlVXJsID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsO1xyXG4gIHJldHVybiBpbWFnZVVybDtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxpbmsiLCJJbWFnZSIsIkFycm93TGlua1dyYXBwZXIiLCJJbWFnZVdyYXBwZXIiLCJBcnJvd0xpbmsiLCJzbHVnIiwidGl0bGUiLCJpbWFnZSIsImFjY2VudGVkIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsIm1haW5Db2xvciIsImZvbnRTaXplIiwiYm9keSIsImRpdiIsIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsImRhdGEiLCJoYXNNYXJnaW4iLCJhY2NlbnQiLCJjYXB0aW9uIiwiaXNGaWxsZWQiLCJsaW5rIiwic2hhcGUiLCJhY2NlcHQiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsIndoaXRlIiwiRnVuY3Rpb25hbExpbmsiLCJuYW1lIiwibmV3VGFiIiwic2V0SXNOYXZPcGVuIiwic3RhdGUiLCJmdW5jIiwiTmV4dEltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJOZXh0SW1hZ2VXcmFwcGVyIiwiU3R5bGVkTmV4dEltYWdlIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkZXIiLCJpbWFnZVVybCIsImNvbnNvbGUiLCJlcnJvciIsInVybCIsIm51bWJlciIsInByaW9yaXR5IiwiY2hpbGRyZW5TaGFwZSIsIkxpbmVIb3Jpem9udGFsV3JhcHBlciIsIkxpbmUiLCJMaW5lSG9yaXpvbnRhbCIsImNoaWxkcmVuIiwibGFyZ2UiLCJzcGFuIiwiTGluZVZlcnRpY2FsV3JhcHBlciIsIkxpbmVWZXJ0aWNhbCIsIm1xIiwibW9iaWxlTGFyZ2UiLCJIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciIsIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsImxpbmtOYW1lIiwiZGltZW5zaW9ucyIsInRpbGVQYWRkaW5nIiwiYm94U2hhZG93IiwidGlsZVBhZGRpbmdNb2JpbGUiLCJIZXJvSW5zdHJ1Y3RvcldyYXBwZXIiLCJJbnN0cnVjdG9yV3JhcHBlciIsIkhlcm9JbnN0cnVjdG9yQ29tcG9uZW50IiwiaGVhZGVyIiwiaW5zdHJ1Y3RvciIsImxhcHRvcCIsInBhZGRpbmciLCJtViIsImhlcm9JbnN0cnVjdG9ycyIsIkxpc3RJdGVtV3JhcHBlciIsIkJ1bGxldCIsIkxpc3RJdGVtIiwiaGFzTGlua3MiLCJsaSIsIm5hdkxpc3QiLCJtb2JpbGVTbWFsbCIsIlBhZ2VUaWxlIiwiU2VtZXN0ZXIiLCJIZWFkIiwiUm93IiwiQW5ub3RhdGlvbiIsIlByaWNpbmdDb21wb25lbnQiLCJzZW1lc3RlciIsInRhYmxlSGVhZCIsInRhYmxlUm93cyIsImFubm90YXRpb25zIiwicm93TmFtZSIsInJvd0NvbnRlbnQiLCJtYXAiLCJpZCIsImFubm90YXRpb24iLCJhcnJheU9mIiwic3ViVGV4dCIsImRhcmtCbHVlIiwiY2FwdGlvbk1lZGl1bSIsInAiLCJjYXB0aW9uU21hbGwiLCJTdHlsZWRNYXJrZG93biIsIlJpY2hUZXh0IiwiTWFya2Rvd24iLCJyaWNoVGV4dE1hcmdpblRvcCIsImJsYWNrIiwiU3R5bGVkRm9vdGVyIiwiRm9vdGVyV3JhcHBlciIsIkNvbnRlbnRXcmFwcGVyIiwiSW5mb3JtYXRpb25XcmFwcGVyIiwiU3R5bGVkU2Nob29sSW5mbyIsIkltYWdlc1dyYXBwZXIiLCJGb290ZXIiLCJmb290ZXIiLCJzY2hvb2xOYW1lIiwiZm9vdGVySW5mbyIsImZvb3RlckltYWdlcyIsImluZm8iLCJmb290ZXJJbWFnZSIsIm0iLCJzIiwieHMiLCJ4c1YiLCJ0aWxlV2lkdGgiLCJkZXNrdG9wVGFsbCIsInRhYmxldCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiSGVhZGVyIiwiTG9nbyIsIk1lbnVCdXR0b24iLCJTdHlsZWRTcGFuIiwiTG9hZGVyIiwiTmF2QmFyIiwibG9nbyIsImlzTG9hZGluZyIsImlzTmF2T3BlbiIsImJ1dHRvbiIsInNob3J0IiwiU3R5bGVkTmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJuYXZMaW5rcyIsImdyb3VwTmFtZSIsImxpbmtzIiwibmF2IiwieFYiLCJ4Iiwic1YiLCJFeGl0QnV0dG9uIiwiUGFnZUhlYWRlciIsIlBhZ2VXcmFwcGVyIiwiUGFnZVNlY3Rpb24iLCJTdHlsZWRUaXRsZSIsIkluZm9TZWN0aW9uIiwiSW5mb1dyYXBwZXIiLCJJbmZvQ29tcG9uZW50IiwiU3R5bGVkTGlzdCIsIlN0eWxlZEl0ZW0iLCJQYWdlVGlsZVdyYXBwZXIiLCJTdHlsZWRUaWxlSGVhZGVyIiwiQ2lzY29Db3Vyc2UiLCJyaWNoVGV4dCIsImNvdXJzZUluZm8iLCJsaXN0VGl0bGUiLCJsaXN0Q29tcG9uZW50IiwiY29udGVudCIsImxpc3RJdGVtcyIsIml0ZW0iLCJoMSIsImhlYWRlck1vYmlsZSIsInNlY3Rpb24iLCJwYWdlU2VjdGlvbldpZHRoIiwiY2FwdGlvbkxhcmdlTWVkaXVtIiwidWwiLCJoNCIsIkFkZHJlc3NXcmFwcGVyIiwiQ29udGFjdCIsImNvbnRhY3RJbmZvIiwiYWRkcmVzcyIsImNhcHRpb25MYXJnZSIsImRhdGFTaGFwZSIsIkhlcm9BY2FkZW15V3JhcHBlciIsIkhlYWRlcldyYXBwZXIiLCJEZXNjcmlwdGlvbldyYXBwZXIiLCJIZXJvQWNhZGVteSIsImRlc2t0b3AiLCJIZXJvQ291cnNlV3JhcHBlciIsIkhlcm9Db3Vyc2VzIiwiaGVyb0NvdXJzZXMiLCJhcnJvd0ltYWdlIiwiY291cnNlRGF0YSIsIkhlcm9JbnN0cnVjdG9yc1dyYXBwZXIiLCJIZXJvSW5zdHJ1Y3RvcnMiLCJpbnN0cnVjdG9yQ29tcG9uZW50cyIsImluc3RydWN0b3JEYXRhIiwibGFwdG9wTGFyZ2UiLCJIZXJvUHJpY2luZ1dyYXBwZXIiLCJIZXJvUHJpY2luZyIsIkhlcm9XcmFwcGVyIiwiQnV0dG9uV3JhcHBlciIsIkhlcm8iLCJidXR0b25zIiwiYnV0dG9uRGF0YSIsImRlc2t0b3BXaWRlIiwiT2ZmZXJ0Iiwic2VjdGlvbkhlYWRlciIsIm9mZmVydENvbXBvbmVudHMiLCJvZmZlcnRDb3Vyc2VzIiwiYm9keVNtYWxsIiwiUHJpY2luZyIsInByaWNpbmdDb21wb25lbnRzIiwicHJpY2luZ0NvbXBvbmVudCIsIlJlZ3VsYXRpb25zIiwic2VjdGlvbkNvbXBvbmVudHMiLCJTZWN0aW9uIiwic2VjdGlvbkRhdGEiLCJTZWN0aW9uQ29tcG9uZW50IiwiX19jb21wb25lbnQiLCJTZWN0aW9ucyIsInNlY3Rpb25zIiwiTmV4dFNlbyIsIlNlbyIsInNlbyIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsInNoYXJlSW1hZ2UiLCJTdHlsZWRMYXlvdXQiLCJMYXlvdXQiLCJuYXZpZ2F0aW9uIiwiUGFnZUhlYWRlcldyYXBwZXIiLCJsb25nVGV4dCIsInhsViIsIlBhZ2VTZWN0aW9uV3JhcHBlciIsInByb3BzIiwicGFnZVNlY3Rpb25QYWRkaW5nIiwid2lkZSIsInNzViIsIlN0eWxlZFBhZ2VUaWxlV3JhcHBlciIsIlN0eWxlZFBhZ2VXcmFwcGVyIiwiY29sdW1uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwia2luZCIsInciLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZldGNoQVBJIiwiZ2V0UGFnZURhdGEiLCJFcnJvclBhZ2UiLCJEeW5hbWljUGFnZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJzbHVnQXJyYXkiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFnZURhdGEiLCJvbmVPZlR5cGUiLCJub2RlIiwiY3JlYXRlQ29udGV4dCIsIk5Qcm9ncmVzcyIsIkFwcFByb3ZpZGVyIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3RhcnQiLCJjb25maWd1cmUiLCJoYW5kbGVTdG9wIiwiZG9uZSIsIm9mZiIsImdldFN0cmFwaVVSTCIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwicGFnZXNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==