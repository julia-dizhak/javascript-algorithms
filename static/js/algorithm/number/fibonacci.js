/**
 * Fibonacci sequence
 *
 * @param {number}
 * @return {number}
 *
 */

'use strict';

const fibonacciWithForLoop = (num) => {
    let fibo = [0, 1];

    if (num <= 2) return 1;

    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
        //console.log(fibo);
    }

    // 3
    //fibo[2] = fibo[1] + fibo[0]; // 1 + 0
    //fibo[3] = fibo[2] + fibo[1]; // 2

    return fibo[num];
};

console.log('fibonacciWithForLoop -->', fibonacciWithForLoop(6));

// runtime O(2^n)
// T(1) = 1
// T(n) = T(n-1) + T(n-2) + T(1)
// a^n == a^(n-1) + a^(n-2)
// divide through by a^(n-2): a^2 == a + 1
// (1+sqrt(5))/2 = 1.6180339887 --> golden ratio, so it takes exponential time.
const fibonacciWithRecursion = num => {
    if (num <= 1) {
        return num;
    } else {
        return fibonacciWithRecursion(num - 1) + fibonacciWithRecursion(num - 2);
    }
};

console.log('fibonacciWithRecursion -->', fibonacciWithRecursion(6));

export{ fibonacciWithForLoop, fibonacciWithRecursion };
