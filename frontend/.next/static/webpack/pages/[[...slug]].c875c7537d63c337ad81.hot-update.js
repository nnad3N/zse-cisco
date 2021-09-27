self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/organisms/Nav/Nav.styles.js":
/*!************************************************!*\
  !*** ./components/organisms/Nav/Nav.styles.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.nav.withConfig({
  displayName: "Navstyles__NavBar",
  componentId: "sc-1ounyn-0"
})(["display:flex;padding:1rem 10rem;background-color:", ";color:", ";position:sticky;top:0;z-index:10;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.mainColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__Logo",
  componentId: "sc-1ounyn-1"
})(["display:flex;align-items:center;justify-content:center;"]);
var Links = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__Links",
  componentId: "sc-1ounyn-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-left:auto;"]);
var LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "Navstyles__LinkGroup",
  componentId: "sc-1ounyn-3"
})(["padding:0.5rem 2rem;display:flex;cursor:default;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "Navstyles__StyledLink",
  componentId: "sc-1ounyn-4"
})(["margin-right:3rem;margin-bottom:2rem;&:last-child{margin-bottom:0;}"]);
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__LinkContainer",
  componentId: "sc-1ounyn-5"
})(["position:absolute;display:flex;flex-wrap:wrap;justify-content:space-between;min-width:20vw;max-width:30vw;height:max-content;padding:3rem;"]);
var LinkSpan = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "Navstyles__LinkSpan",
  componentId: "sc-1ounyn-6"
})(["position:absolute;top:0;left:0;"]);
var LinkContainerBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span).withConfig({
  displayName: "Navstyles__LinkContainerBackground",
  componentId: "sc-1ounyn-7"
})(["position:absolute;top:0;left:0;background-color:white;border-radius:20px;box-shadow:0 0 15px -8px rgba(0,0,0,0.6);"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2L05hdi5zdHlsZXMuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwidGhlbWUiLCJjb2xvcnMiLCJtYWluQ29sb3IiLCJ3aGl0ZSIsIkxvZ28iLCJMaW5rcyIsIkxpbmtHcm91cCIsIlN0eWxlZExpbmsiLCJMaW5rQ29udGFpbmVyIiwiTGlua1NwYW4iLCJtb3Rpb24iLCJMaW5rQ29udGFpbmVyQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSwyR0FHRztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxTQUE1QjtBQUFBLENBSEgsRUFJUjtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUE1QjtBQUFBLENBSlEsQ0FBWjtBQVVBLElBQU1DLElBQUksR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0RBQVY7QUFNQSxJQUFNTSxLQUFLLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUFYO0FBT0EsSUFBTU8sU0FBUyxHQUFHUCxvRUFBSDtBQUFBO0FBQUE7QUFBQSx3REFBZjtBQU1BLElBQU1RLFVBQVUsR0FBR1IsbUVBQUg7QUFBQTtBQUFBO0FBQUEsMkVBQWhCO0FBU0EsSUFBTVMsYUFBYSxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxrSkFBbkI7QUFXQSxJQUFNVSxRQUFRLEdBQUdWLDBEQUFNLENBQUNXLHFEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsdUNBQWQ7QUFNQSxJQUFNQyx1QkFBdUIsR0FBR1osMERBQU0sQ0FBQ1csc0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwSEFBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uYzg3NWM3NTM3ZDYzYzMzN2FkODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMXJlbSAxMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtHcm91cCA9IHN0eWxlZC5oM2BcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1pbi13aWR0aDogMjB2dztcclxuICBtYXgtd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtTcGFuID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyQmFja2dyb3VuZCA9IHN0eWxlZChtb3Rpb24uc3BhbilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggLThweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=