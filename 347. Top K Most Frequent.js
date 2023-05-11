/**
 *
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
  I: 1. array of numbers   2. k number of top counts to return
  O: array of numbers with highest frequencies
  C:
  E:

  Strategy:
    - Options:
      1. brute force O(n^2) - loop through all, creating an object of counts of each letter, then loop through again to determine k number of maxes
      2. maintain both an object of counts, then convert to array, and sort by frequency listed in object
        - then just return slice of array up to k

    -
*/
var topKFrequent = function(nums, k) {
  let counter = {}

  // Loop through nums, adding onto our counter object
  for (var i = 0; i < nums.length; i++) {
    // Add to counter
    if (counter[nums[i]] !== undefined) {
      counter[nums[i]]++
    } else {
      counter[nums[i]] = 1
    }
  }

  // Create an array of our numbers, and sort from high to low according to frequencies in counter object
  numbers = Object.keys(counter).sort((a, b) => (counter[b] - counter[a]))

  // Just return first k pieces of array
  return numbers.slice(0,k)
};


// === TESTING ===
console.log(topKFrequent([1,1,1,2,2,3], 2))