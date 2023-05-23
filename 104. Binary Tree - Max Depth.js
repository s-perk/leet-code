/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
  I: root
  O: integer (depth of tree)
  C:
  E:

  Strategy:
    - maintain max counter, and counter for each depth
    - recursively step through our tree
      - Base: stop when left and right are null
      - Recursive: on left and right
*/
var maxDepth = function(root) {
  let max = 0

  // Edge case: empty root
  if ((root === null) || (root === undefined)) {
    return root
  }

  let recursion = (node, currDepth) => {
    currDepth++

    if (currDepth > max) {
      max = currDepth
    }

    // Base
    if ((node.left === null) && (node.right === null)) {
      return
    }

    // Recursion
    if (node.left !== null) { recursion(node.left, currDepth)}
    if (node.right !== null) { recursion(node.right, currDepth)}

  }
  recursion(root, 0)

  return max

};


// ==== TESTING ====
let TreeNode = require('./helper.js').BinaryTreeNode

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

let node9 = new TreeNode(9)

let node15 = new TreeNode(15)
let node7 = new TreeNode(7)
let node20 = new TreeNode(20, node15, node7)

let root = new TreeNode(3, node9, node20)

let result = maxDepth(root)

console.log(inverted)