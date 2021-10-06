self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/atoms/ArrowLink/ArrowLink.js":
/*!*************************************************!*\
  !*** ./components/atoms/ArrowLink/ArrowLink.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _ArrowLink_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowLink.styles */ "./components/atoms/ArrowLink/ArrowLink.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\ArrowLink\\ArrowLink.js",
    _this = undefined;







var ArrowLink = function ArrowLink(_ref) {
  var _ref$slug = _ref.slug,
      slug = _ref$slug === void 0 ? '' : _ref$slug,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Link' : _ref$title,
      image = _ref.image;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/".concat(slug),
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_5__.ArrowLinkWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArrowLink_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
          image: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = ArrowLink;
ArrowLink.propTypes = {
  slug: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (ArrowLink);

var _c;

$RefreshReg$(_c, "ArrowLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9BcnJvd0xpbmsvQXJyb3dMaW5rLmpzIl0sIm5hbWVzIjpbIkFycm93TGluayIsInNsdWciLCJ0aXRsZSIsImltYWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBMEM7QUFBQSx1QkFBdkNDLElBQXVDO0FBQUEsTUFBdkNBLElBQXVDLDBCQUFoQyxFQUFnQztBQUFBLHdCQUE1QkMsS0FBNEI7QUFBQSxNQUE1QkEsS0FBNEIsMkJBQXBCLE1BQW9CO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzFELHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxhQUFNRixJQUFOLENBQVY7QUFBd0IsWUFBUSxNQUFoQztBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQywyREFBRDtBQUFBLCtCQUNFLDhEQUFDLHVEQUFEO0FBQU8sZUFBSyxFQUFFQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYRDs7S0FBTUgsUztBQWFOQSxTQUFTLENBQUNJLFNBQVYsR0FBc0I7QUFDcEJILE1BQUksRUFBRUkscUVBRGM7QUFFcEJILE9BQUssRUFBRUcscUVBRmE7QUFHcEJGLE9BQUssRUFBRUUsMERBQWdCQztBQUhILENBQXRCO0FBTUEsK0RBQWVOLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uMzc4NGEwOWRmNjk5YjMxYWI5OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBBcnJvd0xpbmtXcmFwcGVyLCBJbWFnZVdyYXBwZXIgfSBmcm9tICcuL0Fycm93TGluay5zdHlsZXMnO1xyXG5cclxuY29uc3QgQXJyb3dMaW5rID0gKHsgc2x1ZyA9ICcnLCB0aXRsZSA9ICdMaW5rJywgaW1hZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7c2x1Z31gfSBwYXNzSHJlZj5cclxuICAgICAgPEFycm93TGlua1dyYXBwZXI+XHJcbiAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8L0Fycm93TGlua1dyYXBwZXI+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkFycm93TGluay5wcm9wVHlwZXMgPSB7XHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xpbms7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=