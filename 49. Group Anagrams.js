/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*  I: array of strings
    O: array of arrays
        -each array is an array of the same anagram
    C: no duplicates
    E:
*/
var groupAnagrams = function(strs) {

  // Tracker object
  let tracker = {}
  // key: alphabetically sorted anagram
  // value: [anagrams]

  // loop through array
  for (var i = 0; i < strs.length; i++) {
      // split each word into array
      let word = strs[i]

      // first sort alphabetically
      let sortedWord = word.split('').sort()

      // paste back together
      sortedWord = sortedWord.join('')

      // if tracker[key] !== undefined -> push onto tracker object key
      if (tracker[sortedWord] !== undefined) {
          tracker[sortedWord].push(word)
      } else {
          // else [value]
          tracker[sortedWord] = [word]
      }

  }


  // Map into outputArray
  let outputArray = []
  // tracker.keys() --> return values into outputArray
  Object.values(tracker).forEach((value) => {
      outputArray.push(value)
  })

  //return outputArray
  return outputArray

};