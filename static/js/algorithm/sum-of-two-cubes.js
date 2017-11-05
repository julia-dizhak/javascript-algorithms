/**
 * Print all positive solutions to the equation a^3+b^3 = c^3 + d^3, where a, b, c, d lie between [0, 10^5].
 *
 * Algorithm
 * ...
 *
 * Characteristics
 *
 * Runtime O(n:^4)
 * Runtime O(n:^3)
 * Runtime O(n:^2)
 *
 */

/**
 * @param {number}
 * @return {number a,b,c,d; pair (a,b) (c,d)}
 *
 */

'use strict';

// Runtime O(n:^4)
// n = 1000
function defineSumOfTwoCubesRuntimeFour(n) {
    var counter = 0;

    for (var a = 1; a < n; a++) {
        for (var b = 1; b < n; b++) {
            for (var c = 1; c < n; c++) {
                for (var d = 1; d < n; d++) {
                    counter += 1;
                    if (Math.pow(a, 3) + Math.pow(b, 3) == Math.pow(c, 3) + Math.pow(d, 3)) {
                        console.log(`${counter} attempt`);
                        console.log(a, b, c, d);
                        break; // it's unnecessary to continue checking for other possible values of d
                    }
                }
            }
        }
    }
}
// defineSumOfTwoCubesRuntimeFour(10);


// Runtime O(n:^3)
function defineSumOfTwoCubesRuntimeThree(n) {
    var counter = 0;

    for (var a = 1; a < n; a++) {
        for (var b = 1; b < n; b++) {
            for (var c = 1; c < n; c++) {
                var d = Math.round(Math.pow(Math.pow(a, 3) + Math.pow(b, 3) - Math.pow(c, 3), 1 / 3)); // not sure if round is correct but it seems, yes
                counter += 1;
                if (Math.pow(a, 3) + Math.pow(b, 3) == Math.pow(c, 3) + Math.pow(d, 3) && d >= 0 && d <= n) { // validate that value works
                    console.log(`${counter} attempt`);
                    console.log(a, b, c, d);
                }
            }
        }
    }
}
//defineSumOfTwoCubesRuntimeThree(10);

// Runtime O(n:^2)
function defineSumOfTwoCubesRuntimeTwo(n) {
    let counter = 0;
    let result = {}, data;

    for (let c = 1; c < n; c++) {
        for (let d = 1; d < n; d++) {
            data = Math.pow(c, 3) + Math.pow(d, 3);
            if (!result[data]) {
                result[data] = [];
            }
            result[data].push([c, d]);

            counter += 1;
            console.log(`${counter} attempt`);
        }
    }

    /**
     * The algorithm operates by essentially iterating through all (a, b) pairs and then searching all (c, d) pairs to find if there are any matches to that (a, b) pairs.
     * Why do we keep on computing all (c, d) pairs for each (a, b) pair? We should just create a list of (c, d) pairs once.
     * Then, we have an (a, b) pair, find the matches within the (c, d) list. We can quickly locate the matches by inserting each (c, d) pair into a hash table that maps from the sum
     * to the pair (or, rather, the list of pairs that have that sum).
    */

    // for (var a = 1; a < n; a++) {
    //     for (var b = 1; b < n; b++) {
    //         data = Math.pow(a, 3) + Math.pow(b, 3);
    //
    //         var solutionsList = result[data];
    //         console.log(`Soluation a: ${a} b: ${b}`);
    //         console.log(` paris c, d: ${solutionsList}`)
    //
    //
    //     }
    // }

    /**
     * Actually, once we have the map of all the (c, d) pairs, we can just use that directly.
     * We don't need to generate the (a, b) pairs. Each (a, b) will already be in the map.
     */
    for (var key in result) {
        var solutions = result[key];
        for (var i=0; i<solutions.length; i++) {
            var pair = solutions[i];


            for (var j=0; j<solutions.length; j++) {
                var pair2 = solutions[j];
                console.log(pair, pair2);
            }
        }
    }

    // console.log(result);
}

//defineSumOfTwoCubesRuntimeTwo(10);
