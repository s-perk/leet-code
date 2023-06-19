'''
  Problem:

  A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

  Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

  I: array of integers
  O: int (distance between the indices)
  C:
  E:
    - ramp can also be equal to one another
    - No ramp or empty set = 0

  Strategy:
    - Two sweeps:
      - Sweep left --> right to create a stack of indices of potential min starting points
        - we know that this will be a stack in increasing order of indices, but decreasing in values
          i.e. array = [0, 1, 2]
          corresponding to values [9, 8, 1]
      - Then sweep right --> left to check if valid ramp
        - if not equal or higher than last value on stack, then pop off stack until valid

'''
class Solution:
    def maxWidthRamp(self, nums) -> int:
        maxRamp = 0

        # Sweep left and create stack of potential mins
        minStack = [0]
        for i in range(1, len(nums)):
            if nums[i] < nums[minStack[-1]]:
                minStack.append(i)


        # Sweep right and check potential maxes
        # if a match, record it, then pop it off the stack to check if next value also works. If not, keep iterating
          # this should work because lowest remaining min should create largest range with any potential maxes
        for i in range(len(nums)-1, 0, -1):

            # Check if ramp
            while (len(minStack) > 0) and (nums[i] >= nums[minStack[-1]]):
                maxRamp = max(maxRamp, i - minStack.pop())

        return maxRamp

    def maxWidthRampTwoPointers(self, nums) -> int:
        maxRamp = 0

        left = 0
        right = len(nums) - 1
        while (left <= right):

            # Break early if longest ramp covers remaining length of array
            if (left == right):
                right -= 1
                left = 0
                continue

            # Check if we have a ramp, check if new biggest
            if (nums[right] >= nums[left]):
                maxRamp = max(maxRamp, right - left)

            left += 1


        return maxRamp




# ==== TESTING ====

# Example 1:

# Input: nums = [6,0,8,2,1,5]
# Output: 4
# Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
print(Solution.maxWidthRamp(None, [6,0,8,2,1,5]))


# Example 2:

# Input: nums = [9,8,1,0,1,9,4,0,4,1]
# Output: 7
# Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
print(Solution.maxWidthRamp(None, [9,8,1,0,1,9,4,0,4,1]))
print(Solution.maxWidthRamp(None, [1, 0]))
print(Solution.maxWidthRamp(None, [6,7,8,8,6,5,5,8,2,2]))