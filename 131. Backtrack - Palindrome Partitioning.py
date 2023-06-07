'''
  I: 1. string
  O: list of lists (each containing strings of palindromes)
  C:
  E:
    - Empty string -> return empty list?
    - Any string of length > 1 will have at least 1 palindrome (each individual letter will be its own)

  Strategy:
    - Backtracking Recursion
    - at each level, check if current is a palindrome
      - if yes, then add to return array, recurse with that combo
'''

class Solution:
    def partition(self, s: str):
        partitions = []
        array = [l for l in s]

        # I: 1. current array 2.
        # O:
        def backtrack(path, index):
            # Criteria/Base
            if (len(path) == 1): return

            # Check if current node we're evaluating is a palindrome
            if (Solution.isPalindrome(path[index])):
                partitions.append(path)

            # Recursive/Iterative
            temp = path.copy()
            while (len(temp) > 1):
                temp[index] = temp[index] + temp.pop(1)
                backtrack(temp, index)



        backtrack(array, 0)
        return partitions

    def isPalindrome(s):

        while (s):
            # Any string with a single character (or empty string) is a palindrome
            if (len(s) <= 1):
                return True

            # Check ends if they're equal. If yes, chop them off and continue.
            if (s[0] == s[-1]):
                s = s[1:len(s)-1]
            else:
                return False


# ==== TESTING ====
# Input: s = "aab"
# Output: [["a","a","b"],["aa","b"]]
print(Solution.partition(None, 'abccba'))
print(Solution.isPalindrome('aab'))
print(Solution.isPalindrome('aba'))
print(Solution.isPalindrome('racecar'))
print(Solution.isPalindrome('sss'))
print(Solution.isPalindrome('ssst'))