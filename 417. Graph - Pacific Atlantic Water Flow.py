
'''
  Problem:
  There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

  The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

  The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

  Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

  I: matrix (array of array of int)
  O: array of indices that can flow to both Pacific and Atlantic
  C:
  E:

  Strategy:
    - Try 1: Brute force:
        - Step through entire matrix
        - Recursively check if cell can reach ocean in each direction
        - As we step through, since we will have already traversed cells to the left and up, we can also flip values to -1 if we've already checked, and
    - Try 2: Using some other posters suggestions, approach the problem in the opposite direction:
        - Only run DFS on the outside nodes
        - Create 2 maps - which cells reach atlantic, and which reach pacific
        - Return the overlap of the two maps
'''

class Solution:
    def pacificAtlanticTry1(self, heights):
        coordinates = []

        def canReachPacific(r, c):
            # Base: check left and up
            left = up = False

            '''
            Recursive:
              - try to compare left and up with the adjacent cells
              - if they raise an exception, we know they're out of bounds and therefore can reach the ocean
              - return the combined logic of both at the end
            '''

            # Left
            if (c-1 < 0): return True
            if (heights[r][c] >= heights[r][c-1]):
                left = canReachPacific(r, c-1)
            if left: return True

            # Up
            if (r-1 < 0): return True
            elif (heights[r][c] >= heights[r-1][c]):
                up = canReachPacific(r-1, c)
            if up: return True

            # check down and right if they're smaller and we still haven't found a match
            right = down = False
            # Right
            if (c+1 < 0): return False
            if (heights[r][c] >= heights[r][c+1]):
                left = canReachPacific(r, c+1)
            if left: return True

            # Down
            if (r+1 < 0): return True
            elif (heights[r][c] >= heights[r+1][c]):
                down = canReachPacific(r+1, c)
            if down: return True

            return False

        def canReachAtlantic (r, c):
            # Base: check right and down
            right = down = False

            # Right
            if (c+1 >= len(heights[r])): return True
            elif (heights[r][c] >= heights[r][c+1]):
                right = canReachAtlantic(r, c+1)

            # Down
            if (r+1 >= len(heights)): return True
            elif (heights[r][c] >= heights[r+1][c]):
                down = canReachAtlantic(r+1, c)

            if (right or down): return True

            right = down = False
            if (heights[r][c] > heights[r][c+1]):
                right = canReachAtlantic()(r, c+1)
            if (heights[r][c] > heights[r+1][c]):
                down = canReachAtlantic(r+1, c)



        # Iterate through matrix
        for row in range(0, len(heights)):
            for col in range(0, len(heights[row])):
                if (canReachAtlantic(row, col) and canReachPacific(row, col)):
                    coordinates.append([row, col])
                # Account for if flow turns in opposite direction before heading to destination



        return coordinates

    def pacificAtlantic(self, heights):
        COLS = len(heights[0])
        ROWS = len(heights)

        atlantic = set()
        pacific = set()

        # Pacific = up, left
        # Atlantic = down, right

        def dfs(r, c, mapper, prevHeight):
            # Base cases:
            if ((r, c) in mapper): return # already in our map
            if ((r < 0 or r >= ROWS) or (c < 0 or c >= COLS)): return # out of bounds
            if (heights[r][c] < prevHeight): # if less than previous (since we're going from shore in, we need it to be greater)
                return

            mapper.add((r, c))

            # Recursive (call each direction)
            for row, col in [
                (r-1, c),
                (r+1, c),
                (r, c-1),
                (r, c+1),
            ]:
                dfs(row, col, mapper, heights[r][c])


            return

        # Left and Right
        for r in range (0, ROWS):
            dfs(r, 0, pacific, heights[r][0]) #left-PAC
            dfs(r, COLS-1, atlantic, heights[r][COLS-1]) #right-ATL

        # Up and Down
        for c in range (0, COLS):
            dfs(0, c, pacific, heights[0][c]) #up
            dfs(ROWS-1, c, atlantic, heights[ROWS-1][c])


        return list(atlantic.intersection(pacific))




# ==== TESTING ====
# Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
# Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
print(Solution.pacificAtlantic(None,
    [
        [1,2,2,3,5],
        [3,2,3,4,4],
        [2,4,5,3,1],
        [6,7,1,4,5],
        [5,1,1,2,4]
    ]

))
# print(Solution.pacificAtlantic(None,
#     [[1,2,3],
#      [8,9,4],
#      [7,6,5]]

# ))