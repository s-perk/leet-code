'''
  Problem:
  - Same as problem 198, except houses are in a circle

  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

  I: array of nums
  O: max number you can rob
  C:
  E:

  Strategy:
    - Any array less than 3, just return the max
    - DP - memoization
      - memo[little-big] = max()
      - recurse with two starting points (0, 1)
        - I: total
        - O: max that combo adds up to
        - for starting point 0, need to check if lands on last character as well
        - for starting point 1, add an additional 0 to end to put a buffer between that and the starting point
      - CORRECTION: need three starting points (if third and final elements are bigger than first, then it makes sense to start at 3)
        - see test case:  [1,2,3,4,5,1,2,3,4,5]
'''
class Solution:
    def rob(self, nums) -> int:

        if (len(nums) <= 3): return max(nums)

        def recursion(i, memo={}):
            # Base
            if (i >= len(nums)-1): return 0 # account for being last number
            if (i in memo): return memo[i]

            # Recursive
            memo[i] = max(nums[i] + recursion(i+2, memo), nums[i] + recursion(i+3, memo))
            return memo[i]

        # Try starting places of 1 and 3
        res1 = recursion(0, {})

        # Try starting place of 2 and 3
        nums.append(0) # pad end so that we don't hit the base case of touching the end for starting at 2

        res2 = recursion(1, {})
        res3 = recursion(2, {})

        return max(res1, res2, res3)



# ==== TESTING ====
# print(Solution.rob(None, [1,2,3,1]))
# print(Solution.rob(None, [1,2,3]))
# print(Solution.rob(None, [1,2,3,4,5]))
print(Solution.rob(None, [1,1,3,6,7,10,7,1,8,5,9,1,4,4,3]))
print(Solution.rob(None, [1,2,3,4,5,1,2,3,4,5]))