/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function toInt(xss, i, j) {
  return (xss[i] && xss[i][j] && 1) || 0;
}

function sum(xss, i, j) {
  let res = 0;
  for (let n = -1; n <= 1; n++) {
    for (let m = -1; m <= 1; m++) {
      if (m !== 0 || n !== 0) res += toInt(xss, i + n, j + m);
    }
  }
  return res;
}

function minesweeper(xss) {
  const yss = [];
  for (let i = 0; i < xss.length; i++) {
    yss.push([]);
    for (let j = 0; j < xss[i].length; j++) {
      yss[i].push(sum(xss, i, j));
    }
  }
  return yss;
}

module.exports = minesweeper;
