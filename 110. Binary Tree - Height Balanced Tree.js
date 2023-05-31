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
 * @return {boolean}
 */

/*
  I: root
  O: boolean
  C:
  E:

  Strategy:
    - Depth First Search
    - at each level, check if left and right are more than 1 apart
      - if yes, return false; otherwise true
*/
var isBalanced = function(root) {
  let balanced = true

  // I: node
  // O: depth of tree
  let dfs = (node) => {
    if ((!node) || (!balanced)) {return 0}

    let left = 1 + dfs(node.left)
    let right = 1 + dfs(node.right)

    if (Math.abs(left - right) > 1) {
      balanced = false
      return 0
    }

    // Return the max height between the two nodes
    return Math.max(left, right)
  }

  dfs(root)

  return balanced

};

// ==== TESTING ====
const TreeNode = require('./helper.js').BinaryTreeNode

let node6 = new TreeNode(6)
let node5 = new TreeNode(5)
let node4 = new TreeNode(4, node6)
let node3 = new TreeNode(3)
let node2 = new TreeNode(2, node4, node5)
let node1 = new TreeNode(1, node2, node3)

let result = isBalanced(node1)

console.log(result)