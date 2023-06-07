'''
  You are given an array of integers stones where stones[i] is the weight of the ith stone.

  We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

  If x == y, both stones are destroyed, and
  If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
  At the end of the game, there is at most one stone left.

  Return the weight of the last remaining stone. If there are no stones left, return 0.

  I: array of integers (representing weights of stones)
  O: int (last remaining stone weight
  C:
  E:

  Strategy:
    - Iteratively loop through array, picking out two biggest stones
      - Compare two biggest:
        - if equal, then pop both off array
        - if one is greater than another, pop the smallest, and set biggest = difference. Then resort array.
    - A couple options:
      1. Heap to store each value, and replace stones with each iteration
      2. Brute force, whenever we smash stones, then just resort each time
'''

class Solution:
    def lastStoneWeight(self, stones) -> int:
        return