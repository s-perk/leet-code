/**
 * @param {string} s
 * @return {number}
 */

/*
  I: string of roman numerals
  O: number
  C:
  E:
*/

romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
var romanToInt = function(s) {
  // initialize number
  let num = 0

  // loop through letters
  for (var i = 0; i < s.length; i++) {
    // look up current number and next character
    // if lower than next character, then add difference

    if ((romanNumerals[s[i]] < romanNumerals[s[i+1]]) && (s[i+1] !== undefined)) {
      num += romanNumerals[s[i+1]] - romanNumerals[s[i]]
      i++

    } else {
      //  otherwise just add current number and move on
      num += romanNumerals[s[i]]
    }

  }


  return num

};


// ==== TESTING ====
console.log(romanToInt('IV'))
console.log(romanToInt('VIII'))
console.log(romanToInt('XLIX'))
console.log(romanToInt('XL'))

