const findPaths = require('./depthFirstSearch');

describe('findPaths', () => {
  test('returns all root-to-leaf paths in a ternary tree', () => {
    // Build a sample ternary tree
    const root = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          middle: null,
          right: null,
        },
        middle: null,
        right: {
          val: 5,
          left: null,
          middle: null,
          right: null,
        },
      },
      middle: {
        val: 3,
        left: {
          val: 6,
          left: null,
          middle: null,
          right: null,
        },
        middle: {
          val: 7,
          left: null,
          middle: null,
          right: null,
        },
        right: null,
      },
      right: null,
    };

    // Call the function and check the result
    const expected = [[1, 2, 4], [1, 2, 5], [1, 3, 6], [1, 3, 7]];
    expect(findPaths(root)).toEqual(expected);
  });
});
