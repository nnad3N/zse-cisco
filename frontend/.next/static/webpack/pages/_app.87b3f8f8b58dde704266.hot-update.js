self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./providers/LoadingProvider.js":
/*!**************************************!*\
  !*** ./providers/LoadingProvider.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingContext": function() { return /* binding */ LoadingContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\providers\\LoadingProvider.js",
    _this = undefined,
    _s = $RefreshSig$();

// import { LoadingContext } from 'pages/_app'


var LoadingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);

var LoadingProvider = function LoadingProvider(_ref) {
  _s();

  var children = _ref.children,
      router = _ref.router;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  if (router) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      var handleStart = function handleStart() {
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({
          parent: '#loader'
        });
        setIsLoading(true);
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
      };

      var handleStop = function handleStop() {
        setIsLoading(false);
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingContext.Provider, {
    value: isLoading,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 10
  }, _this);
};

_s(LoadingProvider, "DlrQjwOD5XS1kcZJvMHoaf7KaZ8=");

_c = LoadingProvider;
/* harmony default export */ __webpack_exports__["default"] = (LoadingProvider);

var _c;

$RefreshReg$(_c, "LoadingProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvdmlkZXJzL0xvYWRpbmdQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJMb2FkaW5nQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2FkaW5nUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhcnQiLCJOUHJvZ3Jlc3MiLCJwYXJlbnQiLCJoYW5kbGVTdG9wIiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxnQkFBR0Msb0RBQWEsQ0FBQyxLQUFELENBQXBDOztBQUVQLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNkQywrQ0FBUSxDQUFDLEtBQUQsQ0FETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFHaEQsTUFBSUgsTUFBSixFQUFZO0FBQ1ZJLG9EQUFTLENBQUMsWUFBTTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLGtFQUFBLENBQW9CO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFwQjtBQUNBSixvQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRyw4REFBQTtBQUNELE9BSkQ7O0FBS0EsVUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qkwsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUcsNkRBQUE7QUFDRCxPQUhEOztBQUtBTixZQUFNLENBQUNTLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNMLFdBQXJDO0FBQ0FMLFlBQU0sQ0FBQ1MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0YsVUFBeEM7QUFDQVIsWUFBTSxDQUFDUyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDRixVQUFyQztBQUVBLGFBQU8sWUFBTTtBQUNYUixjQUFNLENBQUNTLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NOLFdBQXRDO0FBQ0FMLGNBQU0sQ0FBQ1MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q0gsVUFBekM7QUFDQVIsY0FBTSxDQUFDUyxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDSCxVQUF0QztBQUNELE9BSkQ7QUFLRCxLQXBCUSxFQW9CTixDQUFDUixNQUFELENBcEJNLENBQVQ7QUFxQkQ7O0FBRUQsc0JBQU8sOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUVFLFNBQWhDO0FBQUEsY0FBNENIO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBNUJEOztHQUFNRCxlOztLQUFBQSxlO0FBOEJOLCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODdiM2Y4ZjhiNThkZGU3MDQyNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IExvYWRpbmdDb250ZXh0IH0gZnJvbSAncGFnZXMvX2FwcCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSk7XHJcblxyXG5jb25zdCBMb2FkaW5nUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBpZiAocm91dGVyKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgcGFyZW50OiAnI2xvYWRlcicgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVTdG9wKTtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPExvYWRpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpc0xvYWRpbmd9PntjaGlsZHJlbn08L0xvYWRpbmdDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==