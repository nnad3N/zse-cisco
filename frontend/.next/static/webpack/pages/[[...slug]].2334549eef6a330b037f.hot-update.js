self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/molecules/HeroCourseComponent.js":
/*!*****************************************************!*\
  !*** ./components/molecules/HeroCourseComponent.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/ArrowLink */ "./components/atoms/ArrowLink.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\OneDrive\\Pulpit\\websites\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent.js",
    _this = undefined;




var HeroCourseComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "HeroCourseComponent__HeroCourseComponentWrapper",
  componentId: "sc-1g1lf9c-0"
})(["display:flex;flex-direction:column;padding:", ";max-width:46rem;background-color:", ";border-radius:", ";box-shadow:", ";position:relative;&:nth-child(odd){background-color:red;justify-self:end;}h4{text-align:center;margin-bottom:1rem;}p{margin-bottom:3rem;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.dimensions.heroCoursePadding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.utils.borderRadius;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.utils.boxShadow;
});
_c = HeroCourseComponentWrapper;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "HeroCourseComponent__ImageWrapper",
  componentId: "sc-1g1lf9c-1"
})(["height:10rem;width:10rem;border-radius:50%;position:absolute;background-color:darkGray;transform:translate(-90%,-65%);"]);
_c2 = ImageWrapper;

var HeroCourseComponent = function HeroCourseComponent(_ref5) {
  var data = _ref5.data;
  var title = data.title,
      description = data.description,
      link = data.link,
      linkTitle = data.linkTitle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      small: "true",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: link,
      title: linkTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_c3 = HeroCourseComponent;
/* harmony default export */ __webpack_exports__["default"] = (HeroCourseComponent);

var _c, _c2, _c3;

$RefreshReg$(_c, "HeroCourseComponentWrapper");
$RefreshReg$(_c2, "ImageWrapper");
$RefreshReg$(_c3, "HeroCourseComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiZGltZW5zaW9ucyIsImhlcm9Db3Vyc2VQYWRkaW5nIiwiY29sb3JzIiwid2hpdGUiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIkltYWdlV3JhcHBlciIsIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJsaW5rVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSwwQkFBMEIsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsMlFBR25CO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxpQkFBaEM7QUFBQSxDQUhtQixFQUtWO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FMVSxFQU1iO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFlBQTNCO0FBQUEsQ0FOYSxFQU9oQjtBQUFBLE1BQUdOLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZRSxTQUEzQjtBQUFBLENBUGdCLENBQWhDO0tBQU1ULDBCO0FBeUJOLElBQU1VLFlBQVksR0FBR1QscUVBQUg7QUFBQTtBQUFBO0FBQUEsOEhBQWxCO01BQU1TLFk7O0FBU04sSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixRQUFjO0FBQUEsTUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQUEsTUFDaENDLEtBRGdDLEdBQ1FELElBRFIsQ0FDaENDLEtBRGdDO0FBQUEsTUFDekJDLFdBRHlCLEdBQ1FGLElBRFIsQ0FDekJFLFdBRHlCO0FBQUEsTUFDWkMsSUFEWSxHQUNRSCxJQURSLENBQ1pHLElBRFk7QUFBQSxNQUNOQyxTQURNLEdBQ1FKLElBRFIsQ0FDTkksU0FETTtBQUV4QyxzQkFDRSw4REFBQywwQkFBRDtBQUFBLDRCQUNFLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFHLFdBQUssRUFBQyxNQUFUO0FBQUEsZ0JBQWlCQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyxxREFBRDtBQUFXLFVBQUksRUFBRUMsSUFBakI7QUFBdUIsV0FBSyxFQUFFQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVZEOztNQUFNTCxtQjtBQVlOLCtEQUFlQSxtQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4yMzM0NTQ5ZWVmNmEzMzBiMDM3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnLi4vYXRvbXMvQXJyb3dMaW5rJztcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLmhlcm9Db3Vyc2VQYWRkaW5nfTtcclxuICBtYXgtd2lkdGg6IDQ2cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtHcmF5O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MCUsIC02NSUpO1xyXG5gO1xyXG5cclxuY29uc3QgSGVyb0NvdXJzZUNvbXBvbmVudCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBsaW5rLCBsaW5rVGl0bGUgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlciAvPlxyXG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxwIHNtYWxsPVwidHJ1ZVwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxBcnJvd0xpbmsgZGF0YT17bGlua30gdGl0bGU9e2xpbmtUaXRsZX0gLz5cclxuICAgIDwvSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9Db3Vyc2VDb21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=