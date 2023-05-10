/**
 * @param {number[]} height
 * @return {number}
 */

/*
  I: array of int
  O: maximum volume (area) that you could contain between them
  C: array will have >=2 numbers
  E:

  Strategy:
    - Two pointer problem
    - Want to maximize the distance between (right - left) and the height of each
    -
*/
var maxArea = function(height) {

  // initialize maxArea
  let maxArea = 0

  let left = 0
  let right = height.length - 1

  while (left < right) {
    let min = Math.min(height[left], height[right])
    let area = (right - left) * min

    if (area > maxArea) {
      maxArea = area
    }

    if (height[left] === min) {
      left++
    } else {
      right--
    }
  }

  return maxArea

};


// === TESTING ===
console.log(maxArea([1,8,6,2,5,4,8,3,7]))