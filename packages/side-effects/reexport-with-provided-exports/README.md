# ProvidedExports Optimization
when setting `optimization.providedExports = true`, generate more static code which runs faster than original code
```js
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   b: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
```