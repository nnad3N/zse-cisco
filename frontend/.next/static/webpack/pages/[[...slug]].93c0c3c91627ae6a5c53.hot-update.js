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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @organisms/NavBar/NavBar */ "./components/organisms/NavBar/NavBar.js");
/* harmony import */ var _organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @organisms/Navigation/Navigation */ "./components/organisms/Navigation/Navigation.js");
/* harmony import */ var _organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @organisms/Footer/Footer */ "./components/organisms/Footer/Footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      isNavOpen = _useState[0],
      setIsNavOpen = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isNavOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__.default, {
      navigation: navigation,
      setIsNavOpen: setIsNavOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        logo: logo,
        menuImage: menuImage,
        setIsNavOpen: setIsNavOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {
        footer: footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJuYXZpZ2F0aW9uIiwiZm9vdGVyIiwibG9nbyIsIm1lbnVJbWFnZSIsInVzZVN0YXRlIiwiaXNOYXZPcGVuIiwic2V0SXNOYXZPcGVuIiwicHJvcFR5cGVzIiwiY29tcG9uZW50U2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBc0M7QUFBQTs7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUFBLE1BQzNDQyxJQUQyQyxHQUN2QkYsVUFEdUIsQ0FDM0NFLElBRDJDO0FBQUEsTUFDckNDLFNBRHFDLEdBQ3ZCSCxVQUR1QixDQUNyQ0csU0FEcUM7O0FBQUEsa0JBRWpCQywrQ0FBUSxDQUFDLEtBQUQsQ0FGUztBQUFBLE1BRTVDQyxTQUY0QztBQUFBLE1BRWpDQyxZQUZpQzs7QUFJbkQsc0JBQ0U7QUFBQSxjQUNHRCxTQUFTLGdCQUNSLDhEQUFDLHFFQUFEO0FBQVksZ0JBQVUsRUFBRUwsVUFBeEI7QUFBb0Msa0JBQVksRUFBRU07QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLGdCQUdSO0FBQUEsOEJBQ0UsOERBQUMsNkRBQUQ7QUFBUSxZQUFJLEVBQUVKLElBQWQ7QUFBb0IsaUJBQVMsRUFBRUMsU0FBL0I7QUFBMEMsb0JBQVksRUFBRUc7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdQLFFBRkgsZUFHRSw4REFBQyw2REFBRDtBQUFRLGNBQU0sRUFBRUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFKSixtQkFERjtBQWFELENBakJEOztHQUFNSCxNOztLQUFBQSxNO0FBbUJOQSxNQUFNLENBQUNTLFNBQVAsR0FBbUI7QUFDakJSLFVBQVEsRUFBRVMsd0RBRE87QUFFakJSLFlBQVUsRUFBRVEsd0RBQWNBO0FBRlQsQ0FBbkI7QUFLQSwrREFBZVYsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSw2R0FBZ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uOTNjMGMzYzkxNjI3YWU2YTVjNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvbmVudFNoYXBlIH0gZnJvbSAndXRpbHMvc2hhcGVzJztcclxuaW1wb3J0IHVzZVJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnQG9yZ2FuaXNtcy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQG9yZ2FuaXNtcy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0BvcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIG5hdmlnYXRpb24sIGZvb3RlciB9KSA9PiB7XHJcbiAgY29uc3QgeyBsb2dvLCBtZW51SW1hZ2UgfSA9IG5hdmlnYXRpb247XHJcbiAgY29uc3QgW2lzTmF2T3Blbiwgc2V0SXNOYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpc05hdk9wZW4gPyAoXHJcbiAgICAgICAgPE5hdmlnYXRpb24gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gc2V0SXNOYXZPcGVuPXtzZXRJc05hdk9wZW59IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZCYXIgbG9nbz17bG9nb30gbWVudUltYWdlPXttZW51SW1hZ2V9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEZvb3RlciBmb290ZXI9e2Zvb3Rlcn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjb21wb25lbnRTaGFwZSxcclxuICBuYXZpZ2F0aW9uOiBjb21wb25lbnRTaGFwZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3JvdXRlcicpXG4iXSwic291cmNlUm9vdCI6IiJ9