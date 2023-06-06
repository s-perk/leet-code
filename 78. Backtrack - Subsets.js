/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  I: array of numbers
  O: array of arrays (unique combinations)
  C:
  E:

  Strategy:
    - Backtracking recursion
    - pass in each option of array until we reach end
*/
function subsetsSolved(nums) {
	const powerset = [];

	let generatePowerset = (path, index) => {
    // Save current option
    powerset.push(path);

    // Loop through remaining options (starting at specific index)
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

  generatePowerset([], 0);

	return powerset;
}
const subsets = (nums) => {
  let array = []

  // I: 1. Path = current array path  2. index in passed in array to start from
  // O: none
  let backtrack = (path, index) => {
    array.push(path)

    for (var i = index; i < nums.length; i++) {
      backtrack([...path, nums[i]], i + 1)
    }
  }
  backtrack([], 0)

  return array
}

// ==== TESTING ====
let result = subsets([1, 2, 3])
console.log(result)