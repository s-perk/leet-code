'''
  Problem:
  You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

  Increment the large integer by one and return the resulting array of digits.


  I: array of int
  O: array of int
  C: no leading zeroes
  E:

  Strategy:
    - while loop backwards through array
    - if last number is a 9, then flip to zero, and add 1 to the next one
    - stop when we no longer have a 9, and add to the last one
'''

class Solution:
    def plusOne(self, digits):
        i = len(digits) - 1
        while (i >= 0):
            digits[i] += 1
            if (digits[i] == 10):
                if (i == 0):
                    digits.insert(0,0)
                    i += 1
                digits[i] = 0
                i -= 1
            else: break

        return digits





# ===== TESTING ====
# Example 1:
# Input: digits = [1,2,3]
# Output: [1,2,4]
# Explanation: The array represents the integer 123.
# Incrementing by one gives 123 + 1 = 124.
# Thus, the result should be [1,2,4].
print(Solution.plusOne(None, [1,2,3]))

# Example 2:
# Input: digits = [4,3,2,1]
# Output: [4,3,2,2]
# Explanation: The array represents the integer 4321.
# Incrementing by one gives 4321 + 1 = 4322.
# Thus, the result should be [4,3,2,2].
print(Solution.plusOne(None, [4, 3, 2, 2]))


# Example 3:

# Input: digits = [9]
# Output: [1,0]
# Explanation: The array represents the integer 9.
# Incrementing by one gives 9 + 1 = 10.
# Thus, the result should be [1,0].
print(Solution.plusOne(None, [9, 9, 9]))