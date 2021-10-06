self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/organisms/Navigation/Navigation.styles.js":
/*!**************************************************************!*\
  !*** ./components/organisms/Navigation/Navigation.styles.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledNavigation": function() { return /* binding */ StyledNavigation; },
/* harmony export */   "ExitButton": function() { return /* binding */ ExitButton; },
/* harmony export */   "ContentWrapper": function() { return /* binding */ ContentWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.nav.withConfig({
  displayName: "Navigationstyles__StyledNavigation",
  componentId: "sc-1wwrjzy-0"
})(["position:absolute;top:0;left:0;height:100vh;width:100%;z-index:20;background-color:", ";position:relative;padding:", ";display:grid;grid-template-columns:repeat(auto-fill,minmax(40rem,1fr));column-gap:", ";row-gap:", ";", "{height:unset;}img{border-radius:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.mainColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dimensions.navigationPadding;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dimensions.navigationColumnGap;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dimensions.navigationRowGap;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.mq.mobileLarge;
});
var ExitButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "Navigationstyles__ExitButton",
  componentId: "sc-1wwrjzy-1"
})(["border:none;background-color:transparent;height:5rem;width:5rem;position:absolute;top:5vh;right:5vw;cursor:pointer;"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navigationstyles__ContentWrapper",
  componentId: "sc-1wwrjzy-2"
})(["display:flex;flex-direction:column;width:40rem;justify-self:center;", "{width:100%;}h3{border-bottom:0.4rem solid ", ";margin-bottom:2rem;}a{font-size:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.mq.mobileLarge;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.accentColor;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSize.navList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnN0eWxlcy5qcyJdLCJuYW1lcyI6WyJTdHlsZWROYXZpZ2F0aW9uIiwic3R5bGVkIiwidGhlbWUiLCJjb2xvcnMiLCJtYWluQ29sb3IiLCJkaW1lbnNpb25zIiwibmF2aWdhdGlvblBhZGRpbmciLCJuYXZpZ2F0aW9uQ29sdW1uR2FwIiwibmF2aWdhdGlvblJvd0dhcCIsIm1xIiwibW9iaWxlTGFyZ2UiLCJFeGl0QnV0dG9uIiwiQ29udGVudFdyYXBwZXIiLCJhY2NlbnRDb2xvciIsImZvbnRTaXplIiwibmF2TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0UUFPUDtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxTQUE1QjtBQUFBLENBUE8sRUFTaEI7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLFVBQU4sQ0FBaUJDLGlCQUFoQztBQUFBLENBVGdCLEVBWWI7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLFVBQU4sQ0FBaUJFLG1CQUFoQztBQUFBLENBWmEsRUFhaEI7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLFVBQU4sQ0FBaUJHLGdCQUFoQztBQUFBLENBYmdCLEVBZXpCO0FBQUEsTUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTyxFQUFOLENBQVNDLFdBQXhCO0FBQUEsQ0FmeUIsQ0FBdEI7QUF3QkEsSUFBTUMsVUFBVSxHQUFHVix3RUFBSDtBQUFBO0FBQUE7QUFBQSwySEFBaEI7QUFXQSxJQUFNVyxjQUFjLEdBQUdYLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNLQU12QjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sRUFBTixDQUFTQyxXQUF4QjtBQUFBLENBTnVCLEVBV087QUFBQSxNQUFHUixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVUsV0FBNUI7QUFBQSxDQVhQLEVBZ0JWO0FBQUEsTUFBR1gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDWSxRQUFOLENBQWVDLE9BQTlCO0FBQUEsQ0FoQlUsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uNGFjYmM3ZDJkNzZkZGY2OTYyZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5uYXZpZ2F0aW9uUGFkZGluZ307XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MHJlbSwgMWZyKSk7XHJcbiAgY29sdW1uLWdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLm5hdmlnYXRpb25Db2x1bW5HYXB9O1xyXG4gIHJvdy1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5uYXZpZ2F0aW9uUm93R2FwfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgaGVpZ2h0OiB1bnNldDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeGl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDV2aDtcclxuICByaWdodDogNXZ3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA0MHJlbTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVMYXJnZX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjRyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm5hdkxpc3R9O1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==