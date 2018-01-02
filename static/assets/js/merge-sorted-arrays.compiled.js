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
        global.mergeSortedArrays = mod.exports;
    }
})(this, function (exports) {
    /**
     * Merge two sorted arrays
     * arr1 = [1, 2, 4, 6], arr2 = [3, 7, 9] => result = []
     *
     * runtime O(n)
     *
     * @param {arr1, arr2}
     * @return {arr}
     *
     */

    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var mergeSortedArrays = function mergeSortedArrays(arr1, arr2) {
        var i = 0,
            j = 0,
            result = [];

        var len1 = arr1.length,
            len2 = arr2.length;

        while (i < len1 && j < len2) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }

        if (i < len1) {
            result = [].concat(_toConsumableArray(result), _toConsumableArray(arr1.slice(i)));
        }

        if (j < len2) {
            result = [].concat(_toConsumableArray(result), _toConsumableArray(arr2.slice(j)));
        }

        return result;
    };

    console.log('mergeSortedArrays', mergeSortedArrays([1, 2, 4, 6], [3, 7, 9]));

    exports.mergeSortedArrays = mergeSortedArrays;
});
