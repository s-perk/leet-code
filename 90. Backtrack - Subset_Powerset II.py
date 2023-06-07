'''
  I: array of nums
  O: array of arrays (powerset of all combinations)
  C:
  E:

  Strategy:
    - Backtracking recursion
'''
class Solution:
    def subsetsWithDup(self, nums):
        powerset = []
        nums.sort()

        def backtrack(path, index):
            # Base
            powerset.append(path)

            # Recursive/Iterative
            for i in range(index, len(nums)):

                # Prevent duplicates: if current index is the same as previous, then skip it
                #  - also want to only consider indices in current range (which is why we have to also check if i is > index, so we ignore first index)
                if (i > index and nums[i] == nums[i-1]):
                    continue

                backtrack([*path, nums[i]], i+1)

        backtrack([], 0)

        return powerset


# ==== TESTING ====
# Input: nums = [1,2,2]
# Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
print(Solution.subsetsWithDup(None, [1,2,2]))