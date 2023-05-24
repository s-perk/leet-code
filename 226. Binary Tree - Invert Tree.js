const TreeNode = require('./helper.js').BinaryTreeNode
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
 * @return {TreeNode}
 */

/*
  I: Root
  O: Root (inverted)
  C:
  E:

  Strategy:
    - Recursively step through tree
      - Base:
      - Recursive: has left or right
*/

var invertTree = function(root) {

  // Edge case: empty root
  if ((root === null) || (root === undefined)) {
    return root
  }

  let recursion = (node) => {
    //  Base
    if ((node.left === null) && (node.right === null)) {
      return
    }

    // Recursive
    let left = node.left
    node.left = node.right
    node.right = left

    if (node.left !== null) {invertTree(node.left)}
    if (node.right !== null) {invertTree(node.right)}

  }

  recursion(root)

  return root


};

// ==== TESTING ====

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
let node1 = new TreeNode(1)
let node3 = new TreeNode(3)
let node2 = new TreeNode(2, node1, node3)

let node6 = new TreeNode(6)
let node9 = new TreeNode(9)
let node7 = new TreeNode(7, node6, node9)

let root = new TreeNode(4, node2, node7)

let inverted = invertTree(root)

console.log(inverted)

