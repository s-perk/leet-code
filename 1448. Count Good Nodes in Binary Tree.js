/**
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.


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
  I: root node
  O: integer (count of good nodes)
  C:
  E:
    - root is always good (minimum we'll return is 1)

  Strategy:
    - preorder to recursively step through tree (because we need to known value of node, to know if left and right are valid)
    - pass in parent to check if value is greater/less than value (and therefore valid)
*/
var goodNodes = function(root) {
  // counter variable
  let count = 0

  // recursive function to run on tree
  // I: 1. tree node 2. parent value
  let recursion = (node, maxVal) => {
    // Base: if node === null
    if (node === null) {return}

    // check if node.val >= parent val
    if (node.val >= maxVal) {
      // if yes, increment counter and reset maxVal
      count++
      maxVal = node.val
    }


    // left recursion
    recursion(node.left, maxVal)

    // right recursion
    recursion(node.right, maxVal)
  }

  // call recursive function on root
  recursion(root, root.val)

  // return counter
  return count
};


// ==== TESTING ====
const TreeNode = require('./helper.js').BinaryTreeNode

let node3 = new TreeNode(3)
let node5 = new TreeNode(5)
let node6 = new TreeNode(1)
let node4 = new TreeNode(4, node6, node5)
let node2 = new TreeNode(1, node3)
let node1 = new TreeNode(3, node2, node4)

let result = goodNodes(node1)
console.log(result)