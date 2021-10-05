self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/atoms/Image.js":
/*!***********************************!*\
  !*** ./components/atoms/Image.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Image.js",
    _this = undefined;




var NextImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Image__NextImageWrapper",
  componentId: "sc-6qllkz-0"
})(["height:max-content;width:100%;"]);
_c = NextImageWrapper;
var StyledNextImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)((next_image__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
  displayName: "Image__StyledNextImage",
  componentId: "sc-6qllkz-1"
})(["border-radius:", ";"], function (_ref) {
  var theme = _ref.theme,
      radius = _ref.radius;
  return radius ? theme.utils.borderRadius : 0;
});
_c2 = StyledNextImage;

var Image = function Image(_ref2) {
  var image = _ref2.image,
      hasRadius = _ref2.hasRadius,
      priority = _ref2.priority;
  var url = image.url,
      alternativeText = image.alternativeText,
      width = image.width,
      height = image.height;

  var loader = function loader() {
    return (0,_utils_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  console.log(image);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextImageWrapper, {
    hasRadius: hasRadius,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledNextImage, {
      priority: priority,
      radius: hasRadius,
      loader: loader,
      layout: "responsive",
      width: width,
      height: height,
      src: url,
      alt: alternativeText || ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_c3 = Image;
/* harmony default export */ __webpack_exports__["default"] = (Image);

var _c, _c2, _c3;

$RefreshReg$(_c, "NextImageWrapper");
$RefreshReg$(_c2, "StyledNextImage");
$RefreshReg$(_c3, "Image");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS5qcyJdLCJuYW1lcyI6WyJOZXh0SW1hZ2VXcmFwcGVyIiwic3R5bGVkIiwiU3R5bGVkTmV4dEltYWdlIiwiTmV4dEltYWdlIiwidGhlbWUiLCJyYWRpdXMiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsIkltYWdlIiwiaW1hZ2UiLCJoYXNSYWRpdXMiLCJwcmlvcml0eSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwibG9hZGVyIiwiZ2V0U3RyYXBpTWVkaWEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNDQUF0QjtLQUFNRCxnQjtBQUtOLElBQU1FLGVBQWUsR0FBR0QsMERBQU0sQ0FBQ0UsbURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw0QkFDRjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE1BQVYsUUFBVUEsTUFBVjtBQUFBLFNBQXdCQSxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxZQUFmLEdBQThCLENBQTVEO0FBQUEsQ0FERSxDQUFyQjtNQUFNTCxlOztBQUlOLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLFFBQW9DO0FBQUEsTUFBakNDLEtBQWlDLFNBQWpDQSxLQUFpQztBQUFBLE1BQTFCQyxTQUEwQixTQUExQkEsU0FBMEI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFBQSxNQUN4Q0MsR0FEd0MsR0FDQUgsS0FEQSxDQUN4Q0csR0FEd0M7QUFBQSxNQUNuQ0MsZUFEbUMsR0FDQUosS0FEQSxDQUNuQ0ksZUFEbUM7QUFBQSxNQUNsQkMsS0FEa0IsR0FDQUwsS0FEQSxDQUNsQkssS0FEa0I7QUFBQSxNQUNYQyxNQURXLEdBQ0FOLEtBREEsQ0FDWE0sTUFEVzs7QUFHaEQsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUFPQyw0REFBYyxDQUFDUixLQUFELENBQXJCO0FBQ0QsR0FGRDs7QUFJQVMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFFQSxzQkFDRSw4REFBQyxnQkFBRDtBQUFrQixhQUFTLEVBQUVDLFNBQTdCO0FBQUEsMkJBQ0UsOERBQUMsZUFBRDtBQUNFLGNBQVEsRUFBRUMsUUFEWjtBQUVFLFlBQU0sRUFBRUQsU0FGVjtBQUdFLFlBQU0sRUFBRU0sTUFIVjtBQUlFLFlBQU0sRUFBQyxZQUpUO0FBS0UsV0FBSyxFQUFFRixLQUxUO0FBTUUsWUFBTSxFQUFFQyxNQU5WO0FBT0UsU0FBRyxFQUFFSCxHQVBQO0FBUUUsU0FBRyxFQUFFQyxlQUFlLElBQUk7QUFSMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBdkJEOztNQUFNTCxLO0FBeUJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjM0ZDgyZjYxMDg2YTdmOTI1ODAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJy91dGlscy9tZWRpYSc7XHJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTmV4dEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE5leHRJbWFnZSA9IHN0eWxlZChOZXh0SW1hZ2UpYFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUsIHJhZGl1cyB9KSA9PiAocmFkaXVzID8gdGhlbWUudXRpbHMuYm9yZGVyUmFkaXVzIDogMCl9O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSwgaGFzUmFkaXVzLCBwcmlvcml0eSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2U7XHJcblxyXG4gIGNvbnN0IGxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiBnZXRTdHJhcGlNZWRpYShpbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRJbWFnZVdyYXBwZXIgaGFzUmFkaXVzPXtoYXNSYWRpdXN9PlxyXG4gICAgICA8U3R5bGVkTmV4dEltYWdlXHJcbiAgICAgICAgcHJpb3JpdHk9e3ByaW9yaXR5fVxyXG4gICAgICAgIHJhZGl1cz17aGFzUmFkaXVzfVxyXG4gICAgICAgIGxvYWRlcj17bG9hZGVyfVxyXG4gICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICBzcmM9e3VybH1cclxuICAgICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dCB8fCAnJ31cclxuICAgICAgLz5cclxuICAgIDwvTmV4dEltYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=