const sortByFirstName = require("./quickSort");

describe("sortByFirstName", () => {
  it("should sort the array of objects by their firstName property", () => {
    const arr = [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Jane", lastName: "Doe" },
      { firstName: "Adam", lastName: "Smith" },
      { firstName: "Eve", lastName: "Smith" },
    ];
    const expected = [
      { firstName: "Adam", lastName: "Smith" },
      { firstName: "Eve", lastName: "Smith" },
      { firstName: "Jane", lastName: "Doe" },
      { firstName: "John", lastName: "Doe" },
    ];
    const result = sortByFirstName(arr);
    expect(result).toEqual(expected);
  });

  it("should return an empty array if the input array is empty or has only one element", () => {
    const arr = [];
    const expected = [];
    const result = sortByFirstName(arr);
    expect(result).toEqual(expected);

    const arr2 = [{ firstName: "John", lastName: "Doe" }];
    const expected2 = [{ firstName: "John", lastName: "Doe" }];
    const result2 = sortByFirstName(arr2);
    expect(result2).toEqual(expected2);
  });
});
