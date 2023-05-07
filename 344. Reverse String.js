/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*
  I: array of strings
  O: void - modify s in place
  C:
  E:

  Strategy:
  - Two pointers
*/

var reverseString = function(s) {

  let left = 0
  let right = s.length - 1

  while (left < right) {

    let asdf = s[left]
    s[left] = s[right]
    s[right] = asdf

    left++
    right--
  }

  return s
};

// === TESTING ===
console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["s","t","e","e","v","e"]))