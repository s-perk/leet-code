'''
  Problem:
  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note that the same word in the dictionary may be reused multiple times in the segmentation.

  I: 1. String 2. List of valid words
  O: boolean if can be created, false if not
  C:
  E:

  Strategy:
    - Dynamic programming
    - Recursive-Iteration through each word in the dictionary
    - If we hit one that is true, then return all the way out with true
'''
class Solution:
    def wordBreak(self, s: str, wordDict) -> bool:
        result = False

        def recursion(remainder, memo={}):
            # Base
            nonlocal result
            if result: return result
            if remainder in memo:
                return memo[remainder]
            if remainder == '':
                result = True
                return result


            # Recursive
            for word in wordDict:
                if (remainder[:len(word)]) == word:
                    recursion(remainder[len(word):])

                if result: break

            memo[remainder] = None # just setting this so we know that we've already checked it

        recursion(s, {})


        return result




# ===== TESTING =====

# Input: s = "leetcode", wordDict = ["leet","code"]
# Output: true
print(Solution.wordBreak(None, 'leetcode', ["leet","code"]))


# Example 2:

# Input: s = "applepenapple", wordDict = ["apple","pen"]
# Output: true
# Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
# Note that you are allowed to reuse a dictionary word.
# Example 3:

# Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
# Output: false