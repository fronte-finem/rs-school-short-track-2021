/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const xs = [...String(n)].map(Number);
  const min = Math.min(...xs);
  const i = xs.indexOf(min);
  xs.splice(i, 1);
  return Number(xs.join(''));
}

module.exports = deleteDigit;
