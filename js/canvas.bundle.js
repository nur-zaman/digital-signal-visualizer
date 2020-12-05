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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulas */ "./src/js/formulas.js");
/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formulas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/js/styles.css");



var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var HEIGHT = 300;
var WIDTH = innerWidth;
var BINARY = "";
var method;
canvas.width = WIDTH;
canvas.height = HEIGHT;
var mouse = {
  x: WIDTH / 2,
  y: HEIGHT / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  init();
});
var coll = document.getElementsByClassName("collapsible");
coll[0].addEventListener("click", function () {
  this.classList.toggle("active");
  var content = this.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }

  document.getElementById('arrow').classList.toggle("fa-rotate-90");
});

document.getElementById('button').onclick = function () {
  BINARY = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])();
  document.getElementById('title').innerHTML = document.getElementById("options").options[document.getElementById("options").selectedIndex].text;
  method = document.getElementById("options").value;

  if (/^[0-1]/.test(BINARY)) {
    if (50 * BINARY.length + 50 > WIDTH) {
      WIDTH = 50 * BINARY.length + 100;
    } else WIDTH = innerWidth;

    init();
  } else {
    document.getElementById('binary').value = null;
    document.getElementById('binary').placeholder = "Enter A Valid Binary";
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
  }
};

function drawBoard() {
  //outer box
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.moveTo(5, 5);
  c.lineTo(WIDTH - 5, 5);
  c.lineTo(WIDTH - 5, HEIGHT - 5);
  c.lineTo(WIDTH - 5, HEIGHT - 5);
  c.lineTo(5, HEIGHT - 5);
  c.lineTo(5, 5);
  c.stroke();
  c.closePath(); //oV line

  c.beginPath();
  c.moveTo(50, HEIGHT / 2);
  c.lineTo(WIDTH - 5, HEIGHT / 2);
  c.setLineDash([10, 5]);
  c.lineWidth = 2;
  c.stroke();
  c.closePath(); //Horizontal lines

  for (var i = 50, j = 0; i <= 50 * BINARY.length + 50; i += 50, j++) {
    c.beginPath();
    c.lineWidth = .5;
    c.setLineDash([0, 0]);
    c.moveTo(i, 5);
    c.lineTo(i, HEIGHT - 5);
    c.stroke();
    c.closePath();
    drawNumbers(i, j);
  } //-v line


  c.beginPath();
  c.moveTo(50, HEIGHT / 2 + 50);
  c.lineTo(WIDTH - 5, HEIGHT / 2 + 50);
  c.setLineDash([10, 5]);
  c.lineWidth = 2;
  c.stroke();
  c.closePath(); //+v line

  c.beginPath();
  c.moveTo(50, HEIGHT / 2 - 50);
  c.lineTo(WIDTH - 5, HEIGHT / 2 - 50);
  c.setLineDash([10, 5]);
  c.lineWidth = 2;
  c.stroke();
  c.closePath();
  c.fillText('+v', 25, HEIGHT / 2 - 50);
  c.fillText('-v', 25, HEIGHT / 2 + 50);
  c.fillText('0', 25, HEIGHT / 2 + 5);
}

function drawNumbers(i, j) {
  c.font = 'bold 20px sans-serif';
  if (j < BINARY.length) c.fillText(BINARY.charAt(j) + "", i + 25, 30);
}

function init() {
  canvas.width = WIDTH;
  drawBoard();
  console.log(method);
  Object(_formulas__WEBPACK_IMPORTED_MODULE_1__["selectMethod"])(method, c, BINARY, HEIGHT, WIDTH);
}

init();

/***/ }),

/***/ "./src/js/formulas.js":
/*!****************************!*\
  !*** ./src/js/formulas.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function uniPolarNRZ(c, BINARY, HEIGHT, WIDTH) {
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
    } else {
      c.lineTo(i, HEIGHT / 2);
      c.lineTo(i + 50, HEIGHT / 2);
    }
  }

  c.stroke();
  c.closePath();
}

function NRZI(c, BINARY, HEIGHT, WIDTH) {
  var inverse = true;
  var currentlvl = HEIGHT / 2;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1 && inverse) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
      inverse = false;
      currentlvl = HEIGHT / 2 - 50;
    } else if (BINARY.charAt(j) == 1 && !inverse) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
      inverse = true;
      currentlvl = HEIGHT / 2 + 50;
    } else {
      c.lineTo(i + 50, currentlvl);
    }
  }

  c.stroke();
  c.closePath();
}

function AMI(c, BINARY, HEIGHT, WIDTH) {
  var inverse = true;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1 && inverse) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
      inverse = false;
    } else if (BINARY.charAt(j) == 1 && !inverse) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
      inverse = true;
    } else {
      c.lineTo(i, HEIGHT / 2);
      c.lineTo(i + 50, HEIGHT / 2);
    }
  }

  c.stroke();
  c.closePath();
}

function MAN(c, BINARY, HEIGHT, WIDTH) {
  var currentlvl = HEIGHT / 2;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  if (BINARY.charAt(0) == 1) currentlvl = +50;else currentlvl = -50;
  c.moveTo(50, HEIGHT / 2 + currentlvl);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      currentlvl = 50;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    } else {
      currentlvl = -50;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    }
  }

  c.stroke();
  c.closePath();
}

function diffMan(c, BINARY, HEIGHT, WIDTH) {
  var currentlvl = HEIGHT / 2;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  if (BINARY.charAt(0) == 1) currentlvl = -50;else currentlvl = +50;
  c.moveTo(50, HEIGHT / 2 + currentlvl);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    } else {
      currentlvl = currentlvl * -1;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    }
  }

  c.stroke();
  c.closePath();
}

function B8ZS(c, BINARY, HEIGHT, WIDTH) {
  var inverse = true;
  var zeroCount = 0;
  var currentlvl = 50;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      currentlvl *= -1;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    } else {
      for (var index = j; index < BINARY.length; index++) {
        if (BINARY.charAt(index) == 1) break;else zeroCount++;
      }

      console.log(zeroCount);

      if (zeroCount >= 8) {
        c.lineTo(i, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 200, HEIGHT / 2 + currentlvl);
        currentlvl *= -1;
        c.lineTo(i + 200, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 250, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 250, HEIGHT / 2);
        c.lineTo(i + 300, HEIGHT / 2);
        c.lineTo(i + 300, HEIGHT / 2);
        c.lineTo(i + 300, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 300, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 350, HEIGHT / 2 + currentlvl);
        currentlvl *= -1;
        c.lineTo(i + 350, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 400, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 400, HEIGHT / 2);
        i += 350;
        j += 7;
      } else {
        c.lineTo(i, HEIGHT / 2);
        c.lineTo(i + 50, HEIGHT / 2);
      }

      zeroCount = 0;
    }
  }

  c.stroke();
  c.closePath();
}

function selectMethod(method, c, BINARY, HEIGHT, WIDTH) {
  switch (method) {
    case 'uniPolarNRZ':
      uniPolarNRZ(c, BINARY, HEIGHT, WIDTH);
      break;

    case 'NRZI':
      NRZI(c, BINARY, HEIGHT, WIDTH);
      break;

    case 'AMI':
      AMI(c, BINARY, HEIGHT, WIDTH);
      break;

    case 'diffMan':
      diffMan(c, BINARY, HEIGHT, WIDTH);
      break;

    case 'MAN':
      MAN(c, BINARY, HEIGHT, WIDTH);
      break;

    case 'B8ZS':
      B8ZS(c, BINARY, HEIGHT, WIDTH);
      break;
  }
}

module.exports = {
  uniPolarNRZ: uniPolarNRZ,
  NRZI: NRZI,
  AMI: AMI,
  diffMan: diffMan,
  MAN: MAN,
  B8ZS: B8ZS,
  selectMethod: selectMethod
};

/***/ }),

/***/ "./src/js/styles.css":
/*!***************************!*\
  !*** ./src/js/styles.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function getInputValue() {
  var binary = document.querySelector("#binary").value;
  console.log(binary);
  return binary;
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  getInputValue: getInputValue
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map