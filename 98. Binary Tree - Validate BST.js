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
    - nodes equal in value are invalid

  Strategy:
    - Binary Search Tree = left subtree values are all lower than parent; right are higher
    - Use preorder traversal to check values, pass min/max value down to children
    - return false if ever invalid
    - parent node should define max of left side, and max of right side, all the way through
*/
var isValidBST = function(root) {
  let valid = true

  // Recursive function
  // I: 1. node 2. range where value must be between

  let preorder = (node, min, max) => {
    // Base: node is null (reached end of a branch), or if we found something invalid
    if ((node === null) || (!valid)) {return}


    // Check if node is between range
    // max will be null for left side, and min will be null for right side throughout
    if ((min !== null) && (node.val <= min.val)) {
      valid = false
      return
    }
    if ((max !== null) && (node.val >= max.val)) {
      valid = false
      return
    }


    // Recursive
    preorder(node.left, min, node)
    preorder(node.right, node, max)
  }

  preorder(root, null, null)

  return valid

};


// ==== TESTING ====
const TreeNode = require('./helper.js').BinaryTreeNode

var node1 = new TreeNode(1)
var node7 = new TreeNode(7)
var node3 = new TreeNode(3)
var node4 = new TreeNode(4)
var node6 = new TreeNode(6, node3, node7)
var node5 = new TreeNode(5, node4, node6)


var result = isValidBST(node5)
console.log(result)


// var node1 = new TreeNode(1)
// var node3 = new TreeNode(3)
// var node2 = new TreeNode(2, node1, node3)
// var result = isValidBST(node2)
// console.log(result)

