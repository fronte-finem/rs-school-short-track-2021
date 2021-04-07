/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const helper = (acc) => (acc.cnt > 1 ? `${acc.cnt}${acc.chr}` : acc.chr);

  const result = [...str].reduce((acc, x) => {
    if (x === acc.chr) {
      acc.cnt++;
      return acc;
    }
    acc.res += helper(acc);
    acc.chr = x;
    acc.cnt = 1;
    return acc;
  }, { chr: '', cnt: 0, res: '' });

  return result.res + helper(result);
}

module.exports = encodeLine;
