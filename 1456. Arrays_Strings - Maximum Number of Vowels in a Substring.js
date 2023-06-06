/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
  I: 1. string 2. number of vowels to find in each substring
  O: integer
  C:
  E:

  Strategy:
    - max is k
    - iterate through string using sliding window
    - use hashtable / dictionary to store vowels and check if is vowel or not
    - keep track of count, and return at end
*/
var maxVowels = function(s, k) {

  // counter
  let count = 0
  let max = 0

  // while loop sliding window
  let left = 0
  let right = 0
  while (left < s.length - 1) {
    if (vowels[s[right]]) {
      count++
    }

    // if we haven't reached max substring yet, add and continue
    if (right < k) {
      right++
      continue
    }


    // substract our left end as we loop
    if (vowels[s[left]]) {
      count--
    }

    // Reset max
    if (count > max) {max = count}

    left++
    right++

  }

  return Math.min(k,max)
};

const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
}


// === TESTING ===
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// console.log(maxVowels('abciiidef', 3))
console.log(maxVowels('aeiou', 2))