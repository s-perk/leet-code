# Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

'''
  I:
    1. kth largest
    2. array of numbers
  O: kth largest int
  C:
  E:

  Strategy:
    - Sort initial array, and maintain a heap of top 'k' integers
    - Add:
      - check if value is greater than lowest
        - if yes, then place in order, and remove lowest
        - if no, just return lowest
'''
class KthLargestOld:

    def __init__(self, k: int, nums):
        nums.sort()
        self.heap = nums[-k:]
        self.k = k



    def add(self, val: int) -> int:

      # Very simple solution, but just pushing onto end, and then sorting each time
      self.heap.append(val)
      self.heap.sort()

      # Remove any excess values from sorted array
      while (len(self.heap) > self.k):
         self.heap.pop(0)

      return self.heap[0]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)

#==== TESTING =====
kthLargest = KthLargest(3,[4, 5, 8, 2])
print(kthLargest.add(3))
print(kthLargest.add(5))
print(kthLargest.add(10))
print(kthLargest.add(9))
print(kthLargest.add(4))


# [[1,[]],[-3],[-2],[-4],[0],[4]]
kthLargest2 = KthLargest(1,[])
kthLargest2.add(-3)
kthLargest2.add(-2)
kthLargest2.add(-4)
kthLargest2.add(-0)
kthLargest2.add(4)