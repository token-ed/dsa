function insertionSort(arr) {
  const newArr = [...arr];

  for (let i = 1; i < newArr.length; i++) {
    const tempValue = newArr[i];
    let gap = i - 1;

    while (gap >= 0 && newArr[gap] > tempValue) {
      newArr[gap + 1] = newArr[gap];
      gap--;
    }

    newArr[gap + 1] = tempValue;
  }

  return newArr;
}

module.exports = insertionSort;
