self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/molecules/HeroCourseComponent.js":
/*!*****************************************************!*\
  !*** ./components/molecules/HeroCourseComponent.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/ArrowLink */ "./components/atoms/ArrowLink.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\OneDrive\\Pulpit\\websites\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent.js",
    _this = undefined;




var HeroCourseComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "HeroCourseComponent__HeroCourseComponentWrapper",
  componentId: "sc-1g1lf9c-0"
})(["display:flex;flex-direction:column;padding:", ";max-width:46rem;background-color:", ";border-radius:", ";position:relative;h4{text-align:center;margin-bottom:2rem;}p{margin-bottom:3rem;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.dimensions.heroCoursePadding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.utils.borderRadius;
});
_c = HeroCourseComponentWrapper;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "HeroCourseComponent__ImageWrapper",
  componentId: "sc-1g1lf9c-1"
})(["height:8rem;width:8rem;border-radius:50%;position:absolute;background-color:darkGray;transform:translate(-100%,-100%);"]);
_c2 = ImageWrapper;

var HeroCourseComponent = function HeroCourseComponent(_ref4) {
  var data = _ref4.data;
  console.log(data);
  var title = data.title,
      description = data.description,
      link = data.link,
      linkTitle = data.linkTitle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      small: true,
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: link,
      title: linkTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_c3 = HeroCourseComponent;
/* harmony default export */ __webpack_exports__["default"] = (HeroCourseComponent);

var _c, _c2, _c3;

$RefreshReg$(_c, "HeroCourseComponentWrapper");
$RefreshReg$(_c2, "ImageWrapper");
$RefreshReg$(_c3, "HeroCourseComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiZGltZW5zaW9ucyIsImhlcm9Db3Vyc2VQYWRkaW5nIiwiY29sb3JzIiwid2hpdGUiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsIkltYWdlV3JhcHBlciIsIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibGlua1RpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsMEJBQTBCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1NQUduQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsaUJBQWhDO0FBQUEsQ0FIbUIsRUFLVjtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUE1QjtBQUFBLENBTFUsRUFNYjtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxZQUEzQjtBQUFBLENBTmEsQ0FBaEM7S0FBTVIsMEI7QUFtQk4sSUFBTVMsWUFBWSxHQUFHUixxRUFBSDtBQUFBO0FBQUE7QUFBQSw4SEFBbEI7TUFBTVEsWTs7QUFTTixJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLFFBQWM7QUFBQSxNQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBRHdDLE1BRWhDRyxLQUZnQyxHQUVRSCxJQUZSLENBRWhDRyxLQUZnQztBQUFBLE1BRXpCQyxXQUZ5QixHQUVRSixJQUZSLENBRXpCSSxXQUZ5QjtBQUFBLE1BRVpDLElBRlksR0FFUUwsSUFGUixDQUVaSyxJQUZZO0FBQUEsTUFFTkMsU0FGTSxHQUVRTixJQUZSLENBRU5NLFNBRk07QUFHeEMsc0JBQ0UsOERBQUMsMEJBQUQ7QUFBQSw0QkFDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUtIO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBRyxXQUFLLE1BQVI7QUFBQSxnQkFBVUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyxxREFBRDtBQUFXLFVBQUksRUFBRUMsSUFBakI7QUFBdUIsV0FBSyxFQUFFQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVhEOztNQUFNUCxtQjtBQWFOLCtEQUFlQSxtQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS44MWMwOGJkNDE4OTdmZmY0MmM2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnLi4vYXRvbXMvQXJyb3dMaW5rJztcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLmhlcm9Db3Vyc2VQYWRkaW5nfTtcclxuICBtYXgtd2lkdGg6IDQ2cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya0dyYXk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC0xMDAlKTtcclxuYDtcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgbGlua1RpdGxlIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXIgLz5cclxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8cCBzbWFsbD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8QXJyb3dMaW5rIGRhdGE9e2xpbmt9IHRpdGxlPXtsaW5rVGl0bGV9IC8+XHJcbiAgICA8L0hlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9