function getAllSubstr(str) {
  const n = str.length;
  if (n === 1) return str;

  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j <= n; j++) {
      result.push(str.slice(i,j))
    }
  }

  return result;
}

console.log(getAllSubstr('some'));

export {
  getAllSubstr
}
