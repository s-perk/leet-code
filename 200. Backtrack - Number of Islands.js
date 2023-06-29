/*
  Problem:

  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  I: m x n matrix of 1s and 0s
  O: int - number of islands
  C:
  E:

  Strategy:
    - Loop through each tile
    - When we find an island, increment counter, and recurse on edges
    - Set each island tile to zero when we're finished
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let checkIslandEdges = (r, c) => {
    // Base
    if (r < 0 || r >= grid.length) {
      return;
    }
    if (c < 0 || c >= grid[r].length) {
      return;
    }
    if (grid[r][c] === '0') {
      return;
    }

    // Recursive
    grid[r][c] = '0';
    checkIslandEdges(r + 1, c);
    checkIslandEdges(r - 1, c);
    checkIslandEdges(r, c + 1);
    checkIslandEdges(r, c - 1);
  };

  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '0') {
        continue;
      }
      count++;
      checkIslandEdges(row, col);
    }
  }

  return count;
};

// ===== TESTING =====
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);

// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
