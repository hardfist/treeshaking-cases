# Used Exports Optimization Withou Innergraph

`optimization.usedExports` is used to following optimization

we can see the build result contains `const b = 1` because it's used in `function test(){}` and even when `test` is not used.
```js
var _lib__WEBPACK_IMPORTED_MODULE_0__, __webpack_modules__ = [ , (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            a: () => a,
            b: () => b
        });
        const a = 1, b = 2;
    } ], __webpack_module_cache__ = {};
```