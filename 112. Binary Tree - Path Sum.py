'''
  Problem:
  Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

  A leaf is a node with no children.



  I: 1. Root node 2. Target sum
  O: boolean (true if adds up to sum)
  C:
  E:
    - no root

  Strategy:
    - DFS recursion
    - Base: if greater than sum, or if found
'''


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root, targetSum: int) -> bool:
        found = False

        if not root: return found

        def dfs(node, total):
            # Base:
            nonlocal found
            if found: return
            if not node: return

            total += node.val
            if (total == targetSum and node.left == None and node.right == None):
                found = True
                return

            # Recursive
            dfs(node.left, total)
            dfs(node.right, total)

        dfs(root, 0)

        return found


# ===== TESTING =====
from helper import BuildFunctions

root = BuildFunctions.buildBinaryTreeFromArray([5,4,8,11,None,13,4,7,2,None,None,None,1])
print(Solution.hasPathSum(None, root, 22))
