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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./App/polyfills.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/core-js/es6/array.js":
/*!********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.string.iterator */ \"../../node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/es6.array.is-array */ \"../../node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ../modules/es6.array.from */ \"../../node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ../modules/es6.array.of */ \"../../node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ../modules/es6.array.join */ \"../../node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ../modules/es6.array.slice */ \"../../node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ../modules/es6.array.sort */ \"../../node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ../modules/es6.array.for-each */ \"../../node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ../modules/es6.array.map */ \"../../node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ../modules/es6.array.filter */ \"../../node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ../modules/es6.array.some */ \"../../node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ../modules/es6.array.every */ \"../../node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce */ \"../../node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce-right */ \"../../node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ../modules/es6.array.index-of */ \"../../node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.last-index-of */ \"../../node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.copy-within */ \"../../node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ../modules/es6.array.fill */ \"../../node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ../modules/es6.array.find */ \"../../node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ../modules/es6.array.find-index */ \"../../node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ../modules/es6.array.species */ \"../../node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ../modules/es6.array.iterator */ \"../../node_modules/core-js/modules/es6.array.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Array;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/array.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/date.js":
/*!*******************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/date.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.date.now */ \"../../node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ../modules/es6.date.to-json */ \"../../node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ../modules/es6.date.to-iso-string */ \"../../node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-string */ \"../../node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-primitive */ \"../../node_modules/core-js/modules/es6.date.to-primitive.js\");\nmodule.exports = Date;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/date.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/function.js":
/*!***********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/function.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.function.bind */ \"../../node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ../modules/es6.function.name */ \"../../node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ../modules/es6.function.has-instance */ \"../../node_modules/core-js/modules/es6.function.has-instance.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Function;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/function.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/map.js":
/*!******************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"../../node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"../../node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"../../node_modules/core-js/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.map */ \"../../node_modules/core-js/modules/es6.map.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Map;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/map.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/math.js":
/*!*******************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/math.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.math.acosh */ \"../../node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ../modules/es6.math.asinh */ \"../../node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ../modules/es6.math.atanh */ \"../../node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ../modules/es6.math.cbrt */ \"../../node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ../modules/es6.math.clz32 */ \"../../node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ../modules/es6.math.cosh */ \"../../node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ../modules/es6.math.expm1 */ \"../../node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ../modules/es6.math.fround */ \"../../node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ../modules/es6.math.hypot */ \"../../node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ../modules/es6.math.imul */ \"../../node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ../modules/es6.math.log10 */ \"../../node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ../modules/es6.math.log1p */ \"../../node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ../modules/es6.math.log2 */ \"../../node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ../modules/es6.math.sign */ \"../../node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ../modules/es6.math.sinh */ \"../../node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ../modules/es6.math.tanh */ \"../../node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ../modules/es6.math.trunc */ \"../../node_modules/core-js/modules/es6.math.trunc.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Math;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/math.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/number.js":
/*!*********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/number.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.number.constructor */ \"../../node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ../modules/es6.number.to-fixed */ \"../../node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ../modules/es6.number.to-precision */ \"../../node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ../modules/es6.number.epsilon */ \"../../node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ../modules/es6.number.is-finite */ \"../../node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ../modules/es6.number.is-integer */ \"../../node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.is-nan */ \"../../node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ \"../../node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ \"../../node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ \"../../node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-float */ \"../../node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-int */ \"../../node_modules/core-js/modules/es6.number.parse-int.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Number;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/number.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/object.js":
/*!*********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/object.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.symbol */ \"../../node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ../modules/es6.object.create */ \"../../node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ../modules/es6.object.define-property */ \"../../node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ../modules/es6.object.define-properties */ \"../../node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ \"../../node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ \"../../node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.keys */ \"../../node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ \"../../node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ../modules/es6.object.freeze */ \"../../node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ../modules/es6.object.seal */ \"../../node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ \"../../node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.object.is-frozen */ \"../../node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ../modules/es6.object.is-sealed */ \"../../node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ../modules/es6.object.is-extensible */ \"../../node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.object.assign */ \"../../node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ../modules/es6.object.is */ \"../../node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ \"../../node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.to-string */ \"../../node_modules/core-js/modules/es6.object.to-string.js\");\n\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Object;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/object.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/parse-float.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/parse-float.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.parse-float */ \"../../node_modules/core-js/modules/es6.parse-float.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").parseFloat;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/parse-float.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/parse-int.js":
/*!************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/parse-int.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.parse-int */ \"../../node_modules/core-js/modules/es6.parse-int.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").parseInt;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/parse-int.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/regexp.js":
/*!*********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/regexp.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.regexp.constructor */ \"../../node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ../modules/es6.regexp.to-string */ \"../../node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ../modules/es6.regexp.flags */ \"../../node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ../modules/es6.regexp.match */ \"../../node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ../modules/es6.regexp.replace */ \"../../node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ../modules/es6.regexp.search */ \"../../node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ../modules/es6.regexp.split */ \"../../node_modules/core-js/modules/es6.regexp.split.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").RegExp;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/regexp.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/set.js":
/*!******************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/set.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"../../node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"../../node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"../../node_modules/core-js/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.set */ \"../../node_modules/core-js/modules/es6.set.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Set;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/set.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/string.js":
/*!*********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/string.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.string.from-code-point */ \"../../node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ../modules/es6.string.raw */ \"../../node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ../modules/es6.string.trim */ \"../../node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"../../node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/es6.string.code-point-at */ \"../../node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ../modules/es6.string.ends-with */ \"../../node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ../modules/es6.string.includes */ \"../../node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ../modules/es6.string.repeat */ \"../../node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ../modules/es6.string.starts-with */ \"../../node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ../modules/es6.string.anchor */ \"../../node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ../modules/es6.string.big */ \"../../node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ../modules/es6.string.blink */ \"../../node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ../modules/es6.string.bold */ \"../../node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ../modules/es6.string.fixed */ \"../../node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ../modules/es6.string.fontcolor */ \"../../node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ../modules/es6.string.fontsize */ \"../../node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ../modules/es6.string.italics */ \"../../node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ../modules/es6.string.link */ \"../../node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ../modules/es6.string.small */ \"../../node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ../modules/es6.string.strike */ \"../../node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ../modules/es6.string.sub */ \"../../node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ../modules/es6.string.sup */ \"../../node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ../modules/es6.regexp.match */ \"../../node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ../modules/es6.regexp.replace */ \"../../node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ../modules/es6.regexp.search */ \"../../node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ../modules/es6.regexp.split */ \"../../node_modules/core-js/modules/es6.regexp.split.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").String;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/string.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/symbol.js":
/*!*********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/symbol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.symbol */ \"../../node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ../modules/es6.object.to-string */ \"../../node_modules/core-js/modules/es6.object.to-string.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/symbol.js?");

/***/ }),

/***/ "../../node_modules/core-js/es6/weak-map.js":
/*!***********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es6/weak-map.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"../../node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.array.iterator */ \"../../node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ../modules/es6.weak-map */ \"../../node_modules/core-js/modules/es6.weak-map.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").WeakMap;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es6/weak-map.js?");

/***/ }),

/***/ "../../node_modules/core-js/es7/reflect.js":
/*!**********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/es7/reflect.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ \"../../node_modules/core-js/modules/es7.reflect.define-metadata.js\");\n__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ \"../../node_modules/core-js/modules/es7.reflect.delete-metadata.js\");\n__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ \"../../node_modules/core-js/modules/es7.reflect.get-metadata.js\");\n__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ \"../../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js\");\n__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ \"../../node_modules/core-js/modules/es7.reflect.get-own-metadata.js\");\n__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ \"../../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js\");\n__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ \"../../node_modules/core-js/modules/es7.reflect.has-metadata.js\");\n__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ \"../../node_modules/core-js/modules/es7.reflect.has-own-metadata.js\");\n__webpack_require__(/*! ../modules/es7.reflect.metadata */ \"../../node_modules/core-js/modules/es7.reflect.metadata.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/modules/_core.js\").Reflect;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/es7/reflect.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_a-function.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_a-function.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_a-number-value.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_a-number-value.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_add-to-unscopables.js":
/*!**************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_an-instance.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_an-instance.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_an-object.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_an-object.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-copy-within.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-copy-within.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"../../node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-fill.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-fill.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"../../node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-from-iterable.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-from-iterable.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOf = __webpack_require__(/*! ./_for-of */ \"../../node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-includes.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-includes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"../../node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-methods.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-methods.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"../../node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"../../node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-reduce.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-reduce.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"../../node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-species-constructor.js":
/*!*********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-species-constructor.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"../../node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_array-species-create.js":
/*!****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-species-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"../../node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_bind.js":
/*!************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_bind.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"../../node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_classof.js":
/*!***************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_classof.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_cof.js":
/*!***********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_cof.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_collection-strong.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_collection-strong.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"../../node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"../../node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"../../node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"../../node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"../../node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"../../node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"../../node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_collection-weak.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_collection-weak.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"../../node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"../../node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"../../node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"../../node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_collection.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_collection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"../../node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"../../node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"../../node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"../../node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"../../node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_core.js":
/*!************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_core.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.3' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_create-property.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_create-property.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_ctx.js":
/*!***********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_ctx.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_date-to-iso-string.js":
/*!**************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_date-to-iso-string.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_date-to-primitive.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_date-to-primitive.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_defined.js":
/*!***************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_defined.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_descriptors.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_descriptors.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_dom-create.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_dom-create.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_enum-bug-keys.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_enum-keys.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_enum-keys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"../../node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_export.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_export.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_fails-is-regexp.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_fails.js":
/*!*************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_fails.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_fix-re-wks.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_fix-re-wks.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\");\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n  var fns = exec(defined, SYMBOL, ''[KEY]);\n  var strfn = fns[0];\n  var rxfn = fns[1];\n  if (fails(function () {\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  })) {\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_flags.js":
/*!*************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_flags.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_for-of.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_for-of.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"../../node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"../../node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"../../node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_global.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_global.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_has.js":
/*!***********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_has.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_hide.js":
/*!************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_hide.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_html.js":
/*!************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_html.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_ie8-dom-define.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"../../node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_inherit-if-required.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_inherit-if-required.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"../../node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_invoke.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_invoke.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_iobject.js":
/*!***************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iobject.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array-iter.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-array-iter.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array.js":
/*!****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-array.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_is-integer.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-integer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_is-object.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-object.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_is-regexp.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-regexp.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-call.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-call.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-create.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-create.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-define.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-define.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"../../node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"../../node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../../node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = (!BUGGY && $native) || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-detect.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-detect.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-step.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-step.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_iterators.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iterators.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_library.js":
/*!***************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_library.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_math-expm1.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-expm1.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_math-fround.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-fround.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"../../node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_math-log1p.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-log1p.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_math-sign.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-sign.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_meta.js":
/*!************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_meta.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_metadata.js":
/*!****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_metadata.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Map = __webpack_require__(/*! ./es6.map */ \"../../node_modules/core-js/modules/es6.map.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"../../node_modules/core-js/modules/_shared.js\")('metadata');\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ \"../../node_modules/core-js/modules/es6.weak-map.js\"))());\n\nvar getOrCreateMetadataMap = function (target, targetKey, create) {\n  var targetMetadata = store.get(target);\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n  var keyMetadata = targetMetadata.get(targetKey);\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  } return keyMetadata;\n};\nvar ordinaryHasOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\nvar ordinaryGetOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\nvar ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\nvar ordinaryOwnMetadataKeys = function (target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });\n  return keys;\n};\nvar toMetaKey = function (it) {\n  return it === undefined || typeof it == 'symbol' ? it : String(it);\n};\nvar exp = function (O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-assign.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-assign.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"../../node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"../../node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-create.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-create.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"../../node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../../node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../../node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"../../node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"../../node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dp.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-dp.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"../../node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dps.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-dps.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gopd.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gopd.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"../../node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gopn-ext.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gopn-ext.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"../../node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gopn.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gopn.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"../../node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../../node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gops.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gops.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gpo.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gpo.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../../node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys-internal.js":
/*!****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-keys-internal.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"../../node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../../node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-keys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"../../node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../../node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-pie.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-pie.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_object-sap.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-sap.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_parse-float.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_parse-float.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"../../node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"../../node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_parse-int.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_parse-int.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"../../node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"../../node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_property-desc.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_property-desc.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine-all.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_redefine-all.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine.js":
/*!****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_redefine.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/modules/_uid.js\")('src');\nvar TO_STRING = 'toString';\nvar $toString = Function[TO_STRING];\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"../../node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_same-value.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_same-value.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_set-proto.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_set-proto.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"../../node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_set-species.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_set-species.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_set-to-string-tag.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_shared-key.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_shared-key.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"../../node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_shared.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_shared.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_strict-method.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_strict-method.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_string-at.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-at.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_string-context.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-context.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"../../node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_string-html.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-html.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_string-repeat.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-repeat.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_string-trim.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-trim.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"../../node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_string-ws.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-ws.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_to-absolute-index.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-absolute-index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_to-integer.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-integer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_to-iobject.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-iobject.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"../../node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_to-length.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-length.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_to-object.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-object.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_to-primitive.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-primitive.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_uid.js":
/*!***********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_uid.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_validate-collection.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_validate-collection.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_wks-define.js":
/*!******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_wks-define.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"../../node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"../../node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_wks-ext.js":
/*!***************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_wks-ext.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/_wks.js":
/*!***********************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_wks.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"../../node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/core.get-iterator-method.js":
/*!*******************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"../../node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.copy-within.js":
/*!****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.copy-within.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"../../node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"../../node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.every.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.every.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.fill.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.fill.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"../../node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"../../node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.filter.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.filter.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.find-index.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.find-index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"../../node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.find.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.find.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"../../node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.for-each.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.for-each.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.from.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.from.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"../../node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"../../node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"../../node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"../../node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"../../node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.index-of.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.index-of.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"../../node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.is-array.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.is-array.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"../../node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.iterator.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.iterator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"../../node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"../../node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"../../node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.join.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.join.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"../../node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.last-index-of.js":
/*!******************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.map.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.map.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.of.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.of.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"../../node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.reduce-right.js":
/*!*****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"../../node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.reduce.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.reduce.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"../../node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.slice.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.slice.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"../../node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"../../node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.some.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.some.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.sort.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.sort.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"../../node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.species.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.species.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_set-species */ \"../../node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.date.now.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.now.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!*****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"../../node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.date.to-json.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-json.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.date.to-primitive.js":
/*!****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"../../node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.date.to-string.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-string.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.function.bind.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.function.bind.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"../../node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.function.has-instance.js":
/*!********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.function.has-instance.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../../node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.function.name.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.function.name.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.map.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.map.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"../../node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"../../node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"../../node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.acosh.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.acosh.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"../../node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.asinh.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.asinh.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.atanh.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.atanh.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.cbrt.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.cbrt.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"../../node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.clz32.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.clz32.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.cosh.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.cosh.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.expm1.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.expm1.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"../../node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.fround.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.fround.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"../../node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.hypot.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.hypot.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.imul.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.imul.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.log10.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.log10.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.log1p.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.log1p.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"../../node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.log2.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.log2.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.sign.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.sign.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"../../node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.sinh.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.sinh.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"../../node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.tanh.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.tanh.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"../../node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.math.trunc.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.trunc.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.constructor.js":
/*!*****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.constructor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"../../node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"../../node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"../../node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"../../node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.epsilon.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.epsilon.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.is-finite.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-finite.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.is-integer.js":
/*!****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"../../node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.is-nan.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-nan.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!*********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"../../node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!**********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!**********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.parse-float.js":
/*!*****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.parse-float.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"../../node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.parse-int.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.parse-int.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"../../node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.to-fixed.js":
/*!**************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"../../node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"../../node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.number.to-precision.js":
/*!******************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.to-precision.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"../../node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.assign.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.assign.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"../../node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.create.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.create.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.define-properties.js":
/*!***********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.define-properties.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"../../node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.define-property.js":
/*!*********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.define-property.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.freeze.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.freeze.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!*********************************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"../../node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!****************************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"../../node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!**********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../../node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.is-extensible.js":
/*!*******************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.is-frozen.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.is-sealed.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.is.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"../../node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.keys.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.keys.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!************************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.seal.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.seal.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"../../node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!**********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"../../node_modules/core-js/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.to-string.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.to-string.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"../../node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.parse-float.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.parse-float.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"../../node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.parse-int.js":
/*!********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.parse-int.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"../../node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.regexp.constructor.js":
/*!*****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"../../node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"../../node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"../../node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"../../node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"../../node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.regexp.flags.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.flags.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"../../node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.regexp.match.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.match.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"../../node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match) {\n  // 21.1.3.11 String.prototype.match(regexp)\n  return [function match(regexp) {\n    'use strict';\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[MATCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n  }, $match];\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.regexp.replace.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.replace.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"../../node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace) {\n  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)\n  return [function replace(searchValue, replaceValue) {\n    'use strict';\n    var O = defined(this);\n    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n    return fn !== undefined\n      ? fn.call(searchValue, O, replaceValue)\n      : $replace.call(String(O), searchValue, replaceValue);\n  }, $replace];\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.regexp.search.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.search.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"../../node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search) {\n  // 21.1.3.15 String.prototype.search(regexp)\n  return [function search(regexp) {\n    'use strict';\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[SEARCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n  }, $search];\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.regexp.split.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.split.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"../../node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split) {\n  'use strict';\n  var isRegExp = __webpack_require__(/*! ./_is-regexp */ \"../../node_modules/core-js/modules/_is-regexp.js\");\n  var _split = $split;\n  var $push = [].push;\n  var $SPLIT = 'split';\n  var LENGTH = 'length';\n  var LAST_INDEX = 'lastIndex';\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group\n    // based on es5-shim implementation, need to rework it\n    $split = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return _split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var separator2, match, lastIndex, lastLength, i;\n      // Doesn't need flags gy, but they don't hurt\n      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\\\s)', flags);\n      while (match = separatorCopy.exec(string)) {\n        // `separatorCopy.lastIndex` is not reliable cross-browser\n        lastIndex = match.index + match[0][LENGTH];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG\n          // eslint-disable-next-line no-loop-func\n          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {\n            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;\n          });\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    $split = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);\n    };\n  }\n  // 21.1.3.17 String.prototype.split(separator, limit)\n  return [function split(separator, limit) {\n    var O = defined(this);\n    var fn = separator == undefined ? undefined : separator[SPLIT];\n    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);\n  }, $split];\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.regexp.to-string.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"../../node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"../../node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.set.js":
/*!**************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.set.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"../../node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"../../node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"../../node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.anchor.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.anchor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.big.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.big.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.blink.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.blink.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.bold.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.bold.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.code-point-at.js":
/*!*******************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"../../node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.ends-with.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.ends-with.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"../../node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"../../node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.fixed.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.fixed.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.fontcolor.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.fontsize.js":
/*!**************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.fontsize.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.from-code-point.js":
/*!*********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"../../node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.includes.js":
/*!**************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.includes.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"../../node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"../../node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.italics.js":
/*!*************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.italics.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.iterator.js":
/*!**************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.iterator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"../../node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"../../node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.link.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.link.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.raw.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.raw.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.repeat.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.repeat.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"../../node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.small.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.small.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.starts-with.js":
/*!*****************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"../../node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"../../node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.strike.js":
/*!************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.strike.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.sub.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.sub.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.sup.js":
/*!*********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.sup.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"../../node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.trim.js":
/*!**********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.trim.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"../../node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.symbol.js":
/*!*****************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.symbol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"../../node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"../../node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"../../node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"../../node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"../../node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"../../node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"../../node_modules/core-js/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"../../node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"../../node_modules/core-js/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"../../node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es6.weak-map.js":
/*!*******************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.weak-map.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar each = __webpack_require__(/*! ./_array-methods */ \"../../node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"../../node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"../../node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/modules/_fails.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"../../node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar tmp = {};\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"../../node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!**********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\n\nmetadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!**********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\n\nmetadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {\n  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n  if (metadataMap.size) return true;\n  var targetMetadata = store.get(target);\n  targetMetadata['delete'](targetKey);\n  return !!targetMetadata.size || store['delete'](target);\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!************************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Set = __webpack_require__(/*! ./es6.set */ \"../../node_modules/core-js/modules/es6.set.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"../../node_modules/core-js/modules/_array-from-iterable.js\");\nvar metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../../node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function (O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {\n  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!*******************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../../node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!****************************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {\n  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!***********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!*******************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../../node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!***********************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.metadata.js":
/*!***************************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $metadata = __webpack_require__(/*! ./_metadata */ \"../../node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/modules/_a-function.js\");\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n\n$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {\n  return function decorator(target, targetKey) {\n    ordinaryDefineOwnMetadata(\n      metadataKey, metadataValue,\n      (targetKey !== undefined ? anObject : aFunction)(target),\n      toMetaKey(targetKey)\n    );\n  };\n} });\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/web.dom.iterable.js":
/*!***********************************************************************************!*\
  !*** /root/dotnet/NetCoreHeroes/node_modules/core-js/modules/web.dom.iterable.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"../../node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack:////root/dotnet/NetCoreHeroes/node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "../../node_modules/zone.js/dist/zone.js":
/*!********************************************************************************************************!*\
  !*** delegated ../../node_modules/zone.js/dist/zone.js from dll-reference vendor_78b642911b7f67396865 ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_78b642911b7f67396865 */ \"dll-reference vendor_78b642911b7f67396865\"))(\"../../node_modules/zone.js/dist/zone.js\");\n\n//# sourceURL=webpack:///delegated_../../node_modules/zone.js/dist/zone.js_from_dll-reference_vendor_78b642911b7f67396865?");

/***/ }),

/***/ "./App/polyfills.ts":
/*!**************************!*\
  !*** ./App/polyfills.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * This file includes polyfills needed by Angular and is loaded before the app.\n * You can add your own extra polyfills to this file.\n *\n * This file is divided into 2 sections:\n *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.\n *   2. Application imports. Files imported after ZoneJS that should be loaded before your main\n *      file.\n *\n * The current setup is for so-called \"evergreen\" browsers; the last versions of browsers that\n * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),\n * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.\n *\n * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/***************************************************************************************************\n * BROWSER POLYFILLS\n */\n/** IE9, IE10 and IE11 requires all of the following polyfills. **/\n__webpack_require__(/*! core-js/es6/symbol */ \"../../node_modules/core-js/es6/symbol.js\");\n__webpack_require__(/*! core-js/es6/object */ \"../../node_modules/core-js/es6/object.js\");\n__webpack_require__(/*! core-js/es6/function */ \"../../node_modules/core-js/es6/function.js\");\n__webpack_require__(/*! core-js/es6/parse-int */ \"../../node_modules/core-js/es6/parse-int.js\");\n__webpack_require__(/*! core-js/es6/parse-float */ \"../../node_modules/core-js/es6/parse-float.js\");\n__webpack_require__(/*! core-js/es6/number */ \"../../node_modules/core-js/es6/number.js\");\n__webpack_require__(/*! core-js/es6/math */ \"../../node_modules/core-js/es6/math.js\");\n__webpack_require__(/*! core-js/es6/string */ \"../../node_modules/core-js/es6/string.js\");\n__webpack_require__(/*! core-js/es6/date */ \"../../node_modules/core-js/es6/date.js\");\n__webpack_require__(/*! core-js/es6/array */ \"../../node_modules/core-js/es6/array.js\");\n__webpack_require__(/*! core-js/es6/regexp */ \"../../node_modules/core-js/es6/regexp.js\");\n__webpack_require__(/*! core-js/es6/map */ \"../../node_modules/core-js/es6/map.js\");\n__webpack_require__(/*! core-js/es6/weak-map */ \"../../node_modules/core-js/es6/weak-map.js\");\n__webpack_require__(/*! core-js/es6/set */ \"../../node_modules/core-js/es6/set.js\");\n/** IE10 and IE11 requires the following for NgClass support on SVG elements */\n// import 'classlist.js';  // Run `npm install --save classlist.js`.\n/** IE10 and IE11 requires the following for the Reflect API. */\n// import 'core-js/es6/reflect';\n/** Evergreen browsers require these. **/\n// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.\n__webpack_require__(/*! core-js/es7/reflect */ \"../../node_modules/core-js/es7/reflect.js\");\n/**\n * Required to support Web Animations `@angular/platform-browser/animations`.\n * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation\n **/\n// import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n/***************************************************************************************************\n * Zone JS is required by Angular itself.\n */\n__webpack_require__(/*! zone.js/dist/zone */ \"../../node_modules/zone.js/dist/zone.js\"); // Included with Angular CLI.\n/***************************************************************************************************\n * APPLICATION IMPORTS\n */\n/**\n * Date, currency, decimal and percent pipes.\n * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10\n */\n// import 'intl';  // Run `npm install --save intl`.\n/**\n * Need to import at least one locale-data with intl.\n */\n// import 'intl/locale-data/jsonp/en';\n\n\n//# sourceURL=webpack:///./App/polyfills.ts?");

/***/ }),

/***/ "dll-reference vendor_78b642911b7f67396865":
/*!**********************************************!*\
  !*** external "vendor_78b642911b7f67396865" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_78b642911b7f67396865;\n\n//# sourceURL=webpack:///external_%22vendor_78b642911b7f67396865%22?");

/***/ })

/******/ });