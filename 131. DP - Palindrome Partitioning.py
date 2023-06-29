'''
  Problem:
  Given a string s, partition s such that every substring of the partition is a  palindrome. Return all possible palindrome partitioning of s.

  I: string
  O: array of arrays of strings - combinations that are each palindromes and partitions of original string
  C:
  E:

  Strategy:
    - Create function to determine if string is a palindrome
    - Recurse through string, trying different combinations
    - Any single letter is a palindrome
    - Memoize to prevent checking multiple strings
'''

class Solution:
    def partition(self, s: str):
        def isPalindrome(string):
            i = 0
            while i < len(string)/2:
                if string[i] != string[len(string) - 1 - i]:
                    return False
            return True


        return

# ==== TESTING ====
print(Solution.partition(None, 'aab'))