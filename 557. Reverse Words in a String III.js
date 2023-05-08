/**
 * @param {string} s
 * @return {string}
 */

/*
  I: string
  O: string
  C:
  E:

  Strategy:
    - could do it very straightforward (split into array, reverse each, put back together)
    - Two pointers?

*/
var reverseWordsTwoPointers = function(s) {

  let left = 0
  let right = s.length - 1
  let leftString = ''
  let rightString = ''

  while (left < right) {

    // Reached a new word:
    // 1. replace existing characters
    // 2. reset word string
    if (s[left] === ' ') {
      s = s.slice(0, left - leftString.length) + leftString + s.slice(left, s.length)
      leftString = ''
    } else {
      leftString = s[left] + leftString
    }

    if (s[right] === ' ') {
      s = s.slice(0, right + 1) + rightString + s.slice(right + 1 + rightString.length, s.length)
      rightString = ''
    } else {
      rightString += s[right]
    }

    left++
    right--
  }

  // Account for even numbers, and converging before adding final letter
  if (left === right) {
    rightString += s[right]
    right--

  }

  // Add last string
  s = s.slice(0, left - leftString.length) + rightString  + leftString + s.slice(right + rightString.length + 1, s.length)
  return s
};


let reverseWords = (s) => {

  return s.split(' ')
    .map(word => {
      return word.split('').reverse().join('')
    })
    .join(' ')
}

// ==== TESTING ====
//Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("God Ding"))
console.log(reverseWords("a b d ee$#% aef$ea eaef eaj ae##ea'fe"))