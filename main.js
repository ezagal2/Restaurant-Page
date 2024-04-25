/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! restaurant-bg.jpg */ \"./src/restaurant-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bubbler+One&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover; /* Cover the entire page */\n    background-position: center; /* Center the background image */\n    background-repeat: no-repeat; /* Do not repeat the background image */\n    background-attachment: fixed; /* This ensures the background image covers the whole page even when scrolling */\n    min-height: 100vh;\n    height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n\nbody::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.48); /* Black with opacity */\n    z-index: -1;\n}\n\n.nav-btns {\n    font-family: \"Montserrat\", sans-serif;\n    border: none;\n    color: white;\n    font-size: 30px;\n    font-weight: 300;\n    background-color: transparent;\n    border-radius: 5px;\n    padding: 5px;\n    width: 200px;\n    transition: transform 0.3s ease;\n}\n\n.nav-btns:hover {\n    cursor: pointer;\n    transform: translateY(-10px); /* This moves the button up by 10 pixels on hover */\n}\n\nnav{\n    display: flex;\n    justify-content: center;\n    padding-right: 20px;\n    padding-top: 10px;\n    gap: 20px;\n}\n\n#content{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    \n}\n\n.inner-container {\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    border: 5px double rgba(254, 207, 105, 0.397);\n    border-radius: 5px;\n    min-height: 550px;\n    justify-content: center; /* Align to top */\n    align-items: center;\n    width: 75%;\n    margin: 20px auto; /* Added for spacing around the container */\n    padding: 10px; /* Added for spacing inside the container */\n    box-sizing: border-box; /* Include padding and border in the element's total width and height */\n}\n\n/* Make sure the children of .inner-container do not flex-grow or flex-shrink */\n.inner-container > div {\n    flex: 0 0 auto;\n}\n\n\n#title{\n    background-color: transparent;\n    font-family: \"Monsieur La Doulaise\", cursive;\n    font-size: 5rem;\n    font-weight: 100;\n    text-align: center;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: white;\n    display: block;\n}\n\n#welcome{\n    font-family: \"Montserrat\", sans-serif;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 300;\n    background-color: rgba(254, 207, 105, 0.397);\n    width: 50%;\n    padding: 30px;\n    align-self: center;\n    border-radius: 20px;\n    text-align: center;\n    \n}\n\n#call-to-action{\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 1em;\n    padding: 5px;\n    align-self: center;\n    margin-top: 20px;\n    background-color: transparent;\n    border: 1px solid white;\n    color: white;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\n#call-to-action:hover{\n    background-color: #ffffff95;\n    border-color: #ffffff95;\n    color: black;\n}\n\n.menu{\n    display: grid;\n    grid-template-columns: repeat(2, 300px);\n    grid-template-rows: repeat(5, 300px);\n    overflow: hidden;\n    gap: 70px;\n\n}\n\nimg{\n    border-radius: 15px;\n    border: 2px solid rgba(254, 207, 105, 0.397);\n}\n\n.cell{\n    position: relative;\n}\n\n.overlay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 304px;\n    width: 304px;\n    opacity: 0;\n    transition: .5s ease;\n    background-color: rgba(0, 0, 0, 0.48);\n    border-radius: 15px;\n    text-align: center;\n    font-family: \"Montserrat\", sans-serif;\n    row-gap: 20px;\n}\n\n.title{\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 1.5rem;\n    font-weight: 300;\n    background-color: rgba(254, 207, 105, 0.397);\n    width: 50%;\n    padding: 30px;\n    align-self: center;\n    border-radius: 20px;\n    text-align: center;\n    margin-top: 20px;\n    color: white;\n\n}\n\n.overlay p{\n    padding-left: 20px;\n    padding-right: 20px;\n    color: white;\n}\n\n.cell:hover .overlay {\n    opacity: 1;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutUsCreator.js":
/*!*******************************!*\
  !*** ./src/aboutUsCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAboutUs)\n/* harmony export */ });\n/* harmony import */ var _homeCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeCreator.js */ \"./src/homeCreator.js\");\n/* harmony import */ var _menuCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuCreator.js */ \"./src/menuCreator.js\");\n/* harmony import */ var _removeContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeContent.js */ \"./src/removeContent.js\");\n\n\n\n\nconst welcomeMessage = `Ziggie's Cuisine didn't just come into existence overnight; it was the culmination of generations of culinary passion and cross-cultural exploration. The story begins with the Ziggiano family, Italian immigrants who brought with them a deep love for their homeland's traditional flavors when they arrived in America. In the early 20th century, Giovanni Ziggiano arrived in New York City from a small village in Sicily. With him, he carried recipes passed down through generations, each dish holding memories of family gatherings and celebrations. Determined to share the tastes of his heritage with his new home, Giovanni opened a modest trattoria in Little Italy. The trattoria thrived, becoming a beloved neighborhood institution. Giovanni's son, Marco, inherited his father's culinary skills and adventurous spirit. Inspired by the diverse culinary landscape of America, Marco began to experiment, blending traditional Italian recipes with American ingredients and techniques. As the years passed, Marco's experiments evolved into a unique fusion of Italian and American cuisine. His dishes attracted a diverse clientele, drawn not only by the delicious food but also by the warm, welcoming atmosphere of the trattoria. When Marco's daughter, Isabella, inherited the family business, she sought to honor her father's legacy while also putting her own stamp on the restaurant. She rebranded it as \"Ziggie's Cuisine,\" a nod to her family's heritage and their fusion of Italian and American flavors. Under Isabella's guidance, Ziggie's Cuisine flourished, expanding beyond its humble beginnings to become a destination for food lovers from far and wide. The menu featured handcrafted pastas infused with bold American ingredients, alongside classic Italian dishes with a modern twist. Ziggie's became more than just a restaurant; it became a place where people could come together to celebrate life's moments, big and small. Whether it was a romantic date night, a family reunion, or a casual meal with friends, patrons knew they could always count on Ziggie's for delicious food and a warm welcome. And so, the legacy of Ziggie's Cuisine continues, a testament to the enduring power of food to bring people together across cultures and generations. With every bite, patrons experience the rich tapestry of Italy and America, savoring the flavors of tradition and innovation in equal measure. Buon Appetito and Welcome Home!`;\n\nconst innerContainer = document.querySelector('.inner-container');\n\nconst menuBtn = document.querySelector('.menuBtn');\nconst homeBtn = document.querySelector('.homeBtn');\n\nfunction createAboutUs(){\n    const aboutUs = document.createElement('div');\n    aboutUs.id = 'welcome';\n\n    const message = document.createElement('p');\n    message.textContent = welcomeMessage;\n\n    aboutUs.appendChild(message);\n\n    innerContainer.appendChild(aboutUs);\n\n    menuBtn.addEventListener('click', () => {\n        (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        (0,_menuCreator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    homeBtn.addEventListener('click', () => {\n        (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        (0,_homeCreator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/aboutUsCreator.js?");

/***/ }),

/***/ "./src/homeCreator.js":
/*!****************************!*\
  !*** ./src/homeCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _menuCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuCreator.js */ \"./src/menuCreator.js\");\n/* harmony import */ var _removeContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeContent.js */ \"./src/removeContent.js\");\n/* harmony import */ var _aboutUsCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutUsCreator.js */ \"./src/aboutUsCreator.js\");\n\n\n\n\nconst welcomeMessage = \"Welcome to Ziggie's Cuisine, where Italy meets America in every bite. Experience traditional flavors with a twist, from handcrafted pastas to bold American dishes. Buon Appetito and Welcome Home!\";\n\nconst innerContainer = document.querySelector('.inner-container');\n\nconst menuBtn = document.querySelector('.menuBtn');\nconst aboutUsBtn = document.querySelector('.aboutBtn');\n\nfunction createHome(){\n    const homeDiv = document.createElement('div');\n    homeDiv.id = 'welcome';\n\n    const welcomeP = document.createElement('p');\n    welcomeP.textContent = welcomeMessage;\n\n    homeDiv.appendChild(welcomeP);\n\n    const seeMenuBtn = document.createElement('button');\n    seeMenuBtn.id = 'call-to-action';\n    seeMenuBtn.textContent = 'See the Menu';\n\n    innerContainer.appendChild(homeDiv);\n    innerContainer.appendChild(seeMenuBtn);\n\n    seeMenuBtn.addEventListener('click', () => {\n        (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_menuCreator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    menuBtn.addEventListener('click', () => {\n        (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_menuCreator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    aboutUsBtn.addEventListener('click', () => {\n        (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_aboutUsCreator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homeCreator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homeCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeCreator.js */ \"./src/homeCreator.js\");\n\n\n\n(0,_homeCreator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuCreator.js":
/*!****************************!*\
  !*** ./src/menuCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _deserts_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserts/dish1.jpg */ \"./src/deserts/dish1.jpg\");\n/* harmony import */ var _deserts_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deserts/dish2.jpg */ \"./src/deserts/dish2.jpg\");\n/* harmony import */ var _deserts_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deserts/dish3.jpg */ \"./src/deserts/dish3.jpg\");\n/* harmony import */ var _deserts_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deserts/dish4.jpg */ \"./src/deserts/dish4.jpg\");\n/* harmony import */ var _deserts_dish5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deserts/dish5.jpg */ \"./src/deserts/dish5.jpg\");\n/* harmony import */ var _deserts_dish6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deserts/dish6.jpg */ \"./src/deserts/dish6.jpg\");\n/* harmony import */ var _deserts_dish7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deserts/dish7.jpg */ \"./src/deserts/dish7.jpg\");\n/* harmony import */ var _deserts_dish8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deserts/dish8.jpg */ \"./src/deserts/dish8.jpg\");\n/* harmony import */ var _deserts_dish9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deserts/dish9.jpg */ \"./src/deserts/dish9.jpg\");\n/* harmony import */ var _deserts_dish10_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deserts/dish10.jpg */ \"./src/deserts/dish10.jpg\");\n/* harmony import */ var _removeContent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./removeContent.js */ \"./src/removeContent.js\");\n/* harmony import */ var _homeCreator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homeCreator.js */ \"./src/homeCreator.js\");\n/* harmony import */ var _aboutUsCreator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aboutUsCreator.js */ \"./src/aboutUsCreator.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst dishesInfo = [\n    {\n        index: 0,\n        title: 'Bageli di Frutta',\n        description: 'Bagel with cream cheese topped with various fruits (strawberries, raspberries, kiwi slices, dragon fruit, cherries, or dark berries) along with a sprinkle of coconut flakes'\n    },\n    {\n        index: 1,\n        title: 'Asparagi Bianchi',\n        description: 'White asparagus arranged, blanched, with some shaved parmesan, frisée lettuce and a black truffle'\n    },\n    {\n        index: 2,\n        title: 'Benedette al Salmon',\n        description: 'A classic Eggs Benedict dish with poached eggs on top of English muffins and smoked salmon, finished with a generous drizzle of hollandaise sauce and a sprinkle of chives'\n    },\n    {\n        index: 3,\n        title: 'Crema De Cesi',\n        description: 'Bowl of hummus, a creamy dip made from mashed chickpeas blended with tahini, olive oil, lemon juice, salt, and garlic'\n    },\n    {\n        index: 4,\n        title: 'Crespeme Classiche',\n        description: 'Thin pancakes that can be filled with a variety of ingredients. Golden and slightly crisp on the edges'\n    },\n    {\n        index: 5,\n        title: 'Dolce Volcano',\n        description: 'Lava cake dusted with powdered sugar, garnished with fresh berries (strawberries, blueberries, raspberries, and red currants)'\n    },\n    {\n        index: 6,\n        title: 'Gemelli Rustici',\n        description: 'Gemelli tossed with chunks of sausage, mushrooms, and garnished with parsley'\n    },\n    {\n        index: 7,\n        title: 'Ravioli di Zucca',\n        description: 'Ravioli served with butter, topped with squash, freshly grated Parmesan cheese, and garnished with green leaves'\n    },\n    {\n        index: 8,\n        title: 'Straccetti di Pollo Picante',\n        description: 'stir-fry with pasta, mixed with sliced chicken, bell peppers, and onions, all garnished with fresh herbs and a sprinkle of chili flakes'\n    },\n    {\n        index: 9,\n        title: 'Verde Fresco e Pomodoro',\n        description: 'An Omlette with a base of hummus, topped with (cherry tomatoes, avocado or guacamole, green onions, and sugar snap peas)'\n    }\n\n];\n\n\nlet dishImages = [_deserts_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__, _deserts_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__, _deserts_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__, _deserts_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__, _deserts_dish5_jpg__WEBPACK_IMPORTED_MODULE_4__, _deserts_dish6_jpg__WEBPACK_IMPORTED_MODULE_5__, _deserts_dish7_jpg__WEBPACK_IMPORTED_MODULE_6__, _deserts_dish8_jpg__WEBPACK_IMPORTED_MODULE_7__, _deserts_dish9_jpg__WEBPACK_IMPORTED_MODULE_8__, _deserts_dish10_jpg__WEBPACK_IMPORTED_MODULE_9__];\n\nconst innerContainer = document.querySelector('.inner-container');\n\nfunction createCell(dish) {\n\n    const cellDiv = document.createElement('div');\n    cellDiv.classList.add('cell');\n\n    const img = document.createElement('img');\n    img.src = dishImages[dish.index];\n    img.alt = `Dish ${dish.index + 1}`;\n    img.style.objectFit = 'cover';\n    img.style.width = '100%';\n    img.style.height = '100%';\n\n    const overlayDiv = document.createElement('div');\n    overlayDiv.classList.add('overlay');\n\n    const titleSpan = document.createElement('span');\n    titleSpan.classList.add('title');\n    titleSpan.textContent = dish.title;\n\n    const descriptionP = document.createElement('p');\n    descriptionP.textContent = dish.description;\n\n    overlayDiv.appendChild(titleSpan);\n    overlayDiv.appendChild(descriptionP);\n    cellDiv.appendChild(img);\n    cellDiv.appendChild(overlayDiv);\n\n    return cellDiv;\n}\n\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    innerContainer.appendChild(menu);\n\n    dishesInfo.forEach((dish) => {\n        const cellDiv = createCell(dish);\n        menu.appendChild(cellDiv);\n    });\n\n    const homeBtn = document.querySelector('.homeBtn');\n    homeBtn.addEventListener('click', () => {\n        (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n        (0,_homeCreator_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n    });\n\n    const aboutBtn = document.querySelector('.aboutBtn');\n    aboutBtn.addEventListener('click', () => {\n        (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n        (0,_aboutUsCreator_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n    });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuCreator.js?");

/***/ }),

/***/ "./src/removeContent.js":
/*!******************************!*\
  !*** ./src/removeContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearInnerContainer)\n/* harmony export */ });\n\n\nfunction clearInnerContainer() {\n    const innerContainer = document.querySelector('.inner-container');\n    while (innerContainer.firstChild) {\n        innerContainer.removeChild(innerContainer.firstChild);\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/removeContent.js?");

/***/ }),

/***/ "./src/deserts/dish1.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c88a1efadbba53032b43.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish1.jpg?");

/***/ }),

/***/ "./src/deserts/dish10.jpg":
/*!********************************!*\
  !*** ./src/deserts/dish10.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc416bb23a657a233447.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish10.jpg?");

/***/ }),

/***/ "./src/deserts/dish2.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3eed8de26d608cfe6a50.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish2.jpg?");

/***/ }),

/***/ "./src/deserts/dish3.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe24964911f8798bd1b8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish3.jpg?");

/***/ }),

/***/ "./src/deserts/dish4.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"33ca9f01112e542ec2d6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish4.jpg?");

/***/ }),

/***/ "./src/deserts/dish5.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish5.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2fcb4a2e54663907edd.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish5.jpg?");

/***/ }),

/***/ "./src/deserts/dish6.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish6.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30268df223b0fab7bb60.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish6.jpg?");

/***/ }),

/***/ "./src/deserts/dish7.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish7.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89228ef21c1ab0f4eb72.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish7.jpg?");

/***/ }),

/***/ "./src/deserts/dish8.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish8.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6dcced294100b32c0f90.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish8.jpg?");

/***/ }),

/***/ "./src/deserts/dish9.jpg":
/*!*******************************!*\
  !*** ./src/deserts/dish9.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"15bbd52b68821be72b52.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/deserts/dish9.jpg?");

/***/ }),

/***/ "./src/restaurant-bg.jpg":
/*!*******************************!*\
  !*** ./src/restaurant-bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d082d855a570b4a3a315.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-bg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;