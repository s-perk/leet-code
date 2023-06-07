class Solution:
    def combinationSum(self, candidates, target):
        combos = []
        candidates.sort()

        def backtrack(path, index, total):
            total = 0 if len(path) == 0 else total + candidates[index]

            # Target
            if (total == target):
                combos.append(path)
                return total
            elif (total > target):
                return total

            # Recursive Iterative
            result = None
            for i in range(index, len(candidates)):
                result = result if result is not None else 0
                if (result > target):
                    continue
                result = backtrack([*path, candidates[i]], i, total)




        backtrack([], 0, 0)

        return combos


# ==== TESTING ====
print(Solution.combinationSum(None, [2,3,6,7],7))
print(Solution.combinationSum(None, [2,3,5],8))