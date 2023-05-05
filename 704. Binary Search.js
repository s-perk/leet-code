/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  I: 1. array 2. target value
  O: integer (index where target was found)
  C:
    - array is in sorted, ascending order
    - must be solved in O(n) time - use binary search
  E:
    - value not in array

  Strategy:
    - use while loop
      - set new high, low, mid indexes each iteration
      - continue until low === high or index is found


*/
var search = function(nums, target) {

  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high + 1 - low) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  // if we don't find number, just return -1
  return -1



};


// === TESTING ===
console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))
console.log(search([-1,0,3,5,9,12], -1))
console.log(search([-1,0,3,5,9,12], 0))