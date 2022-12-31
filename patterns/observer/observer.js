/*
In this example, the Subject class represents the observed object and the Observer class represents the observer object. 
When an Observer object subscribes to a Subject object, it is added to a list of observers of Subject. 
When Subject changes state, it calls the notify method to notify all of its observers. Observers can subscribe or unsubscribe 
at any time using the subscribe and unsubscribe methods.

In this example, when the notify method is called, the observers receive the notification and display a message indicating that 
they have received the data. You can imagine that this data could be used to update the user interface or to perform other actions.
 */

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received data: ${data}`);
  }
}

module.exports = { Subject, Observer };
