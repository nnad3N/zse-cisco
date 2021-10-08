self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/useLoading.js":
/*!*****************************!*\
  !*** ./utils/useLoading.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



var useLoading = function useLoading(props) {
  _s();

  console.log(props);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1]; //   useEffect(() => {
  //     const handleStart = () => {
  //       setIsLoading(true);
  //       NProgress.start();
  //     };
  //     const handleStop = () => {
  //       setIsLoading(false);
  //       NProgress.done();
  //     };
  //     router.events.on('routeChangeStart', handleStart);
  //     router.events.on('routeChangeComplete', handleStop);
  //     router.events.on('routeChangeError', handleStop);
  //     return () => {
  //       router.events.off('routeChangeStart', handleStart);
  //       router.events.off('routeChangeComplete', handleStop);
  //       router.events.off('routeChangeError', handleStop);
  //     };
  //   }, [router]);


  return isLoading;
};

_s(useLoading, "EmvgwIb3cHpoFpeP+WmEDbjx4y4=");

/* harmony default export */ __webpack_exports__["default"] = (useLoading);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJ1c2VMb2FkaW5nIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRDRCLGtCQUVNRywrQ0FBUSxDQUFDLEtBQUQsQ0FGZDtBQUFBLE1BRXJCQyxTQUZxQjtBQUFBLE1BRVZDLFlBRlUsaUJBSTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBT0QsU0FBUDtBQUNELENBMUJEOztHQUFNTCxVOztBQTRCTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjViMDMyODdhZTYyZDQwYjgxOGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlTG9hZGluZyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIC8vICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAvLyAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAvLyAgICAgfTtcclxuICAvLyAgICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcclxuICAvLyAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIC8vICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgLy8gICAgIH07XHJcblxyXG4gIC8vICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gIC8vICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgLy8gICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuXHJcbiAgLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgLy8gICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAvLyAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gaXNMb2FkaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTG9hZGluZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==