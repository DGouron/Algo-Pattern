/*In this example, the logExecutionTime decorator modifies the longRunningMethod method by wrapping its code in a new function that logs the 
execution time of the method using console.time and console.timeEnd. This allows for measuring the execution time of the method without having 
to modify its original code.

The decorator is applied to the method using the @logExecutionTime annotation, which tells JavaScript to pass the method to the logExecutionTime 
function when creating the Example object. The decorator then modifies the method's descriptor to replace its original function with a new function 
that adds the execution time measurement logic.

Decorators are a somewhat advanced feature of JavaScript and require a good understanding of how functions and objects are manipulated in JavaScript. 
They can be very useful for adding flexibility and modularity to your code, but should be used with caution to avoid making your code hard to
 understand or maintain.
 */
function logExecutionTime(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.time(key);
    const result = originalMethod.apply(this, args);
    console.timeEnd(key);
    return result;
  };

  return descriptor;
}

class Exemple {
  @logExecutionTime
  longRunningMethod() {
    // Some long-running code here
  }
}

module.exports = { Example, logExecutionTime };
