function selectionSort(arr) {
  const newArr = [...arr];

  for (let i = 0; i < newArr.length - 1; i++) {
    let lowestNumberIndex = i;

    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex != i) {
      [newArr[lowestNumberIndex], newArr[i]] = [newArr[i], newArr[lowestNumberIndex]];
    }
  }

  return newArr;
}

module.exports = selectionSort;
