'''
  Problem:
    A message containing letters from A-Z can be encoded into numbers using the following mapping:

        'A' -> "1"
        'B' -> "2"
        ...
        'Z' -> "26"

    To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

    "AAJF" with the grouping (1 1 10 6)
    "KJF" with the grouping (11 10 6)
    Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

    Given a string s containing only digits, return the number of ways to decode it.

    The test cases are generated so that the answer fits in a 32-bit integer.


  I: string of letters
  O: int (number of ways to decode it)
  C: every digit is significant - any leading zeroes is just zero
  E:

  Strategy:
    - Dynamic Programming
    - create hash table of mappings
    - Recurse through string
      - check each two digits for values in hash table
      - when we have a new match (reach end of string), then add to another mapping object, or increment a counter
      - I: 1. string 2. memo[num] = string
      - O: boolean (if valid or not)
      - Base: add to new tracker object
        - if not within range 1-26, return
        - if double digit, then need to recurse on both options

    - return number of keys in tracker object
'''


import string
class Solution:
    def numDecodingsOld(self, s: str) -> int:

        # Edge case: leading zero, or single letter
        try:
            if s[0] == '0':
                return 0
            if len(s) == 1:
                return 1
        except:
            None

        # Create object of letters
        letters = {str(i+1):l for i, l in enumerate(string.ascii_uppercase)}

        memo = {}

        def recursion(string, memo):
            # Base:
            try: chunk = string[0:2]
            except: chunk = string

            if chunk[0] == '0': return -1
            if len(chunk) == 1: return 1
            if chunk not in letters and len(string) > 2:
                return -1

            if chunk in memo:
                return memo[chunk]


            # Recursive
            # Don't count numbers out of bounds
            memo[string] = 1 + recursion(string[1:], memo)
            return memo[string]


        recursion(s, memo)

        return memo[s]

    def numDecodingsTwo(self, s: str) -> int:

        # Edge cases:
        #   1. leading or ending zero
        #   2. single letter
        try:
            if s[0] == '0':
                return 0
            if s[-1] == '0' and (s[-2] != '2' and s[-2] !='1'):
                return 0
            if len(s) == 1:
                return 1
        except:
            None

        # # Create object of letters
        # letters = {str(i+1):l for i, l in enumerate(string.ascii_uppercase)}

        memo = {}

        def recursion(string, memo):
            # Base:
            if string in memo: return memo[string]
            if string == '': return 0
            if string[0] == '0': return 0
            if len(string) == 1: return 1

            count = 0
            if len(string) == 2:
                if int(string) > 1 and int(string) <= 26:
                    count = 1

            # Recursive:
            res1 = recursion(string[1:], memo)
            res2 = recursion(string[2:], memo)
            memo[string] = res1 + res2 + count
            return memo[string]


        recursion(s, memo)

        return memo[s]

    def numDecodings(self, s:str) -> int:

        # Edge cases:
        #   1. leading or ending zero
        #   2. single letter
        try:
            if s[0] == '0':
                return 0
            if s[-1] == '0' and (s[-2] != '2' and s[-2] !='1'):
                return 0
            if len(s) == 1:
                return 1
        except:
            None

        # Create object of letters
        letters = {str(i+1):l for i, l in enumerate(string.ascii_uppercase)}

        def recursion(string, decorator, memo={}):
            # Base:

            if len(decorator) == 2:
                if int(decorator) < 1 or int(decorator) > 26:
                    return None
            if string == '': return [letters[decorator]] # if we reach end of string, we have a valid combo. Return that letter.
            if string[0] == '0': return None # any string remaining starting with a 0 will not work.
            if string in memo:
                return [letters[decorator] + x for x in memo[string]]


            # Recursion
            res1 = recursion(string[1:], string[0], memo) # One number
            res2 = recursion(string[2:], string[:2], memo) if string[1:] != '' else None # Two numbers

            arr = []
            if (res1 != None): arr += res1
            if (res2 != None): arr += res2

            decorator = letters[decorator] if decorator in letters else ''
            memo[string] = arr

            return [decorator + s for s in arr]

        res = recursion(s, '', {})

        return len(res)

# ==== TESTING ====
print(Solution.numDecodings(None, '123123')) # 1
print(Solution.numDecodings(None, '1')) # 1
print(Solution.numDecodings(None, '2101')) # 1
# Example 1:

# Input: s = "12"
# Output: 2
# Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
# Example 2:
print(Solution.numDecodings(None, '12')) # 2

# Input: s = "226"
# Output: 3
# Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
# Example 3:
print(Solution.numDecodings(None, '226'))

# Input: s = "06"
# Output: 0
# Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
print(Solution.numDecodings(None, '06'))

