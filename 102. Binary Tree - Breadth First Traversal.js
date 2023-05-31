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
 * @return {number[][]}
 */
/*
  I: root
  O: array of array of numbers
  C:
  E:

  Strategy:
    - recurse through each level
    - keep track of each level to identify index
    - push onto array at index level
    - don't push onto array if null
*/
var levelOrderRecursion = function(root) {
  let result = []

  let recursion = (node, level) => {

    // Edge case: root is null
    if (node === null) {
      return
    }

    level++

    // Save results
    if (result[level] === undefined) {
      result[level] = [node.val]
    } else {
      result[level].push(node.val)
    }

    // Base (inherent, quit when we have no more children)

    // Recursive
    if (node.left !== null) {recursion(node.left, level)}
    if (node.right !== null) {recursion(node.right, level)}

  }

  recursion(root, -1)

  return result
};

var levelOrder = function(root) {
  let queue = [root]
  let result = []

  while (queue.length > 0) {
    var row = []
    var qlen = queue.length

    for (var i = 0; i < qlen; i++) {
      var node = queue.shift()
      row.push(node.val)

      if (node.left !== null) {queue.push(node.left)}
      if (node.right !== null) {queue.push(node.right)}
    }

    result.push(row)

  }

  return result
}

// ==== TESTING ====
const TreeNode = require('./helper.js').BinaryTreeNode

let berry1 = new TreeNode(15)
let berry2 = new TreeNode(7)

let branch1 = new TreeNode(9)
let branch2 = new TreeNode(20, berry1, berry2)

let root = new TreeNode(3, branch1, branch2)

let result = levelOrder(root)

console.log(result)