/*

  Problem:
  You are given a 2D integer array tiles where tiles[i] = [li, ri] represents that every tile j in the range li <= j <= ri is colored white.

  You are also given an integer carpetLen, the length of a single carpet that can be placed anywhere.

  Return the maximum number of white tiles that can be covered by the carpet.


  I: array of array of int (representing indices of tiles that are white)
  O: maximum number of white tiles that can be covered
  C:
  E:

  Strategy:
    - Cannot assume array of tiles is sorted to begin
      - find min and max of range we care about by first iterating through tiles
      - Can we assume that first value in tuple is lower than larger?
    - Sliding Window
    - Iterate through each evaluating if window can be added
    - can initialize max length as the max range
*/


/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */

// This first attempt maxed out memory for really large ranges
var maximumWhiteTilesOld = function(tiles, carpetLen) {

  let tracker = {} // if node exists, it is white
  let maxLen = 0


  // Sort tiles from low to high
  tiles = tiles.sort((a, b) => (a[0] - b[0]))


  // Loop through range first and record which are white and black tiles
  for (var i = 0; i < tiles.length; i++) {
    for (var j = tiles[i][0]; j <= tiles[i][1]; j++) {
      tracker[j] = true
      maxLen = Math.max(maxLen, tiles[i][1] - tiles[i][0] + 1) // also record the length, since this will always be the minimum of the tiles
    }
  }

  // Return if our maxTiles is already as big as the requested carpetLen
  //  or Edge case: tile length is only 1
  if ((maxLen >= carpetLen) || (tiles.length === 1)) {
    return Math.min(maxLen, carpetLen)
  }



  // Loop through tile range and see if
  var i = tiles[0][0]
  let currLen = 0
  while (i <= tiles[tiles.length - 1][1]) {
    // build up currLen
    while (i < carpetLen) {
      if (tracker[i] !== undefined) {
        currLen++
      }
      i++
      continue
    }

    // after we have initial window, pan right until we reach end of window
    // Remove 1 if left side is in tracker
    if (tracker[i-carpetLen]) {
      currLen--
    }
    // Add 1 if right side is in tracker
    if (tracker[i]) {
      currLen++
    }

    // Recalculate max
    maxLen = Math.max(maxLen, currLen)
    i++
  }

  return Math.min(carpetLen, maxLen)
};

var maximumWhiteTiles = function(tiles, carpetLen) {

  // Sort tiles from low to high
  tiles = tiles.sort((a, b) => (a[0] - b[0]))

  let i = tiles[0][0]
  let j = 0
  let maxLen = 0
  let currLen = 0
  let queue = [] // will contain the last n values; 1=white; 0=black



  while (j <tiles.length) {

    // Check if we've reached end of current range
    if (i > tiles[j][1]) {
      j++
      continue
    }

    // If greater than the carpet length, then need to figure out first value in queue and subtract from total
    if (queue.length >= carpetLen) {
      currLen -= queue.shift()
    }

    // Check if i is less than start of next range
    if (i < tiles[j][0]) {
      // If yes, then check if we've reached our carpet length. If so, we need to subtract
      if (queue.length > carpetLen) {
        currLen--
      }
      queue.push(0)
    } else {
      currLen++
      queue.push(1)
    }


    i++
    maxLen = Math.max(maxLen, currLen)

  }


  return maxLen
}

// ==== TESTING ====
// Input: tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
// Output: 9
// Explanation: Place the carpet starting on tile 10.
// It covers 9 white tiles, so we return 9.
// Note that there may be other places where the carpet covers 9 white tiles.
// It can be shown that the carpet cannot cover more than 9 white tiles.

console.log(maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)) // 9
console.log(maximumWhiteTiles([[8051,8057],[8074,8089],[7994,7995],[7969,7987],[8013,8020],[8123,8139],[7930,7950],[8096,8104],[7917,7925],[8027,8035],[8003,8011]], 9854)) // 126
console.log(maximumWhiteTiles([[5802,5819],[5512,5532],[5749,5749],[5538,5555],[5771,5777],[5856,5873],[5778,5794],[5570,5589],[5751,5763],[5649,5658],[5605,5608],[5641,5641],[5837,5841],[5699,5712],[5485,5487],[5724,5735],[5620,5638],[5493,5494],[5677,5682]], 2327)) // 209