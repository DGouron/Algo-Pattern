const debouncedAction = require('./debounce');

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

test('debouncedAction should delay execution', () => {
  const myAction = jest.fn();
  debouncedAction(myAction);
  setTimeout(() => {
    expect(myAction).not.toHaveBeenCalled();
    jest.runOnlyPendingTimers();
    expect(myAction).toHaveBeenCalled();
  }, 100);
});

test('debouncedAction should debounce multiple calls', () => {
  const myAction = jest.fn();
  debouncedAction(myAction);
  debouncedAction(myAction);
  debouncedAction(myAction);
  setTimeout(() => {
    expect(myAction).not.toHaveBeenCalled();
    jest.runOnlyPendingTimers();
    expect(myAction).toHaveBeenCalledTimes(1);
  }, 100);
});
