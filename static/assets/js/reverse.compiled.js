(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.reverse = mod.exports;
    }
})(this, function (exports) {
    /**
     * Reverse a string
     *
     * runtime O(n)
     *
     * @param {string}
     * @return {string}
     *
     */

    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var reverseWithDecrementingLForLoop = function reverseWithDecrementingLForLoop(str) {
        var len = str.length;
        var result = [];

        for (var i = len - 1; i >= 0; i--) {
            result.push(str[i]);
        }

        return result.join('').toLowerCase();
    };

    console.log(reverseWithDecrementingLForLoop('Hello'));

    exports.reverseWithDecrementingLForLoop = reverseWithDecrementingLForLoop;
});
