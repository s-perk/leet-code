/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


/*
  I: string, string
  O: boolean
  C:
  E:

  Strategy:
  - convert first one to array
  - pop off index of letter one by one
*/
var isAnagram = function(s, t) {

  if (s.length !== t.length) {
    return false
  }

  s = s.split('').sort().join('')
  t = t.split('').sort().join('')

  if (s === t) {
    return true
  } else {
    return false
  }
};

// === TESTING ===
console.log(isAnagram('anagram', "nagaram"))
console.log(isAnagram('anagram', "nagaram3"))