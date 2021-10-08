self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/organisms/NavBar/NavBar.js":
/*!***********************************************!*\
  !*** ./components/organisms/NavBar/NavBar.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_useLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/useLoading */ "./utils/useLoading.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _NavBar_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar.styles */ "./components/organisms/NavBar/NavBar.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\NavBar\\NavBar.js",
    _this = undefined;







var NavBar = function NavBar(_ref) {
  var logo = _ref.logo,
      menuImage = _ref.menuImage,
      setIsNavOpen = _ref.setIsNavOpen;
  // const isLoading = useLoading();
  // console.log(isLoading);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Header, {
    id: "navbar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: logo,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.MenuImage, {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: menuImage,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = NavBar;
NavBar.propTypes = {
  logo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  menuImage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJsb2dvIiwibWVudUltYWdlIiwic2V0SXNOYXZPcGVuIiwic3RhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF1QztBQUFBLE1BQXBDQyxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUNwRDtBQUNBO0FBRUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBUSxNQUFFLEVBQUMsUUFBWDtBQUFBLDRCQUNFLDhEQUFDLGdEQUFEO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBTyxhQUFLLEVBQUVGLElBQWQ7QUFBb0IsZ0JBQVE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLHFEQUFEO0FBQVcsYUFBTyxFQUFFO0FBQUEsZUFBTUUsWUFBWSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxpQkFBVyxDQUFDQSxLQUFaO0FBQUEsU0FBRCxDQUFsQjtBQUFBLE9BQXBCO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBTyxhQUFLLEVBQUVGLFNBQWQ7QUFBeUIsZ0JBQVE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBZEQ7O0tBQU1GLE07QUFnQk5BLE1BQU0sQ0FBQ0ssU0FBUCxHQUFtQjtBQUNqQkosTUFBSSxFQUFFSywwREFEVztBQUVqQkosV0FBUyxFQUFFSSwwREFGTTtBQUdqQkgsY0FBWSxFQUFFRyx3REFBY0M7QUFIWCxDQUFuQjtBQU1BLCtEQUFlUCxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmUyMmIzYzIxOGZmMTI1Yjk0YzA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdXNlTG9hZGluZyBmcm9tICd1dGlscy91c2VMb2FkaW5nJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCB7IEhlYWRlciwgTG9nbywgTWVudUltYWdlIH0gZnJvbSAnLi9OYXZCYXIuc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICh7IGxvZ28sIG1lbnVJbWFnZSwgc2V0SXNOYXZPcGVuIH0pID0+IHtcclxuICAvLyBjb25zdCBpc0xvYWRpbmcgPSB1c2VMb2FkaW5nKCk7XHJcbiAgLy8gY29uc29sZS5sb2coaXNMb2FkaW5nKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXIgaWQ9XCJuYXZiYXJcIj5cclxuICAgICAgPExvZ28+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXtsb2dvfSBwcmlvcml0eSAvPlxyXG4gICAgICA8L0xvZ28+XHJcbiAgICAgIDxNZW51SW1hZ2Ugb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKChzdGF0ZSkgPT4gIXN0YXRlKX0+XHJcbiAgICAgICAgPEltYWdlIGltYWdlPXttZW51SW1hZ2V9IHByaW9yaXR5IC8+XHJcbiAgICAgIDwvTWVudUltYWdlPlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbG9nbzogUHJvcFR5cGVzLm9iamVjdCxcclxuICBtZW51SW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2V0SXNOYXZPcGVuOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==