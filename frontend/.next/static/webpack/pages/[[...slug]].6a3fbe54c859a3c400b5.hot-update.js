self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/HeroAcademy/HeroAcademy.styles.js":
/*!***************************************************************!*\
  !*** ./components/sections/HeroAcademy/HeroAcademy.styles.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroAcademyWrapper": function() { return /* binding */ HeroAcademyWrapper; },
/* harmony export */   "HeaderWrapper": function() { return /* binding */ HeaderWrapper; },
/* harmony export */   "DescriptionWrapper": function() { return /* binding */ DescriptionWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var HeroAcademyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "HeroAcademystyles__HeroAcademyWrapper",
  componentId: "sc-tcjolo-0"
})(["padding:10vh 0 10vh ", ";display:grid;row-gap:4rem;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;", "{padding:10vh ", ";grid-template-columns:1fr;grid-template-rows:auto auto auto;justify-items:center;}", "{padding:5vh ", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.dimensions.paddingNarrow;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.mq.desktop;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dimensions.padding;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mq.mobileLarge;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.dimensions.paddingMobile;
});
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeroAcademystyles__HeaderWrapper",
  componentId: "sc-tcjolo-1"
})(["grid-column:1/3;grid-row:1/2;", "{grid-column:1/1;}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.mq.desktop;
});
var DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeroAcademystyles__DescriptionWrapper",
  componentId: "sc-tcjolo-2"
})(["width:clamp(38rem,100%,60rem);margin-right:8rem;align-self:center;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:", ";background-color:", ";border-radius:", ";box-shadow:", ";p{margin-bottom:4rem;}", "{grid-row:3/4;margin-right:0;}", "{padding:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.dimensions.heroAcademyPadding;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.white;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.utils.borderRadius;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.utils.boxShadow;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.mq.desktop;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.mq.mobileLarge;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.dimensions.cardPaddingMobile;
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeroAcademystyles__ImageWrapper",
  componentId: "sc-tcjolo-3"
})(["width:100%;max-width:70%;height:50vh;background-color:darkGray;justify-self:end;align-self:center;", "{width:clamp(38rem,100%,60rem);height:50vmin;justify-self:center;}", "{height:34vmin;}"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.mq.desktop;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.mq.laptopTall;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteS5zdHlsZXMuanMiXSwibmFtZXMiOlsiSGVyb0FjYWRlbXlXcmFwcGVyIiwic3R5bGVkIiwidGhlbWUiLCJkaW1lbnNpb25zIiwicGFkZGluZ05hcnJvdyIsIm1xIiwiZGVza3RvcCIsInBhZGRpbmciLCJtb2JpbGVMYXJnZSIsInBhZGRpbmdNb2JpbGUiLCJIZWFkZXJXcmFwcGVyIiwiRGVzY3JpcHRpb25XcmFwcGVyIiwiaGVyb0FjYWRlbXlQYWRkaW5nIiwiY29sb3JzIiwid2hpdGUiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNhcmRQYWRkaW5nTW9iaWxlIiwiSW1hZ2VXcmFwcGVyIiwibGFwdG9wVGFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxrQkFBa0IsR0FBR0MseUVBQUg7QUFBQTtBQUFBO0FBQUEsdVBBQ047QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLGFBQWhDO0FBQUEsQ0FETSxFQU8zQjtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csRUFBTixDQUFTQyxPQUF4QjtBQUFBLENBUDJCLEVBUVg7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJJLE9BQWhDO0FBQUEsQ0FSVyxFQWMzQjtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csRUFBTixDQUFTRyxXQUF4QjtBQUFBLENBZDJCLEVBZVo7QUFBQSxNQUFHTixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJNLGFBQWhDO0FBQUEsQ0FmWSxDQUF4QjtBQW1CQSxJQUFNQyxhQUFhLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLDREQUl0QjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csRUFBTixDQUFTQyxPQUF4QjtBQUFBLENBSnNCLENBQW5CO0FBU0EsSUFBTUssa0JBQWtCLEdBQUdWLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdUQVFsQjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQlMsa0JBQWhDO0FBQUEsQ0FSa0IsRUFTVDtBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1csTUFBTixDQUFhQyxLQUE1QjtBQUFBLENBVFMsRUFVWjtBQUFBLE1BQUdaLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ2EsS0FBTixDQUFZQyxZQUEzQjtBQUFBLENBVlksRUFXZjtBQUFBLE1BQUdkLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ2EsS0FBTixDQUFZRSxTQUEzQjtBQUFBLENBWGUsRUFpQjNCO0FBQUEsTUFBR2YsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxFQUFOLENBQVNDLE9BQXhCO0FBQUEsQ0FqQjJCLEVBc0IzQjtBQUFBLE1BQUdKLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csRUFBTixDQUFTRyxXQUF4QjtBQUFBLENBdEIyQixFQXVCaEI7QUFBQSxNQUFHTixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJlLGlCQUFoQztBQUFBLENBdkJnQixDQUF4QjtBQTJCQSxJQUFNQyxZQUFZLEdBQUdsQixxRUFBSDtBQUFBO0FBQUE7QUFBQSxxTUFRckI7QUFBQSxNQUFHQyxLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLEVBQU4sQ0FBU0MsT0FBeEI7QUFBQSxDQVJxQixFQWNyQjtBQUFBLE1BQUdKLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csRUFBTixDQUFTZSxVQUF4QjtBQUFBLENBZHFCLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjZhM2ZiZTU0Yzg1OWEzYzQwMGI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvQWNhZGVteVdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwYWRkaW5nOiAxMHZoIDAgMTB2aCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ05hcnJvd307XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICByb3ctZ2FwOiA0cmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBwYWRkaW5nOiAxMHZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nfTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTGFyZ2V9IHtcclxuICAgIHBhZGRpbmc6IDV2aCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgZ3JpZC1yb3c6IDEvMjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8xO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBjbGFtcCgzOHJlbSwgMTAwJSwgNjByZW0pO1xyXG4gIG1hcmdpbi1yaWdodDogOHJlbTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5oZXJvQWNhZGVteVBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnV0aWxzLmJvcmRlclJhZGl1c307XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3hTaGFkb3d9O1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMuY2FyZFBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrR3JheTtcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCA2MHJlbSk7XHJcbiAgICBoZWlnaHQ6IDUwdm1pbjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5sYXB0b3BUYWxsfSB7XHJcbiAgICBoZWlnaHQ6IDM0dm1pbjtcclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=