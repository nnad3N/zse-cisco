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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var providers_LoadingProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/LoadingProvider */ "./providers/LoadingProvider.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _NavBar_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar.styles */ "./components/organisms/NavBar/NavBar.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\NavBar\\NavBar.js",
    _this = undefined,
    _s = $RefreshSig$();







var Loader = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "NavBar__Loader",
  componentId: "sc-gkppti-0"
})(["height:100px;width:100px;background-color:red;position:absolute;"]);
_c = Loader;

var NavBar = function NavBar(_ref) {
  _s();

  var logo = _ref.logo,
      menuImage = _ref.menuImage,
      setIsNavOpen = _ref.setIsNavOpen;
  var isLoading = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(providers_LoadingProvider__WEBPACK_IMPORTED_MODULE_3__.LoadingContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Header, {
    isLoading: isLoading,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {
      id: "navbar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: logo,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "MGvbNXR2CzrxO/iq9BvCB9bv4n0=");

_c2 = NavBar;
NavBar.propTypes = {
  logo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  menuImage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c, _c2;

$RefreshReg$(_c, "Loader");
$RefreshReg$(_c2, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJzdHlsZWQiLCJOYXZCYXIiLCJsb2dvIiwibWVudUltYWdlIiwic2V0SXNOYXZPcGVuIiwiaXNMb2FkaW5nIiwidXNlQ29udGV4dCIsIkxvYWRpbmdDb250ZXh0Iiwic3RhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdFQUFaO0tBQU1ELE07O0FBT04sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ0MsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDcEQsTUFBTUMsU0FBUyxHQUFHQyxpREFBVSxDQUFDQyxxRUFBRCxDQUE1QjtBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQVEsYUFBUyxFQUFFRixTQUFuQjtBQUFBLDRCQUNFLDhEQUFDLE1BQUQ7QUFBUSxRQUFFLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxnREFBRDtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQU8sYUFBSyxFQUFFSCxJQUFkO0FBQW9CLGdCQUFRO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFLRSw4REFBQyxxREFBRDtBQUFXLGFBQU8sRUFBRTtBQUFBLGVBQU1FLFlBQVksQ0FBQyxVQUFDSSxLQUFEO0FBQUEsaUJBQVcsQ0FBQ0EsS0FBWjtBQUFBLFNBQUQsQ0FBbEI7QUFBQSxPQUFwQjtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQU8sYUFBSyxFQUFFTCxTQUFkO0FBQXlCLGdCQUFRO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWREOztHQUFNRixNOztNQUFBQSxNO0FBZ0JOQSxNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakJQLE1BQUksRUFBRVEsMERBRFc7QUFFakJQLFdBQVMsRUFBRU8sMERBRk07QUFHakJOLGNBQVksRUFBRU0sd0RBQWNDO0FBSFgsQ0FBbkI7QUFNQSwrREFBZVYsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4yYmIyMDY2ZTRhMjQyOGFkODQ4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExvYWRpbmdDb250ZXh0IH0gZnJvbSAncHJvdmlkZXJzL0xvYWRpbmdQcm92aWRlcic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZWFkZXIsIExvZ28sIE1lbnVJbWFnZSB9IGZyb20gJy4vTmF2QmFyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBsb2dvLCBtZW51SW1hZ2UsIHNldElzTmF2T3BlbiB9KSA9PiB7XHJcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlQ29udGV4dChMb2FkaW5nQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIGlzTG9hZGluZz17aXNMb2FkaW5nfT5cclxuICAgICAgPExvYWRlciBpZD1cIm5hdmJhclwiIC8+XHJcbiAgICAgIDxMb2dvPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gcHJpb3JpdHkgLz5cclxuICAgICAgPC9Mb2dvPlxyXG4gICAgICA8TWVudUltYWdlIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bWVudUltYWdlfSBwcmlvcml0eSAvPlxyXG4gICAgICA8L01lbnVJbWFnZT5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGxvZ286IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbWVudUltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=