'''
  Problem:
  You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

  Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

  You may assume that you have an infinite number of each kind of coin.


  I: 1. array of int 2. total
  O: int (target - fewest number of coins, or -1 if not possible)
  C: infinite number of each type of coin
  E:
    - if target == 0, then result is 0
    - if len(coins) == 0, then result is -1
    - if len(coins) == 1, then only need to check first coin

  Strategy:
    - Sort array so we start with largest coins first (since this should return the lowest number of coins)
    - Dynamic Programming
      - memo object holds min count of coins
      - memo[num] = min(count)
      - start with sum of target, and subtract until 0 or less than 0
      - at each node, iterate through each possibility
'''

class Solution:
    def coinChange(self, coins, amount: int) -> int:
        # Edge cases
        if (amount == 0): return 0
        if (len(coins) == 0): return -1
        if (len(coins) == 1) and (coins[0] == amount): return 1

        coins.sort()
        coins.reverse()
        count = -1

        # I: 1. remaining total 2. memo object
        # O: coin count
        def recursion(total, memo={}):
            # Base
            if total == 0: return 0
            if total < 0: return float('inf')
            if total in memo: return memo[total] # quit if we find the remainder in memo

            # Recursive - Iterative
            # Save result in memo object
            memo[total] = min(recursion(total - coin, memo) + 1 for coin in coins)
            return memo[total]

        count = recursion(amount)
        return count if count != float('inf') else -1





# ===== TESTING =====
print(Solution.coinChange(None, [1, 2, 5], 11))
print(Solution.coinChange(None, [186,419,83,408], 6249))
print(Solution.coinChange(None, [2], 3))
print(Solution.coinChange(None, [1], 0))