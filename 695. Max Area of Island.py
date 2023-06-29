"""
  Problem:
  You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

  The area of an island is the number of cells with a value 1 in the island.

  Return the maximum area of an island in grid. If there is no island, return 0.

  I: m x n matrix of 1s and 0s
  O: max area of island within the grid
  C:
  E:

  Strategy:
    - Iterate through grid
      - when we hit a 1, then recursively check each side to see what size the island is
      - flip each tile to 0 when finished
      - keep global size variable that will store max island size
    - return global size variable at end
"""


class Solution:
    def maxAreaOfIsland(self, grid) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])
        maxSize = 0

        # I: row, col
        # O: int (size of island)
        def getIslandSize(r, c):
            # Base
            if r < 0 or r >= ROWS:
                return 0
            if c < 0 or c >= COLS:
                return 0
            if grid[r][c] == 0:
                return 0

            # Recursive
            grid[r][c] = 0
            size = 1
            size += getIslandSize(r + 1, c)
            size += getIslandSize(r - 1, c)
            size += getIslandSize(r, c + 1)
            size += getIslandSize(r, c - 1)

            return size

        for row in range(ROWS):
            for col in range(COLS):
                if grid[row][col] == 0:
                    continue

                size = getIslandSize(row, col)
                maxSize = max(maxSize, size)

        return maxSize


# Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
# Output: 6
# Explanation: The answer is not 11, because the island must be connected 4-directionally.
print(
    Solution.maxAreaOfIsland(
        None,
        [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        ],
    )
)


# Example 2:

# Input: grid = [[0,0,0,0,0,0,0,0]]
# Output: 0
