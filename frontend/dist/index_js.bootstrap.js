/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwasm_v1_frontend"] = self["webpackChunkwasm_v1_frontend"] || []).push([["index_js"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-v1 */ \"../pkg/wasm_v1_bg.js\");\n\nconsole.log((0,wasm_v1__WEBPACK_IMPORTED_MODULE_0__.rust_add_10)(10))\n\n//# sourceURL=webpack://wasm-v1-frontend/./index.js?");

/***/ }),

/***/ "../pkg/wasm_v1_bg.js":
/*!****************************!*\
  !*** ../pkg/wasm_v1_bg.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run),\n/* harmony export */   \"rust_add_10\": () => (/* binding */ rust_add_10),\n/* harmony export */   \"__wbindgen_number_new\": () => (/* binding */ __wbindgen_number_new),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbg_log_d03b9c828cf320cb\": () => (/* binding */ __wbg_log_d03b9c828cf320cb),\n/* harmony export */   \"__wbg_log_f0b538cb0eac2bc2\": () => (/* binding */ __wbg_log_f0b538cb0eac2bc2),\n/* harmony export */   \"__wbg_log_7cdb511190347527\": () => (/* binding */ __wbg_log_7cdb511190347527),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbg_log_386a8115a84a780d\": () => (/* binding */ __wbg_log_386a8115a84a780d),\n/* harmony export */   \"__wbg_log_da824bc9fb9da0a8\": () => (/* binding */ __wbg_log_da824bc9fb9da0a8),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _wasm_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_v1_bg.wasm */ \"../pkg/wasm_v1_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nfunction run() {\n    _wasm_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.run();\n}\n\n/**\n* @param {number} a\n* @returns {number}\n*/\nfunction rust_add_10(a) {\n    var ret = _wasm_v1_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.rust_add_10(a);\n    return ret >>> 0;\n}\n\nconst __wbindgen_number_new = function(arg0) {\n    var ret = arg0;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_log_d03b9c828cf320cb = function(arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbg_log_f0b538cb0eac2bc2 = function(arg0) {\n    console.log(arg0 >>> 0);\n};\n\nconst __wbg_log_7cdb511190347527 = function(arg0, arg1, arg2, arg3) {\n    console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_log_386a8115a84a780d = function(arg0) {\n    console.log(getObject(arg0));\n};\n\nconst __wbg_log_da824bc9fb9da0a8 = function(arg0, arg1) {\n    console.log(getObject(arg0), getObject(arg1));\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://wasm-v1-frontend/../pkg/wasm_v1_bg.js?");

/***/ }),

/***/ "../pkg/wasm_v1_bg.wasm":
/*!******************************!*\
  !*** ../pkg/wasm_v1_bg.wasm ***!
  \******************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_v1_bg.js */ \"../pkg/wasm_v1_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"\"]()\n\n//# sourceURL=webpack://wasm-v1-frontend/../pkg/wasm_v1_bg.wasm?");

/***/ })

}]);