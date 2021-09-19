self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
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



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();




var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({
  displayName: "Nav__NavBar",
  componentId: "sc-o8bpet-0"
})(["display:flex;padding:1rem 10rem;background-color:lightgray;position:relative;"]);
_c = NavBar;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__Logo",
  componentId: "sc-o8bpet-1"
})(["display:flex;align-items:center;justify-content:center;"]);
_c2 = Logo;
var Links = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__Links",
  componentId: "sc-o8bpet-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-left:auto;"]);
_c3 = Links;
var LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h5.withConfig({
  displayName: "Nav__LinkGroup",
  componentId: "sc-o8bpet-3"
})(["padding:0.5rem 1rem;display:flex;cursor:default;z-index:2;"]);
_c4 = LinkGroup;
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__LinkContainer",
  componentId: "sc-o8bpet-4"
})(["position:absolute;display:flex;flex-wrap:wrap;justify-content:space-between;max-width:20vw;height:max-content;padding:3rem;"]);
_c5 = LinkContainer;
var LinkSpan = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__LinkSpan",
  componentId: "sc-o8bpet-5"
})(["position:absolute;top:0;left:0;"]);
_c6 = LinkSpan;
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.a.withConfig({
  displayName: "Nav__StyledLink",
  componentId: "sc-o8bpet-6"
})(["margin-right:5rem;margin-bottom:2rem;&:last-child{margin-bottom:0;}"]);
_c7 = StyledLink;
var LinkContainerBackground = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__LinkContainerBackground",
  componentId: "sc-o8bpet-7"
})(["position:absolute;top:0;left:0;background-color:white;border-radius:20px;boxshadow:0 0 15px -8px rgba(0,0,0,0.6);"]);
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
    linkContainer.current.style.transform = "translate(calc(".concat(0, "px - 50%), ", height * 1.2, "px)");
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
        lineNumber: 106,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
          lineNumber: 111,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), isHovered ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkContainerBackground, {
        ref: linkContainerBackground
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
                lineNumber: 130,
                columnNumber: 19
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibmF2aWdhdGlvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImxpbmtzIiwidXNlU3RhdGUiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwib25Ib3ZlckxpbmtCYWNrZ3JvdW5kIiwiZmlsdGVyZWRMaW5rcyIsImZpbHRlciIsImxpbmsiLCJpZCIsIm5hdkxpbmtzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwid2luZG93Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibWFwIiwibGlua0dyb3VwIiwiZSIsInN0YXRlIiwibmFtZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFGQUFaO0tBQU1ELE07QUFPTixJQUFNRSxJQUFJLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFWO01BQU1DLEk7QUFNTixJQUFNQyxLQUFLLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUFYO01BQU1FLEs7QUFPTixJQUFNQyxTQUFTLEdBQUdILG9FQUFIO0FBQUE7QUFBQTtBQUFB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QUNFLDhEQUFDLHVCQUFEO0FBQXlCLFdBQUcsRUFBRVM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsUUFBRDtBQUNFLFdBQUcsRUFBRUQsUUFEUDtBQUVFLG9CQUFZLEVBQUUsd0JBQU07QUFDbEJQLHNCQUFZLENBQUMsVUFBQ2tDLEtBQUQ7QUFBQSxtQkFBVyxDQUFDQSxLQUFaO0FBQUEsV0FBRCxDQUFaO0FBQ0QsU0FKSDtBQUFBLCtCQU1FLDhEQUFDLGFBQUQ7QUFBZSxhQUFHLEVBQUU3QixhQUFwQjtBQUFBLG9CQUNHRixZQUFZLENBQUM0QixHQUFiLENBQWlCO0FBQUEsZ0JBQUdkLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGdCQUFPa0IsSUFBUCxTQUFPQSxJQUFQO0FBQUEsZ0JBQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLGdDQUNoQiw4REFBQyxrREFBRDtBQUFlLGtCQUFJLGFBQU1BLElBQU4sQ0FBbkI7QUFBQSxxQ0FDRSw4REFBQyxVQUFEO0FBQUEsMEJBQWFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVdsQixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGdCO0FBQUEsV0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBRFEsR0FrQk4sSUFoQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0F2RUQ7O0dBQU1wQixHOztNQUFBQSxHO0FBeUVOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmEwOGRhMmI0NmNiZDViMTczZjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcmVtIDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IExpbmtzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IExpbmtHcm91cCA9IHN0eWxlZC5oNWBcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgei1pbmRleDogMjtcbmA7XG5cbmNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDNyZW07XG5gO1xuXG5jb25zdCBMaW5rU3BhbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5jb25zdCBMaW5rQ29udGFpbmVyQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94c2hhZG93OiAwIDAgMTVweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcblxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4yczsgKi9cbmA7XG5cbmNvbnN0IE5hdiA9ICh7IG5hdmlnYXRpb24sIGlzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkIH0pID0+IHtcbiAgY29uc3QgeyBsaW5rcyB9ID0gbmF2aWdhdGlvbjtcbiAgY29uc3QgW2N1cnJlbnRMaW5rcywgc2V0Q3VycmVudExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua1NwYW4gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGxpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKHRhcmdldCwgbGlua0lEKSA9PiB7XG4gICAgb25Ib3ZlckxpbmtTcGFuKHRhcmdldCk7XG4gICAgb25Ib3ZlckxpbmtCYWNrZ3JvdW5kKCk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZExpbmtzID0gbGlua3MuZmlsdGVyKChsaW5rKSA9PiBsaW5rLmlkID09PSBsaW5rSUQpWzBdLm5hdkxpbmtzO1xuICAgIHNldEN1cnJlbnRMaW5rcyhmaWx0ZXJlZExpbmtzKTtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua1NwYW4gPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcbiAgICBsaW5rQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKCR7MH1weCAtIDUwJSksICR7aGVpZ2h0ICogMS4yfXB4KWA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRoICsgMn1weGA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQgKiAxLjc1fXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWCAtIDF9cHgsICR7dG9wICsgc2Nyb2xsWSAtIDF9cHgpYDtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua0JhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gbGlua0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZIH0gPSB3aW5kb3c7XG5cbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWH1weCwgJHt0b3AgKyBzY3JvbGxZfXB4KWA7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2QmFyPlxuICAgICAgPExvZ28+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U3RyYXBpIEJsb2c8L0xpbms+XG4gICAgICA8L0xvZ28+XG4gICAgICA8TGlua3M+XG4gICAgICAgIHtsaW5rcy5tYXAoKHsgaWQsIGxpbmtHcm91cCB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rR3JvdXAga2V5PXtpZH0gb25Nb3VzZU92ZXI9eyhlKSA9PiBoYW5kbGVIb3ZlcihlLnRhcmdldCwgaWQpfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX0+XG4gICAgICAgICAgICAgIHtsaW5rR3JvdXB9XG4gICAgICAgICAgICA8L0xpbmtHcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTGlua3M+XG5cbiAgICAgIHtpc0hvdmVyZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExpbmtDb250YWluZXJCYWNrZ3JvdW5kIHJlZj17bGlua0NvbnRhaW5lckJhY2tncm91bmR9IC8+XG4gICAgICAgICAgPExpbmtTcGFuXG4gICAgICAgICAgICByZWY9e2xpbmtTcGFufVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzSG92ZXJlZCgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHJlZj17bGlua0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtjdXJyZW50TGlua3MubWFwKCh7IGlkLCBuYW1lLCBzbHVnIH0pID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtgLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRMaW5rPntuYW1lfTwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTGlua1NwYW4+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9OYXZCYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9