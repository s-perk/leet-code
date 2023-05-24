/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/*
  I: two trees
  O: boolean
  C:
  E:

  Strategy:
    - check if values are available at left and right node
    - step through each tree recursively and check values
*/
var isSameTree = function(p, q) {
  let same = true
  let recursion = (node1, node2) => {


    // If not equal, return false early
    // 1. if one node is null and the other is not (set to false)
    // 2. if one null is completely null
    // 3. if one value is not equal to the other
    if (((node1 === null) && (node2 !== null)) || ((node1 !== null) && (node2 === null))) {
      same = false
    } else if ((node1 === null) && (node2 === null)) {
      return
    } else if (node1.val !== node2.val) {
      same = false
    }

    // base: no nodes left, or we've already determined it's not the same
    if ((!same)) {
      return
    }


    // recursive
    if ((node1.left !== null) || (node2.left !== null)) {recursion(node1.left, node2.left)}
    if ((node1.right !== null) || (node2.right !== null)) {recursion(node1.right, node2.right)}

  }

  recursion(p, q)

  return same
};


// ==== TESTING ====
let TreeNode = require('./helper.js').BinaryTreeNode

// Input: root = [1, 2, 1], [1, 2, 1]
// Output: true


let branch1 = new TreeNode(2)
let branch2 = new TreeNode(1)
let root1 = new TreeNode(1)

let branch3 = new TreeNode(2)
let branch4 = new TreeNode(2)
let root2 = new TreeNode(1, null, branch4)

let result = isSameTree(root1, root2)

console.log(result)