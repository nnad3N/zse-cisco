self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/atoms/FunctionalLink.js":
/*!********************************************!*\
  !*** ./components/atoms/FunctionalLink.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\atoms\\FunctionalLink.js",
    _this = undefined;





var FunctionalLink = function FunctionalLink(_ref) {
  var link = _ref.link,
      setIsNavOpen = _ref.setIsNavOpen;
  var name = link.name,
      slug = link.slug,
      newTab = link.newTab;

  if (newTab) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: slug,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/".concat(slug),
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: function onClick() {
        return setIsNavOpen(function (state) {
          return !state;
        });
      },
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c = FunctionalLink;
FunctionalLink.propTypes = {
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    newTab: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
  }),
  setIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
FunctionalLink.defaultProps = {
  link: {
    name: 'Link',
    slug: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FunctionalLink);

var _c;

$RefreshReg$(_c, "FunctionalLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9GdW5jdGlvbmFsTGluay5qcyJdLCJuYW1lcyI6WyJGdW5jdGlvbmFsTGluayIsImxpbmsiLCJzZXRJc05hdk9wZW4iLCJuYW1lIiwic2x1ZyIsIm5ld1RhYiIsInN0YXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTRCO0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFBQSxNQUN6Q0MsSUFEeUMsR0FDbEJGLElBRGtCLENBQ3pDRSxJQUR5QztBQUFBLE1BQ25DQyxJQURtQyxHQUNsQkgsSUFEa0IsQ0FDbkNHLElBRG1DO0FBQUEsTUFDN0JDLE1BRDZCLEdBQ2xCSixJQURrQixDQUM3QkksTUFENkI7O0FBR2pELE1BQUlBLE1BQUosRUFBWTtBQUNWLHdCQUNFO0FBQUcsVUFBSSxFQUFFRCxJQUFUO0FBQWUsWUFBTSxFQUFDLFFBQXRCO0FBQStCLFNBQUcsRUFBQyxxQkFBbkM7QUFBeUQsYUFBTyxFQUFFO0FBQUEsZUFBTUYsWUFBWSxDQUFDLFVBQUNJLEtBQUQ7QUFBQSxpQkFBVyxDQUFDQSxLQUFaO0FBQUEsU0FBRCxDQUFsQjtBQUFBLE9BQWxFO0FBQUEsZ0JBQ0dIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7O0FBRUQsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLGFBQU1DLElBQU4sQ0FBVjtBQUF3QixZQUFRLE1BQWhDO0FBQUEsMkJBQ0U7QUFBRyxhQUFPLEVBQUU7QUFBQSxlQUFNRixZQUFZLENBQUMsVUFBQ0ksS0FBRDtBQUFBLGlCQUFXLENBQUNBLEtBQVo7QUFBQSxTQUFELENBQWxCO0FBQUEsT0FBWjtBQUFBLGdCQUFvREg7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBaEJEOztLQUFNSCxjO0FBa0JOQSxjQUFjLENBQUNPLFNBQWYsR0FBMkI7QUFDekJOLE1BQUksRUFBRU8sdURBQUEsQ0FBZ0I7QUFDcEJMLFFBQUksRUFBRUsscUVBRGM7QUFFcEJKLFFBQUksRUFBRUkscUVBRmM7QUFHcEJILFVBQU0sRUFBRUcsd0RBQWNDO0FBSEYsR0FBaEIsQ0FEbUI7QUFNekJQLGNBQVksRUFBRU0sd0RBQWNFO0FBTkgsQ0FBM0I7QUFTQVYsY0FBYyxDQUFDVyxZQUFmLEdBQThCO0FBQzVCVixNQUFJLEVBQUU7QUFDSkUsUUFBSSxFQUFFLE1BREY7QUFFSkMsUUFBSSxFQUFFO0FBRkY7QUFEc0IsQ0FBOUI7QUFPQSwrREFBZUosY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5jMzNjNzFkZDZjZGNjYTk0ZDNlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEZ1bmN0aW9uYWxMaW5rID0gKHsgbGluaywgc2V0SXNOYXZPcGVuIH0pID0+IHtcclxuICBjb25zdCB7IG5hbWUsIHNsdWcsIG5ld1RhYiB9ID0gbGluaztcclxuXHJcbiAgaWYgKG5ld1RhYikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGEgaHJlZj17c2x1Z30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIG9uQ2xpY2s9eygpID0+IHNldElzTmF2T3Blbigoc3RhdGUpID0+ICFzdGF0ZSl9PlxyXG4gICAgICAgIHtuYW1lfVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oKHN0YXRlKSA9PiAhc3RhdGUpfT57bmFtZX08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkZ1bmN0aW9uYWxMaW5rLnByb3BUeXBlcyA9IHtcclxuICBsaW5rOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgbmV3VGFiOiBQcm9wVHlwZXMuYm9vbCxcclxuICB9KSxcclxuICBzZXRJc05hdk9wZW46IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRnVuY3Rpb25hbExpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxpbms6IHtcclxuICAgIG5hbWU6ICdMaW5rJyxcclxuICAgIHNsdWc6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbmFsTGluaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==