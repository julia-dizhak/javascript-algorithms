/**
  *   Looping a triangle
  *   Write a loop that makes seven calls to console.log to output the following triangle:
  *   #
  *   ##
  *   ###
  *   ####
  *   #####
  *   ######
  *   #######
 */
 function loopingTriangle(len, symbol='#') {
   for (let line = symbol; line.length < len + 1; line += symbol) {
     console.log(line)
   }
 }

 export { loopingTriangle }
