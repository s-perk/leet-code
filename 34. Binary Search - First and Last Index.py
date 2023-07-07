'''
  Problem:
  Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

  If target is not found in the array, return [-1, -1].

  You must write an algorithm with O(log n) runtime complexity.

  I: array of int
  O: array with start and end indices  -  [start, end]
  C:
  E:

  Strategy:
    - Binary Search
    - Once we find one, then increase/decrease to find start and end range, and then return
'''
import math


class Solution:
    def searchRange(self, nums, target: int):
        start = -1
        end = -1

        left = 0
        right = len(nums) - 1

        def findStartEnd(mid):
            m = +mid
            nonlocal start, end
            while m >= 0 and nums[m] == target:
                start = m
                m -= 1

            m = +mid
            while m < len(nums) and nums[m] == target:
                end = m
                m += 1

        while left <= right:
            mid = math.floor(((right - left) / 2)) + left

            if nums[mid] == target:
                findStartEnd(mid)
                break
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return [start, end]


# ==== TESTING ====

print(Solution.searchRange(None, [1], 1))


# Example 1:
# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]
print(Solution.searchRange(None, [5, 7, 7, 8, 8, 10], 8))

# Example 2:
# Input: nums = [5,7,7,8,8,10], target = 6
# Output: [-1,-1]
print(Solution.searchRange(None, [5, 7, 7, 8, 8, 10], 6))


# Example 3:
# Input: nums = [], target = 0
# Output: [-1,-1]
print(Solution.searchRange(None, [], 0))
