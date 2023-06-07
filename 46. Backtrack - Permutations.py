'''
  I: array of nums
  O: array of arrays (all permutations)
  C:
  E:

  Strategy:
    - Recursion + iteration through each
'''
class Solution:
    def permute(self, nums):
        permutations = []
        length = len(nums)

        def recursion(combo, remaining):
            # Base - Target
            if len(combo) == length:
                permutations.append(combo)

            # Recursive-iterative
            for i, n in enumerate(remaining):
                recursion([*combo,n], remaining[0:i]+remaining[i+1:])

            return

        recursion([], nums.copy())

        return permutations



# ==== TESTING ====
print(Solution.permute(None, [1,2,3]))
