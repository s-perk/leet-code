'''
  Problem:
  Given an integer numRows, return the first numRows of Pascal's triangle.

  In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

  I: int - num of rows
  O: array of arrays
  C:
  E:

  Strategy:
    - Loop through num of rows
      - Create a new array each time
      - Initialize empty array the length of the row num
      - Iterate through row
        - Triangle is a mirror, so we can set i and len(row) - i equal to same value each time
        - Continue until we run out of nulls

'''
class Solution:
    def generate(self, numRows: int):
        triangle = [[1]]

        for row in range(1, numRows):
            triangle.append([None for x in range(row+1)])

            j = 0
            while (triangle[row][j] is None):

                val = 0
                if j == 0:
                  val = 1
                else:
                  val = triangle[row-1][j-1] + triangle[row-1][j]

                triangle[row][j] = val
                triangle[row][len(triangle[row]) - j - 1] = val
                j += 1


        return triangle



# ===== TESTING =====
print(Solution.generate(None, 5))