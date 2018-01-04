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
        global.primeFactors = mod.exports;
    }
})(this, function (exports) {
    /**
     * find the prime factors
     *
     * @param {number}
     * @return {arrayp[number]}
     *
     */

    'use strict';

    // run a while loop
    // start dividing by 2 and if not divisible, increase divider until you are done
    // If number is prime then the runtime complexity will be O(n).
    // else runtime will be O(Math.log2(n))

    // you can increase divisor by 2 form divisor = 3. Because, if a number is divisible by any even number it would divisible by 2.
    // Hence, you don't need to divide by even numbers.
    // Besides, you will not have a factor bigger than half of its value.

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var primeFactors = function primeFactors(num) {
        var factors = [],
            divisor = 2;

        while (num > 2) {
            if (num % divisor === 0) {
                factors.push(divisor);
                num = num / divisor;
            } else {
                divisor++;
            }
        }

        // wrong solution
        // i = num/2
        // for (let i = 0; i < num / 2; i++) {
        //     if (num % i === 0) {
        //         factors.push(i);
        //     }
        // }

        return factors;
    };
    console.log('primeFactors -->', primeFactors(11));

    exports.primeFactors = primeFactors;
});
