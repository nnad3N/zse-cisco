self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/organisms/NavBar/NavBar.js":
/*!***********************************************!*\
  !*** ./components/organisms/NavBar/NavBar.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_useLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/useLoading */ "./utils/useLoading.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _NavBar_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar.styles */ "./components/organisms/NavBar/NavBar.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\NavBar\\NavBar.js",
    _this = undefined,
    _s = $RefreshSig$();








var NavBar = function NavBar(_ref) {
  _s();

  var logo = _ref.logo,
      menuImage = _ref.menuImage,
      setIsNavOpen = _ref.setIsNavOpen;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var isLoading = (0,utils_useLoading__WEBPACK_IMPORTED_MODULE_4__.default)(router);
  console.log(isLoading);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_6__.Header, {
    id: "navbar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_6__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_5__.default, {
        image: logo,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_6__.MenuImage, {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_5__.default, {
        image: menuImage,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "vy8lbkhmhIRFNcZFARblmNXIoJQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, utils_useLoading__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = NavBar;
NavBar.propTypes = {
  logo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  menuImage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJsb2dvIiwibWVudUltYWdlIiwic2V0SXNOYXZPcGVuIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNMb2FkaW5nIiwidXNlTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ0MsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDcEQsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MseURBQVUsQ0FBQ0gsTUFBRCxDQUE1QjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQVEsTUFBRSxFQUFDLFFBQVg7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQU8sYUFBSyxFQUFFTCxJQUFkO0FBQW9CLGdCQUFRO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQyxxREFBRDtBQUFXLGFBQU8sRUFBRTtBQUFBLGVBQU1FLFlBQVksQ0FBQyxVQUFDTyxLQUFEO0FBQUEsaUJBQVcsQ0FBQ0EsS0FBWjtBQUFBLFNBQUQsQ0FBbEI7QUFBQSxPQUFwQjtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQU8sYUFBSyxFQUFFUixTQUFkO0FBQXlCLGdCQUFRO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQWZEOztHQUFNRixNO1VBQ1dLLGtELEVBQ0dFLHFEOzs7S0FGZFAsTTtBQWlCTkEsTUFBTSxDQUFDVyxTQUFQLEdBQW1CO0FBQ2pCVixNQUFJLEVBQUVXLDBEQURXO0FBRWpCVixXQUFTLEVBQUVVLDBEQUZNO0FBR2pCVCxjQUFZLEVBQUVTLHdEQUFjQztBQUhYLENBQW5CO0FBTUEsK0RBQWViLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uNDQ0ZTk3YWZhMGI5Yjg3NDliNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZUxvYWRpbmcgZnJvbSAndXRpbHMvdXNlTG9hZGluZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdAYXRvbXMvSW1hZ2UvSW1hZ2UnO1xyXG5pbXBvcnQgeyBIZWFkZXIsIExvZ28sIE1lbnVJbWFnZSB9IGZyb20gJy4vTmF2QmFyLnN0eWxlcyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBsb2dvLCBtZW51SW1hZ2UsIHNldElzTmF2T3BlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlTG9hZGluZyhyb3V0ZXIpO1xyXG4gIGNvbnNvbGUubG9nKGlzTG9hZGluZyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIGlkPVwibmF2YmFyXCI+XHJcbiAgICAgIDxMb2dvPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gcHJpb3JpdHkgLz5cclxuICAgICAgPC9Mb2dvPlxyXG4gICAgICA8TWVudUltYWdlIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bWVudUltYWdlfSBwcmlvcml0eSAvPlxyXG4gICAgICA8L01lbnVJbWFnZT5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGxvZ286IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbWVudUltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=