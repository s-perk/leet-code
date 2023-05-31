/**
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

  In other words, return true if one of s1's permutations is the substring of s2.

 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


/*
  I: 1. permutation string 2. checkstring
  O: boolean
  C:
  E:

  Strategy:
    - what is a permutation? just the string and the reverse of the string?
      - sounds like no, it's any combination

    - let's create a tracker with the letter counts of s1
    - then loop through each letter of s2 + sliding window
      - when we hit our first letter, then we continue for the length of s1
      - check if equal to zero in tracker, and subtract letter counts
      - we must hit all letters in a row, otherwise permutation does not exist
*/
var checkInclusion = function(s1, s2) {

  // create tracker for s1
  let tracker = {}
  for (var i = 0; i < s1.length; i++) {
    tracker[s1[i]] = (tracker[s1[i]] !== undefined) ? tracker[s1[i]]++ : 1
  }

  let left = 0
  let right = s1.length - 1


  while (left < (s2.length - s1.length)) {

    // check if first character starts with letter in tracker
    if (tracker[s2[left]] !== undefined) {

    } else {
      left++
      right++
    }
    if ((tracker[s2[i]] === undefined) || (tracker[s2[i]] === 0)) {
      return false
    }

  }

  //loop through letters in string 2 and see if all are in tracker
  for (var i = 0; i < s2.length; i++) {
    if ((tracker[s2[i]] === undefined) || (tracker[s2[i]] === 0)) {
      return false
    }
    tracker[s2[i]]--
  }

  return true

};

// ==== TESTING ====
/*
  Input: s1 = "ab", s2 = "eidbaooo"
  Output: true
  Explanation: s2 contains one permutation of s1 ("ba").
*/
var s1 = "ab"
var s2 = "eidbaooo"
console.log(checkInclusion(s1, s2))



var s1 = "sb"
var s2 = "eidbaooo"
console.log(checkInclusion(s1, s2))

var s1 = "hello"
var s2 = "ooolleoooleh"
console.log(checkInclusion(s1, s2))