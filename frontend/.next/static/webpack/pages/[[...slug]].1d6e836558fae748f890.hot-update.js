self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/strapi/sections.js":
/*!***************************************!*\
  !*** ./components/strapi/sections.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sections/Hero/Hero */ "./components/sections/Hero/Hero.js");
/* harmony import */ var _sections_HeroInstructors_HeroInstructors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sections/HeroInstructors/HeroInstructors */ "./components/sections/HeroInstructors/HeroInstructors.js");
/* harmony import */ var _sections_HeroCourses_HeroCourses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sections/HeroCourses/HeroCourses */ "./components/sections/HeroCourses/HeroCourses.js");
/* harmony import */ var _sections_HeroPricing_HeroPricing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sections/HeroPricing/HeroPricing */ "./components/sections/HeroPricing/HeroPricing.js");
/* harmony import */ var _sections_HeroAcademy_HeroAcademy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sections/HeroAcademy/HeroAcademy */ "./components/sections/HeroAcademy/HeroAcademy.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\sections.js",
    _this = undefined;






 // Map Strapi sections to section components

var sectionComponents = {
  'sections.hero': _sections_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__.default,
  'sections.hero-instructors': _sections_HeroInstructors_HeroInstructors__WEBPACK_IMPORTED_MODULE_3__.default,
  'sections.hero-courses': _sections_HeroCourses_HeroCourses__WEBPACK_IMPORTED_MODULE_4__.default,
  'sections.hero-pricing': _sections_HeroPricing_HeroPricing__WEBPACK_IMPORTED_MODULE_5__.default,
  'sections.hero-academy': _sections_HeroAcademy_HeroAcademy__WEBPACK_IMPORTED_MODULE_6__.default
}; // Display a section individually

var Section = function Section(_ref) {
  var sectionData = _ref.sectionData;
  // Prepare the component
  var SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  } // Display the section


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionComponent, {
    data: sectionData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, _this);
}; // Display the list of sections


_c = Section;

var Sections = function Sections(_ref2) {
  var sections = _ref2.sections;
  console.log(sections);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: sections.map(function (section) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
        sectionData: section
      }, "".concat(section.__component).concat(section.id), false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false);
};

_c2 = Sections;
Section.propTypes = {
  sectionData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
Sections.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMuanMiXSwibmFtZXMiOlsic2VjdGlvbkNvbXBvbmVudHMiLCJIZXJvIiwiSGVyb0luc3RydWN0b3JzIiwiSGVyb0NvdXJzZXMiLCJIZXJvUHJpY2luZyIsIkhlcm9BY2FkZW15IiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiU2VjdGlvbkNvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiU2VjdGlvbnMiLCJzZWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzZWN0aW9uIiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN4QixtQkFBaUJDLHdEQURPO0FBRXhCLCtCQUE2QkMsOEVBRkw7QUFHeEIsMkJBQXlCQyxzRUFIRDtBQUl4QiwyQkFBeUJDLHNFQUpEO0FBS3hCLDJCQUF5QkMsc0VBQVdBO0FBTFosQ0FBMUIsQyxDQVFBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNuQztBQUNBLE1BQU1DLGdCQUFnQixHQUFHUixpQkFBaUIsQ0FBQ08sV0FBVyxDQUFDRSxXQUFiLENBQTFDOztBQUVBLE1BQUksQ0FBQ0QsZ0JBQUwsRUFBdUI7QUFDckIsV0FBTyxJQUFQO0FBQ0QsR0FOa0MsQ0FRbkM7OztBQUNBLHNCQUFPLDhEQUFDLGdCQUFEO0FBQWtCLFFBQUksRUFBRUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FWRCxDLENBWUE7OztLQVpNRCxPOztBQWFOLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQWtCO0FBQUEsTUFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLHNCQUNFO0FBQUEsY0FDR0EsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDBCQUNaLDhEQUFDLE9BQUQ7QUFBUyxtQkFBVyxFQUFFQTtBQUF0QixtQkFBdUNBLE9BQU8sQ0FBQ04sV0FBL0MsU0FBNkRNLE9BQU8sQ0FBQ0MsRUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYjtBQURILG1CQURGO0FBT0QsQ0FURDs7TUFBTU4sUTtBQVdOSixPQUFPLENBQUNXLFNBQVIsR0FBb0I7QUFDbEJWLGFBQVcsRUFBRVcsMERBQWdCQztBQURYLENBQXBCO0FBSUFULFFBQVEsQ0FBQ08sU0FBVCxHQUFxQjtBQUNuQk4sVUFBUSxFQUFFTyx5REFBQSxDQUFrQkEsMERBQWxCLEVBQW9DRTtBQUQzQixDQUFyQjtBQUlBLCtEQUFlVixRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjFkNmU4MzY1NThmYWU3NDhmODkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVybyBmcm9tICdAc2VjdGlvbnMvSGVyby9IZXJvJztcclxuaW1wb3J0IEhlcm9JbnN0cnVjdG9ycyBmcm9tICdAc2VjdGlvbnMvSGVyb0luc3RydWN0b3JzL0hlcm9JbnN0cnVjdG9ycyc7XHJcbmltcG9ydCBIZXJvQ291cnNlcyBmcm9tICdAc2VjdGlvbnMvSGVyb0NvdXJzZXMvSGVyb0NvdXJzZXMnO1xyXG5pbXBvcnQgSGVyb1ByaWNpbmcgZnJvbSAnQHNlY3Rpb25zL0hlcm9QcmljaW5nL0hlcm9QcmljaW5nJztcclxuaW1wb3J0IEhlcm9BY2FkZW15IGZyb20gJ0BzZWN0aW9ucy9IZXJvQWNhZGVteS9IZXJvQWNhZGVteSc7XHJcblxyXG4vLyBNYXAgU3RyYXBpIHNlY3Rpb25zIHRvIHNlY3Rpb24gY29tcG9uZW50c1xyXG5jb25zdCBzZWN0aW9uQ29tcG9uZW50cyA9IHtcclxuICAnc2VjdGlvbnMuaGVybyc6IEhlcm8sXHJcbiAgJ3NlY3Rpb25zLmhlcm8taW5zdHJ1Y3RvcnMnOiBIZXJvSW5zdHJ1Y3RvcnMsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tY291cnNlcyc6IEhlcm9Db3Vyc2VzLFxyXG4gICdzZWN0aW9ucy5oZXJvLXByaWNpbmcnOiBIZXJvUHJpY2luZyxcclxuICAnc2VjdGlvbnMuaGVyby1hY2FkZW15JzogSGVyb0FjYWRlbXksXHJcbn07XHJcblxyXG4vLyBEaXNwbGF5IGEgc2VjdGlvbiBpbmRpdmlkdWFsbHlcclxuY29uc3QgU2VjdGlvbiA9ICh7IHNlY3Rpb25EYXRhIH0pID0+IHtcclxuICAvLyBQcmVwYXJlIHRoZSBjb21wb25lbnRcclxuICBjb25zdCBTZWN0aW9uQ29tcG9uZW50ID0gc2VjdGlvbkNvbXBvbmVudHNbc2VjdGlvbkRhdGEuX19jb21wb25lbnRdO1xyXG5cclxuICBpZiAoIVNlY3Rpb25Db21wb25lbnQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gRGlzcGxheSB0aGUgc2VjdGlvblxyXG4gIHJldHVybiA8U2VjdGlvbkNvbXBvbmVudCBkYXRhPXtzZWN0aW9uRGF0YX0gLz47XHJcbn07XHJcblxyXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIHNlY3Rpb25zXHJcbmNvbnN0IFNlY3Rpb25zID0gKHsgc2VjdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHNlY3Rpb25zKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgIDxTZWN0aW9uIHNlY3Rpb25EYXRhPXtzZWN0aW9ufSBrZXk9e2Ake3NlY3Rpb24uX19jb21wb25lbnR9JHtzZWN0aW9uLmlkfWB9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25EYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuU2VjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=