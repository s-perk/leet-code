'''
  Problem:
  Given an input string s, reverse the order of the words.

  A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

  Return a string of the words in reverse order concatenated by a single space.

  Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


  I: string
  O: string with words reversed
  C:
  E:

  Strategy:
    - Split into array
    - reverse array
    - attach back together
'''


class Solution:
    def reverseWords(self, s: str) -> str:
        array = s.split()
        array.reverse()
        return ' '.join(array)
