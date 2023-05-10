/**
 *
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

/*
  I: 1. array of int 2. number of hours to finish bananas
  O: int (minimum speed at which to eat her bananas to finish in time)
  C:
  E:

  Strategy:
    - speed = bananas / hours
    - observation: when hours = n, then our min = highest number in pile
    -
*/

/*
  DID NOT FINISH - should revisit

*/



// from Heber_Alturria
var minEatingSpeed = function (piles, h) {
  let left = 1
  let right = Math.max(...piles); // highest number will be our max

  // helper function to check if we can complete it at a certain speed
  // i.e. if hours to complete at a certain speed is less than our inputted max hours, then make that our new optimal solution
  const canEatAll = (speed) => {
    let totalTime = 0;
    for (const bananas of piles) {
        totalTime += Math.ceil(bananas / speed);
        if (totalTime > h) {
            return false;
        }
    }
    return true;
  };

  // Binary search in a range between 1 and the max banana count in our pile
  while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (canEatAll(piles, mid, h)) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return left;
};


// Solution from artod
const minEatingSpeedTwo = (piles, h) => {
  let min = 1, // start with a min speed of 1
      max = Math.max(...piles), // max speed will always be highest number in pile
      best = max

  // Calculate total time it would take to go through pile for a given speed
  const time = speed => {
    return piles.reduce((sum, pile) => {
      return sum + Math.ceil(pile/speed)}
      , 0)
  }

  // Binary search to find the optimal speed
  while (min <= max) {
      const mid = Math.floor((min + max) / 2)

      // if calculated time is less than inputted hours, then we know we have a time that works
      if (time(mid) <= h) {
          best = mid
          max = mid - 1
      } else
          min = mid + 1
  }

  return best
}

// === TESTING ===
console.log(minEatingSpeed([3,6,7,11], 8))