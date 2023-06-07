var lengthOfLongestSubstringOld = function(s) {
  let longestSubstring = ''
  let currSubstring = ''
  let tracker = {}
  // Step through each letter in s
  let i = 0

  if (s.length === 1) {
    return 1
  }

  while (i < s.length) {

    // if in tracker, then check if longest and start substring over
    if (tracker[s[i]] !== undefined) {
        if (currSubstring.length > longestSubstring.length) {
            longestSubstring = currSubstring

        }

        i = i - currSubstring.length + 1 // go back to original spot + 1
        currSubstring = ''
        tracker = {}
    } else {
      tracker[s[i]] = true
      currSubstring += s[i]
      i++
    }
  }

  if (currSubstring.length > longestSubstring.length ) {
    longestSubstring = currSubstring
  }

  return longestSubstring.length

  //
};


let lengthOfLongestSubstring = (s) => {
  let currentSubstring = ''
  let longestSubstring = ''
  let tracker = [] // object of strings containing last index position

  let i = 0
  while (i < s.length) {
    // if in tracker, then pop off first half where letter occurs, and keep going
    if (tracker[s[i]] !== undefined) {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring
      }
      currentSubstring = currentSubstring.slice(currentSubstring.indexOf(s[i]) + 1,currentSubstring.length)
    }
    currentSubstring += s[i]
    tracker[s[i]] = Object.keys(tracker).length
    i++
  }

  // Check one last time (for edge case where string ends in longest)
  if (currentSubstring.length > longestSubstring.length) {
    longestSubstring = currentSubstring
  }

  return longestSubstring.length
}

// ==== TESTING ====

console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("bbbbb")) //1
console.log(lengthOfLongestSubstring("pwwkew")) //3
console.log(lengthOfLongestSubstring("stephens")) //5
console.log(lengthOfLongestSubstring("au")) //2
console.log(lengthOfLongestSubstring("aab")) //2
