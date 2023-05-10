/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

/*
  I:
    - target: int - miles away
    - position array of ints
    - speed array of ints
  O:
    - int - number of FLEETS that will arrive at destination
  C:
  E:
    - single car still considered fleet

  Strategy:
    - pace of first car determines max that cars can travel
      - position * speed = distance traveled

    - cars will lob onto each other (creating a fleet), when a car behind reaches car in front

    - loop through iterations of moving each position until all cars have crossed finish line
      - if car behind reaches car in front, remove from array (because we can assume they are essentially 1 fleet now)
*/
var carFleet = function(target, position, speed) {
  // Edge cases
  if (speed.length === 1) {
    return 1
  }


  let fleets = 0

  while (speed.length > 0) {

    for (var i = position.length-1; i >= 0; i--) {
      // if we've met our target, then increase fleet number and also splice that off
      if (position[i] >= target) {
        fleets++
        speed.splice(i, 1)
        position.splice(i, 1)
        continue;
      }

      position[i] += speed[i]

      // // first car is always leader, so don't need to compare to anything
      // if (i === 0) { continue;}
      // if we've combined two cars, then remove from arrays
      if (position[i] <= position[i+1]) {
        position.splice(i, 1) // always remove lowest position
        if (speed[i] < speed[i+1]) { // check which speed is slowest
          speed.splice(i+1, 1)
        } else {
          speed.splice(i, 1)
        }
      }



    }
  }

  return fleets

};

// === TESTING ===
console.log(carFleet(12,[10,8,0,5,3], [2,4,1,1,3])) // 3
console.log(carFleet(10,[3], [3])) // 1
console.log(carFleet(100,[0,2,4], [4,2,1])) // 1
console.log(carFleet(20,[6,2,17], [3,9,2])) // 2