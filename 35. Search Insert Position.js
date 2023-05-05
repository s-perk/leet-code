/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  I: 1. array 2. target value
  O: position found, if not, where it would've been placed
  C:
  E:

  Strategy:
    - Binary Search
*/
var searchInsert = function(nums, target) {

  low = 0
  high = nums.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high - low + 1) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return low

};

// ==== TESTING ====
console.log(searchInsert([1,3,5,6],5))