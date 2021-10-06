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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/Image/Image */ "./components/atoms/Image/Image.js");
/* harmony import */ var _molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @molecules/ListItem/ListItem */ "./components/molecules/ListItem/ListItem.js");
/* harmony import */ var _atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @atoms/LineHorizontal/LineHorizontal */ "./components/atoms/LineHorizontal/LineHorizontal.js");
/* harmony import */ var _Navigation_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navigation.styles */ "./components/organisms/Navigation/Navigation.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Navigation\\Navigation.js",
    _this = undefined;








var Navigation = function Navigation(_ref) {
  var navLinks = _ref.navLinks,
      setIsNavOpen = _ref.setIsNavOpen,
      exitButton = _ref.exitButton,
      navListIcon = _ref.navListIcon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_6__.StyledNavigation, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_6__.ExitButton, {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
        image: exitButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), navLinks.map(function (_ref2) {
      var groupName = _ref2.groupName,
          id = _ref2.id,
          links = _ref2.links;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineHorizontal_LineHorizontal__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: groupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: links.map(function (link) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.default, {
              listIcon: navListIcon,
              link: link,
              setIsNavOpen: setIsNavOpen
            }, link.id, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Navigation;
Navigation.propTypes = {
  navLinks: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    groupName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    links: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object))
  })),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  exitButton: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  navListIcon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
Navigation.defaultProps = {
  navLinks: [{
    groupName: 'Nazwa'
  }]
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJuYXZMaW5rcyIsInNldElzTmF2T3BlbiIsImV4aXRCdXR0b24iLCJuYXZMaXN0SWNvbiIsInN0YXRlIiwibWFwIiwiZ3JvdXBOYW1lIiwiaWQiLCJsaW5rcyIsImxpbmsiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXlEO0FBQUEsTUFBdERDLFFBQXNELFFBQXREQSxRQUFzRDtBQUFBLE1BQTVDQyxZQUE0QyxRQUE1Q0EsWUFBNEM7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUMxRSxzQkFDRSw4REFBQyxnRUFBRDtBQUFBLDRCQUNFLDhEQUFDLDBEQUFEO0FBQVksYUFBTyxFQUFFO0FBQUEsZUFBTUYsWUFBWSxDQUFDLFVBQUNHLEtBQUQ7QUFBQSxpQkFBVyxDQUFDQSxLQUFaO0FBQUEsU0FBRCxDQUFsQjtBQUFBLE9BQXJCO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBTyxhQUFLLEVBQUVGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUtHRixRQUFRLENBQUNLLEdBQVQsQ0FBYTtBQUFBLFVBQUdDLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFVBQWNDLEVBQWQsU0FBY0EsRUFBZDtBQUFBLFVBQWtCQyxLQUFsQixTQUFrQkEsS0FBbEI7QUFBQSwwQkFDWiw4REFBQyw4REFBRDtBQUFBLGdDQUNFLDhEQUFDLHlFQUFEO0FBQUEsaUNBQ0U7QUFBQSxzQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUEsb0JBQ0dFLEtBQUssQ0FBQ0gsR0FBTixDQUFVLFVBQUNJLElBQUQ7QUFBQSxnQ0FDVCw4REFBQyxpRUFBRDtBQUF3QixzQkFBUSxFQUFFTixXQUFsQztBQUErQyxrQkFBSSxFQUFFTSxJQUFyRDtBQUEyRCwwQkFBWSxFQUFFUjtBQUF6RSxlQUFlUSxJQUFJLENBQUNGLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFM7QUFBQSxXQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBLFNBQXFCQSxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0FyQkQ7O0tBQU1SLFU7QUF1Qk5BLFVBQVUsQ0FBQ1csU0FBWCxHQUF1QjtBQUNyQlYsVUFBUSxFQUFFVyx5REFBQSxDQUNSQSx1REFBQSxDQUFnQjtBQUNkTCxhQUFTLEVBQUVLLHFFQURHO0FBRWRKLE1BQUUsRUFBRUksMERBRlU7QUFHZEgsU0FBSyxFQUFFRyx5REFBQSxDQUFrQkEsMERBQWxCO0FBSE8sR0FBaEIsQ0FEUSxDQURXO0FBUXJCVixjQUFZLEVBQUVVLHdEQVJPO0FBU3JCVCxZQUFVLEVBQUVTLDBEQVRTO0FBVXJCUixhQUFXLEVBQUVRLDBEQUFnQkM7QUFWUixDQUF2QjtBQWFBYixVQUFVLENBQUNjLFlBQVgsR0FBMEI7QUFDeEJiLFVBQVEsRUFBRSxDQUNSO0FBQ0VNLGFBQVMsRUFBRTtBQURiLEdBRFE7QUFEYyxDQUExQjtBQVFBLCtEQUFlUCxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjRmYWEwNDYwOGZjOGZjYzg2MjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGF0b21zL0ltYWdlL0ltYWdlJztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0Btb2xlY3VsZXMvTGlzdEl0ZW0vTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGluZUhvcml6b250YWwgZnJvbSAnQGF0b21zL0xpbmVIb3Jpem9udGFsL0xpbmVIb3Jpem9udGFsJztcclxuaW1wb3J0IHsgU3R5bGVkTmF2aWdhdGlvbiwgRXhpdEJ1dHRvbiwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL05hdmlnYXRpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBuYXZMaW5rcywgc2V0SXNOYXZPcGVuLCBleGl0QnV0dG9uLCBuYXZMaXN0SWNvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWROYXZpZ2F0aW9uPlxyXG4gICAgICA8RXhpdEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfT5cclxuICAgICAgICA8SW1hZ2UgaW1hZ2U9e2V4aXRCdXR0b259IC8+XHJcbiAgICAgIDwvRXhpdEJ1dHRvbj5cclxuXHJcbiAgICAgIHtuYXZMaW5rcy5tYXAoKHsgZ3JvdXBOYW1lLCBpZCwgbGlua3MgfSkgPT4gKFxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlciBrZXk9e2lkfT5cclxuICAgICAgICAgIDxMaW5lSG9yaXpvbnRhbD5cclxuICAgICAgICAgICAgPGgzPntncm91cE5hbWV9PC9oMz5cclxuICAgICAgICAgIDwvTGluZUhvcml6b250YWw+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtsaW5rLmlkfSBsaXN0SWNvbj17bmF2TGlzdEljb259IGxpbms9e2xpbmt9IHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0eWxlZE5hdmlnYXRpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIG5hdkxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGdyb3VwTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgbGlua3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgfSlcclxuICApLFxyXG4gIHNldElzTmF2T3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZXhpdEJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICBuYXZMaXN0SWNvbjogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbk5hdmlnYXRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIG5hdkxpbmtzOiBbXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTmFtZTogJ05hendhJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=