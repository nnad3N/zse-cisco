(function() {
var exports = {};
exports.id = "pages/[[...slug]]";
exports.ids = ["pages/[[...slug]]"];
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

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{box-sizing:border-box;margin:0;padding:0;}html{font-size:62.5%;}body{font-family:'Open Sans',sans-serif;background-color:", ";}a,button{font-family:'Open Sans',sans-serif;font-size:", ";font-weight:600;cursor:pointer;}a{text-decoration:none;}h1{font-size:", ";font-weight:700;}h2{font-size:", ";font-weight:400;}h3{font-size:", ";font-weight:700;}h4{font-size:", ";font-weight:700;}h5{font-size:", ";font-weight:600;}h6{font-size:", ";}p{font-size:", ";font-weight:400;text-align:justify;}ul{text-decoration:none;}li{font-size:", ";}"], ({
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
}) => theme.fontSize.captionLarge, ({
  theme
}) => theme.fontSize.captionMedium, ({
  theme
}) => theme.fontSize.captionSmall, ({
  theme
}) => theme.fontSize.body, ({
  theme,
  nav
}) => nav ? theme.fontSize.navList : theme.fontSize.body);

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
    captionLarge: '2.4rem',
    captionMedium: '1.3rem',
    captionSmall: '1.2rem',
    body: '1.6rem',
    bodySmall: '1.4rem'
  },
  dimensions: {
    padding: '10vw',
    paddingNarrow: '15vw',
    heroCoursePadding: '3rem 5rem',
    heroAcademyPadding: '4rem 4.5rem'
  },
  utils: {
    borderRadius: '6px',
    boxShadow: '0px 4px 14px  rgba(0, 0, 0, 0.1)'
  }
};

/***/ }),

/***/ "./components/atoms/ArrowLink.js":
/*!***************************************!*\
  !*** ./components/atoms/ArrowLink.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\ArrowLink.js";



const ArrowLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "ArrowLink__ArrowLinkWrapper",
  componentId: "sc-prvhwo-0"
})(["display:flex;align-items:center;justify-content:center;align-self:flex-end;a{border-bottom:2px solid ", ";&:visited{border-bottom:2px solid ", ";color:", ";}}"], ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.mainColor);

const ArrowLink = ({
  data,
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowLinkWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/${data.slug}`,
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowLink);

/***/ }),

/***/ "./components/atoms/Button.js":
/*!************************************!*\
  !*** ./components/atoms/Button.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Button.js";


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1cv1t8b-0"
})(["border-radius:", ";padding:1rem 2rem;border:", ";background-color:", ";color:", ";display:flex;align-items:center;&:first-child{margin-right:", ";}"], ({
  theme
}) => theme.utils.borderRadius, ({
  theme,
  isFilled
}) => isFilled ? '0' : `3px solid ${theme.colors.mainColor}`, ({
  theme,
  isFilled
}) => isFilled ? theme.colors.mainColor : 'transparent', ({
  theme,
  isFilled
}) => isFilled ? theme.colors.white : theme.colors.mainColor, ({
  hasMargin
}) => hasMargin ? '2rem' : '0');

const Button = ({
  data,
  hasMargin
}) => {
  const {
    caption,
    isFilled,
    link
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledButton, {
    hasMargin: hasMargin,
    href: link.slug,
    isFilled: isFilled,
    children: caption
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/Image.js":
/*!***********************************!*\
  !*** ./components/atoms/Image.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Image.js";



const NextImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Image__NextImageWrapper",
  componentId: "sc-6qllkz-0"
})(["height:max-content;width:100%;"]);
const StyledNextImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
  displayName: "Image__StyledNextImage",
  componentId: "sc-6qllkz-1"
})(["border-radius:", ";"], ({
  theme
}) => theme.utils.borderRadius);

const Image = ({
  image
}) => {
  const {
    url,
    alternativeText,
    width,
    height
  } = image;

  const loader = () => {
    return (0,_utils_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextImageWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledNextImage, {
      loader: loader,
      layout: "responsive",
      width: width,
      height: height,
      src: url,
      alt: alternativeText || ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/atoms/LineHorizontal.js":
/*!********************************************!*\
  !*** ./components/atoms/LineHorizontal.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\LineHorizontal.js";


const LineHorizontalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "LineHorizontal__LineHorizontalWrapper",
  componentId: "sc-uqh244-0"
})(["display:flex;flex-direction:column;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "LineHorizontal__Line",
  componentId: "sc-uqh244-1"
})(["min-height:", ";background-color:", ";margin-top:", ";"], ({
  large
}) => large ? '0.8rem' : '0.4rem', ({
  theme
}) => theme.colors.accentColor, ({
  large
}) => large ? '2.2rem' : '1.5rem');

const LineHorizontal = ({
  children,
  large
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LineHorizontalWrapper, {
    children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Line, {
      large: large
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LineHorizontal);

/***/ }),

/***/ "./components/atoms/LineVertical.js":
/*!******************************************!*\
  !*** ./components/atoms/LineVertical.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\LineVertical.js";


const LineVerticalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "LineVertical__LineVerticalWrapper",
  componentId: "sc-1yiup7c-0"
})(["display:flex;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "LineVertical__Line",
  componentId: "sc-1yiup7c-1"
})(["min-width:", ";background-color:", ";margin-right:", ";"], ({
  large
}) => large ? '0.8rem' : '0.4rem', ({
  theme
}) => theme.colors.accentColor, ({
  large
}) => large ? '2.2rem' : '1.5rem');

const LineVertical = ({
  children,
  large
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LineVerticalWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Line, {
      large: large
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LineVertical);

/***/ }),

/***/ "./components/molecules/HeroCourseComponent.js":
/*!*****************************************************!*\
  !*** ./components/molecules/HeroCourseComponent.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/ArrowLink */ "./components/atoms/ArrowLink.js");
/* harmony import */ var _atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/LineVertical */ "./components/atoms/LineVertical.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent.js";




const HeroCourseComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HeroCourseComponent__HeroCourseComponentWrapper",
  componentId: "sc-1g1lf9c-0"
})(["align-self:flex-start;display:flex;flex-direction:column;padding:", ";background-color:", ";border-radius:", ";box-shadow:", ";position:relative;&:nth-child(odd){justify-self:end;}&:nth-child(even){justify-self:start;}h4{text-align:center;margin-bottom:2rem;}a{margin-top:4rem;}"], ({
  theme
}) => theme.dimensions.heroCoursePadding, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.utils.borderRadius, ({
  theme
}) => theme.utils.boxShadow);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HeroCourseComponent__ImageWrapper",
  componentId: "sc-1g1lf9c-1"
})(["height:10rem;width:10rem;border-radius:50%;position:absolute;background-color:darkGray;transform:translate(-90%,-65%);"]);

const HeroCourseComponent = ({
  data
}) => {
  const {
    title,
    description,
    link,
    linkTitle
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: link,
      title: linkTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroCourseComponent);

/***/ }),

/***/ "./components/molecules/HeroInstructorComponent.js":
/*!*********************************************************!*\
  !*** ./components/molecules/HeroInstructorComponent.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroInstructorComponent.js";


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HeroInstructorComponent__Wrapper",
  componentId: "sc-1fuhbxp-0"
})(["display:flex;align-items:center;"]);
const InstructorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HeroInstructorComponent__InstructorWrapper",
  componentId: "sc-1fuhbxp-1"
})(["display:flex;flex-direction:column;color:", ";h4{margin-bottom:1rem;}&:nth-child(1){margin-right:2rem;}"], ({
  theme
}) => theme.colors.white);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HeroInstructorComponent__ImageWrapper",
  componentId: "sc-1fuhbxp-2"
})(["background-color:darkGray;min-width:17rem;min-height:17rem;margin-right:4rem;border-radius:50%;"]);

const HeroInstructorComponent = ({
  data
}) => {
  const {
    header,
    instructor,
    description
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InstructorWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: instructor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroInstructorComponent);

/***/ }),

/***/ "./components/organisms/Nav/Nav.js":
/*!*****************************************!*\
  !*** ./components/organisms/Nav/Nav.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Image */ "./components/atoms/Image.js");
/* harmony import */ var _Nav_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav.styles */ "./components/organisms/Nav/Nav.styles.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Nav\\Nav.js";





const Nav = ({
  navigation
}) => {
  const {
    links,
    logo
  } = navigation;
  console.log(navigation);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_4__.NavBar, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_4__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
        image: logo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_4__.Links, {
      children: links.map(({
        id,
        groupName
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_4__.LinkGroup, {
        children: groupName
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/organisms/Nav/Nav.styles.js":
/*!************************************************!*\
  !*** ./components/organisms/Nav/Nav.styles.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBar": function() { return /* binding */ NavBar; },
/* harmony export */   "Logo": function() { return /* binding */ Logo; },
/* harmony export */   "Links": function() { return /* binding */ Links; },
/* harmony export */   "LinkGroup": function() { return /* binding */ LinkGroup; },
/* harmony export */   "StyledLink": function() { return /* binding */ StyledLink; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkSpan": function() { return /* binding */ LinkSpan; },
/* harmony export */   "LinkContainerBackground": function() { return /* binding */ LinkContainerBackground; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


const NavBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "Navstyles__NavBar",
  componentId: "sc-1ounyn-0"
})(["display:flex;min-height:10vh;padding:1rem ", ";background-color:", ";color:", ";position:sticky;top:0;z-index:10;"], ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navstyles__Logo",
  componentId: "sc-1ounyn-1"
})(["display:flex;align-items:center;justify-content:center;width:25rem;"]);
const Links = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navstyles__Links",
  componentId: "sc-1ounyn-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-left:auto;"]);
const LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Navstyles__LinkGroup",
  componentId: "sc-1ounyn-3"
})(["padding:0.5rem 2rem;display:flex;cursor:default;"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "Navstyles__StyledLink",
  componentId: "sc-1ounyn-4"
})(["margin-right:3rem;margin-bottom:2rem;&:last-child{margin-bottom:0;}"]);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Navstyles__LinkContainer",
  componentId: "sc-1ounyn-5"
})(["position:absolute;display:flex;flex-wrap:wrap;justify-content:space-between;min-width:20vw;max-width:30vw;height:max-content;padding:3rem;"]);
const LinkSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "Navstyles__LinkSpan",
  componentId: "sc-1ounyn-6"
})(["position:absolute;top:0;left:0;"]);
const LinkContainerBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span).withConfig({
  displayName: "Navstyles__LinkContainerBackground",
  componentId: "sc-1ounyn-7"
})(["position:absolute;top:0;left:0;background-color:white;border-radius:20px;box-shadow:0 0 15px -8px rgba(0,0,0,0.6);"]);

/***/ }),

/***/ "./components/sections/hero.js":
/*!*************************************!*\
  !*** ./components/sections/hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Button */ "./components/atoms/Button.js");
/* harmony import */ var _atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/LineVertical */ "./components/atoms/LineVertical.js");
/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/Image */ "./components/atoms/Image.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\hero.js";





const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "hero__HeroWrapper",
  componentId: "sc-ahxtbh-0"
})(["padding:0 ", ";display:flex;align-items:center;justify-content:space-between;min-height:90vh;"], ({
  theme
}) => theme.dimensions.padding);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "hero__ContentWrapper",
  componentId: "sc-ahxtbh-1"
})(["display:flex;flex-direction:column;max-width:", ";h1{max-width:40rem;margin-bottom:4rem;}"], ({
  theme
}) => `calc(40vw - ${theme.dimensions.padding})`);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "hero__ButtonWrapper",
  componentId: "sc-ahxtbh-2"
})(["display:flex;margin-top:4rem;"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "hero__ImageWrapper",
  componentId: "sc-ahxtbh-3"
})(["width:40vw;display:flex;align-items:center;justify-content:center;"]);

const Hero = ({
  data
}) => {
  const {
    title,
    description,
    button,
    image
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonWrapper, {
        children: button.map(buttonData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: buttonData,
          hasMargin: true
        }, buttonData.id, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image__WEBPACK_IMPORTED_MODULE_5__.default, {
        image: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/sections/heroAcademy.js":
/*!********************************************!*\
  !*** ./components/sections/heroAcademy.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Button */ "./components/atoms/Button.js");
/* harmony import */ var _atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/LineVertical */ "./components/atoms/LineVertical.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\heroAcademy.js";




const HeroAcademyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "heroAcademy__HeroAcademyWrapper",
  componentId: "sc-cd3xcd-0"
})(["padding:10vh 0 10vh ", ";display:grid;column-gap:20rem;row-gap:4rem;grid-template-columns:auto auto;grid-template-rows:auto auto;"], ({
  theme
}) => theme.dimensions.paddingNarrow);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "heroAcademy__HeaderWrapper",
  componentId: "sc-cd3xcd-1"
})(["grid-column:1/3;grid-row:1/2;"]);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "heroAcademy__DescriptionWrapper",
  componentId: "sc-cd3xcd-2"
})(["align-self:center;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:", ";background-color:", ";border-radius:", ";box-shadow:", ";p{margin-bottom:4rem;}"], ({
  theme
}) => theme.dimensions.heroAcademyPadding, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.utils.borderRadius, ({
  theme
}) => theme.utils.boxShadow);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "heroAcademy__ImageWrapper",
  componentId: "sc-cd3xcd-3"
})(["width:40vw;height:50vh;background-color:darkGray;justify-self:end;"]);

const HeroAcademy = ({
  data
}) => {
  const {
    title,
    description,
    button
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroAcademyWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        data: button
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroAcademy);

/***/ }),

/***/ "./components/sections/heroCourses.js":
/*!********************************************!*\
  !*** ./components/sections/heroCourses.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/HeroCourseComponent */ "./components/molecules/HeroCourseComponent.js");
/* harmony import */ var _atoms_LineHorizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/LineHorizontal */ "./components/atoms/LineHorizontal.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\heroCourses.js";




const HeroCourseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "heroCourses__HeroCourseWrapper",
  componentId: "sc-1jow9g1-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto;column-gap:", ";row-gap:15vh;justify-items:center;padding:10vh ", ";"], ({
  theme
}) => theme.dimensions.paddingNarrow, ({
  theme
}) => theme.dimensions.paddingNarrow);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "heroCourses__HeaderWrapper",
  componentId: "sc-1jow9g1-1"
})(["text-align:center;width:100%;grid-row:1/2;grid-column:1/3;"]);

const HeroCourses = ({
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroCourseWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineHorizontal__WEBPACK_IMPORTED_MODULE_4__.default, {
        large: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), data.course.map(courseData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: courseData
    }, courseData.id, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroCourses);

/***/ }),

/***/ "./components/sections/heroInstructors.js":
/*!************************************************!*\
  !*** ./components/sections/heroInstructors.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_HeroInstructorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/HeroInstructorComponent */ "./components/molecules/HeroInstructorComponent.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\heroInstructors.js";



const InstructorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "heroInstructors__InstructorsWrapper",
  componentId: "sc-j0qt72-0"
})(["padding:5rem ", ";display:grid;grid-template-columns:auto auto;column-gap:", ";align-items:center;justify-content:space-between;min-height:40vh;background-color:", ";"], ({
  theme
}) => theme.dimensions.padding, ({
  theme
}) => theme.dimensions.paddingNarrow, ({
  theme
}) => theme.colors.mainColor);

const HeroInstructors = ({
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InstructorsWrapper, {
    children: data.instructorComponent.map(instructorData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_HeroInstructorComponent__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: instructorData
    }, instructorData.id, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroInstructors);

/***/ }),

/***/ "./components/sections/heroPricing.js":
/*!********************************************!*\
  !*** ./components/sections/heroPricing.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/ArrowLink */ "./components/atoms/ArrowLink.js");
/* harmony import */ var _atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/LineVertical */ "./components/atoms/LineVertical.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\heroPricing.js";




const HeroPricingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "heroPricing__HeroPricingWrapper",
  componentId: "sc-hpf1uo-0"
})(["display:flex;align-items:center;justify-content:space-between;padding:", ";background-color:", ";color:", ";h1{margin-right:10rem;}"], ({
  theme
}) => `6rem ${theme.dimensions.paddingNarrow}`, ({
  theme
}) => theme.colors.mainColor, ({
  theme
}) => theme.colors.white);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "heroPricing__DescriptionWrapper",
  componentId: "sc-hpf1uo-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:20rem;p{margin-bottom:1rem;}a{color:", ";border-color:", ";&:visited{color:", ";border-color:", ";}}& > div{margin:0 auto;}"], ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor, ({
  theme
}) => theme.colors.accentColor);

const HeroPricing = ({
  data
}) => {
  const {
    title,
    description,
    linkTitle,
    link
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroPricingWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_3__.default, {
        data: link,
        title: linkTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeroPricing);

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
/* harmony import */ var _sections_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/hero */ "./components/sections/hero.js");
/* harmony import */ var _sections_heroInstructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/heroInstructors */ "./components/sections/heroInstructors.js");
/* harmony import */ var _sections_heroCourses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/heroCourses */ "./components/sections/heroCourses.js");
/* harmony import */ var _sections_heroPricing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/heroPricing */ "./components/sections/heroPricing.js");
/* harmony import */ var _sections_heroAcademy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/heroAcademy */ "./components/sections/heroAcademy.js");


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\sections.js";




 // Map Strapi sections to section components

const sectionComponents = {
  'sections.hero': _sections_hero__WEBPACK_IMPORTED_MODULE_1__.default,
  'sections.hero-instructors': _sections_heroInstructors__WEBPACK_IMPORTED_MODULE_2__.default,
  'sections.hero-courses': _sections_heroCourses__WEBPACK_IMPORTED_MODULE_3__.default,
  'sections.hero-pricing': _sections_heroPricing__WEBPACK_IMPORTED_MODULE_4__.default,
  'sections.hero-academy': _sections_heroAcademy__WEBPACK_IMPORTED_MODULE_5__.default
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\seo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_utils_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "article"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
/* harmony import */ var _organisms_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../organisms/Nav/Nav */ "./components/organisms/Nav/Nav.js");


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\Layout.js";


const Layout = ({
  children,
  navigation
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__.default, {
      navigation: navigation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true);
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
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../utils/api */ "./utils/api.js");
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../components/templates/Layout */ "./components/templates/Layout.js");
/* harmony import */ var _components_strapi_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../components/strapi/seo */ "./components/strapi/seo.js");
/* harmony import */ var _components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../components/strapi/sections */ "./components/strapi/sections.js");
/* harmony import */ var _utils_getPageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utils/getPageData */ "./utils/getPageData.js");

var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\[[...slug]].js";






const DynamicPage = ({
  sections,
  pageContext,
  navigation
}) => {
  //   const seo = {
  //     metaTitle: category.name,
  //     metaDescription: `All ${category.name} articles`,
  //   }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    pageContext: pageContext,
    navigation: navigation,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__.default, {
      sections: sections
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths() {
  const pages = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/pages');
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
  const pageData = await (0,_utils_getPageData__WEBPACK_IMPORTED_MODULE_5__.getPageData)({
    slug: !params.slug ? [''] : params.slug
  });
  const navigation = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)('/navigation');

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return {
      props: {}
    };
  }

  return {
    props: {
      sections: pageData.content,
      navigation
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (DynamicPage);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../assets/styles/theme */ "./assets/styles/theme.js");
/* harmony import */ var _assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../assets/styles/GlobalStyle */ "./assets/styles/GlobalStyle.js");


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Store Strapi Global object in context

const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: _assets_styles_theme__WEBPACK_IMPORTED_MODULE_7__.theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
        value: global,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__.GlobalStyle, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const global = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchAPI)('/global'); // Pass the data to our page via props

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

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9hc3NldHMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9hdG9tcy9BcnJvd0xpbmsuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvYXRvbXMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL2F0b21zL0xpbmVIb3Jpem9udGFsLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9hdG9tcy9MaW5lVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZXJvQ291cnNlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9OYXYvTmF2LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2L05hdi5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8uanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm9BY2FkZW15LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvQ291cnNlcy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyb0luc3RydWN0b3JzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvUHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3RyYXBpL3NlY3Rpb25zLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHJhcGkvc2VvLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3BhZ2VzL1tbLi4uc2x1Z11dLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3V0aWxzL2dldFBhZ2VEYXRhLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vdXRpbHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvaWdub3JlZHxDOlxcVXNlcnNcXG5uYWQzXFxEZXNrdG9wXFxXZWIgZGV2ZWxvcG1lbnRcXE9yaWdpbmFsXFx6c2UtY2lzY29cXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiY29sb3JzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJib2R5IiwiaGVhZGVyIiwic3ViSGVhZGVyIiwibmF2SGVhZGVyIiwiY2FwdGlvbkxhcmdlIiwiY2FwdGlvbk1lZGl1bSIsImNhcHRpb25TbWFsbCIsIm5hdiIsIm5hdkxpc3QiLCJ3aGl0ZSIsImJsYWNrIiwibWFpbkNvbG9yIiwiYWNjZW50Q29sb3IiLCJib2R5U21hbGwiLCJkaW1lbnNpb25zIiwicGFkZGluZyIsInBhZGRpbmdOYXJyb3ciLCJoZXJvQ291cnNlUGFkZGluZyIsImhlcm9BY2FkZW15UGFkZGluZyIsInV0aWxzIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiQXJyb3dMaW5rV3JhcHBlciIsInN0eWxlZCIsIkFycm93TGluayIsImRhdGEiLCJ0aXRsZSIsInNsdWciLCJTdHlsZWRCdXR0b24iLCJpc0ZpbGxlZCIsImhhc01hcmdpbiIsIkJ1dHRvbiIsImNhcHRpb24iLCJsaW5rIiwiTmV4dEltYWdlV3JhcHBlciIsIlN0eWxlZE5leHRJbWFnZSIsIk5leHRJbWFnZSIsIkltYWdlIiwiaW1hZ2UiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRlciIsImdldFN0cmFwaU1lZGlhIiwiTGluZUhvcml6b250YWxXcmFwcGVyIiwiTGluZSIsImxhcmdlIiwiTGluZUhvcml6b250YWwiLCJjaGlsZHJlbiIsIkxpbmVWZXJ0aWNhbFdyYXBwZXIiLCJMaW5lVmVydGljYWwiLCJIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciIsIkltYWdlV3JhcHBlciIsIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsImxpbmtUaXRsZSIsIldyYXBwZXIiLCJJbnN0cnVjdG9yV3JhcHBlciIsIkhlcm9JbnN0cnVjdG9yQ29tcG9uZW50IiwiaW5zdHJ1Y3RvciIsIk5hdiIsIm5hdmlnYXRpb24iLCJsaW5rcyIsImxvZ28iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaWQiLCJncm91cE5hbWUiLCJOYXZCYXIiLCJMb2dvIiwiTGlua3MiLCJMaW5rR3JvdXAiLCJTdHlsZWRMaW5rIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwibW90aW9uIiwiTGlua0NvbnRhaW5lckJhY2tncm91bmQiLCJIZXJvV3JhcHBlciIsIkNvbnRlbnRXcmFwcGVyIiwiQnV0dG9uV3JhcHBlciIsIkhlcm8iLCJidXR0b24iLCJidXR0b25EYXRhIiwiSGVyb0FjYWRlbXlXcmFwcGVyIiwiSGVhZGVyV3JhcHBlciIsIkRlc2NyaXB0aW9uV3JhcHBlciIsIkhlcm9BY2FkZW15IiwiSGVyb0NvdXJzZVdyYXBwZXIiLCJIZXJvQ291cnNlcyIsImNvdXJzZSIsImNvdXJzZURhdGEiLCJJbnN0cnVjdG9yc1dyYXBwZXIiLCJIZXJvSW5zdHJ1Y3RvcnMiLCJpbnN0cnVjdG9yQ29tcG9uZW50IiwiaW5zdHJ1Y3RvckRhdGEiLCJIZXJvUHJpY2luZ1dyYXBwZXIiLCJIZXJvUHJpY2luZyIsInNlY3Rpb25Db21wb25lbnRzIiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiU2VjdGlvbkNvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiU2VjdGlvbnMiLCJzZWN0aW9ucyIsInNlY3Rpb24iLCJTZW8iLCJzZW8iLCJkZWZhdWx0U2VvIiwic2l0ZU5hbWUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNlb1dpdGhEZWZhdWx0cyIsImZ1bGxTZW8iLCJtZXRhVGl0bGUiLCJzaGFyZUltYWdlIiwibWV0YURlc2NyaXB0aW9uIiwiYXJ0aWNsZSIsIkxheW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50IiwibGVuZ3RoIiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJmaWx0ZXIiLCJzIiwia2luZCIsIlNldCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwicmVuZGVyIiwiRHluYW1pY1BhZ2UiLCJwYWdlQ29udGV4dCIsImdldFN0YXRpY1BhdGhzIiwiZmV0Y2hBUEkiLCJwYXRocyIsInNsdWdBcnJheSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYWdlRGF0YSIsImdldFBhZ2VEYXRhIiwiY3JlYXRlQ29udGV4dCIsIk15QXBwIiwiYXBwUHJvcHMiLCJnZXRTdHJhcGlVUkwiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsInBhZ2VzRGF0YSIsIm1lZGlhIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVHQUE2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBRU8sTUFBTUEsV0FBVyxHQUFHQyxvRUFBSCw4aEJBY0EsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLGVBZDVCLEVBb0JQLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxJQXBCdkIsRUE4QlAsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFD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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7QUNoQkEsMkM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL1tbLi4uc2x1Z11dLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDYyLjUlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgIFxyXG59XHJcblxyXG5hLCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmJvZHl9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuaGVhZGVyfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zdWJIZWFkZXJ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm5hdkhlYWRlcn07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvbkxhcmdlfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuY2FwdGlvbk1lZGl1bX07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuaDYge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLmNhcHRpb25TbWFsbH07XHJcbiAgIFxyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5ib2R5fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSwgbmF2IH0pID0+IChuYXYgPyB0aGVtZS5mb250U2l6ZS5uYXZMaXN0IDogdGhlbWUuZm9udFNpemUuYm9keSl9O1xyXG59XHJcblxyXG5gO1xyXG4iLCJleHBvcnQgY29uc3QgdGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICB3aGl0ZTogJyNGRkZGRkYnLFxyXG4gICAgYmxhY2s6ICcjMDAwMDAwJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFOEVCRjEnLFxyXG4gICAgbWFpbkNvbG9yOiAnIzBFMjc0RCcsXHJcbiAgICBhY2NlbnRDb2xvcjogJyMwMEJDRUEnLFxyXG4gIH0sXHJcbiAgZm9udFNpemU6IHtcclxuICAgIGhlYWRlcjogJzQuOHJlbScsXHJcbiAgICBuYXZIZWFkZXI6ICczLjZyZW0nLFxyXG4gICAgbmF2TGlzdDogJzEuOHJlbScsXHJcbiAgICBzdWJIZWFkZXI6ICcycmVtJyxcclxuICAgIGNhcHRpb25MYXJnZTogJzIuNHJlbScsXHJcbiAgICBjYXB0aW9uTWVkaXVtOiAnMS4zcmVtJyxcclxuICAgIGNhcHRpb25TbWFsbDogJzEuMnJlbScsXHJcbiAgICBib2R5OiAnMS42cmVtJyxcclxuICAgIGJvZHlTbWFsbDogJzEuNHJlbScsXHJcbiAgfSxcclxuICBkaW1lbnNpb25zOiB7XHJcbiAgICBwYWRkaW5nOiAnMTB2dycsXHJcbiAgICBwYWRkaW5nTmFycm93OiAnMTV2dycsXHJcbiAgICBoZXJvQ291cnNlUGFkZGluZzogJzNyZW0gNXJlbScsXHJcbiAgICBoZXJvQWNhZGVteVBhZGRpbmc6ICc0cmVtIDQuNXJlbScsXHJcbiAgfSxcclxuICB1dGlsczoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIGJveFNoYWRvdzogJzBweCA0cHggMTRweCAgcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEFycm93TGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgYSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuXHJcbiAgICAmOnZpc2l0ZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXJyb3dMaW5rID0gKHsgZGF0YSwgdGl0bGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXJyb3dMaW5rV3JhcHBlcj5cclxuICAgICAgPExpbmsgaHJlZj17YC8ke2RhdGEuc2x1Z31gfSBwYXNzSHJlZj5cclxuICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L0Fycm93TGlua1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFycm93TGluaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYWBcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGJvcmRlcjogJHsoeyB0aGVtZSwgaXNGaWxsZWQgfSkgPT4gKGlzRmlsbGVkID8gJzAnIDogYDNweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5tYWluQ29sb3J9YCl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGlzRmlsbGVkIH0pID0+IChpc0ZpbGxlZCA/IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IgOiAndHJhbnNwYXJlbnQnKX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUsIGlzRmlsbGVkIH0pID0+IChpc0ZpbGxlZCA/IHRoZW1lLmNvbG9ycy53aGl0ZSA6IHRoZW1lLmNvbG9ycy5tYWluQ29sb3IpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkeyh7IGhhc01hcmdpbiB9KSA9PiAoaGFzTWFyZ2luID8gJzJyZW0nIDogJzAnKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgZGF0YSwgaGFzTWFyZ2luIH0pID0+IHtcclxuICBjb25zdCB7IGNhcHRpb24sIGlzRmlsbGVkLCBsaW5rIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQnV0dG9uIGhhc01hcmdpbj17aGFzTWFyZ2lufSBocmVmPXtsaW5rLnNsdWd9IGlzRmlsbGVkPXtpc0ZpbGxlZH0+XHJcbiAgICAgIHtjYXB0aW9ufVxyXG4gICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE5leHRJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWROZXh0SW1hZ2UgPSBzdHlsZWQoTmV4dEltYWdlKWBcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9ICh7IGltYWdlIH0pID0+IHtcclxuICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZTtcclxuXHJcbiAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGdldFN0cmFwaU1lZGlhKGltYWdlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRJbWFnZVdyYXBwZXI+XHJcbiAgICAgIDxTdHlsZWROZXh0SW1hZ2UgbG9hZGVyPXtsb2FkZXJ9IGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBzcmM9e3VybH0gYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgJyd9IC8+XHJcbiAgICA8L05leHRJbWFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IExpbmVIb3Jpem9udGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1pbi1oZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzAuOHJlbScgOiAnMC40cmVtJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBtYXJnaW4tdG9wOiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/ICcyLjJyZW0nIDogJzEuNXJlbScpfTtcclxuYDtcclxuXHJcbmNvbnN0IExpbmVIb3Jpem9udGFsID0gKHsgY2hpbGRyZW4sIGxhcmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVIb3Jpem9udGFsV3JhcHBlcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8TGluZSBsYXJnZT17bGFyZ2V9IC8+XHJcbiAgICA8L0xpbmVIb3Jpem9udGFsV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZUhvcml6b250YWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTGluZVZlcnRpY2FsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IExpbmUgPSBzdHlsZWQuc3BhbmBcclxuICBtaW4td2lkdGg6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzAuOHJlbScgOiAnMC40cmVtJyl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICBtYXJnaW4tcmlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzIuMnJlbScgOiAnMS41cmVtJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgTGluZVZlcnRpY2FsID0gKHsgY2hpbGRyZW4sIGxhcmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVWZXJ0aWNhbFdyYXBwZXI+XHJcbiAgICAgIDxMaW5lIGxhcmdlPXtsYXJnZX0gLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5lVmVydGljYWxXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lVmVydGljYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQXJyb3dMaW5rIGZyb20gJy4uL2F0b21zL0Fycm93TGluayc7XHJcbmltcG9ydCBMaW5lVmVydGljYWwgZnJvbSAnLi4vYXRvbXMvTGluZVZlcnRpY2FsJztcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMuaGVyb0NvdXJzZVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrR3JheTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTAlLCAtNjUlKTtcclxuYDtcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgbGlua1RpdGxlIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXIgLz5cclxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8QXJyb3dMaW5rIGRhdGE9e2xpbmt9IHRpdGxlPXtsaW5rVGl0bGV9IC8+XHJcbiAgICA8L0hlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEluc3RydWN0b3JXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtHcmF5O1xyXG4gIG1pbi13aWR0aDogMTdyZW07XHJcbiAgbWluLWhlaWdodDogMTdyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuXHJcbmNvbnN0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBoZWFkZXIsIGluc3RydWN0b3IsIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlciAvPlxyXG4gICAgICA8SW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgICAgICAgPGg1PntoZWFkZXJ9PC9oNT5cclxuICAgICAgICA8aDQ+e2luc3RydWN0b3J9PC9oND5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL2F0b21zL0ltYWdlJztcclxuaW1wb3J0IHsgTmF2QmFyLCBMb2dvLCBMaW5rcywgTGlua0dyb3VwLCBTdHlsZWRMaW5rLCBMaW5rQ29udGFpbmVyLCBMaW5rU3BhbiwgTGlua0NvbnRhaW5lckJhY2tncm91bmQgfSBmcm9tICcuL05hdi5zdHlsZXMnO1xyXG5cclxuY29uc3QgTmF2ID0gKHsgbmF2aWdhdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBsaW5rcywgbG9nbyB9ID0gbmF2aWdhdGlvbjtcclxuICBjb25zb2xlLmxvZyhuYXZpZ2F0aW9uKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZCYXI+XHJcbiAgICAgIDxMb2dvPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gLz5cclxuICAgICAgPC9Mb2dvPlxyXG4gICAgICA8TGlua3M+XHJcbiAgICAgICAge2xpbmtzLm1hcCgoeyBpZCwgZ3JvdXBOYW1lIH0pID0+IChcclxuICAgICAgICAgIDxMaW5rR3JvdXAga2V5PXtpZH0+e2dyb3VwTmFtZX08L0xpbmtHcm91cD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaW5rcz5cclxuICAgIDwvTmF2QmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTB2aDtcclxuICBwYWRkaW5nOiAxcmVtICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyNXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rcyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rR3JvdXAgPSBzdHlsZWQuaDNgXHJcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxyXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaW4td2lkdGg6IDIwdnc7XHJcbiAgbWF4LXdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rU3BhbiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lckJhY2tncm91bmQgPSBzdHlsZWQobW90aW9uLnNwYW4pYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9hdG9tcy9CdXR0b24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJy4uL2F0b21zL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9hdG9tcy9JbWFnZSc7XHJcblxyXG5jb25zdCBIZXJvV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IGBjYWxjKDQwdncgLSAke3RoZW1lLmRpbWVuc2lvbnMucGFkZGluZ30pYH07XHJcblxyXG4gIGgxIHtcclxuICAgIG1heC13aWR0aDogNDByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgSGVybyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b24sIGltYWdlIH0gPSBkYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9XcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICB7YnV0dG9uLm1hcCgoYnV0dG9uRGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGtleT17YnV0dG9uRGF0YS5pZH0gZGF0YT17YnV0dG9uRGF0YX0gaGFzTWFyZ2luIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtpbWFnZX0gLz5cclxuICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICA8L0hlcm9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9hdG9tcy9CdXR0b24nO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJy4uL2F0b21zL0xpbmVWZXJ0aWNhbCc7XHJcblxyXG5jb25zdCBIZXJvQWNhZGVteVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAxMHZoIDAgMTB2aCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ05hcnJvd307XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAyMHJlbTtcclxuICByb3ctZ2FwOiA0cmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICBncmlkLXJvdzogMS8yO1xyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5oZXJvQWNhZGVteVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya0dyYXk7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbmA7XHJcblxyXG5jb25zdCBIZXJvQWNhZGVteSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b24gfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQWNhZGVteVdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXJXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lVmVydGljYWwgbGFyZ2U+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICAgICAgPERlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxCdXR0b24gZGF0YT17YnV0dG9ufSAvPlxyXG4gICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlciAvPlxyXG4gICAgPC9IZXJvQWNhZGVteVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9BY2FkZW15O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEhlcm9Db3Vyc2VDb21wb25lbnQgZnJvbSAnLi4vbW9sZWN1bGVzL0hlcm9Db3Vyc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnLi4vYXRvbXMvTGluZUhvcml6b250YWwnO1xyXG5cclxuY29uc3QgSGVyb0NvdXJzZVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nTmFycm93fTtcclxuICByb3ctZ2FwOiAxNXZoO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nTmFycm93fTtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXJvdzogMS8yO1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbmA7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlcyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZVdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXJXcmFwcGVyPlxyXG4gICAgICAgIDxMaW5lSG9yaXpvbnRhbCBsYXJnZT5cclxuICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICAgICAge2RhdGEuY291cnNlLm1hcCgoY291cnNlRGF0YSkgPT4gKFxyXG4gICAgICAgIDxIZXJvQ291cnNlQ29tcG9uZW50IGtleT17Y291cnNlRGF0YS5pZH0gZGF0YT17Y291cnNlRGF0YX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlcm9Db3Vyc2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCBmcm9tICcuLi9tb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQnO1xyXG5cclxuY29uc3QgSW5zdHJ1Y3RvcnNXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogNXJlbSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ307XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ05hcnJvd307XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG5gO1xyXG5cclxuY29uc3QgSGVyb0luc3RydWN0b3JzID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnN0cnVjdG9yc1dyYXBwZXI+XHJcbiAgICAgIHtkYXRhLmluc3RydWN0b3JDb21wb25lbnQubWFwKChpbnN0cnVjdG9yRGF0YSkgPT4gKFxyXG4gICAgICAgIDxIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudCBrZXk9e2luc3RydWN0b3JEYXRhLmlkfSBkYXRhPXtpbnN0cnVjdG9yRGF0YX0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0luc3RydWN0b3JzV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0luc3RydWN0b3JzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEFycm93TGluayBmcm9tICcuLi9hdG9tcy9BcnJvd0xpbmsnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJy4uL2F0b21zL0xpbmVWZXJ0aWNhbCc7XHJcblxyXG5jb25zdCBIZXJvUHJpY2luZ1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDZyZW0gJHt0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmdOYXJyb3d9YH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkNvbG9yfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAyMHJlbTtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcblxyXG4gICAgJjp2aXNpdGVkIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlcm9QcmljaW5nID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGxpbmtUaXRsZSwgbGluayB9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9QcmljaW5nV3JhcHBlcj5cclxuICAgICAgPExpbmVWZXJ0aWNhbCBsYXJnZT5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDwvTGluZVZlcnRpY2FsPlxyXG4gICAgICA8RGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPEFycm93TGluayBkYXRhPXtsaW5rfSB0aXRsZT17bGlua1RpdGxlfSAvPlxyXG4gICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgIDwvSGVyb1ByaWNpbmdXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvUHJpY2luZztcclxuIiwiaW1wb3J0IEhlcm8gZnJvbSAnLi4vc2VjdGlvbnMvaGVybyc7XHJcbmltcG9ydCBIZXJvSW5zdHJ1Y3RvcnMgZnJvbSAnLi4vc2VjdGlvbnMvaGVyb0luc3RydWN0b3JzJztcclxuaW1wb3J0IEhlcm9Db3Vyc2VzIGZyb20gJy4uL3NlY3Rpb25zL2hlcm9Db3Vyc2VzJztcclxuaW1wb3J0IEhlcm9QcmljaW5nIGZyb20gJy4uL3NlY3Rpb25zL2hlcm9QcmljaW5nJztcclxuaW1wb3J0IEhlcm9BY2FkZW15IGZyb20gJy4uL3NlY3Rpb25zL2hlcm9BY2FkZW15JztcclxuXHJcbi8vIE1hcCBTdHJhcGkgc2VjdGlvbnMgdG8gc2VjdGlvbiBjb21wb25lbnRzXHJcbmNvbnN0IHNlY3Rpb25Db21wb25lbnRzID0ge1xyXG4gICdzZWN0aW9ucy5oZXJvJzogSGVybyxcclxuICAnc2VjdGlvbnMuaGVyby1pbnN0cnVjdG9ycyc6IEhlcm9JbnN0cnVjdG9ycyxcclxuICAnc2VjdGlvbnMuaGVyby1jb3Vyc2VzJzogSGVyb0NvdXJzZXMsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tcHJpY2luZyc6IEhlcm9QcmljaW5nLFxyXG4gICdzZWN0aW9ucy5oZXJvLWFjYWRlbXknOiBIZXJvQWNhZGVteSxcclxufTtcclxuXHJcbi8vIERpc3BsYXkgYSBzZWN0aW9uIGluZGl2aWR1YWxseVxyXG5jb25zdCBTZWN0aW9uID0gKHsgc2VjdGlvbkRhdGEgfSkgPT4ge1xyXG4gIC8vIFByZXBhcmUgdGhlIGNvbXBvbmVudFxyXG4gIGNvbnN0IFNlY3Rpb25Db21wb25lbnQgPSBzZWN0aW9uQ29tcG9uZW50c1tzZWN0aW9uRGF0YS5fX2NvbXBvbmVudF07XHJcblxyXG4gIGlmICghU2VjdGlvbkNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBEaXNwbGF5IHRoZSBzZWN0aW9uXHJcbiAgcmV0dXJuIDxTZWN0aW9uQ29tcG9uZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPjtcclxufTtcclxuXHJcbi8vIERpc3BsYXkgdGhlIGxpc3Qgb2Ygc2VjdGlvbnNcclxuY29uc3QgU2VjdGlvbnMgPSAoeyBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICA8U2VjdGlvbiBzZWN0aW9uRGF0YT17c2VjdGlvbn0ga2V5PXtgJHtzZWN0aW9uLl9fY29tcG9uZW50fSR7c2VjdGlvbi5pZH1gfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9ucztcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy9wYWdlcy9fYXBwJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5cclxuY29uc3QgU2VvID0gKHsgc2VvIH0pID0+IHtcclxuICBjb25zdCB7IGRlZmF1bHRTZW8sIHNpdGVOYW1lIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IHNlb1dpdGhEZWZhdWx0cyA9IHtcclxuICAgIC4uLmRlZmF1bHRTZW8sXHJcbiAgICAuLi5zZW8sXHJcbiAgfTtcclxuICBjb25zdCBmdWxsU2VvID0ge1xyXG4gICAgLi4uc2VvV2l0aERlZmF1bHRzLFxyXG4gICAgLy8gQWRkIHRpdGxlIHN1ZmZpeFxyXG4gICAgbWV0YVRpdGxlOiBgJHtzZW9XaXRoRGVmYXVsdHMubWV0YVRpdGxlfSB8ICR7c2l0ZU5hbWV9YCxcclxuICAgIC8vIEdldCBmdWxsIGltYWdlIFVSTFxyXG4gICAgc2hhcmVJbWFnZTogZ2V0U3RyYXBpTWVkaWEoc2VvV2l0aERlZmF1bHRzLnNoYXJlSW1hZ2UpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAge2Z1bGxTZW8ubWV0YVRpdGxlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHRpdGxlPntmdWxsU2VvLm1ldGFUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtmdWxsU2VvLm1ldGFUaXRsZX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAge2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9uICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7ZnVsbFNlby5zaGFyZUltYWdlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7ZnVsbFNlby5hcnRpY2xlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz59XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbztcclxuIiwiaW1wb3J0IE5hdiBmcm9tICcuLi9vcmdhbmlzbXMvTmF2L05hdic7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgbmF2aWdhdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXYgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7ZXhwb3J0cy5OZXh0V2ViVml0YWxzTWV0cmljPV91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCxjdHh9KXtjb25zdCBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxwYWdlUHJvcHMpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAnL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dCc7XHJcbmltcG9ydCBTZW8gZnJvbSAnL2NvbXBvbmVudHMvc3RyYXBpL3Nlbyc7XHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcvY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gJy91dGlscy9nZXRQYWdlRGF0YSc7XHJcblxyXG5jb25zdCBEeW5hbWljUGFnZSA9ICh7IHNlY3Rpb25zLCBwYWdlQ29udGV4dCwgbmF2aWdhdGlvbiB9KSA9PiB7XHJcbiAgLy8gICBjb25zdCBzZW8gPSB7XHJcbiAgLy8gICAgIG1ldGFUaXRsZTogY2F0ZWdvcnkubmFtZSxcclxuICAvLyAgICAgbWV0YURlc2NyaXB0aW9uOiBgQWxsICR7Y2F0ZWdvcnkubmFtZX0gYXJ0aWNsZXNgLFxyXG4gIC8vICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHBhZ2VDb250ZXh0PXtwYWdlQ29udGV4dH0gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0+XHJcbiAgICAgIHsvKiA8U2VvIHNlbz17c2VvfSAvPiAqL31cclxuICAgICAgPFNlY3Rpb25zIHNlY3Rpb25zPXtzZWN0aW9uc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBmZXRjaEFQSSgnL3BhZ2VzJyk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcGFnZXMubWFwKChwYWdlKSA9PiB7XHJcbiAgICAvLyBEZWNvbXBvc2UgdGhlIHNsdWcgdGhhdCB3YXMgc2F2ZWQgaW4gU3RyYXBpXHJcbiAgICBjb25zdCBzbHVnQXJyYXkgPSAhcGFnZS5zbHVnID8gZmFsc2UgOiBwYWdlLnNsdWcuc3BsaXQoJy8nKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgc2x1Zzogc2x1Z0FycmF5IH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGdldFBhZ2VEYXRhKHsgc2x1ZzogIXBhcmFtcy5zbHVnID8gWycnXSA6IHBhcmFtcy5zbHVnIH0pO1xyXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBhd2FpdCBmZXRjaEFQSSgnL25hdmlnYXRpb24nKTtcclxuXHJcbiAgaWYgKHBhZ2VEYXRhID09IG51bGwpIHtcclxuICAgIC8vIEdpdmluZyB0aGUgcGFnZSBubyBwcm9wcyB3aWxsIHRyaWdnZXIgYSA0MDQgcGFnZVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VjdGlvbnM6IHBhZ2VEYXRhLmNvbnRlbnQsXHJcbiAgICAgIG5hdmlnYXRpb24sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xyXG4iLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcvdXRpbHMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy9hc3NldHMvc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcvYXNzZXRzL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbi8vIFN0b3JlIFN0cmFwaSBHbG9iYWwgb2JqZWN0IGluIGNvbnRleHRcclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD57LyogPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5mYXZpY29uKX0gLz4gKi99PC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnbG9iYWx9PlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XHJcbi8vIGhhdmUgZ2V0U3RhdGljUHJvcHMuIFNvIGFydGljbGUsIGNhdGVnb3J5IGFuZCBob21lIHBhZ2VzIHN0aWxsIGdldCBTU0cuXHJcbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcclxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAvLyBGZXRjaCBnbG9iYWwgc2l0ZSBzZXR0aW5ncyBmcm9tIFN0cmFwaVxyXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGZldGNoQVBJKCcvZ2xvYmFsJyk7XHJcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyAuLi5hcHBQcm9wcywgcGFnZVByb3BzOiB7IGdsb2JhbCB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gJycpIHtcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnfSR7cGF0aH1gO1xufVxuXG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCkge1xuICBjb25zdCByZXF1ZXN0VXJsID0gZ2V0U3RyYXBpVVJMKHBhdGgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VEYXRhKHBhcmFtcykge1xyXG4gIGNvbnN0IHNsdWcgPSBwYXJhbXMuc2x1Zy5qb2luKCcvJyk7XHJcbiAgLy8gRmluZCB0aGUgcGFnZXMgdGhhdCBtYXRjaCB0aGlzIHNsdWdcclxuICBjb25zdCBwYWdlc0RhdGEgPSBhd2FpdCBmZXRjaEFQSShgL3BhZ2VzP3NsdWc9JHtzbHVnfWApO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgd2UgZm91bmQgc29tZXRoaW5nLCBvdGhlcndpc2UgcmV0dXJuIG51bGxcclxuICBpZiAocGFnZXNEYXRhID09IG51bGwgfHwgcGFnZXNEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IGl0ZW0gc2luY2UgdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIHJlc3VsdCBwZXIgc2x1Z1xyXG4gIHJldHVybiBwYWdlc0RhdGFbMF07XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBtZWRpYS51cmwuc3RhcnRzV2l0aCgnLycpID8gZ2V0U3RyYXBpVVJMKG1lZGlhLnVybCkgOiBtZWRpYS51cmw7XG4gIHJldHVybiBpbWFnZVVybDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==