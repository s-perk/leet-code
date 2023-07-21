/*
  Problem:
  Given an integer array nums, find the subarray with the largest sum, and return its sum.

  I: array of nums
  O: int - maximum num you can create
  C:
  E:

  Strategy:
    - Dynamic Programming
    - Use 1D Tabulation
      - each index represents maximum so far
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let table = Array(nums.length).fill(0);
  table[0] = nums[0];
  let max = nums[0];

  for (var i = 1; i < nums.length; i++) {
    table[i] = Math.max(nums[i], table[i - 1] + nums[i]);
    max = Math.max(max, table[i]);
  }

  return max;
};

// ==== TESTING ====
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
