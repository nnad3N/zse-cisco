self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/organisms/NavBar/NavBar.styles.js":
/*!******************************************************!*\
  !*** ./components/organisms/NavBar/NavBar.styles.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; },
/* harmony export */   "Logo": function() { return /* binding */ Logo; },
/* harmony export */   "MenuImage": function() { return /* binding */ MenuImage; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Header = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.header.withConfig({
  displayName: "NavBarstyles__Header",
  componentId: "sc-12uykx8-0"
})(["display:flex;justify-content:space-between;align-items:center;min-height:10vh;padding:1rem ", ";background-color:", ";color:", ";position:sticky;top:0;z-index:10;border-bottom:", ";img{border-radius:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.dimensions.padding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.mainColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var themem = _ref4.themem,
      isLoading = _ref4.isLoading;
  return isLoading ? 'unset' : "2px solid ".concat(theme.colors.accentColor);
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "NavBarstyles__Logo",
  componentId: "sc-12uykx8-1"
})(["width:25rem;"]);
var MenuImage = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "NavBarstyles__MenuImage",
  componentId: "sc-12uykx8-2"
})(["background-color:transparent;border:none;width:5rem;cursor:pointer;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5zdHlsZXMuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVkIiwidGhlbWUiLCJkaW1lbnNpb25zIiwicGFkZGluZyIsImNvbG9ycyIsIm1haW5Db2xvciIsIndoaXRlIiwidGhlbWVtIiwiaXNMb2FkaW5nIiwiYWNjZW50Q29sb3IiLCJMb2dvIiwiTWVudUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsTUFBTSxHQUFHQyx3RUFBSDtBQUFBO0FBQUE7QUFBQSxtTkFLRDtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsT0FBaEM7QUFBQSxDQUxDLEVBTUc7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsU0FBNUI7QUFBQSxDQU5ILEVBT1I7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUUsS0FBNUI7QUFBQSxDQVBRLEVBV0E7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFXQyxTQUFYLFNBQVdBLFNBQVg7QUFBQSxTQUE0QkEsU0FBUyxHQUFHLE9BQUgsdUJBQTBCUCxLQUFLLENBQUNHLE1BQU4sQ0FBYUssV0FBdkMsQ0FBckM7QUFBQSxDQVhBLENBQVo7QUFrQkEsSUFBTUMsSUFBSSxHQUFHVixxRUFBSDtBQUFBO0FBQUE7QUFBQSxvQkFBVjtBQUlBLElBQU1XLFNBQVMsR0FBR1gsd0VBQUg7QUFBQTtBQUFBO0FBQUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uYmZjMTBjZjliMjQwNGRlNjUxOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIHBhZGRpbmc6IDFyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3JkZXItYm90dG9tOiAkeyh7IHRoZW1lbSwgaXNMb2FkaW5nIH0pID0+IChpc0xvYWRpbmcgPyAndW5zZXQnIDogYDJweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn1gKX07XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjVyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUltYWdlID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9