"""
  I: matrix (array of arrays representing grid)
  O: number of islands connecting
  C:
  E:

  Strategy:
    - Iterate through matrix
    - If value = 1, incremement, then recurse through all edges, setting each equal to zero
    - continue iterating until end of matrix
"""


class Solution:
    def numIslands(self, grid) -> int:
        count = 0

        def checkEdges(r, c):
            # Base:
            # Return if:
            # 1. square = 0
            # 2. i or j are outside the bounds (and therefore are water)
            if (
                (r < 0 or r >= len(grid))
                or (c < 0 or c >= len(grid[r]))
                or (grid[r][c] == "0")
            ):
                return

            # Set grid to zero
            grid[r][c] = "0"

            # Recursive on each edge
            checkEdges(r - 1, c)  # up
            checkEdges(r + 1, c)  # down
            checkEdges(r, c + 1)  # right
            checkEdges(r, c - 1)  # left

        # For each row
        for row in range(0, len(grid)):
            # For each column
            for col in range(0, len(grid[row])):
                # If 0, then continue
                if grid[row][col] == "0":
                    continue

                # If 1, then increment and check all edges
                count += 1
                checkEdges(row, col)

        return count


# ==== TESTING ====
# Input: grid = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]
# Output: 1
# print(Solution.numIslands(None, [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]))

print(
    Solution.numIslands(
        None,
        [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ],
    )
)
