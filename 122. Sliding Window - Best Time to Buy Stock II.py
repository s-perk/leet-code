'''
  Problem:
  You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

  On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

  Find and return the maximum profit you can achieve.

  I: array of int
  O: int
  C:
  E:

  Strategy:
    - Sliding Window
    - Slide left until we have a profitable day (increases from left to right)
    - if right is lower, then calculate difference, move left ahead
'''


class Solution:
    def maxProfit(self, prices) -> int:
        profit = 0

        left = 0
        right = 1

        while left < len(prices):
            if right >= len(prices) or prices[right - 1] > prices[right]:
                profit += prices[right - 1] - prices[left]
                left = right
                right = left + 1
            else:
                right += 1

        return profit


# ==== TESTING ====
print(Solution.maxProfit(None, [7, 1, 5, 3, 6, 4]))
