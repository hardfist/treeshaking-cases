# No TreeShaking Optimization

we can see the build result still contains `const b = 1` even it's not used.
```js
    var __webpack_modules__ = [ , (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            a: () => a,
            b: () => b
        });
        const a = 1;
        const b = 2;
    } ];
```