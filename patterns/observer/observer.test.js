const { Subject, Observer } = require("./observer");

test("Observer pattern works correctly", () => {
  const subject = new Subject();
  const observer1 = new Observer("Observer 1");
  const observer2 = new Observer("Observer 2");

  subject.subscribe(observer1);
  subject.subscribe(observer2);

  subject.notify("some data");
  // Expect observer1 and observer2 to have received the data

  subject.unsubscribe(observer1);
  subject.notify("some more data");
  // Expect only observer2 to have received the data
});
