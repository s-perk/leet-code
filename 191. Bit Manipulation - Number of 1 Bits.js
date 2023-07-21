/*
  Problem:
  Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).



  I:
  O:
  C:
  E:

  Strategy:
    -
*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let cnt = 0;
  n = n.toString(2); // how to convert signed 
  for (var i = 0; i < n.length; i++) {
    if (n[i] === '1') {
      cnt++;
    }
  }

  return cnt;
};
