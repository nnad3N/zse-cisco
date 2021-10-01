self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/strapi/seo.js":
/*!**********************************!*\
  !*** ./components/strapi/seo.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\seo.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Seo = function Seo(_ref) {
  var metadata = _ref.metadata;
  // Prevent errors if no metadata was set
  if (!metadata) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    openGraph: _objectSpread({
      // Title and description are mandatory
      title: metadata.metaTitle,
      description: metadata.metaDescription
    }, metadata.shareImage && {
      images: Object.values(metadata.shareImage.formats).map(function (image) {
        return {
          url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_3__.getStrapiMedia)(image),
          width: image.width,
          height: image.height
        };
      })
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Seo;
/* harmony default export */ __webpack_exports__["default"] = (Seo);

var _c;

$RefreshReg$(_c, "Seo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJhcGkvc2VvLmpzIl0sIm5hbWVzIjpbIlNlbyIsIm1ldGFkYXRhIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNoYXJlSW1hZ2UiLCJpbWFnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JtYXRzIiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJnZXRTdHJhcGlNZWRpYSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUI7QUFDQSxNQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLElBQVA7QUFFZixzQkFDRSw4REFBQyw2Q0FBRDtBQUNFLFNBQUssRUFBRUEsUUFBUSxDQUFDQyxTQURsQjtBQUVFLGVBQVcsRUFBRUQsUUFBUSxDQUFDRSxlQUZ4QjtBQUdFLGFBQVM7QUFDUDtBQUNBQyxXQUFLLEVBQUVILFFBQVEsQ0FBQ0MsU0FGVDtBQUdQRyxpQkFBVyxFQUFFSixRQUFRLENBQUNFO0FBSGYsT0FNSEYsUUFBUSxDQUFDSyxVQUFULElBQXVCO0FBQ3pCQyxZQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixRQUFRLENBQUNLLFVBQVQsQ0FBb0JJLE9BQWxDLEVBQTJDQyxHQUEzQyxDQUErQyxVQUFDQyxLQUFELEVBQVc7QUFDaEUsZUFBTztBQUNMQyxhQUFHLEVBQUVDLDREQUFjLENBQUNGLEtBQUQsQ0FEZDtBQUVMRyxlQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FGUjtBQUdMQyxnQkFBTSxFQUFFSixLQUFLLENBQUNJO0FBSFQsU0FBUDtBQUtELE9BTk87QUFEaUIsS0FOcEI7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0ExQkQ7O0tBQU1oQixHO0FBNEJOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjY1NTkxMjQ5NzhlNGY5MDg0ODkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5cclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5cclxuY29uc3QgU2VvID0gKHsgbWV0YWRhdGEgfSkgPT4ge1xyXG4gIC8vIFByZXZlbnQgZXJyb3JzIGlmIG5vIG1ldGFkYXRhIHdhcyBzZXRcclxuICBpZiAoIW1ldGFkYXRhKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0U2VvXHJcbiAgICAgIHRpdGxlPXttZXRhZGF0YS5tZXRhVGl0bGV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXttZXRhZGF0YS5tZXRhRGVzY3JpcHRpb259XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIC8vIFRpdGxlIGFuZCBkZXNjcmlwdGlvbiBhcmUgbWFuZGF0b3J5XHJcbiAgICAgICAgdGl0bGU6IG1ldGFkYXRhLm1ldGFUaXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWV0YWRhdGEubWV0YURlc2NyaXB0aW9uLFxyXG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBPRyBpbWFnZSBpZiB3ZSBoYXZlIGl0XHJcbiAgICAgICAgLy8gQ2FyZWZ1bDogaWYgeW91IGRpc2FibGUgaW1hZ2Ugb3B0aW1pemF0aW9uIGluIFN0cmFwaSwgdGhpcyB3aWxsIGJyZWFrXHJcbiAgICAgICAgLi4uKG1ldGFkYXRhLnNoYXJlSW1hZ2UgJiYge1xyXG4gICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKG1ldGFkYXRhLnNoYXJlSW1hZ2UuZm9ybWF0cykubWFwKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHVybDogZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9