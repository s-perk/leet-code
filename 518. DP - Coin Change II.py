'''
  Problem:
  You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

  Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

  You may assume that you have an infinite number of each kind of coin.

  I: array of ints
  O: int - number of
  C:
  E:

  Strategy:
    - Dynamic Programming - Memo recursion
      - I: total
      - O: count
    - Reduce amount down to zero
      - Base:
        - if we ever go below zero, then we know it's not possible
        - If we hit zero, return 1
      - Recursive:
        - for loop through remaining coins
'''
class Solution:
    def change(self, amount: int, coins) -> int:

        coins.sort()
        coins.reverse()
        def recursion(remaining, memo={}):
            # Base
            if remaining < 0:
                return float('inf')
            elif remaining == 0:
                return 1
            elif remaining in memo:
                return memo[remaining]


            # Recursive
            results = []
            for coin in coins:
                results.append(recursion(remaining - coin, memo))

            memo[remaining] = 

            return memo[remaining]

        return recursion(amount, {})


# ==== TESTING ====
print(Solution.change(None, 5, [1, 2, 5]))