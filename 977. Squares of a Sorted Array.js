/**
 * @param {number[]} nums
 * @return {number[]}
 */


/*
  I: sorted array of numbers (ascending)
  O: array of square of numbers (ascending)
  C:
    - try and solve in O(n) time
  E:

  Strategy:
    - as you square negative numbers, they will become positive
    - array will have a "valley" shape (start large, converge toward zero, then grow bigger again)
    - "Two Pointers" algorithm



*/
var sortedSquares = function(nums) {
  let array = []

  while (nums.length > 0) {
    let left = nums[0]
    let right = nums[nums.length - 1]

    if (left**2 > right**2) {
      array.unshift(left**2)
      nums.shift()
    } else {
      array.unshift(right**2)
      nums.pop()
    }
  }

  return array
};


// ==== TESTING ====
console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]
// console.log(sortedSquares())
// console.log(sortedSquares())