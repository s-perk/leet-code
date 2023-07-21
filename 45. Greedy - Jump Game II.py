'''
  Problem:
  You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

  Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

  0 <= j <= nums[i] and
  i + j < n
  Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

  I: array of int
  O: minimum number of steps
  C: Assume that there is at least one valid solution (So don't need to account for edge cases like starting with a zero)
  E:

  Strategy:
    - Greedy - two pointers

    - L = minimum position you could be at from last round
    - R = maximum hop
    - Number of Steps = Number of times you iterate through
'''


class Solution:
    def jump(self, nums) -> int:
        left, right = 0, 0
        cnt = 0

        while right < len(nums) - 1:
            maxJump = 0
            for i in range(left, right + 1):
                maxJump = max(maxJump, i + nums[i])

            cnt += 1
            left = right + 1
            right = maxJump

        return cnt


# ===== TESTING =====
print(Solution.jump(None, [2, 3, 1, 1, 4]))
