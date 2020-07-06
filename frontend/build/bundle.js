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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#book_info {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#book_info #main {\\n  display: flex;\\n}\\n\\n#book_info #image {\\n  width: 400px;\\n  border-radius: 1rem;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#book_info #details {\\n  margin: 20px 0 0 20px;\\n}\\n\\n#book_info #details #title {\\n  font-size: 55px;\\n  margin: 10px 0;\\n}\\n\\n#book_info #details #writer {\\n  display: inline;\\n  font-size: 25px;\\n  margin: 0px;\\n}\\n\\n#book_info #details #seperator {\\n  display: inline;\\n  font-size: 20px;\\n  margin: 0 5px;\\n}\\n\\n#book_info #details #publisher {\\n  font-size: 20px;\\n  display: inline;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/bookinfo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/booklist.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/booklist.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#book_list {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n  grid-gap: 1rem;\\n}\\n\\n#book_list #book {\\n  width: 200px;\\n  cursor: pointer;\\n  align-self: end;\\n}\\n\\n#book_list #book #image {\\n  width: 200px;\\n  border-radius: 1rem;\\n  align-self: end;\\n  opacity: 0.7;\\n  box-shadow: none;\\n  transition: 300ms;\\n}\\n\\n#book_list #book #image:hover {\\n  opacity: 1;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#book_list #add {\\n  width: 180px;\\n  height: 270px;\\n  align-self: end;\\n  border: 10px dashed black;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n  text-align: center;\\n  line-height: 270px;\\n  background-color: rgba(0, 0, 0, 0.02);\\n  box-shadow: none;\\n  transition: 500ms;\\n}\\n\\n#book_list #add:hover {\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  background-color: rgba(0,0,0,0.2);\\n}\\n\\n#book_list #add #text {\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/booklist.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/bookshelf.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/bookshelf.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@keyframes book-bounce {\\n  0% {\\n    transform: translateY(0);\\n }\\n  40% {\\n    transform: translateY(-10px);\\n }\\n  80% {\\n    transform: translateY(0);\\n }\\n  100% {\\n    transform: translateY(0);\\n }\\n}\\n@keyframes shelf-lift {\\n  0% {\\n    transform: translateY(0) rotate(0);\\n }\\n  20% {\\n    transform: translateY(-4px) rotate(10deg);\\n }\\n  40% {\\n    transform: translateY(-4px) rotate(0);\\n }\\n  40% {\\n    transform: translateY(-4px) rotate(-10deg);\\n }\\n  80% {\\n    transform: translateY(0);\\n }\\n  100% {\\n    transform: translateY(0);\\n }\\n}\\n.book-shelf:hover {\\n  cursor: pointer;\\n}\\n.book-shelf:hover .book-shelf__book {\\n  animation: book-bounce 0.4s ease;\\n  animation-iteration-count: 1;\\n}\\n.book-shelf:hover .book-shelf__book--two {\\n  animation-delay: 0.04s;\\n}\\n.book-shelf:hover .book-shelf__book--three {\\n  animation-delay: 0.08s;\\n}\\n.book-shelf:hover .book-shelf__shelf {\\n  animation: shelf-lift 0.4s ease;\\n  animation-iteration-count: 1;\\n  transform-origin: 50% 50%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/bookshelf.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/library.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/library.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#library {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#library #tag {\\n  padding-bottom: 20px;\\n}\\n\\n#library #tag #title {\\n  display: inline;\\n  font-size: 40px;\\n}\\n\\n#library #tag #seperator {\\n  display: inline;\\n  font-size: 30px;\\n  padding: 0 10px;\\n}\\n\\n#library #tag #desc {\\n  display: inline;\\n  font-size: 20px;\\n}\\n\\n#library #tag #books {\\n  display: flex;\\n  flex-direction: row;\\n  overflow-x: auto;\\n  white-space: nowrap;\\n  align-items: flex-end;\\n}\\n\\n#library #tag #books #book {\\n  width: 200px;\\n  cursor: pointer;\\n  padding: 0 20px;\\n}\\n\\n#library #tag #books #book #image {\\n  width: 200px;\\n  border-radius: 1rem;\\n  align-self: end;\\n  opacity: 0.7;\\n  box-shadow: none;\\n  transition: 300ms;\\n}\\n\\n#library #tag #books #book #image:hover {\\n  opacity: 1;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/library.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\n html {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sidemenu.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sidemenu.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./bookshelf.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/bookshelf.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"#nav {\\n  padding-top: 20px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#nav #title_icon {\\n\\tdisplay: block;\\n\\tmargin: auto;\\n\\twidth: 80%;\\n}\\n\\n#nav #link {\\n\\tdisplay: block;\\n\\tpadding: 17px 0 3px 0;\\n\\tmargin: 10px 0;\\n\\ttext-decoration: none;\\n\\ttext-align: center;\\n\\tfont-size: 35px;\\n\\tfont-weight: bold;\\n\\tcolor: black;\\n\\ttransition: 300ms;\\n}\\n\\n#nav #link:hover {\\n\\tcolor: white;\\n\\tbackground: black;\\n}\\n\\n#nav #icon {\\n\\tpadding-right: 10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/sidemenu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./sidemenu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/sidemenu.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./booklist.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/booklist.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./bookinfo.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/bookinfo.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./library.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/library.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500&family=Yeon+Sung&display=swap);\"]);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\n// Module\nexports.push([module.i, \"body {\\n  height: 100%;\\n  font-family: 'Baloo Tamma 2', 'Yeon Sung';\\n}\\n\\nbody::-webkit-scrollbar {\\n  width: 0.5rem;\\n}\\n\\nbody::-webkit-scrollbar-button {\\n  display: none;\\n}\\n\\nbody::-webkit-scrollbar-track {\\n  background: #ffffff;\\n}\\n\\nbody::-webkit-scrollbar-thumb {\\n  background: #6649b8;\\n}\\n\\nsection {\\n  margin: 2rem;\\n  margin-left: 20rem;\\n}\\n\\nnav {\\n  position: fixed;\\n  height: 100%;\\n  width: 18rem;\\n  z-index: 1;\\n  top: 0;\\n  left: 0;\\n  overflow-x: hidden;\\n}\\n\\nfooter {\\n  position: absolute;\\n  right: 0;\\n  bottom: 15px;\\n  left: 0;\\n  text-align: center;\\n  color: #636363;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBooks\", function() { return getBooks; });\nlet bookJSON = `\n[\n    {\n        \"id\" : \"wjdgkwls\",\n        \"title\" : \"신화 콘서트\",\n        \"writer\" : \"김상훈\",\n        \"publisher\" : \"행복한작업실\",\n        \"image\" : \"http://image.yes24.com/goods/90004167/800x0\",\n        \"read\" : 12,\n        \"content\" : [\n            {\n                \"title\" : \"title of chapter\",\n                \"pagenum\" : 12  \n            }\n        ],\n        \"notes\" : [\n            {\n                \"date\" : \"date of note\",\n                \"content\" : \"content of note\"\n            }\n        ]   \n    },\n    {\n        \"id\" : \"wjdalstj\",\n        \"title\" : \"지금 시작하는 생각 인문학\",\n        \"writer\" : \"이화선\",\n        \"publisher\" : \"비즈니스북스\",\n        \"image\" : \"http://image.yes24.com/goods/89967132/800x0\",\n        \"read\" : 12,\n        \"content\" : [\n            {\n                \"title\" : \"title of chapter\",\n                \"pagenum\" : 12  \n            }\n        ],\n        \"notes\" : [\n            {\n                \"date\" : \"date of note\",\n                \"content\" : \"content of note\"\n            }\n        ]   \n    },\n    {\n        \"id\" : \"wjdshdud\",\n        \"title\" : \"능률보카 어원편\",\n        \"writer\" : \"능률영어교육연구소\",\n        \"publisher\" :\" NE능률\",\n        \"image\" : \"http://image.yes24.com/goods/45512761/800x0\",\n        \"read\" : 12,\n        \"content\" : [\n            {\n                \"title\" : \"title of chapter\",\n                \"pagenum\" : 12  \n            }\n        ],\n        \"notes\" : [\n            {\n                \"date\" : \"date of note\",\n                \"content\" : \"content of note\"\n            }\n        ]   \n    },\n    {\n        \"id\" : \"qkrcnsgml\",\n        \"title\" : \"워드마스터 Word Master 중등 실력\",\n        \"writer\" : \"박혜란, 조은정, 홍미정\",\n        \"publisher\" :\"이투스북\",\n        \"image\" : \"http://image.yes24.com/goods/32456200/800x0\",\n        \"read\" : 12,\n        \"content\" : [\n            {\n                \"title\" : \"title of chapter\",\n                \"pagenum\" : 12  \n            }\n        ],\n        \"notes\" : [\n            {\n                \"date\" : \"date of note\",\n                \"content\" : \"content of note\"\n            }\n        ]   \n    }\n]\n`;\n\nfunction getBooks(...bookIDs) {\n    //api call to /book\n    let books = JSON.parse(bookJSON);\n\n    return bookIDs.map(bookID => {\n        return books.find(book => {\n            return book.id == bookID;\n        })\n    })\n}\n\n//# sourceURL=webpack:///./src/api/getBook.js?");

/***/ }),

/***/ "./src/api/getLibraryBook.js":
/*!***********************************!*\
  !*** ./src/api/getLibraryBook.js ***!
  \***********************************/
/*! exports provided: getLibraryBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLibraryBook\", function() { return getLibraryBook; });\nlet libraryBooks = `[\n    {\n        \"tag\": \"베스트 셀러\",\n        \"desc\": \"우리 도서관에서 가장 핫한 책들~!\",\n        \"books\": [\n            \"wjdgkwls\",\n            \"wjdalstj\",\n            \"wjdshdud\",\n            \"qkrcnsgml\"\n        ]\n    },\n    {\n        \"tag\": \"스테디 셀러\",\n        \"desc\": \"꾸준한 재미와 깨달음을 선사하는 책들\",\n        \"books\": [\n            \"wjdgkwls\",\n            \"wjdalstj\",\n            \"wjdshdud\",\n            \"qkrcnsgml\"\n        ]\n    },\n    {\n        \"tag\": \"신작\",\n        \"desc\": \"새로 나온 따끈 따끈한 책들\",\n        \"books\": [\n            \"wjdgkwls\",\n            \"wjdalstj\",\n            \"wjdshdud\",\n            \"qkrcnsgml\"\n        ]\n    }\n]`\n\nfunction getLibraryBook() {\n    return JSON.parse(libraryBooks);\n}\n\n//# sourceURL=webpack:///./src/api/getLibraryBook.js?");

/***/ }),

/***/ "./src/api/getUserBooks.js":
/*!*********************************!*\
  !*** ./src/api/getUserBooks.js ***!
  \*********************************/
/*! exports provided: getBookList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBookList\", function() { return getBookList; });\n/* harmony import */ var _getBook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBook */ \"./src/api/getBook.js\");\n\n\nlet userBookJSON = `[\n    \"wjdgkwls\",\n    \"wjdalstj\",\n    \"wjdshdud\",\n    \"qkrcnsgml\"\n]\n`;\n\nfunction getBookList() {\n    // api call to /user/book\n    let userBooks = JSON.parse(userBookJSON);\n    return Object(_getBook__WEBPACK_IMPORTED_MODULE_0__[\"getBooks\"])(...userBooks);\n}\n\n//# sourceURL=webpack:///./src/api/getUserBooks.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/element */ \"./src/modules/element.js\");\n/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/component */ \"./src/modules/component.js\");\n/* harmony import */ var _modules_v_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/v-dom */ \"./src/modules/v-dom.js\");\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/router */ \"./src/routes/router.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_sidemenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidemenu */ \"./src/components/sidemenu.js\");\n\n\n\n\n\n\n\n\nclass App extends _modules_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  render() {\n    return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {id: \"app\"},\n      Object(_components_sidemenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      Object(_routes_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    )\n  }\n}\n\nif(document) {\n  Object(_modules_v_dom__WEBPACK_IMPORTED_MODULE_2__[\"diff\"])(undefined, Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(App), document.getElementById(\"root\"));    \n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/404.js":
/*!*******************************!*\
  !*** ./src/components/404.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/element */ \"./src/modules/element.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", null, Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", {id: \"404\"}, \"404 not found\"));\n});\n\n//# sourceURL=webpack:///./src/components/404.js?");

/***/ }),

/***/ "./src/components/bookinfo.js":
/*!************************************!*\
  !*** ./src/components/bookinfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/element */ \"./src/modules/element.js\");\n/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404 */ \"./src/components/404.js\");\n/* harmony import */ var _api_getBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/getBook */ \"./src/api/getBook.js\");\n// url : /book/[book_name]\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((bookID) => {\n  let book = Object(_api_getBook__WEBPACK_IMPORTED_MODULE_2__[\"getBooks\"])(bookID)[0];\n  \n  if(book) {\n    return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {\"id\" : \"book_info\"},\n      Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"main\"},\n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {id : \"image\", src : book.image}),\n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"details\"},\n          Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"title\"}, book.title),\n          Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"writer\"}, book.writer),\n          Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"seperator\"}, \"|\"),\n          Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"publisher\"}, book.publisher),\n        ),\n      ),\n      Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"content_list\"}, \n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {id: \"content_title\"}, \"차례\"),\n\t        ...book.content.map(content => {\n\t          return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\", {id: \"content\"}, \n\t            Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"content_title\"}, content.title),\n\t            Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"content_pagenum\"}, content.pagenum.toString())                    \n\t          )\n\t        })\n      ),\n      Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"note_list\"}, \n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {id: \"note_title\"}, \"노트\"),\n\t        ...book.notes.map(note => {\n\t          return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\", {id: \"note\"},\n\t            Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"note_date\"}, note.date),\n\t            Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"note_content\"}, note.content)\n\t          )\n\t        })\n      )\n    );\n  } else {\n    return Object(_404__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack:///./src/components/bookinfo.js?");

/***/ }),

/***/ "./src/components/booklist.js":
/*!************************************!*\
  !*** ./src/components/booklist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/element */ \"./src/modules/element.js\");\n/* harmony import */ var _api_getUserBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getUserBooks */ \"./src/api/getUserBooks.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  let booklist = Object(_api_getUserBooks__WEBPACK_IMPORTED_MODULE_1__[\"getBookList\"])();\n  return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {id: \"book_list\"}, \n    ...booklist.map( book => {\n      return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id : \"book\"},\n      Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {href: `/book/${book.id}`},\n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {src: book.image, id : \"image\"})\n      ));\n    }),\n    Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"add\"}, \n      Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\" , {id: \"text\"}, \"책 추가하기\")\n    )\n  );\n});\n\n//# sourceURL=webpack:///./src/components/booklist.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/element */ \"./src/modules/element.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"footer\", {id: \"footer\"},\n    Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"text\"}, \"Made With 💖 By Hajindvlp \")    \n  ) \n}); \n\n//# sourceURL=webpack:///./src/components/footer.js?");

/***/ }),

/***/ "./src/components/library.js":
/*!***********************************!*\
  !*** ./src/components/library.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/element */ \"./src/modules/element.js\");\n/* harmony import */ var _api_getLibraryBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getLibraryBook */ \"./src/api/getLibraryBook.js\");\n/* harmony import */ var _api_getBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/getBook */ \"./src/api/getBook.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  let libraryBooks = Object(_api_getLibraryBook__WEBPACK_IMPORTED_MODULE_1__[\"getLibraryBook\"])();\n\n  return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", {id: \"library\"},\n    ...libraryBooks.map(lib => {\n      let books = Object(_api_getBook__WEBPACK_IMPORTED_MODULE_2__[\"getBooks\"])(...lib.books);\n\n      return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"tag\"},\n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"title\"}, lib.tag),\n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"seperator\"}, \"|\"),\n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"desc\"}, lib.desc),\n        Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"books\"}, \n          ...books.map(book => {\n            return Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"book\"},\n              Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {id: \"image\", src: book.image})\n            )\n          })\n        )\n      )\n    })\n  )\n});\n\n//# sourceURL=webpack:///./src/components/library.js?");

/***/ }),

/***/ "./src/components/sidemenu.js":
/*!************************************!*\
  !*** ./src/components/sidemenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/element */ \"./src/modules/element.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n\n\n\nconst menu = [\n\t{href: \"/library\", name: \"도서관\", icon: \"far fa-compass\"},\n\t{href: \"/book\", name: \"내 서재\", icon: \"fas fa-book\"},\n\t{href: \"/calendar\", name: \"달력\", icon: \"far fa-calendar-alt\"},\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n\treturn Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\", {id: \"nav\"}, \n\t\tObject(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {href: \"/\"}, Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {id: \"title_icon\", src: \"/src/img/bookshelf.svg\"})),\n\t\t...menu.map(m => Object(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\", {href: m.href, id: \"link\"}, \n\t\t\tObject(_modules_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"i\", {id: \"icon\", class: m.icon}), \n\t\t\tm.name\n\t\t)),\n\t\tObject(_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  )\n});\n\n//# sourceURL=webpack:///./src/components/sidemenu.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/modules/component.js":
/*!**********************************!*\
  !*** ./src/modules/component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _v_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-dom */ \"./src/modules/v-dom.js\");\n\n\nclass Component {\n  constructor(props) {\n    this.props = props\n    this.state = {}\n  }\n\n  setState(state) {\n    this.state = Object.assign({}, state)\n    Object(_v_dom__WEBPACK_IMPORTED_MODULE_0__[\"renderComponent\"])(this)\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/component.js?");

/***/ }),

/***/ "./src/modules/element.js":
/*!********************************!*\
  !*** ./src/modules/element.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return element; });\nfunction element(nodeName, attributes, ...children) {\n    return {nodeName, attributes, children};\n}\n\n\n//# sourceURL=webpack:///./src/modules/element.js?");

/***/ }),

/***/ "./src/modules/router.js":
/*!*******************************!*\
  !*** ./src/modules/router.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Router {\n    constructor() {\n        this.routes = [];\n    }\n\n    get(uri, callback) {\n        const route = {\n            uri,\n            callback\n        }\n        this.routes.push(route);\n    }\n\n    route() {\n        let path = decodeURI(window.location.pathname);\n        let pathParse = path.split('/')\n        for(let route of this.routes) {\n            let match = false;\n            let uriParse = route.uri.split('/');\n            let req = {\n                path,\n                attributes: {}\n            }\n\n            if(uriParse.length == pathParse.length) \n                for(let idx in pathParse) {\n                    if(uriParse[idx].startsWith(\":\")) {\n                        let attrName = uriParse[idx].substr(1);\n                        req.attributes[attrName] = pathParse[idx];\n                        match = true;\n                    } else if(pathParse[idx] !== uriParse[idx]) {\n                        match = false;\n                        break;\n                    } else if(pathParse[idx] === uriParse[idx]) {\n                        match = true;\n                    }   \n                }\n\n            if(match) {\n                return route.callback.call(this, req);\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/modules/router.js?");

/***/ }),

/***/ "./src/modules/v-dom.js":
/*!******************************!*\
  !*** ./src/modules/v-dom.js ***!
  \******************************/
/*! exports provided: renderComponent, diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderComponent\", function() { return renderComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diff\", function() { return diff; });\nconst renderNode = vnode => {\n    let el\n  \n    const { nodeName, attributes, children } = vnode;\n  \n    if (vnode.split) return document.createTextNode(vnode)\n  \n    if (typeof nodeName === 'string') { \n        el = document.createElement(nodeName)\n    \n        for (let key in attributes) {\n            el.setAttribute(key, attributes[key])\n        }\n    } else if (typeof nodeName === 'function') { \n        const component = new nodeName(attributes)\n        el = renderNode(\n            component.render(component.props, component.state)\n        )\n        component.base = el\n    }\n    (children || []).forEach(child => el.appendChild(renderNode(child)))\n  \n    return el\n}\n  \nconst renderComponent = (component, parent) => {\n    let rendered = component.render(component.props, component.state);\n    component.base = diff(component.base, rendered);\n}\n\nconst diff = (dom, vnode, parent) => {\n    if(dom !== undefined) {\n        if(typeof vnode === \"string\") {\n            dom.nodeValue = vnode;\n            return dom;\n        }\n        if(typeof vnode.nodeName === \"function\") {\n            const component = new vnode.nodeName(vnode.attributes)\n            const rendered = component.render(component.props, component.state)\n\n            diff(dom, rendered)\n            return dom\n        }\n        if (vnode.children.length !== dom.childNodes.length) {\n            dom.appendChild(\n                renderNode(vnode.children[vnode.children.length - 1])\n            )\n        }      \n        dom.childNodes.forEach((child, i) => diff(child, vnode.children[i]))\n        return dom;\n    } else if(parent) {\n        const newDom = renderNode(vnode);\n        parent.appendChild(newDom);\n        return newDom;\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/v-dom.js?");

/***/ }),

/***/ "./src/routes/router.js":
/*!******************************!*\
  !*** ./src/routes/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/router */ \"./src/modules/router.js\");\n/* harmony import */ var _components_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/library */ \"./src/components/library.js\");\n/* harmony import */ var _components_booklist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/booklist */ \"./src/components/booklist.js\");\n/* harmony import */ var _components_bookinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/bookinfo */ \"./src/components/bookinfo.js\");\n/* harmony import */ var _components_404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/404 */ \"./src/components/404.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = new _modules_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nrouter.get('/', req => {\r\n  return Object(_components_booklist__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})\r\n\r\nrouter.get('/library', req => {\r\n  return Object(_components_library__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\r\nrouter.get('/book', req => {\r\n  return Object(_components_booklist__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\nrouter.get('/book/:bookID', req => {\r\n  return Object(_components_bookinfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req.attributes.bookID);\r\n});\r\n\r\nrouter.get('/book/edit/:bookID', req => {\r\n  return e(EditBook, req);\r\n})\r\n\r\nrouter.get('/:d', req => {\r\n  return Object(_components_404__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router.route);\n\n//# sourceURL=webpack:///./src/routes/router.js?");

/***/ })

/******/ });