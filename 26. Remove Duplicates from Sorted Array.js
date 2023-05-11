/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

  Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

  Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
  Return k.
 * @param {number[]} nums
 * @return {number}
 */

  /*
    I:
      1. array of ints
    O:
      1. k = number of unique values
    C:
    E:

    Strategy:
      - sorted array
      - use splice to replace values along the way
  */
var removeDuplicates = function(nums) {

  let max = -Infinity
  let i = 0

  while (nums[i] !== undefined) {

    // Check if we've already checked this number
    if (nums[i] === max) {
      nums.splice(i, 1)
      continue;
    } else if (nums[i] > max) {
      max = nums[i]
    }
    i++

  }

  return nums.length

};


// ==== TESTING ====
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))