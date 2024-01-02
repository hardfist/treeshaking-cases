(() => {
    "use strict";
    var __webpack_modules__ = {
        "./src/components/button.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                Button: () => Button
            });
            const Button = () => "button";
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__.d = (exports, definition) => {
        for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop), 
    __webpack_require__.r = exports => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    };
    var __webpack_exports__ = {};
    (() => {
        __webpack_require__.r(__webpack_exports__);
        var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/button.js");
        console.log("button:", _components_index__WEBPACK_IMPORTED_MODULE_0__.Button);
    })();
})();