'''
  Problem:
  Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

  We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

  You must solve this problem without using the library's sort function.


  I: array of int
  O: input array, but sorted
  C:
  E:

  Strategy:
    - Since we only have three options, we can push 0s to front, and 2s to back; keep 1s in place
    - Maintain an integer of the last 2s position, so that we know when we can quit early
'''


class Solution:
    def sortColors(self, nums) -> None:
        twoStart = len(nums) - 1
        i = 0
        while i <= twoStart:
            if nums[i] == 0:
                nums.insert(0, nums.pop(i))
                i += 1
            elif nums[i] == 2:
                nums.insert(twoStart, nums.pop(i))
                twoStart -= 1
            else:
                i += 1

        return nums


# ==== TESTING ====
print(Solution.sortColors(None, [2, 0, 2, 1, 1, 0]))
