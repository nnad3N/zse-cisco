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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibmF2aWdhdGlvbiIsImZvb3RlciIsImxvZ28iLCJtZW51SW1hZ2UiLCJ1c2VTdGF0ZSIsImlzTmF2T3BlbiIsInNldElzTmF2T3BlbiIsInByb3BUeXBlcyIsImNvbXBvbmVudFNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBc0M7QUFBQTs7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUFBLE1BQzNDQyxJQUQyQyxHQUN2QkYsVUFEdUIsQ0FDM0NFLElBRDJDO0FBQUEsTUFDckNDLFNBRHFDLEdBQ3ZCSCxVQUR1QixDQUNyQ0csU0FEcUM7O0FBQUEsa0JBRWpCQywrQ0FBUSxDQUFDLEtBQUQsQ0FGUztBQUFBLE1BRTVDQyxTQUY0QztBQUFBLE1BRWpDQyxZQUZpQzs7QUFJbkQsc0JBQ0U7QUFBQSxjQUNHRCxTQUFTLGdCQUNSLDhEQUFDLHFFQUFEO0FBQVksZ0JBQVUsRUFBRUwsVUFBeEI7QUFBb0Msa0JBQVksRUFBRU07QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLGdCQUdSO0FBQUEsOEJBQ0UsOERBQUMsNkRBQUQ7QUFBUSxZQUFJLEVBQUVKLElBQWQ7QUFBb0IsaUJBQVMsRUFBRUMsU0FBL0I7QUFBMEMsb0JBQVksRUFBRUc7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdQLFFBRkgsZUFHRSw4REFBQyw2REFBRDtBQUFRLGNBQU0sRUFBRUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFKSixtQkFERjtBQWFELENBakJEOztHQUFNSCxNOztLQUFBQSxNO0FBbUJOQSxNQUFNLENBQUNTLFNBQVAsR0FBbUI7QUFDakJSLFVBQVEsRUFBRVMsd0RBRE87QUFFakJSLFlBQVUsRUFBRVEsd0RBQWNBO0FBRlQsQ0FBbkI7QUFLQSwrREFBZVYsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS44YmU3ZDA0OGI1OWJmNjVkYzhlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9uZW50U2hhcGUgfSBmcm9tICd1dGlscy9zaGFwZXMnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJ0BvcmdhbmlzbXMvTmF2QmFyL05hdkJhcic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0BvcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAb3JnYW5pc21zL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBuYXZpZ2F0aW9uLCBmb290ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbG9nbywgbWVudUltYWdlIH0gPSBuYXZpZ2F0aW9uO1xyXG4gIGNvbnN0IFtpc05hdk9wZW4sIHNldElzTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNOYXZPcGVuID8gKFxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIG5hdmlnYXRpb249e25hdmlnYXRpb259IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TmF2QmFyIGxvZ289e2xvZ299IG1lbnVJbWFnZT17bWVudUltYWdlfSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDxGb290ZXIgZm9vdGVyPXtmb290ZXJ9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogY29tcG9uZW50U2hhcGUsXHJcbiAgbmF2aWdhdGlvbjogY29tcG9uZW50U2hhcGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=