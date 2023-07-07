'''
  Problem:
  Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

  You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.



  I: array of int
  O: int
  C:
  E:

  Strategy:
    - Since everything appears either 1 or 2 times, we can just add to table when appears once, and remove once appears twice
    - At the end, just return the only remaining keys
'''


class Solution:
    def singleNumber(self, nums) -> int:
        tracker = {}
        for i in range(len(nums)):
            try:
                tracker.pop(nums[i])
            except:
                tracker[nums[i]] = True

        return [*tracker.keys()]


# ==== TESTING ====
print(Solution.singleNumber(None, [2, 2, 1]))
