self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/atoms/Image/Image.js":
/*!*****************************************!*\
  !*** ./components/atoms/Image/Image.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image.styles */ "./components/atoms/Image/Image.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\Image\\Image.js",
    _this = undefined;





var Image = function Image(_ref) {
  var image = _ref.image,
      priority = _ref.priority;
  var url = image.url,
      alternativeText = image.alternativeText,
      width = image.width,
      height = image.height;

  var loader = function loader() {
    return (0,utils_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_3__.NextImageWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styles__WEBPACK_IMPORTED_MODULE_3__.StyledNextImage, {
      priority: priority,
      loader: loader,
      layout: "responsive",
      width: width,
      height: height,
      src: url,
      alt: alternativeText || 'image'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Image;
Image.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    alternativeText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
  }),
  priority: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Image.defaultProps = {
  image: {
    url: 'https://images.pexels.com/photos/897817/pexels-pho…jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

var _c;

$RefreshReg$(_c, "Image");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwicHJpb3JpdHkiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRlciIsImdldFN0cmFwaU1lZGlhIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF5QjtBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFBQSxNQUM3QkMsR0FENkIsR0FDV0YsS0FEWCxDQUM3QkUsR0FENkI7QUFBQSxNQUN4QkMsZUFEd0IsR0FDV0gsS0FEWCxDQUN4QkcsZUFEd0I7QUFBQSxNQUNQQyxLQURPLEdBQ1dKLEtBRFgsQ0FDUEksS0FETztBQUFBLE1BQ0FDLE1BREEsR0FDV0wsS0FEWCxDQUNBSyxNQURBOztBQUdyQyxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFdBQU9DLDJEQUFjLENBQUNQLEtBQUQsQ0FBckI7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFDRSxjQUFRLEVBQUVDLFFBRFo7QUFFRSxZQUFNLEVBQUVLLE1BRlY7QUFHRSxZQUFNLEVBQUMsWUFIVDtBQUlFLFdBQUssRUFBRUYsS0FKVDtBQUtFLFlBQU0sRUFBRUMsTUFMVjtBQU1FLFNBQUcsRUFBRUgsR0FOUDtBQU9FLFNBQUcsRUFBRUMsZUFBZSxJQUFJO0FBUDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQXBCRDs7S0FBTUosSztBQXNCTkEsS0FBSyxDQUFDUyxTQUFOLEdBQWtCO0FBQ2hCUixPQUFLLEVBQUVTLHVEQUFBLENBQWdCO0FBQ3JCUCxPQUFHLEVBQUVPLHFFQURnQjtBQUVyQk4sbUJBQWUsRUFBRU0scUVBRkk7QUFHckJMLFNBQUssRUFBRUssMERBSGM7QUFJckJKLFVBQU0sRUFBRUksMERBQWdCQztBQUpILEdBQWhCLENBRFM7QUFPaEJULFVBQVEsRUFBRVEsd0RBQWNFO0FBUFIsQ0FBbEI7QUFVQVosS0FBSyxDQUFDYSxZQUFOLEdBQXFCO0FBQ25CWixPQUFLLEVBQUU7QUFDTEUsT0FBRyxFQUFFO0FBREE7QUFEWSxDQUFyQjtBQU1BLCtEQUFlSCxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjdiOWFkYmE2MGE0ZDJkZDFlZWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJ3V0aWxzL21lZGlhJztcclxuaW1wb3J0IHsgTmV4dEltYWdlV3JhcHBlciwgU3R5bGVkTmV4dEltYWdlIH0gZnJvbSAnLi9JbWFnZS5zdHlsZXMnO1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSwgcHJpb3JpdHkgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlO1xyXG5cclxuICBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dEltYWdlV3JhcHBlcj5cclxuICAgICAgPFN0eWxlZE5leHRJbWFnZVxyXG4gICAgICAgIHByaW9yaXR5PXtwcmlvcml0eX1cclxuICAgICAgICBsb2FkZXI9e2xvYWRlcn1cclxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgc3JjPXt1cmx9XHJcbiAgICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgJ2ltYWdlJ31cclxuICAgICAgLz5cclxuICAgIDwvTmV4dEltYWdlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBhbHRlcm5hdGl2ZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIH0pLFxyXG4gIHByaW9yaXR5OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbWFnZToge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvODk3ODE3L3BleGVscy1waG/igKZqcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=