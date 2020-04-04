export const data = [
  ['Smith', 20],
  ['Jones', 15],
  ['Jones', 20]
];
export const dataSorted = [
  ['Jones', 20],
  ['Smith', 20],
  ['Jones', 15]
];

function comparators(data) {
  if (data.length <= 1) return data;
  
  data.sort((a, b) => {
    const nameA = a[0].toUpperCase();
    const nameB = b[0].toUpperCase();
    const scoreA = a[1];
    const scoreB = b[1];

    if ( scoreA === scoreB) {
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }

    return scoreB - scoreA;
  })

  return data
}

export { comparators }
