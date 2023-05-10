/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  I: array of numbers
  O: array of triplets, representing numbers that sum to 0
  C:
  E:

  Strategy:
    Options:
      1. Recursion (i, j, k)
      2. Two (three) pointers (loop through each, then drop number farthest from zero)
*/
var threeSumOne = function(nums) {

  let solutions = []

  // Sort nums first
  nums = nums.sort((a, b) => (a-b))

  let checked = {}
  let left = 0
  let right = nums.length - 1
  let center = 1

  while ((right - left) >= 2) {

    // Check if sum === 0
    if (nums[left] + nums[center] + nums[right] === 0) {

      // check if we've already evaluated this one
      let array = [nums[left], nums[center], nums[right]].sort()
      if (!checked[array.join('')]) {
        solutions.push([nums[left], nums[center], nums[right]])
      }
      checked[array.join('')] = true
    }

    center++
    // When we've reached the end for one iteration, then reset pointers
    if (center >= right) {
      // move pointer which is farthest from zero to speed up iterations
      right--
      center = left + 1
    }



  }

  return solutions
};

let threeSumTwo = (nums) => {

  let solutions = {}
  nums = nums.sort((a,b) => (a-b))

  let left = 0
  let center = 0
  let right = nums.length - 1

  while (right - left >= 2) {
    center++

    if (center === right) {

      if ((nums[left] + nums[right]) < 0) {
        left++
      } else {
        right--
      }
      center = left
      continue;
    }

    let sum = nums[left] + nums[center] + nums[right]
    if (sum === 0) {
      solutions[`${nums[left]},${nums[center]},${nums[right]}`] = true
    }

  }

  return Object.keys(solutions).map(val => val.split(','))

}

let threeSum = (nums) => {
  nums = nums.sort((a,b) => (a-b))
  let solutions = {}

  // Step through every number
  for (i = 0; i < nums.length; i++) {

    // i = left
    let center = i + 1
    let right = nums.length - 1

    while (center < right) {
      let sum = nums[i] + nums[center] + nums[right]

      if (sum > 0) {
        right--
      } else if (sum < 0) {
        center++
      } else { // we have a match
        // get rid of duplicates with a sorted array and saving that string
        let array = [nums[i],nums[center],nums[right]].sort()
        solutions[array.join(',')] = true
        center++
      }
    }
  }

  // split our solution object back out into an array
  return Object.keys(solutions).map(val => val.split(','))
}

// === TESTING ===
console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([0,0,0,0]))
console.log(threeSum([-1,0,1,0]))
console.log(threeSum([3,0,-2,-1,1,2]))
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))