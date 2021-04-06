/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(xss) {
  function helper(o, x, i) {
    if (o.exclude.has(i)) return o;
    if (x === 0) o.exclude.add(i);
    return { exclude: o.exclude, sum: o.sum + x };
  }

  return xss.reduce(
    (obj, xs) => xs.reduce(helper, obj),
    { exclude: new Set(), sum: 0 },
  ).sum;
}

module.exports = getMatrixElementsSum;
