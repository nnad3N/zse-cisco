self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./utils/useLoading.js":
/*!*****************************!*\
  !*** ./utils/useLoading.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();




var useLoading = function useLoading(router) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  console.log(isLoading);

  var handleStart = function handleStart() {
    setIsLoading(true);
    nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
  };

  var handleStop = function handleStop() {
    setIsLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
  };

  router.events.on('routeChangeStart', handleStart);
  router.events.on('routeChangeComplete', handleStop);
  router.events.on('routeChangeError', handleStop);
  return function () {
    router.events.off('routeChangeStart', handleStart);
    router.events.off('routeChangeComplete', handleStop);
    router.events.off('routeChangeError', handleStop);
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJ1c2VMb2FkaW5nIiwicm91dGVyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3RhcnQiLCJOUHJvZ3Jlc3MiLCJoYW5kbGVTdG9wIiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXOztBQUU3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7O0FBRUEsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkgsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQUksMERBQUE7QUFDRCxHQUhEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJMLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FJLHlEQUFBO0FBQ0QsR0FIRDs7QUFLQVAsUUFBTSxDQUFDUyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDSixXQUFyQztBQUNBTixRQUFNLENBQUNTLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NGLFVBQXhDO0FBQ0FSLFFBQU0sQ0FBQ1MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0YsVUFBckM7QUFFQSxTQUFPLFlBQU07QUFDWFIsVUFBTSxDQUFDUyxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDTCxXQUF0QztBQUNBTixVQUFNLENBQUNTLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNILFVBQXpDO0FBQ0FSLFVBQU0sQ0FBQ1MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0gsVUFBdEM7QUFDRCxHQUpEO0FBTUEsU0FBT04sU0FBUDtBQUNELENBeEJEOztHQUFNSCxVOztBQTBCTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS44YTg4OGNiOWYzMzk5NGFiMGYwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuY29uc3QgdXNlTG9hZGluZyA9IChyb3V0ZXIpID0+IHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnNvbGUubG9nKGlzTG9hZGluZyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgfTtcclxuXHJcbiAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG5cclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gaXNMb2FkaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTG9hZGluZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==