// functional programming
// Below approaches to filter out duplicates
const basket = ['one', 'two', 'two', 'three', 'one', 'one', 'three', 'four'];

/*
Use indexOf
The indexOf() method returns the first index at which a given element can be
found in the array, or -1 if it is not present.
*/
const basketWithoutDuplicates = basket.filter((item, index) => {
  return basket.indexOf(item) === index
});
//console.log('filter', basketWithoutDuplicates)

// Use reduce
const basketWithoutDuplicatesUseReduce = basket.reduce(
  (accumulator, value) => {
    return accumulator.includes(value) ? accumulator : [...accumulator, value]
  }, []
);

const basketWithoutDuplicatesUseReduce1 = basket.reduce(
  (accumulator, value) =>
    accumulator.includes(value) ? accumulator : [...accumulator, value],
  []
);

console.log('basketWithoutDuplicatesUseReduce', basketWithoutDuplicatesUseReduce);
console.log('basketWithoutDuplicatesUseReduce1', basketWithoutDuplicatesUseReduce1);

export {
  basketWithoutDuplicates
}
