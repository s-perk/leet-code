'''
  Problem:
    Given a binary tree, find its minimum depth.

    The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

    Note: A leaf is a node with no children.

  I: root node
  O: int
  C:
  E:
    - root may be null?

  Strategy:
    - Pre-order recursion
    - return when we reach a node with no children
'''


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root) -> int:
        minDepth = float('inf') # infinity


        if not root:
            return 0

        def bfs(node, level):
            # Base:
            nonlocal minDepth
            if not node: return
            if (node.left == None) and (node.right == None):
                minDepth = min(minDepth, level)
                return


            # Recursive:
            bfs(node.left, level + 1)
            bfs(node.right, level + 1)

        bfs(root, 1)

        return minDepth



# ==== TESTING ====
from helper import BinaryTreeNode, BuildFunctions


# branch1 = BinaryTreeNode(9)
# branch3 = BinaryTreeNode(15)
# branch4 = BinaryTreeNode(7)
# branch2 = BinaryTreeNode(20, branch3, branch4)
# root = BinaryTreeNode(3, branch1, branch2)
root = BuildFunctions.buildBinaryTreeFromArray([3,9,20,None,None,15,7])
print(Solution.minDepth(None, root))



root2 = BinaryTreeNode(2, None, BinaryTreeNode(3, None, BinaryTreeNode(4, None, BinaryTreeNode(5, None, BinaryTreeNode(6, None, None)))))

print(Solution.minDepth(None, root2))