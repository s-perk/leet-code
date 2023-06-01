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
  I: root
  O: array of numbers
  C:
  E:

  Strategy:
    - BFS tree
    - at each level, push last value onto array
*/
var rightSideView = function(root) {
  let array = []
  // let queue = [root]

  // while (queue.length > 0) {
  //   let node = queue.pop()

  //   if (node.left) {queue.unshift(node.left)}
  //   if node.right {queue.unshift(node.right)}
  // }

  let recursion = (node, level) => {
    // Base
    if (!node) {return}

    // Recursive (postorder - right first)
    recursion(node.right, level+1)

    // If we haven't already checked this level, save the value in the correct spot
    if (array[level] === undefined) {
      array[level] = node.val
    }

    recursion(node.left, level+1)
  }
  recursion(root, 0)

  return array
};



// ==== TESTING ====
const TreeNode = require('./helper.js').BinaryTreeNode

let node6 = new TreeNode(6)
let node5 = new TreeNode(5)
let node4 = new TreeNode(4, node6)
let node3 = new TreeNode(3)
let node2 = new TreeNode(2, node4, node5)
let node1 = new TreeNode(1, node2, node3)

let result = rightSideView(node1)

console.log(result)