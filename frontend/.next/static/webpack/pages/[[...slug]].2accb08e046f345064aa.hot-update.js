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
  var seo = _ref.seo;
  // Prevent errors if no metadata was set
  if (!seo) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: _objectSpread({
      // Title and description are mandatory
      title: seo.metaTitle,
      description: seo.metaDescription
    }, seo.shareImage && {
      images: Object.values(seo.shareImage.formats).map(function (image) {
        return {
          url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_3__.getStrapiMedia)(image),
          width: image.width,
          height: image.height
        };
      })
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJhcGkvc2VvLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwibmFtZXMiOlsiU2VvIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNoYXJlSW1hZ2UiLCJpbWFnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JtYXRzIiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJnZXRTdHJhcGlNZWRpYSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBYTtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUN2QjtBQUNBLE1BQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sSUFBUDtBQUVWLHNCQUNFLDhEQUFDLDZDQUFEO0FBQ0UsU0FBSyxFQUFFQSxHQUFHLENBQUNDLFNBRGI7QUFFRSxlQUFXLEVBQUVELEdBQUcsQ0FBQ0UsZUFGbkI7QUFHRSxhQUFTO0FBQ1A7QUFDQUMsV0FBSyxFQUFFSCxHQUFHLENBQUNDLFNBRko7QUFHUEcsaUJBQVcsRUFBRUosR0FBRyxDQUFDRTtBQUhWLE9BTUhGLEdBQUcsQ0FBQ0ssVUFBSixJQUFrQjtBQUNwQkMsWUFBTSxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1IsR0FBRyxDQUFDSyxVQUFKLENBQWVJLE9BQTdCLEVBQXNDQyxHQUF0QyxDQUEwQyxVQUFDQyxLQUFELEVBQVc7QUFDM0QsZUFBTztBQUNMQyxhQUFHLEVBQUVDLDREQUFjLENBQUNGLEtBQUQsQ0FEZDtBQUVMRyxlQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FGUjtBQUdMQyxnQkFBTSxFQUFFSixLQUFLLENBQUNJO0FBSFQsU0FBUDtBQUtELE9BTk87QUFEWSxLQU5mO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBMUJEOztLQUFNaEIsRztBQTRCTiwrREFBZUEsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4yYWNjYjA4ZTA0NmYzNDUwNjRhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcvdXRpbHMvbWVkaWEnO1xyXG5cclxuY29uc3QgU2VvID0gKHsgc2VvIH0pID0+IHtcclxuICAvLyBQcmV2ZW50IGVycm9ycyBpZiBubyBtZXRhZGF0YSB3YXMgc2V0XHJcbiAgaWYgKCFzZW8pIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRTZW9cclxuICAgICAgdGl0bGU9e3Nlby5tZXRhVGl0bGV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtzZW8ubWV0YURlc2NyaXB0aW9ufVxyXG4gICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAvLyBUaXRsZSBhbmQgZGVzY3JpcHRpb24gYXJlIG1hbmRhdG9yeVxyXG4gICAgICAgIHRpdGxlOiBzZW8ubWV0YVRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZW8ubWV0YURlc2NyaXB0aW9uLFxyXG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBPRyBpbWFnZSBpZiB3ZSBoYXZlIGl0XHJcbiAgICAgICAgLy8gQ2FyZWZ1bDogaWYgeW91IGRpc2FibGUgaW1hZ2Ugb3B0aW1pemF0aW9uIGluIFN0cmFwaSwgdGhpcyB3aWxsIGJyZWFrXHJcbiAgICAgICAgLi4uKHNlby5zaGFyZUltYWdlICYmIHtcclxuICAgICAgICAgIGltYWdlczogT2JqZWN0LnZhbHVlcyhzZW8uc2hhcmVJbWFnZS5mb3JtYXRzKS5tYXAoKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdXJsOiBnZXRTdHJhcGlNZWRpYShpbWFnZSksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW87XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSJdLCJzb3VyY2VSb290IjoiIn0=