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
/* harmony import */ var types_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! types/shapes */ "./types/shapes.js");
/* harmony import */ var _organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @organisms/NavBar/NavBar */ "./components/organisms/NavBar/NavBar.js");
/* harmony import */ var _organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @organisms/Navigation/Navigation */ "./components/organisms/Navigation/Navigation.js");
/* harmony import */ var _organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @organisms/Footer/Footer */ "./components/organisms/Footer/Footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();







var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      navigation = _ref.navigation,
      footer = _ref.footer;
  var logo = navigation.logo,
      menuImage = navigation.menuImage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isNavOpen = _useState[0],
      setIsNavOpen = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isNavOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
      navigation: navigation,
      setIsNavOpen: setIsNavOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {
        logo: logo,
        menuImage: menuImage,
        setIsNavOpen: setIsNavOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {
        footer: footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this)]
    }, void 0, true)
  }, void 0, false);
};

_s(Layout, "MNgkhjFJ3DQLGhlcYzaIsl5YrwQ=");

_c = Layout;
Layout.propTypes = {
  children: types_shapes__WEBPACK_IMPORTED_MODULE_1__.childrenShape,
  navigation: types_shapes__WEBPACK_IMPORTED_MODULE_1__.childrenShape
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibmF2aWdhdGlvbiIsImZvb3RlciIsImxvZ28iLCJtZW51SW1hZ2UiLCJ1c2VTdGF0ZSIsImlzTmF2T3BlbiIsInNldElzTmF2T3BlbiIsInByb3BUeXBlcyIsImNoaWxkcmVuU2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFzQztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQUEsTUFDM0NDLElBRDJDLEdBQ3ZCRixVQUR1QixDQUMzQ0UsSUFEMkM7QUFBQSxNQUNyQ0MsU0FEcUMsR0FDdkJILFVBRHVCLENBQ3JDRyxTQURxQzs7QUFBQSxrQkFFakJDLCtDQUFRLENBQUMsS0FBRCxDQUZTO0FBQUEsTUFFNUNDLFNBRjRDO0FBQUEsTUFFakNDLFlBRmlDOztBQUluRCxzQkFDRTtBQUFBLGNBQ0dELFNBQVMsZ0JBQ1IsOERBQUMscUVBQUQ7QUFBWSxnQkFBVSxFQUFFTCxVQUF4QjtBQUFvQyxrQkFBWSxFQUFFTTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsZ0JBR1I7QUFBQSw4QkFDRSw4REFBQyw2REFBRDtBQUFRLFlBQUksRUFBRUosSUFBZDtBQUFvQixpQkFBUyxFQUFFQyxTQUEvQjtBQUEwQyxvQkFBWSxFQUFFRztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1AsUUFGSCxlQUdFLDhEQUFDLDZEQUFEO0FBQVEsY0FBTSxFQUFFRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUpKLG1CQURGO0FBYUQsQ0FqQkQ7O0dBQU1ILE07O0tBQUFBLE07QUFtQk5BLE1BQU0sQ0FBQ1MsU0FBUCxHQUFtQjtBQUNqQlIsVUFBUSxFQUFFUyx1REFETztBQUVqQlIsWUFBVSxFQUFFUSx1REFBYUE7QUFGUixDQUFuQjtBQUtBLCtEQUFlVixNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjk3NGU3ZWQ0M2IxNWVmZDY2MWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGlsZHJlblNoYXBlIH0gZnJvbSAndHlwZXMvc2hhcGVzJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICdAb3JnYW5pc21zL05hdkJhci9OYXZCYXInO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdAb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQG9yZ2FuaXNtcy9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgbmF2aWdhdGlvbiwgZm9vdGVyIH0pID0+IHtcclxuICBjb25zdCB7IGxvZ28sIG1lbnVJbWFnZSB9ID0gbmF2aWdhdGlvbjtcclxuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2lzTmF2T3BlbiA/IChcclxuICAgICAgICA8TmF2aWdhdGlvbiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE5hdkJhciBsb2dvPXtsb2dvfSBtZW51SW1hZ2U9e21lbnVJbWFnZX0gc2V0SXNOYXZPcGVuPXtzZXRJc05hdk9wZW59IC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8Rm9vdGVyIGZvb3Rlcj17Zm9vdGVyfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IGNoaWxkcmVuU2hhcGUsXHJcbiAgbmF2aWdhdGlvbjogY2hpbGRyZW5TaGFwZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==