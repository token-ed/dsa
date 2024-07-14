function binarySearch(arr, searchValue) {
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    const middlePoint = Math.round((lowerBound + upperBound) / 2);
    const currentValue = arr[middlePoint];

    if (currentValue === searchValue) {
      return middlePoint;
    } else if (currentValue < searchValue) {
      lowerBound = middlePoint + 1;
    } else if (currentValue > searchValue) {
      upperBound = middlePoint - 1;
    }
  }

  return false;
}

module.exports = binarySearch;
