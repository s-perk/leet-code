/**
 * @param {string} s
 * @return {number}
 */

/*
  I: string
  O: integer
  C:
  E:

  Strategy:
    - multiple ways to solve, but could just iterate backwards until you find a space
*/
var lengthOfLastWordIterative = function(s) {
  let count = 0
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (count > 0) {
        return count
      } else {
        continue
      }
    }
    count++
  }
  return count

};
