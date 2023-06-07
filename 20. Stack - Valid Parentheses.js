/**
 * @param {string} s
 * @return {boolean}
 */

/*
  I: string
  O: boolean
  C:
  E:

  Strategy:
    - create object mapping expected values
    - implement stack to check if expected is valid

*/

var isValid = function(s) {
  let stack = []

  // Must have an even number of characters, otherwise we can quit early
  if (s.length % 2 !== 0) {
    return false
  }


  for (var i = 0; i < s.length; i++) {
    // if it's an ending bracket, check our object
    if (obj[s[i]]) {

      if (stack[stack.length - 1] === obj[s[i]]) {
        stack.pop()
      } else {
        return false
      }

    } else {
      stack.push(s[i])
    }
  }

  if (stack.length > 0) {
    return false
  } else {
    return true
  }
};

var obj = {
  '}': '{',
  ']': '[',
  ')': '('
}