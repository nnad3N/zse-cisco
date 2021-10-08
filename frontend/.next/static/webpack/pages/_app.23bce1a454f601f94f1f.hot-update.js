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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJ1c2VMb2FkaW5nIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ01DLCtDQUFRLENBQUMsS0FBRCxDQURkO0FBQUEsTUFDckJDLFNBRHFCO0FBQUEsTUFDVkMsWUFEVSxpQkFHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFPRCxTQUFQO0FBQ0QsQ0F6QkQ7O0dBQU1ILFU7O0FBMkJOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjNiY2UxYTQ1NGY2MDFmOTRmMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VMb2FkaW5nID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcclxuICAvLyAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgLy8gICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XHJcbiAgLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAvLyAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIC8vICAgICB9O1xyXG5cclxuICAvLyAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAvLyAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gIC8vICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcblxyXG4gIC8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gIC8vICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgLy8gICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuICAvLyAgICAgfTtcclxuICAvLyAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIGlzTG9hZGluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvYWRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=