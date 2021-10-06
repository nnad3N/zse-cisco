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
/* harmony import */ var _Navigation_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation.styles */ "./components/organisms/Navigation/Navigation.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\organisms\\Navigation\\Navigation.js",
    _this = undefined;







var Navigation = function Navigation(_ref) {
  var navLinks = _ref.navLinks,
      setIsNavOpen = _ref.setIsNavOpen,
      exitButton = _ref.exitButton,
      navListIcon = _ref.navListIcon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_5__.StyledNavigation, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_5__.ExitButton, {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
        image: exitButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), navLinks.map(function (_ref2) {
      var groupName = _ref2.groupName,
          id = _ref2.id,
          links = _ref2.links;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_5__.ContentWrapper, {
        children: [console.log(links), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: groupName
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
              lineNumber: 20,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJuYXZMaW5rcyIsInNldElzTmF2T3BlbiIsImV4aXRCdXR0b24iLCJuYXZMaXN0SWNvbiIsInN0YXRlIiwibWFwIiwiZ3JvdXBOYW1lIiwiaWQiLCJsaW5rcyIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF5RDtBQUFBLE1BQXREQyxRQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSxNQUE1Q0MsWUFBNEMsUUFBNUNBLFlBQTRDO0FBQUEsTUFBOUJDLFVBQThCLFFBQTlCQSxVQUE4QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDMUUsc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUFZLGFBQU8sRUFBRTtBQUFBLGVBQU1GLFlBQVksQ0FBQyxVQUFDRyxLQUFEO0FBQUEsaUJBQVcsQ0FBQ0EsS0FBWjtBQUFBLFNBQUQsQ0FBbEI7QUFBQSxPQUFyQjtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQU8sYUFBSyxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFLR0YsUUFBUSxDQUFDSyxHQUFULENBQWE7QUFBQSxVQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxVQUFjQyxFQUFkLFNBQWNBLEVBQWQ7QUFBQSxVQUFrQkMsS0FBbEIsU0FBa0JBLEtBQWxCO0FBQUEsMEJBQ1osOERBQUMsOERBQUQ7QUFBQSxtQkFDR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FESCxlQUVFO0FBQUEsb0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsb0JBQ0dFLEtBQUssQ0FBQ0gsR0FBTixDQUFVLFVBQUNNLElBQUQ7QUFBQSxnQ0FDVCw4REFBQyxpRUFBRDtBQUF3QixzQkFBUSxFQUFFUixXQUFsQztBQUErQyxrQkFBSSxFQUFFUSxJQUFyRDtBQUEyRCwwQkFBWSxFQUFFVjtBQUF6RSxlQUFlVSxJQUFJLENBQUNKLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFM7QUFBQSxXQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBLFNBQXFCQSxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FwQkQ7O0tBQU1SLFU7QUFzQk5BLFVBQVUsQ0FBQ2EsU0FBWCxHQUF1QjtBQUNyQlosVUFBUSxFQUFFYSx5REFBQSxDQUNSQSx1REFBQSxDQUFnQjtBQUNkUCxhQUFTLEVBQUVPLHFFQURHO0FBRWROLE1BQUUsRUFBRU0sMERBRlU7QUFHZEwsU0FBSyxFQUFFSyx5REFBQSxDQUFrQkEsMERBQWxCO0FBSE8sR0FBaEIsQ0FEUSxDQURXO0FBUXJCWixjQUFZLEVBQUVZLHdEQVJPO0FBU3JCWCxZQUFVLEVBQUVXLDBEQVRTO0FBVXJCVixhQUFXLEVBQUVVLDBEQUFnQkM7QUFWUixDQUF2QjtBQWFBZixVQUFVLENBQUNnQixZQUFYLEdBQTBCO0FBQ3hCZixVQUFRLEVBQUUsQ0FDUjtBQUNFTSxhQUFTLEVBQUU7QUFEYixHQURRO0FBRGMsQ0FBMUI7QUFRQSwrREFBZVAsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5lY2MwNjA3YTk3NDhmMGJiOGFkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0BhdG9tcy9JbWFnZS9JbWFnZSc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbW9sZWN1bGVzL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IHsgU3R5bGVkTmF2aWdhdGlvbiwgRXhpdEJ1dHRvbiwgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL05hdmlnYXRpb24uc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBuYXZMaW5rcywgc2V0SXNOYXZPcGVuLCBleGl0QnV0dG9uLCBuYXZMaXN0SWNvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWROYXZpZ2F0aW9uPlxyXG4gICAgICA8RXhpdEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfT5cclxuICAgICAgICA8SW1hZ2UgaW1hZ2U9e2V4aXRCdXR0b259IC8+XHJcbiAgICAgIDwvRXhpdEJ1dHRvbj5cclxuXHJcbiAgICAgIHtuYXZMaW5rcy5tYXAoKHsgZ3JvdXBOYW1lLCBpZCwgbGlua3MgfSkgPT4gKFxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlciBrZXk9e2lkfT5cclxuICAgICAgICAgIHtjb25zb2xlLmxvZyhsaW5rcyl9XHJcbiAgICAgICAgICA8aDM+e2dyb3VwTmFtZX08L2gzPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17bGluay5pZH0gbGlzdEljb249e25hdkxpc3RJY29ufSBsaW5rPXtsaW5rfSBzZXRJc05hdk9wZW49e3NldElzTmF2T3Blbn0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TdHlsZWROYXZpZ2F0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcclxuICBuYXZMaW5rczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBncm91cE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pXHJcbiAgKSxcclxuICBzZXRJc05hdk9wZW46IFByb3BUeXBlcy5mdW5jLFxyXG4gIGV4aXRCdXR0b246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbmF2TGlzdEljb246IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5OYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBuYXZMaW5rczogW1xyXG4gICAge1xyXG4gICAgICBncm91cE5hbWU6ICdOYXp3YScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9