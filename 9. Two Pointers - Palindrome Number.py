'''
  I: 1. integer
  O: boolean (true if palindrome, false otherwise)
  C: 
  E: 
  
  Strategy: 
    - convert to string
    - Two pointers from each end
'''

class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        left = 0
        right = len(x) - 1

        # Check ends to see if they equal each other
        while (left < right):
            if (x[left] != x[right]):
                return False
            left += 1
            right -= 1

        return True