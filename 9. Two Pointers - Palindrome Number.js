/**
 * @param {number} x
 * @return {boolean}
 */

/*
  I: number
  O: boolean
  C:
  E:
    - negatives never palindrome
    - single digit numbers always palindrome
    - ending in zero never palindrome
*/
var isPalindrome = function(x) {

  // Edge Cases
  if (x < 0) {
    return false
  } else if (x < 10) {
    return true
  } else if (x % 10 === 0) {
    return false
  }

  let string = String(x)
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length-i-1]) {
      return false
    }
  }

  return true

};


// ===== TESTING =====

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))