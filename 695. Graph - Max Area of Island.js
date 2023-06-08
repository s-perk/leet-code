/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

  I: matrix (array of arrays containing 1s and 0s)
  O: biggest area of island
  C:
  E:

  Strategy:
    - Similar to problem 200
    - Iterate through every cell
    - When we find a 1, recurse to find all edges
      - Keep track of current total and max total
      - flip checked values to zeroes
      - continue until reach end
*/

var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    let currArea = 0


    let checkSizeOfIsland = (r, c) => {

      // Check if we're in the bounds of the grid
      if (r < 0 || r >= grid.length) {return;}
      if (c < 0 || c >= grid[r].length) {return;}

      // Check if value = 0
      if (grid[r][c] === 0) { return; }

      // Otherwise, increment current area and check sides
      currArea++
      grid[r][c] = 0

      checkSizeOfIsland(r, c-1) //left
      checkSizeOfIsland(r, c+1) //right
      checkSizeOfIsland(r-1, c) //up
      checkSizeOfIsland(r+1, c) //down

    }

    // For each row
    for (var row = 0; row < grid.length; row++) {
      // For each col
      for (var col = 0; col < grid[row].length; col++) {

        if (grid[row][col] === 0) { continue; }

        currArea = 0
        checkSizeOfIsland(row, col)

        // Check if we have a new max area
        if (currArea > maxArea) {
          maxArea = currArea
        }

      }

    }


    return maxArea
};

// ==== TESTING ====
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6

console.log(maxAreaOfIsland(
  [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]))