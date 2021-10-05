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
})(["width:100%;height:50vh;background-color:darkGray;justify-self:end;", "{width:clamp(38rem,100%,60rem);height:50vmin;justify-self:center;}", "{height:30rem;}"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.mq.desktop;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.mq.desktopTall;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteS5zdHlsZXMuanMiXSwibmFtZXMiOlsiSGVyb0FjYWRlbXlXcmFwcGVyIiwic3R5bGVkIiwidGhlbWUiLCJkaW1lbnNpb25zIiwicGFkZGluZ05hcnJvdyIsIm1xIiwiZGVza3RvcCIsInBhZGRpbmciLCJtb2JpbGVMYXJnZSIsInBhZGRpbmdNb2JpbGUiLCJIZWFkZXJXcmFwcGVyIiwiRGVzY3JpcHRpb25XcmFwcGVyIiwiaGVyb0FjYWRlbXlQYWRkaW5nIiwiY29sb3JzIiwid2hpdGUiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNhcmRQYWRkaW5nTW9iaWxlIiwiSW1hZ2VXcmFwcGVyIiwiZGVza3RvcFRhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLHVQQUNOO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxhQUFoQztBQUFBLENBRE0sRUFPM0I7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLEVBQU4sQ0FBU0MsT0FBeEI7QUFBQSxDQVAyQixFQVFYO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCSSxPQUFoQztBQUFBLENBUlcsRUFjM0I7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLEVBQU4sQ0FBU0csV0FBeEI7QUFBQSxDQWQyQixFQWVaO0FBQUEsTUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCTSxhQUFoQztBQUFBLENBZlksQ0FBeEI7QUFtQkEsSUFBTUMsYUFBYSxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0REFJdEI7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLEVBQU4sQ0FBU0MsT0FBeEI7QUFBQSxDQUpzQixDQUFuQjtBQVNBLElBQU1LLGtCQUFrQixHQUFHVixxRUFBSDtBQUFBO0FBQUE7QUFBQSxnVEFRbEI7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJTLGtCQUFoQztBQUFBLENBUmtCLEVBU1Q7QUFBQSxNQUFHVixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNXLE1BQU4sQ0FBYUMsS0FBNUI7QUFBQSxDQVRTLEVBVVo7QUFBQSxNQUFHWixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNhLEtBQU4sQ0FBWUMsWUFBM0I7QUFBQSxDQVZZLEVBV2Y7QUFBQSxNQUFHZCxLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNhLEtBQU4sQ0FBWUUsU0FBM0I7QUFBQSxDQVhlLEVBaUIzQjtBQUFBLE1BQUdmLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csRUFBTixDQUFTQyxPQUF4QjtBQUFBLENBakIyQixFQXNCM0I7QUFBQSxNQUFHSixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLEVBQU4sQ0FBU0csV0FBeEI7QUFBQSxDQXRCMkIsRUF1QmhCO0FBQUEsTUFBR04sS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCZSxpQkFBaEM7QUFBQSxDQXZCZ0IsQ0FBeEI7QUEyQkEsSUFBTUMsWUFBWSxHQUFHbEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsb0tBTXJCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxFQUFOLENBQVNDLE9BQXhCO0FBQUEsQ0FOcUIsRUFZckI7QUFBQSxNQUFHSixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLEVBQU4sQ0FBU2UsV0FBeEI7QUFBQSxDQVpxQixDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4yNDQ0NTNiNGYwNjExNWM3NzlhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0FjYWRlbXlXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogMTB2aCAwIDEwdmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmdOYXJyb3d9O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcm93LWdhcDogNHJlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogMTB2aCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ307XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZUxhcmdlfSB7XHJcbiAgICBwYWRkaW5nOiA1dmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmdNb2JpbGV9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWNvbHVtbjogMS8zO1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogY2xhbXAoMzhyZW0sIDEwMCUsIDYwcmVtKTtcclxuICBtYXJnaW4tcmlnaHQ6IDhyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMuaGVyb0FjYWRlbXlQYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXN9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudXRpbHMuYm94U2hhZG93fTtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBncmlkLXJvdzogMy80O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLmNhcmRQYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya0dyYXk7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IGNsYW1wKDM4cmVtLCAxMDAlLCA2MHJlbSk7XHJcbiAgICBoZWlnaHQ6IDUwdm1pbjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wVGFsbH0ge1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=