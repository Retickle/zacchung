self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "gameJams": function() { return /* binding */ gameJams; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Research Paper',
  description: "Titled 'The Vast Developments of the Market Revolution,' this paper aims to consider the major economic and technological progressions brought by the Market Revolution of the early 1800s. Here, the major changes of American life are considered.",
  image: '/images/Market Revolution Preview.png',
  tags: ['American History', 'Market Revolution'],
  source: 'https://google.com',
  visit: 'https://drive.google.com/file/d/1RIMlCwMZAvh5bgDwb5br01eu8R8chBt3/view?usp=sharing',
  id: 0
}, {
  title: 'Economic Case Study',
  description: "This paper seeks to analyze the industrial position of the De Beers diamond corporation. Considered a cartel by many, De Beers' overwhelming market power raises questions of price stability, worldwide competition, and antitrust laws. ",
  image: '/images/De Beers Preview.png',
  tags: ['Industrial Organization', 'Antitrust Law'],
  source: 'https://youtube.com',
  visit: 'https://drive.google.com/file/d/1TVCT1hSny-tGlj6jRYXtqkwGBCXAQOH2/view?usp=sharing',
  id: 1
} // {
//   title: 'ignore this pls',
//   description: "im still making this site as you read this...",
//     image: '/images/3.jpg',
//     tags: ['React', 'WebRTC'],
//   source: 'https://google.com',
//   visit: 'https://google.com',
//   id: 2,
// },
// {
//   title: 'ignore this as well please',
//   description: "I wanted to have this done earlier...",
//   image: '/images/4.jpg',
//   tags: ['React', 'ChatEngine', 'Firebase'],
//   source: 'https://google.com',
//   visit: 'https://google.com',
//   id: 3,
// },
];
var gameJams = [{
  title: 'KBILLY Super Sounds',
  description: 'An animation set to audio from Reservoir Dogs. Intentional "glitchy" and hand drawn look.',
  image: '/images/KBILLY Preview.png',
  tags: ['Unity', 'C#', 'LudumDare Jam'],
  source: 'https://drive.google.com/file/d/1NGD-q8CCRifgN1vJWyvQ7b-cEkfwaBfD/view?usp=sharing',
  // jam: 'Super Sounds by Steven Wright',
  theme: 'Be sure to select 1080p!',
  id: 0
}, {
  title: 'The Later Lab',
  description: 'Travel between timelines and transport objects back and forth to solve puzzles.',
  image: 'static/images/thelaterlab.gif',
  tags: ['Unity', 'C#', 'GMTK Jam'],
  source: 'https://teamjolu.itch.io/the-later-lab',
  jam: 'GMTK 2021 Jam',
  theme: 'Puzzle Platformer',
  id: 1
}, {
  title: 'Vice Elf',
  description: "Play as an elf who has gone made in Santa's workshop and is trying to eat all other elves!",
  image: 'static/images/viceelf.gif',
  tags: ['Unity', 'C#', 'Tilted Jam'],
  source: 'https://bombur40.itch.io/tilted-game-jam-elf-game',
  jam: 'Tilted 2019 Jam',
  theme: 'Top Down Action',
  id: 2
}, {
  title: 'Torch Fella',
  description: 'Control a series of blobs to transport a lit torch across a level in order to light the bonfire.',
  image: 'static/images/torchfella.gif',
  tags: ['Unity', 'C#', 'Game Jam'],
  source: 'https://flowluke.itch.io/torch-fella',
  jam: 'Weekly 168 Jam',
  theme: 'Isometric Puzzle',
  id: 3
}];
var TimeLineData = [{
  year: 'Introduction',
  text: 'My interest in Economics and Business started as a little kid, and has only grown since. Big fan of big picture stuff!'
}, {
  year: 'Games',
  text: 'I enjoy playing every kind of game. Some recent favorites include Overwatch, Civ VI, L.A. Noire, Papers Please, and some DnD 5E.'
}, {
  year: 'Aspirations',
  text: "I aim to work where my economic and business interests intersect with the things I'm passionnate about. See those things above!"
}, {
  year: 'Music',
  text: 'I figure I need a quick list. Pet Sounds, Lola vs. Powerman, and The Point! Currently learning the guitar and improving my piano!'
}, {
  year: 'Movies',
  text: 'Might as well make another list. The Darjeeling Limited, Reservior Dogs, Pulp Fiction, There Will Be Blood.'
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImdhbWVKYW1zIiwidGhlbWUiLCJqYW0iLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLHNQQUZmO0FBR0lDLE9BQUssRUFBRSx1Q0FIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixtQkFBckIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9GQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUMsNE9BRmQ7QUFHRUMsT0FBSyxFQUFFLDhCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLHlCQUFELEVBQTRCLGVBQTVCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHFCQUxWO0FBTUVDLE9BQUssRUFBRSxvRkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixDQW1CdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENzQixDQUFqQjtBQXVDQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRVAsT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFDVCwyRkFISjtBQUlFQyxPQUFLLEVBQUUsNEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsZUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0ZBTlY7QUFPRTtBQUNDSSxPQUFLLEVBQUUsMEJBUlY7QUFTRUYsSUFBRSxFQUFFO0FBVE4sQ0FEc0IsRUFZdEI7QUFDRU4sT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUNULGlGQUhKO0FBSUVDLE9BQUssRUFBRSwrQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixVQUFoQixDQUxSO0FBTUVDLFFBQU0sRUFBRSx3Q0FOVjtBQU9FSyxLQUFHLEVBQUUsZUFQUDtBQVFFRCxPQUFLLEVBQUUsbUJBUlQ7QUFTRUYsSUFBRSxFQUFFO0FBVE4sQ0Fac0IsRUF1QnRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFDVCw0RkFISjtBQUlFQyxPQUFLLEVBQUUsMkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsWUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsbURBTlY7QUFPRUssS0FBRyxFQUFFLGlCQVBQO0FBUUVELE9BQUssRUFBRSxpQkFSVDtBQVNFRixJQUFFLEVBQUU7QUFUTixDQXZCc0IsRUFrQ3RCO0FBQ0VOLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFDVCxrR0FISjtBQUlFQyxPQUFLLEVBQUUsOEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsc0NBTlY7QUFPRUssS0FBRyxFQUFFLGdCQVBQO0FBUUVELE9BQUssRUFBRSxrQkFSVDtBQVNFRixJQUFFLEVBQUU7QUFUTixDQWxDc0IsQ0FBakI7QUFnREEsSUFBTUksWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxjQUFSO0FBQXdCQyxNQUFJLEVBQUU7QUFBOUIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRTtBQUF2QixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsYUFBUjtBQUF1QkMsTUFBSSxFQUFFO0FBQTdCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxPQUFSO0FBQWlCQyxNQUFJLEVBQUU7QUFBdkIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMWI2MGUyNWZiYTZlZDAxODM3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdSZXNlYXJjaCBQYXBlcicsXG4gICAgZGVzY3JpcHRpb246IFwiVGl0bGVkICdUaGUgVmFzdCBEZXZlbG9wbWVudHMgb2YgdGhlIE1hcmtldCBSZXZvbHV0aW9uLCcgdGhpcyBwYXBlciBhaW1zIHRvIGNvbnNpZGVyIHRoZSBtYWpvciBlY29ub21pYyBhbmQgdGVjaG5vbG9naWNhbCBwcm9ncmVzc2lvbnMgYnJvdWdodCBieSB0aGUgTWFya2V0IFJldm9sdXRpb24gb2YgdGhlIGVhcmx5IDE4MDBzLiBIZXJlLCB0aGUgbWFqb3IgY2hhbmdlcyBvZiBBbWVyaWNhbiBsaWZlIGFyZSBjb25zaWRlcmVkLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL01hcmtldCBSZXZvbHV0aW9uIFByZXZpZXcucG5nJyxcbiAgICAgIHRhZ3M6IFsnQW1lcmljYW4gSGlzdG9yeScsICdNYXJrZXQgUmV2b2x1dGlvbiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSSU1sQ3dNWkF2aDViZ0R3YjVicjAxZXU4UjhjaEJ0My92aWV3P3VzcD1zaGFyaW5nJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRWNvbm9taWMgQ2FzZSBTdHVkeScsXG4gICAgZGVzY3JpcHRpb246XCJUaGlzIHBhcGVyIHNlZWtzIHRvIGFuYWx5emUgdGhlIGluZHVzdHJpYWwgcG9zaXRpb24gb2YgdGhlIERlIEJlZXJzIGRpYW1vbmQgY29ycG9yYXRpb24uIENvbnNpZGVyZWQgYSBjYXJ0ZWwgYnkgbWFueSwgRGUgQmVlcnMnIG92ZXJ3aGVsbWluZyBtYXJrZXQgcG93ZXIgcmFpc2VzIHF1ZXN0aW9ucyBvZiBwcmljZSBzdGFiaWxpdHksIHdvcmxkd2lkZSBjb21wZXRpdGlvbiwgYW5kIGFudGl0cnVzdCBsYXdzLiBcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvRGUgQmVlcnMgUHJldmlldy5wbmcnLFxuICAgIHRhZ3M6IFsnSW5kdXN0cmlhbCBPcmdhbml6YXRpb24nLCAnQW50aXRydXN0IExhdyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8veW91dHViZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVFZDVDFoU255LXRHbGo2alJZWHRxa3dHQkNYQVFPSDIvdmlldz91c3A9c2hhcmluZycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ2lnbm9yZSB0aGlzIHBscycsXG4gIC8vICAgZGVzY3JpcHRpb246IFwiaW0gc3RpbGwgbWFraW5nIHRoaXMgc2l0ZSBhcyB5b3UgcmVhZCB0aGlzLi4uXCIsXG4gIC8vICAgICBpbWFnZTogJy9pbWFnZXMvMy5qcGcnLFxuICAvLyAgICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcbiAgLy8gICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICBpZDogMixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnaWdub3JlIHRoaXMgYXMgd2VsbCBwbGVhc2UnLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcIkkgd2FudGVkIHRvIGhhdmUgdGhpcyBkb25lIGVhcmxpZXIuLi5cIixcbiAgLy8gICBpbWFnZTogJy9pbWFnZXMvNC5qcGcnLFxuICAvLyAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhdEVuZ2luZScsICdGaXJlYmFzZSddLFxuICAvLyAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIGlkOiAzLFxuICAvLyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGdhbWVKYW1zID0gW1xuICB7XG4gICAgdGl0bGU6ICdLQklMTFkgU3VwZXIgU291bmRzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdBbiBhbmltYXRpb24gc2V0IHRvIGF1ZGlvIGZyb20gUmVzZXJ2b2lyIERvZ3MuIEludGVudGlvbmFsIFwiZ2xpdGNoeVwiIGFuZCBoYW5kIGRyYXduIGxvb2suJyxcbiAgICBpbWFnZTogJy9pbWFnZXMvS0JJTExZIFByZXZpZXcucG5nJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0x1ZHVtRGFyZSBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOR0QtcThDQ1JpZmdOMXZKV3l2UTdiLWNFa2Z3YUJmRC92aWV3P3VzcD1zaGFyaW5nJyxcbiAgICAvLyBqYW06ICdTdXBlciBTb3VuZHMgYnkgU3RldmVuIFdyaWdodCcsXG4gICAgIHRoZW1lOiAnQmUgc3VyZSB0byBzZWxlY3QgMTA4MHAhJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGhlIExhdGVyIExhYicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVHJhdmVsIGJldHdlZW4gdGltZWxpbmVzIGFuZCB0cmFuc3BvcnQgb2JqZWN0cyBiYWNrIGFuZCBmb3J0aCB0byBzb2x2ZSBwdXp6bGVzLicsXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3RoZWxhdGVybGFiLmdpZicsXG4gICAgdGFnczogWydVbml0eScsICdDIycsICdHTVRLIEphbSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vdGVhbWpvbHUuaXRjaC5pby90aGUtbGF0ZXItbGFiJyxcbiAgICBqYW06ICdHTVRLIDIwMjEgSmFtJyxcbiAgICB0aGVtZTogJ1B1enpsZSBQbGF0Zm9ybWVyJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVmljZSBFbGYnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQbGF5IGFzIGFuIGVsZiB3aG8gaGFzIGdvbmUgbWFkZSBpbiBTYW50YSdzIHdvcmtzaG9wIGFuZCBpcyB0cnlpbmcgdG8gZWF0IGFsbCBvdGhlciBlbHZlcyFcIixcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvdmljZWVsZi5naWYnLFxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnVGlsdGVkIEphbSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vYm9tYnVyNDAuaXRjaC5pby90aWx0ZWQtZ2FtZS1qYW0tZWxmLWdhbWUnLFxuICAgIGphbTogJ1RpbHRlZCAyMDE5IEphbScsXG4gICAgdGhlbWU6ICdUb3AgRG93biBBY3Rpb24nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUb3JjaCBGZWxsYScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQ29udHJvbCBhIHNlcmllcyBvZiBibG9icyB0byB0cmFuc3BvcnQgYSBsaXQgdG9yY2ggYWNyb3NzIGEgbGV2ZWwgaW4gb3JkZXIgdG8gbGlnaHQgdGhlIGJvbmZpcmUuJyxcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvdG9yY2hmZWxsYS5naWYnLFxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR2FtZSBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2Zsb3dsdWtlLml0Y2guaW8vdG9yY2gtZmVsbGEnLFxuICAgIGphbTogJ1dlZWtseSAxNjggSmFtJyxcbiAgICB0aGVtZTogJ0lzb21ldHJpYyBQdXp6bGUnLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6ICdJbnRyb2R1Y3Rpb24nLCB0ZXh0OiAnTXkgaW50ZXJlc3QgaW4gRWNvbm9taWNzIGFuZCBCdXNpbmVzcyBzdGFydGVkIGFzIGEgbGl0dGxlIGtpZCwgYW5kIGhhcyBvbmx5IGdyb3duIHNpbmNlLiBCaWcgZmFuIG9mIGJpZyBwaWN0dXJlIHN0dWZmIScsIH0sXG4gIHsgeWVhcjogJ0dhbWVzJywgdGV4dDogJ0kgZW5qb3kgcGxheWluZyBldmVyeSBraW5kIG9mIGdhbWUuIFNvbWUgcmVjZW50IGZhdm9yaXRlcyBpbmNsdWRlIE92ZXJ3YXRjaCwgQ2l2IFZJLCBMLkEuIE5vaXJlLCBQYXBlcnMgUGxlYXNlLCBhbmQgc29tZSBEbkQgNUUuJywgfSxcbiAgeyB5ZWFyOiAnQXNwaXJhdGlvbnMnLCB0ZXh0OiBcIkkgYWltIHRvIHdvcmsgd2hlcmUgbXkgZWNvbm9taWMgYW5kIGJ1c2luZXNzIGludGVyZXN0cyBpbnRlcnNlY3Qgd2l0aCB0aGUgdGhpbmdzIEknbSBwYXNzaW9ubmF0ZSBhYm91dC4gU2VlIHRob3NlIHRoaW5ncyBhYm92ZSFcIiAsIH0sXG4gIHsgeWVhcjogJ011c2ljJywgdGV4dDogJ0kgZmlndXJlIEkgbmVlZCBhIHF1aWNrIGxpc3QuIFBldCBTb3VuZHMsIExvbGEgdnMuIFBvd2VybWFuLCBhbmQgVGhlIFBvaW50ISBDdXJyZW50bHkgbGVhcm5pbmcgdGhlIGd1aXRhciBhbmQgaW1wcm92aW5nIG15IHBpYW5vIScsIH0sXG4gIHsgeWVhcjogJ01vdmllcycsIHRleHQ6ICdNaWdodCBhcyB3ZWxsIG1ha2UgYW5vdGhlciBsaXN0LiBUaGUgRGFyamVlbGluZyBMaW1pdGVkLCBSZXNlcnZpb3IgRG9ncywgUHVscCBGaWN0aW9uLCBUaGVyZSBXaWxsIEJlIEJsb29kLicsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=