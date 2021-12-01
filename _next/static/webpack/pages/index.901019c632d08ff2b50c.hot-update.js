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
  image: 'static/images/nuclearlabs.gif',
  tags: ['Unity', 'C#', 'LudumDare Jam'],
  source: 'https://teamjolu.itch.io/nuclear-labs',
  jam: 'Super Sounds by Steven Wright',
  theme: 'Stuck in the Middle with You by Stealers Wheel',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImdhbWVKYW1zIiwiamFtIiwidGhlbWUiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLHNQQUZmO0FBR0lDLE9BQUssRUFBRSx1Q0FIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixtQkFBckIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9GQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUMsNE9BRmQ7QUFHRUMsT0FBSyxFQUFFLDhCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLHlCQUFELEVBQTRCLGVBQTVCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHFCQUxWO0FBTUVDLE9BQUssRUFBRSxvRkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixDQW1CdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENzQixDQUFqQjtBQXVDQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRVAsT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFDVCwyRkFISjtBQUlFQyxPQUFLLEVBQUUsK0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsZUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsdUNBTlY7QUFPRUksS0FBRyxFQUFFLCtCQVBQO0FBUUVDLE9BQUssRUFBRSxnREFSVDtBQVNFSCxJQUFFLEVBQUU7QUFUTixDQURzQixFQVl0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQ1QsaUZBSEo7QUFJRUMsT0FBSyxFQUFFLCtCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQWhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLHdDQU5WO0FBT0VJLEtBQUcsRUFBRSxlQVBQO0FBUUVDLE9BQUssRUFBRSxtQkFSVDtBQVNFSCxJQUFFLEVBQUU7QUFUTixDQVpzQixFQXVCdEI7QUFDRU4sT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUNULDRGQUhKO0FBSUVDLE9BQUssRUFBRSwyQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixZQUFoQixDQUxSO0FBTUVDLFFBQU0sRUFBRSxtREFOVjtBQU9FSSxLQUFHLEVBQUUsaUJBUFA7QUFRRUMsT0FBSyxFQUFFLGlCQVJUO0FBU0VILElBQUUsRUFBRTtBQVROLENBdkJzQixFQWtDdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUNULGtHQUhKO0FBSUVDLE9BQUssRUFBRSw4QkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixVQUFoQixDQUxSO0FBTUVDLFFBQU0sRUFBRSxzQ0FOVjtBQU9FSSxLQUFHLEVBQUUsZ0JBUFA7QUFRRUMsT0FBSyxFQUFFLGtCQVJUO0FBU0VILElBQUUsRUFBRTtBQVROLENBbENzQixDQUFqQjtBQWdEQSxJQUFNSSxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLGNBQVI7QUFBd0JDLE1BQUksRUFBRTtBQUE5QixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsT0FBUjtBQUFpQkMsTUFBSSxFQUFFO0FBQXZCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxhQUFSO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRTtBQUF2QixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBSSxFQUFFO0FBQXhCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwMTAxOWM2MzJkMDhmZjJiNTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1Jlc2VhcmNoIFBhcGVyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZWQgJ1RoZSBWYXN0IERldmVsb3BtZW50cyBvZiB0aGUgTWFya2V0IFJldm9sdXRpb24sJyB0aGlzIHBhcGVyIGFpbXMgdG8gY29uc2lkZXIgdGhlIG1ham9yIGVjb25vbWljIGFuZCB0ZWNobm9sb2dpY2FsIHByb2dyZXNzaW9ucyBicm91Z2h0IGJ5IHRoZSBNYXJrZXQgUmV2b2x1dGlvbiBvZiB0aGUgZWFybHkgMTgwMHMuIEhlcmUsIHRoZSBtYWpvciBjaGFuZ2VzIG9mIEFtZXJpY2FuIGxpZmUgYXJlIGNvbnNpZGVyZWQuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvTWFya2V0IFJldm9sdXRpb24gUHJldmlldy5wbmcnLFxuICAgICAgdGFnczogWydBbWVyaWNhbiBIaXN0b3J5JywgJ01hcmtldCBSZXZvbHV0aW9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVJJTWxDd01aQXZoNWJnRHdiNWJyMDFldThSOGNoQnQzL3ZpZXc/dXNwPXNoYXJpbmcnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFY29ub21pYyBDYXNlIFN0dWR5JyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgcGFwZXIgc2Vla3MgdG8gYW5hbHl6ZSB0aGUgaW5kdXN0cmlhbCBwb3NpdGlvbiBvZiB0aGUgRGUgQmVlcnMgZGlhbW9uZCBjb3Jwb3JhdGlvbi4gQ29uc2lkZXJlZCBhIGNhcnRlbCBieSBtYW55LCBEZSBCZWVycycgb3ZlcndoZWxtaW5nIG1hcmtldCBwb3dlciByYWlzZXMgcXVlc3Rpb25zIG9mIHByaWNlIHN0YWJpbGl0eSwgd29ybGR3aWRlIGNvbXBldGl0aW9uLCBhbmQgYW50aXRydXN0IGxhd3MuIFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9EZSBCZWVycyBQcmV2aWV3LnBuZycsXG4gICAgdGFnczogWydJbmR1c3RyaWFsIE9yZ2FuaXphdGlvbicsICdBbnRpdHJ1c3QgTGF3J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUVkNUMWhTbnktdEdsajZqUllYdHFrd0dCQ1hBUU9IMi92aWV3P3VzcD1zaGFyaW5nJyxcbiAgICBpZDogMSxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnaWdub3JlIHRoaXMgcGxzJyxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJpbSBzdGlsbCBtYWtpbmcgdGhpcyBzaXRlIGFzIHlvdSByZWFkIHRoaXMuLi5cIixcbiAgLy8gICAgIGltYWdlOiAnL2ltYWdlcy8zLmpwZycsXG4gIC8vICAgICB0YWdzOiBbJ1JlYWN0JywgJ1dlYlJUQyddLFxuICAvLyAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIGlkOiAyLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6ICdpZ25vcmUgdGhpcyBhcyB3ZWxsIHBsZWFzZScsXG4gIC8vICAgZGVzY3JpcHRpb246IFwiSSB3YW50ZWQgdG8gaGF2ZSB0aGlzIGRvbmUgZWFybGllci4uLlwiLFxuICAvLyAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXG4gIC8vICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gIC8vICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgaWQ6IDMsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ2FtZUphbXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0tCSUxMWSBTdXBlciBTb3VuZHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0FuIGFuaW1hdGlvbiBzZXQgdG8gYXVkaW8gZnJvbSBSZXNlcnZvaXIgRG9ncy4gSW50ZW50aW9uYWwgXCJnbGl0Y2h5XCIgYW5kIGhhbmQgZHJhd24gbG9vay4nLFxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9udWNsZWFybGFicy5naWYnLFxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnTHVkdW1EYXJlIEphbSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vdGVhbWpvbHUuaXRjaC5pby9udWNsZWFyLWxhYnMnLFxuICAgIGphbTogJ1N1cGVyIFNvdW5kcyBieSBTdGV2ZW4gV3JpZ2h0JyxcbiAgICB0aGVtZTogJ1N0dWNrIGluIHRoZSBNaWRkbGUgd2l0aCBZb3UgYnkgU3RlYWxlcnMgV2hlZWwnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaGUgTGF0ZXIgTGFiJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUcmF2ZWwgYmV0d2VlbiB0aW1lbGluZXMgYW5kIHRyYW5zcG9ydCBvYmplY3RzIGJhY2sgYW5kIGZvcnRoIHRvIHNvbHZlIHB1enpsZXMuJyxcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvdGhlbGF0ZXJsYWIuZ2lmJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0dNVEsgSmFtJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly90ZWFtam9sdS5pdGNoLmlvL3RoZS1sYXRlci1sYWInLFxuICAgIGphbTogJ0dNVEsgMjAyMSBKYW0nLFxuICAgIHRoZW1lOiAnUHV6emxlIFBsYXRmb3JtZXInLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdWaWNlIEVsZicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlBsYXkgYXMgYW4gZWxmIHdobyBoYXMgZ29uZSBtYWRlIGluIFNhbnRhJ3Mgd29ya3Nob3AgYW5kIGlzIHRyeWluZyB0byBlYXQgYWxsIG90aGVyIGVsdmVzIVwiLFxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy92aWNlZWxmLmdpZicsXG4gICAgdGFnczogWydVbml0eScsICdDIycsICdUaWx0ZWQgSmFtJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9ib21idXI0MC5pdGNoLmlvL3RpbHRlZC1nYW1lLWphbS1lbGYtZ2FtZScsXG4gICAgamFtOiAnVGlsdGVkIDIwMTkgSmFtJyxcbiAgICB0aGVtZTogJ1RvcCBEb3duIEFjdGlvbicsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RvcmNoIEZlbGxhJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDb250cm9sIGEgc2VyaWVzIG9mIGJsb2JzIHRvIHRyYW5zcG9ydCBhIGxpdCB0b3JjaCBhY3Jvc3MgYSBsZXZlbCBpbiBvcmRlciB0byBsaWdodCB0aGUgYm9uZmlyZS4nLFxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy90b3JjaGZlbGxhLmdpZicsXG4gICAgdGFnczogWydVbml0eScsICdDIycsICdHYW1lIEphbSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZmxvd2x1a2UuaXRjaC5pby90b3JjaC1mZWxsYScsXG4gICAgamFtOiAnV2Vla2x5IDE2OCBKYW0nLFxuICAgIHRoZW1lOiAnSXNvbWV0cmljIFB1enpsZScsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogJ0ludHJvZHVjdGlvbicsIHRleHQ6ICdNeSBpbnRlcmVzdCBpbiBFY29ub21pY3MgYW5kIEJ1c2luZXNzIHN0YXJ0ZWQgYXMgYSBsaXR0bGUga2lkLCBhbmQgaGFzIG9ubHkgZ3Jvd24gc2luY2UuIEJpZyBmYW4gb2YgYmlnIHBpY3R1cmUgc3R1ZmYhJywgfSxcbiAgeyB5ZWFyOiAnR2FtZXMnLCB0ZXh0OiAnSSBlbmpveSBwbGF5aW5nIGV2ZXJ5IGtpbmQgb2YgZ2FtZS4gU29tZSByZWNlbnQgZmF2b3JpdGVzIGluY2x1ZGUgT3ZlcndhdGNoLCBDaXYgVkksIEwuQS4gTm9pcmUsIFBhcGVycyBQbGVhc2UsIGFuZCBzb21lIERuRCA1RS4nLCB9LFxuICB7IHllYXI6ICdBc3BpcmF0aW9ucycsIHRleHQ6IFwiSSBhaW0gdG8gd29yayB3aGVyZSBteSBlY29ub21pYyBhbmQgYnVzaW5lc3MgaW50ZXJlc3RzIGludGVyc2VjdCB3aXRoIHRoZSB0aGluZ3MgSSdtIHBhc3Npb25uYXRlIGFib3V0LiBTZWUgdGhvc2UgdGhpbmdzIGFib3ZlIVwiICwgfSxcbiAgeyB5ZWFyOiAnTXVzaWMnLCB0ZXh0OiAnSSBmaWd1cmUgSSBuZWVkIGEgcXVpY2sgbGlzdC4gUGV0IFNvdW5kcywgTG9sYSB2cy4gUG93ZXJtYW4sIGFuZCBUaGUgUG9pbnQhIEN1cnJlbnRseSBsZWFybmluZyB0aGUgZ3VpdGFyIGFuZCBpbXByb3ZpbmcgbXkgcGlhbm8hJywgfSxcbiAgeyB5ZWFyOiAnTW92aWVzJywgdGV4dDogJ01pZ2h0IGFzIHdlbGwgbWFrZSBhbm90aGVyIGxpc3QuIFRoZSBEYXJqZWVsaW5nIExpbWl0ZWQsIFJlc2VydmlvciBEb2dzLCBQdWxwIEZpY3Rpb24sIFRoZXJlIFdpbGwgQmUgQmxvb2QuJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==