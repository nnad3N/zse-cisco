self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/organisms/Navigation/Navigation.js":
/*!*******************************************************!*\
  !*** ./components/organisms/Navigation/Navigation.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atoms/Image */ "./components/atoms/Image.js");
/* harmony import */ var _molecules_NavListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @molecules/NavListItem */ "./components/molecules/NavListItem.js");
/* harmony import */ var _Navigation_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation.styles */ "./components/organisms/Navigation/Navigation.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Navigation\\Navigation.js",
    _this = undefined;






var Navigation = function Navigation(_ref) {
  var navLinks = _ref.navLinks,
      setIsNavOpen = _ref.setIsNavOpen,
      exitButton = _ref.exitButton,
      navListIcon = _ref.navListIcon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_4__.StyledNavigation, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_4__.ExitButton, {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: exitButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), navLinks.map(function (_ref2) {
      var groupName = _ref2.groupName,
          id = _ref2.id,
          links = _ref2.links;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: groupName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: links.map(function (link) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: console.log(navListIcon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this) // <NavListItem key={link.id} listIcon={navListIcon} link={link} setIsNavOpen={setIsNavOpen} />
            ;
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJuYXZMaW5rcyIsInNldElzTmF2T3BlbiIsImV4aXRCdXR0b24iLCJuYXZMaXN0SWNvbiIsInN0YXRlIiwibWFwIiwiZ3JvdXBOYW1lIiwiaWQiLCJsaW5rcyIsImxpbmsiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXlEO0FBQUEsTUFBdERDLFFBQXNELFFBQXREQSxRQUFzRDtBQUFBLE1BQTVDQyxZQUE0QyxRQUE1Q0EsWUFBNEM7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUMxRSxzQkFDRSw4REFBQyxnRUFBRDtBQUFBLDRCQUNFLDhEQUFDLDBEQUFEO0FBQVksYUFBTyxFQUFFO0FBQUEsZUFBTUYsWUFBWSxDQUFDLFVBQUNHLEtBQUQ7QUFBQSxpQkFBVyxDQUFDQSxLQUFaO0FBQUEsU0FBRCxDQUFsQjtBQUFBLE9BQXJCO0FBQUEsNkJBQ0UsOERBQUMsaURBQUQ7QUFBTyxhQUFLLEVBQUVGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUtHRixRQUFRLENBQUNLLEdBQVQsQ0FBYTtBQUFBLFVBQUdDLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFVBQWNDLEVBQWQsU0FBY0EsRUFBZDtBQUFBLFVBQWtCQyxLQUFsQixTQUFrQkEsS0FBbEI7QUFBQSwwQkFDWiw4REFBQyw4REFBRDtBQUFBLGdDQUNFO0FBQUEsb0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQ0dFLEtBQUssQ0FBQ0gsR0FBTixDQUFVLFVBQUNJLElBQUQ7QUFBQSxnQ0FDVDtBQUFBLHdCQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsV0FBWjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFMsQ0FFVDtBQUZTO0FBQUEsV0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxTQUFxQkksRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYixDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJEOztLQUFNUixVO0FBc0JOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjg2Y2ZjY2IzMjYxNzY2NGFhYmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlJztcclxuaW1wb3J0IE5hdkxpc3RJdGVtIGZyb20gJ0Btb2xlY3VsZXMvTmF2TGlzdEl0ZW0nO1xyXG5pbXBvcnQgeyBTdHlsZWROYXZpZ2F0aW9uLCBFeGl0QnV0dG9uLCBDb250ZW50V3JhcHBlciB9IGZyb20gJy4vTmF2aWdhdGlvbi5zdHlsZXMnO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IG5hdkxpbmtzLCBzZXRJc05hdk9wZW4sIGV4aXRCdXR0b24sIG5hdkxpc3RJY29uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZE5hdmlnYXRpb24+XHJcbiAgICAgIDxFeGl0QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIDxJbWFnZSBpbWFnZT17ZXhpdEJ1dHRvbn0gLz5cclxuICAgICAgPC9FeGl0QnV0dG9uPlxyXG5cclxuICAgICAge25hdkxpbmtzLm1hcCgoeyBncm91cE5hbWUsIGlkLCBsaW5rcyB9KSA9PiAoXHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyIGtleT17aWR9PlxyXG4gICAgICAgICAgPGgzPntncm91cE5hbWV9PC9oMz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+e2NvbnNvbGUubG9nKG5hdkxpc3RJY29uKX08L2Rpdj5cclxuICAgICAgICAgICAgICAvLyA8TmF2TGlzdEl0ZW0ga2V5PXtsaW5rLmlkfSBsaXN0SWNvbj17bmF2TGlzdEljb259IGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0eWxlZE5hdmlnYXRpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=