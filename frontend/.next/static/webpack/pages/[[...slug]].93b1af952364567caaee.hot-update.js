self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/molecules/HeroCourseComponent/HeroCourseComponent.js":
/*!*************************************************************************!*\
  !*** ./components/molecules/HeroCourseComponent/HeroCourseComponent.js ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atoms/ArrowLink/ArrowLink */ "./components/atoms/ArrowLink/ArrowLink.js");
/* harmony import */ var _atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @atoms/LineVertical/LineVertical */ "./components/atoms/LineVertical/LineVertical.js");
/* harmony import */ var _HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroCourseComponent.styles */ "./components/molecules/HeroCourseComponent/HeroCourseComponent.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\molecules\\HeroCourseComponent\\HeroCourseComponent.js",
    _this = undefined;







var HeroCourseComponent = function HeroCourseComponent(_ref) {
  var data = _ref.data,
      image = _ref.image;
  var title = data.title,
      description = data.description,
      slug = data.link.slug,
      linkName = data.linkName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_5__.HeroCourseComponentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroCourseComponent_styles__WEBPACK_IMPORTED_MODULE_5__.ImageWrapper, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_LineVertical_LineVertical__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_ArrowLink_ArrowLink__WEBPACK_IMPORTED_MODULE_3__.default, {
      slug: slug,
      title: linkName,
      image: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_c = HeroCourseComponent;
HeroCourseComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    link: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
      slug: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
    }),
    linkName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
  }),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
HeroCourseComponent.defaultProps = {
  data: {
    link: {
      slug: ''
    },
    linkName: 'Link'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HeroCourseComponent);

var _c;

$RefreshReg$(_c, "HeroCourseComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvSGVyb0NvdXJzZUNvbXBvbmVudC9IZXJvQ291cnNlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkhlcm9Db3Vyc2VDb21wb25lbnQiLCJkYXRhIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2x1ZyIsImxpbmsiLCJsaW5rTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBcUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQUEsTUFFN0NDLEtBRjZDLEdBTTNDRixJQU4yQyxDQUU3Q0UsS0FGNkM7QUFBQSxNQUc3Q0MsV0FINkMsR0FNM0NILElBTjJDLENBRzdDRyxXQUg2QztBQUFBLE1BSXJDQyxJQUpxQyxHQU0zQ0osSUFOMkMsQ0FJN0NLLElBSjZDLENBSXJDRCxJQUpxQztBQUFBLE1BSzdDRSxRQUw2QyxHQU0zQ04sSUFOMkMsQ0FLN0NNLFFBTDZDO0FBUS9DLHNCQUNFLDhEQUFDLG1GQUFEO0FBQUEsNEJBQ0UsOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBS0o7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxxRUFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQU1FLDhEQUFDLCtEQUFEO0FBQVcsVUFBSSxFQUFFQyxJQUFqQjtBQUF1QixXQUFLLEVBQUVFLFFBQTlCO0FBQXdDLFdBQUssRUFBRUw7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FsQkQ7O0tBQU1GLG1CO0FBb0JOQSxtQkFBbUIsQ0FBQ1EsU0FBcEIsR0FBZ0M7QUFDOUJQLE1BQUksRUFBRVEsdURBQUEsQ0FBZ0I7QUFDcEJOLFNBQUssRUFBRU0sMERBRGE7QUFFcEJMLGVBQVcsRUFBRUssMERBRk87QUFHcEJILFFBQUksRUFBRUcsdURBQUEsQ0FBZ0I7QUFDcEJKLFVBQUksRUFBRUkscUVBQTJCQztBQURiLEtBQWhCLENBSGM7QUFNcEJILFlBQVEsRUFBRUUscUVBQTJCQztBQU5qQixHQUFoQixDQUR3QjtBQVM5QlIsT0FBSyxFQUFFTywwREFBZ0JFO0FBVE8sQ0FBaEM7QUFZQVgsbUJBQW1CLENBQUNZLFlBQXBCLEdBQW1DO0FBQ2pDWCxNQUFJLEVBQUU7QUFDSkssUUFBSSxFQUFFO0FBQ0pELFVBQUksRUFBRTtBQURGLEtBREY7QUFJSkUsWUFBUSxFQUFFO0FBSk47QUFEMkIsQ0FBbkM7QUFTQSwrREFBZVAsbUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uOTNiMWFmOTUyMzY0NTY3Y2FhZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnQGF0b21zL0Fycm93TGluay9BcnJvd0xpbmsnO1xyXG5pbXBvcnQgTGluZVZlcnRpY2FsIGZyb20gJ0BhdG9tcy9MaW5lVmVydGljYWwvTGluZVZlcnRpY2FsJztcclxuaW1wb3J0IHsgSGVyb0NvdXJzZUNvbXBvbmVudFdyYXBwZXIsIEltYWdlV3JhcHBlciB9IGZyb20gJy4vSGVyb0NvdXJzZUNvbXBvbmVudC5zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVyb0NvdXJzZUNvbXBvbmVudCA9ICh7IGRhdGEsIGltYWdlIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgbGluazogeyBzbHVnIH0sXHJcbiAgICBsaW5rTmFtZSxcclxuICB9ID0gZGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZXJvQ291cnNlQ29tcG9uZW50V3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlciAvPlxyXG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxMaW5lVmVydGljYWw+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9MaW5lVmVydGljYWw+XHJcbiAgICAgIDxBcnJvd0xpbmsgc2x1Zz17c2x1Z30gdGl0bGU9e2xpbmtOYW1lfSBpbWFnZT17aW1hZ2V9IC8+XHJcbiAgICA8L0hlcm9Db3Vyc2VDb21wb25lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvQ291cnNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxpbms6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICAgbGlua05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KSxcclxuICBpbWFnZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbkhlcm9Db3Vyc2VDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGxpbms6IHtcclxuICAgICAgc2x1ZzogJycsXHJcbiAgICB9LFxyXG4gICAgbGlua05hbWU6ICdMaW5rJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0NvdXJzZUNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==