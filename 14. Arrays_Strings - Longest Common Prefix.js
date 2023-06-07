/**
 * @param {string[]} strs
 * @return {string}
 */

/*
  I: array of strings
  O: string
  C:
  E:
    - if no common ones, return empty string ''

  Strategy:
    - loop through array of strings
      - prime solution string with first value
    - step through each letter until it doesn't match
      - update solutionstring

    - finally return string
*/
var longestCommonPrefix = function(strs) {

  let currPrefix = strs[0]

  for (i = 1; i < strs.length; i++) {
    let j = null
    while ((currPrefix[j] === strs[i][j]) && (j < currPrefix.length)) {
      j = (j === null) ? 0 : j+1
    }

    if (j === null) {
      return ''
    }

    currPrefix = currPrefix.slice(0, j)


  }

  return currPrefix
};

// === TESTING ===
// console.log(longestCommonPrefix(["flower","flow","flight"])) // 'fl'
// console.log(longestCommonPrefix(["dog","racecar","car"])) // 'fl'
console.log(longestCommonPrefix(["",""])) // 'fl'