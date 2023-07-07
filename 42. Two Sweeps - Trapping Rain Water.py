'''
  Problem:
  Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

  I: array of nums
  O: int - amount of water that can be trapped
  C:
  E:

  Strategy:
    - Two sweeps
      - Sweep once left to right and identify all peaks
      - Then sweep back and subtract all elevations in between
'''


class Solution:
    def trapSweeps(self, height) -> int:
        left = 0
        right = 1
        valley = False
        water = 0
        lMax = None

        def findWaterBetween(l, r, lMax):
            if lMax is not None:
                l = lMax

            total = min(height[l], height[r]) * (r - l - 1)

            # Subtract anything in between
            for i in range(l + 1, r):
                total -= height[i]

            return total

        while left < len(height):
            # We've reached end with right pointer
            # If so, keep track of left side's biggest height, because that means we are sloping downwards from this point, but there may be a valley in between that and end
            # Step the left side until we're able to calculate any remaining water
            if right >= len(height):
                lMax = left
                left += 1
                right = left + 1
                continue
            if valley:
                # Reached end of valley
                if height[right] >= height[left]:
                    # Calculate rainwater

                    water += findWaterBetween(left, right, lMax)

                    # Restart valley
                    left = right
                    right = left + 1
                    valley = False
                    continue
                else:
                    right += 1
            else:
                # Find beginning of next valley
                if height[left] > height[left + 1]:
                    valley = True
                    right = left + 1
                else:
                    left += 1

        return water

    def trap(self, height):
        mountains = {}

        def findWaterBetween(l, r):
            edge = min(height[l], height[r])
            total = edge * (r - l - 1)

            # Subtract anything in between
            for i in range(l + 1, r):
                if height[i] < edge:
                    total -= height[i]
                else:  # if it's higher, then it's not truly the edge, so subtract the height by the edge
                    total -= edge

            return total

        def calculatePeaks(array):
            # Frontwards
            for i in range(1, len(array)):
                if array[i] < array[i - 1]:
                    mountains[i - 1] = True
            # Backwards
            for i in range(len(array) - 1, 0, -1):
                if array[i] > array[i - 1]:
                    mountains[i] = True

        calculatePeaks(height)

        peaks = [x for x in mountains.keys()]
        peaks.sort()

        # Step through peaks
        left = 0
        right = left + 1
        water = 0
        while len(peaks) > 1:
            # Calculate water between when:
            # 1. right peak is greater than or equal to left
            # 2. we only have 2 peaks left
            if (
                height[peaks[right]] >= height[peaks[left]]
                or len(peaks) == 2
                or height[peaks[right]] > height[peaks[right + 1]]
            ):
                water += findWaterBetween(peaks[left], peaks[right])
                peaks.pop(left)
                left = 0
                right = left + 1
            else:
                peaks.pop(right)

        return water


# ==== TESTING ====

print(Solution.trap(None, [4, 9, 4, 5, 3, 2]))  # 1
print(Solution.trap(None, [5, 4, 1, 2]))  # 1
print(Solution.trap(None, [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # 6

print(Solution.trap(None, [4, 2, 0, 3, 2, 5]))  # 9

print(Solution.trap(None, [4, 2, 3]))  # 1
print(Solution.trap(None, [0, 7, 1, 4, 6]))  # 7
