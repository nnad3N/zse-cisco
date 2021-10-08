self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/templates/Layout.js":
/*!****************************************!*\
  !*** ./components/templates/Layout.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/shapes */ "./utils/shapes.js");
/* harmony import */ var _organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @organisms/NavBar/NavBar */ "./components/organisms/NavBar/NavBar.js");
/* harmony import */ var _organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @organisms/Navigation/Navigation */ "./components/organisms/Navigation/Navigation.js");
/* harmony import */ var _organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @organisms/Footer/Footer */ "./components/organisms/Footer/Footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();







var Layout = function Layout(props) {
  _s();

  var children = props.children,
      navigation = props.navigation,
      footer = props.footer;
  var logo = navigation.logo,
      menuImage = navigation.menuImage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isNavOpen = _useState[0],
      setIsNavOpen = _useState[1];

  console.log(props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isNavOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
      navigation: navigation,
      setIsNavOpen: setIsNavOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {
        logo: logo,
        menuImage: menuImage,
        setIsNavOpen: setIsNavOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {
        footer: footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, _this)]
    }, void 0, true)
  }, void 0, false);
};

_s(Layout, "MNgkhjFJ3DQLGhlcYzaIsl5YrwQ=");

_c = Layout;
Layout.propTypes = {
  children: utils_shapes__WEBPACK_IMPORTED_MODULE_1__.componentShape,
  navigation: utils_shapes__WEBPACK_IMPORTED_MODULE_1__.componentShape
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJuYXZpZ2F0aW9uIiwiZm9vdGVyIiwibG9nbyIsIm1lbnVJbWFnZSIsInVzZVN0YXRlIiwiaXNOYXZPcGVuIiwic2V0SXNOYXZPcGVuIiwiY29uc29sZSIsImxvZyIsInByb3BUeXBlcyIsImNvbXBvbmVudFNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDaEJDLFFBRGdCLEdBQ2lCRCxLQURqQixDQUNoQkMsUUFEZ0I7QUFBQSxNQUNOQyxVQURNLEdBQ2lCRixLQURqQixDQUNORSxVQURNO0FBQUEsTUFDTUMsTUFETixHQUNpQkgsS0FEakIsQ0FDTUcsTUFETjtBQUFBLE1BRWhCQyxJQUZnQixHQUVJRixVQUZKLENBRWhCRSxJQUZnQjtBQUFBLE1BRVZDLFNBRlUsR0FFSUgsVUFGSixDQUVWRyxTQUZVOztBQUFBLGtCQUdVQywrQ0FBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdqQkMsU0FIaUI7QUFBQSxNQUdOQyxZQUhNOztBQUt4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFFQSxzQkFDRTtBQUFBLGNBQ0dPLFNBQVMsZ0JBQ1IsOERBQUMscUVBQUQ7QUFBWSxnQkFBVSxFQUFFTCxVQUF4QjtBQUFvQyxrQkFBWSxFQUFFTTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsZ0JBR1I7QUFBQSw4QkFDRSw4REFBQyw2REFBRDtBQUFRLFlBQUksRUFBRUosSUFBZDtBQUFvQixpQkFBUyxFQUFFQyxTQUEvQjtBQUEwQyxvQkFBWSxFQUFFRztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1AsUUFGSCxlQUdFLDhEQUFDLDZEQUFEO0FBQVEsY0FBTSxFQUFFRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUpKLG1CQURGO0FBYUQsQ0FwQkQ7O0dBQU1KLE07O0tBQUFBLE07QUFzQk5BLE1BQU0sQ0FBQ1ksU0FBUCxHQUFtQjtBQUNqQlYsVUFBUSxFQUFFVyx3REFETztBQUVqQlYsWUFBVSxFQUFFVSx3REFBY0E7QUFGVCxDQUFuQjtBQUtBLCtEQUFlYixNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjAyMDViMjNhZmZiOGY3MjNmN2E0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb25lbnRTaGFwZSB9IGZyb20gJ3V0aWxzL3NoYXBlcyc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnQG9yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQG9yZ2FuaXNtcy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0BvcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgbmF2aWdhdGlvbiwgZm9vdGVyIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGxvZ28sIG1lbnVJbWFnZSB9ID0gbmF2aWdhdGlvbjtcclxuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNOYXZPcGVuID8gKFxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIG5hdmlnYXRpb249e25hdmlnYXRpb259IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TmF2QmFyIGxvZ289e2xvZ299IG1lbnVJbWFnZT17bWVudUltYWdlfSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDxGb290ZXIgZm9vdGVyPXtmb290ZXJ9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY29tcG9uZW50U2hhcGUsXHJcbiAgbmF2aWdhdGlvbjogY29tcG9uZW50U2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=