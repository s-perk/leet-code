
'''
  Problem:
  You are climbing a staircase. It takes n steps to reach the top.

  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


  I: integer (number of stairs)
  O: integer (number of ways you can climb stairs)
  C:
  E:

  Strategy:
    - Dynamic Programming - maintain a memo
    - DFS recursion - we can step through each combo, and save in memo object
'''

class Solution:
    def climbStairs(self, n: int) -> int:

        def recursion(num, memo):
            # Base:
            if (num in memo): return memo[num]
            if (num <= 1): return 1


            memo[num] = recursion(num - 1, memo) + recursion(num - 2, memo)

            # Recursive:
            return memo[num]

        return recursion(n, {})



# ==== TESTING ====
print(Solution.climbStairs(None, 1)) # 1
print(Solution.climbStairs(None, 2)) # 2
print(Solution.climbStairs(None, 3)) # 3
print(Solution.climbStairs(None, 4)) # 5
print(Solution.climbStairs(None, 5)) # 8