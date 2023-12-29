# Used Exports Optimization

`optimization.usedExports` is used to following optimization

we can see the build result removes `const b = 1` when enable innerGraph, and it can analyse deep static analysis, since test is not used, so b is not used.
```js
    var _lib__WEBPACK_IMPORTED_MODULE_0__, __webpack_modules__ = [ , (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            a: () => a
        });
        const a = 1;
    } ], __webpack_module_cache__ = {};
```