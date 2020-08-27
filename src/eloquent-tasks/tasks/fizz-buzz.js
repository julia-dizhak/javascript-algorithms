/*
Leetcode
412. Fizzbuzz
easy

Create a for loop that iterates up to 100 while outputting "fizz" at multiples
of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

1
2
'Fizz'
4
'Buzz'
...
@param {for loop numbers}
@return {or number or string}
*/

/*
Naive approach

You must have played FizzBuzz as kids. FizzBuzz charm never gets old. And so
here we are looking at how you can take on one step at a time and impress your
interviewer with a better and neat approach to solve this problem.

Intuition

The moment you hear of FizzBuzz you think whether the number is divisible by 3,
5 or both.

Algorithm

Initialize an empty answer list.
Iterate on the numbers from 1 ... N1...N.
For every number, if it is divisible by both 3 and 5, add FizzBuzz to the answer list.
Else, Check if the number is divisible by 3, add Fizz.
Else, Check if the number is divisible by 5, add Buzz.
Else, add the number.

Time is O(n)
space is O(1)
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  if (n === 0) return [];
  let output = [];
  for (let i = 1; i <= n; i++) {
      if ( (i % 3 === 0) && (i % 5 === 0) ) output.push('FizzBuzz')
      else if (i % 3 === 0) output.push('Fizz')
      else if (i % 5 === 0) output.push('Buzz');
      else {
        output.push(i.toString())
      }
  }
  return output;
};

/*
Approach string concatenation

Intuition

This approach won't reduce the asymptotic complexity, but proves to be a neater
solution when FizzBuzz comes with a twist. What if FizzBuzz is now FizzBuzzJazz i.e.

3 ---> "Fizz" , 5 ---> "Buzz", 7 ---> "Jazz"
If you try to solve this with the previous approach the program would have too
many conditions to check:

Divisible by 3
Divisible by 5
Divisible by 7
Divisible by 3 and 5
Divisible by 3 and 7
Divisible by 7 and 3
Divisible by 3 and 5 and 7
Not divisible by 3 or 5 or 7.
This way if the FizzBuzz mappings increase, the conditions would grow exponentially
in your program.

Algorithm

Instead of checking for every combination of these conditions, check for
divisibility by given numbers i.e. 3, 5 as given in the problem. If the number
is divisible, concatenate the corresponding string mapping Fizz or Buzz to the
current answer string.

For eg. If we are checking for the number 15, the steps would be:

Condition 1: 15 % 3 == 0 , num_ans_str = "Fizz"
Condition 2: 15 % 5 == 0 , num_ans_str += "Buzz"
=> num_ans_str = "FizzBuzz"
So for FizzBuzz we just check for two conditions instead of three conditions as
in the first approach.

Similarly, for FizzBuzzJazz now we would just have three conditions to check
for divisibility.

time is O(n)
space is O(1)
*/

// return string
const fizzBuzzStringConcatenation = () => {
  let output = "";
  for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0)
      output += "Fizz";
    if (n % 5 === 0)
      output += "Buzz";

    //console.log(output || n);
  }
  return output;
};

// return Array
function f1(n) {
  if (n === 0) return [];
  let output = [];

  for (let i = 1; i <= n; i++) {
    let newStr = '';
    if (i % 3 === 0) newStr += 'Fizz';
    if (i % 5 === 0) newStr += 'Buzz';
    if (newStr === '') newStr += i;

     // Append the current answer str to the ans list
    output.push(newStr)
  }

  return output;
}
//console.log('f n', f1(15))

/*
Approach 3 Hash it

Intuition

This approach is an optimization over approach 2. When the number of mappings
are limited, approach 2 looks good. But what if you face a tricky interviewer and
he decides to add too many mappings?

Having a condition for every mapping is not feasible or may be we can say the
code might get ugly and tough to maintain.

What if tomorrow we have to change a mapping or may be delete a mapping? Are we
going to change the code every time we have a modification in the mappings?

We don't have to. We can put all these mappings in a Hash Table.

Algorithm

1 Put all the mappings in a hash table. The hash table fizzBuzzHash would look
something like { 3: 'Fizz', 5: 'Buzz' }

2 Iterate on the numbers from 1...N.

3 For every number, iterate over the fizzBuzzHash keys and check for divisibility.

If the number is divisible by the key, concatenate the corresponding hash value to the answer string for current number. We do this for every entry in the hash table.
Add the answer string to the answer list.

time is O(n)
space is O(1)
*/

function fUseHash(n) {
  let output = [];
  let fizzBuzzHash = {};
  fizzBuzzHash[3] = 'Fizz';
  fizzBuzzHash[5] = 'Buzz';
  //console.log('fizzBuzzHash', fizzBuzzHash);
  for (let num = 1; num <= n; num++) {
    let numAnsStr = '';
    for (const key in fizzBuzzHash) {
      //console.log('key', key);
      if (num % Number(key) === 0) {
        numAnsStr += fizzBuzzHash[key];
      }
    }
    if (numAnsStr === '') numAnsStr += num;
    output.push(numAnsStr)
  }
  return output;
}
//console.log('fUseHash', fUseHash(15));

export {
  fizzBuzz,
  fizzBuzzStringConcatenation,
  fUseHash
}
