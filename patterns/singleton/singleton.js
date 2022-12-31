/*In this example, the Singleton class has a static getInstance method that creates a new instance of Singleton if it doesn't 
already exist, and returns the existing instance otherwise. The constructor of the Singleton class also checks if an instance 
already exists and throws an error if that is the case, in order to ensure that there is only one instance of Singleton.

Using this implementation, you can be sure that all references to the Singleton instance will use the same instance, 
which is the goal of the Singleton pattern.
 */
class Singleton {
  static instance;

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  constructor() {
    if (Singleton.instance) {
      throw new Error("Use Singleton.getInstance() instead of new.");
    }
    Singleton.instance = this;
  }
}

module.exports = Singleton;
