self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./assets/styles/theme.js":
/*!********************************!*\
  !*** ./assets/styles/theme.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    backgroundColor: '#E8EBF1',
    mainColor: '#0E274D',
    accentColor: '#00BCEA'
  },
  fontSize: {
    header: '4.8rem',
    navHeader: '3.6rem',
    navList: '1.8rem',
    subHeader: '2rem',
    captionLarge: '2.4rem',
    captionMedium: '1.3rem',
    captionSmall: '1.2rem',
    body: '1.6rem',
    bodySmall: '1.4rem'
  },
  dimensions: {
    padding: '10vw',
    paddingMobile: '5vw',
    paddingNarrow: '15vw',
    heroCoursePadding: '3rem 5rem',
    cardPaddingMobile: '5vw',
    heroAcademyPadding: '4rem 4.5rem',
    navigationPadding: '15vh 12vw',
    navigationColumnGap: '15vw',
    navigationRowGap: '6rem'
  },
  utils: {
    borderRadius: '6px',
    boxShadow: '0px 4px 14px  rgba(0, 0, 0, 0.1)'
  },
  mq: {
    heroInstructors: "@media (min-width: 1438px)",
    desktop: "@media (max-width: 1550px)",
    desktopTall: "@media (min-height: 1100px) and (min-width: 850px) and (max-width: 1400px)",
    desktopWide: "@media (min-width: 1400px)",
    laptop: "@media (max-width: 1224px)",
    mobileLarge: "@media (max-width: 568px)",
    mobileMedium: "@media (max-width: 450px)",
    mobileSmall: "@media (max-width: 350px)"
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL3N0eWxlcy90aGVtZS5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNvbG9ycyIsIndoaXRlIiwiYmxhY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluQ29sb3IiLCJhY2NlbnRDb2xvciIsImZvbnRTaXplIiwiaGVhZGVyIiwibmF2SGVhZGVyIiwibmF2TGlzdCIsInN1YkhlYWRlciIsImNhcHRpb25MYXJnZSIsImNhcHRpb25NZWRpdW0iLCJjYXB0aW9uU21hbGwiLCJib2R5IiwiYm9keVNtYWxsIiwiZGltZW5zaW9ucyIsInBhZGRpbmciLCJwYWRkaW5nTW9iaWxlIiwicGFkZGluZ05hcnJvdyIsImhlcm9Db3Vyc2VQYWRkaW5nIiwiY2FyZFBhZGRpbmdNb2JpbGUiLCJoZXJvQWNhZGVteVBhZGRpbmciLCJuYXZpZ2F0aW9uUGFkZGluZyIsIm5hdmlnYXRpb25Db2x1bW5HYXAiLCJuYXZpZ2F0aW9uUm93R2FwIiwidXRpbHMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtcSIsImhlcm9JbnN0cnVjdG9ycyIsImRlc2t0b3AiLCJkZXNrdG9wVGFsbCIsImRlc2t0b3BXaWRlIiwibGFwdG9wIiwibW9iaWxlTGFyZ2UiLCJtb2JpbGVNZWRpdW0iLCJtb2JpbGVTbWFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkJDLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUUsU0FERDtBQUVOQyxTQUFLLEVBQUUsU0FGRDtBQUdOQyxtQkFBZSxFQUFFLFNBSFg7QUFJTkMsYUFBUyxFQUFFLFNBSkw7QUFLTkMsZUFBVyxFQUFFO0FBTFAsR0FEVztBQVFuQkMsVUFBUSxFQUFFO0FBQ1JDLFVBQU0sRUFBRSxRQURBO0FBRVJDLGFBQVMsRUFBRSxRQUZIO0FBR1JDLFdBQU8sRUFBRSxRQUhEO0FBSVJDLGFBQVMsRUFBRSxNQUpIO0FBS1JDLGdCQUFZLEVBQUUsUUFMTjtBQU1SQyxpQkFBYSxFQUFFLFFBTlA7QUFPUkMsZ0JBQVksRUFBRSxRQVBOO0FBUVJDLFFBQUksRUFBRSxRQVJFO0FBU1JDLGFBQVMsRUFBRTtBQVRILEdBUlM7QUFtQm5CQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLE1BREM7QUFFVkMsaUJBQWEsRUFBRSxLQUZMO0FBR1ZDLGlCQUFhLEVBQUUsTUFITDtBQUlWQyxxQkFBaUIsRUFBRSxXQUpUO0FBS1ZDLHFCQUFpQixFQUFFLEtBTFQ7QUFNVkMsc0JBQWtCLEVBQUUsYUFOVjtBQU9WQyxxQkFBaUIsRUFBRSxXQVBUO0FBUVZDLHVCQUFtQixFQUFFLE1BUlg7QUFTVkMsb0JBQWdCLEVBQUU7QUFUUixHQW5CTztBQThCbkJDLE9BQUssRUFBRTtBQUNMQyxnQkFBWSxFQUFFLEtBRFQ7QUFFTEMsYUFBUyxFQUFFO0FBRk4sR0E5Qlk7QUFrQ25CQyxJQUFFLEVBQUU7QUFDRkMsbUJBQWUsOEJBRGI7QUFFRkMsV0FBTyw4QkFGTDtBQUdGQyxlQUFXLDhFQUhUO0FBSUZDLGVBQVcsOEJBSlQ7QUFLRkMsVUFBTSw4QkFMSjtBQU1GQyxlQUFXLDZCQU5UO0FBT0ZDLGdCQUFZLDZCQVBWO0FBUUZDLGVBQVc7QUFSVDtBQWxDZSxDQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjgzZTE4ZDMyMzkxNWYzZGIzMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXHJcbiAgICBibGFjazogJyMwMDAwMDAnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0U4RUJGMScsXHJcbiAgICBtYWluQ29sb3I6ICcjMEUyNzREJyxcclxuICAgIGFjY2VudENvbG9yOiAnIzAwQkNFQScsXHJcbiAgfSxcclxuICBmb250U2l6ZToge1xyXG4gICAgaGVhZGVyOiAnNC44cmVtJyxcclxuICAgIG5hdkhlYWRlcjogJzMuNnJlbScsXHJcbiAgICBuYXZMaXN0OiAnMS44cmVtJyxcclxuICAgIHN1YkhlYWRlcjogJzJyZW0nLFxyXG4gICAgY2FwdGlvbkxhcmdlOiAnMi40cmVtJyxcclxuICAgIGNhcHRpb25NZWRpdW06ICcxLjNyZW0nLFxyXG4gICAgY2FwdGlvblNtYWxsOiAnMS4ycmVtJyxcclxuICAgIGJvZHk6ICcxLjZyZW0nLFxyXG4gICAgYm9keVNtYWxsOiAnMS40cmVtJyxcclxuICB9LFxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHBhZGRpbmc6ICcxMHZ3JyxcclxuICAgIHBhZGRpbmdNb2JpbGU6ICc1dncnLFxyXG4gICAgcGFkZGluZ05hcnJvdzogJzE1dncnLFxyXG4gICAgaGVyb0NvdXJzZVBhZGRpbmc6ICczcmVtIDVyZW0nLFxyXG4gICAgY2FyZFBhZGRpbmdNb2JpbGU6ICc1dncnLFxyXG4gICAgaGVyb0FjYWRlbXlQYWRkaW5nOiAnNHJlbSA0LjVyZW0nLFxyXG4gICAgbmF2aWdhdGlvblBhZGRpbmc6ICcxNXZoIDEydncnLFxyXG4gICAgbmF2aWdhdGlvbkNvbHVtbkdhcDogJzE1dncnLFxyXG4gICAgbmF2aWdhdGlvblJvd0dhcDogJzZyZW0nLFxyXG4gIH0sXHJcbiAgdXRpbHM6IHtcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggNHB4IDE0cHggIHJnYmEoMCwgMCwgMCwgMC4xKScsXHJcbiAgfSxcclxuICBtcToge1xyXG4gICAgaGVyb0luc3RydWN0b3JzOiBgQG1lZGlhIChtaW4td2lkdGg6IDE0MzhweClgLFxyXG4gICAgZGVza3RvcDogYEBtZWRpYSAobWF4LXdpZHRoOiAxNTUwcHgpYCxcclxuICAgIGRlc2t0b3BUYWxsOiBgQG1lZGlhIChtaW4taGVpZ2h0OiAxMTAwcHgpIGFuZCAobWluLXdpZHRoOiA4NTBweCkgYW5kIChtYXgtd2lkdGg6IDE0MDBweClgLFxyXG4gICAgZGVza3RvcFdpZGU6IGBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KWAsXHJcbiAgICBsYXB0b3A6IGBAbWVkaWEgKG1heC13aWR0aDogMTIyNHB4KWAsXHJcbiAgICBtb2JpbGVMYXJnZTogYEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweClgLFxyXG4gICAgbW9iaWxlTWVkaXVtOiBgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KWAsXHJcbiAgICBtb2JpbGVTbWFsbDogYEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweClgLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=