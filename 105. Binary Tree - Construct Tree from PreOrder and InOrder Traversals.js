/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

};

// ==== TESTING ====
const TreeNode = require('./helper.js').BinaryTreeNode

let nodeL = new TreeNode('L')
let nodeK = new TreeNode('K')
let nodeJ = new TreeNode('J')
let nodeI = new TreeNode('I')
let nodeH = new TreeNode('H')
let nodeG = new TreeNode('G', null, nodeL)
let nodeF = new TreeNode('F', nodeJ, nodeK)
let nodeE = new TreeNode('E')
let nodeD = new TreeNode('D', nodeH, nodeI)
let nodeC = new TreeNode('C', nodeF, nodeG)
let nodeB = new TreeNode('B', nodeD, nodeE)
let nodeA = new TreeNode('A', nodeB, nodeC)

