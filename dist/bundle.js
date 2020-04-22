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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/getbook.js":
/*!****************************!*\
  !*** ./src/api/getbook.js ***!
  \****************************/
/*! exports provided: getBookList, getBookInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBookList\", function() { return getBookList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBookInfo\", function() { return getBookInfo; });\nlet bookJSON = JSON.parse(`\r\n[\r\n    {\r\n        \"title\" : \"신화 콘서트\",\r\n        \"writer\" : \"김상훈\",\r\n        \"publisher\" : \"행복한작업실\",\r\n        \"image\" : \"http://image.yes24.com/goods/90004167/800x0\",\r\n        \"read\" : 12,\r\n        \"content\" : [\r\n            {\r\n                \"title\" : \"title of chapter\",\r\n                \"pagenum\" : 12  \r\n            }\r\n        ],\r\n        \"notes\" : [\r\n            {\r\n                \"date\" : \"date of note\",\r\n                \"content\" : \"content of note\"\r\n            }\r\n        ]   \r\n    },\r\n    {\r\n        \"title\" : \"지금 시작하는 생각 인문학\",\r\n        \"writer\" : \"이화선\",\r\n        \"publisher\" : \"비즈니스북스\",\r\n        \"image\" : \"http://image.yes24.com/goods/89967132/800x0\",\r\n        \"read\" : 12,\r\n        \"content\" : [\r\n            {\r\n                \"title\" : \"title of chapter\",\r\n                \"pagenum\" : 12  \r\n            }\r\n        ],\r\n        \"notes\" : [\r\n            {\r\n                \"date\" : \"date of note\",\r\n                \"content\" : \"content of note\"\r\n            }\r\n        ]   \r\n    }\r\n]\r\n`);\r\n\r\nfunction getBookList() {\r\n    // get book info via fetch()\r\n    let books = JSON.parse(bookJSON);\r\n    return books;\r\n}\r\n\r\nfunction getBookInfo(bookName) {\r\n    let books = JSON.parse(bookJSON);\r\n    \r\n    books.forEach(book => {\r\n        if(book.title == bookName) return book;\r\n    });\r\n    return 404;\r\n}\n\n//# sourceURL=webpack:///./src/api/getbook.js?");

/***/ }),

/***/ "./src/components/book.js":
/*!********************************!*\
  !*** ./src/components/book.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _bookinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookinfo */ \"./src/components/bookinfo.js\");\n// url : /book/[book_name]\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((bookname) => {\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id : \"book\"},\r\n        Object(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\r\n        Object(_bookinfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bookname)\r\n    )\r\n});\n\n//# sourceURL=webpack:///./src/components/book.js?");

/***/ }),

/***/ "./src/components/bookinfo.js":
/*!************************************!*\
  !*** ./src/components/bookinfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _api_getbook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getbook */ \"./src/api/getbook.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((bookname) => {\r\n    let book = Object(_api_getbook__WEBPACK_IMPORTED_MODULE_1__[\"getBookInfo\"])(bookname);\r\n    console.log(book);\r\n\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\"id\" : \"book_info\"},\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {id : \"book_info_image\", src : book.image}),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_info_title\"}, book.title),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_info_writer\"}, book.writer),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_info_publisher\"}, book.publisher),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"book_info_content_list\"}, \r\n            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {id: \"book_info_content_title\"}, \"차례\"),\r\n            ...book.content.map(content => {\r\n                return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\", {id: \"book_info_content\"}, \r\n                    Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_info_content_title\"}, content.title),\r\n                    Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_info_content_pagenum\"}, content.pagenum)                    \r\n                )\r\n            })\r\n        ),\r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"book_info_note_list\"}, \r\n            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", {id: \"book_info_note_title\"}, \"노트\"),\r\n            ...book.notes.map(note => {\r\n                return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\", {id: \"book_info_note\"},\r\n                    Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_info_note_date\"}, note.date),\r\n                    Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_info_note_content\"}, note.content)\r\n                )\r\n            })\r\n        )\r\n    );\r\n});\n\n//# sourceURL=webpack:///./src/components/bookinfo.js?");

/***/ }),

/***/ "./src/components/booklist.js":
/*!************************************!*\
  !*** ./src/components/booklist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _api_getbook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/getbook.js */ \"./src/api/getbook.js\");\n// components\r\n\r\n\r\n// api\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    let booklist = Object(_api_getbook_js__WEBPACK_IMPORTED_MODULE_1__[\"getBookList\"])();\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id: \"book_list\"}, \r\n        ...booklist.map( book => {\r\n        return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id : \"book\"}, \r\n            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", {src: book.image, id : \"book_list_image\"}),\r\n            Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", {id: \"book_list_title\"}, book.title)\r\n        )\r\n    }));\r\n});\n\n//# sourceURL=webpack:///./src/components/booklist.js?");

/***/ }),

/***/ "./src/components/books.js":
/*!*********************************!*\
  !*** ./src/components/books.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/components/header.js\");\n/* harmony import */ var _booklist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booklist.js */ \"./src/components/booklist.js\");\n// url : '/books' or /\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n        'div',\r\n        null,\r\n        Object(_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\r\n        Object(_booklist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    );\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/books.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element.js */ \"./src/element.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    return Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {id : \"header\"}, \r\n        Object(_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", {id: \"header_title\"}, \"아 책 다 읽었다!\")\r\n    )\r\n});\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return element; });\nfunction element(nodeName, attrs, ...children) {\r\n    const $el = document.createElement(nodeName);\r\n\r\n    for (let key in attrs) {\r\n        $el.setAttribute(key, attrs[key]);\r\n    }\r\n\r\n    children.forEach(child => {\r\n        if(typeof child === 'string') {\r\n            $el.appendChild(document.createTextNode(child));\r\n        } else {\r\n            $el.appendChild(child);\r\n        }\r\n    });\r\n\r\n    return $el;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/element.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/book.js */ \"./src/components/book.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\n\r\nObject(_router_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window.location.pathname);\r\ndocument.getElementById(\"root\").appendChild(Object(_components_book_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"신화 콘서트\"));\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_books_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/books.js */ \"./src/components/books.js\");\n\r\n\r\nconst routeDict = [\r\n    \"/\" \r\n];\r\n\r\nfunction routes(path) {\r\n    console.log(path);\r\n    let parse_path = path.split(\"/\");\r\n\r\n    console.log(parse_path);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\r\n\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ })

/******/ });