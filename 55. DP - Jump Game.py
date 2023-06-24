'''
  Problem:
  You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

  Return true if you can reach the last index, or false otherwise.

  I: array of nums
  O: boolean
  C:
  E: - arrays length of 1 are always true

  Strategy:
    - Dynamic Programming - Tabulation
    - We want to iterate through numbers, keeping track of maximum length that one could travel
    - If our index ever passes the maximum, then it's not possible
    - If our maximum passes the length of the numbers array, we can return True early
'''
class Solution:
    def canJump(self, nums) -> bool:
        maxLen = 0

        for i, n in enumerate(nums):
            if i > maxLen:
                return False
            maxLen = max(maxLen, i+n)
            if maxLen > len(nums):
                return True
        return True


# ==== TESTING ====
print(Solution.canJump(None, [2, 0, 0]))
# Example 1:

# Input: nums = [2,3,1,1,4]
# Output: true
# Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
print(Solution.canJump(None, [2, 3, 1, 1, 4]))


# Example 2:

# Input: nums = [3,2,1,0,4]
print(Solution.canJump(None, [3, 2, 1, 0, 4]))
# Output: false
# Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.