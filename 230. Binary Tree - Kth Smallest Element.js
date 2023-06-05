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
 * @param {number} k
 * @return {number}
 */



/*
  I: 1. root 2. k (int) smallest number
  O: value of kth smallest node
  C:
  E:

  Strategy:
    - inorder traversal - should evaluate binary tree from smallest to largest
    - maintain a counter, and return once we reach that point
*/
var kthSmallest = function(root, k) {

  let count = 1
  let val = null

  // Recursive function
  // I: node
  // O: node.val of kth element
  let inorder = (node) => {
    // Base
    if ((!node) || (val)) {return}

    // Recursive
    inorder(node.left)

    // Check if count === k
    // also return early if we already have a val from the first recursion on left side
    if (val !== null) {
      return
    } else if (count === k) {
      val = node.val
      return
    } else {
      count++
    }

    inorder(node.right)
  }

  inorder(root)

  return val
};


// ==== TESTING ====

const { buildBinaryTreeFromArray, TreeNode } = require('./helper.js');

let array = [31,30,48,3,null,38,49,0,16,35,47,null,null,null,2,15,27,33,37,39,null,1,null,5,null,22,28,32,34,36,null,null,43,null,null,4,11,19,23,null,29,null,null,null,null,null,null,40,46,null,null,7,14,17,21,null,26,null,null,null,41,44,null,6,10,13,null,null,18,20,null,25,null,null,42,null,45,null,null,8,null,12,null,null,null,null,null,24,null,null,null,null,null,null,9]
// let array = [5,3,6,2,4,null,null,1]

let tree = buildBinaryTreeFromArray(array)

let result = kthSmallest(tree, 1)
console.log(result)


// let node1 = new TreeNode(1)
// let node2 = new TreeNode(2, node1)
// let node4 = new TreeNode(4)
// let node6 = new TreeNode(6)
// let node3 = new TreeNode(3, node2, node4)
// let node5 = new TreeNode(5, node3, node6)

// let result = kthSmallest(node5, 1)
// console.log(result)

