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
  var isLoading = (0,utils_useLoading__WEBPACK_IMPORTED_MODULE_4__.default)();
  console.log((0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)());
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log(isLoading);
  }, [isLoading]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_6__.Header, {
    id: "navbar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_6__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_5__.default, {
        image: logo,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "U3baPDu75NLVpX9Gsv0Jnjl21OE=", false, function () {
  return [utils_useLoading__WEBPACK_IMPORTED_MODULE_4__.default, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJsb2dvIiwibWVudUltYWdlIiwic2V0SXNOYXZPcGVuIiwiaXNMb2FkaW5nIiwidXNlTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJzdGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUNwRCxNQUFNQyxTQUFTLEdBQUdDLHlEQUFVLEVBQTVCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxzREFBUyxFQUFyQjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEgsV0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsU0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyxrREFBRDtBQUFRLE1BQUUsRUFBQyxRQUFYO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQ7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFPLGFBQUssRUFBRUgsSUFBZDtBQUFvQixnQkFBUTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMscURBQUQ7QUFBVyxhQUFPLEVBQUU7QUFBQSxlQUFNRSxZQUFZLENBQUMsVUFBQ08sS0FBRDtBQUFBLGlCQUFXLENBQUNBLEtBQVo7QUFBQSxTQUFELENBQWxCO0FBQUEsT0FBcEI7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFPLGFBQUssRUFBRVIsU0FBZDtBQUF5QixnQkFBUTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FuQkQ7O0dBQU1GLE07VUFDY0sscUQsRUFFTkcsa0Q7OztLQUhSUixNO0FBcUJOQSxNQUFNLENBQUNXLFNBQVAsR0FBbUI7QUFDakJWLE1BQUksRUFBRVcsMERBRFc7QUFFakJWLFdBQVMsRUFBRVUsMERBRk07QUFHakJULGNBQVksRUFBRVMsd0RBQWNDO0FBSFgsQ0FBbkI7QUFNQSwrREFBZWIsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS44YjQ3MzAzNWI1NWVhZDZlYWJhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VMb2FkaW5nIGZyb20gJ3V0aWxzL3VzZUxvYWRpbmcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVhZGVyLCBMb2dvLCBNZW51SW1hZ2UgfSBmcm9tICcuL05hdkJhci5zdHlsZXMnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKHsgbG9nbywgbWVudUltYWdlLCBzZXRJc05hdk9wZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZUxvYWRpbmcoKTtcclxuXHJcbiAgY29uc29sZS5sb2codXNlUm91dGVyKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXNMb2FkaW5nKTtcclxuICB9LCBbaXNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIGlkPVwibmF2YmFyXCI+XHJcbiAgICAgIDxMb2dvPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gcHJpb3JpdHkgLz5cclxuICAgICAgPC9Mb2dvPlxyXG4gICAgICA8TWVudUltYWdlIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bWVudUltYWdlfSBwcmlvcml0eSAvPlxyXG4gICAgICA8L01lbnVJbWFnZT5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGxvZ286IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbWVudUltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=