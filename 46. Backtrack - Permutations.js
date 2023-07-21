/*
  Problem:

  Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

  I: array of nums
  O: array of array of nums
  C:
  E:

  Strategy:
    - Recursion + iteration
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let combos = [];

  let recursion = (array, combo) => {
    // Base
    if (array.length === 0) {
      return combos.push(combo);
    }

    // Recurse through remaining combos
    for (var i = 0; i < array.length; i++) {
      recursion(array.slice(0, i).concat(array.slice(i + 1, array.length)), [
        ...combo,
        array[i],
      ]);
    }
  };

  recursion(nums, []);
  return combos;
};

// ==== TESTING ====
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([1, 2, 3]));
