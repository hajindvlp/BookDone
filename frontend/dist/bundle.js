/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/bookinfo.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/bookinfo.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#book_info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#book_info #main {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n#book_info #image {\\r\\n  width: 400px;\\r\\n  border-radius: 1rem;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n#book_info #details {\\r\\n  margin: 20px 0 0 20px;\\r\\n}\\r\\n\\r\\n#book_info #details #title {\\r\\n  font-size: 55px;\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\n#book_info #details #writer {\\r\\n  display: inline;\\r\\n  font-size: 25px;\\r\\n  margin: 0px;\\r\\n}\\r\\n\\r\\n#book_info #details #seperator {\\r\\n  display: inline;\\r\\n  font-size: 20px;\\r\\n  margin: 0 5px;\\r\\n}\\r\\n\\r\\n#book_info #details #publisher {\\r\\n  font-size: 20px;\\r\\n  display: inline;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/bookinfo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/booklist.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/booklist.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#book_list {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\r\\n  grid-gap: 1rem;\\r\\n}\\r\\n\\r\\n#book_list #book {\\r\\n  width: 200px;\\r\\n  cursor: pointer;\\r\\n  align-self: end;\\r\\n}\\r\\n\\r\\n#book_list #book #image {\\r\\n  width: 200px;\\r\\n  border-radius: 1rem;\\r\\n  align-self: end;\\r\\n  opacity: 0.7;\\r\\n  box-shadow: none;\\r\\n  transition: 300ms;\\r\\n}\\r\\n\\r\\n#book_list #book #image:hover {\\r\\n  opacity: 1;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n#book_list #add {\\r\\n  width: 180px;\\r\\n  height: 270px;\\r\\n  align-self: end;\\r\\n  border: 10px dashed black;\\r\\n  border-radius: 2rem;\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n  line-height: 270px;\\r\\n  background-color: rgba(0, 0, 0, 0.02);\\r\\n  box-shadow: none;\\r\\n  transition: 500ms;\\r\\n}\\r\\n\\r\\n#book_list #add:hover {\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  background-color: rgba(0,0,0,0.2);\\r\\n}\\r\\n\\r\\n#book_list #add #text {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 700;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/booklist.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/bookshelf.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/bookshelf.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@keyframes book-bounce {\\r\\n  0% {\\r\\n    transform: translateY(0);\\r\\n }\\r\\n  40% {\\r\\n    transform: translateY(-10px);\\r\\n }\\r\\n  80% {\\r\\n    transform: translateY(0);\\r\\n }\\r\\n  100% {\\r\\n    transform: translateY(0);\\r\\n }\\r\\n}\\r\\n@keyframes shelf-lift {\\r\\n  0% {\\r\\n    transform: translateY(0) rotate(0);\\r\\n }\\r\\n  20% {\\r\\n    transform: translateY(-4px) rotate(10deg);\\r\\n }\\r\\n  40% {\\r\\n    transform: translateY(-4px) rotate(0);\\r\\n }\\r\\n  40% {\\r\\n    transform: translateY(-4px) rotate(-10deg);\\r\\n }\\r\\n  80% {\\r\\n    transform: translateY(0);\\r\\n }\\r\\n  100% {\\r\\n    transform: translateY(0);\\r\\n }\\r\\n}\\r\\n.book-shelf:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n.book-shelf:hover .book-shelf__book {\\r\\n  animation: book-bounce 0.4s ease;\\r\\n  animation-iteration-count: 1;\\r\\n}\\r\\n.book-shelf:hover .book-shelf__book--two {\\r\\n  animation-delay: 0.04s;\\r\\n}\\r\\n.book-shelf:hover .book-shelf__book--three {\\r\\n  animation-delay: 0.08s;\\r\\n}\\r\\n.book-shelf:hover .book-shelf__shelf {\\r\\n  animation: shelf-lift 0.4s ease;\\r\\n  animation-iteration-count: 1;\\r\\n  transform-origin: 50% 50%;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/bookshelf.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/library.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/library.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#library {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#library #tag {\\r\\n  padding-bottom: 20px;\\r\\n}\\r\\n\\r\\n#library #tag #title {\\r\\n  display: inline;\\r\\n  font-size: 40px;\\r\\n}\\r\\n\\r\\n#library #tag #seperator {\\r\\n  display: inline;\\r\\n  font-size: 30px;\\r\\n  padding: 0 10px;\\r\\n}\\r\\n\\r\\n#library #tag #desc {\\r\\n  display: inline;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n#library #tag #books {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  overflow-x: auto;\\r\\n  white-space: nowrap;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n\\r\\n#library #tag #books #book {\\r\\n  width: 200px;\\r\\n  cursor: pointer;\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n#library #tag #books #book #image {\\r\\n  width: 200px;\\r\\n  border-radius: 1rem;\\r\\n  align-self: end;\\r\\n  opacity: 0.7;\\r\\n  box-shadow: none;\\r\\n  transition: 300ms;\\r\\n}\\r\\n\\r\\n#library #tag #books #book #image:hover {\\r\\n  opacity: 1;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/library.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n\\r\\n/* Document\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\r\\n\\r\\n html {\\r\\n  line-height: 1.15; /* 1 */\\r\\n  -webkit-text-size-adjust: 100%; /* 2 */\\r\\n}\\r\\n\\r\\n/* Sections\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the margin in all browsers.\\r\\n */\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Render the `main` element consistently in IE.\\r\\n */\\r\\n\\r\\nmain {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the font size and margin on `h1` elements within `section` and\\r\\n * `article` contexts in Chrome, Firefox, and Safari.\\r\\n */\\r\\n\\r\\nh1 {\\r\\n  font-size: 2em;\\r\\n  margin: 0.67em 0;\\r\\n}\\r\\n\\r\\n/* Grouping content\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Add the correct box sizing in Firefox.\\r\\n * 2. Show the overflow in Edge and IE.\\r\\n */\\r\\n\\r\\nhr {\\r\\n  box-sizing: content-box; /* 1 */\\r\\n  height: 0; /* 1 */\\r\\n  overflow: visible; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\r\\n\\r\\npre {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/* Text-level semantics\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the gray background on active links in IE 10.\\r\\n */\\r\\n\\r\\na {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Remove the bottom border in Chrome 57-\\r\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n */\\r\\n\\r\\nabbr[title] {\\r\\n  border-bottom: none; /* 1 */\\r\\n  text-decoration: underline; /* 2 */\\r\\n  text-decoration: underline dotted; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n */\\r\\n\\r\\nb,\\r\\nstrong {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\r\\n\\r\\ncode,\\r\\nkbd,\\r\\nsamp {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct font size in all browsers.\\r\\n */\\r\\n\\r\\nsmall {\\r\\n  font-size: 80%;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n * all browsers.\\r\\n */\\r\\n\\r\\nsub,\\r\\nsup {\\r\\n  font-size: 75%;\\r\\n  line-height: 0;\\r\\n  position: relative;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\nsub {\\r\\n  bottom: -0.25em;\\r\\n}\\r\\n\\r\\nsup {\\r\\n  top: -0.5em;\\r\\n}\\r\\n\\r\\n/* Embedded content\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the border on images inside links in IE 10.\\r\\n */\\r\\n\\r\\nimg {\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\n/* Forms\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Change the font styles in all browsers.\\r\\n * 2. Remove the margin in Firefox and Safari.\\r\\n */\\r\\n\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n  font-family: inherit; /* 1 */\\r\\n  font-size: 100%; /* 1 */\\r\\n  line-height: 1.15; /* 1 */\\r\\n  margin: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Show the overflow in IE.\\r\\n * 1. Show the overflow in Edge.\\r\\n */\\r\\n\\r\\nbutton,\\r\\ninput { /* 1 */\\r\\n  overflow: visible;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n * 1. Remove the inheritance of text transform in Firefox.\\r\\n */\\r\\n\\r\\nbutton,\\r\\nselect { /* 1 */\\r\\n  text-transform: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the inability to style clickable types in iOS and Safari.\\r\\n */\\r\\n\\r\\nbutton,\\r\\n[type=\\\"button\\\"],\\r\\n[type=\\\"reset\\\"],\\r\\n[type=\\\"submit\\\"] {\\r\\n  -webkit-appearance: button;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inner border and padding in Firefox.\\r\\n */\\r\\n\\r\\nbutton::-moz-focus-inner,\\r\\n[type=\\\"button\\\"]::-moz-focus-inner,\\r\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\r\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\r\\n  border-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Restore the focus styles unset by the previous rule.\\r\\n */\\r\\n\\r\\nbutton:-moz-focusring,\\r\\n[type=\\\"button\\\"]:-moz-focusring,\\r\\n[type=\\\"reset\\\"]:-moz-focusring,\\r\\n[type=\\\"submit\\\"]:-moz-focusring {\\r\\n  outline: 1px dotted ButtonText;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the padding in Firefox.\\r\\n */\\r\\n\\r\\nfieldset {\\r\\n  padding: 0.35em 0.75em 0.625em;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the text wrapping in Edge and IE.\\r\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n * 3. Remove the padding so developers are not caught out when they zero out\\r\\n *    `fieldset` elements in all browsers.\\r\\n */\\r\\n\\r\\nlegend {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  color: inherit; /* 2 */\\r\\n  display: table; /* 1 */\\r\\n  max-width: 100%; /* 1 */\\r\\n  padding: 0; /* 3 */\\r\\n  white-space: normal; /* 1 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n */\\r\\n\\r\\nprogress {\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the default vertical scrollbar in IE 10+.\\r\\n */\\r\\n\\r\\ntextarea {\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Add the correct box sizing in IE 10.\\r\\n * 2. Remove the padding in IE 10.\\r\\n */\\r\\n\\r\\n[type=\\\"checkbox\\\"],\\r\\n[type=\\\"radio\\\"] {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  padding: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n */\\r\\n\\r\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the odd appearance in Chrome and Safari.\\r\\n * 2. Correct the outline style in Safari.\\r\\n */\\r\\n\\r\\n[type=\\\"search\\\"] {\\r\\n  -webkit-appearance: textfield; /* 1 */\\r\\n  outline-offset: -2px; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inner padding in Chrome and Safari on macOS.\\r\\n */\\r\\n\\r\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n  -webkit-appearance: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n * 2. Change font properties to `inherit` in Safari.\\r\\n */\\r\\n\\r\\n::-webkit-file-upload-button {\\r\\n  -webkit-appearance: button; /* 1 */\\r\\n  font: inherit; /* 2 */\\r\\n}\\r\\n\\r\\n/* Interactive\\r\\n   ========================================================================== */\\r\\n\\r\\n/*\\r\\n * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n */\\r\\n\\r\\ndetails {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/*\\r\\n * Add the correct display in all browsers.\\r\\n */\\r\\n\\r\\nsummary {\\r\\n  display: list-item;\\r\\n}\\r\\n\\r\\n/* Misc\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Add the correct display in IE 10+.\\r\\n */\\r\\n\\r\\ntemplate {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct display in IE 10.\\r\\n */\\r\\n\\r\\n[hidden] {\\r\\n  display: none;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sidemenu.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sidemenu.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./bookshelf.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/bookshelf.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"#nav {\\r\\n  padding-top: 20px;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n#nav #icon {\\r\\n\\tdisplay: block;\\r\\n\\tmargin: auto;\\r\\n\\twidth: 80%;\\r\\n}\\r\\n\\r\\n#nav #link {\\r\\n\\tdisplay: block;\\r\\n\\tpadding: 17px 0 3px 0;\\r\\n\\tmargin: 10px 0;\\r\\n\\ttext-decoration: none;\\r\\n\\ttext-align: center;\\r\\n\\tfont-size: 35px;\\r\\n\\tfont-weight: bold;\\r\\n\\tcolor: black;\\r\\n\\ttransition: 300ms;\\r\\n}\\r\\n\\r\\n#nav #link:hover {\\r\\n\\tcolor: white;\\r\\n\\tbackground: black;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/sidemenu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./sidemenu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/sidemenu.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./booklist.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/booklist.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./bookinfo.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/bookinfo.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./library.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/library.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500&family=Yeon+Sung&display=swap);\"]);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\n// Module\nexports.push([module.i, \"body {\\r\\n  height: 100%;\\r\\n  font-family: 'Baloo Tamma 2', 'Yeon Sung';\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar {\\r\\n  width: 0.5rem;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-button {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-track {\\r\\n  background: #ffffff;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-thumb {\\r\\n  background: #6649b8;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  margin: 2rem;\\r\\n  margin-left: 20rem;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  position: fixed;\\r\\n  height: 100%;\\r\\n  width: 18rem;\\r\\n  z-index: 1;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  bottom: 15px;\\r\\n  left: 0;\\r\\n  text-align: center;\\r\\n  color: #636363;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/api/getBook.js":
/*!****************************!*\
  !*** ./src/api/getBook.js ***!
  \****************************/
/*! exports provided: getBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBooks\", function() { return getBooks; });\nlet bookJSON = `\r\n[\r\n    {\r\n        \"id\" : \"wjdgkwls\",\r\n        \"title\" : \"신화 콘서트\",\r\n        \"writer\" : \"김상훈\",\r\n        \"publisher\" : \"행복한작업실\",\r\n        \"image\" : \"http://image.yes24.com/goods/90004167/800x0\",\r\n        \"read\" : 12,\r\n        \"content\" : [\r\n            {\r\n                \"title\" : \"title of chapter\",\r\n                \"pagenum\" : 12  \r\n            }\r\n        ],\r\n        \"notes\" : [\r\n            {\r\n                \"date\" : \"date of note\",\r\n                \"content\" : \"content of note\"\r\n            }\r\n        ]   \r\n    },\r\n    {\r\n        \"id\" : \"wjdalstj\",\r\n        \"title\" : \"지금 시작하는 생각 인문학\",\r\n        \"writer\" : \"이화선\",\r\n        \"publisher\" : \"비즈니스북스\",\r\n        \"image\" : \"http://image.yes24.com/goods/89967132/800x0\",\r\n        \"read\" : 12,\r\n        \"content\" : [\r\n            {\r\n                \"title\" : \"title of chapter\",\r\n                \"pagenum\" : 12  \r\n            }\r\n        ],\r\n        \"notes\" : [\r\n            {\r\n                \"date\" : \"date of note\",\r\n                \"content\" : \"content of note\"\r\n            }\r\n        ]   \r\n    },\r\n    {\r\n        \"id\" : \"wjdshdud\",\r\n        \"title\" : \"능률보카 어원편\",\r\n        \"writer\" : \"능률영어교육연구소\",\r\n        \"publisher\" :\" NE능률\",\r\n        \"image\" : \"http://image.yes24.com/goods/45512761/800x0\",\r\n        \"read\" : 12,\r\n        \"content\" : [\r\n            {\r\n                \"title\" : \"title of chapter\",\r\n                \"pagenum\" : 12  \r\n            }\r\n        ],\r\n        \"notes\" : [\r\n            {\r\n                \"date\" : \"date of note\",\r\n                \"content\" : \"content of note\"\r\n            }\r\n        ]   \r\n    },\r\n    {\r\n        \"id\" : \"qkrcnsgml\",\r\n        \"title\" : \"워드마스터 Word Master 중등 실력\",\r\n        \"writer\" : \"박혜란, 조은정, 홍미정\",\r\n        \"publisher\" :\"이투스북\",\r\n        \"image\" : \"http://image.yes24.com/goods/32456200/800x0\",\r\n        \"read\" : 12,\r\n        \"content\" : [\r\n            {\r\n                \"title\" : \"title of chapter\",\r\n                \"pagenum\" : 12  \r\n            }\r\n        ],\r\n        \"notes\" : [\r\n            {\r\n                \"date\" : \"date of note\",\r\n                \"content\" : \"content of note\"\r\n            }\r\n        ]   \r\n    }\r\n]\r\n`;\r\n\r\nfunction getBooks(...bookIDs) {\r\n    //api call to /book\r\n    let books = JSON.parse(bookJSON);\r\n\r\n    return bookIDs.map(bookID => {\r\n        return books.find(book => {\r\n            return book.id == bookID;\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/api/getBook.js?");

/***/ }),

/***/ "./src/api/getLibraryBook.js":
/*!***********************************!*\
  !*** ./src/api/getLibraryBook.js ***!
  \***********************************/
/*! exports provided: getLibraryBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLibraryBook\", function() { return getLibraryBook; });\nlet libraryBooks = `[\r\n    {\r\n        \"tag\": \"베스트 셀러\",\r\n        \"desc\": \"우리 도서관에서 가장 핫한 책들~!\",\r\n        \"books\": [\r\n            \"wjdgkwls\",\r\n            \"wjdalstj\",\r\n            \"wjdshdud\",\r\n            \"qkrcnsgml\"\r\n        ]\r\n    },\r\n    {\r\n        \"tag\": \"스테디 셀러\",\r\n        \"desc\": \"꾸준한 재미와 깨달음을 선사하는 책들\",\r\n        \"books\": [\r\n            \"wjdgkwls\",\r\n            \"wjdalstj\",\r\n            \"wjdshdud\",\r\n            \"qkrcnsgml\"\r\n        ]\r\n    },\r\n    {\r\n        \"tag\": \"신작\",\r\n        \"desc\": \"새로 나온 따끈 따끈한 책들\",\r\n        \"books\": [\r\n            \"wjdgkwls\",\r\n            \"wjdalstj\",\r\n            \"wjdshdud\",\r\n            \"qkrcnsgml\"\r\n        ]\r\n    }\r\n]`\r\n\r\nfunction getLibraryBook() {\r\n    return JSON.parse(libraryBooks);\r\n}\n\n//# sourceURL=webpack:///./src/api/getLibraryBook.js?");

/***/ }),

/***/ "./src/api/getUserBooks.js":
/*!*********************************!*\
  !*** ./src/api/getUserBooks.js ***!
  \*********************************/
/*! exports provided: getBookList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBookList\", function() { return getBookList; });\n/* harmony import */ var _getBook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBook.js */ \"./src/api/getBook.js\");\n\r\n\r\nlet userBookJSON = `[\r\n    \"wjdgkwls\",\r\n    \"wjdalstj\",\r\n    \"wjdshdud\",\r\n    \"qkrcnsgml\"\r\n]\r\n`;\r\n\r\nfunction getBookList() {\r\n    // api call to /user/book\r\n    let userBooks = JSON.parse(userBookJSON);\r\n    return Object(_getBook_js__WEBPACK_IMPORTED_MODULE_0__[\"getBooks\"])(...userBooks);\r\n}\n\n//# sourceURL=webpack:///./src/api/getUserBooks.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ \"./src/component.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n/* harmony import */ var _v_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v-dom.js */ \"./src/v-dom.js\");\n/* harmony import */ var _components_sidemenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidemenu.js */ \"./src/components/sidemenu.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass App extends _component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    render() {\r\n        return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {id: \"app\"},\r\n            Object(_components_sidemenu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\r\n            _router_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init()\r\n        )\r\n    }\r\n}\r\n\r\nif(typeof document !== \"undefined\" ) {\r\n    Object(_v_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"diff\"])(undefined, Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(App), document.getElementById(\"root\"));    \r\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _v_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-dom.js */ \"./src/v-dom.js\");\n\r\n\r\nclass Component {\r\n  constructor(props) {\r\n    this.props = props\r\n    this.state = {}\r\n  }\r\n\r\n  setState(state) {\r\n    this.state = Object.assign({}, state)\r\n    Object(_v_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"renderComponent\"])(this)\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/component.js?");

/***/ }),

/***/ "./src/components/404.js":
/*!*******************************!*\
  !*** ./src/components/404.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", null, Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", {id: \"404\"}, \"404 not found\"));\r\n});\n\n//# sourceURL=webpack:///./src/components/404.js?");

/***/ }),

/***/ "./src/components/bookinfo.js":
/*!************************************!*\
  !*** ./src/components/bookinfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _404_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.js */ \"./src/components/404.js\");\n/* harmony import */ var _api_getBook_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/getBook.js */ \"./src/api/getBook.js\");\n// url : /book/[book_name]\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((bookID) => {\r\n  let book = Object(_api_getBook_js__WEBPACK_IMPORTED_MODULE_2__[\"getBooks\"])(bookID)[0];\r\n  \r\n  if(book) {\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {\"id\" : \"book_info\"},\r\n      Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"main\"},\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {id : \"image\", src : book.image}),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"details\"},\r\n          Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"title\"}, book.title),\r\n          Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"writer\"}, book.writer),\r\n          Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"seperator\"}, \"|\"),\r\n          Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"publisher\"}, book.publisher),\r\n        ),\r\n      ),\r\n      Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"content_list\"}, \r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {id: \"content_title\"}, \"차례\"),\r\n\t        ...book.content.map(content => {\r\n\t          return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\", {id: \"content\"}, \r\n\t            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"content_title\"}, content.title),\r\n\t            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"content_pagenum\"}, content.pagenum.toString())                    \r\n\t          )\r\n\t        })\r\n      ),\r\n      Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"note_list\"}, \r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {id: \"note_title\"}, \"노트\"),\r\n\t        ...book.notes.map(note => {\r\n\t          return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\", {id: \"note\"},\r\n\t            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"note_date\"}, note.date),\r\n\t            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"note_content\"}, note.content)\r\n\t          )\r\n\t        })\r\n      )\r\n    );\r\n  } else {\r\n    return Object(_404_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  }\r\n});\n\n//# sourceURL=webpack:///./src/components/bookinfo.js?");

/***/ }),

/***/ "./src/components/booklist.js":
/*!************************************!*\
  !*** ./src/components/booklist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _api_getUserBooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getUserBooks.js */ \"./src/api/getUserBooks.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n  let booklist = Object(_api_getUserBooks_js__WEBPACK_IMPORTED_MODULE_1__[\"getBookList\"])();\r\n  return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {id: \"book_list\"}, \r\n    ...booklist.map( book => {\r\n      return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id : \"book\"},\r\n      Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {href: `/book/${book.id}`},\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {src: book.image, id : \"image\"})\r\n      ));\r\n    }),\r\n    Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"add\"}, \r\n      Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\" , {id: \"text\"}, \"책 추가하기\")\r\n    )\r\n  );\r\n});\n\n//# sourceURL=webpack:///./src/components/booklist.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n  return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"footer\", {id: \"footer\"},\r\n    Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"text\"}, \"Made With 💖 By Hajindvlp \")    \r\n  ) \r\n}); \n\n//# sourceURL=webpack:///./src/components/footer.js?");

/***/ }),

/***/ "./src/components/library.js":
/*!***********************************!*\
  !*** ./src/components/library.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _api_getLibraryBook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getLibraryBook.js */ \"./src/api/getLibraryBook.js\");\n/* harmony import */ var _api_getBook_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/getBook.js */ \"./src/api/getBook.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n  let libraryBooks = Object(_api_getLibraryBook_js__WEBPACK_IMPORTED_MODULE_1__[\"getLibraryBook\"])();\r\n\r\n  return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {id: \"library\"},\r\n    ...libraryBooks.map(lib => {\r\n      let books = Object(_api_getBook_js__WEBPACK_IMPORTED_MODULE_2__[\"getBooks\"])(...lib.books);\r\n\r\n      return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"tag\"},\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"title\"}, lib.tag),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"seperator\"}, \"|\"),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"desc\"}, lib.desc),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"books\"}, \r\n          ...books.map(book => {\r\n            return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"book\"},\r\n              Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {id: \"image\", src: book.image})\r\n            )\r\n          })\r\n        )\r\n      )\r\n    })\r\n  )\r\n});\n\n//# sourceURL=webpack:///./src/components/library.js?");

/***/ }),

/***/ "./src/components/sidemenu.js":
/*!************************************!*\
  !*** ./src/components/sidemenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/components/footer.js\");\n\r\n\r\n\r\nconst menu = [\r\n\t{href: \"/library\", name: \"📚 도서관\"},\r\n\t{href: \"/book\", name: \"📘 내 서재\"},\r\n\t{href: \"/calendar\", name: \"📅 달력\"},\r\n]\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n\treturn Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\", {id: \"nav\"}, \r\n\t\tObject(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {href: \"/\"}, Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {id: \"icon\", src: \"/src/img/bookshelf.svg\"})),\r\n\t\t...menu.map(m => Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {href: m.href, id: \"link\"}, m.name)),\r\n\t\tObject(_footer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n  )\r\n});\n\n//# sourceURL=webpack:///./src/components/sidemenu.js?");

/***/ }),

/***/ "./src/components/test.js":
/*!********************************!*\
  !*** ./src/components/test.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Test; });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component.js */ \"./src/component.js\");\n\r\n\r\n\r\nclass Test extends _component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] { \r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            message: \"dd\"\r\n        }\r\n    }\r\n\r\n    buttonClick(e) {\r\n        this.setState({message: \"gkgkgk\"});\r\n    }\r\n\r\n    render() {\r\n        return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null,\r\n            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", null, this.state.message),\r\n            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", {onclick: this.buttonClick}, \"Click This\")\r\n        )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/test.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return element; });\nfunction element(nodeName, attributes, ...children) {\r\n    return {nodeName, attributes, children};\r\n}\r\n\n\n//# sourceURL=webpack:///./src/element.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/element.js\");\n/* harmony import */ var _components_library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/library.js */ \"./src/components/library.js\");\n/* harmony import */ var _components_booklist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/booklist.js */ \"./src/components/booklist.js\");\n/* harmony import */ var _components_bookinfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bookinfo.js */ \"./src/components/bookinfo.js\");\n/* harmony import */ var _components_404_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/404.js */ \"./src/components/404.js\");\n/* harmony import */ var _components_test_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/test.js */ \"./src/components/test.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Router {\r\n    constructor() {\r\n        this.routes = [];\r\n    }\r\n\r\n    get(uri, callback) {\r\n        const route = {\r\n            uri,\r\n            callback\r\n        }\r\n        this.routes.push(route);\r\n    }\r\n\r\n    init() {\r\n        let path = decodeURI(window.location.pathname);\r\n        let pathParse = path.split('/')\r\n        for(let route of this.routes) {\r\n            let match = false;\r\n            let uriParse = route.uri.split('/');\r\n            let req = {\r\n                path,\r\n                attributes: {}\r\n            }\r\n\r\n            if(uriParse.length == pathParse.length) \r\n                for(let idx in pathParse) {\r\n                    if(uriParse[idx].startsWith(\":\")) {\r\n                        let attrName = uriParse[idx].substr(1);\r\n                        req.attributes[attrName] = pathParse[idx];\r\n                        match = true;\r\n                    } else if(pathParse[idx] !== uriParse[idx]) {\r\n                        match = false;\r\n                        break;\r\n                    } else if(pathParse[idx] === uriParse[idx]) {\r\n                        match = true;\r\n                    }   \r\n                }\r\n\r\n            if(match) {\r\n                return route.callback.call(this, req);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nconst router = new Router();\r\n\r\nrouter.get('/', req => {\r\n    return Object(_components_booklist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})\r\n\r\nrouter.get('/library', req => {\r\n    return Object(_components_library_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\r\nrouter.get('/book', req => {\r\n    return Object(_components_booklist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\nrouter.get('/book/:bookID', req => {\r\n    return Object(_components_bookinfo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req.attributes.bookID);\r\n});\r\n\r\nrouter.get('/book/edit/:bookID', req => {\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(EditBook, req);\r\n})\r\n\r\nrouter.get('/test', _ => {\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_components_test_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n})\r\n\r\nrouter.get('/:d', req => {\r\n    return Object(_components_404_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/v-dom.js":
/*!**********************!*\
  !*** ./src/v-dom.js ***!
  \**********************/
/*! exports provided: renderComponent, diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderComponent\", function() { return renderComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diff\", function() { return diff; });\nconst renderNode = vnode => {\r\n    let el\r\n  \r\n    const { nodeName, attributes, children } = vnode;\r\n  \r\n    if (vnode.split) return document.createTextNode(vnode)\r\n  \r\n    if (typeof nodeName === 'string') { \r\n        el = document.createElement(nodeName)\r\n    \r\n        for (let key in attributes) {\r\n            el.setAttribute(key, attributes[key])\r\n        }\r\n    } else if (typeof nodeName === 'function') { \r\n        const component = new nodeName(attributes)\r\n        el = renderNode(\r\n            component.render(component.props, component.state)\r\n        )\r\n        component.base = el\r\n    }\r\n    (children || []).forEach(child => el.appendChild(renderNode(child)))\r\n  \r\n    return el\r\n}\r\n  \r\nconst renderComponent = (component, parent) => {\r\n    let rendered = component.render(component.props, component.state);\r\n    component.base = diff(component.base, rendered);\r\n}\r\n\r\nconst diff = (dom, vnode, parent) => {\r\n    if(dom) {\r\n        if(typeof vnode === \"string\") {\r\n            dom.nodeValue = vnode;\r\n            return dom;\r\n        }\r\n        if(typeof vnode.nodeName === \"function\") {\r\n            const component = new vnode.nodeName(vnode.attributes)\r\n            const rendered = component.render(component.props, component.state)\r\n\r\n            diff(dom, rendered)\r\n            return dom\r\n        }\r\n        if (vnode.children.length !== dom.childNodes.length) {\r\n            dom.appendChild(\r\n                renderNode(vnode.children[vnode.children.length - 1])\r\n            )\r\n        }      \r\n        dom.childNodes.forEach((child, i) => diff(child, vnode.children[i]))\r\n        return dom;\r\n    } else {\r\n        const newDom = renderNode(vnode);\r\n        parent.appendChild(newDom);\r\n        return newDom;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/v-dom.js?");

/***/ })

/******/ });