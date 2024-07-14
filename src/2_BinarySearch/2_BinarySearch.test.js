const binarySearch = require("./2_BinarySearch");

test("Should return the index where the searchValue is located", () => {
  const arr = [0, 5, 6, 7, 8, 9, 10, 11, 505, 874, 987, 1205, 1206, 2500];
  const searchValue = 0;

  const result = binarySearch(arr, searchValue);

  // 0 is located at index 0
  expect(result).toBe(0);
});

test("Should return false as searchValue is not found", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const searchValue = 11;

  const result = binarySearch(arr, searchValue);

  // 11 is not present in the array
  expect(result).toBe(false);
});
