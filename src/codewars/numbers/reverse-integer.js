const int = -42442;

const reverseInt = int => {
  const reverseStr = int.toString().split('').reverse().join('');

  return parseInt(reverseStr) * Math.sign(int);
} 

//console.log('reverseInt', reverseInt(int));
