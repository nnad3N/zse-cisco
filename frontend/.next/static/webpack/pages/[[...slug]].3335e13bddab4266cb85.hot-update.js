self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

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
/* harmony import */ var _Nav_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.styles */ "./components/Nav/Nav.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\Nav\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();





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
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
          lineNumber: 48,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), isHovered ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkContainerBackground, {
        ref: linkContainerBackground
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
                lineNumber: 67,
                columnNumber: 19
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_s(Nav, "okIW6jvKVNbD2IzxBQaSvh/R1lE=");

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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

/***/ "./components/Nav/Nav.styles.js":
/*!**************************************!*\
  !*** ./components/Nav/Nav.styles.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBar": function() { return /* binding */ NavBar; },
/* harmony export */   "Logo": function() { return /* binding */ Logo; },
/* harmony export */   "Links": function() { return /* binding */ Links; },
/* harmony export */   "LinkGroup": function() { return /* binding */ LinkGroup; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkSpan": function() { return /* binding */ LinkSpan; },
/* harmony export */   "StyledLink": function() { return /* binding */ StyledLink; },
/* harmony export */   "LinkContainerBackground": function() { return /* binding */ LinkContainerBackground; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.nav.withConfig({
  displayName: "Navstyles__NavBar",
  componentId: "sc-alesxi-0"
})(["display:flex;padding:1rem 10rem;background-color:lightgray;position:relative;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__Logo",
  componentId: "sc-alesxi-1"
})(["display:flex;align-items:center;justify-content:center;"]);
var Links = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__Links",
  componentId: "sc-alesxi-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-left:auto;"]);
var LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h5.withConfig({
  displayName: "Navstyles__LinkGroup",
  componentId: "sc-alesxi-3"
})(["padding:0.5rem 1rem;display:flex;cursor:default;z-index:2;"]);
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__LinkContainer",
  componentId: "sc-alesxi-4"
})(["position:absolute;display:flex;flex-wrap:wrap;justify-content:space-between;max-width:20vw;height:max-content;padding:3rem;"]);
var LinkSpan = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__LinkSpan",
  componentId: "sc-alesxi-5"
})(["position:absolute;top:0;left:0;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "Navstyles__StyledLink",
  componentId: "sc-alesxi-6"
})(["margin-right:5rem;margin-bottom:2rem;&:last-child{margin-bottom:0;}"]);
var LinkContainerBackground = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Navstyles__LinkContainerBackground",
  componentId: "sc-alesxi-7"
})(["position:absolute;top:0;left:0;background-color:white;border-radius:20px;box-shadow:0 0 15px -8px rgba(0,0,0,0.6);"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9OYXYuc3R5bGVzLmpzIl0sIm5hbWVzIjpbIk5hdiIsIm5hdmlnYXRpb24iLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJsaW5rcyIsInVzZVN0YXRlIiwiY3VycmVudExpbmtzIiwic2V0Q3VycmVudExpbmtzIiwibGlua0NvbnRhaW5lciIsInVzZVJlZiIsImxpbmtTcGFuIiwibGlua0NvbnRhaW5lckJhY2tncm91bmQiLCJoYW5kbGVIb3ZlciIsInRhcmdldCIsImxpbmtJRCIsIm9uSG92ZXJMaW5rU3BhbiIsIm9uSG92ZXJMaW5rQmFja2dyb3VuZCIsImZpbHRlcmVkTGlua3MiLCJmaWx0ZXIiLCJsaW5rIiwiaWQiLCJuYXZMaW5rcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwiY3VycmVudCIsInN0eWxlIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsIm1hcCIsImxpbmtHcm91cCIsImUiLCJzdGF0ZSIsIm5hbWUiLCJzbHVnIiwiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLFVBQTBDLFFBQTFDQSxVQUEwQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQUEsTUFDL0NDLEtBRCtDLEdBQ3JD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LGFBQU1BLElBQU4sQ0FBbkI7QUFBQSxxQ0FDRSw4REFBQyxVQUFEO0FBQUEsMEJBQWFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVdsQixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGdCO0FBQUEsV0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBRFEsR0FrQk4sSUFoQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0F2RUQ7O0dBQU1wQixHOztLQUFBQSxHO0FBeUVOLCtEQUFlQSxHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFFTyxJQUFNd0MsTUFBTSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxRkFBWjtBQU9BLElBQU1DLElBQUksR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0RBQVY7QUFNQSxJQUFNRSxLQUFLLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUFYO0FBT0EsSUFBTUcsU0FBUyxHQUFHSCxvRUFBSDtBQUFBO0FBQUE7QUFBQSxrRUFBZjtBQU9BLElBQU1JLGFBQWEsR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsbUlBQW5CO0FBVUEsSUFBTUssUUFBUSxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1Q0FBZDtBQU1BLElBQU1NLFVBQVUsR0FBR04sbUVBQUg7QUFBQTtBQUFBO0FBQUEsMkVBQWhCO0FBU0EsSUFBTU8sdUJBQXVCLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDBIQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4zMzM1ZTEzYmRkYWI0MjY2Y2I4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge30gZnJvbSAnLi9OYXYuc3R5bGVzJztcblxuY29uc3QgTmF2ID0gKHsgbmF2aWdhdGlvbiwgaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWQgfSkgPT4ge1xuICBjb25zdCB7IGxpbmtzIH0gPSBuYXZpZ2F0aW9uO1xuICBjb25zdCBbY3VycmVudExpbmtzLCBzZXRDdXJyZW50TGlua3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBsaW5rQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsaW5rU3BhbiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lckJhY2tncm91bmQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAodGFyZ2V0LCBsaW5rSUQpID0+IHtcbiAgICBvbkhvdmVyTGlua1NwYW4odGFyZ2V0KTtcbiAgICBvbkhvdmVyTGlua0JhY2tncm91bmQoKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkTGlua3MgPSBsaW5rcy5maWx0ZXIoKGxpbmspID0+IGxpbmsuaWQgPT09IGxpbmtJRClbMF0ubmF2TGlua3M7XG4gICAgc2V0Q3VycmVudExpbmtzKGZpbHRlcmVkTGlua3MpO1xuICB9O1xuXG4gIGNvbnN0IG9uSG92ZXJMaW5rU3BhbiA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsWCwgc2Nyb2xsWSB9ID0gd2luZG93O1xuICAgIGxpbmtDb250YWluZXIuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoJHt3aWR0aCAvIDJ9cHggLSA1MCUpLCAke2hlaWdodCAqIDEuMn1weClgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aCArIDJ9cHhgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0ICogMS43NX1weGA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bGVmdCArIHNjcm9sbFggLSAxfXB4LCAke3RvcCArIHNjcm9sbFkgLSAxfXB4KWA7XG4gIH07XG5cbiAgY29uc3Qgb25Ib3ZlckxpbmtCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IGxpbmtDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsWCwgc2Nyb2xsWSB9ID0gd2luZG93O1xuXG4gICAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgbGlua0NvbnRhaW5lckJhY2tncm91bmQuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgbGlua0NvbnRhaW5lckJhY2tncm91bmQuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bGVmdCArIHNjcm9sbFh9cHgsICR7dG9wICsgc2Nyb2xsWX1weClgO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkJhcj5cbiAgICAgIDxMb2dvPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlN0cmFwaSBCbG9nPC9MaW5rPlxuICAgICAgPC9Mb2dvPlxuICAgICAgPExpbmtzPlxuICAgICAgICB7bGlua3MubWFwKCh7IGlkLCBsaW5rR3JvdXAgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlua0dyb3VwIGtleT17aWR9IG9uTW91c2VPdmVyPXsoZSkgPT4gaGFuZGxlSG92ZXIoZS50YXJnZXQsIGlkKX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9PlxuICAgICAgICAgICAgICB7bGlua0dyb3VwfVxuICAgICAgICAgICAgPC9MaW5rR3JvdXA+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0xpbmtzPlxuXG4gICAgICB7aXNIb3ZlcmVkID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyQmFja2dyb3VuZCByZWY9e2xpbmtDb250YWluZXJCYWNrZ3JvdW5kfSAvPlxuICAgICAgICAgIDxMaW5rU3BhblxuICAgICAgICAgICAgcmVmPXtsaW5rU3Bhbn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJc0hvdmVyZWQoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciByZWY9e2xpbmtDb250YWluZXJ9PlxuICAgICAgICAgICAgICB7Y3VycmVudExpbmtzLm1hcCgoeyBpZCwgbmFtZSwgc2x1ZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpZH0gaHJlZj17YC8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTGluaz57bmFtZX08L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0xpbmtTcGFuPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTmF2QmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMTByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua3MgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0dyb3VwID0gc3R5bGVkLmg1YFxyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHotaW5kZXg6IDI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXgtd2lkdGg6IDIwdnc7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtTcGFuID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxyXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lckJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9