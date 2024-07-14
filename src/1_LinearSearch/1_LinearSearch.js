function linearSearch(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    if (currentValue === searchValue) {
      return i;
    }
  }
  return false;
}

module.exports = linearSearch;
