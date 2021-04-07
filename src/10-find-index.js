/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  function helper(xs, val, a, b) {
    if (a + 1 === b) return val === xs[a] ? a : b;
    const i = Math.floor((b + a) / 2);
    if (val > xs[i]) return helper(xs, val, i, b);
    if (val < xs[i]) return helper(xs, val, a, i - 1);
    return i;
  }

  return helper(array, value, 0, array.length - 1);
}

module.exports = findIndex;
