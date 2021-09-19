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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.NavBar, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.Logo, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.Links, {
      children: links.map(function (_ref2) {
        var id = _ref2.id,
            linkGroup = _ref2.linkGroup;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.LinkGroup, {
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.LinkContainerBackground, {
        ref: linkContainerBackground
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.LinkSpan, {
        ref: linkSpan,
        onMouseLeave: function onMouseLeave() {
          setIsHovered(function (state) {
            return !state;
          });
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, {
          ref: linkContainer,
          children: currentLinks.map(function (_ref3) {
            var id = _ref3.id,
                name = _ref3.name,
                slug = _ref3.slug;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/".concat(slug),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_styles__WEBPACK_IMPORTED_MODULE_3__.StyledLink, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdiIsIm5hdmlnYXRpb24iLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJsaW5rcyIsInVzZVN0YXRlIiwiY3VycmVudExpbmtzIiwic2V0Q3VycmVudExpbmtzIiwibGlua0NvbnRhaW5lciIsInVzZVJlZiIsImxpbmtTcGFuIiwibGlua0NvbnRhaW5lckJhY2tncm91bmQiLCJoYW5kbGVIb3ZlciIsInRhcmdldCIsImxpbmtJRCIsIm9uSG92ZXJMaW5rU3BhbiIsIm9uSG92ZXJMaW5rQmFja2dyb3VuZCIsImZpbHRlcmVkTGlua3MiLCJmaWx0ZXIiLCJsaW5rIiwiaWQiLCJuYXZMaW5rcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwiY3VycmVudCIsInN0eWxlIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsIm1hcCIsImxpbmtHcm91cCIsImUiLCJzdGF0ZSIsIm5hbWUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLFVBQTBDLFFBQTFDQSxVQUEwQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQUEsTUFDL0NDLEtBRCtDLEdBQ3JDSCxVQURxQyxDQUMvQ0csS0FEK0M7O0FBQUEsa0JBRWZDLCtDQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFaERDLFlBRmdEO0FBQUEsTUFFbENDLGVBRmtDOztBQUd2RCxNQUFNQyxhQUFhLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUE1QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qs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QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURRLEdBa0JOLElBaENOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBdkVEOztHQUFNcEIsRzs7S0FBQUEsRztBQXlFTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5jZWQ2OThkMGI1ZjNkMjM1NWIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBOYXZCYXIsIExvZ28sIExpbmtzLCBMaW5rR3JvdXAsIFN0eWxlZExpbmssIExpbmtDb250YWluZXIsIExpbmtTcGFuLCBMaW5rQ29udGFpbmVyQmFja2dyb3VuZCB9IGZyb20gJy4vTmF2LnN0eWxlcyc7XG5cbmNvbnN0IE5hdiA9ICh7IG5hdmlnYXRpb24sIGlzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkIH0pID0+IHtcbiAgY29uc3QgeyBsaW5rcyB9ID0gbmF2aWdhdGlvbjtcbiAgY29uc3QgW2N1cnJlbnRMaW5rcywgc2V0Q3VycmVudExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbGlua1NwYW4gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGxpbmtDb250YWluZXJCYWNrZ3JvdW5kID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKHRhcmdldCwgbGlua0lEKSA9PiB7XG4gICAgb25Ib3ZlckxpbmtTcGFuKHRhcmdldCk7XG4gICAgb25Ib3ZlckxpbmtCYWNrZ3JvdW5kKCk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZExpbmtzID0gbGlua3MuZmlsdGVyKChsaW5rKSA9PiBsaW5rLmlkID09PSBsaW5rSUQpWzBdLm5hdkxpbmtzO1xuICAgIHNldEN1cnJlbnRMaW5rcyhmaWx0ZXJlZExpbmtzKTtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGlua1NwYW4gPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcbiAgICBsaW5rQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShjYWxjKCR7d2lkdGggLyAyfXB4IC0gNTAlKSwgJHtoZWlnaHQgKiAxLjJ9cHgpYDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAyfXB4YDtcbiAgICBsaW5rU3Bhbi5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCAqIDEuNzV9cHhgO1xuICAgIGxpbmtTcGFuLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2xlZnQgKyBzY3JvbGxYIC0gMX1weCwgJHt0b3AgKyBzY3JvbGxZIC0gMX1weClgO1xuICB9O1xuXG4gIGNvbnN0IG9uSG92ZXJMaW5rQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBoZWlnaHQsIHdpZHRoIH0gPSBsaW5rQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcblxuICAgICAgbGlua0NvbnRhaW5lckJhY2tncm91bmQuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgIGxpbmtDb250YWluZXJCYWNrZ3JvdW5kLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2xlZnQgKyBzY3JvbGxYfXB4LCAke3RvcCArIHNjcm9sbFl9cHgpYDtcbiAgICB9LCAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZCYXI+XG4gICAgICA8TG9nbz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5TdHJhcGkgQmxvZzwvTGluaz5cbiAgICAgIDwvTG9nbz5cbiAgICAgIDxMaW5rcz5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBpZCwgbGlua0dyb3VwIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtHcm91cCBrZXk9e2lkfSBvbk1vdXNlT3Zlcj17KGUpID0+IGhhbmRsZUhvdmVyKGUudGFyZ2V0LCBpZCl9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfT5cbiAgICAgICAgICAgICAge2xpbmtHcm91cH1cbiAgICAgICAgICAgIDwvTGlua0dyb3VwPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9MaW5rcz5cblxuICAgICAge2lzSG92ZXJlZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGlua0NvbnRhaW5lckJhY2tncm91bmQgcmVmPXtsaW5rQ29udGFpbmVyQmFja2dyb3VuZH0gLz5cbiAgICAgICAgICA8TGlua1NwYW5cbiAgICAgICAgICAgIHJlZj17bGlua1NwYW59XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNIb3ZlcmVkKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgcmVmPXtsaW5rQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAge2N1cnJlbnRMaW5rcy5tYXAoKHsgaWQsIG5hbWUsIHNsdWcgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9e2AvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbms+e25hbWV9PC9TdHlsZWRMaW5rPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9MaW5rU3Bhbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L05hdkJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=