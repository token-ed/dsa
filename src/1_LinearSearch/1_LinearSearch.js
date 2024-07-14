function linearSearch(array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue === searchValue) {
      return i;
    }
  }
  return false;
}

module.exports = linearSearch;
