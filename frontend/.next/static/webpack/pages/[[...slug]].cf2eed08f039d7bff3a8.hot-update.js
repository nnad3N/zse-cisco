self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js":
/*!*********************************************************************************!*\
  !*** ./components/molecules/HeroInstructorComponent/HeroInstructorComponent.js ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroInstructorComponent.styles */ "./components/molecules/HeroInstructorComponent/HeroInstructorComponent.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroInstructorComponent\\HeroInstructorComponent.js",
    _this = undefined;





var HeroInstructorComponent = function HeroInstructorComponent(_ref) {
  var data = _ref.data;
  var header = data.header,
      instructor = data.instructor,
      description = data.description;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__.HeroInstructorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__.ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroInstructorComponent_styles__WEBPACK_IMPORTED_MODULE_3__.InstructorWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: instructor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = HeroInstructorComponent;
HeroInstructorComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    header: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    instructor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (HeroInstructorComponent);

var _c;

$RefreshReg$(_c, "HeroInstructorComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0luc3RydWN0b3JDb21wb25lbnQvSGVyb0luc3RydWN0b3JDb21wb25lbnQuanMiXSwibmFtZXMiOlsiSGVyb0luc3RydWN0b3JDb21wb25lbnQiLCJkYXRhIiwiaGVhZGVyIiwiaW5zdHJ1Y3RvciIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQSxNQUNwQ0MsTUFEb0MsR0FDQUQsSUFEQSxDQUNwQ0MsTUFEb0M7QUFBQSxNQUM1QkMsVUFENEIsR0FDQUYsSUFEQSxDQUM1QkUsVUFENEI7QUFBQSxNQUNoQkMsV0FEZ0IsR0FDQUgsSUFEQSxDQUNoQkcsV0FEZ0I7QUFFNUMsc0JBQ0UsOERBQUMsa0ZBQUQ7QUFBQSw0QkFDRSw4REFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyw4RUFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBLGtCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWkQ7O0tBQU1KLHVCO0FBY05BLHVCQUF1QixDQUFDSyxTQUF4QixHQUFvQztBQUNsQ0osTUFBSSxFQUFFSyx1REFBQSxDQUFnQjtBQUNwQkosVUFBTSxFQUFFSSwwREFEWTtBQUVwQkgsY0FBVSxFQUFFRywwREFGUTtBQUdwQkYsZUFBVyxFQUFFRSwwREFBZ0JDO0FBSFQsR0FBaEI7QUFENEIsQ0FBcEM7QUFRQSwrREFBZVAsdUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uY2YyZWVkMDhmMDM5ZDdiZmYzYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEhlcm9JbnN0cnVjdG9yV3JhcHBlciwgSW1hZ2VXcmFwcGVyLCBJbnN0cnVjdG9yV3JhcHBlciB9IGZyb20gJy4vSGVyb0luc3RydWN0b3JDb21wb25lbnQuc3R5bGVzJztcclxuXHJcbmNvbnN0IEhlcm9JbnN0cnVjdG9yQ29tcG9uZW50ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBoZWFkZXIsIGluc3RydWN0b3IsIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0luc3RydWN0b3JXcmFwcGVyPlxyXG4gICAgICA8SW1hZ2VXcmFwcGVyIC8+XHJcbiAgICAgIDxJbnN0cnVjdG9yV3JhcHBlcj5cclxuICAgICAgICA8aDU+e2hlYWRlcn08L2g1PlxyXG4gICAgICAgIDxoND57aW5zdHJ1Y3Rvcn08L2g0PlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvSW5zdHJ1Y3RvcldyYXBwZXI+XHJcbiAgICA8L0hlcm9JbnN0cnVjdG9yV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb0luc3RydWN0b3JDb21wb25lbnQucHJvcFR5cGVzID0ge1xyXG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnN0cnVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvSW5zdHJ1Y3RvckNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==