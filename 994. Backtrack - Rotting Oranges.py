'''
  Problem:
  You are given an m x n grid where each cell can have one of three values:

      0 representing an empty cell,
      1 representing a fresh orange, or
      2 representing a rotten orange.

  Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

  Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


  I: m x n grid
  O: number of minutes it takes for all fruits to rot
  C:
  E:

  Strategy:
    - Num of minutes == number of iterations
    - Iterate through matrix while number of oranges is above 0, and current number of fresh oranges continues to decrease
      - recursively check and flip tiles to rotten if touching each other
      - create a copy of grid each time - only check tiles recursively if set to 2 in both
        - otherwise, it was one that we just flipped, and shouldn't check
      - count number of iterations and current count of remaining

'''

import copy


class Solution:
    def orangesRotting(self, grid) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])

        def checkRottenSides(r, c):
            # Base:
            if r < 0 or r >= ROWS:
                return
            if c < 0 or c >= COLS:
                return
            if grid[r][c] == 0:
                return
            if grid[r][c] == 2:
                return

            # Otherwise a 1
            nonlocal currCnt
            currCnt += 1
            grid[r][c] = 2

            return

        currCnt = 0
        lastCnt = None
        numMinutes = 0

        while lastCnt != currCnt:
            oldGrid = copy.deepcopy(grid)
            lastCnt = currCnt
            currCnt = 0
            for row in range(ROWS):
                for col in range(COLS):
                    if grid[row][col] == 0:
                        continue
                    elif grid[row][col] == 1:
                        currCnt += 1
                    elif grid[row][col] == 2 and oldGrid[row][col] == 2:
                        checkRottenSides(row + 1, col)
                        checkRottenSides(row - 1, col)
                        checkRottenSides(row, col + 1)
                        checkRottenSides(row, col - 1)
            # quit before incrementing if our current count hasn't changed
            if currCnt == 0:
                break
            # if current count matches last count, and current count is above zero, then we have an orange stuck in corner that we can't reach
            if currCnt == lastCnt:
                numMinutes = -1
                break
            numMinutes += 1

        return numMinutes


# ==== TESTING ====
# print(Solution.orangesRotting(None, [[2, 1, 1], [1, 1, 0], [0, 1, 1]]))  # 4
# print(Solution.orangesRotting(None, [[2, 1, 1], [0, 1, 1], [1, 0, 1]]))  # -1
print(
    Solution.orangesRotting(
        None,
        [
            [2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
    )
)  # -1
