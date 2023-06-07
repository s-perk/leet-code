/**
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
  I: 1. array of arrays 2. target value
  O: boolean if found
  C: solution must be in O(log(m*n))
  E:

  Strategy:
    - sorted matrices, so can take advantage of a couple options
    - Options:
      1. Two Pointers
      2. Binary Search
        - use mod to convert into a single row matrix
*/
var searchMatrix = function(matrix, target) {
  let totalSquares = matrix.length * matrix[0].length

  let calculateMatrices = (position) => {
    let row = Math.floor((position - 1) / matrix[0].length)
    let col = ((position - 1) % matrix[0].length)
    return [row, col]
  }

  let low = 0
  let high = totalSquares - 1

  // Using Binary Search:
  while (low <= high) {
    let mid = low + Math.floor((high - low + 1) / 2)

    let [row, col] = calculateMatrices(mid + 1)
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }

  }

  return false

};

// === TESTING ===
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 1)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 20)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 23)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 60)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) // false