/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
  I: string
  O: string
  C:
  E:

  Strategy:
    - initialize an array of arrays
    - Loop through string, adding on characters in array
      - whenever we reach bottom (j), subtract/add until j is 0
      - repeat until done
    - Convert back to string
*/
var convert = function(s, numRows) {
  let array = []

  // Edge case: if string is less than numRows
  if ((s.length <= numRows) || (numRows === 1)){
    return s
  }

  // initialize array of arrays
  for (var i = 0; i < numRows; i++) {
    array.push([])
  }


  // Step through string and translate into array
  for (var i = 0; i < s.length; i++) {
    // check if we're back at the top
    let vertical = i % (numRows + (numRows - 2)) === 0

    if (vertical) {
      for (var j = 0; j < numRows; j++) {
        array[j].push(s[i])
        i++
      }
      i--
    } else {
      for (var j = 0; j < numRows; j++) {
        let position = i % (numRows - 1)
        if (position === numRows - j -1) {
          array[j].push(s[i])
        } else {
          array[j].push('')
        }

      }
    }

    }


  // Paste all arrays back into continuous string
  let string = ''
  for (var row = 0; row < numRows; row++) {
    string += array[row].join('')
  }

  // Return final string
  return string

};



// ==== TESTING ====
console.log(convert('A', 1))
console.log(convert('AB', 1))
console.log(convert('PAYPALISHIRING', 3))
console.log(convert('PAYPALISHIRING', 4))
console.log(convert('PAYPALISHIRING', 25))