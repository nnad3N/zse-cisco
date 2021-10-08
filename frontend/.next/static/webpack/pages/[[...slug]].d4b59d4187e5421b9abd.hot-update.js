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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var providers_LoadingProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! providers/LoadingProvider */ "./providers/LoadingProvider.js");
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _NavBar_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar.styles */ "./components/organisms/NavBar/NavBar.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\NavBar\\NavBar.js",
    _this = undefined,
    _s = $RefreshSig$();







var Loader = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "NavBar__Loader",
  componentId: "sc-gkppti-0"
})(["height:0.2rem;width:100%;bottom:-0.2rem;left:0;background-color:", ";position:absolute;"], function (_ref) {
  var theme = _ref.theme,
      isLoading = _ref.isLoading;
  return isLoading ? 'none' : theme.colors.accentColor;
});
_c = Loader;

var NavBar = function NavBar(_ref2) {
  _s();

  var logo = _ref2.logo,
      menuImage = _ref2.menuImage,
      setIsNavOpen = _ref2.setIsNavOpen;
  var isLoading = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(providers_LoadingProvider__WEBPACK_IMPORTED_MODULE_3__.LoadingContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Header, {
    isLoading: isLoading,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {
      id: "navbar",
      isLoading: isLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: logo,
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_styles__WEBPACK_IMPORTED_MODULE_5__.MenuImage, {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_4__.default, {
        image: menuImage,
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "MGvbNXR2CzrxO/iq9BvCB9bv4n0=");

_c2 = NavBar;
NavBar.propTypes = {
  logo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  menuImage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c, _c2;

$RefreshReg$(_c, "Loader");
$RefreshReg$(_c2, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2QmFyL05hdkJhci5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJzdHlsZWQiLCJ0aGVtZSIsImlzTG9hZGluZyIsImNvbG9ycyIsImFjY2VudENvbG9yIiwiTmF2QmFyIiwibG9nbyIsIm1lbnVJbWFnZSIsInNldElzTmF2T3BlbiIsInVzZUNvbnRleHQiLCJMb2FkaW5nQ29udGV4dCIsInN0YXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnR0FLVTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLFNBQVYsUUFBVUEsU0FBVjtBQUFBLFNBQTJCQSxTQUFTLEdBQUcsTUFBSCxHQUFZRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsV0FBN0Q7QUFBQSxDQUxWLENBQVo7S0FBTUwsTTs7QUFTTixJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxRQUF1QztBQUFBOztBQUFBLE1BQXBDQyxJQUFvQyxTQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsU0FBOEIsU0FBOUJBLFNBQThCO0FBQUEsTUFBbkJDLFlBQW1CLFNBQW5CQSxZQUFtQjtBQUNwRCxNQUFNTixTQUFTLEdBQUdPLGlEQUFVLENBQUNDLHFFQUFELENBQTVCO0FBRUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBUSxhQUFTLEVBQUVSLFNBQW5CO0FBQUEsNEJBQ0UsOERBQUMsTUFBRDtBQUFRLFFBQUUsRUFBQyxRQUFYO0FBQW9CLGVBQVMsRUFBRUE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsZ0RBQUQ7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFPLGFBQUssRUFBRUksSUFBZDtBQUFvQixnQkFBUTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0UsOERBQUMscURBQUQ7QUFBVyxhQUFPLEVBQUU7QUFBQSxlQUFNRSxZQUFZLENBQUMsVUFBQ0csS0FBRDtBQUFBLGlCQUFXLENBQUNBLEtBQVo7QUFBQSxTQUFELENBQWxCO0FBQUEsT0FBcEI7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFPLGFBQUssRUFBRUosU0FBZDtBQUF5QixnQkFBUTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FkRDs7R0FBTUYsTTs7TUFBQUEsTTtBQWdCTkEsTUFBTSxDQUFDTyxTQUFQLEdBQW1CO0FBQ2pCTixNQUFJLEVBQUVPLDBEQURXO0FBRWpCTixXQUFTLEVBQUVNLDBEQUZNO0FBR2pCTCxjQUFZLEVBQUVLLHdEQUFjQztBQUhYLENBQW5CO0FBTUEsK0RBQWVULE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uZDRiNTlkNDE4N2U1NDIxYjlhYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29udGV4dCB9IGZyb20gJ3Byb3ZpZGVycy9Mb2FkaW5nUHJvdmlkZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IHsgSGVhZGVyLCBMb2dvLCBNZW51SW1hZ2UgfSBmcm9tICcuL05hdkJhci5zdHlsZXMnO1xyXG5cclxuY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDAuMnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IC0wLjJyZW07XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBpc0xvYWRpbmcgfSkgPT4gKGlzTG9hZGluZyA/ICdub25lJyA6IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcil9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYDtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICh7IGxvZ28sIG1lbnVJbWFnZSwgc2V0SXNOYXZPcGVuIH0pID0+IHtcclxuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VDb250ZXh0KExvYWRpbmdDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxyXG4gICAgICA8TG9hZGVyIGlkPVwibmF2YmFyXCIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XHJcbiAgICAgIDxMb2dvPlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bG9nb30gcHJpb3JpdHkgLz5cclxuICAgICAgPC9Mb2dvPlxyXG4gICAgICA8TWVudUltYWdlIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17bWVudUltYWdlfSBwcmlvcml0eSAvPlxyXG4gICAgICA8L01lbnVJbWFnZT5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGxvZ286IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbWVudUltYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=