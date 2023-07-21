'''
  Problem:

  Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

  Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.



  I:
    1. array of int - represents cards
    2. groupSize
  O: Boolean
  C:
  E:

  Strategy:
    - Edge case: if len(hand) is not divisible by groupSize, then return false early
    - Sort + create a hash table with counts of each number
    - While there's values in hash table, try looping through and creating groups
      - if we ever reach a point where we can't add a consecutive number, then return false early
'''


class Solution:
    def isNStraightHand(self, hand, groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False

        hand.sort()
        counts = {}
        for n in hand:
            try:
                counts[n] += 1
            except:
                counts[n] = 1

        rem = list(counts.keys())
        while len(rem) > 0:
            num = rem[0]  # First value
            for _ in range(groupSize):
                try:
                    if counts[num] == 1:
                        counts.pop(num)
                    else:
                        counts[num] -= 1

                    num += 1
                except:
                    return False

            rem = list(counts.keys())

        return True


# ==== TESTING ====
print(Solution.isNStraightHand(None, [1, 2, 3, 6, 2, 3, 4, 7, 8], 3))
print(Solution.isNStraightHand(None, [1, 2, 3, 4, 5], 4))
