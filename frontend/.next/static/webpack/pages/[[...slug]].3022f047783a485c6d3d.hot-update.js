self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav/Nav */ "./components/Nav/Nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styles/theme */ "./assets/styles/theme.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();






var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      navigation = _ref.navigation;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isHovered = _useState[0],
      setIsHovered = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: function onClick() {
      return setIsHovered(false);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      theme: _assets_styles_theme__WEBPACK_IMPORTED_MODULE_3__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__.default, {
        navigation: navigation,
        isHovered: isHovered,
        setIsHovered: setIsHovered
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(Layout, "FPQn8a98tPjpohC7NUYORQR8GJE=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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


/***/ }),

/***/ "./components/Nav/Nav.js":
/*!*******************************!*\
  !*** ./components/Nav/Nav.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\Nav\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();




var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({
  displayName: "Nav__NavBar",
  componentId: "sc-ih1j69-0"
})(["display:flex;padding:1rem 10rem;background-color:lightgray;position:relative;"]);
_c = NavBar;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__Logo",
  componentId: "sc-ih1j69-1"
})(["display:flex;align-items:center;justify-content:center;"]);
_c2 = Logo;
var Links = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__Links",
  componentId: "sc-ih1j69-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-left:auto;"]);
_c3 = Links;
var LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h5.withConfig({
  displayName: "Nav__LinkGroup",
  componentId: "sc-ih1j69-3"
})(["padding:0.5rem 1rem;display:flex;cursor:default;z-index:2;"]);
_c4 = LinkGroup;
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__LinkContainer",
  componentId: "sc-ih1j69-4"
})(["position:absolute;display:flex;flex-wrap:wrap;justify-content:space-between;max-width:20vw;height:max-content;padding:3rem;"]);
_c5 = LinkContainer;
var LinkSpan = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__LinkSpan",
  componentId: "sc-ih1j69-5"
})(["position:absolute;top:0;left:0;"]);
_c6 = LinkSpan;
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.a.withConfig({
  displayName: "Nav__StyledLink",
  componentId: "sc-ih1j69-6"
})(["margin-right:5rem;margin-bottom:2rem;&:last-child{margin-bottom:0;}"]);
_c7 = StyledLink;
var LinkContainerBackground = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__LinkContainerBackground",
  componentId: "sc-ih1j69-7"
})(["position:absolute;top:0;left:0;background-color:white;border-radius:20px;box-shadow:0 0 15px -8px rgba(0,0,0,0.6);"]);
_c8 = LinkContainerBackground;

var Nav = function Nav(_ref) {
  _s();

  var navigation = _ref.navigation,
      isHovered = _ref.isHovered,
      setIsHovered = _ref.setIsHovered;
  var links = navigation.links;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      currentLinks = _useState[0],
      setCurrentLinks = _useState[1];

  var linkContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var linkSpan = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var linkContainerBackground = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var handleHover = function handleHover(target, linkID) {
    onHoverLinkSpan(target);
    onHoverLinkBackground();
    var filteredLinks = links.filter(function (link) {
      return link.id === linkID;
    })[0].navLinks;
    setCurrentLinks(filteredLinks);
  };

  var onHoverLinkSpan = function onHoverLinkSpan(target) {
    var _target$getBoundingCl = target.getBoundingClientRect(),
        top = _target$getBoundingCl.top,
        left = _target$getBoundingCl.left,
        height = _target$getBoundingCl.height,
        width = _target$getBoundingCl.width;

    var _window = window,
        scrollX = _window.scrollX,
        scrollY = _window.scrollY;
    linkContainer.current.style.transform = "translate(calc(".concat(width / 2, "px - 50%), ").concat(height * 1.2, "px)");
    linkSpan.current.style.width = "".concat(width + 2, "px");
    linkSpan.current.style.height = "".concat(height * 1.75, "px");
    linkSpan.current.style.transform = "translate(".concat(left + scrollX - 1, "px, ").concat(top + scrollY - 1, "px)");
  };

  var onHoverLinkBackground = function onHoverLinkBackground() {
    setTimeout(function () {
      var _linkContainer$curren = linkContainer.current.getBoundingClientRect(),
          top = _linkContainer$curren.top,
          left = _linkContainer$curren.left,
          height = _linkContainer$curren.height,
          width = _linkContainer$curren.width;

      var _window2 = window,
          scrollX = _window2.scrollX,
          scrollY = _window2.scrollY;
      linkContainerBackground.current.style.width = "".concat(width, "px");
      linkContainerBackground.current.style.height = "".concat(height, "px");
      linkContainerBackground.current.style.transform = "translate(".concat(left + scrollX, "px, ").concat(top + scrollY, "px)");
    }, 0);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: "Strapi Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Links, {
      children: links.map(function (_ref2) {
        var id = _ref2.id,
            linkGroup = _ref2.linkGroup;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkGroup, {
          onMouseOver: function onMouseOver(e) {
            return handleHover(e.target, id);
          },
          onMouseEnter: function onMouseEnter() {
            return setIsHovered(true);
          },
          children: linkGroup
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this), isHovered ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkContainerBackground, {
        ref: linkContainerBackground
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkSpan, {
        ref: linkSpan,
        onMouseLeave: function onMouseLeave() {
          setIsHovered(function (state) {
            return !state;
          });
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkContainer, {
          ref: linkContainer,
          children: currentLinks.map(function (_ref3) {
            var id = _ref3.id,
                name = _ref3.name,
                slug = _ref3.slug;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/".concat(slug),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledLink, {
                children: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, _this);
};

_s(Nav, "okIW6jvKVNbD2IzxBQaSvh/R1lE=");

_c9 = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "NavBar");
$RefreshReg$(_c2, "Logo");
$RefreshReg$(_c3, "Links");
$RefreshReg$(_c4, "LinkGroup");
$RefreshReg$(_c5, "LinkContainer");
$RefreshReg$(_c6, "LinkSpan");
$RefreshReg$(_c7, "StyledLink");
$RefreshReg$(_c8, "LinkContainerBackground");
$RefreshReg$(_c9, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2L05hdi5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsIm5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsInRoZW1lIiwiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibGlua3MiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwib25Ib3ZlckxpbmtCYWNrZ3JvdW5kIiwiZmlsdGVyZWRMaW5rcyIsImZpbHRlciIsImxpbmsiLCJpZCIsIm5hdkxpbmtzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwid2luZG93Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibWFwIiwibGlua0dyb3VwIiwiZSIsInN0YXRlIiwibmFtZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLFFBQTJCLFFBQTNCQSxRQUEyQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ1RDLCtDQUFRLENBQUMsS0FBRCxD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QUFaO0FBQ0QsU0FKSDtBQUFBLCtCQU1FLDhEQUFDLGFBQUQ7QUFBZSxhQUFHLEVBQUU3QixhQUFwQjtBQUFBLG9CQUNHRixZQUFZLENBQUM0QixHQUFiLENBQWlCO0FBQUEsZ0JBQUdkLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGdCQUFPa0IsSUFBUCxTQUFPQSxJQUFQO0FBQUEsZ0JBQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLGdDQUNoQiw4REFBQyxrREFBRDtBQUFlLGtCQUFJLGFBQU1BLElBQU4sQ0FBbkI7QUFBQSxxQ0FDRSw4REFBQyxVQUFEO0FBQUEsMEJBQWFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVdsQixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGdCO0FBQUEsV0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBRFEsR0FrQk4sSUFoQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0F2RUQ7O0dBQU1oQixHOztNQUFBQSxHO0FBeUVOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjMwMjJmMDQ3NzgzYTQ4NWM2ZDNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gJy4vTmF2L05hdic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2Fzc2V0cy9zdHlsZXMvdGhlbWUnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgbmF2aWdhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPE5hdiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBpc0hvdmVyZWQ9e2lzSG92ZXJlZH0gc2V0SXNIb3ZlcmVkPXtzZXRJc0hvdmVyZWR9IC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW0gMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgTGlua3MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuY29uc3QgTGlua0dyb3VwID0gc3R5bGVkLmg1YFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB6LWluZGV4OiAyO1xuYDtcblxuY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMjB2dztcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogM3JlbTtcbmA7XG5cbmNvbnN0IExpbmtTcGFuID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmFgXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IExpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbmA7XG5cbmNvbnN0IE5hdiA9ICh7IG5hdmlnYXRpb24sIGlzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkIH0pID0+IHtcbiAgY29uc3QgeyBsaW5rcyB9ID0gbmF2aWdhdGlvbjtcbiAgY29uc3QgW2N1cnJlbnRMaW5rcywgc2V0Q3VycmVudExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua1NwYW4gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGxpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKHRhcmdldCwgbGlua0lEKSA9PiB7XG4gICAgb25Ib3ZlckxpbmtTcGFuKHRhcmdldCk7XG4gICAgb25Ib3ZlckxpbmtCYWNrZ3JvdW5kKCk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZExpbmtzID0gbGlua3MuZmlsdGVyKChsaW5rKSA9PiBsaW5rLmlkID09PSBsaW5rSUQpWzBdLm5hdkxpbmtzO1xuICAgIHNldEN1cnJlbnRMaW5rcyhmaWx0ZXJlZExpbmtzKTtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua1NwYW4gPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcbiAgICBsaW5rQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKCR7d2lkdGggLyAyfXB4IC0gNTAlKSwgJHtoZWlnaHQgKiAxLjJ9cHgpYDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAyfXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCAqIDEuNzV9cHhgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2xlZnQgKyBzY3JvbGxYIC0gMX1weCwgJHt0b3AgKyBzY3JvbGxZIC0gMX1weClgO1xuICB9O1xuXG4gIGNvbnN0IG9uSG92ZXJMaW5rQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBoZWlnaHQsIHdpZHRoIH0gPSBsaW5rQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcblxuICAgICAgbGlua0NvbnRhaW5lckJhY2tncm91bmQuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2xlZnQgKyBzY3JvbGxYfXB4LCAke3RvcCArIHNjcm9sbFl9cHgpYDtcbiAgICB9LCAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZCYXI+XG4gICAgICA8TG9nbz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5TdHJhcGkgQmxvZzwvTGluaz5cbiAgICAgIDwvTG9nbz5cbiAgICAgIDxMaW5rcz5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBpZCwgbGlua0dyb3VwIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtHcm91cCBrZXk9e2lkfSBvbk1vdXNlT3Zlcj17KGUpID0+IGhhbmRsZUhvdmVyKGUudGFyZ2V0LCBpZCl9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfT5cbiAgICAgICAgICAgICAge2xpbmtHcm91cH1cbiAgICAgICAgICAgIDwvTGlua0dyb3VwPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9MaW5rcz5cblxuICAgICAge2lzSG92ZXJlZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGlua0NvbnRhaW5lckJhY2tncm91bmQgcmVmPXtsaW5rQ29udGFpbmVyQmFja2dyb3VuZH0gLz5cbiAgICAgICAgICA8TGlua1NwYW5cbiAgICAgICAgICAgIHJlZj17bGlua1NwYW59XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNIb3ZlcmVkKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgcmVmPXtsaW5rQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAge2N1cnJlbnRMaW5rcy5tYXAoKHsgaWQsIG5hbWUsIHNsdWcgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9e2AvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbms+e25hbWV9PC9TdHlsZWRMaW5rPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9MaW5rU3Bhbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L05hdkJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=