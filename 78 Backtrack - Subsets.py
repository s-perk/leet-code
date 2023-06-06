class Solution:
    def subsetsBackTrack(self, nums):
        array = []

        def backtrack(path, index):
            # add to array
            array.append(path)

            # loop through each remaining possibility
            for i in range(index, len(nums)):
                backtrack([*path, nums[i]], i + 1)

        backtrack([],0)
        return array



# ==== TESTING ====
print(Solution.subsets(None, [1, 2, 3]))