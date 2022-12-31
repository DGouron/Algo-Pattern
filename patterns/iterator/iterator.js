// Design pattern : Iterator
// Description : Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation
// (list, stack, tree, etc.).
// The Iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements.

function rangeIterator(start, end) {
  let current = start;
  return {
    next() {
      if (current < end) {
        const result = { value: current, done: false };
        current++;
        console.log(result);
        return result;
      }
      return { done: true, value: end };
    },
  };
}

module.exports = rangeIterator;
