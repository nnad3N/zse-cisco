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
    setTimeout(function () {
      console.log(linkContainer.current.getBoundingClientRect());
    }, 100);
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
                lineNumber: 125,
                columnNumber: 19
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibmF2aWdhdGlvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImxpbmtzIiwidXNlU3RhdGUiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsInRyYW5zZm9ybSIsImZpbHRlcmVkTGlua3MiLCJmaWx0ZXIiLCJsaW5rIiwiaWQiLCJuYXZMaW5rcyIsIm1hcCIsImxpbmtHcm91cCIsImUiLCJuYW1lIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEscUZBQVo7S0FBTUQsTTtBQU9OLElBQU1FLElBQUksR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0RBQVY7TUFBTUMsSTtBQU1OLElBQU1DLEtBQUssR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsdUZBQVg7TUFBTUUsSztBQU9OLElBQU1DLFNBQVMsR0FBR0gsb0VBQUg7QUFBQTtBQUFBO0FBQUEsa0VBQWY7TUFBTUcsUztB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QUE7QUFBQSxhQUpGLEVBY0cvQixTQUFTLGdCQUNSO0FBQUEsOEJBQ0UsOERBQUMsdUJBQUQ7QUFBeUIsV0FBRyxFQUFFUztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxRQUFEO0FBQVUsV0FBRyxFQUFFRCxRQUFmO0FBQUEsK0JBQ0UsOERBQUMsYUFBRDtBQUFlLGFBQUcsRUFBRUYsYUFBcEI7QUFBQSxvQkFDR0YsWUFBWSxDQUFDNkIsR0FBYixDQUFpQjtBQUFBLGdCQUFHRixFQUFILFNBQUdBLEVBQUg7QUFBQSxnQkFBT0ssSUFBUCxTQUFPQSxJQUFQO0FBQUEsZ0JBQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLGdDQUNoQiw4REFBQyxrREFBRDtBQUFlLGtCQUFJLGFBQU1BLElBQU4sQ0FBbkI7QUFBQSxxQ0FDRSw4REFBQyxVQUFEO0FBQUEsMEJBQWFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVdMLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZ0I7QUFBQSxXQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFEUSxHQWFOLElBM0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBckVEOztHQUFNakMsRzs7TUFBQUEsRztBQXVFTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5lYTBkYWQ0MDU2NWY5MDNjMmMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbSAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBMaW5rcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBMaW5rR3JvdXAgPSBzdHlsZWQuaDVgXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHotaW5kZXg6IDI7XG5gO1xuXG5jb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAzcmVtO1xuYDtcblxuY29uc3QgTGlua1NwYW4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5jb25zdCBMaW5rQ29udGFpbmVyQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbmA7XG5cbmNvbnN0IE5hdiA9ICh7IG5hdmlnYXRpb24sIGlzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkIH0pID0+IHtcbiAgY29uc3QgeyBsaW5rcyB9ID0gbmF2aWdhdGlvbjtcblxuICBjb25zdCBbY3VycmVudExpbmtzLCBzZXRDdXJyZW50TGlua3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGxpbmtDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGxpbmtTcGFuID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsaW5rQ29udGFpbmVyQmFja2dyb3VuZCA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVIb3ZlciA9ICh0YXJnZXQsIGxpbmtJRCkgPT4ge1xuICAgIG9uSG92ZXJMaW5rU3Bhbih0YXJnZXQpO1xuXG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IGxpbmtDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobGlua0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICB9LCAxMDApO1xuXG4gICAgbGlua0NvbnRhaW5lckJhY2tncm91bmQuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgbGlua0NvbnRhaW5lckJhY2tncm91bmQuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bGVmdCArIHNjcm9sbFh9cHgsICR7dG9wICsgc2Nyb2xsWX1weClgO1xuXG4gICAgY29uc29sZS5sb2coYGhlaWdodDogJHtoZWlnaHR9LCB3aWR0aDogJHt3aWR0aH1gKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkTGlua3MgPSBsaW5rcy5maWx0ZXIoKGxpbmspID0+IGxpbmsuaWQgPT09IGxpbmtJRClbMF0ubmF2TGlua3M7XG4gICAgc2V0Q3VycmVudExpbmtzKGZpbHRlcmVkTGlua3MpO1xuICB9O1xuXG4gIGNvbnN0IG9uSG92ZXJMaW5rU3BhbiA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsWCwgc2Nyb2xsWSB9ID0gd2luZG93O1xuICAgIGxpbmtDb250YWluZXIuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoJHswfXB4IC0gNTAlKSwgJHtoZWlnaHR9cHgpYDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAyfXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCAqIDEuNzV9cHhgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2xlZnQgKyBzY3JvbGxYIC0gMX1weCwgJHt0b3AgKyBzY3JvbGxZIC0gMX1weClgO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkJhcj5cbiAgICAgIDxMb2dvPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlN0cmFwaSBCbG9nPC9MaW5rPlxuICAgICAgPC9Mb2dvPlxuICAgICAgPExpbmtzPlxuICAgICAgICB7bGlua3MubWFwKCh7IGlkLCBsaW5rR3JvdXAgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlua0dyb3VwIGtleT17aWR9IG9uTW91c2VPdmVyPXsoZSkgPT4gaGFuZGxlSG92ZXIoZS50YXJnZXQsIGlkKX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9PlxuICAgICAgICAgICAgICB7bGlua0dyb3VwfVxuICAgICAgICAgICAgPC9MaW5rR3JvdXA+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0xpbmtzPlxuXG4gICAgICB7aXNIb3ZlcmVkID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyQmFja2dyb3VuZCByZWY9e2xpbmtDb250YWluZXJCYWNrZ3JvdW5kfSAvPlxuICAgICAgICAgIDxMaW5rU3BhbiByZWY9e2xpbmtTcGFufT5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHJlZj17bGlua0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtjdXJyZW50TGlua3MubWFwKCh7IGlkLCBuYW1lLCBzbHVnIH0pID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtgLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRMaW5rPntuYW1lfTwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTGlua1NwYW4+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9OYXZCYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9