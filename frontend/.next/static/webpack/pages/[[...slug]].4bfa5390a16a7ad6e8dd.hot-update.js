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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Button/Button */ "./components/atoms/Button/Button.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _HeroPricing_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeroPricing.styles */ "./components/sections/HeroPricing/HeroPricing.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroPricing\\HeroPricing.js",
    _this = undefined;








var HeroPricing = function HeroPricing(_ref) {
  var data = _ref.data;
  var title = data.title,
      description = data.description,
      button = data.button;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_6__.HeroPricingWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroPricing_styles__WEBPACK_IMPORTED_MODULE_6__.DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        data: button,
        accent: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = HeroPricing;
HeroPricing.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    button: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  })
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvUHJpY2luZy9IZXJvUHJpY2luZy5qcyJdLCJuYW1lcyI6WyJIZXJvUHJpY2luZyIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFDeEJDLEtBRHdCLEdBQ09ELElBRFAsQ0FDeEJDLEtBRHdCO0FBQUEsTUFDakJDLFdBRGlCLEdBQ09GLElBRFAsQ0FDakJFLFdBRGlCO0FBQUEsTUFDSkMsTUFESSxHQUNPSCxJQURQLENBQ0pHLE1BREk7QUFHaEMsc0JBQ0UsOERBQUMsbUVBQUQ7QUFBQSw0QkFDRSw4REFBQyx5RUFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLG1FQUFEO0FBQUEsOEJBQ0UsOERBQUMscUVBQUQ7QUFBQSwrQkFDRTtBQUFBLG9CQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyx5REFBRDtBQUFRLFlBQUksRUFBRUMsTUFBZDtBQUFzQixjQUFNO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBaEJEOztLQUFNSixXO0FBa0JOQSxXQUFXLENBQUNLLFNBQVosR0FBd0I7QUFDdEJKLE1BQUksRUFBRUssdURBQUEsQ0FBZ0I7QUFDcEJKLFNBQUssRUFBRUksMERBRGE7QUFFcEJILGVBQVcsRUFBRUcsMERBRk87QUFHcEJGLFVBQU0sRUFBRUUsMERBQWdCQztBQUhKLEdBQWhCO0FBRGdCLENBQXhCO0FBUUEsK0RBQWVQLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uNGJmYTUzOTBhMTZhN2FkNmU4ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGF0b21zL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IExpbmVWZXJ0aWNhbCBmcm9tICdAYXRvbXMvTGluZVZlcnRpY2FsL0xpbmVWZXJ0aWNhbCc7XHJcbmltcG9ydCB7IEhlcm9QcmljaW5nV3JhcHBlciwgRGVzY3JpcHRpb25XcmFwcGVyIH0gZnJvbSAnLi9IZXJvUHJpY2luZy5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb1ByaWNpbmcgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uIH0gPSBkYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9QcmljaW5nV3JhcHBlcj5cclxuICAgICAgPExpbmVIb3Jpem9udGFsPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPC9MaW5lSG9yaXpvbnRhbD5cclxuICAgICAgPERlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICA8TGluZVZlcnRpY2FsPlxyXG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L0xpbmVWZXJ0aWNhbD5cclxuICAgICAgICA8QnV0dG9uIGRhdGE9e2J1dHRvbn0gYWNjZW50IC8+XHJcbiAgICAgIDwvRGVzY3JpcHRpb25XcmFwcGVyPlxyXG4gICAgPC9IZXJvUHJpY2luZ1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9QcmljaW5nLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9QcmljaW5nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9