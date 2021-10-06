(function() {
var exports = {};
exports.id = "pages/[[...slug]]";
exports.ids = ["pages/[[...slug]]"];
exports.modules = {

/***/ "./components/atoms/ArrowLink/ArrowLink.js":
/*!*************************************************!*\
  !*** ./components/atoms/ArrowLink/ArrowLink.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _ArrowLink_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowLink.styles */ "./components/atoms/ArrowLink/ArrowLink.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\ArrowLink\\ArrowLink.js";





const ArrowLink = ({
  link,
  title,
  image
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${link.slug}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_4__.ArrowLinkWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
          image: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)
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

/* harmony default export */ __webpack_exports__["default"] = (ArrowLink);

/***/ }),

/***/ "./components/atoms/ArrowLink/ArrowLink.styles.js":
/*!********************************************************!*\
  !*** ./components/atoms/ArrowLink/ArrowLink.styles.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowLinkWrapper": function() { return /* binding */ ArrowLinkWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ArrowLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ArrowLinkstyles__ArrowLinkWrapper",
  componentId: "sc-1cd42j-0"
})(["display:flex;align-items:center;justify-content:center;align-self:flex-end;margin-top:2rem;&:visited{border-bottom:2px solid ", ";color:", ";}h5{border-bottom:2px solid ", ";margin-right:2rem;font-size:", ";}"], ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.fontSize.body);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ArrowLinkstyles__ImageWrapper",
  componentId: "sc-1cd42j-1"
})(["width:3.8rem;"]);

/***/ }),

/***/ "./components/atoms/Button/Button.js":
/*!*******************************************!*\
  !*** ./components/atoms/Button/Button.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.styles */ "./components/atoms/Button/Button.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Button\\Button.js";



const Button = ({
  data,
  hasMargin,
  accent
}) => {
  const {
    caption,
    isFilled,
    link
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_styles__WEBPACK_IMPORTED_MODULE_2__.StyledButton, {
    hasMargin: hasMargin,
    href: link.slug,
    isFilled: isFilled,
    accent: accent,
    children: caption
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/Button/Button.styles.js":
/*!**************************************************!*\
  !*** ./components/atoms/Button/Button.styles.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": function() { return /* binding */ StyledButton; }
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

/***/ "./components/atoms/FunctionalLink.js":
/*!********************************************!*\
  !*** ./components/atoms/FunctionalLink.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\FunctionalLink.js";



const FunctionalLink = ({
  link,
  setIsNavOpen
}) => {
  const {
    name,
    slug,
    newTab
  } = link;

  if (newTab) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: slug,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: () => setIsNavOpen(state => !state),
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${slug}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: () => setIsNavOpen(state => !state),
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FunctionalLink);

/***/ }),

/***/ "./components/atoms/Image/Image.js":
/*!*****************************************!*\
  !*** ./components/atoms/Image/Image.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.styles */ "./components/atoms/Image/Image.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Image\\Image.js";



const Image = ({
  image,
  priority
}) => {
  const {
    url,
    alternativeText,
    width,
    height
  } = image;

  const loader = () => {
    return (0,utils_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_2__.NextImageWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_2__.StyledNextImage, {
      priority: priority,
      loader: loader,
      layout: "responsive",
      width: width,
      height: height,
      src: url,
      alt: alternativeText || 'image'
    }, void 0, false, {
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

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/atoms/Image/Image.styles.js":
/*!************************************************!*\
  !*** ./components/atoms/Image/Image.styles.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextImageWrapper": function() { return /* binding */ NextImageWrapper; },
/* harmony export */   "StyledNextImage": function() { return /* binding */ StyledNextImage; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LineHorizontal_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineHorizontal.styles */ "./components/atoms/LineHorizontal/LineHorizontal.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\LineHorizontal\\LineHorizontal.js";



const LineHorizontal = ({
  children,
  large
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LineHorizontal_styles__WEBPACK_IMPORTED_MODULE_2__.LineHorizontalWrapper, {
    children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LineHorizontal_styles__WEBPACK_IMPORTED_MODULE_2__.Line, {
      large: large
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LineHorizontal);

/***/ }),

/***/ "./components/atoms/LineHorizontal/LineHorizontal.styles.js":
/*!******************************************************************!*\
  !*** ./components/atoms/LineHorizontal/LineHorizontal.styles.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineHorizontalWrapper": function() { return /* binding */ LineHorizontalWrapper; },
/* harmony export */   "Line": function() { return /* binding */ Line; }
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
}) => large ? '2.2rem' : '1.5rem');

/***/ }),

/***/ "./components/atoms/LineVertical/LineVertical.js":
/*!*******************************************************!*\
  !*** ./components/atoms/LineVertical/LineVertical.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LineVertical_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineVertical.styles */ "./components/atoms/LineVertical/LineVertical.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\LineVertical\\LineVertical.js";



const LineVertical = ({
  children,
  large
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LineVertical_styles__WEBPACK_IMPORTED_MODULE_2__.LineVerticalWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LineVertical_styles__WEBPACK_IMPORTED_MODULE_2__.Line, {
      large: large
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LineVertical);

/***/ }),

/***/ "./components/atoms/LineVertical/LineVertical.styles.js":
/*!**************************************************************!*\
  !*** ./components/atoms/LineVertical/LineVertical.styles.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineVerticalWrapper": function() { return /* binding */ LineVerticalWrapper; },
/* harmony export */   "Line": function() { return /* binding */ Line; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LineVerticalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LineVerticalstyles__LineVerticalWrapper",
  componentId: "sc-150pe5b-0"
})(["display:flex;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "LineVerticalstyles__Line",
  componentId: "sc-150pe5b-1"
})(["min-width:", ";background-color:", ";margin-right:", ";"], ({
  large
}) => large ? '0.8rem' : '0.4rem', ({
  theme
}) => theme.colors.accentColor, ({
  large
}) => large ? '2.2rem' : '1.5rem');

/***/ }),

/***/ "./components/molecules/HeroCourseComponent/HeroCourseComponent.js":
/*!*************************************************************************!*\
  !*** ./components/molecules/HeroCourseComponent/HeroCourseComponent.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/ArrowLink/ArrowLink */ "./components/atoms/ArrowLink/ArrowLink.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroCourseComponent.styles */ "./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent\\HeroCourseComponent.js";





const HeroCourseComponent = ({
  data,
  image
}) => {
  const {
    title,
    description,
    link,
    linkTitle
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_4__.HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      link: link,
      title: linkTitle,
      image: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroCourseComponent);

/***/ }),

/***/ "./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js":
/*!********************************************************************************!*\
  !*** ./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroCourseComponentWrapper": function() { return /* binding */ HeroCourseComponentWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroCourseComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroCourseComponentstyles__HeroCourseComponentWrapper",
  componentId: "sc-nhrq3k-0"
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
}) => theme.dimensions.cardPaddingMobile);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroCourseComponentstyles__ImageWrapper",
  componentId: "sc-nhrq3k-1"
})(["height:10rem;width:10rem;border-radius:50%;position:absolute;background-color:darkGray;transform:translate(-90%,-65%);", "{transform:translate(-45%,-65%);}", "{height:9.5rem;width:9.5rem;transform:translate(-40%,-65%);}", "{height:8rem;width:8rem;transform:translate(-45%,-65%);}"], ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.mq.mobileMedium, ({
  theme
}) => theme.mq.mobileSmall);

/***/ }),

/***/ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js":
/*!*********************************************************************************!*\
  !*** ./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroInstructorComponent.styles */ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroInstructorComponent\\HeroInstructorComponent.js";



const HeroInstructorComponent = ({
  data
}) => {
  const {
    header,
    instructor,
    description
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_2__.HeroInstructorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_2__.ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_2__.InstructorWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: instructor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroInstructorComponent);

/***/ }),

/***/ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js":
/*!****************************************************************************************!*\
  !*** ./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroInstructorWrapper": function() { return /* binding */ HeroInstructorWrapper; },
/* harmony export */   "InstructorWrapper": function() { return /* binding */ InstructorWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroInstructorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__HeroInstructorWrapper",
  componentId: "sc-1l3kkur-0"
})(["display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin:5rem 0;", "{&:first-child{justify-content:flex-start;}&:nth-child(2){justify-content:flex-end;}}", "{margin:0 0 10rem 0;&:not(:last-child){margin:10rem 0 10rem 0;}}", "{margin:0 0 8rem 0;&:not(:last-child){margin:8rem 0 8rem 0;}}"], ({
  theme
}) => theme.mq.heroInstructors, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.mq.mobileSmall);
const InstructorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__InstructorWrapper",
  componentId: "sc-1l3kkur-1"
})(["flex-basis:32rem;display:flex;flex-direction:column;color:", ";h4{margin-bottom:1rem;}", "{flex-basis:40rem;}", "{flex-basis:unset;}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.mq.mobileSmall);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroInstructorComponentstyles__ImageWrapper",
  componentId: "sc-1l3kkur-2"
})(["background-color:darkGray;min-width:17rem;min-height:17rem;border-radius:50%;margin:2rem 4rem;", "{margin:0 4rem 0 0;}"], ({
  theme
}) => theme.mq.heroInstructors);

/***/ }),

/***/ "./components/molecules/ListItem/ListItem.js":
/*!***************************************************!*\
  !*** ./components/molecules/ListItem/ListItem.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_FunctionalLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/FunctionalLink */ "./components/atoms/FunctionalLink.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _ListItem_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem.styles */ "./components/molecules/ListItem/ListItem.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\ListItem\\ListItem.js";





const ListItem = ({
  link,
  listIcon,
  setIsNavOpen
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItem_styles__WEBPACK_IMPORTED_MODULE_4__.ListItemWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItem_styles__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
        image: listIcon,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_FunctionalLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      link: link,
      setIsNavOpen: setIsNavOpen
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

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./components/molecules/ListItem/ListItem.styles.js":
/*!**********************************************************!*\
  !*** ./components/molecules/ListItem/ListItem.styles.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemWrapper": function() { return /* binding */ ListItemWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ListItemstyles__ListItemWrapper",
  componentId: "sc-4q19d4-0"
})(["display:flex;align-items:center;&:not(:last-child){margin-bottom:1rem;}a{font-size:", ";}"], ({
  theme
}) => theme.fontSize.navList);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ListItemstyles__ImageWrapper",
  componentId: "sc-4q19d4-1"
})(["width:2rem;margin-right:2rem;"]);

/***/ }),

/***/ "./components/organisms/NavBar/NavBar.js":
/*!***********************************************!*\
  !*** ./components/organisms/NavBar/NavBar.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _NavBar_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar.styles */ "./components/organisms/NavBar/NavBar.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\NavBar\\NavBar.js";




const NavBar = ({
  logo,
  menuImage,
  setIsNavOpen
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_3__.Header, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_3__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: logo,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_3__.MenuImage, {
      onClick: () => setIsNavOpen(state => !state),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: menuImage,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/organisms/NavBar/NavBar.styles.js":
/*!******************************************************!*\
  !*** ./components/organisms/NavBar/NavBar.styles.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; },
/* harmony export */   "Logo": function() { return /* binding */ Logo; },
/* harmony export */   "MenuImage": function() { return /* binding */ MenuImage; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "NavBarstyles__Header",
  componentId: "sc-12uykx8-0"
})(["display:flex;justify-content:space-between;align-items:center;min-height:10vh;padding:1rem ", ";background-color:", ";color:", ";position:sticky;top:0;z-index:10;border-bottom:2px solid ", ";img{border-radius:0;}"], ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.accentColor);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "NavBarstyles__Logo",
  componentId: "sc-12uykx8-1"
})(["width:25rem;"]);
const MenuImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "NavBarstyles__MenuImage",
  componentId: "sc-12uykx8-2"
})(["background-color:transparent;border:none;width:5rem;cursor:pointer;"]);

/***/ }),

/***/ "./components/organisms/Navigation/Navigation.js":
/*!*******************************************************!*\
  !*** ./components/organisms/Navigation/Navigation.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @molecules/ListItem/ListItem */ "./components/molecules/ListItem/ListItem.js");
/* harmony import */ var _Navigation_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation.styles */ "./components/organisms/Navigation/Navigation.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Navigation\\Navigation.js";





const Navigation = ({
  navLinks,
  setIsNavOpen,
  exitButton,
  navListIcon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_4__.StyledNavigation, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_4__.ExitButton, {
      onClick: () => setIsNavOpen(state => !state),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: exitButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), navLinks.map(({
      groupName,
      id,
      links
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: groupName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: links.map(link => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, {
          listIcon: navListIcon,
          link: link,
          setIsNavOpen: setIsNavOpen
        }, link.id, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/organisms/Navigation/Navigation.styles.js":
/*!**************************************************************!*\
  !*** ./components/organisms/Navigation/Navigation.styles.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledNavigation": function() { return /* binding */ StyledNavigation; },
/* harmony export */   "ExitButton": function() { return /* binding */ ExitButton; },
/* harmony export */   "ContentWrapper": function() { return /* binding */ ContentWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({
  displayName: "Navigationstyles__StyledNavigation",
  componentId: "sc-1wwrjzy-0"
})(["position:absolute;top:0;left:0;height:100vh;width:100%;z-index:20;background-color:", ";position:relative;padding:", ";display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto auto;column-gap:", ";row-gap:", ";img{border-radius:0;}"], ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.dimensions.navigationPadding, ({
  theme
}) => theme.dimensions.navigationColumnGap, ({
  theme
}) => theme.dimensions.navigationRowGap);
const ExitButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Navigationstyles__ExitButton",
  componentId: "sc-1wwrjzy-1"
})(["border:none;background-color:transparent;height:5rem;width:5rem;position:absolute;top:5vh;right:5vw;cursor:pointer;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navigationstyles__ContentWrapper",
  componentId: "sc-1wwrjzy-2"
})(["display:flex;flex-direction:column;h3{border-bottom:0.4rem solid ", ";margin-bottom:2rem;}a{font-size:", ";}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.fontSize.navList);

/***/ }),

/***/ "./components/sections/HeroAcademy/HeroAcademy.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroAcademy/HeroAcademy.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroAcademy.styles */ "./components/sections/HeroAcademy/HeroAcademy.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroAcademy\\HeroAcademy.js";






const HeroAcademy = ({
  data
}) => {
  const {
    title,
    description,
    button,
    image
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.HeroAcademyWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.HeaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroAcademy_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
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

/* harmony default export */ __webpack_exports__["default"] = (HeroAcademy);

/***/ }),

/***/ "./components/sections/HeroAcademy/HeroAcademy.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/HeroAcademy/HeroAcademy.styles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroAcademyWrapper": function() { return /* binding */ HeroAcademyWrapper; },
/* harmony export */   "HeaderWrapper": function() { return /* binding */ HeaderWrapper; },
/* harmony export */   "DescriptionWrapper": function() { return /* binding */ DescriptionWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroAcademyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroAcademystyles__HeroAcademyWrapper",
  componentId: "sc-tcjolo-0"
})(["padding:10vh 0 10vh ", ";display:grid;row-gap:4rem;column-gap:8rem;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;", "{padding:10vh ", ";grid-template-columns:1fr;grid-template-rows:auto auto auto;justify-items:center;}", "{padding:5vh ", ";}"], ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.paddingMobile);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroAcademystyles__HeaderWrapper",
  componentId: "sc-tcjolo-1"
})(["grid-column:1/3;grid-row:1/2;", "{grid-column:1/1;}"], ({
  theme
}) => theme.mq.desktop);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroAcademystyles__DescriptionWrapper",
  componentId: "sc-tcjolo-2"
})(["width:clamp(38rem,100%,60rem);align-self:center;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:", ";background-color:", ";border-radius:", ";box-shadow:", ";p{margin-bottom:4rem;}", "{grid-row:3/4;margin-right:0;}", "{padding:", ";}"], ({
  theme
}) => theme.dimensions.heroAcademyPadding, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.utils.borderRadius, ({
  theme
}) => theme.utils.boxShadow, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.cardPaddingMobile);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroAcademystyles__ImageWrapper",
  componentId: "sc-tcjolo-3"
})(["width:100%;background-color:darkGray;justify-self:end;align-self:center;", "{width:clamp(38rem,100%,60rem);max-width:100%;justify-self:center;}"], ({
  theme
}) => theme.mq.desktop);

/***/ }),

/***/ "./components/sections/HeroCourses/HeroCourses.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroCourses/HeroCourses.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_HeroCourseComponent_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @molecules/HeroCourseComponent/HeroCourseComponent */ "./components/molecules/HeroCourseComponent/HeroCourseComponent.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _HeroCourses_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroCourses.styles */ "./components/sections/HeroCourses/HeroCourses.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroCourses\\HeroCourses.js";





const HeroCourses = ({
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourses_styles__WEBPACK_IMPORTED_MODULE_4__.HeroCourseWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourses_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
      children: data.course.map(courseData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_HeroCourseComponent_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: courseData,
        image: data.arrowImage
      }, courseData.id, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined))
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

/* harmony default export */ __webpack_exports__["default"] = (HeroCourses);

/***/ }),

/***/ "./components/sections/HeroCourses/HeroCourses.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/HeroCourses/HeroCourses.styles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroCourseWrapper": function() { return /* binding */ HeroCourseWrapper; },
/* harmony export */   "ContentWrapper": function() { return /* binding */ ContentWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroCourseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroCoursesstyles__HeroCourseWrapper",
  componentId: "sc-11jcfpa-0"
})(["padding:10vh ", ";", "{padding:10vh ", ";}", "{padding:5vh ", ";}"], ({
  theme
}) => theme.dimensions.paddingNarrow, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.paddingMobile);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroCoursesstyles__ContentWrapper",
  componentId: "sc-11jcfpa-1"
})(["display:grid;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(40rem,auto));column-gap:", ";row-gap:15vh;margin-top:10vh;", "{margin-top:8vh;row-gap:8vh;}"], ({
  theme
}) => theme.dimensions.paddingNarrow, ({
  theme
}) => theme.mq.mobileLarge);

/***/ }),

/***/ "./components/sections/HeroInstructors/HeroInstructors.js":
/*!****************************************************************!*\
  !*** ./components/sections/HeroInstructors/HeroInstructors.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_HeroInstructorComponent_HeroInstructorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @molecules/HeroInstructorComponent/HeroInstructorComponent */ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js");
/* harmony import */ var _HeroInstructors_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroInstructors.styles */ "./components/sections/HeroInstructors/HeroInstructors.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroInstructors\\HeroInstructors.js";




const HeroInstructors = ({
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroInstructors_styles__WEBPACK_IMPORTED_MODULE_3__.HeroInstructorsWrapper, {
    children: data.instructorComponent.map(instructorData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_HeroInstructorComponent_HeroInstructorComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: instructorData
    }, instructorData.id, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroInstructors);

/***/ }),

/***/ "./components/sections/HeroInstructors/HeroInstructors.styles.js":
/*!***********************************************************************!*\
  !*** ./components/sections/HeroInstructors/HeroInstructors.styles.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroInstructorsWrapper": function() { return /* binding */ HeroInstructorsWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroInstructorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroInstructorsstyles__HeroInstructorsWrapper",
  componentId: "sc-tznrqx-0"
})(["padding:5rem ", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(34rem,auto));column-gap:5vw;justify-content:center;background-color:", ";", "{column-gap:", ";}", "{padding:0 ", ";}"], ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.paddingMobile);

/***/ }),

/***/ "./components/sections/HeroPricing/HeroPricing.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroPricing/HeroPricing.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _HeroPricing_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroPricing.styles */ "./components/sections/HeroPricing/HeroPricing.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroPricing\\HeroPricing.js";





const HeroPricing = ({
  data
}) => {
  const {
    title,
    description,
    button
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_4__.HeroPricingWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_4__.DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: button,
        accent: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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

/* harmony default export */ __webpack_exports__["default"] = (HeroPricing);

/***/ }),

/***/ "./components/sections/HeroPricing/HeroPricing.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/HeroPricing/HeroPricing.styles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroPricingWrapper": function() { return /* binding */ HeroPricingWrapper; },
/* harmony export */   "DescriptionWrapper": function() { return /* binding */ DescriptionWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroPricingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroPricingstyles__HeroPricingWrapper",
  componentId: "sc-1nfcatc-0"
})(["display:flex;flex-direction:column;align-items:center;padding:10vh ", ";background-color:", ";color:", ";", "{padding:10vh ", ";}", "{padding:7vh ", ";}", "{padding:5vh ", ";}"], ({
  theme
}) => theme.dimensions.paddingNarrow, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.mq.desktop, ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.mq.mobileLarge, ({
  theme
}) => theme.dimensions.paddingMobile);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroPricingstyles__DescriptionWrapper",
  componentId: "sc-1nfcatc-1"
})(["display:flex;align-items:center;justify-content:center;margin-top:5vh;", "{flex-direction:column;}", "{margin-top:4rem;}p{font-size:", ";margin:0 10rem 0 0;width:41rem;", "{margin:0 0 3rem 0;}", "{margin:0 0 3rem 0;}}a{color:", ";border-color:", ";&:visited{color:", ";border-color:", ";}}& > div{margin:0 auto;}"], ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.mq.mobileMedium, ({
  theme
}) => theme.fontSize.subText, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.mq.tablet, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor);

/***/ }),

/***/ "./components/sections/Hero/Hero.js":
/*!******************************************!*\
  !*** ./components/sections/Hero/Hero.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _Hero_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hero.styles */ "./components/sections/Hero/Hero.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\Hero\\Hero.js";






const Hero = ({
  data
}) => {
  const {
    title,
    description,
    button,
    image
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.HeroWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.ButtonWrapper, {
        children: button.map(buttonData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: image,
        hasRadius: "true"
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

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/sections/Hero/Hero.styles.js":
/*!*************************************************!*\
  !*** ./components/sections/Hero/Hero.styles.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroWrapper": function() { return /* binding */ HeroWrapper; },
/* harmony export */   "ContentWrapper": function() { return /* binding */ ContentWrapper; },
/* harmony export */   "ButtonWrapper": function() { return /* binding */ ButtonWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "Herostyles__HeroWrapper",
  componentId: "sc-1mnb7pg-0"
})(["padding:5vh ", ";display:flex;align-items:center;justify-content:space-between;min-height:90vh;", "{flex-direction:column;justify-content:center;}", "{padding:5vh ", ";min-height:unset;}"], ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileMedium, ({
  theme
}) => theme.dimensions.paddingMobile);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Herostyles__ContentWrapper",
  componentId: "sc-1mnb7pg-1"
})(["margin-bottom:5vh;width:44rem;display:flex;flex-direction:column;h1{max-width:40rem;margin-bottom:4rem;}", "{width:100%;}", "{margin-right:10vmin;}"], ({
  theme
}) => theme.mq.mobileMedium, ({
  theme
}) => theme.mq.desktopWide);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Herostyles__ButtonWrapper",
  componentId: "sc-1mnb7pg-2"
})(["display:flex;margin-top:4rem;", "{justify-content:center;}"], ({
  theme
}) => theme.mq.laptop);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Herostyles__ImageWrapper",
  componentId: "sc-1mnb7pg-3"
})(["width:40vw;display:flex;align-items:center;justify-content:center;", "{width:44rem;}", "{width:100%;}"], ({
  theme
}) => theme.mq.laptop, ({
  theme
}) => theme.mq.mobileMedium);

/***/ }),

/***/ "./components/strapi/sections.js":
/*!***************************************!*\
  !*** ./components/strapi/sections.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sections/Hero/Hero */ "./components/sections/Hero/Hero.js");
/* harmony import */ var _sections_HeroInstructors_HeroInstructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sections/HeroInstructors/HeroInstructors */ "./components/sections/HeroInstructors/HeroInstructors.js");
/* harmony import */ var _sections_HeroCourses_HeroCourses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sections/HeroCourses/HeroCourses */ "./components/sections/HeroCourses/HeroCourses.js");
/* harmony import */ var _sections_HeroPricing_HeroPricing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sections/HeroPricing/HeroPricing */ "./components/sections/HeroPricing/HeroPricing.js");
/* harmony import */ var _sections_HeroAcademy_HeroAcademy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sections/HeroAcademy/HeroAcademy */ "./components/sections/HeroAcademy/HeroAcademy.js");


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\sections.js";




 // Map Strapi sections to section components

const sectionComponents = {
  'sections.hero': _sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default,
  'sections.hero-instructors': _sections_HeroInstructors_HeroInstructors__WEBPACK_IMPORTED_MODULE_2__.default,
  'sections.hero-courses': _sections_HeroCourses_HeroCourses__WEBPACK_IMPORTED_MODULE_3__.default,
  'sections.hero-pricing': _sections_HeroPricing_HeroPricing__WEBPACK_IMPORTED_MODULE_4__.default,
  'sections.hero-academy': _sections_HeroAcademy_HeroAcademy__WEBPACK_IMPORTED_MODULE_5__.default
}; // Display a section individually

const Section = ({
  sectionData
}) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  } // Display the section


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionComponent, {
    data: sectionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, undefined);
}; // Display the list of sections


const Sections = ({
  sections
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: sections.map(section => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
      sectionData: section
    }, `${section.__component}${section.id}`, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined))
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Sections);

/***/ }),

/***/ "./components/strapi/seo.js":
/*!**********************************!*\
  !*** ./components/strapi/seo.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\seo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Seo = ({
  seo
}) => {
  // Prevent errors if no metadata was set
  if (!seo) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: _objectSpread({
      // Title and description are mandatory
      title: seo.metaTitle,
      description: seo.metaDescription
    }, seo.shareImage && {
      images: Object.values(seo.shareImage.formats).map(image => {
        return {
          url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image),
          width: image.width,
          height: image.height
        };
      })
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Seo);

/***/ }),

/***/ "./components/templates/Layout.js":
/*!****************************************!*\
  !*** ./components/templates/Layout.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @organisms/NavBar/NavBar */ "./components/organisms/NavBar/NavBar.js");
/* harmony import */ var _organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @organisms/Navigation/Navigation */ "./components/organisms/Navigation/Navigation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\Layout.js";




const Layout = ({
  children,
  navigation
}) => {
  const {
    navLinks,
    logo,
    menuImage,
    exitButton,
    navListIcon
  } = navigation;
  const {
    0: isNavOpen,
    1: setIsNavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isNavOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__.default, {
      navLinks: navLinks,
      exitButton: exitButton,
      setIsNavOpen: setIsNavOpen,
      navListIcon: navListIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__.default, {
        logo: logo,
        menuImage: menuImage,
        setIsNavOpen: setIsNavOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined), children]
    }, void 0, true)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

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
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
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
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
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
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
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
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
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
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
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
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
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

      if (!configDomains.includes(parsedSrc.hostname)) {
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
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
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
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
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
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
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
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

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
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
    if (!(0, _router.isLocalURL)(href)) return;

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

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
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
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
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

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
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
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
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

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

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
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


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
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
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
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
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
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
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
    return _router2.default.events;
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
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
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
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
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
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
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
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
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
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
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
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
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
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
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
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
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
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
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
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
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

    ;
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
    ;
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

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

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
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
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

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
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
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
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

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
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

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
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

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
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

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
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
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
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
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
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
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
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
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

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
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
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
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
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

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/[[...slug]].js":
/*!******************************!*\
  !*** ./pages/[[...slug]].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/templates/Layout */ "./components/templates/Layout.js");
/* harmony import */ var components_strapi_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/strapi/seo */ "./components/strapi/seo.js");
/* harmony import */ var components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/strapi/sections */ "./components/strapi/sections.js");
/* harmony import */ var utils_getPageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/getPageData */ "./utils/getPageData.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\[[...slug]].js";







const DynamicPage = ({
  sections,
  pageContext,
  navigation,
  seo
}) => {
  if (!(sections !== null && sections !== void 0 && sections.length)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_6___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    pageContext: pageContext,
    navigation: navigation,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_strapi_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__.default, {
      sections: sections
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
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
      navigation
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (DynamicPage);

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

/***/ "./utils/getPageData.js":
/*!******************************!*\
  !*** ./utils/getPageData.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; }
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

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/[[...slug]].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvYXRvbXMvQXJyb3dMaW5rL0Fycm93TGluay5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvYXRvbXMvQXJyb3dMaW5rL0Fycm93TGluay5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b24uc3R5bGVzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9hdG9tcy9GdW5jdGlvbmFsTGluay5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL2F0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50L0hlcm9Db3Vyc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50L0hlcm9Db3Vyc2VDb21wb25lbnQuc3R5bGVzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQvSGVyb0luc3RydWN0b3JDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC9IZXJvSW5zdHJ1Y3RvckNvbXBvbmVudC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL21vbGVjdWxlcy9MaXN0SXRlbS9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9BY2FkZW15L0hlcm9BY2FkZW15LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQ291cnNlcy9IZXJvQ291cnNlcy5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMuc3R5bGVzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcuc3R5bGVzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm8vSGVyby5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0cmFwaS9zZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3RyYXBpL3Nlby5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9wYWdlcy9bWy4uLnNsdWddXS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2dldFBhZ2VEYXRhLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vdXRpbHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9pZ25vcmVkfEM6XFxVc2Vyc1xcbm5hZDNcXERlc2t0b3BcXFdlYiBkZXZlbG9wbWVudFxcT3JpZ2luYWxcXHpzZS1jaXNjb1xcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBcnJvd0xpbmsiLCJsaW5rIiwidGl0bGUiLCJpbWFnZSIsInNsdWciLCJBcnJvd0xpbmtXcmFwcGVyIiwic3R5bGVkIiwidGhlbWUiLCJjb2xvcnMiLCJtYWluQ29sb3IiLCJmb250U2l6ZSIsImJvZHkiLCJJbWFnZVdyYXBwZXIiLCJCdXR0b24iLCJkYXRhIiwiaGFzTWFyZ2luIiwiYWNjZW50IiwiY2FwdGlvbiIsImlzRmlsbGVkIiwiU3R5bGVkQnV0dG9uIiwidXRpbHMiLCJib3JkZXJSYWRpdXMiLCJhY2NlbnRDb2xvciIsIndoaXRlIiwiRnVuY3Rpb25hbExpbmsiLCJzZXRJc05hdk9wZW4iLCJuYW1lIiwibmV3VGFiIiwic3RhdGUiLCJJbWFnZSIsInByaW9yaXR5IiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkZXIiLCJnZXRTdHJhcGlNZWRpYSIsIk5leHRJbWFnZVdyYXBwZXIiLCJTdHlsZWROZXh0SW1hZ2UiLCJOZXh0SW1hZ2UiLCJMaW5lSG9yaXpvbnRhbCIsImNoaWxkcmVuIiwibGFyZ2UiLCJMaW5lSG9yaXpvbnRhbFdyYXBwZXIiLCJMaW5lIiwiTGluZVZlcnRpY2FsIiwiTGluZVZlcnRpY2FsV3JhcHBlciIsIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsImxpbmtUaXRsZSIsIkhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyIiwiZGltZW5zaW9ucyIsImhlcm9Db3Vyc2VQYWRkaW5nIiwiYm94U2hhZG93IiwibXEiLCJtb2JpbGVMYXJnZSIsImNhcmRQYWRkaW5nTW9iaWxlIiwibW9iaWxlTWVkaXVtIiwibW9iaWxlU21hbGwiLCJIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCIsImhlYWRlciIsImluc3RydWN0b3IiLCJIZXJvSW5zdHJ1Y3RvcldyYXBwZXIiLCJoZXJvSW5zdHJ1Y3RvcnMiLCJJbnN0cnVjdG9yV3JhcHBlciIsIkxpc3RJdGVtIiwibGlzdEljb24iLCJMaXN0SXRlbVdyYXBwZXIiLCJuYXZMaXN0IiwiTmF2QmFyIiwibG9nbyIsIm1lbnVJbWFnZSIsIkhlYWRlciIsInBhZGRpbmciLCJMb2dvIiwiTWVudUltYWdlIiwiTmF2aWdhdGlvbiIsIm5hdkxpbmtzIiwiZXhpdEJ1dHRvbiIsIm5hdkxpc3RJY29uIiwibWFwIiwiZ3JvdXBOYW1lIiwiaWQiLCJsaW5rcyIsIlN0eWxlZE5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uUGFkZGluZyIsIm5hdmlnYXRpb25Db2x1bW5HYXAiLCJuYXZpZ2F0aW9uUm93R2FwIiwiRXhpdEJ1dHRvbiIsIkNvbnRlbnRXcmFwcGVyIiwiSGVyb0FjYWRlbXkiLCJidXR0b24iLCJIZXJvQWNhZGVteVdyYXBwZXIiLCJkZXNrdG9wIiwicGFkZGluZ01vYmlsZSIsIkhlYWRlcldyYXBwZXIiLCJEZXNjcmlwdGlvbldyYXBwZXIiLCJoZXJvQWNhZGVteVBhZGRpbmciLCJIZXJvQ291cnNlcyIsImNvdXJzZSIsImNvdXJzZURhdGEiLCJhcnJvd0ltYWdlIiwiSGVyb0NvdXJzZVdyYXBwZXIiLCJwYWRkaW5nTmFycm93IiwiSGVyb0luc3RydWN0b3JzIiwiaW5zdHJ1Y3RvckNvbXBvbmVudCIsImluc3RydWN0b3JEYXRhIiwiSGVyb0luc3RydWN0b3JzV3JhcHBlciIsImxhcHRvcCIsIkhlcm9QcmljaW5nIiwiSGVyb1ByaWNpbmdXcmFwcGVyIiwidGFibGV0Iiwic3ViVGV4dCIsIkhlcm8iLCJidXR0b25EYXRhIiwiSGVyb1dyYXBwZXIiLCJkZXNrdG9wV2lkZSIsIkJ1dHRvbldyYXBwZXIiLCJzZWN0aW9uQ29tcG9uZW50cyIsIlNlY3Rpb24iLCJzZWN0aW9uRGF0YSIsIlNlY3Rpb25Db21wb25lbnQiLCJfX2NvbXBvbmVudCIsIlNlY3Rpb25zIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwiU2VvIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImltYWdlcyIsIk9iamVjdCIsInZhbHVlcyIsImZvcm1hdHMiLCJMYXlvdXQiLCJuYXZpZ2F0aW9uIiwiaXNOYXZPcGVuIiwidXNlU3RhdGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsImNvbnNvbGUiLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkR5bmFtaWNQYWdlIiwicGFnZUNvbnRleHQiLCJnZXRTdGF0aWNQYXRocyIsImZldGNoQVBJIiwicGF0aHMiLCJzbHVnQXJyYXkiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImdldFN0cmFwaVVSTCIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwicGFnZXNEYXRhIiwibWVkaWEiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDO0FBQWYsQ0FBRCxLQUE0QjtBQUM1QyxzQkFDRSw4REFBQyxrREFBRDtBQUFNLFFBQUksRUFBRyxJQUFHRixJQUFJLENBQUNHLElBQUssRUFBMUI7QUFBNkIsWUFBUSxNQUFyQztBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSw4REFBQyx1REFBRDtBQUFPLGVBQUssRUFBRUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQVhEOztBQWFBLCtEQUFlSCxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUVPLE1BQU1LLGdCQUFnQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx5TkFRRSxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FSOUIsRUFTaEIsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFNBVFosRUFhRSxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1B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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7QUNoQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL1tbLi4uc2x1Z11dLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEFycm93TGlua1dyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vQXJyb3dMaW5rLnN0eWxlcyc7XHJcblxyXG5jb25zdCBBcnJvd0xpbmsgPSAoeyBsaW5rLCB0aXRsZSwgaW1hZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7bGluay5zbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8QXJyb3dMaW5rV3JhcHBlcj5cclxuICAgICAgICA8aDU+e3RpdGxlfTwvaDU+XHJcbiAgICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgIDxJbWFnZSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgIDwvQXJyb3dMaW5rV3JhcHBlcj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyb3dMaW5rO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcnJvd0xpbmtXcmFwcGVyID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuYm9keX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMuOHJlbTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3R5bGVkQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24uc3R5bGVzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGRhdGEsIGhhc01hcmdpbiwgYWNjZW50IH0pID0+IHtcclxuICBjb25zdCB7IGNhcHRpb24sIGlzRmlsbGVkLCBsaW5rIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQnV0dG9uIGhhc01hcmdpbj17aGFzTWFyZ2lufSBocmVmPXtsaW5rLnNsdWd9IGlzRmlsbGVkPXtpc0ZpbGxlZH0gYWNjZW50PXthY2NlbnR9PlxyXG4gICAgICB7Y2FwdGlvbn1cclxuICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5hYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgYm9yZGVyOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCB9KSA9PiAoaXNGaWxsZWQgPyAnMCcgOiBgM3B4IHNvbGlkICR7dGhlbWUuY29sb3JzLm1haW5Db2xvcn1gKX07XHJcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lLCBhY2NlbnQgfSkgPT4gKGFjY2VudCA/IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvciA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBpc0ZpbGxlZCwgYWNjZW50IH0pID0+IChpc0ZpbGxlZCA/IChhY2NlbnQgPyB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3IgOiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yKSA6ICd0cmFuc3BhcmVudCcpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSwgaXNGaWxsZWQgfSkgPT4gKGlzRmlsbGVkID8gdGhlbWUuY29sb3JzLndoaXRlIDogdGhlbWUuY29sb3JzLm1haW5Db2xvcil9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICR7KHsgaGFzTWFyZ2luIH0pID0+IChoYXNNYXJnaW4gPyAnMnJlbScgOiAnMCcpfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBGdW5jdGlvbmFsTGluayA9ICh7IGxpbmssIHNldElzTmF2T3BlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBzbHVnLCBuZXdUYWIgfSA9IGxpbms7XHJcblxyXG4gIGlmIChuZXdUYWIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIGhyZWY9e3NsdWd9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfT5cclxuICAgICAgICB7bmFtZX1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7c2x1Z31gfSBwYXNzSHJlZj5cclxuICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKChzdGF0ZSkgPT4gIXN0YXRlKX0+e25hbWV9PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbmFsTGluaztcclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICd1dGlscy9tZWRpYSc7XHJcbmltcG9ydCB7IE5leHRJbWFnZVdyYXBwZXIsIFN0eWxlZE5leHRJbWFnZSB9IGZyb20gJy4vSW1hZ2Uuc3R5bGVzJztcclxuXHJcbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UsIHByaW9yaXR5IH0pID0+IHtcclxuICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZTtcclxuXHJcbiAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGdldFN0cmFwaU1lZGlhKGltYWdlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRJbWFnZVdyYXBwZXI+XHJcbiAgICAgIDxTdHlsZWROZXh0SW1hZ2VcclxuICAgICAgICBwcmlvcml0eT17cHJpb3JpdHl9XHJcbiAgICAgICAgbG9hZGVyPXtsb2FkZXJ9XHJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgIHNyYz17dXJsfVxyXG4gICAgICAgIGFsdD17YWx0ZXJuYXRpdmVUZXh0IHx8ICdpbWFnZSd9XHJcbiAgICAgIC8+XHJcbiAgICA8L05leHRJbWFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXh0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5leHRJbWFnZSA9IHN0eWxlZChOZXh0SW1hZ2UpYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZUhvcml6b250YWxXcmFwcGVyLCBMaW5lIH0gZnJvbSAnLi9MaW5lSG9yaXpvbnRhbC5zdHlsZXMnO1xyXG5cclxuY29uc3QgTGluZUhvcml6b250YWwgPSAoeyBjaGlsZHJlbiwgbGFyZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUhvcml6b250YWxXcmFwcGVyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxMaW5lIGxhcmdlPXtsYXJnZX0gLz5cclxuICAgIDwvTGluZUhvcml6b250YWxXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lSG9yaXpvbnRhbDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZUhvcml6b250YWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuc3BhbmBcclxuICBtaW4taGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcwLjhyZW0nIDogJzAuNHJlbScpfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgbWFyZ2luLXRvcDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMi4ycmVtJyA6ICcxLjVyZW0nKX07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmVWZXJ0aWNhbFdyYXBwZXIsIExpbmUgfSBmcm9tICcuL0xpbmVWZXJ0aWNhbC5zdHlsZXMnO1xyXG5cclxuY29uc3QgTGluZVZlcnRpY2FsID0gKHsgY2hpbGRyZW4sIGxhcmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVWZXJ0aWNhbFdyYXBwZXI+XHJcbiAgICAgIDxMaW5lIGxhcmdlPXtsYXJnZX0gLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5lVmVydGljYWxXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lVmVydGljYWw7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVWZXJ0aWNhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi13aWR0aDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMC44cmVtJyA6ICcwLjRyZW0nKX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIG1hcmdpbi1yaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMi4ycmVtJyA6ICcxLjVyZW0nKX07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnQGF0b21zL0Fycm93TGluay9BcnJvd0xpbmsnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vSGVyb0NvdXJzZUNvbXBvbmVudC5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0NvdXJzZUNvbXBvbmVudCA9ICh7IGRhdGEsIGltYWdlIH0pID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgbGlua1RpdGxlIH0gPSBkYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICAgICA8SW1hZ2VXcmFwcGVyIC8+XHJcbiAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgPExpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgPEFycm93TGluayBsaW5rPXtsaW5rfSB0aXRsZT17bGlua1RpdGxlfSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICA8L0hlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLmhlcm9Db3Vyc2VQYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA1MHJlbTtcclxuXHJcbiAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLmNhcmRQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtHcmF5O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MCUsIC02NSUpO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDUlLCAtNjUlKTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTWVkaXVtfSB7XHJcbiAgICBoZWlnaHQ6IDkuNXJlbTtcclxuICAgIHdpZHRoOiA5LjVyZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNjUlKTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlU21hbGx9IHtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTY1JSk7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZXJvSW5zdHJ1Y3RvcldyYXBwZXIsIEltYWdlV3JhcHBlciwgSW5zdHJ1Y3RvcldyYXBwZXIgfSBmcm9tICcuL0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50LnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaGVhZGVyLCBpbnN0cnVjdG9yLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9JbnN0cnVjdG9yV3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlciAvPlxyXG4gICAgICA8SW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgICAgICAgPGg1PntoZWFkZXJ9PC9oNT5cclxuICAgICAgICA8aDQ+e2luc3RydWN0b3J9PC9oND5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICAgPC9IZXJvSW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvSW5zdHJ1Y3RvcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cmVtIDA7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuaGVyb0luc3RydWN0b3JzfSB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbjogMCAwIDEwcmVtIDA7XHJcblxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luOiAxMHJlbSAwIDEwcmVtIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZVNtYWxsfSB7XHJcbiAgICBtYXJnaW46IDAgMCA4cmVtIDA7XHJcblxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luOiA4cmVtIDAgOHJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnN0cnVjdG9yV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1iYXNpczogMzJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBmbGV4LWJhc2lzOiA0MHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlU21hbGx9IHtcclxuICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtHcmF5O1xyXG4gIG1pbi13aWR0aDogMTdyZW07XHJcbiAgbWluLWhlaWdodDogMTdyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmhlcm9JbnN0cnVjdG9yc30ge1xyXG4gICAgbWFyZ2luOiAwIDRyZW0gMCAwO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZ1bmN0aW9uYWxMaW5rIGZyb20gJ0BhdG9tcy9GdW5jdGlvbmFsTGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbVdyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vTGlzdEl0ZW0uc3R5bGVzJztcclxuXHJcbmNvbnN0IExpc3RJdGVtID0gKHsgbGluaywgbGlzdEljb24sIHNldElzTmF2T3BlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbVdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtsaXN0SWNvbn0gcHJpb3JpdHkgLz5cclxuICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgIDxGdW5jdGlvbmFsTGluayBsaW5rPXtsaW5rfSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz5cclxuICAgIDwvTGlzdEl0ZW1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEl0ZW1XcmFwcGVyID0gc3R5bGVkLmxpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5uYXZMaXN0fTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZWFkZXIsIExvZ28sIE1lbnVJbWFnZSB9IGZyb20gJy4vTmF2QmFyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBsb2dvLCBtZW51SW1hZ2UsIHNldElzTmF2T3BlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXI+XHJcbiAgICAgIDxMb2dvPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gcHJpb3JpdHkgLz5cclxuICAgICAgPC9Mb2dvPlxyXG4gICAgICA8TWVudUltYWdlIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bWVudUltYWdlfSBwcmlvcml0eSAvPlxyXG4gICAgICA8L01lbnVJbWFnZT5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIHBhZGRpbmc6IDFyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI1cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVJbWFnZSA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBOYXZMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IHsgU3R5bGVkTmF2aWdhdGlvbiwgRXhpdEJ1dHRvbiwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL05hdmlnYXRpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBuYXZMaW5rcywgc2V0SXNOYXZPcGVuLCBleGl0QnV0dG9uLCBuYXZMaXN0SWNvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWROYXZpZ2F0aW9uPlxyXG4gICAgICA8RXhpdEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfT5cclxuICAgICAgICA8SW1hZ2UgaW1hZ2U9e2V4aXRCdXR0b259IC8+XHJcbiAgICAgIDwvRXhpdEJ1dHRvbj5cclxuXHJcbiAgICAgIHtuYXZMaW5rcy5tYXAoKHsgZ3JvdXBOYW1lLCBpZCwgbGlua3MgfSkgPT4gKFxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlciBrZXk9e2lkfT5cclxuICAgICAgICAgIDxoMz57Z3JvdXBOYW1lfTwvaDM+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8TmF2TGlzdEl0ZW0ga2V5PXtsaW5rLmlkfSBsaXN0SWNvbj17bmF2TGlzdEljb259IGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0eWxlZE5hdmlnYXRpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5uYXZpZ2F0aW9uUGFkZGluZ307XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5uYXZpZ2F0aW9uQ29sdW1uR2FwfTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMubmF2aWdhdGlvblJvd0dhcH07XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeGl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDV2aDtcclxuICByaWdodDogNXZ3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBoMyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjRyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm5hdkxpc3R9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYXRvbXMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnQGF0b21zL0xpbmVWZXJ0aWNhbC9MaW5lVmVydGljYWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVyb0FjYWRlbXlXcmFwcGVyLCBIZWFkZXJXcmFwcGVyLCBEZXNjcmlwdGlvbldyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vSGVyb0FjYWRlbXkuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9BY2FkZW15ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbiwgaW1hZ2UgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQWNhZGVteVdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXJXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICAgICAgPERlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxCdXR0b24gZGF0YT17YnV0dG9ufSAvPlxyXG4gICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgIDwvSGVyb0FjYWRlbXlXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQWNhZGVteTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0FjYWRlbXlXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogMTB2aCAwIDEwdmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcm93LWdhcDogNHJlbTtcclxuICBjb2x1bW4tZ2FwOiA4cmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAxMHZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nfTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6IDV2aCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgZ3JpZC1yb3c6IDEvMjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8xO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgNjByZW0pO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLmhlcm9BY2FkZW15UGFkZGluZ307XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5jYXJkUGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya0dyYXk7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgNjByZW0pO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVyb0NvdXJzZUNvbXBvbmVudCBmcm9tICdAbW9sZWN1bGVzL0hlcm9Db3Vyc2VDb21wb25lbnQvSGVyb0NvdXJzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgeyBIZXJvQ291cnNlV3JhcHBlciwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL0hlcm9Db3Vyc2VzLnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlcyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZVdyYXBwZXI+XHJcbiAgICAgIDxMaW5lSG9yaXpvbnRhbCBsYXJnZT5cclxuICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIHtkYXRhLmNvdXJzZS5tYXAoKGNvdXJzZURhdGEpID0+IChcclxuICAgICAgICAgIDxIZXJvQ291cnNlQ29tcG9uZW50IGtleT17Y291cnNlRGF0YS5pZH0gZGF0YT17Y291cnNlRGF0YX0gaW1hZ2U9e2RhdGEuYXJyb3dJbWFnZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvSGVyb0NvdXJzZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9Db3Vyc2VzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvQ291cnNlV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6IDEwdmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmdOYXJyb3d9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHBhZGRpbmc6IDEwdmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogNXZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MHJlbSwgYXV0bykpO1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nTmFycm93fTtcclxuICByb3ctZ2FwOiAxNXZoO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIG1hcmdpbi10b3A6IDh2aDtcclxuICAgIHJvdy1nYXA6IDh2aDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCBmcm9tICdAbW9sZWN1bGVzL0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50L0hlcm9JbnN0cnVjdG9yQ29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb0luc3RydWN0b3JzV3JhcHBlciB9IGZyb20gJy4vSGVyb0luc3RydWN0b3JzLnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvSW5zdHJ1Y3RvcnMgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9JbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgICAgIHtkYXRhLmluc3RydWN0b3JDb21wb25lbnQubWFwKChpbnN0cnVjdG9yRGF0YSkgPT4gKFxyXG4gICAgICAgIDxIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCBrZXk9e2luc3RydWN0b3JEYXRhLmlkfSBkYXRhPXtpbnN0cnVjdG9yRGF0YX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlcm9JbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9JbnN0cnVjdG9ycztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0luc3RydWN0b3JzV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6IDVyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNHJlbSwgYXV0bykpO1xyXG4gIGNvbHVtbi1nYXA6IDV2dztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdG9tcy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IExpbmVIb3Jpem9udGFsIGZyb20gJ0BhdG9tcy9MaW5lSG9yaXpvbnRhbC9MaW5lSG9yaXpvbnRhbCc7XHJcbmltcG9ydCB7IEhlcm9QcmljaW5nV3JhcHBlciwgRGVzY3JpcHRpb25XcmFwcGVyIH0gZnJvbSAnLi9IZXJvUHJpY2luZy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb1ByaWNpbmcgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uIH0gPSBkYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9QcmljaW5nV3JhcHBlcj5cclxuICAgICAgPExpbmVIb3Jpem9udGFsIGxhcmdlPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgPERlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxCdXR0b24gZGF0YT17YnV0dG9ufSBhY2NlbnQgLz5cclxuICAgICAgPC9EZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICA8L0hlcm9QcmljaW5nV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1ByaWNpbmc7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9QcmljaW5nV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwdmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmdOYXJyb3d9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAxMHZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nfTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBwYWRkaW5nOiA3dmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogNXZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTWVkaXVtfSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICBtYXJnaW46IDAgMTByZW0gMCAwO1xyXG4gICAgd2lkdGg6IDQxcmVtO1xyXG5cclxuICAgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDNyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgICBtYXJnaW46IDAgMCAzcmVtIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuXHJcbiAgICAmOnZpc2l0ZWQge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdG9tcy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZXJvV3JhcHBlciwgQ29udGVudFdyYXBwZXIsIEJ1dHRvbldyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vSGVyby5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVybyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b24sIGltYWdlIH0gPSBkYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9XcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICB7YnV0dG9uLm1hcCgoYnV0dG9uRGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGtleT17YnV0dG9uRGF0YS5pZH0gZGF0YT17YnV0dG9uRGF0YX0gaGFzTWFyZ2luIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtpbWFnZX0gaGFzUmFkaXVzPVwidHJ1ZVwiIC8+XHJcbiAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgPC9IZXJvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiA1dmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3B9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTWVkaXVtfSB7XHJcbiAgICBwYWRkaW5nOiA1dmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmdNb2JpbGV9O1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgd2lkdGg6IDQ0cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaDEge1xyXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZU1lZGl1bX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3BXaWRlfSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdm1pbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmxhcHRvcH0ge1xyXG4gICAgd2lkdGg6IDQ0cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVNZWRpdW19IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IEhlcm8gZnJvbSAnQHNlY3Rpb25zL0hlcm8vSGVybyc7XHJcbmltcG9ydCBIZXJvSW5zdHJ1Y3RvcnMgZnJvbSAnQHNlY3Rpb25zL0hlcm9JbnN0cnVjdG9ycy9IZXJvSW5zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgSGVyb0NvdXJzZXMgZnJvbSAnQHNlY3Rpb25zL0hlcm9Db3Vyc2VzL0hlcm9Db3Vyc2VzJztcclxuaW1wb3J0IEhlcm9QcmljaW5nIGZyb20gJ0BzZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZyc7XHJcbmltcG9ydCBIZXJvQWNhZGVteSBmcm9tICdAc2VjdGlvbnMvSGVyb0FjYWRlbXkvSGVyb0FjYWRlbXknO1xyXG5cclxuLy8gTWFwIFN0cmFwaSBzZWN0aW9ucyB0byBzZWN0aW9uIGNvbXBvbmVudHNcclxuY29uc3Qgc2VjdGlvbkNvbXBvbmVudHMgPSB7XHJcbiAgJ3NlY3Rpb25zLmhlcm8nOiBIZXJvLFxyXG4gICdzZWN0aW9ucy5oZXJvLWluc3RydWN0b3JzJzogSGVyb0luc3RydWN0b3JzLFxyXG4gICdzZWN0aW9ucy5oZXJvLWNvdXJzZXMnOiBIZXJvQ291cnNlcyxcclxuICAnc2VjdGlvbnMuaGVyby1wcmljaW5nJzogSGVyb1ByaWNpbmcsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tYWNhZGVteSc6IEhlcm9BY2FkZW15LFxyXG59O1xyXG5cclxuLy8gRGlzcGxheSBhIHNlY3Rpb24gaW5kaXZpZHVhbGx5XHJcbmNvbnN0IFNlY3Rpb24gPSAoeyBzZWN0aW9uRGF0YSB9KSA9PiB7XHJcbiAgLy8gUHJlcGFyZSB0aGUgY29tcG9uZW50XHJcbiAgY29uc3QgU2VjdGlvbkNvbXBvbmVudCA9IHNlY3Rpb25Db21wb25lbnRzW3NlY3Rpb25EYXRhLl9fY29tcG9uZW50XTtcclxuXHJcbiAgaWYgKCFTZWN0aW9uQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIERpc3BsYXkgdGhlIHNlY3Rpb25cclxuICByZXR1cm4gPFNlY3Rpb25Db21wb25lbnQgZGF0YT17c2VjdGlvbkRhdGF9IC8+O1xyXG59O1xyXG5cclxuLy8gRGlzcGxheSB0aGUgbGlzdCBvZiBzZWN0aW9uc1xyXG5jb25zdCBTZWN0aW9ucyA9ICh7IHNlY3Rpb25zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgIDxTZWN0aW9uIHNlY3Rpb25EYXRhPXtzZWN0aW9ufSBrZXk9e2Ake3NlY3Rpb24uX19jb21wb25lbnR9JHtzZWN0aW9uLmlkfWB9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xyXG4iLCJpbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJy91dGlscy9tZWRpYSc7XHJcblxyXG5jb25zdCBTZW8gPSAoeyBzZW8gfSkgPT4ge1xyXG4gIC8vIFByZXZlbnQgZXJyb3JzIGlmIG5vIG1ldGFkYXRhIHdhcyBzZXRcclxuICBpZiAoIXNlbykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT17c2VvLm1ldGFUaXRsZX1cclxuICAgICAgZGVzY3JpcHRpb249e3Nlby5tZXRhRGVzY3JpcHRpb259XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIC8vIFRpdGxlIGFuZCBkZXNjcmlwdGlvbiBhcmUgbWFuZGF0b3J5XHJcbiAgICAgICAgdGl0bGU6IHNlby5tZXRhVGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlby5tZXRhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgLy8gT25seSBpbmNsdWRlIE9HIGltYWdlIGlmIHdlIGhhdmUgaXRcclxuICAgICAgICAvLyBDYXJlZnVsOiBpZiB5b3UgZGlzYWJsZSBpbWFnZSBvcHRpbWl6YXRpb24gaW4gU3RyYXBpLCB0aGlzIHdpbGwgYnJlYWtcclxuICAgICAgICAuLi4oc2VvLnNoYXJlSW1hZ2UgJiYge1xyXG4gICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNlby5zaGFyZUltYWdlLmZvcm1hdHMpLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB1cmw6IGdldFN0cmFwaU1lZGlhKGltYWdlKSxcclxuICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbztcclxuIiwiaW1wb3J0IE5hdkJhciBmcm9tICdAb3JnYW5pc21zL05hdkJhci9OYXZCYXInO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdAb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIG5hdmlnYXRpb24gfSkgPT4ge1xyXG4gIGNvbnN0IHsgbmF2TGlua3MsIGxvZ28sIG1lbnVJbWFnZSwgZXhpdEJ1dHRvbiwgbmF2TGlzdEljb24gfSA9IG5hdmlnYXRpb247XHJcblxyXG4gIGNvbnN0IFtpc05hdk9wZW4sIHNldElzTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNOYXZPcGVuID8gKFxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIG5hdkxpbmtzPXtuYXZMaW5rc30gZXhpdEJ1dHRvbj17ZXhpdEJ1dHRvbn0gc2V0SXNOYXZPcGVuPXtzZXRJc05hdk9wZW59IG5hdkxpc3RJY29uPXtuYXZMaXN0SWNvbn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE5hdkJhciBsb2dvPXtsb2dvfSBtZW51SW1hZ2U9e21lbnVJbWFnZX0gc2V0SXNOYXZPcGVuPXtzZXRJc05hdk9wZW59IC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJ3V0aWxzL2FwaSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0JztcclxuaW1wb3J0IFNlbyBmcm9tICdjb21wb25lbnRzL3N0cmFwaS9zZW8nO1xyXG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gJ3V0aWxzL2dldFBhZ2VEYXRhJztcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJztcclxuXHJcbmNvbnN0IER5bmFtaWNQYWdlID0gKHsgc2VjdGlvbnMsIHBhZ2VDb250ZXh0LCBuYXZpZ2F0aW9uLCBzZW8gfSkgPT4ge1xyXG4gIGlmICghc2VjdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHBhZ2VDb250ZXh0PXtwYWdlQ29udGV4dH0gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0+XHJcbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XHJcbiAgICAgIDxTZWN0aW9ucyBzZWN0aW9ucz17c2VjdGlvbnN9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZmV0Y2hBUEkoJy9wYWdlcycpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHBhZ2VzLm1hcCgocGFnZSkgPT4ge1xyXG4gICAgLy8gRGVjb21wb3NlIHRoZSBzbHVnIHRoYXQgd2FzIHNhdmVkIGluIFN0cmFwaVxyXG4gICAgY29uc3Qgc2x1Z0FycmF5ID0gIXBhZ2Uuc2x1ZyA/IGZhbHNlIDogcGFnZS5zbHVnLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IHNsdWc6IHNsdWdBcnJheSB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRQYWdlRGF0YSh7IHNsdWc6ICFwYXJhbXMuc2x1ZyA/IFsnJ10gOiBwYXJhbXMuc2x1ZyB9KTtcclxuICBjb25zdCBuYXZpZ2F0aW9uID0gYXdhaXQgZmV0Y2hBUEkoJy9uYXZpZ2F0aW9uJyk7XHJcblxyXG4gIGlmIChwYWdlRGF0YSA9PSBudWxsKSB7XHJcbiAgICAvLyBHaXZpbmcgdGhlIHBhZ2Ugbm8gcHJvcHMgd2lsbCB0cmlnZ2VyIGEgNDA0IHBhZ2VcclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb250ZW50LCBzZW8gfSA9IHBhZ2VEYXRhO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VjdGlvbnM6IGNvbnRlbnQsXHJcbiAgICAgIHNlbyxcclxuICAgICAgbmF2aWdhdGlvbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1BhZ2U7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9ICcnKSB7XG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J30ke3BhdGh9YDtcbn1cblxuLy8gSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgpIHtcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJy4vYXBpJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlRGF0YShwYXJhbXMpIHtcclxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWcuam9pbignLycpO1xyXG4gIC8vIEZpbmQgdGhlIHBhZ2VzIHRoYXQgbWF0Y2ggdGhpcyBzbHVnXHJcbiAgY29uc3QgcGFnZXNEYXRhID0gYXdhaXQgZmV0Y2hBUEkoYC9wYWdlcz9zbHVnPSR7c2x1Z31gKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHdlIGZvdW5kIHNvbWV0aGluZywgb3RoZXJ3aXNlIHJldHVybiBudWxsXHJcbiAgaWYgKHBhZ2VzRGF0YSA9PSBudWxsIHx8IHBhZ2VzRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCBpdGVtIHNpbmNlIHRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSByZXN1bHQgcGVyIHNsdWdcclxuICByZXR1cm4gcGFnZXNEYXRhWzBdO1xyXG59XHJcbiIsImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gJy4vYXBpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKG1lZGlhKSB7XG4gIGNvbnN0IGltYWdlVXJsID0gbWVkaWEudXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGdldFN0cmFwaVVSTChtZWRpYS51cmwpIDogbWVkaWEudXJsO1xuICByZXR1cm4gaW1hZ2VVcmw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==