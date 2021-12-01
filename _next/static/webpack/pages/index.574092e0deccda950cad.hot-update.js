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
  description: "A brief animation comparing two 1967 songs by The Beatles and The Rolling Stones. Their Satanic Majesties Request by The Rolling Stones was said to be a rushed copy of The Beatles' Sgt. Pepper's Lonely hearts Club Band. Animation intended to loop perfectly.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImdhbWVKYW1zIiwidGhlbWUiLCJqYW0iLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUFFLHNQQUZmO0FBR0lDLE9BQUssRUFBRSx1Q0FIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixtQkFBckIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9GQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUMsNE9BRmQ7QUFHRUMsT0FBSyxFQUFFLDhCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLHlCQUFELEVBQTRCLGVBQTVCLENBSlI7QUFLRUMsUUFBTSxFQUFFLHFCQUxWO0FBTUVDLE9BQUssRUFBRSxvRkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixDQW1CdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENzQixDQUFqQjtBQXVDQSxJQUFNQyxRQUFRLEdBQUcsQ0FDdEI7QUFDRVAsT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFDVCxrR0FISjtBQUlFQyxPQUFLLEVBQUUsNEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsZUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0ZBTlY7QUFPRTtBQUNDSSxPQUFLLEVBQUUsMEJBUlY7QUFTRUYsSUFBRSxFQUFFO0FBVE4sQ0FEc0IsRUFZdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFDVCxtUUFISjtBQUlFQyxPQUFLLEVBQUUsK0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsd0NBTlY7QUFPRUssS0FBRyxFQUFFLGVBUFA7QUFRRUQsT0FBSyxFQUFFLG1CQVJUO0FBU0VGLElBQUUsRUFBRTtBQVROLENBWnNCLEVBdUJ0QjtBQUNFTixPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQ1QsNEZBSEo7QUFJRUMsT0FBSyxFQUFFLDJCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFlBQWhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLG1EQU5WO0FBT0VLLEtBQUcsRUFBRSxpQkFQUDtBQVFFRCxPQUFLLEVBQUUsaUJBUlQ7QUFTRUYsSUFBRSxFQUFFO0FBVE4sQ0F2QnNCLEVBa0N0QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQ1Qsa0dBSEo7QUFJRUMsT0FBSyxFQUFFLDhCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQWhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLHNDQU5WO0FBT0VLLEtBQUcsRUFBRSxnQkFQUDtBQVFFRCxPQUFLLEVBQUUsa0JBUlQ7QUFTRUYsSUFBRSxFQUFFO0FBVE4sQ0FsQ3NCLENBQWpCO0FBZ0RBLElBQU1JLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsY0FBUjtBQUF3QkMsTUFBSSxFQUFFO0FBQTlCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxPQUFSO0FBQWlCQyxNQUFJLEVBQUU7QUFBdkIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLGFBQVI7QUFBdUJDLE1BQUksRUFBRTtBQUE3QixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsT0FBUjtBQUFpQkMsTUFBSSxFQUFFO0FBQXZCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FMMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTc0MDkyZTBkZWNjZGE5NTBjYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnUmVzZWFyY2ggUGFwZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRpdGxlZCAnVGhlIFZhc3QgRGV2ZWxvcG1lbnRzIG9mIHRoZSBNYXJrZXQgUmV2b2x1dGlvbiwnIHRoaXMgcGFwZXIgYWltcyB0byBjb25zaWRlciB0aGUgbWFqb3IgZWNvbm9taWMgYW5kIHRlY2hub2xvZ2ljYWwgcHJvZ3Jlc3Npb25zIGJyb3VnaHQgYnkgdGhlIE1hcmtldCBSZXZvbHV0aW9uIG9mIHRoZSBlYXJseSAxODAwcy4gSGVyZSwgdGhlIG1ham9yIGNoYW5nZXMgb2YgQW1lcmljYW4gbGlmZSBhcmUgY29uc2lkZXJlZC5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9NYXJrZXQgUmV2b2x1dGlvbiBQcmV2aWV3LnBuZycsXG4gICAgICB0YWdzOiBbJ0FtZXJpY2FuIEhpc3RvcnknLCAnTWFya2V0IFJldm9sdXRpb24nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUklNbEN3TVpBdmg1YmdEd2I1YnIwMWV1OFI4Y2hCdDMvdmlldz91c3A9c2hhcmluZycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Vjb25vbWljIENhc2UgU3R1ZHknLFxuICAgIGRlc2NyaXB0aW9uOlwiVGhpcyBwYXBlciBzZWVrcyB0byBhbmFseXplIHRoZSBpbmR1c3RyaWFsIHBvc2l0aW9uIG9mIHRoZSBEZSBCZWVycyBkaWFtb25kIGNvcnBvcmF0aW9uLiBDb25zaWRlcmVkIGEgY2FydGVsIGJ5IG1hbnksIERlIEJlZXJzJyBvdmVyd2hlbG1pbmcgbWFya2V0IHBvd2VyIHJhaXNlcyBxdWVzdGlvbnMgb2YgcHJpY2Ugc3RhYmlsaXR5LCB3b3JsZHdpZGUgY29tcGV0aXRpb24sIGFuZCBhbnRpdHJ1c3QgbGF3cy4gXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL0RlIEJlZXJzIFByZXZpZXcucG5nJyxcbiAgICB0YWdzOiBbJ0luZHVzdHJpYWwgT3JnYW5pemF0aW9uJywgJ0FudGl0cnVzdCBMYXcnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3lvdXR1YmUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRWQ1QxaFNueS10R2xqNmpSWVh0cWt3R0JDWEFRT0gyL3ZpZXc/dXNwPXNoYXJpbmcnLFxuICAgIGlkOiAxLFxuICB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6ICdpZ25vcmUgdGhpcyBwbHMnLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcImltIHN0aWxsIG1ha2luZyB0aGlzIHNpdGUgYXMgeW91IHJlYWQgdGhpcy4uLlwiLFxuICAvLyAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMuanBnJyxcbiAgLy8gICAgIHRhZ3M6IFsnUmVhY3QnLCAnV2ViUlRDJ10sXG4gIC8vICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgaWQ6IDIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ2lnbm9yZSB0aGlzIGFzIHdlbGwgcGxlYXNlJyxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJJIHdhbnRlZCB0byBoYXZlIHRoaXMgZG9uZSBlYXJsaWVyLi4uXCIsXG4gIC8vICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgLy8gICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXRFbmdpbmUnLCAnRmlyZWJhc2UnXSxcbiAgLy8gICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICBpZDogMyxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBjb25zdCBnYW1lSmFtcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnS0JJTExZIFN1cGVyIFNvdW5kcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQW4gYW5pbWF0aW9uIHNldCB0byBhdWRpbyBmcm9tIFJlc2Vydm9pciBEb2dzIHdpdGggYW4gaW50ZW50aW9uYWwgXCJnbGl0Y2h5XCIgYW5kIGhhbmQgZHJhd24gbG9vay4nLFxuICAgIGltYWdlOiAnL2ltYWdlcy9LQklMTFkgUHJldmlldy5wbmcnLFxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnTHVkdW1EYXJlIEphbSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5HRC1xOENDUmlmZ04xdkpXeXZRN2ItY0VrZndhQmZEL3ZpZXc/dXNwPXNoYXJpbmcnLFxuICAgIC8vIGphbTogJ1N1cGVyIFNvdW5kcyBieSBTdGV2ZW4gV3JpZ2h0JyxcbiAgICAgdGhlbWU6ICdCZSBzdXJlIHRvIHNlbGVjdCAxMDgwcCEnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTHVjeSdzIGEgUmFpbmJvd1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGJyaWVmIGFuaW1hdGlvbiBjb21wYXJpbmcgdHdvIDE5Njcgc29uZ3MgYnkgVGhlIEJlYXRsZXMgYW5kIFRoZSBSb2xsaW5nIFN0b25lcy4gVGhlaXIgU2F0YW5pYyBNYWplc3RpZXMgUmVxdWVzdCBieSBUaGUgUm9sbGluZyBTdG9uZXMgd2FzIHNhaWQgdG8gYmUgYSBydXNoZWQgY29weSBvZiBUaGUgQmVhdGxlcycgU2d0LiBQZXBwZXIncyBMb25lbHkgaGVhcnRzIENsdWIgQmFuZC4gQW5pbWF0aW9uIGludGVuZGVkIHRvIGxvb3AgcGVyZmVjdGx5LlwiLFxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy90aGVsYXRlcmxhYi5naWYnLFxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR01USyBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL3RlYW1qb2x1Lml0Y2guaW8vdGhlLWxhdGVyLWxhYicsXG4gICAgamFtOiAnR01USyAyMDIxIEphbScsXG4gICAgdGhlbWU6ICdQdXp6bGUgUGxhdGZvcm1lcicsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1ZpY2UgRWxmJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGxheSBhcyBhbiBlbGYgd2hvIGhhcyBnb25lIG1hZGUgaW4gU2FudGEncyB3b3Jrc2hvcCBhbmQgaXMgdHJ5aW5nIHRvIGVhdCBhbGwgb3RoZXIgZWx2ZXMhXCIsXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3ZpY2VlbGYuZ2lmJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ1RpbHRlZCBKYW0nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2JvbWJ1cjQwLml0Y2guaW8vdGlsdGVkLWdhbWUtamFtLWVsZi1nYW1lJyxcbiAgICBqYW06ICdUaWx0ZWQgMjAxOSBKYW0nLFxuICAgIHRoZW1lOiAnVG9wIERvd24gQWN0aW9uJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVG9yY2ggRmVsbGEnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0NvbnRyb2wgYSBzZXJpZXMgb2YgYmxvYnMgdG8gdHJhbnNwb3J0IGEgbGl0IHRvcmNoIGFjcm9zcyBhIGxldmVsIGluIG9yZGVyIHRvIGxpZ2h0IHRoZSBib25maXJlLicsXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3RvcmNoZmVsbGEuZ2lmJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0dhbWUgSmFtJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9mbG93bHVrZS5pdGNoLmlvL3RvcmNoLWZlbGxhJyxcbiAgICBqYW06ICdXZWVrbHkgMTY4IEphbScsXG4gICAgdGhlbWU6ICdJc29tZXRyaWMgUHV6emxlJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAnSW50cm9kdWN0aW9uJywgdGV4dDogJ015IGludGVyZXN0IGluIEVjb25vbWljcyBhbmQgQnVzaW5lc3Mgc3RhcnRlZCBhcyBhIGxpdHRsZSBraWQsIGFuZCBoYXMgb25seSBncm93biBzaW5jZS4gQmlnIGZhbiBvZiBiaWcgcGljdHVyZSBzdHVmZiEnLCB9LFxuICB7IHllYXI6ICdHYW1lcycsIHRleHQ6ICdJIGVuam95IHBsYXlpbmcgZXZlcnkga2luZCBvZiBnYW1lLiBTb21lIHJlY2VudCBmYXZvcml0ZXMgaW5jbHVkZSBPdmVyd2F0Y2gsIENpdiBWSSwgTC5BLiBOb2lyZSwgUGFwZXJzIFBsZWFzZSwgYW5kIHNvbWUgRG5EIDVFLicsIH0sXG4gIHsgeWVhcjogJ0FzcGlyYXRpb25zJywgdGV4dDogXCJJIGFpbSB0byB3b3JrIHdoZXJlIG15IGVjb25vbWljIGFuZCBidXNpbmVzcyBpbnRlcmVzdHMgaW50ZXJzZWN0IHdpdGggdGhlIHRoaW5ncyBJJ20gcGFzc2lvbm5hdGUgYWJvdXQuIFNlZSB0aG9zZSB0aGluZ3MgYWJvdmUhXCIgLCB9LFxuICB7IHllYXI6ICdNdXNpYycsIHRleHQ6ICdJIGZpZ3VyZSBJIG5lZWQgYSBxdWljayBsaXN0LiBQZXQgU291bmRzLCBMb2xhIHZzLiBQb3dlcm1hbiwgYW5kIFRoZSBQb2ludCEgQ3VycmVudGx5IGxlYXJuaW5nIHRoZSBndWl0YXIgYW5kIGltcHJvdmluZyBteSBwaWFubyEnLCB9LFxuICB7IHllYXI6ICdNb3ZpZXMnLCB0ZXh0OiAnTWlnaHQgYXMgd2VsbCBtYWtlIGFub3RoZXIgbGlzdC4gVGhlIERhcmplZWxpbmcgTGltaXRlZCwgUmVzZXJ2aW9yIERvZ3MsIFB1bHAgRmljdGlvbiwgVGhlcmUgV2lsbCBCZSBCbG9vZC4nLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9