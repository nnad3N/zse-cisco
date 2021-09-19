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
})(["position:absolute;background-color:red;top:0;left:0;"]);
_c6 = LinkSpan;
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.a.withConfig({
  displayName: "Nav__StyledLink",
  componentId: "sc-o8bpet-6"
})(["margin-right:5rem;margin-bottom:2rem;&:last-child{margin-bottom:0;}"]);
_c7 = StyledLink;
var LinkContainerBackground = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Nav__LinkContainerBackground",
  componentId: "sc-o8bpet-7"
})(["position:absolute;top:0;left:0;background-color:coral;"]);
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

    var _linkContainer$curren = linkContainer.current.getBoundingClientRect(),
        top = _linkContainer$curren.top,
        left = _linkContainer$curren.left,
        height = _linkContainer$curren.height,
        width = _linkContainer$curren.width;

    var _window = window,
        scrollX = _window.scrollX,
        scrollY = _window.scrollY;
    console.log(linkContainer.current.getBoundingClientRect());
    var timeoutRect = setTimeout(function () {
      return linkContainer.current.getBoundingClientRect();
    }, 100);
    console.log("timeout: ".concat(timeoutRect));
    linkContainerBackground.current.style.width = "".concat(width, "px");
    linkContainerBackground.current.style.height = "".concat(height, "px");
    linkContainerBackground.current.style.transform = "translate(".concat(left + scrollX, "px, ").concat(top + scrollY, "px)");
    console.log("height: ".concat(height, ", width: ").concat(width));
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

    var _window2 = window,
        scrollX = _window2.scrollX,
        scrollY = _window2.scrollY;
    linkContainer.current.style.transform = "translate(calc(".concat(0, "px - 50%), ", height, "px)");
    linkSpan.current.style.width = "".concat(width + 2, "px");
    linkSpan.current.style.height = "".concat(height * 1.75, "px");
    linkSpan.current.style.transform = "translate(".concat(left + scrollX - 1, "px, ").concat(top + scrollY - 1, "px)");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: "Strapi Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
          lineNumber: 112,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this), isHovered ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkContainerBackground, {
        ref: linkContainerBackground
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkSpan, {
        ref: linkSpan,
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
                lineNumber: 126,
                columnNumber: 19
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibmF2aWdhdGlvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImxpbmtzIiwidXNlU3RhdGUiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsInRpbWVvdXRSZWN0Iiwic2V0VGltZW91dCIsInN0eWxlIiwidHJhbnNmb3JtIiwiZmlsdGVyZWRMaW5rcyIsImZpbHRlciIsImxpbmsiLCJpZCIsIm5hdkxpbmtzIiwibWFwIiwibGlua0dyb3VwIiwiZSIsIm5hbWUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxRkFBWjtLQUFNRCxNO0FBT04sSUFBTUUsSUFBSSxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSwrREFBVjtNQUFNQyxJO0FBTU4sSUFBTUMsS0FBSyxHQUFHRixxRUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBWDtNQUFNRSxLO0FBT04sSUFBTUMsU0FBUyxHQUFHSCxvRUFBSDtBQUFBO0FBQUE7QUFBQSxr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WSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxXQUFqRjtBQUFBLG9CQUNHa0M7QUFESCxXQUFnQkgsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtELE9BTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFjR2hDLFNBQVMsZ0JBQ1I7QUFBQSw4QkFDRSw4REFBQyx1QkFBRDtBQUF5QixXQUFHLEVBQUVTO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLFFBQUQ7QUFBVSxXQUFHLEVBQUVELFFBQWY7QUFBQSwrQkFDRSw4REFBQyxhQUFEO0FBQWUsYUFBRyxFQUFFRixhQUFwQjtBQUFBLG9CQUNHRixZQUFZLENBQUM4QixHQUFiLENBQWlCO0FBQUEsZ0JBQUdGLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGdCQUFPSyxJQUFQLFNBQU9BLElBQVA7QUFBQSxnQkFBYUMsSUFBYixTQUFhQSxJQUFiO0FBQUEsZ0NBQ2hCLDhEQUFDLGtEQUFEO0FBQWUsa0JBQUksYUFBTUEsSUFBTixDQUFuQjtBQUFBLHFDQUNFLDhEQUFDLFVBQUQ7QUFBQSwwQkFBYUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBV0wsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURnQjtBQUFBLFdBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURRLEdBYU4sSUEzQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0F0RUQ7O0dBQU1sQyxHOztNQUFBQSxHO0FBd0VOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjg5Mzg3MDk5NzBmNDI2YmNkNjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcmVtIDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IExpbmtzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IExpbmtHcm91cCA9IHN0eWxlZC5oNWBcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgei1pbmRleDogMjtcbmA7XG5cbmNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDNyZW07XG5gO1xuXG5jb25zdCBMaW5rU3BhbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmFgXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IExpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuYDtcblxuY29uc3QgTmF2ID0gKHsgbmF2aWdhdGlvbiwgaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWQgfSkgPT4ge1xuICBjb25zdCB7IGxpbmtzIH0gPSBuYXZpZ2F0aW9uO1xuXG4gIGNvbnN0IFtjdXJyZW50TGlua3MsIHNldEN1cnJlbnRMaW5rc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua1NwYW4gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGxpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKHRhcmdldCwgbGlua0lEKSA9PiB7XG4gICAgb25Ib3ZlckxpbmtTcGFuKHRhcmdldCk7XG5cbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gbGlua0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsWCwgc2Nyb2xsWSB9ID0gd2luZG93O1xuXG4gICAgY29uc29sZS5sb2cobGlua0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICBjb25zdCB0aW1lb3V0UmVjdCA9IHNldFRpbWVvdXQoKCkgPT4gbGlua0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCAxMDApO1xuXG4gICAgY29uc29sZS5sb2coYHRpbWVvdXQ6ICR7dGltZW91dFJlY3R9YCk7XG5cbiAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWH1weCwgJHt0b3AgKyBzY3JvbGxZfXB4KWA7XG5cbiAgICBjb25zb2xlLmxvZyhgaGVpZ2h0OiAke2hlaWdodH0sIHdpZHRoOiAke3dpZHRofWApO1xuXG4gICAgY29uc3QgZmlsdGVyZWRMaW5rcyA9IGxpbmtzLmZpbHRlcigobGluaykgPT4gbGluay5pZCA9PT0gbGlua0lEKVswXS5uYXZMaW5rcztcbiAgICBzZXRDdXJyZW50TGlua3MoZmlsdGVyZWRMaW5rcyk7XG4gIH07XG5cbiAgY29uc3Qgb25Ib3ZlckxpbmtTcGFuID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBoZWlnaHQsIHdpZHRoIH0gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZIH0gPSB3aW5kb3c7XG4gICAgbGlua0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoY2FsYygkezB9cHggLSA1MCUpLCAke2hlaWdodH1weClgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aCArIDJ9cHhgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0ICogMS43NX1weGA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bGVmdCArIHNjcm9sbFggLSAxfXB4LCAke3RvcCArIHNjcm9sbFkgLSAxfXB4KWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2QmFyPlxuICAgICAgPExvZ28+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U3RyYXBpIEJsb2c8L0xpbms+XG4gICAgICA8L0xvZ28+XG4gICAgICA8TGlua3M+XG4gICAgICAgIHtsaW5rcy5tYXAoKHsgaWQsIGxpbmtHcm91cCB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rR3JvdXAga2V5PXtpZH0gb25Nb3VzZU92ZXI9eyhlKSA9PiBoYW5kbGVIb3ZlcihlLnRhcmdldCwgaWQpfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX0+XG4gICAgICAgICAgICAgIHtsaW5rR3JvdXB9XG4gICAgICAgICAgICA8L0xpbmtHcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTGlua3M+XG5cbiAgICAgIHtpc0hvdmVyZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExpbmtDb250YWluZXJCYWNrZ3JvdW5kIHJlZj17bGlua0NvbnRhaW5lckJhY2tncm91bmR9IC8+XG4gICAgICAgICAgPExpbmtTcGFuIHJlZj17bGlua1NwYW59PlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgcmVmPXtsaW5rQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAge2N1cnJlbnRMaW5rcy5tYXAoKHsgaWQsIG5hbWUsIHNsdWcgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9e2AvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbms+e25hbWV9PC9TdHlsZWRMaW5rPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9MaW5rU3Bhbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L05hdkJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=