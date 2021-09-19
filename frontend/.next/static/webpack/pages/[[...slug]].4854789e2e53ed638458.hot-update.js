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
})(["position:absolute;top:0;left:0;background-color:coral;transition:all 0.2s;"]);
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
    linkContainer.current.style.transform = "translate(calc(".concat(0, "px - 50%), ", height, "px)");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibmF2aWdhdGlvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImxpbmtzIiwidXNlU3RhdGUiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwib25Ib3ZlckxpbmtCYWNrZ3JvdW5kIiwiZmlsdGVyZWRMaW5rcyIsImZpbHRlciIsImxpbmsiLCJpZCIsIm5hdkxpbmtzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwid2luZG93Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibWFwIiwibGlua0dyb3VwIiwiZSIsIm5hbWUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxRkFBWjtLQUFNRCxNO0FBT04sSUFBTUUsSUFBSSxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSwrREFBVjtNQUFNQyxJO0FBTU4sSUFBTUMsS0FBSyxHQUFHRixxRUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBWDtNQUFNRSxLO0FBT04sSUFBTUMsU0FBUyxHQUFHSCxvRUFBSDtBQUFBO0FBQUE7QUFBQSxrRUFBZjtN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QXlCLFdBQUcsRUFBRVM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsUUFBRDtBQUFVLFdBQUcsRUFBRUQsUUFBZjtBQUFBLCtCQUNFLDhEQUFDLGFBQUQ7QUFBZSxhQUFHLEVBQUVGLGFBQXBCO0FBQUEsb0JBQ0dGLFlBQVksQ0FBQzRCLEdBQWIsQ0FBaUI7QUFBQSxnQkFBR2QsRUFBSCxTQUFHQSxFQUFIO0FBQUEsZ0JBQU9pQixJQUFQLFNBQU9BLElBQVA7QUFBQSxnQkFBYUMsSUFBYixTQUFhQSxJQUFiO0FBQUEsZ0NBQ2hCLDhEQUFDLGtEQUFEO0FBQWUsa0JBQUksYUFBTUEsSUFBTixDQUFuQjtBQUFBLHFDQUNFLDhEQUFDLFVBQUQ7QUFBQSwwQkFBYUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBV2pCLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZ0I7QUFBQSxXQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFEUSxHQWFOLElBM0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBcEVEOztHQUFNcEIsRzs7TUFBQUEsRztBQXNFTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS40ODU0Nzg5ZTJlNTNlZDYzODQ1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbSAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBMaW5rcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBMaW5rR3JvdXAgPSBzdHlsZWQuaDVgXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHotaW5kZXg6IDI7XG5gO1xuXG5jb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAzcmVtO1xuYDtcblxuY29uc3QgTGlua1NwYW4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5jb25zdCBMaW5rQ29udGFpbmVyQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5gO1xuXG5jb25zdCBOYXYgPSAoeyBuYXZpZ2F0aW9uLCBpc0hvdmVyZWQsIHNldElzSG92ZXJlZCB9KSA9PiB7XG4gIGNvbnN0IHsgbGlua3MgfSA9IG5hdmlnYXRpb247XG5cbiAgY29uc3QgW2N1cnJlbnRMaW5rcywgc2V0Q3VycmVudExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBsaW5rQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsaW5rU3BhbiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lckJhY2tncm91bmQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAodGFyZ2V0LCBsaW5rSUQpID0+IHtcbiAgICBvbkhvdmVyTGlua1NwYW4odGFyZ2V0KTtcbiAgICBvbkhvdmVyTGlua0JhY2tncm91bmQoKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkTGlua3MgPSBsaW5rcy5maWx0ZXIoKGxpbmspID0+IGxpbmsuaWQgPT09IGxpbmtJRClbMF0ubmF2TGlua3M7XG4gICAgc2V0Q3VycmVudExpbmtzKGZpbHRlcmVkTGlua3MpO1xuICB9O1xuXG4gIGNvbnN0IG9uSG92ZXJMaW5rU3BhbiA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsWCwgc2Nyb2xsWSB9ID0gd2luZG93O1xuICAgIGxpbmtDb250YWluZXIuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoJHswfXB4IC0gNTAlKSwgJHtoZWlnaHR9cHgpYDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAyfXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCAqIDEuNzV9cHhgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2xlZnQgKyBzY3JvbGxYIC0gMX1weCwgJHt0b3AgKyBzY3JvbGxZIC0gMX1weClgO1xuICB9O1xuXG4gIGNvbnN0IG9uSG92ZXJMaW5rQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBoZWlnaHQsIHdpZHRoIH0gPSBsaW5rQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcblxuICAgICAgbGlua0NvbnRhaW5lckJhY2tncm91bmQuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2xlZnQgKyBzY3JvbGxYfXB4LCAke3RvcCArIHNjcm9sbFl9cHgpYDtcbiAgICB9LCAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZCYXI+XG4gICAgICA8TG9nbz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5TdHJhcGkgQmxvZzwvTGluaz5cbiAgICAgIDwvTG9nbz5cbiAgICAgIDxMaW5rcz5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBpZCwgbGlua0dyb3VwIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtHcm91cCBrZXk9e2lkfSBvbk1vdXNlT3Zlcj17KGUpID0+IGhhbmRsZUhvdmVyKGUudGFyZ2V0LCBpZCl9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfT5cbiAgICAgICAgICAgICAge2xpbmtHcm91cH1cbiAgICAgICAgICAgIDwvTGlua0dyb3VwPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9MaW5rcz5cblxuICAgICAge2lzSG92ZXJlZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGlua0NvbnRhaW5lckJhY2tncm91bmQgcmVmPXtsaW5rQ29udGFpbmVyQmFja2dyb3VuZH0gLz5cbiAgICAgICAgICA8TGlua1NwYW4gcmVmPXtsaW5rU3Bhbn0+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciByZWY9e2xpbmtDb250YWluZXJ9PlxuICAgICAgICAgICAgICB7Y3VycmVudExpbmtzLm1hcCgoeyBpZCwgbmFtZSwgc2x1ZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpZH0gaHJlZj17YC8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTGluaz57bmFtZX08L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0xpbmtTcGFuPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTmF2QmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==