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
})(["display:flex;flex-direction:column;padding:", ";max-width:46rem;background-color:", ";border-radius:", ";box-shadow:", ";position:relative;h4{text-align:center;margin-bottom:1rem;}p{margin-bottom:3rem;}"], function (_ref) {
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
  console.log(data);
  var title = data.title,
      description = data.description,
      link = data.link,
      linkTitle = data.linkTitle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      small: true,
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ArrowLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: link,
      title: linkTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlciIsInN0eWxlZCIsInRoZW1lIiwiZGltZW5zaW9ucyIsImhlcm9Db3Vyc2VQYWRkaW5nIiwiY29sb3JzIiwid2hpdGUiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIkltYWdlV3JhcHBlciIsIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibGlua1RpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsMEJBQTBCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1OQUduQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsaUJBQWhDO0FBQUEsQ0FIbUIsRUFLVjtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUE1QjtBQUFBLENBTFUsRUFNYjtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxZQUEzQjtBQUFBLENBTmEsRUFPaEI7QUFBQSxNQUFHTixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUUsU0FBM0I7QUFBQSxDQVBnQixDQUFoQztLQUFNVCwwQjtBQW9CTixJQUFNVSxZQUFZLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhIQUFsQjtNQUFNUyxZOztBQVNOLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsUUFBYztBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVztBQUN4Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFEd0MsTUFFaENHLEtBRmdDLEdBRVFILElBRlIsQ0FFaENHLEtBRmdDO0FBQUEsTUFFekJDLFdBRnlCLEdBRVFKLElBRlIsQ0FFekJJLFdBRnlCO0FBQUEsTUFFWkMsSUFGWSxHQUVRTCxJQUZSLENBRVpLLElBRlk7QUFBQSxNQUVOQyxTQUZNLEdBRVFOLElBRlIsQ0FFTk0sU0FGTTtBQUd4QyxzQkFDRSw4REFBQywwQkFBRDtBQUFBLDRCQUNFLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFHLFdBQUssTUFBUjtBQUFBLGdCQUFVQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLHFEQUFEO0FBQVcsVUFBSSxFQUFFQyxJQUFqQjtBQUF1QixXQUFLLEVBQUVDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBWEQ7O01BQU1QLG1CO0FBYU4sK0RBQWVBLG1CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjQ0ODlkN2Q2ZDY3NzUwN2E5OWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEFycm93TGluayBmcm9tICcuLi9hdG9tcy9BcnJvd0xpbmsnO1xyXG5cclxuY29uc3QgSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMuaGVyb0NvdXJzZVBhZGRpbmd9O1xyXG4gIG1heC13aWR0aDogNDZyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJveFNoYWRvd307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrR3JheTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTAlLCAtNjUlKTtcclxuYDtcclxuXHJcbmNvbnN0IEhlcm9Db3Vyc2VDb21wb25lbnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgbGlua1RpdGxlIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXI+XHJcbiAgICAgIDxJbWFnZVdyYXBwZXIgLz5cclxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8cCBzbWFsbD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8QXJyb3dMaW5rIGRhdGE9e2xpbmt9IHRpdGxlPXtsaW5rVGl0bGV9IC8+XHJcbiAgICA8L0hlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ291cnNlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9