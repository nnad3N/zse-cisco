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
})(["position:absolute;display:flex;flex-wrap:wrap;justify-content:space-between;max-width:20vw;background-color:lightblue;padding:3rem;"]);
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
})(["position:absolute;top:0;left:0;background-color:#fff;height:100px;width:100px;"]);
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
    linkContainerBackground.current.style.width = "".concat(width, "px");
    linkContainerBackground.current.style.height = "".concat(height, "px");
    linkContainerBackground.current.style.transform = "translate(".concat(left + scrollX, "px, ").concat(top + scrollY, "px)");
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
        lineNumber: 102,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
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
          lineNumber: 107,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this), isHovered ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkContainerBackground, {
        ref: linkContainerBackground
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
                lineNumber: 121,
                columnNumber: 19
              }, _this)
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic3R5bGVkIiwiTG9nbyIsIkxpbmtzIiwiTGlua0dyb3VwIiwiTGlua0NvbnRhaW5lciIsIkxpbmtTcGFuIiwiU3R5bGVkTGluayIsIkxpbmtDb250YWluZXJCYWNrZ3JvdW5kIiwiTmF2IiwibmF2aWdhdGlvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImxpbmtzIiwidXNlU3RhdGUiLCJjdXJyZW50TGlua3MiLCJzZXRDdXJyZW50TGlua3MiLCJsaW5rQ29udGFpbmVyIiwidXNlUmVmIiwibGlua1NwYW4iLCJsaW5rQ29udGFpbmVyQmFja2dyb3VuZCIsImhhbmRsZUhvdmVyIiwidGFyZ2V0IiwibGlua0lEIiwib25Ib3ZlckxpbmtTcGFuIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJmaWx0ZXJlZExpbmtzIiwiZmlsdGVyIiwibGluayIsImlkIiwibmF2TGlua3MiLCJtYXAiLCJsaW5rR3JvdXAiLCJlIiwibmFtZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFGQUFaO0tBQU1ELE07QUFPTixJQUFNRSxJQUFJLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFWO01BQU1DLEk7QUFNTixJQUFNQyxLQUFLLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUFYO01BQU1FLEs7QUFPTixJQUFNQyxTQUFTLEdBQUdILG9FQUFIO0FBQUE7QUFBQTtBQUFBLGtFQUFmO01BQU1HLFM7QUFPTixJQUFNQyxhQUFhLEdBQUdKLHFFQUFIO0FB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Q0dGLFlBQVksQ0FBQzBCLEdBQWIsQ0FBaUI7QUFBQSxnQkFBR0YsRUFBSCxTQUFHQSxFQUFIO0FBQUEsZ0JBQU9LLElBQVAsU0FBT0EsSUFBUDtBQUFBLGdCQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSxnQ0FDaEIsOERBQUMsa0RBQUQ7QUFBZSxrQkFBSSxhQUFNQSxJQUFOLENBQW5CO0FBQUEscUNBQ0UsOERBQUMsVUFBRDtBQUFBLDBCQUFhRDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFXTCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGdCO0FBQUEsV0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBRFEsR0FhTixJQTNCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQS9ERDs7R0FBTTlCLEc7O01BQUFBLEc7QUFpRU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uN2NkMTE2ZWI4NjRkZDU0YTIwOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW0gMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgTGlua3MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuY29uc3QgTGlua0dyb3VwID0gc3R5bGVkLmg1YFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB6LWluZGV4OiAyO1xuYDtcblxuY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMjB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBwYWRkaW5nOiAzcmVtO1xuYDtcblxuY29uc3QgTGlua1NwYW4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5jb25zdCBMaW5rQ29udGFpbmVyQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG5gO1xuXG5jb25zdCBOYXYgPSAoeyBuYXZpZ2F0aW9uLCBpc0hvdmVyZWQsIHNldElzSG92ZXJlZCB9KSA9PiB7XG4gIGNvbnN0IHsgbGlua3MgfSA9IG5hdmlnYXRpb247XG5cbiAgY29uc3QgW2N1cnJlbnRMaW5rcywgc2V0Q3VycmVudExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBsaW5rQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsaW5rU3BhbiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lckJhY2tncm91bmQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAodGFyZ2V0LCBsaW5rSUQpID0+IHtcbiAgICBvbkhvdmVyTGlua1NwYW4odGFyZ2V0KTtcblxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBoZWlnaHQsIHdpZHRoIH0gPSBsaW5rQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZIH0gPSB3aW5kb3c7XG5cbiAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICBsaW5rQ29udGFpbmVyQmFja2dyb3VuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWH1weCwgJHt0b3AgKyBzY3JvbGxZfXB4KWA7XG5cbiAgICBjb25zdCBmaWx0ZXJlZExpbmtzID0gbGlua3MuZmlsdGVyKChsaW5rKSA9PiBsaW5rLmlkID09PSBsaW5rSUQpWzBdLm5hdkxpbmtzO1xuICAgIHNldEN1cnJlbnRMaW5rcyhmaWx0ZXJlZExpbmtzKTtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua1NwYW4gPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcbiAgICBsaW5rQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKCR7MH1weCAtIDUwJSksICR7aGVpZ2h0fXB4KWA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRoICsgMn1weGA7XG4gICAgbGlua1NwYW4uY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQgKiAxLjc1fXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtsZWZ0ICsgc2Nyb2xsWCAtIDF9cHgsICR7dG9wICsgc2Nyb2xsWSAtIDF9cHgpYDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZCYXI+XG4gICAgICA8TG9nbz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5TdHJhcGkgQmxvZzwvTGluaz5cbiAgICAgIDwvTG9nbz5cbiAgICAgIDxMaW5rcz5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBpZCwgbGlua0dyb3VwIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtHcm91cCBrZXk9e2lkfSBvbk1vdXNlT3Zlcj17KGUpID0+IGhhbmRsZUhvdmVyKGUudGFyZ2V0LCBpZCl9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfT5cbiAgICAgICAgICAgICAge2xpbmtHcm91cH1cbiAgICAgICAgICAgIDwvTGlua0dyb3VwPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9MaW5rcz5cblxuICAgICAge2lzSG92ZXJlZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGlua0NvbnRhaW5lckJhY2tncm91bmQgcmVmPXtsaW5rQ29udGFpbmVyQmFja2dyb3VuZH0gLz5cbiAgICAgICAgICA8TGlua1NwYW4gcmVmPXtsaW5rU3Bhbn0+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciByZWY9e2xpbmtDb250YWluZXJ9PlxuICAgICAgICAgICAgICB7Y3VycmVudExpbmtzLm1hcCgoeyBpZCwgbmFtZSwgc2x1ZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpZH0gaHJlZj17YC8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTGluaz57bmFtZX08L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0xpbmtTcGFuPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTmF2QmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==