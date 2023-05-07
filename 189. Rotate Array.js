/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *

  I: array of numbers, and index to rotate to
  O: array
  C:
  E:

  Strategy:
   - it doesn't want just a solution, it wants you to actually rotate it by each step

 */
var rotate = function(nums, k) {
  let i = 0
  while (i < k) {
    nums.unshift(nums.pop())
    i++
  }


  // nums = nums.slice(nums.length - k, nums.length).concat(nums.slice(0, nums.length - k))

};


// === TESTING ===
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
console.log(rotate([1,2,3,4,5,6,7], 3))