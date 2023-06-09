/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/*
  Problem:
  Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

  A region is captured by flipping all 'O's into 'X's in that surrounded region.



  I: matrix
  O: matrix
  C: don't flip X's along the border
  E:

  Strategy:
    - Flip the problem - actually find whatever is touching the border, then whatever is left is surrounded and can be flipped to an 'X'
    - Iterate through matrix
    - Need to loop through twice, otherwise we'll have issues on recursion ends
    - Pass 1: Only DFS check on border '0's - anything internal that hasn't been touched by a border zero is surrounded, and can be flipped to an 'X' on pass 2
      - Flag anything as checked at the border with a 'Y', so we can flip those back to '0' on Pass 2
    - Pass 2 - change our board based on pass 1
*/
var solve = function(board) {

  // DFS Recursive function checking if anything hits a border
  // I: 1. row, 2. col
  // O: boolean
  let touchesBorder = (row, col) => {
    // Base:
    // 1. True = row or col are out of bounds
    // 2. False = value is an X
    if ((row < 0) || (row >= board.length)) { return }
    if ((col < 0) || (col >= board[row].length)) { return }
    if (board[row][col] !== 'O') { return }

    // Recursive: check each edge
    board[row][col] = 'Y' // Set to Y to keep track of ones we've visited but are still evaluating (don't want to create a circular infinite loop)

    // If it touches a border, set it back to zero and return true
    touchesBorder(row-1, col)// up
    touchesBorder(row+1, col)// down
    touchesBorder(row, col-1)// left
    touchesBorder(row, col+1)// right

    return false
  }

  // Iterate through matrix - only evaluate borders
  for (row = 0; row < board.length; row++) {
    for (col = 0; col < board[row].length; col++) {
      if ((row !== 0) && (row !== board.length - 1) && (col !== 0) && (col !== board[row].length - 1)) {continue;}
      if (board[row][col] !== 'O') {continue;}

      touchesBorder(row, col)

    }
  }

  // Loop through again to flip any 'Y's back to 'O's
  for (row = 0; row < board.length; row++) {
    for (col = 0; col < board[row].length; col++) {
      if (board[row][col] === 'Y') {
        board[row][col] = 'O'
      } else {
        board[row][col] = 'X'
      }
    }
  }

  return board
};

// ==== TESTING ====
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// var result = solve(
//   [
//     ["X","X","X","X"],
//     ["X","O","O","X"],
//     ["X","X","O","X"],
//     ["X","O","X","X"]
//   ]
// )
// var result = solve(
//   [["O","O"],["O","O"]]
// )



/*Expected:
[
  ["O","X","X","O","X"],
  ["X","X","X","X","O"],
  ["X","X","X","O","X"],
  ["O","X","O","O","O"],
  ["X","X","O","X","O"]
]
*/
// var result = solve(
//   [
//     ["O","X","X","O","X"],
//     ["X","O","O","X","O"],
//     ["X","O","X","O","X"],
//     ["O","X","O","O","O"],
//     ["X","X","O","X","O"]
//   ]
// )
var result = solve([
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
])

  // ["X", "O", "X", "O", "X", "O"],
  // ["O", "X", "X", "X", "X", "X"],
  // ["X", "X", "X", "O", "X", "X"],
  // ["O", "X", "O", "X", "O", "X"]


  // ["X","O","X","O","X","O"],
  // ["O","X","X","X","X","X"],
  // ["X","X","X","X","X","O"],
  // ["O","X","O","X","O","X"]



console.log(result)
