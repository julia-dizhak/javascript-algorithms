/**
 * Factorialize a Number: return the factorial of the provided integer.
 *
 * Desc: if the integer is represented with the letter n, a factorial is the product
 * of all positive integers less than or equal to n.
 *
 * solution(5) --> 5! = 1 * 2 * 3 * 4 * 5 = 120
 *
 * 0! = 1
 * 1! = 1
 * 2! = 2 * 1
 * 3! = 3 * 2 * 1
 * 4! = 4 * 3 * 2 * 1
 * 5! = 5 * 4 * 3 * 2 * 1
 *
 * @param {number}
 * @return {number}
 *
 */

// Factorialize a Number with Recursion --> Runtime O()
function factorialize(num) {
    "use strict";

    // if the number is less than 0, reject it
    if ( num < 0 ) {
        return -1;
    }

    // if the number is 0, it's factorial is 1
    else if (num === 0) {
        return 1;
    }

    // otherwise, call the recursive procedure again

    /*
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls

        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call: factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)

        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value

        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120

        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
    */

    else {
        return ( num * factorialize(num - 1));
    }
}

console.log('factorialize(5) -->', factorialize(-1));

// provided test cases

// Factori
