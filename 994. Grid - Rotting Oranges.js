/**
 * @param {number[][]} grid
 * @return {number}
 */

/*

  Problem:
  0 - representing an empty cell,
  1 - representing a fresh orange, or
  2 - representing a rotten orange.


  I: mxn matrix with the above values
  O: minimum number of minutes until all oranges are rotted
  C:
  E:

  Strategy:
    - maintain a map of the grid
    - loop through grid once to figure out rotten indices and number of good oranges
    - while goodCnt > 0
      - DFS recursion on all rotten oranges each round (for each in rottenIndices)
      - maintain a counter that we'll return at end
      - if we have any rounds where previous count = new round count, then we know we can't reach something -> break and return -1
*/
var orangesRotting = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let rottenIndices = new Set();
  let goodCnt = 0;

  // Loop through grid once to figure out rotten indices and goodCnt
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      if (grid[r][c] === 2) {
        rottenIndices.add(JSON.stringify([r, c]));
      } else if (grid[r][c] === 1) {
        goodCnt++;
      }
    }
  }

  // Recursion
  let dfs = (row, col, level) => {
    // Base cases:
    if (row < 0 || row >= ROWS) {
      return;
    }
    if (col < 0 || col >= COLS) {
      return;
    }

    if (grid[row][col] === 0) {
      return;
    }
    if (grid[row][col] === 1) {
      // Add to rotten
      rottenIndices.add(JSON.stringify([row, col]));
      goodCnt--;
      grid[row][col] = 2;
      return;
    }
    if (level !== 0 && grid[row][col] === 2) {
      return;
    }

    // Recursive:
    dfs(row, col - 1, level++); // left
    dfs(row, col + 1, level++); // right
    dfs(row - 1, col, level++); // up
    dfs(row + 1, col, level++); // down
  };

  // While goodCnt > 0
  let minutes = 0;
  let prevCnt = goodCnt;
  while (goodCnt > 0) {
    // For each in rotten:
    let indices = rottenIndices.keys();
    [...indices].forEach((val, key) => {
      dfs(...JSON.parse(val), 0);
    });
    // if we haven't added any more rotten and still have good ones left, we can't reach it, and therefore should return -1
    if (prevCnt === goodCnt) {
      return -1;
    }

    // For next iteration:
    prevCnt = goodCnt;
    minutes++;
  }

  return minutes;
};

// ==== TESTING ====
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// console.log(
//   orangesRotting([
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1],
//   ])
// );
console.log(
  orangesRotting([
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ])
);
