const selectionSort = require("./4_SelectionSort");

describe("Selection Sort Tests", () => {
  const testCases = [
    {
      description: "Empty array",
      input: [],
      expected: [],
    },
    {
      description: "Array with one element",
      input: [1],
      expected: [1],
    },
    {
      description: "Already sorted array",
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      description: "Unsorted array",
      input: [5, 3, 1, 4, 2],
      expected: [1, 2, 3, 4, 5],
    },
    {
      description: "Array with duplicate elements",
      input: [3, 1, 2, 3, 4, 3],
      expected: [1, 2, 3, 3, 3, 4],
    },
    {
      description: "Array with negative numbers",
      input: [3, -1, 2, -3, 4],
      expected: [-3, -1, 2, 3, 4],
    },
    {
      description: "Array with mixed positive and negative numbers",
      input: [3, -1, 0, 2, -3, 4, 1],
      expected: [-3, -1, 0, 1, 2, 3, 4],
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    test(`selectionSort: ${description}`, () => {
      expect(selectionSort(input)).toEqual(expected);
    });
  });
});
