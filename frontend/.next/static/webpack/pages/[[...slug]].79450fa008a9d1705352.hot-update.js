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
        lineNumber: 103,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
          lineNumber: 108,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), isHovered ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkContainerBackground, {
        ref: linkContainerBackground
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
                lineNumber: 127,
                columnNumber: 19
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibmF2aWdhdGlvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImxpbmtzIiwidXNlU3RhdGUiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwib25Ib3ZlckxpbmtCYWNrZ3JvdW5kIiwiZmlsdGVyZWRMaW5rcyIsImZpbHRlciIsImxpbmsiLCJpZCIsIm5hdkxpbmtzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwid2luZG93Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibWFwIiwibGlua0dyb3VwIiwiZSIsInN0YXRlIiwibmFtZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFGQUFaO0tBQU1ELE07QUFPTixJQUFNRSxJQUFJLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFWO01BQU1DLEk7QUFNTixJQUFNQyxLQUFLLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUFYO01BQU1FLEs7QUFPTixJQUFNQyxTQUFTLEdBQUdILG9FQUFIO0FBQUE7QUFBQTtBQUFB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dUJBQUQ7QUFBeUIsV0FBRyxFQUFFUztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxRQUFEO0FBQ0UsV0FBRyxFQUFFRCxRQURQO0FBRUUsb0JBQVksRUFBRSx3QkFBTTtBQUNsQlAsc0JBQVksQ0FBQyxVQUFDa0MsS0FBRDtBQUFBLG1CQUFXLENBQUNBLEtBQVo7QUFBQSxXQUFELENBQVo7QUFDRCxTQUpIO0FBQUEsK0JBTUUsOERBQUMsYUFBRDtBQUFlLGFBQUcsRUFBRTdCLGFBQXBCO0FBQUEsb0JBQ0dGLFlBQVksQ0FBQzRCLEdBQWIsQ0FBaUI7QUFBQSxnQkFBR2QsRUFBSCxTQUFHQSxFQUFIO0FBQUEsZ0JBQU9rQixJQUFQLFNBQU9BLElBQVA7QUFBQSxnQkFBYUMsSUFBYixTQUFhQSxJQUFiO0FBQUEsZ0NBQ2hCLDhEQUFDLGtEQUFEO0FBQWUsa0JBQUksYUFBTUEsSUFBTixDQUFuQjtBQUFBLHFDQUNFLDhEQUFDLFVBQUQ7QUFBQSwwQkFBYUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBV2xCLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZ0I7QUFBQSxXQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFEUSxHQWtCTixJQWhDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQXZFRDs7R0FBTXBCLEc7O01BQUFBLEc7QUF5RU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uNzk0NTBmYTAwOGE5ZDE3MDUzNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW0gMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgTGlua3MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuY29uc3QgTGlua0dyb3VwID0gc3R5bGVkLmg1YFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB6LWluZGV4OiAyO1xuYDtcblxuY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMjB2dztcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogM3JlbTtcbmA7XG5cbmNvbnN0IExpbmtTcGFuID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmFgXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IExpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4yczsgKi9cbmA7XG5cbmNvbnN0IE5hdiA9ICh7IG5hdmlnYXRpb24sIGlzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkIH0pID0+IHtcbiAgY29uc3QgeyBsaW5rcyB9ID0gbmF2aWdhdGlvbjtcbiAgY29uc3QgW2N1cnJlbnRMaW5rcywgc2V0Q3VycmVudExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua1NwYW4gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGxpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKHRhcmdldCwgbGlua0lEKSA9PiB7XG4gICAgb25Ib3ZlckxpbmtTcGFuKHRhcmdldCk7XG4gICAgb25Ib3ZlckxpbmtCYWNrZ3JvdW5kKCk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZExpbmtzID0gbGlua3MuZmlsdGVyKChsaW5rKSA9PiBsaW5rLmlkID09PSBsaW5rSUQpWzBdLm5hdkxpbmtzO1xuICAgIHNldEN1cnJlbnRMaW5rcyhmaWx0ZXJlZExpbmtzKTtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua1NwYW4gPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcbiAgICBsaW5rQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKCR7MH1weCAtIDUwJSksICR7aGVpZ2h0fXB4KWA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRoICsgMn1weGA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQgKiAxLjc1fXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWCAtIDF9cHgsICR7dG9wICsgc2Nyb2xsWSAtIDF9cHgpYDtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua0JhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gbGlua0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZIH0gPSB3aW5kb3c7XG5cbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWH1weCwgJHt0b3AgKyBzY3JvbGxZfXB4KWA7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2QmFyPlxuICAgICAgPExvZ28+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U3RyYXBpIEJsb2c8L0xpbms+XG4gICAgICA8L0xvZ28+XG4gICAgICA8TGlua3M+XG4gICAgICAgIHtsaW5rcy5tYXAoKHsgaWQsIGxpbmtHcm91cCB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rR3JvdXAga2V5PXtpZH0gb25Nb3VzZU92ZXI9eyhlKSA9PiBoYW5kbGVIb3ZlcihlLnRhcmdldCwgaWQpfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX0+XG4gICAgICAgICAgICAgIHtsaW5rR3JvdXB9XG4gICAgICAgICAgICA8L0xpbmtHcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTGlua3M+XG5cbiAgICAgIHtpc0hvdmVyZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExpbmtDb250YWluZXJCYWNrZ3JvdW5kIHJlZj17bGlua0NvbnRhaW5lckJhY2tncm91bmR9IC8+XG4gICAgICAgICAgPExpbmtTcGFuXG4gICAgICAgICAgICByZWY9e2xpbmtTcGFufVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzSG92ZXJlZCgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHJlZj17bGlua0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtjdXJyZW50TGlua3MubWFwKCh7IGlkLCBuYW1lLCBzbHVnIH0pID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtgLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRMaW5rPntuYW1lfTwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTGlua1NwYW4+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9OYXZCYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9