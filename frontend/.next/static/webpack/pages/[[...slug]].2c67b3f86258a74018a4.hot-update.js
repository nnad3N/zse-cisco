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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  console.log(isLoading);

  if (router) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
    }, [router]);
  }

  return isLoading;
};

_s(useLoading, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJ1c2VMb2FkaW5nIiwicm91dGVyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhcnQiLCJOUHJvZ3Jlc3MiLCJoYW5kbGVTdG9wIiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxJQUFELENBRGI7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXOztBQUU3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7O0FBRUEsTUFBSUYsTUFBSixFQUFZO0FBQ1ZNLG9EQUFTLENBQUMsWUFBTTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJKLG9CQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FLLDhEQUFBO0FBQ0QsT0FIRDs7QUFJQSxVQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCTixvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBSyw2REFBQTtBQUNELE9BSEQ7O0FBS0FSLFlBQU0sQ0FBQ1UsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0osV0FBckM7QUFDQVAsWUFBTSxDQUFDVSxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDRixVQUF4QztBQUNBVCxZQUFNLENBQUNVLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNGLFVBQXJDO0FBRUEsYUFBTyxZQUFNO0FBQ1hULGNBQU0sQ0FBQ1UsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0wsV0FBdEM7QUFDQVAsY0FBTSxDQUFDVSxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDSCxVQUF6QztBQUNBVCxjQUFNLENBQUNVLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NILFVBQXRDO0FBQ0QsT0FKRDtBQUtELEtBbkJRLEVBbUJOLENBQUNULE1BQUQsQ0FuQk0sQ0FBVDtBQW9CRDs7QUFFRCxTQUFPRSxTQUFQO0FBQ0QsQ0E1QkQ7O0dBQU1ILFU7O0FBOEJOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjJjNjdiM2Y4NjI1OGE3NDAxOGE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcblxyXG5jb25zdCB1c2VMb2FkaW5nID0gKHJvdXRlcikgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zb2xlLmxvZyhpc0xvYWRpbmcpO1xyXG5cclxuICBpZiAocm91dGVyKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpc0xvYWRpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMb2FkaW5nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9