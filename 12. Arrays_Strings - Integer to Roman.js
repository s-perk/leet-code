/**
 * @param {number} num
 * @return {string}
 */

/*
  I: number
  O: string (representing roman numeral)
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

var intToRoman = function(num) {
  // initialize string we're going to add to
  let string = ''

  // get keys from roman numerals
  // step backwards through keys
  let numerals = Object.keys(romanNumerals).reverse()


  // while loop - while number is greater than zero
  let i = 0
  while (num > 0) {

    // find highest number we can divide number by
    if ((num / romanNumerals[numerals[i]]) < 1) {
      i++
      continue;

    }

    // if the first letter is a 4 or 9, then we know we can return a combo of the current and next/prev number
    if (String(num)[0] === '4') {
      string += numerals[i] + numerals[i-1]
      num -= romanNumerals[numerals[i-1]] - romanNumerals[numerals[i]]
      continue;
    } else if (String(num)[0] === '9') {
      string += numerals[i+1] + numerals[i-1]
      num -= romanNumerals[numerals[i-1]] - romanNumerals[numerals[i+1]]
      continue;
    }

    // add letter onto string
    string += numerals[i]

    // continuing subtracting by highest number
    num -= romanNumerals[numerals[i]]



  }

  // return string
  return string
};



// ==== TESTING ====
console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(14))
console.log(intToRoman(21))
console.log(intToRoman(49))
console.log(intToRoman(51))