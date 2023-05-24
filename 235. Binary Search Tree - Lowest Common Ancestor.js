/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
  I:
    1. root
    2. node 1
    3. node 2
  O:  lowest common ancestor
  C:
    - The number of nodes in the tree is in the range [2, 105].
    - -109 <= Node.val <= 109
    - All Node.val are unique.
    - p != q
    - p and q will exist in the BST.
  E:
    - do we need to account for one (or both) of the nodes not being in tree?

  Strategy:
    - set lowest common ancestor to root (at very least this should be in there)
    - recurse until we find one of the nodes (if we do find one, and not the other, then set to lowest common denom)
      - continue searching for second - if found as a descendent of first, then it's the first, otherwise it's the root
*/
var lowestCommonAncestor = function(root, p, q) {

  let lca = root
  let level = 0
  let found = null // this will track the level at which we've found a match
  let recursion = (node) => {
    level++


    // Base
    if ((node.val === p.val) || (node.val === q.val)) {
      found = level
    }

    // Recursion
    if (node.left !== null) {recursion(node.left)}
    if (node.right !== null) {recursion(node.right)}
  }
  recursion(root)

  return lca

};


// ==== TESTING ====
let TreeNode = require('./helper.js').BinaryTreeNode


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

let berry1 = new TreeNode(3)
let berry2 = new TreeNode(5)

let leaf1 = new TreeNode(0)
let leaf2 = new TreeNode(4, berry1, berry2)
let leaf3 = new TreeNode(7)
let leaf4 = new TreeNode(1)

let branch1 = new TreeNode(2, leaf1, leaf2)
let branch2 = new TreeNode(8, leaf3, leaf4)

let root = new TreeNode(6, branch1, branch2)

let result = lowestCommonAncestor(root)

console.log(result)