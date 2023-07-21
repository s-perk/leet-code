'''
  Problem:

  Given an integer array nums, find the subarray with the largest sum, and return its sum.

  I: array of numbers
  O: highest sum
  C:
  E:

  Strategy:
    - Dynamic Programming - Tabulation
    - Each position in dp table represents the largest max we could make so far (including the current number)
    - Find each max, and save in table
    - compare current number + prev max
    - Return max within dp tabulation array
'''


class Solution:
    def maxSubArray(self, nums) -> int:
        dp = [0] * len(nums)
        dp[0] = nums[0]

        for i in range(1, len(nums)):
            dp[i] = max(nums[i], dp[i - 1] + nums[i])

        return max(dp)


# ==== TESTING ====
# Example 1:

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: The subarray [4,-1,2,1] has the largest sum 6.
print(Solution.maxSubArray(None, [-2, 1, -3, 4, -1, 2, 1, -5, 4]))


# Example 2:

# Input: nums = [1]
# Output: 1
# Explanation: The subarray [1] has the largest sum 1.
print(Solution.maxSubArray(None, [1]))


# Example 3:

# Input: nums = [5,4,-1,7,8]
# Output: 23
# Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
print(Solution.maxSubArray(None, [5, 4, -1, 7, 8]))
