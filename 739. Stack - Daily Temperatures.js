/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * @param {number[]} temperatures
 * @return {number[]}
 *

  I: array of temps
  O:
  C:
  E:

  Strategy:

  Options:
  - use a mapping function?
  - stack
    - create a stack of sorted numbers
 */
//this one timed out
var dailyTemperaturesMap = function(temperatures) {

  return temperatures.map((v, i) => {
    let cnt = 0
    while (v >= temperatures[i+cnt]) {
      cnt++
      if (i+cnt === temperatures.length) {
        return 0
      }
    }
    return cnt
  })
};


// Monotonic Stack
var dailyTemperatures = (temperatures) => {
  let stack = []
  let array = Array(temperatures.length).fill(0)

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while ((stack.length > 0) && (temperatures[i] >= temperatures[stack[stack.length - 1]] )) {
      stack.pop()
    }

    if (stack.length > 0) {
      array[i] = stack[stack.length - 1] - i
    }

    stack.push(i)
  }

  return array
}

// === TESTING ===
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))