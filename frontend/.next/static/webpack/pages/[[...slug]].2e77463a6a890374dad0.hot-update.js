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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Navigation\\Navigation.js",
    _this = undefined;




var StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({
  displayName: "Navigation__StyledNavigation",
  componentId: "sc-10q32ic-0"
})(["position:absolute;top:0;left:0;height:100vh;width:100%;z-index:20;background-color:", ";position:relative;padding:", ";display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto auto;column-gap:", ";row-gap:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.mainColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dimensions.navigationPadding;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dimensions.navigationColumnGap;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dimensions.navigationRowGap;
});
_c = StyledNavigation;
var ExitButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Navigation__ExitButton",
  componentId: "sc-10q32ic-1"
})(["height:5rem;width:5rem;position:absolute;top:5vh;right:5vw;background-color:#fff;"]);
_c2 = ExitButton;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Navigation__ContentWrapper",
  componentId: "sc-10q32ic-2"
})(["display:flex;flex-direction:column;h3{border-bottom:0.4rem solid ", ";margin-bottom:2rem;}a{font-size:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.accentColor;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSize.navList;
});
_c3 = ContentWrapper;

var Navigation = function Navigation(_ref7) {
  var links = _ref7.links,
      setIsNavOpen = _ref7.setIsNavOpen;
  console.log(links);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledNavigation, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExitButton, {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), links.map(function (_ref8) {
      var groupName = _ref8.groupName,
          id = _ref8.id,
          navLinks = _ref8.links;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: groupName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: navLinks.map(function (_ref9) {
            var id = _ref9.id,
                name = _ref9.name,
                slug = _ref9.slug,
                newTab = _ref9.newTab;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              nav: "true",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/".concat(slug),
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_c4 = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "StyledNavigation");
$RefreshReg$(_c2, "ExitButton");
$RefreshReg$(_c3, "ContentWrapper");
$RefreshReg$(_c4, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlN0eWxlZE5hdmlnYXRpb24iLCJzdHlsZWQiLCJ0aGVtZSIsImNvbG9ycyIsIm1haW5Db2xvciIsImRpbWVuc2lvbnMiLCJuYXZpZ2F0aW9uUGFkZGluZyIsIm5hdmlnYXRpb25Db2x1bW5HYXAiLCJuYXZpZ2F0aW9uUm93R2FwIiwiRXhpdEJ1dHRvbiIsIkNvbnRlbnRXcmFwcGVyIiwiYWNjZW50Q29sb3IiLCJmb250U2l6ZSIsIm5hdkxpc3QiLCJOYXZpZ2F0aW9uIiwibGlua3MiLCJzZXRJc05hdk9wZW4iLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJtYXAiLCJncm91cE5hbWUiLCJpZCIsIm5hdkxpbmtzIiwibmFtZSIsInNsdWciLCJuZXdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRPQU9BO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFNBQTVCO0FBQUEsQ0FQQSxFQVNUO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxVQUFOLENBQWlCQyxpQkFBaEM7QUFBQSxDQVRTLEVBYU47QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLFVBQU4sQ0FBaUJFLG1CQUFoQztBQUFBLENBYk0sRUFjVDtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csVUFBTixDQUFpQkcsZ0JBQWhDO0FBQUEsQ0FkUyxDQUF0QjtLQUFNUixnQjtBQWlCTixJQUFNUyxVQUFVLEdBQUdSLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlGQUFoQjtNQUFNUSxVO0FBU04sSUFBTUMsY0FBYyxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxSEFLYztBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhUSxXQUE1QjtBQUFBLENBTGQsRUFVSDtBQUFBLE1BQUdULEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1UsUUFBTixDQUFlQyxPQUE5QjtBQUFBLENBVkcsQ0FBcEI7TUFBTUgsYzs7QUFjTixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUE2QjtBQUFBLE1BQTFCQyxLQUEwQixTQUExQkEsS0FBMEI7QUFBQSxNQUFuQkMsWUFBbUIsU0FBbkJBLFlBQW1CO0FBQzlDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUVBLHNCQUNFLDhEQUFDLGdCQUFEO0FBQUEsNEJBQ0UsOERBQUMsVUFBRDtBQUFZLGFBQU8sRUFBRTtBQUFBLGVBQU1DLFlBQVksQ0FBQyxVQUFDRyxLQUFEO0FBQUEsaUJBQVcsQ0FBQ0EsS0FBWjtBQUFBLFNBQUQsQ0FBbEI7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFHR0osS0FBSyxDQUFDSyxHQUFOLENBQVU7QUFBQSxVQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxVQUFjQyxFQUFkLFNBQWNBLEVBQWQ7QUFBQSxVQUF5QkMsUUFBekIsU0FBa0JSLEtBQWxCO0FBQUEsMEJBQ1QsOERBQUMsY0FBRDtBQUFBLGdDQUNFO0FBQUEsb0JBQUtNO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQ0dFLFFBQVEsQ0FBQ0gsR0FBVCxDQUFhO0FBQUEsZ0JBQUdFLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGdCQUFPRSxJQUFQLFNBQU9BLElBQVA7QUFBQSxnQkFBYUMsSUFBYixTQUFhQSxJQUFiO0FBQUEsZ0JBQW1CQyxNQUFuQixTQUFtQkEsTUFBbkI7QUFBQSxnQ0FDWjtBQUFJLGlCQUFHLEVBQUMsTUFBUjtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksYUFBTUQsSUFBTixDQUFWO0FBQXdCLHdCQUFRLE1BQWhDO0FBQUEsdUNBQ0U7QUFBQSw0QkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQW9CRixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsV0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxTQUFxQkEsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBVixDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBdkJEOztNQUFNUixVO0FBeUJOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjJlNzc0NjNhNmE4OTAzNzRkYWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFN0eWxlZE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5Db2xvcn07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5uYXZpZ2F0aW9uUGFkZGluZ307XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xyXG4gIGNvbHVtbi1nYXA6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGltZW5zaW9ucy5uYXZpZ2F0aW9uQ29sdW1uR2FwfTtcclxuICByb3ctZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRpbWVuc2lvbnMubmF2aWdhdGlvblJvd0dhcH07XHJcbmA7XHJcblxyXG5jb25zdCBFeGl0QnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXZoO1xyXG4gIHJpZ2h0OiA1dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGgzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNHJlbSBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5hY2NlbnRDb2xvcn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubmF2TGlzdH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IGxpbmtzLCBzZXRJc05hdk9wZW4gfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGxpbmtzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWROYXZpZ2F0aW9uPlxyXG4gICAgICA8RXhpdEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfSAvPlxyXG5cclxuICAgICAge2xpbmtzLm1hcCgoeyBncm91cE5hbWUsIGlkLCBsaW5rczogbmF2TGlua3MgfSkgPT4gKFxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlciBrZXk9e2lkfT5cclxuICAgICAgICAgIDxoMz57Z3JvdXBOYW1lfTwvaDM+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKHsgaWQsIG5hbWUsIHNsdWcsIG5ld1RhYiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIG5hdj1cInRydWVcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8YT57bmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TdHlsZWROYXZpZ2F0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9