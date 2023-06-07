/**
 *
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
 * @param {number[]} nums
 * @return {number}
 */

/*
  I: array of numbers
  O: number (duplicate)
  C:
    - can't modify original array of nums
    - must use constant extra space
  E:

  Strategy:
    - use an object to track duplicates?

*/
var findDuplicate = function(nums) {
  let i = 0
  let tracker = {}

  while (i < nums.length) {
    if (tracker[nums[i]] !== undefined) {
      return nums[i]
    }
    tracker[nums[i]] = true
    i++
  }

  return false

};

// === TESTING ===
console.log(findDuplicate([1,3,4,2,2])) // 2
console.log(findDuplicate([3,1,3,4,2])) // 3