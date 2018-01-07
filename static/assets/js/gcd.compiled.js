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
        global.gcd = mod.exports;
    }
})(this, function (exports) {
    /**
     * Greatest common divisor of 2 numbers
     * Euclidean algorithm
     *
     * @param {number, number}
     * @return {number}
     *
     */

    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var greatestCommonDivisor = function greatestCommonDivisor(a, b) {
        var smallerDigit = a > b ? b : a,
            biggerDigit = a > b ? a : b,
            divisor = 2,
            greatestDivisor = 1;

        // if (a < 2 || b < 2) {
        //     return 1;
        // }

        // while (a >= divisor && b >= divisor) {
        //     if ( a % divisor === 0 && b % divisor === 0) {
        //         greatestDivisor = divisor;
        //     }
        //     divisor++;
        // }

        for (var i = smallerDigit; i > 0; i--) {
            if (smallerDigit % i === 0 && biggerDigit % i === 0) {
                return i;
            }
        }

        //return greatestDivisor;
    };

    console.log('greatestCommonDivisor-->', greatestCommonDivisor(1, 3));

    // runtime O(n^2)
    var euclideanWithRecursion = function euclideanWithRecursion(a, b) {
        if (!b) {
            return a;
        }

        // if (b === 0) {
        //     return a;
        // }

        else {
                return euclideanWithRecursion(b, a % b);
            }
    };

    exports.greatestCommonDivisor = greatestCommonDivisor;
    exports.euclideanWithRecursion = euclideanWithRecursion;


    console.log('euclideanWithRecursion -->', euclideanWithRecursion(5, 10));
});
