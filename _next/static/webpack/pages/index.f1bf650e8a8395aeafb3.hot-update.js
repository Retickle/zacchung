self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/GameJams/GameJamsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/GameJams/GameJamsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "SmallBlogCard": function() { return /* binding */ SmallBlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "GameJamsStyles__Img",
  componentId: "xqffmf-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;border-radius:10px 10px 0px 0px;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GameJamsStyles__GridContainer",
  componentId: "xqffmf-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));padding:1rem;place-items:center;column-gap:20px;row-gap:1rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], function (props) {
  return props.theme.breakpoints.md;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__BlogCard",
  componentId: "xqffmf-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);background:#000000;text-align:center;width:330px;min-height:520px;position:relative;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var SmallBlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__SmallBlogCard",
  componentId: "xqffmf-3"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);background:#000000;text-align:center;width:250px;min-height:440px;position:relative;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__TitleContent",
  componentId: "xqffmf-4"
})(["margin-top:10px;text-align:center;z-index:20;width:100%;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "GameJamsStyles__HeaderThree",
  componentId: "xqffmf-5"
})(["font-weight:500;letter-spacing:2px;color:#7dbacc;padding:0.5rem 0;font-size:", ";"], function (props) {
  return props.title ? '3rem' : '2rem';
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "GameJamsStyles__Hr",
  componentId: "xqffmf-6"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#3d7cbf;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__Intro",
  componentId: "xqffmf-7"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GameJamsStyles__CardInfo",
  componentId: "xqffmf-8"
})(["width:100%;padding:0 30px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:center;@media ", "{padding:0.3rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "GameJamsStyles__UtilityList",
  componentId: "xqffmf-9"
})(["list-style-type:none;padding:0;position:absolute;bottom:0;width:100%;margin:2.5rem 0;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "GameJamsStyles__ExternalLinks",
  componentId: "xqffmf-10"
})(["color:#000000;font-weight:bold;font-size:1.6rem;padding:1rem 1.5rem;background:#1db954;border-radius:15px;transition:0.5s;&:hover{background:#1ed760;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "GameJamsStyles__TagList",
  componentId: "xqffmf-11"
})(["display:flex;justify-content:space-around;padding:2rem;@media ", "{margin-bottom:50px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "GameJamsStyles__Tag",
  componentId: "xqffmf-12"
})(["color:#91cca5;font-weight:bold;font-size:1.8rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZUphbXMvR2FtZUphbXNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwiQmxvZ0NhcmQiLCJzbSIsIlNtYWxsQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdHQUFUO0FBUUEsSUFBTUMsYUFBYSxHQUFHRCx5RUFBSDtBQUFBO0FBQUE7QUFBQSwyTkFPZixVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FQZSxDQUFuQjtBQWNBLElBQU1DLFFBQVEsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsbUxBVVYsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRyxFQUFuQztBQUFBLENBVlUsQ0FBZDtBQWNBLElBQU1DLGFBQWEsR0FBR1IscUVBQUg7QUFBQTtBQUFBO0FBQUEsbUxBVWYsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRyxFQUFuQztBQUFBLENBVmUsQ0FBbkI7QUFjQSxJQUFNRSxZQUFZLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdFQUFsQjtBQU9BLElBQU1VLFdBQVcsR0FBR1Ysb0VBQUg7QUFBQTtBQUFBO0FBQUEsMEZBS1QsVUFBQ0UsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ1MsS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBbkM7QUFBQSxDQUxTLENBQWpCO0FBUUEsSUFBTUMsRUFBRSxHQUFHWixvRUFBSDtBQUFBO0FBQUE7QUFBQSwyRUFBUjtBQVFBLElBQU1hLEtBQUssR0FBR2IscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFVQSxJQUFNYyxRQUFRLEdBQUdkLG1FQUFIO0FBQUE7QUFBQTtBQUFBLGdJQU9WLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkcsRUFBbkM7QUFBQSxDQVBVLENBQWQ7QUFZQSxJQUFNUSxXQUFXLEdBQUdmLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDZGQUFqQjtBQVdBLElBQU1nQixhQUFhLEdBQUdoQixtRUFBSDtBQUFBO0FBQUE7QUFBQSw4SkFBbkI7QUFhQSxJQUFNaUIsT0FBTyxHQUFHakIsb0VBQUg7QUFBQTtBQUFBO0FBQUEsZ0dBSVQsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRyxFQUFuQztBQUFBLENBSlMsQ0FBYjtBQVFBLElBQU1XLEdBQUcsR0FBR2xCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHdEQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxYmY2NTBlOGE4Mzk1YWVhZmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogMjBweDtcclxuICByb3ctZ2FwOiAxcmVtO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG5cclxuICBtaW4taGVpZ2h0OiA1MjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNtYWxsQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoODAsIDc4LCA3OCwgMC41KTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWluLWhlaWdodDogNDQwcHg7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICM3ZGJhY2M7XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLnRpdGxlID8gJzNyZW0nIDogJzJyZW0nKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICMzZDdjYmY7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjb2xvcjogI2RjZTNlNztcclxuICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBjb2xvcjogI2U0ZTZlNztcclxuICBmb250LXN0eWxlOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDIuNXJlbSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZWQ3NjA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGFnID0gc3R5bGVkLmxpYFxyXG4gIGNvbG9yOiAjOTFjY2E1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9