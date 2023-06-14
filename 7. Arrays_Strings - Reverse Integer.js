/**
 * @param {number} x
 * @return {number}
 */

/*
    I: number
    O: number (reversed)
    C:
        - if larger than 2^32, then return 0
        - can't store 64-bit integers
    E:

*/

var reverse = function (x) {
  // convert to string
  let string = String(x);
  let negative = false;

  // split into array
  let array = string.split('');

  // handle negative
  if (array[0] === '-') {
    negative = true;
    array.shift();
  }

  // Reverse
  array.reverse();

  // join back together
  string = array.join('');

  // convert to number
  // Does this drop leading zeroes?
  let num = +string;

  if (negative) {
    num *= -1;
  }

  // Edge cases
  if (num < -1 * 2 ** 31 || num > 2 ** 31 - 1) {
    return 0;
  }

  return num;
};

// ==== TESTING ====
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0
