
'''
  Problem:

  I: two strings
  O: int - length of longest subSEQUENCE
  C:
    - can we assume first substring length is always longer? Sounds like no
  E:

  Strategy:

    - Dynamic Programming - use two substrings to create a 2D array with string1 as cols and string2 as rows

      - Tabular method
        - when values match, increment current cell and adjacent right and down
        - Return final cell
'''
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:

        ROWS = len(text2) + 1
        COLS = len(text1) + 1

        # Initialize array
        table = [[0 for j in range(COLS)] for i in range(ROWS)]

        for row in range(1, ROWS):
          for col in range(1, COLS):
              if (text2[row-1] == text1[col-1]):
                  table[row][col] = 1 + table[row-1][col-1]
              else:
                  table[row][col] = max(table[row-1][col], table[row][col-1])
        return table[ROWS-1][COLS-1]

    def longestCommonSubsequenceOldFailed(self, text1: str, text2: str) -> int:
        if (len(text1) >= len(text2)):
            bigString = text1
            smallString = text2
        else:
            bigString = text2
            smallString = text1

        memo = {l:True for l in bigString} # initialize memo with single letters

        def recursion(string, memo):
            # Base
            if len(string) == 1:
                return True
            if string in memo:
                return memo[string]

            # Recursive
            memo[string] = []
            for i in range(len(string)):
                memo[string] = recursion(string[:i] + string[i+1:], memo)

            return memo[string]

        # Recurse through bigString to record all possible paths
        recursion(bigString, memo)

        # Iterate through smallString to check what the longest letter combo is that exists
        longestSeq = 0
        for i in range(len(smallString)):
            if smallString[:i+1] in memo:
                longestSeq += 1
            else:
                break


        return longestSeq



# ==== TESTING ====
# Input: text1 = "abcde", text2 = "ace"
# Output: 3
print(Solution.longestCommonSubsequence(None,'abcde','ace'))