(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["SkeletonPlugin"] = factory(require("clappr"));
	else
		root["SkeletonPlugin"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_clappr__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "latest/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/skeleton.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://SkeletonPlugin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/public/skeleton.html":
/*!**********************************!*\
  !*** ./src/public/skeleton.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p class=\\\"skeleton-container\\\"> Skeleton Plugin</p>\\n\";\n\n//# sourceURL=webpack://SkeletonPlugin/./src/public/skeleton.html?");

/***/ }),

/***/ "./src/public/skeleton.scss":
/*!**********************************!*\
  !*** ./src/public/skeleton.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".skeleton-container {\\n  position: absolute;\\n  height: 5%;\\n  width: 20%;\\n  z-index: 999;\\n  background-color: black;\\n  color: white;\\n  line-height: 1.15 !important; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://SkeletonPlugin/./src/public/skeleton.scss?");

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _clappr = __webpack_require__(/*! clappr */ \"clappr\");\n\nvar _skeleton = _interopRequireDefault(__webpack_require__(/*! ./public/skeleton.scss */ \"./src/public/skeleton.scss\"));\n\nvar _skeleton2 = _interopRequireDefault(__webpack_require__(/*! ./public/skeleton.html */ \"./src/public/skeleton.html\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar SkeletonPlugin = /*#__PURE__*/function (_UICorePlugin) {\n  _inherits(SkeletonPlugin, _UICorePlugin);\n\n  _createClass(SkeletonPlugin, [{\n    key: \"name\",\n    get: function get() {\n      return 'skeleton';\n    }\n  }, {\n    key: \"attributes\",\n    get: function get() {\n      return {\n        \"class\": 'skeleton'\n      };\n    }\n  }, {\n    key: \"template\",\n    get: function get() {\n      return (0, _clappr.template)(_skeleton2[\"default\"]);\n    }\n  }, {\n    key: \"events\",\n    get: function get() {\n      var events = {\n        click: 'onClick'\n      };\n      return events;\n    }\n  }]);\n\n  function SkeletonPlugin(core) {\n    var _this;\n\n    _classCallCheck(this, SkeletonPlugin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkeletonPlugin).call(this, core));\n\n    _this.init();\n\n    return _this;\n  }\n\n  _createClass(SkeletonPlugin, [{\n    key: \"init\",\n    value: function init() {\n      this.bindEvents();\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var _this2 = this;\n\n      var coreEventListenerData = [{\n        object: this.core,\n        event: _clappr.Events.CORE_ACTIVE_CONTAINER_CHANGED,\n        callback: this.onContainerChanged\n      }, {\n        object: this.core,\n        event: _clappr.Events.CORE_RESIZE,\n        callback: this.registerPlayerResize\n      }];\n      coreEventListenerData.forEach(function (item) {\n        return _this2.stopListening(item.object, item.event, item.callback);\n      });\n      coreEventListenerData.forEach(function (item) {\n        return _this2.listenTo(item.object, item.event, item.callback);\n      });\n    }\n  }, {\n    key: \"bindContainerEvents\",\n    value: function bindContainerEvents() {\n      var _this3 = this;\n\n      var containerEventListenerData = [{\n        object: this.container,\n        event: _clappr.Events.CONTAINER_CLICK,\n        callback: this.hide\n      }];\n\n      if (this.container) {\n        containerEventListenerData.forEach(function (item) {\n          return _this3.stopListening(item.object, item.event, item.callback);\n        });\n        containerEventListenerData.forEach(function (item) {\n          return _this3.listenTo(item.object, item.event, item.callback);\n        });\n      }\n    }\n  }, {\n    key: \"registerPlayerResize\",\n    value: function registerPlayerResize(size) {\n      if (!size.width || typeof size.width !== 'number') return;\n      this.playerSize = size;\n    }\n  }, {\n    key: \"onContainerChanged\",\n    value: function onContainerChanged() {\n      this.container = this.core.activeContainer;\n      this.bindContainerEvents();\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      console.log('Skeleton plugin clicked!'); // eslint-disable-line no-console\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.$el.show();\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.$el.hide();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.$el.html(this.template({\n        options: this.options\n      }));\n      this.$el.append(_clappr.Styler.getStyleFor(_skeleton[\"default\"]));\n      this.core.$el[0].append(this.$el[0]);\n      return this;\n    }\n  }]);\n\n  return SkeletonPlugin;\n}(_clappr.UICorePlugin);\n\nexports[\"default\"] = SkeletonPlugin;\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack://SkeletonPlugin/./src/skeleton.js?");

/***/ }),

/***/ "clappr":
/*!******************************************************************************************!*\
  !*** external {"amd":"clappr","commonjs":"clappr","commonjs2":"clappr","root":"Clappr"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_clappr__;\n\n//# sourceURL=webpack://SkeletonPlugin/external_%7B%22amd%22:%22clappr%22,%22commonjs%22:%22clappr%22,%22commonjs2%22:%22clappr%22,%22root%22:%22Clappr%22%7D?");

/***/ })

/******/ });
});