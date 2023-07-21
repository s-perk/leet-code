/*
  Problem:
  Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

  I: Binary tree
  O: Boolean
  C:
  E:

  Strategy:
    - Breadth First Search
    - Check if level is a palindrome
      - if yes, continue
      - if no, return false
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { BinaryTreeNode, buildBinaryTreeFromArray } = require('./helper.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let queue = [root];

  while (queue.length > 0) {
    let len = queue.length;

    // Get all children and push onto level array
    for (var i = 0; i < len; i++) {
      node = queue.shift();
      if (node === null) {
        continue;
      } else if (node.val === null) {
        queue.push(null);
        queue.push(null);
        continue;
      }

      queue.push(node.left);
      queue.push(node.right);
    }

    // Loop through children to check if they're mirrored
    for (var i = 0; i < Math.floor(queue.length / 2); i++) {
      if (queue[i] === null && queue[queue.length - i - 1] === null) {
        continue;
      }

      try {
        if (queue[i].val === queue[queue.length - i - 1].val) {
          continue;
        } else {
          return false;
        }
      } catch {
        return false;
      }
    }
  }

  return true;
};

// ==== TESTING ====

console.log(isSymmetric(buildBinaryTreeFromArray([1, 2, 2, 3, 4, 4, 3]))); // true
console.log(isSymmetric(buildBinaryTreeFromArray([1, 2, 2, null, 3, null, 3]))); // false
console.log(isSymmetric(buildBinaryTreeFromArray([1, 2, 3]))); // false
