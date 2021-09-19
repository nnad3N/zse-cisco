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
    linkContainer.current.style.transform = "translate(calc(".concat(width, "px - 50%), ").concat(height * 1.2, "px)");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibmF2aWdhdGlvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImxpbmtzIiwidXNlU3RhdGUiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwib25Ib3ZlckxpbmtCYWNrZ3JvdW5kIiwiZmlsdGVyZWRMaW5rcyIsImZpbHRlciIsImxpbmsiLCJpZCIsIm5hdkxpbmtzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwid2luZG93Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibWFwIiwibGlua0dyb3VwIiwiZSIsInN0YXRlIiwibmFtZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFGQUFaO0tBQU1ELE07QUFPTixJQUFNRSxJQUFJLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFWO01BQU1DLEk7QUFNTixJQUFNQyxLQUFLLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUFYO01BQU1FLEs7QUFPTixJQUFNQyxTQUFTLEdBQUdILG9FQUFIO0FBQUE7QUFBQTtBQUFB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QkFDRSw4REFBQyx1QkFBRDtBQUF5QixXQUFHLEVBQUVTO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLFFBQUQ7QUFDRSxXQUFHLEVBQUVELFFBRFA7QUFFRSxvQkFBWSxFQUFFLHdCQUFNO0FBQ2xCUCxzQkFBWSxDQUFDLFVBQUNrQyxLQUFEO0FBQUEsbUJBQVcsQ0FBQ0EsS0FBWjtBQUFBLFdBQUQsQ0FBWjtBQUNELFNBSkg7QUFBQSwrQkFNRSw4REFBQyxhQUFEO0FBQWUsYUFBRyxFQUFFN0IsYUFBcEI7QUFBQSxvQkFDR0YsWUFBWSxDQUFDNEIsR0FBYixDQUFpQjtBQUFBLGdCQUFHZCxFQUFILFNBQUdBLEVBQUg7QUFBQSxnQkFBT2tCLElBQVAsU0FBT0EsSUFBUDtBQUFBLGdCQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSxnQ0FDaEIsOERBQUMsa0RBQUQ7QUFBZSxrQkFBSSxhQUFNQSxJQUFOLENBQW5CO0FBQUEscUNBQ0UsOERBQUMsVUFBRDtBQUFBLDBCQUFhRDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFXbEIsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURnQjtBQUFBLFdBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURRLEdBa0JOLElBaENOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBdkVEOztHQUFNcEIsRzs7TUFBQUEsRztBQXlFTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS41MTNhMzAzYTJhYmQyOTRmNzJmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbSAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBMaW5rcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBMaW5rR3JvdXAgPSBzdHlsZWQuaDVgXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHotaW5kZXg6IDI7XG5gO1xuXG5jb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAzcmVtO1xuYDtcblxuY29uc3QgTGlua1NwYW4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuY29uc3QgTGlua0NvbnRhaW5lckJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjJzOyAqL1xuYDtcblxuY29uc3QgTmF2ID0gKHsgbmF2aWdhdGlvbiwgaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWQgfSkgPT4ge1xuICBjb25zdCB7IGxpbmtzIH0gPSBuYXZpZ2F0aW9uO1xuICBjb25zdCBbY3VycmVudExpbmtzLCBzZXRDdXJyZW50TGlua3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBsaW5rQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsaW5rU3BhbiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lckJhY2tncm91bmQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAodGFyZ2V0LCBsaW5rSUQpID0+IHtcbiAgICBvbkhvdmVyTGlua1NwYW4odGFyZ2V0KTtcbiAgICBvbkhvdmVyTGlua0JhY2tncm91bmQoKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkTGlua3MgPSBsaW5rcy5maWx0ZXIoKGxpbmspID0+IGxpbmsuaWQgPT09IGxpbmtJRClbMF0ubmF2TGlua3M7XG4gICAgc2V0Q3VycmVudExpbmtzKGZpbHRlcmVkTGlua3MpO1xuICB9O1xuXG4gIGNvbnN0IG9uSG92ZXJMaW5rU3BhbiA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsWCwgc2Nyb2xsWSB9ID0gd2luZG93O1xuICAgIGxpbmtDb250YWluZXIuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKGNhbGMoJHt3aWR0aH1weCAtIDUwJSksICR7aGVpZ2h0ICogMS4yfXB4KWA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRoICsgMn1weGA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQgKiAxLjc1fXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWCAtIDF9cHgsICR7dG9wICsgc2Nyb2xsWSAtIDF9cHgpYDtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua0JhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gbGlua0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZIH0gPSB3aW5kb3c7XG5cbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWH1weCwgJHt0b3AgKyBzY3JvbGxZfXB4KWA7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2QmFyPlxuICAgICAgPExvZ28+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U3RyYXBpIEJsb2c8L0xpbms+XG4gICAgICA8L0xvZ28+XG4gICAgICA8TGlua3M+XG4gICAgICAgIHtsaW5rcy5tYXAoKHsgaWQsIGxpbmtHcm91cCB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rR3JvdXAga2V5PXtpZH0gb25Nb3VzZU92ZXI9eyhlKSA9PiBoYW5kbGVIb3ZlcihlLnRhcmdldCwgaWQpfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX0+XG4gICAgICAgICAgICAgIHtsaW5rR3JvdXB9XG4gICAgICAgICAgICA8L0xpbmtHcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTGlua3M+XG5cbiAgICAgIHtpc0hvdmVyZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExpbmtDb250YWluZXJCYWNrZ3JvdW5kIHJlZj17bGlua0NvbnRhaW5lckJhY2tncm91bmR9IC8+XG4gICAgICAgICAgPExpbmtTcGFuXG4gICAgICAgICAgICByZWY9e2xpbmtTcGFufVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzSG92ZXJlZCgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHJlZj17bGlua0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtjdXJyZW50TGlua3MubWFwKCh7IGlkLCBuYW1lLCBzbHVnIH0pID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtgLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRMaW5rPntuYW1lfTwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTGlua1NwYW4+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9OYXZCYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9