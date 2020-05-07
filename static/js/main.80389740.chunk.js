(this["webpackJsonpjavascript-algorithms"]=this["webpackJsonpjavascript-algorithms"]||[]).push([[0],{22:function(e,t,a){e.exports=a(227)},220:function(e,t,a){},224:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),i=a.n(l),o=(a(27),a(5)),s=a(6),c=a(11),u=a(12);a(28);var m=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("a",{href:"/",className:"logo"},"Topics"),r.a.createElement("nav",null,r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},r.a.createElement("a",{href:"#number"},"Number"))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},r.a.createElement("a",{href:"#recursion"},"Recursion"))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},r.a.createElement("a",{href:"#array"},"Array"))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},"Sorting"),r.a.createElement("ul",{className:"subList"},r.a.createElement("li",null,r.a.createElement("a",{href:"#bubble-sort"},"Bubble sort")),r.a.createElement("li",null,r.a.createElement("a",{href:"#selection-sort"},"Selection sort")),r.a.createElement("li",null,r.a.createElement("a",{href:"#insertion-sort"},"Insertion sort")),r.a.createElement("li",null,r.a.createElement("a",{href:"#merge-sort"},"Merge sort")),r.a.createElement("li",null,r.a.createElement("a",{href:"#quick-sort"},"Quick sort")))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},"String Manipulation"),r.a.createElement("ul",{className:"subList"},r.a.createElement("li",null,r.a.createElement("a",{href:"#define-anagrams"},"Define anagrams")),r.a.createElement("li",null,r.a.createElement("a",{href:"#making-anagrams"},"Making anagrams")))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},"Greedy Algorithms"),r.a.createElement("ul",{className:"subList"},r.a.createElement("li",null,r.a.createElement("a",{href:"#greedy-min-absolute-difference"},"Minimum absolute difference")),r.a.createElement("li",null,r.a.createElement("a",{href:"#greedy-luck-balance"},"Luck balance")))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},"Search"),r.a.createElement("ul",{className:"subList"},r.a.createElement("li",null,r.a.createElement("a",{href:"#is-find-index"},"Linear search")),r.a.createElement("li",null,r.a.createElement("a",{href:"#binary-search"},"Binary search")),r.a.createElement("li",null,r.a.createElement("a",{href:"#search-balanced-sum"},"Balanced Sum")),r.a.createElement("li",null,r.a.createElement("a",{href:"#search-two-sum"},"Two Sum")))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},r.a.createElement("a",{href:"#binary-search-tree"},"Tree")),r.a.createElement("ul",{className:"subList"},r.a.createElement("li",null,r.a.createElement("a",{href:"#binary-search-tree-operations"},"Binary Search Tree")))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},"Stack and Queue"),r.a.createElement("ul",{className:"subList"},r.a.createElement("li",null,r.a.createElement("a",{href:"#stack-using-string"},"Stack implementation using String")),r.a.createElement("li",null,r.a.createElement("a",{href:"#stack-using-object"},"Stack implementation using object")),r.a.createElement("li",null,r.a.createElement("a",{href:"#queue-using-object"},"Queue implementation using object")))),r.a.createElement("li",{className:"item"},r.a.createElement("header",{className:"title"},"Tasks from Eloquent JavaScript"),r.a.createElement("ul",{className:"subList"},r.a.createElement("li",null,r.a.createElement("a",{href:"#eloquent-looping-triangle"},"Looping a triangle")),r.a.createElement("li",null,r.a.createElement("a",{href:"#eloquent-fizz-buzz"},"Fizz buzz")),r.a.createElement("li",null,r.a.createElement("a",{href:"#eloquent-chessboard"},"Chessboard")),r.a.createElement("li",null,r.a.createElement("a",{href:"#eloquent-is-even"},"Recursion")))))))},h=a(230),d=a(228),f=a(229);function g(e){var t=e.id,a=e.question,n=e.solution,l=e.complexity,i=e.time,o=e.space,s=e.code,c=e.secondCode;return r.a.createElement("details",{className:"details",id:t,"aria-expanded":"false"},r.a.createElement("summary",{role:"button","aria-controls":"content"},r.a.createElement("span",{className:"question"},"Question:\xa0",r.a.createElement("strong",null,a))),r.a.createElement("div",{"aria-hidden":"true"},r.a.createElement("h3",{className:"title"},"Solution:"),r.a.createElement("p",{className:"solutionDesc"},n),r.a.createElement("div",{className:"complexity"},l&&r.a.createElement("div",{className:"complexityDesc"},l),i&&r.a.createElement("p",{className:"runtime"},"time complexity is ",i),o&&r.a.createElement("p",null,"space complexity is ",o)),s&&r.a.createElement(h.a,{language:"javascript",style:d.a},s),c&&r.a.createElement(h.a,{language:"javascript",style:f.a},c)))}function E(e){var t,a=e.length;do{t=!1;for(var n=0;n<a-1;n++)if(e[n]>e[n+1]){var r=[e[n+1],e[n]];e[n]=r[0],e[n+1]=r[1],t=!0}}while(t);return e}var p=a(2),v=a(3);function b(e){var t=e.length;if(t<=1)return e;var a,n=e[t-1],r=[],l=[],i=Object(v.a)(e.slice(0,t-1));try{for(i.s();!(a=i.n()).done;){var o=a.value;o<n?r.push(o):l.push(o)}}catch(s){i.e(s)}finally{i.f()}return[].concat(Object(p.a)(b(r)),[n],Object(p.a)(b(l)))}function y(e){for(var t=e.length,a=0;a<t-1;a++){for(var n=a,r=a+1;r<t;r++)e[n]>e[r]&&(n=r);var l=e[a];e[a]=e[n],e[n]=l}return e}function S(e,t){for(var a=[];e.length&&t.length;)e[0]<t[0]?(a.push(e[0]),e.shift()):(a.push(t[0]),t.shift());return a.concat(e,t)}function w(e){if(e.length<=1)return e;var t=Math.floor(e.length/2),a=e.slice(0,t),n=e.slice(t);return S(w(a),w(n))}function N(e){for(var t=e.length,a=1;a<t;a++){for(var n=e[a],r=a-1;r>=0&&e[r]>n;)e[r+1]=e[r],r-=1;e[r+1]=n}return e}function O(e){var t=e.length,a=b(e);if(0===t)return 0;var n=0;return t%2===0?(a[n=t/2]+a[n-1])/2:a[n=Math.floor(t/2)]}var k=function(){return r.a.createElement("div",{className:"sorting"},r.a.createElement("h2",null,"Sorting"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g,{id:"bubble-sort",question:"Bubble sort: bubble up the biggest element to the right most position",solution:"is a method for sorting arrays by comparing each array element to the element behind it",complexity:"Unfortunately bubble sort is pretty slow",time:"(n-1) * (n-1) ... = n2 - 2n + 1 = O(n^2), \u03a9(n^2)",space:"O(1)",code:E.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"selection-sort",question:"Selection sort: move the smallest element to the very left position",solution:"",complexity:"n + (n-1) + (n-2) + ... + 1 = n*(n+1)/2 = (n^2 + n)/2 = O(n^2)",time:"O(n^2) quadratic in all cases, \u03a9(n^2)",space:"",code:y.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"insertion-sort",question:"Insertion sort: compare items on its left and shift if needed",solution:"\n              Insertion sort is used when number of elements is small.\n              It can also be useful when input array is almost sorted,\n              only few elements are misplaced in complete big array.\n            ",complexity:"in worst cases number of shifts over that number to the beginning of the array = 1 + 2 + ... + (n-1) = n(n-1)/2 = n^2/2 = n^2",time:"O(n^2)",space:"O(1)",code:N.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"merge-sort",question:"Merge sort",solution:"we could magically sort the left half and sort the right half and repeat it again",complexity:"It always give us O(n log n) runtime. There is no case than array looks really funky.",time:"O(n log n)",space:"The downside is merging 2 arrays together requires extra space - O(n) space",code:w.toString(),secondCode:S.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"quick-sort",question:"Quick sort: pick a pivot",solution:"first pick a random number - pivot",complexity:"Quick sort\u2019s worst case is O(n^2) (for example, if list was already sorted) but that can be avoided if we pick random pivot point (choose middle one)",time:"O(n log(n))",space:"O(log (n))",code:b.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"find-median",question:"Find a median",solution:"The median of a list of numbers is essentially it's middle element after sorting. The same number of elements occur after it as before.",time:"",space:"",code:O.toString()}))))};function q(e,t){if("string"!==typeof e||"string"!==typeof t)throw new Error("defineAnagrams requires two strings to be passed");if(""===e||""===t)return"empty strings";var a=e.length,n=t.length,r={};if(a!==n)return!1;if(a===n){for(var l=e.replace(/[^A-Za-z]+/g,"").toLowerCase(),i=t.replace(/[^A-Za-z]+/g,"").toLowerCase(),o=0;o<a;o++){var s=l.charCodeAt(o)-97;r[s]=(r[s]||0)+1}for(var c=0;c<n;c++){var u=i.charCodeAt(c)-97;if(!r[u])return!1;r[u]--}return Object.values(r).every((function(e){return 0===e}))}}function z(e,t){for(var a=e.length,n=t.length,r={},l={},i=0;i<a;i++)r[e[i]]=r[e[i]]?r[e[i]]+1:1;for(var o=0;o<n;o++)l[t[o]]=l[t[o]]?l[t[o]]+1:1;for(var s=0;s<a;s++)l.hasOwnProperty(e[s])&&(l[e[s]]--,0===l[e[s]]&&delete l[e[s]]);for(var c=0;c<n;c++)r.hasOwnProperty(t[c])&&(r[t[c]]--,0===r[t[c]]&&delete r[t[c]]);var u=Object.values(r),m=Object.values(l);return(u.length>0&&u.reduce((function(e,t){return e+t}))||0)+(m.length>0&&m.reduce((function(e,t){return e+t}))||0)}function j(e){for(var t=e.split(""),a=t.length-1,n=0,r=0;r<a;r++)t[r]===t[r+1]&&n++;return n}var x=function(e,t){return e.filter((function(e){return e===t})).length};function C(e){for(var t=e.split(""),a=t.length,n={},r=0;r<a;r++){var l=t[r];n[l]=(n[l]||0)+1}var i=Object.values(n),o=Math.max.apply(Math,Object(p.a)(i)),s=Math.min.apply(Math,Object(p.a)(i)),c=x(i,o),u=x(i,s),m=!1;return(o===s||o-s===1&&1===c||1===s&&1===u&&2===Object(p.a)(new Set(i)).length)&&(m=!0),!0===m?"Yes":"No"}var B=function(e,t){for(var a=0,n=0;n<t.length;n++)for(var r=0;r<e.length;r++)if(e.charAt(r)===t.charAt(n)){a++;break}return a},A=function(e,t){var a=0;0===(t.length||e.length)&&(a=0);for(var n=e.split(""),r=t.split(""),l={},i=0;i<t.length;i++){var o=r[i];l[o]=l[o]?l[o]+1:1}for(var s=0;s<e.length;s++){var c=n[s];l[c]&&(a+=l[c])}return a},D=function(e){var t,a={},n=Object(v.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;a[r]=(a[r]||0)+1}}catch(i){n.e(i)}finally{n.f()}for(var l=0;l<e.length;l++){if(1===a[e[l]])return l}return-1};function M(){return r.a.createElement("div",{className:"sorting"},r.a.createElement("h2",null,"String Manipulation"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("details",{className:"details",id:"define-anagrams","aria-expanded":"false","aria-labelledby":"label"},r.a.createElement("summary",{role:"button","aria-controls":"content"},r.a.createElement("span",{className:"question"},"Question:\xa0",r.a.createElement("strong",null,"define anagrams"))),r.a.createElement("div",{"aria-hidden":"true"},r.a.createElement("h3",{className:"title"},"Solution:"),r.a.createElement("p",null,"Anagrams are 2 words meaning anagrams with the same characters but in different order (same exact characters but order doesn\u2019t matter)."),r.a.createElement("ul",{className:"unorderedList"},r.a.createElement("li",null,"Define hash"),r.a.createElement("li",null,"Increase the count for the first string."),r.a.createElement("li",null,"Decrease the count for the second string. If a letter in string 2 is not found in the hash then return false."),r.a.createElement("li",null,"else return true")),r.a.createElement(h.a,{language:"javascript",style:d.a},q.toString())))),r.a.createElement("li",null,r.a.createElement("details",{className:"details",id:"making-anagrams","aria-expanded":"false","aria-labelledby":"label"},r.a.createElement("summary",{role:"button","aria-controls":"content"},r.a.createElement("span",{className:"question"},"Question:\xa0",r.a.createElement("strong",null,"making anagrams"))),r.a.createElement("div",{"aria-hidden":"true"},r.a.createElement("h3",{className:"title"},"Solution:"),r.a.createElement("p",null,"Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings."),r.a.createElement(h.a,{language:"javascript",style:d.a},z.toString())))),r.a.createElement("li",null,r.a.createElement("details",{className:"details",id:"string-manipulation-tasks","aria-expanded":"false","aria-labelledby":"label"},r.a.createElement("summary",{role:"button","aria-controls":"content"},"Different tasks related to String Manipulation"),r.a.createElement(g,{id:"alternating-characters",question:"Alternating characters",solution:"\n                  Given two strings, a and b, that may or may not be of the same length,\n                  determine the minimum number of character deletions required to make a and b anagrams.\n                  Any characters can be deleted from either of the strings.\n                ",code:j.toString()}),r.a.createElement(g,{id:"sherlock-valid-string",question:"Sherlock valid string",solution:"\n                  Sherlock considers a string to be valid if all characters of the string\n                  appear the same number of times and one symbol could be deleted.\n                ",code:C.toString()}),r.a.createElement(g,{id:"numJewelsInStones",question:"Number Jewels in stones",code:A.toString(),secondCode:B.toString()}),r.a.createElement(g,{id:"firstUniqueChar",question:"First Unique Character in a String",complexity:"\n                  The best possible solution here could be of a linear time\n                  because to ensure that the character is unique you have to check the whole string anyway.\n                ",time:"O(n)",space:"O(n)",code:D.toString()})))))}function T(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#",a=t;a.length<e+1;a+=t)console.log("line",a)}var L=function(){for(var e=1;e<=100;e++){var t="";e%3===0&&(t+="Fizz"),e%5===0&&(t+="Buzz"),console.log(t||e)}};function I(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t="",a=0;a<e;a++){for(var n=0;n<e;n++)t+=(n+a)%2===0?" ":"#";t+="\n"}console.log(t)}function Q(e){return e%2===0||1!==e&&Q(e<0?-e:e-2)}function F(){return r.a.createElement("div",{className:"sorting"},r.a.createElement("h2",null,"Code Sandbox ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://eloquentjavascript.net/"},"Eloquent JavaScript")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g,{id:"eloquent-looping-triangle",question:"Looping triangle",solution:"Write a loop that makes seven calls to console.log to output the triangle",code:T.toString()})),r.a.createElement("li",null,r.a.createElement("details",{className:"details",id:"eloquent-fizz-buzz","aria-expanded":"false","aria-labelledby":"label"},r.a.createElement("summary",{role:"button","aria-controls":"content"},r.a.createElement("span",{className:"question"},"Question:\xa0",r.a.createElement("strong",null,"fizzbuzz"),r.a.createElement("p",null,'Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5'))),r.a.createElement("div",{"aria-hidden":"true"},r.a.createElement("h3",{className:"title"},"Solution:"),r.a.createElement("span",{className:"complexity"},"runtime - O(n)"),r.a.createElement(h.a,{language:"javascript",style:d.a},L.toString())))),r.a.createElement("li",null,r.a.createElement("details",{className:"details",id:"eloquent-fizz-buzz","aria-expanded":"false","aria-labelledby":"label"},r.a.createElement("summary",{role:"button","aria-controls":"content"},r.a.createElement("span",{className:"question"},"Question:\xa0",r.a.createElement("strong",null,"Chessboard"),r.a.createElement("p",null,'Write a program that creates a string that represents an 8\xd78 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.'))),r.a.createElement("div",{"aria-hidden":"true"},r.a.createElement("h3",{className:"title"},"Solution:"),r.a.createElement("span",{className:"complexity"},"complexity - n2"),r.a.createElement(h.a,{language:"javascript",style:d.a},I.toString())))),r.a.createElement("li",null,r.a.createElement(g,{id:"eloquent-is-even",question:"Define whether a positive whole number is even or odd (using recursion): Zero is even, One is odd, for any other number N, its evenness is the same as N - 2.",code:Q.toString()}))))}function R(e){for(var t,a=e.length,n=e.sort((function(e,t){return e-t})),r=Math.abs(n[0]-n[1]),l=2;l<a;l++)(t=Math.abs(n[l]-n[l-1]))<r&&(r=t);return r}var G=a(20);function J(e,t){for(var a=t.slice().sort((function(e,t){return t[0]-e[0]})),n=a.length,r=0,l=e,i=0;i<n;i++){var o=Object(G.a)(a[i],2),s=o[0];o[1]?(r+=l>0?s:-s,l-=1):r+=s}return r}function W(){return r.a.createElement("div",{className:"sorting"},r.a.createElement("h2",null,"Greedy Algorithms"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g,{id:"greedy-min-absolute-difference",question:"Minimum absolute difference in an array",solution:"We define the absolute difference between two elements a[i] and a[j] (where i!=j), to be the absolute value of a[i] - a[j].",code:R.toString()})),r.a.createElement("li",null,r.a.createElement("details",{className:"details",id:"greedy-luck-balance","aria-expanded":"false","aria-labelledby":"label"},r.a.createElement("summary",{role:"button","aria-controls":"content"},r.a.createElement("span",{className:"question"},"Question:\xa0",r.a.createElement("strong",null,"Luck Balance"))),r.a.createElement("div",{"aria-hidden":"true"},r.a.createElement("h3",{className:"title"},"Solution:"),r.a.createElement(h.a,{language:"javascript",style:d.a},J.toString()))))))}function Y(e,t){void 0===t&&(t=2);for(var a=1,n=0;n<t;n++)a*=e;return a}var P=function(e,t){return[e+=t-=e,t=e-t]},U=function(e,t){var a=e;return[e=t,t=a]},Z=function(e){for(var t=1,a=e;a;)e^=t,t<<=1,a>>=1;return e},V=function(e){var t,a=e.toString(2),n="",r=Object(v.a)(a);try{for(r.s();!(t=r.n()).done;){n+=+!(t.value-0)}}catch(l){r.e(l)}finally{r.f()}return parseInt(n,2)};function $(){return r.a.createElement("div",{className:"number"},r.a.createElement("h2",null,"Number"),r.a.createElement("ul",{id:"number"},r.a.createElement("li",null,r.a.createElement(g,{id:"number-power",question:"Write a power function",code:Y.toString()}),r.a.createElement(g,{id:"number-swap",question:"Swap: 2 variables",time:"O(1)",code:P.toString(),secondCode:U.toString()}),r.a.createElement(g,{id:"number-complement",question:"Complement of Base 10 Integer",solution:"The complement strategy is to flip the bits of its binary representation",time:"O(1)",space:"O(1)",code:Z.toString(),secondCode:V.toString()}))))}function H(e){return e<0?-1:0===e?1:e*H(e-1)}function K(){return r.a.createElement("div",{className:"number"},r.a.createElement("h2",null,"Recursion"),r.a.createElement("ul",{id:"recursion"},r.a.createElement("li",null,r.a.createElement(g,{id:"factorial",question:"Factorial using recursion",time:"The time complexity of recursive factorial is O(n)",space:"As there is no extra space taken during the recursive calls, the space complexity is O(n)",code:H.toString()}))))}var X=function(e,t){for(var a=0,n=0,r=[],l=e.length,i=t.length;a<l&&n<i;)e[a]<t[n]?(r.push(e[a]),a++):(r.push(t[n]),n++);return a<l&&(r=[].concat(Object(p.a)(r),Object(p.a)(e.slice(a)))),n<i&&(r=[].concat(Object(p.a)(r),Object(p.a)(t.slice(n)))),r};function _(e){for(var t=e.length,a=0,n=0;n<t;n++){var r=e[n+1],l=e[n+2];1===e[n]?n+=1:0===r&&0===l?(a+=2,n+=2):(a+=1,n+=1)}return a}function ee(){return r.a.createElement("div",{className:"sorting"},r.a.createElement("h2",null,"Array"),r.a.createElement("ul",{id:"array"},r.a.createElement("li",null,r.a.createElement(g,{id:"array-jump-on-clouds",question:"Jump on clouds",solution:"",code:_.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"merge-two-arrays",question:"merge two sorted arrays (mergeSort algorithm)",solution:"Below is just an implementation of mergeSort algorithm",time:"runtime is O(n log n)",space:"",code:X.toString()}))))}function te(e,t){for(var a=e.length,n=0;n<a;n++){return e[n]===t?n:void 0}}function ae(e,t){for(var a=0,n=(e=e.sort((function(e,t){return e-t}))).length-1;a<=n;){var r=Math.floor(a+(n-a)/2);if(e[r]===t)return r;e[r]<t?a=r+1:n=r-1}return-1}function ne(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length-1,r=Math.floor(a+(n-a)/2);switch(!0){case e[r]===t:return r;case n-a===0:return-1;case e[r]<t:return ne(e,t,r+1,n);case e[r]>t:return ne(e,t,a,r);default:console.log("Sorry, we are out of expressions")}}function re(e){var t=e.length;if(t<=0)return"YES";for(var a=0,n=t-1,r=0;a!==n;)r>=0?(r-=e[n],n--):(r+=e[a],a++);return 0===r?"YES":"NO"}function le(e,t){for(var a=e.length,n={},r=0;r<a;r++){var l=e[r],i=n[t-l];if(null!=i)return[i,r];n[l]=r}return[]}var ie=function(e){return function(t){for(var a=1,n=t;a<n;){var r=a+(n-a)/2;e(r)?n=r:a=r+1}}};function oe(){return r.a.createElement("div",{className:"number"},r.a.createElement("h2",null,"Search"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g,{id:"is-find-index",question:"Linear search: find an index of element in array",solution:"",complexity:"The worst case performance scenario for a linear search is that it needs to loop through the entire collection.",time:"O(n)",spaceComplexity:"O(1)",code:te.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"binary-search",question:"Binary search with loop while and recursion",solution:"left + right could overflow, correct mid = left + (right - left)/2",complexity:"",time:"O(log n)",space:"O(1)",code:ae.toString(),secondCode:ne.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"search-balanced-sum",question:"Balanced sum",solution:"challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right",complexity:"",time:"O(n)",code:re.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"search-two-sum",question:"Two sum using hash",solution:"\n              Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n              You may assume that each input has exactly one solution.\n              And you may not use the same element twice.\n            ",complexity:"",time:"O(n)",space:"O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements",code:le.toString()})),r.a.createElement("li",null,r.a.createElement("details",{className:"details",id:"searching-tasks","aria-expanded":"false","aria-labelledby":"label"},r.a.createElement("summary",{role:"button","aria-controls":"content"},"Different tasks related to Binary search"),r.a.createElement(g,{id:"first-bad-version",question:"First Bad version",solution:"\n                  Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,\n                  which causes all the following ones to be bad.\n                ",time:"O(log n)",space:"O(1)",code:ie.toString()})))))}var se=function e(t){Object(o.a)(this,e),this.value=t,this.left=null,this.right=null},ce=function(){function e(t){Object(o.a)(this,e),this.root=new se(t),this.count=0}return Object(s.a)(e,[{key:"size",value:function(){return this.count}},{key:"insert",value:function(e){this.count++;var t=new se(e);void 0===this.root.value&&(this.root=t);!function a(n){if(e<n.value)null===n.left?n.left=t:a(n.left);else{if(!(e>n.value))return null;null===n.right?n.right=t:a(n.right)}}(this.root)}},{key:"contains",value:function(e){for(var t=this.root;t;){if(e===t.value)return!0;t=e<t.value?t.left:t.right}return!1}},{key:"height",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;if(null===e)return-1;if(null===e.left&&null===e.right)return 0;if(null===e.left)return this.height(e.right)+1;if(null===e.right)return this.height(e.left)+1;var t=this.height(e.left),a=this.height(e.right);return Math.max(t,a)+1}},{key:"lowestCommonAncestor",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.root;return a.value>e&&a.value>t?this.lowestCommonAncestor(e,t,a.left):a.value<e&&a.value<t?this.lowestCommonAncestor(e,t,a.right):a}}]),e}(),ue=new ce(4);function me(){return r.a.createElement("div",{className:"number"},r.a.createElement("h2",null,"Trees"),r.a.createElement("ul",{id:"binary-search-tree"},r.a.createElement("li",null,r.a.createElement(g,{id:"binary-search-tree-operations",question:"Binary Search Tree: .insert, .contains, height, lowest common ancestor",solution:"",complexity:"\n                Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case,\n                and linear time in the worst case.\n                Why is this? Each of those basic operations requires us to find an item in the tree\n                and because of the tree structure at each parent node we are branching left or right\n                and effectively excluding half the size of the remaining tree.\n                This makes the search proportional to the logarithm of the number of nodes in the tree,\n                which creates logarithmic time for these operations in the average case.\n              ",time:"O(log(n)) in the average case, linear - in worst cases",space:"",code:ce.toString()}))))}ue.insert(2),ue.insert(3),ue.insert(1),ue.insert(7),ue.insert(6),console.log("tree",ue),ue.lowestCommonAncestor(2,7),console.log("lca",ue.lowestCommonAncestor(2,7));var he=function(){this.storage=""};he.prototype.push=function(e){this.storage=this.storage.concat("***",e)},he.prototype.pop=function(){var e=this.storage.lastIndexOf("***"),t=this.storage.slice(e+3);return this.storage=this.storage.substr(0,e),t},he.prototype.size=function(){return this.storage.length};var de=new he;function fe(e){this.capacity=e||1/0,this.storage={},this.count=0}de.push("carrot"),de.push("eggs"),de.push("coffee"),de.pop(),de.size(),fe.prototype.push=function(e){return this.count<this.capacity?(this.storage[this.count++]=e,this.count):"Max capacity already reached. Remove element before adding a new one."},fe.prototype.pop=function(){if(0===this.count)return"No element inside the stack. Add element before popping.";var e=this.storage[this.count--];return delete this.storage[this.count],this.count<0&&(this.count=0),e},fe.prototype.count=function(){return this.count};var ge=new fe;function Ee(e){this.capacity=e||1/0,this.storage={},this.head=0,this.tail=0}function pe(){return r.a.createElement("div",{className:"number"},r.a.createElement("h2",null,"Stack and Queue"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g,{id:"stack-using-string",question:"Stack implementation using string",code:he.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"stack-using-object",question:"Stack implementation using object",code:fe.toString()})),r.a.createElement("li",null,r.a.createElement(g,{id:"queue-using-object",question:"Queue implementation using object",code:Ee.toString()}))))}ge.push("a"),ge.push("b"),ge.push("c"),Ee.prototype.count=function(){return this.tail-this.head},Ee.prototype.enqueue=function(e){return this.count()<this.capacity?(this.storage[this.tail++]=e,this.count()):"Max capacity already reached. Remove element before adding a new one."},Ee.prototype.dequeue=function(){var e=this.storage[this.head];return delete this.storage[this.head],this.head<this.tail&&this.head++,e};a(220);var ve=function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"wrapper"},r.a.createElement($,null),r.a.createElement(K,null),r.a.createElement(ee,null),r.a.createElement(k,null),r.a.createElement(M,null),r.a.createElement(W,null),r.a.createElement(oe,null),r.a.createElement(me,null),r.a.createElement(pe,null),r.a.createElement(F,null)))},be=a(8),ye=a(21),Se=(a(224),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=window.innerWidth;return n.state={sideBarSize:n.getSize(r),sideBarGrowing:!1},n.handleDrag=n.handleDrag.bind(Object(be.a)(n)),n.onDragFinished=n.onDragFinished.bind(Object(be.a)(n)),n.onResizerDoubleClick=n.onResizerDoubleClick.bind(Object(be.a)(n)),n}return Object(s.a)(a,[{key:"getSize",value:function(e){return e>=767?250:67}},{key:"handleDrag",value:function(e){e!==this.state.sideBarSize&&this.setState({sideBarSize:e,sideBarGrowing:this.state.sideBarSize<e})}},{key:"onDragFinished",value:function(){this.setState({sideBarSize:this.state.sideBarGrowing?250:67})}},{key:"onResizerDoubleClick",value:function(e){this.setState({sideBarSize:67===this.state.sideBarSize?250:67})}},{key:"render",value:function(){var e=this.state.sideBarSize,t=this.props.children;return r.a.createElement(ye.a,{className:e<158.5?"sidebarShortVersion":null,onChange:this.handleDrag,onDragFinished:this.onDragFinished,onResizerDoubleClick:this.onResizerDoubleClick,resizerStyle:{width:"0"},split:"vertical",minSize:67,maxSize:250,size:e},t)}}]),a}(n.Component));a(225),a(226);function we(){var e=location.hash.substring(1);if(e)var t=document.getElementById(e);t&&"details"===t.tagName.toLowerCase()&&(!0===t.open?t.open=!1:t.open=!0)}var Ne=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("hashchange",we)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Se,null,r.a.createElement(m,{className:"sidebar"}),r.a.createElement("div",{className:"rightPart"},r.a.createElement("header",{className:"App-header"},"Computer Science Algorithms in JavaScript"),r.a.createElement(ve,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,a){},28:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.80389740.chunk.js.map