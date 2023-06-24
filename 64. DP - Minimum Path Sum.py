'''
  Problem:

  Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

  Note: You can only move either down or right at any point in time.

  I: grid (m x n matrix)
  O: int - minimum sum you create navigating from top left to bottom right
  C:
  E:

  Strategy:
    - Dynamic Programming

'''
class Solution:
    '''
        TABULATION
    '''
    def minPathSumTabulation(self, grid) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])

        dp = [[0 for x in range(COLS)] for y in range(ROWS)]


        for row in range(0, ROWS):
            for col in range(0, COLS):
                # Seed first value
                if (row == 0) and (col == 0):
                    dp[row][col] = grid[row][col]
                    continue

                # Find min from top and left cells
                # value must exist, so if one direction is out of bounds, then set to max infinity
                up = dp[row-1][col] if (row - 1 >= 0) else float('inf')
                left = dp[row][col-1] if (col - 1 >= 0) else float('inf')

                dp[row][col] = min(up, left) + grid[row][col]


        return dp[ROWS-1][COLS-1]


    '''
        MEMOIZATION
    '''
    def minPathSumMemoization(self, grid):


        def recursion(row, col, memo={}):
            # Base
            if (row < 0 or row >= len(grid)):
                return float('inf')
            if (col < 0 or col >= len(grid[0])):
                return float('inf')

            key = f'{row}-{col}'
            if key in memo:
                return memo[key]


            down = recursion(row+1, col, memo)
            right = recursion(row, col+1, memo)

            # Account for final cell which will not have either right or down directions
            if (down == float('inf') and (right == float('inf'))):
                down = 0
            memo[key] = min(down, right) + grid[row][col]
            return memo[key]


        result = recursion(0, 0, {})
        return result




# ==== TESTING ====
# print(Solution.minPathSumMemoization(None, [[1,3,1],[1,5,1],[4,2,1]])) # 7
print(Solution.minPathSumMemoization(None, [[1,2,3],[4,5,6]])) # 7