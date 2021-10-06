self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/HeroCourses/HeroCourses.js":
/*!********************************************************!*\
  !*** ./components/sections/HeroCourses/HeroCourses.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_HeroCourseComponent_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @molecules/HeroCourseComponent/HeroCourseComponent */ "./components/molecules/HeroCourseComponent/HeroCourseComponent.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _HeroCourses_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroCourses.styles */ "./components/sections/HeroCourses/HeroCourses.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections\\HeroCourses\\HeroCourses.js",
    _this = undefined;







var HeroCourses = function HeroCourses(_ref) {
  var _ref$data = _ref.data,
      title = _ref$data.title,
      course = _ref$data.course,
      arrowImage = _ref$data.arrowImage;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourses_styles__WEBPACK_IMPORTED_MODULE_5__.HeroCourseWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_4__.default, {
      large: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourses_styles__WEBPACK_IMPORTED_MODULE_5__.ContentWrapper, {
      children: course.map(function (courseData) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_HeroCourseComponent_HeroCourseComponent__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: courseData,
          image: arrowImage
        }, courseData.id, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = HeroCourses;
HeroCourses.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    arrowImage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    course: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (HeroCourses);

var _c;

$RefreshReg$(_c, "HeroCourses");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvQ291cnNlcy9IZXJvQ291cnNlcy5qcyJdLCJuYW1lcyI6WyJIZXJvQ291cnNlcyIsImRhdGEiLCJ0aXRsZSIsImNvdXJzZSIsImFycm93SW1hZ2UiLCJtYXAiLCJjb3Vyc2VEYXRhIiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTZDO0FBQUEsdUJBQTFDQyxJQUEwQztBQUFBLE1BQWxDQyxLQUFrQyxhQUFsQ0EsS0FBa0M7QUFBQSxNQUEzQkMsTUFBMkIsYUFBM0JBLE1BQTJCO0FBQUEsTUFBbkJDLFVBQW1CLGFBQW5CQSxVQUFtQjtBQUMvRCxzQkFDRSw4REFBQyxrRUFBRDtBQUFBLDRCQUNFLDhEQUFDLHlFQUFEO0FBQWdCLFdBQUssTUFBckI7QUFBQSw2QkFDRTtBQUFBLGtCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQywrREFBRDtBQUFBLGdCQUNHQyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxVQUFEO0FBQUEsNEJBQ1YsOERBQUMsdUZBQUQ7QUFBeUMsY0FBSSxFQUFFQSxVQUEvQztBQUEyRCxlQUFLLEVBQUVGO0FBQWxFLFdBQTBCRSxVQUFVLENBQUNDLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FiRDs7S0FBTVAsVztBQWVOQSxXQUFXLENBQUNRLFNBQVosR0FBd0I7QUFDdEJQLE1BQUksRUFBRVEsdURBQUEsQ0FBZ0I7QUFDcEJMLGNBQVUsRUFBRUssMERBRFE7QUFFcEJOLFVBQU0sRUFBRU0sb0VBRlk7QUFHcEJGLE1BQUUsRUFBRUUsMERBSGdCO0FBSXBCUCxTQUFLLEVBQUVPLDBEQUFnQkM7QUFKSCxHQUFoQjtBQURnQixDQUF4QjtBQVNBLCtEQUFlVixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjhmOWI5NDdkNzRjZDlmMDQ2N2Y4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVyb0NvdXJzZUNvbXBvbmVudCBmcm9tICdAbW9sZWN1bGVzL0hlcm9Db3Vyc2VDb21wb25lbnQvSGVyb0NvdXJzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBMaW5lSG9yaXpvbnRhbCBmcm9tICdAYXRvbXMvTGluZUhvcml6b250YWwvTGluZUhvcml6b250YWwnO1xyXG5pbXBvcnQgeyBIZXJvQ291cnNlV3JhcHBlciwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL0hlcm9Db3Vyc2VzLnN0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvQ291cnNlcyA9ICh7IGRhdGE6IHsgdGl0bGUsIGNvdXJzZSwgYXJyb3dJbWFnZSB9IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9Db3Vyc2VXcmFwcGVyPlxyXG4gICAgICA8TGluZUhvcml6b250YWwgbGFyZ2U+XHJcbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICA8L0xpbmVIb3Jpem9udGFsPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAge2NvdXJzZS5tYXAoKGNvdXJzZURhdGEpID0+IChcclxuICAgICAgICAgIDxIZXJvQ291cnNlQ29tcG9uZW50IGtleT17Y291cnNlRGF0YS5pZH0gZGF0YT17Y291cnNlRGF0YX0gaW1hZ2U9e2Fycm93SW1hZ2V9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L0hlcm9Db3Vyc2VXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQ291cnNlcy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGFycm93SW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb3Vyc2U6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9Db3Vyc2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9