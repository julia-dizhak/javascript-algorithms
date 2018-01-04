/**
 * Fibonacci sequence
 *
 * @param {number}
 * @return {number}
 *
 */

'use strict';

const fibonacci = (num) => {
    let fibo = [0, 1];

    if (num <= 2) return 1;

    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
        console.log(fibo[i]);
    }

    // 3
    //fibo[2] = fibo[1] + fibo[0]; // 1 + 0
    //fibo[3] = fibo[2] + fibo[1]; // 2


    return fibo[num];
};

console.log('fibonacci -->', fibonacci(3));
