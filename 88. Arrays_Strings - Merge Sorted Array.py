'''
  Problem:

  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.

  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



  I: two arrays, and the length of those arrays
  O: None (nums1 with arrays merged)
  C:
  E:

  Strategy:
    - Loop through first array
    - If second array is greater than or equal to current value, then insert into current nums1
    - Otherwise, continue
    - At the end, paste on remaining array of nums2
'''


class Solution:
    def merge(self, nums1, m: int, nums2, n: int) -> None:
        i = 0
        nums1 = nums1[0 : len(nums1) - n]
        while i < len(nums1):
            if len(nums2) > 0 and nums1[i] > nums2[0]:
                nums1.insert(i, nums2.pop(0))

            i += 1

        nums1 += nums2
        return nums1


# ==== TESTING ====
print(Solution.merge(None, [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
