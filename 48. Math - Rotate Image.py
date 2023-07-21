'''
  Problem:

  You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

  I: matrix of int
  O: N/A (modify matrix in-place)
  C:
  E:

  Strategy:
    - from bw1226 -
    - Two steps:
        1. flip/mirror rows
        2. Transpose matrix
            - step through each row, expanding square one row/col at a time, and flip each cell
'''


class Solution:
    def rotate(self, matrix):
        N = len(matrix)
        l = 0
        r = N - 1

        # Mirror rows
        while l < r:
            matrix[l], matrix[r] = matrix[r], matrix[l]
            l += 1
            r -= 1

        # Transpose cols
        for row in range(N):
            for col in range(row):
                matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]

        return matrix

    def rotateRecursion(self, matrix) -> None:
        n = len(matrix)
        tracker = {}

        def spiral(row, col, queue):
            # Base
            if row < 0 or row >= n:
                return
            if col < 0 or col >= n:
                return
            if f'{row}-{col}' in tracker:
                return

            queue.append(matrix[row][col])
            tracker[f'{row}-{col}'] = True

            if len(queue) == n:
                matrix[row][col] = queue.pop(0)
            else:
                matrix[row][col] = None

            # Recursive
            spiral(row, col + 1, queue)  # right
            spiral(row + 1, col, queue)  # down
            spiral(row, col - 1, queue)  # left
            spiral(row - 1, col, queue)  # up

        spiral(0, 0, [])
        return matrix


# ==== TESTING ====
# Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
# Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
print(
    Solution.rotate(
        None, [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
    )
)
