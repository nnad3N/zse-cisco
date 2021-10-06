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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\templates\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();






var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      navigation = _ref.navigation;
  var navLinks = navigation.navLinks,
      logo = navigation.logo,
      menuImage = navigation.menuImage,
      exitButton = navigation.exitButton,
      navListIcon = navigation.navListIcon;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isNavOpen = _useState[0],
      setIsNavOpen = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isNavOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
      navLinks: navLinks,
      exitButton: exitButton,
      setIsNavOpen: setIsNavOpen,
      navListIcon: navListIcon
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
      }, _this), children]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibmF2aWdhdGlvbiIsIm5hdkxpbmtzIiwibG9nbyIsIm1lbnVJbWFnZSIsImV4aXRCdXR0b24iLCJuYXZMaXN0SWNvbiIsInVzZVN0YXRlIiwiaXNOYXZPcGVuIiwic2V0SXNOYXZPcGVuIiwicHJvcFR5cGVzIiwiY29tcG9uZW50U2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxRQUEyQixRQUEzQkEsUUFBMkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQUEsTUFDbkNDLFFBRG1DLEdBQ29CRCxVQURwQixDQUNuQ0MsUUFEbUM7QUFBQSxNQUN6QkMsSUFEeUIsR0FDb0JGLFVBRHBCLENBQ3pCRSxJQUR5QjtBQUFBLE1BQ25CQyxTQURtQixHQUNvQkgsVUFEcEIsQ0FDbkJHLFNBRG1CO0FBQUEsTUFDUkMsVUFEUSxHQUNvQkosVUFEcEIsQ0FDUkksVUFEUTtBQUFBLE1BQ0lDLFdBREosR0FDb0JMLFVBRHBCLENBQ0lLLFdBREo7O0FBQUEsa0JBR1RDLCtDQUFRLENBQUMsS0FBRCxDQUhDO0FBQUEsTUFHcENDLFNBSG9DO0FBQUEsTUFHekJDLFlBSHlCOztBQUszQyxzQkFDRTtBQUFBLGNBQ0dELFNBQVMsZ0JBQ1IsOERBQUMscUVBQUQ7QUFBWSxjQUFRLEVBQUVOLFFBQXRCO0FBQWdDLGdCQUFVLEVBQUVHLFVBQTVDO0FBQXdELGtCQUFZLEVBQUVJLFlBQXRFO0FBQW9GLGlCQUFXLEVBQUVIO0FBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxnQkFHUjtBQUFBLDhCQUNFLDhEQUFDLDZEQUFEO0FBQVEsWUFBSSxFQUFFSCxJQUFkO0FBQW9CLGlCQUFTLEVBQUVDLFNBQS9CO0FBQTBDLG9CQUFZLEVBQUVLO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHVCxRQUZIO0FBQUE7QUFKSixtQkFERjtBQVlELENBakJEOztHQUFNRCxNOztLQUFBQSxNO0FBbUJOQSxNQUFNLENBQUNXLFNBQVAsR0FBbUI7QUFDakJWLFVBQVEsRUFBRVcsd0RBRE87QUFFakJWLFlBQVUsRUFBRVUsd0RBQWNBO0FBRlQsQ0FBbkI7QUFLQSwrREFBZVosTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4yNTFjOWY3NWZjNzJmYTNlNDM1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9uZW50U2hhcGUgfSBmcm9tICd1dGlscy9zaGFwZXMnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJ0BvcmdhbmlzbXMvTmF2QmFyL05hdkJhcic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0BvcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgbmF2aWdhdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBuYXZMaW5rcywgbG9nbywgbWVudUltYWdlLCBleGl0QnV0dG9uLCBuYXZMaXN0SWNvbiB9ID0gbmF2aWdhdGlvbjtcclxuXHJcbiAgY29uc3QgW2lzTmF2T3Blbiwgc2V0SXNOYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpc05hdk9wZW4gPyAoXHJcbiAgICAgICAgPE5hdmlnYXRpb24gbmF2TGlua3M9e25hdkxpbmtzfSBleGl0QnV0dG9uPXtleGl0QnV0dG9ufSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gbmF2TGlzdEljb249e25hdkxpc3RJY29ufSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TmF2QmFyIGxvZ289e2xvZ299IG1lbnVJbWFnZT17bWVudUltYWdlfSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBjb21wb25lbnRTaGFwZSxcclxuICBuYXZpZ2F0aW9uOiBjb21wb25lbnRTaGFwZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==