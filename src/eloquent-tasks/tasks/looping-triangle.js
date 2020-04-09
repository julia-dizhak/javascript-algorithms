/**
  * Looping a triangle
  *   Write a loop that makes seven calls to console.log to output the following triangle:
  *   #
  *   ##
  *   ###
  *   ####
  *   #####
  *   ######
  *   #######
 */

 function loopingTriangle(len) {
   let str = ''; // todo manage different symbols
   for (let index = 0; index < len; index++) {
     //debugger
      str = str + '#';
     console.log(str)

   }
 }

 loopingTriangle(7)

 export { loopingTriangle }
