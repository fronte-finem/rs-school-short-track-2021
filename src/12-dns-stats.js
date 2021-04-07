/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  function* gen(xs) {
    let res = '';
    for (let i = 0; i < xs.length; i++) {
      res += `.${xs[i]}`;
      yield res;
    }
  }

  const arr = domains
    .map((x) => x.split('.').reverse())
    .map((x) => ({ gen: gen(x), lvl: x.length }));

  /* eslint-disable no-param-reassign */
  function helper(xs, acc, lvl) {
    const ys = xs.filter((x) => x.lvl >= lvl);
    if (ys.length === 0) return acc;

    acc = ys.map((x) => x.gen.next().value).reduce((akk, x) => {
      if (akk[x]) akk[x] += 1; else akk[x] = 1;
      return akk;
    }, acc);

    return helper(xs, acc, lvl + 1);
  }
  /* eslint-disable no-param-reassign */

  return helper(arr, {}, 1);
}

module.exports = getDNSStats;
