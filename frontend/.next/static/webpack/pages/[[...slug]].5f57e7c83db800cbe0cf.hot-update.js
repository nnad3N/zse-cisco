self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/organisms/Footer/Footer.styles.js":
/*!******************************************************!*\
  !*** ./components/organisms/Footer/Footer.styles.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledFooter": function() { return /* binding */ StyledFooter; },
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "StyledSchoolInfo": function() { return /* binding */ StyledSchoolInfo; },
/* harmony export */   "ContentWrapper": function() { return /* binding */ ContentWrapper; },
/* harmony export */   "InformationWrapper": function() { return /* binding */ InformationWrapper; },
/* harmony export */   "Line": function() { return /* binding */ Line; },
/* harmony export */   "ImagesWrapper": function() { return /* binding */ ImagesWrapper; },
/* harmony export */   "ImageWrapper": function() { return /* binding */ ImageWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.footer.withConfig({
  displayName: "Footerstyles__StyledFooter",
  componentId: "sc-ej43gk-0"
})(["padding:8vh ", ";background-color:", ";color:", ";display:flex;justify-content:center;", "{padding:5vh ", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.dimensions.padding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.mainColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mq.mobileMedium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.dimensions.paddingMobile;
});
var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__FooterWrapper",
  componentId: "sc-ej43gk-1"
})(["display:grid;column-gap:5vw;row-gap:4rem;width:100%;grid-template:'header line images' 'content line images';h1{grid-area:header;color:", ";}p{text-align:left;font-size:", ";}", "{max-width:60rem;grid-template:'header ' 'content' 'line' 'images';}", "{max-width:50rem;p{font-size:", ";}}", "{max-width:100%;text-align:center;}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.accentColor;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontSize.subHeader;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.mq.desktop;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.mq.laptop;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.fontSize.subText;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.mq.mobileMedium;
});
var StyledSchoolInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "Footerstyles__StyledSchoolInfo",
  componentId: "sc-ej43gk-2"
})(["max-width:14rem;"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ContentWrapper",
  componentId: "sc-ej43gk-3"
})(["grid-area:content;display:flex;align-items:center;", "{justify-content:space-between;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.mq.desktop;
});
var InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__InformationWrapper",
  componentId: "sc-ej43gk-4"
})(["margin-left:10rem;span{color:", ";margin-right:0.4rem;font-weight:600;}", "{margin-left:0;}"], function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.accentColor;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.mq.desktop;
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "Footerstyles__Line",
  componentId: "sc-ej43gk-5"
})(["grid-area:line;justify-self:center;width:0.6rem;height:100%;background-color:", ";", "{width:100%;height:0.5rem;}"], function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.accentColor;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.mq.desktop;
});
var ImagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ImagesWrapper",
  componentId: "sc-ej43gk-6"
})(["grid-area:images;display:flex;justify-content:space-between;align-items:center;", "{flex-direction:column;}"], function (_ref17) {
  var theme = _ref17.theme;
  return theme.mq.tablet;
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ImageWrapper",
  componentId: "sc-ej43gk-7"
})(["width:15vw;max-width:30rem;&:first-child{margin-right:5rem;}", "{width:25rem;}", "{min-width:30rem;&:first-child{margin:5rem 0;}}"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.mq.desktop;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.mq.tablet;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlci5zdHlsZXMuanMiXSwibmFtZXMiOlsiU3R5bGVkRm9vdGVyIiwic3R5bGVkIiwidGhlbWUiLCJkaW1lbnNpb25zIiwicGFkZGluZyIsImNvbG9ycyIsIm1haW5Db2xvciIsIndoaXRlIiwibXEiLCJtb2JpbGVNZWRpdW0iLCJwYWRkaW5nTW9iaWxlIiwiRm9vdGVyV3JhcHBlciIsImFjY2VudENvbG9yIiwiZm9udFNpemUiLCJzdWJIZWFkZXIiLCJkZXNrdG9wIiwibGFwdG9wIiwic3ViVGV4dCIsIlN0eWxlZFNjaG9vbEluZm8iLCJDb250ZW50V3JhcHBlciIsIkluZm9ybWF0aW9uV3JhcHBlciIsIkxpbmUiLCJJbWFnZXNXcmFwcGVyIiwidGFibGV0IiwiSW1hZ2VXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUdDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNIQUNSO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxPQUFoQztBQUFBLENBRFEsRUFFSDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxTQUE1QjtBQUFBLENBRkcsRUFHZDtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhRSxLQUE1QjtBQUFBLENBSGMsRUFPckI7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU0MsWUFBeEI7QUFBQSxDQVBxQixFQVFOO0FBQUEsTUFBR1AsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCTyxhQUFoQztBQUFBLENBUk0sQ0FBbEI7QUFZQSxJQUFNQyxhQUFhLEdBQUdWLHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtVQVdiO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFPLFdBQTVCO0FBQUEsQ0FYYSxFQWdCVDtBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1csUUFBTixDQUFlQyxTQUE5QjtBQUFBLENBaEJTLEVBbUJ0QjtBQUFBLE1BQUdaLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTTyxPQUF4QjtBQUFBLENBbkJzQixFQTRCdEI7QUFBQSxNQUFHYixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU1EsTUFBeEI7QUFBQSxDQTVCc0IsRUFnQ1A7QUFBQSxNQUFHZCxLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNXLFFBQU4sQ0FBZUksT0FBOUI7QUFBQSxDQWhDTyxFQW9DdEI7QUFBQSxNQUFHZixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU0MsWUFBeEI7QUFBQSxDQXBDc0IsQ0FBbkI7QUEwQ0EsSUFBTVMsZ0JBQWdCLEdBQUdqQixtRUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFBdEI7QUFJQSxJQUFNa0IsY0FBYyxHQUFHbEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0ZBS3ZCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNPLE9BQXhCO0FBQUEsQ0FMdUIsQ0FBcEI7QUFVQSxJQUFNSyxrQkFBa0IsR0FBR25CLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9HQUlsQjtBQUFBLE1BQUdDLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhTyxXQUE1QjtBQUFBLENBSmtCLEVBUzNCO0FBQUEsTUFBR1YsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNPLE9BQXhCO0FBQUEsQ0FUMkIsQ0FBeEI7QUFjQSxJQUFNTSxJQUFJLEdBQUdwQixzRUFBSDtBQUFBO0FBQUE7QUFBQSwwSEFLSztBQUFBLE1BQUdDLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhTyxXQUE1QjtBQUFBLENBTEwsRUFPYjtBQUFBLE1BQUdWLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTTyxPQUF4QjtBQUFBLENBUGEsQ0FBVjtBQWFBLElBQU1PLGFBQWEsR0FBR3JCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQU10QjtBQUFBLE1BQUdDLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTZSxNQUF4QjtBQUFBLENBTnNCLENBQW5CO0FBV0EsSUFBTUMsWUFBWSxHQUFHdkIscUVBQUg7QUFBQTtBQUFBO0FBQUEsMElBUXJCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNPLE9BQXhCO0FBQUEsQ0FScUIsRUFZckI7QUFBQSxNQUFHYixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU2UsTUFBeEI7QUFBQSxDQVpxQixDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS41ZjU3ZTdjODNkYjgwMGNiZTBjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBwYWRkaW5nOiA4dmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZU1lZGl1bX0ge1xyXG4gICAgcGFkZGluZzogNXZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiA1dnc7XHJcbiAgcm93LWdhcDogNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlOlxyXG4gICAgJ2hlYWRlciBsaW5lIGltYWdlcydcclxuICAgICdjb250ZW50IGxpbmUgaW1hZ2VzJztcclxuXHJcbiAgaDEge1xyXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YkhlYWRlcn07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIG1heC13aWR0aDogNjByZW07XHJcbiAgICBncmlkLXRlbXBsYXRlOlxyXG4gICAgICAnaGVhZGVyICdcclxuICAgICAgJ2NvbnRlbnQnXHJcbiAgICAgICdsaW5lJ1xyXG4gICAgICAnaW1hZ2VzJztcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUuc3ViVGV4dH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZU1lZGl1bX0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRTY2hvb2xJbmZvID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiAxNHJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgZ3JpZC1hcmVhOiBsaW5lO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiAwLjZyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5kZXNrdG9wfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZXNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IGltYWdlcztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTV2dztcclxuICBtYXgtd2lkdGg6IDMwcmVtO1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIG1pbi13aWR0aDogMzByZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogNXJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==