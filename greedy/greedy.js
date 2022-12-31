/*Here is an example of a greedy algorithm in JavaScript that solves the knapsack problem. The knapsack problem consists of 
finding the optimal combination of items to include in a bag based on their weight and value. The greedy algorithm consists of always 
choosing the item with the highest weight-to-value ratio until the bag is full
*/
function knapsack(items, maxWeight) {
  // Sort items by decreasing weight-to-value ratio
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let weight = 0;
  let value = 0;

  // Add items to the bag as long as there is room
  for (const item of items) {
    if (weight + item.weight <= maxWeight) {
      weight += item.weight;
      value += item.value;
    } else {
      // If the bag is full, fill the rest with the relative value of the item
      const remainingWeight = maxWeight - weight;
      value += (item.value / item.weight) * remainingWeight;
      break;
    }
  }

  return value;
}

module.exports = knapsack;
