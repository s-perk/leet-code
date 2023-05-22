/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

/*
  I:
    1. substring to check
    2. array of valid strings
  O: array of indices where a valid substring can be created
  C:
    - every string in array is of same length
    - all array strings must be included to be valid
  E:
    - can words array contain duplicates?

  Strategy:
    - Hash table + sliding window
      - hash table: key = strings in array, value = true if checked, false if not
      - left = multiples of length of string in array
*/
var findSubstring = function(s, words) {

  let indices = []
  // Create hash table that contains counts of each word
  const validWords = {}
  words.forEach(word => {
    if (validWords[word]){
      validWords[word]++
    } else {
      validWords[word] = 1
    }
  })

  // length of words
  const len = words[0].length

  // While loop
  let left = 0

  // function to check each string
  let validString = (string) => {
    // Quit if our input string isn't long enough (should happen as we approach the end of the string)
    if (string.length < len*words.length) {
      return false
    }
    const checked = Object.create(validWords) // creates prototype-chain linked to original object
    for (var i = 0; i < string.length; i += len) {
      // Check if i -> i+len is valid in hash table
      if (checked[string.slice(i, i+len)] > 0) {
        checked[string.slice(i, i+len)]-- // decrement when checked
      } else {
        return false;
      }
    }

    // Finally check if we've covered all words
    if (Object.values(checked).length === Object.values(validWords).length) {
      return true
    } else {
      return false
    }
  }

  while (left < s.length) {
    // Create copy of hash table so we can flip values as we go
        // loop through each chunk of the string
    if (validString(s.slice(left, left + len*words.length))) {
      indices.push(left)
    }

    left++
  }

  return indices
};


// ==== TESTING ====
console.log(findSubstring("barfoothefoobarman", ["foo","bar"]))
// [0, 9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]))
// // [] - can't have duplicates

console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]))
// [] - can't have duplicates