'''
  Problem:
  You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

  Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

  0 <= j <= nums[i] and
  i + j < n
  Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

  I: array of int
  O: minimum number of steps
  C:
  E:

  Strategy:
    - DP - 1D tabulation
'''


class Solution:
    def jumpTab(self, nums) -> int:
        table = [0 for _ in range(len(nums) + 1)]
        table[0] = 1

        for i in range(len(nums)):
            for j in range(nums[i]):
                try:
                    table[i + j] += 1
                except:
                    break

        return table[-1]


# ===== TESTING =====
print(Solution.jump(None, [2, 3, 1, 1, 4]))
