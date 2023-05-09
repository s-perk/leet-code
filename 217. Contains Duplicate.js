/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  I: array of numbers
  O: boolean
  C:
  E:

  Strategy:
    - loop through our array
    - keep track of number counts
    - if greater than 1 return true, otherwise if we reach end, return false
*/

var containsDuplicate = function(nums) {
  let tracker = {}

  for (var i = 0; i < nums.length; i++) {
    if (tracker[nums[i]]) {
      return true
    }

    tracker[nums[i]] = 1
  }

  return false
};