const shuffle = require("../src/shuffle");


describe("shuffle should...", () => {
  // CODE HERE
  test("return an array", () => {
    const result = shuffle();
    expect(Array.isArray(result)).toBe(true)
  })

  test("return an array of the same length", () => {
    const arr = [1,2,3,4,5];
    const result = shuffle(arr);
    expect(result).not.toEqual(arr)
  })
});
