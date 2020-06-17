/*
Leetcode
468 Validate id address
medium

Write a function to check whether an input string
is a valid IPv4 address or IPv6 address or neither.

IPv4 addresses are canonically represented in dot-decimal notation,
which consists of four decimal numbers, each ranging from 0 to 255,
separated by dots ("."), e.g., 172.16.254.1;

Besides, leading zeros in the IPv4 is invalid.
For example, the address 172.16.254.01 is invalid.

IPv6 addresses are represented as eight groups of four hexadecimal digits,
each group representing 16 bits.
The groups are separated by colons (":").
For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one.
Also, we could omit some leading zeros among four hexadecimal digits
and some low-case characters in the address to upper-case ones,
so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address
(Omit leading zeros and using upper cases).

However, we don't replace a consecutive group of zero value with
a single empty group using two consecutive colons (::) to pursue simplicity.
For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

Besides, extra leading zeros in the IPv6 is also invalid.
For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

Note: You may assume there is no extra space or special characters
in the input string.

Example 1:
Input: "172.16.254.1"
Output: "IPv4"
Explanation: This is a valid IPv4 address, return "IPv4".

Example 2:
Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".

Example 3:
Input: "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.

And The most straightforward way is to use try/catch construct with
built-in facilities: ip address lib in Python and InetAddress class in Java.
Note that these facilities both refer to POSIX-compatible inet-addr() routine
for parsing addresses. That's why they consider chunks with leading zeros not
as an error, but as an octal representation.
By contrary, problem description directly states that leading zeros in the IPv4
is invalid. That's not a real-life case, but probably done for the sake of simplicity.
Imho, that makes the problem to be a bit schoolish and less fun.
Though let's deal with it anyway, since the problem is very popular recently in Microsoft and Amazon.

There are three main ways to solve it:
1 Regex (i.e. regular expression). Less performing one, though it's a
good way to demonstrate your knowledge of regex.

2 Divide and Conquer, the simplest one.

3 Mix of "Divide and Conquer" and "Try/Catch with built-in facilities",
this time with ones to convert string to integer. Try/catch in this situation
is a sort of "dirty" solution because usually the code inside try blocks
is not optimized as it'd otherwise be by the compiler,
and it's better not to use it during the interview.
*/


/*
Approach using Regex

Let's construct step by step regex for "IPv4" as it's described
in the problem description. Note, that it's not a real-life IPv4 because
of leading zeros problem as we've discussed above.

Anyway, we start to construct regex pattern by using literal regular expression
in JS.
/^ $/ matches the beginning of string and matches the end of string

First divide a patter for each chunk.
Now the problem is reduced to the construction of pattern to match each chunk.
It's an integer in range (0, 255), and the leading zeros are not allowed.
That results in five possible situations:

1 Chunk contains only one digit, from 0 to 9.

2 Chunk contains two digits. The first one could be from 1 to 9,
and the second one from 0 to 9.

3 Chunk contains three digits, and the first one is 1.
The second and the third ones could be from 0 to 9.

4 Chunk contains three digits, the first one is 2
and the second one is from 0 to 4.
Then the third one could be from 0 to 9.

5 Chunk contains three digits, the first one is 2, and the second one is 5.
Then the third one could be from 0 to 5.

Let's use pipe to create a regular expression that will match either case 1,
or case 2, ..., or case 5.

Time complexity: O(1) because the patterns to match have constant length.

Space complexity: O(1).
valid IPv4 address is at most 15 characters and IPv6 address is at most 39.
Input could be much longer, but the regex performance would still have
a bounded constant worst-case runtime to validate a candidate address.
*/

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddressUseRegex = function(IP) {
  const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
  const ipv6 = /^([\da-f]{1,4}:){8}$/i;
  return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither';
};

/*
Approach divide and conquer (Regex + split into Array + loop).

Intuition
Both IPv4 and IPv6 addresses are composed of several substrings
separated by certain delimiter, and each of the substrings
is of the same format.

IP string algorithm:
if contains 3 dots?
  validate as IPv4:
    if valid => return isValid Ipv4
    else invalid
if contains 7 colons?
  validate as IPv6:
    if valid => return isValid Ipv6
    else invalid
otherwise? return inValid

Therefore, intuitively, we could break down the address into chunks,
and then verify them one by one.
The address is valid if and only if each of the chunks is valid.
We can call this methodology divide and conquer.

For the IPv4 address, we split IP into four chunks by the delimiter .,
while for IPv6 address, we split IP into eight chunks by the delimiter :.

For each substring of "IPv4" address, we check if it is an integer between 0 - 255,
and there is no leading zeros.

For each substring of "IPv6" address, we check if it's a hexadecimal number
of length 1 - 4.

Complexity Analysis
Time complexity: O(N) because to count number of dots requires to parse the entire input string.
Space: O(1)
*/

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (IP === null || IP === undefined || IP.length === 0) return 'Neither';

  // indexOf returns the index of the first occurrence
  if (IP.indexOf('.') > 0) {
    return validIPv4(IP) ? 'IPv4' : 'Neither'
  } else {
    return validIPv6(IP) ? 'IPv6' : 'Neither';
  }
}

function validIPv4(IP) {
  const chunks = IP.split('.');
  if (chunks.length !== 4) return false;

  for (const chunk of chunks) {
    if (chunk.length === 0) return false;
    // each character of each field should contain only digit.
    // The [^0-9] expression is used to find any character that is NOT a digit.
    if (chunk.match(/[^0-9]/)) return false;

    if (chunk.length > 1 && chunk.charAt(0) === '0') return false;

    // check digit is within range [0, 255]
    if ((+chunk) > 255) return false;
  }
  return true
}

function validIPv6(IP) {
  const chunks = IP.split(':');
  if (chunks.length !== 8 ) return false;

  for (const chunk of chunks) {
    if (chunk.length === 0) return false;
    if (chunk.length > 4) return false;

    // check whether it is digit as well as character range from 'A' to 'F'(Hex)
    // hexdigits 0123456789abcdefABCDEF
    if (chunk.match(/[^0-9a-fA-F]/g)) return false;
  }
  return true;
}

export {
  validIPAddress,
  validIPAddressUseRegex
}
