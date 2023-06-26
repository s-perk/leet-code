'''
  Problem:
  Given a triangle array, return the minimum path sum from top to bottom.

  For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

  I: array of array of int - triangle of numbers
  O: int - minimum sum from navigating from top to bottom
  C:
  E:

  Strategy:
    - Dynamic Programming - recursive memo

'''

class Solution:
    def minimumTotalRecursion(self, triangle) -> int:

        # I: 1. row 2. col
        # O: minimum sum traversing through
        def recursion(row, col, memo={}):
            # Base
            if (row >= len(triangle)):
                return float('inf')
            if (col >= len(triangle[row])):
                return float('inf')

            key = f'{row}-{col}'
            if (key in memo):
                return memo[key]

            # Recursive
            res1 = recursion(row+1, col, memo)
            res2 = recursion(row+1, col+1, memo)

            # if we reach end, break tie by setting one to 0
            if res1 == float('inf') and res2 == float('inf'):
                res1 = 0

            memo[key] = triangle[row][col] + min(res1, res2)
            return memo[key]


        return recursion(0, 0, {})


    def minimumTotal(self, triangle) -> int:
        # Build 1D table, initializing with +Infinity
        ROWS = len(triangle)
        table = []
        for n in range(1, ROWS+1):
            while n > 0:
              table.append(float('inf'))
              n -= 1

        # Seed with first number
        table[0] = triangle[0][0]


        row = 0
        i = 0
        while row <= ROWS:
            col = 0
            # skip = row # Amount of cells to skip to reach appropriate cell in next row

            while col <= row:
              table[i + row + col] = min(triangle[row][col] + table[i], table[i + row + col])
              i += 1
              col += 1




            row += 1
        return




# ===== TESTING =====
print(Solution.minimumTotal(None, [[2],[3,4],[6,5,7],[4,1,8,3]])) # 11
