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
 * @return {number[]}
 */

/*
  I: root node
  O: array of numbers
  C:
  E:

  Strategy:
    -
*/
var inorderTraversal = function(root) {
  let array = []

  let recursion = (node) => {
    // Base
    if (!node) {return}

    // Recursive
    recursion(node.left)
    array.push(node.val)
    recursion(node.right)
  }

  recursion(root)

  return array
};


// ===== TESTING =====
const TreeNode = require('./helper.js').BinaryTreeNode

let node3 = new TreeNode(3)
let node2 = new TreeNode(2, node3)
let node1 = new TreeNode(1, null, node2)

let result = inorderTraversal(node1)

console.log(result)
