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



var useLoading = function useLoading(router) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleStart = function handleStart() {
      setIsLoading(true);
      NProgress.start();
    };

    var handleStop = function handleStop() {
      setIsLoading(false);
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return function () {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return isLoading;
};

_s(useLoading, "DlrQjwOD5XS1kcZJvMHoaf7KaZ8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJ1c2VMb2FkaW5nIiwicm91dGVyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdGFydCIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiaGFuZGxlU3RvcCIsImRvbmUiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQUE7O0FBQUEsa0JBQ0tDLCtDQUFRLENBQUMsS0FBRCxDQURiO0FBQUEsTUFDdEJDLFNBRHNCO0FBQUEsTUFDWEMsWUFEVzs7QUFHN0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FHLGVBQVMsQ0FBQ0MsS0FBVjtBQUNELEtBSEQ7O0FBSUEsUUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qkwsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUcsZUFBUyxDQUFDRyxJQUFWO0FBQ0QsS0FIRDs7QUFLQVQsVUFBTSxDQUFDVSxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDTixXQUFyQztBQUNBTCxVQUFNLENBQUNVLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NILFVBQXhDO0FBQ0FSLFVBQU0sQ0FBQ1UsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0gsVUFBckM7QUFFQSxXQUFPLFlBQU07QUFDWFIsWUFBTSxDQUFDVSxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDUCxXQUF0QztBQUNBTCxZQUFNLENBQUNVLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNKLFVBQXpDO0FBQ0FSLFlBQU0sQ0FBQ1UsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0osVUFBdEM7QUFDRCxLQUpEO0FBS0QsR0FuQlEsRUFtQk4sQ0FBQ1IsTUFBRCxDQW5CTSxDQUFUO0FBcUJBLFNBQU9FLFNBQVA7QUFDRCxDQXpCRDs7R0FBTUgsVTs7QUEyQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNzA0MGI4NzQ4NTY3NDY4M2I3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUxvYWRpbmcgPSAocm91dGVyKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcbiAgICB9O1xyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIGlzTG9hZGluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvYWRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=