/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
  I: array of numbers
  O: void (just alter nums in place)
  C:
  E:

  Strategy:
  - maintain two pointers:
    1. at next character from left
    2. at last character which is a zero from right (or last index)
  - step through until left and right indices equal each other

*/
var moveZeroes = function(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    if (nums[right] === 0) {
      right--
    }
    if (nums[left] === 0) {
      nums.push(nums.splice(left, 1)[0])
    } else {
      left++
    }
  }
};

// === TESTING ===
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))
