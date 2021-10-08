self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/templates/Layout.js":
/*!****************************************!*\
  !*** ./components/templates/Layout.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/shapes */ "./utils/shapes.js");
/* harmony import */ var _organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @organisms/NavBar/NavBar */ "./components/organisms/NavBar/NavBar.js");
/* harmony import */ var _organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @organisms/Navigation/Navigation */ "./components/organisms/Navigation/Navigation.js");
/* harmony import */ var _organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @organisms/Footer/Footer */ "./components/organisms/Footer/Footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();







var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      navigation = _ref.navigation,
      footer = _ref.footer,
      isLoading = _ref.isLoading;
  var logo = navigation.logo,
      menuImage = navigation.menuImage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isNavOpen = _useState[0],
      setIsNavOpen = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isNavOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
      navigation: navigation,
      setIsNavOpen: setIsNavOpen,
      isLoading: isLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {
        logo: logo,
        menuImage: menuImage,
        setIsNavOpen: setIsNavOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {
        footer: footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this)]
    }, void 0, true)
  }, void 0, false);
};

_s(Layout, "MNgkhjFJ3DQLGhlcYzaIsl5YrwQ=");

_c = Layout;
Layout.propTypes = {
  children: utils_shapes__WEBPACK_IMPORTED_MODULE_1__.componentShape,
  navigation: utils_shapes__WEBPACK_IMPORTED_MODULE_1__.componentShape
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibmF2aWdhdGlvbiIsImZvb3RlciIsImlzTG9hZGluZyIsImxvZ28iLCJtZW51SW1hZ2UiLCJ1c2VTdGF0ZSIsImlzTmF2T3BlbiIsInNldElzTmF2T3BlbiIsInByb3BUeXBlcyIsImNvbXBvbmVudFNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFVBQW9DLFFBQXBDQSxVQUFvQztBQUFBLE1BQXhCQyxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQUEsTUFDdERDLElBRHNELEdBQ2xDSCxVQURrQyxDQUN0REcsSUFEc0Q7QUFBQSxNQUNoREMsU0FEZ0QsR0FDbENKLFVBRGtDLENBQ2hESSxTQURnRDs7QUFBQSxrQkFFNUJDLCtDQUFRLENBQUMsS0FBRCxDQUZvQjtBQUFBLE1BRXZEQyxTQUZ1RDtBQUFBLE1BRTVDQyxZQUY0Qzs7QUFJOUQsc0JBQ0U7QUFBQSxjQUNHRCxTQUFTLGdCQUNSLDhEQUFDLHFFQUFEO0FBQVksZ0JBQVUsRUFBRU4sVUFBeEI7QUFBb0Msa0JBQVksRUFBRU8sWUFBbEQ7QUFBZ0UsZUFBUyxFQUFFTDtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsZ0JBR1I7QUFBQSw4QkFDRSw4REFBQyw2REFBRDtBQUFRLFlBQUksRUFBRUMsSUFBZDtBQUFvQixpQkFBUyxFQUFFQyxTQUEvQjtBQUEwQyxvQkFBWSxFQUFFRztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1IsUUFGSCxlQUdFLDhEQUFDLDZEQUFEO0FBQVEsY0FBTSxFQUFFRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUpKLG1CQURGO0FBYUQsQ0FqQkQ7O0dBQU1ILE07O0tBQUFBLE07QUFtQk5BLE1BQU0sQ0FBQ1UsU0FBUCxHQUFtQjtBQUNqQlQsVUFBUSxFQUFFVSx3REFETztBQUVqQlQsWUFBVSxFQUFFUyx3REFBY0E7QUFGVCxDQUFuQjtBQUtBLCtEQUFlWCxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjZjYzI5Y2JlZWE3NmVhODY4Y2ExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb25lbnRTaGFwZSB9IGZyb20gJ3V0aWxzL3NoYXBlcyc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnQG9yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQG9yZ2FuaXNtcy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0BvcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIG5hdmlnYXRpb24sIGZvb3RlciwgaXNMb2FkaW5nIH0pID0+IHtcclxuICBjb25zdCB7IGxvZ28sIG1lbnVJbWFnZSB9ID0gbmF2aWdhdGlvbjtcclxuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2lzTmF2T3BlbiA/IChcclxuICAgICAgICA8TmF2aWdhdGlvbiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZCYXIgbG9nbz17bG9nb30gbWVudUltYWdlPXttZW51SW1hZ2V9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEZvb3RlciBmb290ZXI9e2Zvb3Rlcn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjb21wb25lbnRTaGFwZSxcclxuICBuYXZpZ2F0aW9uOiBjb21wb25lbnRTaGFwZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==