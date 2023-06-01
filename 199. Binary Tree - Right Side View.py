
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

'''
  I: root
  O: array of nums
  C:
  E:

  Strategy:
    - preorder recursion with right first
'''
class Solution:
    def rightSideView(self, root):
        tracker = {}

        def recursion(node, level):
            # Base
            if (node == None): return

            # Recursive
            recursion(node.right, level+1)

            try:
                tracker[level]
            except:
                tracker[level] = node.val

            recursion(node.left, level+1)

        recursion(root, 0)


        return [tracker[key] for key, val in enumerate(tracker)]





# ==== TESTING ====
from helper import BinaryTreeNode



node6 = BinaryTreeNode(6)
node5 = BinaryTreeNode(5)
node4 = BinaryTreeNode(4, node6)
node3 = BinaryTreeNode(3)
node2 = BinaryTreeNode(2, node4, node5)
node1 = BinaryTreeNode(1, node2, node3)

result = Solution.rightSideView(node1)

print(result)