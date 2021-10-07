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
})(["display:grid;column-gap:5vw;row-gap:4rem;width:100%;grid-template:'header line images' 'content line images';", "{max-width:60rem;grid-template:'header ' 'content' 'line' 'images';}", "{max-width:50rem;}", "{max-width:100%;text-align:center;}h1{grid-area:header;color:", ";}p{font-size:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.mq.desktop;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.mq.laptop;
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
var StyledSchoolInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "Footerstyles__StyledSchoolInfo",
  componentId: "sc-ej43gk-2"
})(["max-width:15rem;"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ContentWrapper",
  componentId: "sc-ej43gk-3"
})(["grid-area:content;display:flex;align-items:center;p{text-align:left;}", "{justify-content:space-between;}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.mq.desktop;
});
var InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__InformationWrapper",
  componentId: "sc-ej43gk-4"
})(["margin-left:10rem;", "{margin-left:0;}span{color:", ";margin-right:0.4rem;font-weight:600;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.mq.desktop;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.accentColor;
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "Footerstyles__Line",
  componentId: "sc-ej43gk-5"
})(["grid-area:line;justify-self:center;width:0.6rem;height:100%;background-color:", ";", "{width:100%;height:0.5rem;}"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.accentColor;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.mq.desktop;
});
var ImagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ImagesWrapper",
  componentId: "sc-ej43gk-6"
})(["grid-area:images;display:flex;justify-content:space-between;align-items:center;", "{flex-direction:column;}"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.mq.tablet;
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Footerstyles__ImageWrapper",
  componentId: "sc-ej43gk-7"
})(["width:15rem;max-width:30rem;&:first-child{width:35rem;max-width:40rem;margin-right:3rem;}", "{width:100%;&:first-child{margin:5rem 0;width:100%;}}"], function (_ref17) {
  var theme = _ref17.theme;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyL0Zvb3Rlci5zdHlsZXMuanMiXSwibmFtZXMiOlsiU3R5bGVkRm9vdGVyIiwic3R5bGVkIiwidGhlbWUiLCJkaW1lbnNpb25zIiwicGFkZGluZyIsImNvbG9ycyIsIm1haW5Db2xvciIsIndoaXRlIiwibXEiLCJtb2JpbGVNZWRpdW0iLCJwYWRkaW5nTW9iaWxlIiwiRm9vdGVyV3JhcHBlciIsImRlc2t0b3AiLCJsYXB0b3AiLCJhY2NlbnRDb2xvciIsImZvbnRTaXplIiwic3ViSGVhZGVyIiwiU3R5bGVkU2Nob29sSW5mbyIsIkNvbnRlbnRXcmFwcGVyIiwiSW5mb3JtYXRpb25XcmFwcGVyIiwiTGluZSIsIkltYWdlc1dyYXBwZXIiLCJ0YWJsZXQiLCJJbWFnZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBR0Msd0VBQUg7QUFBQTtBQUFBO0FBQUEsc0hBQ1I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLE9BQWhDO0FBQUEsQ0FEUSxFQUVIO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFNBQTVCO0FBQUEsQ0FGRyxFQUdkO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFFLEtBQTVCO0FBQUEsQ0FIYyxFQU9yQjtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTQyxZQUF4QjtBQUFBLENBUHFCLEVBUU47QUFBQSxNQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJPLGFBQWhDO0FBQUEsQ0FSTSxDQUFsQjtBQVlBLElBQU1DLGFBQWEsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsNlNBVXRCO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNJLE9BQXhCO0FBQUEsQ0FWc0IsRUFtQnRCO0FBQUEsTUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNLLE1BQXhCO0FBQUEsQ0FuQnNCLEVBdUJ0QjtBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTQyxZQUF4QjtBQUFBLENBdkJzQixFQThCYjtBQUFBLE1BQUdQLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhUyxXQUE1QjtBQUFBLENBOUJhLEVBa0NUO0FBQUEsTUFBR1osS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDYSxRQUFOLENBQWVDLFNBQTlCO0FBQUEsQ0FsQ1MsQ0FBbkI7QUFzQ0EsSUFBTUMsZ0JBQWdCLEdBQUdoQixtRUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFBdEI7QUFJQSxJQUFNaUIsY0FBYyxHQUFHakIscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0hBU3ZCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNJLE9BQXhCO0FBQUEsQ0FUdUIsQ0FBcEI7QUFjQSxJQUFNTyxrQkFBa0IsR0FBR2xCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9HQUczQjtBQUFBLE1BQUdDLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTSSxPQUF4QjtBQUFBLENBSDJCLEVBUWxCO0FBQUEsTUFBR1YsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxNQUFOLENBQWFTLFdBQTVCO0FBQUEsQ0FSa0IsQ0FBeEI7QUFjQSxJQUFNTSxJQUFJLEdBQUduQixzRUFBSDtBQUFBO0FBQUE7QUFBQSwwSEFLSztBQUFBLE1BQUdDLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csTUFBTixDQUFhUyxXQUE1QjtBQUFBLENBTEwsRUFPYjtBQUFBLE1BQUdaLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTSSxPQUF4QjtBQUFBLENBUGEsQ0FBVjtBQWFBLElBQU1TLGFBQWEsR0FBR3BCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQU10QjtBQUFBLE1BQUdDLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sRUFBTixDQUFTYyxNQUF4QjtBQUFBLENBTnNCLENBQW5CO0FBV0EsSUFBTUMsWUFBWSxHQUFHdEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkpBVXJCO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxFQUFOLENBQVNjLE1BQXhCO0FBQUEsQ0FWcUIsQ0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uOGFhMjI5MTU2NzVjMDljMDI4NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgcGFkZGluZzogOHZoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5wYWRkaW5nfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQ29sb3J9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVNZWRpdW19IHtcclxuICAgIHBhZGRpbmc6IDV2aCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMucGFkZGluZ01vYmlsZX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogNXZ3O1xyXG4gIHJvdy1nYXA6IDRyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGdyaWQtdGVtcGxhdGU6XHJcbiAgICAnaGVhZGVyIGxpbmUgaW1hZ2VzJ1xyXG4gICAgJ2NvbnRlbnQgbGluZSBpbWFnZXMnO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIG1heC13aWR0aDogNjByZW07XHJcbiAgICBncmlkLXRlbXBsYXRlOlxyXG4gICAgICAnaGVhZGVyICdcclxuICAgICAgJ2NvbnRlbnQnXHJcbiAgICAgICdsaW5lJ1xyXG4gICAgICAnaW1hZ2VzJztcclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubGFwdG9wfSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tb2JpbGVNZWRpdW19IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmFjY2VudENvbG9yfTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLnN1YkhlYWRlcn07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFNjaG9vbEluZm8gPSBzdHlsZWQucGBcclxuICBtYXgtd2lkdGg6IDE1cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tbGVmdDogMTByZW07XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEuZGVza3RvcH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuc3BhbmBcclxuICBncmlkLWFyZWE6IGxpbmU7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDAuNnJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYWNjZW50Q29sb3J9O1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLmRlc2t0b3B9IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogaW1hZ2VzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEudGFibGV0fSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNXJlbTtcclxuICBtYXgtd2lkdGg6IDMwcmVtO1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAzNXJlbTtcclxuICAgIG1heC13aWR0aDogNDByZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgfVxyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogNXJlbSAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=