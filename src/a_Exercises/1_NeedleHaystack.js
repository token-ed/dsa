// Brute force solution - O(m * n)
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

// Knuth-Morris-Pratt - O(m + n)
function KMP(needle, haystack) {
  const splittedHaystack = haystack.split("");
  const splittedNeedle = needle.split("");

  const index = -1;
  let m = 0;
  let i = 0;
  const T = makeLPSTable(splittedNeedle);

  while (m + i < splittedHaystack.length) {
    if (splittedNeedle[i] == splittedHaystack[m + i]) {
      if (i == splittedNeedle.length - 1) {
        return m;
      }
      i++;
    } else {
      m = m + i - T[i];
      if (T[i] > -1) {
        i = T[i];
      } else {
        i = 0;
      }
    }
  }
  return index;
}

function makeLPSTable(needleArray) {
  const results = [];
  let pos = 2;
  let cnd = 0;

  results[0] = -1;
  results[1] = 0;
  while (pos < needleArray.length) {
    if (needleArray[pos - 1] == needleArray[cnd]) {
      cnd++;
      results[pos] = cnd;
      pos++;
    } else if (cnd > 0) {
      cnd = results[cnd];
    } else {
      results[pos] = 0;
      pos++;
    }
  }
  return results;
}

module.exports = { findNeedle, KMP };
