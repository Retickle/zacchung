self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
});
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-1ehw0pq-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-1ehw0pq-3"
})(["display:flex;flex-direction:column;@media ", "{display:flex;margin-left:18px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-1ehw0pq-4"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#f0f6fc;margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-1ehw0pq-5"
})(["font-size:18px;line-height:30px;color:#8b949e;@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-1ehw0pq-6"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-1ehw0pq-7"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llc1N0eWxlcy5qcyJdLCJuYW1lcyI6WyJJbWFnZUNvbnRhaW5lciIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsImxnIiwibWQiLCJNYWluSW1hZ2UiLCJMaXN0Iiwic20iLCJMaXN0Q29udGFpbmVyIiwiTGlzdFRpdGxlIiwiTGlzdFBhcmFncmFwaCIsIkxpc3RJdGVtIiwiTGlzdEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGNBQWMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsbVhBV2hCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQVhXLEVBZ0JoQixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQTVCO0FBQUEsQ0FoQlcsQ0FBcEI7QUF1QkEsSUFBTUMsU0FBUyxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSxtQkFBZjtBQUlBLElBQU1PLElBQUksR0FBR1Asb0VBQUg7QUFBQTtBQUFBO0FBQUEsa09BT04sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBUEMsRUFXTixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQTVCO0FBQUEsQ0FYQyxFQWdCTixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQTVCO0FBQUEsQ0FoQkMsQ0FBVjtBQXVCQSxJQUFNQyxhQUFhLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVGQUlmLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBNUI7QUFBQSxDQUpVLENBQW5CO0FBVUEsSUFBTUUsU0FBUyxHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSxpUEFRYixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQTVCO0FBQUEsQ0FSUSxFQWFiLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBNUI7QUFBQSxDQWJRLENBQWY7QUFxQkEsSUFBTUcsYUFBYSxHQUFHWCxtRUFBSDtBQUFBO0FBQUE7QUFBQSxpSkFNZixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQTVCO0FBQUEsQ0FOVSxFQVdmLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBNUI7QUFBQSxDQVhVLENBQW5CO0FBaUJBLElBQU1JLFFBQVEsR0FBR1osb0VBQUg7QUFBQTtBQUFBO0FBQUEsNEpBS1osVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUE1QjtBQUFBLENBTE8sRUFTWixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQTVCO0FBQUEsQ0FUTyxDQUFkO0FBZ0JBLElBQU1LLFFBQVEsR0FBR2IscUVBQUg7QUFBQTtBQUFBO0FBQUEsNktBTVYsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUE1QjtBQUFBLENBTkssRUFZVixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQTVCO0FBQUEsQ0FaSyxDQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmMDk2YWUwOTdjNzMxMGNlODljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg1MCUgNTAlIGF0IDUwJSA1MCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwLjI1KSA1My44JSwgcmdiYSg3OSwgMTA4LCAxNzYsIDApIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNjBweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW46IDNyZW0gMDtcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgICBnYXA6IDI0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6ICNmMGY2ZmM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLy8gY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGNvbG9yOiAjOGI5NDllO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBtYXgtd2lkdGg6IDIwM3B4O1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0SWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuYCJdLCJzb3VyY2VSb290IjoiIn0=