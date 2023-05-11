/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

  Note:
   - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
   - Only the filled cells need to be validated according to the mentioned rules.

 * @param {character[][]} board
 * @return {boolean}
 */

/*
  I: 9x9 matrix of positions
  O: boolean
  C:
  E:

  Strategy:
    - need to check if there are duplicates in three places: col, row, square
    - maintain three trackers for row, col, square
      e.g. rows = {
        row1: {

        },
        row2: {

        }
        ...

      }
    - loop through every position
      - check if number is already in tracker
        - if yes, then invalid
        - otherwise if we get all the way to end, then we have a valid square
*/
var isValidSudoku = function(board) {

  // First, prime our tracker objects
  let rows = {}
  let cols = {}
  let squares = {}

  for (var i = 0; i < board.length; i++) {
    rows[i] = {}
    cols[i] = {}
    squares[i] = {}
  }


  // Loop through square and check if we've already saved these before
  for (var row = 0; row < board[0].length; row++) {
    for (var col = 0; col < board.length; col++) {
      if (board[row][col] === '.') {
        continue;
      }

      // Check rows
      if (rows[row][board[row][col]] !== undefined) {
        return false
      } else {
        rows[row][board[row][col]] = true
      }

      // Check columns
      if (cols[col][board[row][col]] !== undefined) {
        return false
      } else {
        cols[col][board[row][col]] = true
      }

      // Check squares

      let square = Math.floor(col / 3) + Math.floor(row / 3) * 3// calculate square
      if (squares[square][board[row][col]] !== undefined) {
        return false
      } else {
        squares[square][board[row][col]] = true
      }

    }
  }


  return true
};

// === TESTING ===
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."] // true
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))

console.log(isValidSudoku([["5","3",".",".","7",".",".","5","."] // true
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."] // false (rows conflict)
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))

console.log(isValidSudoku([
 ["5","3","6",".","7",".",".",".","."] // false (square conflict)
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))