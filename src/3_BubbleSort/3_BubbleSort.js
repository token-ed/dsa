// Using `while` loop (more performant as we loop through only the unsorted portion of the array)
function bubbleSort(arr) {
  const newArr = [...arr];
  let sortedUntilIndex = newArr.length - 1;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < sortedUntilIndex; i++) {
      if (newArr[i] > newArr[i + 1]) {
        [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
      }

      isSorted = false;
    }

    sortedUntilIndex -= 1;
  }

  return newArr;
}

// Using `for` loop (less performant as we loop through the whole array and do not keep track the already sorted portion of the array)
function bubbleSortFor(arr) {
  const newArr = [...arr];
  const arrLength = newArr.length - 1;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
    }
  }

  return newArr;
}

module.exports = { bubbleSort, bubbleSortFor };
