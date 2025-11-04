function mincost(arr) {
  if (arr.length <= 1) return 0; // No cost if only one rope

  // Create a min-heap using a simple array with sorting
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    // Pick the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let cost = first + second;
    totalCost += cost;

    // Insert the new rope (sum) back into array
    arr.push(cost);

    // Re-sort for next smallest pair
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports = mincost;
