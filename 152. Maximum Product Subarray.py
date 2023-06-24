'''
  Problem:
    Given an integer array nums, find a subarray that has the largest product, and return the product.

    The test cases are generated so that the answer will fit in a 32-bit integer.

  I: array of int
  O: int - product produced by subarray
  C:
  E:

  Strategy:
    - Since we don't need to keep track of the specific indices, the problem becomes of a lot more simplified
    - Iterative:
      - for negatives, we need some way of knowing if we're going to have a second negative later on
          - therefore, we can keep track of our current max and min throughout, and see if new number helps or hurts
      - Calculate the new min, max with each iteration
      - return result at end

'''
class Solution:
    def maxProductIterative(self, nums) -> int:
        currMin = 1
        currMax = 1
        result = float('-inf')

        for n in nums:
            oldMax = currMax
            currMax = max(n, currMax * n, currMin * n)
            currMin = min(n, currMin * n, oldMax * n)

            result = max(result, currMax)

        return result

# ==== TESTING ====
# Example 1:
# Input: nums = [2,3,-2,4]
# Output: 6
print(Solution.maxProduct(None, [2,3,-2,4]))


# Explanation: [2,3] has the largest product 6.
# Example 2:
# Input: nums = [-2,0,-1]
# Output: 0
# Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
print(Solution.maxProduct(None, [-2, 0, -1]))