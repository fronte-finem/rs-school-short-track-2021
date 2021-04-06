/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function helper(o, x) {
    const a = { ...o };
    a[x] = 1 + (a[x] || 0);
    return a;
  }
  const acc1 = [...s1].reduce(helper, {});
  const acc2 = [...s2].reduce(helper, {});
  let res = 0;
  Object.keys(acc1).reduce((_, k) => {
    res += Math.min(acc1[k], acc2[k] || 0);
    return null;
  }, null);
  return res;
}

module.exports = getCommonCharacterCount;
