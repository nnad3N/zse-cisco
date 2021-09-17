self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./components/sections.js":
/*!********************************!*\
  !*** ./components/sections.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sections_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/Text */ "./components/sections/Text.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\sections.js",
    _this = undefined;


 // Map Strapi sections to section components

var sectionComponents = {
  'sections.text': _components_sections_Text__WEBPACK_IMPORTED_MODULE_2__.default
}; // Display a section individually

var Section = function Section(_ref) {
  var sectionData = _ref.sectionData;
  // Prepare the component
  var Content = sectionComponents[sectionData.__component];

  if (!Content) {
    return null;
  } // Display the section


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {
    data: sectionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, _this);
}; // Display the list of sections


_c = Section;

var Sections = function Sections(_ref2) {
  var sections = _ref2.sections;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col",
    children: sections.map(function (section) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
        sectionData: section
      }, "".concat(section.__component).concat(section.id), false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_c2 = Sections;
/* harmony default export */ __webpack_exports__["default"] = (Sections);

var _c, _c2;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "Sections");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uQ29tcG9uZW50cyIsIlRleHQiLCJTZWN0aW9uIiwic2VjdGlvbkRhdGEiLCJDb250ZW50IiwiX19jb21wb25lbnQiLCJTZWN0aW9ucyIsInNlY3Rpb25zIiwibWFwIiwic2VjdGlvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3hCLG1CQUFpQkMsOERBQUlBO0FBREcsQ0FBMUIsQyxDQUlBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNuQztBQUNBLE1BQU1DLE9BQU8sR0FBR0osaUJBQWlCLENBQUNHLFdBQVcsQ0FBQ0UsV0FBYixDQUFqQzs7QUFFQSxNQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNELEdBTmtDLENBUW5DOzs7QUFDQSxzQkFBTyw4REFBQyxPQUFEO0FBQVMsUUFBSSxFQUFFRDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBVkQsQyxDQVlBOzs7S0FaTUQsTzs7QUFhTixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUFrQjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNqQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsY0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDBCQUNaLDhEQUFDLE9BQUQ7QUFBUyxtQkFBVyxFQUFFQTtBQUF0QixtQkFBdUNBLE9BQU8sQ0FBQ0osV0FBL0MsU0FBNkRJLE9BQU8sQ0FBQ0MsRUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O01BQU1KLFE7QUFVTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2x1Z10uNGYxY2Q5YTg3OThlZmM5OTA5MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9UZXh0JztcclxuXHJcbi8vIE1hcCBTdHJhcGkgc2VjdGlvbnMgdG8gc2VjdGlvbiBjb21wb25lbnRzXHJcbmNvbnN0IHNlY3Rpb25Db21wb25lbnRzID0ge1xyXG4gICdzZWN0aW9ucy50ZXh0JzogVGV4dCxcclxufTtcclxuXHJcbi8vIERpc3BsYXkgYSBzZWN0aW9uIGluZGl2aWR1YWxseVxyXG5jb25zdCBTZWN0aW9uID0gKHsgc2VjdGlvbkRhdGEgfSkgPT4ge1xyXG4gIC8vIFByZXBhcmUgdGhlIGNvbXBvbmVudFxyXG4gIGNvbnN0IENvbnRlbnQgPSBzZWN0aW9uQ29tcG9uZW50c1tzZWN0aW9uRGF0YS5fX2NvbXBvbmVudF07XHJcblxyXG4gIGlmICghQ29udGVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBEaXNwbGF5IHRoZSBzZWN0aW9uXHJcbiAgcmV0dXJuIDxDb250ZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPjtcclxufTtcclxuXHJcbi8vIERpc3BsYXkgdGhlIGxpc3Qgb2Ygc2VjdGlvbnNcclxuY29uc3QgU2VjdGlvbnMgPSAoeyBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgPFNlY3Rpb24gc2VjdGlvbkRhdGE9e3NlY3Rpb259IGtleT17YCR7c2VjdGlvbi5fX2NvbXBvbmVudH0ke3NlY3Rpb24uaWR9YH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=