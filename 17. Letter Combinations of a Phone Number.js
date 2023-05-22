/**
 * @param {string} digits
 * @return {string[]}
 */

/*
  I: string of numbers (from 2-9)
  O: array of strings of letters
  C:
  E: - empty string
    - numbers outside of 2 and 9?

  Strategy:
    - hash table with number and letter combos
    - recursion through each letter combo
*/
var letterCombinations = function(digits) {
  let combos = []

  // Edge case: empty string
  if (digits.length === 0) {
    return combos
  }

  let recursion = (digits, string) => {
    // Base: reach end of digits
    if (digits.length === 0) {
      combos.push(string)
      return
    }

    // Recursive: next letter
    for (var i = 0; i < letterCombos[digits[0]].length; i++) {
      // Recurse on smaller slice of digits, and string + next letter
      recursion(digits.slice(1, digits.length), string + letterCombos[digits[0]][i])

    }

  }

  recursion(digits, '')

  return combos
};

const letterCombos = {
  '2':'abc',
  '3':'def',
  '4':'ghi',
  '5':'jkl',
  '6':'mno',
  '7':'pqrs',
  '8':'tuv',
  '9':'wxyz',
}

// ==== TESTING ====
console.log(letterCombinations('234'))

console.log(letterCombinations('23'))
//["ad","ae","af","bd","be","bf","cd","ce","cf"]

