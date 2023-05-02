var twoSum = function(nums, target) {
  let len = nums.length
  for (var i = 0; i < len; i++) {

      if (nums[i] > target) {
          continue;
      }

      for (var j = 0; j < len; j++) {
          if (i === j) {continue;}

          if (nums[j] > target) {
              continue;
          }

          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }

  return null
};


// ==== TESTING =====
console.log(twoSum([1,4,2,7,11,15], 9))
console.log(twoSum([0, 4, 3, 0], 0))