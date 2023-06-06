/**
 *
  Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

  The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

  The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/*
  I: 1. array of numbers 2. target integer
  O: array of combos that add up to target
  C:
    - test cases have less than 150 combination
  E:
    - no combinations work

  Strategy:
    - Backtracking recursion
    - when sum is greater than target, step back two levels
    - when equal, push the current combos onto return array
*/
var combinationSum = function(candidates, target) {
  let combos = []

  candidates.sort((a,b) => (a-b))

  let backtrack = (path, index, sum) => {
    sum = (path.length === 0) ? 0 : sum + candidates[index]

    // Target
    if (sum === target) {
      combos.push(path)
      return
    } else if (sum > target) {
      return sum
    }

    let result
    // Recursive/Iterative
    for (var i = index; i < candidates.length; i++) {
      if (result > target) {
        continue
      }
      result = backtrack([...path, candidates[i]], i, sum)

    }


  }
  backtrack([], 0, NaN)

  return combos
};


// ==== TESTING ====
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
let result = combinationSum([2,3,6,7],7)
console.log(result)