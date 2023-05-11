/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
  I: 1. string of uppercase characters 2. k = number of characters you can replace
  O: length of longest string
  C: all uppercase characters
  E:

  Strategy:
    - Sliding window
    - Once we find two characters that equal each other (and are less than the gap of k away), then try to replace character and calculate new length
*/
var characterReplacement = function(s, k) {

  let left = 0
  let right = 1
  let replacements = 0
  let max = 0

  while (left < s.length) {
    // if we've reached a point where we don't have a string running, and our right/left pointers are too far away, reset and keep going
    if (((right - left) > k) && (replacements > k) || (right > s.length)) {

      // Save max if bigger string
      if ((right - left) > max) {
        max = (right - left - 1)
      }

      // reset variables
      left++
      right = left + 1
      replacements = 0
    }


    // track number of replacements
    if (s[left] !== s[right]) {
      replacements++
    }

    right++
  }

  return max
};

// === TESTING ===
// console.log(characterReplacement("ABAB", 2)) // 4
// console.log(characterReplacement("AABABBA", 1)) // 4
// console.log(characterReplacement("AABAABBA", 1)) // 5
// console.log(characterReplacement("AAAA", 1)) // 4
console.log(characterReplacement("ABBB", 2)) // 4