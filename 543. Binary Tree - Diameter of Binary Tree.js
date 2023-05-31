/**
 * Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
 *
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
  O: diameter
  C:
  E:

  Strategy:
    - Depth first search(want to know deepest branch on left and right)
      - nodes with no children will have to be the end point
      - maintain max diameter, and check with each iteration if the left + right is greater than it
*/
var diameterOfBinaryTree = function(root) {
  let max = 0

  // I: node
  // O: diameter
  let getDiameter = (node) => {
    // Base
    if (!node) {return 0}

    // Recursive
    let left = getDiameter(node.left)
    let right = getDiameter(node.right)

    max = Math.max(max, left + right)
    return 1 + Math.max(left, right)
  }

  getDiameter(root)

  return max
};


// ==== TESTING ====
const TreeNode = require('./helper.js').BinaryTreeNode


let node5 = new TreeNode(5)
let node4 = new TreeNode(4)
let node3 = new TreeNode(3)
let node2 = new TreeNode(2, node4, node5)
let node1 = new TreeNode(1, node2, node3)

let result = diameterOfBinaryTree(node1)
console.log(result)