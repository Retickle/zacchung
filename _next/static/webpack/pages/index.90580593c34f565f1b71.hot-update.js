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
  description: 'Freeze waves of enemies and kick them into the surrounding water to cool off your nuclear reactor.',
  image: 'static/images/nuclearlabs.gif',
  tags: ['Unity', 'C#', 'LudumDare Jam'],
  source: 'https://teamjolu.itch.io/nuclear-labs',
  jam: 'LudumDare 49 Jam',
  theme: 'Twin Stick Shooter',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImdhbWVKYW1zIiwiamFtIiwidGhlbWUiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLHNQQUZmO0FBR0lDLE9BQUssRUFBRSx1Q0FIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixtQkFBckIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9GQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUMsNE9BRmQ7QUFHRUMsT0FBSyxFQUFFLDhCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLHlCQUFELEVBQTRCLGVBQTVCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHFCQUxWO0FBTUVDLE9BQUssRUFBRSxvRkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixDQW1CdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENzQixDQUFqQjtBQXVDQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRVAsT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFDVCxvR0FISjtBQUlFQyxPQUFLLEVBQUUsK0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsZUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsdUNBTlY7QUFPRUksS0FBRyxFQUFFLGtCQVBQO0FBUUVDLE9BQUssRUFBRSxvQkFSVDtBQVNFSCxJQUFFLEVBQUU7QUFUTixDQURzQixFQVl0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQ1QsaUZBSEo7QUFJRUMsT0FBSyxFQUFFLCtCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQWhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLHdDQU5WO0FBT0VJLEtBQUcsRUFBRSxlQVBQO0FBUUVDLE9BQUssRUFBRSxtQkFSVDtBQVNFSCxJQUFFLEVBQUU7QUFUTixDQVpzQixFQXVCdEI7QUFDRU4sT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUNULDRGQUhKO0FBSUVDLE9BQUssRUFBRSwyQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixZQUFoQixDQUxSO0FBTUVDLFFBQU0sRUFBRSxtREFOVjtBQU9FSSxLQUFHLEVBQUUsaUJBUFA7QUFRRUMsT0FBSyxFQUFFLGlCQVJUO0FBU0VILElBQUUsRUFBRTtBQVROLENBdkJzQixFQWtDdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUNULGtHQUhKO0FBSUVDLE9BQUssRUFBRSw4QkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixVQUFoQixDQUxSO0FBTUVDLFFBQU0sRUFBRSxzQ0FOVjtBQU9FSSxLQUFHLEVBQUUsZ0JBUFA7QUFRRUMsT0FBSyxFQUFFLGtCQVJUO0FBU0VILElBQUUsRUFBRTtBQVROLENBbENzQixDQUFqQjtBQWdEQSxJQUFNSSxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLGNBQVI7QUFBd0JDLE1BQUksRUFBRTtBQUE5QixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsT0FBUjtBQUFpQkMsTUFBSSxFQUFFO0FBQXZCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxhQUFSO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRTtBQUF2QixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBSSxFQUFFO0FBQXhCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwNTgwNTkzYzM0ZjU2NWYxYjcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1Jlc2VhcmNoIFBhcGVyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaXRsZWQgJ1RoZSBWYXN0IERldmVsb3BtZW50cyBvZiB0aGUgTWFya2V0IFJldm9sdXRpb24sJyB0aGlzIHBhcGVyIGFpbXMgdG8gY29uc2lkZXIgdGhlIG1ham9yIGVjb25vbWljIGFuZCB0ZWNobm9sb2dpY2FsIHByb2dyZXNzaW9ucyBicm91Z2h0IGJ5IHRoZSBNYXJrZXQgUmV2b2x1dGlvbiBvZiB0aGUgZWFybHkgMTgwMHMuIEhlcmUsIHRoZSBtYWpvciBjaGFuZ2VzIG9mIEFtZXJpY2FuIGxpZmUgYXJlIGNvbnNpZGVyZWQuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvTWFya2V0IFJldm9sdXRpb24gUHJldmlldy5wbmcnLFxuICAgICAgdGFnczogWydBbWVyaWNhbiBIaXN0b3J5JywgJ01hcmtldCBSZXZvbHV0aW9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVJJTWxDd01aQXZoNWJnRHdiNWJyMDFldThSOGNoQnQzL3ZpZXc/dXNwPXNoYXJpbmcnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFY29ub21pYyBDYXNlIFN0dWR5JyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgcGFwZXIgc2Vla3MgdG8gYW5hbHl6ZSB0aGUgaW5kdXN0cmlhbCBwb3NpdGlvbiBvZiB0aGUgRGUgQmVlcnMgZGlhbW9uZCBjb3Jwb3JhdGlvbi4gQ29uc2lkZXJlZCBhIGNhcnRlbCBieSBtYW55LCBEZSBCZWVycycgb3ZlcndoZWxtaW5nIG1hcmtldCBwb3dlciByYWlzZXMgcXVlc3Rpb25zIG9mIHByaWNlIHN0YWJpbGl0eSwgd29ybGR3aWRlIGNvbXBldGl0aW9uLCBhbmQgYW50aXRydXN0IGxhd3MuIFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9EZSBCZWVycyBQcmV2aWV3LnBuZycsXG4gICAgdGFnczogWydJbmR1c3RyaWFsIE9yZ2FuaXphdGlvbicsICdBbnRpdHJ1c3QgTGF3J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUVkNUMWhTbnktdEdsajZqUllYdHFrd0dCQ1hBUU9IMi92aWV3P3VzcD1zaGFyaW5nJyxcbiAgICBpZDogMSxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnaWdub3JlIHRoaXMgcGxzJyxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJpbSBzdGlsbCBtYWtpbmcgdGhpcyBzaXRlIGFzIHlvdSByZWFkIHRoaXMuLi5cIixcbiAgLy8gICAgIGltYWdlOiAnL2ltYWdlcy8zLmpwZycsXG4gIC8vICAgICB0YWdzOiBbJ1JlYWN0JywgJ1dlYlJUQyddLFxuICAvLyAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIGlkOiAyLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6ICdpZ25vcmUgdGhpcyBhcyB3ZWxsIHBsZWFzZScsXG4gIC8vICAgZGVzY3JpcHRpb246IFwiSSB3YW50ZWQgdG8gaGF2ZSB0aGlzIGRvbmUgZWFybGllci4uLlwiLFxuICAvLyAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXG4gIC8vICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gIC8vICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgaWQ6IDMsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ2FtZUphbXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0tCSUxMWSBTdXBlciBTb3VuZHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0ZyZWV6ZSB3YXZlcyBvZiBlbmVtaWVzIGFuZCBraWNrIHRoZW0gaW50byB0aGUgc3Vycm91bmRpbmcgd2F0ZXIgdG8gY29vbCBvZmYgeW91ciBudWNsZWFyIHJlYWN0b3IuJyxcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvbnVjbGVhcmxhYnMuZ2lmJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0x1ZHVtRGFyZSBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3RlYW1qb2x1Lml0Y2guaW8vbnVjbGVhci1sYWJzJyxcbiAgICBqYW06ICdMdWR1bURhcmUgNDkgSmFtJyxcbiAgICB0aGVtZTogJ1R3aW4gU3RpY2sgU2hvb3RlcicsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RoZSBMYXRlciBMYWInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RyYXZlbCBiZXR3ZWVuIHRpbWVsaW5lcyBhbmQgdHJhbnNwb3J0IG9iamVjdHMgYmFjayBhbmQgZm9ydGggdG8gc29sdmUgcHV6emxlcy4nLFxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy90aGVsYXRlcmxhYi5naWYnLFxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR01USyBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3RlYW1qb2x1Lml0Y2guaW8vdGhlLWxhdGVyLWxhYicsXG4gICAgamFtOiAnR01USyAyMDIxIEphbScsXG4gICAgdGhlbWU6ICdQdXp6bGUgUGxhdGZvcm1lcicsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1ZpY2UgRWxmJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGxheSBhcyBhbiBlbGYgd2hvIGhhcyBnb25lIG1hZGUgaW4gU2FudGEncyB3b3Jrc2hvcCBhbmQgaXMgdHJ5aW5nIHRvIGVhdCBhbGwgb3RoZXIgZWx2ZXMhXCIsXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3ZpY2VlbGYuZ2lmJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ1RpbHRlZCBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2JvbWJ1cjQwLml0Y2guaW8vdGlsdGVkLWdhbWUtamFtLWVsZi1nYW1lJyxcbiAgICBqYW06ICdUaWx0ZWQgMjAxOSBKYW0nLFxuICAgIHRoZW1lOiAnVG9wIERvd24gQWN0aW9uJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVG9yY2ggRmVsbGEnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0NvbnRyb2wgYSBzZXJpZXMgb2YgYmxvYnMgdG8gdHJhbnNwb3J0IGEgbGl0IHRvcmNoIGFjcm9zcyBhIGxldmVsIGluIG9yZGVyIHRvIGxpZ2h0IHRoZSBib25maXJlLicsXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3RvcmNoZmVsbGEuZ2lmJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0dhbWUgSmFtJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9mbG93bHVrZS5pdGNoLmlvL3RvcmNoLWZlbGxhJyxcbiAgICBqYW06ICdXZWVrbHkgMTY4IEphbScsXG4gICAgdGhlbWU6ICdJc29tZXRyaWMgUHV6emxlJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAnSW50cm9kdWN0aW9uJywgdGV4dDogJ015IGludGVyZXN0IGluIEVjb25vbWljcyBhbmQgQnVzaW5lc3Mgc3RhcnRlZCBhcyBhIGxpdHRsZSBraWQsIGFuZCBoYXMgb25seSBncm93biBzaW5jZS4gQmlnIGZhbiBvZiBiaWcgcGljdHVyZSBzdHVmZiEnLCB9LFxuICB7IHllYXI6ICdHYW1lcycsIHRleHQ6ICdJIGVuam95IHBsYXlpbmcgZXZlcnkga2luZCBvZiBnYW1lLiBTb21lIHJlY2VudCBmYXZvcml0ZXMgaW5jbHVkZSBPdmVyd2F0Y2gsIENpdiBWSSwgTC5BLiBOb2lyZSwgUGFwZXJzIFBsZWFzZSwgYW5kIHNvbWUgRG5EIDVFLicsIH0sXG4gIHsgeWVhcjogJ0FzcGlyYXRpb25zJywgdGV4dDogXCJJIGFpbSB0byB3b3JrIHdoZXJlIG15IGVjb25vbWljIGFuZCBidXNpbmVzcyBpbnRlcmVzdHMgaW50ZXJzZWN0IHdpdGggdGhlIHRoaW5ncyBJJ20gcGFzc2lvbm5hdGUgYWJvdXQuIFNlZSB0aG9zZSB0aGluZ3MgYWJvdmUhXCIgLCB9LFxuICB7IHllYXI6ICdNdXNpYycsIHRleHQ6ICdJIGZpZ3VyZSBJIG5lZWQgYSBxdWljayBsaXN0LiBQZXQgU291bmRzLCBMb2xhIHZzLiBQb3dlcm1hbiwgYW5kIFRoZSBQb2ludCEgQ3VycmVudGx5IGxlYXJuaW5nIHRoZSBndWl0YXIgYW5kIGltcHJvdmluZyBteSBwaWFubyEnLCB9LFxuICB7IHllYXI6ICdNb3ZpZXMnLCB0ZXh0OiAnTWlnaHQgYXMgd2VsbCBtYWtlIGFub3RoZXIgbGlzdC4gVGhlIERhcmplZWxpbmcgTGltaXRlZCwgUmVzZXJ2aW9yIERvZ3MsIFB1bHAgRmljdGlvbiwgVGhlcmUgV2lsbCBCZSBCbG9vZC4nLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9