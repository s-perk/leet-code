'''
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  Notice that the solution set must not contain duplicate triplets

  I: array of integers
  O: array of arrays (int combinations that add up to zero
  C: must not contain duplicates
  E:

  Strategy:
    - Sort list
    - Two (three) pointers from left and right, and middle
    - Maintain solutions in a set so we don't have duplicates
'''

class Solution:
    def threeSum(self, nums):
        solutions = {} # key: solution (hyphen-concatenated), val: True (always)
        returnArray = []
        total = 0

        # Sort original list of nums
        nums.sort()

        # Two (three) pointers (indices)
        left = 0
        mid = 1
        right = len(nums) - 1

        # Loop until left and right meet
        while (left < right - 1):
            mid = left + 1

            while (mid < right):
                # Calculate new total each time
                total = nums[left] + nums[mid] + nums[right]

                # If total == 0, then add to solution
                if (total == 0):
                    s = f'{nums[left]}:{nums[mid]}:{nums[right]}'

                    # Check if we've already saved solution
                    try:
                        solutions[s]
                    except:
                        solutions[s] = True
                        returnArray.append([nums[left], nums[mid], nums[right]])
                elif (total > 0): # getting farther from solution, so just adjust left and right
                    break


                mid += 1

            # Check which is farther from zero, and adjust accordingly
            if nums[left] + nums[right] < 0:
                left += 1
            else:
                right -= 1

        return returnArray


# ==== TESTING ====
# print(Solution.threeSum(None, [-1,0,1,2,-1,-4]))
# print(Solution.threeSum(None, [0, 0, 0, 0]))
print(Solution.threeSum(None, [-1,0,1,2,-1,-4,-2,-3,3,0,4]))