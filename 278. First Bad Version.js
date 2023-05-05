/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  /*
    I: integer (number of versions [1, 2, 3... n])
    O: int (first bad version)
    C:
    E:
      - account for no bad versions? will assume that there is at least one bad

    Strategy:
      - 1=false, 2=false, 3=false, *4=true, 5=true....
      - implement binary search to narrow down results
  */

  return function(n) {
    let low = 1
    let high = n

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2)

      if (isBadVersion(mid)) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }

    return low

  };
};


// === TESTING ====

const isBadVersion = (num) => {
  const obj = {
    1:false,
    2:false,
    3:false,
    4:true,
    5:true,
    6:true,
  }
  return obj[num]
}

let sol1 = solution(isBadVersion)
console.log(sol1(6))
