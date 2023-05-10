/**
 * @param {number[]} height
 * @return {number}
 */

/*
  I: array of int
  O: int (amount of rainwater that can be trapped between them)
  C: n >= 1
  E:
    - highest number is starting number

  Strategy:
    - Two pointers + monotonic stack
      - use two pointers to determine where we have "peaks" and "valleys"
        - start pointers on same end
      - once we start a peak + valley, then push values onto stack until peak is ended
        - then calculate rain water and restart peak+valley
        - stack values represent indices in height array

*/
var trap = function(height) {
  let totalWater = null
  let stack = []
  let left = 0
  let right = 1
  let max = Math.max(...height)

  let calculateRainwater = () => {
    let min = Math.min(height[left], height[right])
    let total = min * (right - left - 1)
    while (stack.length > 0) {
      let i = stack.pop()
      // check if we have higher numbers in our stack than our min (should only happen for sets that have a single valley or peak)
      if (height[i] < min) {
        total -= height[i]
      } else {
        total -= min
      }
    }

    return total
  }


  while (right < height.length) {

    // check if we've reached a second peak that is higher than or equal to our first (and are therefore ending a valley)
    if ((stack.length > 0) && (height[left] <= height[right])) {
      // calculate rain water and add total

      totalWater += calculateRainwater()

      // Move pointers
      left = right
      right = (right + 1 > height.length - 1) ? height.length - 1 : right + 1
      continue;
    }

    // check if we have started a valley
    // (and that we haven't reached the end of the height array)
    if ((height[left] > height[right]) && (right < height.length - 1)) {
      stack.push(right)
      right = (right + 1 > height.length - 1) ? height.length - 1 : right + 1
    } else {
      left++
      right++
    }

    // if we've gotten all the way to the end and didn't total anything, then check if the first number is the max
    //  - if yes, then just reverse order and retry
    //  - if no, then we have a mountain, and totalWater = 0
    if ((right === height.length) && (totalWater === null) && (height[0] === max)) {
      height = height.reverse()
      left = 0
      right = 1
      stack = []
    }
  }

  // find any valleys left in the stack afterwards (if we ended on a downslope, and not an upslope)
  if (stack.length > 0) {
    // move pointers to edges of stack
    left = stack[0] - 1
    right = stack[stack.length - 1] + 1

    // account for if edges of the stack are not the highest point
    while ((height[stack[0]] > height[left]) || (height[stack[stack.length - 1]] > height[right])) {

      // check all stack values to make sure we have a valley
      if (height[stack[0]] > height[left]) {
        left = stack.shift()
      }

      if (height[stack[stack.length - 1]] > height[right]) {
        right = stack.pop()
      }
    }

    totalWater += calculateRainwater()
  }


  return +totalWater
};



// === TESTING ===
console.log(trap([2,6,3,8,2,7,2,5,0])) // 11
console.log(trap([9,6,8,8,5,6,3])) // 3
console.log(trap([0,2,0])) // 0
console.log(trap([5,4,1,2])) // 1
console.log(trap([4,2,3])) // 1
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9
