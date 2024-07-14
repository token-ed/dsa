const linearSearch = require("./1_LinearSearch");

test("Should return the index where the searchValue is located", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 102, 3, 5];
  const searchValue = 102;

  const result = linearSearch(arr, searchValue);

  // 102 is located at index 7
  expect(result).toBe(7);
});

test("Should return false as searchValue is not found", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 102, 3, 5];
  const searchValue = 56;

  const result = linearSearch(arr, searchValue);

  // 56 is not present in the array
  expect(result).toBe(false);
});
