'''
  Problem:
  Given two strings s and t of lengths m and n respectively, return the minimum window
  substring
  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

  The testcases will be generated such that the answer is unique.

  I: 1. string 2. string
  O: string (min number of characters to cover minimum string)
  C:
  E:

  Strategy:

    - Loop through s string and create a tracker of letters
    - Sliding window through t string
      - Check if we can check off all letters by the time we reach end of string
      - if yes, then save the result

'''
from collections import Counter

class Solution:
    def minWindow(self, s, t):
        # Solution help from dev-josh
        '''
          - Create an initial window once we hit the same initial count as our t string
          - Once found, expand right side until we hit the starting letter of our range again
          - Then shrink left side until we have the same count again
          - ... continue until end and return lowest string

          Using the collections.Counter module, we can more easily work with and compare dictionaries

        '''
        # Define variables
        s_count = Counter()
        t_count = Counter(t)
        l = r = 0
        string = ''

        # Edge case
        if (len(t) > len(s)):
            return string

        while r < len(s):

            # Find valid window
            s_count[s[r]] += 1
            r += 1
            if s_count & t_count != t_count:
                continue

            # Minimize a valid window window
            while l < r:
                s_count[s[l]] -= 1
                l += 1

                # Continue until our counts match again
                if s_count & t_count == t_count:
                    continue

                # If we find a new new minimum string, save it
                if (string == '' or len(string) > len(s[l-1:r])):
                    string = s[l-1:r]
                #results.append(s[l-1:r])
                break


        # Return result
        return string
        # if not results:
        #     return ""
        # return min(results, key=len)


    def minWindowAttempt2WithDict(self, s: str, t: str) -> str:

        left = 0
        right = 0
        string = ''

        # Edge case: t > s
        if (len(t) > len(s)):
            return ''

        # Build tracker
        tracker = {}
        track = Counter()
        for l in t:
            try:
                tracker[l] += 1
            except:
                tracker[l] = 1


        def reset():
            nonlocal left, right, tracker, currTracker
            left += 1
            right = left
            currTracker = tracker.copy()


        currTracker = tracker.copy()

        while (left < len(s)):

            # Find where in tracker letter resides
            try:
                cnt = currTracker[s[right]]
            except:
                cnt = -1

            # Reset and create a new array every time left moves
              # if right reaches end
              # if the first letter we check isn't in our tracker
              # if length of current string is greater than current saved string
            if (right == len(s)) or (len(currTracker) == len(t) and cnt == -1) or (string != '' and len(string) < (right - left)):
                reset()
                continue

            if (cnt == -1):
                right += 1
                continue

            # Remove letter from tracker
            currTracker[s[right]] -= 1
            if currTracker[s[right]] == 0:
                currTracker.pop(s[right])

            # If we've found all letters in string, save it
            if (len(currTracker) == 0):
                if (string =='') or (len(string) > (right - left + 1)):
                    string = s[left:right+1]
                reset()
                continue



            right += 1


        return string

    def minWindowOld(self, s: str, t: str) -> str:


        left = 0
        right = 0
        string = ''
        tracker = [l for l in t]

        # Edge case:
        if (len(t) > len(s)):
            return ''

        # tracker = {}
        # for l in t:
        #     try:
        #         tracker[l] += 1
        #     except:
        #         tracker[l] = 0


        def reset():
            nonlocal left, right, tracker
            left += 1
            right = left
            tracker = [l for l in t]


        while (left < len(s)):

            # Find where in tracker letter resides
            try:
                index = tracker.index(s[right])
            except:
                index = -1

            # Reset and create a new array every time left moves
              # if right reaches end
              # if the first letter we check isn't in our tracker
              # if length of current string is greater than current saved string
            if (right == len(s)) or (len(tracker) == len(t) and index == -1) or (string != '' and len(string) < (right - left)):
                reset()
                continue

            if (index == -1):
                right += 1
                continue

            # Remove letter from tracker
            tracker.pop(index)

            # If we've found all letters in string, save it
            if (len(tracker) == 0):
                if (string =='') or (len(string) > (right - left + 1)):
                    string = s[left:right+1]
                reset()
                continue



            right += 1


        return string






# ===== TESTING =====
# Input: s = "ADOBECODEBANC", t = "ABC"
# Output: "BANC"
# Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

print(Solution.minWindow(None, "ADOBECODEBANC", "ABC"))