'''
  Problem:

  Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

  Return the sum of the three integers.

  You may assume that each input would have exactly one solution.

  I: 1. array of int 2. int - target
  O: Closest sum to target
  C:
  E:

  Strategy:
    - Attempt #1: Dynamic Programming
        - memo = min(sum - target)
          - can still use min function, but instead of a base of zero, we need a base of our target
'''

class Solution:
    def threeSumClosest(self, nums, target: int) -> int:
        nums.sort()

        left = 0
        right = len(nums) - 1
        closest = float('inf')

        while left < right:





# ==== TESTING ====

# Example 1:
# Input: nums = [-1,2,1,-4], target = 1
# Output: 2
# Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
print(Solution.threeSumClosest(None, [-1,2,1,-4], 1))


# Example 2:

# Input: nums = [0,0,0], target = 1
# Output: 0
# Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).