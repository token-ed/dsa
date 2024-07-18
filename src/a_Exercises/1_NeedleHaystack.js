function findNeedle(needle, haystack) {
  const haystackLength = haystack.length;
  const needleLength = needle.length;
  if (!needleLength || !haystackLength || needleLength > haystackLength) return -1;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let found = true;

    for (let j = 0; j < needleLength; j++) {
      if (needle[j] !== haystack[i + j]) {
        found = false;
        break;
      }
    }

    if (found) return i;
  }

  return -1;
}

module.exports = findNeedle;
