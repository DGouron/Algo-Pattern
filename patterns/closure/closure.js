/* A closure in JavaScript is a function that remembers its environment when it was created, even if that environment is no longer 
accessible from the outside. Closures are often used to create functions that have access to private variables or to capture variables 
that are defined in a different context.*/
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

module.exports = createCounter;
