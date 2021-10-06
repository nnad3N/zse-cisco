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
      shareImage = seo.shareImage; // Prevent errors if no metadata was set

  if (!seo) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
    title: metaTitle,
    description: metaDescription,
    openGraph: _objectSpread({
      // Title and description are mandatory
      title: metaTitle,
      description: metaDescription
    }, shareImage && {
      images: Object.values(shareImage.formats).map(function (image) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJhcGkvc2VvLmpzIl0sIm5hbWVzIjpbIlNlbyIsInNlbyIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsInNoYXJlSW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9ybWF0cyIsIm1hcCIsImltYWdlIiwidXJsIiwiZ2V0U3RyYXBpTWVkaWEiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQUEsTUFDZkMsU0FEZSxHQUM0QkQsR0FENUIsQ0FDZkMsU0FEZTtBQUFBLE1BQ0pDLGVBREksR0FDNEJGLEdBRDVCLENBQ0pFLGVBREk7QUFBQSxNQUNhQyxVQURiLEdBQzRCSCxHQUQ1QixDQUNhRyxVQURiLEVBR3ZCOztBQUNBLE1BQUksQ0FBQ0gsR0FBTCxFQUFVLE9BQU8sSUFBUDtBQUVWLHNCQUNFLDhEQUFDLDZDQUFEO0FBQ0UsU0FBSyxFQUFFQyxTQURUO0FBRUUsZUFBVyxFQUFFQyxlQUZmO0FBR0UsYUFBUztBQUNQO0FBQ0FFLFdBQUssRUFBRUgsU0FGQTtBQUdQSSxpQkFBVyxFQUFFSDtBQUhOLE9BTUhDLFVBQVUsSUFBSTtBQUNoQkcsWUFBTSxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsVUFBVSxDQUFDTSxPQUF6QixFQUFrQ0MsR0FBbEMsQ0FBc0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZELGVBQU87QUFDTEMsYUFBRyxFQUFFQyw0REFBYyxDQUFDRixLQUFELENBRGQ7QUFFTEcsZUFBSyxFQUFFSCxLQUFLLENBQUNHLEtBRlI7QUFHTEMsZ0JBQU0sRUFBRUosS0FBSyxDQUFDSTtBQUhULFNBQVA7QUFLRCxPQU5PO0FBRFEsS0FOWDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQTVCRDs7S0FBTWhCLEc7QUE4Qk5BLEdBQUcsQ0FBQ2lCLFNBQUosR0FBZ0I7QUFDZGhCLEtBQUcsRUFBRWlCLHVEQUFBLENBQWdCO0FBQ25CaEIsYUFBUyxFQUFFZ0IsMERBRFE7QUFFbkJmLG1CQUFlLEVBQUVlLDBEQUZFO0FBR25CZCxjQUFVLEVBQUVjLDBEQUFnQkM7QUFIVCxHQUFoQjtBQURTLENBQWhCO0FBUUEsK0RBQWVuQixHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjAzNTY2ZTUzM2EyYjdlNDQ0OGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJy91dGlscy9tZWRpYSc7XHJcblxyXG5jb25zdCBTZW8gPSAoeyBzZW8gfSkgPT4ge1xyXG4gIGNvbnN0IHsgbWV0YVRpdGxlLCBtZXRhRGVzY3JpcHRpb24sIHNoYXJlSW1hZ2UgfSA9IHNlbztcclxuXHJcbiAgLy8gUHJldmVudCBlcnJvcnMgaWYgbm8gbWV0YWRhdGEgd2FzIHNldFxyXG4gIGlmICghc2VvKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0U2VvXHJcbiAgICAgIHRpdGxlPXttZXRhVGl0bGV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIC8vIFRpdGxlIGFuZCBkZXNjcmlwdGlvbiBhcmUgbWFuZGF0b3J5XHJcbiAgICAgICAgdGl0bGU6IG1ldGFUaXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWV0YURlc2NyaXB0aW9uLFxyXG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBPRyBpbWFnZSBpZiB3ZSBoYXZlIGl0XHJcbiAgICAgICAgLy8gQ2FyZWZ1bDogaWYgeW91IGRpc2FibGUgaW1hZ2Ugb3B0aW1pemF0aW9uIGluIFN0cmFwaSwgdGhpcyB3aWxsIGJyZWFrXHJcbiAgICAgICAgLi4uKHNoYXJlSW1hZ2UgJiYge1xyXG4gICAgICAgICAgaW1hZ2VzOiBPYmplY3QudmFsdWVzKHNoYXJlSW1hZ2UuZm9ybWF0cykubWFwKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHVybDogZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuU2VvLnByb3BUeXBlcyA9IHtcclxuICBzZW86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBtZXRhVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtZXRhRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzaGFyZUltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9