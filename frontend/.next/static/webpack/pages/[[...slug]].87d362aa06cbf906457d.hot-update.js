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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: sections.map(function (section) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {
        sectionData: section
      }, "".concat(section.__component).concat(section.id), false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMuanMiXSwibmFtZXMiOlsic2VjdGlvbkNvbXBvbmVudHMiLCJIZXJvIiwiSGVyb0luc3RydWN0b3JzIiwiSGVyb0NvdXJzZXMiLCJIZXJvUHJpY2luZyIsIkhlcm9BY2FkZW15IiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiU2VjdGlvbkNvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiU2VjdGlvbnMiLCJzZWN0aW9ucyIsIm1hcCIsInNlY3Rpb24iLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3hCLG1CQUFpQkMsd0RBRE87QUFFeEIsK0JBQTZCQyw4RUFGTDtBQUd4QiwyQkFBeUJDLHNFQUhEO0FBSXhCLDJCQUF5QkMsc0VBSkQ7QUFLeEIsMkJBQXlCQyxzRUFBV0E7QUFMWixDQUExQixDLENBUUE7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ25DO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdSLGlCQUFpQixDQUFDTyxXQUFXLENBQUNFLFdBQWIsQ0FBMUM7O0FBRUEsTUFBSSxDQUFDRCxnQkFBTCxFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRCxHQU5rQyxDQVFuQzs7O0FBQ0Esc0JBQU8sOERBQUMsZ0JBQUQ7QUFBa0IsUUFBSSxFQUFFRDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQVZELEMsQ0FZQTs7O0tBWk1ELE87O0FBYU4sSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBa0I7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDakMsc0JBQ0U7QUFBQSxjQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsMEJBQ1osOERBQUMsT0FBRDtBQUFTLG1CQUFXLEVBQUVBO0FBQXRCLG1CQUF1Q0EsT0FBTyxDQUFDSixXQUEvQyxTQUE2REksT0FBTyxDQUFDQyxFQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiO0FBREgsbUJBREY7QUFPRCxDQVJEOztNQUFNSixRO0FBVU5KLE9BQU8sQ0FBQ1MsU0FBUixHQUFvQjtBQUNsQlIsYUFBVyxFQUFFUywwREFBZ0JDO0FBRFgsQ0FBcEI7QUFJQVAsUUFBUSxDQUFDSyxTQUFULEdBQXFCO0FBQ25CSixVQUFRLEVBQUVLLHlEQUFBLENBQWtCQSwwREFBbEIsRUFBb0NFO0FBRDNCLENBQXJCO0FBSUEsK0RBQWVSLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uODdkMzYyYWEwNmNiZjkwNjQ1N2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZXJvIGZyb20gJ0BzZWN0aW9ucy9IZXJvL0hlcm8nO1xyXG5pbXBvcnQgSGVyb0luc3RydWN0b3JzIGZyb20gJ0BzZWN0aW9ucy9IZXJvSW5zdHJ1Y3RvcnMvSGVyb0luc3RydWN0b3JzJztcclxuaW1wb3J0IEhlcm9Db3Vyc2VzIGZyb20gJ0BzZWN0aW9ucy9IZXJvQ291cnNlcy9IZXJvQ291cnNlcyc7XHJcbmltcG9ydCBIZXJvUHJpY2luZyBmcm9tICdAc2VjdGlvbnMvSGVyb1ByaWNpbmcvSGVyb1ByaWNpbmcnO1xyXG5pbXBvcnQgSGVyb0FjYWRlbXkgZnJvbSAnQHNlY3Rpb25zL0hlcm9BY2FkZW15L0hlcm9BY2FkZW15JztcclxuXHJcbi8vIE1hcCBTdHJhcGkgc2VjdGlvbnMgdG8gc2VjdGlvbiBjb21wb25lbnRzXHJcbmNvbnN0IHNlY3Rpb25Db21wb25lbnRzID0ge1xyXG4gICdzZWN0aW9ucy5oZXJvJzogSGVybyxcclxuICAnc2VjdGlvbnMuaGVyby1pbnN0cnVjdG9ycyc6IEhlcm9JbnN0cnVjdG9ycyxcclxuICAnc2VjdGlvbnMuaGVyby1jb3Vyc2VzJzogSGVyb0NvdXJzZXMsXHJcbiAgJ3NlY3Rpb25zLmhlcm8tcHJpY2luZyc6IEhlcm9QcmljaW5nLFxyXG4gICdzZWN0aW9ucy5oZXJvLWFjYWRlbXknOiBIZXJvQWNhZGVteSxcclxufTtcclxuXHJcbi8vIERpc3BsYXkgYSBzZWN0aW9uIGluZGl2aWR1YWxseVxyXG5jb25zdCBTZWN0aW9uID0gKHsgc2VjdGlvbkRhdGEgfSkgPT4ge1xyXG4gIC8vIFByZXBhcmUgdGhlIGNvbXBvbmVudFxyXG4gIGNvbnN0IFNlY3Rpb25Db21wb25lbnQgPSBzZWN0aW9uQ29tcG9uZW50c1tzZWN0aW9uRGF0YS5fX2NvbXBvbmVudF07XHJcblxyXG4gIGlmICghU2VjdGlvbkNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBEaXNwbGF5IHRoZSBzZWN0aW9uXHJcbiAgcmV0dXJuIDxTZWN0aW9uQ29tcG9uZW50IGRhdGE9e3NlY3Rpb25EYXRhfSAvPjtcclxufTtcclxuXHJcbi8vIERpc3BsYXkgdGhlIGxpc3Qgb2Ygc2VjdGlvbnNcclxuY29uc3QgU2VjdGlvbnMgPSAoeyBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcclxuICAgICAgICA8U2VjdGlvbiBzZWN0aW9uRGF0YT17c2VjdGlvbn0ga2V5PXtgJHtzZWN0aW9uLl9fY29tcG9uZW50fSR7c2VjdGlvbi5pZH1gfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuICBzZWN0aW9uRGF0YTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcblNlY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9