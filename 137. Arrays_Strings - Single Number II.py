'''
  Problem:
  Given a non-empty array of integers nums, every element appears three times except for one. Find that single one.

  You must implement a solution with a linear runtime complexity and use only constant extra space.

  I: array of int
  O: int
  C:
  E:

  Strategy:
    - Since everything appears either 1-3 times, we can just use a hash table to add up values, and then remove once we reach three
    - At the end, just return the only remaining key
'''


class Solution:
    def singleNumber(self, nums) -> int:
        tracker = {}
        for i in range(len(nums)):
            try:
                if tracker[nums[i]] == 2:
                    tracker.pop(nums[i])
                else:
                    tracker[nums[i]] += 1
            except:
                tracker[nums[i]] = 1

        return [*tracker.keys()][0]


# ==== TESTING ====
print(Solution.singleNumber(None, [2, 2, 1]))
