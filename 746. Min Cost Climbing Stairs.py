'''
  Problem:

  You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

  You can either start from the step with index 0, or the step with index 1.

  Return the minimum cost to reach the top of the floor.

  I: array of numbers
  O: int
  C:
  E:

  Strategy:
    - Dynamic Programming
      - memo[i] = min(i+1, i+2)
      - Base:
      - Recursive: return min of two options
'''
class Solution:
    def minCostClimbingStairs(self, cost) -> int:

        def recursion(i, memo={}):
            # Base
            if i in memo: return memo[i]
            if i >= len(cost): return 0

            # Recursive
            memo[i] = min(recursion(i+1, memo) + cost[i], recursion(i+2, memo) + cost[i])
            return memo[i]

        return min(recursion(0, {}), recursion(1, {}))



# ==== TESTING ====
# Input: cost = [10,15,20]
# Output: 15
# Explanation: You will start at index 1.
# - Pay 15 and climb two steps to reach the top.
# The total cost is 15.
print(Solution.minCostClimbingStairs(None, [10, 15, 20]))

# Example 2:
# Input: cost = [1,100,1,1,1,100,1,1,100,1]
# Output: 6

print(Solution.minCostClimbingStairs(None, [1,100,1,1,1,100,1,1,100,1]))

# Explanation: You will start at index 0.
# - Pay 1 and climb two steps to reach index 2.
# - Pay 1 and climb two steps to reach index 4.
# - Pay 1 and climb two steps to reach index 6.
# - Pay 1 and climb one step to reach index 7.
# - Pay 1 and climb two steps to reach index 9.
# - Pay 1 and climb one step to reach the top.
# The total cost is 6.