'''
  Problem:
  Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses
  substring.


  I: string
  O:
  C: only contains open or closed parentheses
  E:

  Strategy:
    - Dynamic Programming tabulation + stack
    -
'''
class Solution:
    def longestValidParentheses(self, s: str) -> int:

        stack = []
        dp = [0] * (len(s) + 1)

        for i, x in enumerate(s):
            if (x == ')'):
                if (stack):
                    index = stack.pop()

                    dp[i+1] = dp[index] + i - index + 1
            else:
                stack.append(i)

        return max(dp)





# ==== TESTING ====
# Input: s = "(()"
# Output: 2
# Explanation: The longest valid parentheses substring is "()".
print(Solution.longestValidParentheses(None, "()(())"))
print(Solution.longestValidParentheses(None, '(()'))

# Input: s = ")()())"
# Output: 4
# Explanation: The longest valid parentheses substring is "()()".
print(Solution.longestValidParentheses(None, ')()())'))


# Input: s = ""
# Output: 0
print(Solution.longestValidParentheses(None, ''))