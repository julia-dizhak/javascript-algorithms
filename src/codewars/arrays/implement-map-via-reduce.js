const arr = [1,2,3,4,5];
const mappingFunction = v => v + 1;

const mappedArray = arr.map((v,i) => v + i);
const mappedArray1 = arr.map(mappingFunction);
console.log('mappedArray', mappedArray);
console.log('mappedArray', mappedArray1);

const customMapping = (arr, mappingFunction) => {
  // val - iteration value
  return arr.reduce(
    (accumulator, value) => [...accumulator, mappingFunction(value)],
    []
  );
}
console.log('customMapping', customMapping(arr, mappingFunction));

