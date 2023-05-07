/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
  I: 1. array of sorted integers, 2. target value
  O: indices of numbers that add up to each other
  C:
    - array is sorted
    - 2 <= numbers.length <= 3 * 104
    - -1000 <= numbers[i] <= 1000
    - numbers is sorted in non-decreasing order.
    - -1000 <= target <= 1000
    - The tests are generated such that there is exactly one solution.
  E:


  Strategy:
    - two pointers
    - both left and right need to be less than target
    - decrement right until less than target;
      - increment left until greater than target
      - continue until target is found

*/

var twoSum = function(numbers, target) {

  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    if ((numbers[left] + numbers[right] ) === target) {
      return [left + 1, right + 1]
    }

    if (numbers[right] > target) {
      right--
    }
    if ((numbers[left] + numbers[right]) > target) {
      right--
    } else {
      left++
    }
  }

};

// === TESTING ===
console.log(twoSum([2,3,4,5,7,9,11,14],12))