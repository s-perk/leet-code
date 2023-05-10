/**
 * @param {string[]} tokens
 * @return {number}
 */

/*
  I:
  O:
  C:
  E:

  Strategy:
  - use the "eval" function to run an expression
  - create a running total which updates every time we run into a new expression
  - use stack to keep track of last few numbers to evaluate

*/



var evalRPN = function(tokens) {
  let stack = []
  let total = null
  const operators = {
    '/':true,
    '*':true,
    '+':true,
    '-':true
  }

  for (var i = 0; i < tokens.length; i++) {
    if (operators[tokens[i]]) {
      // then run an operation on the stack

      let num2 = stack.pop()
      let num1 = stack.pop()

      total = eval(`(${num1})${tokens[i]}(${num2})`)

      // Round numbers toward zero per constraints
      total = (total < 0) ? +Math.ceil(total) : +Math.floor(total)
      // total = (total === -0) ? 0 : total // apparently -0 is a thing in Javascript

      // Push our total on to stack to be used in next iteration
      stack.push(total)

    } else {
      // if just a number, then add to stack and continue
      stack.push(tokens[i])
    }

  }

  // if we have extra tokens, or a single number, then just return first number in stack
  if ((total === null) && (stack.length !== 0)) {
    total = stack[0]
  }

  return total

};


// === TESTING ====
console.log(evalRPN(["4","13","5","/","+"])) // 6
console.log(evalRPN(["2","1","+","3","*"])) // 9
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) //22
console.log(evalRPN(["3","11","+","5","-"])) // 9
console.log(evalRPN(["4","-2","/","2","-3","-","-"])) // 9
