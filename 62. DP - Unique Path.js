/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
  Problem:
  There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

  Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

  I:
    m = num of rows
    n = num of cols
  O: number of ways to get from top left to bottom right
  C:
  E:

  Strategy:
    - Dynamic Programming - tabulation
*/
var uniquePaths = function (m, n) {
  let table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[0][0] = 1;

  for (var row = 0; row < m; row++) {
    for (var col = 0; col < n; col++) {
      table[row][col + 1] += table[row][col];
      table[row + 1][col] += table[row][col];
    }
  }

  return table[m - 1][n - 1];
};

// ==== TESTING ====
// Input: m = 3, n = 7
// Output: 28
console.log(uniquePaths(3, 7));
