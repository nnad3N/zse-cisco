self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./pages/[[...slug]].js":
/*!******************************!*\
  !*** ./pages/[[...slug]].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/templates/Layout */ "./components/templates/Layout.js");
/* harmony import */ var components_strapi_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/strapi/seo */ "./components/strapi/seo.js");
/* harmony import */ var components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/strapi/sections */ "./components/strapi/sections.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\[[...slug]].js",
    _this = undefined;







var DynamicPage = function DynamicPage(_ref) {
  var sections = _ref.sections,
      navigation = _ref.navigation,
      footer = _ref.footer,
      seo = _ref.seo,
      isLoading = _ref.isLoading;

  if (!(sections !== null && sections !== void 0 && sections.length)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_5___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    navigation: navigation,
    footer: footer,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_strapi_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_strapi_sections__WEBPACK_IMPORTED_MODULE_4__.default, {
      sections: sections,
      isLoading: isLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = DynamicPage;
DynamicPage.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  navigation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  seo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (DynamicPage);

var _c;

$RefreshReg$(_c, "DynamicPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW1suLi5zbHVnXV0uanMiXSwibmFtZXMiOlsiRHluYW1pY1BhZ2UiLCJzZWN0aW9ucyIsIm5hdmlnYXRpb24iLCJmb290ZXIiLCJzZW8iLCJpc0xvYWRpbmciLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNEO0FBQUEsTUFBbkRDLFFBQW1ELFFBQW5EQSxRQUFtRDtBQUFBLE1BQXpDQyxVQUF5QyxRQUF6Q0EsVUFBeUM7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLEdBQXFCLFFBQXJCQSxHQUFxQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQ3hFLE1BQUksRUFBQ0osUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRUssTUFBWCxDQUFKLEVBQXVCO0FBQ3JCLHdCQUFPLDhEQUFDLG1EQUFEO0FBQVcsZ0JBQVUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFDRSw4REFBQyxnRUFBRDtBQUFRLGNBQVUsRUFBRUosVUFBcEI7QUFBZ0MsVUFBTSxFQUFFQyxNQUF4QztBQUFBLDRCQUNFLDhEQUFDLDBEQUFEO0FBQUssU0FBRyxFQUFFQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLCtEQUFEO0FBQVUsY0FBUSxFQUFFSCxRQUFwQjtBQUE4QixlQUFTLEVBQUVJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBWEQ7O0tBQU1MLFc7QUFhTkEsV0FBVyxDQUFDTyxTQUFaLEdBQXdCO0FBQ3RCTixVQUFRLEVBQUVPLHlEQUFBLENBQWtCQSwwREFBbEIsQ0FEWTtBQUV0Qk4sWUFBVSxFQUFFTSwwREFGVTtBQUd0QkosS0FBRyxFQUFFSSwwREFBZ0JDO0FBSEMsQ0FBeEI7O0FBMkNBLCtEQUFlVCxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmRmZDEzOWYxN2FkZTc0ZTc4YjY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJ3V0aWxzL2FwaSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0JztcclxuaW1wb3J0IFNlbyBmcm9tICdjb21wb25lbnRzL3N0cmFwaS9zZW8nO1xyXG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnY29tcG9uZW50cy9zdHJhcGkvc2VjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gJ3V0aWxzL2dldFBhZ2VEYXRhJztcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJztcclxuXHJcbmNvbnN0IER5bmFtaWNQYWdlID0gKHsgc2VjdGlvbnMsIG5hdmlnYXRpb24sIGZvb3Rlciwgc2VvLCBpc0xvYWRpbmcgfSkgPT4ge1xyXG4gIGlmICghc2VjdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IG5hdmlnYXRpb249e25hdmlnYXRpb259IGZvb3Rlcj17Zm9vdGVyfT5cclxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cclxuICAgICAgPFNlY3Rpb25zIHNlY3Rpb25zPXtzZWN0aW9uc30gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuRHluYW1pY1BhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICBuYXZpZ2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlbzogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYWdlcyA9IGF3YWl0IGZldGNoQVBJKCcvcGFnZXMnKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwYWdlcy5tYXAoKHBhZ2UpID0+IHtcclxuICAgIC8vIERlY29tcG9zZSB0aGUgc2x1ZyB0aGF0IHdhcyBzYXZlZCBpbiBTdHJhcGlcclxuICAgIGNvbnN0IHNsdWdBcnJheSA9ICFwYWdlLnNsdWcgPyBmYWxzZSA6IHBhZ2Uuc2x1Zy5zcGxpdCgnLycpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnOiBzbHVnQXJyYXkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGEoeyBzbHVnOiAhcGFyYW1zLnNsdWcgPyBbJyddIDogcGFyYW1zLnNsdWcgfSk7XHJcbiAgY29uc3QgbmF2aWdhdGlvbiA9IGF3YWl0IGZldGNoQVBJKCcvbmF2aWdhdGlvbicpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGF3YWl0IGZldGNoQVBJKCcvZm9vdGVyJyk7XHJcblxyXG4gIGlmIChwYWdlRGF0YSA9PSBudWxsKSB7XHJcbiAgICAvLyBHaXZpbmcgdGhlIHBhZ2Ugbm8gcHJvcHMgd2lsbCB0cmlnZ2VyIGEgNDA0IHBhZ2VcclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb250ZW50LCBzZW8gfSA9IHBhZ2VEYXRhO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VjdGlvbnM6IGNvbnRlbnQsXHJcbiAgICAgIHNlbyxcclxuICAgICAgbmF2aWdhdGlvbixcclxuICAgICAgZm9vdGVyLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==