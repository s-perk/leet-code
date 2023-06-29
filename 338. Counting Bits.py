'''
  Problem:

  Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.



  I:
  O:
  C:
  E:

  Strategy:
    -
'''

import math


class Solution:
    def countBits(self, n: int):
        array = []
        for i in range(n + 1):
            binary = bin(i).split('b')[1]
            count = binary.count('1')
            array.append(count)
        return array


print(bin(10).split('b')[1])


# ==== TESTING ====
# Example 1:

# Input: n = 2
# Output: [0,1,1]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
print(Solution.countBits(None, 2))

# Example 2:

# Input: n = 5
# Output: [0,1,1,2,1,2]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# 3 --> 11
# 4 --> 100
# 5 --> 101
print(Solution.countBits(None, 5))
