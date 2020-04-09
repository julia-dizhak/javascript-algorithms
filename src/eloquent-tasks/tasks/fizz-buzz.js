/**
 * Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
 *
 * 1
 * 2
 * 'Fizz'
 * 4
 * 'Buzz'
 * ..
 * @param {for loop numbers}
 * @return {or number or string}
 */

const fizzBuzz = () => {
  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 === 0)
      output += "Fizz";
    if (n % 5 === 0)
      output += "Buzz";

    console.log(output || n);
  }
};

export { fizzBuzz }
