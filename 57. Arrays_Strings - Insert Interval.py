'''
  Problem:
  You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

  Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

  Return intervals after the insertion.

  I: 1. array of array of int 2. new interval to insert
  O: array of array of int (new collection of intervals)
  C:
  E:

  Strategy:
    - three cases:
      - 1. new range is completely LOWER than current interval
      - 2. new range is completely HIGHER than current interval
      - 3. new range overlaps at some point with current interval
'''


class Solution:
    def insert(self, intervals, newInterval):
        result = []

        for interval in intervals:
            # Current interval is completely before new range
            if interval[1] < newInterval[0]:
                result.append(interval)
            # Current interval is completely after new range
            elif interval[0] > newInterval[1]:
                result.append(interval)
            # Otherwise adjust our middle interval based on current mins and maxes
            else:
                newInterval[0] = min(newInterval[0], interval[0])
                newInterval[1] = max(newInterval[1], interval[1])

        result.append(newInterval)
        result.sort(key=lambda x: x[0])  # Sort by the first number in interval
        return result


# ==== TESTING ====
print(Solution.insert(None, [[1, 5]], [2, 3]))
print(Solution.insert(None, [[1, 3], [6, 9]], [2, 5]))
print(Solution.insert(None, [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
