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
        global.clone = mod.exports;
    }
})(this, function (exports) {
    /**
     * Clone arrays
     *
     * loop for and while (var i = a.length; while(i--) { b[i] = a[i]; })
     * slice
     * map a.map(e => e)?
     * array.from()
     * concat
     * spread operator arr2 = [...arr1];
     *
     * @param {[array]}
     * @return {[array]}
     */

    'use strict';

    // runtime O(1) ?
    // one from fastest solutions

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

    var cloneWithSliceMethod = function cloneWithSliceMethod(arr) {
        var clone = arr.slice(0); // faster then arr.slice()

        return clone;
    };

    //console.log(cloneWithSliceMethod([1,2,3,4,5]));

    // to add clone as a native method to arrays
    Array.prototype.clone = function () {
        return this.slice(0);
    };

    // don't iterate over arrays to clone them if all you need is a native clone
    // runtime O(n)
    var cloneWithForLoop = function cloneWithForLoop(arr) {
        var clone = [],
            len = arr.length;

        for (var index = 0; index < len; index++) {
            clone.push(arr[index]); // index could be any types, so you should check and if it's references type make additional manipulation
        }

        return clone;
    };

    //console.log(cloneWithForLoop([1,2,3,4,5]));

    // loop fixed size
    // runtime O(n)
    var cloneWithForLoopFixedSize = function cloneWithForLoopFixedSize(data) {
        var copy = new Array(data.length),
            len = data.length;

        for (var j = 0; j < len; j++) {
            copy[j] = data[j];
        }
        return copy;
    };

    // deep clone array spread
    var cloneDeepWithSpread = function cloneDeepWithSpread(clone) {
        return [].concat(_toConsumableArray(clone));
    };

    //console.log('cloneDeepWithSpread', cloneDeepWithSpread([1,2,[3]]) );

    // deep clone array JSON.stringify
    var cloneDeepJson = function cloneDeepJson(clone) {
        return JSON.parse(JSON.stringify(clone));
    };

    exports.cloneWithSliceMethod = cloneWithSliceMethod;
    exports.cloneWithForLoop = cloneWithForLoop;
    exports.cloneWithForLoopFixedSize = cloneWithForLoopFixedSize;
    exports.cloneDeepWithSpread = cloneDeepWithSpread;
    exports.cloneDeepJson = cloneDeepJson;
});
