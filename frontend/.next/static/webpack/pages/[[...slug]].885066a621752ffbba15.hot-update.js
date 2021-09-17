self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\Layout.js",
    _this = undefined;



var Layout = function Layout(_ref) {
  var children = _ref.children,
      navigation = _ref.navigation;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_1__.default, {
      navigation: navigation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, _this), children]
  }, void 0, true);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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


/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\components\\Nav.js",
    _this = undefined;

function _templateObject2() {
  var data = (0,C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  margin-right: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_nnad3_Desktop_Web_development_Original_zse_cisco_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject());
_c = LinkGroup;
var LinkHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.ul(_templateObject2());
_c2 = LinkHeader;

var Nav = function Nav(_ref) {
  var navigation = _ref.navigation;
  var links = navigation.links;
  console.log(links);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "uk-navbar-container",
      "data-uk-navbar": true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-navbar-left",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "Strapi Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-navbar-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: links.map(function (_ref2) {
            var id = _ref2.id,
                linkGroup = _ref2.linkGroup,
                navLinks = _ref2.navLinks;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [console.log(navLinks), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkGroup, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkHeader, {
                  children: linkGroup
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 21
                }, _this), navLinks.map(function (_ref3) {
                  var id = _ref3.id,
                      name = _ref3.name,
                      slug = _ref3.slug;
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/".concat(slug),
                    children: name
                  }, id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 19
              }, _this)]
            }, id, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c3 = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c, _c2, _c3;

$RefreshReg$(_c, "LinkGroup");
$RefreshReg$(_c2, "LinkHeader");
$RefreshReg$(_c3, "Nav");

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


/***/ }),

/***/ "./pages/[[...slug]].js":
/*!******************************!*\
  !*** ./pages/[[...slug]].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
/* harmony import */ var _components_sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections */ "./components/sections.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nnad3\\Desktop\\Web development\\Original\\zse-cisco\\frontend\\pages\\[[...slug]].js",
    _this = undefined;





var DynamicPage = function DynamicPage(_ref) {
  var sections = _ref.sections,
      pageContext = _ref.pageContext,
      navigation = _ref.navigation,
      slug = _ref.slug;
  //   const seo = {
  //     metaTitle: category.name,
  //     metaDescription: `All ${category.name} articles`,
  //   }
  console.log(slug);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    pageContext: pageContext,
    navigation: navigation,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections__WEBPACK_IMPORTED_MODULE_3__.default, {
      sections: sections
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = DynamicPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (DynamicPage);

var _c;

$RefreshReg$(_c, "DynamicPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9bWy4uLnNsdWddXS5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsIm5hdmlnYXRpb24iLCJMaW5rR3JvdXAiLCJzdHlsZWQiLCJMaW5rSGVhZGVyIiwiTmF2IiwibGlua3MiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaWQiLCJsaW5rR3JvdXAiLCJuYXZMaW5rcyIsIm5hbWUiLCJzbHVnIiwiRHluYW1pY1BhZ2UiLCJzZWN0aW9ucyIsInBhZ2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsVUFBYixRQUFhQSxVQUFiO0FBQUEsc0JBQ2I7QUFBQSw0QkFDRSw4REFBQyx5Q0FBRDtBQUFLLGdCQUFVLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHRCxRQUZIO0FBQUEsa0JBRGE7QUFBQSxDQUFmOztLQUFNRCxNO0FBT04sK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBRUEsSUFBTUcsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtLQUFNRCxTO0FBTU4sSUFBTUUsVUFBVSxHQUFHRCx5REFBSCxvQkFBaEI7TUFBTUMsVTs7QUFJTixJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLE1BQWpCSixVQUFpQixRQUFqQkEsVUFBaUI7QUFBQSxNQUN0QkssS0FEc0IsR0FDWkwsVUFEWSxDQUN0QkssS0FEc0I7QUFFOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFxQyw0QkFBckM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsZUFBZDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUEsb0JBQ0dBLEtBQUssQ0FBQ0csR0FBTixDQUFVLGlCQUFpQztBQUFBLGdCQUE5QkMsRUFBOEIsU0FBOUJBLEVBQThCO0FBQUEsZ0JBQTFCQyxTQUEwQixTQUExQkEsU0FBMEI7QUFBQSxnQkFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQzFDLGdDQUNFO0FBQUEseUJBQ0dMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFaLENBREgsZUFFRSw4REFBQyxTQUFEO0FBQUEsd0NBQ0UsOERBQUMsVUFBRDtBQUFBLDRCQUFhRDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFR0MsUUFBUSxDQUFDSCxHQUFULENBQWE7QUFBQSxzQkFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsc0JBQU9HLElBQVAsU0FBT0EsSUFBUDtBQUFBLHNCQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSxzQ0FDWiw4REFBQyxrREFBRDtBQUFlLHdCQUFJLGFBQU1BLElBQU4sQ0FBbkI7QUFBQSw4QkFDR0Q7QUFESCxxQkFBV0gsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURZO0FBQUEsaUJBQWIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxlQUFTQSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFhRCxXQWRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0FyQ0Q7O01BQU1MLEc7QUF1Q04sK0RBQWVBLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBOztBQUdBLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlEO0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQXBDQyxXQUFvQyxRQUFwQ0EsV0FBb0M7QUFBQSxNQUF2QmhCLFVBQXVCLFFBQXZCQSxVQUF1QjtBQUFBLE1BQVhhLElBQVcsUUFBWEEsSUFBVztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBUCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sSUFBWjtBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsZUFBVyxFQUFFRyxXQUFyQjtBQUFrQyxjQUFVLEVBQUVoQixVQUE5QztBQUFBLDJCQUVFLDhEQUFDLHlEQUFEO0FBQVUsY0FBUSxFQUFFZTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FaRDs7S0FBTUQsVzs7QUFpRE4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uODg1MDY2YTYyMTc1MmZmYmJhMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgbmF2aWdhdGlvbiB9KSA9PiAoXG4gIDw+XG4gICAgPE5hdiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSAvPlxuICAgIHtjaGlsZHJlbn1cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBMaW5rR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgTGlua0hlYWRlciA9IHN0eWxlZC51bGBcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuYDtcblxuY29uc3QgTmF2ID0gKHsgbmF2aWdhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHsgbGlua3MgfSA9IG5hdmlnYXRpb247XG4gIGNvbnNvbGUubG9nKGxpbmtzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItY29udGFpbmVyXCIgZGF0YS11ay1uYXZiYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPlN0cmFwaSBCbG9nPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICB7bGlua3MubWFwKCh7IGlkLCBsaW5rR3JvdXAsIG5hdkxpbmtzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cobmF2TGlua3MpfVxuICAgICAgICAgICAgICAgICAgPExpbmtHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtIZWFkZXI+e2xpbmtHcm91cH08L0xpbmtIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKHsgaWQsIG5hbWUsIHNsdWcgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9e2AvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvTGlua0dyb3VwPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFNlbyBmcm9tICcuLi9jb21wb25lbnRzL3Nlbyc7XHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0UGFnZURhdGEgfSBmcm9tICcuLi91dGlscy9nZXRQYWdlRGF0YSc7XHJcblxyXG5jb25zdCBEeW5hbWljUGFnZSA9ICh7IHNlY3Rpb25zLCBwYWdlQ29udGV4dCwgbmF2aWdhdGlvbiwgc2x1ZyB9KSA9PiB7XHJcbiAgLy8gICBjb25zdCBzZW8gPSB7XHJcbiAgLy8gICAgIG1ldGFUaXRsZTogY2F0ZWdvcnkubmFtZSxcclxuICAvLyAgICAgbWV0YURlc2NyaXB0aW9uOiBgQWxsICR7Y2F0ZWdvcnkubmFtZX0gYXJ0aWNsZXNgLFxyXG4gIC8vICAgfVxyXG4gIGNvbnNvbGUubG9nKHNsdWcpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHBhZ2VDb250ZXh0PXtwYWdlQ29udGV4dH0gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0+XHJcbiAgICAgIHsvKiA8U2VvIHNlbz17c2VvfSAvPiAqL31cclxuICAgICAgPFNlY3Rpb25zIHNlY3Rpb25zPXtzZWN0aW9uc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBmZXRjaEFQSSgnL3BhZ2VzJyk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcGFnZXMubWFwKChwYWdlKSA9PiB7XHJcbiAgICAvLyBEZWNvbXBvc2UgdGhlIHNsdWcgdGhhdCB3YXMgc2F2ZWQgaW4gU3RyYXBpXHJcbiAgICBjb25zdCBzbHVnQXJyYXkgPSAhcGFnZS5zbHVnID8gZmFsc2UgOiBwYWdlLnNsdWcuc3BsaXQoJy8nKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgc2x1Zzogc2x1Z0FycmF5IH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGdldFBhZ2VEYXRhKHsgc2x1ZzogIXBhcmFtcy5zbHVnID8gWycnXSA6IHBhcmFtcy5zbHVnIH0pO1xyXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBhd2FpdCBmZXRjaEFQSSgnL25hdmlnYXRpb24nKTtcclxuXHJcbiAgaWYgKHBhZ2VEYXRhID09IG51bGwpIHtcclxuICAgIC8vIEdpdmluZyB0aGUgcGFnZSBubyBwcm9wcyB3aWxsIHRyaWdnZXIgYSA0MDQgcGFnZVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNvbnRlbnQsIHNsdWcgfSA9IHBhZ2VEYXRhO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VjdGlvbnM6IGNvbnRlbnQsXHJcbiAgICAgIG5hdmlnYXRpb24sXHJcbiAgICAgIHNsdWcsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9