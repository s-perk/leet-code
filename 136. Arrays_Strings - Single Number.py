'''
  Problem:
  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  You must implement a solution with a linear runtime complexity and use only constant extra space.

  I: array of int
  O: int
  C:
  E:

  Strategy:
    - Since everything appears either once or twice, we can just use a hash table to either add or remove a key
    - At the end, just return the only remaining key
'''


class Solution:
    def singleNumber(self, nums) -> int:
        tracker = {}
        for i in range(len(nums)):
            try:
                tracker.pop(nums[i])
            except:
                tracker[nums[i]] = True

        return [*tracker.keys()][0]


# ==== TESTING ====
print(Solution.singleNumber(None, [2, 2, 1]))
