/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
  I: two strings
  O: boolean
  C:
  E:

  Strategy:
    - iterate through string 1
      - when we run into a #, remove last character
    - When done iterating, compare remaining string and t
*/
var backspaceCompare = function(s, t) {

  let string1 = ''
  let string2 = ''
  for (var i = 0; i < Math.max(s.length, t.length); i++) {

    // Basically, do the same thing with each string, using the same iterator:
      // 1. Check if index is available (don't do anything to shorter string if index is out of bounds)
      // 2. check if backspace - if yes, then try to create a slice, if causes exception, then set to empty string again. If no, then just add character on string.
    if (s[i] !== undefined) {
      if (s[i] === '#') {
        try {
          string1 = string1.slice(0,string1.length - 1)
        } catch (error) {
          string1 =''
        }
      } else {
        string1 += s[i]
      }
    }


    if (t[i] !== undefined) {
      if (t[i] === '#') {
        try {
          string2 = string2.slice(0,string2.length - 1)
        } catch (error) {
          string2 = ''
        }
      } else {
        string2 += t[i]
      }
    }
  }

  return (string1 === string2)
};

// ==== TESTING ====
console.log(backspaceCompare('ab#c', 'ad#c'))