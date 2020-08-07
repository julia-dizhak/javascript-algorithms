/**
 * Sherlock considers a string to be valid if all characters of the string
 * appear the same number of times.
 *
*/
export const count = (list, value) => {
  return list.filter((x) => x === value).length
}

function isValid(s) {
  const arr = s.split('');
  const len = arr.length;
  let letters = {};

  for (let i = 0; i < len; i++) {
    const element = arr[i];
    letters[element] = (letters[element] || 0) + 1;
  }

  const values = Object.values(letters);
  const valMax = Math.max(...values)
  const valMin = Math.min(...values);

  const countMax = count(values, valMax);
  const countMin = count(values, valMin);
  let isValid = false;

  if (
    (valMax === valMin) ||
    (valMax - valMin === 1 && countMax === 1) ||
    (valMin === 1 && countMin === 1 && [...new Set(values)].length === 2)
  ) {
    isValid = true
  }

  return isValid === true ? 'Yes' : 'No';
}

function isValidVariant1(s) {
  let h = {};
  let res = "Yes";
  let arr = [];
  let count = 0;

  for (let char of s) {
    h[char] = h[char]+1 || 1; // if any char appear more than once, value will increment;
  }

  Object.values(h).map(v => {
    arr.push(v);
    // if any value is different than first value;
    if ( v !== arr[0] ){
      count++;  // count how many values are different
      if( (v > arr[0]) && (v-1 !== arr[0]) ){
        res = "No";
      } else if ( (v < arr[0]) &&  (v !== (arr[0]-1)) ){
        console.log(v, arr[0])
        res = "Yes"
      }
    }
    return res = "No";
  })

  if (count > 1) res = "NO"; // if more than one values are different
  if (count === 1) res = "YES"; // if only one value is different
  return res;
}

export { isValid, isValidVariant1 }

