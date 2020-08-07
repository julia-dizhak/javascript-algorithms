/**
 * greedy hackerrunk medium level
 *
 */
function getMinimumCost(k, c) {
  const len = c.length;

   // Create a 2D array holding purchase order for each friend
  let purchases = new Array(k).fill(0).map(x => []);


  // Sort flowers from most expensive to cheapest
  c = c.sort((a,b) => b - a);

  // Distribute purchases evenly between friends
  for (let i = 0; i < len; i++) {
    purchases[i%k].push(c[i])
  }

  // Calculate and return sum of all purchases
  return purchases.reduce((totalCost, friendTotal) => {
    return totalCost + friendTotal.reduce((total, cost, i) => {
      return total + (i+1) * cost
    }, 0)
  }, 0)
}

export { getMinimumCost }

