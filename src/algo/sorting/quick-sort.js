function quickSort(array) {
  const len = array.length;

  if (len <= 1) {
    return array;
  }

  const pivot = array[len - 1];
  const leftArr = [];
  const rightArr = [];

  // exclude last element, because it's our pivot
  for (const el of array.slice(0, len - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el)
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const data = [
  ['Smith', 20],
  ['Jones', 15],
  ['Jones', 20]
];
const dataSorted = [
  ['Jones', 20],
  ['Smith', 20],
  ['Jones', 15]
];

// amy 100
// david 100
// heraldo 50
// aakansha 75
// aleksa 150

// aleksa 150
// amy 100
// david 100
// aakansha 75
// heraldo 50

function comparators(data) {
  const len = data.length;
  let scores = [];

  for (let index = 0; index < len - 1; index++) {
    const element = data[index];
    const score = element[1];
    scores.push(score)
    debugger;
  }

  const sortedScores = quickSort(scores)
}

comparators(data)
export { quickSort };


