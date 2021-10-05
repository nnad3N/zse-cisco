self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/atoms/Image/Image.js":
/*!*****************************************!*\
  !*** ./components/atoms/Image/Image.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.styles */ "./components/atoms/Image/Image.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Image\\Image.js",
    _this = undefined;




var Image = function Image(_ref) {
  var image = _ref.image,
      hasRadius = _ref.hasRadius,
      priority = _ref.priority;
  var url = image.url,
      alternativeText = image.alternativeText,
      width = image.width,
      height = image.height;

  var loader = function loader() {
    return (0,utils_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  console.log(priority);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_2__.NextImageWrapper, {
    hasRadius: hasRadius,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_2__.StyledNextImage, {
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
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = Image;
/* harmony default export */ __webpack_exports__["default"] = (Image);

var _c;

$RefreshReg$(_c, "Image");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwiaGFzUmFkaXVzIiwicHJpb3JpdHkiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRlciIsImdldFN0cmFwaU1lZGlhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW9DO0FBQUEsTUFBakNDLEtBQWlDLFFBQWpDQSxLQUFpQztBQUFBLE1BQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSxNQUN4Q0MsR0FEd0MsR0FDQUgsS0FEQSxDQUN4Q0csR0FEd0M7QUFBQSxNQUNuQ0MsZUFEbUMsR0FDQUosS0FEQSxDQUNuQ0ksZUFEbUM7QUFBQSxNQUNsQkMsS0FEa0IsR0FDQUwsS0FEQSxDQUNsQkssS0FEa0I7QUFBQSxNQUNYQyxNQURXLEdBQ0FOLEtBREEsQ0FDWE0sTUFEVzs7QUFHaEQsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUFPQywyREFBYyxDQUFDUixLQUFELENBQXJCO0FBQ0QsR0FGRDs7QUFJQVMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFFQSxzQkFDRSw4REFBQywyREFBRDtBQUFrQixhQUFTLEVBQUVELFNBQTdCO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFDRSxjQUFRLEVBQUVDLFFBRFo7QUFFRSxZQUFNLEVBQUVELFNBRlY7QUFHRSxZQUFNLEVBQUVNLE1BSFY7QUFJRSxZQUFNLEVBQUMsWUFKVDtBQUtFLFdBQUssRUFBRUYsS0FMVDtBQU1FLFlBQU0sRUFBRUMsTUFOVjtBQU9FLFNBQUcsRUFBRUgsR0FQUDtBQVFFLFNBQUcsRUFBRUMsZUFBZSxJQUFJO0FBUjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXZCRDs7S0FBTUwsSztBQXlCTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS45MTRiMjJhNDM1MzdjNWQ2ODBmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICd1dGlscy9tZWRpYSc7XHJcbmltcG9ydCB7IE5leHRJbWFnZVdyYXBwZXIsIFN0eWxlZE5leHRJbWFnZSB9IGZyb20gJy4vSW1hZ2Uuc3R5bGVzJztcclxuXHJcbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UsIGhhc1JhZGl1cywgcHJpb3JpdHkgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlO1xyXG5cclxuICBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0SW1hZ2VXcmFwcGVyIGhhc1JhZGl1cz17aGFzUmFkaXVzfT5cclxuICAgICAgPFN0eWxlZE5leHRJbWFnZVxyXG4gICAgICAgIHByaW9yaXR5PXtwcmlvcml0eX1cclxuICAgICAgICByYWRpdXM9e2hhc1JhZGl1c31cclxuICAgICAgICBsb2FkZXI9e2xvYWRlcn1cclxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgc3JjPXt1cmx9XHJcbiAgICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgJyd9XHJcbiAgICAgIC8+XHJcbiAgICA8L05leHRJbWFnZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9