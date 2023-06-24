'''
  Problem:
  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

  I: array of int
  O: max sum of money
  C:
  E:

  Strategy:
    - Assume we can go backwards as well
    - Assume all positive integers (aren't going to be robbed by house owners)
    - Store the max value at the index (memo[i] = max)
    - Two starting points (0 and 1 indices)
    - Only need to check num + 2 and num + 3
        - Anything greater than num + 3, you will have wanted to also rob the one in between, so we can simplify the problem and cut out those options
    - Then we can use recursion to step through options, short-cutting some options if we've evaluated it already by looking at memo
    - increase max if bigger
'''


class Solution:
    def rob(self, nums) -> int:
        maxSum = 0
        memo = {}

        def recursion(i):
            nonlocal maxSum, memo

            # Base
            if (i in memo): return memo[i]
            if (i < 0) or (i >= len(nums)): return 0

            # Recursive
            memo[i] = max(nums[i] + recursion(i+2, memo), nums[i] + recursion(i+3, memo))

            maxSum = max(maxSum, memo[i])

            return memo[i]

        # Run recursion on two starting points:
        recursion(0)
        recursion(1)


        return maxSum





# ==== TESTING ====
print(Solution.rob(None, [1, 2, 3, 1])) # 4
print(Solution.rob(None, [2, 7, 9, 3, 1])) # 12