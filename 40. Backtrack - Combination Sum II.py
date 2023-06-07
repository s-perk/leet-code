'''
  I:
    1. List(int)
    2. Target (int)
  O: List of lists of integers (all combinations that add up to target)
  C: no duplicates
  E:

  Strategy:
    - Backtracking Recursion
    - Sort our candidates at the beginning in increasing order
    - Maintain a sum
      if sum === target, then save combo
      if greater than target, then we can short circuit the rest of our recursion
'''
class Solution:
    def combinationSum2(self, candidates, target):
        combos = []
        candidates.sort()

        def backtrack(path, index, total):
            # Target
            if total == target:
                combos.append(path)
                return total
            elif total > target:
                return total


            # Recursive/Iterative
            for i in range(index, len(candidates)):

                # Skip duplicates
                if (i > index and candidates[i] == candidates[i-1]):
                    continue

                if (backtrack([*path, candidates[i]], i+1, total+candidates[i]) > target):
                    break

            return total

        backtrack([], 0, 0)
        return combos


# ==== TESTING ====
# Input: candidates = [10,1,2,7,6,1,5], target = 8
# Output:
# [
# [1,1,6],
# [1,2,5],
# [1,7],
# [2,6]
# ]
print(Solution.combinationSum2(None, [10,1,2,7,6,1,5],8))