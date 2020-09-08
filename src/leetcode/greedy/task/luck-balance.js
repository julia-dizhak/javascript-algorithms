/**
 * More description on hackerrunk greedy algorithms
 * The description would be clearer if it read "L is the amount of luck
 * that can be gained by losing the contest."
 * She believes that luck is spent on wins and earned from losses.
*/
function luckBalance(k, contests) {
  // sort descending, don't modify the original array
  const arr = contests
    .slice()
    .sort((a, b) => b[0] - a[0]);

  const len = arr.length;
  let luck = 0,
    lost = k;

  for (let i = 0; i < len; i++) {
      const [value, important] = arr[i];
      // increment if lost, decrement if won
      if (important) {
          luck += lost > 0 ? value : -value;
          lost -= 1;
          continue;
      }
      // non-important are always lost
      luck += value;
  }

  return luck;
}

export { luckBalance }
