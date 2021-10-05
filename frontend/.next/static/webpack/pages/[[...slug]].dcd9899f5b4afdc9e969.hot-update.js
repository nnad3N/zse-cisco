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
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS5qcyJdLCJuYW1lcyI6WyJOZXh0SW1hZ2VXcmFwcGVyIiwic3R5bGVkIiwiU3R5bGVkTmV4dEltYWdlIiwiTmV4dEltYWdlIiwidGhlbWUiLCJyYWRpdXMiLCJ1dGlscyIsImJvcmRlclJhZGl1cyIsIkltYWdlIiwiaW1hZ2UiLCJoYXNSYWRpdXMiLCJwcmlvcml0eSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwibG9hZGVyIiwiZ2V0U3RyYXBpTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsc0NBQXRCO0tBQU1ELGdCO0FBS04sSUFBTUUsZUFBZSxHQUFHRCwwREFBTSxDQUFDRSxtREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRCQUNGO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsU0FBd0JBLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFlBQWYsR0FBOEIsQ0FBNUQ7QUFBQSxDQURFLENBQXJCO01BQU1MLGU7O0FBSU4sSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBb0M7QUFBQSxNQUFqQ0MsS0FBaUMsU0FBakNBLEtBQWlDO0FBQUEsTUFBMUJDLFNBQTBCLFNBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUFBLE1BQ3hDQyxHQUR3QyxHQUNBSCxLQURBLENBQ3hDRyxHQUR3QztBQUFBLE1BQ25DQyxlQURtQyxHQUNBSixLQURBLENBQ25DSSxlQURtQztBQUFBLE1BQ2xCQyxLQURrQixHQUNBTCxLQURBLENBQ2xCSyxLQURrQjtBQUFBLE1BQ1hDLE1BRFcsR0FDQU4sS0FEQSxDQUNYTSxNQURXOztBQUdoRCxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFdBQU9DLDREQUFjLENBQUNSLEtBQUQsQ0FBckI7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLGdCQUFEO0FBQWtCLGFBQVMsRUFBRUMsU0FBN0I7QUFBQSwyQkFDRSw4REFBQyxlQUFEO0FBQ0UsY0FBUSxFQUFFQyxRQURaO0FBRUUsWUFBTSxFQUFFRCxTQUZWO0FBR0UsWUFBTSxFQUFFTSxNQUhWO0FBSUUsWUFBTSxFQUFDLFlBSlQ7QUFLRSxXQUFLLEVBQUVGLEtBTFQ7QUFNRSxZQUFNLEVBQUVDLE1BTlY7QUFPRSxTQUFHLEVBQUVILEdBUFA7QUFRRSxTQUFHLEVBQUVDLGVBQWUsSUFBSTtBQVIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FyQkQ7O01BQU1MLEs7QUF1Qk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uZGNkOTg5OWY1YjRhZmRjOWU5NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSAnL3V0aWxzL21lZGlhJztcclxuaW1wb3J0IE5leHRJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBOZXh0SW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTmV4dEltYWdlID0gc3R5bGVkKE5leHRJbWFnZSlgXHJcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSwgcmFkaXVzIH0pID0+IChyYWRpdXMgPyB0aGVtZS51dGlscy5ib3JkZXJSYWRpdXMgOiAwKX07XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9ICh7IGltYWdlLCBoYXNSYWRpdXMsIHByaW9yaXR5IH0pID0+IHtcclxuICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZTtcclxuXHJcbiAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGdldFN0cmFwaU1lZGlhKGltYWdlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRJbWFnZVdyYXBwZXIgaGFzUmFkaXVzPXtoYXNSYWRpdXN9PlxyXG4gICAgICA8U3R5bGVkTmV4dEltYWdlXHJcbiAgICAgICAgcHJpb3JpdHk9e3ByaW9yaXR5fVxyXG4gICAgICAgIHJhZGl1cz17aGFzUmFkaXVzfVxyXG4gICAgICAgIGxvYWRlcj17bG9hZGVyfVxyXG4gICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICBzcmM9e3VybH1cclxuICAgICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dCB8fCAnJ31cclxuICAgICAgLz5cclxuICAgIDwvTmV4dEltYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=