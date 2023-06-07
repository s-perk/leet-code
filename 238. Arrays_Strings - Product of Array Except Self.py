'''
  I: array of integers
  O: mapped array of sums (except self)
  C:
  E:

  Strategy:
    - Options:
     1. Brute force:  use a map/list comprehension function to produce a product of all values, while skipping current value
      downside: Looping through every value multiple times
     2. Before looping, identify zeroes and ones. Eliminate ones and flag zeroes in hash table. If not in our zero dict, can quit early.
     3. "Two Pointers" - start with solution array of 1s and have two pointers on each end. Pointers will cross each other. Multiply each node until reaches other end.
'''
class Solution:
    def productExceptSelfBruteForce(self, nums):
        # couldn't get this one to pass the speed tests, but pretty sure it works....
        zeroes = {i:True for i,v in enumerate(nums) if v==0}

        def calculateProduct(i, val):
            array = nums.copy()
            array.pop(i)
            product = 1
            for v in array:
                # if 1, then has no impact on product, just remove from array
                if v == 1:
                    nums.pop(i)
                    continue

                # if zero, then stop early
                if v == 0: return 0
                product *= v

            return product

        return [calculateProduct(i, v) for i, v in enumerate(nums)]

    def productExceptSelf(self, nums):
        # Create a solution array of 1s to start with
        solution = [1 for x in nums]

        # We'll maintain two products (pre = front of array, post = back of array)
        pre = 1
        post = 1


        for i in range(0, len(nums)):
            solution[i] *= pre
            pre *= nums[i] # by multiplying afterwards, we ensure current index is not included in total

            solution[len(nums) - i - 1] *= post
            post *= nums[len(nums) - i - 1]

        return solution

# ==== TESTING ====
print(Solution.productExceptSelf(None, [1,2,3,4]))
