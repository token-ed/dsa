const findNeedle = require("./1_NeedleHaystack");

describe("Find a needle in the haystack", () => {
  const tests = [
    { needle: "ll", haystack: "hello", expected: 2, description: "basic match" },
    { needle: "abc", haystack: "hello", expected: -1, description: "no match" },
    { needle: "", haystack: "hello", expected: -1, description: "empty needle" },
    { needle: "a", haystack: "", expected: -1, description: "empty haystack" },
    {
      needle: "hello world",
      haystack: "hello",
      expected: -1,
      description: "needle longer than haystack",
    },
    {
      needle: "hello",
      haystack: "hello",
      expected: 0,
      description: "needle is the same as haystack",
    },
    { needle: "lo", haystack: "hellohello", expected: 3, description: "multiple occurences" },
    { needle: "e", haystack: "hello", expected: 1, description: "single character match" },
  ];

  tests.forEach(({ description, needle, haystack, expected }) => {
    test(`findNeedle: ${description}`, () => {
      expect(findNeedle(needle, haystack)).toEqual(expected);
    });
  });
});
