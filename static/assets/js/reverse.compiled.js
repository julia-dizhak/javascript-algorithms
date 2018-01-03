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
     * @param {string}
     * @return {string}
     *
     */

    'use strict';

    // runtime O(n)

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var reverseWithDecrementingLForLoop = function reverseWithDecrementingLForLoop(str) {
        var len = str.length;
        var result = [];

        if (str !== '') {
            for (var i = len - 1; i >= 0; i--) {
                result.push(str[i]);
            }
            return result.join('').toLowerCase();
        }
    };

    //console.log(reverseWithDecrementingLForLoop('Hello'));

    // runtime O(n)
    var reverseWithRecursion = function reverseWithRecursion(str) {
        str = str.toLowerCase();
        if (str === '') {
            // this is the terminal case that will end the recursion
            return '';
        } else {
            return reverseWithRecursion(str.substr(1)) + str.charAt(0);
        }

        //return (str === '') ? '' : reverseWithRecursion(str.substr(1)) + str.charAt(0); // ternary operator
    };

    console.log(reverseWithRecursion('GoodBye!'));

    exports.reverseWithDecrementingLForLoop = reverseWithDecrementingLForLoop;
    exports.reverseWithRecursion = reverseWithRecursion;
});
