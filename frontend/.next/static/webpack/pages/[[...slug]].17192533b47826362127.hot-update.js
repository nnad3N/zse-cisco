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
})(["display:grid;column-gap:", ";row-gap:4rem;grid-template:'header line images' 'content line images';", "{min-width:40rem;max-width:50rem;grid-template:'header ' 'content' 'line' 'images';}", "{max-width:100%;text-align:center;}h1{grid-area:header;color:", ";}p{font-size:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.dimensions.padding;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.mq.desktop;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.mq.mobileMedium;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.accentColor;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.fontSize.subHeader;
});
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ContentWrapper",
  componentId: "sc-ej43gk-2"
})(["grid-area:content;display:flex;", "{justify-content:space-between;}", "{flex-direction:column;}", "{p{text-align:center;}}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.mq.desktop;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.mq.tablet;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.mq.mobileMedium;
});
var InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__InformationWrapper",
  componentId: "sc-ej43gk-3"
})(["margin-left:10rem;", "{margin-left:0;}", "{margin-top:2rem;}span{color:", ";margin-right:0.4rem;font-weight:600;}"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.mq.desktop;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.mq.tablet;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.accentColor;
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "Footerstyles__Line",
  componentId: "sc-ej43gk-4"
})(["grid-area:line;min-width:0.5rem;height:100%;background-color:", ";", "{width:100%;min-height:0.5rem;}"], function (_ref17) {
  var theme = _ref17.theme;
  return theme.colors.accentColor;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.mq.desktop;
});
var ImagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ImagesWrapper",
  componentId: "sc-ej43gk-5"
})(["grid-area:images;display:flex;justify-content:space-between;align-items:center;", "{flex-direction:column;}"], function (_ref19) {
  var theme = _ref19.theme;
  return theme.mq.tablet;
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ImageWrapper",
  componentId: "sc-ej43gk-6"
})(["height:10rem;width:20rem;background-color:darkGray;&:first-child{margin-right:10rem;}", "{width:100%;&:first-child{margin-right:0;margin-bottom:10rem;}}"], function (_ref20) {
  var theme = _ref20.theme;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlci5zdHlsZXMuanMiXSwibmFtZXMiOlsiU3R5bGVkRm9vdGVyIiwic3R5bGVkIiwidGhlbWUiLCJkaW1lbnNpb25zIiwicGFkZGluZyIsImNvbG9ycyIsIm1haW5Db2xvciIsIndoaXRlIiwibXEiLCJtb2JpbGVNZWRpdW0iLCJwYWRkaW5nTW9iaWxlIiwiRm9vdGVyV3JhcHBlciIsImRlc2t0b3AiLCJhY2NlbnRDb2xvciIsImZvbnRTaXplIiwic3ViSGVhZGVyIiwiQ29udGVudFdyYXBwZXIiLCJ0YWJsZXQiLCJJbmZvcm1hdGlvbldyYXBwZXIiLCJMaW5lIiwiSW1hZ2VzV3JhcHBlciIsIkltYWdlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUdDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNIQUNSO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxPQUFoQztBQUFBLENBRFEsRUFFSDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxTQUE1QjtBQUFBLENBRkcsRUFHZDtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhRSxLQUE1QjtBQUFBLENBSGMsRUFPckI7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU0MsWUFBeEI7QUFBQSxDQVBxQixFQVFOO0FBQUEsTUFBR1AsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCTyxhQUFoQztBQUFBLENBUk0sQ0FBbEI7QUFZQSxJQUFNQyxhQUFhLEdBQUdWLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZSQUVWO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxPQUFoQztBQUFBLENBRlUsRUFTdEI7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU0ksT0FBeEI7QUFBQSxDQVRzQixFQW1CdEI7QUFBQSxNQUFHVixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU0MsWUFBeEI7QUFBQSxDQW5Cc0IsRUEwQmI7QUFBQSxNQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLE1BQU4sQ0FBYVEsV0FBNUI7QUFBQSxDQTFCYSxFQThCVDtBQUFBLE1BQUdYLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1ksUUFBTixDQUFlQyxTQUE5QjtBQUFBLENBOUJTLENBQW5CO0FBa0NBLElBQU1DLGNBQWMsR0FBR2YscUVBQUg7QUFBQTtBQUFBO0FBQUEsbUlBSXZCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNJLE9BQXhCO0FBQUEsQ0FKdUIsRUFRdkI7QUFBQSxNQUFHVixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU1MsTUFBeEI7QUFBQSxDQVJ1QixFQVl2QjtBQUFBLE1BQUdmLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTQyxZQUF4QjtBQUFBLENBWnVCLENBQXBCO0FBbUJBLElBQU1TLGtCQUFrQixHQUFHakIscUVBQUg7QUFBQTtBQUFBO0FBQUEsMEhBRzNCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNJLE9BQXhCO0FBQUEsQ0FIMkIsRUFPM0I7QUFBQSxNQUFHVixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU1MsTUFBeEI7QUFBQSxDQVAyQixFQVlsQjtBQUFBLE1BQUdmLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhUSxXQUE1QjtBQUFBLENBWmtCLENBQXhCO0FBa0JBLElBQU1NLElBQUksR0FBR2xCLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDhHQUlLO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFRLFdBQTVCO0FBQUEsQ0FKTCxFQU1iO0FBQUEsTUFBR1gsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNJLE9BQXhCO0FBQUEsQ0FOYSxDQUFWO0FBWUEsSUFBTVEsYUFBYSxHQUFHbkIscUVBQUg7QUFBQTtBQUFBO0FBQUEsb0hBTXRCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNTLE1BQXhCO0FBQUEsQ0FOc0IsQ0FBbkI7QUFXQSxJQUFNSSxZQUFZLEdBQUdwQixxRUFBSDtBQUFBO0FBQUE7QUFBQSxpS0FTckI7QUFBQSxNQUFHQyxLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLEVBQU4sQ0FBU1MsTUFBeEI7QUFBQSxDQVRxQixDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4xNzE5MjUzM2I0NzgyNjM2MjEyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBwYWRkaW5nOiA4dmggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kaW1lbnNpb25zLnBhZGRpbmd9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZU1lZGl1bX0ge1xyXG4gICAgcGFkZGluZzogNXZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nTW9iaWxlfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ307XHJcbiAgcm93LWdhcDogNHJlbTtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZTpcclxuICAgICdoZWFkZXIgbGluZSBpbWFnZXMnXHJcbiAgICAnY29udGVudCBsaW5lIGltYWdlcyc7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgbWluLXdpZHRoOiA0MHJlbTtcclxuICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICBncmlkLXRlbXBsYXRlOlxyXG4gICAgICAnaGVhZGVyICdcclxuICAgICAgJ2NvbnRlbnQnXHJcbiAgICAgICdsaW5lJ1xyXG4gICAgICAnaW1hZ2VzJztcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubW9iaWxlTWVkaXVtfSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zdWJIZWFkZXJ9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1vYmlsZU1lZGl1bX0ge1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogMTByZW07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGdyaWQtYXJlYTogbGluZTtcclxuICBtaW4td2lkdGg6IDAuNXJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZXNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IGltYWdlcztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrR3JheTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS50YWJsZXR9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9