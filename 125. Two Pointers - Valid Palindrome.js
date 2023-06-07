/**
 * @param {string} s
 * @return {boolean}
 */

/*
  I: string
  O: boolean
  C: only lowercase, no alphanumeric characters
  E:


  Strategy:
    - create object of lowercase letters (probably an easier method that provides this, like in python?)
    - convert string to lowercase and remove special characters
    - two pointers
      - check if left and right ever don't equal each other
*/
var isPalindrome = function(s) {
  s = s.replace(/[^A-Za-z0-9]/g, '') // replace all alphanumeric characters
  s = s.toLowerCase()

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }

  return true
};


// === TESTING ===
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true