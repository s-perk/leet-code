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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

/*
  I:
    1. root
    2. subroot to check
  O: boolean
  C: considered subroot if (and only if) values of subroot all exactly match root
  E:

  Strategy:
    - DFS through root using iterative/stack
    - if value equals root of subroot, then begin stack for subroot as well
    - if all popped values equal each other, then true, otherwise false
*/
var isSubtreeIterative = function(root, subRoot) {

  let stack = [root]
  let subStack = [subRoot]

  while (stack.length > 0) {
    let node = stack.pop()
    let subNode = subStack.pop()

    // console.log(node.val)

    // if current node equals next node in subStack, then we have at least a partial tree match
    if (node.val === subNode.val) {
      if (subNode.right) {subStack.push(subNode.right)}
      if (subNode.left) {subStack.push(subNode.left)}

      // if we reach end of stack, and current node still matches subnode, then we have a full match
      if (subStack.length === 0) {
        if ((!node.right) && (!node.left)) {
          return true
        } else {
          subStack = [subRoot]
        }

      }
    } else {
      subStack = [subRoot]
    }

    if (node.right) {stack.push(node.right)}
    if (node.left) {stack.push(node.left)}
  }

  return false
};

var isSubtree  = function(root, subRoot) {
  let stack = [root]

  while (stack.length > 0) {
    let node = stack.pop()

    if (isSameTree(node, subRoot)) {
      return true
    }

    if (node.right) {stack.push(node.right)}
    if (node.left) {stack.push(node.left)}
  }

  return false
}

// from problem 100:
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
const TreeNode = require('./helper.js').BinaryTreeNode

let node0 = new TreeNode(0)
let node1 = new TreeNode(1)
let node2 = new TreeNode(2, node0)
let node5 = new TreeNode(5)
let node4 = new TreeNode(4, node1, node2)
let node3 = new TreeNode(3, node4, node5)

let nodeSub1 = new TreeNode(1)
let nodeSub2 = new TreeNode(2)
let nodeSub4 = new TreeNode(4, nodeSub1, nodeSub2)


let nodeSubb3 = new TreeNode(3)
let nodeSubb2 = new TreeNode(2, nodeSubb3)

// console.log(isSubtree(node3, node4))
// console.log(isSubtree(node3, nodeSub4))
console.log(isSubtree(new TreeNode(1, new TreeNode(2), new TreeNode(3)), nodeSubb2))
