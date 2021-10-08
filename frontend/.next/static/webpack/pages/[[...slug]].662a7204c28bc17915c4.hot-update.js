self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./types/shapes.js":
/*!*************************!*\
  !*** ./types/shapes.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataShape": function() { return /* binding */ dataShape; },
/* harmony export */   "childrenShape": function() { return /* binding */ childrenShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var dataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  button: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
});
var childrenShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().element)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().element)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdHlwZXMvc2hhcGVzLmpzIl0sIm5hbWVzIjpbImRhdGFTaGFwZSIsIlByb3BUeXBlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJpbWFnZSIsIm9iamVjdCIsImNoaWxkcmVuU2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHVEQUFBLENBQWdCO0FBQ3ZDQyxPQUFLLEVBQUVELDBEQURnQztBQUV2Q0UsYUFBVyxFQUFFRiwwREFGMEI7QUFHdkNHLFFBQU0sRUFBRUgsMkRBQUEsQ0FBb0IsQ0FBQ0EseURBQUEsQ0FBa0JBLDBEQUFsQixDQUFELEVBQXNDQSwwREFBdEMsQ0FBcEIsQ0FIK0I7QUFJdkNJLE9BQUssRUFBRUosMERBQWdCSztBQUpnQixDQUFoQixDQUFsQjtBQU9BLElBQU1DLGFBQWEsR0FBR04sMkRBQUEsQ0FBb0IsQ0FBQ0EseURBQUEsQ0FBa0JBLDJEQUFsQixDQUFELEVBQXVDQSwyREFBdkMsQ0FBcEIsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uNjYyYTcyMDRjMjhiYzE3OTE1YzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBidXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLCBQcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoaWxkcmVuU2hhcGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksIFByb3BUeXBlcy5lbGVtZW50XSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=