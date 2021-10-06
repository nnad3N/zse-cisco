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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utils/media */ "./utils/media.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\strapi\\seo.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Seo = function Seo(_ref) {
  var seo = _ref.seo;
  var metaTitle = seo.metaTitle,
      metaDescription = seo.metaDescription,
      sharedImage = seo.sharedImage; // Prevent errors if no metadata was set

  if (!seo) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
    title: metaTitle,
    description: metaDescription,
    openGraph: _objectSpread({
      // Title and description are mandatory
      title: metaTitle,
      description: metaDescription
    }, sharedImage && {
      images: Object.values(sharedImage.formats).map(function (image) {
        return {
          url: (0,_utils_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(image),
          width: image.width,
          height: image.height
        };
      })
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = Seo;
Seo.propTypes = {
  seo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    metaTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    metaDescription: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    shareImage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  })
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJhcGkvc2VvLmpzIl0sIm5hbWVzIjpbIlNlbyIsInNlbyIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsInNoYXJlZEltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIk9iamVjdCIsInZhbHVlcyIsImZvcm1hdHMiLCJtYXAiLCJpbWFnZSIsInVybCIsImdldFN0cmFwaU1lZGlhIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFyZUltYWdlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWE7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFBQSxNQUNmQyxTQURlLEdBQzZCRCxHQUQ3QixDQUNmQyxTQURlO0FBQUEsTUFDSkMsZUFESSxHQUM2QkYsR0FEN0IsQ0FDSkUsZUFESTtBQUFBLE1BQ2FDLFdBRGIsR0FDNkJILEdBRDdCLENBQ2FHLFdBRGIsRUFHdkI7O0FBQ0EsTUFBSSxDQUFDSCxHQUFMLEVBQVUsT0FBTyxJQUFQO0FBRVYsc0JBQ0UsOERBQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUVDLFNBRFQ7QUFFRSxlQUFXLEVBQUVDLGVBRmY7QUFHRSxhQUFTO0FBQ1A7QUFDQUUsV0FBSyxFQUFFSCxTQUZBO0FBR1BJLGlCQUFXLEVBQUVIO0FBSE4sT0FNSEMsV0FBVyxJQUFJO0FBQ2pCRyxZQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxXQUFXLENBQUNNLE9BQTFCLEVBQW1DQyxHQUFuQyxDQUF1QyxVQUFDQyxLQUFELEVBQVc7QUFDeEQsZUFBTztBQUNMQyxhQUFHLEVBQUVDLDREQUFjLENBQUNGLEtBQUQsQ0FEZDtBQUVMRyxlQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FGUjtBQUdMQyxnQkFBTSxFQUFFSixLQUFLLENBQUNJO0FBSFQsU0FBUDtBQUtELE9BTk87QUFEUyxLQU5aO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBNUJEOztLQUFNaEIsRztBQThCTkEsR0FBRyxDQUFDaUIsU0FBSixHQUFnQjtBQUNkaEIsS0FBRyxFQUFFaUIsdURBQUEsQ0FBZ0I7QUFDbkJoQixhQUFTLEVBQUVnQiwwREFEUTtBQUVuQmYsbUJBQWUsRUFBRWUsMERBRkU7QUFHbkJDLGNBQVUsRUFBRUQsMERBQWdCRTtBQUhULEdBQWhCO0FBRFMsQ0FBaEI7QUFRQSwrREFBZXBCLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uZjdjMDIyNDFlM2NhMGMyNjdjN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSAnL3V0aWxzL21lZGlhJztcclxuXHJcbmNvbnN0IFNlbyA9ICh7IHNlbyB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZXRhVGl0bGUsIG1ldGFEZXNjcmlwdGlvbiwgc2hhcmVkSW1hZ2UgfSA9IHNlbztcclxuXHJcbiAgLy8gUHJldmVudCBlcnJvcnMgaWYgbm8gbWV0YWRhdGEgd2FzIHNldFxyXG4gIGlmICghc2VvKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0U2VvXHJcbiAgICAgIHRpdGxlPXttZXRhVGl0bGV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIC8vIFRpdGxlIGFuZCBkZXNjcmlwdGlvbiBhcmUgbWFuZGF0b3J5XHJcbiAgICAgICAgdGl0bGU6IG1ldGFUaXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWV0YURlc2NyaXB0aW9uLFxyXG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBPRyBpbWFnZSBpZiB3ZSBoYXZlIGl0XHJcbiAgICAgICAgLy8gQ2FyZWZ1bDogaWYgeW91IGRpc2FibGUgaW1hZ2Ugb3B0aW1pemF0aW9uIGluIFN0cmFwaSwgdGhpcyB3aWxsIGJyZWFrXHJcbiAgICAgICAgLi4uKHNoYXJlZEltYWdlICYmIHtcclxuICAgICAgICAgIGltYWdlczogT2JqZWN0LnZhbHVlcyhzaGFyZWRJbWFnZS5mb3JtYXRzKS5tYXAoKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdXJsOiBnZXRTdHJhcGlNZWRpYShpbWFnZSksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5TZW8ucHJvcFR5cGVzID0ge1xyXG4gIHNlbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIG1ldGFUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1ldGFEZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNoYXJlSW1hZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=