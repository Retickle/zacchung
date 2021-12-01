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
  description: 'An animation set to audio from Reservoir Dogs with an intentional "glitchy" and hand drawn look.',
  image: '/images/KBILLY Preview.png',
  tags: ['Unity', 'C#', 'LudumDare Jam'],
  source: 'https://drive.google.com/file/d/1NGD-q8CCRifgN1vJWyvQ7b-cEkfwaBfD/view?usp=sharing',
  // jam: 'Super Sounds by Steven Wright',
  theme: 'Be sure to select 1080p!',
  id: 0
}, {
  title: "Lucy's a Rainbow",
  description: "A brief animation comparing two 1967 songs and their album covers by The Beatles and The Rolling Stones. One is said to be rushed copy of the other. Animation and audio made to loop perfectly.",
  image: '/images/Lucy and Rainbow Preview.png',
  tags: ['Unity', 'C#', 'GMTK Jam'],
  source: 'https://drive.google.com/file/d/1lnCQ-2IgfSAlk1k4oF-D1_aXCivJzu_j/view?usp=sharing',
  // jam: 'GMTK 2021 Jam',
  // theme: 'Puzzle Platformer',
  id: 1
}, {
  title: 'Log Guy',
  description: "A brand new, all original intellectual property.",
  image: 'static/images/viceelf.gif',
  tags: ['Unity', 'C#', 'Tilted Jam'],
  source: 'https://bombur40.itch.io/tilted-game-jam-elf-game',
  jam: 'Tilted 2019 Jam',
  theme: 'Top Down Action',
  id: 2
} // {
//   title: 'Torch Fella',
//   description:
//     'Control a series of blobs to transport a lit torch across a level in order to light the bonfire.',
//   image: 'static/images/torchfella.gif',
//   tags: ['Unity', 'C#', 'Game Jam'],
//   source: 'https://flowluke.itch.io/torch-fella',
//   jam: 'Weekly 168 Jam',
//   theme: 'Isometric Puzzle',
//   id: 3,
// },
];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImdhbWVKYW1zIiwidGhlbWUiLCJqYW0iLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLHNQQUZmO0FBR0lDLE9BQUssRUFBRSx1Q0FIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixtQkFBckIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9GQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUMsNE9BRmQ7QUFHRUMsT0FBSyxFQUFFLDhCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLHlCQUFELEVBQTRCLGVBQTVCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHFCQUxWO0FBTUVDLE9BQUssRUFBRSxvRkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixDQW1CdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENzQixDQUFqQjtBQXVDQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRVAsT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFDVCxrR0FISjtBQUlFQyxPQUFLLEVBQUUsNEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsZUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0ZBTlY7QUFPRTtBQUNDSSxPQUFLLEVBQUUsMEJBUlY7QUFTRUYsSUFBRSxFQUFFO0FBVE4sQ0FEc0IsRUFZdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFDVCxrTUFISjtBQUlFQyxPQUFLLEVBQUUsc0NBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0ZBTlY7QUFPRTtBQUNBO0FBQ0FFLElBQUUsRUFBRTtBQVROLENBWnNCLEVBdUJ0QjtBQUNFTixPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQ1Qsa0RBSEo7QUFJRUMsT0FBSyxFQUFFLDJCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFlBQWhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLG1EQU5WO0FBT0VLLEtBQUcsRUFBRSxpQkFQUDtBQVFFRCxPQUFLLEVBQUUsaUJBUlQ7QUFTRUYsSUFBRSxFQUFFO0FBVE4sQ0F2QnNCLENBa0N0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNzQixDQUFqQjtBQWdEQSxJQUFNSSxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLGNBQVI7QUFBd0JDLE1BQUksRUFBRTtBQUE5QixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsT0FBUjtBQUFpQkMsTUFBSSxFQUFFO0FBQXZCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxhQUFSO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRTtBQUF2QixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBSSxFQUFFO0FBQXhCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYwZWFhOWJiMjQ5MjE2ZGZmMWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1Jlc2VhcmNoIFBhcGVyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZWQgJ1RoZSBWYXN0IERldmVsb3BtZW50cyBvZiB0aGUgTWFya2V0IFJldm9sdXRpb24sJyB0aGlzIHBhcGVyIGFpbXMgdG8gY29uc2lkZXIgdGhlIG1ham9yIGVjb25vbWljIGFuZCB0ZWNobm9sb2dpY2FsIHByb2dyZXNzaW9ucyBicm91Z2h0IGJ5IHRoZSBNYXJrZXQgUmV2b2x1dGlvbiBvZiB0aGUgZWFybHkgMTgwMHMuIEhlcmUsIHRoZSBtYWpvciBjaGFuZ2VzIG9mIEFtZXJpY2FuIGxpZmUgYXJlIGNvbnNpZGVyZWQuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvTWFya2V0IFJldm9sdXRpb24gUHJldmlldy5wbmcnLFxuICAgICAgdGFnczogWydBbWVyaWNhbiBIaXN0b3J5JywgJ01hcmtldCBSZXZvbHV0aW9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVJJTWxDd01aQXZoNWJnRHdiNWJyMDFldThSOGNoQnQzL3ZpZXc/dXNwPXNoYXJpbmcnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFY29ub21pYyBDYXNlIFN0dWR5JyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgcGFwZXIgc2Vla3MgdG8gYW5hbHl6ZSB0aGUgaW5kdXN0cmlhbCBwb3NpdGlvbiBvZiB0aGUgRGUgQmVlcnMgZGlhbW9uZCBjb3Jwb3JhdGlvbi4gQ29uc2lkZXJlZCBhIGNhcnRlbCBieSBtYW55LCBEZSBCZWVycycgb3ZlcndoZWxtaW5nIG1hcmtldCBwb3dlciByYWlzZXMgcXVlc3Rpb25zIG9mIHByaWNlIHN0YWJpbGl0eSwgd29ybGR3aWRlIGNvbXBldGl0aW9uLCBhbmQgYW50aXRydXN0IGxhd3MuIFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9EZSBCZWVycyBQcmV2aWV3LnBuZycsXG4gICAgdGFnczogWydJbmR1c3RyaWFsIE9yZ2FuaXphdGlvbicsICdBbnRpdHJ1c3QgTGF3J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUVkNUMWhTbnktdEdsajZqUllYdHFrd0dCQ1hBUU9IMi92aWV3P3VzcD1zaGFyaW5nJyxcbiAgICBpZDogMSxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnaWdub3JlIHRoaXMgcGxzJyxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJpbSBzdGlsbCBtYWtpbmcgdGhpcyBzaXRlIGFzIHlvdSByZWFkIHRoaXMuLi5cIixcbiAgLy8gICAgIGltYWdlOiAnL2ltYWdlcy8zLmpwZycsXG4gIC8vICAgICB0YWdzOiBbJ1JlYWN0JywgJ1dlYlJUQyddLFxuICAvLyAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIGlkOiAyLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6ICdpZ25vcmUgdGhpcyBhcyB3ZWxsIHBsZWFzZScsXG4gIC8vICAgZGVzY3JpcHRpb246IFwiSSB3YW50ZWQgdG8gaGF2ZSB0aGlzIGRvbmUgZWFybGllci4uLlwiLFxuICAvLyAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXG4gIC8vICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gIC8vICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgaWQ6IDMsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ2FtZUphbXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0tCSUxMWSBTdXBlciBTb3VuZHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0FuIGFuaW1hdGlvbiBzZXQgdG8gYXVkaW8gZnJvbSBSZXNlcnZvaXIgRG9ncyB3aXRoIGFuIGludGVudGlvbmFsIFwiZ2xpdGNoeVwiIGFuZCBoYW5kIGRyYXduIGxvb2suJyxcbiAgICBpbWFnZTogJy9pbWFnZXMvS0JJTExZIFByZXZpZXcucG5nJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0x1ZHVtRGFyZSBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFOR0QtcThDQ1JpZmdOMXZKV3l2UTdiLWNFa2Z3YUJmRC92aWV3P3VzcD1zaGFyaW5nJyxcbiAgICAvLyBqYW06ICdTdXBlciBTb3VuZHMgYnkgU3RldmVuIFdyaWdodCcsXG4gICAgIHRoZW1lOiAnQmUgc3VyZSB0byBzZWxlY3QgMTA4MHAhJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkx1Y3kncyBhIFJhaW5ib3dcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBicmllZiBhbmltYXRpb24gY29tcGFyaW5nIHR3byAxOTY3IHNvbmdzIGFuZCB0aGVpciBhbGJ1bSBjb3ZlcnMgYnkgVGhlIEJlYXRsZXMgYW5kIFRoZSBSb2xsaW5nIFN0b25lcy4gT25lIGlzIHNhaWQgdG8gYmUgcnVzaGVkIGNvcHkgb2YgdGhlIG90aGVyLiBBbmltYXRpb24gYW5kIGF1ZGlvIG1hZGUgdG8gbG9vcCBwZXJmZWN0bHkuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL0x1Y3kgYW5kIFJhaW5ib3cgUHJldmlldy5wbmcnLFxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR01USyBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsbkNRLTJJZ2ZTQWxrMWs0b0YtRDFfYVhDaXZKenVfai92aWV3P3VzcD1zaGFyaW5nJyxcbiAgICAvLyBqYW06ICdHTVRLIDIwMjEgSmFtJyxcbiAgICAvLyB0aGVtZTogJ1B1enpsZSBQbGF0Zm9ybWVyJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTG9nIEd1eScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgYnJhbmQgbmV3LCBhbGwgb3JpZ2luYWwgaW50ZWxsZWN0dWFsIHByb3BlcnR5LlwiLFxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy92aWNlZWxmLmdpZicsXG4gICAgdGFnczogWydVbml0eScsICdDIycsICdUaWx0ZWQgSmFtJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9ib21idXI0MC5pdGNoLmlvL3RpbHRlZC1nYW1lLWphbS1lbGYtZ2FtZScsXG4gICAgamFtOiAnVGlsdGVkIDIwMTkgSmFtJyxcbiAgICB0aGVtZTogJ1RvcCBEb3duIEFjdGlvbicsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ1RvcmNoIEZlbGxhJyxcbiAgLy8gICBkZXNjcmlwdGlvbjpcbiAgLy8gICAgICdDb250cm9sIGEgc2VyaWVzIG9mIGJsb2JzIHRvIHRyYW5zcG9ydCBhIGxpdCB0b3JjaCBhY3Jvc3MgYSBsZXZlbCBpbiBvcmRlciB0byBsaWdodCB0aGUgYm9uZmlyZS4nLFxuICAvLyAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy90b3JjaGZlbGxhLmdpZicsXG4gIC8vICAgdGFnczogWydVbml0eScsICdDIycsICdHYW1lIEphbSddLFxuICAvLyAgIHNvdXJjZTogJ2h0dHBzOi8vZmxvd2x1a2UuaXRjaC5pby90b3JjaC1mZWxsYScsXG4gIC8vICAgamFtOiAnV2Vla2x5IDE2OCBKYW0nLFxuICAvLyAgIHRoZW1lOiAnSXNvbWV0cmljIFB1enpsZScsXG4gIC8vICAgaWQ6IDMsXG4gIC8vIH0sXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogJ0ludHJvZHVjdGlvbicsIHRleHQ6ICdNeSBpbnRlcmVzdCBpbiBFY29ub21pY3MgYW5kIEJ1c2luZXNzIHN0YXJ0ZWQgYXMgYSBsaXR0bGUga2lkLCBhbmQgaGFzIG9ubHkgZ3Jvd24gc2luY2UuIEJpZyBmYW4gb2YgYmlnIHBpY3R1cmUgc3R1ZmYhJywgfSxcbiAgeyB5ZWFyOiAnR2FtZXMnLCB0ZXh0OiAnSSBlbmpveSBwbGF5aW5nIGV2ZXJ5IGtpbmQgb2YgZ2FtZS4gU29tZSByZWNlbnQgZmF2b3JpdGVzIGluY2x1ZGUgT3ZlcndhdGNoLCBDaXYgVkksIEwuQS4gTm9pcmUsIFBhcGVycyBQbGVhc2UsIGFuZCBzb21lIERuRCA1RS4nLCB9LFxuICB7IHllYXI6ICdBc3BpcmF0aW9ucycsIHRleHQ6IFwiSSBhaW0gdG8gd29yayB3aGVyZSBteSBlY29ub21pYyBhbmQgYnVzaW5lc3MgaW50ZXJlc3RzIGludGVyc2VjdCB3aXRoIHRoZSB0aGluZ3MgSSdtIHBhc3Npb25uYXRlIGFib3V0LiBTZWUgdGhvc2UgdGhpbmdzIGFib3ZlIVwiICwgfSxcbiAgeyB5ZWFyOiAnTXVzaWMnLCB0ZXh0OiAnSSBmaWd1cmUgSSBuZWVkIGEgcXVpY2sgbGlzdC4gUGV0IFNvdW5kcywgTG9sYSB2cy4gUG93ZXJtYW4sIGFuZCBUaGUgUG9pbnQhIEN1cnJlbnRseSBsZWFybmluZyB0aGUgZ3VpdGFyIGFuZCBpbXByb3ZpbmcgbXkgcGlhbm8hJywgfSxcbiAgeyB5ZWFyOiAnTW92aWVzJywgdGV4dDogJ01pZ2h0IGFzIHdlbGwgbWFrZSBhbm90aGVyIGxpc3QuIFRoZSBEYXJqZWVsaW5nIExpbWl0ZWQsIFJlc2VydmlvciBEb2dzLCBQdWxwIEZpY3Rpb24sIFRoZXJlIFdpbGwgQmUgQmxvb2QuJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==