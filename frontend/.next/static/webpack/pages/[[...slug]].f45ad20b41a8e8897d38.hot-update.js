self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/HeroPricing/HeroPricing.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroPricing/HeroPricing.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroPricing.styles */ "./components/sections/HeroPricing/HeroPricing.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroPricing\\HeroPricing.js",
    _this = undefined;







var HeroPricing = function HeroPricing(_ref) {
  var data = _ref.data;
  var title = data.title,
      description = data.description,
      button = data.button;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__.HeroPricingWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_3__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__.DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_5__.StyledLineVertical, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: button,
        accent: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = HeroPricing;
/* harmony default export */ __webpack_exports__["default"] = (HeroPricing);

var _c;

$RefreshReg$(_c, "HeroPricing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZy5qcyJdLCJuYW1lcyI6WyJIZXJvUHJpY2luZyIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQSxNQUN4QkMsS0FEd0IsR0FDT0QsSUFEUCxDQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsV0FEaUIsR0FDT0YsSUFEUCxDQUNqQkUsV0FEaUI7QUFBQSxNQUNKQyxNQURJLEdBQ09ILElBRFAsQ0FDSkcsTUFESTtBQUdoQyxzQkFDRSw4REFBQyxtRUFBRDtBQUFBLDRCQUNFLDhEQUFDLHlFQUFEO0FBQWdCLFdBQUssTUFBckI7QUFBQSw2QkFDRTtBQUFBLGtCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQyxtRUFBRDtBQUFBLDhCQUNFLDhEQUFDLG1FQUFEO0FBQUEsK0JBQ0U7QUFBQSxvQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUsOERBQUMseURBQUQ7QUFBUSxZQUFJLEVBQUVDLE1BQWQ7QUFBc0IsY0FBTTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWhCRDs7S0FBTUosVztBQWtCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5mNDVhZDIwYjQxYThlODg5N2QzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAYXRvbXMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgSGVyb1ByaWNpbmdXcmFwcGVyLCBEZXNjcmlwdGlvbldyYXBwZXIsIFN0eWxlZExpbmVWZXJ0aWNhbCB9IGZyb20gJy4vSGVyb1ByaWNpbmcuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9QcmljaW5nID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbiB9ID0gZGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvUHJpY2luZ1dyYXBwZXI+XHJcbiAgICAgIDxMaW5lSG9yaXpvbnRhbCBsYXJnZT5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgIDxEZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgICAgPFN0eWxlZExpbmVWZXJ0aWNhbD5cclxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9TdHlsZWRMaW5lVmVydGljYWw+XHJcbiAgICAgICAgPEJ1dHRvbiBkYXRhPXtidXR0b259IGFjY2VudCAvPlxyXG4gICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgIDwvSGVyb1ByaWNpbmdXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvUHJpY2luZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==